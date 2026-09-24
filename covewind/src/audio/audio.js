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

    // Engine: a little radial. Three layers, all driven by one rpm:
    //  - the exhaust: a pulse train of firing strokes (a custom waveform
    //    with falling harmonics), saturated and low-passed into a thump;
    //  - the propeller: blade-pass buzz through a moving band, which is most
    //    of what you hear from outside an aeroplane;
    //  - roughness: a slow random wobble on the rpm and filtered noise, so
    //    it never sounds like a synth held on one note.
    const engineBus = ctx.createGain();
    engineBus.gain.value = 0.25;
    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 1400;
    lowpass.Q.value = 0.5;
    engineBus.connect(lowpass).connect(master);

    const harmonics = 24;
    const real = new Float32Array(harmonics);
    const imag = new Float32Array(harmonics);
    for (let n = 1; n < harmonics; n++) {
      // A sharp pulse: strong low harmonics, a bump around the 3rd-5th
      // (the "bark"), then a steady roll-off.
      imag[n] = (1 / Math.pow(n, 0.9)) * (n >= 3 && n <= 5 ? 1.6 : 1) * (n % 2 ? 1 : 0.7);
    }
    const pulseWave = ctx.createPeriodicWave(real, imag);

    const exhaust = ctx.createOscillator();
    exhaust.setPeriodicWave(pulseWave);
    exhaust.frequency.value = 40;
    const shaper = ctx.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < curve.length; i++) {
      const x = (i / (curve.length - 1)) * 2 - 1;
      curve[i] = Math.tanh(x * 2.6) * 0.8;
    }
    shaper.curve = curve;
    shaper.oversample = '2x';
    const exhaustGain = ctx.createGain();
    exhaustGain.gain.value = 0.55;
    const exhaustTone = ctx.createBiquadFilter();
    exhaustTone.type = 'lowpass';
    exhaustTone.frequency.value = 520;
    exhaust.connect(shaper).connect(exhaustTone).connect(exhaustGain).connect(engineBus);

    // Firing isn't perfectly even: an amplitude flutter at the firing rate.
    const flutter = ctx.createGain();
    flutter.gain.value = 1;
    const flutterLfo = ctx.createOscillator();
    flutterLfo.type = 'triangle';
    flutterLfo.frequency.value = 20;
    const flutterDepth = ctx.createGain();
    flutterDepth.gain.value = 0.25;
    flutterLfo.connect(flutterDepth).connect(flutter.gain);
    exhaustGain.disconnect();
    exhaustGain.connect(flutter).connect(engineBus);

    const prop = ctx.createOscillator();
    prop.type = 'sawtooth';
    prop.frequency.value = 80;
    const propBand = ctx.createBiquadFilter();
    propBand.type = 'bandpass';
    propBand.frequency.value = 240;
    propBand.Q.value = 1.4;
    const propGain = ctx.createGain();
    propGain.gain.value = 0.18;
    prop.connect(propBand).connect(propGain).connect(engineBus);

    // Rpm wobble: a slow random-ish drift shared by everything.
    const wobble = ctx.createOscillator();
    wobble.frequency.value = 0.7;
    const wobbleDepth = ctx.createGain();
    wobbleDepth.gain.value = 1.2;
    wobble.connect(wobbleDepth);
    wobbleDepth.connect(exhaust.frequency);
    wobbleDepth.connect(prop.frequency);

    exhaust.start();
    prop.start();
    flutterLfo.start();
    wobble.start();

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

    // Mechanical grit under the exhaust: noise in a narrow band.
    const grit = ctx.createBufferSource();
    grit.buffer = buffer;
    grit.loop = true;
    grit.playbackRate.value = 1.7;
    const gritBand = ctx.createBiquadFilter();
    gritBand.type = 'bandpass';
    gritBand.frequency.value = 900;
    gritBand.Q.value = 2;
    const gritGain = ctx.createGain();
    gritGain.gain.value = 0.05;
    grit.connect(gritBand).connect(gritGain).connect(engineBus);
    grit.start();

    nodes = { master, engineBus, lowpass, exhaust, exhaustTone, prop, propBand, flutterLfo, gritBand, gritGain, windFilter, windGain };
    ambience = createAmbience(ctx, master, buffer);

    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  }

  function update(dt, flight, wind, camera, lookAt) {
    if (!ctx || !nodes) return;
    const now = ctx.currentTime;
    const speed = flight.speed;

    // One rpm drives it all: mostly throttle, a little from airspeed as
    // the propeller windmills, and a surge on boost.
    const rpm = 900 + flight.throttle * 1500 + speed * 9 + (flight.boosting ? 450 : 0);
    const firing = (rpm / 60) * 2.5; // a five-cylinder four-stroke
    const blade = (rpm / 60) * 2; // two blades
    nodes.exhaust.frequency.setTargetAtTime(firing, now, 0.12);
    nodes.flutterLfo.frequency.setTargetAtTime(firing * 0.5, now, 0.12);
    nodes.prop.frequency.setTargetAtTime(blade, now, 0.12);
    nodes.propBand.frequency.setTargetAtTime(blade * 3 + speed * 4, now, 0.2);
    nodes.exhaustTone.frequency.setTargetAtTime(320 + flight.throttle * 520 + (flight.boosting ? 300 : 0), now, 0.15);
    nodes.gritBand.frequency.setTargetAtTime(600 + rpm * 0.3, now, 0.2);
    nodes.gritGain.gain.setTargetAtTime(0.03 + flight.throttle * 0.05, now, 0.2);
    nodes.engineBus.gain.setTargetAtTime(
      0.12 + flight.throttle * 0.2 + (flight.boosting ? 0.08 : 0),
      now,
      0.12
    );
    nodes.lowpass.frequency.setTargetAtTime(900 + speed * 18 + flight.throttle * 600, now, 0.2);

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
