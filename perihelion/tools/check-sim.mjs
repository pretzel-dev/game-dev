// Headless checks: intercepts land on target, battles resolve, AI matches finish.
import assert from 'node:assert/strict';
import { createGame, step, launch, plan, posAt, velAt, dist, fleetState, parkRadius, buildStructure, orderShip, cantBuild, slotsOf, income, upgrade, upgradeTime, NEUTRAL, RULES, research, visibility, yardsOf, demolish, cancelShip, accelOf, TECH, launchProbe, cantBuild as cantBuildAt, SYSTEM_KEYS, SYSTEMS, dailySeed, starPos } from '../src/sim.js';
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
    const k = f.assist !== undefined ? 1.25 : 1;
    worstA = Math.max(worstA, Math.hypot(f.a1.x, f.a1.y, f.a1.z) / k, Math.hypot(f.a2.x, f.a2.y, f.a2.z) / k);
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
  assert.ok(dist(fleetState(f, f.t0 + f.T), f.p1) < 0.6, "lands on its parking point (within the gravity solver's tolerance)");
  // A hop to a moon or station of your own planet is short.
  const own = g.bodies.find((b) => b.parent === home.id);
  if (own) {
    const { T } = plan(g, home, own);
    assert.ok(T < 60, `hop to ${own.name} should be quick (took ${T.toFixed(0)}s)`);
    console.log(`hop to own ${own.kind} ${own.name}: ${T.toFixed(0)}s; to ${t.name}: ${f.T.toFixed(0)}s`);
  }
}

