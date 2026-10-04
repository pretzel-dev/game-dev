import { chromium } from 'playwright';
export async function open({ w = 540, h = 960, dsf = 2, prefs = { rivals: 2, difficulty: 'hard', system: 'classic' }, seed = 7 } = {}) {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: dsf, hasTouch: true });
  page.on('pageerror', (e) => console.log('PAGEERR', e.message));
  await page.addInitScript(({ prefs, seed }) => {
    localStorage.setItem('perihelion', JSON.stringify(prefs));
    localStorage.setItem('perihelion-tut', '1');
    let s = seed >>> 0; window.__reseed = () => { s = seed >>> 0; };
    Math.random = () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    let vt = 1000; const q = [];
    performance.now = () => vt;
    window.requestAnimationFrame = (cb) => { q.push(cb); return q.length; };
    window.__tick = (ms, n = 1) => { for (let i = 0; i < n; i++) { vt += ms; const c = q.splice(0); for (const f of c) f(vt); } };
  }, { prefs, seed });
  await page.goto(process.env.URL || 'http://localhost:4173/');
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.__reseed());
  await page.tap('#play');
  await page.evaluate(() => window.__tick(16, 2));
  return { browser, page, ev: (fn, a) => page.evaluate(fn, a) };
}
