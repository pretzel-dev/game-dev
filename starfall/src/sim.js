// Pure game simulation: no DOM, no Three.js, so it runs headless in tools/.

export const NEUTRAL = -1;
export const PLAYER = 0;

export const RULES = {
  fleetSpeed: 2.8, // world units per second, before Drives research
  // Indexed by factory level - 1.
  rate: [1, 1.7, 2.4, 3.2], // units produced per second
  cap: [40, 70, 110, 160], // production stops at this garrison
  upgradeCost: [20, 40, 70], // cost to go from level n to n + 1
  upgradeTime: [12, 20, 30], // seconds to build each upgrade
  // Battles blend Lanchester's laws. At intensity 0 both sides lose ships at
  // the same rate (the winner keeps the difference); at 1 each side's
  // firepower grows with its size (square law: big fleets win cheaply).
  battleIntensity: 0.5,
  battleRate: 0.15, // firepower per ship, for a fleet of about 20
  battleFloor: 1, // minimum losses per second, so even fights finish
  battlePace: 0.35, // the smaller side loses at most this share per second
  defenseBase: 1.1, // a garrison ship fights like this many attackers...
  defensePerLevel: 0.05, // ...plus this much per factory level above 1
  engageRange: 6, // hostile fleets closer than this stop and fight in space
  productionScale: 1, // multiplies every star's production
  maxLevel: 4,
  startUnits: 25,
};

/** Small seeded PRNG so a seed always makes the same map. */
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);

export function createGame({ seed = Date.now(), opponents = 2, portrait = false } = {}) {
  const rand = rng(seed);
  const players = opponents + 1;
  const count = 9 + players * 3;
  const radius = 130 + players * 28;
  // Stretch the map along z to suit a portrait screen (z runs up the screen).
  const rx = portrait ? radius * 0.72 : radius * 1.15;
  const rz = portrait ? radius * 1.35 : radius * 0.85;
  const ry = radius * 0.4;

  // Scatter systems in a flattened ellipsoid, keeping them apart so each is
  // an easy touch target.
  const pts = [];
  for (let tries = 0; pts.length < count && tries < 20000; tries++) {
    const p = {
      x: (rand() * 2 - 1) * rx,
      y: (rand() * 2 - 1) * ry,
      z: (rand() * 2 - 1) * rz,
    };
    if ((p.x / rx) ** 2 + (p.y / ry) ** 2 + (p.z / rz) ** 2 > 1) continue;
    if (pts.every((q) => dist(p, q) > 52)) pts.push(p);
  }

  // Stars spread across the whole map; any left with no neighbour inside basic
  // sensor range is pulled toward its nearest one until it has one.
  const reach = SENSOR_RANGE[0] * 0.9;
  for (let pass = 0; pass < 10; pass++) {
    let moved = false;
    for (const p of pts) {
      let near = null;
      let nearD = Infinity;
      for (const q of pts) {
        if (q === p) continue;
        const d = dist(p, q);
        if (d < nearD) { nearD = d; near = q; }
      }
      if (!near || nearD <= reach) continue;
      const k = 1 - (reach * 0.95) / nearD;
      p.x += (near.x - p.x) * k;
      p.y += (near.y - p.y) * k;
      p.z += (near.z - p.z) * k;
      moved = true;
    }
    if (!moved) break;
  }

  const systems = pts.map((pos, id) => ({
    id,
    pos,
    owner: NEUTRAL,
    // Neutrals are modest, never produce and never upgrade.
    units: Math.round(6 + rand() * 12),
    level: 1,
    size: 1.6 + rand() * 1.2,
    hue: rand(),
    sieges: [], // hostile fleets fighting at this system: { owner, units }
    upgrading: 0, // seconds left on an upgrade under construction
  }));

  // Homes: the first is random, each next one is farthest from those chosen.
  const homes = [systems[Math.floor(rand() * systems.length)]];
  while (homes.length < players) {
    let best = null;
    let bestD = -1;
    for (const s of systems) {
      if (homes.includes(s)) continue;
      const d = Math.min(...homes.map((h) => dist(h.pos, s.pos)));
      if (d > bestD) { bestD = d; best = s; }
    }
    homes.push(best);
  }
  homes.forEach((s, owner) => {
    s.owner = owner;
    s.units = RULES.startUnits;
    s.level = 1;
    s.size = 2.6;
  });

  const tech = Array.from({ length: players }, () => ({ sensors: 0, intel: 0, drives: 0, labs: 0, projects: [] }));
  return { systems, fleets: [], players, tech, time: 0, winner: null, nextFleetId: 1 };
}

