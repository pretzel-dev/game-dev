// AI admirals. Each plays by the player's rules and sees only what its own
// sensors show. Every few seconds it "thinks": spends money, sends damaged
// ships home, answers threats, raids freighters, takes worlds, and when it
// judges itself strong enough goes for an enemy capital.
// Difficulty is how often it thinks, how reliably it follows through (skill),
// and how well its economy runs (eco).
import {
  NEUTRAL, RULES, CLASSES, TECH, rng, posAt, setOrder, scuttle, routes, strength, armed, crippled, shipsAt, has, structure, working,
  cantBuild, buildStructure, cantUpgrade, upgrade, upgradeCost, cantOrderShip, orderShip, shipCost, cantResearch, research,
  fleetCap, fleetSize, incomeOf, batteryMax, warshipsOf, worldsOf,
} from './sim.js';

export const LEVELS = {
  cadet: { name: 'Cadet', think: 9, skill: 0.35, eco: 0.6, calm: 360, margin: 1.6 },
  easy: { name: 'Easy', think: 6, skill: 0.6, eco: 0.8, calm: 200, margin: 1.4 },
  normal: { name: 'Normal', think: 3.5, skill: 0.8, eco: 1, calm: 90, margin: 1.25 },
  hard: { name: 'Hard', think: 2, skill: 0.95, eco: 1.3, calm: 0, margin: 1.15, smart: true },
  brutal: { name: 'Brutal', think: 1.2, skill: 1, eco: 1.7, calm: 0, margin: 1.1, smart: true },
};
export const LEVEL_KEYS = Object.keys(LEVELS);

// What each power likes to field, as shares of its fleet.
const MIX = {
  concord: { frigate: 0.35, escort: 0.3, battleship: 0.25, corvette: 0.1 },
  boreal: { frigate: 0.45, corvette: 0.2, battleship: 0.2, escort: 0.15 },
  holds: { corvette: 0.45, frigate: 0.4, escort: 0.15, battleship: 0 },
};
const TECH_ORDER = {
  concord: ['weapons', 'weapons', 'drives', 'sensors', 'drives', 'weapons', 'sensors', 'drives', 'sensors'],
  boreal: ['drives', 'weapons', 'weapons', 'drives', 'sensors', 'weapons', 'drives', 'sensors', 'sensors'],
  holds: ['sensors', 'sensors', 'weapons', 'drives', 'drives', 'weapons', 'sensors', 'weapons', 'drives'],
};

export function createAI(game, owner, level = 'normal', seed = 1) {
  const d = LEVELS[level] || LEVELS.normal;
  game.eco[owner] = d.eco;
  return { owner, level, d, clock: 2 + owner, rand: rng(seed * 31 + owner * 977), known: new Map(), techI: 0 };
}

const dist2 = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

export function stepAI(game, ai, dt) {
  if (!game.alive[ai.owner] || game.over) return;
  ai.clock -= dt;
  if (ai.clock > 0) return;
  ai.clock = ai.d.think * (0.8 + ai.rand() * 0.4);
  think(game, ai);
}

