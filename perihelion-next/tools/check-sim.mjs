// Headless checks of the rules: flight, fuel, seeing, battle, worlds, economy,
// multiplayer snapshots, scenarios and one whole AI match. Run: npm run check
import * as S from '../src/sim.js';
import { createAI, stepAI } from '../src/ai.js';
import { SCENARIOS, SCENARIO_KEYS } from '../src/scenarios.js';

let failed = 0;
const ok = (cond, msg) => { if (!cond) { failed++; console.log('FAIL', msg); } };
const run = (g, secs) => { for (let i = 0; i < secs; i++) S.step(g, 1); };
const two = [{ faction: 'concord' }, { faction: 'boreal' }];
const free = (g, owner, cls, x, z, vx = 0, vz = 0) => { const s = S.spawnShip(g, owner, cls, null); Object.assign(s, { x, y: 0, z, vx, vy: 0, vz }); return s; };

// Systems: the same seed gives the same system; sizes stay playable.
{
  const a = S.createGame({ seed: 7, players: two }), b = S.createGame({ seed: 7, players: two });
  ok(JSON.stringify(a.bodies) === JSON.stringify(b.bodies), 'same seed, same system');
  for (let seed = 1; seed <= 40; seed++) {
    const g = S.createGame({ seed, players: seed % 2 ? two : [...two, { faction: 'holds' }], empty: true });
    const outer = Math.max(...g.planets.map((p) => p.r));
    ok(outer < 1300, `system ${seed} too wide (${outer.toFixed(0)})`);
    ok(g.homes.every((h) => h && g.bodies.some((m) => m.parent === h.id && m.kind === 'moon')), `system ${seed}: every capital has a moon`);
    ok(g.planets.some((p) => p.giant), `system ${seed}: has a gas giant`);
  }
}
// Routes: a hard burn always reaches; cruise nearly always.
{
  let n = 0, cruise = 0, sling = 0;
  for (let seed = 1; seed <= 25; seed++) {
    const g = S.createGame({ seed, players: two });
    const ids = g.ships.filter((s) => s.owner === 0).map((s) => s.id);
    for (const b of g.bodies) {
      if (b === g.homes[0]) continue;
      const r = S.routes(g, ids, b.id);
      n++;
      ok(r.find((x) => x.key === 'hard').reach, `seed ${seed}: hard burn reaches ${b.name}`);
      if (r.find((x) => x.key === 'cruise').reach) cruise++;
      const sl = r.find((x) => x.key === 'sling');
      if (sl) { sling++; ok(sl.dv < r.find((x) => x.key === 'cruise').dv, 'a slingshot on offer saves fuel'); }
    }
  }
  ok(cruise / n > 0.95, `cruise reaches ${cruise}/${n}`);
  ok(sling > 5, `slingshots turn up (${sling})`);
}
// Flight: ships arrive, burn about what the plan said, and a dry ship drifts.
{
  const g = S.createGame({ seed: 3, players: two, empty: true });
  const s = S.spawnShip(g, 0, 'frigate', g.homes[0]);
  const moon = g.bodies.find((b) => b.parent === g.homes[0].id);
  const plan = S.routes(g, [s.id], moon.id).find((r) => r.key === 'cruise');
  const dv0 = s.dv;
  S.setOrder(g, 0, [s.id], { type: 'orbit', body: moon.id, profile: 'cruise' });
  for (let i = 0; i < plan.time * 1.3 + 5 && s.at === null; i++) S.step(g, 1);
  ok(s.at === moon.id, 'ship reaches the moon');
  ok(Math.abs(dv0 - s.dv - plan.dv) < plan.dv * 0.3 + 0.3, `fuel burnt (${(dv0 - s.dv).toFixed(1)}) matches the plan (${plan.dv.toFixed(1)})`);
  const far = g.bodies.find((b) => b.kind === 'planet' && b !== g.homes[0] && b.owner === S.NEUTRAL);
  s.dv = 0.3;
  S.setOrder(g, 0, [s.id], { type: 'orbit', body: far.id, profile: 'hard' });
  run(g, 60);
  ok(s.dv <= 0 && s.at === null && S.crippled(s) && s.phase === 'adrift', 'a ship that runs dry is adrift');
}
// Seeing: a cold ship is hidden beyond short range, a burning one shows anywhere, a world blocks the view.
{
  const g = S.createGame({ seed: 5, players: two, empty: true });
  const watcher = free(g, 0, 'frigate', 3000, 3000);
  const cold = free(g, 1, 'frigate', 3000 + 60, 3000);
  run(g, 2);
  ok(cold.seen[0] === 0, 'a cold ship 60 away is unseen');
  cold.x = 3000 + 8; run(g, 2);
  ok(cold.seen[0] === 2, 'a cold ship close by is identified');
  cold.x = 3000 + 250; cold.seen[0] = 0;
  S.setOrder(g, 1, [cold.id], { type: 'burn', x: 0, y: 0, z: 1, left: 30 });
  run(g, 2);
  ok(cold.seen[0] === 1, 'a burning ship far off is a contact');
  const p = g.planets.find((x) => x.owner === S.NEUTRAL), pp = S.posAt(g, p, g.time);
  Object.assign(watcher, { x: pp.x - p.size - 6, y: pp.y, z: pp.z, vx: 0, vz: 0 });
  Object.assign(cold, { x: pp.x + p.size + 6, y: pp.y, z: pp.z, vx: 0, vz: 0, seen: [0, 2], order: null, burn: 0, lit: 0 });
  S.step(g, 0.4);
  ok(cold.seen[0] === 0, 'a world blocks the line of sight');
  void watcher;
}
// Battle: closing speed kills; escorts stop torpedoes.
{
  const duel = (v, d, clsB = 'frigate', nB = 1, seed = 1) => {
    const g = S.createGame({ seed, players: [{ faction: 'boreal' }, { faction: 'boreal' }], empty: true });
    const a = free(g, 0, 'frigate', 3000, 3000, v / 2, 0);
    const bs = Array.from({ length: nB }, (_, i) => free(g, 1, i ? 'escort' : clsB, 3000 + d, 3000 + i * 1.5, -v / 2, 0));
    let t = 0;
    while (t < 200 && g.ships.includes(a) && bs.every((b) => g.ships.includes(b))) { for (const s of g.ships) s.seen = [2, 2]; S.step(g, 1); t++; }
    return { t, a: g.ships.includes(a) ? a.hull : 0, b: bs.map((b) => (g.ships.includes(b) ? b.hull : 0)) };
  };
  let slow = 0, fast = 0, bare = 0, covered = 0;
  for (let seed = 1; seed <= 12; seed++) {
    slow += duel(0, 10, 'frigate', 1, seed).t;
    fast += duel(4, 110, 'frigate', 1, seed).t - 110 / 4;
    bare += duel(3, 90, 'frigate', 1, seed).b[0];
    covered += duel(3, 90, 'frigate', 2, seed).b[0];
  }
  ok(fast < slow * 0.6, `a fast pass is decided sooner (${(fast / 12).toFixed(0)}s) than a matched fight (${(slow / 12).toFixed(0)}s)`);
  ok(covered > bare + 60, `an escort saves the ship beside it (${(covered / 12).toFixed(0)} hull left vs ${(bare / 12).toFixed(0)})`);
}
// Worlds: an undefended world yields to a ship in orbit; a live battery prevents it; taking the capital wins.
{
  const g = S.createGame({ seed: 9, players: two, empty: true });
  const moon = g.bodies.find((b) => b.parent === g.homes[0].id);
  const s = S.spawnShip(g, 0, 'frigate', moon);
  run(g, Math.ceil(S.yieldTime(moon)) + 3);
  ok(moon.owner === 0, 'an undefended moon yields');
  const cap = g.homes[1];
  for (const cls of ['battleship', 'battleship', 'frigate', 'frigate']) S.spawnShip(g, 0, cls, cap);
  run(g, 20);
  ok(cap.owner === 1, 'a capital with a live battery does not yield at once');
  run(g, 600);
  ok(g.over && g.over.winner === 0, 'taking the capital wins the game');
  void s;
}
// Economy: mines, yards, research, freighters, boarding.
{
  const g = S.createGame({ seed: 4, players: two, empty: true });
  const home = g.homes[0], moon = g.bodies.find((b) => b.parent === home.id);
  g.credits[0] = 5000;
  moon.owner = 0;
  ok(S.buildStructure(g, moon, 'mine') && !S.buildStructure(g, moon, 'mine'), 'a mine builds once');
  ok(S.cantOrderShip(g, home, 'battleship'), 'the battleship needs research');
  ok(S.orderShip(g, home, 'frigate'), 'a frigate can be ordered');
  ok(S.research(g, 0, 'weapons') && !S.research(g, 0, 'drives'), 'one project at a time');
  const c0 = g.credits[0];
  run(g, 400);
  ok(g.ships.some((s) => s.owner === 0 && s.cls === 'frigate'), 'the yard launches the frigate');
  ok(g.tech[0].weapons === 1, 'research completes');
  ok(g.stats[0].hauled >= 1 && g.credits[0] > c0 + 300, 'freighters carry the moon\'s earnings home');
  S.research(g, 0, 'weapons'); run(g, 90);
  ok(!S.cantOrderShip(g, home, 'battleship'), 'spinal mounts unlock the battleship');
  // A raider alongside a freighter takes her cargo.
  moon.stock = 200; moon.hauler = 0; run(g, 2);
  const f = g.ships.find((s) => s.st.civil);
  ok(f, 'a freighter sails');
  if (f) {
    const r = free(g, 1, 'corvette', f.x + 1, f.z, f.vx, f.vz);
    const before = g.credits[1];
    for (let i = 0; i < 12; i++) { r.x = f.x + 1; r.z = f.z; r.vx = f.vx; r.vz = f.vz; r.y = f.y; r.vy = f.vy; S.step(g, 1); }
    ok(g.credits[1] > before + 100, 'boarding a freighter takes the cargo');
  }
}
// War costs money, and habitats raise the ship limit.
{
  const g = S.createGame({ seed: 8, players: two, empty: true });
  const home = g.homes[0];
  const s = S.spawnShip(g, 0, 'frigate', home);
  s.dv = 2; s.torps = 0; g.credits[0] = 1000;
  run(g, 60);
  ok(s.dv > 10 && s.torps > 0 && g.credits[0] < 1000 + 60 * S.RULES.homeIncome - 50, 'fuel and torpedoes are paid for');
  s.dv = 2; g.credits[0] = 0; g.eco[0] = 0;
  run(g, 10);
  ok(s.dv < 2.5, 'no credits, no fuel');
  g.credits[0] = 2000;
  const cap0 = S.fleetCap(g, 0);
  S.buildStructure(g, home, 'habitat'); run(g, 70);
  ok(S.fleetCap(g, 0) === cap0 + 1, 'a habitat raises the ship limit by one');
  S.upgrade(g, home, S.structure(home, 'habitat')); run(g, 70);
  ok(S.fleetCap(g, 0) === cap0 + 2, 'and its upgrade by one more');
  ok(S.buildStructure(g, home, 'array') && S.buildStructure(g, home, 'depot'), 'array and depot build on the capital');
}
// Multiplayer: a snapshot hides what the player cannot see and survives a round trip.
{
  const g = S.createGame({ seed: 6, players: two });
  run(g, 5);
  const snap = JSON.parse(JSON.stringify(S.snapshot(g, 1)));
  ok(snap.ships.every((s) => s.owner === 1), 'unseen enemy ships are not sent');
  const guest = S.createGame({ seed: 6, players: two });
  S.applySnapshot(guest, snap, 1);
  ok(guest.ships.length === snap.ships.length && guest.ships.every((s) => s.st && s.seen[1] === 2), 'a guest rebuilds its ships');
  ok(guest.bodies.every((b, i) => b.owner === g.bodies[i].owner), 'a guest sees who holds each world');
}
// Scenarios: each sets up and reports a state; the first one can be won.
for (const k of SCENARIO_KEYS) {
  const m = SCENARIOS[k].make();
  const st = SCENARIOS[k].state(m.game, 0);
  ok(st && st.text && !st.done, `scenario ${k} starts`);
  run(m.game, 30);
  ok(SCENARIOS[k].state(m.game, 0).text, `scenario ${k} runs`);
}
{
  const m = SCENARIOS.first.make(), g = m.game, sc = SCENARIOS.first;
  const moon = g.bodies[g.scn.moon];
  S.setOrder(g, 0, g.ships.filter((s) => s.owner === 0).map((s) => s.id), { type: 'orbit', body: moon.id, profile: 'hard' });
  let done = null;
  for (let t = 0; t < 2400 && !done; t++) {
    S.step(g, 1);
    const st = sc.state(g, 0);
    if (g.scn.step === 2 && moon.owner === 0 && !moon.structures.length) S.buildStructure(g, moon, 'mine');
    done = st.done;
  }
  ok(done === 'win', `the first scenario can be won (${done}, step ${g.scn.step})`);
}
// One whole match between two AI admirals ends with a winner.
{
  const players = [{ faction: 'concord', ai: 'normal' }, { faction: 'holds', ai: 'normal' }];
  const g = S.createGame({ seed: 2, players });
  const ais = players.map((p, i) => createAI(g, i, p.ai, 2));
  while (!g.over && g.time < 9000) { S.step(g, 1); for (const a of ais) stepAI(g, a, 1); }
  ok(g.over, 'an AI match finishes in good time');
}
console.log(failed ? `${failed} check(s) failed` : 'All checks passed');
process.exit(failed ? 1 : 0);