// ---- Tech ---------------------------------------------------------------
// Research is paid in ships from one star and takes time; one project at a
// time per empire.

export const TECH = {
  sensors: {
    name: 'Sensors',
    tiers: [
      { cost: 30, time: 25, text: 'See further' },
      { cost: 60, time: 40, text: 'See much further' },
      { cost: 100, time: 60, text: 'See across the sector' },
    ],
  },
  intel: {
    name: 'Fleet intel',
    tiers: [
      { cost: 30, time: 25, text: 'Enemy fleet sizes' },
      { cost: 60, time: 40, text: 'Enemy targets and arrival times' },
    ],
  },
  labs: {
    name: 'Labs',
    tiers: [
      { cost: 50, time: 40, text: 'Second research slot' },
      { cost: 90, time: 60, text: 'Third research slot' },
    ],
  },
  drives: {
    name: 'Drives',
    tiers: [
      { cost: 40, time: 30, text: 'Fleets 25% faster' },
      { cost: 80, time: 50, text: 'Fleets 50% faster' },
    ],
  },
};
export const SENSOR_RANGE = [95, 140, 195, 280];

export const sensorRange = (game, owner) => SENSOR_RANGE[game.tech[owner].sensors];
export const speedOf = (game, owner) => RULES.fleetSpeed * (1 + 0.25 * game.tech[owner].drives);

/** The next tier of a tech for an owner, or null when it's maxed. */
export function nextTier(game, owner, key) {
  return TECH[key].tiers[game.tech[owner][key]] ?? null;
}

/** Research slots: one, plus one per level of Labs. */
export const researchSlots = (game, owner) => 1 + game.tech[owner].labs;

/**
 * Whether a star can start researching key: a free slot, nothing else under
 * way at that star, the same tech not already in progress, and the ships.
 */
export function canResearch(game, from, key) {
  const t = game.tech[from.owner];
  const tier = nextTier(game, from.owner, key);
  return !!tier && game.winner === null
    && t.projects.length < researchSlots(game, from.owner)
    && !t.projects.some((p) => p.key === key || p.at === from.id)
    && from.units >= tier.cost;
}

/** Starts research at a star; the project is lost if the star falls. */
export function research(game, from, key) {
  if (!canResearch(game, from, key)) return false;
  const tier = nextTier(game, from.owner, key);
  from.units -= tier.cost;
  game.tech[from.owner].projects.push({ key, at: from.id, left: tier.time, total: tier.time });
  return true;
}

/**
 * What an owner can see: stars and points within sensor range of its stars.
 * Fleets also see a little around themselves.
 */
export function visibility(game, owner) {
  const range = sensorRange(game, owner);
  const eyes = game.systems.filter((s) => s.owner === owner).map((s) => ({ pos: s.pos, r: range }));
  for (const f of game.fleets) if (f.owner === owner) eyes.push({ pos: fleetPosition(game, f), r: 40 });
  // A fleet besieging a star sees the battle it's in.
  for (const s of game.systems) if (s.sieges.some((g) => g.owner === owner)) eyes.push({ pos: s.pos, r: 40 });
  const sees = (pos) => eyes.some((e) => dist(e.pos, pos) <= e.r);
  const systems = new Set(game.systems.filter((s) => s.owner === owner || sees(s.pos)).map((s) => s.id));
  return { owner, sees, systems, intel: game.tech[owner].intel };
}

/** A fleet's straight-line position now (no visual arc). */
export function fleetPosition(game, f) {
  const a = game.systems[f.from].pos;
  const b = game.systems[f.to].pos;
  const p = Math.min(1, f.t / f.duration);
  return { x: a.x + (b.x - a.x) * p, y: a.y + (b.y - a.y) * p, z: a.z + (b.z - a.z) * p };
}

export const rateOf = (s) => RULES.rate[s.level - 1] * RULES.productionScale;
/** How many attackers one of this star's defenders is worth. */
export const defenseOf = (s) => RULES.defenseBase + RULES.defensePerLevel * (s.level - 1);

