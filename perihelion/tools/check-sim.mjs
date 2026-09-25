// Headless checks: intercepts land on target, battles resolve, AI matches finish.
import assert from 'node:assert/strict';
import { createGame, step, launch, plan, posAt, velAt, dist, fleetState, parkRadius, buildStructure, orderShip, cantBuild, slotsOf, income, NEUTRAL, RULES } from '../src/sim.js';
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
    // The ship's path ends in parking orbit beside the target: never inside it.
    const d = dist(fleetState(f, g.time + pl.T), posAt(g, t, g.time + pl.T));
    worst = Math.max(worst, Math.abs(d - parkRadius(t)));
    assert.ok(d > t.size, `arrived inside ${t.name}`);
  }
  assert.ok(worst < 0.5, `parking miss ${worst.toFixed(2)}`);
  console.log(`arrivals: in parking orbit, worst miss ${worst.toFixed(3)} units`);
}

// Flight: burn, flip at the midpoint, burn again; arrive matching the
// target's position AND velocity, within the drive's limit, clear of the sun.
{
  const g = createGame({ seed: 4 });
  const home = g.bodies.find((b) => b.owner === 0);
  let worstV = 0;
  let worstA = 0;
  let closestSun = Infinity;
  for (const t of g.bodies) {
    if (t === home) continue;
    const f = { ...plan(g, home, t), t0: g.time };
    const end = fleetState(f, f.t0 + f.T);
    const v1 = velAt(g, t, f.t0 + f.T);
    worstV = Math.max(worstV, Math.hypot(end.vx - v1.x, end.vy - v1.y, end.vz - v1.z));
    worstA = Math.max(worstA, Math.hypot(f.a1.x, f.a1.y, f.a1.z), Math.hypot(f.a2.x, f.a2.y, f.a2.z));
    for (let k = 0; k <= 200; k++) {
      const s = fleetState(f, f.t0 + (k / 200) * f.T);
      closestSun = Math.min(closestSun, Math.hypot(s.x, s.y, s.z));
    }
  }
  assert.ok(worstV < 0.01, `arrival speed mismatch ${worstV}`);
  assert.ok(worstA <= RULES.accel + 1e-6, `burn ${worstA} over the drive limit`);
  assert.ok(closestSun > 12, `a route passes ${closestSun.toFixed(1)} from the sun`);
  console.log(`rendezvous: speed mismatch ${worstV.toExponential(1)}, closest to sun ${closestSun.toFixed(1)}`);

  const t = g.bodies.find((b) => b.owner === NEUTRAL && b.kind === 'moon');
  const f = launch(g, home, t, 2);
  const mid = fleetState(f, f.t0 + f.T * 0.5);
  assert.ok(mid.flipping && !mid.burning, 'flipping at the midpoint');
  assert.ok(fleetState(f, f.t0 + f.T * 0.2).burning && fleetState(f, f.t0 + f.T * 0.8).burning);
  assert.ok(dist(fleetState(f, f.t0 + f.T), f.p1) < 1e-6);
  // A hop to a moon or station of your own planet is short.
  const own = g.bodies.find((b) => b.parent === home.id);
  if (own) {
    const { T } = plan(g, home, own);
    assert.ok(T < 60, `hop to ${own.name} should be quick (took ${T.toFixed(0)}s)`);
    console.log(`hop to own ${own.kind} ${own.name}: ${T.toFixed(0)}s; to ${t.name}: ${f.T.toFixed(0)}s`);
  }
}

// Economy: ships only come from shipyards, paid in credits; slots are limited.
{
  const g = createGame({ seed: 6 });
  const home = g.bodies.find((b) => b.owner === 0);
  const ships = home.ships;
  for (let t = 0; t < 60; t += 0.5) step(g, 0.5);
  assert.equal(home.ships, ships, 'no ships without orders');
  const before = g.credits[0];
  assert.ok(before > 120 && Math.abs(before - (120 + income(g, 0) * 60)) < 1, 'income accrues');
  assert.ok(orderShip(g, home));
  assert.equal(g.credits[0], before - RULES.ship.cost);
  for (let t = 0; t < RULES.ship.time + 1; t += 0.5) step(g, 0.5);
  assert.equal(home.ships, ships + 1, 'a ship is built after its build time');
  const rock = g.bodies.find((b) => b.kind === 'asteroid');
  rock.owner = 0;
  assert.equal(slotsOf(rock), 1);
  g.credits[0] = 1000;
  assert.ok(buildStructure(g, rock, 'mine'));
  assert.equal(cantBuild(g, rock, 'defence'), 'no free slots');
  assert.equal(cantBuild(g, home, 'mine'), "planets can't have one");
  const inc = income(g, 0);
  for (let t = 0; t < 26; t += 0.5) step(g, 0.5);
  assert.ok(income(g, 0) > inc + 1, 'a finished mine adds income');
  console.log(`economy: income ${income(g, 0).toFixed(1)}/s with a mine`);
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
