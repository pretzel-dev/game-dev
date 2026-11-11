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
export const GM_SUN = 100;
/** Distances between worlds, against their sizes: space is mostly empty. */
export const SPREAD = 5; // the sun's pull (G times its mass), world units^3 / s^2
export const SUN_R = 10;

export const RULES = {
  startCredits: 300,
  homeIncome: 2, // credits per second straight into the treasury at a capital
  // Credits per second a held world sets aside; freighters haul it home.
  income: { planet: 0.8, giant: 1.0, moon: 0.4, station: 0.5, asteroid: 0.3 },
  load: 120, // a freighter sails once this much is waiting
  stockCap: 400,
  structures: {
    // What can be built depends on the kind of world: that is much of what makes each one worth having.
    yard: { name: 'Yard', cost: 350, time: 60, where: ['planet', 'station'], maxLevel: 2 },
    mine: { name: 'Mine', cost: 200, time: 40, where: ['planet', 'moon', 'asteroid'], rocky: true, maxLevel: 2, income: 1 },
    refinery: { name: 'Refinery', cost: 300, time: 50, where: ['planet'], giant: true, maxLevel: 2, income: 1.5 },
    battery: { name: 'Battery', cost: 250, time: 45, where: ['planet', 'moon', 'station', 'asteroid'], maxLevel: 2 },
    habitat: { name: 'Habitat', cost: 300, time: 60, where: ['planet', 'station'], rocky: true, maxLevel: 2 },
    lab: { name: 'Laboratory', cost: 300, time: 60, where: ['planet', 'station'], rocky: true, maxLevel: 2 },
    exchange: { name: 'Exchange', cost: 400, time: 70, where: ['station'], home: true, maxLevel: 2, income: 1.5 },
    array: { name: 'Sensor array', cost: 250, time: 45, where: ['moon', 'station', 'asteroid'], maxLevel: 1 },
    depot: { name: 'Fuel depot', cost: 250, time: 45, where: ['moon', 'station'], maxLevel: 1 },
  },
  batteryHp: 100, // per level
  batteryRegen: 1.5,
  yield: { asteroid: 18, moon: 20, station: 22, planet: 30, giant: 36, home: 50 }, // seconds of unchallenged orbit
  refuel: 0.5, // delta-v per second in orbit of a world you hold (x3 at a refinery or capital)
  repair: 1.5, // hull per second at a yard (a third of that elsewhere, or beside a tender)
  rearm: 4, // seconds per torpedo at a yard or capital
  selfRepair: 50, // seconds for damage control to bring a system back
  pdcRange: 3,
  railRange: 7,
  railCool: 4,
  torpRange: 20, // ships loose torpedoes on their own inside this
  torp: { accel: 0.4, dv: 8, dmg: 28, life: 150, reload: 14, hit: 0.55 },
  cold: 14, // range at which a cold (coasting) ship is spotted
  ident: 60, // range at which a burning ship is identified, not just seen
  worldSensor: 1.4, // a held world sees this much further than a ship
  board: { freighter: 6, warship: 20, range: 2.4, speed: 0.5 },
  capBase: 4, capMax: 12, // ships you may field: the base, plus one per habitat level
  arraySensor: 2.5, // a sensor array sees this much further than a bare world
};

// Ship classes. accel in units/s^2, dv is the tank as a total speed change.
export const CLASSES = {
  corvette: { name: 'Corvette', cost: 260, time: 50, hull: 60, armour: 0, accel: 0.065, dv: 26, size: 0.6, sig: 0.55, sensor: 1.4, rails: [5], pdc: 1, tubes: 2, mag: 4, power: 1 },
  frigate: { name: 'Frigate', cost: 450, time: 75, hull: 110, armour: 2, accel: 0.05, dv: 20, size: 0.9, sig: 1, sensor: 1, rails: [9], pdc: 2, tubes: 4, mag: 12, power: 2.2 },
  escort: { name: 'Escort', cost: 420, time: 75, hull: 100, armour: 2, accel: 0.045, dv: 20, size: 0.9, sig: 1, sensor: 1.1, rails: [5], pdc: 6, tubes: 0, mag: 0, power: 1.8 },
  battleship: { name: 'Battleship', cost: 1100, time: 150, hull: 300, armour: 8, accel: 0.035, dv: 18, size: 1.6, sig: 1.5, sensor: 1, rails: [16, 16], pdc: 4, tubes: 4, mag: 8, power: 6, needs: 'spinal' },
  tender: { name: 'Tender', cost: 320, time: 60, hull: 90, armour: 0, accel: 0.04, dv: 70, size: 1.2, sig: 1.2, sensor: 0.8, rails: [], pdc: 1, tubes: 0, mag: 0, power: 0, stores: 24 },
  freighter: { name: 'Freighter', cost: 0, time: 0, hull: 55, armour: 0, accel: 0.03, dv: 1e6, size: 1.3, sig: 1.3, sensor: 0.5, rails: [], pdc: 0, tubes: 0, mag: 0, power: 0, civil: true },
};
export const BUILDABLE = ['corvette', 'frigate', 'escort', 'battleship', 'tender'];

// The three powers. Multipliers on the class table above.
export const FACTIONS = {
  concord: { name: 'Meridian Concord', short: 'Concord', text: 'Armoured and tough. Costs more, turns slower.', hull: 1.4, armour: 4, cost: 1, accel: 0.95, start: ['frigate', 'escort', 'corvette'] },
  boreal: { name: 'Boreal Republic', short: 'Republic', text: 'Fast drives, hard-hitting rails, more fuel.', accel: 1.2, rail: 1.3, hull: 1, dv: 1.1, start: ['frigate', 'corvette', 'corvette'] },
  holds: { name: 'Lantern Holds', short: 'Holds', text: 'Cheap, hard to spot, fragile. One extra ship.', cost: 0.95, time: 0.9, sig: 0.6, hull: 0.75, cap: 1, start: ['frigate', 'frigate', 'corvette'] },
};
export const FACTION_KEYS = Object.keys(FACTIONS);

