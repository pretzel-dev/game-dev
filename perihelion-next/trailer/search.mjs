// Finds seeds where the blue empire (seat 0) has grown big by mid-game. Runs in
// the browser so the maths matches the filmed match exactly.
// Usage: node search.mjs <system> <from> <to> [minutes]
import { open } from './lib.mjs';
const [,, system = 'classic', a = '1', b = '30', mins = '14'] = process.argv;
const { browser, ev } = await open({ dsf: 0.25, minutes: 0, system });
const rows = await ev(({ system, a, b, mins }) => {
  const mk = (s) => () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const rows = [];
  for (let seed = a; seed <= b; seed++) {
    const g = S.createGame({ seed, opponents: 2, system });
    const ais = [0, 1, 2].map((i) => A.createAI(i, 'hard', mk(seed * 7 + i)));
    for (let k = 0; k < mins * 240; k++) { for (const ai of ais) A.tickAI(g, ai, 0.25); S.step(g, 0.25); g.events.length = 0; if (g.winner != null) break; }
    const own = (o) => g.bodies.filter((x) => x.owner === o);
    const mine = own(0);
    rows.push({ seed, winner: g.winner, worlds: [0, 1, 2].map((o) => own(o).length), ships: mine.reduce((n, x) => n + x.ships, 0) + g.fleets.filter((f) => f.owner === 0).reduce((n, f) => n + f.n, 0), structs: mine.reduce((n, x) => n + x.structures.length, 0), giant: mine.filter((x) => x.giant).map((x) => x.id) });
  }
  return rows;
}, { system, a: +a, b: +b, mins: +mins });
rows.sort((x, y) => (y.worlds[0] * 3 + y.structs + y.ships / 4) - (x.worlds[0] * 3 + x.structs + x.ships / 4));
for (const r of rows.slice(0, 8)) console.log(JSON.stringify(r));
await browser.close();
