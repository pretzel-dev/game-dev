// Pure simulation of one solar system: no DOM, no Three.js, so it runs headless.
//
// Bodies move on circular orbits (moons around planets). Ships fly
// brachistochrone transfers: burn toward where the target will be, flip at the
// midpoint, burn to slow down. A few ships per side; every ship counts.

export const NEUTRAL = -1;
export const PLAYER = 0;

export const RULES = {
  accel: 0.03, // ship acceleration, world units / s^2
  outerPeriod: 2400, // seconds for the outermost planet to orbit the sun
  outerRadius: 200,
  startShips: 4,
  startCredits: 400,
  // Credits per second from each world you hold, plus each finished mine.
  income: { planet: 1, moon: 0.5, station: 0.6, asteroid: 0.3 },
  homeIncome: 0.4, // extra for a homeworld, so it's worth defending (and taking)
  mineIncome: 1.5,
  ship: { cost: 150, time: 45 }, // each shipyard builds one at a time
  structures: {
    shipyard: { name: 'Shipyard', cost: 400, time: 90 },
    mine: { name: 'Mine', cost: 200, time: 45, only: ['asteroid', 'moon'], maxLevel: 3 },
    // Gas giants skim their atmospheres for fusion fuel; homeworlds (the only
    // living worlds) can float bonds on the system's exchanges.
    skimmer: { name: 'Gas skimmer', cost: 350, time: 70, where: 'giant', maxLevel: 3, income: 2 },
    exchange: { name: 'Orbital exchange', cost: 450, time: 80, where: 'home', maxLevel: 2, income: 2.5 },
    defence: { name: 'Guns', cost: 250, time: 50, maxLevel: 3 },
    lab: { name: 'Research station', cost: 300, time: 60, maxLevel: 3 },
  },
  baseGuns: 1, // guns any held world has
  gunsPerDefence: 2,
  coverShare: 0.5, // a planet's guns also fire on attackers at its moons and stations
  fire: 0.12, // ships destroyed per second, per firing ship (or gun)
  gunRegen: 0.02, // guns rebuilt per second after a fight
  flipTime: 4, // seconds spent turning around at the midpoint
  demolishFee: 0.25, // share of a structure's cost to tear it down
  scrapTime: 20, // seconds to tear one down (cancelled if the world is taken)
  // Unmanned probe: fast, single use; a flyby reveals a world for a while.
  probe: { cost: 80, speed: 4, scan: 150 },
  cancelRefund: 0.8, // share of a ship's cost returned when cancelled
  labSpeed: 0.5, // research speed added per research-station level
};

// ---- Research -----------------------------------------------------------------
// One project at a time per empire, paid in credits; research stations speed
// it up. The AI researches the same tree under the same rules.

// Each level has its own name and story; the effects stay simple and exact.
export const TECH = {
  drives: {
    name: 'Drives', cost: [300, 600, 1000], time: [90, 150, 240],
    levels: ['Magnetic nozzle', 'Pellet-fusion torch', 'Catalysed fusion drive'],
    text: ['Tighter plasma, +15% thrust', 'Pulsed fusion, +30% thrust', 'Hotter burn, +45% thrust'],
  },
  sensors: {
    name: 'Sensors', cost: [250, 500, 900], time: [80, 140, 220],
    levels: ['Long-baseline telescopes', 'Deep-space listening posts', 'Interferometer net'],
    text: ['Spot drive flares further out', 'Hear the system’s far side', 'See across the whole system'],
  },
  intel: {
    name: 'Intel', cost: [300, 550, 850], time: [90, 150, 210],
    levels: ['Signals intercept', 'Agents in the yards', 'Broken fleet cipher'],
    text: ['Read enemy fleet sizes', 'Learn enemy routes and landing points', 'Know arrival times; get warnings'],
  },
  weapons: {
    name: 'Weapons', cost: [400, 800], time: [120, 200],
    levels: ['Coilgun batteries', 'Spinal railguns'],
    text: ['Faster slugs, +15% firepower', 'Hull-length rails, +30% firepower'],
  },
  armour: {
    name: 'Armour', cost: [400, 800], time: [120, 200],
    levels: ['Whipple shielding', 'Point-defence drone swarm'],
    text: ['Layered plate, 12% less damage', 'Drones swat rounds, 24% less damage'],
  },
  industry: {
    name: 'Industry', cost: [350, 700], time: [100, 180],
    levels: ['Orbital fabricators', 'Self-replicating tooling'],
    text: ['Build 12% faster, mines +15%', 'Build 24% faster, mines +30%'],
  },
};
export const SENSOR_RANGE = [70, 110, 160, 240];
const techLevel = (game, owner, key) => (owner === NEUTRAL || !game.tech ? 0 : game.tech[owner][key]);
/** Adds to a player's running total (no-op for neutrals). */
export function tally(game, owner, key, n = 1) {
  if (owner === NEUTRAL || !game.stats) return;
  game.stats.totals[owner][key] += n;
}
/** A snapshot of every player: ships (docked and in flight), worlds, income, credits. */
function sample(game) {
  game.stats.series.push({
    t: game.time,
    p: game.credits.map((c, o) => ({
      ships: game.bodies.reduce((n, b) => n + (b.owner === o ? b.ships : 0), 0) + game.fleets.reduce((n, f) => n + (f.owner === o ? f.n : 0), 0),
      worlds: game.bodies.filter((b) => b.owner === o).length,
      income: income(game, o),
      credits: c,
    })),
  });
}

export const accelOf = (game, owner) => RULES.accel * (1 + 0.15 * techLevel(game, owner, 'drives'));
const firepowerOf = (game, owner) => 1 + 0.15 * techLevel(game, owner, 'weapons');
const damageTaken = (game, owner) => 1 - 0.12 * techLevel(game, owner, 'armour');
const buildSpeed = (game, owner) => 1 + 0.12 * techLevel(game, owner, 'industry');

