// Perihelion audio: everything is synthesised with the Web Audio API (no files).
//
// The idea is "sound heard through the hull of a warship": external events are
// low-passed, weighty and wet; interface sounds are dry, close and quiet.
// Every one-shot is a few layers (sub thump, filtered-noise body, transient,
// metallic partials), each with its own envelope and a little randomness so
// repeats never sound identical.
//
// Signal path:
//   voice -> pan -> bus (ui | fx -> hull low-pass | amb) --+--> saturation -> compressor
//              \--> send -> convolution reverb (hull|room) -+      -> safety limiter -> master
//
// Usage: createAudio() is cheap and touches no Web Audio. Call unlock() from a
// user gesture, update() every frame (or a few times a second), play() for
// one-shots. Every method is a no-op if Web Audio is unavailable.

const T60 = 6.91; // time constants in a 60 dB decay
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp01 = (x) => (x > 0 ? (x < 1 ? x : 1) : 0); // NaN -> 0
const semis = (n) => Math.pow(2, n / 12);

// ---------------------------------------------------------------- buffers

function makeNoise(ctx, kind, seconds) {
  const sr = ctx.sampleRate;
  const n = Math.floor(sr * seconds);
  const buf = ctx.createBuffer(1, n, sr);
  const d = buf.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, last = 0;
  for (let i = 0; i < n; i++) {
    const w = Math.random() * 2 - 1;
    if (kind === 'white') d[i] = w;
    else if (kind === 'pink') { // Paul Kellet's filter
      b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759;
      b2 = 0.969 * b2 + w * 0.153852; b3 = 0.8665 * b3 + w * 0.3104856;
      b4 = 0.55 * b4 + w * 0.5329522; b5 = -0.7616 * b5 - w * 0.016898;
      d[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362; b6 = w * 0.115926;
    } else { last = (last + 0.02 * w) / 1.02; d[i] = last; } // brown (leaky integrator)
  }
  // Cross-fade the end into the start so the loop is seamless, then set a
  // common RMS so the three kinds are interchangeable in level.
  const f = Math.min(n >> 2, Math.floor(sr * 0.08));
  for (let i = 0; i < f; i++) {
    const k = i / f;
    d[i] = d[i] * k + d[n - f + i] * (1 - k);
  }
  const len = n - f;
  let sum = 0, mean = 0;
  for (let i = 0; i < len; i++) mean += d[i];
  mean /= len;
  for (let i = 0; i < len; i++) { d[i] -= mean; sum += d[i] * d[i]; }
  const k = 0.25 / Math.sqrt(sum / len || 1);
  const out = ctx.createBuffer(1, len, sr);
  const o = out.getChannelData(0);
  for (let i = 0; i < len; i++) o[i] = d[i] * k;
  return out;
}

// A synthetic impulse response: three noise bands with their own decay times
// (lows ring longest, highs die at once: a steel compartment, not a hall),
// a few early reflections, and a handful of faint decaying modes for the
// metallic colour of a hull. Normalised for roughly unity gain inside its own
// pass band (o.bw, Hz), so a send of 0.3 really is about 30% wet.
function makeIR(ctx, o) {
  const sr = ctx.sampleRate;
  const n = Math.floor(sr * o.dur);
  const buf = ctx.createBuffer(2, n, sr);
  const aLow = 1 - Math.exp((-2 * Math.PI * o.lowHz) / sr);
  const aMid = 1 - Math.exp((-2 * Math.PI * o.midHz) / sr);
  // Per-sample decay multipliers instead of Math.exp in the loop: this runs on
  // the first tap, on a phone, so it has to be quick.
  const kLow = Math.exp(-T60 / (o.lowT * sr)), kMid = Math.exp(-T60 / (o.midT * sr)), kHigh = Math.exp(-T60 / (o.highT * sr));
  const preN = Math.max(1, Math.floor(o.pre * sr));
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    let l1 = 0, l2 = 0, eLow = o.low, eMid = o.mid, eHigh = o.high;
    for (let i = 0; i < n; i++) {
      const w = Math.random() * 2 - 1;
      l1 += aLow * (w - l1); l2 += aMid * (w - l2);
      const x = l1 * eLow + (l2 - l1) * eMid + (w - l2) * eHigh;
      d[i] = i < preN ? (x * i) / preN : x;
      eLow *= kLow; eMid *= kMid; eHigh *= kHigh;
    }
    for (let k = 0; k < o.taps; k++) { // early reflections
      const at = Math.floor(sr * rnd(0.004, o.tapSpan));
      const amp = rnd(0.25, 0.6) * (Math.random() < 0.5 ? -1 : 1) * o.tapGain;
      for (let j = 0; j < 24 && at + j < n; j++) d[at + j] += amp * Math.sin((Math.PI * j) / 24) * 0.25;
    }
    for (let k = 0; k < o.modes; k++) { // hull modes: decaying sines from a two-multiply resonator
      const f = rnd(o.modeLo, o.modeHi), dt = rnd(0.4, 1) * o.lowT, a = o.modeGain * rnd(0.4, 1);
      const m = Math.min(n, Math.floor(sr * dt)), inN = Math.floor(sr * 0.02);
      const w0 = (2 * Math.PI * f) / sr, c = 2 * Math.cos(w0), kd = Math.exp(-T60 / (dt * sr));
      let y1 = Math.sin(rnd(0, 6.28)), y2 = Math.sin(Math.asin(y1) - w0), env = a;
      for (let i = 0; i < m; i++) {
        const y = c * y1 - y2; y2 = y1; y1 = y;
        d[i] += (i < inN ? (env * i) / inN : env) * y;
        env *= kd;
      }
    }
    const fade = Math.floor(sr * 0.05);
    for (let i = 0; i < fade; i++) d[n - 1 - i] *= i / fade;
    let e = 0;
    for (let i = 0; i < n; i++) e += d[i] * d[i];
    const g = Math.sqrt(o.bw / (sr / 2)) / Math.sqrt(e || 1);
    for (let i = 0; i < n; i++) d[i] *= g;
  }
  return buf;
}

// Roughly how much of a noise buffer's power a filter lets through. Used to
// level filtered noise so a layer's `g` means about the same loudness as an
// oscillator at that gain, whatever the band (a narrow band of noise is
// otherwise far quieter than it looks on paper).
function bandShare(kind, type, f, q, sr) {
  const ny = sr / 2;
  let lo = 20, hi = Math.min(f, ny);
  if (type === 'bandpass') {
    const oct = (2 / Math.LN2) * Math.asinh(1 / (2 * Math.max(q, 0.1)));
    lo = Math.max(20, f / Math.pow(2, oct / 2)); hi = Math.min(ny, f * Math.pow(2, oct / 2));
  } else if (type === 'highpass') { lo = Math.max(20, f); hi = ny; }
  let share;
  if (kind === 'white') share = (hi - lo) / ny;
  else if (kind === 'pink') share = Math.log2(hi / lo) / Math.log2(ny / 20);
  else { const c = (0.02 * sr) / (2 * Math.PI); share = (2 / Math.PI) * (Math.atan(hi / c) - Math.atan(lo / c)); } // brown: flat to c, then falling
  return Math.max(0.01, Math.min(1, share));
}

function shaperCurve(fn, n = 2049) {
  const c = new Float32Array(n);
  for (let i = 0; i < n; i++) c[i] = fn((i / (n - 1)) * 2 - 1);
  return c;
}