// Gravity assists happen on some routes, and only ever make a trip faster.
{
  let assisted = 0;
  let total = 0;
  for (let seed = 1; seed <= 6; seed++) {
    const g = createGame({ seed });
    for (const a of g.bodies) for (const b of g.bodies) {
      if (a === b || a.kind !== 'planet' || b.kind !== 'planet') continue;
      const f = plan(g, a, b);
      total++;
      if (f.assist !== undefined) { assisted++; assert.ok(g.bodies[f.assist].giant); }
    }
  }
  assert.ok(assisted > 0, 'some routes get an assist');
  console.log(`assists: ${assisted}/${total} planet-to-planet routes`);
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
  assert.equal(home.structures.length, slots, 'scrapping takes time');
  for (let t = 0; t < RULES.scrapTime + 1; t += 0.5) step(g, 0.5);
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

// Veterancy and events: a won battle makes veterans; they carry into fleets.
{
  const g = createGame({ seed: 5 });
  const m = g.bodies.find((b) => b.owner === NEUTRAL && b.kind === 'moon');
  m.guns = 1;
  m.sieges.push({ owner: 0, n: 6, vet: 0, name: 'Test' });
  for (let t = 0; t < 60 && m.owner !== 0; t += 0.1) step(g, 0.1);
  assert.equal(m.owner, 0);
  assert.ok(m.vet > 0 && m.vet < 1, 'an easy capture gives a little experience');
  assert.equal(m.tf, 'Test', 'the task force name stays with the garrison');
  assert.ok(g.events.some((e) => e.type === 'captured' && e.at === m.id));
  const home = g.bodies.find((b) => b.owner === 0 && b.home);
  m.restUntil = 0; // skip the turnaround after capture
  const f = launch(g, m, home, 2);
  assert.ok(f.name && f.vet === m.vet, 'fleets are named and carry veterancy');
  m.vet = 1.2;
  const before = home.ships;
  for (let t = 0; t < f.T + 1; t += 0.5) step(g, 0.5);
  assert.ok(home.vet > 0 && home.vet < 1 && home.ships === before + 2, 'veterancy mixes into the garrison');
  // An underdog win is worth far more than a walkover.
  const h = createGame({ seed: 5 });
  const m2 = h.bodies.find((b) => b.owner === NEUTRAL && b.kind === 'moon');
  m2.guns = 3; m2.ships = 3;
  h.fleets.push({ ...plan(h, home, m2), id: 99, owner: 0, n: 9, from: home.id, to: m2.id, t0: h.time - 1e4, vet: 0, name: 'Odds' });
  h.fleets[0].T = 0;
  for (let t = 0; t < 120 && m2.owner !== 0; t += 0.1) step(h, 0.1);
  assert.ok(m2.owner === 0 && m2.vet > f.vet * 2, `hard win gives real experience (${m2.vet.toFixed(2)})`);
  console.log(`veterancy: easy win ${f.vet.toFixed(2)}, hard win ${m2.vet.toFixed(2)}; name kept: ${m.tf ?? f.name}`);
}

// Homes: a plain planet with exactly one moon or station, evenly spaced round the sun.
for (const opponents of [1, 2]) {
  for (let seed = 1; seed <= 30; seed++) {
    const g = createGame({ seed, opponents });
    const homes = g.bodies.filter((b) => b.home);
    for (const h of homes) {
      assert.equal(g.bodies.filter((c) => c.parent === h.id).length, 1, 'a home has one companion');
      assert.ok(!h.giant);
    }
    const ang = homes.map((h) => Math.atan2(posAt(g, h, 0).z, posAt(g, h, 0).x));
    for (let i = 0; i < ang.length; i++) for (let j = i + 1; j < ang.length; j++) {
      const d = Math.abs(((ang[i] - ang[j] + 3 * Math.PI) % (2 * Math.PI)) - Math.PI);
      assert.ok(Math.abs(d - (2 * Math.PI) / ang.length) < 0.01, 'homes evenly spaced');
    }
  }
}
console.log('homes: one companion each, evenly spaced');

// AI-only matches finish.
let finished = 0;
let hardWins = 0;
const lengths = [];
for (let seed = 1; seed <= 20; seed++) {
  // Every system type gets matches (three or four each).
  const g = createGame({ seed, opponents: 1 + (seed % 2), system: SYSTEM_KEYS[seed % SYSTEM_KEYS.length] });
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

// Probes, gas skimmers, exchanges, and scrapping cut short by a capture.
{
  const g = createGame({ seed: 9 });
  const home = g.bodies.find((b) => b.owner === 0);
  g.credits[0] = 5000;
  const far = g.bodies.filter((b) => b.owner === NEUTRAL && !b.visitor).sort((a, b) => dist(posAt(g, b, 0), posAt(g, home, 0)) - dist(posAt(g, a, 0), posAt(g, home, 0)))[0];
  assert.ok(!visibility(g, 0).bodies.has(far.id), 'far world starts hidden');
  const p = launchProbe(g, home, far);
  assert.ok(p && p.T < plan(g, home, far).T / 1.5, 'probes are fast');
  while (g.fleets.includes(p)) step(g, 0.5);
  assert.ok(visibility(g, 0).bodies.has(far.id), 'a flyby reveals the world');
  for (let t = 0; t < RULES.probe.scan + 1; t += 0.5) step(g, 0.5);
  assert.ok(!visibility(g, 0).bodies.has(far.id) || far.owner === 0, 'the view fades');
  assert.equal(cantBuildAt(g, home, 'skimmer'), 'gas giants only');
  assert.ok(!cantBuildAt(g, { ...home, structures: [] }, 'exchange'), 'homeworlds can float an exchange');
  const giant = g.bodies.find((b) => b.giant);
  giant.owner = 0;
  assert.ok(!cantBuildAt(g, giant, 'skimmer'));
  // Scrap guns, then lose the world: the guns stay for the captor.
  const guns = home.structures.find((x) => x.type === 'defence');
  demolish(g, home, guns);
  home.ships = 0; home.guns = 0;
  home.sieges.push({ owner: 1, n: 5, vet: 0, name: 'X', n0: 5, foe0: 1 });
  step(g, 0.5);
  assert.equal(home.owner, 1);
  assert.ok(home.structures.includes(guns) && !guns.scrap, 'capture cancels scrapping');
  console.log('probe, skimmer, exchange, scrapping: ok');
}

// Turnaround: arrivals can't leave straight away.
{
  const g = createGame({ seed: 4 });
  const home = g.bodies.find((b) => b.owner === 0);
  const moon = g.bodies.find((b) => b.parent === home.id);
  moon.owner = 0; moon.ships = 0;
  const f = launch(g, home, moon, 2);
  while (g.fleets.includes(f)) step(g, 0.5);
  assert.equal(launch(g, moon, home, 2), null, 'fresh arrivals must rest');
  for (let t = 0; t < RULES.cooldown + 1; t += 0.5) step(g, 0.5);
  assert.ok(launch(g, moon, home, 2), 'rested ships can leave');
  console.log('turnaround: ok');
}

// System types all build a sane map; the daily is the same for everyone.
{
  for (const k of SYSTEM_KEYS) {
    for (const opp of [1, 2]) {
      const g = createGame({ seed: 77, opponents: opp, system: k });
      assert.equal(g.system, k);
      assert.equal(g.bodies.filter((b) => b.home).length, opp + 1, `${k}: homes`);
      for (const b of g.bodies) assert.ok(Number.isFinite(b.r) && b.period > 0, `${k}: orbits`);
      for (const b of g.bodies) if (b.parent === null && b.kind === 'planet' && !b.star) assert.ok(b.r > 25, `${k}: clear of the sun(s)`);
    }
  }
  const bin = createGame({ seed: 3, system: 'binary' });
  const far = bin.bodies.filter((x) => x.star === 1);
  assert.equal(far.filter((x) => x.kind === 'planet').length, 2, 'the companion has two worlds');
  const s1 = starPos(bin, 1, 0), s2 = starPos(bin, 1, 1500);
  assert.ok(Math.hypot(s1.x - s2.x, s1.z - s2.z) > 50, 'the companion moves over a match');
  for (const x of far) assert.ok(dist(posAt(bin, x, 700), starPos(bin, 1, 700)) < 60, 'its worlds ride along');
  const home = bin.bodies.find((x) => x.owner === 0);
  const trip = plan(bin, home, far[0]);
  for (let k = 1; k < 20; k++) {
    const tau = (k / 20) * trip.T;
    const st = fleetState({ ...trip, t0: 0 }, tau);
    assert.ok(dist(st, starPos(bin, 1, tau)) > 8, 'routes keep clear of the companion sun');
  }
  const d = dailySeed(new Date('2026-09-28T12:00:00Z'));
  assert.deepEqual(d, dailySeed(new Date('2026-09-28T20:00:00Z')), 'one daily per day');
  console.log(`systems: ${SYSTEM_KEYS.map((k) => SYSTEMS[k].name).join(', ')}; daily ${d.key} = ${SYSTEMS[d.system].name}`);
}

// Drives research speeds up fleets already in flight.
{
  const g = createGame({ seed: 8 });
  const home = g.bodies.find((b) => b.owner === 0);
  const far = g.bodies.filter((b) => b.kind === 'planet' && b.owner === NEUTRAL).sort((x, y) => plan(g, home, y).T - plan(g, home, x).T)[0];
  const f = launch(g, home, far, 1);
  const eta = f.t0 + f.T;
  g.credits[0] = 5000;
  research(g, 0, 'drives');
  g.tech[0].project.left = 0.1;
  step(g, 0.5);
  assert.ok(f.t0 + f.T < eta - 1, 'in-flight fleet arrives sooner after a drives upgrade');
  console.log(`refit: arrival ${Math.round(eta)}s -> ${Math.round(f.t0 + f.T)}s`);
}

// Special worlds and events.
{
  const { PERKS, EVENTS, EVENT_RULES, holds, depotBoost, fortressGuns } = await import('../src/sim.js');
  let total = 0;
  const seen = new Set();
  for (let seed = 1; seed <= 40; seed++) {
    const g = createGame({ seed, system: SYSTEM_KEYS[seed % SYSTEM_KEYS.length] });
    const ps = g.bodies.filter((b) => b.perk);
    assert.ok(ps.length >= 2 && ps.length <= 3, 'two or three special worlds');
    for (const b of ps) { assert.ok(!b.home && b.owner === NEUTRAL); seen.add(b.perk); }
    total += ps.length;
  }
  assert.equal(seen.size, Object.keys(PERKS).length, 'every perk turns up');
  // Perks work for whoever holds them.
  const g = createGame({ seed: 12 });
  const home = g.bodies.find((b) => b.owner === 0);
  const relay = g.bodies.find((b) => b.owner === NEUTRAL && !b.home);
  relay.perk = 'relay'; relay.owner = 0;
  const before = visibility(g, 0).bodies.size;
  relay.owner = NEUTRAL; const without = visibility(g, 0).bodies.size; relay.owner = 0;
  assert.ok(before > without, 'a held relay shows more of the map');
  assert.ok(before < g.bodies.length, 'but not all of it');
  relay.perk = 'depot';
  const moon = g.bodies.find((b) => b.parent === home.id);
  relay.owner = NEUTRAL; const slow = plan(g, home, moon).T; relay.owner = 0;
  const near = depotBoost(g, home) > 1;
  assert.ok(!near || plan(g, home, moon).T < slow, 'depot speeds nearby launches');
  // Events: announced, then held for a reward.
  const e = createGame({ seed: 21 });
  const credits = () => e.credits[0];
  while (!e.happenings?.length) step(e, 0.5);
  const h = e.happenings[0];
  const at = e.bodies[h.at];
  at.owner = 0; at.ships = 5; at.sieges = []; at.structures = [];
  const c0 = credits(), t0 = e.tech[0], k0 = JSON.stringify(t0), s0 = at.ships;
  for (let t = 0; t < EVENT_RULES.notice + EVENTS[h.kind].hold + 2; t += 0.5) step(e, 0.5);
  assert.ok(!e.happenings.includes(h), 'event resolved');
  const won = e.events.some((x) => x.type === 'event' && x.phase === 'won' && x.owner === 0);
  assert.ok(won, `holding the world wins the ${h.kind}`);
  console.log(`special worlds: ${total} over 40 maps, all ${seen.size} kinds; event ${h.kind} won by holding (credits ${Math.round(c0)} -> ${Math.round(credits())}, ships ${s0} -> ${at.ships})`);
}

// Visitors fly a pass round the sun and leave; ships there go home.
{
  const { present, staysFor } = await import('../src/sim.js');
  const g = createGame({ seed: 3 });
  g.nextEvent = 0;
  while (!g.visit) { g.nextEvent = g.time; step(g, 0.5); }
  const v = g.bodies.find((b) => b.visitor);
  assert.ok(present(g, v), 'visitor arrives');
  let closest = Infinity;
  const r0 = Math.hypot(posAt(g, v, g.time).x, posAt(g, v, g.time).z);
  for (let t = g.time; t < g.visit.t0 + g.visit.T; t += 5) { const p = posAt(g, v, t); closest = Math.min(closest, Math.hypot(p.x, p.z)); }
  assert.ok(r0 > 200 && closest < 170, 'it comes in from far out and swings round the sun');
  // Park ships on it, then let it leave: they head for home.
  v.owner = 0; v.ships = 3; v.sieges = [];
  const home = g.bodies.find((b) => b.owner === 0 && b.home);
  while (g.visit) step(g, 0.5);
  assert.ok(!present(g, v) && v.owner === NEUTRAL, 'visitor gone');
  assert.ok(g.fleets.some((f) => f.owner === 0 && f.n >= 3), 'its garrison flies home');
  assert.equal(staysFor(g, home), Infinity);
  console.log(`visitor: in from ${Math.round(r0)}, closest ${Math.round(closest)} to the sun, garrison sent home`);
}

// Gas giants start well defended; the binary companion swings in and out.
{
  const g = createGame({ seed: 6, system: 'binary' });
  for (const b of g.bodies) if (b.giant && b.owner === NEUTRAL) assert.ok(b.guns >= 5, 'giants start with 5 guns');
  const d = [];
  for (let t = 0; t < g.stars[1].period; t += 20) { const p = starPos(g, 1, t); d.push(Math.hypot(p.x, p.z)); }
  assert.ok(Math.max(...d) > Math.min(...d) * 2, 'companion orbit is eccentric');
  console.log(`companion: ${Math.round(Math.min(...d))} to ${Math.round(Math.max(...d))} from the main sun`);
}

// Cover works both ways within a family (satellites help the planet at a quarter).
{
  const { coverFrom, coverOf } = await import('../src/sim.js');
  const g = createGame({ seed: 5 });
  const planet = g.bodies.find((b) => g.bodies.some((c) => c.parent === b.id && c.kind === 'moon'));
  const moon = g.bodies.find((c) => c.parent === planet.id && c.kind === 'moon');
  planet.owner = moon.owner = 0; planet.guns = 4; moon.guns = 4;
  assert.equal(coverOf(g, moon), 4 * RULES.coverShare, 'planet covers moon at half');
  assert.equal(coverOf(g, planet), 4 * RULES.moonCover, 'moon covers planet at a quarter');
  moon.owner = 1;
  assert.equal(coverOf(g, planet), 0, 'only your own worlds cover you');
  console.log('cover both ways: ok');
}