export function nextTech(game, owner, key) {
  const lvl = game.tech[owner][key];
  const d = TECH[key];
  return lvl < d.cost.length ? { level: lvl + 1, cost: d.cost[lvl], time: d.time[lvl], text: d.text[lvl], title: d.levels[lvl] } : null;
}
export function researchSpeed(game, owner) {
  const labs = game.bodies.reduce((n, b) => n + (b.owner === owner ? count(b, 'lab') : 0), 0);
  return 1 + RULES.labSpeed * labs;
}
export function cantResearch(game, owner, key) {
  const next = nextTech(game, owner, key);
  if (!next) return 'complete';
  if (game.tech[owner].project) return 'already researching';
  if (game.credits[owner] < next.cost) return 'not enough credits';
  return null;
}
export function research(game, owner, key) {
  if (cantResearch(game, owner, key)) return false;
  const next = nextTech(game, owner, key);
  game.credits[owner] -= next.cost;
  tally(game, owner, 'spent', next.cost);
  game.tech[owner].project = { key, left: next.time, total: next.time };
  return true;
}

/**
 * What an owner can see: within sensor range of its worlds, and a little
 * around its fleets. Beyond that, worlds hide their ships and structures and
 * enemy fleets are invisible. Intel sets how much a visible enemy fleet shows.
 */
export function visibility(game, owner) {
  const range = SENSOR_RANGE[techLevel(game, owner, 'sensors')];
  const eyes = [];
  for (const b of game.bodies) if (b.owner === owner) eyes.push([posAt(game, b, game.time), range]);
  for (const f of game.fleets) if (f.owner === owner) eyes.push([fleetState(f, game.time), 20]);
  for (const b of game.bodies) if (b.sieges.some((g) => g.owner === owner)) eyes.push([posAt(game, b, game.time), 20]);
  for (const x of game.scans || []) if (x.owner === owner && x.until > game.time) eyes.push([posAt(game, game.bodies[x.body], game.time), 14]);
  const sees = (p) => eyes.some(([e, r]) => dist(e, p) <= r);
  const bodies = new Set(game.bodies.filter((b) => b.owner === owner || sees(posAt(game, b, game.time))).map((b) => b.id));
  return { owner, sees, bodies, intel: techLevel(game, owner, 'intel') };
}

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

// Big name banks so every game feels different. All invented or borrowed
// from myth, weather and old ships of the line; nothing from The Expanse.
const PLANET_NAMES = ['Aurelion', 'Seraphine', 'Caelestis', 'Vespera', 'Solenne', 'Astraeon', 'Halcyra', 'Lumeris', 'Orionde', 'Celestine',
  'Empyra', 'Noctara', 'Stellarin', 'Zenitha', 'Aethelis', 'Borealis Major', 'Cygnara', 'Draconis', 'Elysion', 'Fulgora', 'Galathea', 'Heliara',
  'Ixora', 'Lyrae', 'Meridia', 'Nebulon', 'Ophira', 'Polaria', 'Quasara', 'Radiantis', 'Sidera', 'Thessaly Prime', 'Uranara', 'Valenor',
  'Wynthera', 'Xandria', 'Ysolde', 'Zephyra', 'Aquilon', 'Brightholm', 'Corvessa', 'Dawnmere', 'Equinoxa', 'Firmament', 'Gloriana', 'Hyperion Tor',
  'Irisca', 'Kyrios', 'Luminara', 'Magellane', 'Nimbara', 'Ouranos Minor', 'Perigee', 'Radiance', 'Solstira', 'Tethra', 'Umbrielle', 'Vireon',
  'Aldebara', 'Betelline', 'Capellan', 'Deneba', 'Etamin', 'Fomalhara', 'Hadara', 'Izarine', 'Kochaba', 'Mirzana', 'Nashira', 'Pollara',
  'Rigelle', 'Sadalmel', 'Talitha', 'Vegara', 'Alcyone Deep', 'Canopea', 'Mimosa', 'Aludra', 'Suhail', 'Menkara'];
const MOON_NAMES = ['Selene Minor', 'Lucen', 'Nyxa', 'Astra', 'Eos', 'Hesperel', 'Stilbe', 'Aglaia', 'Phaenna', 'Asteria', 'Chione', 'Lampetia',
  'Aether', 'Hemera', 'Orphne', 'Aura', 'Pleia', 'Maia Minor', 'Electra Minor', 'Merope Minor', 'Taygete Minor', 'Sterope', 'Celaeno Minor',
  'Alcyon', 'Aphelia', 'Periel', 'Syzyn', 'Nadira', 'Zenia', 'Umbra', 'Penumbra', 'Crescen', 'Gibbous', 'Waxen', 'Occulta', 'Transita',
  'Libra Minor', 'Albedo', 'Lumen', 'Nimbus', 'Corona Minor', 'Halo', 'Parhelia', 'Glimmer', 'Starling', 'Morrowlight', 'Duskmere', 'Emberlight',
  'Frostlight', 'Glowworm', 'Ashlight', 'Moth', 'Lantern', 'Candela', 'Lux', 'Ignis', 'Scintilla', 'Stella Parva', 'Vela Minor', 'Nova Parva',
  'Pulsa', 'Quark', 'Photon', 'Zodia', 'Ecliptica'];
const STATION_NAMES = ['Ring One', 'Anchor', 'Meridian', 'Longreach', 'Holdfast', 'Keystone', 'Lantern', 'Tollgate', 'Crossways', 'Beacon Hill',
  'Harbourline', 'Windlass', 'Capstan', 'Stillwater', 'Gantry Nine', 'Fairhaven', 'Moorings', 'Pinwheel', 'Carrick Yard', 'Halfway House',
  'Sentinel', 'Spindle', 'Drydock Four', 'Tether', 'Outlook', 'Commonwealth', 'Linchpin', 'Caravel', 'Weigh Station', 'Portcullis'];
