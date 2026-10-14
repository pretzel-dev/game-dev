/**
 * What the car can touch: the height field, plus every triangle of every
 * stunt piece (in a flat grid so a wheel only tests the few near it), plus
 * upright cylinders (pillars, turbine masts, big cacti) and boulders.
 *
 * Pure numbers, no Three.js, so it runs in Node for `npm run check`.
 */
import { heightAt, normalAt } from './terrain.js';

const CELL = 8;
const key = (i, j) => (i + 4096) * 8192 + (j + 4096);

export const FLAG_STICK = 1; // loops and the drum hold the car on at speed
export const FLAG_BOOST = 2;
export const FLAG_RAIL = 4; // kerbs and barriers: never a surface to drive on

export function createCollision() {
  let tris = new Float32Array(9 * 4096);
  let norms = new Float32Array(3 * 4096);
  let flags = new Uint8Array(4096);
  let count = 0;
  const cells = new Map();
  const cylinders = []; // { x, z, r, y0, y1 }
  const spheres = []; // { x, y, z, r }
  const stamp = new Uint32Array(1 << 20);
  let stampId = 1;
  let triStamp = new Uint32Array(4096);

  function grow() {
    const t = new Float32Array(tris.length * 2);
    t.set(tris);
    tris = t;
    const n = new Float32Array(norms.length * 2);
    n.set(norms);
    norms = n;
    const f = new Uint8Array(flags.length * 2);
    f.set(flags);
    flags = f;
    const s = new Uint32Array(triStamp.length * 2);
    s.set(triStamp);
    triStamp = s;
  }

  function addCell(i, j, id) {
    const k = key(i, j);
    let list = cells.get(k);
    if (!list) cells.set(k, (list = []));
    list.push(id);
  }

  /** Add triangles from a flat [x,y,z, x,y,z, x,y,z, ...] array. */
  function addTriangles(pos, flag = 0) {
    for (let o = 0; o + 8 < pos.length; o += 9) {
      if (count * 9 + 9 > tris.length) grow();
      const ax = pos[o], ay = pos[o + 1], az = pos[o + 2];
      const bx = pos[o + 3], by = pos[o + 4], bz = pos[o + 5];
      const cx = pos[o + 6], cy = pos[o + 7], cz = pos[o + 8];
      const ux = bx - ax, uy = by - ay, uz = bz - az;
      const vx = cx - ax, vy = cy - ay, vz = cz - az;
      let nx = uy * vz - uz * vy;
      let ny = uz * vx - ux * vz;
      let nz = ux * vy - uy * vx;
      const l = Math.hypot(nx, ny, nz);
      if (l < 1e-9) continue;
      nx /= l;
      ny /= l;
      nz /= l;
      const id = count++;
      tris.set([ax, ay, az, bx, by, bz, cx, cy, cz], id * 9);
      norms[id * 3] = nx;
      norms[id * 3 + 1] = ny;
      norms[id * 3 + 2] = nz;
      flags[id] = flag;
      const i0 = Math.floor(Math.min(ax, bx, cx) / CELL);
      const i1 = Math.floor(Math.max(ax, bx, cx) / CELL);
      const j0 = Math.floor(Math.min(az, bz, cz) / CELL);
      const j1 = Math.floor(Math.max(az, bz, cz) / CELL);
      for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) addCell(i, j, id);
    }
  }

  function addCylinder(x, z, r, y0, y1) {
    const id = cylinders.length;
    cylinders.push({ x, z, r, y0, y1 });
    for (let i = Math.floor((x - r) / CELL); i <= Math.floor((x + r) / CELL); i++) {
      for (let j = Math.floor((z - r) / CELL); j <= Math.floor((z + r) / CELL); j++) addCell(i, j, -1 - id);
    }
  }

  function addSphere(x, y, z, r) {
    const id = spheres.length;
    spheres.push({ x, y, z, r });
    for (let i = Math.floor((x - r) / CELL); i <= Math.floor((x + r) / CELL); i++) {
      for (let j = Math.floor((z - r) / CELL); j <= Math.floor((z + r) / CELL); j++) addCell(i, j, -100000 - id);
    }
  }

  /** Visit every item id in the cells overlapping an xz box, once each. */
  function query(x0, z0, x1, z1, fn) {
    stampId++;
    if (stampId > 0xfffffff0) {
      triStamp.fill(0);
      stampId = 1;
    }
    const i0 = Math.floor(x0 / CELL);
    const i1 = Math.floor(x1 / CELL);
    const j0 = Math.floor(z0 / CELL);
    const j1 = Math.floor(z1 / CELL);
    for (let i = i0; i <= i1; i++) {
      for (let j = j0; j <= j1; j++) {
        const list = cells.get(key(i, j));
        if (!list) continue;
        for (let n = 0; n < list.length; n++) {
          const id = list[n];
          if (id >= 0) {
            if (triStamp[id] === stampId) continue;
            triStamp[id] = stampId;
          } else {
            // Obstacles sit in few cells; a repeat visit is harmless but
            // keep it cheap with the shared stamp table.
            const s = (-id) & 0xfffff;
            if (stamp[s] === stampId) continue;
            stamp[s] = stampId;
          }
          fn(id);
        }
      }
    }
  }

  /* ---------------------------------------------------------- raycast --- */

  const hit = { t: 0, nx: 0, ny: 1, nz: 0, flags: 0, terrain: false };
  const tn = { x: 0, y: 1, z: 0 };

  /**
   * First thing along the ray within maxT (direction must be unit length).
   * Returns the shared `hit` object or null.
   */
  function raycast(ox, oy, oz, dx, dy, dz, maxT) {
    let best = maxT;
    let found = false;

    // Terrain: march, then bisect.
    const steps = Math.max(2, Math.ceil(maxT / 0.8));
    let prevT = 0;
    let prevD = oy - heightAt(ox, oz);
    if (prevD <= 0) {
      // Starting underground: the ground is right here.
      best = 0;
      found = true;
      normalAt(ox, oz, tn);
      hit.nx = tn.x;
      hit.ny = tn.y;
      hit.nz = tn.z;
      hit.flags = 0;
      hit.terrain = true;
    } else {
      for (let s = 1; s <= steps; s++) {
        const t = (maxT * s) / steps;
        const x = ox + dx * t;
        const z = oz + dz * t;
        const d = oy + dy * t - heightAt(x, z);
        if (d <= 0) {
          let a = prevT;
          let b = t;
          for (let k = 0; k < 7; k++) {
            const m = (a + b) * 0.5;
            const dm = oy + dy * m - heightAt(ox + dx * m, oz + dz * m);
            if (dm > 0) a = m;
            else b = m;
          }
          best = (a + b) * 0.5;
          found = true;
          normalAt(ox + dx * best, oz + dz * best, tn);
          hit.nx = tn.x;
          hit.ny = tn.y;
          hit.nz = tn.z;
          hit.flags = 0;
          hit.terrain = true;
          break;
        }
        prevT = t;
        prevD = d;
      }
    }

    const ex = ox + dx * maxT;
    const ez = oz + dz * maxT;
    query(Math.min(ox, ex), Math.min(oz, ez), Math.max(ox, ex), Math.max(oz, ez), (id) => {
      if (id < 0) return;
      const o = id * 9;
      const ax = tris[o], ay = tris[o + 1], az = tris[o + 2];
      const e1x = tris[o + 3] - ax, e1y = tris[o + 4] - ay, e1z = tris[o + 5] - az;
      const e2x = tris[o + 6] - ax, e2y = tris[o + 7] - ay, e2z = tris[o + 8] - az;
      const px = dy * e2z - dz * e2y;
      const py = dz * e2x - dx * e2z;
      const pz = dx * e2y - dy * e2x;
      const det = e1x * px + e1y * py + e1z * pz;
      if (det > -1e-9 && det < 1e-9) return;
      const inv = 1 / det;
      const sx = ox - ax, sy = oy - ay, sz = oz - az;
      const u = (sx * px + sy * py + sz * pz) * inv;
      if (u < 0 || u > 1) return;
      const qx = sy * e1z - sz * e1y;
      const qy = sz * e1x - sx * e1z;
      const qz = sx * e1y - sy * e1x;
      const v = (dx * qx + dy * qy + dz * qz) * inv;
      if (v < 0 || u + v > 1) return;
      const t = (e2x * qx + e2y * qy + e2z * qz) * inv;
      if (t < 0 || t >= best) return;
      best = t;
      found = true;
      let nx = norms[id * 3], ny = norms[id * 3 + 1], nz = norms[id * 3 + 2];
      // Face the ray's origin: every piece can be driven on either side.
      if (nx * dx + ny * dy + nz * dz > 0) {
        nx = -nx;
        ny = -ny;
        nz = -nz;
      }
      hit.nx = nx;
      hit.ny = ny;
      hit.nz = nz;
      hit.flags = flags[id];
      hit.terrain = false;
    });
    if (!found) return null;
    hit.t = best;
    return hit;
  }

  /* ---------------------------------------------------------- spheres --- */

  /**
   * Everything a sphere overlaps, written into `out` as
   * { nx, ny, nz, depth, flags, kind } (kind: 'ground' | 'piece' | 'post' | 'rock').
   * Returns how many.
   */
  function sphereContacts(cx, cy, cz, r, out) {
    let n = 0;
    const push = (nx, ny, nz, depth, flag, kind) => {
      if (n >= out.length) out.push({});
      const c = out[n++];
      c.nx = nx;
      c.ny = ny;
      c.nz = nz;
      c.depth = depth;
      c.flags = flag;
      c.kind = kind;
    };

    const h = heightAt(cx, cz);
    normalAt(cx, cz, tn);
    const dist = (cy - h) * tn.y;
    if (dist < r) push(tn.x, tn.y, tn.z, r - dist, 0, 'ground');

    query(cx - r, cz - r, cx + r, cz + r, (id) => {
      if (id >= 0) {
        const o = id * 9;
        closestOnTriangle(cx, cy, cz, tris, o, cp);
        let dx = cx - cp[0];
        let dy = cy - cp[1];
        let dz = cz - cp[2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 >= r * r) return;
        const d = Math.sqrt(d2);
        if (d > 1e-6) {
          dx /= d;
          dy /= d;
          dz /= d;
        } else {
          dx = norms[id * 3];
          dy = norms[id * 3 + 1];
          dz = norms[id * 3 + 2];
        }
        push(dx, dy, dz, r - d, flags[id], 'piece');
      } else if (id > -100000) {
        const c = cylinders[-1 - id];
        if (cy + r < c.y0 || cy - r > c.y1) return;
        let dx = cx - c.x;
        let dz = cz - c.z;
        const d = Math.hypot(dx, dz);
        if (d >= c.r + r) return;
        if (cy > c.y1 && d < c.r) {
          // On top of it.
          push(0, 1, 0, c.y1 + r - cy, 0, 'post');
          return;
        }
        if (d > 1e-6) {
          dx /= d;
          dz /= d;
        } else {
          dx = 1;
          dz = 0;
        }
        push(dx, 0, dz, c.r + r - d, 0, 'post');
      } else {
        const s = spheres[-100000 - id];
        let dx = cx - s.x;
        let dy = cy - s.y;
        let dz = cz - s.z;
        const d = Math.hypot(dx, dy, dz);
        if (d >= s.r + r || d < 1e-6) return;
        push(dx / d, dy / d, dz / d, s.r + r - d, 0, 'rock');
      }
    });
    return n;
  }

  return {
    addTriangles,
    addCylinder,
    addSphere,
    raycast,
    sphereContacts,
    get triangleCount() {
      return count;
    },
    cylinders,
    spheres,
  };
}