// ---------------------------------------------------------------- one-shot table
// bus: ui (dry, close) | fx (through the hull). send: reverb amount.
// rev: which reverb. lv: level trim. gap: minimum seconds between two plays of
// the type. max: voices of the type alive at once (oldest is stolen).
// tune: random pitch spread in semitones. pri: who survives when voices run out.
const TYPES = {
  tap:        { bus: 'ui', rev: 'room', send: 0.05, lv: 0.94, gap: 0.03, max: 3, tune: 0.5, pri: 2 },
  select:     { bus: 'ui', rev: 'room', send: 0.06, lv: 1.25, gap: 0.04, max: 2, tune: 0.2, pri: 2 },
  confirm:    { bus: 'ui', rev: 'room', send: 0.08, lv: 0.62, gap: 0.06, max: 2, tune: 0.3, pri: 2 },
  deny:       { bus: 'ui', rev: 'room', send: 0.06, lv: 0.38, gap: 0.10, max: 2, tune: 0.1, pri: 2 },
  open:       { bus: 'ui', rev: 'room', send: 0.06, lv: 0.70, gap: 0.06, max: 2, tune: 0.3, pri: 2 },
  close:      { bus: 'ui', rev: 'room', send: 0.06, lv: 0.59, gap: 0.06, max: 2, tune: 0.3, pri: 2 },

  contact:    { bus: 'ui', rev: 'hull', send: 0.45, lv: 0.76, gap: 0.35, max: 2, tune: 0.15, pri: 3 },
  alarm:      { bus: 'ui', rev: 'hull', send: 0.10, lv: 0.78, gap: 0.70, max: 1, tune: 0, pri: 3 },
  system:     { bus: 'ui', rev: 'hull', send: 0.10, lv: 0.69, gap: 0.30, max: 2, tune: 0.4, pri: 3 },
  repaired:   { bus: 'ui', rev: 'hull', send: 0.10, lv: 0.59, gap: 0.30, max: 2, tune: 0.2, pri: 3 },
  fuel:       { bus: 'ui', rev: 'hull', send: 0.10, lv: 0.63, gap: 0.80, max: 1, tune: 0, pri: 3 },

  rail:       { bus: 'fx', rev: 'hull', send: 0.34, lv: 0.95, gap: 0.05, max: 4, tune: 1.2, pri: 1 },
  railHit:    { bus: 'fx', rev: 'hull', send: 0.32, lv: 0.90, gap: 0.05, max: 4, tune: 1.5, pri: 1 },
  pdc:        { bus: 'fx', rev: 'hull', send: 0.22, lv: 0.70, gap: 0.09, max: 3, tune: 1.0, pri: 0 },
  pdcKill:    { bus: 'fx', rev: 'hull', send: 0.55, lv: 0.60, gap: 0.05, max: 4, tune: 2.0, pri: 0 },
  torpLaunch: { bus: 'fx', rev: 'hull', send: 0.30, lv: 0.64, gap: 0.12, max: 3, tune: 1.0, pri: 1 },
  torpHit:    { bus: 'fx', rev: 'hull', send: 0.50, lv: 1.00, gap: 0.12, max: 3, tune: 1.5, pri: 2 },
  boom:       { bus: 'fx', rev: 'hull', send: 0.55, lv: 1.20, gap: 0.25, max: 2, tune: 1.5, pri: 3 },
  silenced:   { bus: 'fx', rev: 'hull', send: 0.40, lv: 0.83, gap: 0.20, max: 2, tune: 1.0, pri: 2 },

  launched:   { bus: 'ui', rev: 'hull', send: 0.30, lv: 0.39, gap: 0.30, max: 2, tune: 0, pri: 2 },
  built:      { bus: 'ui', rev: 'hull', send: 0.26, lv: 0.57, gap: 0.30, max: 2, tune: 0, pri: 2 },
  research:   { bus: 'ui', rev: 'hull', send: 0.40, lv: 0.34, gap: 0.30, max: 2, tune: 0, pri: 2 },
  freight:    { bus: 'ui', rev: 'room', send: 0.10, lv: 0.46, gap: 0.15, max: 2, tune: 0.3, pri: 1 },
  captured:   { bus: 'ui', rev: 'hull', send: 0.38, lv: 0.32, gap: 0.50, max: 2, tune: 0, pri: 3 },
  lostWorld:  { bus: 'ui', rev: 'hull', send: 0.38, lv: 0.34, gap: 0.50, max: 2, tune: 0, pri: 3 },
  lost:       { bus: 'ui', rev: 'hull', send: 0.42, lv: 0.68, gap: 0.40, max: 2, tune: 0, pri: 3 },
  won:        { bus: 'ui', rev: 'hull', send: 0.45, lv: 0.29, gap: 2.00, max: 1, tune: 0, pri: 4 },
  defeat:     { bus: 'ui', rev: 'hull', send: 0.45, lv: 0.32, gap: 2.00, max: 1, tune: 0, pri: 4 },
};

const MAX_VOICES = 18;

