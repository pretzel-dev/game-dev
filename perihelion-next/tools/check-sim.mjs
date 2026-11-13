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
    ok(outer < 2400, `system ${seed} too wide (${outer.toFixed(0)})`);
    ok(g.homes.every((h) => h && g.bodies.some((m) => m.parent === (h.kind === 'station' ? h.parent : h.id) && m.kind === 'moon')), `system ${seed}: every capital has a moon nearby`);
    ok(g.homes.every((h, o) => (g.factions[o] === 'holds') === (h.kind === 'station')), `system ${seed}: the Holds start on a station, the others on a world`);
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
      if (r.some((x) => (x.key === 'cruise' || x.key === 'dark') && x.reach)) cruise++;
      const sl = r.find((x) => x.key === 'sling');
      if (sl) { sling++; ok(sl.dv < r.find((x) => x.key === 'cruise').dv, 'a slingshot on offer saves fuel'); }
    }
  }
  ok(cruise / n > 0.95, `cruise reaches ${cruise}/${n}`);
  void sling; // (with giants far out, a slingshot that pays is rare)
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
  ok(s.at === moon.id && s.pending, 'a ship that has just made orbit waits before it leaves again');
  run(g, S.RULES.turnaround + 1); s.dv = 0.3;
  run(g, 60);
  ok(s.dv <= 0 && s.at === null && S.crippled(s) && s.phase === 'adrift', 'a ship that runs dry is adrift');
}
// Formation: ships ordered together stay together; loose, the fast ones run ahead. One ship can join another.
{
  const spread = (loose) => {
    const g = S.createGame({ seed: 3, players: two, empty: true });
    const ships = ['corvette', 'escort', 'battleship'].map((c) => S.spawnShip(g, 0, c, g.homes[0]));
    const far = g.planets.filter((p) => p.owner === S.NEUTRAL).sort((a, b) => b.r - a.r)[0];
    S.setOrder(g, 0, ships.map((x) => x.id), { type: 'orbit', body: far.id, profile: 'hard', loose });
    run(g, 150);
    return Math.max(...ships.map((a) => Math.max(...ships.map((b) => S.dist(a, b)))));
  };
  const tight = spread(false), wide = spread(true);
  ok(tight < 6, `a formation holds together (${tight.toFixed(1)} apart)`);
  ok(wide > tight * 3, `loose ships string out (${wide.toFixed(1)} apart)`);
  const g = S.createGame({ seed: 3, players: two, empty: true });
  const adrift = free(g, 0, 'frigate', 600, 0, 0, 0.4);
  adrift.dv = 0;
  const tender = S.spawnShip(g, 0, 'tender', g.homes[0]);
  ok(S.setOrder(g, 0, [tender.id], { type: 'form', lead: adrift.id }), 'a ship can be told to join another');
  for (let i = 0; i < 900 && adrift.dv < 5; i++) S.step(g, 1);
  ok(S.dist(tender, adrift) < 4 && adrift.dv >= 5, `a tender sent to a dry ship reaches it and refuels it (${S.dist(tender, adrift).toFixed(1)} apart)`);
}
// Ships go round worlds, not through them, and arrive without overshooting.
{
  let through = 0, over = 0, legs = 0;
  for (let seed = 1; seed <= 6; seed++) {
    const g = S.createGame({ seed, players: [{ faction: 'concord' }, { faction: 'holds' }], empty: true }); g.noEvents = true;
    const targets = g.bodies.filter((b) => b.parent !== null).slice(0, 5);
    for (const to of targets) {
      const s = S.spawnShip(g, 0, 'frigate', g.homes[0]);
      S.setOrder(g, 0, [s.id], { type: 'orbit', body: to.id, profile: 'hard' });
      legs++;
      let near = 1e9, passed = false;
      for (let i = 0; i < 1500 && s.at === null; i++) {
        S.step(g, 1);
        for (const b of g.blockers) { const p = g.bp[b.id]; if (Math.hypot(p.x - s.x, p.y - s.y, p.z - s.z) < b.size * 0.98) through++; }
        const p = g.bp[to.id], d = Math.hypot(p.x - s.x, p.y - s.y, p.z - s.z);
        if (d < near) near = d; else if (d > near + 6 && near < 12) passed = true;
      }
      if (passed || s.at !== to.id) over++;
      g.ships = g.ships.filter((x) => x !== s);
    }
  }
  ok(through <= 2, `ships go round worlds (${through} steps inside one)`);
  ok(over <= 1, `ships arrive without overshooting (${over} of ${legs} legs)`);
}
// Taking a structure down; boarding a ship that can still fight; what it takes to take a capital.
{
  const g = S.createGame({ seed: 5, players: two, empty: true }); g.noEvents = true;
  const home = g.homes[0];
  g.credits[0] = 1000;
  S.buildStructure(g, home, 'lab'); run(g, 70);
  const c0 = g.credits[0];
  ok(S.demolish(g, home, 'lab') && S.structure(home, 'lab') && !S.has(home, 'lab'), 'a structure being removed stops working but is still there');
  run(g, S.RULES.scrapTime + 2);
  ok(!S.structure(home, 'lab') && g.credits[0] > c0 + 100, 'a structure can be removed for part of its cost');
  const prey = free(g, 1, 'corvette', 3000, 3000);
  prey.hull = prey.st.hull * 0.3;
  const hunters = [free(g, 0, 'battleship', 3001, 3000), free(g, 0, 'frigate', 3000, 3001)];
  ok(S.boardChance(prey, hunters) > 0.5 && S.boardChance(hunters[0], [prey]) < 0.2, 'boarding favours big ships against small damaged ones');
  for (const h of hunters) { h.fireFree = false; h.torpsFree = false; }
  prey.fireFree = false; prey.torpsFree = false;
  S.setOrder(g, 0, hunters.map((h) => h.id), { type: 'attack', ship: prey.id, mode: 'board', profile: 'hard', loose: true });
  for (let i = 0; i < 400 && prey.owner === 1; i++) { for (const x of g.ships) x.seen = [2, 2]; S.step(g, 1); }
  ok(prey.owner === 0, 'a ship that can still fight can be boarded');
  let alone = 0, fleet = 0;
  for (let seed = 1; seed <= 6; seed++) {
    for (const [list, add] of [[['corvette', 'corvette'], () => { alone++; }], [['frigate', 'frigate', 'frigate', 'escort'], () => { fleet++; }]]) {
      const h = S.createGame({ seed, players: two, empty: true }); h.noEvents = true;
      const cap = h.homes[1];
      for (const c of list) S.spawnShip(h, 0, c, cap);
      for (let i = 0; i < 500 && cap.owner === 1 && h.ships.some((x) => x.owner === 0); i++) S.step(h, 1);
      if (cap.owner === 0) add();
    }
  }
  ok(alone === 0 && fleet >= 5, `two corvettes cannot take a capital (${alone}/6), a real fleet can (${fleet}/6)`);
}
// Seeing: a cold ship is hidden beyond short range, a burning one shows anywhere, a world blocks the view.
{
  const g = S.createGame({ seed: 5, players: two, empty: true });
  const watcher = free(g, 0, 'frigate', 3000, 3000);
  const cold = free(g, 1, 'frigate', 3000 + 60, 3000);
  run(g, 2);
  ok(cold.seen[0] === 0, 'a cold ship 60 away is unseen');
  cold.x = 3000 + 5; run(g, 2);
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
    slow += duel(0, 5, 'frigate', 1, seed).t;
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
  ok(S.research(g, 0, 'weapons', 'guided') && !S.research(g, 0, 'drives', 'nozzles'), 'one project at a time');
  const c0 = g.credits[0];
  run(g, 400);
  ok(g.ships.some((s) => s.owner === 0 && s.cls === 'frigate'), 'the yard launches the frigate');
  ok(g.tech[0].weapons === 1 && S.knows(g, 0, 'guided'), 'research completes');
  ok(g.stats[0].hauled >= 1 && g.credits[0] > c0 + 300, 'freighters carry the moon\'s earnings home');
  ok(!S.research(g, 0, 'weapons', 'swarm'), 'a later step cannot be taken early');
  S.research(g, 0, 'weapons', 'spinal'); run(g, 90);
  ok(!S.cantOrderShip(g, home, 'battleship'), 'spinal mounts unlock the battleship');
  g.credits[0] = 5000; S.research(g, 0, 'weapons', 'wolfpack'); run(g, 200);
  ok(g.tech[0].weapons === 3 && S.knows(g, 0, 'wolfpack') && !S.knows(g, 0, 'plate') && S.cantResearch(g, 0, 'weapons', 'plate'), 'choosing one doctrine closes the other');
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
// Resupply, the income breakdown, and habitats raising the ship limit.
{
  const g = S.createGame({ seed: 8, players: two, empty: true });
  const home = g.homes[0];
  const s = S.spawnShip(g, 0, 'frigate', home);
  s.dv = 2; s.torps = 0;
  const c0 = g.credits[0];
  run(g, 60);
  ok(s.dv > 10 && s.torps > 0 && g.credits[0] >= c0, 'ships refuel and rearm at home, free');
  ok(S.incomeBreakdown(g, 0).total > 1.9, 'the income breakdown adds up');
  g.credits[0] = 2000;
  const cap0 = S.fleetCap(g, 0);
  S.buildStructure(g, home, 'habitat'); run(g, 70);
  ok(S.fleetCap(g, 0) === cap0 + 1, 'a habitat raises the ship limit by one');
  S.upgrade(g, home, S.structure(home, 'habitat')); run(g, 70);
  ok(S.fleetCap(g, 0) === cap0 + 2, 'and its upgrade by one more');
  ok(S.buildStructure(g, home, 'lab') && S.buildStructure(g, home, 'exchange'), 'a laboratory and an exchange build on the capital');
}
// World traits, laboratories, agents, veterans.
{
  const g = S.createGame({ seed: 12, players: two, empty: true });
  const home = g.homes[0];
  g.credits[0] = 9000;
  ok(g.bodies.filter((b) => b.trait).length >= 5, 'most systems have several special worlds');
  const seam = g.bodies.find((b) => b.trait === 'seam');
  if (seam) { seam.owner = 0; S.buildStructure(g, seam, 'mine'); run(g, 50); ok(S.incomeOf(seam, g) >= S.RULES.income[seam.kind] + 2, 'a mine on a rich seam pays double'); }
  ok(S.cantBuild(g, home, 'array') && !S.cantBuild(g, home, 'lab') && !S.cantBuild(g, home, 'exchange'), 'what can be built depends on the world');
  const sp0 = S.researchSpeed(g, 0);
  S.buildStructure(g, home, 'lab'); run(g, 70);
  ok(S.researchSpeed(g, 0) > sp0, 'a laboratory speeds research');
  const foe = g.homes[1], indie = g.bodies.find((b) => b.owner === S.NEUTRAL && !S.batteryMax(b));
  ok(S.cantSendAgent(g, 0, foe), 'agents need Signals intercept');
  S.research(g, 0, 'intel', 'signals'); run(g, 60);
  ok(S.sendAgent(g, 0, indie) && S.cantBuyWorld(g, 0, indie), 'an agent takes time to arrive');
  run(g, 50);
  ok(S.buyWorld(g, 0, indie) && indie.owner === 0 && !g.agents.length, 'an independent world can be bought through an agent');
  ok(S.sendAgent(g, 0, foe), 'and one sent to an enemy world');
  run(g, 50);
  const spy = S.spawnShip(g, 1, 'frigate', foe);
  S.step(g, 1);
  ok(spy.seen[0] === 2, 'an agent sees the ships over her world');
  ok(!S.setAgentOp(g, 0, foe, 'steal') && S.cantSabotage(g, 0, foe, 'battery'), 'stealing and sabotage need their research');
  const v = S.spawnShip(g, 0, 'frigate', home);
  v.xp = 20;
  ok(S.rankOf(v) === 2, 'ships earn ranks');
}
// Derelicts and convoys turn up, and a derelict can be boarded.
{
  const g = S.createGame({ seed: 14, players: two, empty: true });
  run(g, 400);
  const d = g.ships.find((x) => x.derelict);
  ok(d && d.seen[0] === 2 && d.seen[1] === 2, 'a derelict turns up and everyone sees her');
  if (d) {
    const b = free(g, 0, 'frigate', d.x + 1, d.z, d.vx, d.vz);
    for (let i = 0; i < 25; i++) { b.x = d.x + 1; b.y = d.y; b.z = d.z; b.vx = d.vx; b.vy = d.vy; b.vz = d.vz; S.step(g, 1); }
    ok(d.owner === 0 && !d.derelict && S.rankOf(d) >= 2, 'boarding a derelict makes her yours, a veteran');
  }
  run(g, 700);
  ok(g.events.some((e) => e.type === 'event' && e.kind === 'convoy'), 'an independent convoy sails');
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
    if (g.scn.step === 2 && moon.owner === 0 && !S.structure(moon, 'mine')) S.buildStructure(g, moon, 'mine');
    done = st.done;
  }
  ok(done === 'win', `the first scenario can be won (${done}, step ${g.scn.step})`);
}
// Half an hour between two AI admirals: both build, expand and fight, and nothing breaks.
// This round: dark is the slowest course; one ship can leave a formation; ships cost money to run; conquest moves the capital.
{
  let n = 0, slow = 0;
  for (let seed = 1; seed <= 12; seed++) {
    const g = S.createGame({ seed, players: two });
    const ids = g.ships.filter((x) => x.owner === 0 && !x.st.civil).map((x) => x.id);
    for (const b of g.bodies.filter((x) => x.kind !== 'station' && x !== g.homes[0]).slice(0, 6)) {
      const r = S.routes(g, ids, b.id), c = r.find((x) => x.key === 'cruise'), d = r.find((x) => x.key === 'dark');
      if (d && d.reach) { n++; if (!c || !c.reach || d.time >= c.time) slow++; }
    }
  }
  ok(n > 20 && slow === n, `dark is never quicker than cruise (${slow}/${n})`);
  const g = S.createGame({ seed: 5, players: two });
  const mine = g.ships.filter((x) => x.owner === 0 && !x.st.civil);
  const far = g.planets.filter((p) => p !== g.homes[0]).sort((a, b) => b.r - a.r)[0], near = g.planets.filter((p) => p !== g.homes[0] && p !== far)[0];
  S.setOrder(g, 0, mine.map((x) => x.id), { type: 'orbit', body: far.id, profile: 'hard' });
  run(g, 20);
  const lead = mine.find((x) => x.order.type === 'orbit');
  S.setOrder(g, 0, [lead.id], { type: 'orbit', body: near.id, profile: 'hard' });
  const rest = mine.filter((x) => x !== lead);
  ok(lead.order.body === near.id && rest.filter((x) => x.order.type === 'orbit' && x.order.body === far.id).length === 1 && rest.every((x) => x.order.type === 'orbit' || rest.some((y) => y.id === x.order.lead)), 'ordering the leader away leaves the others on course under a new leader');
  const c0 = g.credits[0]; g.credits[1] = 0;
  const inc = S.incomeBreakdown(g, 0);
  ok(inc.upkeep > 0 && Math.abs(inc.total - (inc.gross - inc.upkeep)) < 1e-9, 'ships cost money to run');
  ok(S.TRAITS.deut.kinds.every((k) => k === 'giant'), 'a deuterium sea is only found where a refinery can be built');
  void c0;
  const q = S.createGame({ seed: 5, players: two, conquest: true });
  const other = q.bodies.find((b) => b.owner === S.NEUTRAL && b.kind !== 'station');
  S.capture(q, other, 1);
  S.capture(q, q.homes[1], 0);
  ok(q.alive[1] && q.homes[1] === other && other.home, 'conquest: a power that loses its capital moves to another world');
  S.capture(q, other, 0);
  ok(!q.alive[1], 'conquest: with no worlds left it is out');
}
// (Whether AI-only games reach a winner is measured by check:matches; the AI is still poor at taking a defended capital.)
{
  const players = [{ faction: 'concord', ai: 'normal' }, { faction: 'holds', ai: 'normal' }];
  const g = S.createGame({ seed: 2, players });
  const ais = players.map((p, i) => createAI(g, i, p.ai, 2));
  while (!g.over && g.time < 1800) { S.step(g, 1); for (const a of ais) stepAI(g, a, 1); }
  ok(g.stats.every((st) => st.built >= 1 && st.captured >= 1), 'both AI admirals build ships and take worlds');
  ok(g.stats[0].lost + g.stats[1].lost >= 1, 'and they fight');
  ok(g.ships.every((x) => Number.isFinite(x.x) && Number.isFinite(x.vx)), 'no ship ends up nowhere');
}
console.log(failed ? `${failed} check(s) failed` : 'All checks passed');
process.exit(failed ? 1 : 0);