// Research: five lines of four steps. The second and fourth step of every line is a choice
// between two doctrines; taking one closes the other for the rest of the game.
export const TECH = {
  drives: { name: 'Drives', tiers: [
    [{ key: 'nozzles', name: 'High-thrust nozzles', text: 'Every ship accelerates a fifth harder.' }],
    [{ key: 'tanks', name: 'Drop tanks', text: 'A third more fuel in every tank.' }, { key: 'flash', name: 'Flash burn', text: 'Hard burns are far more violent: faster passes, quicker escapes.' }],
    [{ key: 'cruise', name: 'Efficient cruise', text: 'Cruising speed up by a third.' }],
    [{ key: 'coldjets', name: 'Cold thrusters', text: 'A dark run shows no plume at all.' }, { key: 'torch', name: 'Torch drive', text: 'A quarter more thrust again.' }],
  ] },
  weapons: { name: 'Weapons', tiers: [
    [{ key: 'guided', name: 'Guided slugs', text: 'Rails hit more often.' }],
    [{ key: 'spinal', name: 'Spinal mounts', text: 'Unlocks the battleship.' }, { key: 'wolfpack', name: 'Wolfpack tubes', text: 'Corvettes and frigates carry half as many torpedoes again and reload faster.' }],
    [{ key: 'plate', name: 'Layered plate', text: 'A quarter more hull on every warship.' }],
    [{ key: 'swarm', name: 'Swarm warheads', text: 'Your torpedoes slip past point defence.' }, { key: 'flak', name: 'Flak curtain', text: 'Your point defence is twice as deadly.' }],
  ] },
  sensors: { name: 'Sensors', tiers: [
    [{ key: 'passive', name: 'Passive arrays', text: 'Spot cold ships further out.' }],
    [{ key: 'coldrun', name: 'Cold running', text: 'Your own ships are much harder to spot.' }, { key: 'network', name: 'Deep-space network', text: 'Every world you hold sees twice as far.' }],
    [{ key: 'firecon', name: 'Fire-control link', text: 'Rails reach a quarter further.' }],
    [{ key: 'jammers', name: 'Jammers', text: 'Three in ten torpedoes fired at your ships lose their lock.' }, { key: 'longwatch', name: 'Long watch', text: 'Identify ships from much further away.' }],
  ] },
  industry: { name: 'Industry', tiers: [
    [{ key: 'fabs', name: 'Orbital fabricators', text: 'Structures and ships build a fifth faster.' }],
    [{ key: 'deepmine', name: 'Deep mining', text: 'Mines pay half as much again.' }, { key: 'bulk', name: 'Bulk freight', text: 'Freighters are faster and twice as tough.' }],
    [{ key: 'modular', name: 'Modular yards', text: 'Ships cost less.' }],
    [{ key: 'arcology', name: 'Arcologies', text: 'Every habitat crews twice as many ships.' }, { key: 'wareco', name: 'War economy', text: 'Your capital earns twice as much.' }],
  ] },
  intel: { name: 'Intelligence', tiers: [
    [{ key: 'signals', name: 'Signals intercept', text: 'Recruit agents. See where identified enemy ships are bound.' }],
    [{ key: 'sabot', name: 'Saboteurs', text: 'Agents can knock out a battery or stall a yard.' }, { key: 'rings', name: 'Spy rings', text: 'Agents can skim a third of a world\'s earnings.' }],
    [{ key: 'counter', name: 'Counter-intelligence', text: 'Enemy agents on your worlds are caught twice as fast.' }],
    [{ key: 'fifth', name: 'Fifth column', text: 'A world with your agent yields to your ships twice as fast.' }, { key: 'cipher', name: 'Broken cipher', text: 'Every enemy ship that burns is identified, wherever it is.' }],
  ] },
};
export const TECH_KEYS = Object.keys(TECH);
export const TECH_COST = [250, 450, 750, 1200];
export const TECH_TIME = [50, 80, 120, 170];
export const techOption = (key) => { for (const l of TECH_KEYS) for (const t of TECH[l].tiers) for (const o of t) if (o.key === key) return o; return null; };
export const knows = (game, owner, key) => owner >= 0 && !!game.tech[owner].picks[key];

// What makes a world worth having. Most independent worlds have one of these.
export const TRAITS = {
  seam: { name: 'Rich seam', text: 'Mines here pay double.', kinds: ['asteroid', 'moon'] },
  relay: { name: 'Old relay', text: 'Whoever holds it sees four times as far from here.', kinds: ['asteroid', 'moon', 'station'] },
  deut: { name: 'Deuterium sea', text: 'Ships refuel quickly here; a refinery pays half as much again.', kinds: ['giant', 'moon'] },
  fortress: { name: 'Fortress rock', text: 'Its battery is twice as tough.', kinds: ['asteroid', 'moon'] },
  archive: { name: 'Ancient archive', text: 'Research runs a third faster for whoever holds it; a laboratory here counts double.', kinds: ['planet', 'moon'] },
  hulk: { name: 'Drydock hulk', text: 'Comes with a yard. Ships built here are veterans.', kinds: ['station', 'moon'] },
  forge: { name: 'Tidal forge', text: 'Everything builds twice as fast here.', kinds: ['moon'] },
  garden: { name: 'Garden world', text: 'Earns more; habitats here crew twice as many ships.', kinds: ['planet'] },
  listening: { name: 'Listening post', text: 'Identifies burning ships across most of the system. Agents here are caught quickly.', kinds: ['asteroid', 'moon', 'station'] },
};
export const AGENT = { cost: 200, travel: 45, caught: 1 / 360, opCost: 150, opRisk: 0.3, skim: 0.33 };

