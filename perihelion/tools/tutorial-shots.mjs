// Screenshots for the How to play page. Needs `npm run preview` running (port 4173).
// Usage: node tools/tutorial-shots.mjs  -> writes public/tutorial/*.jpg
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
const out = new URL('../public/tutorial/', import.meta.url).pathname;
mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 640, height: 400 }, deviceScaleFactor: 1.5, hasTouch: true });
await page.goto('http://localhost:4173/');
await page.waitForTimeout(1200);
await page.tap('#play');
await page.waitForTimeout(1500);
const shot = async (name) => { await page.waitForTimeout(700); await page.screenshot({ path: out + name + '.jpg', type: 'jpeg', quality: 72 }); };
const ev = (fn, arg) => page.evaluate(fn, arg);
const ids = await ev(() => {
  const { game } = window.__perihelion;
  const home = game.bodies.find((b) => b.owner === 0);
  const near = game.bodies.filter((b) => b.owner === -1 && b.parent !== null).sort((a, b) => Math.abs(a.r - home.r) - Math.abs(b.r - home.r));
  return { home: home.id, t: (game.bodies.find((b) => b.owner === -1 && b.parent === home.id) || near[0]).id };
});

// 1. The system with your homeworld.
await ev(() => { const { view } = window.__perihelion; view.orbit.follow = null; view.orbit.target.set(0, 0, 0); view.orbit.dist = 260; view.orbit.pol = 0.8; });
await shot('worlds');

// 2. Launch: home selected, target picked, preview curve.
await ev(({ home, t }) => {
  const { view, ui, game } = window.__perihelion;
  game.bodies[home].ships = 8;
  view.focus(game, home); view.orbit.goalDist = null; view.orbit.dist = 70;
  ui.selected = home; ui.mode = 'launch'; ui.target = t; ui.count = 4;
}, ids);
await page.waitForTimeout(600);
await page.tap('#more'); await page.tap('#less');
await shot('launch');

// 4. Build row (before launching, so the home still has ships).
await ev(({ home }) => { const { ui } = window.__perihelion; ui.mode = null; ui.target = null; ui.selected = home; }, ids);
await page.tap('#less').catch(() => {});
await shot('build');

// 3. A fleet mid-flight.
await ev(({ home, t }) => {
  const { game, ui, view, sim } = window.__perihelion;
  ui.selected = ui.target = ui.mode = null;
  sim.launch(game, game.bodies[home], game.bodies[t], 4);
  const f = game.fleets.find((x) => x.owner === 0);
  f.t0 -= f.T * 0.45;
  view.orbit.follow = null; view.orbit.dist = 90;
}, ids);
await ev(() => { const { game, view } = window.__perihelion; const f = game.fleets.find((x) => x.owner === 0); const p = window.__perihelion.sim.fleetState(f, game.time); view.orbit.target.set(p.x, p.y, p.z); });
await shot('flight');

// 5. A battle: a big fleet arriving at a guarded neutral.
await ev(({ t }) => {
  const { game, view } = window.__perihelion;
  const f = game.fleets.find((x) => x.owner === 0); f.n = 12; f.t0 = game.time - f.T + 0.5;
  game.bodies[t].ships = 8;
  view.focus(game, t); view.orbit.goalDist = null; view.orbit.dist = 22;
}, ids);
await page.waitForTimeout(3500);
await shot('battle');

// 6. Research sheet.
await ev(({ home }) => { const { game, view } = window.__perihelion; game.credits[0] = 2000; view.focus(game, home); view.orbit.goalDist = null; view.orbit.dist = 120; }, ids);
await page.tap('#rnd');
await shot('research');
await browser.close();
console.log('wrote', out);
