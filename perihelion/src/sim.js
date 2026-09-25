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
  startCredits: 300,
  // Credits per second from each world you hold, plus each finished mine.
  income: { planet: 1, moon: 0.5, station: 0.6, asteroid: 0.3 },
  mineIncome: 1.5,
  ship: { cost: 60, time: 30 }, // built one at a time at a shipyard
  structures: {
    shipyard: { name: 'Shipyard', cost: 200, time: 60 },
    mine: { name: 'Mine', cost: 100, time: 30, only: ['asteroid', 'moon'], maxLevel: 3 },
    defence: { name: 'Guns', cost: 120, time: 35, maxLevel: 3 },
  },
  baseGuns: 1, // guns any held world has
  gunsPerDefence: 2,
  fire: 0.12, // ships destroyed per second, per firing ship (or gun)
  gunRegen: 0.02, // guns rebuilt per second after a fight
  flipTime: 4, // seconds spent turning around at the midpoint
};

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

const PLANET_NAMES = ['Vesper', 'Ardent', 'Halcyon', 'Morrow', 'Tessaly', 'Oberin', 'Calyx', 'Nadir'];
const MOON_NAMES = ['Io', 'Kell', 'Pim', 'Soren', 'Lark', 'Dace', 'Nym', 'Tove', 'Wren', 'Ossa'];
const STATION_NAMES = ['Tycho Yard', 'Ring One', 'Anchor', 'Meridian'];
const ROCK_NAMES = ['Ceres', 'Hygiea', 'Pallas', 'Thisbe', 'Egeria', 'Iris'];

/** Kepler: period grows with radius^1.5. */
const periodAt = (r) => RULES.outerPeriod * (r / RULES.outerRadius) ** 1.5;