// Settings exposed on the tuning page: [key, label, min, max, step].
export const TUNABLES = [
  ['battleIntensity', 'Battle intensity (0 even, 1 square law)', 0, 1, 0.05],
  ['battleRate', 'Battle speed', 0.03, 0.5, 0.01],
  ['battlePace', 'Max share lost per second', 0.05, 1, 0.05],
  ['defenseBase', 'Defence bonus', 1, 2.5, 0.05],
  ['defensePerLevel', 'Defence per level', 0, 0.5, 0.05],
  ['fleetSpeed', 'Fleet speed', 1, 8, 0.1],
  ['engageRange', 'Space engage range', 2, 30, 1],
  ['productionScale', 'Production', 0.25, 3, 0.05],
  ['startUnits', 'Starting ships', 5, 100, 1],
];
export const DEFAULTS = Object.fromEntries(TUNABLES.map(([k]) => [k, RULES[k]]));
export const capOf = (s) => RULES.cap[s.level - 1];
export const upgradeCost = (s) => (s.level < RULES.maxLevel ? RULES.upgradeCost[s.level - 1] : null);

/** Sends a whole number of units; returns the fleet, or null if none could go. */
export function sendUnits(game, from, to, n) {
  n = Math.min(Math.floor(n), Math.floor(from.units));
  if (n < 1 || from === to || game.winner !== null) return null;
  from.units -= n;
  const fleet = {
    id: game.nextFleetId++,
    owner: from.owner,
    from: from.id,
    to: to.id,
    units: n,
    t: 0,
    duration: dist(from.pos, to.pos) / speedOf(game, from.owner),
  };
  game.fleets.push(fleet);
  return fleet;
}

export const sendFraction = (game, from, to, fraction) =>
  sendUnits(game, from, to, Math.max(1, Math.floor(from.units * fraction)));

export function upgrade(game, s) {
  const cost = upgradeCost(s);
  if (cost === null || s.upgrading > 0 || s.units < cost || game.winner !== null) return false;
  s.units -= cost;
  s.upgrading = RULES.upgradeTime[s.level - 1];
  return true;
}

/** Share of the current upgrade built so far, 0..1 (0 when idle). */
export const upgradeProgress = (s) =>
  s.upgrading > 0 ? 1 - s.upgrading / RULES.upgradeTime[s.level - 1] : 0;

const EPS = 1e-6;

function capture(game, s, owner, units) {
  s.owner = owner;
  s.units = units;
  // A captured factory is damaged in the fighting, and any build is lost.
  s.level = Math.max(1, s.level - 1);
  s.upgrading = 0;
  for (const t of game.tech) t.projects = t.projects.filter((p) => p.at !== s.id);
  // Fleets of the new owner already here join the garrison.
  for (const g of s.sieges) if (g.owner === owner) { s.units += g.units; g.units = 0; }
}

const BATTLE_REF = 20; // fleet size at which battleRate is calibrated

/** Firepower of n ships worth e each, under the current battle intensity. */
const firepower = (n, e) => RULES.battleRate * BATTLE_REF * (n / BATTLE_REF) ** RULES.battleIntensity * e;

/**
 * One step of an exchange between two forces; returns the losses [a, b].
 * If the smaller side would lose more than battlePace of itself per second,
 * both sides slow by the same factor: the battle lasts longer but the result
 * is unchanged. A small floor makes sure evenly matched fights still end.
 */
function exchange(a, ea, b, eb, dt) {
  if (a <= EPS || b <= EPS) return [0, 0];
  let la = firepower(b, eb) * dt;
  let lb = firepower(a, ea) * dt;
  const small = Math.min(a, b);
  const frac = (a <= b ? la : lb) / (small * dt);
  if (frac > RULES.battlePace) {
    const k = RULES.battlePace / frac;
    la *= k;
    lb *= k;
  }
  const floor = RULES.battleFloor * dt;
  if (a <= b) la = Math.max(la, floor);
  else lb = Math.max(lb, floor);
  return [Math.min(a, la), Math.min(b, lb)];
}

/** Ships needed to beat n defenders worth e each (the break-even force). */
export const shipsToBeat = (n, e) => n * e ** (1 / (2 - RULES.battleIntensity));