const ROCK_NAMES = ['Hollow', 'Gravel', 'Anvil', 'Cairn', 'Dolmen', 'Flinders', 'Grist', 'Hearth', 'Kiln', 'Loam', 'Menhir', 'Nugget', 'Quarry',
  'Rubble', 'Slag', 'Tor', 'Whetstone', 'Boulder', 'Clinker', 'Dregs', 'Ingot', 'Lump', 'Pumice', 'Scoria', 'Talus', 'Tuff', 'Cobalt', 'Nickel Jack',
  'Old Iron', 'Spall', 'Brickbat', 'Crag', 'Scree', 'Knapp', 'Hardpan'];
// Task forces: a name per launch, so fleets become characters.
export const FLEET_NAMES = ['Resolute', 'Tenacity', 'Wayfarer', 'Undaunted', 'Nightingale', 'Clemency', 'Forbearance', 'Hardihood', 'Persistence',
  'Sparrowhawk', 'Temerity', 'Valiance', 'Wanderlust', 'Adamant', 'Bellicose', 'Candour', 'Diligence', 'Endeavour', 'Fortitude', 'Gallantry',
  'Harbinger', 'Impetus', 'Jubilee', 'Kittiwake', 'Longbow', 'Mistral', 'Nonesuch', 'Obstinate', 'Paladin', 'Quicksilver', 'Rapier', 'Sirocco',
  'Tempest', 'Unbowed', 'Vigilant', 'Warspite', 'Xiphias', 'Yeoman', 'Zealous', 'Albatross', 'Brigantine', 'Corsair', 'Dauntless', 'Equinox',
  'Firebrand', 'Grenadier', 'Halberd', 'Inflexible', 'Javelin', 'Kingfisher', 'Lionheart', 'Mariner', 'Nemesis', 'Onslaught', 'Peregrine',
  'Quarterstaff', 'Relentless', 'Stalwart', 'Thunderer', 'Unicorn', 'Vanguard', 'Wolfhound', 'Arbalest', 'Bulwark', 'Cutlass', 'Defiance',
  'Ember Tide', 'Falconer', 'Goshawk', 'Hotspur', 'Invictus', 'Jackdaw', 'Kraken', 'Lodestone', 'Monsoon', 'Northwind', 'Outrider', 'Pathfinder',
  'Quarrel', 'Redoubt', 'Scimitar', 'Trident', 'Upholder', 'Vortex', 'Whirlwind', 'Asp', 'Basilisk', 'Cockatrice', 'Dragonet', 'Estoc', 'Fulmar',
  'Glaive', 'Hurricane', 'Ironside', 'Jaeger', 'Kestrel Wing', 'Lance', 'Magpie', 'Narwhal', 'Osprey', 'Petrel', 'Raven', 'Shrike', 'Tern',
  'Umbra', 'Viper', 'Wyvern Wing', 'Auk', 'Bittern', 'Curlew', 'Dunlin', 'Egret', 'Fieldfare', 'Gannet', 'Heron', 'Ibis', 'Jay', 'Kite',
  'Lapwing', 'Merlin', 'Nuthatch', 'Oriole', 'Plover', 'Redshank', 'Skua', 'Tanager', 'Veery', 'Whimbrel', 'Stoic', 'Candle', 'Hearthguard'];
export const VET_BONUS = 0.08; // firepower per veterancy level (max 3)
/**
 * Veterancy is experience. Levels need more each time: 1 at 1 XP, 2 at 2.5,
 * elite at 4.5. Only whole levels count in battle.
 */
export const VET_STEPS = [1, 2.5, 4.5];
export const vetLevel = (v) => VET_STEPS.filter((x) => (v || 0) >= x).length;
/**
 * Experience for surviving a battle on the winning side:
 * - a little just for coming through it (0.15),
 * - more for the damage dealt, relative to your own size (up to 0.35),
 * - more again for the odds you faced (even fight 0.3, long odds up to ~0.75).
 * An even fight is ~0.7 XP, a walkover ~0.2: a level takes a couple of real
 * fights, elite takes half a dozen.
 */
const winXP = (foe, own, kills) => {
  const odds = Math.min(2, Math.max(0, foe / Math.max(own, 0.5)));
  return Math.min(4.5, 0.15 + 0.35 * Math.min(1, kills / Math.max(own, 1)) + 0.3 * odds ** 1.3);
};

/** Something the player might want to hear about; the UI drains these. */
function note(game, e) {
  if (!game.events) return;
  game.events.push({ t: game.time, ...e });
  if (game.events.length > 60) game.events.splice(0, game.events.length - 60);
}
function fleetName(game) {
  const n = FLEET_NAMES[(game.nameSeed + game.nextId * 7919) % FLEET_NAMES.length];
  const used = game.fleets.some((f) => f.name === n);
  return used ? `${n} ${['II', 'III', 'IV', 'V'][game.nextId % 4]}` : n;
}
const mix = (vA, nA, vB, nB) => (nA + nB > 0 ? (vA * nA + vB * nB) / (nA + nB) : 0);

/** Kepler: period grows with radius^1.5. */
const periodAt = (r) => RULES.outerPeriod * (r / RULES.outerRadius) ** 1.5;

