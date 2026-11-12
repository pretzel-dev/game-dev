// AI admirals. Each plays by the player's rules and sees only what its own
// sensors show. Every few seconds it "thinks": spends money, sends damaged
// ships home, answers threats, raids freighters, takes worlds, and when it
// judges itself strong enough goes for an enemy capital.
// Difficulty is how often it thinks, how reliably it follows through (skill),
// and how well its economy runs (eco).
import {
  NEUTRAL, RULES, CLASSES, TECH, TECH_COST, knows, agentAt, cantSendAgent, sendAgent, setAgentOp, cantSabotage, sabotage, cantBuyWorld, buyWorld, worldPrice, rng, posAt, setOrder, scuttle, routes, strength, armed, crippled, shipsAt, has, structure, working,
  cantBuild, buildStructure, cantUpgrade, upgrade, upgradeCost, cantOrderShip, orderShip, shipCost, cantResearch, research,
  fleetCap, fleetSize, incomeOf, batteryMax, batteryGuns, warshipsOf, worldsOf,
} from './sim.js';

export const LEVELS = {
  cadet: { name: 'Cadet', think: 9, skill: 0.35, eco: 0.6, calm: 720, margin: 1.6 },
  easy: { name: 'Easy', think: 6, skill: 0.6, eco: 0.8, calm: 400, margin: 1.4 },
  normal: { name: 'Normal', think: 3.5, skill: 0.8, eco: 1, calm: 180, margin: 1.25 },
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
// Research: each power works its lines in its own order, and has its own taste in doctrines.
const LINE_ORDER = {
  concord: ['weapons', 'industry', 'drives', 'sensors', 'intel'],
  boreal: ['drives', 'weapons', 'industry', 'sensors', 'intel'],
  holds: ['sensors', 'weapons', 'industry', 'intel', 'drives'],
};
const DOCTRINE = {
  concord: ['spinal', 'flak', 'tanks', 'torch', 'network', 'longwatch', 'deepmine', 'wareco', 'sabot', 'fifth'],
  boreal: ['flash', 'torch', 'spinal', 'swarm', 'coldrun', 'longwatch', 'bulk', 'wareco', 'rings', 'cipher'],
  holds: ['wolfpack', 'swarm', 'tanks', 'coldjets', 'coldrun', 'jammers', 'deepmine', 'arcology', 'rings', 'cipher'],
};

export function createAI(game, owner, level = 'normal', seed = 1) {
  const d = LEVELS[level] || LEVELS.normal;
  game.eco[owner] = d.eco;
  return { owner, level, d, clock: 2 + owner, rand: rng(seed * 31 + owner * 977), known: new Map() };
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
  for (const [id, k] of ai.known) if (t - k.t > 300 || !game.ships.some((s) => s.id === id)) ai.known.delete(id);
  const enemyStr = (owner) => { let v = 0; for (const k of ai.known.values()) if (owner === undefined || k.owner === owner) v += k.str; return v; };

  spend(game, ai, home, mine, fleet, will);

  // ---- The fleet ----
  const service = (s) => s.dv < Math.max(s.st.dv * 0.3, 6) || s.hull < s.st.hull * 0.45 || (s.st.mag > 0 && s.torps === 0 && s.st.mag >= 8) || Object.values(s.out).some((v) => v > 1e8);
  const base = (s) => {
    // Nearest friendly world, a yard if it needs real repairs.
    let best = home, bd = 1e9;
    for (const b of mine) {
      if (b.blockaded) continue;
      const p = game.bp[b.id], dd = dist2(p, s) + (has(b, 'yard') || b.home ? 0 : 200);
      if (dd < bd) { bd = dd; best = b; }
    }
    return best;
  };
  const free = [];
  const adrift = fleet.filter((s) => s.at === null && (s.dv <= 0.01 || s.out.drive > 1e8 || s.out.reactor > 1e8)); // dry, or too badly hurt to mend herself
  const tenders = fleet.filter((s) => s.st.stores && s.out.drive <= 0 && s.out.reactor <= 0);
  for (const s of adrift) {
    // Out of fuel: send a tender if there is one free, else after a while abandon her.
    s.dry = s.dry || t;
    const tn = tenders.find((x) => x.dv > 20 && (!x.order || x.order.ship === s.id));
    if (tn) { if (!tn.order) setOrder(game, o, [tn.id], { type: 'attack', ship: s.id, mode: 'match', d0: 1.5, profile: 'cruise' }); } else if (t - s.dry > 180) scuttle(game, o, [s.id]);
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
      let prey = null, pd = 320;
      for (const f of game.ships) {
        if (f.owner === o || !f.st.civil || !f.seen[o]) continue;
        const dd = dist2(f, s) * (f.owner < 0 ? 3 : 1); // an independent convoy is only worth a short chase
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
      if (dist2(p, k) < (b.home ? 200 : 110)) {
        const here = [...ai.known.values()].filter((q) => t - q.t < 12 && dist2(q, k) < 40).reduce((v, q) => v + q.str, 0);
        if (here > threatStr) { threatStr = here; threat = { id, k, b }; }
      }
    }
  }
  const idle = (s) => !s.order || (s.order.type === 'orbit' && s.at === null && false);
  const myStr = (list) => list.reduce((v, s) => v + strength(s), 0);
  if (threat && will()) {
    // Send a detachment big enough for the job (the nearest ships), not the whole fleet.
    const T = game.ships.find((s) => s.id === threat.id);
    const cand = line.filter((s) => dist2(s, threat.k) < 600 && !(s.order && s.order.type === 'attack') && !(s.at !== null && game.bodies[s.at].owner !== o) && !(s.order && (s.order.body === ai.siege || s.order.type === 'form')) && !(ai.siege != null && s.grp === ai.siegeGrp))
      .sort((x, y) => dist2(x, threat.k) - dist2(y, threat.k));
    const det = [];
    let v = 0;
    for (const s of cand) { if (v >= threatStr * 1.5 + 0.5) break; det.push(s); v += strength(s); }
    if (T && det.length && (v >= threatStr * 0.8 || threat.b.home)) setOrder(game, o, det.map((s) => s.id), { type: 'attack', ship: T.id, mode: 'match', d0: 3, profile: 'hard' });
  }

  // Well ahead: stop waiting. Every ship that can fight goes for the nearest enemy capital together, and stays.
  if (ai.siege == null && t > 900 && t > (ai.allInT || 0) && line.length >= 4 && will()) {
    const foe = game.homes.filter((h, i) => h && i !== o && game.alive[i]).sort((x, y) => dist2(game.bp[x.id], game.bp[home.id]) - dist2(game.bp[y.id], game.bp[home.id]))[0];
    if (foe && mine.length >= 2 * worldsOf(game, foe.owner).length && myStr(line) >= 6) {
      const ids = [...line, ...tenders].map((s) => s.id);
      setOrder(game, o, ids, { type: 'orbit', body: foe.id, profile: 'cruise' });
      ai.siege = foe.id; ai.siegeGrp = line[0].grp; ai.allIn = true; ai.allInT = t + 420;
      return;
    }
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
    if (sb.owner === o || !there.length) { ai.siege = null; ai.allIn = false; }
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
    // (Count the ships still closing in behind the leader: a formation arrives a few seconds apart.)
    const mineHere = line.filter((s) => s.at === at.id || (s.order && s.order.body === at.id));
    if (foes > myStr(mineHere) * 1.6 && !(ai.allIn && at.id === ai.siege)) setOrder(game, o, mineHere.map((s) => s.id), { type: 'orbit', body: home.id, profile: 'hard' });
    return;
  }
  const str = myStr(main);
  // Pressure rises as the game goes on, so matches end.
  const push = t > 3000 ? 0.25 : t > 2100 ? 0.4 : t > 1500 ? 0.6 : t > 900 ? 0.85 : 1;
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
    if (b.home && enemy && main.length < 3) continue; // a capital only yields to three ships or more
    if (b.home && enemy) {
      const ahead = mine.length >= 2 * worldsOf(game, b.owner).length && t > 1200;
      const need = (b.bhp / 150 + batteryGuns(b) * 0.4 + Math.max(2, enemyStr(b.owner))) * margin * (ahead ? 0.7 : 1);
      if (str < need) continue;
      const v = (ahead ? 500 : 50) / (1 + dist2(p, here) / 800);
      if (v > bestV) { bestV = v; best = b; }
      continue;
    }
    if (str < def * margin + 0.5) continue;
    const worth = incomeOf(b) + (b.kind === 'planet' ? 1.2 : b.kind === 'station' ? 0.8 : 0.3) + (enemy ? 0.4 : 0) + (structure(b, 'yard') ? 1 : 0);
    const v = worth / (1 + dist2(p, here) / 220 + def * 0.6);
    if (v > bestV) { bestV = v; best = b; }
  }
  if (!best) return;
  const ids = [...main, ...withFleet].map((s) => s.id);
  // Pick a route the tanks can afford (with enough left to get home).
  const opts = routes(game, ids, best.id).filter((r) => r.ok && r.dv < Math.min(...main.map((s) => s.dv)) * (best.home ? 0.8 : 0.6));
  if (!opts.length) return;
  const pick = (d.smart && opts.find((r) => r.key === 'sling')) || opts.find((r) => r.key === (best.home ? 'hard' : 'cruise')) || opts[0];
  setOrder(game, o, ids, { type: 'orbit', body: best.id, profile: pick.profile, via: pick.via, side: pick.side });
  if (best.owner !== NEUTRAL) { ai.siege = best.id; ai.siegeGrp = main[0].grp; } // (ships on their way to a siege are not called off to chase raiders)
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
      if (C.needs && !knows(game, o, C.needs)) continue;
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
  // At the limit with money to spare: habitats let the fleet grow.
  if (size >= cap && credits() > 450) {
    for (const b of mine) {
      if (b.blockaded) continue;
      if (!cantBuild(game, b, 'habitat')) { buildStructure(game, b, 'habitat'); return; }
      const h = structure(b, 'habitat');
      if (h && !cantUpgrade(game, b, h)) { upgrade(game, b, h); return; }
    }
  }
  // Mines and refineries pay for themselves quickly.
  for (const b of mine) {
    if (b.blockaded) continue;
    for (const type of ['mine', 'refinery']) {
      if (!cantBuild(game, b, type)) { buildStructure(game, b, type); return; }
      const x = structure(b, type);
      if (x && size >= 3 && !cantUpgrade(game, b, x) && credits() > upgradeCost(x) + 150) { upgrade(game, b, x); return; }
    }
  }
  // Research: the line that is furthest behind, in this power's order, and its favoured doctrine.
  const tech = game.tech[o];
  if (!tech.project && size >= 3) {
    const line = LINE_ORDER[f].filter((l) => tech[l] < TECH[l].tiers.length).sort((x, y) => tech[x] - tech[y])[0];
    if (line) {
      const opts = TECH[line].tiers[tech[line]];
      const pick = opts.find((x) => DOCTRINE[f].includes(x.key)) || opts[0];
      if (!cantResearch(game, o, line, pick.key) && credits() > TECH_COST[tech[line]] + 120) { research(game, o, line, pick.key); return; }
    }
  }
  // Laboratories and an exchange once the basics are up.
  if (credits() > 500 && size >= 3) {
    for (const b of mine) {
      if (b.blockaded) continue;
      for (const type of ['lab', 'exchange']) if (!cantBuild(game, b, type) && b.structures.length < 4) { buildStructure(game, b, type); return; }
    }
  }
  // Agents: one to watch the nearest enemy capital, the rest to bring independent worlds over.
  if (ai.d.skill > 0.5) {
    for (const a of game.agents) {
      if (a.owner !== o || a.at > game.time) continue;
      const b = game.bodies[a.body];
      if (b.owner === NEUTRAL) { if (!cantBuyWorld(game, o, b) && credits() > worldPrice(game, b) + 250) { buyWorld(game, o, b); return; } continue; }
      const mineHere = game.ships.some((x) => x.at === b.id && x.owner === o);
      if (mineHere && b.bhp > 0 && !cantSabotage(game, o, b, 'battery')) { sabotage(game, o, b, 'battery'); return; }
      const want = mineHere && knows(game, o, 'fifth') ? 'incite' : knows(game, o, 'rings') ? 'steal' : 'watch';
      if (a.op !== want) setAgentOp(game, o, b, want);
    }
    if (credits() > 600) {
      const foe = game.homes.find((h, i) => h && i !== o && game.alive[i] && !agentAt(game, o, h));
      if (foe && !cantSendAgent(game, o, foe) && !game.agents.some((a) => a.owner === o && game.bodies[a.body].owner !== NEUTRAL)) { sendAgent(game, o, foe); return; }
      const targets = game.bodies.filter((b) => b.owner === NEUTRAL && !cantSendAgent(game, o, b) && credits() > worldPrice(game, b) + 400).sort((x, y) => worldPrice(game, x) - worldPrice(game, y));
      if (targets.length) { sendAgent(game, o, targets[0]); return; }
    }
  }
  // A second yard and frontier batteries once the money is there.
  if (credits() > 700 && size >= cap - 1) {
    for (const b of mine) {
      if (!b.home && b.kind === 'planet' && !cantBuild(game, b, 'yard') && yards.length < 2) { buildStructure(game, b, 'yard'); return; }
      if (!cantBuild(game, b, 'battery') && (b.kind === 'planet' || b.kind === 'station')) { buildStructure(game, b, 'battery'); return; }
      const y = structure(b, 'yard');
      if (y && !cantUpgrade(game, b, y)) { upgrade(game, b, y); return; }
      if (b.home && !cantBuild(game, b, 'array')) { buildStructure(game, b, 'array'); return; }
    }
  }
}