export function createAudio(opts = {}) {
  const injected = opts.context || null; // tests pass an OfflineAudioContext
  const wantBed = opts.ambient !== false;
  let ctx = null;
  let G = null; // graph, built once on unlock
  let bed = null;
  let dead = false; // Web Audio unavailable or setup failed: everything is a no-op
  let enabled = true;
  let volume = 0.8;
  let suspendTimer = 0;
  const st = { burn: 0, battle: 0, zoom: 0.5, paused: false };
  const voices = [];
  const lastPlay = {};
  let liveNodes = 0;

  // -------------------------------------------------------------- graph

  function build() {
    const g = {};
    g.noise = { white: makeNoise(ctx, 'white', 1.6), pink: makeNoise(ctx, 'pink', 2.7), brown: makeNoise(ctx, 'brown', 3.3) };

    // Master: sum -> saturation -> compressor -> make-up trim -> safety limiter -> master gain
    g.sum = ctx.createGain(); g.sum.gain.value = 1 / 3; // the shaper's -1..1 covers +-3 of bus signal
    g.sat = ctx.createWaveShaper();
    g.sat.curve = shaperCurve((u) => Math.tanh(1.15 * 3 * u) / 1.15); // unity gain when quiet, rounds off peaks
    g.sat.oversample = '2x';
    g.comp = ctx.createDynamicsCompressor();
    g.comp.threshold.value = -10; g.comp.knee.value = 8; g.comp.ratio.value = 2.5;
    g.comp.attack.value = 0.012; g.comp.release.value = 0.25; // slow enough to let the first crack of a hit through
    g.trim = ctx.createGain(); g.trim.gain.value = 0.7; // undoes the compressor's built-in make-up gain
    g.limit = ctx.createWaveShaper(); // only bends the top 3 dB; never lets a sample past 0.94
    g.limit.curve = shaperCurve((x) => {
      const a = Math.abs(x), k = 0.7;
      return a <= k ? x : Math.sign(x) * (k + (0.94 - k) * Math.tanh((a - k) / (0.94 - k)));
    }, 4097);
    g.master = ctx.createGain(); g.master.gain.value = 0;
    g.sum.connect(g.sat); g.sat.connect(g.comp); g.comp.connect(g.trim); g.trim.connect(g.limit);
    g.limit.connect(g.master); g.master.connect(ctx.destination);

    // Buses
    g.bus = { ui: ctx.createGain(), fx: ctx.createGain(), amb: ctx.createGain() };
    g.bus.ui.gain.value = 0.8; g.bus.fx.gain.value = 0.9; g.bus.amb.gain.value = 0.045;
    // Through the hull: a low-pass that opens as the camera closes in, plus a
    // little chest resonance low down.
    g.hullLP = ctx.createBiquadFilter(); g.hullLP.type = 'lowpass'; g.hullLP.frequency.value = 4500; g.hullLP.Q.value = 0.6;
    g.hullRes = ctx.createBiquadFilter(); g.hullRes.type = 'peaking'; g.hullRes.frequency.value = 150; g.hullRes.Q.value = 1.1; g.hullRes.gain.value = 2;
    g.bus.fx.connect(g.hullLP); g.hullLP.connect(g.hullRes); g.hullRes.connect(g.sum);
    g.bus.ui.connect(g.sum); g.bus.amb.connect(g.sum);

    // Reverbs: a long dark hull and a tiny dry compartment for the console.
    const conv = (ir, ret) => {
      const input = ctx.createBiquadFilter(); // keep the sub out of the reverb: it only turns to mud
      input.type = 'highpass'; input.frequency.value = 110; input.Q.value = 0.5;
      const c = ctx.createConvolver(); c.normalize = false; c.buffer = ir;
      const r = ctx.createGain(); r.gain.value = ret;
      input.connect(c); c.connect(r); r.connect(g.sum);
      return input;
    };
    g.rev = {
      hull: conv(makeIR(ctx, { bw: 900, dur: 3.0, pre: 0.012, lowHz: 320, midHz: 1500, low: 1.7, mid: 1.0, high: 0.16,
        lowT: 2.7, midT: 1.5, highT: 0.35, taps: 9, tapSpan: 0.07, tapGain: 0.5, modes: 7, modeLo: 90, modeHi: 620, modeGain: 0.012 }), 1.6),
      room: conv(makeIR(ctx, { bw: 3500, dur: 0.2, pre: 0.002, lowHz: 400, midHz: 2400, low: 1.5, mid: 1.0, high: 0.4,
        lowT: 0.16, midT: 0.12, highT: 0.06, taps: 6, tapSpan: 0.02, tapGain: 0.6, modes: 0, modeLo: 0, modeHi: 0, modeGain: 0 }), 1.2),
    };
    g.pan = typeof ctx.createStereoPanner === 'function';
    return g;
  }

  function masterTarget() { return enabled ? Math.pow(clamp01(volume), 1.5) : 0; }

  function ready() {
    if (dead || !ctx || !G) return false;
    return injected ? true : ctx.state === 'running';
  }

  // -------------------------------------------------------------- envelopes

  // attack / hold / exponential decay; `d` is the time to fall 60 dB. Returns the end time.
  function ahd(param, t, peak, a, h, d) {
    param.setValueAtTime(0, t);
    param.linearRampToValueAtTime(peak, t + a);
    param.setTargetAtTime(0, t + a + h, d / T60);
    return t + a + h + d;
  }

  // A train of percussive pulses on one gain: [{ t, g, a, d }] sorted by t.
  // Ramps only, so a later pulse can cut an earlier decay short without a click.
  function pulseTrain(param, t0, ps, scale) {
    let cur = 0.0001, end = t0;
    param.setValueAtTime(cur, t0);
    for (let i = 0; i < ps.length; i++) {
      const p = ps[i], tp = t0 + p.t;
      const next = i + 1 < ps.length ? t0 + ps[i + 1].t : Infinity;
      const a = Math.min(p.a, (next - tp) * 0.4);
      const peak = Math.max(0.0002, p.g * scale);
      param.setValueAtTime(cur, tp);
      param.linearRampToValueAtTime(peak, tp + a);
      end = Math.min(tp + a + p.d, next);
      cur = Math.max(0.0001, peak * Math.exp((-T60 * (end - tp - a)) / p.d));
      param.exponentialRampToValueAtTime(cur, end);
    }
    param.setValueAtTime(cur, end);
    param.linearRampToValueAtTime(0, end + 0.01);
    return end + 0.01;
  }

  // -------------------------------------------------------------- layers

  function reg(v, src, t, end, offset) {
    if (offset === undefined) src.start(t); else src.start(t, offset);
    src.stop(end + 0.03);
    v.srcs.push(src);
    if (end >= v.end) { v.end = end; v.lastSrc = src; }
  }

  function filt(v, type, f, q) {
    const b = ctx.createBiquadFilter();
    b.type = type; b.frequency.value = f; b.Q.value = q;
    v.nodes.push(b);
    return b;
  }

  function envGain(v, o, t) {
    const g = ctx.createGain();
    v.nodes.push(g);
    const end = o.pulses ? pulseTrain(g.gain, t, o.pulses, o.g) : ahd(g.gain, t, o.g, o.a === undefined ? 0.004 : o.a, o.h || 0, o.d);
    g.connect(o.dst || v.out);
    return [g, end];
  }

  // Oscillator layer. { w, f, f1, ft, det, t, a, h, d, g, pulses, lp, lp1, lpt, q, fix, dst }
  function tone(v, o) {
    const t = o.t, tune = o.fix ? 1 : v.tune;
    const osc = ctx.createOscillator();
    osc.type = o.w || 'sine';
    osc.frequency.setValueAtTime(o.f * tune, t);
    if (o.f1) osc.frequency.exponentialRampToValueAtTime(o.f1 * tune, t + (o.ft || 0.1));
    if (o.det) osc.detune.value = o.det;
    v.nodes.push(osc);
    let last = osc;
    if (o.lp) {
      const b = filt(v, 'lowpass', o.lp, o.q || 0.7);
      if (o.lp1) { b.frequency.setValueAtTime(o.lp, t); b.frequency.exponentialRampToValueAtTime(o.lp1, t + (o.lpt || o.d)); }
      last.connect(b); last = b;
    }
    const [g, end] = envGain(v, o, t);
    last.connect(g);
    reg(v, osc, t, end);
    return end;
  }

  // Filtered-noise layer. { n, ft, f, f1, ftm, q, hp, rate, t, a, h, d, g, pulses, dst }
  function noise(v, o) {
    const t = o.t, tune = v.tune;
    const src = ctx.createBufferSource();
    const buf = G.noise[o.n || 'white'];
    src.buffer = buf; src.loop = true;
    src.playbackRate.value = (o.rate || 1) * rnd(0.93, 1.07);
    v.nodes.push(src);
    const b = filt(v, o.ft || 'lowpass', o.f * tune, o.q === undefined ? 0.7 : o.q);
    if (o.f1) { b.frequency.setValueAtTime(o.f * tune, t); b.frequency.exponentialRampToValueAtTime(o.f1 * tune, t + (o.ftm || o.d || 0.2)); }
    src.connect(b);
    let last = b;
    if (o.hp) { const h = filt(v, 'highpass', o.hp, 0.7); last.connect(h); last = h; }
    const [g, end] = envGain(v, o, t);
    const level = ctx.createGain(); // make-up for what the filter removed
    level.gain.value = 1.4 / Math.sqrt(bandShare(o.n || 'white', o.ft || 'lowpass', o.f * tune, o.q === undefined ? 0.7 : o.q, ctx.sampleRate));
    v.nodes.push(level);
    last.connect(level); level.connect(g);
    reg(v, src, t, end, rnd(0, buf.duration - 0.2));
    return end;
  }

  // Struck metal: inharmonic sine partials, each slightly detuned every time,
  // higher ones dying sooner, the whole thing sagging in pitch as it rings.
  function ring(v, o) {
    const r = o.r;
    for (let i = 0; i < r.length; i++) {
      const f = o.f * r[i] * (1 + rnd(-0.012, 0.012));
      tone(v, { f, f1: o.bend ? f * o.bend : 0, ft: o.d, t: o.t + rnd(0, 0.004), a: o.a || 0.003,
        d: (o.d / (1 + 0.45 * i)) * rnd(0.8, 1.2), g: (o.g * rnd(0.55, 1)) / (1 + 0.3 * i), dst: o.dst });
    }
  }

  // A soft sustained console note: two sines a few cents apart (slow beat), a
  // quiet octave and twelfth so it still reads on a small speaker, low-passed.
  // { f, f1, ft, t, a, h, d, g, lp, lp1, lpt, hollow }
  function pad(v, o) {
    const mix = ctx.createGain(); v.nodes.push(mix);
    const lp = filt(v, 'lowpass', o.lp || 1200, 0.6);
    if (o.lp1) { lp.frequency.setValueAtTime(o.lp || 1200, o.t); lp.frequency.exponentialRampToValueAtTime(o.lp1, o.t + (o.lpt || o.a + (o.h || 0) + o.d)); }
    mix.connect(lp); lp.connect(o.dst || v.out);
    const c = rnd(3, 6);
    const parts = o.hollow
      ? [['sine', 1, -c, 0.4], ['sine', 1, c, 0.4], ['sine', 3, 0, 0.3], ['sine', 5, c, 0.11]]
      : [['sine', 1, -c, 0.36], ['sine', 1, c, 0.36], ['triangle', 2, c * 0.5, 0.46], ['sine', 3, -c, 0.2], ['sine', 4, c, 0.1]];
    let end = 0;
    for (const [w, m, det, g] of parts) {
      end = tone(v, { w, f: o.f * m, f1: o.f1 ? o.f1 * m : 0, ft: o.ft, det, t: o.t, a: o.a, h: o.h || 0, d: o.d, g: o.g * g, dst: mix, fix: true });
    }
    return end;
  }

  // A relay / latch: a tiny band of noise for the contact and a short pitched
  // "tock" for the body of the part that moved.
  function click(v, t, o = {}) {
    const g = o.g === undefined ? 1 : o.g;
    noise(v, { n: 'white', ft: 'bandpass', f: (o.f || 2100) * rnd(0.9, 1.1), q: 1.4, t, a: 0.0006, d: o.d || 0.016, g: 0.6 * g });
    tone(v, { f: (o.body || 230) * rnd(0.95, 1.05), f1: (o.body || 230) * 0.62, ft: 0.03, t, a: 0.001, d: o.bd || 0.05, g: 0.5 * g });
  }

  // A heavier mechanical clunk (clamps, breech, bulkhead latch).
  function clunk(v, t, o = {}) {
    const g = o.g === undefined ? 1 : o.g, f = o.f || 150;
    noise(v, { n: 'pink', ft: 'bandpass', f: (o.nf || 620) * rnd(0.9, 1.1), q: 1.8, t, a: 0.001, d: 0.07, g: 0.7 * g });
    noise(v, { n: 'white', ft: 'bandpass', f: 1900 * rnd(0.9, 1.1), q: 1.2, t, a: 0.0006, d: 0.014, g: 0.5 * g });
    tone(v, { f: f * rnd(0.96, 1.04), f1: f * 0.6, ft: 0.06, t, a: 0.002, d: o.d || 0.14, g: 0.6 * g });
    ring(v, { f: f * 2.3, r: [1, 1.52, 2.31], t, d: o.ring || 0.22, g: 0.2 * g });
  }

  // -------------------------------------------------------------- one-shots

  const SOUNDS = {
    // ---- interface: dry, close, quiet
    tap(v, t) { click(v, t, { g: 0.9, body: 310, bd: 0.04 }); },
    select(v, t) {
      click(v, t, { g: 0.7, f: 2400, body: 260 });
      tone(v, { w: 'triangle', f: 392, t: t + 0.004, a: 0.006, d: 0.13, g: 0.34, lp: 1100 });
      tone(v, { f: 784, t: t + 0.004, a: 0.004, d: 0.07, g: 0.07 });
    },
    confirm(v, t) { // an order given: a firm two-part clunk
      const gap = rnd(0.062, 0.078);
      click(v, t, { g: 0.75, f: 1700, body: 200, bd: 0.05 });
      noise(v, { n: 'pink', ft: 'bandpass', f: 700, q: 2, t: t + gap, a: 0.001, d: 0.06, g: 0.8 });
      noise(v, { n: 'white', ft: 'bandpass', f: 1500, q: 1.2, t: t + gap, a: 0.0006, d: 0.012, g: 0.3 });
      tone(v, { f: 132, f1: 84, ft: 0.05, t: t + gap, a: 0.002, d: 0.12, g: 0.45 });
      tone(v, { w: 'triangle', f: 264, f1: 250, ft: 0.08, t: t + gap, a: 0.002, d: 0.09, g: 0.45, lp: 1100 });
    },
    deny(v, t) { // two dull, slightly sour knocks
      for (let i = 0; i < 2; i++) {
        const at = t + i * 0.085;
        tone(v, { w: 'triangle', f: 185, t: at, a: 0.004, d: 0.075, g: 0.7, lp: 1500, fix: true });
        tone(v, { w: 'triangle', f: 196.4, t: at, a: 0.004, d: 0.075, g: 0.55, lp: 1500, fix: true });
        tone(v, { f: 92.5, t: at, a: 0.004, d: 0.07, g: 0.15, fix: true });
        noise(v, { n: 'pink', ft: 'bandpass', f: 450, q: 2.5, t: at, a: 0.002, d: 0.04, g: 0.5 });
      }
    },
    open(v, t) { // a panel sliding out: soft rising air and a latch
      noise(v, { n: 'pink', ft: 'bandpass', f: 520, f1: 1700, ftm: 0.1, q: 1.6, t, a: 0.03, d: 0.12, g: 0.25 });
      click(v, t + 0.085, { g: 0.55, f: 2300, body: 300 });
    },
    close(v, t) { // the reverse, ending on a lower seat
      noise(v, { n: 'pink', ft: 'bandpass', f: 1500, f1: 460, ftm: 0.09, q: 1.6, t, a: 0.015, d: 0.11, g: 0.25 });
      click(v, t + 0.07, { g: 0.7, f: 1500, body: 210, bd: 0.06 });
    },

    // ---- alerts: console tones
    contact(v, t) { // a soft sonar-like ping with a tail
      const f = 742;
      tone(v, { f, f1: f * 0.992, ft: 1.2, t, a: 0.012, d: 1.5, g: 0.6 });
      tone(v, { f: f * 1.004, t, a: 0.012, d: 1.1, g: 0.3 });
      tone(v, { f: f * 2.76, t, a: 0.004, d: 0.22, g: 0.05 });
      tone(v, { f: f * 0.5, t, a: 0.02, d: 0.7, g: 0.18 });
      noise(v, { n: 'pink', ft: 'bandpass', f, q: 9, t, a: 0.003, d: 0.09, g: 0.1 });
    },
    alarm(v, t) { // incoming: two low, urgent, reedy pulses
      for (let i = 0; i < 2; i++) {
        const at = t + i * 0.27;
        for (const det of [-9, 8]) {
          tone(v, { w: 'sawtooth', f: 196, det, t: at, a: 0.018, h: 0.1, d: 0.16, g: 0.42, lp: 800, lp1: 1500, lpt: 0.1, q: 1.6, fix: true });
        }
        tone(v, { f: 98, t: at, a: 0.012, h: 0.1, d: 0.2, g: 0.2, fix: true });
        tone(v, { w: 'triangle', f: 588, t: at, a: 0.02, h: 0.08, d: 0.14, g: 0.12, fix: true });
      }
    },
    system(v, t) { // a system knocked out: power sagging away, then a breaker
      const len = rnd(0.6, 0.75);
      for (const det of [-14, 11]) {
        tone(v, { w: 'sawtooth', f: 150, f1: 41, ft: len, det, t, a: 0.012, h: len * 0.5, d: len * 0.7, g: 0.44, lp: 1400, lp1: 200, lpt: len, q: 2.2 });
      }
      tone(v, { f: 75, f1: 30, ft: len, t, a: 0.01, h: len * 0.5, d: len * 0.7, g: 0.22 });
      noise(v, { n: 'white', ft: 'bandpass', f: 1300, f1: 500, ftm: 0.2, q: 1.2, t, a: 0.001, d: 0.12, g: 0.25 }); // arc
      click(v, t + len * 0.92, { g: 0.8, f: 1500, body: 150, bd: 0.08 });
    },
    repaired(v, t) { // power coming back: a short rising hum that seats with a click
      for (const det of [-10, 9]) {
        tone(v, { w: 'sawtooth', f: 78, f1: 156, ft: 0.3, det, t, a: 0.08, h: 0.2, d: 0.25, g: 0.36, lp: 320, lp1: 1300, lpt: 0.3, q: 1.6 });
      }
      tone(v, { f: 78, f1: 156, ft: 0.3, t, a: 0.06, h: 0.22, d: 0.3, g: 0.2 });
      click(v, t + 0.31, { g: 0.7, f: 2200, body: 260 });
      tone(v, { w: 'triangle', f: 311, t: t + 0.315, a: 0.008, d: 0.4, g: 0.36, lp: 1100 });
    },
    fuel(v, t) { // low fuel: three even, hollow mid ticks of tone
      for (let i = 0; i < 3; i++) {
        const at = t + i * 0.17;
        tone(v, { w: 'triangle', f: 293.7, t: at, a: 0.008, h: 0.03, d: 0.11, g: 0.5, lp: 1300, fix: true });
        tone(v, { f: 881, t: at, a: 0.006, h: 0.02, d: 0.06, g: 0.06, fix: true });
        tone(v, { f: 146.8, t: at, a: 0.008, h: 0.03, d: 0.12, g: 0.25, fix: true });
      }
    },

    // ---- weapons: through the hull
    rail(v, t) {
      // electromagnetic crack
      noise(v, { n: 'white', ft: 'bandpass', f: rnd(2500, 3300), f1: 800, ftm: 0.04, q: 0.8, t, a: 0.0006, d: 0.05, g: 2.6 });
      // recoil through the frame (noise only: a pitched thump on every shot sounded like drumming)
      noise(v, { n: 'brown', ft: 'lowpass', f: 950, f1: 130, ftm: 0.3, q: 1.2, t: t + 0.004, a: 0.004, d: 0.55, g: 0.55 });
      // mid knock so it survives a phone speaker
      noise(v, { n: 'pink', ft: 'bandpass', f: rnd(400, 520), q: 2.5, t: t + 0.002, a: 0.002, d: 0.17, g: 0.7 });
      noise(v, { n: 'pink', ft: 'bandpass', f: rnd(820, 1080), q: 2, t: t + 0.001, a: 0.001, d: 0.11, g: 0.45 });
    },
    railHit(v, t) {
      noise(v, { n: 'white', ft: 'bandpass', f: rnd(1700, 2300), f1: 700, ftm: 0.04, q: 0.9, t, a: 0.0006, d: 0.05, g: 2.4 });
      noise(v, { n: 'pink', ft: 'lowpass', f: 1400, f1: 220, ftm: 0.18, q: 1, t, a: 0.002, d: 0.3, g: 0.8 });
      // debris rattling along the plating
      const ps = []; let x = rnd(0.05, 0.09);
      const n = 6 + Math.floor(rnd(0, 6));
      for (let i = 0; i < n; i++) {
        ps.push({ t: x, g: rnd(0.3, 1) * Math.exp(-x * 3.2), a: 0.001, d: rnd(0.012, 0.035) });
        x += rnd(0.02, 0.11);
      }
      noise(v, { n: 'white', ft: 'bandpass', f: rnd(1100, 1700), q: 2.2, t, g: 0.3, pulses: ps });
      noise(v, { n: 'pink', ft: 'bandpass', f: rnd(480, 640), q: 3, t, g: 0.3, pulses: ps });
    },
    pdc(v, t) { // a rotary cannon heard through a bulkhead: one voice, a pulse per round
      const n = 8 + Math.floor(rnd(0, 7)), rate = rnd(27, 36);
      const ps = []; let x = 0;
      for (let i = 0; i < n; i++) {
        ps.push({ t: x, g: rnd(0.7, 1), a: 0.0015, d: rnd(0.11, 0.16) }); // long enough to blur into a burr, not ticks
        x += rnd(0.9, 1.1) / rate;
      }
      tone(v, { w: 'triangle', f: rnd(84, 98), t, g: 0.4, pulses: ps.map((p) => ({ ...p, d: p.d * 1.3 })), lp: 320 });
      noise(v, { n: 'pink', ft: 'bandpass', f: rnd(600, 800), q: 1.5, t, g: 0.9, pulses: ps });
      noise(v, { n: 'white', ft: 'bandpass', f: rnd(1600, 2200), q: 1.2, t, g: 0.7, pulses: ps.map((p) => ({ ...p, d: 0.022 })) });
      // the mount resonating, and the barrels winding down
      noise(v, { n: 'brown', ft: 'bandpass', f: rnd(165, 205), q: 5, t, a: 0.03, h: x, d: 0.4, g: 0.12 });
      tone(v, { w: 'triangle', f: rnd(285, 325), f1: 140, ft: x + 0.5, t, a: 0.05, h: x, d: 0.45, g: 0.035, lp: 700 });
    },
    pdcKill(v, t) { // a small distant pop
      tone(v, { f: rnd(150, 190), f1: 62, ft: 0.07, t, a: 0.002, d: 0.16, g: 0.5 });
      noise(v, { n: 'pink', ft: 'lowpass', f: 2100, f1: 320, ftm: 0.09, q: 0.9, t, a: 0.001, d: 0.12, g: 1.3 });
      noise(v, { n: 'brown', ft: 'lowpass', f: 300, t: t + 0.02, a: 0.03, d: 0.4, g: 0.2 });
    },
    torpLaunch(v, t) {
      // tube: pneumatic thump
      tone(v, { f: rnd(84, 96), f1: 42, ft: 0.12, t, a: 0.004, d: 0.3, g: 0.6 });
      noise(v, { n: 'pink', ft: 'bandpass', f: 420, f1: 240, ftm: 0.12, q: 1.2, t, a: 0.004, d: 0.2, g: 0.9 });
      noise(v, { n: 'white', ft: 'bandpass', f: 1500, q: 1, t, a: 0.001, d: 0.03, g: 0.9 });
      // motor lights and pulls away: a hiss that brightens, then recedes
      const ig = t + rnd(0.11, 0.16);
      noise(v, { n: 'pink', ft: 'bandpass', f: 380, f1: 1900, ftm: 0.9, q: 0.9, t: ig, a: 0.05, h: 0.25, d: 1.5, g: 0.5 });
      noise(v, { n: 'white', ft: 'lowpass', f: 3200, f1: 500, ftm: 1.6, q: 0.7, hp: 900, t: ig, a: 0.03, h: 0.1, d: 0.9, g: 0.12 });
      noise(v, { n: 'brown', ft: 'lowpass', f: 300, f1: 90, ftm: 1.2, q: 1.4, t: ig, a: 0.04, h: 0.2, d: 1.1, g: 0.3 });
      tone(v, { f: 58, f1: 44, ft: 1.2, t: ig, a: 0.05, h: 0.2, d: 0.9, g: 0.22 });
    },
    torpHit(v, t) { // big detonation: sub hit, crunch, long tail
      noise(v, { n: 'white', ft: 'bandpass', f: 1800, f1: 500, ftm: 0.05, q: 0.7, t, a: 0.0008, d: 0.06, g: 2.5 });
      tone(v, { f: rnd(72, 84), f1: 27, ft: 0.45, t, a: 0.004, h: 0.05, d: 1.5, g: 0.75 });
      tone(v, { f: rnd(128, 150), f1: 50, ft: 0.25, t, a: 0.003, d: 0.5, g: 0.5 });
      noise(v, { n: 'pink', ft: 'lowpass', f: 2800, f1: 180, ftm: 0.7, q: 1, t, a: 0.003, h: 0.03, d: 1.0, g: 1.1 }); // crunch
      noise(v, { n: 'pink', ft: 'bandpass', f: rnd(560, 760), f1: 300, ftm: 0.6, q: 1.2, t: t + 0.01, a: 0.004, d: 0.7, g: 0.9 });
      noise(v, { n: 'brown', ft: 'lowpass', f: 380, f1: 70, ftm: 2.4, q: 1.2, t: t + 0.03, a: 0.06, h: 0.2, d: 3.0, g: 0.35 }); // tail
      noise(v, { n: 'pink', ft: 'bandpass', f: rnd(430, 560), f1: 260, ftm: 2, q: 0.8, t: t + 0.03, a: 0.05, h: 0.1, d: 2.4, g: 0.2 });
      ring(v, { f: rnd(110, 150), r: [1, 1.41, 2.2, 2.93], t: t + 0.02, d: rnd(1.4, 2), g: 0.13, bend: 0.94 });
    },
    boom(v, t) { // a ship dies: larger and longer, secondaries, a rumble that takes its time
      noise(v, { n: 'white', ft: 'bandpass', f: 1500, f1: 400, ftm: 0.07, q: 0.7, t, a: 0.001, d: 0.09, g: 2.3 });
      tone(v, { f: rnd(60, 70), f1: 22, ft: 0.8, t, a: 0.005, h: 0.1, d: 2.4, g: 0.8 });
      tone(v, { f: rnd(105, 125), f1: 40, ft: 0.4, t, a: 0.004, d: 0.9, g: 0.55 });
      noise(v, { n: 'pink', ft: 'lowpass', f: 2600, f1: 150, ftm: 1.1, q: 1, t, a: 0.004, h: 0.06, d: 1.5, g: 1.1 });
      noise(v, { n: 'pink', ft: 'bandpass', f: rnd(480, 640), f1: 240, ftm: 1.0, q: 1.1, t: t + 0.01, a: 0.005, h: 0.05, d: 1.1, g: 0.9 });
      // secondaries: magazines, tanks
      const ps = []; let x = rnd(0.22, 0.4);
      const n = 4 + Math.floor(rnd(0, 4));
      for (let i = 0; i < n; i++) {
        ps.push({ t: x, g: rnd(0.35, 1) * Math.exp(-x * 0.7), a: 0.003, d: rnd(0.12, 0.3) });
        x += rnd(0.14, 0.55);
      }
      noise(v, { n: 'pink', ft: 'lowpass', f: rnd(900, 1300), q: 1.2, t, g: 0.8, pulses: ps });
      tone(v, { f: rnd(74, 92), t, g: 0.5, pulses: ps.map((p) => ({ ...p, d: p.d * 1.5 })) });
      // structure groaning as it lets go
      ring(v, { f: rnd(82, 104), r: [1, 1.34, 1.93, 2.62], t: t + 0.15, a: 0.08, d: rnd(2.4, 3.2), g: 0.15, bend: 0.8 });
      // decaying rumble
      noise(v, { n: 'brown', ft: 'lowpass', f: 420, f1: 55, ftm: 4, q: 1.3, t: t + 0.04, a: 0.1, h: 0.5, d: 4.2, g: 0.4 });
      noise(v, { n: 'pink', ft: 'bandpass', f: rnd(380, 480), f1: 220, ftm: 3, q: 0.8, t: t + 0.04, a: 0.08, h: 0.3, d: 3.4, g: 0.2 });
    },
    silenced(v, t) { // a ground battery knocked out: a hit felt through rock, then its power dying
      tone(v, { f: rnd(66, 76), f1: 33, ft: 0.3, t, a: 0.006, d: 0.9, g: 0.6 });
      noise(v, { n: 'brown', ft: 'lowpass', f: 600, f1: 110, ftm: 0.6, q: 1.2, t, a: 0.008, d: 0.9, g: 0.6 });
      noise(v, { n: 'pink', ft: 'bandpass', f: 420, q: 1.5, t, a: 0.004, d: 0.25, g: 0.7 });
      const at = t + 0.16;
      for (const det of [-12, 12]) {
        tone(v, { w: 'sawtooth', f: 196, f1: 49, ft: 0.8, det, t: at, a: 0.04, h: 0.25, d: 0.6, g: 0.26, lp: 1000, lp1: 180, lpt: 0.8, q: 2 });
      }
      noise(v, { n: 'pink', ft: 'bandpass', f: 900, f1: 220, ftm: 0.8, q: 3, t: at, a: 0.05, h: 0.2, d: 0.6, g: 0.3 });
    },

    // ---- events
    launched(v, t) { // dock clamps let go, then a low two-tone
      clunk(v, t, { f: 140, g: 0.8 });
      clunk(v, t + rnd(0.1, 0.14), { f: 118, g: 0.9, nf: 520 });
      pad(v, { f: 98, t: t + 0.24, a: 0.05, h: 0.3, d: 0.6, g: 0.75, lp: 1300 });
      pad(v, { f: 146.8, t: t + 0.58, a: 0.05, h: 0.35, d: 1.0, g: 0.7, lp: 1400 });
    },
    built(v, t) { // construction done: a ratchet running home and one heavy seat
      const ps = [];
      for (let i = 0; i < 4; i++) ps.push({ t: i * 0.05 * rnd(0.92, 1.08), g: 0.5 + i * 0.12, a: 0.001, d: 0.018 });
      noise(v, { n: 'white', ft: 'bandpass', f: 1500, q: 2, t, g: 0.25, pulses: ps });
      noise(v, { n: 'pink', ft: 'bandpass', f: 520, q: 3, t, g: 0.3, pulses: ps });
      clunk(v, t + 0.23, { f: 104, g: 1, nf: 480, d: 0.2, ring: 0.4 });
      pad(v, { f: 130.8, t: t + 0.25, a: 0.03, h: 0.15, d: 0.8, g: 0.55, lp: 1300 });
    },
    research(v, t) { // a result on the board: a clean glassy fifth and a flutter of data
      const ps = [];
      for (let i = 0; i < 6; i++) ps.push({ t: i * 0.032 * rnd(0.85, 1.15), g: rnd(0.4, 1), a: 0.0008, d: 0.01 });
      noise(v, { n: 'white', ft: 'bandpass', f: 2600, q: 3, t, g: 0.12, pulses: ps });
      for (const [f, g, at] of [[293.7, 0.5, 0.05], [440.5, 0.4, 0.05], [881, 0.1, 0.07]]) {
        tone(v, { f, t: t + at, a: 0.03, h: 0.1, d: 1.1, g, fix: true });
        tone(v, { f: f * 1.003, t: t + at, a: 0.04, h: 0.1, d: 0.9, g: g * 0.5, fix: true });
      }
    },
    freight(v, t) { // credits in: a soft double tick
      click(v, t, { g: 0.6, f: 1800, body: 330, bd: 0.04 });
      click(v, t + rnd(0.1, 0.12), { g: 0.75, f: 2100, body: 415, bd: 0.05 });
    },
    captured(v, t) { // a world yields: a restrained, settled open fifth
      tone(v, { f: 73.4, f1: 55, ft: 0.12, t, a: 0.005, d: 0.4, g: 0.4, fix: true });
      noise(v, { n: 'brown', ft: 'lowpass', f: 400, t, a: 0.005, d: 0.3, g: 0.3 });
      pad(v, { f: 110, t: t + 0.03, a: 0.14, h: 0.7, d: 1.6, g: 0.8, lp: 1300 });
      pad(v, { f: 165, t: t + 0.03, a: 0.2, h: 0.65, d: 1.6, g: 0.6, lp: 1500 });
    },
    lostWorld(v, t) { // a world falls: the same register, sagging and soured
      tone(v, { f: 73.4, f1: 49, ft: 0.15, t, a: 0.005, d: 0.45, g: 0.4, fix: true });
      noise(v, { n: 'brown', ft: 'lowpass', f: 400, t, a: 0.005, d: 0.35, g: 0.3 });
      pad(v, { f: 110, f1: 103.8, ft: 1.4, t: t + 0.03, a: 0.1, h: 0.6, d: 1.5, g: 0.8, lp: 1400, lp1: 380, lpt: 1.8 });
      pad(v, { f: 155.6, f1: 146.8, ft: 1.4, t: t + 0.03, a: 0.16, h: 0.55, d: 1.4, g: 0.6, lp: 1500, lp1: 380, lpt: 1.8 });
    },
    lost(v, t) { // one of ours gone: a hard knock, then a hollow tone sinking away
      noise(v, { n: 'pink', ft: 'bandpass', f: 760, q: 1.6, t, a: 0.001, d: 0.09, g: 0.7 });
      noise(v, { n: 'white', ft: 'bandpass', f: 1900, q: 1.2, t, a: 0.0006, d: 0.02, g: 0.6 });
      tone(v, { f: 92, f1: 40, ft: 0.2, t, a: 0.003, d: 0.6, g: 0.55, fix: true });
      pad(v, { hollow: true, f: 233.1, f1: 174.6, ft: 1.3, t: t + 0.02, a: 0.02, h: 0.25, d: 1.5, g: 0.75, lp: 1500, lp1: 350, lpt: 1.6 });
      pad(v, { hollow: true, f: 164.8, f1: 116.5, ft: 1.5, t: t + 0.02, a: 0.05, h: 0.25, d: 1.6, g: 0.5, lp: 1200, lp1: 300, lpt: 1.6 });
      noise(v, { n: 'pink', ft: 'bandpass', f: 700, f1: 260, ftm: 1.3, q: 5, t: t + 0.02, a: 0.05, h: 0.2, d: 1.2, g: 0.08 }); // breath
    },
    won(v, t) { // three sustained notes that open out and resolve; no tune
      noise(v, { n: 'brown', ft: 'lowpass', f: 300, t, a: 0.4, h: 2.4, d: 3, g: 0.22 });
      pad(v, { f: 73.4, t, a: 0.5, h: 3.2, d: 3.2, g: 0.8, lp: 700, lp1: 1300, lpt: 2.5 });
      pad(v, { f: 110, t: t + 0.9, a: 0.6, h: 2.4, d: 3.2, g: 0.7, lp: 900, lp1: 1600, lpt: 2 });
      pad(v, { f: 185, t: t + 1.9, a: 0.7, h: 1.5, d: 3.4, g: 0.5, lp: 1000, lp1: 1900, lpt: 1.6 });
      pad(v, { f: 293.7, t: t + 1.9, a: 0.9, h: 1.3, d: 3.2, g: 0.16, lp: 1400 });
    },
    defeat(v, t) { // a tritone that sinks and closes down
      tone(v, { f: 62, f1: 30, ft: 0.4, t, a: 0.006, d: 1.4, g: 0.5, fix: true });
      noise(v, { n: 'brown', ft: 'lowpass', f: 500, f1: 70, ftm: 4, q: 1.2, t, a: 0.02, h: 1.5, d: 4, g: 0.25 });
      pad(v, { f: 73.4, f1: 65.4, ft: 4.5, t: t + 0.05, a: 0.3, h: 2.6, d: 3.2, g: 0.85, lp: 1300, lp1: 300, lpt: 5 });
      pad(v, { hollow: true, f: 207.7, f1: 185, ft: 4.5, t: t + 0.7, a: 0.5, h: 2.0, d: 3.0, g: 0.5, lp: 1400, lp1: 300, lpt: 4.5 });
      pad(v, { f: 103.8, f1: 92.5, ft: 4.5, t: t + 0.7, a: 0.5, h: 2.0, d: 3.0, g: 0.4, lp: 1000, lp1: 250, lpt: 4.5 });
    },
  };

  // -------------------------------------------------------------- voices

  function dispose(v) {
    if (v.done) return;
    v.done = true;
    const i = voices.indexOf(v);
    if (i >= 0) voices.splice(i, 1);
    for (const n of v.nodes) { try { n.disconnect(); } catch (e) { /* already gone */ } }
    for (const s of v.srcs) s.onended = null;
    liveNodes -= v.nodes.length;
    v.nodes.length = 0; v.srcs.length = 0;
  }

  function steal(v) {
    if (v.stolen || v.done) return;
    v.stolen = true;
    const now = ctx.currentTime;
    try {
      v.out.gain.cancelScheduledValues(now);
      v.out.gain.setTargetAtTime(0, now, 0.012);
      for (const s of v.srcs) s.stop(now + 0.07);
    } catch (e) { dispose(v); }
  }

  function play(type, o) {
    if (!ready() || !enabled) return;
    const def = TYPES[type];
    if (!def) return;
    const now = ctx.currentTime;
    if (lastPlay[type] !== undefined && now - lastPlay[type] < def.gap) return; // rate limit
    let same = 0, oldestSame = null;
    for (const v of voices) {
      if (v.type !== type || v.stolen) continue;
      same++;
      if (!oldestSame) oldestSame = v;
    }
    if (same >= def.max) { steal(oldestSame); same--; }
    let active = 0;
    for (const v of voices) if (!v.stolen) active++;
    if (active >= MAX_VOICES) {
      let victim = null;
      for (const v of voices) if (!v.stolen && (!victim || v.pri < victim.pri)) victim = v; // lowest priority, oldest first
      if (victim.pri > def.pri) return;
      steal(victim);
    }
    lastPlay[type] = now;

    const pan = o && typeof o.pan === 'number' ? Math.max(-1, Math.min(1, o.pan)) || 0 : 0;
    const gain = o && typeof o.gain === 'number' ? clamp01(o.gain) : 1;
    if (gain <= 0.001) return;
    const t = now + 0.012;
    const v = { type, pri: def.pri, nodes: [], srcs: [], end: 0, lastSrc: null, done: false, stolen: false,
      tune: def.tune ? semis(rnd(-def.tune, def.tune)) : 1, out: ctx.createGain() };
    // Repeats pile up: each extra copy of a sound already ringing comes in a little lower.
    v.out.gain.value = (def.lv * gain) / (1 + 0.3 * same);
    v.nodes.push(v.out);
    let tail = v.out;
    if (G.pan) {
      const p = ctx.createStereoPanner(); p.pan.value = pan * 0.75;
      v.out.connect(p); v.nodes.push(p); tail = p;
    }
    tail.connect(G.bus[def.bus]);
    const send = ctx.createGain();
    send.gain.value = def.send * (1 + (1 - gain) * 0.8); // further away = more of the room, less of the source
    tail.connect(send); send.connect(G.rev[def.rev]); v.nodes.push(send);
    voices.push(v);
    try {
      SOUNDS[type](v, t);
      liveNodes += v.nodes.length;
      if (v.lastSrc) {
        // Any source ending after the scheduled end means the voice is over
        // (normally the last one; all of them at once when stolen).
        const fin = () => { if (v.stolen || ctx.currentTime >= v.end) dispose(v); };
        for (const s of v.srcs) s.onended = fin;
      } else dispose(v);
    } catch (e) {
      liveNodes += v.nodes.length;
      for (const s of v.srcs) { try { s.stop(); } catch (e2) { /* never started */ } }
      dispose(v);
    }
  }

  // -------------------------------------------------------------- ambient bed

  function buildBed() {
    const b = { nodes: [] };
    const gain = (val, dst) => { const g = ctx.createGain(); g.gain.value = val; if (dst) g.connect(dst); return g; };
    const osc = (type, f, dst) => { const o = ctx.createOscillator(); o.type = type; o.frequency.value = f; o.connect(dst); o.start(); return o; };
    const lfo = (f, depth, param) => { const g = gain(depth, param); return osc('sine', f * rnd(0.9, 1.1), g); };
    const loop = (kind, dst, rate) => {
      const s = ctx.createBufferSource(); s.buffer = G.noise[kind]; s.loop = true; s.playbackRate.value = rate || 1;
      s.connect(dst); s.start(0, rnd(0, 1)); return s;
    };
    const biq = (type, f, q, dst) => { const q2 = ctx.createBiquadFilter(); q2.type = type; q2.frequency.value = f; q2.Q.value = q; q2.connect(dst); return q2; };

    b.out = gain(0, G.bus.amb);
    b.out.gain.setValueAtTime(0, ctx.currentTime);
    b.out.gain.linearRampToValueAtTime(1, ctx.currentTime + 5); // rise out of silence

    // Drone: a stack of open fifths, each note a slightly mistuned pair so it
    // beats slowly; slow LFOs move the balance so it never sits still.
    b.droneG = gain(1, b.out);
    const droneLP = biq('lowpass', 700, 0.5, b.droneG);
    const parts = [[36.71, 0.12], [55.0, 0.22], [55.31, 0.18], [73.52, 0.16], [82.41, 0.2], [82.86, 0.16],
      [110.2, 0.16], [164.7, 0.11], [165.6, 0.09], [220.7, 0.07], [247.3, 0.04], [330.6, 0.025]];
    parts.forEach(([f, g], i) => {
      const pg = gain(g, droneLP);
      osc('sine', f, pg);
      if (i % 2 === 1 || i > 6) lfo(0.011 + 0.0083 * i, g * 0.6, pg.gain);
    });
    lfo(0.023, 140, droneLP.frequency);

    // Air handling: brown-noise rumble, a soft mid band of moving air, and two
    // faint narrow bands (duct whistle) that also keep the bed audible on a phone.
    b.airG = gain(1, b.out);
    const rum = gain(0.3, b.airG);
    loop('brown', biq('lowpass', 240, 0.7, rum), 0.8);
    lfo(0.041, 0.12, rum.gain);
    const air = gain(0.2, b.airG);
    const airBP = biq('bandpass', 560, 0.7, air);
    loop('pink', airBP, 1);
    lfo(0.057, 0.07, air.gain); lfo(0.019, 120, airBP.frequency);
    const duct = gain(0.3, b.airG);
    const d1 = biq('bandpass', 437, 14, duct), d2 = biq('bandpass', 655, 16, duct);
    loop('pink', d1, 0.9); loop('pink', d2, 1.1);
    lfo(0.033, 0.18, duct.gain); lfo(0.013, 7, d1.frequency); lfo(0.017, 9, d2.frequency);

    // Tension: fades in with battle. A slow two-note throb underneath, and a
    // close, sour cluster above whose filter opens and whose detune widens
    // as things get worse.
    b.tenG = gain(0, b.out);
    const pulse = gain(0.5, b.tenG);
    osc('sine', 49.0, pulse); osc('sine', 50.15, gain(0.8, pulse)); osc('triangle', 98.3, gain(0.22, pulse));
    b.pulseLfo = lfo(0.7, 0.42, pulse.gain);
    b.tenLP = biq('lowpass', 300, 1.8, gain(0.32, b.tenG));
    b.tenOsc = [osc('sawtooth', 116.5, b.tenLP), osc('sawtooth', 117.3, b.tenLP), osc('sawtooth', 155.6, gain(0.6, b.tenLP)), osc('sawtooth', 58.4, b.tenLP)];
    const hiss = gain(0.09, b.tenG);
    b.tenBP = biq('bandpass', 1250, 7, hiss);
    loop('pink', b.tenBP, 1);
    lfo(0.13, 0.05, hiss.gain); lfo(0.09, 160, b.tenBP.frequency);

    // Drive: the player's ships burning. Brown-noise rumble whose filter opens
    // with the burn, two sub partials with a shudder, and a mid roar band.
    b.drvG = gain(0, b.out);
    b.drvLP = biq('lowpass', 70, 1.1, gain(2.6, b.drvG));
    loop('brown', b.drvLP, 1.15);
    const sub = gain(0.62, b.drvG);
    osc('sine', 31.2, sub); osc('sine', 46.9, gain(0.7, sub)); osc('triangle', 62.6, gain(0.3, sub));
    lfo(10.7, 0.08, sub.gain); lfo(0.31, 0.07, sub.gain);
    b.drvMidG = gain(0, b.drvG);
    b.drvBP = biq('bandpass', 300, 0.8, b.drvMidG);
    loop('pink', b.drvBP, 0.85);
    return b;
  }

  function applyState(force) {
    if (!G || !ctx) return;
    const now = ctx.currentTime;
    const set = (p, val, tau) => p.setTargetAtTime(val, now, tau);
    const z = st.zoom, bt = st.battle, bn = st.burn, p = st.paused;
    set(G.hullLP.frequency, 2400 + 4200 * z, 0.5);
    if (!bed) return;
    const near = 0.4 + 0.6 * z;
    set(bed.droneG.gain, (p ? 0.5 : 1) * (1 - 0.3 * bt), 1.0);
    set(bed.airG.gain, (p ? 0.5 : 1) * (0.65 + 0.35 * z), 0.8);
    set(bed.tenG.gain, p ? 0 : Math.pow(bt, 0.8), force ? 0.05 : 1.2);
    set(bed.tenLP.frequency, 300 + 1300 * bt * bt, 1.2);
    set(bed.pulseLfo.frequency, 0.55 + 0.5 * bt, 2);
    bed.tenOsc.forEach((o, i) => set(o.detune, (i % 2 ? 1 : -1) * 28 * bt, 2));
    set(bed.drvG.gain, p ? 0 : Math.pow(bn, 0.8) * near, 0.3);
    set(bed.drvLP.frequency, 70 + 560 * Math.pow(bn, 1.4), 0.3);
    set(bed.drvMidG.gain, 1.1 * bn * bn, 0.3);
    set(bed.drvBP.frequency, 260 + 520 * bn, 0.3);
  }

  // -------------------------------------------------------------- lifecycle

  function onVisibility() {
    if (!ctx || injected) return;
    try {
      if (document.hidden) { ctx.suspend(); return; }
      // Back on screen. After a switch to another app, iOS can report the sound as running while it is silent,
      // so do not trust the state: restart it now, again shortly, and once more on the next touch.
      stale = true;
      if (enabled) { cycle(); setTimeout(() => { if (ctx && enabled && !document.hidden) cycle(); }, 400); }
    } catch (e) { /* ignore */ }
  }
  let stale = false;
  /** Stop and start the sound clock: what a tab switch does, and what brings iOS sound back. */
  function cycle() {
    try {
      const pr = ctx.suspend();
      if (pr && pr.then) pr.then(() => wake()).catch(() => wake()); else wake();
    } catch (e) { wake(); }
  }

  /** Start the clock again and put the volume back (after the page was hidden, the old fades are stuck in the past). */
  function wake() {
    const done = () => { try { G.master.gain.cancelScheduledValues(ctx.currentTime); G.master.gain.setValueAtTime(masterTarget(), ctx.currentTime); } catch (e) { /* ignore */ } };
    const pr = ctx.resume();
    if (pr && pr.then) pr.then(done).catch(() => {}); else done();
  }
  function unlock() {
    if (dead) return;
    try {
      if (!ctx) {
        if (injected) ctx = injected;
        else {
          const AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
          if (!AC) { dead = true; return; }
          ctx = new AC({ latencyHint: 'interactive' });
        }
        G = build();
        if (wantBed) bed = buildBed();
        G.master.gain.setValueAtTime(masterTarget(), ctx.currentTime);
        applyState(true);
        if (!injected) {
          // iOS wants a source started inside the gesture before it will make sound.
          const s = ctx.createBufferSource(); s.buffer = ctx.createBuffer(1, 1, ctx.sampleRate);
          s.connect(ctx.destination); s.start(0);
          s.onended = () => s.disconnect();
          if (typeof document !== 'undefined') document.addEventListener('visibilitychange', onVisibility);
          if (typeof window !== 'undefined') { window.addEventListener('pageshow', onVisibility); window.addEventListener('focus', () => { stale = true; }); }
        }
      }
      // 'suspended' before the first gesture, 'interrupted' after a call or a tab switch on iOS.
      if (!injected && enabled && !(typeof document !== 'undefined' && document.hidden)) {
        if (stale) {
          stale = false;
          const b = ctx.createBufferSource(); b.buffer = ctx.createBuffer(1, 1, ctx.sampleRate);
          b.connect(ctx.destination); b.start(0); b.onended = () => b.disconnect();
          cycle();
        } else if (ctx.state !== 'running') wake();
      }
    } catch (e) {
      dead = true; ctx = null; G = null; bed = null;
    }
  }

  function setEnabled(on) {
    enabled = !!on;
    if (dead || !ctx || !G) return;
    try {
      G.master.gain.setTargetAtTime(masterTarget(), ctx.currentTime, 0.06);
      if (injected) return;
      clearTimeout(suspendTimer);
      if (enabled) { const pr = ctx.resume(); if (pr && pr.catch) pr.catch(() => {}); }
      else suspendTimer = setTimeout(() => { if (!enabled && ctx) { const pr = ctx.suspend(); if (pr && pr.catch) pr.catch(() => {}); } }, 400); // stop using the battery once faded
    } catch (e) { /* ignore */ }
  }

  function setVolume(x) {
    volume = clamp01(x);
    if (dead || !ctx || !G) return;
    try { G.master.gain.setTargetAtTime(masterTarget(), ctx.currentTime, 0.05); } catch (e) { /* ignore */ }
  }

  let lastUpdate = -1, dirty = false;
  function update(s) {
    if (!s) return;
    const burn = clamp01(s.burn), battle = clamp01(s.battle), zoom = s.zoom === undefined ? st.zoom : clamp01(s.zoom), paused = !!s.paused;
    if (Math.abs(burn - st.burn) > 0.004 || Math.abs(battle - st.battle) > 0.004 ||
      Math.abs(zoom - st.zoom) > 0.004 || paused !== st.paused) {
      st.burn = burn; st.battle = battle; st.zoom = zoom; st.paused = paused;
      dirty = true;
    }
    if (!dirty || !ready()) return;
    const now = ctx.currentTime;
    if (lastUpdate >= 0 && now - lastUpdate < 0.03 && now >= lastUpdate) return; // at most ~30 param updates a second
    lastUpdate = now; dirty = false;
    applyState(false);
  }

  return {
    unlock,
    setEnabled,
    setVolume,
    update(s) { try { update(s); } catch (e) { /* never break the frame loop */ } },
    play(type, o) { try { play(type, o); } catch (e) { /* never break the game */ } },
    // For tests and tuning only.
    _debug() { return { voices: voices.length, nodes: liveNodes, state: ctx ? ctx.state : 'none', dead }; },
  };
}
