// Perihelion: the whole game as plain data and functions (no DOM, no Three.js),
// so it runs headless in Node for tests and AI-only matches.
//
// One generated solar system. Worlds ride fixed orbits. Ships are real bodies:
// they have a position, a velocity and a tank, feel the pull of the sun and the
// planets, and only change course by burning. A handful of named hulls per
// side; battles happen wherever ships meet and are decided by range, closing
// speed, torpedoes against point defence and who saw whom first.
import { PLANET_NAMES, MOON_NAMES, STATION_NAMES, ROCK_NAMES, SHIP_NAMES } from './names.js';

export const NEUTRAL = -1;
export const DT = 0.2; // the sim advances in fixed steps of this many seconds
export const GM_SUN = 28; // the sun's pull (G times its mass), world units^3 / s^2
export const SUN_R = 10;

export const RULES = {
  startCredits: 300,
  homeIncome: 2, // credits per second straight into the treasury at a capital
  // Credits per second a held world sets aside; freighters haul it home.
  income: { planet: 0.8, giant: 1.0, moon: 0.4, station: 0.5, asteroid: 0.3 },
  load: 90, // a freighter sails once this much is waiting
  stockCap: 400,
  structures: {
    yard: { name: 'Yard', cost: 350, time: 60, where: ['planet', 'station'], maxLevel: 1 },
    mine: { name: 'Mine', cost: 200, time: 40, where: ['planet', 'moon', 'asteroid'], rocky: true, maxLevel: 2, income: 1 },
    refinery: { name: 'Refinery', cost: 300, time: 50, where: ['planet'], giant: true, maxLevel: 2, income: 1.5 },
    battery: { name: 'Battery', cost: 250, time: 45, where: ['planet', 'moon', 'station', 'asteroid'], maxLevel: 2 },
  },
  batteryHp: 100, // per level
  batteryRegen: 1.5,
  yield: { asteroid: 18, moon: 20, station: 22, planet: 30, giant: 36, home: 50 }, // seconds of unchallenged orbit
  refuel: 0.5, // delta-v per second in orbit of a world you hold (x3 at a refinery or capital)
  repair: 1.5, // hull per second at a yard (a third of that elsewhere, or beside a tender)
  rearm: 4, // seconds per torpedo at a yard or capital
  selfRepair: 50, // seconds for damage control to bring a system back
  pdcRange: 5,
  railRange: 14,
  railCool: 4,
  torpRange: 34, // ships loose torpedoes on their own inside this
  torp: { accel: 0.5, dv: 6, dmg: 28, life: 90, reload: 14, hit: 0.55 },
  cold: 18, // range at which a cold (coasting) ship is spotted
  ident: 45, // range at which a burning ship is identified, not just seen
  worldSensor: 1.4, // a held world sees this much further than a ship
  board: { freighter: 6, warship: 20, range: 2.4, speed: 0.5 },
  capBase: 4, capMax: 9,
};

// Ship classes. accel in units/s^2, dv is the tank as a total speed change.
export const CLASSES = {
  corvette: { name: 'Corvette', cost: 260, time: 50, hull: 60, armour: 0, accel: 0.13, dv: 26, size: 0.6, sig: 0.55, sensor: 1.4, rails: [5], pdc: 1, tubes: 2, mag: 4, power: 1 },
  frigate: { name: 'Frigate', cost: 450, time: 75, hull: 110, armour: 2, accel: 0.1, dv: 20, size: 0.9, sig: 1, sensor: 1, rails: [9], pdc: 2, tubes: 4, mag: 12, power: 2.2 },
  escort: { name: 'Escort', cost: 420, time: 75, hull: 100, armour: 2, accel: 0.09, dv: 20, size: 0.9, sig: 1, sensor: 1.1, rails: [5], pdc: 6, tubes: 0, mag: 0, power: 1.8 },
  battleship: { name: 'Battleship', cost: 1100, time: 150, hull: 300, armour: 8, accel: 0.07, dv: 18, size: 1.6, sig: 1.5, sensor: 1, rails: [16, 16], pdc: 4, tubes: 4, mag: 8, power: 6, needs: ['weapons', 2] },
  tender: { name: 'Tender', cost: 320, time: 60, hull: 90, armour: 0, accel: 0.08, dv: 70, size: 1.2, sig: 1.2, sensor: 0.8, rails: [], pdc: 1, tubes: 0, mag: 0, power: 0, stores: 24 },
  freighter: { name: 'Freighter', cost: 0, time: 0, hull: 55, armour: 0, accel: 0.055, dv: 1e6, size: 1.3, sig: 1.3, sensor: 0.5, rails: [], pdc: 0, tubes: 0, mag: 0, power: 0, civil: true },
};
export const BUILDABLE = ['corvette', 'frigate', 'escort', 'battleship', 'tender'];

// The three powers. Multipliers on the class table above.
export const FACTIONS = {
  concord: { name: 'Meridian Concord', short: 'Concord', text: 'The old inner-worlds navy: heavy plate, deep magazines, slow to turn.', hull: 1.4, armour: 4, cost: 1.05, accel: 0.95, start: ['frigate', 'escort', 'corvette'] },
  boreal: { name: 'Boreal Republic', short: 'Republic', text: 'Outer-system torch ships: fast drives and hard-hitting rails, thin skins.', accel: 1.2, rail: 1.3, hull: 0.95, dv: 1.1, start: ['frigate', 'corvette', 'corvette'] },
  holds: { name: 'Lantern Holds', short: 'Holds', text: 'Belt freeholders: cheap hulls that run cold and are hard to find.', cost: 0.9, time: 0.9, sig: 0.6, hull: 0.75, cap: 1, start: ['frigate', 'frigate', 'corvette'] },
};
export const FACTION_KEYS = Object.keys(FACTIONS);

export const TECH = {
  drives: { name: 'Drives', cost: [250, 450, 700], time: [50, 80, 110], levels: ['High-thrust nozzles', 'Drop tanks', 'Flash burn'], text: ['Harder acceleration', 'A third more fuel', 'Hard burns hit much harder'] },
  weapons: { name: 'Weapons', cost: [250, 450, 700], time: [50, 80, 110], levels: ['Guided slugs', 'Spinal mounts', 'Swarm warheads'], text: ['Rails hit more often', 'Unlocks the battleship', 'Torpedoes slip past point defence'] },
  sensors: { name: 'Sensors', cost: [250, 450, 700], time: [50, 80, 110], levels: ['Passive arrays', 'Cold running', 'Fire-control link'], text: ['Spot cold ships further out', 'Your own ships are harder to spot', 'Rails reach further'] },
};
export const TECH_KEYS = Object.keys(TECH);

// How a ship flies a leg: share of full thrust, cruising speed (relative to the
// destination), and how far off course it lets itself drift before correcting.
export const PROFILES = {
  hard: { name: 'Hard burn', a: 1, cap: Infinity, lat: 0.03 },
  cruise: { name: 'Cruise', a: 0.7, cap: 1.5, lat: 0.1 },
  dark: { name: 'Dark', a: 1, cap: 0.9, lat: 0.35 },
};

// ---- Small helpers ------------------------------------------------------------

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
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
export const kepler = (r, gm) => 2 * Math.PI * Math.sqrt((r * r * r) / gm);
const periodAt = (r) => kepler(r, GM_SUN);
// Moons and stations circle no faster than a ship can comfortably match (close-in ones would whip round).
const moonPeriod = (r, gm) => Math.max(kepler(r, gm), 2 * Math.PI * Math.sqrt(r / 0.012));
const DENSITY = { rock: 0.06, gas: 0.07 };
const HILL = 0.5;

export function note(game, e) {
  e.t = game.time;
  game.events.push(e);
  if (game.events.length > 240) game.events.splice(0, 60);
}
/** Things to draw and hear (shots, hits, explosions). The view drains this list. */
function fx(game, e) {
  if (game.fx.length < 400) game.fx.push(e);
}
export function tally(game, owner, key, n = 1) {
  if (owner >= 0) game.stats[owner][key] = (game.stats[owner][key] || 0) + n;
}

/** The day's shared system: same seed for everyone. */
export function dailySeed(date = new Date()) {
  const key = date.toISOString().slice(0, 10);
  let h = 2166136261;
  for (const c of key) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return { seed: h >>> 0, key };
}

// ---- Orbits -------------------------------------------------------------------

export function orbitOffset(b, th) {
  const u = th - (b.node || 0);
  const a = Math.cos(u) * b.r, c = Math.sin(u) * b.r;
  const cn = Math.cos(b.node || 0), sn = Math.sin(b.node || 0), ci = Math.cos(b.incl), si = Math.sin(b.incl);
  return { x: a * cn - c * sn * ci, y: c * si, z: a * sn + c * cn * ci };
}
/** A body's position at time t (moons ride along with their planet). */
export function posAt(game, b, t) {
  const p = orbitOffset(b, b.phase + (2 * Math.PI * t) / b.period);
  if (b.parent !== null) {
    const q = posAt(game, game.bodies[b.parent], t);
    p.x += q.x; p.y += q.y; p.z += q.z;
  }
  return p;
}
export function velAt(game, b, t) {
  const e = 0.5;
  const a = posAt(game, b, t - e), c = posAt(game, b, t + e);
  return { x: (c.x - a.x) / (2 * e), y: (c.y - a.y) / (2 * e), z: (c.z - a.z) / (2 * e) };
}
export const starPos = () => ({ x: 0, y: 0, z: 0 });
/** Where ships hold station around a body. */
export const parkRadius = (b) => b.size * 1.8 + 0.5;
const parkRate = (b) => (b.gm ? Math.sqrt(b.gm / parkRadius(b)) / parkRadius(b) : 0.1);

// ---- A new system ---------------------------------------------------------------

/**
 * players: [{ faction, name, ai }] (ai: a level name, or falsy for a human).
 * Every game rolls a fresh system from the seed.
 */
