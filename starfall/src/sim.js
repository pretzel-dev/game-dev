// Pure game simulation: no DOM, no Three.js, so it runs headless in tools/.

export const NEUTRAL = -1;
export const PLAYER = 0;

export const RULES = {
  fleetSpeed: 1.6, // world units per second: crossings take 30-90 seconds
  // Indexed by factory level - 1.
  rate: [1, 1.7, 2.4, 3.2], // units produced per second
  cap: [40, 70, 110, 160], // production stops at this garrison
  upgradeCost: [20, 40, 70], // cost to go from level n to n + 1
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
  const radius = 60 + players * 14;
  // Stretch the map along z to suit a portrait screen (z runs up the screen).
  const rx = portrait ? radius * 0.72 : radius * 1.15;
  const rz = portrait ? radius * 1.35 : radius * 0.85;
  const ry = radius * 0.4;

  // Scatter systems in a flattened ellipsoid, keeping them apart so each is
  // an easy touch target.
  const pts = [];
  for (let tries = 0; pts.length < count && tries < 5000; tries++) {
    const p = {
      x: (rand() * 2 - 1) * rx,
      y: (rand() * 2 - 1) * ry,
      z: (rand() * 2 - 1) * rz,
    };
    if ((p.x / rx) ** 2 + (p.y / ry) ** 2 + (p.z / rz) ** 2 > 1) continue;
    if (pts.every((q) => dist(p, q) > 26)) pts.push(p);
  }

  const systems = pts.map((pos, id) => ({
    id,
    pos,
    owner: NEUTRAL,
    units: Math.round(10 + rand() * 25),
    level: rand() < 0.25 ? 2 : 1,
    size: 1.6 + rand() * 1.2,
    hue: rand(),
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

  return { systems, fleets: [], players, time: 0, winner: null, nextFleetId: 1 };
}

export const rateOf = (s) => RULES.rate[s.level - 1];
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
    duration: dist(from.pos, to.pos) / RULES.fleetSpeed,
  };
  game.fleets.push(fleet);
  return fleet;
}

export const sendFraction = (game, from, to, fraction) =>
  sendUnits(game, from, to, Math.max(1, Math.floor(from.units * fraction)));

export function upgrade(game, s) {
  const cost = upgradeCost(s);
  if (cost === null || s.units < cost || game.winner !== null) return false;
  s.units -= cost;
  s.level += 1;
  return true;
}

function arrive(game, fleet) {
  const s = game.systems[fleet.to];
  if (s.owner === fleet.owner) {
    s.units += fleet.units;
    return;
  }
  s.units -= fleet.units;
  if (s.units < 0) {
    s.owner = fleet.owner;
    s.units = -s.units;
    // A captured factory is damaged in the fighting.
    s.level = Math.max(1, s.level - 1);
  }
}

/** Advances the game; returns fleets that arrived this step (for effects). */
export function step(game, dt) {
  if (game.winner !== null) return [];
  game.time += dt;
  for (const s of game.systems) {
    if (s.owner === NEUTRAL) continue;
    const cap = capOf(s);
    if (s.units < cap) s.units = Math.min(cap, s.units + rateOf(s) * dt);
  }
  const arrived = [];
  game.fleets = game.fleets.filter((f) => {
    f.t += dt;
    if (f.t < f.duration) return true;
    arrive(game, f);
    arrived.push(f);
    return false;
  });

  const alive = new Set();
  for (const s of game.systems) if (s.owner !== NEUTRAL) alive.add(s.owner);
  for (const f of game.fleets) alive.add(f.owner);
  if (!alive.has(PLAYER)) game.winner = [...alive][0] ?? NEUTRAL;
  else if (alive.size === 1) game.winner = PLAYER;
  return arrived;
}

/** Where a fleet is now, as a 0..1 fraction of its trip. */
export const progress = (f) => Math.min(1, f.t / f.duration);
