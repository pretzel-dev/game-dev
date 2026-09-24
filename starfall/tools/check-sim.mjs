// Headless sanity check: AI-only matches must finish, and the rules must hold.
import assert from 'node:assert/strict';
import { createGame, step, sendFraction, upgrade, rng, NEUTRAL } from '../src/sim.js';
import { createAI, tickAI } from '../src/ai.js';

// Rules.
{
  const g = createGame({ seed: 1, opponents: 1 });
  const home = g.systems.find((s) => s.owner === 0);
  const target = g.systems.find((s) => s.owner === NEUTRAL);
  const before = home.units;
  const f = sendFraction(g, home, target, 0.5);
  assert.equal(f.units, Math.floor(before * 0.5));
  assert.equal(home.units, before - f.units);
  home.units = 100;
  assert.ok(upgrade(g, home));
  assert.equal(home.level, 2);
  target.units = 1;
  step(g, f.duration + 0.01);
  assert.equal(target.owner, 0, 'fleet captures a weak system');
}

// AI vs AI matches finish, with the "player" slot also run by an AI.
let finished = 0;
const runs = 30;
for (let seed = 1; seed <= runs; seed++) {
  const opponents = 1 + (seed % 3);
  const g = createGame({ seed, opponents });
  const r = rng(seed * 7);
  const ais = Array.from({ length: g.players }, (_, i) => createAI(i, i === 0 ? 'normal' : 'hard', r));
  for (let t = 0; t < 3600 && g.winner === null; t += 0.25) {
    for (const ai of ais) tickAI(g, ai, 0.25);
    step(g, 0.25);
    for (const s of g.systems) assert.ok(s.units >= 0 && Number.isFinite(s.units));
  }
  if (g.winner !== null) finished++;
}
console.log(`sim ok: ${finished}/${runs} AI matches finished within 60 min of game time`);
assert.ok(finished >= runs * 0.8, 'most AI matches should reach a winner');
