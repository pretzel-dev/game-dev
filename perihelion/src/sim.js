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
    habitat: { name: 'Habitat', cost: 300, time: 60, maxLevel: 3, crewOnly: true, desc: 'Quarters for crews: +4 crew per level' },
  },
  baseGuns: 1, // guns any held world has
  gunsPerDefence: 2,
  coverShare: 0.5, // a planet's guns also fire on attackers at its moons and stations
  moonCover: 0.25, // and a moon's or station's guns help its planet and the rest of the family
  fire: 0.12, // ships destroyed per second, per firing ship (or gun)
  gunRegen: 0.02, // guns rebuilt per second after a fight
  flipTime: 4, // seconds spent turning around at the midpoint
  scrapRefund: 0.4, // share of what a structure cost (all its levels) you get back for scrapping it
  scrapTime: 20, // seconds to tear one down (cancelled if the world is taken)
  cooldown: 15, // seconds before newly arrived ships can launch again
  // Unmanned probe: fast, single use; a flyby reveals a world for a while.
  probe: { cost: 80, speed: 4, scan: 150 }, // speed multiplies thrust: twice as fast as a ship
  cancelRefund: 0.8, // share of a ship's cost returned when cancelled
  labSpeed: 0.5, // research speed added per research-station level
  // Crews, fuel and refits: every ship beyond the first `free` costs credits per second.
  upkeep: { free: 40, cost: 0.05 },
  // Crews (Vast only): ships need crews, and crews come from your worlds. The
  // fleet (in service and on order) can't outgrow the crew you can field.
  crew: { home: 16, planet: 8, giant: 6, station: 6, moon: 3, asteroid: 1, habitat: 4, industry: 0.1, convoy: 4 },
  drill: 0.004, // experience per second a garrison regains, up to the rank it once held
  // Fuel (Reaction mass only): the speed change one tank buys, per trip (each
  // world you hold refuels you); probes carry twice as much for their size.
  fuel: { tank: 1.2, probe: 2 },
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
    text: ['Read enemy fleet sizes; recruit agents; catch enemy agents more often', 'Learn enemy routes and landing points', 'Know arrival times; get warnings'],
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
// Running dark: a short burn, then a long silent coast, then a short braking
// burn. Slower, but while coasting enemy sensors only pick the fleet up close.
export const DARK = { burn: 0.12, seen: 0.3 }; // each burn is 12% of the flight; the rest is a silent coast
// Spies: planted on an enemy world. While there they show you the world and
// its fleets, skim its income and slow any megaproject there. Each
// second there's a chance they're caught; the owner's Intel and any security
// bureau nearby raise it.
export const SPY = { travel: 40, cost: 250, catch: 1 / 300, intel: 0.5, bureau: 1.5, bureauRange: 40, skim: 0.4, slow: 0.25 };
export const SENSOR_RANGE = [70, 100, 135, 175];
// Joint techs: on the hex board they sit between two branches and need both
// at level II. Ring order of the branches: intel, sensors, weapons, drives,
// industry, armour; each joint joins two neighbours.
export const BRANCH_RING = ['intel', 'sensors', 'weapons', 'drives', 'industry', 'armour'];
export const JOINTS = {
  ansible: { name: 'Entangled signals', needs: ['intel', 'sensors'], cost: 1100, time: 220, text: 'Read every fleet you can see: its size, destination and arrival time; get warnings' },
  targeting: { name: 'Targeting data', needs: ['sensors', 'weapons'], cost: 1100, time: 220, text: '+20% firepower when attacking' },
  kinetic: { name: 'Kinetic strike', needs: ['weapons', 'drives'], cost: 1100, time: 220, text: 'Fleets arrive firing: an opening volley destroys a tenth of their number in defenders' },
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
  sundiver: { needs: 'torch', name: 'Sun-diver collectors', where: 'inner', text: 'Every world you hold earns 50% more', cost: 2000, time: 480 },
  massdriver: { needs: 'kinetic', name: 'Mass driver', where: 'planet', text: 'Fleets launched here fly 50% faster', cost: 2000, time: 480 },
  ringyard: { needs: 'hardened', name: 'Ring yard', where: 'giant', text: 'Ships build three times as fast here', cost: 2000, time: 480 },
  citadel: { needs: 'pdnet', name: 'Fortress world', where: 'any', text: 'Twice the guns here, and its cover reaches its family at full strength', cost: 2000, time: 480 },
  array: { needs: 'ansible', name: 'Ansible array', where: 'any', text: 'See every world and fleet in the system, and where they are going', cost: 2000, time: 480 },
  college: { needs: 'targeting', name: 'War college', where: 'any', text: 'Simulator-trained crews: every ship you build starts as a veteran (second rank)', cost: 2000, time: 480 },
};
const holdsWonder = (game, owner, key) => owner !== NEUTRAL && game.bodies.some((b) => b.wonder === key && b.owner === owner);
export function cantProject(game, b, key) {
  const P = PROJECTS[key];
  if (b.owner === NEUTRAL || b.visitor) return 'not yours';
  if (!hasJoint(game, b.owner, P.needs)) return `needs ${JOINTS[P.needs].name}`;
  if (b.project || b.wonder) return 'this world already has one';
  if (game.wonders && game.wonders[key] !== undefined) return 'already built';
  if (game.bodies.some((x) => x.project && x.project.key === key && x.owner === b.owner)) return 'already building it';
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
/** Megaprojects: research stations help, at half the rate they help research. */
export const projectSpeed = (game, owner) => 1 + 0.5 * (researchSpeed(game, owner) - 1);
function stepProjects(game, dt) {
  for (const b of game.bodies) {
    if (!b.project || b.owner === NEUTRAL || b.sieges.length) continue;
    b.project.left -= dt * projectSpeed(game, b.owner) * (spyOn(game, b).length ? 1 - SPY.slow : 1);
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

// Trip time goes with 1/sqrt(thrust), so a fleet that flies k times as fast needs k² the thrust.
/** The speed change (units/s) a fleet's tank buys for one trip: Infinity unless the map rations fuel. Drives research stretches it too. */
export const tankOf = (game, owner) => (game.fuel ? RULES.fuel.tank * (1 + 0.15 * techLevel(game, owner, 'drives')) : Infinity);
export const accelOf = (game, owner) => RULES.accel * (game.thrust || 1) * (1 + 0.15 * techLevel(game, owner, 'drives')) * (hasJoint(game, owner, 'torch') ? 1.1 ** 2 : 1);
export const firepowerOf = (game, owner) => 1 + 0.15 * techLevel(game, owner, 'weapons');
/** Firepower when attacking (targeting data helps here). */
export const attackPowerOf = (game, owner) => firepowerOf(game, owner) * (hasJoint(game, owner, 'targeting') ? 1.2 : 1);
export const damageTaken = (game, owner) => 1 - 0.12 * techLevel(game, owner, 'armour');
export const buildSpeed = (game, owner, b = null) => (1 + 0.12 * techLevel(game, owner, 'industry')) * (b && b.perk === 'forge' ? PERKS.forge.boost : 1);

export function nextTech(game, owner, key) {
  const lvl = game.tech[owner][key] || 0;
  if (JOINTS[key]) {
    const J = JOINTS[key];
    return lvl ? null : { level: 1, cost: J.cost, time: J.time, text: J.text, title: J.name };
  }
  const d = TECH[key];
  return lvl < d.cost.length ? { level: lvl + 1, cost: d.cost[lvl], time: d.time[lvl], text: techText(game, key, lvl), title: d.levels[lvl] } : null;
}
/** What a branch's level (0-based) does, with the extras this map adds (crews on Vast). */
export function techText(game, key, i) {
  const t = TECH[key].text[i];
  return game.crew && key === 'industry' ? `${t}, crews +${Math.round(RULES.crew.industry * 100 * (i + 1))}%` : t;
}
/** What holding an event's world wins, with the extras this map adds. */
export function eventText(game, kind) {
  const t = EVENTS[kind].text;
  return game.crew && kind === 'convoy' ? `${t}, and ${RULES.crew.convoy} crew sign on` : t;
}
export function researchSpeed(game, owner) {
  // Research stations on an archive world count double.
  const labs = game.bodies.reduce((n, b) => n + (b.owner === owner ? count(b, 'lab') * (b.perk === 'archive' ? 2 : 1) : 0), 0);
  // Some maps research slower (Vast: the bigger game runs longer).
  return (1 + RULES.labSpeed * labs) * (holds(game, owner, 'archive') ? PERKS.archive.boost : 1) * (game.research || 1);
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
  const x = { id: game.nextId++, owner, body: t.id, since: game.time + SPY.travel };
  (game.spies ||= []).push(x);
  return x;
}
/** How far a security bureau on world w reaches (twice as far on a listening post). */
export const bureauReach = (game, w) => SPY.bureauRange * (w.perk === 'post' ? 2 : 1) * scaleOf(game);
/** A perk's reach on this map. */
export const perkRange = (game, key) => PERKS[key].range * scaleOf(game);
export const spyOn = (game, b) => (game.spies || []).filter((x) => x.body === b.id && x.owner !== b.owner && x.since <= game.time);
/** Chance per second a spy on world b gets caught. */
export function catchRate(game, b) {
  if (b.owner === NEUTRAL) return 1;
  const here = posAt(game, b, game.time);
  let bureau = 0;
  for (const w of game.bodies) {
    if (w.owner !== b.owner) continue;
    const s = w.structures.find((y) => y.type === 'bureau' && y.left <= 0);
    // A bureau on a listening post reaches twice as far.
    if (s && (w === b || dist(posAt(game, w, game.time), here) <= bureauReach(game, w))) bureau = Math.max(bureau, s.level);
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
    if (x.since > game.time) return true; // still on the way in
    // Skim income while hidden.
    const skim = Math.min(game.credits[b.owner], incomeOf(b, game) * SPY.skim * dt);
    game.credits[b.owner] -= skim; game.credits[x.owner] += skim;
    tally(game, x.owner, 'earned', skim);
    const rate = catchRate(game, b);
    for (let k = Math.max(before, Math.floor(x.since)) + 1; k <= Math.floor(game.time); k++) {
      if (coin(x.id, k) < rate) { note(game, { type: 'spycaught', owner: x.owner, by: b.owner, at: b.id, after: game.time - x.since }); return false; }
    }
    return true;
  });
}
export const spiedBy = (game, owner) => (game.spies || []).filter((x) => x.owner !== owner && game.bodies[x.body].owner === owner).length;

export function visibility(game, owner) {
  const range = SENSOR_RANGE[techLevel(game, owner, 'sensors')] * scaleOf(game);
  const eyes = [];
  for (const b of game.bodies) if (b.owner === owner) eyes.push([posAt(game, b, game.time), range]);
  for (const f of game.fleets) if (f.owner === owner) eyes.push([fleetState(f, game.time), 20 * scaleOf(game)]);
  for (const b of game.bodies) if (b.sieges.some((g) => g.owner === owner)) eyes.push([posAt(game, b, game.time), 20]);
  for (const x of game.scans || []) if (x.owner === owner && x.until > game.time) eyes.push([posAt(game, game.bodies[x.body], game.time), 14]);
  for (const x of game.spies || []) if (x.owner === owner && x.since <= game.time) eyes.push([posAt(game, game.bodies[x.body], game.time), 30]);
  const sees = (p) => eyes.some(([e, r]) => dist(e, p) <= r);
  // An old relay you hold is a huge sensor dish: it sees everything in its ring.
  for (const b of game.bodies) if (b.perk === 'relay' && b.owner === owner) eyes.push([posAt(game, b, game.time), perkRange(game, 'relay')]);
  const bodies = new Set(game.bodies.filter((b) => b.owner === owner || sees(posAt(game, b, game.time))).map((b) => b.id));
  // Entangled signals read every fleet you see; an ansible array sees everything.
  const intel = Math.max(techLevel(game, owner, 'intel'), hasJoint(game, owner, 'ansible') || holdsWonder(game, owner, 'array') ? 3 : 0);
  // A dark fleet shows only close in, unless a spy sits on the world it left.
  const spied = new Set((game.spies || []).filter((x) => x.owner === owner && x.since <= game.time).map((x) => x.body));
  const seesFleet = (f, p = fleetState(f, game.time)) => f.owner === owner || spied.has(f.from)
    || (f.dark && !p.burning ? eyes.some(([e, r]) => dist(e, p) <= r * DARK.seen) : sees(p));
  if (holdsWonder(game, owner, 'array')) return { owner, sees: () => true, seesFleet: () => true, bodies: new Set(game.bodies.map((b) => b.id)), intel, warn: true };
  return { owner, sees, seesFleet, bodies, intel, warn: holds(game, owner, 'post') || hasJoint(game, owner, 'ansible') };
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
/** The sun's pull (G times its mass), from the outermost planet's year: GM = 4π² r³ / P². */
export const GM_SUN = (4 * Math.PI * Math.PI * RULES.outerRadius ** 3) / RULES.outerPeriod ** 2;
/** The period of an orbit of radius r round a body pulling with gm (Kepler's third law). */
export const kepler = (r, gm) => 2 * Math.PI * Math.sqrt((r * r * r) / gm);
/**
 * Masses (as G times mass). Worlds on the usual maps are dense, as in most
 * space games, so their moons can sit close enough to be worth a short hop;
 * gas giants are lighter for their size. On realistic maps (Vast) worlds have
 * true-to-life masses next to the sun: a gas giant about a thousandth of it.
 */
const DENSITY = { rock: 0.06, gas: 0.035 };
const REAL_MASS = { rock: 3e-5, gas: 1e-3 };
/**
 * A moon only stays bound well inside its planet's Hill sphere (where the
 * planet's pull beats the sun's tides): about half of it at most.
 */
const HILL = 0.5;
const hillRadius = (a, gm, gmStar) => a * Math.cbrt(gm / (3 * gmStar));

// Special worlds: a few neutrals carry a perk for whoever holds them.
export const PERKS = {
  seam: { name: 'Rich seam', text: 'Mines here pay double', kinds: ['asteroid', 'moon'], fits: 'mine' },
  relay: { name: 'Old relay', text: 'See everything inside its ring', range: 160 },
  depot: { name: 'Fuel depot', text: 'Fleets launched from your worlds inside its ring fly 20% faster', range: 120, boost: 1.2 },
  post: { name: 'Listening post', text: 'Warns of fleets heading for your worlds. A Security bureau here reaches twice as far', fits: 'bureau' },
  fortress: { name: 'Fortress rock', text: 'Heavy guns; +1 gun on each of your worlds inside its ring. Guns built here give half as many again', range: 100, fits: 'defence' },
  archive: { name: 'Ancient archive', text: 'Research 25% faster. Research stations here count double', boost: 1.25, fits: 'lab' },
  hulk: { name: 'Drydock hulk', text: 'Ships built here start as veterans. Its shipyards build 50% faster', vet: 2.5, fits: 'shipyard' },
  forge: { name: 'Tidal forge', text: 'Tidal heat runs the foundries: structures, upgrades and ships build twice as fast here', boost: 2, giantMoon: true },
};
// Events: announced a minute ahead at a world; whoever holds that world for
// the hold time (without losing it) gets the reward.
export const EVENTS = {
  comet: { name: 'Comet pass', text: 'Catch it on its pass round the sun and hold it to mine it', hold: 60, pay: 9 },
  derelict: { name: 'Derelict warship', text: 'Catch the drifting hulk and hold it to salvage veteran ships', hold: 45, ships: 4 },
  signal: { name: 'Lost probe signal', text: 'Hold to recover a research level', hold: 40 },
  wreck: { name: 'Ice-hauler wreck', text: 'Hold to salvage its cargo', hold: 45, credits: 450 },
  convoy: { name: 'Refugee convoy', text: 'Hold when it docks: the world earns +1/s for good', hold: 30, bonus: 1 },
  cache: { name: 'Supply cache', text: 'Hold for a free structure upgrade', hold: 30 },
};
// First one at 4-6 minutes, then every 7-10 minutes (never quite regular).
// Comets and derelicts arrive as visitors: they fly in, whip round the sun on a
// hyperbolic (Kepler) pass and leave for good, like the real interstellar
// visitors. Hold one while it's here.
const VISITS = {
  // Slow enough to catch: ships must match a visitor's speed to board it.
  comet: { inside: 600, q: [70, 120], guns: 0 },
  derelict: { inside: 540, q: [100, 160], guns: 2 },
};
// A pass starts and ends a little beyond the outermost planet; `inside` is
// how long it spends within the planets' orbits (9 or 10 minutes). The
// orbit's eccentricity is whatever the sun's gravity needs for that (about 2:
// the sun bends its path through 50-60 degrees).
/** Is this body on the map right now? (Only the visitor ever isn't.) */
export const present = (game, b, t = game.time) => !b.visitor || (!!game.visit && t >= game.visit.t0 && t <= game.visit.t0 + game.visit.T);
/** Seconds until the visitor leaves (Infinity for anything else). */
export const staysFor = (game, b) => (b.visitor ? (game.visit ? game.visit.t0 + game.visit.T - game.time : 0) : Infinity);
function visitPos(game, t) {
  const v = game.visit;
  if (!v || t < v.t0 || t > v.t0 + v.T) return { x: 4000, y: 0, z: 4000 };
  // Kepler's equation for a hyperbola: e sinh F - F grows steadily with time.
  const M = v.n * (t - v.t0 - v.T / 2);
  let F = Math.asinh(M / v.e);
  for (let k = 0; k < 30; k++) {
    const d = (v.e * Math.sinh(F) - F - M) / (v.e * Math.cosh(F) - 1);
    F -= d;
    if (Math.abs(d) < 1e-12) break;
  }
  const x = v.a * (v.e - Math.cosh(F)), z0 = v.a * Math.sqrt(v.e * v.e - 1) * Math.sinh(F);
  const y = z0 * 0.04, z = z0 * Math.sqrt(1 - 0.0016); // a slight tilt to the planets
  return { x: x * Math.cos(v.w) - z * Math.sin(v.w), y, z: x * Math.sin(v.w) + z * Math.cos(v.w) };
}
/** Seconds a hyperbolic pass (closest approach q, eccentricity e) spends inside radius R. */
function hyperTime(q, e, R) {
  const a = q / (e - 1);
  const F = Math.acosh(Math.max(1, (R / a + 1) / e));
  return (2 * (e * Math.sinh(F) - F)) / Math.sqrt(GM_SUN / (a * a * a));
}
function startVisit(game, kind) {
  const V = VISITS[kind];
  const q = V.q[0] + evRand(game) * (V.q[1] - V.q[0]);
  const outer = Math.max(...game.bodies.filter((b) => b.parent === null && !b.visitor).map((b) => b.r));
  // As fast as it must be to spend about `inside` among the planets (longer
  // on a big map): the eccentricity that gives that, found by bisection. Barely
  // over 1 is nearly a parabola, the slowest a visitor from outside can be.
  const want = V.inside * travelOf(game);
  let lo = 1 + 1e-6, hi = 1e4;
  for (let k = 0; k < 80; k++) { const m = Math.sqrt(lo * hi); if (hyperTime(q, m, outer) > want) lo = m; else hi = m; }
  const e = lo, a = q / (e - 1);
  const T = hyperTime(q, e, outer + 60 * scaleOf(game));
  game.visit = { kind, t0: game.time, T, q, e, a, n: Math.sqrt(GM_SUN / (a * a * a)), w: evRand(game) * Math.PI * 2 };
  const b = game.bodies.find((x) => x.visitor);
  b.owner = NEUTRAL; b.ships = 0; b.guns = b.guns0 = V.guns; b.sieges = []; b.vet = 0; b.tf = null;
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
    if (n < 1) return;
    if (!home) { tally(game, owner, 'lost', n); return; }
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
    if (!home) { tally(game, f.owner, 'lost', f.n); f.n = 0; continue; }
    const p = planWith(game, b, home, game.time, accelOf(game, f.owner), { p: { x: s.x, y: s.y, z: s.z }, v: { x: s.vx, y: s.vy, z: s.vz } });
    replan(f, p, { t0: game.time, to: home.id });
  }
  game.fleets = game.fleets.filter((f) => f.n > 0 || f.probe);
  b.owner = NEUTRAL; b.ships = 0; b.guns = 0;
  note(game, { type: 'visitor', phase: 'left', name: b.name });
  game.visit = null;
}

// Notice and grace leave time to fly in from across the system and take the world.
export const EVENT_RULES = { first: 300, every: 510, jitter: 90, notice: 90, grace: 120 };
function evRand(game) {
  // Deterministic, separate from map generation.
  game.evSeed = (Math.imul(game.evSeed ^ (game.evSeed >>> 15), 2246822507) + 0x6d2b79f5) >>> 0;
  return game.evSeed / 4294967296;
}
function events(game, dt) {
  const R = EVENT_RULES;
  const tf = travelOf(game); // a bigger map gives more notice and time, as trips take longer
  if (game.nextEvent === undefined) game.nextEvent = (R.first + (evRand(game) - 0.5) * 2 * 60) * tf;
  game.happenings ||= [];
  if (game.time >= game.nextEvent) {
    const keys = Object.keys(EVENTS).filter((k) => !VISITS[k] || !game.visit);
    const kind = keys[Math.floor(evRand(game) * keys.length)];
    let h;
    if (VISITS[kind]) {
      // A visitor: it can be reached as soon as it's in, but only counts once
      // it's well inside the system; the pass ends with it leaving.
      const b = startVisit(game, kind);
      h = { id: game.nextId++, kind, at: b.id, starts: game.time + R.notice * tf, ends: game.visit.t0 + game.visit.T - 20, holder: NEUTRAL, held: 0 };
    } else {
      // Independent worlds first, so it's a race rather than a gift to whoever holds it.
      const open = game.bodies.filter((b) => !b.home && !b.visitor && !game.happenings.some((x) => x.at === b.id));
      const spots = open.some((b) => b.owner === NEUTRAL) ? open.filter((b) => b.owner === NEUTRAL) : open;
      const b = spots[Math.floor(evRand(game) * spots.length)];
      h = { id: game.nextId++, kind, at: b.id, starts: game.time + R.notice * tf, ends: game.time + (R.notice + R.grace) * tf + EVENTS[kind].hold, holder: NEUTRAL, held: 0 };
    }
    const b = game.bodies[h.at];
    game.happenings.push(h);
    note(game, { type: 'event', phase: 'soon', kind, at: b.id });
    game.nextEvent = game.time + (R.every + (evRand(game) - 0.5) * 2 * R.jitter) * tf;
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
  if (h.kind === 'convoy') {
    b.bonus = (b.bonus || 0) + E.bonus;
    if (game.crew) b.crewBonus = (b.crewBonus || 0) + RULES.crew.convoy; // the refugees sign on as crew
    what = `+${E.bonus}/s here${game.crew ? ` and ${RULES.crew.convoy} crew` : ''}`;
  }
  if (h.kind === 'comet') what = 'the comet mined';
  if (h.kind === 'signal') {
    // Never the branch being researched (it would overshoot its top level when that finishes).
    const open = Object.keys(TECH).filter((k) => nextTech(game, owner, k) && game.tech[owner].project?.key !== k);
    const k = open[Math.floor(evRand(game) * open.length)];
    if (k) { game.tech[owner][k] += 1; if (k === 'drives') refit(game, owner); what = TECH[k].levels[game.tech[owner][k] - 1]; } else { game.credits[owner] += 400; tally(game, owner, 'earned', 400); what = '400 credits'; }
  }
  if (h.kind === 'cache') {
    const x = b.structures.find((y) => RULES.structures[y.type].maxLevel && y.level < RULES.structures[y.type].maxLevel && y.left <= 0 && !y.scrap);
    if (x) { x.level += 1; what = `${RULES.structures[x.type].name} to level ${x.level}`; } else { game.credits[owner] += 300; tally(game, owner, 'earned', 300); what = '300 credits'; }
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
  // Classic, at an almost absurd scale: every trip is a journey and a
  // commitment. Picked by hand only (never Random or the Daily).
  // Proportions closer to life: worlds small beside the gaps to their moons,
  // and a sun far wider than a planet and its moon together.
  // Classic's layout with fuel rationed: a tank per trip buys only a small
  // speed change, so ships burn briefly and coast on curving, gravity-bent
  // paths, wait for launch windows, and gain from swinging past worlds.
  fuel: { name: 'Reaction mass', text: 'Ships carry little fuel: they coast, wait for launch windows and swing past worlds', fuel: true, test: true },
  // True to life where it can be: a small, distant sun; worlds with real
  // masses next to it (gas giants a thousandth of the sun, rocky worlds far
  // less), so their pull on passing ships is slight; moons tucked in close.
  // (Worlds are still drawn far bigger than life, or they'd be invisible.)
  vast: { name: 'Vast', text: 'A system at true-to-life proportions: every voyage is a commitment', scale: 4, thrust: 0.5, worlds: 0.6, real: true, inner: 360, sunR: 5, sunClear: 60, research: 0.6, test: true },
};
/** Distances on this map relative to the usual (reaches, sensors and so on scale with it). */
export const scaleOf = (game) => game.scale || 1;
/** How much longer trips take than usual (distance and drive together), for timings that must keep up. */
export const travelOf = (game) => Math.sqrt(scaleOf(game) / (game.thrust || 1));
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
  // A seeded shuffle (Fisher-Yates): the same in every browser, unlike
  // sorting with a random comparator, so host and guests build the same map.
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
    b.ships = 0;
    b.build = 0; // progress on the ship being built (0..1)
    b.queue = 0; // ships ordered and paid for, waiting to be built
    b.structures = []; // { type, level, left, next? } (left > 0 while building or upgrading)
    // Neutral defences; gas giants are rich, so they start well defended.
    b.guns = b.kind === 'planet' ? (b.giant ? 5 : 2) : 1 + Math.floor(rand() * 2);
    b.sieges = [];
    // Each orbit tilts about its own line (the golden angle spreads them evenly).
    b.node = (b.id * 2.39996) % (Math.PI * 2);
    bodies.push(b);
    return b;
  };

  // Plan each planet's family first (its moons and any station), so orbits can
  // be spaced to give every family room: neighbours never come close.
  const specs = [];
  // Map proportions (all 1 except on Vast): world sizes and the spacing between families.
  const W = sys.worlds || 1, L = sys.scale || 1;
  // Home planets are picked up front from the middle orbits: each is a plain
  // rocky world with exactly one companion (a moon or a station).
  const players = opponents + 1;
  const homeIdx = shuffle([1, 2, 3, 4]).slice(0, players);
  for (let i = 0; i < 6; i++) {
    const court = sys.court && i === 5;
    // At least one gas giant on every map (harvesters, the ring yard and the tidal forge need one).
    const giant = court || (!homeIdx.includes(i) && i >= 3 && (rand() < (sys.court ? 0.3 : 0.7) || (i === 5 && !specs.some((x) => x.giant))));
    const size = court ? 5 : giant ? 3.2 + rand() * 1.2 : 1.6 + rand() * 1.1;
    let count = i === 0 ? 0 : homeIdx.includes(i) ? 1 : court ? 5 : giant ? 1 + Math.floor(rand() * 3) : Math.floor(rand() * 2);
    if (sys.moons && !homeIdx.includes(i)) count = Math.floor(count * sys.moons);
    const moons = [];
    for (let m = 0; m < count; m++) moons.push({ r: size * 3.4 + 6 + m * 7 + rand() * 0.8, size: (0.5 + rand() * 0.5) * W });
    specs.push({ giant, size: size * W, base: size, moons, station: false });
  }
  const hostIdx = shuffle([1, 2, 3, 4, 5]).slice(0, sys.stations || 2);
  for (const i of hostIdx) specs[i].station = true;
  // A home's one companion is its station if it has one, otherwise its moon.
  for (const i of homeIdx) if (specs[i].station) specs[i].moons = [];
  for (const sp of specs) {
    // (On a realistic map moons sit close in: the gaps dwarf them.)
    sp.reach = sys.real ? sp.size * 1.6 + 2 : Math.max(sp.size * 1.6, sp.station ? sp.base * 2.4 + 2.5 : 0, ...sp.moons.map((m) => m.r + m.size));
  }

  // Orbits outward from the sun, each at least both families' reach plus a gap
  // apart; the asteroid belt gets its own lane after the fourth planet.
  const GAP = (sys.gap || 16) * L;
  let beltR = 0;
  let prev = null;
  for (const [i, sp] of specs.entries()) {
    if (!prev) sp.r = sys.inner || 56;
    else sp.r = prev.r + prev.reach + sp.reach + GAP + rand() * 10 * L;
    if (i === 4) {
      beltR = prev.r + prev.reach + GAP;
      sp.r = beltR + (sys.beltW || 6) * L + GAP + sp.reach + rand() * 10 * L;
    }
    prev = sp;
  }

  // Each world's mass, then its moons' and station's orbits from it.
  for (const sp of specs) {
    const kind = sp.giant ? 'gas' : 'rock';
    sp.gm = sys.real ? REAL_MASS[kind] * (sp.base / (sp.giant ? 3.8 : 2.1)) ** 3 * GM_SUN : DENSITY[kind] * sp.size ** 3;
    const park = parkRadius(sp);
    if (sys.real) {
      // Close in, each clear of the last: the inner ones a few planet widths out.
      const rh = hillRadius(sp.r, sp.gm, GM_SUN);
      let r = park + 1;
      sp.moons.forEach((m, k) => { m.r = Math.max(r + m.size * 2, rh * (0.12 + 0.1 * k)); r = m.r + m.size * 2 + 0.5; });
    }
    sp.stationR = sys.real ? park + 1.2 : sp.base * 2.4 + 1.5;
    // Too light to hold them against the sun's tides? Then it's heavier than that.
    const out = Math.max(0, ...sp.moons.map((m) => m.r), sp.station ? sp.stationR : 0);
    if (out) sp.gm = Math.max(sp.gm, 3 * GM_SUN * (out / (HILL * sp.r)) ** 3);
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
      baseSize: sp.base, // build slots go by this
      giant: sp.giant,
      gm: sp.gm,
      hue: rand(),
    });
    for (const m of sp.moons) {
      add({
        kind: 'moon', name: pick(MOON_NAMES, names), parent: planet.id, r: m.r, period: kepler(m.r, sp.gm),
        phase: rand() * Math.PI * 2, incl: (rand() - 0.5) * 0.3, size: m.size, baseSize: m.size / W, gm: DENSITY.rock * m.size ** 3, hue: rand(),
      });
    }
    if (sp.station) {
      add({
        kind: 'station', name: pick(STATION_NAMES, names), parent: planet.id, r: sp.stationR,
        period: kepler(sp.stationR, sp.gm), phase: rand() * Math.PI * 2, incl: 0.2, size: 0.45 * W, baseSize: 0.45, hue: 0,
      });
    }
  }
  // The asteroid belt, in its own lane.
  const rocks = sys.rocks || 4;
  for (let k = 0; k < rocks; k++) {
    const r = beltR + rand() * (sys.beltW || 6) * L;
    const a = add({
      kind: 'asteroid', name: pick(ROCK_NAMES, names), parent: null, r, period: periodAt(r),
      phase: (k / rocks) * Math.PI * 2 + rand() * 0.8, incl: (rand() - 0.5) * 0.1, size: 0.5 + rand() * 0.4, hue: rand(),
    });
    a.baseSize = a.size; a.size *= W;
    a.gm = 0.7 * DENSITY.rock * a.size ** 3;
  }

  // Homes: planets in the middle orbits, spread around the sun as far apart as possible now.
  // The sun is big (2.6× the old size) on every map; planets start further out.
  const stars = [{ r: 0, period: 1, phase: 0, size: sys.sunR ? sys.sunR / SUN_RADIUS_SIM : SUN_SIZE, gm: GM_SUN }];
  if (sys.companion) {
    // A smaller companion sun (a quarter of the sun's mass) on an eccentric
    // orbit, with two worlds of its own: most of the time it hangs far out,
    // then it swings in fast through the outer system and away again. Its year
    // follows from its orbit (Kepler, with both suns' masses), far longer than
    // a game, so it's timed to make its close pass some time in the middle of one.
    const gm = GM_SUN * 0.25;
    const outer = Math.max(...bodies.filter((b) => b.parent === null).map((b) => b.r));
    const q = outer + 40; // closest approach: its worlds sweep the outer orbits
    const e = 0.35;
    const a = q / (1 - e);
    const period = kepler(a, GM_SUN + gm);
    const passAt = 600 + rand() * 1800; // 10 to 40 minutes in
    stars.push({ a, e, w: rand() * Math.PI * 2, period, phase: (-2 * Math.PI * passAt) / period, size: 0.5, clear: 9, gm });
    [[20, 1.9], [45, 2.4]].forEach(([r, size], k) => {
      // Its moon stays inside its Hill sphere (against the companion's tides).
      const mr = 7.5;
      const pgm = Math.max(DENSITY.rock * size ** 3, k === 1 ? 3 * gm * (mr / (HILL * r)) ** 3 : 0);
      const planet = add({ kind: 'planet', name: pick(PLANET_NAMES, names), parent: null, star: 1, r, period: kepler(r, gm), phase: rand() * Math.PI * 2, incl: (rand() - 0.5) * 0.06, size, giant: false, gm: pgm, hue: rand() });
      if (k === 1) add({ kind: 'moon', name: pick(MOON_NAMES, names), parent: planet.id, r: mr, period: kepler(mr, pgm), phase: rand() * Math.PI * 2, incl: 0.2, size: 0.7, gm: DENSITY.rock * 0.7 ** 3, hue: rand() });
    });
  }
  // The visitor: one body that events turn into a comet or a derelict, on a
  // pass in around the sun and out again. Absent (far away) the rest of the time.
  add({ kind: 'visitor', name: 'Visitor', parent: null, r: 0, period: 1, phase: 0, incl: 0, size: 0.8, hue: 0.55, visitor: true }).guns = 0;
  const game = { mp, fuel: !!sys.fuel, crew: sys.crew !== false, research: sys.research || 1, scale: sys.scale || 1, thrust: sys.thrust || 1, system: sys === SYSTEMS[system] ? system : 'classic', stars, gravity: true, sunClear: sys.sunClear || SUN_RADIUS_SIM * stars[0].size * 1.8,  bodies, fleets: [], players, time: 0, winner: null, nextId: 1, events: [], nameSeed: Math.floor(rand() * 100000) };
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
    // A home's moon always has room for two structures.
    for (const b of bodies) if (b.parent === h.id && b.kind === 'moon') b.homeMoon = true;
    h.structures.push({ type: 'shipyard', level: 1, left: 0 }, { type: 'defence', level: 1, left: 0 });
    h.guns = maxGuns(h);
  });
  // Special worlds: three perks on neutral worlds away from the homes.
  const homeFamily = new Set(homes.flatMap((h) => [h.id, ...bodies.filter((b) => b.parent === h.id).map((b) => b.id)]));
  const perkKeys = shuffle(Object.keys(PERKS));
  let placed = 0;
  for (const k of perkKeys) {
    if (placed >= 3) break;
    const P = PERKS[k];
    const spots = bodies.filter((b) => b.owner === NEUTRAL && !b.perk && !b.visitor && !homeFamily.has(b.id)
      && (!P.kinds || P.kinds.includes(b.kind)) && (!P.giantMoon || (b.kind === 'moon' && bodies[b.parent].giant)));
    // Spread them out: prefer a family (a planet and its moons and stations)
    // with no special world yet; never more than two in one family.
    const fam = (b) => (b.parent === null ? b.id : b.parent);
    const inFam = (b) => bodies.filter((x) => x.perk && fam(x) === fam(b)).length;
    const fresh = spots.filter((b) => inFam(b) === 0);
    const pool = fresh.length ? fresh : spots.filter((b) => inFam(b) < 2);
    if (!pool.length) continue;
    const b = pool[Math.floor(rand() * pool.length)];
    b.perk = k;
    if (k === 'fortress') { b.structures.push({ type: 'defence', level: 2, left: 0 }); b.guns = maxGuns(b) + 1; }
    if (k === 'hulk' && !b.structures.some((x) => x.type === 'shipyard')) b.structures.push({ type: 'shipyard', level: 1, left: 0 });
    placed++;
  }
  for (const b of bodies) b.guns0 = b.owner === NEUTRAL ? b.guns : 0; // what independents rebuild to
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
  const size = b.baseSize ?? b.size;
  if (b.kind === 'moon') return b.homeMoon || size > 0.8 ? 2 : 1;
  if (b.home) return 5; // homeworlds: room to build a capital
  return b.giant ? 4 : size > 2.2 ? 3 : 2;
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
  return game.bodies.some((f) => f.perk === 'fortress' && f.owner === b.owner && dist(posAt(game, f, game.time), p) <= perkRange(game, 'fortress')) ? 1 : 0;
}
/** Guns a held world rebuilds to: batteries, fortress cover, hardening, a fortress world. */
export const topGuns = (game, b) => (maxGuns(b) + fortressGuns(game, b) + (hasJoint(game, b.owner, 'hardened') ? 1 : 0)) * (b.wonder === 'citadel' ? 2 : 1);
// Guns built on a fortress rock you hold give half as many again.
export const maxGuns = (b) => RULES.baseGuns + Math.round(RULES.gunsPerDefence * count(b, 'defence') * (b.perk === 'fortress' && b.owner !== NEUTRAL ? 1.5 : 1));
/** Where a world's income comes from. */
export const incomeParts = (b, game) => {
  if (b.owner === NEUTRAL) return { worlds: 0, mines: 0, skimmers: 0, exchanges: 0, bonuses: 0 };
  const mining = 1 + 0.15 * (game ? techLevel(game, b.owner, 'industry') : 0);
  const S = RULES.structures;
  const p = {
    worlds: RULES.income[b.kind] * (b.star ? 1.5 : 1) + (b.home ? RULES.homeIncome : 0),
    mines: RULES.mineIncome * count(b, 'mine') * mining * (b.perk === 'seam' ? 2 : 1),
    skimmers: S.skimmer.income * count(b, 'skimmer'),
    exchanges: S.exchange.income * count(b, 'exchange'),
    bonuses: b.bonus || 0,
  };
  // Sun-diver collectors: half as much again on every world (it grows with you).
  if (game && holdsWonder(game, b.owner, 'sundiver')) p.bonuses += 0.5 * (p.worlds + p.mines + p.skimmers + p.exchanges + p.bonuses);
  return p;
};
export const incomeOf = (b, game) => { const p = incomeParts(b, game); return p.worlds + p.mines + p.skimmers + p.exchanges + p.bonuses; };
export const income = (game, owner) => game.bodies.reduce((n, b) => n + (b.owner === owner ? incomeOf(b, game) : 0), 0);
/** Ships an empire has, docked and in flight. */
export const shipsOf = (game, owner) => game.bodies.reduce((n, b) => n + (b.owner === owner ? b.ships : 0), 0) + game.fleets.reduce((n, f) => n + (f.owner === owner && !f.probe ? f.n : 0), 0);
/** Crew a world houses for its owner (Vast): by size and kind, plus habitats and lasting bonuses. */
export function crewAt(b) {
  if (b.owner === NEUTRAL || b.visitor) return 0;
  const C = RULES.crew;
  const base = b.home ? C.home : b.kind === 'planet' ? (b.giant ? C.giant : C.planet) : C[b.kind] || 0;
  return base + C.habitat * count(b, 'habitat') + (b.crewBonus || 0);
}
/** The most ships an empire can crew (in service plus on order), or Infinity where crews don't apply. */
export function crewCap(game, owner) {
  if (!game.crew) return Infinity;
  const n = game.bodies.reduce((t, b) => t + (b.owner === owner ? crewAt(b) : 0), 0);
  return Math.floor(n * (1 + RULES.crew.industry * techLevel(game, owner, 'industry')));
}
/** Crew in use: ships in service and ships on order. */
export const crewUsed = (game, owner) => shipsOf(game, owner) + game.bodies.reduce((t, b) => t + (b.owner === owner ? b.queue : 0), 0);
/** Credits per second a fleet costs beyond the free ships. */
export const upkeepOf = (game, owner) => Math.max(0, shipsOf(game, owner) - RULES.upkeep.free) * RULES.upkeep.cost;
/** Working shipyards here: each builds one ship at a time. */
export const yardsOf = (b) => b.structures.filter((x) => x.type === 'shipyard' && working(x)).length;

