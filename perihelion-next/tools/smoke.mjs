// Phone-sized touch test of the built game: title, setup, select ships, plot a
// course, launch it, build, research, the menu and the new-game options.
// Needs `npm run preview` (port 4173, or pass a URL). Usage: node tools/smoke.mjs [baseUrl] [outDir]
import { createRequire } from 'module';
const { chromium } = createRequire(import.meta.url)('playwright');
const base = (process.argv[2] || 'http://localhost:4173/') + '?gfx=low';
const out = process.argv[3] || null;
const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, hasTouch: true, isMobile: true });
page.setDefaultTimeout(90000);
const tap0 = page.tap.bind(page);
// Panels redraw as the game runs: click the element itself rather than wait for it to hold still.
// On touch the first tap on a button shows what it does (it gains the class `arm`); a second tap does it.
page.tap = async (sel) => {
  await page.waitForSelector(sel);
  try {
    await page.$eval(sel, (el) => el.click());
    await page.waitForTimeout(350);
    if (await page.$(`${sel}.arm`)) await page.$eval(`${sel}.arm`, (el) => el.click());
  } catch { await tap0(sel); }
};
const errors = [];
page.on('pageerror', (e) => errors.push(String(e).slice(0, 200)));
page.on('console', (m) => m.type() === 'error' && errors.push(m.text().slice(0, 200)));
const shot = async (name) => { if (out) await page.screenshot({ path: `${out}/${name}.png` }); };
await page.goto(base);
await page.waitForSelector('[data-a="setup"]');
await page.waitForTimeout(1500);
await shot('title');
await page.tap('[data-a="setup"]');
await page.tap('[data-a="launch"]');
await page.waitForFunction(() => window.__perihelion && window.__perihelion.me === 0);
// (wait until the first frames have drawn the player's ships)
await page.waitForFunction(() => { const { game, view } = window.__perihelion; const s = game.ships.find((x) => x.owner === 0); return s && view.screenOfShip(s.id); });
await page.waitForTimeout(1500);
const P = () => page.evaluate(() => {
  const { game, view } = window.__perihelion;
  const home = game.homes[0], moon = game.bodies.find((b) => b.parent === home.id);
  const s = game.ships.find((x) => x.owner === 0);
  return { ship: view.screenOfShip(s.id), moon: view.screenOf(moon.id), home: view.screenOf(home.id), moonId: moon.id };
});
let p = await P();
await page.touchscreen.tap(p.ship.x, p.ship.y);
await page.waitForTimeout(2000); // (the view glides to lock onto what was tapped)
const selected = await page.evaluate(() => window.__perihelion.ui.sel.size);
p = await P();
await page.touchscreen.tap(p.moon.x, p.moon.y);
await page.waitForTimeout(500);
// (If the moon sits under the panel the tap cannot reach it: turn the view until it is clear, then tap.)
for (let i = 0; i < 6 && !(await page.evaluate(() => window.__perihelion.ui.target != null)); i++) {
  await page.evaluate(() => { window.__perihelion.view.orbit.az += 1; });
  await page.waitForTimeout(700);
  p = await P();
  if (p.moon.y < 480 && p.moon.y > 80) await page.touchscreen.tap(p.moon.x, p.moon.y);
  await page.waitForTimeout(400);
}
await page.waitForSelector('[data-a="go"]');
await shot('routes');
const routes = await page.evaluate(() => window.__perihelion.ui.routes.map((r) => r.key));
for (let i = 0; i < 4; i++) {
  await page.tap('[data-a="go"][data-v="hard"]');
  await page.waitForTimeout(500);
  if (await page.evaluate(() => window.__perihelion.game.ships.some((x) => x.owner === 0 && x.order))) break;
}
const ordered = await page.evaluate((id) => window.__perihelion.game.ships.filter((s) => s.owner === 0 && s.order && s.order.body === id).length, p.moonId);
await page.tap('[data-a="clear"]');
await page.evaluate(() => { window.__perihelion.game.credits[0] = 3000; });
p = await P();
await page.touchscreen.tap(p.home.x, p.home.y);
await page.waitForTimeout(300);
// (A station or moon may sit right over the capital on screen: make sure it is the capital that is selected.)
await page.evaluate(() => { const { game, ui } = window.__perihelion; if (ui.selBody !== game.homes[0].id) { ui.sel = new Set(); ui.selBody = game.homes[0].id; } });
await page.waitForSelector('[data-a="slot"]');
await page.tap('[data-a="slot"]');
await page.tap('[data-a="build"][data-v="mine"]');
await page.waitForTimeout(500);
// (A synthetic click can land on a button the panel has just redrawn: try again if nothing was ordered.)
for (let i = 0; i < 4; i++) {
  await page.tap('[data-a="ship"][data-v="corvette"]');
  await page.waitForTimeout(400);
  if (await page.evaluate(() => window.__perihelion.game.homes[0].queue.length)) break;
}
await page.waitForTimeout(300);
await page.tap('#rnd');
await page.tap('[data-a="node"][data-v="weapons:guided"]');
await page.tap('[data-a="research"][data-v="weapons:guided"]');
await page.waitForTimeout(500);
await shot('research');
const state = await page.evaluate(() => { const { game, S } = window.__perihelion; const h = game.homes[0]; return { why: S.cantOrderShip(game, h, 'corvette'), credits: game.credits[0], sel: window.__perihelion.ui.selBody, mine: h.structures.some((x) => x.type === 'mine'), queue: h.queue.length, project: game.tech[0].project?.line }; });
await page.tap('[data-a="closeSheet"]');
await page.tap('#menuBtn');
const brief = (await page.$('[data-a="gfx"]')) ? 'graphics in the menu' : '';
await shot('menu');
await page.tap('[data-a="quit"]');
await page.tap('[data-a="setup"]');
const winby = !!(await page.$('[data-a="winby"][data-v="conquest"]'));
const result = { selected, routes, ordered, ...state, brief, errors };
console.log(JSON.stringify(result));
await browser.close();
process.exit(selected > 0 && ordered > 0 && state.mine && state.queue === 1 && state.project === 'weapons' && brief && winby && !errors.length ? 0 : 1);
