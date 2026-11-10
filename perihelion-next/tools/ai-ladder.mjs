// AI difficulty bench: round-robin 1v1 matches between levels, plus a fast
// "human" stand-in, and how quickly each level expands.
// Usage: node tools/ai-ladder.mjs [games per pairing, default 10]
import { createGame, step, rng, launch, plan, orderShip, cantOrderShip, buildStructure, cantBuild, readyShips, present, staysFor, NEUTRAL, RANDOM_KEYS } from '../src/sim.js';
import { createAI, tickAI, DIFFICULTY, shipsToTake } from '../src/ai.js';

const N = Number(process.argv[2] || 10);
const LEVELS = Object.keys(DIFFICULTY);

/**
 * Human stand-in: acts every 2 s with several orders, uses exact battle maths
 * and knows neutral garrisons (as the labels show), keeps yards busy and puts
 * mines on rocks. A decent, quick human player, early game.
 */
function createHuman(owner) { return { owner, clock: 2, human: true }; }
function tickHuman(game, h, dt) {
  h.clock -= dt;
  if (h.clock > 0 || game.winner !== null) return;
  h.clock = 2;
  const mine = game.bodies.filter((b) => b.owner === h.owner);
  for (const b of mine) {
    if ((b.kind === 'moon' || b.kind === 'asteroid') && !cantBuild(game, b, 'mine') && !b.structures.some((x) => x.type === 'mine')) buildStructure(game, b, 'mine');
    while (!cantOrderShip(game, b) && b.queue < 2) orderShip(game, b);
  }
  for (const s of mine) {
    let spare = readyShips(game, s) - 1;
    if (spare < 1) continue;
    const opts = [];
    for (const t of game.bodies) {
      if (t.owner === h.owner || !present(game, t)) continue;
      if (game.fleets.some((f) => f.owner === h.owner && f.to === t.id)) continue;
      const T = plan(game, s, t).T;
      if (T > staysFor(game, t) - 10) continue;
      const need = shipsToTake(game, h.owner, t, s.vet, true) + 1;
      opts.push({ t, need, score: (t.kind === 'planet' ? 3 : 1) / (need + T / 30) });
    }
    opts.sort((a, b) => b.score - a.score);
    for (const o of opts) if (o.need <= spare) { launch(game, s, o.t, o.need); spare -= o.need; }
  }
}

function match(a, b, seed) {
  const g = createGame({ seed, opponents: 1, system: RANDOM_KEYS[seed % RANDOM_KEYS.length] });
  g.events = null;
  const r = rng(seed * 7 + 1);
  const p = [a, b].map((lv, i) => (lv === 'human' ? createHuman(i) : createAI(i, lv, r)));
  const worlds = { 180: [0, 0], 360: [0, 0], 600: [0, 0] };
  while (g.winner === null && g.time < 2 * 3600) {
    step(g, 0.5);
    for (const x of p) (x.human ? tickHuman : tickAI)(g, x, 0.5);
    for (const t of Object.keys(worlds)) if (Math.abs(g.time - t) < 0.25) worlds[t] = [0, 1].map((o) => g.bodies.filter((w) => w.owner === o).length);
  }
  return { winner: g.winner, minutes: g.time / 60, worlds };
}

const players = [...LEVELS, 'human'];
const results = {};
for (let i = 0; i < players.length; i++) {
  for (let j = i + 1; j < players.length; j++) {
    const [a, b] = [players[i], players[j]];
    let winsA = 0, winsB = 0, draws = 0, mins = 0;
    for (let k = 0; k < N; k++) {
      // Swap seats every other game so map side doesn't decide it.
      const flip = k % 2 === 1;
      const m = match(flip ? b : a, flip ? a : b, 1000 + k * 13 + i * 101 + j * 7);
      const wa = flip ? 1 : 0;
      if (m.winner === null || m.winner === NEUTRAL) draws++; else if (m.winner === wa) winsA++; else winsB++;
      mins += m.minutes;
    }
    results[`${a}-${b}`] = { a, b, winsA, winsB, draws, avgMin: Math.round(mins / N) };
    console.log(`${a.padEnd(7)} vs ${b.padEnd(7)}  ${String(winsA).padStart(2)}-${String(winsB).padEnd(2)}${draws ? ` (${draws} unfinished)` : ''}  avg ${Math.round(mins / N)} min`);
  }
}
// Early expansion against a do-nothing opponent: worlds held at 3, 6, 10 minutes.
console.log('\nworlds held at 3 / 6 / 10 min (opponent idle):');
for (const lv of players) {
  const acc = { 180: 0, 360: 0, 600: 0 };
  for (let k = 0; k < 6; k++) {
    const g = createGame({ seed: 50 + k, opponents: 1, system: RANDOM_KEYS[k % RANDOM_KEYS.length] });
    g.events = null;
    const x = lv === 'human' ? createHuman(0) : createAI(0, lv, rng(k + 3));
    while (g.time < 600) {
      step(g, 0.5);
      (x.human ? tickHuman : tickAI)(g, x, 0.5);
      for (const t of Object.keys(acc)) if (Math.abs(g.time - t) < 0.25) acc[t] += g.bodies.filter((w) => w.owner === 0).length / 6;
    }
  }
  console.log(`${lv.padEnd(7)} ${acc[180].toFixed(1)} / ${acc[360].toFixed(1)} / ${acc[600].toFixed(1)}`);
}
