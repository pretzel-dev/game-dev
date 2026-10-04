import { open } from './lib.mjs';
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
const here = (f) => new URL(f, import.meta.url);
const [,, shotList, out, mode] = process.argv;
const preview = mode === 'preview';
mkdirSync(out, { recursive: true });
const { browser, page, ev } = await open({ dsf: preview ? 0.5 : 2 });
await page.addScriptTag({ content: readFileSync(here('overlay.js'), 'utf8') });
await page.addScriptTag({ content: readFileSync(here('shots.js'), 'utf8') });
await ev(() => document.fonts.load('700 100px Rajdhani').then(() => document.fonts.load('600 30px Rajdhani')).then(() => document.fonts.load('500 30px Rajdhani')));
await page.setViewportSize({ width: 60, height: 108 }); await ev(() => window.__tick(16, 3));
await page.keyboard.press('5');
await ev(() => window.__tick(100, 450));
await page.setViewportSize({ width: 540, height: 960 }); await ev(() => window.__tick(16, 2));
await page.keyboard.press('2');
const fp = await ev(() => window.__perihelion.game.bodies.map((b) => b.owner).join(''));
console.log('fingerprint', fp, JSON.stringify(await ev(() => window.__ids_fn())));
for (const si of shotList.split(',').map(Number)) {
  const t0 = Date.now();
  const warp = await ev((si) => { window.__shots[si].setup(); return !!window.__warp; }, si);
  if (warp) await page.keyboard.press('5');
  const { start, n } = await ev((si) => ({ start: window.__shots[si].start, n: window.__shots[si].n }), si);
  await ev((si) => { for (let k = 0; k < (window.__shots[si].settle || 2); k++) { window.__shots[si].frame(0, window.__shots[si].n); window.__tick(33); } }, si); // settle
  for (let i = 0; i < n; i++) {
    const want = !preview || i % 6 === 0;
    const d = await ev(({ si, i, start, want }) => {
      const sh = window.__shots[si]; const ms = sh.frame(i, sh.n);
      window.__tick(ms);
      return want ? window.__comp(start + i) : null;
    }, { si, i, start, want });
    if (d) writeFileSync(`${out}/f${String(start + i).padStart(4, '0')}.jpg`, Buffer.from(d.split(',')[1], 'base64'));
  }
  if (warp) await page.keyboard.press('2');
  console.log('shot', si, 'done', ((Date.now() - t0) / 1000).toFixed(0) + 's');
}
await browser.close();
