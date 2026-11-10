// Two-browser multiplayer test: host and guest in one lobby, start, the guest
// gives an order and sees it happen. Needs `npm run preview` (port 4173 by
// default, or pass a URL) and a local PeerJS server: `npx peerjs --port 9000 --host 127.0.0.1`.
// Usage: node tools/mp-smoke.mjs [baseUrl]
import { createRequire } from 'module';
const { chromium } = createRequire(import.meta.url)('playwright');
const base = (process.argv[2] || 'http://localhost:4173/') + '?gfx=low&peer=127.0.0.1:9000';
const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
const open = async () => {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await ctx.newPage();
  page.setDefaultTimeout(90000);
  const tap0 = page.tap.bind(page);
  // Panels redraw as the game runs: click the element itself rather than wait for it to hold still.
  page.tap = async (sel) => { await page.waitForSelector(sel); try { await page.$eval(sel, (el) => el.click()); } catch { await tap0(sel); } };
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(String(e).slice(0, 200)));
  await page.goto(base);
  await page.waitForSelector('[data-a="mp"]');
  await page.tap('[data-a="mp"]');
  return page;
};
const host = await open(), guest = await open();
await host.fill('#mpname', 'Host');
await host.tap('[data-a="host"]');
await host.waitForFunction(() => /^[A-Z]{5}$/.test(document.querySelector('.code')?.textContent || ''));
const code = await host.textContent('.code');
await guest.fill('#mpname', 'Guest');
await guest.tap('[data-v="holds"]');
await guest.fill('#mpcode', code);
await guest.tap('[data-a="join"]');
await host.waitForFunction(() => document.querySelectorAll('#panel .opt').length === 2);
await host.tap('[data-a="startMP"]');
await guest.waitForFunction(() => window.__perihelion && window.__perihelion.me === 1 && window.__perihelion.game.mp);
await guest.waitForTimeout(1500);
// The guest orders its ships to its capital's moon, through act().
const moon = await guest.evaluate(() => {
  const { game, act } = window.__perihelion;
  const home = game.homes[1], m = game.bodies.find((b) => b.parent === home.id);
  act({ t: 'order', ids: game.ships.filter((s) => s.owner === 1).map((s) => s.id), order: { type: 'orbit', body: m.id, profile: 'hard' } });
  return m.id;
});
await guest.waitForFunction((id) => window.__perihelion.game.ships.some((s) => s.owner === 1 && s.order && s.order.body === id), moon);
const onHost = await host.evaluate((id) => window.__perihelion.game.ships.filter((s) => s.owner === 1 && s.order && s.order.body === id).length, moon);
const seen = await guest.evaluate(() => ({ ships: window.__perihelion.game.ships.map((s) => s.owner), t: window.__perihelion.game.time, faction: window.__perihelion.game.factions[1] }));
const result = { code, onHost, guestSeesOnlyItsOwn: seen.ships.every((o) => o === 1), guestClock: seen.t > 0, guestFaction: seen.faction, errors: [...host.errors, ...guest.errors] };
console.log(JSON.stringify(result));
await browser.close();
process.exit(result.onHost > 0 && result.guestSeesOnlyItsOwn && result.guestClock && !result.errors.length ? 0 : 1);
