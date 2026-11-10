// Opens the game (vite dev server) on a fake clock, starts a seeded match and
// fast-forwards it with AIs playing every seat, without rendering.
import { chromium } from 'playwright';
const URL = process.env.URL || 'http://localhost:5173/';
export async function open({ w = 540, h = 960, dsf = 2, system = 'classic', seed = 19, minutes = 14 } = {}) {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: dsf, hasTouch: true });
  page.on('pageerror', (e) => console.log('PAGEERR', e.message));
  await page.addInitScript(({ system, seed }) => {
    localStorage.setItem('perihelion', JSON.stringify({ rivals: 2, difficulty: 'hard', system }));
    let s = 7;
    const real = () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    window.__force = null;
    Math.random = () => { if (window.__force !== null) { const v = window.__force;  window.__force = null; return v; } return real(); };
    window.__seed = seed;
    let vt = 1000; const q = [];
    performance.now = () => vt;
    window.requestAnimationFrame = (cb) => { q.push(cb); return q.length; };
    window.__tick = (ms, n = 1) => { for (let i = 0; i < n; i++) { vt += ms; const c = q.splice(0); for (const f of c) f(vt); } };
  }, { system, seed });
  await page.goto(URL);
  await page.waitForFunction(() => !!window.__perihelion);
  await page.waitForTimeout(1500);
  await page.evaluate(async () => {
    window.S = await import('/src/sim.js');
    window.A = await import('/src/ai.js');
    window.__force = window.__seed / 2 ** 31;
  });
  await page.tap('#play');
  const info = await page.evaluate(({ seed, minutes }) => {
    const { game: g } = window.__perihelion;
    const mk = (s) => () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const ais = [0, 1, 2].map((i) => A.createAI(i, 'hard', mk(seed * 7 + i)));
    for (let k = 0; k < minutes * 240; k++) { for (const ai of ais) A.tickAI(g, ai, 0.25); S.step(g, 0.25); g.events.length = 0; if (g.winner != null) break; }
    window.__ais = ais;
    return { seed: g.seed, time: g.time, worlds: [0, 1, 2].map((o) => g.bodies.filter((x) => x.owner === o).length) };
  }, { seed, minutes });
  await page.evaluate(() => window.__tick(16, 2));
  return { browser, page, info, ev: (fn, a) => page.evaluate(fn, a) };
}
