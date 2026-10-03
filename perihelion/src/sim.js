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
  income: { planet: 1, moon: 0.5, station: 0.6, asteroid: 0.3, visitor: 0 },
  homeIncome: 0.4, // extra for a homeworld, so it's worth defending (and taking)
  mineIncome: 1.5,
  ship: { cost: 150, time: 45 }, // each shipyard builds one at a time
  structures: {
    shipyard: { name: 'Shipyard', cost: 400, time: 90, desc: 'Builds ships, one at a time' },
    mine: { name: 'Mine', cost: 200, time: 45, only: ['asteroid', 'moon'], maxLevel: 3, desc: '+1.5/s per level' },
    // Gas giants: harvesters scoop fusion fuel from the upper atmosphere; homeworlds (the only
    // living worlds) can float bonds on the system's exchanges.
    skimmer: { name: 'Gas harvester', cost: 350, time: 70, where: 'giant', maxLevel: 3, income: 2, desc: 'Skims fuel from the clouds: +2/s per level' },
    exchange: { name: 'Orbital exchange', cost: 450, time: 80, where: 'home', maxLevel: 2, income: 2.5, desc: 'Sells war bonds: +2.5/s per level' },
    defence: { name: 'Guns', cost: 250, time: 50, maxLevel: 3, desc: '+2 guns per level' },
    bureau: { name: 'Security bureau', cost: 250, time: 50, maxLevel: 2, desc: 'Hunts enemy spies here and on nearby worlds' },
    lab: { name: 'Research station', cost: 300, time: 60, maxLevel: 3, desc: 'Research +50% per level' },
  },
  baseGuns: 1, // guns any held world has
  gunsPerDefence: 2,
  coverShare: 0.5, // a planet's guns also fire on attackers at its moons and stations
  moonCover: 0.25, // and a moon's or station's guns help its planet and the rest of the family
  fire: 0.12, // ships destroyed per second, per firing ship (or gun)
  gunRegen: 0.02, // guns rebuilt per second after a fight
  flipTime: 4, // seconds spent turning around at the midpoint
  demolishFee: 0.25, // share of a structure's cost to tear it down
  scrapTime: 20, // seconds to tear one down (cancelled if the world is taken)
  cooldown: 15, // seconds before newly arrived ships can launch again
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
    text: ['Spot drive flares further out', 'Hear further into the system', 'Wide-field sight, a long way out'],
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
// Running dark: a short burn, then a long silent coast. Slower, but enemy
// sensors only pick the fleet up close (a fraction of their normal range).
export const DARK = { speed: 0.55, seen: 0.3 };
// Spies: planted on an enemy world. While there they show you the world and
// its fleets, skim its income and slow its research and megaproject. Each
// second there's a chance they're caught; the owner's Intel and any security
// bureau nearby raise it.
export const SPY = { cost: 250, catch: 1 / 300, intel: 0.5, bureau: 1.5, bureauRange: 40, skim: 0.4, slow: 0.25 };
export const SENSOR_RANGE = [70, 100, 135, 175];
// Joint techs: on the hex board they sit between two branches and need both
// at level II. Ring order of the branches: intel, sensors, weapons, drives,
// industry, armour; each joint joins two neighbours.
export const BRANCH_RING = ['intel', 'sensors', 'weapons', 'drives', 'industry', 'armour'];
export const JOINTS = {
  ansible: { name: 'Ansible', needs: ['intel', 'sensors'], cost: 1400, time: 260, text: 'See every world and fleet in the system, and where fleets are going' },
  targeting: { name: 'Targeting data', needs: ['sensors', 'weapons'], cost: 1100, time: 220, text: '+20% firepower when attacking' },
  kinetic: { name: 'Kinetic strike', needs: ['weapons', 'drives'], cost: 1100, time: 220, text: 'Fleets arrive firing: an opening volley destroys a fifth of their number in defenders' },
  torch: { name: 'Torch production', needs: ['drives', 'industry'], cost: 1100, time: 220, text: 'Ships build 25% faster and fly 10% faster' },
  hardened: { name: 'Hardened colonies', needs: ['industry', 'armour'], cost: 1100, time: 220, text: '+1 gun on every world; guns rebuild twice as fast' },
  pdnet: { name: 'Point-defence net', needs: ['armour', 'intel'], cost: 1100, time: 220, text: 'Your worlds shoot down 15% of every attacking fleet as it arrives' },
};
export const hasJoint = (game, owner, key) => owner !== NEUTRAL && !!game.tech && !!game.tech[owner][key];
/** Display name of a research key at a level (branches and joints). */
export const techTitle = (key, level) => (JOINTS[key] ? JOINTS[key].name : TECH[key].levels[level - 1]);