function fight(game, s, dt) {
  // The garrison splits its fire across the besieging fleets by size.
  const total = s.sieges.reduce((n, g) => n + g.units, 0);
  let garrisonLoss = 0;
  for (const g of s.sieges) {
    const share = total > 0 ? g.units / total : 0;
    const [lg, ls] = exchange(g.units, 1, s.units * share, defenseOf(s), dt);
    g.units -= lg;
    garrisonLoss += ls;
    s.fighting = (s.fighting || 0) + lg + ls;
  }
  s.units = Math.max(0, s.units - garrisonLoss);
  if (s.units <= EPS) {
    // The largest surviving fleet takes the star.
    const winner = s.sieges.filter((g) => g.units > EPS).sort((a, b) => b.units - a.units)[0];
    if (winner) {
      const units = winner.units;
      winner.units = 0;
      capture(game, s, winner.owner, units);
    }
  }
  s.sieges = s.sieges.filter((g) => g.units > EPS);
}

/** Pairs up hostile fleets that come within range; they stop and fight in space. */
function spaceBattles(game, dt) {
  const pos = new Map(game.fleets.map((f) => [f.id, fleetPosition(game, f)]));
  const byId = new Map(game.fleets.map((f) => [f.id, f]));
  for (const f of game.fleets) {
    if (f.engaged && !byId.has(f.engaged)) f.engaged = null;
  }
  for (const f of game.fleets) {
    if (f.engaged) continue;
    let best = null;
    let bestD = RULES.engageRange;
    for (const o of game.fleets) {
      if (o.owner === f.owner || o.engaged || o === f) continue;
      const d = dist(pos.get(f.id), pos.get(o.id));
      if (d < bestD) { bestD = d; best = o; }
    }
    if (best) { f.engaged = best.id; best.engaged = f.id; }
  }
  for (const f of game.fleets) {
    if (!f.engaged || f.id > f.engaged) continue; // each pair once
    const o = byId.get(f.engaged);
    const [lf, lo] = exchange(f.units, 1, o.units, 1, dt);
    f.units -= lf;
    o.units -= lo;
    f.fighting = (f.fighting || 0) + lf + lo;
  }
  game.fleets = game.fleets.filter((f) => f.units > EPS);
  for (const f of game.fleets) {
    if (f.engaged && !game.fleets.some((o) => o.id === f.engaged)) {
      f.engaged = null;
      f.units = Math.max(1, Math.round(f.units));
    }
  }
}

function arrive(game, fleet) {
  const s = game.systems[fleet.to];
  if (s.owner === fleet.owner) {
    s.units += fleet.units;
    return;
  }
  // Hostile arrivals lay siege and fight it out over the next few seconds.
  const g = s.sieges.find((x) => x.owner === fleet.owner);
  if (g) g.units += fleet.units;
  else s.sieges.push({ owner: fleet.owner, units: fleet.units });
}

/** Advances the game; returns fleets that arrived this step (for effects). */
export function step(game, dt) {
  if (game.winner !== null) return [];
  game.time += dt;
  for (const s of game.systems) {
    if (s.upgrading > 0) {
      s.upgrading -= dt;
      if (s.upgrading <= 0) { s.upgrading = 0; s.level += 1; }
    }
    // A system under siege can't produce.
    if (s.owner === NEUTRAL || s.sieges.length) continue;
    const cap = capOf(s);
    if (s.units < cap) s.units = Math.min(cap, s.units + rateOf(s) * dt);
  }
  const arrived = [];
  spaceBattles(game, dt);
  game.fleets = game.fleets.filter((f) => {
    if (f.engaged) return true; // held in place while fighting
    f.t += dt;
    if (f.t < f.duration) return true;
    arrive(game, f);
    arrived.push(f);
    return false;
  });
  for (const s of game.systems) if (s.sieges.length) fight(game, s, dt);
  for (const t of game.tech) {
    t.projects = t.projects.filter((p) => {
      p.left -= dt;
      if (p.left > 0) return true;
      t[p.key] += 1;
      return false;
    });
  }

  const alive = new Set();
  for (const s of game.systems) if (s.owner !== NEUTRAL) alive.add(s.owner);
  for (const f of game.fleets) alive.add(f.owner);
  for (const s of game.systems) for (const g of s.sieges) alive.add(g.owner);
  if (!alive.has(PLAYER)) game.winner = [...alive][0] ?? NEUTRAL;
  else if (alive.size === 1) game.winner = PLAYER;
  return arrived;
}

/** Where a fleet is now, as a 0..1 fraction of its trip. */
export const progress = (f) => Math.min(1, f.t / f.duration);