function think(game, ai) {
  const o = ai.owner, d = ai.d, will = () => ai.rand() < d.skill;
  const home = game.homes[o];
  if (!home) return;
  const mine = worldsOf(game, o);
  const fleet = warshipsOf(game, o);
  const t = game.time;

  // What it knows of the enemy: every warship it can see now, remembered for two minutes.
  for (const s of game.ships) {
    if (s.owner === o || s.st.civil || !s.seen[o]) continue;
    ai.known.set(s.id, { owner: s.owner, str: s.seen[o] === 2 ? strength(s) : 2, t, x: s.x, y: s.y, z: s.z, at: s.at });
  }
  for (const [id, k] of ai.known) if (t - k.t > 120 || !game.ships.some((s) => s.id === id)) ai.known.delete(id);
  const enemyStr = (owner) => { let v = 0; for (const k of ai.known.values()) if (owner === undefined || k.owner === owner) v += k.str; return v; };

  spend(game, ai, home, mine, fleet, will);

  // ---- The fleet ----
  const service = (s) => s.dv < Math.max(s.st.dv * 0.3, 6) || s.hull < s.st.hull * 0.45 || (s.st.mag > 0 && s.torps === 0 && s.st.mag >= 8) || Object.values(s.out).some((v) => v > 1e8);
  const base = (s) => {
    // Nearest friendly world, a yard if it needs real repairs.
    let best = home, bd = 1e9;
    for (const b of mine) {
      if (b.blockaded) continue;
      const p = game.bp[b.id], dd = dist2(p, s) + (has(b, 'yard') || b.home ? 0 : 60);
      if (dd < bd) { bd = dd; best = b; }
    }
    return best;
  };
  const free = [];
  const adrift = fleet.filter((s) => s.at === null && s.dv <= 0.01);
  const tenders = fleet.filter((s) => s.st.stores && s.out.drive <= 0 && s.out.reactor <= 0);
  for (const s of adrift) {
    // Out of fuel: send a tender if there is one free, else after a while abandon her.
    s.dry = s.dry || t;
    const tn = tenders.find((x) => x.dv > 20 && (!x.order || x.order.ship === s.id));
    if (tn) { if (!tn.order) setOrder(game, o, [tn.id], { type: 'attack', ship: s.id, mode: 'match', d0: 1.5, profile: 'cruise' }); } else if (t - s.dry > 75) scuttle(game, o, [s.id]);
  }
  for (const s of fleet) {
    if (adrift.includes(s)) continue;
    s.dry = 0;
    // A ship holding a hostile orbit stays on station unless she is badly hurt.
    const sieging = s.at !== null && game.bodies[s.at].owner !== o;
    const needs = sieging ? s.hull < s.st.hull * 0.3 : service(s);
    if (needs) {
      const b = base(s);
      if (s.at === b.id) continue; // being seen to
      if (!s.order || s.order.body !== b.id) {
        // The cheapest way home the tank allows.
        const rs = routes(game, [s.id], b.id).filter((r) => r.reach).sort((a, c) => a.dv - c.dv);
        const r = rs.find((x) => x.ok) || rs[0];
        if (r) setOrder(game, o, [s.id], { type: 'orbit', body: b.id, profile: r.profile, via: r.via, side: r.side });
      }
      continue;
    }
    if (s.st.stores) { if (s.order && s.order.type === 'attack' && !adrift.some((a) => a.id === s.order.ship)) setOrder(game, o, [s.id], { type: 'orbit', body: home.id, profile: 'cruise' }); continue; }
    free.push(s);
  }
  if (!free.length) return;

  // Raiders: corvettes run down any freighter they can see.
  const raiders = free.filter((s) => s.cls === 'corvette');
  const line = free.filter((s) => s.cls !== 'corvette' || raiders.length === free.length);
  if (will()) {
    for (const s of raiders) {
      if (s.order && s.order.type === 'attack') continue;
      let prey = null, pd = 90;
      for (const f of game.ships) {
        if (f.owner === o || !f.st.civil || !f.seen[o]) continue;
        const dd = dist2(f, s);
        if (dd < pd) { pd = dd; prey = f; }
      }
      if (prey && t > d.calm) setOrder(game, o, [s.id], { type: 'attack', ship: prey.id, mode: 'match', d0: 1.2, profile: 'hard' });
    }
  }

  // Threats: enemy warships close to one of my worlds.
  let threat = null, threatStr = 0;
  for (const [id, k] of ai.known) {
    if (t - k.t > 12) continue;
    for (const b of mine) {
      const p = game.bp[b.id];
      if (dist2(p, k) < (b.home ? 70 : 40)) {
        const here = [...ai.known.values()].filter((q) => t - q.t < 12 && dist2(q, k) < 15).reduce((v, q) => v + q.str, 0);
        if (here > threatStr) { threatStr = here; threat = { id, k, b }; }
      }
    }
  }
  const idle = (s) => !s.order || (s.order.type === 'orbit' && s.at === null && false);
  const myStr = (list) => list.reduce((v, s) => v + strength(s), 0);
  if (threat && will()) {
    // Send a detachment big enough for the job (the nearest ships), not the whole fleet.
    const T = game.ships.find((s) => s.id === threat.id);
    const cand = line.filter((s) => dist2(s, threat.k) < 160 && !(s.order && s.order.type === 'attack') && !(s.at !== null && game.bodies[s.at].owner !== o) && !(s.order && s.order.body === ai.siege))
      .sort((x, y) => dist2(x, threat.k) - dist2(y, threat.k));
    const det = [];
    let v = 0;
    for (const s of cand) { if (v >= threatStr * 1.5 + 0.5) break; det.push(s); v += strength(s); }
    if (T && det.length && (v >= threatStr * 0.8 || threat.b.home)) setOrder(game, o, det.map((s) => s.id), { type: 'attack', ship: T.id, mode: 'match', d0: 5, profile: 'hard' });
  }

  // The main group: the biggest stack sitting idle together in one orbit.
  const stacks = new Map();
  for (const s of line) if (s.at !== null && !s.order) stacks.set(s.at, [...(stacks.get(s.at) || []), s]);
  let main = null;
  for (const list of stacks.values()) if (!main || myStr(list) > myStr(main)) main = list;
  // A siege in progress: is it still on? Then new ships go straight to it.
  if (ai.siege != null) {
    const sb = game.bodies[ai.siege];
    const there = line.filter((s) => s.at === sb.id || (s.order && s.order.body === sb.id));
    if (sb.owner === o || !there.length) ai.siege = null;
  }
  // Where to gather: the siege, else wherever the main group sits if that's a world of mine, else home.
  const rally = ai.siege != null ? game.bodies[ai.siege] : main && game.bodies[main[0].at].owner === o ? game.bodies[main[0].at] : home;
  for (const s of line) {
    if (s.order || (main && main.includes(s)) || s.at === rally.id) continue;
    setOrder(game, o, [s.id], { type: 'orbit', body: rally.id, profile: 'cruise' });
  }
  if (!main || !will()) return;
  const at = game.bodies[main[0].at];
  // Sitting on a world that hasn't yielded yet: stay and finish the job (or pull out if it's going badly).
  if (at.owner !== o) {
    const foes = shipsAt(game, at).filter((s) => s.owner !== o && armed(s)).reduce((v, s) => v + strength(s), 0) + at.bhp / 60;
    if (foes > myStr(main) * 1.6) setOrder(game, o, main.map((s) => s.id), { type: 'orbit', body: home.id, profile: 'hard' });
    return;
  }
  const str = myStr(main);
  // Pressure rises as the game goes on, so matches end.
  const push = t > 2400 ? 0.2 : t > 1800 ? 0.4 : t > 1200 ? 0.6 : t > 600 ? 0.85 : 1;
  const margin = d.margin * push;
  // Go as one fleet: wait until most of the line has gathered.
  if (str < myStr(line) * 0.7) return;
  const withFleet = tenders.filter((s) => s.at === at.id && !s.order);

  // Choose a target: an enemy capital if strong enough, else the best world to take.
  let best = null, bestV = 0;
  const here = game.bp[at.id];
  for (const b of game.bodies) {
    if (b.owner === o) continue;
    const enemy = b.owner !== NEUTRAL;
    if (enemy && t < d.calm) continue;
    const p = game.bp[b.id];
    const def = b.bhp / 60 + [...ai.known.values()].filter((k) => k.at === b.id && t - k.t < 60).reduce((v, k) => v + k.str, 0);
    // Against another navy, go in strength: most of the line together, and not while badly outnumbered.
    if (enemy && str < enemyStr(b.owner) * 0.7 * push) continue;
    if (b.home && enemy) {
      const ahead = mine.length >= 2 * worldsOf(game, b.owner).length && t > 600;
      const need = (b.bhp / 100 + Math.max(2, enemyStr(b.owner))) * margin * (ahead ? 0.6 : 1);
      if (str < need) continue;
      const v = (ahead ? 500 : 50) / (1 + dist2(p, here) / 200);
      if (v > bestV) { bestV = v; best = b; }
      continue;
    }
    if (str < def * margin + 0.5) continue;
    const worth = incomeOf(b) + (b.kind === 'planet' ? 1.2 : b.kind === 'station' ? 0.8 : 0.3) + (enemy ? 0.4 : 0) + (structure(b, 'yard') ? 1 : 0);
    const v = worth / (1 + dist2(p, here) / 60 + def * 0.6);
    if (v > bestV) { bestV = v; best = b; }
  }
  if (!best) return;
  const ids = [...main, ...withFleet].map((s) => s.id);
  // Pick a route the tanks can afford (with enough left to get home).
  const opts = routes(game, ids, best.id).filter((r) => r.ok && r.dv < Math.min(...main.map((s) => s.dv)) * (best.home ? 0.8 : 0.6));
  if (!opts.length) return;
  const pick = (d.smart && opts.find((r) => r.key === 'sling')) || opts.find((r) => r.key === (best.home ? 'hard' : 'cruise')) || opts[0];
  setOrder(game, o, ids, { type: 'orbit', body: best.id, profile: pick.profile, via: pick.via, side: pick.side });
  if (best.owner !== NEUTRAL) ai.siege = best.id;
}