export function createGame({ seed = Date.now(), opponents = 1 } = {}) {
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
  for (let i = 0; i < 6; i++) {
    const giant = i >= 3 && rand() < 0.7;
    const size = giant ? 3.2 + rand() * 1.2 : 1.6 + rand() * 1.1;
    const count = i === 0 ? 0 : giant ? 1 + Math.floor(rand() * 3) : Math.floor(rand() * 2);
    const moons = [];
    for (let m = 0; m < count; m++) {
      moons.push({ r: size * 1.8 + 3 + m * 3.2 + rand() * 0.8, size: 0.5 + rand() * 0.5, period: 300 + m * 150 + rand() * 120 });
    }
    specs.push({ giant, size, moons, station: false });
  }
  const hostIdx = [1, 2, 3, 4, 5].sort(() => rand() - 0.5).slice(0, 2);
  for (const i of hostIdx) specs[i].station = true;
  for (const sp of specs) {
    sp.reach = Math.max(sp.size * 1.6, sp.station ? sp.size * 1.9 + 1 : 0, ...sp.moons.map((m) => m.r + m.size));
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
        kind: 'station', name: pick(STATION_NAMES, names), parent: planet.id, r: sp.size * 1.9,
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
  const game = { bodies, fleets: [], players: opponents + 1, time: 0, winner: null, nextId: 1 };
  const planets = bodies.filter((b) => b.kind === 'planet');
  const candidates = planets.slice(1, 5);
  const homes = [candidates[Math.floor(rand() * candidates.length)]];
  while (homes.length < game.players) {
    let best = null;
    let bestD = -1;
    for (const c of candidates) {
      if (homes.includes(c)) continue;
      const d = Math.min(...homes.map((h) => dist(posAt(game, h, 0), posAt(game, c, 0))));
      if (d > bestD) { bestD = d; best = c; }
    }
    homes.push(best);
  }
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
const working = (x) => x.left <= 0 || x.next;
export const has = (b, type) => b.structures.some((x) => x.type === type && working(x));
/** Total working levels of a type (a level-3 mine counts 3). */
const count = (b, type) => b.structures.reduce((n, x) => n + (x.type === type && working(x) ? x.level : 0), 0);
export const maxGuns = (b) => RULES.baseGuns + RULES.gunsPerDefence * count(b, 'defence');
export const incomeOf = (b) => (b.owner === NEUTRAL ? 0 : RULES.income[b.kind] + RULES.mineIncome * count(b, 'mine'));
export const income = (game, owner) => game.bodies.reduce((n, b) => n + (b.owner === owner ? incomeOf(b) : 0), 0);

/** Why a structure can't be built here, or null if it can. */
export function cantBuild(game, b, type) {
  const def = RULES.structures[type];
  if (b.owner === NEUTRAL) return 'not yours';
  if (def.only && !def.only.includes(b.kind)) return `${b.kind}s can't have one`;
  if (type === 'shipyard' && b.structures.some((x) => x.type === 'shipyard')) return 'already has one';
  if (b.structures.length >= slotsOf(b)) return 'no free slots';
  if (game.credits[b.owner] < def.cost) return 'not enough credits';
  return null;
}
export function buildStructure(game, b, type) {
  if (cantBuild(game, b, type)) return false;
  const def = RULES.structures[type];
  game.credits[b.owner] -= def.cost;
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
  if (x.left > 0) return 'busy';
  if (x.level >= def.maxLevel) return 'at max level';
  if (game.credits[b.owner] < upgradeCost(x)) return 'not enough credits';
  return null;
}
export function upgrade(game, b, x) {
  if (cantUpgrade(game, b, x)) return false;
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
export function plan(game, from, to, now = game.time) {
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
    if (f.need > RULES.accel) { prev = T; continue; }
    let lo = prev;
    let hi = T;
    for (let i = 0; i < 30; i++) {
      const mid = (lo + hi) / 2;
      if (make(mid).need > RULES.accel) lo = mid;
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
  const f = { id: game.nextId++, owner: from.owner, n, from: from.id, to: to.id, ...p, t0: game.time };
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
function fight(game, b, dt) {
  const attackers = b.sieges.reduce((n, g) => n + g.n, 0);
  const defenders = b.ships + b.guns;
  for (const g of b.sieges) {
    const share = attackers > 0 ? g.n / attackers : 0;
    g.dmg = (g.dmg || 0) + RULES.fire * defenders * share * dt;
  }
  b.dmg = (b.dmg || 0) + RULES.fire * attackers * dt;
  b.fighting = true;
  // Damage becomes whole ships lost: docked ships first, then guns.
  while (b.dmg >= 1 && b.ships + b.guns > 0) {
    b.dmg -= 1;
    if (b.ships > 0) b.ships -= 1;
    else b.guns = Math.max(0, b.guns - 1);
    b.lostDef = (b.lostDef || 0) + 1;
  }
  for (const g of b.sieges) {
    while (g.dmg >= 1 && g.n > 0) { g.dmg -= 1; g.n -= 1; b.lostAtk = (b.lostAtk || 0) + 1; }
  }
  b.sieges = b.sieges.filter((g) => g.n > 0);
  if (b.ships + b.guns <= 0 && b.sieges.length) {
    const win = b.sieges.sort((x, y) => y.n - x.n)[0];
    b.owner = win.owner;
    b.ships = win.n;
    b.guns = 0;
    b.dmg = 0;
    b.build = 0;
    b.queue = 0;
    b.structures = b.structures.filter((x) => x.left <= 0 || x.next);
    for (const x of b.structures) { if (x.next) { delete x.next; x.left = 0; } }
    b.sieges = b.sieges.filter((g) => g !== win);
    b.captured = true;
  }
  if (!b.sieges.length) { b.dmg = 0; b.fighting = false; }
}

export function step(game, dt) {
  if (game.winner !== null) return;
  game.time += dt;

  for (const b of game.bodies) {
    if (b.owner === NEUTRAL) continue;
    game.credits[b.owner] += incomeOf(b) * dt;
    if (b.sieges.length) continue; // nothing gets built under fire
    for (const x of b.structures) {
      if (x.left <= 0) continue;
      x.left = Math.max(0, x.left - dt);
      if (x.left === 0 && x.next) { x.level = x.next; delete x.next; }
    }
    if (b.queue > 0 && has(b, 'shipyard')) {
      b.build += dt / RULES.ship.time;
      if (b.build >= 1) { b.build = 0; b.queue -= 1; b.ships += 1; }
    }
    const top = maxGuns(b);
    if (b.guns < top) b.guns = Math.min(top, b.guns + RULES.gunRegen * dt);
  }

  game.fleets = game.fleets.filter((f) => {
    if (game.time - f.t0 < f.T) return true;
    const b = game.bodies[f.to];
    if (b.owner === f.owner) b.ships += f.n;
    else {
      const g = b.sieges.find((x) => x.owner === f.owner);
      if (g) g.n += f.n;
      else b.sieges.push({ owner: f.owner, n: f.n });
    }
    return false;
  });

  for (const b of game.bodies) if (b.sieges.length) fight(game, b, dt);

  const alive = new Set();
  for (const b of game.bodies) {
    if (b.owner !== NEUTRAL) alive.add(b.owner);
    for (const g of b.sieges) alive.add(g.owner);
  }
  for (const f of game.fleets) alive.add(f.owner);
  if (!alive.has(PLAYER)) game.winner = [...alive][0] ?? NEUTRAL;
  else if (alive.size === 1) game.winner = PLAYER;
}
