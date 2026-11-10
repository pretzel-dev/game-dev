// Films shots of the trailer as numbered JPEG frames.
// Usage: node trailer.mjs <job> <outdir> [preview]   (jobs below; run several at once)
import { open } from './lib.mjs';
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
const here = (f) => new URL(f, import.meta.url);
// Where each shot sits in the cut (frame numbers at 30 fps).
const START = { orbits: 0, flip: 75, assist: 135, empire: 180, wonder: 240, battle: 285, binary: 345, court: 360, crowded: 375, title: 390 };
const JOBS = {
  a: { system: 'classic', seed: 17, minutes: 14, shots: ['orbits', 'flip', 'assist'] },
  b: { system: 'classic', seed: 17, minutes: 14, shots: ['empire', 'wonder'] },
  c: { system: 'classic', seed: 17, minutes: 14, shots: ['battle', 'title'] },
  d: { system: 'binary', seed: 5, minutes: 8, shots: ['binary'] },
  e: { system: 'court', seed: 5, minutes: 8, shots: ['court'] },
  f: { system: 'crowded', seed: 5, minutes: 8, shots: ['crowded'] },
};
const [,, job, out, mode] = process.argv;
const preview = mode === 'preview';
const J = JOBS[job];
mkdirSync(out, { recursive: true });
const { browser, page, ev, info } = await open({ dsf: preview ? 0.5 : 2, system: J.system, seed: J.seed, minutes: J.minutes });
console.log(job, JSON.stringify(info));
await page.addScriptTag({ content: readFileSync(here('overlay.js'), 'utf8') });
await page.addScriptTag({ content: readFileSync(here('shots.js'), 'utf8') });
await ev(() => Promise.all(['700 100px Rajdhani', '600 30px Rajdhani'].map((f) => document.fonts.load(f))));
for (const name of J.shots) {
  const t0 = Date.now(), start = START[name];
  const n = await ev((name) => { const s = window.__shots[name]; s.setup(); s.frame(0, s.n); window.__tick(33); s.frame(0, s.n); window.__tick(33); return s.n; }, name);
  for (let i = 0; i < n; i++) {
    const want = !preview || i % 5 === 0;
    const d = await ev(({ name, i, start, want }) => { const s = window.__shots[name]; window.__tick(s.frame(i, s.n)); return want ? window.__comp(start + i) : null; }, { name, i, start, want });
    if (d) writeFileSync(`${out}/f${String(start + i).padStart(4, '0')}.jpg`, Buffer.from(d.split(',')[1], 'base64'));
  }
  console.log(name, 'done', ((Date.now() - t0) / 1000).toFixed(0) + 's', JSON.stringify(await ev(() => window.__assist || null)));
}
await browser.close();
