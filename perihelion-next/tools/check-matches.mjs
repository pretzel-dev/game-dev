// Balance check: 20 AI-only matches across every system type must finish,
// and Hard must beat Normal. Slow (the planner is the cost), so it runs apart
// from the fast checks: `npm run check:matches`, and in the deploy only when
// src/sim.js or src/ai.js changed.
import assert from 'node:assert/strict';
import { createGame, step, rng, RANDOM_KEYS } from '../src/sim.js';
import { createAI, tickAI } from '../src/ai.js';

// AI-only matches finish.
let finished = 0;
let hardWins = 0;
const lengths = [];
for (let seed = 1; seed <= 20; seed++) {
  // Every system type gets matches (three or four each).
  const g = createGame({ seed, opponents: 1 + (seed % 2), system: RANDOM_KEYS[seed % RANDOM_KEYS.length] });
  const r = rng(seed);
  const ais = Array.from({ length: g.players }, (_, i) => createAI(i, i ? 'hard' : 'normal', r));
  let t = 0;
  for (; t < 14400 && g.winner === null; t += 0.5) {
    for (const ai of ais) tickAI(g, ai, 0.5);
    step(g, 0.5);
  }
  if (g.winner !== null) { finished++; lengths.push(Math.round(t / 60)); if (g.winner > 0) hardWins++; }
}
console.log(`sim ok: ${finished}/20 AI matches finished (Hard won ${hardWins}); minutes: ${lengths.join(' ')}`);
assert.ok(finished >= 18);
assert.ok(hardWins >= finished * 0.75, 'Hard beats Normal (difficulty ladder)');