export function createGame({ seed = Date.now(), players = [{ faction: 'concord' }, { faction: 'boreal', ai: 'normal' }], mp = false, empty = false } = {}) {
  const rand = rng(seed);
  const n = players.length;
  const pick = (list, used) => {
    const free = list.filter((x) => !used.has(x));
    const v = free[Math.floor(rand() * free.length)] ?? `${list[0]} ${used.size}`;
    used.add(v);
    return v;
  };
  const shuffle = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };
  const names = new Set();
  const bodies = [];
  const add = (b) => {
    b.id = bodies.length;
    b.owner = NEUTRAL;
    b.structures = []; // { type, level, left } (left > 0 while building)
    b.queue = []; // ships on order at the yard: { cls, left, total }
    b.stock = 0; // credits waiting for a freighter
    b.bhp = 0; // battery strength
    b.yt = 0; b.yo = NEUTRAL; // yielding: seconds so far, and to whom
    b.node = (b.id * 2.39996) % (Math.PI * 2);
    bodies.push(b);
    return b;
  };

  // Plan the planets and their families, then space the orbits to fit.
  const count = Math.max(4 + Math.floor(rand() * 2), n + 2);
  const homeIdx = shuffle(Array.from({ length: count - 2 }, (_, i) => i + 1)).slice(0, n);
  const court = rand() < 0.3; // one great giant with a crowd of moons
  let specs = [], beltR = 0, tries = 0;
  const beltAfter = Math.floor(count / 2);
  const beltW = 6 + rand() * 8;
  do {
  specs = [];
  for (let i = 0; i < count; i++) {
    const home = homeIdx.includes(i);
    const last = i === count - 1;
    const giant = !home && i >= 2 && (rand() < 0.55 || (last && !specs.some((s) => s.giant)));
    const big = giant && court && !specs.some((s) => s.big);
    const size = big ? 5.2 : giant ? 3.4 + rand() * 1.2 : 1.6 + rand() * 1;
    const moonsN = home ? 1 : big ? 4 : giant ? 2 + Math.floor(rand() * 2) : i === 0 ? 0 : Math.floor(rand() * 2);
    const moons = [];
    for (let m = 0; m < moonsN; m++) moons.push({ r: size * 2.8 + 4 + m * 4.5 + rand() * 0.8, size: 0.5 + rand() * 0.5 });
    specs.push({ home, giant, size, moons, station: false });
  }
  const hosts = shuffle(specs.filter((s) => !s.home)).slice(0, 1 + Math.floor(rand() * 2));
  for (const s of hosts) s.station = true;
  for (const sp of specs) {
    sp.stationR = sp.size * 2.4 + 1.5;
    sp.reach = Math.max(sp.size * 1.6, sp.station ? sp.stationR + 1 : 0, ...sp.moons.map((m) => m.r + m.size));
  }
  const GAP = 6;
  let prev = null;
  specs.forEach((sp, i) => {
    sp.r = prev ? prev.r + prev.reach + sp.reach + GAP + rand() * 5 : 34 + rand() * 6;
    if (i === beltAfter) {
      beltR = prev.r + prev.reach + GAP;
      sp.r = beltR + beltW + GAP + sp.reach + rand() * 6;
    }
    prev = sp;
  });
  } while (specs[specs.length - 1].r > 190 && ++tries < 12); // keep the system compact enough for a short game
  for (const sp of specs) {
    sp.gm = DENSITY[sp.giant ? 'gas' : 'rock'] * sp.size ** 3;
    const out = Math.max(0, ...sp.moons.map((m) => m.r), sp.station ? sp.stationR : 0);
    if (out) sp.gm = Math.max(sp.gm, 3 * GM_SUN * (out / (HILL * sp.r)) ** 3);
  }
  const homes = [];
  for (const sp of specs) {
    const planet = add({
      kind: 'planet', name: pick(PLANET_NAMES, names), parent: null, r: sp.r, period: periodAt(sp.r), phase: rand() * Math.PI * 2,
      incl: (rand() - 0.5) * 0.05, size: sp.size, baseSize: sp.size, giant: sp.giant, gm: sp.gm, hue: rand(),
    });
    if (sp.home) homes.push(planet);
    for (const m of sp.moons) {
      const moon = add({
        kind: 'moon', name: pick(MOON_NAMES, names), parent: planet.id, r: m.r, period: moonPeriod(m.r, sp.gm), phase: rand() * Math.PI * 2,
        incl: (rand() - 0.5) * 0.25, size: m.size, baseSize: m.size, gm: DENSITY.rock * m.size ** 3, hue: rand(),
      });
      if (sp.home) moon.homeMoon = true;
    }
    if (sp.station) {
      add({ kind: 'station', name: pick(STATION_NAMES, names), parent: planet.id, r: sp.stationR, period: moonPeriod(sp.stationR, sp.gm), phase: rand() * Math.PI * 2, incl: 0.2, size: 0.45, baseSize: 0.45, hue: 0 });
    }
  }
  const rocks = 3 + Math.floor(rand() * 4);
  for (let k = 0; k < rocks; k++) {
    const r = beltR + rand() * beltW;
    const size = 0.5 + rand() * 0.4;
    add({ kind: 'asteroid', name: pick(ROCK_NAMES, names), parent: null, r, period: periodAt(r), phase: (k / rocks) * Math.PI * 2 + rand() * 0.8, incl: (rand() - 0.5) * 0.1, size, baseSize: size, gm: 0.04 * size ** 3, hue: rand() });
  }

  const game = {
    seed, mp, time: 0, acc: 0, players: n, bodies, ships: [], torps: [], events: [], fx: [], nextId: 1,
    stars: [{ r: 0, period: 1, phase: 0, size: SUN_R / 6, gm: GM_SUN }], belt: { r: beltR, w: beltW },
    factions: players.map((p) => p.faction || 'concord'),
    names: players.map((p, i) => p.name || FACTIONS[p.faction || 'concord'].short || `Player ${i + 1}`),
    credits: players.map(() => RULES.startCredits),
    tech: players.map(() => ({ drives: 0, weapons: 0, sensors: 0, project: null })),
    alive: players.map(() => true), eco: players.map(() => 1),
    stats: players.map(() => ({ built: 0, lost: 0, killed: 0, captured: 0, worldsLost: 0, hauled: 0, raided: 0, earned: 0 })),
    over: null, usedNames: [],
  };
  // Homes start evenly spaced round the sun.
  const base = rand() * Math.PI * 2;
  shuffle(homes).forEach((h, owner) => {
    h.phase = base + (owner * Math.PI * 2) / n;
    h.owner = owner; h.home = true;
    h.structures.push({ type: 'yard', level: 1, left: 0 }, { type: 'battery', level: 2, left: 0 });
    h.bhp = batteryMax(h);
    if (!empty) for (const cls of FACTIONS[game.factions[owner]].start) spawnShip(game, owner, cls, h);
  });
  // Independents: the richer worlds keep a militia battery.
  for (const b of bodies) {
    if (b.owner !== NEUTRAL) continue;
    const armed = b.kind === 'planet' ? (b.giant ? true : rand() < 0.5) : b.kind === 'station' ? rand() < 0.5 : false;
    if (armed) { b.structures.push({ type: 'battery', level: 1, left: 0 }); b.bhp = batteryMax(b); }
  }
  prepare(game);
  return game;
}

// ---- Economy ----------------------------------------------------------------------

export const working = (x) => x.left <= 0;
export const structure = (b, type) => b.structures.find((x) => x.type === type);
export const has = (b, type) => b.structures.some((x) => x.type === type && working(x));
const levelOf = (b, type) => { const x = structure(b, type); return x && working(x) ? x.level : 0; };
export const batteryMax = (b) => RULES.batteryHp * levelOf(b, 'battery');
export function slotsOf(b) {
  if (b.home) return 4;
  if (b.kind === 'planet') return b.giant ? 3 : 2;
  if (b.kind === 'station') return 2;
  return b.homeMoon ? 2 : 1;
}
export const kindOf = (b) => (b.home ? 'home' : b.giant ? 'giant' : b.kind);
/** Credits per second a world makes (a capital banks it; the rest wait for a freighter). */
export function incomeOf(b) {
  const base = b.home ? RULES.homeIncome : RULES.income[b.giant ? 'giant' : b.kind];
  return base + levelOf(b, 'mine') * RULES.structures.mine.income + levelOf(b, 'refinery') * RULES.structures.refinery.income;
}
export const homeOf = (game, owner) => game.homes[owner];
export const worldsOf = (game, owner) => game.bodies.filter((b) => b.owner === owner);
export const warshipsOf = (game, owner) => game.ships.filter((s) => s.owner === owner && !CLASSES[s.cls].civil);
export function fleetCap(game, owner) {
  const f = FACTIONS[game.factions[owner]];
  return Math.min(RULES.capMax, RULES.capBase + (f.cap || 0) + Math.floor((worldsOf(game, owner).length - 1) / 2));
}
export const fleetSize = (game, owner) => warshipsOf(game, owner).length + game.bodies.reduce((k, b) => k + (b.owner === owner ? b.queue.length : 0), 0);
export const shipCost = (game, owner, cls) => Math.round((CLASSES[cls].cost * (FACTIONS[game.factions[owner]].cost || 1)) / 10) * 10;
export const shipTime = (game, owner, cls) => CLASSES[cls].time * (FACTIONS[game.factions[owner]].time || 1);

