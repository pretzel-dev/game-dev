// Two-browser multiplayer smoke test. Needs `npm run preview` (port 4173) and a local
// PeerJS server on 127.0.0.1:9000 (the public broker may be unreachable from CI/sandboxes):
//   npx peerjs --port 9000   (or see README: ExpressPeerServer bound to 127.0.0.1)
// Usage: node tools/mp-smoke.mjs [outDir]
import { chromium } from 'playwright';
const out = process.argv[2] || '.';
const browser = await chromium.launch();
const mk = async () => { const p = await (await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true })).newPage(); p.errs = []; p.on('pageerror', (e) => p.errs.push(String(e))); p.on('console', (m) => m.type() === 'error' && p.errs.push(m.text())); await p.goto('http://localhost:4173/?peer=127.0.0.1:9000'); await p.waitForTimeout(800); return p; };
const host = await mk();
const guest = await mk();
await host.fill('#name', 'Ada');
await host.tap('#host');
await host.waitForSelector('#lobby:not([hidden])', { timeout: 20000 });
await host.waitForFunction(() => /^[A-Z]{5}$/.test(document.getElementById('lobby-code').textContent), null, { timeout: 20000 });
const code = await host.textContent('#lobby-code');
await guest.fill('#name', 'Bo');
await guest.fill('#code', code);
await guest.tap('#join');
await guest.waitForSelector('#lobby:not([hidden])', { timeout: 20000 });
await host.waitForFunction(() => document.querySelectorAll('.seat:not(.empty)').length === 2, null, { timeout: 20000 });
await host.tap('#add-ai');
await host.waitForTimeout(300);
await host.screenshot({ path: out + '/mp-lobby.png' });
await host.tap('#lobby-start');
await guest.waitForFunction(() => window.__perihelion.game.mp && document.getElementById('lobby').hidden, null, { timeout: 20000 });
await guest.waitForTimeout(1500);
// Guest orders a ship and launches from its home; host should see both.
const r = await guest.evaluate(() => {
  const h = window.__perihelion; const g = h.game;
  const home = g.bodies.find((b) => b.owner === h.ui.me);
  return { me: h.ui.me, home: home.id, players: g.players, names: g.names };
});
await guest.evaluate((id) => { const h = window.__perihelion; h.ui.selected = id; }, r.home);
await guest.waitForTimeout(400);
await guest.tap('button[data-b="ship"]');
await guest.tap('#launch'); await guest.waitForTimeout(200);
const tgt = await guest.evaluate((id) => { const h = window.__perihelion; const g = h.game; const t = g.bodies.find((b) => b.parent === id) || g.bodies.find((b) => b.kind === 'moon'); h.ui.target = t.id; return t.id; }, r.home);
await guest.waitForTimeout(400);
await guest.tap('#launch');
await host.waitForTimeout(1500);
const hostView = await host.evaluate((a) => { const g = window.__perihelion.game; return { fleets: g.fleets.filter((f) => f.owner === a.me).length, queue: g.bodies[a.home].queue, time: g.time.toFixed(1) }; }, r);
const guestView = await guest.evaluate((a) => { const g = window.__perihelion.game; return { fleets: g.fleets.filter((f) => f.owner === a.me).length, queue: g.bodies[a.home].queue, time: g.time.toFixed(1) }; }, r);
// Host pauses: guest sees it.
await host.tap('#pause'); await host.waitForTimeout(800);
const gp = await guest.evaluate(() => [!document.getElementById('banner').hidden, window.__perihelion.game.time]);
await guest.waitForTimeout(800);
const gp2 = await guest.evaluate(() => window.__perihelion.game.time);
await guest.screenshot({ path: out + '/mp-guest.png' });
console.log(JSON.stringify({ code, r, hostView, guestView, guestPausedBanner: gp[0], guestClockFrozen: gp2 === gp[1], errs: [host.errs, guest.errs] }));
await browser.close();
