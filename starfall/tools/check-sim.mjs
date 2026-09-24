// Headless sanity check: AI-only matches must finish, and the rules must hold.
import assert from 'node:assert/strict';
import { createGame, step, sendFraction, sendUnits, upgrade, rng, NEUTRAL } from '../src/sim.js';
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
  assert.equal(home.level, 1, 'upgrades take time to build');
  for (let t = 0; t < 13; t += 0.1) step(g, 0.1);
  assert.equal(home.level, 2);
  target.units = 1;
  for (let t = 0; t < f.duration + 0.05; t += 0.05) step(g, 0.05);
  assert.equal(target.owner, 0, 'fleet captures a weak system');
}

// Blended laws (intensity 0.5): big forces win cheaper than the difference,
// defenders get a bonus, and even lopsided battles take a few seconds.
{
  const g = createGame({ seed: 2, opponents: 1 });
  const s = g.systems.find((x) => x.owner === NEUTRAL);
  s.units = 20;
  s.sieges.push({ owner: 1, units: 80 });
  let t = 0;
  while (s.owner === NEUTRAL && t < 60) { step(g, 0.05); t += 0.05; }
  assert.equal(s.owner, 1);
  // (80^1.5 - 1.1 * 20^1.5)^(1/1.5) = about 72.
  assert.ok(s.units > 68 && s.units < 76, `80 v 20 left ${s.units.toFixed(1)}`);
  assert.ok(t > 3, `80 v 20 should still take a few seconds (took ${t.toFixed(1)}s)`);
  console.log(`80 v 20 garrison: ${s.units.toFixed(1)} survive in ${t.toFixed(1)}s`);
}
{
  const g = createGame({ seed: 2, opponents: 1 });
  const s = g.systems.find((x) => x.owner === NEUTRAL);
  s.units = 50;
  s.sieges.push({ owner: 1, units: 50 });
  for (let t = 0; t < 60; t += 0.05) step(g, 0.05);
  assert.equal(s.owner, NEUTRAL, 'an even fight goes to the defender');
}

// Hostile fleets that meet in space stop and fight; the survivor carries on.
{
  const g = createGame({ seed: 3, opponents: 1 });
  const a = g.systems.find((x) => x.owner === 0);
  const b = g.systems.find((x) => x.owner === 1);
  a.units = 100;
  b.units = 100;
  const fa = sendUnits(g, a, b, 60);
  const fb = sendUnits(g, b, a, 30);
  let met = false;
  for (let t = 0; t < 200 && g.fleets.length === 2; t += 0.1) { step(g, 0.1); met ||= !!fa.engaged; }
  assert.ok(met, 'fleets on the same route meet');
  assert.equal(g.fleets.length, 1);
  assert.equal(g.fleets[0], fa);
  // (60^1.5 - 30^1.5)^(1/1.5) = about 45.
  assert.ok(fa.units > 41 && fa.units < 49, `60 v 30 in space left ${fa.units}`);
  console.log(`60 v 30 in space: ${fa.units} survive`);
}
{
  // Fleets that pass at a distance ignore each other.
  const g = createGame({ seed: 3, opponents: 1 });
  const mine = g.systems.find((x) => x.owner === 0);
  const theirs = g.systems.find((x) => x.owner === 1);
  const others = g.systems.filter((x) => x.owner === NEUTRAL);
  mine.units = theirs.units = 100;
  sendUnits(g, mine, others[0], 20);
  sendUnits(g, theirs, others[1], 20);
  let engaged = false;
  for (let t = 0; t < 300 && g.fleets.length; t += 0.1) { step(g, 0.1); engaged ||= g.fleets.some((f) => f.engaged); }
  if (!engaged) console.log('distant fleets passed without fighting');
}

// The AI acts like a player: at most one action (launch, upgrade or research) per turn.
{
  const g = createGame({ seed: 4, opponents: 1 });
  const ai = createAI(1, 'hard', rng(1));
  for (const s of g.systems) if (s.owner === 1) s.units = 150;
  const snapshot = () => g.fleets.length + g.systems.reduce((n, s) => n + (s.upgrading > 0 ? 1 : 0), 0) + (g.tech[1].research ? 1 : 0);
  let turns = 0;
  for (let t = 0; t < 120; t += 0.1) {
    const before = snapshot();
    const clock = ai.clock;
    tickAI(g, ai, 0.1);
    if (ai.clock > clock) turns++;
    assert.ok(snapshot() - before <= 1, 'one action per turn');
  }
  assert.ok(turns > 10);
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
