/**
 * Everything you hear is synthesised at runtime — there are no audio files in
 * this project and there never will be.
 *
 * This module owns the context, the master bus, the engine and the wind. The
 * island's own noises live in `ambience.js`.
 */
import { clamp } from '../core/utils.js';
import { createAmbience } from './ambience.js';

const MASTER_VOLUME = 0.13;

export function createAudio() {
  let ctx = null;
  let nodes = null;
  let ambience = null;
  let enabled = true;
  let started = false;

  /** One second of noise, shared by the wind, the surf and the gulls. */
  function noiseBuffer(context) {
    const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      // Slightly brown — gentler on the ear over long flights.
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
    return buffer;
  }

  function start() {
    if (started || !enabled) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    started = true;

    ctx = new AudioCtx();
    const master = ctx.createGain();
    master.gain.value = MASTER_VOLUME;
    master.connect(ctx.destination);

    const engineBus = ctx.createGain();
    engineBus.gain.value = 0.25;
    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 1200;
    engineBus.connect(lowpass).connect(master);

    // Engine: a sawtooth for the body, a triangle an octave up for the bark,
    // and a slow tremolo that stands in for the propeller chop.
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc2.type = 'triangle';
    osc1.frequency.value = 74;
    osc2.frequency.value = 148;
    const chop = ctx.createGain();
    chop.gain.value = 1;
    const chopLfo = ctx.createOscillator();
    const chopDepth = ctx.createGain();
    chopLfo.frequency.value = 11;
    chopDepth.gain.value = 0.22;
    chopLfo.connect(chopDepth).connect(chop.gain);
    osc1.connect(chop);
    osc2.connect(chop);
    chop.connect(engineBus);
    osc1.start();
    osc2.start();
    chopLfo.start();

    // Wind: noise through a band that opens up with speed.
    const buffer = noiseBuffer(ctx);
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.value = 700;
    windFilter.Q.value = 0.7;
    const windGain = ctx.createGain();
    windGain.gain.value = 0.05;
    noise.connect(windFilter).connect(windGain).connect(master);
    noise.start();

    nodes = { master, engineBus, lowpass, osc1, osc2, chopLfo, windFilter, windGain };
    ambience = createAmbience(ctx, master, buffer);

    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  }

  function update(dt, flight, wind, camera, lookAt) {
    if (!ctx || !nodes) return;
    const now = ctx.currentTime;
    const speed = flight.speed;

    nodes.osc1.frequency.setTargetAtTime(54 + speed * 1.15 + flight.throttle * 14, now, 0.09);
    nodes.osc2.frequency.setTargetAtTime(108 + speed * 2.1, now, 0.09);
    nodes.chopLfo.frequency.setTargetAtTime(8 + speed * 0.28, now, 0.15);
    nodes.engineBus.gain.setTargetAtTime(
      0.1 + flight.throttle * 0.22 + (flight.boosting ? 0.07 : 0),
      now,
      0.12
    );
    nodes.lowpass.frequency.setTargetAtTime(700 + speed * 22, now, 0.2);

    const windLevel = 0.018 + speed / 260 + wind.gust * 0.03 + flight.contact * 0.03;
    nodes.windGain.gain.setTargetAtTime(clamp(windLevel, 0, 0.2), now, 0.25);
    nodes.windFilter.frequency.setTargetAtTime(420 + speed * 16 + wind.gust * 260, now, 0.3);

    ambience?.update(dt, flight, camera, lookAt);
    updateListener(camera, lookAt);
  }

  function updateListener(camera, lookAt) {
    const listener = ctx.listener;
    const { x, y, z } = camera.position;
    if (listener.positionX) {
      const now = ctx.currentTime;
      listener.positionX.setTargetAtTime(x, now, 0.04);
      listener.positionY.setTargetAtTime(y, now, 0.04);
      listener.positionZ.setTargetAtTime(z, now, 0.04);
      const fx = lookAt.x - x;
      const fy = lookAt.y - y;
      const fz = lookAt.z - z;
      const length = Math.hypot(fx, fy, fz) || 1;
      listener.forwardX.setTargetAtTime(fx / length, now, 0.04);
      listener.forwardY.setTargetAtTime(fy / length, now, 0.04);
      listener.forwardZ.setTargetAtTime(fz / length, now, 0.04);
      listener.upX.setTargetAtTime(0, now, 0.04);
      listener.upY.setTargetAtTime(1, now, 0.04);
      listener.upZ.setTargetAtTime(0, now, 0.04);
    } else if (listener.setPosition) {
      listener.setPosition(x, y, z);
      const fx = lookAt.x - x;
      const fy = lookAt.y - y;
      const fz = lookAt.z - z;
      const length = Math.hypot(fx, fy, fz) || 1;
      listener.setOrientation(fx / length, fy / length, fz / length, 0, 1, 0);
    }
  }

  function setEnabled(value) {
    enabled = value;
    if (enabled && !started) start();
    if (ctx && nodes) {
      nodes.master.gain.setTargetAtTime(enabled ? MASTER_VOLUME : 0, ctx.currentTime, 0.1);
      if (enabled && ctx.state === 'suspended') ctx.resume().catch(() => {});
    }
    return enabled;
  }

  function setPaused(paused) {
    if (!ctx) return;
    if (paused) ctx.suspend().catch(() => {});
    else if (enabled) ctx.resume().catch(() => {});
  }

  return {
    start,
    update,
    setEnabled,
    setPaused,
    toggle: () => setEnabled(!enabled),
    get enabled() {
      return enabled;
    },
    get ambience() {
      return ambience;
    },
  };
}
