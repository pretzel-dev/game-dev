// Headless checks: intercepts land on target, battles resolve, AI matches finish.
import assert from 'node:assert/strict';
import { createGame, step, launch, plan, posAt, dist, fleetState, NEUTRAL } from '../src/sim.js';
import { createAI, tickAI } from '../src/ai.js';
import { rng } from '../src/sim.js';

// Intercepts: a fleet arrives where the target actually is at that moment.
{
  const g = createGame({ seed: 3 });
  const home = g.bodies.find((b) => b.owner === 0);
  let worst = 0;
  for (const t of g.bodies) {
    if (t === home) continue;
    const pl = plan(g, home, t);
    const f = { ...pl, t0: g.time };
    // The ship's own path ends exactly where the target is at that moment.
    worst = Math.max(worst, dist(fleetState(f, g.time + pl.T), posAt(g, t, g.time + pl.T)));
  }
  assert.ok(worst < 0.5, `intercept miss ${worst.toFixed(2)}`);
  console.log(`intercepts: worst miss ${worst.toFixed(3)} units`);
}

// Flight: accelerate, flip at the midpoint, decelerate; arrive at rest on p1.
{
  const g = createGame({ seed: 4 });
  const home = g.bodies.find((b) => b.owner === 0);
  const t = g.bodies.find((b) => b.owner === NEUTRAL && b.kind === 'moon');
  const f = launch(g, home, t, 2);
  const early = fleetState(f, f.t0 + f.T * 0.2);
  const mid = fleetState(f, f.t0 + f.T * 0.5);
  const late = fleetState(f, f.t0 + f.T * 0.8);
  assert.equal(early.facing, 1);
  assert.ok(Math.abs(mid.facing) < 0.2 && !mid.burning, 'flipping at the midpoint');
  assert.equal(late.facing, -1);
  const end = fleetState(f, f.t0 + f.T);
  assert.ok(dist(end, f.p1) < 1e-6);
  // A hop to a moon of your own planet is short: the ship keeps the planet's speed.
  const moon = g.bodies.find((b) => b.parent === home.id);
  if (moon) {
    const { T } = plan(g, home, moon);
    assert.ok(T < 60, `hop to own moon ${moon.name} should be quick (took ${T.toFixed(0)}s)`);
    console.log(`hop to own moon ${moon.name}: ${T.toFixed(0)}s`);
  }
  console.log(`flight to ${t.name}: ${f.T.toFixed(0)}s`);
}

// Battle: 6 attackers take a neutral moon with 1 gun; 1 attacker fails vs 4.
{
  const g = createGame({ seed: 5 });
  const m = g.bodies.find((b) => b.owner === NEUTRAL && b.kind === 'moon');
  m.guns = 1;
  m.sieges.push({ owner: 0, n: 6 });
  for (let t = 0; t < 60; t += 0.1) step(g, 0.1);
  assert.equal(m.owner, 0);
  const m2 = g.bodies.filter((b) => b.owner === NEUTRAL && b.kind === 'moon')[1];
  m2.guns = 4;
  m2.sieges.push({ owner: 0, n: 1 });
  for (let t = 0; t < 60; t += 0.1) step(g, 0.1);
  assert.equal(m2.owner, NEUTRAL);
}

// AI-only matches finish.
let finished = 0;
const lengths = [];
for (let seed = 1; seed <= 20; seed++) {
  const g = createGame({ seed, opponents: 1 + (seed % 2) });
  const r = rng(seed);
  const ais = Array.from({ length: g.players }, (_, i) => createAI(i, i ? 'hard' : 'normal', r));
  let t = 0;
  for (; t < 7200 && g.winner === null; t += 0.5) {
    for (const ai of ais) tickAI(g, ai, 0.5);
    step(g, 0.5);
  }
  if (g.winner !== null) { finished++; lengths.push(Math.round(t / 60)); }
}
console.log(`sim ok: ${finished}/20 AI matches finished; minutes: ${lengths.join(' ')}`);
assert.ok(finished >= 16);