/** Money: ships first until there's a fleet, then mines, research and more ships in turn. */
function spend(game, ai, home, mine, fleet, will) {
  const o = ai.owner, f = game.factions[o];
  const credits = () => game.credits[o];
  const yards = mine.filter((b) => has(b, 'yard') && !b.blockaded);
  const cap = fleetCap(game, o), size = fleetSize(game, o);
  // Ships.
  const want = () => {
    const mix = MIX[f];
    const counts = {};
    for (const s of fleet) counts[s.cls] = (counts[s.cls] || 0) + 1;
    for (const b of mine) for (const q of b.queue) counts[q.cls] = (counts[q.cls] || 0) + 1;
    if (size >= 4 && !counts.tender && ai.d.skill > 0.7) return 'tender';
    let best = 'frigate', bv = -1e9;
    for (const cls in mix) {
      if (!mix[cls]) continue;
      const C = CLASSES[cls];
      if (C.needs && game.tech[o][C.needs[0]] < C.needs[1]) continue;
      const v = mix[cls] - (counts[cls] || 0) / Math.max(1, size);
      if (v > bv) { bv = v; best = cls; }
    }
    return best;
  };
  if (size < cap && yards.length) {
    const cls = want();
    const y = yards.reduce((a, b) => (b.queue.length < a.queue.length ? b : a));
    if (y.queue.length < 2 && !cantOrderShip(game, y, cls) && (size < 4 || credits() > shipCost(game, o, cls) + 100)) { orderShip(game, y, cls); return; }
  }
  if (!will()) return;
  // Mines and refineries pay for themselves quickly.
  for (const b of mine) {
    if (b.blockaded) continue;
    for (const type of ['mine', 'refinery']) {
      if (!cantBuild(game, b, type)) { buildStructure(game, b, type); return; }
      const x = structure(b, type);
      if (x && size >= 3 && !cantUpgrade(game, b, x) && credits() > upgradeCost(x) + 150) { upgrade(game, b, x); return; }
    }
  }
  // Research, in the order this power favours.
  const tech = game.tech[o];
  if (!tech.project && size >= 3) {
    const order = TECH_ORDER[f];
    while (ai.techI < order.length) {
      const key = order[ai.techI];
      const done = order.slice(0, ai.techI + 1).filter((k) => k === key).length;
      if (tech[key] >= done) { ai.techI++; continue; }
      if (!cantResearch(game, o, key) && credits() > TECH[key].cost[tech[key]] + 120) research(game, o, key);
      break;
    }
  }
  // A second yard and frontier batteries once the money is there.
  if (credits() > 700 && size >= cap - 1) {
    for (const b of mine) {
      if (!b.home && b.kind === 'planet' && !cantBuild(game, b, 'yard') && yards.length < 2) { buildStructure(game, b, 'yard'); return; }
      if (!cantBuild(game, b, 'battery') && (b.kind === 'planet' || b.kind === 'station')) { buildStructure(game, b, 'battery'); return; }
    }
  }
}