export function cantBuild(game, b, type) {
  const S = RULES.structures[type];
  if (!S) return 'Unknown';
  if (!S.where.includes(b.kind)) return 'Not here';
  if (S.giant && !b.giant) return 'Gas giants only';
  if (S.rocky && b.giant) return 'Not on a gas giant';
  if (structure(b, type)) return 'Already built';
  if (b.structures.length >= slotsOf(b)) return 'No room';
  if (game.credits[b.owner] < S.cost) return 'Not enough credits';
  return null;
}
export function buildStructure(game, b, type) {
  if (cantBuild(game, b, type)) return false;
  const S = RULES.structures[type];
  game.credits[b.owner] -= S.cost;
  b.structures.push({ type, level: 1, left: S.time, total: S.time });
  return true;
}
export const upgradeCost = (x) => Math.round(RULES.structures[x.type].cost * 0.8);
export function cantUpgrade(game, b, x) {
  const S = RULES.structures[x.type];
  if (!working(x)) return 'Still building';
  if (x.level >= S.maxLevel) return 'Fully upgraded';
  if (game.credits[b.owner] < upgradeCost(x)) return 'Not enough credits';
  return null;
}
export function upgrade(game, b, x) {
  if (cantUpgrade(game, b, x)) return false;
  game.credits[b.owner] -= upgradeCost(x);
  x.left = x.total = RULES.structures[x.type].time; x.next = true;
  return true;
}
export function cantOrderShip(game, b, cls) {
  const C = CLASSES[cls];
  if (!C || C.civil) return 'Unknown';
  if (!has(b, 'yard')) return 'Needs a yard';
  if (C.needs && game.tech[b.owner][C.needs[0]] < C.needs[1]) return `Needs ${TECH[C.needs[0]].levels[C.needs[1] - 1]}`;
  if (fleetSize(game, b.owner) >= fleetCap(game, b.owner)) return 'Fleet at its limit';
  if (game.credits[b.owner] < shipCost(game, b.owner, cls)) return 'Not enough credits';
  return null;
}
export function orderShip(game, b, cls) {
  if (cantOrderShip(game, b, cls)) return false;
  game.credits[b.owner] -= shipCost(game, b.owner, cls);
  const t = shipTime(game, b.owner, cls);
  b.queue.push({ cls, left: t, total: t });
  return true;
}
export function cancelShip(game, b, i = b.queue.length - 1) {
  const q = b.queue[i];
  if (!q) return false;
  game.credits[b.owner] += Math.round(shipCost(game, b.owner, q.cls) * 0.8);
  b.queue.splice(i, 1);
  return true;
}

export function cantResearch(game, owner, key) {
  const T = TECH[key], tech = game.tech[owner];
  if (!T) return 'Unknown';
  if (tech.project) return 'Already researching';
  if (tech[key] >= T.levels.length) return 'Complete';
  if (game.credits[owner] < T.cost[tech[key]]) return 'Not enough credits';
  return null;
}
export function research(game, owner, key) {
  if (cantResearch(game, owner, key)) return false;
  const T = TECH[key], lv = game.tech[owner][key];
  game.credits[owner] -= T.cost[lv];
  game.tech[owner].project = { key, left: T.time[lv], total: T.time[lv] };
  return true;
}

// ---- Ships --------------------------------------------------------------------------

/** A class's numbers for one power, with its research applied. */
export function statsFor(game, owner, cls) {
  const C = CLASSES[cls], F = owner >= 0 ? FACTIONS[game.factions[owner]] : {}, T = owner >= 0 ? game.tech[owner] : { drives: 0, weapons: 0, sensors: 0 };
  return {
    hull: Math.round(C.hull * (F.hull || 1)), armour: C.armour + (C.civil || !C.power ? 0 : F.armour || 0),
    accel: C.accel * (F.accel || 1) * (T.drives >= 1 ? 1.2 : 1), flash: T.drives >= 3 ? 1.4 : 1,
    dv: C.dv * (F.dv || 1) * (T.drives >= 2 ? 1.35 : 1),
    size: C.size, sig: C.sig * (F.sig || 1) * (T.sensors >= 2 ? 0.6 : 1),
    cold: RULES.cold * C.sensor * (T.sensors >= 1 ? 1.4 : 1), ident: RULES.ident * C.sensor * (T.sensors >= 2 ? 1.3 : 1),
    rails: C.rails.map((d) => d * (F.rail || 1)), railHit: T.weapons >= 1 ? 1.25 : 1, railRange: RULES.railRange * (T.sensors >= 3 ? 1.25 : 1),
    pdc: C.pdc, tubes: C.tubes, mag: C.mag, swarm: T.weapons >= 3, power: C.power, stores: C.stores || 0, civil: !!C.civil,
  };
}
function refreshStats(game, owner) {
  for (const s of game.ships) if (s.owner === owner) s.st = statsFor(game, owner, s.cls);
}
function shipName(game, owner) {
  const list = SHIP_NAMES[game.factions[owner]] || SHIP_NAMES.concord;
  const free = list.filter((x) => !game.usedNames.includes(x));
  const v = free.length ? free[(game.nextId * 7 + game.usedNames.length * 3) % free.length] : `${list[game.nextId % list.length]} ${game.nextId}`;
  game.usedNames.push(v);
  return v;
}
export function spawnShip(game, owner, cls, b, extra = {}) {
  const st = statsFor(game, owner, cls);
  const s = {
    id: game.nextId++, owner, cls, name: st.civil ? 'Freighter' : shipName(game, owner),
    x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, tx: 0, ty: 0, tz: 0, burn: 0, lit: 0,
    at: b ? b.id : null, ph: ((game.nextId * 2.39996) % (Math.PI * 2)),
    hull: st.hull, out: { drive: 0, reactor: 0, weapons: 0, sensors: 0 }, dv: st.dv, torps: st.mag, stores: st.stores,
    order: null, grp: 0, torpsFree: true, fireFree: true, evade: false, cd: st.rails.map(() => 0), tcd: 0,
    seen: Array(game.players).fill(0), kills: 0, phase: 'orbit', board: 0, boardBy: NEUTRAL, st, ...extra,
  };
  if (b) ride(game, s, game.time);
  game.ships.push(s);
  return s;
}
/** A ship in orbit rides its world's rails. */
function ride(game, s, t) {
  const b = game.bodies[s.at];
  const p = posAt(game, b, t), v = velAt(game, b, t), R = parkRadius(b), w = parkRate(b);
  s.x = p.x + Math.cos(s.ph) * R; s.y = p.y; s.z = p.z + Math.sin(s.ph) * R;
  s.vx = v.x - Math.sin(s.ph) * R * w; s.vy = v.y; s.vz = v.z + Math.cos(s.ph) * R * w;
}
export const shipById = (game, id) => game.ships.find((s) => s.id === id);
export const crippled = (s) => s.out.drive > 0 || s.out.reactor > 0 || s.dv <= 0;
export const armed = (s) => s.st.power > 0 && s.out.reactor <= 0;
export const shipsAt = (game, b, owner) => game.ships.filter((s) => s.at === b.id && (owner === undefined || s.owner === owner));
/** A rough fighting value, for the AI and for odds. */
export const strength = (s) => (s.out.reactor > 0 ? 0 : s.st.power * (0.4 + 0.6 * (s.hull / s.st.hull)) * (s.out.weapons > 0 ? 0.3 : 1));

// ---- Orders -------------------------------------------------------------------------
// All of these are plain data so they can cross the wire in multiplayer.

/** order: { type: 'orbit', body, profile, via?, side? } | { type: 'attack', ship, mode: 'pass'|'match', profile } |
 *  { type: 'strike', body, profile } | { type: 'burn', x, y, z, left } | null (cut the drive and coast). */
export function setOrder(game, owner, ids, order) {
  const list = game.ships.filter((s) => ids.includes(s.id) && s.owner === owner && !s.st.civil);
  if (!list.length) return false;
  if (order && order.type === 'orbit' && !game.bodies[order.body]) return false;
  if (order && order.type === 'attack' && !shipById(game, order.ship)) return false;
  const grp = game.nextId++;
  const prof = PROFILES[(order && order.profile) || 'cruise'];
  // Ships ordered together fly together: the slowest sets the pace.
  const amax = Math.min(...list.map((s) => s.st.accel * prof.a * (order && order.profile === 'hard' ? s.st.flash : 1)));
  for (const s of list) {
    s.order = order ? { ...order, amax } : null;
    s.grp = grp; s.tau = 0; s.coast = false; s.inSoi = false; s.term = false; s.av = 0;
    if (s.at !== null && order) { s.depart = planetOf(game, game.bodies[s.at]).id; s.at = null; }
  }
  return true;
}
export function setStance(game, owner, ids, st) {
  for (const s of game.ships) {
    if (!ids.includes(s.id) || s.owner !== owner) continue;
    if ('torpsFree' in st) s.torpsFree = !!st.torpsFree;
    if ('fireFree' in st) s.fireFree = !!st.fireFree;
    if ('evade' in st) s.evade = !!st.evade;
  }
  return true;
}
/** Loose a salvo now at a chosen ship or battery, at any range. */
export function salvo(game, owner, ids, target) {
  let any = false;
  for (const s of game.ships) {
    if (!ids.includes(s.id) || s.owner !== owner) continue;
    if (launchTorps(game, s, target)) any = true;
  }
  return any;
}
/** Abandon ships (a crew takes to the boats): they are gone, and their place in the fleet is free. */
export function scuttle(game, owner, ids) {
  for (const s of game.ships) {
    if (!ids.includes(s.id) || s.owner !== owner || s.st.civil) continue;
    s.dead = true;
    note(game, { type: 'scuttled', owner, ship: s.id, name: s.name });
  }
  game.ships = game.ships.filter((s) => !s.dead);
  return true;
}
const planetOf = (game, b) => (b.parent === null ? b : game.bodies[b.parent]);

// ---- Flight -------------------------------------------------------------------------