export function createGame({ seed = Date.now(), opponents = 1, mp = false } = {}) {
  const rand = rng(seed);
  const pick = (list, used) => {
    const free = list.filter((n) => !used.has(n));
    const n = free[Math.floor(rand() * free.length)] ?? `${list[0]} ${used.size}`;
    used.add(n);
    return n;
  };
  const names = new Set();
  const bodies = [];
  const add = (b) => {
    b.id = bodies.length;
    b.owner = NEUTRAL;
    b.ships = 0;
    b.build = 0; // progress on the ship being built (0..1)
    b.queue = 0; // ships ordered and paid for, waiting to be built
    b.structures = []; // { type, level, left, next? } (left > 0 while building or upgrading)
    b.guns = b.kind === 'planet' ? 2 : 1 + Math.floor(rand() * 2); // neutral defences
    b.sieges = [];
    bodies.push(b);
    return b;
  };

  // Plan each planet's family first (its moons and any station), so orbits can
  // be spaced to give every family room: neighbours never come close.
  const specs = [];
  // Home planets are picked up front from the middle orbits: each is a plain
  // rocky world with exactly one companion (a moon or a station).
  const players = opponents + 1;
  const homeIdx = [1, 2, 3, 4].sort(() => rand() - 0.5).slice(0, players);
  for (let i = 0; i < 6; i++) {
    const giant = !homeIdx.includes(i) && i >= 3 && rand() < 0.7;
    const size = giant ? 3.2 + rand() * 1.2 : 1.6 + rand() * 1.1;
    const count = i === 0 ? 0 : homeIdx.includes(i) ? 1 : giant ? 1 + Math.floor(rand() * 3) : Math.floor(rand() * 2);
    const moons = [];
    for (let m = 0; m < count; m++) {
      moons.push({ r: size * 3.4 + 6 + m * 7 + rand() * 0.8, size: 0.5 + rand() * 0.5, period: 300 + m * 150 + rand() * 120 });
    }
    specs.push({ giant, size, moons, station: false });
  }
  const hostIdx = [1, 2, 3, 4, 5].sort(() => rand() - 0.5).slice(0, 2);
  for (const i of hostIdx) specs[i].station = true;
  // A home's one companion is its station if it has one, otherwise its moon.
  for (const i of homeIdx) if (specs[i].station) specs[i].moons = [];
  for (const sp of specs) {
    sp.reach = Math.max(sp.size * 1.6, sp.station ? sp.size * 1.5 + 1 : 0, ...sp.moons.map((m) => m.r + m.size));
  }

  // Orbits outward from the sun, each at least both families' reach plus a gap
  // apart; the asteroid belt gets its own lane after the fourth planet.
  const GAP = 16;
  let beltR = 0;
  let prev = null;
  for (const [i, sp] of specs.entries()) {
    if (!prev) sp.r = 30;
    else sp.r = prev.r + prev.reach + sp.reach + GAP + rand() * 10;
    if (i === 4) {
      beltR = prev.r + prev.reach + GAP;
      sp.r = beltR + 6 + GAP + sp.reach + rand() * 10;
    }
    prev = sp;
  }

  for (const sp of specs) {
    const planet = add({
      kind: 'planet',
      name: pick(PLANET_NAMES, names),
      parent: null,
      r: sp.r,
      period: periodAt(sp.r),
      phase: rand() * Math.PI * 2,
      incl: (rand() - 0.5) * 0.06,
      size: sp.size,
      giant: sp.giant,
      hue: rand(),
    });
    for (const m of sp.moons) {
      add({
        kind: 'moon', name: pick(MOON_NAMES, names), parent: planet.id, r: m.r, period: m.period,
        phase: rand() * Math.PI * 2, incl: (rand() - 0.5) * 0.3, size: m.size, hue: rand(),
      });
    }
    if (sp.station) {
      add({
        kind: 'station', name: pick(STATION_NAMES, names), parent: planet.id, r: sp.size * 1.45,
        period: 200 + rand() * 60, phase: rand() * Math.PI * 2, incl: 0.2, size: 0.45, hue: 0,
      });
    }
  }
  // The asteroid belt, in its own lane.
  for (let k = 0; k < 4; k++) {
    const r = beltR + rand() * 6;
    add({
      kind: 'asteroid', name: pick(ROCK_NAMES, names), parent: null, r, period: periodAt(r),
      phase: (k / 4) * Math.PI * 2 + rand() * 0.8, incl: (rand() - 0.5) * 0.1, size: 0.5 + rand() * 0.4, hue: rand(),
    });
  }

  // Homes: planets in the middle orbits, spread around the sun as far apart as possible now.
  const game = { mp, bodies, fleets: [], players, time: 0, winner: null, nextId: 1, events: [], nameSeed: Math.floor(rand() * 100000) };
  // Homes start evenly spaced around the sun: opposite sides for two
  // players, a third of the way round each for three.
  const planets = bodies.filter((b) => b.kind === 'planet');
  const homes = homeIdx.map((i) => planets[i]);
  const base = rand() * Math.PI * 2;
  homes.forEach((h, k) => { h.phase = base + (k * Math.PI * 2) / players; });
  // Stations are shipyards; independents keep theirs until someone takes them.
  for (const b of bodies) if (b.kind === 'station') b.structures.push({ type: 'shipyard', level: 1, left: 0 });
  homes.forEach((h, owner) => {
    h.owner = owner;
    h.ships = RULES.startShips;
    h.home = true;
    h.structures.push({ type: 'shipyard', level: 1, left: 0 }, { type: 'defence', level: 1, left: 0 });
    h.guns = maxGuns(h);
  });
  game.credits = Array.from({ length: game.players }, () => RULES.startCredits);
  // Per-player totals and a time series, for the end-of-game report.
  game.stats = {
    totals: Array.from({ length: game.players }, () => ({ built: 0, lost: 0, killed: 0, captured: 0, worldsLost: 0, earned: 0, spent: 0, research: 0 })),
    series: [],
  };
  game.tech = Array.from({ length: game.players }, () => ({ drives: 0, sensors: 0, intel: 0, weapons: 0, armour: 0, industry: 0, project: null }));
  return game;
}

// ---- Economy ----------------------------------------------------------------

/** Build slots grow with the size of the world. */
export function slotsOf(b) {
  if (b.kind === 'station') return 2;
  if (b.kind === 'asteroid') return 1;
  if (b.kind === 'moon') return b.size > 0.8 ? 2 : 1;
  return b.giant ? 4 : b.size > 2.2 ? 3 : 2;
}
/** A structure works once built; while upgrading it keeps working at its old level. */
const working = (x) => !x.scrap && (x.left <= 0 || x.next);
export const has = (b, type) => b.structures.some((x) => x.type === type && working(x));
/** Total working levels of a type (a level-3 mine counts 3). */
const count = (b, type) => b.structures.reduce((n, x) => n + (x.type === type && working(x) ? x.level : 0), 0);
export const maxGuns = (b) => RULES.baseGuns + RULES.gunsPerDefence * count(b, 'defence');
export const incomeOf = (b, game) => {
  if (b.owner === NEUTRAL) return 0;
  const mining = 1 + 0.15 * (game ? techLevel(game, b.owner, 'industry') : 0);
  const S = RULES.structures;
  return RULES.income[b.kind] + (b.home ? RULES.homeIncome : 0) + RULES.mineIncome * count(b, 'mine') * mining
    + S.skimmer.income * count(b, 'skimmer') + S.exchange.income * count(b, 'exchange');
};
export const income = (game, owner) => game.bodies.reduce((n, b) => n + (b.owner === owner ? incomeOf(b, game) : 0), 0);
/** Working shipyards here: each builds one ship at a time. */
export const yardsOf = (b) => b.structures.filter((x) => x.type === 'shipyard' && working(x)).length;