// Megaprojects: built on one of your worlds, one per world. Each kind can be
// finished only once in a game: several empires can race for the same one,
// and the first to finish wins it; the others lose the race (half their money
// back). A captured world's project or wonder goes to the captor.
export const PROJECTS = {
  sundiver: { needs: 'torch', name: 'Sun-diver collectors', where: 'inner', text: '+8 credits/s', cost: 1200, time: 360 },
  massdriver: { needs: 'kinetic', name: 'Mass driver', where: 'planet', text: 'Fleets launched here fly 50% faster', cost: 1200, time: 360 },
  ringyard: { needs: 'hardened', name: 'Ring yard', where: 'giant', text: 'Ships build three times as fast here', cost: 1200, time: 360 },
  citadel: { needs: 'pdnet', name: 'Fortress world', where: 'any', text: 'Three times the guns here, and its cover reaches its family at full strength', cost: 1200, time: 360 },
  telescope: { needs: 'targeting', name: 'Deep-space telescope', where: 'any', text: 'See every enemy fleet: its size, destination and arrival time', cost: 1200, time: 360 },
};
export const PROJECT_FUND = { credits: 200, cut: 30, crewCut: 20 };
const holdsWonder = (game, owner, key) => owner !== NEUTRAL && game.bodies.some((b) => b.wonder === key && b.owner === owner);
export function cantProject(game, b, key) {
  const P = PROJECTS[key];
  if (b.owner === NEUTRAL || b.visitor) return 'not yours';
  if (!hasJoint(game, b.owner, P.needs)) return `needs ${JOINTS[P.needs].name}`;
  if (b.project || b.wonder) return 'this world already has one';
  if (game.wonders && game.wonders[key] !== undefined) return 'already built';
  if (P.where === 'giant' && !b.giant) return 'gas giants only';
  if (P.where === 'planet' && b.kind !== 'planet') return 'planets only';
  if (P.where === 'inner') {
    const inner = game.bodies.filter((x) => x.kind === 'planet' && x.parent === null && !x.star).sort((a, c) => a.r - c.r)[0];
    if (b !== inner) return 'the innermost planet only';
  }
  if (game.credits[b.owner] < P.cost) return 'not enough credits';
  return null;
}
export function startProject(game, b, key) {
  if (cantProject(game, b, key)) return false;
  const P = PROJECTS[key];
  game.credits[b.owner] -= P.cost;
  tally(game, b.owner, 'spent', P.cost);
  b.project = { key, left: P.time, paid: P.cost };
  note(game, { type: 'project', phase: 'start', owner: b.owner, at: b.id, key });
  return true;
}
/** Speed a project up: pay credits, or break a docked ship up for parts and crew. */
export function fundProject(game, b, how) {
  if (!b.project || b.owner === NEUTRAL) return false;
  if (how === 'ship') {
    if (readyShips(game, b) < 1) return false;
    b.ships -= 1;
    b.project.left = Math.max(1, b.project.left - PROJECT_FUND.crewCut);
    return true;
  }
  if (game.credits[b.owner] < PROJECT_FUND.credits) return false;
  game.credits[b.owner] -= PROJECT_FUND.credits;
  tally(game, b.owner, 'spent', PROJECT_FUND.credits);
  b.project.paid += PROJECT_FUND.credits;
  b.project.left = Math.max(1, b.project.left - PROJECT_FUND.cut);
  return true;
}
function stepProjects(game, dt) {
  for (const b of game.bodies) {
    if (!b.project || b.owner === NEUTRAL || b.sieges.length) continue;
    // Research stations work for megaprojects too.
    b.project.left -= dt * researchSpeed(game, b.owner) * (spyOn(game, b).length ? 1 - SPY.slow : 1);
    if (b.project.left > 0) continue;
    const key = b.project.key;
    b.wonder = key;
    b.project = null;
    (game.wonders ||= {})[key] = b.id;
    note(game, { type: 'project', phase: 'done', owner: b.owner, at: b.id, key });
    // Everyone else racing for it loses; half their money back.
    for (const o of game.bodies) {
      if (!o.project || o.project.key !== key) continue;
      if (o.owner !== NEUTRAL) game.credits[o.owner] += Math.round(o.project.paid / 2);
      note(game, { type: 'project', phase: 'lost', owner: o.owner, at: o.id, key });
      o.project = null;
    }
  }
}
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

export const accelOf = (game, owner) => RULES.accel * (1 + 0.15 * techLevel(game, owner, 'drives')) * (hasJoint(game, owner, 'torch') ? 1.1 : 1);
export const firepowerOf = (game, owner) => 1 + 0.15 * techLevel(game, owner, 'weapons');
/** Firepower when attacking (targeting data helps here). */
export const attackPowerOf = (game, owner) => firepowerOf(game, owner) * (hasJoint(game, owner, 'targeting') ? 1.2 : 1);
export const damageTaken = (game, owner) => 1 - 0.12 * techLevel(game, owner, 'armour');
const buildSpeed = (game, owner, b = null) => (1 + 0.12 * techLevel(game, owner, 'industry')) * (b && b.perk === 'forge' ? PERKS.forge.boost : 1);

