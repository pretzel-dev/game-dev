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
const orbit = () => page.evaluate(() => ({ ...window.__starfall.view.orbit }));
const cdp = await page.context().newCDPSession(page);
const touch = (type, points) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: points.map(([x, y], id) => ({ x, y, id })) });
async function gesture(from, to, steps = 12) {
  await touch('touchStart', from);
  for (let i = 1; i <= steps; i++) {
    await touch('touchMove', from.map(([x, y], k) => [x + ((to[k][0] - x) * i) / steps, y + ((to[k][1] - y) * i) / steps]));
  }
  await touch('touchEnd', []);
  await page.waitForTimeout(100);
}

// One-finger drag, starting on your own (unselected) star, rotates the view.
const h = await screenOf(ids.home);
let o0 = await orbit();
await gesture([[h.x, h.y]], [[h.x + 120, h.y - 40]]);
let o1 = await orbit();
const rotated = Math.abs(o1.az - o0.az) > 0.1;
const noFleetFromDrag = (await page.evaluate(() => window.__starfall.game.fleets.filter((f) => f.owner === 0).length)) === 0;

// Two-finger pinch outwards zooms in, inwards zooms out.
o0 = await orbit();
await gesture([[160, 400], [230, 480]], [[100, 330], [290, 560]]);
o1 = await orbit();
const zoomedIn = o1.dist < o0.dist * 0.8;
await gesture([[100, 330], [290, 560]], [[160, 400], [230, 480]]);
const o2 = await orbit();
const zoomedOut = o2.dist > o1.dist * 1.2;
await page.waitForTimeout(800);

// Order: tap home, tap target, Launch.
const h2 = await screenOf(ids.home);
await page.touchscreen.tap(h2.x, h2.y);
await page.waitForTimeout(300);
const selected = await page.evaluate(() => !document.getElementById('actions').hidden);
const t = await screenOf(ids.target);
await page.touchscreen.tap(t.x, t.y);
await page.waitForTimeout(300);
const ordered = await page.evaluate(() => !document.getElementById('order').hidden);
await page.screenshot({ path: `${out}/2-order.png` });
await page.tap('#launch');
await page.waitForTimeout(400);
const fleets = await page.evaluate(() => window.__starfall.game.fleets.filter((f) => f.owner === 0).length);
await page.waitForTimeout(6000);
await page.screenshot({ path: `${out}/3-in-flight.png` });
const result = { rotated, noFleetFromDrag, zoomedIn, zoomedOut, selected, ordered, fleets, errors };
console.log(JSON.stringify(result));
await browser.close();
if (!rotated || !noFleetFromDrag || !zoomedIn || !zoomedOut || !selected || !ordered || fleets < 1 || errors.length) process.exit(1);