/** Tear a structure down for a fee (a share of what it cost). */
export const demolishFee = (x) => Math.round(RULES.structures[x.type].cost * RULES.demolishFee);
export function cantDemolish(game, b, x) {
  if (b.owner === NEUTRAL) return 'not yours';
  if (x.scrap) return 'already scrapping';
  if (game.credits[b.owner] < demolishFee(x)) return 'not enough credits';
  return null;
}
export function demolish(game, b, x) {
  if (cantDemolish(game, b, x)) return false;
  game.credits[b.owner] -= demolishFee(x);
  tally(game, b.owner, 'spent', demolishFee(x));
  // It stops working now and is gone once the crews finish.
  x.scrap = RULES.scrapTime;
  if (!yardsOf(b)) b.build = 0;
  return true;
}
/** Cancel the last queued ship, refunding most of its cost. */
export function cancelShip(game, b) {
  if (b.owner === NEUTRAL || b.queue < 1) return false;
  b.queue -= 1;
  game.credits[b.owner] += Math.round(RULES.ship.cost * RULES.cancelRefund);
  if (b.queue === 0) b.build = 0;
  return true;
}

/** Why a structure can't be built here, or null if it can. */
export function cantBuild(game, b, type) {
  const def = RULES.structures[type];
  if (b.owner === NEUTRAL) return 'not yours';
  if (def.only && !def.only.includes(b.kind)) return `${b.kind}s can't have one`;
  if (def.where === 'giant' && !b.giant) return 'gas giants only';
  if (def.where === 'home' && !b.home) return 'homeworlds only';
  if (b.structures.length >= slotsOf(b)) return 'no free slots';
  if (game.credits[b.owner] < def.cost) return 'not enough credits';
  return null;
}
export function buildStructure(game, b, type) {
  if (cantBuild(game, b, type)) return false;
  const def = RULES.structures[type];
  game.credits[b.owner] -= def.cost;
  tally(game, b.owner, 'spent', def.cost);
  b.structures.push({ type, level: 1, left: def.time });
  return true;
}

/** Upgrading costs more at each level and takes longer. */
export const upgradeCost = (x) => Math.round(RULES.structures[x.type].cost * (x.level + 1) * 0.75);
export const upgradeTime = (x) => RULES.structures[x.type].time * (1 + x.level * 0.5);
export function cantUpgrade(game, b, x) {
  const def = RULES.structures[x.type];
  if (b.owner === NEUTRAL) return 'not yours';
  if (!def.maxLevel) return "can't be upgraded";
  if (x.left > 0 || x.scrap) return 'busy';
  if (x.level >= def.maxLevel) return 'at max level';
  if (game.credits[b.owner] < upgradeCost(x)) return 'not enough credits';
  return null;
}
export function upgrade(game, b, x) {
  if (cantUpgrade(game, b, x)) return false;
  tally(game, b.owner, 'spent', upgradeCost(x));
  game.credits[b.owner] -= upgradeCost(x);
  x.next = x.level + 1;
  x.left = upgradeTime(x);
  return true;
}
export function cantOrderShip(game, b) {
  if (b.owner === NEUTRAL) return 'not yours';
  if (!has(b, 'shipyard')) return 'needs a shipyard';
  if (game.credits[b.owner] < RULES.ship.cost) return 'not enough credits';
  return null;
}
export function orderShip(game, b) {
  if (cantOrderShip(game, b)) return false;
  game.credits[b.owner] -= RULES.ship.cost;
  tally(game, b.owner, 'spent', RULES.ship.cost);
  b.queue += 1;
  return true;
}

/** A body's position at time t (moons ride along with their planet). */
export function posAt(game, b, t) {
  const th = b.phase + (2 * Math.PI * t) / b.period;
  const p = { x: Math.cos(th) * b.r, y: Math.sin(th) * b.r * b.incl, z: Math.sin(th) * b.r };
  if (b.parent !== null) {
    const q = posAt(game, game.bodies[b.parent], t);
    p.x += q.x;
    p.y += q.y;
    p.z += q.z;
  }
  return p;
}

/** Brachistochrone time to cover distance d: accelerate half way, decelerate the rest. */
export const burnTime = (d) => 2 * Math.sqrt(d / RULES.accel);

/** A body's velocity at time t (numerically). */
export function velAt(game, b, t) {
  const e = 0.5;
  const a = posAt(game, b, t - e);
  const c = posAt(game, b, t + e);
  return { x: (c.x - a.x) / (2 * e), y: (c.y - a.y) / (2 * e), z: (c.z - a.z) / (2 * e) };
}

// ---- Transfers --------------------------------------------------------------
//
// A torch-ship rendezvous: burn with one constant thrust vector for the first
// half, flip, burn with a second for the rest, so the ship arrives exactly at
// the target's position AND velocity. For a flight time T, with start state
// (p0, v0) and arrival state (p1, v1):
//   dp = p1 - p0 - v0*T,  dv = v1 - v0
//   a1 = 4*dp/T^2 - dv/T,  a2 = 3*dv/T - 4*dp/T^2
// The planner picks the shortest T whose larger burn fits the drive and whose
// path stays clear of the sun. (Gravity is ignored while burning: at these
// thrusts it's small next to the drive.)

const SUN_CLEAR = 14;
/** Where ships hold station around a body (matches what the renderer draws). */
export const parkRadius = (b) => b.size * 1.8 + 0.4;
const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
const len = (a) => Math.hypot(a.x, a.y, a.z);

