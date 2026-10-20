/**
 * Everything you hear is synthesised, no audio files: a chuggy diesel
 * engine, the two-tone siren (nee-naw), the air horn, the whoosh of the
 * hose, crackles from the fire, and when it goes out a crowd that claps
 * and cheers "yaaay!" with a little chime on top. Plus kitten meows,
 * giggles, a bump or two, and the ice cream van's tune.
 */
const MASTER = 0.5;

export function createAudio() {
  let ctx = null;
  let enabled = true;
  let paused = false;
  let n = null; // nodes
  let noise = null;
  let claps = null;

  function noiseBuffer(c, seconds = 2) {
    const b = c.createBuffer(1, c.sampleRate * seconds, c.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }

  /** A few seconds of a crowd clapping: lots of short, bright bursts. */
  function clapBuffer(c) {
    const seconds = 3.2;
    const b = c.createBuffer(1, c.sampleRate * seconds, c.sampleRate);
    const d = b.getChannelData(0);
    const sr = c.sampleRate;
    for (let k = 0; k < 520; k++) {
      const t = Math.random() ** 1.6 * seconds * 0.95;
      const env = Math.min(1, t * 3) * (1 - t / seconds);
      const at = Math.floor(t * sr);
      const len = Math.floor(sr * (0.012 + Math.random() * 0.02));
      const amp = (0.25 + Math.random() * 0.5) * env;
      for (let i = 0; i < len && at + i < d.length; i++) d[at + i] += (Math.random() * 2 - 1) * amp * Math.exp(-i / (len * 0.25));
    }
    return b;
  }

  function start() {
    if (ctx || !enabled) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    noise = noiseBuffer(ctx);
    claps = clapBuffer(ctx);
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 4;
    const master = ctx.createGain();
    master.gain.value = MASTER;
    master.connect(comp).connect(ctx.destination);

    // Diesel engine: a low saw and square, chugging through a lowpass.
    const engine = ctx.createGain();
    engine.gain.value = 0.0;
    const tone = ctx.createBiquadFilter();
    tone.type = 'lowpass';
    tone.frequency.value = 320;
    tone.Q.value = 3;
    tone.connect(engine).connect(master);
    const e1 = ctx.createOscillator();
    e1.type = 'sawtooth';
    const e2 = ctx.createOscillator();
    e2.type = 'square';
    const e2g = ctx.createGain();
    e2g.gain.value = 0.4;
    e1.connect(tone);
    e2.connect(e2g).connect(tone);
    // The chug: an LFO on the engine's volume.
    const chug = ctx.createOscillator();
    chug.type = 'square';
    const chugDepth = ctx.createGain();
    chugDepth.gain.value = 0.05;
    chug.connect(chugDepth).connect(engine.gain);
    e1.start();
    e2.start();
    chug.start();

    // The siren: a brassy two-tone.
    const sirenOsc = ctx.createOscillator();
    sirenOsc.type = 'sawtooth';
    const sirenOsc2 = ctx.createOscillator();
    sirenOsc2.type = 'square';
    const sirenTone = ctx.createBiquadFilter();
    sirenTone.type = 'lowpass';
    sirenTone.frequency.value = 2200;
    const sirenGain = ctx.createGain();
    sirenGain.gain.value = 0;
    const s2g = ctx.createGain();
    s2g.gain.value = 0.3;
    sirenOsc.connect(sirenTone);
    sirenOsc2.connect(s2g).connect(sirenTone);
    sirenTone.connect(sirenGain).connect(master);
    sirenOsc.start();
    sirenOsc2.start();

    // The hose: a hiss with a gurgle in it.
    const hose = ctx.createBufferSource();
    hose.buffer = noise;
    hose.loop = true;
    const hoseBand = ctx.createBiquadFilter();
    hoseBand.type = 'bandpass';
    hoseBand.frequency.value = 1400;
    hoseBand.Q.value = 0.6;
    const hoseGain = ctx.createGain();
    hoseGain.gain.value = 0;
    hose.connect(hoseBand).connect(hoseGain).connect(master);
    hose.start();

    // Splashes where it lands: lower, softer.
    const splashSrc = ctx.createBufferSource();
    splashSrc.buffer = noise;
    splashSrc.loop = true;
    splashSrc.playbackRate.value = 0.6;
    const splashBand = ctx.createBiquadFilter();
    splashBand.type = 'lowpass';
    splashBand.frequency.value = 900;
    const splashGain = ctx.createGain();
    splashGain.gain.value = 0;
    splashSrc.connect(splashBand).connect(splashGain).connect(master);
    splashSrc.start();

    n = { master, engine, tone, e1, e2, chug, sirenOsc, sirenOsc2, sirenGain, hoseGain, splashGain, crackleT: 0, vanT: 0 };
  }

  const now = () => ctx.currentTime;

  function env(gainNode, t0, attack, peak, decay) {
    gainNode.gain.setValueAtTime(0.0001, t0);
    gainNode.gain.exponentialRampToValueAtTime(peak, t0 + attack);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, t0 + attack + decay);
  }

  function blip(freq, t0, dur, type = 'sine', peak = 0.2, glide = 1) {
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (glide !== 1) o.frequency.exponentialRampToValueAtTime(freq * glide, t0 + dur);
    const g = ctx.createGain();
    o.connect(g).connect(n.master);
    env(g, t0, 0.01, peak, dur);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }

  function noiseHit(t0, dur, freq, q, peak, type = 'bandpass') {
    const s = ctx.createBufferSource();
    s.buffer = noise;
    s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    s.connect(f).connect(g).connect(n.master);
    env(g, t0, 0.003, peak, dur);
    s.start(t0, Math.random());
    s.stop(t0 + dur + 0.05);
  }

  /** One "yaaay!" voice: a rising vowel through two formants. */
  function yay(t0, pitch) {
    const o = ctx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(pitch, t0);
    o.frequency.exponentialRampToValueAtTime(pitch * 1.45, t0 + 0.32);
    o.frequency.exponentialRampToValueAtTime(pitch * 1.25, t0 + 0.9);
    const vib = ctx.createOscillator();
    vib.frequency.value = 6 + Math.random() * 2;
    const vibG = ctx.createGain();
    vibG.gain.value = pitch * 0.03;
    vib.connect(vibG).connect(o.frequency);
    const f1 = ctx.createBiquadFilter();
    f1.type = 'bandpass';
    f1.frequency.setValueAtTime(500, t0);
    f1.frequency.linearRampToValueAtTime(850, t0 + 0.25);
    f1.Q.value = 6;
    const f2 = ctx.createBiquadFilter();
    f2.type = 'bandpass';
    f2.frequency.setValueAtTime(2000, t0);
    f2.frequency.linearRampToValueAtTime(1300, t0 + 0.25);
    f2.Q.value = 7;
    const g = ctx.createGain();
    o.connect(f1).connect(g);
    o.connect(f2).connect(g);
    g.connect(n.master);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.5, t0 + 0.08);
    g.gain.setValueAtTime(0.5, t0 + 0.5);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.1);
    o.start(t0);
    vib.start(t0);
    o.stop(t0 + 1.2);
    vib.stop(t0 + 1.2);
  }

  const ok = () => ctx && enabled && !paused;

  return {
    get enabled() {
      return enabled;
    },
    start() {
      start();
      if (ctx?.state === 'suspended') ctx.resume();
    },
    setEnabled(on) {
      enabled = on;
      if (!on && ctx) ctx.suspend();
      if (on) {
        start();
        ctx?.resume();
      }
    },
    toggle() {
      this.setEnabled(!enabled);
      return enabled;
    },
    setPaused(p) {
      paused = p;
      if (!ctx) return;
      if (p) ctx.suspend();
      else if (enabled) ctx.resume();
    },

    /** Every frame: engine, siren, hose and the fire's crackle. */
    update(dt, s) {
      if (!ok()) return;
      const t = now();
      const sp = Math.abs(s.speed);
      const rpm = 36 + sp * 3.2 + s.throttle * 6;
      n.e1.frequency.setTargetAtTime(rpm, t, 0.1);
      n.e2.frequency.setTargetAtTime(rpm * 2, t, 0.1);
      n.chug.frequency.setTargetAtTime(rpm / 4, t, 0.1);
      n.tone.frequency.setTargetAtTime(260 + sp * 30 + s.throttle * 150, t, 0.15);
      n.engine.gain.setTargetAtTime(0.12 + Math.min(0.12, sp * 0.01) + s.throttle * 0.05, t, 0.2);

      // Nee-naw: two notes, swapping a little more than once a second.
      const hi = Math.floor(s.time / 0.62) % 2 === 0;
      const f = hi ? 622 : 466;
      n.sirenOsc.frequency.setTargetAtTime(f, t, 0.012);
      n.sirenOsc2.frequency.setTargetAtTime(f * 0.5, t, 0.012);
      n.sirenGain.gain.setTargetAtTime(s.siren ? 0.085 : 0, t, 0.05);

      n.hoseGain.gain.setTargetAtTime(s.spraying ? 0.24 : 0, t, 0.06);
      n.splashGain.gain.setTargetAtTime(Math.min(0.2, s.splashes * 0.012), t, 0.1);

      // Crackle, louder the nearer the fire.
      if (s.fireNear != null) {
        n.crackleT -= dt;
        const loud = Math.max(0, 1 - s.fireNear / 50) * s.fireHp;
        if (n.crackleT <= 0 && loud > 0.02) {
          n.crackleT = 0.03 + Math.random() * 0.12;
          noiseHit(t, 0.02 + Math.random() * 0.04, 1500 + Math.random() * 3000, 2, 0.05 + loud * 0.18);
          if (Math.random() < 0.2) noiseHit(t, 0.12, 300, 1, loud * 0.12, 'lowpass');
        }
      }

      // The ice cream van plays its tune when you're near.
      n.vanT -= dt;
      if (s.vanNear != null && s.vanNear < 28 && n.vanT <= 0) {
        n.vanT = 14;
        const tune = [784, 988, 1175, 988, 784, 659, 784, 988, 784];
        tune.forEach((fr, k) => blip(fr, t + k * 0.18, 0.2, 'triangle', 0.1));
      }
    },

    horn() {
      if (!ok()) return;
      const t = now();
      for (const fr of [185, 233, 277]) {
        const o = ctx.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = fr;
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 1400;
        const g = ctx.createGain();
        o.connect(lp).connect(g).connect(n.master);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.16, t + 0.03);
        g.gain.setValueAtTime(0.16, t + 0.5);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
        o.start(t);
        o.stop(t + 0.75);
      }
    },

    /** A bright brass bell: ding! */
    bell(times = 2) {
      if (!ok()) return;
      const t = now();
      for (let k = 0; k < times; k++) {
        for (const [mul, a] of [
          [1, 0.18],
          [2.76, 0.08],
          [5.4, 0.05],
        ])
          blip(1046 * mul, t + k * 0.32, 1.2, 'sine', a);
      }
    },

    cheer() {
      if (!ok()) return;
      const t = now();
      // Clapping.
      const s = ctx.createBufferSource();
      s.buffer = claps;
      const f = ctx.createBiquadFilter();
      f.type = 'highpass';
      f.frequency.value = 900;
      const g = ctx.createGain();
      g.gain.value = 0.55;
      s.connect(f).connect(g).connect(n.master);
      s.start(t + 0.1);
      // Yaaay!
      for (let k = 0; k < 7; k++) yay(t + Math.random() * 0.25, 220 + Math.random() * 260);
      // And a chime: up the arpeggio.
      [523, 659, 784, 1046, 1318].forEach((fr, k) => blip(fr, t + 0.05 + k * 0.09, 0.6, 'triangle', 0.12));
    },

    meow() {
      if (!ok()) return;
      const t = now();
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(520, t);
      o.frequency.exponentialRampToValueAtTime(880, t + 0.15);
      o.frequency.exponentialRampToValueAtTime(480, t + 0.55);
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.setValueAtTime(900, t);
      f.frequency.linearRampToValueAtTime(1800, t + 0.2);
      f.frequency.linearRampToValueAtTime(800, t + 0.55);
      f.Q.value = 4;
      const g = ctx.createGain();
      o.connect(f).connect(g).connect(n.master);
      env(g, t, 0.04, 0.35, 0.55);
      o.start(t);
      o.stop(t + 0.65);
    },

    giggle() {
      if (!ok()) return;
      const t = now();
      const base = 700 + Math.random() * 400;
      for (let k = 0; k < 3; k++) blip(base * (1 + k * 0.04), t + k * 0.1, 0.08, 'triangle', 0.08, 1.2);
    },

    bump(strength = 0.5) {
      if (!ok()) return;
      const t = now();
      blip(90, t, 0.25, 'sine', 0.3 * strength + 0.1, 0.45);
      noiseHit(t, 0.08, 400, 1, 0.1 * strength, 'lowpass');
    },

    splash(strength = 0.5) {
      if (!ok()) return;
      const t = now();
      noiseHit(t, 0.4, 700, 0.8, 0.2 * strength + 0.05, 'lowpass');
    },

    ladder(up) {
      if (!ok()) return;
      const t = now();
      const o = ctx.createOscillator();
      o.type = 'square';
      o.frequency.setValueAtTime(up ? 70 : 95, t);
      o.frequency.linearRampToValueAtTime(up ? 95 : 70, t + 1.2);
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = 500;
      const g = ctx.createGain();
      o.connect(f).connect(g).connect(n.master);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.06, t + 0.1);
      g.gain.setValueAtTime(0.06, t + 1.0);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
      o.start(t);
      o.stop(t + 1.35);
    },

    /** A gentle two-note "new call" alert. */
    alert() {
      if (!ok()) return;
      const t = now();
      blip(880, t, 0.25, 'triangle', 0.14);
      blip(1175, t + 0.18, 0.4, 'triangle', 0.14);
    },
  };
}