export function nextTech(game, owner, key) {
  const lvl = game.tech[owner][key] || 0;
  if (JOINTS[key]) {
    const J = JOINTS[key];
    return lvl ? null : { level: 1, cost: J.cost, time: J.time, text: J.text, title: J.name };
  }
  const d = TECH[key];
  return lvl < d.cost.length ? { level: lvl + 1, cost: d.cost[lvl], time: d.time[lvl], text: d.text[lvl], title: d.levels[lvl] } : null;
}
export function researchSpeed(game, owner) {
  const labs = game.bodies.reduce((n, b) => n + (b.owner === owner ? count(b, 'lab') : 0), 0);
  return (1 + RULES.labSpeed * labs) * (holds(game, owner, 'archive') ? PERKS.archive.boost : 1);
}
export function cantResearch(game, owner, key) {
  const next = nextTech(game, owner, key);
  if (!next) return 'complete';
  if (JOINTS[key] && JOINTS[key].needs.some((k) => game.tech[owner][k] < 2)) return 'locked';
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
/** Why `owner` can't plant a spy on world t, or null. */
export function cantSpy(game, owner, t) {
  if (owner === NEUTRAL || !t || t.owner === NEUTRAL || t.owner === owner) return 'enemy worlds only';
  if (techLevel(game, owner, 'intel') < 1) return 'needs Signals intercept';
  if ((game.spies || []).some((x) => x.owner === owner && x.body === t.id)) return 'already a spy there';
  if (game.credits[owner] < SPY.cost) return 'not enough credits';
  return null;
}
export function plantSpy(game, owner, t) {
  if (cantSpy(game, owner, t) || game.winner !== null) return null;
  game.credits[owner] -= SPY.cost;
  tally(game, owner, 'spent', SPY.cost);
  const x = { id: game.nextId++, owner, body: t.id, since: game.time };
  (game.spies ||= []).push(x);
  return x;
}
export const spyOn = (game, b) => (game.spies || []).filter((x) => x.body === b.id && x.owner !== b.owner);
/** Chance per second a spy on world b gets caught. */
export function catchRate(game, b) {
  if (b.owner === NEUTRAL) return 1;
  const here = posAt(game, b, game.time);
  let bureau = 0;
  for (const w of game.bodies) {
    if (w.owner !== b.owner) continue;
    const s = w.structures.find((y) => y.type === 'bureau' && y.left <= 0);
    if (s && (w === b || dist(posAt(game, w, game.time), here) <= SPY.bureauRange)) bureau = Math.max(bureau, s.level);
  }
  return SPY.catch * (1 + SPY.intel * techLevel(game, b.owner, 'intel')) * (1 + SPY.bureau * bureau);
}
// A repeatable coin per spy per second (the sim stays deterministic).
const coin = (id, k) => { const v = Math.sin(id * 12.9898 + k * 78.233) * 43758.5453; return v - Math.floor(v); };
function stepSpies(game, dt) {
  if (!game.spies || !game.spies.length) return;
  const before = Math.floor(game.time - dt);
  game.spies = game.spies.filter((x) => {
    const b = game.bodies[x.body];
    if (b.owner === x.owner || b.owner === NEUTRAL) return false; // the world changed hands
    // Skim income while hidden.
    const skim = Math.min(game.credits[b.owner], incomeOf(b, game) * SPY.skim * dt);
    game.credits[b.owner] -= skim; game.credits[x.owner] += skim;
    const rate = catchRate(game, b);
    for (let k = before + 1; k <= Math.floor(game.time); k++) {
      if (coin(x.id, k) < rate) { note(game, { type: 'spycaught', owner: x.owner, by: b.owner, at: b.id, after: game.time - x.since }); return false; }
    }
    return true;
  });
}
export const spiedBy = (game, owner) => (game.spies || []).filter((x) => x.owner !== owner && game.bodies[x.body].owner === owner).length;

export function visibility(game, owner) {
  const range = SENSOR_RANGE[techLevel(game, owner, 'sensors')];
  const eyes = [];
  for (const b of game.bodies) if (b.owner === owner) eyes.push([posAt(game, b, game.time), range]);
  for (const f of game.fleets) if (f.owner === owner) eyes.push([fleetState(f, game.time), 20]);
  for (const b of game.bodies) if (b.sieges.some((g) => g.owner === owner)) eyes.push([posAt(game, b, game.time), 20]);
  for (const x of game.scans || []) if (x.owner === owner && x.until > game.time) eyes.push([posAt(game, game.bodies[x.body], game.time), 14]);
  for (const x of game.spies || []) if (x.owner === owner) eyes.push([posAt(game, game.bodies[x.body], game.time), 30]);
  const sees = (p) => eyes.some(([e, r]) => dist(e, p) <= r);
  // An old relay you hold is a huge sensor dish: it sees everything in its ring.
  for (const b of game.bodies) if (b.perk === 'relay' && b.owner === owner) eyes.push([posAt(game, b, game.time), PERKS.relay.range]);
  const bodies = new Set(game.bodies.filter((b) => b.owner === owner || sees(posAt(game, b, game.time))).map((b) => b.id));
  // The ansible sees everything and reads routes; a deep-space telescope reads every fleet.
  const intel = Math.max(techLevel(game, owner, 'intel'), hasJoint(game, owner, 'ansible') ? 2 : 0, holdsWonder(game, owner, 'telescope') ? 3 : 0);
  // A dark fleet shows only close in, unless a spy sits on the world it left.
  const tele = holdsWonder(game, owner, 'telescope');
  const spied = new Set((game.spies || []).filter((x) => x.owner === owner).map((x) => x.body));
  const seesFleet = (f, p = fleetState(f, game.time)) => f.owner === owner || tele || spied.has(f.from)
    || (f.dark ? eyes.some(([e, r]) => dist(e, p) <= r * DARK.seen) : sees(p));
  if (hasJoint(game, owner, 'ansible')) return { owner, sees: () => true, seesFleet: () => true, bodies: new Set(game.bodies.map((b) => b.id)), intel, warn: true };
  return { owner, sees, seesFleet, bodies, intel, warn: holds(game, owner, 'post') };
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

// Special worlds: a few neutrals carry a perk for whoever holds them.
export const PERKS = {
  seam: { name: 'Rich seam', text: 'Mines here pay double', kinds: ['asteroid', 'moon'] },
  relay: { name: 'Old relay', text: 'See everything inside its ring', range: 160 },
  depot: { name: 'Fuel depot', text: 'Fleets launched from your worlds inside its ring fly 20% faster', range: 120, boost: 1.2 },
  post: { name: 'Listening post', text: 'Warns of fleets heading for your worlds' },
  fortress: { name: 'Fortress rock', text: 'Heavy guns; +1 gun on each of your worlds inside its ring', range: 100 },
  archive: { name: 'Ancient archive', text: 'Research 25% faster', boost: 1.25 },
  hulk: { name: 'Drydock hulk', text: 'Ships built here start as veterans', vet: 2.5 },
  forge: { name: 'Tidal forge', text: 'Builds and upgrades here 30% faster', boost: 1.3, giantMoon: true },
};
// Events: announced a minute ahead at a world; whoever holds that world for
// the hold time (without losing it) gets the reward.
export const EVENTS = {
  comet: { name: 'Comet pass', text: 'Catch it on its pass round the sun and hold it to mine it', hold: 60, pay: 12 },
  derelict: { name: 'Derelict warship', text: 'Catch the drifting hulk and hold it to salvage veteran ships', hold: 45, ships: 4 },
  signal: { name: 'Lost probe signal', text: 'Hold to recover a research level', hold: 40 },
  wreck: { name: 'Ice-hauler wreck', text: 'Hold to salvage its cargo', hold: 45, credits: 450 },
  convoy: { name: 'Refugee convoy', text: 'Hold when it docks: the world earns +1/s for good', hold: 30, bonus: 1 },
  cache: { name: 'Supply cache', text: 'Hold for a free structure upgrade', hold: 30 },
};
// First one at 4-6 minutes, then every 7-10 minutes (never quite regular).
// Comets and derelicts arrive as visitors: they fly in, whip round the sun on a
// parabolic (Kepler) pass and leave. Hold one while it's here.
const VISITS = {
  // Slow enough to catch: ships must match a visitor's speed to board it.
  comet: { inside: 420, q: [70, 120], guns: 0 },
  derelict: { inside: 480, q: [100, 160], guns: 2 },
};
// A pass starts and ends a little beyond the outermost planet; `inside` is
// how long it spends within the planets' orbits (about 4 minutes).
/** Is this body on the map right now? (Only the visitor ever isn't.) */
export const present = (game, b, t = game.time) => !b.visitor || (!!game.visit && t >= game.visit.t0 && t <= game.visit.t0 + game.visit.T);
/** Seconds until the visitor leaves (Infinity for anything else). */
export const staysFor = (game, b) => (b.visitor ? (game.visit ? game.visit.t0 + game.visit.T - game.time : 0) : Infinity);
function visitPos(game, t) {
  const v = game.visit;
  if (!v || t < v.t0 || t > v.t0 + v.T) return { x: 4000, y: 0, z: 4000 };
  // Barker's equation: D + D³/3 grows steadily with time; D = tan(ν/2).
  const sT = (t - v.t0 - v.T / 2) / v.tau;
  let D = sT;
  for (let k = 0; k < 8; k++) D -= (D + (D * D * D) / 3 - sT) / (1 + D * D);
  const nu = 2 * Math.atan(D);
  const rr = v.q * (1 + D * D);
  const x = rr * Math.cos(nu), z = rr * Math.sin(nu);
  return { x: x * Math.cos(v.w) - z * Math.sin(v.w), y: rr * 0.04 * Math.sin(nu), z: x * Math.sin(v.w) + z * Math.cos(v.w) };
}
function startVisit(game, kind) {
  const V = VISITS[kind];
  const q = V.q[0] + evRand(game) * (V.q[1] - V.q[0]);
  const outer = Math.max(...game.bodies.filter((b) => b.parent === null && !b.visitor).map((b) => b.r));
  const barker = (r) => { const D = Math.sqrt(Math.max(0, r / q - 1)); return D + (D ** 3) / 3; };
  const tau = V.inside / 2 / barker(outer);
  const T = 2 * tau * barker(outer + 60);
  game.visit = { kind, t0: game.time, T, q, w: evRand(game) * Math.PI * 2, tau };
  const b = game.bodies.find((x) => x.visitor);
  b.owner = NEUTRAL; b.ships = 0; b.guns = V.guns; b.sieges = []; b.vet = 0; b.tf = null;
  b.name = kind === 'comet' ? `Comet ${String.fromCharCode(65 + Math.floor(evRand(game) * 26))}/${10 + Math.floor(evRand(game) * 90)}` : `Derelict ${fleetName(game)}`;
  return b;
}
/** The visitor leaves: anyone there heads for their nearest world; fleets on the way turn back. */
function endVisit(game) {
  const b = game.bodies.find((x) => x.visitor);
  const nearest = (owner, p) => game.bodies.filter((x) => x.owner === owner && !x.visitor)
    .sort((x, y) => dist(posAt(game, x, game.time), p) - dist(posAt(game, y, game.time), p))[0];
  const here = posAt(game, b, game.time);
  const leave = (owner, n, vet, name) => {
    const home = nearest(owner, here);
    if (!home || n < 1) return;
    b.owner = owner; b.ships = n; b.vet = vet; b.tf = name; b.restUntil = 0;
    launch(game, b, home, n);
  };
  const sieges = b.sieges;
  b.sieges = [];
  if (b.owner !== NEUTRAL) leave(b.owner, b.ships, b.vet, b.tf);
  for (const g of sieges) leave(g.owner, g.n, g.vet, g.name);
  for (const f of game.fleets) {
    if (f.to !== b.id) continue;
    const s = fleetState(f, game.time);
    const home = nearest(f.owner, s);
    if (!home) { f.n = 0; continue; }
    const p = planWith(game, null, home, game.time, accelOf(game, f.owner), { p: { x: s.x, y: s.y, z: s.z }, v: { x: s.vx, y: s.vy, z: s.vz } });
    delete f.assist;
    Object.assign(f, p, { t0: game.time, to: home.id });
  }
  game.fleets = game.fleets.filter((f) => f.n > 0 || f.probe);
  b.owner = NEUTRAL; b.ships = 0; b.guns = 0;
  note(game, { type: 'visitor', phase: 'left', name: b.name });
  game.visit = null;
}

export const EVENT_RULES = { first: 300, every: 510, jitter: 90, notice: 60, grace: 45 };
function evRand(game) {
  // Deterministic, separate from map generation.
  game.evSeed = (Math.imul(game.evSeed ^ (game.evSeed >>> 15), 2246822507) + 0x6d2b79f5) >>> 0;
  return game.evSeed / 4294967296;
}
function events(game, dt) {
  const R = EVENT_RULES;
  if (game.nextEvent === undefined) game.nextEvent = R.first + (evRand(game) - 0.5) * 2 * 60;
  game.happenings ||= [];
  if (game.time >= game.nextEvent) {
    const keys = Object.keys(EVENTS).filter((k) => !VISITS[k] || !game.visit);
    const kind = keys[Math.floor(evRand(game) * keys.length)];
    let h;
    if (VISITS[kind]) {
      // A visitor: it can be reached as soon as it's in, but only counts once
      // it's well inside the system; the pass ends with it leaving.
      const b = startVisit(game, kind);
      h = { id: game.nextId++, kind, at: b.id, starts: game.time + R.notice, ends: game.visit.t0 + game.visit.T - 20, holder: NEUTRAL, held: 0 };
    } else {
      const spots = game.bodies.filter((b) => !b.home && !b.visitor && !game.happenings.some((x) => x.at === b.id));
      const b = spots[Math.floor(evRand(game) * spots.length)];
      h = { id: game.nextId++, kind, at: b.id, starts: game.time + R.notice, ends: game.time + R.notice + EVENTS[kind].hold + R.grace, holder: NEUTRAL, held: 0 };
    }
    const b = game.bodies[h.at];
    game.happenings.push(h);
    note(game, { type: 'event', phase: 'soon', kind, at: b.id });
    game.nextEvent = game.time + R.every + (evRand(game) - 0.5) * 2 * R.jitter;
  }
  for (const h of game.happenings) {
    if (game.time < h.starts) continue;
    const b = game.bodies[h.at];
    const E = EVENTS[h.kind];
    // Holding means owning the world with no fight going on there.
    const owner = b.sieges.length ? NEUTRAL : b.owner;
    if (owner !== h.holder) { h.holder = owner; h.held = 0; }
    if (owner === NEUTRAL) continue;
    h.held += dt;
    if (h.kind === 'comet') { game.credits[owner] += E.pay * dt; tally(game, owner, 'earned', E.pay * dt); }
    if (h.held >= E.hold) { reward(game, h, b, owner); h.done = true; }
  }
  if (game.visit && game.time >= game.visit.t0 + game.visit.T - 1) endVisit(game);
  for (const h of game.happenings) if (!h.done && game.time > h.ends) { h.done = true; note(game, { type: 'event', phase: 'gone', kind: h.kind, at: h.at }); }
  game.happenings = game.happenings.filter((h) => !h.done);
}
function reward(game, h, b, owner) {
  const E = EVENTS[h.kind];
  let what = '';
  if (h.kind === 'derelict') { b.vet = mix(b.vet || 0, b.ships, 2.5, E.ships); b.ships += E.ships; what = `${E.ships} veteran ships`; }
  if (h.kind === 'wreck') { game.credits[owner] += E.credits; tally(game, owner, 'earned', E.credits); what = `${E.credits} credits`; }
  if (h.kind === 'convoy') { b.bonus = (b.bonus || 0) + E.bonus; what = `+${E.bonus}/s here`; }
  if (h.kind === 'comet') what = 'the comet mined';
  if (h.kind === 'signal') {
    const open = Object.keys(TECH).filter((k) => nextTech(game, owner, k));
    const k = open[Math.floor(evRand(game) * open.length)];
    if (k) { game.tech[owner][k] += 1; if (k === 'drives') refit(game, owner); what = TECH[k].levels[game.tech[owner][k] - 1]; } else { game.credits[owner] += 400; what = '400 credits'; }
  }
  if (h.kind === 'cache') {
    const x = b.structures.find((y) => RULES.structures[y.type].maxLevel && y.level < RULES.structures[y.type].maxLevel && y.left <= 0 && !y.scrap);
    if (x) { x.level += 1; what = `${RULES.structures[x.type].name} to level ${x.level}`; } else { game.credits[owner] += 300; what = '300 credits'; }
  }
  note(game, { type: 'event', phase: 'won', kind: h.kind, at: b.id, owner, what });
}

/** Does this owner hold a world with this perk? */
export const holds = (game, owner, perk) => owner !== NEUTRAL && game.bodies.some((b) => b.perk === perk && b.owner === owner);

// System types: each is a recipe for the layout, nothing else changes.
export const SYSTEMS = {
  classic: { name: 'Classic', text: 'Six worlds, a belt, a few moons' },
  court: { name: 'Giant’s court', text: 'One huge gas giant ringed with moons', court: true },
  wide: { name: 'Wide and cold', text: 'Few worlds, far apart', gap: 30, moons: 0.5, rocks: 3 },
  crowded: { name: 'Crowded', text: 'Worlds packed close: short, sharp trips', gap: 8, stations: 3 },
  belt: { name: 'Rich belt', text: 'A thick asteroid belt worth mining', rocks: 8, beltW: 12 },
  binary: { name: 'Binary', text: 'A second sun and its worlds swing around the system; its worlds earn +50%', companion: true },
};
const SUN_SIZE = 2.6;
const SUN_RADIUS_SIM = 6; // matches the drawn sun (render.js SUN_RADIUS)
export const SYSTEM_KEYS = Object.keys(SYSTEMS);
/** Types Random and the Daily draw from (tests only when picked by hand). */
export const RANDOM_KEYS = SYSTEM_KEYS.filter((k) => !SYSTEMS[k].test);
/** A star's position (binary: the companion circles far out, with its own worlds). */
export function starPos(game, i, t = game.time) {
  const s = game.stars[i];
  if (s.e) {
    // An eccentric (Kepler) orbit: slow and far at one end, then a fast,
    // close swing through the outer system at the other.
    const M = s.phase + (2 * Math.PI * t) / s.period;
    let E = M;
    for (let k = 0; k < 6; k++) E -= (E - s.e * Math.sin(E) - M) / (1 - s.e * Math.cos(E));
    const x = s.a * (Math.cos(E) - s.e);
    const z = s.a * Math.sqrt(1 - s.e * s.e) * Math.sin(E);
    return { x: x * Math.cos(s.w) - z * Math.sin(s.w), y: 0, z: x * Math.sin(s.w) + z * Math.cos(s.w) };
  }
  const th = s.phase + (2 * Math.PI * t) / s.period;
  return { x: Math.cos(th) * s.r, y: 0, z: Math.sin(th) * s.r };
}
/** The day's shared system: same seed and layout for everyone. */
export function dailySeed(date = new Date()) {
  const key = date.toISOString().slice(0, 10);
  let h = 2166136261;
  for (const c of key) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return { seed: h >>> 0, system: RANDOM_KEYS[(h >>> 0) % RANDOM_KEYS.length], key };
}

export function createGame({ seed = Date.now(), opponents = 1, mp = false, system = 'classic' } = {}) {
  const rand = rng(seed);
  const sys = SYSTEMS[system] || SYSTEMS.classic;
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
    // Neutral defences; gas giants are rich, so they start well defended.
    b.guns = b.kind === 'planet' ? (b.giant ? 5 : 2) : 1 + Math.floor(rand() * 2);
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
    const court = sys.court && i === 5;
    const giant = court || (!homeIdx.includes(i) && i >= 3 && rand() < (sys.court ? 0.3 : 0.7));
    const size = court ? 5 : giant ? 3.2 + rand() * 1.2 : 1.6 + rand() * 1.1;
    let count = i === 0 ? 0 : homeIdx.includes(i) ? 1 : court ? 5 : giant ? 1 + Math.floor(rand() * 3) : Math.floor(rand() * 2);
    if (sys.moons && !homeIdx.includes(i)) count = Math.floor(count * sys.moons);
    const moons = [];
    for (let m = 0; m < count; m++) {
      moons.push({ r: size * 3.4 + 6 + m * 7 + rand() * 0.8, size: 0.5 + rand() * 0.5, period: 300 + m * 150 + rand() * 120 });
    }
    specs.push({ giant, size, moons, station: false });
  }
  const hostIdx = [1, 2, 3, 4, 5].sort(() => rand() - 0.5).slice(0, sys.stations || 2);
  for (const i of hostIdx) specs[i].station = true;
  // A home's one companion is its station if it has one, otherwise its moon.
  for (const i of homeIdx) if (specs[i].station) specs[i].moons = [];
  for (const sp of specs) {
    sp.reach = Math.max(sp.size * 1.6, sp.station ? sp.size * 1.5 + 1 : 0, ...sp.moons.map((m) => m.r + m.size));
  }

  // Orbits outward from the sun, each at least both families' reach plus a gap
  // apart; the asteroid belt gets its own lane after the fourth planet.
  const GAP = sys.gap || 16;
  let beltR = 0;
  let prev = null;
  for (const [i, sp] of specs.entries()) {
    if (!prev) sp.r = sys.inner || 56;
    else sp.r = prev.r + prev.reach + sp.reach + GAP + rand() * 10;
    if (i === 4) {
      beltR = prev.r + prev.reach + GAP;
      sp.r = beltR + (sys.beltW || 6) + GAP + sp.reach + rand() * 10;
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
  const rocks = sys.rocks || 4;
  for (let k = 0; k < rocks; k++) {
    const r = beltR + rand() * (sys.beltW || 6);
    add({
      kind: 'asteroid', name: pick(ROCK_NAMES, names), parent: null, r, period: periodAt(r),
      phase: (k / rocks) * Math.PI * 2 + rand() * 0.8, incl: (rand() - 0.5) * 0.1, size: 0.5 + rand() * 0.4, hue: rand(),
    });
  }

  // Homes: planets in the middle orbits, spread around the sun as far apart as possible now.
  // The sun is big (2.6× the old size) on every map; planets start further out.
  const stars = [{ r: 0, period: 1, phase: 0, size: SUN_SIZE }];
  if (sys.companion) {
    // A smaller companion sun on an eccentric orbit, with two worlds of its
    // own: most of the time it hangs far out, then once a game or so it swings
    // in fast through the outer system and away again. When depends on the map.
    const outer = Math.max(...bodies.filter((b) => b.parent === null).map((b) => b.r));
    const q = outer + 22; // closest approach: its worlds sweep the outer orbits
    const e = 0.35;
    stars.push({ a: q / (1 - e), e, w: rand() * Math.PI * 2, period: 2800, phase: rand() * Math.PI * 2, size: 0.5, clear: 9 });
    [[16, 1.9], [30, 2.4]].forEach(([r, size], k) => {
      const planet = add({ kind: 'planet', name: pick(PLANET_NAMES, names), parent: null, star: 1, r, period: 140 + k * 160, phase: rand() * Math.PI * 2, incl: (rand() - 0.5) * 0.06, size, giant: false, hue: rand() });
      if (k === 1) add({ kind: 'moon', name: pick(MOON_NAMES, names), parent: planet.id, r: size * 3.4 + 6, period: 260, phase: rand() * Math.PI * 2, incl: 0.2, size: 0.7, hue: rand() });
    });
  }
  // The visitor: one body that events turn into a comet or a derelict, on a
  // pass in around the sun and out again. Absent (far away) the rest of the time.
  add({ kind: 'visitor', name: 'Visitor', parent: null, r: 0, period: 1, phase: 0, incl: 0, size: 0.8, hue: 0.55, visitor: true }).guns = 0;
  const game = { mp, system: sys === SYSTEMS[system] ? system : 'classic', stars, gravity: true, sunClear: SUN_RADIUS_SIM * SUN_SIZE + 6, bodies, fleets: [], players, time: 0, winner: null, nextId: 1, events: [], nameSeed: Math.floor(rand() * 100000) };
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
  // Special worlds: three perks on neutral worlds away from the homes.
  const homeFamily = new Set(homes.flatMap((h) => [h.id, ...bodies.filter((b) => b.parent === h.id).map((b) => b.id)]));
  const perkKeys = Object.keys(PERKS).sort(() => rand() - 0.5);
  let placed = 0;
  for (const k of perkKeys) {
    if (placed >= 3) break;
    const P = PERKS[k];
    const spots = bodies.filter((b) => b.owner === NEUTRAL && !b.perk && !b.visitor && !homeFamily.has(b.id)
      && (!P.kinds || P.kinds.includes(b.kind)) && (!P.giantMoon || (b.kind === 'moon' && bodies[b.parent].giant)));
    if (!spots.length) continue;
    const b = spots[Math.floor(rand() * spots.length)];
    b.perk = k;
    if (k === 'fortress') { b.structures.push({ type: 'defence', level: 2, left: 0 }); b.guns = maxGuns(b) + 1; }
    if (k === 'hulk' && !b.structures.some((x) => x.type === 'shipyard')) b.structures.push({ type: 'shipyard', level: 1, left: 0 });
    placed++;
  }
  game.evSeed = Math.floor(rand() * 2 ** 31);
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
  if (b.visitor) return 0;
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
/** +1 gun on worlds near a fortress rock their owner holds. */
export function fortressGuns(game, b) {
  if (b.owner === NEUTRAL || b.perk === 'fortress') return 0;
  const p = posAt(game, b, game.time);
  return game.bodies.some((f) => f.perk === 'fortress' && f.owner === b.owner && dist(posAt(game, f, game.time), p) <= PERKS.fortress.range) ? 1 : 0;
}
/** Guns a held world rebuilds to: batteries, fortress cover, hardening, a fortress world. */
export const topGuns = (game, b) => (maxGuns(b) + fortressGuns(game, b) + (hasJoint(game, b.owner, 'hardened') ? 1 : 0)) * (b.wonder === 'citadel' ? 3 : 1);
export const maxGuns = (b) => RULES.baseGuns + RULES.gunsPerDefence * count(b, 'defence');
export const incomeOf = (b, game) => {
  if (b.owner === NEUTRAL) return 0;
  const mining = 1 + 0.15 * (game ? techLevel(game, b.owner, 'industry') : 0);
  const S = RULES.structures;
  return (b.wonder === 'sundiver' ? 8 : 0) + RULES.income[b.kind] * (b.star ? 1.5 : 1) + (b.home ? RULES.homeIncome : 0) + (b.bonus || 0) + RULES.mineIncome * count(b, 'mine') * mining * (b.perk === 'seam' ? 2 : 1)
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
  if (b.visitor) return visitPos(game, t);
  const th = b.phase + (2 * Math.PI * t) / b.period;
  const p = { x: Math.cos(th) * b.r, y: Math.sin(th) * b.r * b.incl, z: Math.sin(th) * b.r };
  if (b.star) {
    // Worlds of the companion star ride along with it.
    const q = starPos(game, b.star, t);
    p.x += q.x; p.z += q.z;
  }
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

/** Position and velocity along a transfer, tau seconds after launch (with any gravity drift). */
function along(f, tau) {
  const p = pureAlong(f, tau);
  if (!f.gs) return p;
  const d = lerpDrift(f.gs, Math.max(0, Math.min(1, tau / f.T)));
  return { x: p.x + d[0], y: p.y + d[1], z: p.z + d[2], vx: p.vx + d[3], vy: p.vy + d[4], vz: p.vz + d[5] };
}
function pureAlong(f, tau) {
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

function clearOfSun(f, game, now) {
  for (let k = 1; k < 64; k++) {
    const tau = (k / 64) * f.T;
    const p = along(f, tau);
    if (len(p) < (game.sunClear || SUN_CLEAR)) return false;
    // A companion sun: keep clear of it too, wherever it will be.
    for (let i = 1; i < (game.stars || []).length; i++) if (dist(p, starPos(game, i, now + tau)) < game.stars[i].clear) return false;
  }
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

/** A held fuel depot near the launch world speeds the flight. */
export function depotBoost(game, from, now = game.time) {
  if (from.owner === NEUTRAL) return 1;
  const p = posAt(game, from, now);
  return game.bodies.some((d) => d.perk === 'depot' && d.owner === from.owner && dist(posAt(game, d, now), p) <= PERKS.depot.range) ? PERKS.depot.boost : 1;
}

/**
 * The route a fleet will fly (with the sun's gravity). `quick` skips the
 * gravity solve: a close estimate of the flight time, for AI planning.
 */
export function plan(game, from, to, now = game.time, speed = 1, quick = false) {
  speed *= depotBoost(game, from, now) * (from.wonder === 'massdriver' ? 1.5 : 1);
  const direct = planWith(game, from, to, now, accelOf(game, from.owner) * speed, null, quick);
  const g = assistBy(game, direct, from, to, now);
  if (!g) return direct;
  const fast = planWith(game, from, to, now, accelOf(game, from.owner) * speed * ASSIST.boost, null, quick);
  // Only if the faster path still swings past the same giant.
  return fast.T < direct.T && assistBy(game, fast, from, to, now) === g ? { ...fast, assist: g.id } : direct;
}

// Gravity (Giant sun only): the sun's pull, consistent with the planets'
// orbits (GM = 4π² r³ / P²), acts on ships all through a flight. The drive
// still flies two straight burns; the pull adds a drift the plan corrects for.
export const GRAVITY = { share: 1 }; // 1 = the full pull that holds the planets in orbit
const GM0 = (4 * Math.PI * Math.PI * RULES.outerRadius ** 3) / RULES.outerPeriod ** 2;
const GSTEPS = 48;
/** Drift from gravity along a path (position and velocity offsets at GSTEPS+1 points). */
function drift(f, gs0) {
  const dt = f.T / GSTEPS;
  const gs = [[0, 0, 0, 0, 0, 0]];
  let x = 0, y = 0, z = 0, vx = 0, vy = 0, vz = 0;
  for (let k = 0; k < GSTEPS; k++) {
    // Pull at the midpoint of the step, on the path including the drift so far.
    const tm = (k + 0.5) * dt;
    const b = pureAlong(f, tm);
    const prev = gs0 ? lerpDrift(gs0, (k + 0.5) / GSTEPS) : [x + vx * dt * 0.5, y + vy * dt * 0.5, z + vz * dt * 0.5];
    const px = b.x + prev[0], py = b.y + prev[1], pz = b.z + prev[2];
    const r2 = px * px + py * py + pz * pz;
    const k3 = (-GM0 * GRAVITY.share) / (r2 * Math.sqrt(r2));
    vx += k3 * px * dt; vy += k3 * py * dt; vz += k3 * pz * dt;
    x += vx * dt; y += vy * dt; z += vz * dt;
    gs.push([x, y, z, vx, vy, vz]);
  }
  return gs;
}
function lerpDrift(gs, u) {
  const i = Math.min(GSTEPS - 1, Math.floor(u * GSTEPS));
  const k = u * GSTEPS - i;
  const a = gs[i], b = gs[i + 1];
  return a.map((v, j) => v + (b[j] - v) * k);
}

function planWith(game, from, to, now, accel, start = null, quick = false) {
  const p0 = start ? start.p : posAt(game, from, now);
  const v0 = start ? start.v : velAt(game, from, now);
  const make0 = (T) => {
    // Aim for a parking orbit beside the target, on the side we come in from.
    const c = posAt(game, to, now + T);
    const away = sub(p0, c);
    const l = len(away) || 1;
    const park = parkRadius(to);
    const p1 = { x: c.x + (away.x / l) * park, y: c.y + (away.y / l) * park, z: c.z + (away.z / l) * park };
    const v1 = velAt(game, to, now + T);
    return { p0, v0, p1, v1, T, ...burns(p0, v0, p1, v1, T) };
  };
  // With gravity: solve for burns that land on target once the pull is added
  // (a few rounds: guess burns, work out the drift, correct the burns).
  const makeG = (T) => {
    let f = make0(T);
    let gs = null;
    for (let i = 0; i < 12; i++) {
      gs = drift(f, gs);
      const g = gs[GSTEPS];
      const p1 = { x: f.p1.x - g[0], y: f.p1.y - g[1], z: f.p1.z - g[2] };
      const v1 = { x: f.v1.x - g[3], y: f.v1.y - g[4], z: f.v1.z - g[5] };
      const nb = burns(p0, v0, p1, v1, T);
      // Damped: move most of the way to the new burns (steadier near the sun).
      const k = i < 2 ? 1 : 0.7;
      const mixv = (a, c) => ({ x: a.x + (c.x - a.x) * k, y: a.y + (c.y - a.y) * k, z: a.z + (c.z - a.z) * k });
      const a1 = mixv(f.a1, nb.a1), a2 = mixv(f.a2, nb.a2);
      f = { ...f, a1, a2, need: Math.max(len(a1), len(a2)) };
    }
    const check = drift(f, gs);
    const end = pureAlong(f, T);
    const miss = Math.hypot(end.x + check[GSTEPS][0] - f.p1.x, end.y + check[GSTEPS][1] - f.p1.y, end.z + check[GSTEPS][2] - f.p1.z);
    f.gs = check;
    if (miss > 0.5) f.need = Infinity; // didn't settle: treat as out of reach
    return f;
  };
  const make = make0;
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
    if (game.gravity && !quick && clearOfSun(f, game, now)) {
      // Now with the sun's pull: from the gravity-free time upward. If no
      // flight settles, fall back to the plain path (rare, very long hauls).
      for (let T2 = hi; T2 < hi * 2.5 + 40; T2 *= 1.06) {
        const g = makeG(T2);
        if (g.need <= accel && clearOfSun(g, game, now)) return g;
      }
      return f;
    }
    if (clearOfSun(f, game, now)) return f;
    prev = T;
  }
  return game.gravity && !quick ? makeG(20000) : make(20000);
}

/** Ships that just arrived need a short turnaround before they can leave. */
export const restingShips = (game, b) => (b.restUntil > game.time ? Math.min(b.resting || 0, b.ships) : 0);
export const readyShips = (game, b) => b.ships - restingShips(game, b);
function rest(game, b, n) {
  b.resting = restingShips(game, b) + n;
  b.restUntil = game.time + RULES.cooldown;
}

export function launch(game, from, to, n, dark = false) {
  n = Math.min(Math.floor(n), readyShips(game, from));
  if (n < 1 || from === to || game.winner !== null) return null;
  const p = plan(game, from, to, game.time, dark ? DARK.speed : 1);
  if (p.T > staysFor(game, to) - 5 || !present(game, to)) return null;
  from.ships -= n;
  const f = { id: game.nextId++, owner: from.owner, n, from: from.id, to: to.id, ...p, t0: game.time, vet: from.vet || 0 };
  if (dark) f.dark = true;
  // The bulk of a garrison keeps its task force name; a small detachment gets a new one.
  if (from.tf && n * 2 >= n + from.ships) { f.name = from.tf; from.tf = null; }
  else f.name = fleetName(game);
  if (!from.ships) from.tf = null;
  game.fleets.push(f);
  note(game, { type: 'launch', owner: f.owner, fleet: f.id, name: f.name, n, from: from.id, to: to.id });
  return f;
}

/**
 * Better drives reach ships already in flight: each fleet re-plans from where
 * it is now, at the new thrust, if that gets it there sooner.
 */
function refit(game, owner) {
  for (const f of game.fleets) {
    if (f.owner !== owner) continue;
    const left = f.T - (game.time - f.t0);
    if (left < 10) continue;
    const s = fleetState(f, game.time);
    const accel = accelOf(game, owner) * (f.probe ? RULES.probe.speed : f.dark ? DARK.speed : 1);
    const p = planWith(game, null, game.bodies[f.to], game.time, accel, { p: { x: s.x, y: s.y, z: s.z }, v: { x: s.vx, y: s.vy, z: s.vz } });
    if (p.T >= left) continue;
    delete f.assist;
    Object.assign(f, p, { t0: game.time });
  }
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
  if (cantProbe(game, from, to) || game.winner !== null || !present(game, to)) return null;
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
/**
 * Supporting fire within a planet's family, if the same side holds them: the
 * planet's guns cover its moons and stations at half strength; each moon's or
 * station's guns cover the planet and the other satellites at a quarter.
 * Returns [{ from, n }] (n in guns).
 */
export function coverFrom(game, b) {
  if (b.owner === NEUTRAL || b.visitor) return [];
  const head = b.parent === null ? b : game.bodies[b.parent];
  const family = [head, ...game.bodies.filter((x) => x.parent === head.id)];
  const out = [];
  for (const x of family) {
    if (x === b || x.owner !== b.owner || x.guns <= 0) continue;
    const share = x.wonder === 'citadel' ? 1 : x === head ? RULES.coverShare : RULES.moonCover;
    out.push({ from: x, n: x.guns * share });
  }
  return out;
}
export const coverOf = (game, b) => coverFrom(game, b).reduce((n, c) => n + c.n, 0);

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
    attackFire += g.n * (1 + VET_BONUS * vetLevel(g.vet)) * attackPowerOf(game, g.owner);
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
    b.resting = 0;
    rest(game, b, win.n);
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
    const speed = buildSpeed(game, b.owner, b);
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
    const yardK = (hasJoint(game, b.owner, 'torch') ? 1.25 : 1) * (b.wonder === 'ringyard' ? 3 : 1);
    b.slips = b.slips.map((p) => p + (dt * speed * yardK) / RULES.ship.time);
    for (const p of b.slips) if (p >= 1) { b.vet = mix(b.vet || 0, b.ships, b.perk === 'hulk' ? PERKS.hulk.vet : 0, 1); b.queue -= 1; b.ships += 1; tally(game, b.owner, 'built'); }
    b.slips = b.slips.filter((p) => p < 1);
    b.build = b.slips.length ? Math.max(...b.slips) : 0;
    const top = topGuns(game, b);
    const regen = RULES.gunRegen * (hasJoint(game, b.owner, 'hardened') ? 2 : 1);
    if (b.guns < top) b.guns = Math.min(top, b.guns + regen * dt);
  }

  for (const [owner, t] of (game.tech || []).entries()) {
    if (!t.project) continue;
    t.project.left -= dt * researchSpeed(game, owner);
    if (t.project.left <= 0) {
      t[t.project.key] = (t[t.project.key] || 0) + 1;
      if (t.project.key === 'drives') refit(game, owner); note(game, { type: 'research', owner, key: t.project.key, level: t[t.project.key] }); t.project = null; tally(game, owner, 'research'); }
  }

  if (game.scans) game.scans = game.scans.filter((x) => x.until > game.time);
  stepSpies(game, dt);
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
      rest(game, b, f.n);
      note(game, { type: 'arrived', owner: f.owner, name: f.name, n: f.n, at: b.id });
    } else {
      // A point-defence net picks off part of the fleet on the way in; a
      // kinetic strike opens with a volley that knocks out defenders.
      if (hasJoint(game, b.owner, 'pdnet')) f.n -= Math.round(f.n * 0.15);
      if (f.n <= 0) { note(game, { type: 'wiped', owner: f.owner, name: f.name, at: b.id, vs: b.owner }); return false; }
      if (hasJoint(game, f.owner, 'kinetic')) {
        let k = Math.round(f.n * 0.2);
        while (k-- > 0 && b.ships + b.guns > 0) { if (b.ships > 0) b.ships -= 1; else b.guns = Math.max(0, b.guns - 1); }
      }
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
  stepProjects(game, dt);
  if (game.evSeed !== undefined) events(game, dt);

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