function burns(p0, v0, p1, v1, T) {
  const dp = { x: p1.x - p0.x - v0.x * T, y: p1.y - p0.y - v0.y * T, z: p1.z - p0.z - v0.z * T };
  const dv = sub(v1, v0);
  const k1 = 4 / (T * T);
  const a1 = { x: k1 * dp.x - dv.x / T, y: k1 * dp.y - dv.y / T, z: k1 * dp.z - dv.z / T };
  const a2 = { x: (3 * dv.x) / T - k1 * dp.x, y: (3 * dv.y) / T - k1 * dp.y, z: (3 * dv.z) / T - k1 * dp.z };
  return { a1, a2, need: Math.max(len(a1), len(a2)) };
}

/** Position and velocity along a transfer, tau seconds after launch. */
function along(f, tau) {
  const h = f.T / 2;
  const t1 = Math.min(tau, h);
  let x = f.p0.x + f.v0.x * t1 + 0.5 * f.a1.x * t1 * t1;
  let y = f.p0.y + f.v0.y * t1 + 0.5 * f.a1.y * t1 * t1;
  let z = f.p0.z + f.v0.z * t1 + 0.5 * f.a1.z * t1 * t1;
  let vx = f.v0.x + f.a1.x * t1;
  let vy = f.v0.y + f.a1.y * t1;
  let vz = f.v0.z + f.a1.z * t1;
  if (tau > h) {
    const t2 = tau - h;
    x += vx * t2 + 0.5 * f.a2.x * t2 * t2;
    y += vy * t2 + 0.5 * f.a2.y * t2 * t2;
    z += vz * t2 + 0.5 * f.a2.z * t2 * t2;
    vx += f.a2.x * t2;
    vy += f.a2.y * t2;
    vz += f.a2.z * t2;
  }
  return { x, y, z, vx, vy, vz };
}

function clearOfSun(f) {
  for (let k = 1; k < 64; k++) if (len(along(f, (k / 64) * f.T)) < SUN_CLEAR) return false;
  return true;
}

/** Plans a transfer from `from` (now) to meet `to`. Returns { p0, v0, p1, v1, a1, a2, T }. */
/**
 * Gravity assist, kept simple: a transfer that passes close to a gas giant can
 * use its pull, so the drive's effective thrust on that route is 20% higher.
 * (Real assists bend and speed a path; this gives the same payoff: giants
 * become fast lanes worth routing past, and holding.)
 */
export const ASSIST = { boost: 1.25, range: 16 }; // range in giant radii
function assistBy(game, f, from, to, now) {
  const skip = new Set([from.id, to.id, from.parent, to.parent]);
  let best = null;
  for (const g of game.bodies) {
    if (!g.giant || skip.has(g.id)) continue;
    for (let k = 1; k < 24; k++) {
      const t = (k / 24) * f.T;
      const d = dist(along(f, t), posAt(game, g, now + t));
      if (d < g.size * ASSIST.range && (!best || d < best.d)) best = { g, d };
    }
  }
  return best && best.g;
}

export function plan(game, from, to, now = game.time, speed = 1) {
  const direct = planWith(game, from, to, now, accelOf(game, from.owner) * speed);
  const g = assistBy(game, direct, from, to, now);
  if (!g) return direct;
  const fast = planWith(game, from, to, now, accelOf(game, from.owner) * speed * ASSIST.boost);
  // Only if the faster path still swings past the same giant.
  return fast.T < direct.T && assistBy(game, fast, from, to, now) === g ? { ...fast, assist: g.id } : direct;
}

function planWith(game, from, to, now, accel) {
  const p0 = posAt(game, from, now);
  const v0 = velAt(game, from, now);
  const make = (T) => {
    // Aim for a parking orbit beside the target, on the side we come in from.
    const c = posAt(game, to, now + T);
    const away = sub(p0, c);
    const l = len(away) || 1;
    const park = parkRadius(to);
    const p1 = { x: c.x + (away.x / l) * park, y: c.y + (away.y / l) * park, z: c.z + (away.z / l) * park };
    const v1 = velAt(game, to, now + T);
    return { p0, v0, p1, v1, T, ...burns(p0, v0, p1, v1, T) };
  };
  // Scan forward for the first flight time the drive can manage (moons move
  // fast, so the answer isn't monotonic), bisect it down, then make sure the
  // path misses the sun; if not, keep looking at longer transfers.
  let prev = 1;
  for (let T = 2; T < 20000; T += 2) {
    let f = make(T);
    if (f.need > accel) { prev = T; continue; }
    let lo = prev;
    let hi = T;
    for (let i = 0; i < 30; i++) {
      const mid = (lo + hi) / 2;
      if (make(mid).need > accel) lo = mid;
      else hi = mid;
    }
    f = make(hi);
    if (clearOfSun(f)) return f;
    prev = T;
  }
  return make(20000);
}

export function launch(game, from, to, n) {
  n = Math.min(Math.floor(n), from.ships);
  if (n < 1 || from === to || game.winner !== null) return null;
  const p = plan(game, from, to);
  from.ships -= n;
  const f = { id: game.nextId++, owner: from.owner, n, from: from.id, to: to.id, ...p, t0: game.time, vet: from.vet || 0 };
  // The bulk of a garrison keeps its task force name; a small detachment gets a new one.
  if (from.tf && n * 2 >= n + from.ships) { f.name = from.tf; from.tf = null; }
  else f.name = fleetName(game);
  if (!from.ships) from.tf = null;
  game.fleets.push(f);
  note(game, { type: 'launch', owner: f.owner, fleet: f.id, name: f.name, n, from: from.id, to: to.id });
  return f;
}

