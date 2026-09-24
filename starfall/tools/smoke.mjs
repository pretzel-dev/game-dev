// Touch smoke test on a phone-sized viewport. Needs `npm run preview` running.
// Usage: node tools/smoke.mjs [outDir]
import { chromium } from 'playwright';
const out = process.argv[2] || '.';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
await page.goto('http://localhost:4173/');
await page.waitForTimeout(1500);
await page.screenshot({ path: `${out}/1-menu.png` });
await page.tap('#play');
await page.waitForTimeout(800);

const screenOf = (id) => page.evaluate((id) => {
  const { game, view } = window.__starfall;
  // Find the label position for the system (the label sits just under the star).
  const lbl = document.querySelectorAll('.lbl')[id].getBoundingClientRect();
  return { x: lbl.x + lbl.width / 2, y: lbl.y - 14, owner: game.systems[id].owner };
}, id);
const ids = await page.evaluate(() => {
  const { game } = window.__starfall;
  const home = game.systems.find((s) => s.owner === 0);
  const d = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
  const near = game.systems.filter((s) => s.owner === -1).sort((a, b) => d(a.pos, home.pos) - d(b.pos, home.pos))[0];
  return { home: home.id, target: near.id };
});
const h = await screenOf(ids.home);
await page.touchscreen.tap(h.x, h.y);
await page.waitForTimeout(300);
const selected = await page.evaluate(() => !document.getElementById('actions').hidden);
const t = await screenOf(ids.target);
await page.touchscreen.tap(t.x, t.y);
await page.waitForTimeout(400);
const fleets = await page.evaluate(() => window.__starfall.game.fleets.filter((f) => f.owner === 0).length);
await page.screenshot({ path: `${out}/2-sent.png` });
await page.waitForTimeout(12000);
await page.screenshot({ path: `${out}/3-later.png` });
const result = { selected, fleets, errors };
console.log(JSON.stringify(result));
await browser.close();
if (!selected || fleets < 1 || errors.length) process.exit(1);
