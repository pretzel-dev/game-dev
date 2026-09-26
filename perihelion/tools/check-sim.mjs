// Headless checks: intercepts land on target, battles resolve, AI matches finish.
import assert from 'node:assert/strict';
import { createGame, step, launch, plan, posAt, velAt, dist, fleetState, parkRadius, buildStructure, orderShip, cantBuild, slotsOf, income, upgrade, upgradeTime, NEUTRAL, RULES, research, visibility, yardsOf, demolish, cancelShip, accelOf, TECH } from '../src/sim.js';
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
  assert.ok(Math.abs(before - (RULES.startCredits + income(g, 0) * 60)) < 1, 'income accrues');
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
  for (let t = 0; t < RULES.structures.mine.time + 1; t += 0.5) step(g, 0.5);
  assert.ok(income(g, 0) > inc + 1, 'a finished mine adds income');
  // Upgrades: the mine keeps paying while it's upgraded, then pays more.
  const m = rock.structures[0];
  const inc1 = income(g, 0);
  assert.ok(upgrade(g, rock, m));
  assert.equal(income(g, 0), inc1, 'still mining during the upgrade');
  for (let t = 0; t < upgradeTime({ ...m, level: 1 }) + 1; t += 0.5) step(g, 0.5);
  assert.equal(m.level, 2);
  assert.ok(Math.abs(income(g, 0) - inc1 - RULES.mineIncome) < 1e-9, 'level 2 mine pays more');
  console.log(`economy: income ${income(g, 0).toFixed(1)}/s with a level-2 mine`);
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

// Research, fog, parallel yards, demolish, cancel.
{
  const g = createGame({ seed: 7 });
  const home = g.bodies.find((b) => b.owner === 0);
  g.credits[0] = 5000;
  // Two yards build two ships at once.
  home.structures = home.structures.filter((x) => x.type !== 'defence');
  assert.ok(buildStructure(g, home, 'shipyard'));
  home.structures.forEach((x) => (x.left = 0));
  assert.equal(yardsOf(home), 2);
  const ships = home.ships;
  orderShip(g, home); orderShip(g, home);
  for (let t = 0; t < RULES.ship.time + 1; t += 0.5) step(g, 0.5);
  assert.equal(home.ships, ships + 2, 'two yards build two ships in one build time');
  // Cancel refunds; demolish costs a fee and frees the slot.
  orderShip(g, home);
  const c = g.credits[0];
  assert.ok(cancelShip(g, home));
  assert.equal(g.credits[0], c + RULES.ship.cost * RULES.cancelRefund);
  const slots = home.structures.length;
  assert.ok(demolish(g, home, home.structures[1]));
  assert.equal(home.structures.length, slots - 1);
  // Research: drives raise thrust; research stations speed it up.
  const a0 = accelOf(g, 0);
  assert.ok(research(g, 0, 'drives'));
  for (let t = 0; t < TECH.drives.time[0] + 1; t += 0.5) step(g, 0.5);
  assert.ok(accelOf(g, 0) > a0 * 1.1, 'drives research raises thrust');
  // Fog: far worlds are unseen at the start; sensors widen the view.
  const v0 = visibility(g, 0).bodies.size;
  g.tech[0].sensors = 3;
  assert.ok(visibility(g, 0).bodies.size > v0, 'sensors show more');
  console.log(`research: thrust ${a0}->${accelOf(g, 0)}; visible worlds ${v0} -> ${visibility(g, 0).bodies.size} of ${g.bodies.length}`);
}

// Planetary cover: a planet's guns help defend its moons and stations.
{
  const g = createGame({ seed: 5 });
  const planet = g.bodies.find((b) => g.bodies.some((c) => c.parent === b.id && c.kind === 'moon'));
  const moon = g.bodies.find((c) => c.parent === planet.id && c.kind === 'moon');
  const fightFor = (covered) => {
    const h = createGame({ seed: 5 });
    const p = h.bodies[planet.id];
    const m = h.bodies[moon.id];
    p.owner = m.owner = 1;
    p.guns = covered ? 7 : 0;
    m.guns = 1; m.ships = 2;
    m.sieges.push({ owner: 0, n: 6 });
    for (let t = 0; t < 80 && m.sieges.length; t += 0.1) step(h, 0.1);
    return m.owner === 0 ? m.ships : -m.ships;
  };
  const alone = fightFor(false);
  const covered = fightFor(true);
  assert.ok(alone > 0, 'without cover 6 attackers take the moon');
  assert.ok(covered < alone, 'cover costs the attacker more (or holds the moon)');
  console.log(`cover: 6 attackers vs moon alone -> ${alone} left; with planet cover -> ${covered > 0 ? covered + ' left' : 'repelled'}`);
}

// AI-only matches finish.
let finished = 0;
const lengths = [];
for (let seed = 1; seed <= 20; seed++) {
  const g = createGame({ seed, opponents: 1 + (seed % 2) });
  const r = rng(seed);
  const ais = Array.from({ length: g.players }, (_, i) => createAI(i, i ? 'hard' : 'normal', r));
  let t = 0;
  for (; t < 14400 && g.winner === null; t += 0.5) {
    for (const ai of ais) tickAI(g, ai, 0.5);
    step(g, 0.5);
  }
  if (g.winner !== null) { finished++; lengths.push(Math.round(t / 60)); }
}
console.log(`sim ok: ${finished}/20 AI matches finished; minutes: ${lengths.join(' ')}`);
assert.ok(finished >= 18);