/** The bodies that pull on ships, where they are at time t: the sun, then each planet. */
export function wells(game, t) {
  const G = [{ x: 0, y: 0, z: 0, gm: GM_SUN, soft: SUN_R * 1.5, clear: SUN_R * 2.8, id: -1 }];
  for (const b of game.planets) {
    const p = posAt(game, b, t);
    G.push({ x: p.x, y: p.y, z: p.z, gm: b.gm, soft: b.size * 1.3, clear: b.size * 1.6 + 1, id: b.id });
  }
  return G;
}
function refreshBodies(game) {
  game.planets = game.bodies.filter((b) => b.kind === 'planet');
  game.blockers = game.bodies.filter((b) => b.kind === 'planet' || b.kind === 'moon');
}
const sunG = (x, y, z, k, out) => {
  const r = Math.max(SUN_R * 1.5, Math.hypot(x, y, z));
  const f = -GM_SUN / (r * r * r);
  out.x += x * f * k; out.y += y * f * k; out.z += z * f * k;
};
function tgo(dd, c, A, Ab, cap, brake) {
  const c0 = Math.max(0, c);
  if (!brake) return dd / Math.max(0.4, c0 + 0.5 * A * Math.min(30, dd / Math.max(c0, 0.4)));
  let vp = Math.sqrt((2 * A * Ab * dd + Ab * c0 * c0) / (A + Ab));
  if (cap < vp) vp = cap;
  if (c0 >= vp) return Math.max(0, dd - (c0 * c0) / (2 * Ab)) / Math.max(c0, 0.05) + c0 / Ab;
  const da = (vp * vp - c0 * c0) / (2 * A), db = (vp * vp) / (2 * Ab);
  return (vp - c0) / A + vp / Ab + Math.max(0, dd - da - db) / Math.max(vp, 0.05);
}

/**
 * The autopilot: sets the ship's thrust (s.tx, ty, tz) for this instant.
 * It flies "rest to rest" in a frame that falls with the sun's pull and arrives
 * with the destination: accelerate toward it, coast at the profile's speed,
 * brake to match. Sun and planets in the way are steered round.
 */
function guide(game, s, t, G, lookup) {
  s.tx = s.ty = s.tz = 0;
  const o = s.order;
  if (s.out.drive > 0 || s.out.reactor > 0 || s.dv <= 0) { s.phase = 'adrift'; return; }
  if (!o) { s.phase = 'coast'; return; }
  const st = s.st;
  if (o.type === 'burn') {
    if (o.left <= 0) { s.order = null; s.phase = 'coast'; return; }
    const A = st.accel * st.flash;
    s.tx = o.x * A; s.ty = o.y * A; s.tz = o.z * A; s.phase = 'burn';
    return;
  }
  const prof = PROFILES[o.profile] || PROFILES.cruise;
  const A = Math.min(o.amax || 1, st.accel * prof.a * (o.profile === 'hard' ? st.flash : 1));
  const Ab = 0.8 * A;
  let cap = prof.cap, brake = true, d0 = 0, skip = -2, tau = s.tau > 0 ? s.tau : 0;
  let P, V;
  // Everything is flown relative to the target as it is now: both ship and target
  // fall round the sun together, so that frame is close to a quiet one.
  const bodyRef = (b) => {
    const pl = planetOf(game, b);
    const w = G.find((g) => g.id === pl.id);
    const pp = w ? { x: w.x, y: w.y, z: w.z } : posAt(game, pl, t);
    const pv = velAt(game, pl, t);
    if (pl === b) { P = pp; V = pv; return; }
    // A moon or station: fly to where it will be round its planet when the ship
    // gets there; once close, chase the moon itself and match its orbit.
    const m0 = posAt(game, b, t);
    if (!s.term && (tau < 15 || Math.hypot(m0.x - s.x, m0.y - s.y, m0.z - s.z) < 8)) s.term = true;
    if (s.term) { P = m0; V = velAt(game, b, t); return; }
    const m1 = posAt(game, b, t + tau), p1 = posAt(game, pl, t + tau);
    P = { x: pp.x + m1.x - p1.x, y: pp.y + m1.y - p1.y, z: pp.z + m1.z - p1.z };
    V = pv;
  };
  const offset = (q, side) => {
    const lx = P.x - s.x, lz = P.z - s.z, ll = Math.hypot(lx, lz) || 1;
    P = { x: P.x + (-lz / ll) * q * side, y: P.y, z: P.z + (lx / ll) * q * side };
  };
  if (o.type === 'orbit' && o.via != null && !o.done) {
    // A slingshot: aim to skim past the heavy world, cut the drive and let it bend the path.
    const vb = game.bodies[o.via];
    const now = G.find((g) => g.id === vb.id);
    const dn = Math.hypot(now.x - s.x, now.y - s.y, now.z - s.z);
    if (dn < vb.size * 4.5) { s.inSoi = true; s.phase = 'coast'; return; }
    if (s.inSoi) { o.done = true; s.inSoi = false; s.tau = 0; s.coast = false; s.term = false; return guide(game, s, t, G, lookup); }
    bodyRef(vb); offset(vb.size * 1.7 + 0.8, o.side);
    brake = false; skip = vb.id;
    if (cap === Infinity) cap = 1e9;
  } else if (o.type === 'orbit' || o.type === 'strike') {
    const b = game.bodies[o.body];
    if (!tau) { const p = posAt(game, b, t); tau = Math.hypot(p.x - s.x, p.y - s.y, p.z - s.z) / 1.2 + 5; }
    bodyRef(b);
    skip = planetOf(game, b).id;
    if (o.type === 'orbit') d0 = parkRadius(b);
    else { brake = false; offset(parkRadius(b) + 2, 1); if (cap === Infinity) cap = 1e9; } // a firing pass: skim it at speed
  } else if (o.type === 'attack') {
    const T = lookup(o.ship);
    if (!T) { s.order = null; s.phase = 'coast'; return; }
    // Lost sight of it: hold course for a while in case it shows again.
    if (T.owner !== s.owner && !T.seen[s.owner]) { o.blind = (o.blind || 0) + 1; if (o.blind > 150) s.order = null; s.phase = 'coast'; return; }
    o.blind = 0;
    P = { x: T.x, y: T.y, z: T.z }; V = { x: T.vx, y: T.vy, z: T.vz };
    if (o.mode === 'pass') { brake = false; if (cap === Infinity) cap = 1e9; } else d0 = o.d0 || 3;
    if (T.at !== null) skip = planetOf(game, game.bodies[T.at]).id;
  } else { s.order = null; return; }

  let rx = P.x - s.x, ry = P.y - s.y, rz = P.z - s.z;
  const rvx = s.vx - V.x, rvy = s.vy - V.y, rvz = s.vz - V.z;
  const d = Math.hypot(rx, ry, rz) || 1e-6;
  const dd = Math.max(0, d - d0);
  // Steer round the sun and any planet in the way (whichever comes first along the line).
  let hit = null, hitT = 2, hitClear = 0, hx = 0, hz = 0;
  for (const w of G) {
    if (w.id === skip || w.id === s.depart) continue;
    const wx = w.x - s.x, wy = w.y - s.y, wz = w.z - s.z;
    const tt = clamp((wx * rx + wy * ry + wz * rz) / (d * d), 0, 1);
    if (tt < 0.02 || tt >= hitT) continue;
    const ox = rx * tt - wx, oy = ry * tt - wy, oz = rz * tt - wz;
    // (Keep far enough from the sun that the drive can still out-pull it.)
    const clear = w.id === -1 ? Math.max(w.clear, Math.sqrt(GM_SUN / (0.55 * A))) : w.clear;
    if (Math.hypot(ox, oy, oz) >= clear) continue;
    hit = w; hitT = tt; hitClear = clear; hx = ox; hz = oz;
  }
  if (hit) {
    // Pass on one side and stick with it (or the ship would dither as the line swings across).
    const px = -rz / d, pz = rx / d;
    if (!s.av || s.avId !== hit.id) { s.avId = hit.id; s.av = hx * px + hz * pz >= 0 ? 1 : -1; }
    const k = hitClear * 1.3 * s.av;
    rx = hit.x - s.x + px * k; ry = hit.y - s.y; rz = hit.z - s.z + pz * k;
  } else s.av = 0;
  const rl = Math.hypot(rx, ry, rz) || 1e-6;
  const ux = rx / rl, uy = ry / rl, uz = rz / rl;
  const c = rvx * ux + rvy * uy + rvz * uz; // speed along the line to the target
  const sdes = brake ? Math.min(cap, Math.sqrt(2 * Ab * dd)) : Math.min(cap, c + A * 4);
  const ex = ux * sdes - rvx, ey = uy * sdes - rvy, ez = uz * sdes - rvz;
  const e = Math.hypot(ex, ey, ez);
  const lat = Math.hypot(rvx - ux * c, rvy - uy * c, rvz - uz * c);
  const over = c - sdes;
  if (over <= 0.02) {
    if (s.coast) { if (sdes - c > 0.3 * Math.min(sdes, 2) + 0.08 || lat > prof.lat) s.coast = false; }
    else if (sdes - c < 0.04 && lat < prof.lat * 0.3) s.coast = true;
  } else s.coast = false;
  s.tau = clamp(tgo(dd, c, A, Ab, cap, brake), 0.4, 900);
  if (s.coast) { s.phase = 'coast'; return; }
  const a = Math.min(A, e / 1.2);
  if (e > 1e-6) { s.tx = (ex / e) * a; s.ty = (ey / e) * a; s.tz = (ez / e) * a; }
  s.phase = over > 0.02 ? 'brake' : 'burn';
}