/** Why a probe can't go from b to t, or null. Probes are built at a shipyard. */
export function cantProbe(game, b, t) {
  if (b.owner === NEUTRAL) return 'not yours';
  if (!t || t === b) return 'pick a target';
  if (!has(b, 'shipyard')) return 'needs a shipyard';
  if (game.credits[b.owner] < RULES.probe.cost) return 'not enough credits';
  return null;
}
export function launchProbe(game, from, to) {
  if (cantProbe(game, from, to) || game.winner !== null) return null;
  game.credits[from.owner] -= RULES.probe.cost;
  tally(game, from.owner, 'spent', RULES.probe.cost);
  const f = { id: game.nextId++, owner: from.owner, n: 0, probe: true, from: from.id, to: to.id, ...plan(game, from, to, game.time, RULES.probe.speed), t0: game.time, vet: 0, name: 'Probe' };
  game.fleets.push(f);
  return f;
}

/**
 * A fleet's state at time t: position, progress, whether its drive is lit,
 * and where the nose points (along the thrust: the first burn, turning over
 * during the flip, then the second burn).
 */
export function fleetState(f, t) {
  const tau = Math.min(f.T, Math.max(0, t - f.t0));
  const s = along(f, tau);
  const h = f.T / 2;
  const flipStart = h - RULES.flipTime / 2;
  const flipping = Math.abs(tau - h) < RULES.flipTime / 2;
  const u1 = len(f.a1) > 1e-9 ? { x: f.a1.x / len(f.a1), y: f.a1.y / len(f.a1), z: f.a1.z / len(f.a1) } : { x: 0, y: 0, z: 1 };
  const u2 = len(f.a2) > 1e-9 ? { x: f.a2.x / len(f.a2), y: f.a2.y / len(f.a2), z: f.a2.z / len(f.a2) } : u1;
  let n = tau < h ? u1 : u2;
  if (flipping) {
    // Turn smoothly from the first burn direction to the second.
    const k = (1 - Math.cos(((tau - flipStart) / RULES.flipTime) * Math.PI)) / 2;
    n = { x: u1.x + (u2.x - u1.x) * k, y: u1.y + (u2.y - u1.y) * k, z: u1.z + (u2.z - u1.z) * k };
    const l = len(n);
    // Nearly opposite burns pass through zero: turn over via a sideways axis.
    if (l < 0.3) {
      const side = { x: -u1.z, y: 0, z: u1.x };
      const w = Math.sin(k * Math.PI) * 0.8;
      n = { x: n.x + side.x * w, y: n.y + side.y * w, z: n.z + side.z * w };
    }
    const l2 = len(n) || 1;
    n = { x: n.x / l2, y: n.y / l2, z: n.z / l2 };
  }
  return {
    x: s.x, y: s.y, z: s.z,
    vx: s.vx, vy: s.vy, vz: s.vz,
    nx: n.x, ny: n.y, nz: n.z,
    progress: tau / f.T,
    burning: !flipping && tau < f.T,
    flipping,
    phase: tau < h ? 1 : 2,
  };
}


/** Ships attacking b in orbit: resolve a round of fire (ships and guns on both sides). */
/** Supporting fire from the parent planet's guns, if the same side holds it. */
export function coverOf(game, b) {
  if (b.parent === null) return 0;
  const p = game.bodies[b.parent];
  return p.owner === b.owner ? p.guns * RULES.coverShare : 0;
}

function fight(game, b, dt) {
  let taken = false;
  const attackers = b.sieges.reduce((n, g) => n + g.n, 0);
  // Cover adds firepower but can't be destroyed here: only the planet's own
  // fight can knock out its guns.
  const defenders = (b.ships * (1 + VET_BONUS * vetLevel(b.vet)) + b.guns + coverOf(game, b)) * firepowerOf(game, b.owner);
  let attackFire = 0;
  for (const g of b.sieges) {
    const share = attackers > 0 ? g.n / attackers : 0;
    g.dmg = (g.dmg || 0) + RULES.fire * defenders * share * damageTaken(game, g.owner) * dt;
    attackFire += g.n * (1 + VET_BONUS * vetLevel(g.vet)) * firepowerOf(game, g.owner);
  }
  b.dmg = (b.dmg || 0) + RULES.fire * attackFire * damageTaken(game, b.owner) * dt;
  b.fighting = true;
  // Damage becomes whole ships lost: docked ships first, then guns.
  while (b.dmg >= 1 && b.ships + b.guns > 0) {
    b.dmg -= 1;
    if (b.ships > 0) {
      b.ships -= 1;
      tally(game, b.owner, 'lost');
      tally(game, b.sieges.slice().sort((x, y) => y.n - x.n)[0].owner, 'killed');
    } else b.guns = Math.max(0, b.guns - 1);
    const top = b.sieges.slice().sort((x, y) => y.n - x.n)[0];
    top.kills = (top.kills || 0) + 1;
    b.lostDef = (b.lostDef || 0) + 1;
    b.totDef = (b.totDef || 0) + 1; // running totals, for multiplayer guests
  }
  for (const g of b.sieges) {
    while (g.dmg >= 1 && g.n > 0) {
      g.dmg -= 1; g.n -= 1; b.lostAtk = (b.lostAtk || 0) + 1; b.totAtk = (b.totAtk || 0) + 1;
      tally(game, g.owner, 'lost');
      tally(game, b.owner, 'killed');
      b.kills = (b.kills || 0) + 1;
    }
  }
  for (const g of b.sieges) if (g.n <= 0) note(game, { type: 'wiped', owner: g.owner, name: g.name, at: b.id, vs: b.owner });
  if (!b.ships) b.tf = null;
  b.sieges = b.sieges.filter((g) => g.n > 0);
  if (b.ships + b.guns <= 0 && b.sieges.length) {
    const win = b.sieges.sort((x, y) => y.n - x.n)[0];
    tally(game, b.owner, 'worldsLost');
    tally(game, win.owner, 'captured');
    note(game, { type: 'captured', owner: win.owner, from: b.owner, at: b.id, name: win.name });
    b.owner = win.owner;
    b.ships = win.n;
    // Survivors gain experience, more for winning against the odds.
    b.vet = Math.min(4.5, (win.vet || 0) + winXP(win.foe0 || 1, win.n0 || win.n, win.kills || 0));
    b.tf = win.name;
    if (vetLevel(b.vet) > vetLevel(win.vet)) note(game, { type: 'promoted', owner: b.owner, at: b.id, name: b.tf, v: b.vet });
    b.guns = 0;
    b.dmg = 0;
    b.build = 0;
    b.slips = [];
    b.queue = 0;
    b.structures = b.structures.filter((x) => x.left <= 0 || x.next);
    for (const x of b.structures) { if (x.next) { delete x.next; x.left = 0; } delete x.scrap; }
    b.sieges = b.sieges.filter((g) => g !== win);
    b.captured = true;
    taken = true;
  }
  if (!b.sieges.length) {
    // Held: the garrison that saw it through gains a star.
    if (b.fighting && !taken && b.ships > 0) {
      const was = b.vet;
      b.vet = Math.min(4.5, (b.vet || 0) + winXP(b.foe0 || 1, b.own0 || 1, b.kills || 0));
      if (vetLevel(b.vet) > vetLevel(was)) note(game, { type: 'promoted', owner: b.owner, at: b.id, name: b.tf, v: b.vet });
      note(game, { type: 'held', owner: b.owner, at: b.id });
    }
    b.dmg = 0; b.fighting = false; b.foe0 = b.own0 = b.kills = 0;
  }
}

