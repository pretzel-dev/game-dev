/**
 * The water: every drop out of the hose is a little ballistic particle.
 * It's aimed with a real arc (the low one, like a firefighter would), and
 * it lands on something: the fire, a wall, a person (who giggles), or the
 * ground (a splash and a wet patch).
 *
 * Pure numbers, so `tools/check.mjs` can spray at fires in Node.
 */
export const HOSE = {
  speed: 22, // m/s out of the nozzle
  rate: 95, // drops a second
  gravity: 9.8,
  spread: 0.025,
  life: 4,
};

export function createWater(max = 1000) {
  return {
    max,
    px: new Float32Array(max),
    py: new Float32Array(max),
    pz: new Float32Array(max),
    vx: new Float32Array(max),
    vy: new Float32Array(max),
    vz: new Float32Array(max),
    age: new Float32Array(max).fill(99),
    next: 0,
    carry: 0,
    events: [],
  };
}

/**
 * The launch velocity that lands a drop on (tx, ty, tz) from (ox, oy, oz).
 * Out of reach, it throws as far as it can in that direction.
 */
export function aimArc(ox, oy, oz, tx, ty, tz, speed = HOSE.speed) {
  const dx = tx - ox;
  const dz = tz - oz;
  const d = Math.max(0.01, Math.hypot(dx, dz));
  const dy = ty - oy;
  const g = HOSE.gravity;
  const v2 = speed * speed;
  const disc = v2 * v2 - g * (g * d * d + 2 * dy * v2);
  let angle;
  if (disc >= 0) angle = Math.atan((v2 - Math.sqrt(disc)) / (g * d));
  else angle = Math.PI / 4;
  const h = Math.cos(angle) * speed;
  return { x: (dx / d) * h, y: Math.sin(angle) * speed, z: (dz / d) * h, reach: disc >= 0 };
}

/** Spray for `dt` seconds from the nozzle along `vel` (from aimArc). */
export function spray(w, nozzle, vel, dt, rand = Math.random) {
  w.carry += HOSE.rate * dt;
  while (w.carry >= 1) {
    w.carry -= 1;
    const k = w.next;
    w.next = (w.next + 1) % w.max;
    const j = 1 + (rand() - 0.5) * HOSE.spread * 2;
    const s = HOSE.speed * HOSE.spread;
    // Spread each drop a little off the line, and start them at different
    // points along the first step so the stream is continuous.
    const lead = rand() * dt;
    w.vx[k] = vel.x * j + (rand() - 0.5) * s;
    w.vy[k] = vel.y * j + (rand() - 0.5) * s;
    w.vz[k] = vel.z * j + (rand() - 0.5) * s;
    w.px[k] = nozzle.x + w.vx[k] * lead;
    w.py[k] = nozzle.y + w.vy[k] * lead;
    w.pz[k] = nozzle.z + w.vz[k] * lead;
    w.age[k] = lead;
  }
}

/**
 * Move every drop and see what it hits. ctx: { collider, fire, people }.
 * Events: { type: 'fire' | 'wall' | 'ground' | 'person', x, y, z, person? }
 */
export function updateWater(w, dt, ctx) {
  const ev = w.events;
  ev.length = 0;
  const g = HOSE.gravity;
  const fire = ctx.fire;
  for (let k = 0; k < w.max; k++) {
    if (w.age[k] > HOSE.life) continue;
    w.age[k] += dt;
    w.vy[k] -= g * dt;
    w.px[k] += w.vx[k] * dt;
    w.py[k] += w.vy[k] * dt;
    w.pz[k] += w.vz[k] * dt;
    const x = w.px[k];
    const y = w.py[k];
    const z = w.pz[k];
    let hit = null;
    if (fire && fire.kind !== 'cat') {
      const d = Math.hypot(x - fire.x, (y - fire.y) * 0.8, z - fire.z);
      if (d < fire.r) hit = 'fire';
    }
    if (!hit && ctx.collider.boxAt(x, y, z)) hit = 'wall';
    if (!hit && y <= 0) hit = 'ground';
    if (!hit && ctx.people && y < 2) {
      for (const p of ctx.people) {
        if (Math.abs(p.x - x) < 0.6 && Math.abs(p.z - z) < 0.6) {
          ev.push({ type: 'person', x, y, z, person: p });
          hit = 'person';
          break;
        }
      }
      if (hit) {
        w.age[k] = 99;
        continue;
      }
    }
    if (hit) {
      ev.push({ type: hit, x, y: Math.max(0, y), z });
      w.age[k] = 99;
    }
  }
}
