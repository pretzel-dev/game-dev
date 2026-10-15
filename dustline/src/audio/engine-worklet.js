/**
 * The engine, synthesised sample by sample in an AudioWorklet.
 *
 * A real engine is a train of combustion pulses (one per cylinder firing)
 * ringing through the exhaust: that is what makes it sound like an engine
 * and not a synth. So this is a "pulse train plus resonators" model, the
 * approach in the engine-sound literature (e.g. Doerfler and Wyse 2026's
 * Pulse-Train-Resonator model):
 *
 *  - a four-cylinder, four-stroke crank: two firings per revolution, each
 *    cylinder a little different in strength, with a little jitter, which
 *    is the lumpy burble you hear at idle;
 *  - each firing is a short pressure pulse (a sharp click with a body);
 *  - two exhaust pipes as Karplus-Strong style comb resonators (a delay line
 *    with a damped feedback loop) that give it its tone;
 *  - a muffler: a lowpass that opens up with load, and soft saturation;
 *  - intake hiss that rises with throttle;
 *  - on the overrun (lifting off at high revs), unburnt fuel popping in the
 *    exhaust: the crackle rally cars make.
 *
 * Exported as source text, loaded through a Blob URL, so the build needs no
 * extra file handling.
 */
export const ENGINE_WORKLET = /* js */ `
class Comb {
  constructor(len) {
    this.buf = new Float32Array(len);
    this.i = 0;
    this.lp = 0;
  }
  run(x, delay, feedback, damp) {
    const n = this.buf.length;
    let r = this.i - delay;
    if (r < 0) r += n;
    const r0 = Math.floor(r);
    const f = r - r0;
    const a = this.buf[r0 % n];
    const b = this.buf[(r0 + 1) % n];
    const y = a + (b - a) * f;
    this.lp += (y - this.lp) * damp;
    this.buf[this.i] = x + this.lp * feedback;
    this.i = (this.i + 1) % n;
    return y;
  }
}

class EngineProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      { name: 'rpm', defaultValue: 900, minValue: 300, maxValue: 9000, automationRate: 'k-rate' },
      { name: 'load', defaultValue: 0, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
    ];
  }

  constructor() {
    super();
    this.phase = 0; // 0..1 per two crank revolutions
    this.nextFire = 0;
    this.cyl = 0;
    this.strength = [1, 0.84, 0.95, 0.78];
    this.pulse = 0; // current pulse envelope
    this.pulseAmp = 0;
    this.body = 0;
    this.pipeA = new Comb(4096);
    this.pipeB = new Comb(4096);
    this.lp1 = 0;
    this.lp2 = 0;
    this.dc = 0;
    this.dcOut = 0;
    this.hiss = 0;
    this.lastLoad = 0;
    this.overrun = 0;
    this.smoothRpm = 900;
  }

  process(inputs, outputs, params) {
    const out = outputs[0][0];
    if (!out) return true;
    const sr = sampleRate;
    const targetRpm = params.rpm[0];
    const load = params.load[0];
    // Lifting off hard at high revs: a few seconds of crackle.
    if (this.lastLoad - load > 0.4 && this.smoothRpm > 4200) this.overrun = 1.2;
    this.lastLoad = load;

    for (let i = 0; i < out.length; i++) {
      this.smoothRpm += (targetRpm - this.smoothRpm) * 0.0006;
      const rpm = this.smoothRpm;
      // Four cylinders, four strokes: four firings per two revolutions.
      const cycleHz = rpm / 120;
      this.phase += cycleHz / sr;
      if (this.phase >= this.nextFire) {
        const k = this.cyl;
        this.cyl = (this.cyl + 1) % 4;
        this.nextFire += 0.25 * (1 + (Math.random() - 0.5) * 0.03);
        if (this.phase > 1) {
          this.phase -= 1;
          this.nextFire -= 1;
        }
        // Firing strength: load, cylinder character, jitter. At idle it is
        // lumpier; under load it evens out.
        const lump = 1 - (1 - this.strength[k]) * (1.2 - load);
        let amp = (0.2 + 0.8 * load) * lump * (0.9 + Math.random() * 0.2);
        // Overrun pops: occasional big bangs with no load.
        if (this.overrun > 0 && load < 0.1 && Math.random() < 0.12) amp = 0.9 + Math.random() * 0.8;
        this.pulseAmp = amp;
        this.pulse = 1;
      }
      // The pulse: a sharp, noisy click with a short body behind it.
      const tau = 0.00055 + 0.0009 * (1 - load);
      this.pulse *= Math.exp(-1 / (tau * sr));
      const click = this.pulse * this.pulseAmp * (0.75 + 0.5 * Math.random());
      this.body += (click - this.body) * 0.08;
      const excite = click * 0.6 + this.body * 1.4;

      // Exhaust pipes: resonances that move a little with rpm (hotter gas,
      // faster sound), which is where the "rasp" changes as it revs.
      const da = sr / (115 + rpm * 0.012);
      const db = sr / (310 + rpm * 0.02);
      const a = this.pipeA.run(excite, da, 0.62, 0.35);
      const b = this.pipeB.run(excite, db, 0.48, 0.5);
      let x = excite * 0.35 + a * 0.8 + b * 0.5;

      // Muffler: two one-pole lowpasses, opening with load and rpm.
      const cut = Math.min(0.6, (500 + load * 2200 + rpm * 0.25) / sr * 6.28);
      this.lp1 += (x - this.lp1) * cut;
      this.lp2 += (this.lp1 - this.lp2) * cut;
      x = this.lp2;

      // Intake and mechanical hiss.
      this.hiss += ((Math.random() * 2 - 1) - this.hiss) * 0.3;
      x += this.hiss * (0.015 + 0.05 * load) * (0.6 + 0.4 * this.pulse);

      // Remove DC, saturate gently.
      this.dcOut = x - this.dc + 0.995 * this.dcOut;
      this.dc = x;
      out[i] = Math.tanh(this.dcOut * 2.2) * 0.7;
    }
    if (this.overrun > 0) this.overrun -= out.length / sr;
    for (let c = 1; c < outputs[0].length; c++) outputs[0][c].set(out);
    return true;
  }
}

registerProcessor('dustline-engine', EngineProcessor);
`;
