/**
 * What the fire engine can bump into: buildings (boxes), tree trunks and
 * the like (circles), and the edge of the land. Everything is pushed out
 * sideways, so the truck slides along walls and is never held fast.
 */
import { clampToBounds } from './city.js';

const CELL = 16;

export function buildCollider(city) {
  const grid = new Map();
  const key = (i, j) => i * 4096 + j;
  const insert = (shape, minX, maxX, minZ, maxZ) => {
    for (let i = Math.floor(minX / CELL); i <= Math.floor(maxX / CELL); i++) {
      for (let j = Math.floor(minZ / CELL); j <= Math.floor(maxZ / CELL); j++) {
        const k = key(i, j);
        if (!grid.has(k)) grid.set(k, []);
        grid.get(k).push(shape);
      }
    }
  };
  for (const b of city.boxes) insert({ box: b }, b.minX, b.maxX, b.minZ, b.maxZ);
  for (const c of city.circles) insert({ circle: c }, c.x - c.r, c.x + c.r, c.z - c.r, c.z + c.r);

  const seen = new Set();
  function near(x, z, r, out) {
    out.length = 0;
    seen.clear();
    for (let i = Math.floor((x - r) / CELL); i <= Math.floor((x + r) / CELL); i++) {
      for (let j = Math.floor((z - r) / CELL); j <= Math.floor((z + r) / CELL); j++) {
        const list = grid.get(key(i, j));
        if (!list) continue;
        for (const s of list) {
          if (seen.has(s)) continue;
          seen.add(s);
          out.push(s);
        }
      }
    }
    return out;
  }

  /** Which box (if any) contains this point, below its roof? */
  function boxAt(x, y, z) {
    const list = grid.get(key(Math.floor(x / CELL), Math.floor(z / CELL)));
    if (!list) return null;
    for (const s of list) {
      const b = s.box;
      if (b && x > b.minX && x < b.maxX && z > b.minZ && z < b.maxZ && y < b.h) return b;
    }
    return null;
  }

  return { near, boxAt };
}

const scratch = [];

/**
 * Push a circle out of everything it overlaps. `extra` is a list of moving
 * circles (cars). Returns the push and the direction it came from.
 */
export function pushCircle(collider, x, z, r, extra = null) {
  let px = 0;
  let pz = 0;
  const shapes = collider.near(x, z, r, scratch);
  const test = (sx, sz, depth) => {
    px += sx * depth;
    pz += sz * depth;
  };
  for (const s of shapes) {
    const cx = x + px;
    const cz = z + pz;
    if (s.box) {
      const b = s.box;
      const qx = Math.max(b.minX, Math.min(b.maxX, cx));
      const qz = Math.max(b.minZ, Math.min(b.maxZ, cz));
      const dx = cx - qx;
      const dz = cz - qz;
      const d = Math.hypot(dx, dz);
      if (d >= r) continue;
      if (d > 1e-6) test(dx / d, dz / d, r - d);
      else {
        // Centre inside the box: out through the nearest face.
        const faces = [
          [cx - b.minX, -1, 0],
          [b.maxX - cx, 1, 0],
          [cz - b.minZ, 0, -1],
          [b.maxZ - cz, 0, 1],
        ].sort((a, b2) => a[0] - b2[0]);
        const [depth, sx, sz] = faces[0];
        test(sx, sz, depth + r);
      }
    } else {
      const c = s.circle;
      const dx = cx - c.x;
      const dz = cz - c.z;
      const d = Math.hypot(dx, dz);
      const min = r + c.r;
      if (d >= min) continue;
      if (d > 1e-6) test(dx / d, dz / d, min - d);
      else test(1, 0, min);
    }
  }
  if (extra) {
    for (const c of extra) {
      const cx = x + px;
      const cz = z + pz;
      const dx = cx - c.x;
      const dz = cz - c.z;
      const d = Math.hypot(dx, dz);
      const min = r + c.r;
      if (d >= min || d < 1e-6) continue;
      test(dx / d, dz / d, min - d);
    }
  }
  // The edge of the land.
  const inside = clampToBounds(x + px, z + pz);
  const bx = inside.x - (x + px);
  const bz = inside.z - (z + pz);
  px += bx;
  pz += bz;
  const len = Math.hypot(px, pz);
  return { x: px, z: pz, nx: len > 1e-6 ? px / len : 0, nz: len > 1e-6 ? pz / len : 0, depth: len };
}