/** Move one ship on by h seconds: autopilot, thrust, gravity, arrival. */
export function advance(game, s, t, h, G, lookup) {
  guide(game, s, t, G, lookup);
  let a = Math.hypot(s.tx, s.ty, s.tz);
  if (s.order && s.order.type === 'burn') s.order.left -= h;
  if (a * h > s.dv) { const k = s.dv / (a * h); s.tx *= k; s.ty *= k; s.tz *= k; a *= k; }
  s.dv -= a * h;
  if (s.dv < 1e-6) s.dv = 0;
  s.burn = a > 0.004 ? 1 : 0;
  let gx = 0, gy = 0, gz = 0;
  const o = s.order;
  const final = o && (o.type === 'orbit' || o.type === 'strike') && (o.via == null || o.done) ? planetOf(game, game.bodies[o.body]).id : -2;
  for (const w of G) {
    if (w.id === final || w.id === s.depart) {
      if (w.id === s.depart && Math.hypot(w.x - s.x, w.y - s.y, w.z - s.z) > w.clear * 3) s.depart = undefined;
      continue;
    }
    const dx = w.x - s.x, dy = w.y - s.y, dz = w.z - s.z;
    const dr = Math.hypot(dx, dy, dz);
    // Close in to a planet is thruster work, not modelled, unless the ship is there to slingshot.
    if (w.id >= 0 && dr < w.clear && !(o && o.via === w.id && !o.done)) continue;
    const r = Math.max(w.soft, dr);
    const f = w.gm / (r * r * r);
    gx += dx * f; gy += dy * f; gz += dz * f;
  }
  s.vx += (s.tx + gx) * h; s.vy += (s.ty + gy) * h; s.vz += (s.tz + gz) * h;
  s.x += s.vx * h; s.y += s.vy * h; s.z += s.vz * h;
  // Never inside the sun.
  const rs = Math.hypot(s.x, s.y, s.z);
  if (rs < SUN_R * 1.3) { const k = (SUN_R * 1.3) / (rs || 1); s.x *= k; s.y *= k; s.z *= k; }
  if (o && o.type === 'orbit' && (o.via == null || o.done)) {
    const b = game.bodies[o.body];
    const p = posAt(game, b, t + h), v = velAt(game, b, t + h);
    const dp = Math.hypot(p.x - s.x, p.y - s.y, p.z - s.z), R = parkRadius(b);
    const rv = Math.hypot(v.x - s.vx, v.y - s.vy, v.z - s.vz);
    if (dp < R + 0.7 && rv < 0.45) {
      s.at = b.id; s.ph = Math.atan2(s.z - p.z, s.x - p.x) + ((s.id * 0.7) % 0.6);
      s.order = null; s.depart = undefined; s.burn = 0; s.tx = s.ty = s.tz = 0; s.phase = 'orbit'; s.arrived = true;
    }
  } else if (o && o.type === 'strike') {
    const p = posAt(game, game.bodies[o.body], t + h);
    const dp = Math.hypot(p.x - s.x, p.y - s.y, p.z - s.z);
    if (o.near === undefined || dp < o.near) o.near = dp;
    else if (dp > o.near + 10) { s.order = null; s.coast = false; }
  } else if (o && o.type === 'attack' && o.mode === 'pass') {
    const T = lookup(o.ship);
    if (T) {
      const dp = Math.hypot(T.x - s.x, T.y - s.y, T.z - s.z);
      if (o.near === undefined || dp < o.near) o.near = dp;
      else if (dp > o.near + 12) { s.order = null; s.coast = false; }
    }
  }
}

/**
 * Fly an order forward without touching the game: how long it takes, how much
 * fuel it burns, and the path, for the route panel and the AI.
 */
export function dryRun(game, s0, order, { maxT = 700, h = 1, every = 4, coast = 0 } = {}) {
  const s = {
    id: s0.id, owner: s0.owner, x: s0.x, y: s0.y, z: s0.z, vx: s0.vx, vy: s0.vy, vz: s0.vz, tx: 0, ty: 0, tz: 0,
    st: s0.st, out: { drive: 0, reactor: 0 }, dv: 1e9, order: { ...order }, at: null, tau: 0, coast: false, inSoi: false, term: false, av: 0,
    depart: s0.at !== null ? planetOf(game, game.bodies[s0.at]).id : s0.depart,
  };
  const lookup = (id) => shipById(game, id);
  const path = [{ x: s.x, y: s.y, z: s.z }];
  let t = game.time, used = 0, k = 0;
  while (t - game.time < maxT) {
    const G = wells(game, t);
    const before = s.dv;
    advance(game, s, t, h, G, lookup);
    used += before - s.dv;
    t += h;
    if (++k % every === 0) path.push({ x: s.x, y: s.y, z: s.z });
    if (s.at !== null) break;
    if (!s.order && (coast -= h) <= 0) break;
  }
  path.push({ x: s.x, y: s.y, z: s.z });
  return { time: t - game.time, dv: used, ok: s.at !== null || order.type !== 'orbit', path, end: { x: s.x, y: s.y, z: s.z } };
}

/**
 * The ways to reach a world: hard burn, cruise, dark, and a slingshot past a
 * heavy world when one saves fuel. Each: { key, profile, via, side, time, dv, ok, path }.
 */
export function routes(game, ids, bodyId) {
  const list = game.ships.filter((s) => ids.includes(s.id));
  if (!list.length) return [];
  const lead = list.reduce((a, b) => (b.st.accel < a.st.accel ? b : a));
  const tank = Math.min(...list.map((s) => s.dv));
  const out = [];
  const amaxOf = (p) => Math.min(...list.map((s) => s.st.accel * PROFILES[p].a * (p === 'hard' ? s.st.flash : 1)));
  for (const profile of ['hard', 'cruise', 'dark']) {
    const r = dryRun(game, lead, { type: 'orbit', body: bodyId, profile, amax: amaxOf(profile) });
    out.push({ key: profile, profile, time: r.time, dv: r.dv, ok: r.ok && r.dv <= tank, reach: r.ok, path: r.path });
  }
  // Slingshots: any heavy world roughly on the way, either side, flown at cruise.
  const target = game.bodies[bodyId];
  const here = lead, there = posAt(game, target, game.time + out[1].time);
  const span = Math.hypot(there.x - here.x, there.z - here.z);
  let best = null;
  for (const b of game.planets) {
    if (b.gm < 1.5 || b.id === planetOf(game, target).id || (lead.at !== null && planetOf(game, game.bodies[lead.at]).id === b.id)) continue;
    const p = posAt(game, b, game.time + out[1].time * 0.5);
    if (Math.hypot(p.x - here.x, p.z - here.z) + Math.hypot(p.x - there.x, p.z - there.z) > span * 1.9 + 20) continue;
    for (const side of [1, -1]) {
      const r = dryRun(game, lead, { type: 'orbit', body: bodyId, profile: 'cruise', via: b.id, side, amax: amaxOf('cruise') }, { maxT: 900 });
      if (r.ok && (!best || r.dv < best.dv)) best = { key: 'sling', profile: 'cruise', via: b.id, side, time: r.time, dv: r.dv, ok: r.dv <= tank, reach: true, path: r.path };
    }
  }
  if (best && best.dv < out[1].dv * 0.88) out.push(best);
  return out;
}

// ---- Seeing ---------------------------------------------------------------------------

/** Is the straight line a to b blocked by the sun, a planet or a moon? (skipA/skipB: bodies the two ends orbit.) */
export function blocked(game, a, b, skipA = -1, skipB = -1) {
  const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
  const L2 = dx * dx + dy * dy + dz * dz;
  if (L2 < 1e-6) return false;
  const hit = (cx, cy, cz, r) => {
    const tt = clamp(((cx - a.x) * dx + (cy - a.y) * dy + (cz - a.z) * dz) / L2, 0, 1);
    const px = a.x + dx * tt - cx, py = a.y + dy * tt - cy, pz = a.z + dz * tt - cz;
    return px * px + py * py + pz * pz < r * r;
  };
  if (hit(0, 0, 0, SUN_R)) return true;
  for (const w of game.blockers) {
    if (w.id === skipA || w.id === skipB) continue;
    const p = game.bp[w.id];
    if (hit(p.x, p.y, p.z, w.size)) return true;
  }
  return false;
}

/** Who sees what: each ship's `seen[owner]` becomes 0 (hidden), 1 (a contact) or 2 (identified). */
function detect(game) {
  const eyes = Array.from({ length: game.players }, () => []);
  for (const s of game.ships) {
    if (s.owner < 0 || s.out.sensors > 0 || s.out.reactor > 0) continue;
    eyes[s.owner].push({ x: s.x, y: s.y, z: s.z, cold: s.st.cold, ident: s.st.ident, skip: s.at ?? -1 });
  }
  for (const b of game.bodies) {
    if (b.owner < 0) continue;
    const p = game.bp[b.id];
    eyes[b.owner].push({ x: p.x, y: p.y, z: p.z, cold: RULES.cold * RULES.worldSensor, ident: RULES.ident * RULES.worldSensor, skip: b.id });
  }
  for (const s of game.ships) {
    const lit = s.burn || s.lit > game.time;
    for (let o = 0; o < game.players; o++) {
      if (o === s.owner) { s.seen[o] = 2; continue; }
      if (!game.alive[o]) { s.seen[o] = 0; continue; }
      let lv = 0;
      for (const e of eyes[o]) {
        const d = Math.hypot(e.x - s.x, e.y - s.y, e.z - s.z);
        const near = lit ? d < e.ident : d < e.cold * s.st.sig;
        if (!lit && !near) continue;
        if (blocked(game, e, s, e.skip, s.at ?? -1)) continue;
        if (near && (lit || d < e.cold * s.st.sig * 0.6)) { lv = 2; break; }
        lv = 1;
      }
      const was = s.seen[o];
      if (lv && was === 2) lv = 2; // once made out, a tracked ship stays known
      if (lv && !was && !s.st.civil && (s.told?.[o] || -99) < game.time - 25) {
        (s.told ||= {})[o] = game.time;
        note(game, { type: 'contact', owner: o, ship: s.id });
      }
      s.seen[o] = lv;
    }
  }
}

// ---- Battle ---------------------------------------------------------------------------

