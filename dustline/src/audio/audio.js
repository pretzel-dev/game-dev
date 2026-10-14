/**
 * Everything you hear is synthesised: a buzzy little engine that shifts
 * through its gears, tyres scrabbling on sand and squealing on tarmac, the
 * wind, and the thumps of landing. No audio files.
 */
const MASTER = 0.16;
const GEARS = [0, 9, 17, 25, 34, 44, 70]; // m/s where each gear starts

export function createAudio() {
  let ctx = null;
  let nodes = null;
  let enabled = true;
  let noise = null;

  function noiseBuffer(c) {
    const b = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }

  function loopNoise(rate = 1) {
    const s = ctx.createBufferSource();
    s.buffer = noise;
    s.loop = true;
    s.playbackRate.value = rate;
    s.start();
    return s;
  }

  function start() {
    if (ctx || !enabled) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    noise = noiseBuffer(ctx);
    const master = ctx.createGain();
    master.gain.value = MASTER;
    master.connect(ctx.destination);

    // Engine: two detuned saws and a square an octave down, through a
    // soft clipper and a lowpass that opens with throttle.
    const engine = ctx.createGain();
    engine.gain.value = 0.2;
    const tone = ctx.createBiquadFilter();
    tone.type = 'lowpass';
    tone.frequency.value = 900;
    tone.Q.value = 2;
    const shaper = ctx.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < curve.length; i++) curve[i] = Math.tanh(((i / 1023) * 2 - 1) * 2.4);
    shaper.curve = curve;
    shaper.connect(tone).connect(engine).connect(master);
    const oscs = [
      ['sawtooth', 1, 0.5],
      ['sawtooth', 1.007, 0.4],
      ['square', 0.5, 0.35],
    ].map(([type, mul, gain]) => {
      const o = ctx.createOscillator();
      o.type = type;
      const g = ctx.createGain();
      g.gain.value = gain;
      o.connect(g).connect(shaper);
      o.start();
      return { o, mul };
    });

    // Tyres on sand: low, gritty rumble.
    const gravel = ctx.createBiquadFilter();
    gravel.type = 'bandpass';
    gravel.frequency.value = 380;
    gravel.Q.value = 0.8;
    const gravelGain = ctx.createGain();
    gravelGain.gain.value = 0;
    loopNoise(0.7).connect(gravel).connect(gravelGain).connect(master);

    // Tyres on tarmac sliding: a squeal.
    const squeal = ctx.createBiquadFilter();
    squeal.type = 'bandpass';
    squeal.frequency.value = 1700;
    squeal.Q.value = 9;
    const squealGain = ctx.createGain();
    squealGain.gain.value = 0;
    loopNoise(1).connect(squeal).connect(squealGain).connect(master);

    // Wind.
    const wind = ctx.createBiquadFilter();
    wind.type = 'bandpass';
    wind.frequency.value = 600;
    wind.Q.value = 0.6;
    const windGain = ctx.createGain();
    windGain.gain.value = 0;
    loopNoise(0.5).connect(wind).connect(windGain).connect(master);

    // Boost: a hiss that rises.
    const hiss = ctx.createBiquadFilter();
    hiss.type = 'highpass';
    hiss.frequency.value = 2000;
    const hissGain = ctx.createGain();
    hissGain.gain.value = 0;
    loopNoise(1.3).connect(hiss).connect(hissGain).connect(master);

    nodes = { master, engine, tone, oscs, gravelGain, gravel, squealGain, windGain, wind, hissGain };
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  }

  let rpm = 0.2;
  let gear = 1;

  function update(dt, car, input) {
    if (!ctx || !nodes) return;
    const now = ctx.currentTime;
    const v = Math.abs(car.forwardSpeed);
    // Gearbox: pick the gear for this speed; rpm runs through it.
    while (gear < GEARS.length - 2 && v > GEARS[gear + 1]) gear++;
    while (gear > 1 && v < GEARS[gear] - 2) gear--;
    const lo = GEARS[gear];
    const hi = GEARS[gear + 1];
    let target = 0.25 + 0.7 * Math.min(1, Math.max(0, (v - lo) / (hi - lo)));
    if (gear === 1) target = 0.2 + 0.75 * Math.min(1, v / hi);
    // In the air (or spinning on sand) the engine is free to rev.
    if (!car.grounded && input.throttle > 0) target = 0.95;
    if (car.grounded && car.slip > 0.4 && input.throttle > 0) target = Math.min(1, target + 0.25);
    rpm += (target - rpm) * Math.min(1, dt * (target > rpm ? 6 : 9));
    const base = 46 + rpm * 150;
    for (const { o, mul } of nodes.oscs) o.frequency.setTargetAtTime(base * mul, now, 0.03);
    nodes.tone.frequency.setTargetAtTime(500 + rpm * 1400 + input.throttle * 700, now, 0.05);
    nodes.engine.gain.setTargetAtTime(0.1 + input.throttle * 0.12 + rpm * 0.05, now, 0.06);

    const onGround = car.wheels.filter((w) => w.contact && w.surface === 'ground').length / 4;
    const onTrack = car.wheels.filter((w) => w.contact && w.surface === 'track').length / 4;
    nodes.gravelGain.gain.setTargetAtTime(onGround * Math.min(0.5, car.speed / 40 + car.slip * 0.4), now, 0.05);
    nodes.gravel.frequency.setTargetAtTime(220 + car.speed * 9, now, 0.1);
    nodes.squealGain.gain.setTargetAtTime(onTrack * Math.max(0, car.slip - 0.35) * 0.35, now, 0.04);
    nodes.windGain.gain.setTargetAtTime(Math.min(0.4, car.speed / 120 + (car.grounded ? 0 : 0.06)), now, 0.2);
    nodes.wind.frequency.setTargetAtTime(300 + car.speed * 14, now, 0.2);
    nodes.hissGain.gain.setTargetAtTime(input.boost ? 0.12 : car.onPad ? 0.08 : 0, now, 0.08);
  }

  /** A landing or a knock: a low thump and a puff of grit. */
  function thump(strength = 0.5) {
    if (!ctx || !nodes) return;
    const now = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(110, now);
    o.frequency.exponentialRampToValueAtTime(38, now + 0.25);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.6 * strength + 0.1, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    o.connect(g).connect(nodes.master);
    o.start(now);
    o.stop(now + 0.4);
    const n = ctx.createBufferSource();
    n.buffer = noise;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 900;
    const ng = ctx.createGain();
    ng.gain.setValueAtTime(0.4 * strength, now);
    ng.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
    n.connect(f).connect(ng).connect(nodes.master);
    n.start(now);
    n.stop(now + 0.3);
  }

  /** A bright rising blip for boost pads and tricks. */
  function chime(pitch = 1) {
    if (!ctx || !nodes) return;
    const now = ctx.currentTime;
    for (const [mul, delay] of [
      [1, 0],
      [1.5, 0.07],
    ]) {
      const o = ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.setValueAtTime(520 * pitch * mul, now + delay);
      o.frequency.exponentialRampToValueAtTime(880 * pitch * mul, now + delay + 0.12);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, now + delay);
      g.gain.exponentialRampToValueAtTime(0.12, now + delay + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.3);
      o.connect(g).connect(nodes.master);
      o.start(now + delay);
      o.stop(now + delay + 0.35);
    }
  }

  function setEnabled(value) {
    enabled = value;
    if (enabled && !ctx) start();
    if (ctx && nodes) {
      nodes.master.gain.setTargetAtTime(enabled ? MASTER : 0, ctx.currentTime, 0.1);
      if (enabled && ctx.state === 'suspended') ctx.resume().catch(() => {});
    }
    return enabled;
  }

  return {
    start,
    update,
    thump,
    chime,
    setEnabled,
    toggle: () => setEnabled(!enabled),
    setPaused(p) {
      if (!ctx) return;
      if (p) ctx.suspend().catch(() => {});
      else if (enabled) ctx.resume().catch(() => {});
    },
    get enabled() {
      return enabled;
    },
  };
}