// How a ship flies a leg: share of full thrust, cruising speed (relative to the
// destination), and how far off course it lets itself drift before correcting.
export const PROFILES = {
  hard: { name: 'Hard burn', a: 1, cap: Infinity, lat: 0.03 },
  cruise: { name: 'Cruise', a: 0.7, cap: 2, lat: 0.1 },
  dark: { name: 'Dark', a: 1, cap: 1.2, lat: 0.35 },
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
  let a, c;
  if (b.e) {
    // An ellipse (b.r is its long half-width): faster near the sun, slower far out. Kepler's equation by Newton.
    let E = u;
    for (let k = 0; k < 4; k++) E -= (E - b.e * Math.sin(E) - u) / (1 - b.e * Math.cos(E));
    a = (Math.cos(E) - b.e) * b.r; c = Math.sqrt(1 - b.e * b.e) * Math.sin(E) * b.r;
  } else { a = Math.cos(u) * b.r; c = Math.sin(u) * b.r; }
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

  // Laid out like our own system: a few rocky worlds close in, a belt, then giants far apart.
  // Each orbit is roughly half as far out again as the last, and none is a perfect circle.
  // Where a power starts suits it: the Concord on a living world, the Republic on a dry one,
  // the Holds on a station over a gas giant.
  const facs = players.map((p) => p.faction || 'concord');
  const stationHomes = facs.map((f, i) => (f === 'holds' ? i : -1)).filter((i) => i >= 0);
  const rockyHomes = facs.map((f, i) => (f !== 'holds' ? i : -1)).filter((i) => i >= 0);
  const nInner = Math.max(2, Math.min(4, rockyHomes.length + 1 + Math.floor(rand() * 2)));
  const nGiant = Math.max(stationHomes.length, 1 + Math.floor(rand() * 2));
  const court = rand() < 0.3; // one great giant with a crowd of moons
  const specs = [];
  const moonsOf = (size, k) => Array.from({ length: k }, (_, m) => ({ r: size * 4 + 9 + m * 10 + rand() * 2, size: 0.5 + rand() * 0.5 }));
  const innerSlots = shuffle(Array.from({ length: nInner - 1 }, (_, i) => i + 1)); // the innermost world is nobody's home
  for (let i = 0; i < nInner; i++) {
    const k = innerSlots.indexOf(i);
    const owner = k >= 0 && k < rockyHomes.length ? rockyHomes[k] : NEUTRAL;
    const size = i === 0 ? 1.2 + rand() * 0.6 : 1.7 + rand() * 0.9;
    specs.push({ owner, giant: false, size, moons: moonsOf(size, owner !== NEUTRAL ? 1 : i === 0 ? 0 : Math.floor(rand() * 2)), station: false, e: i === 0 ? 0.12 + rand() * 0.08 : 0.02 + rand() * 0.07, incl: (rand() - 0.5) * (i === 0 ? 0.1 : 0.04) });
  }
  for (let i = 0; i < nGiant; i++) {
    const owner = i < stationHomes.length ? stationHomes[i] : NEUTRAL;
    const big = court && i === 0;
    const size = big ? 5.2 : 3.4 + rand() * 1.2;
    specs.push({ owner, giant: true, size, moons: moonsOf(size, big ? 4 : 2 + Math.floor(rand() * 2)), station: owner !== NEUTRAL, stationHome: owner !== NEUTRAL, e: 0.02 + rand() * 0.04, incl: (rand() - 0.5) * 0.04 });
  }
  if (rand() < 0.4) { const size = 1.2 + rand() * 0.5; specs.push({ owner: NEUTRAL, giant: false, size, moons: moonsOf(size, Math.floor(rand() * 2)), station: false, e: 0.14 + rand() * 0.1, incl: (rand() - 0.5) * 0.14, dwarf: true }); }
  const hosts = shuffle(specs.filter((s) => s.owner === NEUTRAL && !s.dwarf)).slice(0, 1 + Math.floor(rand() * 2));
  for (const s of hosts) s.station = true;
  for (const sp of specs) {
    sp.stationR = sp.size * 3 + 3;
    sp.reach = Math.max(sp.size * 1.6, sp.station ? sp.stationR + 1 : 0, ...sp.moons.map((m) => m.r + m.size));
  }
  let prev = null, beltR = 0;
  const beltW = (8 + rand() * 12) * 3;
  specs.forEach((sp, i) => {
    if (!prev) sp.r = (28 + rand() * 6) * SPREAD;
    else if (i === nInner) { beltR = prev.r * (1.25 + rand() * 0.15); sp.r = (beltR + beltW) * (1.25 + rand() * 0.15); }
    else sp.r = Math.max(prev.r * ((sp.giant ? 1.45 : sp.dwarf ? 1.35 : 1.38) + rand() * 0.25), prev.r + prev.reach + sp.reach + 20);
    prev = sp;
  });
  if (specs[specs.length - 1].dwarf && specs[specs.length - 1].r > 1900) specs.pop(); // (too far out to matter)
  for (const sp of specs) {
    sp.gm = DENSITY[sp.giant ? 'gas' : 'rock'] * sp.size ** 3;
    const out = Math.max(0, ...sp.moons.map((m) => m.r), sp.station ? sp.stationR : 0);
    if (out) sp.gm = Math.max(sp.gm, 3 * GM_SUN * (out / (HILL * sp.r)) ** 3);
  }
  const homes = []; // capital body per owner, and the planet whose place round the sun sets where it starts
  for (const sp of specs) {
    const planet = add({
      kind: 'planet', name: pick(PLANET_NAMES, names), parent: null, r: sp.r, e: sp.e, period: periodAt(sp.r), phase: rand() * Math.PI * 2,
      incl: sp.incl, size: sp.size, baseSize: sp.size, giant: sp.giant, gm: sp.gm, hue: rand(),
    });
    if (sp.owner !== NEUTRAL && !sp.stationHome) { homes[sp.owner] = { body: planet, planet }; planet.biome = facs[sp.owner] === 'boreal' ? 'desert' : rand() < 0.5 ? 'temperate' : 'ocean'; }
    for (const m of sp.moons) {
      add({
        kind: 'moon', name: pick(MOON_NAMES, names), parent: planet.id, r: m.r, period: moonPeriod(m.r, sp.gm), phase: rand() * Math.PI * 2,
        incl: (rand() - 0.5) * 0.25, size: m.size, baseSize: m.size, gm: DENSITY.rock * m.size ** 3, hue: rand(),
      });
    }
    if (sp.station) {
      const st = add({ kind: 'station', name: pick(STATION_NAMES, names), parent: planet.id, r: sp.stationR, period: moonPeriod(sp.stationR, sp.gm), phase: rand() * Math.PI * 2, incl: 0.2, size: sp.stationHome ? 0.7 : 0.45, baseSize: 0.45, hue: 0 });
      if (sp.stationHome) homes[sp.owner] = { body: st, planet };
    }
  }
  const rocks = 3 + Math.floor(rand() * 4);
  for (let k = 0; k < rocks; k++) {
    const r = beltR + rand() * beltW;
    const size = 0.5 + rand() * 0.4;
    add({ kind: 'asteroid', name: pick(ROCK_NAMES, names), parent: null, r, e: rand() * 0.05, period: periodAt(r), phase: (k / rocks) * Math.PI * 2 + rand() * 0.8, incl: (rand() - 0.5) * 0.06, size, baseSize: size, gm: 0.04 * size ** 3, hue: rand() });
  }

  const game = {
    seed, mp, time: 0, acc: 0, players: n, bodies, ships: [], torps: [], events: [], fx: [], nextId: 1,
    stars: [{ r: 0, period: 1, phase: 0, size: SUN_R / 6, gm: GM_SUN }], belt: { r: beltR, w: beltW },
    factions: facs,
    names: players.map((p, i) => p.name || FACTIONS[p.faction || 'concord'].short || `Player ${i + 1}`),
    credits: players.map(() => RULES.startCredits),
    tech: players.map(() => ({ drives: 0, weapons: 0, sensors: 0, industry: 0, intel: 0, picks: {}, project: null })),
    agents: [],
    alive: players.map(() => true), eco: players.map(() => 1),
    stats: players.map(() => ({ built: 0, lost: 0, killed: 0, captured: 0, worldsLost: 0, hauled: 0, raided: 0, earned: 0 })),
    over: null, usedNames: [],
  };
  // Capitals start spread round the sun.
  const base = rand() * Math.PI * 2;
  homes.forEach((hm, owner) => {
    const h = hm.body;
    hm.planet.phase = base + (owner * Math.PI * 2) / n;
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
  // Most independent worlds have something that makes them worth the trip.
  for (const key of shuffle(Object.keys(TRAITS))) {
    const T = TRAITS[key];
    const spots = bodies.filter((b) => b.owner === NEUTRAL && !b.trait && T.kinds.includes(b.giant ? 'giant' : b.kind) && !(b.kind === 'planet' && !b.giant && T.kinds.includes('giant') && !T.kinds.includes('planet'))
      && (key !== 'forge' && key !== 'deut' || b.giant || (b.parent !== null && bodies[b.parent].giant)));
    if (!spots.length) continue;
    const b = spots[Math.floor(rand() * spots.length)];
    b.trait = key;
    if (key === 'fortress' && !structure(b, 'battery')) b.structures.push({ type: 'battery', level: 1, left: 0 });
    if (key === 'fortress') b.bhp = batteryMax(b);
    if (key === 'hulk') b.structures.push({ type: 'yard', level: 1, left: 0 });
  }
  prepare(game);
  return game;
}

// ---- Economy ----------------------------------------------------------------------

export const working = (x) => x.left <= 0;
export const structure = (b, type) => b.structures.find((x) => x.type === type);
export const has = (b, type) => b.structures.some((x) => x.type === type && working(x));
const levelOf = (b, type) => { const x = structure(b, type); return x && working(x) ? x.level : 0; };
/** How far a held world sees, against a ship's sensors. */
export const worldSight = (b, game = null) => RULES.worldSensor * (levelOf(b, 'array') ? RULES.arraySensor : 1) * (b.trait === 'relay' ? 4 : 1) * (game && knows(game, b.owner, 'network') ? 2 : 1);
export const batteryMax = (b) => RULES.batteryHp * levelOf(b, 'battery') * (b.trait === 'fortress' ? 2 : 1);
/** How fast things are built at a world, against the standard. */
export const buildSpeed = (game, owner, b) => (knows(game, owner, 'fabs') ? 1.2 : 1) * (b && b.trait === 'forge' ? 2 : 1);
/** How fast a power's research runs: laboratories, and the archive. */
export const researchSpeed = (game, owner) => (1 + 0.5 * game.bodies.reduce((n, b) => n + (b.owner === owner ? levelOf(b, 'lab') * (b.trait === 'archive' ? 2 : 1) : 0), 0)) * (game.bodies.some((b) => b.owner === owner && b.trait === 'archive') ? 1.3 : 1);
export function slotsOf(b) {
  if (b.home) return 5;
  if (b.kind === 'planet') return 3;
  if (b.kind === 'station' || b.kind === 'moon') return 2;
  return 1;
}
export const kindOf = (b) => (b.home ? 'home' : b.giant ? 'giant' : b.kind);
/** Credits per second a world makes (a capital banks it; the rest wait for a freighter). */
export function incomeOf(b, game = null) {
  const o = b.owner, K = (k) => !!game && knows(game, o, k);
  const base = b.home ? RULES.homeIncome * (K('wareco') ? 2 : 1) : RULES.income[b.giant ? 'giant' : b.kind] + (b.trait === 'garden' ? 0.6 : 0);
  return base + levelOf(b, 'mine') * RULES.structures.mine.income * (b.trait === 'seam' ? 2 : 1) * (K('deepmine') ? 1.5 : 1)
    + levelOf(b, 'refinery') * RULES.structures.refinery.income * (b.trait === 'deut' ? 1.5 : 1) + levelOf(b, 'exchange') * RULES.structures.exchange.income;
}
/** Where a power's money comes from: [{ body, rate, how: 'capital' | 'freight' | 'blockaded' }] and the total reaching the treasury. */
export function incomeBreakdown(game, owner) {
  const lines = game.bodies.filter((b) => b.owner === owner).map((b) => ({ body: b.id, rate: incomeOf(b, game) * (skimming(game, b) ? 1 - AGENT.skim : 1), how: b.blockaded ? 'blockaded' : b.home ? 'capital' : 'freight' }));
  return { lines, total: lines.reduce((n, l) => n + (l.how === 'blockaded' ? 0 : l.rate), 0) * (game.eco[owner] || 1) };
}
export const homeOf = (game, owner) => game.homes[owner];
export const worldsOf = (game, owner) => game.bodies.filter((b) => b.owner === owner);
export const warshipsOf = (game, owner) => game.ships.filter((s) => s.owner === owner && !CLASSES[s.cls].civil);
export function fleetCap(game, owner) {
  const f = FACTIONS[game.factions[owner]];
  // Crews come from habitats: each level lets you field one more ship.
  return Math.min(RULES.capMax, RULES.capBase + (f.cap || 0) + worldsOf(game, owner).reduce((n, b) => n + levelOf(b, 'habitat') * (b.trait === 'garden' ? 2 : 1) * (knows(game, owner, 'arcology') ? 2 : 1), 0));
}
export const fleetSize = (game, owner) => warshipsOf(game, owner).length + game.bodies.reduce((k, b) => k + (b.owner === owner ? b.queue.length : 0), 0);
export const shipCost = (game, owner, cls) => Math.round((CLASSES[cls].cost * (FACTIONS[game.factions[owner]].cost || 1) * (knows(game, owner, 'modular') ? 0.85 : 1)) / 10) * 10;
export const shipTime = (game, owner, cls, b = null) => (CLASSES[cls].time * (FACTIONS[game.factions[owner]].time || 1)) / ((b && levelOf(b, 'yard') >= 2 ? 1.5 : 1) * buildSpeed(game, owner, b));

export function cantBuild(game, b, type) {
  const S = RULES.structures[type];
  if (!S) return 'Unknown';
  if (!S.where.includes(b.kind) && !(S.home && b.home)) return 'Not here';
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
  const t = S.time / buildSpeed(game, b.owner, b);
  b.structures.push({ type, level: 1, left: t, total: t });
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
  x.left = x.total = RULES.structures[x.type].time / buildSpeed(game, b.owner, b); x.next = true;
  return true;
}
export function cantOrderShip(game, b, cls) {
  const C = CLASSES[cls];
  if (!C || C.civil) return 'Unknown';
  if (!has(b, 'yard')) return 'Needs a yard';
  if (C.needs && !knows(game, b.owner, C.needs)) return `Needs ${techOption(C.needs).name}`;
  if (fleetSize(game, b.owner) >= fleetCap(game, b.owner)) return 'Fleet at its limit';
  if (game.credits[b.owner] < shipCost(game, b.owner, cls)) return 'Not enough credits';
  return null;
}
export function orderShip(game, b, cls) {
  if (cantOrderShip(game, b, cls)) return false;
  game.credits[b.owner] -= shipCost(game, b.owner, cls);
  const t = shipTime(game, b.owner, cls, b);
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

export function cantResearch(game, owner, line, key) {
  const T = TECH[line], tech = game.tech[owner];
  if (!T) return 'Unknown';
  if (tech.project) return 'Already researching';
  if (tech[line] >= T.tiers.length) return 'Complete';
  if (!T.tiers[tech[line]].some((o) => o.key === key)) return 'Not yet';
  if (game.credits[owner] < TECH_COST[tech[line]]) return 'Not enough credits';
  return null;
}
export function research(game, owner, line, key) {
  if (cantResearch(game, owner, line, key)) return false;
  const lv = game.tech[owner][line];
  game.credits[owner] -= TECH_COST[lv];
  game.tech[owner].project = { line, key, left: TECH_TIME[lv], total: TECH_TIME[lv] };
  return true;
}

// ---- Agents -------------------------------------------------------------------------
// An agent sits on a world that isn't yours. She shows you the place and what is in its
// sky; with the right research she can do more. Every second there is a chance she is caught.

export const agentCap = (game, owner) => (knows(game, owner, 'signals') ? 1 + game.tech[owner].intel : 0);
export const agentAt = (game, owner, b) => game.agents.find((a) => a.owner === owner && a.body === b.id) || null;
const agentIn = (game, owner, b) => { const a = agentAt(game, owner, b); return a && a.at <= game.time ? a : null; };
export function cantSendAgent(game, owner, b) {
  if (!knows(game, owner, 'signals')) return 'Needs Signals intercept';
  if (b.owner === owner) return 'Your own world';
  if (agentAt(game, owner, b)) return 'Already there';
  if (game.agents.filter((a) => a.owner === owner).length >= agentCap(game, owner)) return 'No agents free';
  if (game.credits[owner] < AGENT.cost) return 'Not enough credits';
  return null;
}
export function sendAgent(game, owner, b) {
  if (cantSendAgent(game, owner, b)) return false;
  game.credits[owner] -= AGENT.cost;
  game.agents.push({ owner, body: b.id, at: game.time + AGENT.travel, op: 'watch', cool: 0 });
  return true;
}
export function recallAgent(game, owner, b) {
  const n = game.agents.length;
  game.agents = game.agents.filter((a) => !(a.owner === owner && a.body === b.id));
  return game.agents.length < n;
}
/** Standing work: 'watch' (nothing more), 'steal' (needs Spy rings), 'incite' (needs Fifth column). */
export function setAgentOp(game, owner, b, op) {
  const a = agentIn(game, owner, b);
  if (!a || b.owner === NEUTRAL) return false;
  if (op === 'steal' && !knows(game, owner, 'rings')) return false;
  if (op === 'incite' && !knows(game, owner, 'fifth')) return false;
  if (!['watch', 'steal', 'incite'].includes(op)) return false;
  a.op = op;
  return true;
}
export function cantSabotage(game, owner, b, what) {
  const a = agentIn(game, owner, b);
  if (!a) return 'No agent in place';
  if (!knows(game, owner, 'sabot')) return 'Needs Saboteurs';
  if (a.cool > game.time) return 'Lying low';
  if (what === 'battery' ? b.bhp <= 0 : !b.queue.length) return 'Nothing to hit';
  if (game.credits[owner] < AGENT.opCost) return 'Not enough credits';
  return null;
}
/** One act of sabotage: silence the battery for a while, or set the yard back. It may cost the agent. */
export function sabotage(game, owner, b, what) {
  if (cantSabotage(game, owner, b, what)) return false;
  const a = agentIn(game, owner, b);
  game.credits[owner] -= AGENT.opCost;
  a.cool = game.time + 120;
  if (what === 'battery') { b.bhp = 0; b.bquiet = game.time + 90; } else b.queue[0].left += 60;
  note(game, { type: 'sabotage', owner: b.owner, by: owner, at: b.id, what });
  if (game.rand() < AGENT.opRisk * (knows(game, b.owner, 'counter') ? 2 : 1)) catchAgent(game, a, b);
  return true;
}
/** What an independent world asks to come over to you (with an agent there to arrange it). */
export const worldPrice = (game, b) => Math.round((300 + incomeOf(b, game) * 260 + (b.trait ? 250 : 0) + batteryMax(b) * 1.5) / 10) * 10;
export function cantBuyWorld(game, owner, b) {
  if (b.owner !== NEUTRAL) return 'Not independent';
  if (!agentIn(game, owner, b)) return 'No agent in place';
  if (game.ships.some((s) => s.at === b.id && s.owner !== owner && armed(s))) return 'Another fleet holds the orbit';
  if (game.credits[owner] < worldPrice(game, b)) return 'Not enough credits';
  return null;
}
export function buyWorld(game, owner, b) {
  if (cantBuyWorld(game, owner, b)) return false;
  game.credits[owner] -= worldPrice(game, b);
  const keep = b.bhp;
  capture(game, b, owner);
  b.bhp = keep; // (she came over willingly: the guns are intact)
  game.agents = game.agents.filter((x) => x.body !== b.id || x.owner !== owner);
  note(game, { type: 'bought', owner, at: b.id });
  return true;
}
function catchAgent(game, a, b) {
  game.agents = game.agents.filter((x) => x !== a);
  note(game, { type: 'agentCaught', owner: a.owner, by: b.owner, at: b.id });
}
function stepAgents(game, dt) {
  for (const a of game.agents.slice()) {
    const b = game.bodies[a.body];
    if (!game.alive[a.owner] || b.owner === a.owner) { game.agents = game.agents.filter((x) => x !== a); continue; }
    if (a.at > game.time) continue;
    if (b.owner === NEUTRAL) { a.op = 'watch'; continue; } // nobody is hunting her on an independent world
    const rate = AGENT.caught * (a.op === 'watch' ? 1 : 2) * (knows(game, b.owner, 'counter') ? 2 : 1) * (b.trait === 'listening' ? 3 : 1);
    if (game.rand() < rate * dt) catchAgent(game, a, b);
  }
}
const inciting = (game, owner, b) => { const a = agentIn(game, owner, b); return !!a && a.op === 'incite'; };
const skimming = (game, b) => game.agents.find((a) => a.body === b.id && a.op === 'steal' && a.at <= game.time && a.owner !== b.owner) || null;
export const rankOf = (s) => ((s.xp || 0) >= 40 ? 3 : (s.xp || 0) >= 18 ? 2 : (s.xp || 0) >= 6 ? 1 : 0);
function gainXp(game, s, n) {
  const was = rankOf(s);
  s.xp = (s.xp || 0) + n;
  if (rankOf(s) > was) note(game, { type: 'promoted', owner: s.owner, ship: s.id, rank: rankOf(s) });
}

// ---- Ships --------------------------------------------------------------------------

/** A class's numbers for one power, with its research applied. */
export function statsFor(game, owner, cls) {
  const C = CLASSES[cls], F = owner >= 0 ? FACTIONS[game.factions[owner]] : {}, K = (k) => knows(game, owner, k);
  const war = !C.civil && C.power > 0, small = cls === 'corvette' || cls === 'frigate';
  return {
    hull: Math.round(C.hull * (F.hull || 1) * (war && K('plate') ? 1.25 : 1) * (C.civil && K('bulk') ? 2 : 1)), armour: C.armour + (war ? F.armour || 0 : 0),
    accel: C.accel * (F.accel || 1) * (K('nozzles') ? 1.2 : 1) * (K('torch') ? 1.25 : 1) * (C.civil && K('bulk') ? 1.5 : 1), flash: K('flash') ? 1.4 : 1,
    cruise: K('cruise') ? 1.33 : 1, coldDark: K('coldjets'),
    dv: C.dv * (F.dv || 1) * (K('tanks') ? 1.35 : 1),
    size: C.size, sig: C.sig * (F.sig || 1) * (K('coldrun') ? 0.6 : 1),
    cold: RULES.cold * C.sensor * (K('passive') ? 1.4 : 1), ident: RULES.ident * C.sensor * (K('longwatch') ? 1.6 : 1),
    rails: C.rails.map((d) => d * (F.rail || 1)), railHit: K('guided') ? 1.25 : 1, railRange: RULES.railRange * (K('firecon') ? 1.25 : 1),
    pdc: C.pdc, flak: K('flak') ? 2 : 1, tubes: C.tubes, mag: Math.round(C.mag * (small && K('wolfpack') ? 1.5 : 1)), reload: small && K('wolfpack') ? 0.7 : 1,
    swarm: K('swarm'), jam: K('jammers'), power: C.power, stores: C.stores || 0, civil: !!C.civil,
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
  let cap = prof.cap * (o.profile === 'cruise' ? st.cruise || 1 : 1), brake = true, d0 = 0, skip = -2, tau = s.tau > 0 ? s.tau : 0;
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
      s.at = b.id; s.ph = Math.atan2(s.z - p.z, s.x - p.x);
      s.order = null; s.depart = undefined; s.burn = 0; s.tx = s.ty = s.tz = 0; s.phase = 'orbit'; s.arrived = true;
    }
  } else if (o && o.type === 'strike') {
    const p = posAt(game, game.bodies[o.body], t + h);
    const dp = Math.hypot(p.x - s.x, p.y - s.y, p.z - s.z);
    if (o.near === undefined || dp < o.near) o.near = dp;
    else if (dp > o.near + 25) { s.order = null; s.coast = false; }
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
export function dryRun(game, s0, order, { maxT = 2400, h = 1.5, every = 4, coast = 0 } = {}) {
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
    if (Math.hypot(p.x - here.x, p.z - here.z) + Math.hypot(p.x - there.x, p.z - there.z) > span * 1.9 + 60) continue;
    for (const side of [1, -1]) {
      const r = dryRun(game, lead, { type: 'orbit', body: bodyId, profile: 'cruise', via: b.id, side, amax: amaxOf('cruise') }, { maxT: 3000 });
      if (r.ok && (!best || r.dv < best.dv)) best = { key: 'sling', profile: 'cruise', via: b.id, side, time: r.time, dv: r.dv, ok: r.dv <= tank, reach: true, path: r.path };
    }
  }
  if (best && best.dv < out[1].dv * 0.93) out.push(best);
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
    eyes[b.owner].push({ x: p.x, y: p.y, z: p.z, cold: RULES.cold * worldSight(b, game), ident: RULES.ident * worldSight(b, game) * (b.trait === 'listening' ? 6 : 1), skip: b.id });
  }
  // An agent is a pair of eyes on the world she is on.
  for (const a of game.agents) {
    if (a.at > game.time) continue;
    const p = game.bp[a.body];
    eyes[a.owner].push({ x: p.x, y: p.y, z: p.z, cold: RULES.cold * RULES.worldSensor, ident: RULES.ident * RULES.worldSensor, skip: a.body });
  }
  const cipher = Array.from({ length: game.players }, (_, o) => knows(game, o, 'cipher'));
  for (const s of game.ships) {
    const hot = s.lit > game.time || (s.burn && !(s.st.coldDark && s.order && s.order.profile === 'dark'));
    const lit = hot;
    for (let o = 0; o < game.players; o++) {
      if (o === s.owner || (s.beacon && game.alive[o])) { s.seen[o] = 2; continue; } // (a beacon is known to all)
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
      if (hot && cipher[o] && !s.st.civil) lv = 2; // their signals are an open book
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
  const aim = target.ship != null ? shipById(game, target.ship) : null;
  const jam = !!aim && aim.st.jam; // jammed: some never find their lock
  s.torps -= k; s.tcd = game.time + RULES.torp.reload * (s.st.reload || 1); s.lit = game.time + 4;
  for (let i = 0; i < k; i++) {
    const a = (i / k) * Math.PI * 2;
    game.torps.push({
      id: game.nextId++, owner: s.owner, x: s.x, y: s.y, z: s.z,
      vx: s.vx + Math.cos(a) * 0.12, vy: s.vy + (i % 2 ? 0.06 : -0.06), vz: s.vz + Math.sin(a) * 0.12,
      ship: target.ship ?? null, body: target.body ?? null, dv: jam && game.rand() < 0.3 ? 0 : RULES.torp.dv, born: game.time, swarm: s.st.swarm, from: s.id, burn: 1,
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
      if (T) { hurt(game, T, dmg, m.owner); const sh = shipById(game, m.from); if (sh && sh.owner === m.owner) gainXp(game, sh, 2.5); }
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
  let p = 0.75 * (1 - (0.6 * d) / range) * T.st.size * hitMul * (1 - 0.06 * rankOf(T)) / (1 + lat * 6);
  if (T.evade && !crippled(T)) p *= 0.5;
  if (evade) p *= 0.7;
  const hit = game.rand() < clamp(p, 0.03, 0.95);
  fx(game, { type: 'rail', x: from.x, y: from.y, z: from.z, tx: T.x, ty: T.y, tz: T.z, hit, owner });
  if (hit) hurt(game, T, dmg * clamp(0.5 + (Math.max(0, -rate) / 1.6) ** 2, 0.5, 5), owner);
  return hit;
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
        if (game.rand() < 1 - Math.exp(-use * st.flak * (1.7 / (1 + rel / 6)) * (m.swarm ? 0.5 : 1) * dt)) {
          m.dead = true;
          fx(game, { type: 'pdcKill', x: m.x, y: m.y, z: m.z, fx: s.x, fy: s.y, fz: s.z, owner: s.owner });
        } else if (game.rand() < 0.5) fx(game, { type: 'pdc', x: s.x, y: s.y, z: s.z, tx: m.x, ty: m.y, tz: m.z, owner: s.owner });
        s.lit = t + 2;
      }
      if (guns > 0 && s.fireFree && weaponsUp) {
        for (const T of ships) {
          if (T.dead || T.derelict || T.owner === s.owner || !T.seen[s.owner]) continue;
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
      if (T.dead || T.derelict || T.owner === s.owner || !T.seen[s.owner]) continue;
      if (T.st.civil && !(s.order && s.order.type === 'attack' && s.order.ship === T.id && s.order.mode === 'pass')) continue;
      let d = Math.hypot(T.x - s.x, T.y - s.y, T.z - s.z);
      if (s.at !== null && T.at === s.at) d = Math.min(d, st.railRange * 0.8); // ships sharing an orbit can always engage
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
      let d = Math.hypot(best.x - s.x, best.y - s.y, best.z - s.z);
      if (s.at !== null && best.at === s.at) d = Math.min(d, st.railRange * 0.8);
      if (d < st.railRange) {
        for (let i = 0; i < st.rails.length; i++) {
          if (s.cd[i] > t || best.dead) continue;
          s.cd[i] = t + RULES.railCool * (0.9 + game.rand() * 0.2);
          s.lit = t + 3;
          if (railShot(game, s, { x: s.vx, y: s.vy, z: s.vz }, best, st.rails[i], st.railHit * (1 + 0.08 * rankOf(s)) * (s.out.sensors > 0 ? 0.5 : 1), st.railRange, s.owner, s.evade)) gainXp(game, s, best.st.civil ? 0.3 : 1);
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
      if (game.rand() < 1 - Math.exp(-(1.7 / (1 + rel / 6)) * (m.swarm ? 0.5 : 1) * dt)) { m.dead = true; fx(game, { type: 'pdcKill', x: m.x, y: m.y, z: m.z, fx: p.x, fy: p.y, fz: p.z, owner: b.owner }); }
    }
    b.bcd ||= [0, 0];
    let best = null, bestD = 1e9;
    for (const T of ships) {
      if (T.dead || T.derelict || !batteryHates(game, b, T) || T.st.civil) continue;
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
          if (b.trait === 'hulk') s.xp = 6; // the hulk's old hands
          tally(game, o, 'built');
          note(game, { type: 'launched', owner: o, ship: s.id, at: b.id });
        }
      }
      // Income: a capital banks it, everything else waits for a freighter.
      let inc = incomeOf(b, game) * dt * (enemyHere ? 0 : 1);
      const thief = skimming(game, b);
      if (thief) { game.credits[thief.owner] += inc * AGENT.skim; inc *= 1 - AGENT.skim; }
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
      const fast = b.home || has(b, 'refinery') || has(b, 'depot') || b.trait === 'deut' ? 3 : 1, yard = has(b, 'yard');
      if (!enemyHere) {
        for (const s of game.ships) {
          if (s.at !== b.id || s.owner !== o) continue;
          resupply(game, s, dt, RULES.refuel * fast, RULES.repair * (yard ? 1 : 0.33), yard || b.home ? 1 / RULES.rearm : 0, yard);
        }
      }
    }
    // Yielding: one side alone in orbit, the battery silent, nobody defending.
    if (occ !== NEUTRAL && !contested && !defended && b.bhp <= 0) {
      if (b.yo !== occ) { b.yo = occ; b.yt = 0; }
      b.yt += dt * (inciting(game, occ, b) ? 2 : 1);
      if (b.yt >= yieldTime(b)) capture(game, b, occ);
    } else if (b.yt > 0) b.yt = Math.max(0, b.yt - dt * 0.5);
  }
}
/** Fuel, repairs and torpedoes for a ship in orbit of a friendly world. */
function resupply(game, s, dt, fuel, hull, torps, deep) {
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
      if (s.owner < 0) s.dead = true; // an independent convoy reaches port
      else if (s.st.civil && b.owner === s.owner) {
        game.credits[s.owner] += s.cargo * game.eco[s.owner];
        game.stats[s.owner].earned += s.cargo; tally(game, s.owner, 'hauled');
        note(game, { type: 'freight', owner: s.owner, at: b.id, n: Math.round(s.cargo) });
        freeHauler(game, s); s.dead = true;
      } else if (!s.st.civil) note(game, { type: 'arrived', owner: s.owner, ship: s.id, at: b.id });
    }
    if (!s.order && !s.warned && s.dv < s.st.dv * 0.2 && !s.st.civil) { s.warned = true; note(game, { type: 'fuel', owner: s.owner, ship: s.id }); }
    if (s.dv > s.st.dv * 0.4) s.warned = false;
  }
  // No two ships in the same place: ships in one orbit keep their distance round it, ships in flight ease apart.
  for (let i = 0; i < game.ships.length; i++) {
    const a = game.ships[i];
    for (let j = i + 1; j < game.ships.length; j++) {
      const b = game.ships[j];
      if (a.at !== null && a.at === b.at) {
        const gap = 1.6 / parkRadius(game.bodies[a.at]);
        let d = ((b.ph - a.ph) % (Math.PI * 2) + Math.PI * 3) % (Math.PI * 2) - Math.PI;
        if (Math.abs(d) < gap) { const k = (gap - Math.abs(d)) * 0.5 * Math.min(1, dt * 2) * (d >= 0 ? 1 : -1); a.ph -= k; b.ph += k; }
      } else if (a.at === null && b.at === null) {
        const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z, d = Math.hypot(dx, dy, dz);
        if (d < 1.2 && Math.hypot(b.vx - a.vx, b.vy - a.vy, b.vz - a.vz) < 0.6) {
          const k = ((1.2 - d) * 0.5 * Math.min(1, dt * 1.5)) / (d || 1);
          const ux = d > 1e-3 ? dx : (a.id % 2 ? 1 : -1), uz = d > 1e-3 ? dz : 0.5;
          a.x -= ux * k; a.y -= dy * k; a.z -= uz * k; b.x += ux * k; b.y += dy * k; b.z += uz * k;
        }
      }
    }
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
        if (s.derelict) { s.derelict = false; s.beacon = false; s.xp = Math.max(s.xp || 0, 18); s.name = shipName(game, by); }
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
    p.left -= dt * researchSpeed(game, o);
    if (p.left <= 0) {
      game.tech[o][p.line] += 1; game.tech[o].picks[p.key] = true; game.tech[o].project = null;
      refreshStats(game, o);
      note(game, { type: 'research', owner: o, line: p.line, key: p.key });
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
  stepAgents(game, DT);
  stepEvents(game);
}

// ---- Things that turn up ---------------------------------------------------------------
// Every several minutes: a derelict warship adrift (board her and she is yours, with a
// veteran's rank), or an independent convoy crossing the system (board it for the cargo).
// Everyone is told, and everyone can see them.
function stepEvents(game) {
  if (game.noEvents) return;
  if (game.evT === undefined) game.evT = 260 + game.rand() * 120;
  if (game.time < game.evT) return;
  game.evT = game.time + 420 + game.rand() * 200;
  game.evN = (game.evN || 0) + 1;
  const rs = game.planets.map((p) => p.r), lo = Math.min(...rs), hi = Math.max(...rs);
  if (game.evN % 2 && game.ships.filter((s) => s.derelict).length < 2) {
    const r = lo + (hi - lo) * (0.15 + game.rand() * 0.6), a = game.rand() * Math.PI * 2, v = Math.sqrt(GM_SUN / r);
    const s = spawnShip(game, NEUTRAL, game.rand() < 0.25 ? 'battleship' : game.rand() < 0.5 ? 'escort' : 'frigate', null);
    Object.assign(s, { x: Math.cos(a) * r, y: 0, z: Math.sin(a) * r, vx: -Math.sin(a) * v, vy: 0, vz: Math.cos(a) * v, derelict: true, beacon: true, torps: 0 });
    s.hull = s.st.hull * 0.5; s.dv = s.st.dv * 0.3; s.out.reactor = 1e9;
    note(game, { type: 'event', kind: 'derelict', ship: s.id });
  } else {
    const ports = game.bodies.filter((b) => b.owner === NEUTRAL && b.parent === null);
    if (ports.length < 2) return;
    const from = ports[Math.floor(game.rand() * ports.length)];
    const to = ports.filter((b) => b !== from).sort((x, y) => Math.abs(y.r - from.r) - Math.abs(x.r - from.r))[0];
    const f = spawnShip(game, NEUTRAL, 'freighter', from, { cargo: 300 + Math.round(game.rand() * 20) * 10, src: null, beacon: true });
    f.name = 'Convoy';
    f.order = { type: 'orbit', body: to.id, profile: 'cruise', amax: f.st.accel };
    f.depart = from.id; f.at = null;
    note(game, { type: 'event', kind: 'convoy', ship: f.id });
  }
}

// ---- Multiplayer: what a guest is sent ------------------------------------------------------

/** The state one player may see, as plain JSON. */
export function snapshot(game, owner) {
  const r2 = (v) => Math.round(v * 100) / 100;
  return {
    time: game.time, over: game.over, credits: game.credits[owner], tech: game.tech[owner], alive: game.alive, stats: game.stats, agents: game.agents.filter((a) => a.owner === owner),
    bodies: game.bodies.map((b) => ({ owner: b.owner, structures: b.structures, queue: b.owner === owner ? b.queue : [], stock: b.owner === owner ? r2(b.stock) : 0, bhp: r2(b.bhp), yt: r2(b.yt), yo: b.yo, home: !!b.home, blockaded: !!b.blockaded })),
    ships: game.ships.filter((s) => s.seen[owner]).map((s) => {
      const mine = s.owner === owner, id2 = s.seen[owner] === 2;
      return {
        id: s.id, owner: s.owner, cls: id2 ? s.cls : null, name: id2 ? s.name : null, x: r2(s.x), y: r2(s.y), z: r2(s.z), vx: r2(s.vx), vy: r2(s.vy), vz: r2(s.vz),
        tx: s.tx, ty: s.ty, tz: s.tz, burn: s.burn, at: s.at, ph: s.ph, hull: id2 ? r2(s.hull) : 0, derelict: !!s.derelict, cargo: s.owner < 0 ? s.cargo : undefined, xp: id2 ? s.xp || 0 : 0, dest: id2 && !mine && s.order && s.order.body != null && knows(game, owner, 'signals') ? s.order.body : null, out: id2 ? s.out : null, seen: s.seen[owner], phase: s.phase,
        ...(mine ? { cargo: s.cargo, src: s.src, dv: r2(s.dv), torps: s.torps, stores: s.stores, order: s.order, grp: s.grp, torpsFree: s.torpsFree, fireFree: s.fireFree, evade: s.evade, board: s.board, tau: s.tau } : {}),
      };
    }),
    torps: game.torps.map((m) => ({ id: m.id, owner: m.owner, x: r2(m.x), y: r2(m.y), z: r2(m.z), vx: r2(m.vx), vy: r2(m.vy), vz: r2(m.vz), burn: m.burn })),
    events: game.events.filter((e) => e.t > game.time - 1.5), fx: game.fx.slice(),
  };
}
/** Guest side: fold a snapshot into the local game, keeping body objects in place. */
export function applySnapshot(game, snap, owner) {
  game.time = snap.time; game.over = snap.over; game.credits[owner] = snap.credits; game.tech[owner] = snap.tech; game.agents = snap.agents || []; game.alive = snap.alive; game.stats = snap.stats;
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
