/**
 * Hot air balloons and hoops: things in the air to aim a big jump at.
 *
 * Balloons drift in slow little circles and bob; hit one and it bounces you
 * like a trampoline. Hoops hang still; fly through one and it says so.
 * Pure maths, shared by the physics (car.time) and the renderer, so what you
 * see is exactly what you hit.
 */

export const ENVELOPE = 8.5; // envelope radius, metres
export const BASKET_DROP = ENVELOPE + 5.5; // centre of envelope to basket

/** Where balloon `b` is at time t: written into out {x, y, z}. */
export function balloonAt(b, t, out = { x: 0, y: 0, z: 0 }) {
  const a = b.phase + t * b.speed;
  out.x = b.x + Math.cos(a) * b.drift;
  out.z = b.z + Math.sin(a) * b.drift;
  out.y = b.y + Math.sin(t * 0.35 + b.phase * 2) * 1.6;
  return out;
}

/**
 * Did the car go through hoop `h` between positions a and b? The hoop is a
 * vertical ring at (x, y, z) facing (nx, 0, nz) with radius r.
 */
export function throughHoop(h, a, b) {
  const da = (a.x - h.x) * h.nx + (a.z - h.z) * h.nz;
  const db = (b.x - h.x) * h.nx + (b.z - h.z) * h.nz;
  if ((da > 0) === (db > 0) || da === db) return false;
  const t = da / (da - db);
  const x = a.x + (b.x - a.x) * t - h.x;
  const y = a.y + (b.y - a.y) * t - h.y;
  const z = a.z + (b.z - a.z) * t - h.z;
  return Math.hypot(x, y, z) < h.r;
}