function hurt(game, s, dmg, by) {
  const d = Math.max(1, dmg - s.st.armour);
  s.hull -= d;
  s.lit = game.time + 3;
  // A solid hit can knock a system out.
  if (game.rand() < clamp((d / s.st.hull) * 1.3, 0, 0.8)) {
    const keys = ['drive', 'reactor', 'weapons', 'sensors'];
    const k = keys[Math.floor(game.rand() * 4)];
    if (s.out[k] <= 0) note(game, { type: 'system', owner: s.owner, ship: s.id, sys: k });
    s.out[k] = s.hull < s.st.hull * 0.25 ? 1e9 : RULES.selfRepair;
  }
  if (s.hull <= 0) destroy(game, s, by);
}
function destroy(game, s, by) {
  if (s.dead) return;
  s.dead = true;
  fx(game, { type: 'boom', x: s.x, y: s.y, z: s.z, vx: s.vx, vy: s.vy, vz: s.vz, size: s.st.size, owner: s.owner });
  note(game, { type: s.st.civil ? 'raided' : 'lost', owner: s.owner, by, ship: s.id, name: s.name, cls: s.cls, x: s.x, y: s.y, z: s.z });
  if (s.st.civil) { tally(game, by, 'raided'); freeHauler(game, s); } else { tally(game, s.owner, 'lost'); tally(game, by, 'killed'); }
}
function freeHauler(game, s) {
  if (s.src != null && game.bodies[s.src].hauler === s.id) game.bodies[s.src].hauler = 0;
}
function launchTorps(game, s, target) {
  if (s.out.weapons > 0 || s.out.reactor > 0 || s.torps <= 0 || s.tcd > game.time) return false;
  const k = Math.min(s.st.tubes, s.torps);
  if (!k) return false;
  s.torps -= k; s.tcd = game.time + RULES.torp.reload; s.lit = game.time + 4;
  for (let i = 0; i < k; i++) {
    const a = (i / k) * Math.PI * 2;
    game.torps.push({
      id: game.nextId++, owner: s.owner, x: s.x, y: s.y, z: s.z,
      vx: s.vx + Math.cos(a) * 0.12, vy: s.vy + (i % 2 ? 0.06 : -0.06), vz: s.vz + Math.sin(a) * 0.12,
      ship: target.ship ?? null, body: target.body ?? null, dv: RULES.torp.dv, born: game.time, swarm: s.st.swarm, from: s.id, burn: 1,
    });
  }
  fx(game, { type: 'launch', x: s.x, y: s.y, z: s.z, n: k, owner: s.owner });
  note(game, { type: 'salvo', owner: s.owner, ship: s.id, n: k });
  return true;
}
function stepTorps(game, dt) {
  const R = RULES.torp;
  for (const m of game.torps) {
    let T = null, tx, ty, tz, tvx, tvy, tvz, hitR = 0.6;
    if (m.ship != null) {
      T = shipById(game, m.ship);
      if (!T || T.dead) { m.dead = true; continue; }
      tx = T.x; ty = T.y; tz = T.z; tvx = T.vx; tvy = T.vy; tvz = T.vz;
    } else {
      const b = game.bodies[m.body], p = game.bp[b.id], v = game.bv[b.id];
      tx = p.x; ty = p.y; tz = p.z; tvx = v.x; tvy = v.y; tvz = v.z; hitR = b.size + 0.3;
    }
    const rx = tx - m.x, ry = ty - m.y, rz = tz - m.z, d = Math.hypot(rx, ry, rz) || 1e-6;
    const wx = tvx - m.vx, wy = tvy - m.vy, wz = tvz - m.vz;
    const closing = -(rx * wx + ry * wy + rz * wz) / d;
    // Did it reach the target inside this step?
    const w2 = wx * wx + wy * wy + wz * wz;
    const tc = w2 > 1e-9 ? clamp(-(rx * wx + ry * wy + rz * wz) / w2, 0, dt) : 0;
    const cx = rx + wx * tc, cy = ry + wy * tc, cz = rz + wz * tc;
    if (Math.hypot(cx, cy, cz) < hitR) {
      m.dead = true;
      const rel = Math.sqrt(w2);
      const dmg = R.dmg * clamp((rel / 3) ** 2, 0.25, 3.5); // a slow torpedo barely scratches; a fast one guts a ship
      fx(game, { type: 'torpHit', x: tx, y: ty, z: tz, owner: m.owner });
      if (T) hurt(game, T, dmg, m.owner);
      else hitBattery(game, game.bodies[m.body], dmg, m.owner);
      continue;
    }
    if (game.time - m.born > R.life) { m.dead = true; continue; }
    m.burn = 0;
    if (m.dv > 0) {
      const tau = clamp(d / Math.max(0.5, closing), 0.5, 40);
      let ax = (rx + wx * tau) / tau + (rx / d) * 0.6, ay = (ry + wy * tau) / tau + (ry / d) * 0.6, az = (rz + wz * tau) / tau + (rz / d) * 0.6;
      const al = Math.hypot(ax, ay, az) || 1;
      ax *= R.accel / al; ay *= R.accel / al; az *= R.accel / al;
      m.vx += ax * dt; m.vy += ay * dt; m.vz += az * dt; m.dv -= R.accel * dt; m.burn = 1;
    }
    m.x += m.vx * dt; m.y += m.vy * dt; m.z += m.vz * dt;
    // Anything solid in the way stops it.
    for (const w of game.blockers) {
      if (w.id === m.body) continue;
      const p = game.bp[w.id];
      if (Math.hypot(p.x - m.x, p.y - m.y, p.z - m.z) < w.size) { m.dead = true; break; }
    }
    if (Math.hypot(m.x, m.y, m.z) < SUN_R) m.dead = true;
  }
  if (game.torps.some((m) => m.dead)) game.torps = game.torps.filter((m) => !m.dead);
}
function hitBattery(game, b, dmg, by) {
  if (b.bhp <= 0) return;
  b.bhp = Math.max(0, b.bhp - dmg);
  b.bquiet = game.time + 20;
  if (b.bhp <= 0) { fx(game, { type: 'boom', x: game.bp[b.id].x, y: game.bp[b.id].y, z: game.bp[b.id].z, vx: 0, vy: 0, vz: 0, size: 1.2, owner: b.owner }); note(game, { type: 'silenced', owner: b.owner, by, at: b.id }); }
}
const hostile = (a, b) => a !== b;
/** Would this world's battery fire on that ship? Independents only defend themselves. */
function batteryHates(game, b, s) {
  if (s.owner === b.owner) return false;
  if (b.owner !== NEUTRAL) return true;
  return !s.st.civil && (s.at === b.id || (s.order && s.order.body === b.id) || s.hitWorld === b.id);
}
/** One rail shot: the chance falls with range and crossing speed; the damage grows with closing speed. */
function railShot(game, from, fromV, T, dmg, hitMul, range, owner, evade) {
  const rx = T.x - from.x, ry = T.y - from.y, rz = T.z - from.z, d = Math.hypot(rx, ry, rz) || 1e-6;
  const wx = T.vx - fromV.x, wy = T.vy - fromV.y, wz = T.vz - fromV.z;
  const rate = (rx * wx + ry * wy + rz * wz) / d; // range rate: negative when closing
  const lat = Math.sqrt(Math.max(0, wx * wx + wy * wy + wz * wz - rate * rate)) / d;
  let p = 0.75 * (1 - (0.6 * d) / range) * T.st.size * hitMul / (1 + lat * 6);
  if (T.evade && !crippled(T)) p *= 0.5;
  if (evade) p *= 0.7;
  const hit = game.rand() < clamp(p, 0.03, 0.95);
  fx(game, { type: 'rail', x: from.x, y: from.y, z: from.z, tx: T.x, ty: T.y, tz: T.z, hit, owner });
  if (hit) hurt(game, T, dmg * clamp(0.5 + (Math.max(0, -rate) / 1.6) ** 2, 0.5, 5), owner);
}
function combat(game, dt) {
  const ships = game.ships, t = game.time;
  // Ships: rails, torpedoes, point defence.
  for (const s of ships) {
    if (s.dead || s.st.civil || s.out.reactor > 0) continue;
    const st = s.st, weaponsUp = s.out.weapons <= 0;
    const skipS = s.at ?? -1;
    // Point defence swats torpedoes near this ship, and rakes ships at knife range.
    if (st.pdc) {
      let guns = st.pdc * (weaponsUp ? 1 : 0.5);
      for (const m of game.torps) {
        if (guns <= 0) break;
        if (m.dead || m.owner === s.owner) continue;
        const d = Math.hypot(m.x - s.x, m.y - s.y, m.z - s.z);
        if (d > RULES.pdcRange) continue;
        const rel = Math.hypot(m.vx - s.vx, m.vy - s.vy, m.vz - s.vz);
        const use = Math.min(guns, 2); guns -= use;
        if (game.rand() < 1 - Math.exp(-use * (1.2 / (1 + rel / 5)) * (m.swarm ? 0.5 : 1) * dt)) {
          m.dead = true;
          fx(game, { type: 'pdcKill', x: m.x, y: m.y, z: m.z, fx: s.x, fy: s.y, fz: s.z, owner: s.owner });
        } else if (game.rand() < 0.5) fx(game, { type: 'pdc', x: s.x, y: s.y, z: s.z, tx: m.x, ty: m.y, tz: m.z, owner: s.owner });
        s.lit = t + 2;
      }
      if (guns > 0 && s.fireFree && weaponsUp) {
        for (const T of ships) {
          if (T.dead || T.owner === s.owner || !T.seen[s.owner]) continue;
          if (T.st.civil && !(s.order && s.order.ship === T.id && s.order.mode === 'pass')) continue;
          const d = Math.hypot(T.x - s.x, T.y - s.y, T.z - s.z);
          if (d > RULES.pdcRange * 0.6) continue;
          T.hull -= Math.max(0, guns * 0.6 - T.st.armour * 0.1) * dt; // armour shrugs off most of it
          T.lit = t + 3;
          if (T.hull <= 0) destroy(game, T, s.owner);
          if (game.rand() < 0.3) fx(game, { type: 'pdc', x: s.x, y: s.y, z: s.z, tx: T.x, ty: T.y, tz: T.z, owner: s.owner });
          s.lit = t + 2;
          break;
        }
      }
    }
    if (!weaponsUp || !s.fireFree) continue;
    // Pick the best target in rail range: the one most likely to be hurt.
    let best = null, bestV = 0, bat = null;
    for (const T of ships) {
      if (T.dead || T.owner === s.owner || !T.seen[s.owner]) continue;
      if (T.st.civil && !(s.order && s.order.type === 'attack' && s.order.ship === T.id && s.order.mode === 'pass')) continue;
      const d = Math.hypot(T.x - s.x, T.y - s.y, T.z - s.z);
      if (d > Math.max(st.railRange, RULES.torpRange)) continue;
      if (blocked(game, s, T, skipS, T.at ?? -1)) continue;
      const v = (T.st.power + 0.3) / (d + 4) * (s.order && s.order.ship === T.id ? 3 : 1);
      if (v > bestV) { bestV = v; best = T; }
    }
    // Or a hostile battery it has been sent against.
    const tb = s.at !== null ? game.bodies[s.at] : s.order && s.order.body != null ? game.bodies[s.order.body] : null;
    if (tb && tb.owner !== s.owner && tb.bhp > 0) {
      const p = game.bp[tb.id];
      if (Math.hypot(p.x - s.x, p.y - s.y, p.z - s.z) < st.railRange + tb.size) bat = tb;
    }
    if (best) {
      const d = Math.hypot(best.x - s.x, best.y - s.y, best.z - s.z);
      if (d < st.railRange) {
        for (let i = 0; i < st.rails.length; i++) {
          if (s.cd[i] > t || best.dead) continue;
          s.cd[i] = t + RULES.railCool * (0.9 + game.rand() * 0.2);
          s.lit = t + 3;
          railShot(game, s, { x: s.vx, y: s.vy, z: s.vz }, best, st.rails[i], st.railHit * (s.out.sensors > 0 ? 0.5 : 1), st.railRange, s.owner, s.evade);
        }
      }
      if (s.torpsFree && !best.dead && best.st.power > 0 && best.seen[s.owner] === 2 && d < RULES.torpRange && st.tubes) launchTorps(game, s, { ship: best.id });
    } else if (bat) {
      const p = game.bp[bat.id], v = game.bv[bat.id];
      const rx = p.x - s.x, ry = p.y - s.y, rz = p.z - s.z, d = Math.hypot(rx, ry, rz) || 1;
      const rate = (rx * (v.x - s.vx) + ry * (v.y - s.vy) + rz * (v.z - s.vz)) / d;
      for (let i = 0; i < st.rails.length; i++) {
        if (s.cd[i] > t) continue;
        s.cd[i] = t + RULES.railCool * (0.9 + game.rand() * 0.2);
        s.lit = t + 3; s.hitWorld = bat.id;
        fx(game, { type: 'rail', x: s.x, y: s.y, z: s.z, tx: p.x, ty: p.y, tz: p.z, hit: true, owner: s.owner });
        hitBattery(game, bat, st.rails[i] * clamp(1 + (Math.max(0, -rate) / 1.6) ** 2, 1, 5), s.owner); // a battery can't dodge
      }
      if (s.torpsFree && st.tubes && bat.bhp > 60) launchTorps(game, s, { body: bat.id });
    }
    // Jinking burns fuel.
    if (s.evade && s.at === null && s.dv > 0 && (best || bat)) s.dv = Math.max(0, s.dv - st.accel * 0.3 * dt);
  }
  // Batteries: rails and point defence from the ground.
  for (const b of game.bodies) {
    if (b.bhp <= 0) {
      if (batteryMax(b) > 0 && (b.bquiet || 0) < t && !ships.some((s) => s.at === b.id && s.owner !== b.owner && armed(s))) b.bhp = Math.min(batteryMax(b), b.bhp + RULES.batteryRegen * dt);
      continue;
    }
    const p = game.bp[b.id], v = game.bv[b.id], lv = levelOf(b, 'battery');
    if ((b.bquiet || 0) < t) b.bhp = Math.min(batteryMax(b), b.bhp + RULES.batteryRegen * dt);
    let guns = 3;
    for (const m of game.torps) {
      if (guns <= 0) break;
      if (m.dead || m.owner === b.owner) continue;
      if (b.owner === NEUTRAL && m.body !== b.id) continue;
      if (Math.hypot(m.x - p.x, m.y - p.y, m.z - p.z) > RULES.pdcRange + b.size) continue;
      guns -= 1;
      const rel = Math.hypot(m.vx - v.x, m.vy - v.y, m.vz - v.z);
      if (game.rand() < 1 - Math.exp(-(1.2 / (1 + rel / 5)) * (m.swarm ? 0.5 : 1) * dt)) { m.dead = true; fx(game, { type: 'pdcKill', x: m.x, y: m.y, z: m.z, fx: p.x, fy: p.y, fz: p.z, owner: b.owner }); }
    }
    b.bcd ||= [0, 0];
    let best = null, bestD = 1e9;
    for (const T of ships) {
      if (T.dead || !batteryHates(game, b, T) || T.st.civil) continue;
      const d = Math.hypot(T.x - p.x, T.y - p.y, T.z - p.z);
      if (d < RULES.railRange + b.size && d < bestD && !blocked(game, p, T, b.id, T.at ?? -1)) { best = T; bestD = d; }
    }
    if (best) {
      for (let i = 0; i < lv; i++) {
        if (b.bcd[i] > t || best.dead) continue;
        b.bcd[i] = t + RULES.railCool * (0.9 + game.rand() * 0.2);
        railShot(game, p, v, best, 9, 1, RULES.railRange + b.size, b.owner, false);
      }
    }
  }
  if (ships.some((s) => s.dead)) game.ships = ships.filter((s) => !s.dead);
}