const cp = [0, 0, 0];

/** Closest point on triangle (tris[o..o+8]) to p — Ericson, RTCD 5.1.5. */
function closestOnTriangle(px, py, pz, t, o, out) {
  const ax = t[o], ay = t[o + 1], az = t[o + 2];
  const bx = t[o + 3], by = t[o + 4], bz = t[o + 5];
  const cx = t[o + 6], cy = t[o + 7], cz = t[o + 8];
  const abx = bx - ax, aby = by - ay, abz = bz - az;
  const acx = cx - ax, acy = cy - ay, acz = cz - az;
  const apx = px - ax, apy = py - ay, apz = pz - az;
  const d1 = abx * apx + aby * apy + abz * apz;
  const d2 = acx * apx + acy * apy + acz * apz;
  if (d1 <= 0 && d2 <= 0) return set(out, ax, ay, az);
  const bpx = px - bx, bpy = py - by, bpz = pz - bz;
  const d3 = abx * bpx + aby * bpy + abz * bpz;
  const d4 = acx * bpx + acy * bpy + acz * bpz;
  if (d3 >= 0 && d4 <= d3) return set(out, bx, by, bz);
  const vc = d1 * d4 - d3 * d2;
  if (vc <= 0 && d1 >= 0 && d3 <= 0) {
    const v = d1 / (d1 - d3);
    return set(out, ax + abx * v, ay + aby * v, az + abz * v);
  }
  const cpx = px - cx, cpy = py - cy, cpz = pz - cz;
  const d5 = abx * cpx + aby * cpy + abz * cpz;
  const d6 = acx * cpx + acy * cpy + acz * cpz;
  if (d6 >= 0 && d5 <= d6) return set(out, cx, cy, cz);
  const vb = d5 * d2 - d1 * d6;
  if (vb <= 0 && d2 >= 0 && d6 <= 0) {
    const w = d2 / (d2 - d6);
    return set(out, ax + acx * w, ay + acy * w, az + acz * w);
  }
  const va = d3 * d6 - d5 * d4;
  if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
    const w = (d4 - d3) / (d4 - d3 + (d5 - d6));
    return set(out, bx + (cx - bx) * w, by + (cy - by) * w, bz + (cz - bz) * w);
  }
  const denom = 1 / (va + vb + vc);
  const v = vb * denom;
  const w = vc * denom;
  return set(out, ax + abx * v + acx * w, ay + aby * v + acy * w, az + abz * v + acz * w);
}

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