/** Tear a structure down for a fee (a share of what it cost). */
/** Credits back for scrapping a structure: a share of everything spent on it. */
export const demolishFee = (x) => {
  let spent = RULES.structures[x.type].cost;
  for (let l = 1; l < (x.level || 1); l++) spent += upgradeCost({ type: x.type, level: l });
  return Math.round(spent * RULES.scrapRefund);
};
export function cantDemolish(game, b, x) {
  if (b.owner === NEUTRAL) return 'not yours';
  if (x.scrap) return 'already scrapping';
  if (b.sieges.length) return 'under attack';
  return null;
}
export function demolish(game, b, x) {
  if (cantDemolish(game, b, x)) return false;
  // It stops working now; the credits come once the crews finish (nothing if
  // the world is taken first: the captor gets the structure).
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
  if (def.crewOnly && !game.crew) return 'not on this map';
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
// Gun upgrades cost a little less than a new battery (same +2 guns, no extra slot).
export const upgradeCost = (x) => Math.round(RULES.structures[x.type].cost * (x.type === 'defence' ? 0.9 : (x.level + 1) * 0.75));
/** Seconds for one yard here to build a ship. */
export const shipTime = (game, b) => RULES.ship.time / (buildSpeed(game, b.owner, b) * (hasJoint(game, b.owner, 'torch') ? 1.25 : 1) * (b.wonder === 'ringyard' ? 3 : 1) * (b.perk === 'hulk' ? 1.5 : 1));
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
  if (crewUsed(game, b.owner) >= crewCap(game, b.owner)) return 'no crew to spare';
  return null;
}
export function orderShip(game, b) {
  if (cantOrderShip(game, b)) return false;
  game.credits[b.owner] -= RULES.ship.cost;
  tally(game, b.owner, 'spent', RULES.ship.cost);
  b.queue += 1;
  return true;
}