// ---- Worlds change hands ------------------------------------------------------------------

export const yieldTime = (b) => RULES.yield[kindOf(b)] * (b.owner === NEUTRAL ? 0.5 : 1);
function eliminate(game, owner, by) {
  if (!game.alive[owner]) return;
  game.alive[owner] = false;
  for (const b of game.bodies) if (b.owner === owner) { b.owner = NEUTRAL; b.queue = []; b.yt = 0; }
  game.ships = game.ships.filter((s) => s.owner !== owner);
  game.torps = game.torps.filter((m) => m.owner !== owner);
  note(game, { type: 'eliminated', owner, by });
  const left = game.alive.map((a, i) => (a ? i : -1)).filter((i) => i >= 0);
  if (left.length === 1) { game.over = { winner: left[0], t: game.time }; note(game, { type: 'won', owner: left[0] }); }
}
function stepWorlds(game, dt) {
  for (const b of game.bodies) {
    // Building.
    for (const x of b.structures) {
      if (x.left > 0) {
        x.left -= dt;
        if (x.left <= 0) {
          x.left = 0;
          if (x.next) { x.level += 1; delete x.next; }
          if (x.type === 'battery') b.bhp = Math.max(b.bhp, batteryMax(b) * 0.5);
          note(game, { type: 'built', owner: b.owner, at: b.id, what: x.type });
        }
      }
    }
    // Who is in orbit?
    let occ = NEUTRAL, contested = false, defended = false, enemyHere = false;
    for (const s of game.ships) {
      if (s.at !== b.id || !armed(s)) continue;
      if (s.owner === b.owner) defended = true;
      else { enemyHere = true; if (occ === NEUTRAL) occ = s.owner; else if (occ !== s.owner) contested = true; }
    }
    b.blockaded = enemyHere;
    if (b.owner !== NEUTRAL) {
      const o = b.owner;
      // Yard.
      if (b.queue.length && has(b, 'yard') && !enemyHere) {
        const q = b.queue[0];
        q.left -= dt;
        if (q.left <= 0) {
          b.queue.shift();
          const s = spawnShip(game, o, q.cls, b);
          tally(game, o, 'built');
          note(game, { type: 'launched', owner: o, ship: s.id, at: b.id });
        }
      }
      // Income: a capital banks it, everything else waits for a freighter.
      const inc = incomeOf(b) * dt * (enemyHere ? 0 : 1);
      if (b.home) { game.credits[o] += inc * game.eco[o]; game.stats[o].earned += inc * game.eco[o]; }
      else {
        b.stock = Math.min(RULES.stockCap, b.stock + inc);
        const home = game.homes[o];
        if (b.stock >= RULES.load && !b.hauler && !enemyHere && home) {
          const f = spawnShip(game, o, 'freighter', b, { cargo: b.stock, src: b.id });
          b.stock = 0; b.hauler = f.id;
          f.order = { type: 'orbit', body: home.id, profile: 'cruise', amax: f.st.accel };
          f.depart = planetOf(game, b).id; f.at = null;
        }
      }
      // Ships in orbit of a friendly world take on fuel, and at a yard, repairs and torpedoes.
      const fast = b.home || has(b, 'refinery') ? 3 : 1, yard = has(b, 'yard');
      if (!enemyHere) {
        for (const s of game.ships) {
          if (s.at !== b.id || s.owner !== o) continue;
          resupply(s, dt, RULES.refuel * fast, RULES.repair * (yard ? 1 : 0.33), yard || b.home ? 1 / RULES.rearm : 0, yard);
        }
      }
    }
    // Yielding: one side alone in orbit, the battery silent, nobody defending.
    if (occ !== NEUTRAL && !contested && !defended && b.bhp <= 0) {
      if (b.yo !== occ) { b.yo = occ; b.yt = 0; }
      b.yt += dt;
      if (b.yt >= yieldTime(b)) capture(game, b, occ);
    } else if (b.yt > 0) b.yt = Math.max(0, b.yt - dt * 0.5);
  }
}
function resupply(s, dt, fuel, hull, torps, deep) {
  s.dv = Math.min(s.st.dv, s.dv + fuel * dt);
  s.hull = Math.min(s.st.hull, s.hull + hull * dt);
  if (torps && s.torps < s.st.mag) { s.rearm = (s.rearm || 0) + torps * dt; if (s.rearm >= 1) { s.rearm -= 1; s.torps += 1; } }
  if (s.st.stores && deep) s.stores = Math.min(s.st.stores, s.stores + torps * dt);
  for (const k in s.out) if (s.out[k] > 0 && (deep || s.out[k] < 1e8)) s.out[k] = Math.min(s.out[k], deep ? 8 : RULES.selfRepair);
}
function capture(game, b, to) {
  const from = b.owner;
  tally(game, from, 'worldsLost'); tally(game, to, 'captured');
  game.credits[to] += b.stock; b.stock = 0;
  b.owner = to; b.yt = 0; b.yo = NEUTRAL; b.queue = []; b.bhp = 0; b.bquiet = game.time + 30;
  b.structures = b.structures.filter((x) => x.left <= 0 || x.next);
  for (const x of b.structures) if (x.next) { delete x.next; x.left = 0; }
  note(game, { type: 'captured', owner: to, from, at: b.id });
  if (b.home && from !== NEUTRAL && game.homes[from] === b) { b.home = false; b.fallen = true; game.homes[from] = null; eliminate(game, from, to); }
}

