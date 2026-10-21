/**
 * What a mermaid can bump into, and how she's nudged clear: rocks and clams
 * (spheres), towers, pillars and masts (upright cylinders), shipwreck hulls
 * (turned boxes), hollow domes with doorways (the palace hall and the
 * grottos), the seabed and islands, the surface, and the edge of the ocean.
 * Everything pushes sideways, so she slides round things and never sticks.
 */
import { heightAt, slopeAt, WORLD_R } from './ocean.js';

/**
 * Push a sphere at p (mutated) out of everything. `opts.surface` is the
 * highest the centre may go (lower when swimming, higher when leaping).
 * Returns the summed push, so callers can tell what it hit.
 */
export function pushSphere(ocean, p, r, opts = {}) {
  let hx = 0;
  let hy = 0;
  let hz = 0;
  const add = (x, y, z) => {
    p.x += x;
    p.y += y;
    p.z += z;
    hx += x;
    hy += y;
    hz += z;
  };

  for (const s of ocean.spheres) {
    const dx = p.x - s.x;
    const dy = p.y - s.y;
    const dz = p.z - s.z;
    const d = Math.hypot(dx, dy, dz);
    const min = s.r + r;
    if (d >= min) continue;
    if (d < 1e-6) add(0, min, 0);
    else add((dx / d) * (min - d), (dy / d) * (min - d), (dz / d) * (min - d));
  }
  for (const c of ocean.cyls) {
    if (p.y < c.y0 - r || p.y > c.y1 + r) continue;
    const dx = p.x - c.x;
    const dz = p.z - c.z;
    const d = Math.hypot(dx, dz);
    const min = c.r + r;
    if (d >= min) continue;
    // Close to the top? Go over it instead.
    if (p.y > c.y1 - 0.5) {
      add(0, c.y1 + r - p.y, 0);
      continue;
    }
    if (d < 1e-6) add(min, 0, 0);
    else add((dx / d) * (min - d), 0, (dz / d) * (min - d));
  }
  for (const b of ocean.boxes) {
    // Into the box's own frame (turned by yaw about y).
    const c = Math.cos(b.yaw);
    const s = Math.sin(b.yaw);
    const rx = p.x - b.x;
    const ry = p.y - b.y;
    const rz = p.z - b.z;
    const lx = rx * c - rz * s;
    const lz = rx * s + rz * c;
    const qx = Math.max(-b.hx, Math.min(b.hx, lx));
    const qy = Math.max(-b.hy, Math.min(b.hy, ry));
    const qz = Math.max(-b.hz, Math.min(b.hz, lz));
    let nx = lx - qx;
    let ny = ry - qy;
    let nz = lz - qz;
    let d = Math.hypot(nx, ny, nz);
    if (d >= r) continue;
    let depth;
    if (d > 1e-6) {
      nx /= d;
      ny /= d;
      nz /= d;
      depth = r - d;
    } else {
      // Inside: out through the nearest face.
      const faces = [
        [b.hx - lx, 1, 0, 0],
        [lx + b.hx, -1, 0, 0],
        [b.hy - ry, 0, 1, 0],
        [ry + b.hy, 0, -1, 0],
        [b.hz - lz, 0, 0, 1],
        [lz + b.hz, 0, 0, -1],
      ].sort((a, b2) => a[0] - b2[0]);
      [d, nx, ny, nz] = faces[0];
      depth = d + r;
    }
    // Back to the world frame.
    add((nx * c + nz * s) * depth, ny * depth, (-nx * s + nz * c) * depth);
  }
  for (const sh of ocean.shells) {
    const dx = p.x - sh.x;
    const dy = p.y - sh.y;
    const dz = p.z - sh.z;
    const d = Math.hypot(dx, dy, dz);
    if (dy < -1 || d > sh.r + r + 1.5 || d < 1e-6) continue;
    const ux = dx / d;
    const uy = dy / d;
    const uz = dz / d;
    if (sh.doors.some((o) => ux * o.x + uy * o.y + uz * o.z >= o.cos)) continue;
    const wall = 0.6;
    if (d < sh.r) {
      const max = sh.r - wall - r;
      if (d > max) add(-ux * (d - max), -uy * (d - max), -uz * (d - max));
    } else {
      const min = sh.r + wall + r;
      if (d < min) add(ux * (min - d), uy * (min - d), uz * (min - d));
    }
  }

  // The seabed. Where an island is too shallow to fit, slide off it sideways.
  const top = opts.surface ?? -0.15;
  for (let k = 0; k < 3; k++) {
    const ground = heightAt(p.x, p.z) + r + 0.15;
    if (p.y >= ground) break;
    if (ground <= top + 0.01) add(0, ground - p.y, 0);
    else {
      const g = slopeAt(p.x, p.z);
      const l = Math.hypot(g.x, g.z) || 1;
      const step = Math.min(2, ground - top);
      add((-g.x / l) * step, 0, (-g.z / l) * step);
      if (p.y < heightAt(p.x, p.z) + r + 0.15 && heightAt(p.x, p.z) + r + 0.15 <= top) add(0, heightAt(p.x, p.z) + r + 0.15 - p.y, 0);
    }
  }
  // The surface.
  if (p.y > top) add(0, top - p.y, 0);
  // The edge of the ocean: a gentle current brings you back.
  const R = Math.hypot(p.x, p.z);
  if (R > WORLD_R) add((-p.x / R) * (R - WORLD_R), 0, (-p.z / R) * (R - WORLD_R));

  return { x: hx, y: hy, z: hz };
}

/** Is p inside anything solid (for the checks)? */
export function insideSomething(ocean, p, r = 0.3) {
  const q = { ...p };
  const push = pushSphere(ocean, q, r, { surface: 50 });
  return Math.hypot(push.x, push.y, push.z) > 0.05;
}