/**
 * A point on a body's orbit, `th` radians round, relative to what it circles:
 * a circle tilted by `incl` about its own line of nodes.
 */
export function orbitOffset(b, th) {
  const u = th - (b.node || 0);
  const a = Math.cos(u) * b.r, c = Math.sin(u) * b.r; // along the node line, and across it in the orbit's plane
  const cn = Math.cos(b.node || 0), sn = Math.sin(b.node || 0), ci = Math.cos(b.incl), si = Math.sin(b.incl);
  return { x: a * cn - c * sn * ci, y: c * si, z: a * sn + c * cn * ci };
}

/** A body's position at time t (moons ride along with their planet). */
export function posAt(game, b, t) {
  if (b.visitor) return visitPos(game, t);
  const p = orbitOffset(b, b.phase + (2 * Math.PI * t) / b.period);
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
// A torch-ship rendezvous: burn with one constant thrust vector, flip (a few
// seconds with the drive off), burn with a second, so the ship arrives exactly
// at its parking orbit's position AND velocity. Without gravity, for a flight
// time T with burns of length tb, start state (p0, v0) and arrival (p1, v1),
// the burns have a closed form (see burns()). Gravity is then added on top and
// the burns corrected until the ship still lands (see Gravity below).
// The planner picks the shortest T whose larger burn fits the drive and whose
// path stays clear of the sun and of the worlds it passes.

const SUN_CLEAR = 14;
/** Where ships hold station around a body (matches what the renderer draws). */
export const parkRadius = (b) => b.size * 1.8 + 0.4;
/** Speed of a circular parking orbit round b (0 at a station: ships hold beside it). */
export const parkSpeed = (b) => (b.gm ? Math.sqrt(b.gm / parkRadius(b)) : 0);
const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
const len = (a) => Math.hypot(a.x, a.y, a.z);
/** How long each burn lasts: `bf` of the flight, with the flip (drive off) between them. */
const burnLen = (T, bf = 0.5) => Math.min(T * bf, Math.max(T * 0.35, T / 2 - RULES.flipTime / 2));

/**
 * The two burns of a transfer: a1 for the first tb seconds, a coast, then a2
 * for the last tb.
 */
function burns(p0, v0, p1, v1, T, tb) {
  const dp = { x: p1.x - p0.x - v0.x * T, y: p1.y - p0.y - v0.y * T, z: p1.z - p0.z - v0.z * T };
  const dv = sub(v1, v0);
  const B = (tb * tb) / 2;
  const k = 1 / (tb * (T - tb));
  const a1 = { x: (dp.x - (B * dv.x) / tb) * k, y: (dp.y - (B * dv.y) / tb) * k, z: (dp.z - (B * dv.z) / tb) * k };
  const a2 = { x: dv.x / tb - a1.x, y: dv.y / tb - a1.y, z: dv.z / tb - a1.z };
  return { a1, a2, need: Math.max(len(a1), len(a2)) };
}

/** Position and velocity along a transfer, tau seconds after launch (with any gravity drift). */
function along(f, tau) {
  if (f.legs) { const [a, b] = f.legs; return tau < a.T ? along(a, tau) : along(b, tau - a.T); }
  const p = pureAlong(f, tau);
  if (!f.gs) return p;
  const d = lerpDrift(f.gs, Math.max(0, Math.min(1, tau / f.T)));
  return { x: p.x + d[0], y: p.y + d[1], z: p.z + d[2], vx: p.vx + d[3], vy: p.vy + d[4], vz: p.vz + d[5] };
}
function pureAlong(f, tau) {
  const h = burnLen(f.T, f.bf); // length of each burn
  const t1 = Math.min(tau, h);
  let x = f.p0.x + f.v0.x * t1 + 0.5 * f.a1.x * t1 * t1;
  let y = f.p0.y + f.v0.y * t1 + 0.5 * f.a1.y * t1 * t1;
  let z = f.p0.z + f.v0.z * t1 + 0.5 * f.a1.z * t1 * t1;
  let vx = f.v0.x + f.a1.x * t1;
  let vy = f.v0.y + f.a1.y * t1;
  let vz = f.v0.z + f.a1.z * t1;
  const tc = Math.max(0, Math.min(tau, f.T - h) - h); // coasting
  x += vx * tc; y += vy * tc; z += vz * tc;
  if (tau > f.T - h) {
    const t2 = tau - (f.T - h);
    x += vx * t2 + 0.5 * f.a2.x * t2 * t2;
    y += vy * t2 + 0.5 * f.a2.y * t2 * t2;
    z += vz * t2 + 0.5 * f.a2.z * t2 * t2;
    vx += f.a2.x * t2;
    vy += f.a2.y * t2;
    vz += f.a2.z * t2;
  }
  return { x, y, z, vx, vy, vz };
}

/** Is the path clear of the sun, any companion sun, and the worlds it passes (not those in `skip`)? */
function clearOfSun(f, game, now, skip = [], quick = false) {
  // (A quick estimate, for the AI, only minds the suns: the route it flies is planned in full.)
  const worlds = quick ? [] : game.bodies.filter((b) => b.kind === 'planet' && !skip.includes(b.id));
  const N = quick ? 48 : 128;
  for (let k = 1; k < N; k++) {
    const tau = (k / N) * f.T;
    const p = along(f, tau);
    if (len(p) < (game.sunClear || SUN_CLEAR)) return false;
    // A companion sun: keep clear of it too, wherever it will be.
    for (let i = 1; i < (game.stars || []).length; i++) if (dist(p, starPos(game, i, now + tau)) < game.stars[i].clear) return false;
    for (const w of worlds) if (dist(p, posAt(game, w, now + tau)) < w.size * 1.3 + 0.3) return false;
  }
  return true;
}

/** A held fuel depot near the launch world speeds the flight. */
export function depotBoost(game, from, now = game.time) {
  if (from.owner === NEUTRAL) return 1;
  const p = posAt(game, from, now);
  return game.bodies.some((d) => d.perk === 'depot' && d.owner === from.owner && dist(posAt(game, d, now), p) <= perkRange(game, 'depot')) ? PERKS.depot.boost : 1;
}

/**
 * The route a fleet will fly (with gravity). `quick` skips the gravity
 * solve: a close estimate of the flight time, for AI planning.
 */
export function plan(game, from, to, now = game.time, speed = 1, quick = false, bf = 0.5, tank = tankOf(game, from.owner)) {
  // `speed` multiplies thrust; a depot or mass driver makes the trip that much faster (thrust squared),
  // and on a fuel map gives that much more speed change to spend.
  const boost = depotBoost(game, from, now) * (from.wonder === 'massdriver' ? 1.5 : 1);
  speed *= boost * boost;
  tank *= boost;
  const accel = accelOf(game, from.owner) * speed;
  const f = planWith(game, from, to, now, accel, null, quick, bf, false, null, tank);
  // Out of reach on this fuel: when's the next launch window?
  if (f.out) return quick ? f : { ...f, window: windowFor(game, from, to, now, accel, tank) };
  // A deliberate flyby is an assist by design; otherwise, any pull that sped it along.
  const g = quick ? null : f.flyby !== undefined ? game.bodies[f.flyby] : assistOf(game, f);
  return g ? { ...f, assist: g.id } : f;
}

/** The longest trip a fuel route may take: about a third of a middle world's year. */
const horizonOf = (game) => 2400 * travelOf(game);
/**
 * Seconds until a route fits the tank (a launch window), roughly: checked
 * every half minute ahead, without gravity's help. Null if none soon.
 */
function windowFor(game, from, to, now, accel, tank) {
  const step = 30 * travelOf(game);
  for (let d = step; d <= horizonOf(game) / 2; d += step) {
    if (!present(game, to, now + d)) return null;
    if (!planWith(game, from, to, now + d, accel, null, true, 0.5, true, null, tank).out) return d;
  }
  return null;
}

// ---- Gravity ----------------------------------------------------------------
//
// Everything with mass pulls on ships all through a flight: the sun, a
// companion sun, and every planet the ship passes. Worlds stay on their fixed
// orbits (as in most orbital games: on rails). The worlds a fleet leaves and
// arrives at are the one exception: climbing out of and settling into their
// parking orbits is the close-in manoeuvring ships do on thrusters, so their
// own pull (and their moons', or a companion sun's for its worlds) is left to that.
//
// The planner works out the drift gravity adds to the plain two-burn path,
// then corrects the burns (Newton's method) until the ship still lands on its
// parking orbit, speed matched. A pass close by a heavy world bends the route:
// a gravity assist, where it speeds the ship along.
export const GRAVITY = { share: 1 }; // 1 = the full pull that holds the worlds in their orbits
const GSTEPS = 64;
/** A gravity assist worth mentioning: speed the pull of one world added along the way. */
export const ASSIST = { min: 0.06 };

/** The planets whose families a flight between these leaves alone (their ids). */
function homesOf(...bs) {
  return [...new Set(bs.filter((b) => b && b.id !== undefined).map((b) => (b.parent === null ? b.id : b.parent)))];
}

/** Where everything that pulls will be at each step of a flight of length T from `now`. */
function field(game, skip, now, T) {
  const dt = T / GSTEPS;
  const list = [];
  const stars = game.stars || [];
  // A companion sun and its worlds are a family too: a flight to or from one
  // of them leaves the companion's own pull to the close-in manoeuvring.
  const near = new Set(skip.map((id) => game.bodies[id].star).filter(Boolean));
  for (let i = 1; i < stars.length; i++) if (stars[i].gm && !near.has(i)) list.push({ gm: stars[i].gm, s2: (stars[i].clear * 0.15) ** 2, at: (t) => starPos(game, i, t) });
  for (const b of game.bodies) if (b.kind === 'planet' && b.gm && !skip.includes(b.id)) list.push({ b, gm: b.gm, s2: (b.size * 0.5) ** 2, at: (t) => posAt(game, b, t) });
  for (const a of list) {
    a.gm *= GRAVITY.share;
    a.P = new Float64Array(3 * (GSTEPS + 1));
    for (let k = 0; k <= GSTEPS; k++) { const q = a.at(now + k * dt); a.P[3 * k] = q.x; a.P[3 * k + 1] = q.y; a.P[3 * k + 2] = q.z; }
  }
  return { list, sun: GM_SUN * GRAVITY.share, s2: ((game.sunClear || SUN_CLEAR) * 0.15) ** 2 };
}
/** The pull at step k on a ship at (x, y, z), into out. Positions are from the sun, so a world also tugs the sun (the frame) its way. */
function pull(fd, k, x, y, z, out) {
  const r2 = x * x + y * y + z * z + fd.s2;
  const c = -fd.sun / (r2 * Math.sqrt(r2));
  let ax = c * x, ay = c * y, az = c * z;
  for (const a of fd.list) {
    const px = a.P[3 * k], py = a.P[3 * k + 1], pz = a.P[3 * k + 2];
    const dx = x - px, dy = y - py, dz = z - pz;
    const d2 = dx * dx + dy * dy + dz * dz + a.s2;
    const c1 = -a.gm / (d2 * Math.sqrt(d2));
    const p2 = px * px + py * py + pz * pz;
    const c2 = -a.gm / (p2 * Math.sqrt(p2));
    ax += c1 * dx + c2 * px; ay += c1 * dy + c2 * py; az += c1 * dz + c2 * pz;
  }
  out[0] = ax; out[1] = ay; out[2] = az;
}
/** Drift from gravity along a path: position and velocity offsets at GSTEPS+1 points (leapfrog). */
function drift(f, fd) {
  const dt = f.T / GSTEPS;
  const g = [0, 0, 0];
  const gs = [[0, 0, 0, 0, 0, 0]];
  let x = 0, y = 0, z = 0, vx = 0, vy = 0, vz = 0;
  let b = pureAlong(f, 0);
  pull(fd, 0, b.x, b.y, b.z, g);
  for (let k = 0; k < GSTEPS; k++) {
    vx += g[0] * dt * 0.5; vy += g[1] * dt * 0.5; vz += g[2] * dt * 0.5;
    x += vx * dt; y += vy * dt; z += vz * dt;
    b = pureAlong(f, (k + 1) * dt);
    pull(fd, k + 1, b.x + x, b.y + y, b.z + z, g);
    vx += g[0] * dt * 0.5; vy += g[1] * dt * 0.5; vz += g[2] * dt * 0.5;
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
/** Solves J x = r (6×6, Gaussian elimination with pivoting); r becomes x. */
function solve6(J, r) {
  for (let c = 0; c < 6; c++) {
    let p = c;
    for (let i = c + 1; i < 6; i++) if (Math.abs(J[i][c]) > Math.abs(J[p][c])) p = i;
    [J[c], J[p]] = [J[p], J[c]]; [r[c], r[p]] = [r[p], r[c]];
    if (Math.abs(J[c][c]) < 1e-14) return false;
    for (let i = c + 1; i < 6; i++) {
      const m = J[i][c] / J[c][c];
      for (let j = c; j < 6; j++) J[i][j] -= m * J[c][j];
      r[i] -= m * r[c];
    }
  }
  for (let c = 5; c >= 0; c--) {
    for (let j = c + 1; j < 6; j++) r[c] -= J[c][j] * r[j];
    r[c] /= J[c][c];
  }
  return true;
}
/**
 * Burns that land the ship on (f.p1, f.v1) with gravity added, starting from
 * the gravity-free ones: Newton's method on the six burn components.
 */
function settle(f, fd) {
  const vec = (a) => [{ x: a[0], y: a[1], z: a[2] }, { x: a[3], y: a[4], z: a[5] }];
  const run = (a) => {
    const [a1, a2] = vec(a);
    const g = { ...f, a1, a2 };
    const gs = drift(g, fd);
    const e = pureAlong(g, f.T), d = gs[GSTEPS];
    const r = [e.x + d[0] - f.p1.x, e.y + d[1] - f.p1.y, e.z + d[2] - f.p1.z, e.vx + d[3] - f.v1.x, e.vy + d[4] - f.v1.y, e.vz + d[5] - f.v1.z];
    return { a, gs, r, miss: Math.hypot(r[0], r[1], r[2]), slip: Math.hypot(r[3], r[4], r[5]) };
  };
  const bad = (s) => s.miss + s.slip * 20;
  let s = run([f.a1.x, f.a1.y, f.a1.z, f.a2.x, f.a2.y, f.a2.z]);
  // How the landing shifts with each burn component (by finite differences).
  // It barely changes from one step to the next, so it's reused until a step
  // stops helping (or helps too little), then worked out afresh.
  const jacobian = () => {
    const eps = 1e-5;
    const cols = [0, 1, 2, 3, 4, 5].map((j) => { const a = s.a.slice(); a[j] += eps; return run(a).r; });
    return [0, 1, 2, 3, 4, 5].map((i) => cols.map((c) => (c[i] - s.r[i]) / eps));
  };
  // Start from the gravity-free one, which is exact for the drive's part.
  const h = burnLen(f.T, f.bf), c1 = h * f.T - (h * h) / 2, c2 = (h * h) / 2;
  let J = [0, 1, 2, 3, 4, 5].map((i) => [0, 1, 2, 3, 4, 5].map((j) => (i % 3 !== j % 3 ? 0 : i < 3 ? (j < 3 ? c1 : c2) : h)));
  let fresh = false;
  for (let it = 0; it < 16 && (s.miss > 0.02 || s.slip > 0.001); it++) {
    if (!J) { J = jacobian(); fresh = true; }
    const dx = s.r.map((v) => -v);
    if (!solve6(J.map((row) => row.slice()), dx)) break;
    // Take the full step if it helps, else a shorter one.
    let next = null;
    for (let k = 1; k >= 1 / 16; k /= 2) {
      const n = run(s.a.map((v, j) => v + dx[j] * k));
      if (bad(n) < bad(s)) { next = n; break; }
      if (!fresh) break; // try again with an up-to-date J first
    }
    if (!next) { if (fresh) break; J = null; continue; }
    // Slow progress with an old J: refresh it.
    if (!fresh && bad(next) > bad(s) * 0.3) J = null;
    fresh = false;
    s = next;
  }
  const [a1, a2] = vec(s.a);
  const ok = s.miss < 0.3 && s.slip < 0.005;
  return { ...f, a1, a2, gs: s.gs, need: ok ? Math.max(len(a1), len(a2)) : Infinity };
}

/**
 * The world whose pull sped this route up the most, if that's worth a
 * mention: a gravity assist.
 */
function assistOf(game, f) {
  if (!f.gs || f.legs) return null;
  const fd = field(game, f.skip, f.tp, f.T);
  const dt = f.T / GSTEPS;
  const g = [0, 0, 0];
  let best = null;
  for (const a of fd.list) {
    if (!a.b) continue;
    const one = { list: [a], sun: 0, s2: 1 };
    let kick = 0;
    for (let k = 0; k <= GSTEPS; k++) {
      const p = along(f, k * dt);
      const v = Math.hypot(p.vx, p.vy, p.vz) || 1;
      pull(one, k, p.x, p.y, p.z, g);
      kick += ((g[0] * p.vx + g[1] * p.vy + g[2] * p.vz) / v) * dt * (k === 0 || k === GSTEPS ? 0.5 : 1);
    }
    if (kick > ASSIST.min * Math.sqrt(scaleOf(game)) && (!best || kick > best.kick)) best = { b: a.b, kick };
  }
  return best && best.b;
}
/**
 * Rebuilds a fleet's gravity drift from its plan (guests are sent plans
 * without it: it's a lot of numbers, and the same everywhere).
 */
export function regrav(game, f) {
  if (f.legs) { for (const l of f.legs) regrav(game, l); return f; }
  if (f.grav && !f.gs) f.gs = drift(f, field(game, f.skip, f.tp, f.T));
  return f;
}

function planWith(game, from, to, now, accel, start = null, quick = false, bf = 0.5, noDetour = false, skip = null, tank = Infinity) {
  const bf0 = bf;
  skip = skip || homesOf(from, to);
  const p0 = start ? start.p : posAt(game, from, now);
  const v0 = start ? start.v : velAt(game, from, now);
  const clear = (f) => clearOfSun(f, game, now, skip, quick);
  // If the straight line would cross the sun, a torch ship doesn't wait for
  // the planets to move: it steers round, and that route is used if faster.
  const done = (f, blocked) => {
    if (noDetour || !blocked || to.fixed || tank < Infinity) return f;
    const d = planDetour(game, from, to, now, accel, p0, v0, quick, bf, skip);
    return d && d.T < f.T ? d : f;
  };
  const make = (T, bf = bf0) => {
    // Aim for a parking orbit beside the target, on the side we come in from,
    // moving round it at orbital speed (a fixed waypoint is hit exactly).
    const c = to.fixed ? to.fixed.p : posAt(game, to, now + T);
    const away = sub(p0, c);
    const l = len(away) || 1;
    const park = to.fixed ? 0 : parkRadius(to);
    const p1 = { x: c.x + (away.x / l) * park, y: c.y + (away.y / l) * park, z: c.z + (away.z / l) * park };
    const v1 = to.fixed ? to.fixed.v : velAt(game, to, now + T);
    const orb = to.fixed ? 0 : parkSpeed(to), lh = Math.hypot(away.x, away.z);
    if (orb && lh > 1e-9) { v1.x -= (away.z / lh) * orb; v1.z += (away.x / lh) * orb; }
    return { p0, v0, p1, v1, T, ...(bf < 0.5 ? { bf } : {}), ...burns(p0, v0, p1, v1, T, burnLen(T, bf)) };
  };
  // With gravity: correct the burns so they still land once the pull is added.
  const makeG = (T, b = bf0) => ({ ...settle(make(T, b), field(game, skip, now, T)), grav: true, tp: now, skip });
  const fits = (f) => f.need <= accel && clear(f);
  if (tank < Infinity) {
    // Fuel: the fastest route whose burns fit in the tank. At each flight
    // time the burns are as short as the drive allows (the least fuel), the
    // rest a coast; a longer flight coasts more and needs less, until the
    // worlds have moved on. If nothing fits, it's out of reach (for now).
    const dvOf = (f) => burnLen(f.T, f.bf) * (len(f.a1) + len(f.a2));
    const leanest = (T) => {
      if (make(T, 0.5).need > accel) return null;
      let lo = 0.01, hi = 0.5;
      if (make(T, lo).need <= accel) return lo;
      for (let i = 0; i < 14; i++) { const m = (lo + hi) / 2; if (make(T, m).need <= accel) hi = m; else lo = m; }
      return hi;
    };
    const mul = (v, k) => ({ x: v.x * k, y: v.y * k, z: v.z * k });
    // A first guess for the solver that heads for a waypoint w, reached tw
    // seconds in, then on to the target: burns sized to suit.
    const via = (T, w, tw) => {
      const f0 = make(T, 0.5);
      const d1 = sub(mul(sub(w, p0), 1 / tw), v0), d2 = sub(f0.v1, mul(sub(f0.p1, w), 1 / (T - tw)));
      const b = Math.min(0.5, Math.max(0.01, ((Math.max(len(d1), len(d2)) / accel) / T) * 1.15));
      const tb = burnLen(T, b);
      return { ...make(T, b), a1: mul(d1, 1 / tb), a2: mul(d2, 1 / tb), guess: len(d1) + len(d2) };
    };
    const heavy = game.bodies.filter((x) => x.kind === 'planet' && x.gm >= 0.4 && !skip.includes(x.id));
    const tryT = (T) => {
      const b = leanest(T);
      if (quick || !game.gravity) {
        if (b === null) return null;
        const f = make(T, b);
        return dvOf(f) <= tank && clear(f) ? f : null;
      }
      let fd = null;
      const settleG = (c) => ({ ...settle(c, (fd ||= field(game, skip, now, T))), grav: true, tp: now, skip });
      const ok = (g) => g.need <= accel && dvOf(g) <= tank && clear(g);
      // Straight there, coasting most of the way: a little longer burns if
      // gravity means the shortest no longer fit the drive.
      if (b !== null && dvOf(make(T, b)) <= tank * 1.5) {
        for (const k of [1, 1.5, 2.5]) {
          const g = settleG(make(T, Math.min(0.5, b * k)));
          if (g.need <= accel) { if (ok(g)) return g; break; }
        }
      }
      // An arc round the sun the way the worlds go (a real transfer orbit
      // swings round, where a straight line would cross the sun).
      const c = posAt(game, to, now + T);
      const th0 = Math.atan2(p0.z, p0.x), sweep = (((Math.atan2(c.z, c.x) - th0) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      if (sweep > 0.3) {
        const th = th0 + sweep / 2, r = (len(p0) + len(c)) / 2;
        const arc = via(T, { x: Math.cos(th) * r, y: 0, z: Math.sin(th) * r }, T / 2);
        if (arc.guess <= tank * 1.5) { const { guess, ...g } = settleG(arc); if (ok(g)) return { ...g, arc: true }; }
      }
      // A swing past a heavy world on the way (a deliberate flyby): aim just
      // beside it, either side, and let its pull do the rest.
      const line = sub(c, p0), lh = Math.hypot(line.x, line.z) || 1;
      const side = { x: -line.z / lh, y: 0, z: line.x / lh };
      const tries = [];
      for (const P of heavy) for (const u of [0.35, 0.5, 0.65]) {
        const q = posAt(game, P, now + T * u);
        for (const sgn of [1, -1]) {
          const w = { x: q.x + side.x * sgn * (P.size * 2.5 + 1), y: q.y, z: q.z + side.z * sgn * (P.size * 2.5 + 1) };
          const v = via(T, w, T * u);
          if (v.guess <= tank * 2) tries.push({ ...v, flyby: P.id });
        }
      }
      tries.sort((x, y) => x.guess - y.guess);
      // (Only a flyby if it really passes close: the solver may settle on another path.)
      const close = (g, P) => { for (let k = 0; k <= 64; k++) if (dist(along(g, (k / 64) * T), posAt(game, P, now + (k / 64) * T)) < P.size * 8) return true; return false; };
      for (const v of tries.slice(0, 2)) {
        const { flyby, guess, ...g } = settleG(v);
        if (ok(g)) return close(g, game.bodies[flyby]) ? { ...g, flyby } : g;
      }
      return null;
    };
    const grow = quick ? 1.1 : 1.07;
    let last = null;
    for (let T = Math.max(4, burnTime(dist(p0, posAt(game, to, now))) * Math.sqrt(RULES.accel / accel) * 0.6); T < horizonOf(game); T *= grow) {
      let f = tryT(T);
      if (!f) { last = T; continue; }
      if (last !== null) for (let i = 0; i < 3; i++) { const m = (last + f.T) / 2; const g = tryT(m); if (g) f = g; else last = m; }
      return { ...f, fuel: Math.min(1, dvOf(f) / tank) };
    }
    return { p0, v0, T: Infinity, need: Infinity, out: true };
  }
  // Scan forward for the first flight time the drive can manage (moons move
  // fast, so the answer isn't monotonic), bisect it down, then make sure the
  // path misses the sun; if not, keep looking at longer transfers.
  let prev = 1;
  let blocked = false; // a transfer the drive could fly was rejected for the sun
  // (Steps grow with T: a few percent is plenty to bracket the answer.)
  for (let T = 2; T < 20000; T += Math.max(2, T * 0.04)) {
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
    if (!clear(f)) { blocked = true; prev = T; continue; }
    if (!game.gravity || quick) return done(f, blocked);
    // Now with gravity, from the gravity-free time: shorter if gravity helps
    // (a dive toward the sun, an assist), longer if it hinders.
    let best = null, fail = null, nearest = null;
    const look = (T2) => {
      const g = makeG(T2);
      if (g.need < Infinity && (!nearest || g.need / accel < nearest.need / accel)) nearest = g;
      return fits(g) ? g : null;
    };
    best = look(hi);
    if (best) {
      for (let T2 = hi / 1.08; T2 > hi * 0.4; T2 /= 1.08) { const g = look(T2); if (!g) { fail = T2; break; } best = g; }
    } else {
      fail = hi;
      for (let T2 = hi * 1.06; T2 < hi * 8 + 40; T2 *= 1.06) { best = look(T2); if (best) break; fail = T2; }
    }
    if (best && fail !== null) {
      // Tighten to within a percent or so.
      let a = Math.min(fail, best.T), b = Math.max(fail, best.T);
      if (fail > best.T) [a, b] = [best.T, fail];
      for (let i = 0; i < 3; i++) {
        const m = (a + b) / 2;
        const g = look(m);
        if (g && g.T < best.T) best = g;
        if (fail < best.T) { if (g) b = m; else a = m; } else { if (g) a = m; else b = m; }
      }
    }
    // (In the rare case nothing fits, the closest gravity-true route.)
    return done(best || nearest || f, blocked);
  }
  return done(make(20000), blocked);
}

/**
 * Round the sun: a burn to a turning point beside it, then on to the target.
 * A few turning points are tried (either side, two distances) and the
 * fastest pair of legs wins. The result reads like one plan: T is the total,
 * legs hold the two transfers.
 */
function planDetour(game, from, to, now, accel, p0, v0, quick, bf, skip) {
  const clear = game.sunClear || SUN_CLEAR;
  // Where the target will be, roughly: pick the side of the sun from that.
  const guess = burnTime(dist(p0, posAt(game, to, now))) * Math.sqrt(RULES.accel / accel);
  const c = posAt(game, to, now + guess);
  const ch = sub(c, p0);
  const l2 = ch.x * ch.x + ch.y * ch.y + ch.z * ch.z || 1;
  const u = Math.max(0, Math.min(1, -(p0.x * ch.x + p0.y * ch.y + p0.z * ch.z) / l2));
  let n = { x: p0.x + ch.x * u, y: 0, z: p0.z + ch.z * u }; // closest point of the line to the sun
  if (len(n) < 1) n = { x: -ch.z, y: 0, z: ch.x }; // straight through: either side
  const ln = len(n) || 1;
  n = { x: n.x / ln, y: 0, z: n.z / ln };
  let best = null;
  for (const side of [1, -1]) for (const k of quick ? [1.35] : [1.35, 1.9]) {
    const w = { x: n.x * side * clear * k, y: 0, z: n.z * side * clear * k };
    // Pass the turning point moving along the way round, at a brachistochrone's speed there.
    let t = { x: -w.z, y: 0, z: w.x };
    if (t.x * ch.x + t.z * ch.z < 0) t = { x: -t.x, y: 0, z: -t.z };
    const lt = len(t) || 1;
    const d1 = dist(p0, w), d2 = dist(w, c);
    const speed = 0.8 * Math.sqrt(2 * accel * Math.min(d1, d2));
    const vw = { x: (t.x / lt) * speed, y: 0, z: (t.z / lt) * speed };
    const a = planWith(game, from, { fixed: { p: w, v: vw } }, now, accel, { p: p0, v: v0 }, quick, bf, true, skip);
    if (a.need > accel || best && a.T >= best.T) continue;
    const e = along(a, a.T);
    const b = planWith(game, from, to, now + a.T, accel, { p: { x: e.x, y: e.y, z: e.z }, v: { x: e.vx, y: e.vy, z: e.vz } }, quick, bf, true, skip);
    if (b.need > accel) continue;
    const T = a.T + b.T;
    if (!best || T < best.T) best = { legs: [a, b], T, p0, v0, p1: b.p1, v1: b.v1, a1: a.a1, a2: b.a2, need: Math.max(a.need, b.need), detour: true, ...(bf < 0.5 ? { bf } : {}) };
  }
  return best;
}

/** Swaps a fleet's route for a new plan (dropping everything the old one brought). */
function replan(f, p, extra = {}) {
  for (const k of ['assist', 'bf', 'gs', 'legs', 'detour', 'grav', 'tp', 'skip']) delete f[k];
  return Object.assign(f, p, extra);
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
  const p = plan(game, from, to, game.time, 1, false, dark ? DARK.burn : 0.5);
  if (p.out || p.T > staysFor(game, to) - 5 || !present(game, to)) return null;
  from.ships -= n;
  // Breaking out of a world under attack: the attackers get a free shot at
  // ships leaving orbit, and half of them never make it out.
  if (from.sieges.length) {
    const lost = Math.floor(n / 2);
    n -= lost;
    tally(game, from.owner, 'lost', lost);
    for (const g of from.sieges) tally(game, g.owner, 'killed', lost / from.sieges.length);
    note(game, { type: 'breakout', owner: from.owner, at: from.id, lost, n });
    if (n < 1) return null;
  }
  const f = { id: game.nextId++, owner: from.owner, n, from: from.id, to: to.id, ...p, t0: game.time, vet: from.vet || 0 };
  if (dark) f.dark = true;
  // The bulk of a garrison keeps its task force name; a small detachment gets a new one.
  if (from.tf && n * 2 >= n + from.ships) { f.name = from.tf; from.tf = null; }
  else f.name = fleetName(game);
  if (!from.ships) from.tf = null;
  game.fleets.push(f);
  note(game, { type: 'launch', owner: f.owner, fleet: f.id, name: f.name, n, from: from.id, to: to.id, T: f.T, ...(dark ? { dark: true } : {}) });
  return f;
}

/**
 * Better drives reach ships already in flight: each fleet re-plans from where
 * it is now, at the new thrust, if that gets it there sooner.
 */
function refit(game, owner) {
  if (game.fuel) return; // the fuel's already spent on the route they're flying
  for (const f of game.fleets) {
    if (f.owner !== owner) continue;
    const left = f.T - (game.time - f.t0);
    if (left < 10) continue;
    const s = fleetState(f, game.time);
    const accel = accelOf(game, owner) * (f.probe ? RULES.probe.speed : 1);
    const p = planWith(game, game.bodies[f.from], game.bodies[f.to], game.time, accel, { p: { x: s.x, y: s.y, z: s.z }, v: { x: s.vx, y: s.vy, z: s.vz } }, false, f.bf || 0.5);
    if (p.T >= left) continue;
    replan(f, p, { t0: game.time }); // the new plan brings its own drift and route
  }
}

/**
 * Switch a fleet's drive mode in flight: go dark (cut to a short burn and a
 * long coast) or light up (burn the rest of the way). It re-plans from where
 * it is now, so arrival time changes.
 */
export function setDark(game, f, on) {
  if (!f || f.probe || game.fuel || !!f.dark === on || game.winner !== null) return false;
  const left = f.T - (game.time - f.t0);
  if (left < 10) return false;
  const s = fleetState(f, game.time);
  const p = planWith(game, game.bodies[f.from], game.bodies[f.to], game.time, accelOf(game, f.owner), { p: { x: s.x, y: s.y, z: s.z }, v: { x: s.vx, y: s.vy, z: s.vz } }, false, on ? DARK.burn : 0.5);
  replan(f, p, { t0: game.time });
  if (on) f.dark = true; else delete f.dark;
  return true;
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
  const p = plan(game, from, to, game.time, RULES.probe.speed, false, 0.5, tankOf(game, from.owner) * RULES.fuel.probe);
  if (p.out) return null;
  game.credits[from.owner] -= RULES.probe.cost;
  tally(game, from.owner, 'spent', RULES.probe.cost);
  const f = { id: game.nextId++, owner: from.owner, n: 0, probe: true, from: from.id, to: to.id, ...p, t0: game.time, vet: 0, name: 'Probe' };
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
  if (f.legs) {
    // Round the sun: two transfers flown back to back.
    const [a, b] = f.legs;
    const leg = tau < a.T ? a : b;
    const st = fleetState({ ...leg, t0: 0 }, leg === a ? tau : tau - a.T);
    return { ...st, progress: tau / f.T, leg: leg === a ? 1 : 2 };
  }
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
    // Rotate along the great circle from u1 to u2 (one steady turn, never
    // through zero); nearly opposite burns turn over about a sideways axis.
    const dot = Math.max(-1, Math.min(1, u1.x * u2.x + u1.y * u2.y + u1.z * u2.z));
    const ang = Math.acos(dot) * k;
    let ax = { x: u1.y * u2.z - u1.z * u2.y, y: u1.z * u2.x - u1.x * u2.z, z: u1.x * u2.y - u1.y * u2.x };
    if (len(ax) < 1e-4) ax = Math.abs(u1.y) < 0.9 ? { x: -u1.z, y: 0, z: u1.x } : { x: 1, y: 0, z: 0 };
    const la = len(ax) || 1;
    ax = { x: ax.x / la, y: ax.y / la, z: ax.z / la };
    const c = Math.cos(ang), sn = Math.sin(ang);
    const cr = { x: ax.y * u1.z - ax.z * u1.y, y: ax.z * u1.x - ax.x * u1.z, z: ax.x * u1.y - ax.y * u1.x };
    const ad = ax.x * u1.x + ax.y * u1.y + ax.z * u1.z;
    n = { x: u1.x * c + cr.x * sn + ax.x * ad * (1 - c), y: u1.y * c + cr.y * sn + ax.y * ad * (1 - c), z: u1.z * c + cr.z * sn + ax.z * ad * (1 - c) };
  }
  return {
    x: s.x, y: s.y, z: s.z,
    vx: s.vx, vy: s.vy, vz: s.vz,
    nx: n.x, ny: n.y, nz: n.z,
    progress: tau / f.T,
    burning: !flipping && tau < f.T && (tau < burnLen(f.T, f.bf) || tau > f.T - burnLen(f.T, f.bf)),
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
  // Damage becomes whole losses, from whichever there's more of (docked
  // ships or guns), so neither shields the other.
  while (b.dmg >= 1 && b.ships + b.guns > 0) {
    b.dmg -= 1;
    if (b.ships > 0 && (b.guns < 1 || b.ships >= b.guns)) {
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
    b.cadre = vetLevel(b.vet);
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
    if (b.owner === NEUTRAL) {
      // Independents repair their guns between raids, slowly.
      if (!b.sieges.length && b.guns < (b.guns0 || 0)) b.guns = Math.min(b.guns0, b.guns + RULES.gunRegen * dt);
      continue;
    }
    game.credits[b.owner] += incomeOf(b, game) * dt;
    tally(game, b.owner, 'earned', incomeOf(b, game) * dt);
    const speed = buildSpeed(game, b.owner, b);
    // Guns above what the world supports (a battery scrapped, a fortress out
    // of reach) are stood down at once.
    const top = topGuns(game, b);
    if (b.guns > top) b.guns = top;
    if (b.sieges.length) continue; // nothing gets built under fire
    for (const x of b.structures) {
      if (x.scrap) { x.scrap = Math.max(0, x.scrap - dt); if (!x.scrap) x.gone = true; continue; }
      if (x.left <= 0) continue;
      x.left = Math.max(0, x.left - dt * speed);
      if (x.left === 0 && x.next) { x.level = x.next; delete x.next; }
    }
    for (const x of b.structures.filter((y) => y.gone)) {
      game.credits[b.owner] += demolishFee(x);
      tally(game, b.owner, 'earned', demolishFee(x));
      note(game, { type: 'scrapped', owner: b.owner, at: b.id, what: x.type, fee: demolishFee(x) });
    }
    b.structures = b.structures.filter((y) => !y.gone);
    // Each working yard builds one ship at a time, in parallel.
    // b.slips holds each yard's progress on the ship it's building.
    const yards = yardsOf(b);
    if (!b.slips) b.slips = [];
    while (b.slips.length < Math.min(yards, b.queue)) b.slips.push(0);
    b.slips.length = Math.min(b.slips.length, yards, b.queue);
    const yardK = (hasJoint(game, b.owner, 'torch') ? 1.25 : 1) * (b.wonder === 'ringyard' ? 3 : 1) * (b.perk === 'hulk' ? 1.5 : 1);
    b.slips = b.slips.map((p) => p + (dt * speed * yardK) / RULES.ship.time);
    for (const p of b.slips) if (p >= 1) { b.vet = mix(b.vet || 0, b.ships, Math.max(b.perk === 'hulk' ? PERKS.hulk.vet : 0, holdsWonder(game, b.owner, 'college') ? 2.5 : 0), 1); b.queue -= 1; b.ships += 1; tally(game, b.owner, 'built'); }
    b.slips = b.slips.filter((p) => p < 1);
    b.build = b.slips.length ? Math.max(...b.slips) : 0;
    const regen = RULES.gunRegen * (hasJoint(game, b.owner, 'hardened') ? 2 : 1);
    if (b.guns < top) b.guns = Math.min(top, b.guns + regen * dt);
  }

  for (let owner = 0; owner < game.players; owner++) {
    const up = upkeepOf(game, owner) * dt;
    if (up > 0) { const paid = Math.min(game.credits[owner], up); game.credits[owner] -= paid; tally(game, owner, 'spent', paid); }
  }
  for (const b of game.bodies) {
    if (b.owner === NEUTRAL) continue;
    // Veterans drill the crews: a garrison that has held a rank trains new
    // arrivals back up to it over a few minutes. An empty world forgets.
    if (!b.ships) b.cadre = 0;
    else {
      b.cadre = Math.max(b.cadre || 0, vetLevel(b.vet));
      if (!b.sieges.length && vetLevel(b.vet) < b.cadre) b.vet = Math.min(VET_STEPS[b.cadre - 1], (b.vet || 0) + RULES.drill * dt);
    }
  }
  for (const [owner, t] of (game.tech || []).entries()) {
    if (!t.project) continue;
    t.project.left -= dt * researchSpeed(game, owner);
    if (t.project.left <= 0) {
      const top = JOINTS[t.project.key] ? 1 : TECH[t.project.key].cost.length;
      t[t.project.key] = Math.min(top, (t[t.project.key] || 0) + 1);
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
      b.cadre = Math.max(b.cadre || 0, vetLevel(b.vet), vetLevel(f.vet));
      b.vet = mix(b.vet || 0, b.ships, f.vet || 0, f.n);
      if (!b.tf || f.n >= b.ships) b.tf = f.name;
      b.ships += f.n;
      rest(game, b, f.n);
      note(game, { type: 'arrived', owner: f.owner, name: f.name, n: f.n, at: b.id });
    } else {
      // A point-defence net picks off part of the fleet on the way in; a
      // kinetic strike opens with a volley that knocks out defenders.
      // Fractions carry into the battle as damage already done, so splitting
      // a fleet into small groups doesn't dodge either.
      let hit = 0;
      if (hasJoint(game, b.owner, 'pdnet')) {
        const shot = Math.floor(f.n * 0.15);
        hit = f.n * 0.15 - shot;
        f.n -= shot;
        tally(game, f.owner, 'lost', shot);
        tally(game, b.owner, 'killed', shot);
      }
      if (f.n <= 0) { note(game, { type: 'wiped', owner: f.owner, name: f.name, at: b.id, vs: b.owner }); return false; }
      if (hasJoint(game, f.owner, 'kinetic')) {
        let k = Math.floor(f.n * 0.1);
        b.dmg = (b.dmg || 0) + (f.n * 0.1 - k);
        while (k-- > 0 && b.ships + b.guns > 0) {
          if (b.ships > 0) { b.ships -= 1; tally(game, b.owner, 'lost'); tally(game, f.owner, 'killed'); } else b.guns = Math.max(0, b.guns - 1);
        }
      }
      // Odds as the fight is joined, so wins can be judged by them later.
      const defence = b.ships * (1 + VET_BONUS * vetLevel(b.vet)) + b.guns + coverOf(game, b);
      b.own0 = Math.max(b.own0 || 0, defence);
      b.foe0 = (b.foe0 || 0) + f.n;
      const g = b.sieges.find((x) => x.owner === f.owner);
      if (g) { g.vet = mix(g.vet || 0, g.n, f.vet || 0, f.n); g.n += f.n; g.n0 += f.n; g.dmg = (g.dmg || 0) + hit; }
      else b.sieges.push({ owner: f.owner, n: f.n, vet: f.vet || 0, name: f.name, n0: f.n, foe0: defence, dmg: hit });
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