export function step(game, dt) {
  if (game.winner !== null) return;
  if (game.stats && (!game.stats.series.length || game.time - game.stats.series.at(-1).t >= 10)) sample(game);
  game.time += dt;

  for (const b of game.bodies) {
    if (b.owner === NEUTRAL) continue;
    game.credits[b.owner] += incomeOf(b, game) * dt;
    tally(game, b.owner, 'earned', incomeOf(b, game) * dt);
    const speed = buildSpeed(game, b.owner);
    if (b.sieges.length) continue; // nothing gets built under fire
    for (const x of b.structures) {
      if (x.scrap) { x.scrap = Math.max(0, x.scrap - dt); if (!x.scrap) x.gone = true; continue; }
      if (x.left <= 0) continue;
      x.left = Math.max(0, x.left - dt * speed);
      if (x.left === 0 && x.next) { x.level = x.next; delete x.next; }
    }
    if (b.structures.some((x) => x.gone)) {
      const x = b.structures.find((y) => y.gone);
      b.structures = b.structures.filter((y) => !y.gone);
      note(game, { type: 'scrapped', owner: b.owner, at: b.id, what: x.type });
    }
    // Each working yard builds one ship at a time, in parallel.
    // b.slips holds each yard's progress on the ship it's building.
    const yards = yardsOf(b);
    if (!b.slips) b.slips = [];
    while (b.slips.length < Math.min(yards, b.queue)) b.slips.push(0);
    b.slips.length = Math.min(b.slips.length, yards, b.queue);
    b.slips = b.slips.map((p) => p + (dt * speed) / RULES.ship.time);
    for (const p of b.slips) if (p >= 1) { b.vet = mix(b.vet || 0, b.ships, 0, 1); b.queue -= 1; b.ships += 1; tally(game, b.owner, 'built'); }
    b.slips = b.slips.filter((p) => p < 1);
    b.build = b.slips.length ? Math.max(...b.slips) : 0;
    const top = maxGuns(b);
    if (b.guns < top) b.guns = Math.min(top, b.guns + RULES.gunRegen * dt);
  }

  for (const [owner, t] of (game.tech || []).entries()) {
    if (!t.project) continue;
    t.project.left -= dt * researchSpeed(game, owner);
    if (t.project.left <= 0) { t[t.project.key] += 1; note(game, { type: 'research', owner, key: t.project.key, level: t[t.project.key] }); t.project = null; tally(game, owner, 'research'); }
  }

  if (game.scans) game.scans = game.scans.filter((x) => x.until > game.time);
  game.fleets = game.fleets.filter((f) => {
    if (game.time - f.t0 < f.T) return true;
    const b = game.bodies[f.to];
    if (f.probe) {
      // Flyby: the probe is spent, but the world stays in view for a while.
      (game.scans ||= []).push({ owner: f.owner, body: b.id, until: game.time + RULES.probe.scan });
      note(game, { type: 'probed', owner: f.owner, at: b.id });
      return false;
    }
    if (b.owner === f.owner) {
      b.vet = mix(b.vet || 0, b.ships, f.vet || 0, f.n);
      if (!b.tf || f.n >= b.ships) b.tf = f.name;
      b.ships += f.n;
      note(game, { type: 'arrived', owner: f.owner, name: f.name, n: f.n, at: b.id });
    } else {
      // Odds as the fight is joined, so wins can be judged by them later.
      const defence = b.ships * (1 + VET_BONUS * vetLevel(b.vet)) + b.guns + coverOf(game, b);
      b.own0 = Math.max(b.own0 || 0, defence);
      b.foe0 = (b.foe0 || 0) + f.n;
      const g = b.sieges.find((x) => x.owner === f.owner);
      if (g) { g.vet = mix(g.vet || 0, g.n, f.vet || 0, f.n); g.n += f.n; g.n0 += f.n; }
      else b.sieges.push({ owner: f.owner, n: f.n, vet: f.vet || 0, name: f.name, n0: f.n, foe0: defence });
      note(game, { type: 'engaged', owner: f.owner, name: f.name, n: f.n, at: b.id, vs: b.owner });
    }
    return false;
  });

  for (const b of game.bodies) if (b.sieges.length) fight(game, b, dt);

  const alive = new Set();
  for (const b of game.bodies) {
    if (b.owner !== NEUTRAL) alive.add(b.owner);
    for (const g of b.sieges) alive.add(g.owner);
  }
  for (const f of game.fleets) if (!f.probe) alive.add(f.owner);
  if (game.mp) {
    // Multiplayer: it's over when one empire is left (knocked-out players watch).
    if (alive.size <= 1) game.winner = [...alive][0] ?? NEUTRAL;
  } else if (!alive.has(PLAYER)) game.winner = [...alive][0] ?? NEUTRAL;
  else if (alive.size === 1) game.winner = PLAYER;
  if (game.winner !== null && game.stats) sample(game); // final snapshot
}
