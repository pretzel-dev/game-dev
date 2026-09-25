// Pure simulation of one solar system: no DOM, no Three.js, so it runs headless.
//
// Bodies move on circular orbits (moons around planets). Ships fly
// brachistochrone transfers: burn toward where the target will be, flip at the
// midpoint, burn to slow down. A few ships per side; every ship counts.

export const NEUTRAL = -1;
export const PLAYER = 0;

export const RULES = {
  accel: 0.03, // ship acceleration, world units / s^2
  outerPeriod: 1500, // seconds for the outermost planet to orbit the sun
  outerRadius: 160,
  buildTime: { planet: 40, moon: 60, station: 50, asteroid: 70 }, // seconds per ship
  cap: 12, // ships a site builds up to
  startShips: 4,
  fire: 0.12, // ships destroyed per second, per firing ship (or gun)
  guns: { planet: 3, moon: 1, station: 2, asteroid: 1 }, // defences when owned
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
    b.build = 0;
    b.guns = b.kind === 'planet' ? 2 : 1 + Math.floor(rand() * 2); // neutral defences
    b.sieges = [];
    bodies.push(b);
    return b;
  };

  const radii = [30, 48, 72, 98, 128, 160];
  for (const [i, r0] of radii.entries()) {
    const r = r0 * (0.92 + rand() * 0.16);
    const giant = i >= 3 && rand() < 0.7;
    const planet = add({
      kind: 'planet',
      name: pick(PLANET_NAMES, names),
      parent: null,
      r,
      period: periodAt(r),
      phase: rand() * Math.PI * 2,
      incl: (rand() - 0.5) * 0.06,
      size: giant ? 3.6 + rand() * 1.4 : 1.6 + rand() * 1.2,
      giant,
      hue: rand(),
    });
    const moons = i === 0 ? 0 : giant ? 1 + Math.floor(rand() * 3) : Math.floor(rand() * 2);
    for (let m = 0; m < moons; m++) {
      const mr = planet.size * (2.6 + m * 1.6 + rand() * 0.6);
      add({
        kind: 'moon',
        name: pick(MOON_NAMES, names),
        parent: planet.id,
        r: mr,
        period: 50 + m * 30 + rand() * 30,
        phase: rand() * Math.PI * 2,
        incl: (rand() - 0.5) * 0.3,
        size: 0.5 + rand() * 0.5,
        hue: rand(),
      });
    }
  }
  // An asteroid belt between the 4th and 5th planets.
  for (let k = 0; k < 4; k++) {
    const r = 110 + rand() * 8;
    add({
      kind: 'asteroid', name: pick(ROCK_NAMES, names), parent: null, r, period: periodAt(r),
      phase: (k / 4) * Math.PI * 2 + rand() * 0.8, incl: (rand() - 0.5) * 0.1, size: 0.5 + rand() * 0.4, hue: rand(),
    });
  }
  // Stations in orbit around two of the planets.
  const hosts = bodies.filter((b) => b.kind === 'planet' && b.r > 40);
  for (let k = 0; k < 2; k++) {
    const host = hosts[Math.floor(rand() * hosts.length)];
    add({
      kind: 'station', name: pick(STATION_NAMES, names), parent: host.id, r: host.size * 1.9,
      period: 30 + rand() * 10, phase: rand() * Math.PI * 2, incl: 0.2, size: 0.45, hue: 0,
    });
  }

  // Homes: planets in the middle orbits, spread around the sun as far apart as possible now.
  const game = { bodies, fleets: [], players: opponents + 1, time: 0, winner: null, nextId: 1 };
  const candidates = bodies.filter((b) => b.kind === 'planet' && b.r > 40 && b.r < 140);
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
  homes.forEach((h, owner) => {
    h.owner = owner;
    h.ships = RULES.startShips;
    h.guns = RULES.guns.planet;
  });
  return game;
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

/** Where a ship that left p0 with velocity v0 would drift to after T with no burn. */
const drift = (p0, v0, T) => ({ x: p0.x + v0.x * T, y: p0.y + v0.y * T, z: p0.z + v0.z * T });

/**
 * Plans a transfer from `from` (now) to where `to` will be on arrival. Ships
 * keep their launch body's orbital velocity, so the burn only has to cover
 * the difference between where they'd drift to and where the target will be.
 * Returns { p0, v0, p1, T }.
 */
