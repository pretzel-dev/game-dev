/**
 * Everything you hear is synthesised, no audio files: the soft hum of the
 * deep, bubbles, the whoosh of swimming, waves and seagulls at the top,
 * dolphins clicking and whistling, whales singing, a sparkly fanfare for
 * treasure, a splash, the King's "hello", and a gentle harp tune that
 * drifts along underneath it all.
 */
const MASTER = 0.5;
// A dreamy pentatonic scale for the harp.
const SCALE = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21];

export function createAudio() {
  let ctx = null;
  let enabled = true;
  let musicOn = true;
  let paused = false;
  let n = null;
  let noise = null;

  function start() {
    if (ctx || !enabled) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;

    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.ratio.value = 4;
    const master = ctx.createGain();
    master.gain.value = MASTER;
    master.connect(comp).connect(ctx.destination);
    const music = ctx.createGain();
    music.gain.value = 0.5;
    // A simple echo, so the harp and the whales sound far away and watery.
    const echo = ctx.createDelay(1);
    echo.delayTime.value = 0.34;
    const fb = ctx.createGain();
    fb.gain.value = 0.38;
    const wet = ctx.createGain();
    wet.gain.value = 0.45;
    echo.connect(fb).connect(echo);
    echo.connect(wet).connect(master);
    music.connect(master);
    music.connect(echo);

    const loop = (rate, type, freq, q) => {
      const s = ctx.createBufferSource();
      s.buffer = noise;
      s.loop = true;
      s.playbackRate.value = rate;
      const f = ctx.createBiquadFilter();
      f.type = type;
      f.frequency.value = freq;
      f.Q.value = q;
      const g = ctx.createGain();
      g.gain.value = 0;
      s.connect(f).connect(g).connect(master);
      s.start();
      return { f, g };
    };
    const deep = loop(0.3, 'lowpass', 220, 0.7); // the hum of the sea
    const swim = loop(0.8, 'bandpass', 700, 0.8); // whoosh
    const waves = loop(0.5, 'lowpass', 900, 0.5); // waves at the top
    n = { master, music, echo, deep, swim, waves, harpT: 0, gullT: 2, bubbleT: 1, note: 0, chord: 0 };
  }

  const now = () => ctx.currentTime;
  const ok = () => ctx && enabled && !paused;

  function tone(freq, t0, dur, { type = 'sine', peak = 0.15, glide = 1, dest = null, attack = 0.01 } = {}) {
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (glide !== 1) o.frequency.exponentialRampToValueAtTime(freq * glide, t0 + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(dest || n.master);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }

  /** A plucked harp-ish note: a sine and a soft triangle an octave up. */
  function harp(freq, t0, peak = 0.08, dest = null) {
    tone(freq, t0, 2.2, { type: 'sine', peak, dest: dest || n.music, attack: 0.005 });
    tone(freq * 2, t0, 1.2, { type: 'triangle', peak: peak * 0.3, dest: dest || n.music, attack: 0.005 });
  }

  function noiseHit(t0, dur, freq, q, peak, type = 'bandpass') {
    const s = ctx.createBufferSource();
    s.buffer = noise;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(f).connect(g).connect(n.master);
    s.start(t0, Math.random());
    s.stop(t0 + dur + 0.05);
  }

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
    setMusic(on) {
      musicOn = on;
      if (n) n.music.gain.setTargetAtTime(on ? 0.5 : 0, now(), 0.3);
    },
    setPaused(p) {
      paused = p;
      if (!ctx) return;
      if (p) ctx.suspend();
      else if (enabled) ctx.resume();
    },

    /** Every frame. s: { underwater, depth, speed, whaleNear, dolphinNear } */
    update(dt, s) {
      if (!ok()) return;
      const t = now();
      n.deep.g.gain.setTargetAtTime(s.underwater ? 0.22 : 0.03, t, 0.3);
      n.swim.g.gain.setTargetAtTime(Math.min(0.12, s.speed * 0.015) * (s.underwater ? 1 : 0.3), t, 0.15);
      n.swim.f.frequency.setTargetAtTime(500 + s.speed * 80, t, 0.2);
      n.waves.g.gain.setTargetAtTime(s.underwater ? 0.02 : 0.16, t, 0.4);
      n.waves.f.frequency.setTargetAtTime(600 + Math.sin(t * 0.4) * 300, t, 0.5);

      // Bubbles now and then under the water.
      n.bubbleT -= dt;
      if (s.underwater && n.bubbleT <= 0) {
        n.bubbleT = 0.3 + Math.random() * 1.5;
        const f = 500 + Math.random() * 700;
        tone(f, t, 0.08, { type: 'sine', peak: 0.04, glide: 1.8 });
      }
      // Gulls at the top.
      n.gullT -= dt;
      if (!s.underwater && n.gullT <= 0) {
        n.gullT = 2 + Math.random() * 5;
        for (let k = 0; k < 2 + Math.floor(Math.random() * 3); k++) {
          const f = 1100 + Math.random() * 400;
          tone(f, t + k * 0.22, 0.2, { type: 'sawtooth', peak: 0.025, glide: 0.75 });
        }
      }
      // Whale song: long, low, sliding notes.
      if (s.whaleNear && Math.random() < dt * 0.2) {
        const f = 120 + Math.random() * 120;
        tone(f, t, 2.5, { type: 'sine', peak: 0.12 * s.whaleNear, glide: 1.4 + Math.random() * 0.4, dest: n.music, attack: 0.6 });
        tone(f * 1.5, t + 0.3, 2.0, { type: 'triangle', peak: 0.04 * s.whaleNear, glide: 0.8, dest: n.music, attack: 0.5 });
      }
      // Dolphins: clicks and a whistle.
      if (s.dolphinNear && Math.random() < dt * 0.5) {
        const t0 = t + Math.random() * 0.2;
        tone(1800 + Math.random() * 800, t0, 0.35, { type: 'sine', peak: 0.06 * s.dolphinNear, glide: 1.6 });
        for (let k = 0; k < 5; k++) noiseHit(t0 + 0.4 + k * 0.035, 0.01, 4000, 4, 0.05 * s.dolphinNear);
      }
      // The harp: a slow, wandering tune, never the same twice.
      n.harpT -= dt;
      if (musicOn && n.harpT <= 0) {
        n.harpT = 0.55 + (Math.random() < 0.3 ? 0.55 : 0);
        const root = [220, 196, 174.6, 196][Math.floor(n.chord / 8) % 4];
        n.chord++;
        n.note = Math.max(0, Math.min(SCALE.length - 1, n.note + Math.floor(Math.random() * 5) - 2));
        harp(root * 2 ** (SCALE[n.note] / 12), t, 0.06);
        if (n.chord % 4 === 0) harp(root / 2, t, 0.05);
      }
    },

    /** A sparkly fanfare: found treasure! */
    treasure() {
      if (!ok()) return;
      const t = now();
      [0, 4, 7, 12, 16, 19, 24].forEach((s, k) => harp(523 * 2 ** (s / 12), t + k * 0.07, 0.12, n.master));
      for (let k = 0; k < 10; k++) tone(2000 + Math.random() * 3000, t + 0.5 + k * 0.05, 0.15, { type: 'sine', peak: 0.03 });
    },
    sparkle() {
      if (!ok()) return;
      const t = now();
      for (let k = 0; k < 6; k++) tone(1800 + k * 300, t + k * 0.04, 0.2, { type: 'triangle', peak: 0.04 });
    },
    twirl() {
      if (!ok()) return;
      const t = now();
      SCALE.forEach((s, k) => harp(392 * 2 ** (s / 12), t + k * 0.04, 0.05, n.master));
    },
    splash(size = 1) {
      if (!ok()) return;
      const t = now();
      noiseHit(t, 0.5 * size, 900, 0.6, 0.25 * size, 'lowpass');
      noiseHit(t + 0.05, 0.3, 2500, 1, 0.08 * size);
    },
    surface() {
      if (!ok()) return;
      noiseHit(now(), 0.35, 1200, 0.7, 0.12, 'lowpass');
    },
    sit() {
      if (!ok()) return;
      const t = now();
      [0, 7, 12].forEach((s, k) => harp(392 * 2 ** (s / 12), t + k * 0.1, 0.08, n.master));
    },
    /** The King says hello: a warm "hmm-mm!" */
    hello() {
      if (!ok()) return;
      const t = now();
      tone(150, t, 0.35, { type: 'sawtooth', peak: 0.05, glide: 1.25, attack: 0.05 });
      tone(185, t + 0.35, 0.5, { type: 'sawtooth', peak: 0.05, glide: 0.9, attack: 0.05 });
    },
    /** Emote sounds. */
    emote(kind) {
      if (!ok()) return;
      const t = now();
      if (kind === 'wave') {
        [0, 4, 7].forEach((st, k) => harp(659 * 2 ** (st / 12), t + k * 0.08, 0.07, n.master));
      } else if (kind === 'kiss') {
        // Mwah!
        tone(900, t + 0.55, 0.12, { type: 'sine', peak: 0.12, glide: 1.6 });
        noiseHit(t + 0.55, 0.05, 3000, 2, 0.05);
        [12, 16, 19].forEach((st, k) => harp(523 * 2 ** (st / 12), t + 0.75 + k * 0.1, 0.05, n.master));
      } else if (kind === 'sing') {
        // A little song: la-la-la, up and down the scale.
        const tune = [0, 4, 7, 9, 7, 4, 7, 12, 9, 7, 4, 0];
        tune.forEach((st, k) => {
          const f = 440 * 2 ** (st / 12);
          tone(f, t + k * 0.28, 0.32, { type: 'triangle', peak: 0.07, attack: 0.04 });
          tone(f * 2, t + k * 0.28, 0.25, { type: 'sine', peak: 0.03, attack: 0.04 });
        });
      } else if (kind === 'dance') {
        const bass = [0, 7, 5, 7];
        for (let k = 0; k < 12; k++) {
          harp(262 * 2 ** ((bass[k % 4] + (k % 2 ? 12 : 0)) / 12), t + k * 0.25, 0.06, n.master);
          if (k % 2 === 0) noiseHit(t + k * 0.25, 0.05, 6000, 1, 0.03);
        }
      } else if (kind === 'flip') {
        noiseHit(t, 0.5, 800, 0.8, 0.12);
        SCALE.slice(0, 6).forEach((st, k) => harp(523 * 2 ** (st / 12), t + 0.3 + k * 0.05, 0.05, n.master));
      }
    },
    dolphin() {
      if (!ok()) return;
      const t = now();
      tone(1500, t, 0.25, { type: 'sine', peak: 0.08, glide: 1.8 });
      tone(2600, t + 0.25, 0.3, { type: 'sine', peak: 0.07, glide: 0.6 });
    },
  };
}
