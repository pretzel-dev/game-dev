// Touch smoke test on a phone-sized viewport. Needs `npm run preview` running (port 4173).
// Usage: node tools/smoke.mjs [outDir]
import { chromium } from 'playwright';
const out = process.argv[2] || '.';
const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
await page.goto('http://localhost:4173/');
await page.waitForTimeout(1500);
await page.screenshot({ path: out + '/ph-menu.png' });
await page.tap('#play');
await page.waitForTimeout(1200);
await page.screenshot({ path: out + '/ph-system.png' });
// Select home, pick the nearest neutral and launch.
const ids = await page.evaluate(() => {
  const { game } = window.__perihelion;
  const home = game.bodies.find((b) => b.owner === 0);
  const t = game.bodies.filter((b) => b.owner === -1 && b.parent === home.id)[0] || game.bodies.filter((b) => b.owner === -1)[0];
  return { home: home.id, t: t.id };
});
const pos = (id) => page.evaluate((id) => window.__perihelion.view.screenOf(id), id);
await page.evaluate((id) => { const { view, game } = window.__perihelion; view.focus(game, id); view.orbit.dist = 90; }, ids.home);
await page.waitForTimeout(1500);
let p = await pos(ids.home); await page.touchscreen.tap(p.x, p.y); await page.waitForTimeout(400);
const selected = await page.evaluate(() => !document.getElementById('actions').hidden);
ids.t = await page.evaluate(() => {
  const { game, view } = window.__perihelion;
  const on = game.bodies.filter((b) => b.owner === -1).map((b) => ({ id: b.id, ...view.screenOf(b.id) }))
    .filter((q) => q.x > 30 && q.x < 360 && q.y > 120 && q.y < 700);
  return on[0]?.id ?? game.bodies.find((b) => b.owner === -1).id;
});
p = await pos(ids.t); await page.touchscreen.tap(p.x, p.y); await page.waitForTimeout(400);
const info = await page.textContent('#info'); console.log('target on screen', JSON.stringify(p));
await page.screenshot({ path: out + '/ph-order.png' });
await page.tap('#more'); await page.tap('#launch');
await page.waitForTimeout(300);
const fleets = await page.evaluate(() => window.__perihelion.game.fleets.filter((f) => f.owner === 0).map((f) => f.n));
// Fast-forward to the burn and look at the fleet.
await page.evaluate(() => { const { game } = window.__perihelion; const f = game.fleets.find((x) => x.owner === 0); if (f) f.t0 -= f.T * 0.3; });
await page.tap('#warp');
await page.waitForTimeout(1500);
await page.screenshot({ path: out + '/ph-flight.png' });
console.log(JSON.stringify({ selected, info, fleets, errors }));
await browser.close();