export function plan(game, from, to, now = game.time) {
  const p0 = posAt(game, from, now);
  const v0 = velAt(game, from, now);
  // Find the first T where the burn needed to reach the target's position at T
  // takes exactly T. Scan forward (moons move fast, so simple iteration can
  // oscillate), then bisect.
  const gap = (T) => burnTime(dist(drift(p0, v0, T), posAt(game, to, now + T))) - T;
  let lo = 0.5;
  let hi = lo;
  for (let T = 0.5; T < 20000; T += 2) {
    if (gap(T) <= 0) { hi = T; break; }
    lo = T;
  }
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (gap(mid) > 0) lo = mid;
    else hi = mid;
  }
  const T = hi;
  return { p0, v0, p1: posAt(game, to, now + T), T };
}

export function launch(game, from, to, n) {
  n = Math.min(Math.floor(n), from.ships);
  if (n < 1 || from === to || game.winner !== null) return null;
  const { p0, v0, p1, T } = plan(game, from, to);
  from.ships -= n;
  const f = { id: game.nextId++, owner: from.owner, n, from: from.id, to: to.id, p0, v0, p1, t0: game.time, T };
  game.fleets.push(f);
  return f;
}

/**
 * A fleet's state at time t: position, direction of travel, progress, and
 * whether its drive is burning (and which way the nose points).
 */
export function fleetState(f, t) {
  const tau = Math.min(f.T, Math.max(0, t - f.t0));
  // The burn runs along the line from the drift point to the intercept; the
  // ship's actual path is that plus its inherited drift, so it curves.
  const end = drift(f.p0, f.v0, f.T);
  const d = { x: f.p1.x - end.x, y: f.p1.y - end.y, z: f.p1.z - end.z };
  const D = Math.hypot(d.x, d.y, d.z);
  const a = (4 * D) / (f.T * f.T);
  const half = f.T / 2;
  const s = tau < half ? 0.5 * a * tau * tau : D - 0.5 * a * (f.T - tau) ** 2;
  const k = D > 0 ? s / D : 1;
  const flip = Math.abs(tau - half) < RULES.flipTime / 2;
  return {
    x: f.p0.x + f.v0.x * tau + d.x * k,
    y: f.p0.y + f.v0.y * tau + d.y * k,
    z: f.p0.z + f.v0.z * tau + d.z * k,
    // Direction the drive pushes along (the burn line).
    bx: D > 0 ? d.x / D : 0,
    by: D > 0 ? d.y / D : 0,
    bz: D > 0 ? d.z / D : 1,
    progress: tau / f.T,
    burning: !flip && tau < f.T,
    // 1 = nose toward the target (accelerating), -1 = flipped (decelerating);
    // in between during the flip.
    facing: flip ? Math.cos(((tau - (half - RULES.flipTime / 2)) / RULES.flipTime) * Math.PI) : tau < half ? 1 : -1,
  };
}

export const buildTime = (b) => RULES.buildTime[b.kind];

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
    b.losses = (b.losses || 0) + 1;
  }
  for (const g of b.sieges) {
    while (g.dmg >= 1 && g.n > 0) { g.dmg -= 1; g.n -= 1; b.losses = (b.losses || 0) + 1; }
  }
  b.sieges = b.sieges.filter((g) => g.n > 0);
  if (b.ships + b.guns <= 0 && b.sieges.length) {
    const win = b.sieges.sort((x, y) => y.n - x.n)[0];
    b.owner = win.owner;
    b.ships = win.n;
    b.guns = 0;
    b.dmg = 0;
    b.build = 0;
    b.sieges = b.sieges.filter((g) => g !== win);
    b.captured = true;
  }
  if (!b.sieges.length) { b.dmg = 0; b.fighting = false; }
}

export function step(game, dt) {
  if (game.winner !== null) return;
  game.time += dt;

  for (const b of game.bodies) {
    if (b.owner === NEUTRAL || b.sieges.length) continue;
    if (b.ships < RULES.cap) {
      b.build += dt / buildTime(b);
      if (b.build >= 1) { b.build -= 1; b.ships += 1; }
    } else {
      b.build = 0;
    }
    const maxGuns = RULES.guns[b.kind];
    if (b.guns < maxGuns) b.guns = Math.min(maxGuns, b.guns + RULES.gunRegen * dt);
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