function stepShips(game, dt) {
  const G = wells(game, game.time);
  const lookup = (id) => shipById(game, id);
  for (const s of game.ships) {
    // Damage control.
    for (const k in s.out) if (s.out[k] > 0 && s.out[k] < 1e8) { s.out[k] -= dt; if (s.out[k] <= 0) { s.out[k] = 0; note(game, { type: 'repaired', owner: s.owner, ship: s.id, sys: k }); } }
    if (s.at !== null) {
      s.ph += parkRate(game.bodies[s.at]) * dt;
      ride(game, s, game.time + dt);
      s.burn = 0; s.tx = s.ty = s.tz = 0; s.phase = 'orbit';
      continue;
    }
    advance(game, s, game.time, dt, G, lookup);
    if (s.arrived) {
      s.arrived = false;
      const b = game.bodies[s.at];
      if (s.st.civil && b.owner === s.owner) {
        game.credits[s.owner] += s.cargo * game.eco[s.owner];
        game.stats[s.owner].earned += s.cargo; tally(game, s.owner, 'hauled');
        note(game, { type: 'freight', owner: s.owner, at: b.id, n: Math.round(s.cargo) });
        freeHauler(game, s); s.dead = true;
      } else if (!s.st.civil) note(game, { type: 'arrived', owner: s.owner, ship: s.id, at: b.id });
    }
    if (!s.order && !s.warned && s.dv < s.st.dv * 0.2 && !s.st.civil) { s.warned = true; note(game, { type: 'fuel', owner: s.owner, ship: s.id }); }
    if (s.dv > s.st.dv * 0.4) s.warned = false;
  }
  // Tenders top up anything flying alongside; boarders take crippled ships and freighters.
  const B = RULES.board;
  for (const s of game.ships) {
    if (s.dead) continue;
    if (s.st.stores && s.out.reactor <= 0) {
      for (const T of game.ships) {
        if (T === s || T.owner !== s.owner || T.st.civil || T.st.stores) continue;
        if (Math.hypot(T.x - s.x, T.y - s.y, T.z - s.z) > 3 || Math.hypot(T.vx - s.vx, T.vy - s.vy, T.vz - s.vz) > 0.5) continue;
        const give = Math.min(0.6 * dt, s.dv - 8, T.st.dv - T.dv);
        if (give > 0) { s.dv -= give; T.dv += give; }
        if (T.torps < T.st.mag && s.stores >= 1) { T.rearm = (T.rearm || 0) + dt / 6; if (T.rearm >= 1) { T.rearm -= 1; T.torps += 1; s.stores -= 1; } }
        T.hull = Math.min(T.st.hull, T.hull + RULES.repair * 0.33 * dt);
        for (const k in T.out) if (T.out[k] > RULES.selfRepair) T.out[k] = RULES.selfRepair;
      }
    }
    const takeable = s.st.civil || s.out.reactor > 0 || (s.out.drive > 0 && s.out.weapons > 0);
    if (!takeable) { s.board = 0; continue; }
    let by = NEUTRAL;
    for (const T of game.ships) {
      if (T.owner === s.owner || !armed(T) || T.dead) continue;
      if (Math.hypot(T.x - s.x, T.y - s.y, T.z - s.z) < B.range && Math.hypot(T.vx - s.vx, T.vy - s.vy, T.vz - s.vz) < B.speed) { by = T.owner; break; }
    }
    if (by === NEUTRAL) { s.board = Math.max(0, s.board - dt); continue; }
    if (s.boardBy !== by) { s.boardBy = by; s.board = 0; }
    s.board += dt;
    if (s.board >= (s.st.civil ? B.freighter : B.warship)) {
      if (s.st.civil) {
        game.credits[by] += s.cargo; tally(game, by, 'raided');
        note(game, { type: 'seized', owner: by, from: s.owner, n: Math.round(s.cargo), x: s.x, y: s.y, z: s.z });
        freeHauler(game, s); s.dead = true;
      } else {
        note(game, { type: 'boarded', owner: by, from: s.owner, ship: s.id, name: s.name });
        tally(game, s.owner, 'lost');
        s.owner = by; s.st = statsFor(game, by, s.cls); s.order = null; s.board = 0;
        for (const k in s.out) if (s.out[k] > 30) s.out[k] = 30;
        s.seen = s.seen.map(() => 0);
      }
    }
  }
  if (game.ships.some((s) => s.dead)) game.ships = game.ships.filter((s) => !s.dead);
}

function stepResearch(game, dt) {
  for (let o = 0; o < game.players; o++) {
    const p = game.tech[o].project;
    if (!p || !game.alive[o]) continue;
    p.left -= dt;
    if (p.left <= 0) {
      game.tech[o][p.key] += 1; game.tech[o].project = null;
      refreshStats(game, o);
      note(game, { type: 'research', owner: o, key: p.key, level: game.tech[o][p.key] });
    }
  }
}

/** Advance the game by dt seconds of game time (in fixed steps). */
export function step(game, dt) {
  if (!game.rand) prepare(game);
  game.acc += dt;
  let n = 0;
  while (game.acc >= DT && !game.over && n++ < 80) {
    game.acc -= DT;
    tick(game);
  }
  if (game.over) game.acc = 0;
}
/** Set up the derived, unsaved parts of a game (also after loading one). */
export function prepare(game) {
  game.rand = rng((game.seed ^ 0x9e3779b9) + Math.floor(game.time * 5));
  refreshBodies(game);
  game.homes = Array.from({ length: game.players }, (_, o) => game.bodies.find((b) => b.home && b.owner === o) || null);
  game.bp = []; game.bv = [];
  place(game);
  for (const s of game.ships) if (!s.st) s.st = statsFor(game, s.owner, s.cls);
}
function place(game) {
  for (const b of game.bodies) { game.bp[b.id] = posAt(game, b, game.time); game.bv[b.id] = velAt(game, b, game.time); }
}
function tick(game) {
  place(game);
  stepShips(game, DT);
  stepTorps(game, DT);
  game.time += DT;
  place(game);
  game.k = (game.k || 0) + 1;
  if (game.k % 2 === 0) detect(game);
  combat(game, DT);
  stepWorlds(game, DT);
  stepResearch(game, DT);
}

// ---- Multiplayer: what a guest is sent ------------------------------------------------------

/** The state one player may see, as plain JSON. */
export function snapshot(game, owner) {
  const r2 = (v) => Math.round(v * 100) / 100;
  return {
    time: game.time, over: game.over, credits: game.credits[owner], tech: game.tech[owner], alive: game.alive, stats: game.stats,
    bodies: game.bodies.map((b) => ({ owner: b.owner, structures: b.structures, queue: b.owner === owner ? b.queue : [], stock: b.owner === owner ? r2(b.stock) : 0, bhp: r2(b.bhp), yt: r2(b.yt), yo: b.yo, home: !!b.home, blockaded: !!b.blockaded })),
    ships: game.ships.filter((s) => s.seen[owner]).map((s) => {
      const mine = s.owner === owner, id2 = s.seen[owner] === 2;
      return {
        id: s.id, owner: s.owner, cls: id2 ? s.cls : null, name: id2 ? s.name : null, x: r2(s.x), y: r2(s.y), z: r2(s.z), vx: r2(s.vx), vy: r2(s.vy), vz: r2(s.vz),
        tx: s.tx, ty: s.ty, tz: s.tz, burn: s.burn, at: s.at, ph: s.ph, hull: id2 ? r2(s.hull) : 0, out: id2 ? s.out : null, seen: s.seen[owner], phase: s.phase,
        ...(mine ? { dv: r2(s.dv), torps: s.torps, stores: s.stores, order: s.order, grp: s.grp, torpsFree: s.torpsFree, fireFree: s.fireFree, evade: s.evade, board: s.board, tau: s.tau } : {}),
      };
    }),
    torps: game.torps.map((m) => ({ id: m.id, owner: m.owner, x: r2(m.x), y: r2(m.y), z: r2(m.z), vx: r2(m.vx), vy: r2(m.vy), vz: r2(m.vz), burn: m.burn })),
    events: game.events.filter((e) => e.t > game.time - 1.5), fx: game.fx.slice(),
  };
}
/** Guest side: fold a snapshot into the local game, keeping body objects in place. */
export function applySnapshot(game, snap, owner) {
  game.time = snap.time; game.over = snap.over; game.credits[owner] = snap.credits; game.tech[owner] = snap.tech; game.alive = snap.alive; game.stats = snap.stats;
  snap.bodies.forEach((sb, i) => Object.assign(game.bodies[i], sb));
  const old = new Map(game.ships.map((s) => [s.id, s]));
  game.ships = snap.ships.map((ss) => {
    const s = old.get(ss.id) || { seen: Array(game.players).fill(0), out: { drive: 0, reactor: 0, weapons: 0, sensors: 0 }, cd: [], kills: 0 };
    Object.assign(s, ss);
    if (!ss.out) s.out = { drive: 0, reactor: 0, weapons: 0, sensors: 0 };
    s.seen = Array(game.players).fill(0); s.seen[owner] = ss.seen; s.seen[s.owner] = 2;
    s.cls = ss.cls || 'frigate'; s.unknown = !ss.cls;
    s.st = statsFor(game, s.owner, s.cls);
    return s;
  });
  game.torps = snap.torps;
  const seenT = game.lastEvT || -1;
  for (const e of snap.events) if (e.t > seenT) game.events.push(e);
  if (snap.events.length) game.lastEvT = Math.max(seenT, ...snap.events.map((e) => e.t));
  for (const f of snap.fx) fx(game, f);
  game.homes = Array.from({ length: game.players }, (_, o) => game.bodies.find((b) => b.home && b.owner === o) || null);
}
