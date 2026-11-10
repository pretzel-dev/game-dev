import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { LD_VERT_PARS, LD_VERT, LD_FRAG_PARS, LD_FRAG } from './glsl.js';
import { rng } from '../sim.js';
import { SHADOW_GLSL, addShadowUniforms } from './shadow.js';

/**
 * Ships, drawn with GPU instancing: one draw call per hull type for every
 * ship in the system, so they can afford real detail.
 *
 * Hard-sci-fi hulls in the spirit of The Expanse: no wings or streamlining,
 * stacked pressure decks, armour plates, point-defence turrets, keel
 * railguns, radiators, and a drive section that's a third of the ship. Each
 * hull is built from parts tagged by what they are (plating, machinery,
 * owner paint, windows, navigation lights, the drive's throat), merged into
 * one geometry; the shader picks colour and glow from the tag. Ships go dark
 * when they pass into a world's shadow, leaving their running lights.
 */

// Part tags (stored per vertex).
/** Screen pixels per world unit at distance 1 (set by the view each frame). */
export const hullPx = { value: 800 };
export const HULL = 0, DARK = 1, PAINT = 2, WINDOW = 3, NAV_R = 4, NAV_G = 5, STROBE = 6, THROAT = 7, RAD = 8, SOLAR = 9;
/** Worked ground (spoil, berms, pit benches): the world's own colour (`iGround`), not plating. */
export const GROUND = 10;

/** Hull plating: panels of slightly different tone, seams, hatches, scuffs. */
let plating = null;
export function platingTex() {
  if (plating) return plating;
  const S = 256;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  const r = rng(17);
  g.fillStyle = '#d8d8d8';
  g.fillRect(0, 0, S, S);
  const plate = (x, y, w, h, depth) => {
    if (depth > 4 || w < 18 || h < 18 || (depth > 1 && r() < 0.18)) {
      const v = (196 + r() * 52) | 0;
      g.fillStyle = `rgb(${v},${v},${v + 2})`;
      g.fillRect(x + 1, y + 1, w - 2, h - 2);
      // Panel seam, with a light edge on one side (reads as relief).
      g.strokeStyle = 'rgba(30,34,40,0.6)';
      g.lineWidth = 1;
      g.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
      g.strokeStyle = 'rgba(255,255,255,0.25)';
      g.beginPath(); g.moveTo(x + 1.5, y + h - 1.5); g.lineTo(x + 1.5, y + 1.5); g.lineTo(x + w - 1.5, y + 1.5); g.stroke();
      // Details: hatches, vents, rivet rows, a hazard stripe now and then.
      const k = r();
      if (k < 0.15) { g.fillStyle = 'rgba(40,44,52,0.45)'; g.fillRect(x + w * 0.3, y + h * 0.3, w * 0.3, h * 0.25); }
      else if (k < 0.25) { g.fillStyle = 'rgba(30,32,36,0.5)'; for (let i = 0; i < 5; i++) g.fillRect(x + 3, y + 3 + i * 3, w * 0.4, 1); }
      else if (k < 0.33) { g.fillStyle = 'rgba(30,30,30,0.45)'; for (let i = 3; i < w - 3; i += 4) { g.fillRect(x + i, y + 2, 1, 1); g.fillRect(x + i, y + h - 3, 1, 1); } }
      else if (k < 0.36) {
        g.save(); g.beginPath(); g.rect(x + 2, y + h - 7, w - 4, 5); g.clip();
        for (let i = -10; i < w; i += 6) { g.fillStyle = 'rgba(190,140,30,0.7)'; g.beginPath(); g.moveTo(x + i, y + h); g.lineTo(x + i + 3, y + h); g.lineTo(x + i + 8, y + h - 8); g.lineTo(x + i + 5, y + h - 8); g.fill(); }
        g.restore();
      }
      return;
    }
    if (w > h) { const cut = (w * (0.3 + r() * 0.4)) | 0; plate(x, y, cut, h, depth + 1); plate(x + cut, y, w - cut, h, depth + 1); }
    else { const cut = (h * (0.3 + r() * 0.4)) | 0; plate(x, y, w, cut, depth + 1); plate(x, y + cut, w, h - cut, depth + 1); }
  };
  plate(0, 0, S, S, 0);
  // Scuffs and streaks of grime.
  for (let i = 0; i < 90; i++) { g.fillStyle = `rgba(20,20,26,${0.03 + r() * 0.06})`; g.fillRect(r() * S, r() * S, 1 + r() * 14, 1); }
  for (let i = 0; i < 1200; i++) { g.fillStyle = r() < 0.5 ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.04)'; g.fillRect(r() * S, r() * S, 1, 1); }
  plating = new THREE.CanvasTexture(c);
  plating.colorSpace = THREE.SRGBColorSpace;
  plating.wrapS = plating.wrapT = THREE.RepeatWrapping;
  plating.anisotropy = 4;
  return plating;
}

/** A parts kit: boxes, cylinders and so on, each tagged, merged at the end. */
const UP = new THREE.Vector3(0, 1, 0);
export function kit(seed) {
  const parts = [];
  const r = rng(seed);
  const X = Math.PI / 2;
  const tag = (geo, kind, tint = 1) => { geo.userData.kind = kind; geo.userData.tint = tint; parts.push(geo); return geo; };
  // A round part's far-off stand-in (fewer sides), made only if a build asks for it.
  const lo = (geo, make) => { geo.userData.lo = make; return geo; };
  const bellPts = (rad, len, n, e, a = 0.42) => { const pts = []; for (let i = 0; i <= n; i++) { const t = i / n; pts.push(new THREE.Vector2(rad * (a + (1 - a) * Math.pow(t, e)), -t * len)); } return pts; };
  const k = {
    r,
    add: (geo, kind = HULL, tint = 1) => tag(geo, kind, tint),
    box: (w, h, d, x = 0, y = 0, z = 0, kind = HULL, tint) => tag(new THREE.BoxGeometry(w, h, d).translate(x, y, z), kind, tint),
    cyl: (r1, r2, len, z, kind = HULL, seg = 12, x = 0, y = 0, tint) => lo(tag(new THREE.CylinderGeometry(r1, r2, len, seg).rotateX(X).translate(x, y, z), kind, tint), seg > 6 && (() => new THREE.CylinderGeometry(r1, r2, len, 6).rotateX(X).translate(x, y, z))),
    // A chamfered block: an eight-sided frustum, stretched to w x h (r1 at the front, r2 at the back).
    oct: (w, h, len, z, taper = 1, x = 0, y = 0, kind = HULL, tint) => tag(new THREE.CylinderGeometry(0.5 * taper, 0.5, len, 8).rotateY(Math.PI / 8).rotateX(X).scale(w, h, 1).translate(x, y, z), kind, tint),
    // A tapered block: a box whose front (+z) face is scaled by fw x fh and shifted by (fx, fy).
    wedge: (w, h, len, x = 0, y = 0, z = 0, fw = 1, fh = 1, kind = HULL, tint, fx = 0, fy = 0) => {
      const g = new THREE.BoxGeometry(w, h, len), p = g.attributes.position;
      for (let i = 0; i < p.count; i++) if (p.getZ(i) > 0) p.setXY(i, p.getX(i) * fw + fx, p.getY(i) * fh + fy);
      return tag(g.translate(x, y, z), kind, tint);
    },
    sphere: (rad, x, y, z, kind = HULL, tint, seg = 10) => lo(tag(new THREE.SphereGeometry(rad, seg, Math.max(6, seg * 0.6 | 0)).translate(x, y, z), kind, tint), () => new THREE.SphereGeometry(rad, 6, 4).translate(x, y, z)),
    // A propellant tank: a capsule along the hull axis.
    tank: (rad, len, x, y, z, kind = HULL, tint) => lo(tag(new THREE.CapsuleGeometry(rad, len, 2, 8).rotateX(X).translate(x, y, z), kind, tint), () => new THREE.CapsuleGeometry(rad, len, 1, 6).rotateX(X).translate(x, y, z)),
    // A straight member from (x, y, z) out along dir, len long, t thick. Returns its far end.
    boom: (x, y, z, dir, len, t = 0.004, kind = DARK, tint) => {
      const d = new THREE.Vector3(...dir).normalize();
      const g = new THREE.BoxGeometry(t, len, t).translate(0, len / 2, 0);
      g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, d)).translate(x, y, z);
      tag(g, kind, tint);
      return [x + d.x * len, y + d.y * len, z + d.z * len];
    },
    // A dish antenna at (x, y, z) facing dir, with a feed on a strut.
    dish: (rad, x, y, z, dir, kind = HULL) => {
      const d = new THREE.Vector3(...dir).normalize();
      const q = new THREE.Quaternion().setFromUnitVectors(UP, d);
      tag(new THREE.CylinderGeometry(rad, rad * 0.14, rad * 0.32, 18).translate(0, rad * 0.16, 0).applyQuaternion(q).translate(x, y, z), kind, 1.05);
      k.boom(x, y, z, dir, rad * 0.75, Math.max(0.002, rad * 0.06));
    },
    // A radiator: thin panels in segments with a coolant manifold along the
    // root. From (x, y), reaching out at angle a round the hull axis, len
    // long along z. Returns the outer edge, to hang a folding second panel.
    radiator: (x, y, z, reach, len, a, segs = 3, t = 0.003, kind = RAD) => {
      const gap = len * 0.035;
      const sl = (len - gap * (segs - 1)) / segs;
      for (let i = 0; i < segs; i++) {
        const zz = z - len / 2 + sl / 2 + i * (sl + gap);
        tag(new THREE.BoxGeometry(reach, t, sl).translate(reach / 2, 0, 0).rotateZ(a).translate(x, y, zz), kind, (kind === RAD ? 0.92 : 0.55) + r() * 0.14);
        // A coolant header along the outer edge of each panel.
        k.strut(x + Math.cos(a) * reach, y + Math.sin(a) * reach, zz - sl / 2, x + Math.cos(a) * reach, y + Math.sin(a) * reach, zz + sl / 2, t * 1.8, DARK, 0.7);
      }
      // The root manifold, and coolant lines from it into the hull at both ends.
      k.cyl(t * 1.5, t * 1.5, len * 1.04, z, HULL, 6, x, y, 0.75);
      const rr = Math.hypot(x, y);
      if (rr > 1e-4) for (const e of [-0.42, 0.42]) k.pipe(x, y, z + e * len, x * 0.55, y * 0.55, z + e * len * 1.1, t * 0.9, DARK);
      return [x + Math.cos(a) * reach, y + Math.sin(a) * reach];
    },
    // A straight member between two points.
    strut: (x0, y0, z0, x1, y1, z1, t = 0.003, kind = DARK, tint) => {
      const d = new THREE.Vector3(x1 - x0, y1 - y0, z1 - z0);
      const len = d.length();
      if (len < 1e-6) return;
      const g = new THREE.CylinderGeometry(t * 0.62, t * 0.62, len, 3, 1, true).translate(0, len / 2, 0);
      g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, d.normalize())).translate(x0, y0, z0);
      tag(g, kind, tint);
    },
    // A feed line (thin pipe) between two points.
    pipe: (x0, y0, z0, x1, y1, z1, rad = 0.0022, kind = HULL) => {
      const d = new THREE.Vector3(x1 - x0, y1 - y0, z1 - z0);
      const len = d.length();
      if (len < 1e-6) return;
      const g = new THREE.CylinderGeometry(rad, rad, len, 4, 1, true).translate(0, len / 2, 0);
      g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, d.normalize())).translate(x0, y0, z0);
      tag(g, kind, 0.8);
    },
    // A triangular truss along z: three longerons, triangular frames and zig-zag diagonals.
    truss3: (x, y, z0, z1, R, bays, t = 0.004, rot = 0, kind = DARK) => {
      const P = [0, 1, 2].map((i) => { const a = rot + Math.PI / 2 + (i * 2 * Math.PI) / 3; return [x + Math.cos(a) * R, y + Math.sin(a) * R]; });
      for (const [px, py] of P) k.strut(px, py, z0, px, py, z1, t, kind);
      const L = (z1 - z0) / bays;
      for (let i = 0; i <= bays; i++) {
        const z = z0 + i * L;
        for (let j = 0; j < 3; j++) k.strut(P[j][0], P[j][1], z, P[(j + 1) % 3][0], P[(j + 1) % 3][1], z, t * 0.8, kind);
        if (i === bays) break;
        for (let j = 0; j < 3; j++) {
          const [A, B] = i % 2 ? [P[j], P[(j + 1) % 3]] : [P[(j + 1) % 3], P[j]];
          k.strut(A[0], A[1], z, B[0], B[1], z + L, t * 0.7, kind, 0.85);
        }
      }
    },
    // An open box frame (cargo framing, clamps): twelve edges.
    frame: (w, h, d, x, y, z, t = 0.003, kind = DARK) => {
      const X0 = x - w / 2, X1 = x + w / 2, Y0 = y - h / 2, Y1 = y + h / 2, Z0 = z - d / 2, Z1 = z + d / 2;
      for (const yy of [Y0, Y1]) for (const zz of [Z0, Z1]) k.strut(X0, yy, zz, X1, yy, zz, t, kind);
      for (const xx of [X0, X1]) for (const zz of [Z0, Z1]) k.strut(xx, Y0, zz, xx, Y1, zz, t, kind);
      for (const xx of [X0, X1]) for (const yy of [Y0, Y1]) k.strut(xx, yy, Z0, xx, yy, Z1, t, kind);
    },
    // A propellant tank with straps and (optionally) a band in the owner's paint.
    strapped: (rad, len, x, y, z, paint = false, tint = 1) => {
      k.tank(rad, len, x, y, z, HULL, tint);
      const band = (rr, w, zz, kind, tint) => tag(new THREE.CylinderGeometry(rr, rr, w, 10, 1, true).rotateX(X).translate(x, y, zz), kind, tint);
      for (const f of [-0.32, 0.32]) band(rad * 1.06, rad * 0.16, z + f * len, DARK, 0.8);
      if (paint) band(rad * 1.04, len * 0.3, z, PAINT, 1);
    },
    // A docking collar facing +z (dir 1) or -z: a short neck and a flange.
    collar: (rad, z, x = 0, y = 0, dir = 1) => {
      k.cyl(rad * 0.85, rad * 0.85, 0.014, z, HULL, 12, x, y, 0.9);
      k.cyl(rad * 1.25, rad * 1.25, 0.004, z + dir * 0.007, DARK, 14, x, y);
    },
    // The main drive: a bell on a thrust frame (struts from a ring forward of it).
    engine: (rad, z, len, frameR, frameZ, n = 6) => {
      k.bell(rad, z, len);
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + 0.3;
        k.strut(Math.cos(a) * frameR, Math.sin(a) * frameR, frameZ, Math.cos(a) * rad * 0.5, Math.sin(a) * rad * 0.5, z - len * 0.12, 0.004, DARK, 0.8);
      }
      k.cyl(frameR * 1.05, frameR * 1.05, 0.008, frameZ, DARK, 14);
    },
    // A solar array: a framed panel of cells, reaching out from (x, y) at angle a.
    solar: (x, y, z, reach, len, a, t = 0.003) => {
      tag(new THREE.BoxGeometry(reach, t, len).translate(reach / 2, 0, 0).rotateZ(a).translate(x, y, z), SOLAR, 1);
      tag(new THREE.BoxGeometry(reach, t * 1.4, t * 1.4).translate(reach / 2, 0, 0).rotateZ(a).translate(x, y, z), DARK, 0.7);
      tag(new THREE.BoxGeometry(t * 1.4, t * 1.4, len).translate(reach, 0, 0).rotateZ(a).translate(x, y, z), DARK, 0.7);
    },
    // An open lattice truss along z: four rails, frames and diagonals.
    truss: (x, y, z0, z1, w, bays, t = 0.004, kind = DARK) => {
      const L = (z1 - z0) / bays;
      for (const sx of [-1, 1]) for (const sy of [-1, 1]) k.strut(x + (sx * w) / 2, y + (sy * w) / 2, z0, x + (sx * w) / 2, y + (sy * w) / 2, z1, t, kind);
      for (let i = 0; i <= bays; i++) {
        const z = z0 + i * L;
        for (const s of [-1, 1]) { k.strut(x - w / 2, y + (s * w) / 2, z, x + w / 2, y + (s * w) / 2, z, t, kind); k.strut(x + (s * w) / 2, y - w / 2, z, x + (s * w) / 2, y + w / 2, z, t, kind); }
        if (i === bays) break;
        const f = i % 2 ? 1 : -1;
        for (const s of [-1, 1]) {
          k.strut(x + (s * w) / 2, y - (f * s * w) / 2, z, x + (s * w) / 2, y + (f * s * w) / 2, z + L, t * 0.8, kind, 0.85);
          k.strut(x - (f * s * w) / 2, y + (s * w) / 2, z, x + (f * s * w) / 2, y + (s * w) / 2, z + L, t * 0.8, kind, 0.85);
        }
      }
    },
    // A shadow shield: a squat cone between the reactor and everything
    // forward of it, widest on the side it protects.
    shield: (rad, z) => tag(new THREE.CylinderGeometry(rad, rad * 0.62, 0.014, 18).rotateX(X).translate(0, 0, z), DARK, 0.75),
    // A turret: a heavier twin mount than a PDC (kinetic guns).
    turret: (x, y, z, up = 1, s = 1) => {
      k.cyl(0.017 * s, 0.02 * s, 0.01 * s, z, DARK, 10, x, y);
      k.box(0.026 * s, 0.012 * s * up, 0.03 * s, x, y + 0.008 * s * up, z, HULL, 0.85);
      for (const o of [-0.005, 0.005]) k.box(0.004 * s, 0.004 * s, 0.06 * s, x + o * s, y + 0.01 * s * up, z + 0.04 * s, DARK, 0.6);
    },
    // Missile cells: a grid of hatches on a face (y up).
    cells: (x, y, z, nx, nz, step = 0.011) => {
      for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) k.box(step * 0.72, 0.002, step * 0.72, x + (i - (nx - 1) / 2) * step, y, z + (j - (nz - 1) / 2) * step, DARK, 0.45 + r() * 0.3);
    },
    // A reaction-control cluster: a small block with nozzles out to the side and fore-aft.
    rcs: (x, y, z, ax, ay) => {
      k.box(0.011, 0.011, 0.014, x, y, z, DARK, 0.8);
      k.box(0.004, 0.004, 0.004, x + ax * 0.0075, y + ay * 0.0075, z, DARK, 0.5);
      k.box(0.004, 0.004, 0.004, x, y, z + 0.009, DARK, 0.5);
    },
    // A ring of deck segments round the z axis (a spin habitat), with spokes to a hub.
    hoop: (R, w, d, n, z = 0, spokes = 0, hubR = 0, win = 0.004, kind = HULL) => {
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        k.add(new THREE.BoxGeometry(w, ((2 * Math.PI * R) / n) * 1.02, d).rotateZ(a).translate(Math.cos(a) * R, Math.sin(a) * R, z), i % 9 === 4 ? PAINT : kind, 0.9 + r() * 0.2);
        if (win && i % 2 === 0) k.add(new THREE.BoxGeometry(win * 0.5, ((2 * Math.PI * R) / n) * 0.55, d * 0.3).rotateZ(a).translate(Math.cos(a) * (R - w / 2 - win * 0.2), Math.sin(a) * (R - w / 2 - win * 0.2), z + (r() - 0.5) * d * 0.4), WINDOW);
      }
      for (let i = 0; i < spokes; i++) {
        const a = (i / spokes) * Math.PI * 2 + 0.3;
        k.add(new THREE.CylinderGeometry(d * 0.12, d * 0.12, R - w / 2 - hubR, 8).translate(0, hubR + (R - w / 2 - hubR) / 2, 0).rotateZ(a).translate(0, 0, z), DARK);
      }
    },
    // A drive bell: a flared nozzle, open at the back, with a glowing throat.
    bell: (rad, z, len = 0.16) => {
      lo(tag(new THREE.LatheGeometry(bellPts(rad, len, 8, 1.6), 20).rotateX(X).translate(0, 0, z), DARK, 0.7), () => new THREE.LatheGeometry(bellPts(rad, len, 3, 1.6), 10).rotateX(X).translate(0, 0, z));
      lo(tag(new THREE.CylinderGeometry(rad * 0.4, rad * 0.4, 0.004, 16).rotateX(X).translate(0, 0, z - 0.012), THROAT), () => new THREE.CylinderGeometry(rad * 0.4, rad * 0.4, 0.004, 8).rotateX(X).translate(0, 0, z - 0.012));
      if (k.nozzle === undefined) k.nozzle = z - len - 0.01; // where the main drive's torch starts
    },
    // A small secondary bell (no torch of its own: manoeuvring or auxiliary drives).
    bell2: (rad, x, y, z, len = 0.05) => {
      const pts = (n) => bellPts(rad, len, n, 1.5, 0.45);
      lo(tag(new THREE.LatheGeometry(pts(6), 12).rotateX(X).translate(x, y, z), DARK, 0.65), () => new THREE.LatheGeometry(pts(2), 8).rotateX(X).translate(x, y, z));
    },
    // Small machinery on a face: vents, boxes, conduits.
    greeble: (w, h, d, x, y, z, n, faces = 'tbs') => {
      for (let i = 0; i < n; i++) {
        const f = faces[Math.floor(r() * faces.length)];
        const gw = (0.1 + r() * 0.25) * w, gd = (0.08 + r() * 0.3) * d, gh = 0.004 + r() * 0.012;
        const px = x + (r() - 0.5) * (w - gw), pz = z + (r() - 0.5) * (d - gd);
        const kind = r() < 0.6 ? DARK : HULL;
        if (f === 't') k.box(gw, gh, gd, px, y + h / 2 + gh / 2, pz, kind);
        else if (f === 'b') k.box(gw, gh, gd, px, y - h / 2 - gh / 2, pz, kind);
        else { const sx = r() < 0.5 ? -1 : 1; const py = y + (r() - 0.5) * (h - gw * 0.6); k.box(gh, Math.min(gw, h * 0.4), gd, x + sx * (w / 2 + gh / 2), py, pz, kind); }
      }
    },
    // A point-defence turret: a squat mount with a twin barrel.
    pdc: (x, y, z, up = 1) => {
      k.cyl(0.011, 0.013, 0.008, z, DARK, 8, x, y);
      k.box(0.014, 0.01 * up, 0.014, x, y + 0.006 * up, z, DARK, 0.9);
      k.box(0.003, 0.003, 0.03, x - 0.003, y + 0.009 * up, z + 0.016, DARK, 0.6);
      k.box(0.003, 0.003, 0.03, x + 0.003, y + 0.009 * up, z + 0.016, DARK, 0.6);
    },
    light: (x, y, z, kind, s = 0.008) => k.box(s, s, s, x, y, z, kind),
    windows: (x, y, z0, z1, n, sides = [-1, 1]) => {
      for (let i = 0; i < n; i++) {
        const z = z0 + ((z1 - z0) * i) / Math.max(1, n - 1);
        for (const sx of sides) k.box(0.002, 0.006, 0.01, sx * x, y, z, WINDOW);
      }
    },
    // `coarse` > 0 also builds a far-off version (geo.userData.coarse) with
    // the same silhouette: parts smaller than that radius are left out, and
    // with `loPoly` round parts are swapped for ones with fewer sides.
    build(scaleXY = 1.35, D = 7, coarse = 0, loPoly = false) {
      const out = [], few = [];
      const prep = (g, kd, tv) => {
        const n = g.index ? g.toNonIndexed() : g;
        n.deleteAttribute('uv');
        const cnt = n.attributes.position.count;
        n.setAttribute('kind', new THREE.BufferAttribute(new Float32Array(cnt).fill(kd), 1));
        n.setAttribute('tint', new THREE.BufferAttribute(new Float32Array(cnt).fill(tv), 1));
        n.computeVertexNormals();
        // Box-projected texture coordinates, so plating is the same size everywhere.
        const pos = n.attributes.position, nor = n.attributes.normal;
        const uv = new Float32Array(cnt * 2);
        for (let i = 0; i < cnt; i++) {
          const ax = Math.abs(nor.getX(i)), ay = Math.abs(nor.getY(i)), az = Math.abs(nor.getZ(i));
          const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
          if (ax >= ay && ax >= az) { uv[i * 2] = pz * D; uv[i * 2 + 1] = py * D; }
          else if (ay >= az) { uv[i * 2] = px * D; uv[i * 2 + 1] = pz * D; }
          else { uv[i * 2] = px * D; uv[i * 2 + 1] = py * D; }
        }
        n.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
        return n;
      };
      for (const g of parts) {
        const kd = g.userData.kind, tv = g.userData.tint * (0.9 + r() * 0.2);
        const n = prep(g, kd, tv);
        out.push(n);
        if (coarse) {
          n.computeBoundingSphere();
          if (n.boundingSphere.radius >= coarse || (kd >= WINDOW && kd <= THROAT)) few.push(loPoly && g.userData.lo ? prep(g.userData.lo(), kd, tv) : n);
        }
      }
      const geo = mergeGeometries(out);
      geo.scale(scaleXY, scaleXY, 1);
      geo.computeBoundingSphere();
      geo.userData.nozzle = k.nozzle ?? 0;
      if (coarse) {
        const c = mergeGeometries(few);
        c.scale(scaleXY, scaleXY, 1);
        c.computeBoundingSphere();
        geo.userData.coarse = c;
      }
      return geo;
    },
  };
  return k;
}

/** The hull roster: index = faction * 6 + class. */
export const HULL_FACTIONS = ['concord', 'boreal', 'holds'];
export const HULL_CLASSES = ['corvette', 'frigate', 'escort', 'battleship', 'tender', 'freighter'];
/** Index into `shipGeometries()` (unknown faction: the first; unknown class: frigate). */
export const hullIndex = (faction, cls) => {
  const f = Math.max(0, HULL_FACTIONS.indexOf(faction));
  const c = HULL_CLASSES.indexOf(cls);
  return f * HULL_CLASSES.length + (c < 0 ? 1 : c);
};
/** A frigate's length in hull units, and each class's length against it. */
const FRIGATE_LEN = 0.72;
const CLASS_LEN = [0.55, 1, 0.9, 1.9, 1.25, 1.4];
/** Parts smaller than this (radius, hull units) are left off ships drawn far away, per class. */
const CLASS_LOD = [0.02, 0.034, 0.034, 0.05, 0.045, 0.04];
const TAU = Math.PI * 2;

// --- Shared fittings -------------------------------------------------------
/** A point-defence blister: a ball mount with twin barrels, facing out from the hull axis. */
function blister(k, x, y, z, s = 1) {
  k.sphere(0.016 * s, x, y, z, DARK, 0.95, 8);
  const n = Math.hypot(x, y) || 1, ox = (x / n) * 0.012 * s, oy = (y / n) * 0.012 * s;
  for (const e of [-1, 1]) k.box(0.0035 * s, 0.0035 * s, 0.036 * s, x + ox - e * oy * 0.3, y + oy + e * ox * 0.3, z + 0.02 * s, DARK, 0.6);
}
/** A torpedo cluster: nx by ny tubes firing forward, in a box launcher. */
function tubes(k, x, y, z, nx, ny, rad = 0.008, len = 0.07, kind = HULL) {
  const st = rad * 2.5;
  k.box(nx * st + rad, ny * st + rad, len, x, y, z, kind, 0.85);
  for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) k.cyl(rad, rad, 0.006, z + len / 2 + 0.002, DARK, 8, x + (i - (nx - 1) / 2) * st, y + (j - (ny - 1) / 2) * st, 0.4);
}
/** A radiator vane that tapers from r0 (aft, at the reactor) to r1 (forward). */
function vane(k, x, y, z0, z1, r0, r1, a, segs = 4, t = 0.004) {
  const len = z1 - z0, gap = len * 0.03, sl = (len - gap * (segs - 1)) / segs;
  const ca = Math.cos(a), sa = Math.sin(a);
  for (let i = 0; i < segs; i++) {
    const reach = r0 + (r1 - r0) * ((i + 0.5) / segs), zz = z0 + sl / 2 + i * (sl + gap);
    k.add(new THREE.BoxGeometry(reach, t, sl).translate(reach / 2, 0, 0).rotateZ(a).translate(x, y, zz), RAD, 0.92 + k.r() * 0.14);
  }
  k.strut(x + ca * r0, y + sa * r0, z0, x + ca * r1, y + sa * r1, z1, t * 1.6, DARK, 0.7);
  k.cyl(t * 1.4, t * 1.4, len * 1.03, (z0 + z1) / 2, HULL, 6, x, y, 0.75);
}
/** A patched radiator: panels of different ages and lengths, one maybe missing. */
function patchRad(k, x, y, z, reach, len, a, segs = 3, missing = -1, t = 0.004) {
  const gap = len * 0.05, sl = (len - gap * (segs - 1)) / segs;
  for (let i = 0; i < segs; i++) {
    const zz = z - len / 2 + sl / 2 + i * (sl + gap);
    if (i === missing) { k.frame(reach * 0.9, t, sl, x + Math.cos(a) * reach * 0.45, y + Math.sin(a) * reach * 0.45, zz, t * 0.8); continue; }
    const rr = reach * (0.78 + k.r() * 0.3);
    k.add(new THREE.BoxGeometry(rr, t, sl).translate(rr / 2, 0, 0).rotateZ(a).translate(x, y, zz), k.r() < 0.3 ? DARK : RAD, 0.7 + k.r() * 0.35);
  }
  k.cyl(t * 1.5, t * 1.5, len * 1.05, z, DARK, 6, x, y, 0.8);
}

// --- Meridian Concord: slab armour, chisel prows, squared drive housings ----
/** The drive in a squared, shrouded housing behind a slab shadow shield. Returns z forward of the shield. */
function cDrive(k, w, h, d, bellR, bellLen, radReach = 0) {
  k.bell(bellR, 0, bellLen);
  k.box(w, h, d, 0, 0, d / 2 + 0.004, HULL, 0.85);
  k.box(w * 0.8, h * 0.8, 0.012, 0, 0, 0, DARK, 0.7); // thrust plate
  const sl = bellLen * 0.34;
  for (const s of [-1, 1]) {
    k.box(w, 0.008, sl, 0, s * (h / 2 - 0.004), -sl / 2 + 0.004, HULL, 0.8);
    k.box(0.008, h, sl, s * (w / 2 - 0.004), 0, -sl / 2 + 0.004, HULL, 0.8);
    if (radReach) { // short, thick radiator slabs
      k.box(radReach, 0.012, d * 0.9, s * (w / 2 + radReach / 2), 0, d / 2, RAD, 0.95);
      k.box(0.008, 0.02, d * 0.94, s * (w / 2 + radReach), 0, d / 2, DARK, 0.8);
    }
  }
  k.box(w * 1.08, h * 1.08, 0.012, 0, 0, d + 0.012, DARK, 0.75); // shadow shield
  return d + 0.02;
}
/** A chisel prow from z0, with a stripe of the owner's paint down its back. */
function prow(k, w, h, len, z0, fw, fh) {
  k.wedge(w, h, len, 0, 0, z0 + len / 2, fw, fh, HULL, 0.95);
  const a = 0.1, b = 0.86;
  const ya = (h / 2) * (1 + (fh - 1) * a), yb = (h / 2) * (1 + (fh - 1) * b);
  const wa = w * (1 + (fw - 1) * a) * 0.66, wb = w * (1 + (fw - 1) * b) * 0.66;
  k.wedge(wa, 0.006, len * (b - a), 0, ya + 0.002, z0 + (len * (a + b)) / 2, wb / wa, 1, PAINT, 1, 0, yb - ya);
}
/** An armoured block: the hull, a dorsal slab in the owner's paint, a keel slab and belt plates. */
function citadel(k, w, h, len, z0, paintW = 0.72) {
  const z = z0 + len / 2;
  k.box(w, h, len, 0, 0, z);
  k.box(w * paintW, 0.012, len * 0.9, 0, h / 2 + 0.004, z, PAINT);
  k.box(w * paintW, 0.012, len * 0.9, 0, -h / 2 - 0.004, z, HULL, 0.8);
  for (const s of [-1, 1]) k.box(0.012, h * 0.66, len * 0.84, s * (w / 2 + 0.004), 0, z, HULL, 0.88);
}

function concordHulls(fin) {
  const out = [];
  { // Corvette: one small chisel, no radiators to speak of.
    const k = kit(101);
    const z = cDrive(k, 0.086, 0.06, 0.05, 0.034, 0.075);
    citadel(k, 0.092, 0.056, 0.14, z, 0.78);
    prow(k, 0.092, 0.056, 0.14, z + 0.14, 0.18, 0.3);
    k.box(0.05, 0.004, 0.05, 0, -0.04, z + 0.04, RAD, 0.9); // a flush panel on the keel
    k.box(0.03, 0.012, 0.03, 0, 0.042, z + 0.05, HULL, 0.9); k.box(0.024, 0.005, 0.003, 0, 0.044, z + 0.066, WINDOW);
    k.pdc(0, 0.04, z + 0.115);
    k.cyl(0.006, 0.006, 0.03, z + 0.29, DARK, 6);
    for (const s of [-1, 1]) { k.rcs(s * 0.052, 0, z + 0.125, s, 0); k.rcs(s * 0.049, 0, z + 0.01, s, 0); }
    k.light(-0.05, 0.02, z + 0.07, NAV_R); k.light(0.05, 0.02, z + 0.07, NAV_G); k.light(0, -0.04, z + 0.1, STROBE);
    out.push(fin(k, 0));
  }
  { // Frigate: the line ship. Torpedo casemates on both beams.
    const k = kit(103);
    const z = cDrive(k, 0.13, 0.1, 0.09, 0.05, 0.11, 0.05);
    k.box(0.06, 0.06, 0.1, 0, 0, z + 0.05, DARK, 0.9); // neck
    for (const s of [-1, 1]) { k.tank(0.026, 0.045, s * 0.054, 0, z + 0.05, HULL, 1.05); k.box(0.07, 0.012, 0.02, s * 0.04, 0, z + 0.05, DARK, 0.8); }
    const m = z + 0.1;
    citadel(k, 0.15, 0.09, 0.25, m);
    prow(k, 0.15, 0.09, 0.14, m + 0.25, 0.28, 0.3);
    for (const s of [-1, 1]) tubes(k, s * 0.105, 0, m + 0.185, 2, 2, 0.0085, 0.09);
    k.box(0.05, 0.022, 0.05, 0, 0.066, m + 0.05, HULL, 0.9); k.box(0.04, 0.006, 0.003, 0, 0.07, m + 0.076, WINDOW);
    k.pdc(0, 0.06, m + 0.19); k.pdc(0, -0.06, m + 0.09, -1);
    k.cyl(0.007, 0.007, 0.04, m + 0.4, DARK, 6);
    for (const s of [-1, 1]) { k.rcs(s * 0.085, 0.03, m + 0.02, s, 0); k.rcs(s * 0.07, 0, z + 0.02 - 0.03, s, 0); k.windows(0.0835, 0.02, m + 0.06, m + 0.12, 3, [s]); }
    k.light(-0.09, 0, m + 0.1, NAV_R); k.light(0.09, 0, m + 0.1, NAV_G); k.light(0, 0.082, m + 0.05, STROBE);
    out.push(fin(k, 1));
  }
  { // Escort: a stubby brick with point-defence blisters on every face.
    const k = kit(107);
    const z = cDrive(k, 0.17, 0.12, 0.09, 0.052, 0.1, 0.04);
    citadel(k, 0.2, 0.13, 0.3, z, 0.5);
    prow(k, 0.2, 0.13, 0.1, z + 0.3, 0.6, 0.55);
    for (const zz of [0.05, 0.15, 0.25]) for (const [x, y] of [[0.075, 0.075], [-0.075, 0.075], [0.075, -0.075], [-0.075, -0.075], [0.115, 0], [-0.115, 0]]) {
      k.box(0.042, 0.042, 0.05, x * 0.94, y * 0.94, z + zz, HULL, 0.82);
      blister(k, x * 1.08, y * 1.08, z + zz, 1.35);
    }
    k.box(0.012, 0.04, 0.012, 0, 0.09, z + 0.2, DARK); k.box(0.07, 0.034, 0.006, 0, 0.12, z + 0.2, HULL, 0.9); // fire-control array
    k.box(0.05, 0.006, 0.003, 0, 0.03, z + 0.4, WINDOW);
    for (const s of [-1, 1]) { k.rcs(s * 0.09, 0.05, z + 0.01, s, 0); k.rcs(s * 0.07, -0.03, z + 0.36, s, 0); }
    k.light(-0.11, 0.03, z + 0.2, NAV_R); k.light(0.11, 0.03, z + 0.2, NAV_G); k.light(0, 0.14, z + 0.2, STROBE);
    out.push(fin(k, 2));
  }
  { // Battleship: a stepped citadel between twin spinal rails that run out past the prow.
    const k = kit(109);
    const z = cDrive(k, 0.28, 0.17, 0.15, 0.08, 0.17);
    for (const s of [-1, 1]) k.bell2(0.04, s * 0.1, 0, 0, 0.08);
    k.box(0.2, 0.15, 0.3, 0, 0, z + 0.15);
    k.box(0.14, 0.012, 0.27, 0, 0.079, z + 0.15, HULL, 0.85);
    for (const s of [-1, 1]) for (let i = 0; i < 3; i++) { // thick radiator slabs between armoured ribs
      k.box(0.075, 0.014, 0.08, s * 0.137, 0, z + 0.05 + i * 0.1, RAD, 0.95);
      k.box(0.085, 0.05, 0.012, s * 0.14, 0, z + 0.004 + i * 0.1, HULL, 0.82);
    }
    const m = z + 0.3;
    citadel(k, 0.3, 0.17, 0.42, m, 0.7);
    k.box(0.12, 0.014, 0.26, 0, 0.104, m + 0.2, HULL, 0.9); // second layer of deck armour
    k.box(0.07, 0.03, 0.07, 0, 0.125, m + 0.1, HULL, 0.92); k.box(0.06, 0.007, 0.003, 0, 0.13, m + 0.136, WINDOW); // conn
    for (const s of [-1, 1]) for (let i = 0; i < 3; i++) { // casemates
      k.box(0.05, 0.07, 0.085, s * 0.18, 0, m + 0.075 + i * 0.135, HULL, 0.9);
      for (const e of [-1, 1]) k.box(0.007, 0.007, 0.08, s * 0.19, e * 0.015, m + 0.14 + i * 0.135, DARK, 0.6);
    }
    const f = m + 0.42;
    citadel(k, 0.2, 0.14, 0.16, f, 0.7);
    prow(k, 0.2, 0.14, 0.15, f + 0.16, 0.3, 0.35);
    for (const s of [-1, 1]) { // the rails
      k.box(0.046, 0.06, 0.44, s * 0.128, 0, f + 0.19, HULL, 0.8);
      k.box(0.05, 0.016, 0.44, s * 0.128, 0, f + 0.2, DARK, 0.55);
      for (let i = 0; i < 4; i++) k.box(0.058, 0.072, 0.02, s * 0.128, 0, f + 0.05 + i * 0.115, DARK, 0.85);
      k.box(0.06, 0.03, 0.03, s * 0.09, 0, f + 0.2, DARK, 0.8);
    }
    k.turret(0, 0.112, m + 0.3, 1, 1.6); k.turret(0, 0.085, f + 0.08, 1, 1.4); k.turret(0, -0.1, m + 0.2, -1, 1.6);
    k.cells(0.07, 0.1, m + 0.33, 3, 5, 0.014); k.cells(-0.07, 0.1, m + 0.33, 3, 5, 0.014);
    for (const [x, y, zz] of [[0.11, 0.09, 0.02], [-0.11, 0.09, 0.02], [0.11, -0.09, 0.4], [-0.11, -0.09, 0.4]]) k.pdc(x, y, m + zz, Math.sign(y));
    for (const s of [-1, 1]) { k.rcs(s * 0.158, 0.06, m + 0.4, s, 0); k.rcs(s * 0.106, 0.05, z + 0.02, s, 0); k.windows(0.1035, 0.03, f + 0.04, f + 0.12, 4, [s]); }
    k.light(-0.16, 0.07, m + 0.2, NAV_R); k.light(0.16, 0.07, m + 0.2, NAV_G); k.light(0, 0.145, m + 0.1, STROBE);
    out.push(fin(k, 3));
  }
  { // Tender: four big tanks in an armoured cradle, a fuelling boom to starboard.
    const k = kit(113);
    const z = cDrive(k, 0.15, 0.12, 0.09, 0.055, 0.11, 0.045);
    const tz = z + 0.2;
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) k.tank(0.064, 0.24, sx * 0.068, sy * 0.068, tz, HULL, 1.05);
    k.box(0.05, 0.05, 0.4, 0, 0, tz, DARK, 0.85);
    k.box(0.19, 0.012, 0.26, 0, 0.134, tz, PAINT); k.box(0.19, 0.012, 0.26, 0, -0.134, tz, HULL, 0.8);
    for (const e of [-0.11, 0.11]) k.box(0.28, 0.28, 0.014, 0, 0, tz + e, DARK, 0.8);
    const c = z + 0.4;
    citadel(k, 0.14, 0.1, 0.15, c);
    prow(k, 0.14, 0.1, 0.07, c + 0.15, 0.55, 0.5);
    k.box(0.04, 0.04, 0.04, 0.085, 0.01, c + 0.05, DARK, 0.8);
    const [bx, by, bz] = k.boom(0.085, 0.01, c + 0.05, [1, 0.12, 0.5], 0.22, 0.013, HULL);
    k.box(0.03, 0.03, 0.04, bx, by, bz, DARK, 0.8); k.cyl(0.006, 0.008, 0.07, bz + 0.05, HULL, 6, bx, by);
    k.box(0.04, 0.006, 0.003, 0, 0.03, c + 0.2, WINDOW);
    for (const s of [-1, 1]) { k.rcs(s * 0.08, 0, c + 0.13, s, 0); k.rcs(s * 0.085, 0, z - 0.01, s, 0); }
    k.light(-0.14, 0, tz, NAV_R); k.light(0.14, 0, tz, NAV_G); k.light(bx, by + 0.02, bz, STROBE);
    out.push(fin(k, 4));
  }
  { // Freighter: armoured container rows down a box keel.
    const k = kit(127);
    const z = cDrive(k, 0.13, 0.1, 0.08, 0.048, 0.1, 0.04);
    k.box(0.045, 0.05, 0.68, 0, 0, z + 0.34, DARK, 0.9);
    for (let i = 0; i < 6; i++) for (const s of [-1, 1]) k.box(0.078, 0.1, 0.098, s * 0.064, 0, z + 0.06 + i * 0.111, (i + (s > 0 ? 1 : 0)) % 3 === 1 ? PAINT : HULL, 0.78 + k.r() * 0.3);
    k.box(0.05, 0.008, 0.66, 0, 0.056, z + 0.34, HULL, 0.85);
    const c = z + 0.68;
    k.box(0.12, 0.09, 0.1, 0, 0, c + 0.05); k.box(0.09, 0.01, 0.09, 0, 0.049, c + 0.05, PAINT);
    prow(k, 0.12, 0.09, 0.06, c + 0.1, 0.55, 0.5);
    k.box(0.04, 0.006, 0.003, 0, 0.028, c + 0.16, WINDOW);
    for (const s of [-1, 1]) { k.rcs(s * 0.066, 0, c + 0.08, s, 0); k.rcs(s * 0.07, 0.03, z - 0.01, s, 0); }
    k.light(-0.105, 0, z + 0.34, NAV_R); k.light(0.105, 0, z + 0.34, NAV_G); k.light(0, 0.062, z + 0.5, STROBE);
    out.push(fin(k, 5));
  }
  return out;
}

// --- Boreal Republic: torch ships on a spine, big bells and radiator vanes --
/** A big bell on a thrust frame, a bare reactor and a conical shadow shield. Returns z forward of it. */
function bDrive(k, R, len, reactR, reactLen) {
  k.engine(R, 0, len, reactR * 0.9, 0.012, 8);
  k.cyl(reactR * 0.85, reactR, reactLen, 0.016 + reactLen / 2, DARK, 12);
  k.shield(reactR * 1.55, 0.03 + reactLen);
  k.cyl(reactR * 1.62, reactR * 1.62, 0.016, 0.046 + reactLen, PAINT, 14); // the shield's rim, in the owner's paint
  return 0.04 + reactLen;
}
/** A small crew capsule on the axis, banded in the owner's paint. */
function capsule(k, rad, len, z) {
  k.tank(rad, len, 0, 0, z, HULL, 1.05);
  k.cyl(rad * 1.05, rad * 1.05, len * 0.9, z, PAINT, 14);
  k.box(rad * 1.1, 0.005, 0.004, 0, rad * 0.75, z + len / 2 + rad * 0.62, WINDOW);
}

function borealHulls(fin) {
  const out = [];
  { // Corvette: a needle. Bell, two tanks, a boom and a capsule.
    const k = kit(131);
    const z = bDrive(k, 0.046, 0.11, 0.02, 0.03);
    k.cyl(0.008, 0.008, 0.13, z + 0.065, DARK, 6);
    for (const s of [-1, 1]) { k.sphere(0.028, s * 0.031, 0, z + 0.035, PAINT, 1, 10); vane(k, s * 0.006, 0, z + 0.07, z + 0.115, 0.03, 0.014, s > 0 ? 0 : Math.PI, 2, 0.003); }
    capsule(k, 0.026, 0.04, z + 0.16);
    k.boom(0, 0, z + 0.2, [0, 0, 1], 0.04, 0.004);
    k.box(0.01, 0.01, 0.012, 0, 0, z + 0.235, DARK);
    for (const s of [-1, 1]) { k.boom(0, 0, z + 0.125, [s, 0, 0], 0.03, 0.003); k.rcs(s * 0.03, 0, z + 0.125, s, 0); }
    k.light(-0.03, 0.008, z + 0.125, NAV_R); k.light(0.03, 0.008, z + 0.125, NAV_G); k.light(0, 0.03, z + 0.16, STROBE);
    out.push(fin(k, 0));
  }
  { // Frigate: truss spine, four delta vanes, a revolver of torpedo tubes behind the capsule.
    const k = kit(137);
    const z = bDrive(k, 0.075, 0.17, 0.034, 0.05);
    k.truss3(0, 0, z, z + 0.35, 0.028, 6, 0.004);
    for (const a of [0.45, Math.PI - 0.45, Math.PI + 0.45, -0.45]) vane(k, Math.cos(a) * 0.02, Math.sin(a) * 0.02, z + 0.01, z + 0.24, 0.15, 0.04, a, 4);
    for (const s of [-1, 1]) { k.sphere(0.038, s * 0.05, 0, z + 0.295, HULL, 1.05, 12); k.cyl(0.0392, 0.0392, 0.04, z + 0.295, PAINT, 12, s * 0.05, 0); }
    k.cyl(0.05, 0.05, 0.012, z + 0.35, DARK, 12);
    for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU; const x = Math.cos(a) * 0.037, y = Math.sin(a) * 0.037; k.cyl(0.012, 0.012, 0.085, z + 0.395, HULL, 8, x, y, 0.85); k.cyl(0.009, 0.009, 0.004, z + 0.439, DARK, 8, x, y, 0.4); }
    capsule(k, 0.032, 0.05, z + 0.485);
    k.boom(0, 0, z + 0.54, [0, 0, 1], 0.05, 0.004);
    k.dish(0.03, 0.0, 0.03, z + 0.33, [0.3, 1, 0.5]);
    k.pdc(0, 0.034, z + 0.47);
    for (const s of [-1, 1]) { k.boom(0, 0, z + 0.44, [s, 0, 0], 0.062, 0.004); k.rcs(s * 0.062, 0, z + 0.44, s, 0); k.rcs(s * 0.05, 0, z - 0.02, s, 0); }
    k.light(-0.066, 0.008, z + 0.44, NAV_R); k.light(0.066, 0.008, z + 0.44, NAV_G); k.light(0, 0.036, z + 0.5, STROBE);
    out.push(fin(k, 1));
  }
  { // Escort: short spine, point-defence blisters out on two rings of outriggers.
    const k = kit(139);
    const z = bDrive(k, 0.07, 0.15, 0.034, 0.045);
    k.truss3(0, 0, z, z + 0.27, 0.03, 4, 0.0045);
    for (const a of [0, Math.PI]) vane(k, Math.cos(a) * 0.025, 0, z + 0.01, z + 0.13, 0.11, 0.05, a, 3);
    for (const [zz, a0] of [[0.17, Math.PI / 4], [0.25, 0]]) for (let i = 0; i < 4; i++) {
      const a = a0 + (i / 4) * TAU, cx = Math.cos(a), cy = Math.sin(a);
      k.boom(cx * 0.015, cy * 0.015, z + zz, [cx, cy, 0], 0.085, 0.006);
      k.box(0.04, 0.04, 0.046, cx * 0.098, cy * 0.098, z + zz, HULL, 0.85);
      blister(k, cx * 0.122, cy * 0.122, z + zz, 1.35);
    }
    k.cyl(0.046, 0.046, 0.09, z + 0.325, HULL, 14); k.cyl(0.048, 0.048, 0.05, z + 0.325, PAINT, 14);
    k.cyl(0.026, 0.046, 0.03, z + 0.385, HULL, 14);
    for (let i = 0; i < 4; i++) { const a = Math.PI / 4 + (i / 4) * TAU; blister(k, Math.cos(a) * 0.04, Math.sin(a) * 0.04, z + 0.385, 1.2); }
    k.box(0.04, 0.005, 0.004, 0, 0.03, z + 0.4, WINDOW);
    k.boom(0, 0, z + 0.4, [0, 0, 1], 0.03, 0.004);
    for (const s of [-1, 1]) { k.rcs(s * 0.05, 0, z + 0.3, s, 0); k.rcs(s * 0.05, 0, z - 0.02, s, 0); }
    k.light(-0.05, 0.01, z + 0.33, NAV_R); k.light(0.05, 0.01, z + 0.33, NAV_G); k.light(0, 0.05, z + 0.33, STROBE);
    out.push(fin(k, 2));
  }
  { // Battleship: a spinal railgun the length of the ship, a huge bell and four great vanes.
    const k = kit(149);
    const z = bDrive(k, 0.125, 0.25, 0.055, 0.09);
    k.truss3(0, 0, z, z + 0.8, 0.05, 10, 0.006);
    for (const a of [0.5, Math.PI - 0.5, Math.PI + 0.5, -0.5]) vane(k, Math.cos(a) * 0.04, Math.sin(a) * 0.04, z + 0.02, z + 0.47, 0.28, 0.07, a, 6, 0.005);
    k.cyl(0.021, 0.021, 1.2, z + 0.6, HULL, 8, 0, 0, 0.62); // the gun, out past the bow
    for (let i = 0; i < 8; i++) k.cyl(0.03, 0.03, 0.016, z + 0.08 + i * 0.1, HULL, 10, 0, 0, 0.85);
    for (let j = 0; j < 2; j++) for (let i = 0; i < 3; i++) {
      const a = Math.PI / 2 + Math.PI / 3 + (i / 3) * TAU + j * (Math.PI / 3), x = Math.cos(a) * 0.088, y = Math.sin(a) * 0.088;
      k.sphere(0.058, x, y, z + 0.56 + j * 0.125, HULL, 1.03, 12);
      if (j === 0) k.cyl(0.0597, 0.0597, 0.06, z + 0.56, PAINT, 12, x, y);
    }
    k.cyl(0.058, 0.062, 0.12, z + 0.87, HULL, 14); k.cyl(0.065, 0.065, 0.07, z + 0.865, PAINT, 14);
    k.cyl(0.03, 0.055, 0.04, z + 0.95, HULL, 14);
    k.cyl(0.03, 0.03, 0.07, z + 1.17, DARK, 10, 0, 0, 0.8); k.cyl(0.03, 0.03, 0.02, z + 1.06, DARK, 10, 0, 0, 0.8); // muzzle
    for (const s of [-1, 1]) {
      tubes(k, s * 0.085, 0, z + 0.85, 2, 2, 0.009, 0.09);
      k.boom(0, 0, z + 0.77, [s, 0, 0], 0.11, 0.006); k.rcs(s * 0.11, 0, z + 0.77, s, 0); k.rcs(s * 0.085, 0, z - 0.03, s, 0);
    }
    k.turret(0, 0.066, z + 0.87, 1, 1.3); k.turret(0, -0.066, z + 0.87, -1, 1.3);
    for (const zz of [0.5, 0.75]) { k.pdc(0, 0.03, z + zz); k.pdc(0.03, -0.022, z + zz, -1); }
    k.box(0.06, 0.006, 0.004, 0, 0.04, z + 0.94, WINDOW);
    k.dish(0.04, -0.03, 0.04, z + 0.76, [-0.4, 1, 0.4]);
    k.light(-0.115, 0.01, z + 0.77, NAV_R); k.light(0.115, 0.01, z + 0.77, NAV_G); k.light(0, 0.075, z + 0.9, STROBE);
    out.push(fin(k, 3));
  }
  { // Tender: three big spheres threaded on the spine, a transfer boom.
    const k = kit(151);
    const z = bDrive(k, 0.07, 0.15, 0.034, 0.045);
    k.truss3(0, 0, z, z + 0.62, 0.03, 8, 0.0045);
    for (const a of [0, Math.PI]) vane(k, Math.cos(a) * 0.025, 0, z + 0.005, z + 0.125, 0.14, 0.07, a, 3);
    for (let i = 0; i < 3; i++) { k.sphere(0.09, 0, 0, z + 0.225 + i * 0.17, HULL, 0.98 + i * 0.04, 14); k.cyl(0.062, 0.062, 0.012, z + 0.31 + i * 0.17, DARK, 12); }
    k.cyl(0.0915, 0.0915, 0.05, z + 0.395, PAINT, 16);
    capsule(k, 0.03, 0.05, z + 0.685);
    const [bx, by, bz] = k.boom(0.03, 0, z + 0.635, [1, 0.1, 0.3], 0.2, 0.009, HULL);
    k.sphere(0.014, bx, by, bz, DARK, 0.8, 8);
    const [hx, hy, hz] = k.boom(bx, by, bz, [0.15, 0, 1], 0.1, 0.006);
    k.cyl(0.008, 0.01, 0.02, hz, HULL, 8, hx, hy);
    for (const s of [-1, 1]) { k.rcs(s * 0.036, 0, z + 0.65, s, 0); k.rcs(s * 0.05, 0, z - 0.02, s, 0); }
    k.light(-0.093, 0, z + 0.395, NAV_R); k.light(0.093, 0, z + 0.395, NAV_G); k.light(bx, by + 0.02, bz, STROBE);
    out.push(fin(k, 4));
  }
  { // Freighter: the same spine, ringed with cargo drums.
    const k = kit(157);
    const z = bDrive(k, 0.065, 0.14, 0.03, 0.04);
    k.truss3(0, 0, z, z + 0.75, 0.026, 10, 0.004);
    for (const a of [0, Math.PI]) vane(k, Math.cos(a) * 0.022, 0, z + 0.01, z + 0.17, 0.1, 0.035, a, 3);
    for (let i = 0; i < 5; i++) for (let j = 0; j < 3; j++) {
      const a = Math.PI / 2 + Math.PI / 3 + (j / 3) * TAU, x = Math.cos(a) * 0.05, y = Math.sin(a) * 0.05;
      k.cyl(0.034, 0.034, 0.098, z + 0.245 + i * 0.112, (i + j) % 4 === 1 ? PAINT : HULL, 10, x, y, 0.8 + k.r() * 0.3);
    }
    capsule(k, 0.026, 0.04, z + 0.795);
    for (const s of [-1, 1]) { k.rcs(s * 0.032, 0, z + 0.77, s, 0); k.rcs(s * 0.046, 0, z - 0.02, s, 0); }
    k.light(-0.085, 0, z + 0.47, NAV_R); k.light(0.085, 0, z + 0.47, NAV_G); k.light(0, 0.03, z + 0.8, STROBE);
    out.push(fin(k, 5));
  }
  return out;
}

// --- Lantern Holds: working ships pressed into service ----------------------
/** A bare reactor and bell with a pump pack bolted on one side. Returns z forward of the shield. */
function hDrive(k, R, len, reactR, reactLen) {
  k.engine(R, 0, len, reactR, 0.012, 5);
  k.cyl(reactR * 0.9, reactR, reactLen, 0.016 + reactLen / 2, DARK, 10);
  k.box(reactR * 1.2, reactR * 1.2, reactLen * 0.6, reactR * 0.9, -reactR * 0.5, 0.02 + reactLen / 2, HULL, 0.8);
  k.shield(reactR * 1.5, 0.03 + reactLen);
  return 0.04 + reactLen;
}
/** A crew can off the axis: a plain drum with a band of paint and a window. */
function can(k, rad, len, x, y, z) {
  k.cyl(rad, rad, len, z, HULL, 12, x, y, 1.02);
  k.cyl(rad * 0.7, rad, rad * 0.5, z + len / 2 + rad * 0.25, HULL, 12, x, y, 0.92);
  k.cyl(rad * 1.04, rad * 1.04, len * 0.45, z - len * 0.1, PAINT, 12, x, y);
  k.box(rad, 0.005, 0.004, x, y + rad * 0.5, z + len / 2 + rad * 0.5, WINDOW);
}
/** An ore hopper: a bin with a chute under it. */
function hopper(k, w, x, y, z, len, kind, tint) {
  k.box(w, 0.07, len, x, y + 0.012, z, kind, tint);
  k.add(new THREE.CylinderGeometry(w * 0.7, 0.014, 0.04, 4).rotateY(Math.PI / 4).scale(1, 1, len / w).translate(x, y - 0.043, z), kind, tint * 0.9);
}

function holdsHulls(fin) {
  const out = [];
  { // Corvette: a prospector's tug with a scanner dish and one tank.
    const k = kit(163);
    const z = hDrive(k, 0.036, 0.08, 0.02, 0.03);
    k.truss(0, 0, z, z + 0.15, 0.03, 3, 0.0035);
    k.strapped(0.033, 0.06, 0.048, -0.004, z + 0.07, true);
    k.dish(0.036, -0.03, 0.02, z + 0.08, [-0.7, 0.5, 0.5]);
    can(k, 0.031, 0.07, -0.012, 0.008, z + 0.19);
    k.box(0.03, 0.03, 0.05, 0.032, -0.012, z + 0.175, HULL, 0.8); // sensor pod
    patchRad(k, -0.016, -0.01, z + 0.04, 0.04, 0.06, Math.PI + 0.25, 2, -1, 0.003);
    k.boom(0.03, 0, z + 0.2, [0.4, 0.2, 1], 0.07, 0.004);
    k.rcs(0.05, 0, z + 0.14, 1, 0); k.rcs(-0.042, 0.008, z + 0.17, -1, 0);
    k.light(-0.04, 0.02, z + 0.19, NAV_R); k.light(0.05, 0.0, z + 0.19, NAV_G); k.light(0, 0.03, z + 0.07, STROBE);
    out.push(fin(k, 0));
  }
  { // Frigate: a hauler with a cargo module turned magazine and torpedo racks bolted on.
    const k = kit(167);
    const z = hDrive(k, 0.055, 0.12, 0.03, 0.045);
    k.truss(0, 0, z, z + 0.42, 0.05, 6, 0.0045);
    k.strapped(0.044, 0.1, 0.07, 0.0, z + 0.11, true);
    k.strapped(0.028, 0.07, -0.03, 0.056, z + 0.08, false, 0.9);
    k.sphere(0.036, 0.0, -0.062, z + 0.2, HULL, 1.05, 10);
    patchRad(k, -0.028, 0.0, z + 0.2, 0.13, 0.17, Math.PI + 0.12, 3, 1);
    k.box(0.1, 0.085, 0.11, 0.008, 0.012, z + 0.32, PAINT, 0.95);
    k.frame(0.11, 0.095, 0.12, 0.008, 0.012, z + 0.32, 0.004);
    k.strut(0.03, 0, z + 0.36, 0.1, -0.01, z + 0.36, 0.006); k.strut(0.03, 0, z + 0.42, 0.1, -0.01, z + 0.42, 0.006);
    tubes(k, 0.108, -0.012, z + 0.38, 2, 3, 0.0085, 0.13, HULL);
    tubes(k, -0.072, 0.03, z + 0.33, 1, 2, 0.0085, 0.08, HULL);
    can(k, 0.036, 0.09, -0.02, 0.014, z + 0.46);
    k.pdc(0.008, 0.06, z + 0.32);
    k.dish(0.032, 0.03, 0.04, z + 0.45, [0.6, 0.7, 0.4]);
    k.rcs(0.04, -0.03, z + 0.43, 1, 0); k.rcs(-0.06, 0.014, z + 0.47, -1, 0); k.rcs(0.04, 0.03, z - 0.02, 1, 0); k.rcs(-0.04, -0.03, z - 0.02, -1, 0);
    k.light(-0.06, 0.02, z + 0.44, NAV_R); k.light(0.13, -0.01, z + 0.38, NAV_G); k.light(0.008, 0.07, z + 0.36, STROBE);
    out.push(fin(k, 1));
  }
  { // Escort: an ore bin in a cargo frame, gun pods clamped wherever they fit.
    const k = kit(173);
    const z = hDrive(k, 0.055, 0.11, 0.03, 0.04);
    k.truss(0, 0, z, z + 0.1, 0.05, 2, 0.0045);
    k.sphere(0.04, 0.052, 0.01, z + 0.045, HULL, 1.05, 10); k.strapped(0.026, 0.05, -0.05, -0.012, z + 0.045, true);
    k.box(0.13, 0.11, 0.2, 0, 0, z + 0.2, HULL, 0.9);
    k.box(0.134, 0.06, 0.09, 0, 0.02, z + 0.235, PAINT);
    k.frame(0.19, 0.17, 0.25, 0, 0, z + 0.2, 0.0055);
    for (const [x, y, zz] of [[0.095, 0.085, 0.1], [-0.095, 0.085, 0.13], [0.095, -0.085, 0.15], [-0.095, -0.085, 0.08], [0.11, 0.0, 0.22], [-0.11, 0.02, 0.2], [0.0, 0.1, 0.22], [0.0, -0.1, 0.19], [0.095, 0.085, 0.31], [-0.095, 0.06, 0.3], [0.08, -0.085, 0.3], [-0.095, -0.085, 0.32]]) {
      k.box(0.04, 0.04, 0.046, x, y, z + zz, HULL, 0.7 + k.r() * 0.3);
      blister(k, x * 1.2, y * 1.2, z + zz, 1.3);
    }
    can(k, 0.034, 0.07, 0.022, 0.012, z + 0.335);
    patchRad(k, -0.03, 0, z + 0.04, 0.1, 0.075, Math.PI - 0.1, 2);
    patchRad(k, 0.06, -0.03, z + 0.03, 0.05, 0.05, -0.3, 1);
    k.boom(-0.04, 0.05, z + 0.3, [-0.2, 0.6, 1], 0.09, 0.003);
    k.rcs(0.07, 0, z + 0.33, 1, 0); k.rcs(-0.07, 0, z + 0.31, -1, 0);
    k.light(-0.1, 0, z + 0.2, NAV_R); k.light(0.1, 0, z + 0.26, NAV_G); k.light(0.022, 0.05, z + 0.34, STROBE);
    out.push(fin(k, 2));
  }
  { // Battleship: an ore hauler built round its mass driver, now a gun.
    const k = kit(179);
    const z = hDrive(k, 0.09, 0.18, 0.05, 0.08);
    k.bell2(0.036, -0.085, 0.03, 0.03, 0.08); k.cyl(0.02, 0.026, 0.06, 0.06, DARK, 8, -0.085, 0.03);
    k.truss(0, 0, z, z + 0.86, 0.08, 10, 0.006);
    const gx = 0.02, gy = -0.075;
    k.box(0.052, 0.06, 1.14, gx, gy, z + 0.63, HULL, 0.6); // the driver
    for (let i = 0; i < 5; i++) k.box(0.07, 0.03, 0.13, gx, gy + 0.025, z + 0.14 + i * 0.2, i === 3 ? PAINT : HULL, 0.75 + k.r() * 0.3);
    k.box(0.06, 0.07, 0.1, gx, gy, z + 1.07, PAINT, 0.9); // muzzle shroud
    for (let i = 0; i < 4; i++) k.cyl(0.03, 0.03, 0.08, z + 0.2 + i * 0.19, HULL, 10, gx - 0.06, gy - 0.01, 0.8 + k.r() * 0.25);
    k.frame(0.085, 0.09, 0.035, gx, gy, z + 1.17, 0.006); k.frame(0.085, 0.09, 0.035, gx, gy, z + 0.95, 0.006);
    k.strapped(0.072, 0.16, 0.115, 0.03, z + 0.2, true);
    k.strapped(0.05, 0.12, -0.1, 0.035, z + 0.2);
    k.sphere(0.066, -0.11, 0.02, z + 0.4, HULL, 1.04, 12);
    k.strapped(0.04, 0.1, 0.095, 0.045, z + 0.42, false, 0.9);
    k.box(0.14, 0.1, 0.17, 0.0, 0.06, z + 0.61, PAINT, 0.95); k.frame(0.15, 0.11, 0.18, 0.0, 0.06, z + 0.61, 0.005);
    k.box(0.1, 0.09, 0.12, -0.1, 0.0, z + 0.57, HULL, 0.78);
    k.box(0.09, 0.085, 0.15, 0.105, 0.02, z + 0.65, HULL, 1.05);
    can(k, 0.05, 0.12, -0.035, 0.03, z + 0.82);
    can(k, 0.034, 0.08, 0.065, 0.02, z + 0.79);
    k.turret(0, 0.114, z + 0.61, 1, 1.5); k.turret(-0.1, 0.05, z + 0.57, 1, 1.2); k.turret(0.105, 0.066, z + 0.65, 1, 1.2);
    tubes(k, 0.125, 0.0, z + 0.83, 2, 3, 0.009, 0.13);
    k.strut(0.04, 0, z + 0.8, 0.11, 0, z + 0.8, 0.007);
    patchRad(k, 0.03, 0.045, z + 0.33, 0.21, 0.24, 0.75, 4, 2, 0.005);
    patchRad(k, -0.03, 0.045, z + 0.3, 0.16, 0.16, Math.PI - 0.6, 3, -1, 0.005);
    patchRad(k, -0.04, 0.0, z + 0.74, 0.1, 0.09, Math.PI + 0.1, 2, -1, 0.004);
    k.dish(0.045, -0.03, 0.085, z + 0.84, [-0.4, 1, 0.3]);
    k.pdc(0.105, 0.066, z + 0.71); k.pdc(-0.035, 0.083, z + 0.82); k.pdc(gx, gy - 0.03, z + 0.5, -1);
    k.rcs(0.06, -0.04, z + 0.86, 1, 0); k.rcs(-0.09, 0.03, z + 0.86, -1, 0); k.rcs(0.07, 0.05, z - 0.02, 1, 0); k.rcs(-0.07, -0.05, z - 0.02, -1, 0);
    k.light(-0.15, 0, z + 0.57, NAV_R); k.light(0.15, 0.02, z + 0.65, NAV_G); k.light(0, 0.13, z + 0.66, STROBE);
    out.push(fin(k, 3));
  }
  { // Tender: whatever tanks could be had, and a crane.
    const k = kit(181);
    const z = hDrive(k, 0.06, 0.13, 0.032, 0.045);
    k.truss(0, 0, z, z + 0.62, 0.05, 8, 0.0045);
    k.sphere(0.115, 0.06, 0.0, z + 0.2, HULL, 1.02, 14); k.cyl(0.117, 0.117, 0.035, z + 0.2, PAINT, 16, 0.06, 0);
    k.strapped(0.07, 0.2, -0.09, 0.01, z + 0.3, false, 0.9);
    k.strapped(0.05, 0.12, 0.072, -0.02, z + 0.47, true);
    k.sphere(0.05, -0.065, 0.03, z + 0.54, HULL, 0.9, 10);
    k.frame(0.2, 0.12, 0.012, -0.01, 0, z + 0.36, 0.005);
    can(k, 0.034, 0.08, 0.02, 0.02, z + 0.66);
    k.box(0.03, 0.03, 0.03, -0.03, 0.03, z + 0.61, DARK, 0.8);
    const [bx, by, bz] = k.boom(-0.03, 0.03, z + 0.61, [-1, 0.3, 0.25], 0.17, 0.009, HULL);
    k.sphere(0.014, bx, by, bz, DARK, 0.8, 8);
    const [hx, hy, hz] = k.boom(bx, by, bz, [-0.25, -0.1, 1], 0.12, 0.007, HULL);
    k.box(0.02, 0.02, 0.03, hx, hy, hz, DARK, 0.7);
    patchRad(k, -0.03, 0.0, z + 0.035, 0.09, 0.07, Math.PI + 0.1, 2);
    k.rcs(0.06, 0.02, z + 0.65, 1, 0); k.rcs(-0.02, 0.02, z + 0.66, -1, 0); k.rcs(0.04, 0.03, z - 0.02, 1, 0); k.rcs(-0.04, -0.03, z - 0.02, -1, 0);
    k.light(-0.165, 0.01, z + 0.3, NAV_R); k.light(0.18, 0, z + 0.2, NAV_G); k.light(bx, by + 0.02, bz, STROBE);
    out.push(fin(k, 4));
  }
  { // Freighter: an ore train. Hoppers of several makes, a gap, a tank in a spare slot.
    const k = kit(191);
    const z = hDrive(k, 0.055, 0.12, 0.03, 0.04);
    k.truss(0, 0, z, z + 0.76, 0.045, 10, 0.0045);
    for (let i = 0; i < 6; i++) for (const s of [-1, 1]) {
      const zz = z + 0.115 + i * 0.113;
      if (i === 2 && s === 1) { patchRad(k, 0.025, 0, zz, 0.1, 0.1, 0.08, 2); continue; }
      if (i === 4 && s === -1) { k.strapped(0.034, 0.05, -0.062, 0, zz, false, 0.9); continue; }
      if (i === 1 && s === -1) { k.frame(0.07, 0.07, 0.095, -0.062, 0.012, zz, 0.004); continue; }
      const w = 0.066 + k.r() * 0.03;
      hopper(k, w, s * (0.026 + w / 2), 0, zz, 0.098, (i * 2 + (s > 0 ? 1 : 0)) % 5 === 3 ? PAINT : HULL, 0.7 + k.r() * 0.4);
    }
    can(k, 0.032, 0.07, -0.014, 0.012, z + 0.8);
    k.dish(0.028, 0.03, 0.03, z + 0.79, [0.5, 0.8, 0.3]);
    k.rcs(0.04, 0, z + 0.78, 1, 0); k.rcs(-0.05, 0.012, z + 0.8, -1, 0); k.rcs(0.04, 0.03, z - 0.02, 1, 0); k.rcs(-0.04, -0.03, z - 0.02, -1, 0);
    k.light(-0.11, 0.02, z + 0.45, NAV_R); k.light(0.11, 0.02, z + 0.45, NAV_G); k.light(-0.014, 0.05, z + 0.8, STROBE);
    out.push(fin(k, 5));
  }
  return out;
}

/**
 * The hulls, plus `.probes` (survey, relay, recon). All face +Z and burn
 * along it. Eighteen hulls: three factions by six classes, at index
 * faction * 6 + class (`hullIndex`). A class's size against a frigate is
 * baked into its geometry (`userData.length`, in hull units), and each is
 * centred on its length, so one draw scale suits every class.
 *
 *  - Meridian Concord: slab armour, chisel prows, casemates, short thick
 *    radiators, the drive in a squared housing.
 *  - Boreal Republic: a truss spine from a huge bell to a small capsule,
 *    tapering radiator vanes, spherical tanks.
 *  - Lantern Holds: box trusses, tanks of whatever size was to hand, cargo
 *    modules and ore gear with weapons bolted on, nothing on the centreline.
 *
 * Shared rules: crew forward of a shadow shield, reactor and drive aft on
 * the thrust axis, real tanks, RCS clusters where the attitude jets fire,
 * radiators sized for the heat (a corvette runs cold). The owner's paint
 * goes on big surfaces so it reads from far off.
 */
export function shipGeometries() {
  const fin = (k, cls) => {
    const L = FRIGATE_LEN * CLASS_LEN[cls];
    const g = k.build(1, 7, CLASS_LOD[cls], true);
    g.computeBoundingBox();
    const bb = g.boundingBox, s = L / (bb.max.z - bb.min.z), c = (bb.max.z + bb.min.z) / 2;
    for (const x of [g, g.userData.coarse]) { x.translate(0, 0, -c).scale(s, s, s); x.computeBoundingBox(); x.computeBoundingSphere(); }
    g.userData.nozzle = (g.userData.nozzle - c) * s;
    g.userData.length = L;
    return g;
  };
  const ships = [...concordHulls(fin), ...borealHulls(fin), ...holdsHulls(fin)];

  // Probes: equipment first; no crew, so no windows or decks.
  // Survey: an imager with a sunshade, a dish, a magnetometer on a long
  // boom and an RTG on a strut (with hinge blocks where booms meet the bus).
  const p = kit(41);
  p.oct(0.05, 0.05, 0.06, 0, 1);
  p.box(0.05, 0.003, 0.04, 0, 0.026, -0.005, PAINT);
  p.cyl(0.014, 0.016, 0.04, 0.05, DARK, 12); // imager
  p.add(new THREE.CylinderGeometry(0.02, 0.018, 0.022, 12, 1, true).rotateX(Math.PI / 2).translate(0, 0, 0.08), HULL, 0.9); // sunshade
  p.dish(0.036, 0, 0.026, 0, [0, 1, 0.25]);
  p.box(0.008, 0.008, 0.008, -0.025, 0, -0.01, DARK); p.box(0.008, 0.008, 0.008, 0.022, -0.022, -0.02, DARK);
  const [mx, my, mz] = p.boom(-0.025, 0, -0.01, [-1, 0.15, -0.1], 0.18, 0.003);
  p.box(0.012, 0.012, 0.012, mx, my, mz, DARK, 0.7);
  const [rx, ry, rz] = p.boom(0.022, -0.022, -0.02, [0.7, -0.7, -0.2], 0.05, 0.004);
  p.cyl(0.01, 0.01, 0.04, rz, DARK, 8, rx, ry);
  for (const f of [0, 1, 2, 3]) p.box(f % 2 ? 0.004 : 0.03, f % 2 ? 0.03 : 0.004, 0.032, rx, ry, rz, DARK, 0.6);
  for (const s of [-1, 1]) p.rcs(s * 0.028, 0.02, -0.025, s, 0);
  p.bell(0.018, -0.035, 0.028);
  p.light(0, 0.03, -0.02, STROBE, 0.006);
  const survey = p.build();

  // Relay: almost all antenna; a big dish on the bus, two unequal solar
  // arrays (cells, not radiators), a small radiator on the shaded side,
  // whip antennae.
  const q = kit(43);
  q.box(0.04, 0.04, 0.05, 0, 0, 0);
  q.box(0.042, 0.042, 0.012, 0, 0, -0.01, PAINT);
  q.dish(0.075, 0, 0, 0.026, [0, 0, 1]);
  q.boom(0.02, 0, 0, [1, 0, 0], 0.03); q.solar(0.05, 0, 0, 0.12, 0.05, 0);
  q.boom(-0.02, 0, 0, [-1, 0, 0], 0.025); q.solar(-0.045, 0, 0, 0.08, 0.05, Math.PI + 0.4);
  q.radiator(0.0, -0.02, -0.005, 0.03, 0.03, -Math.PI / 2, 1);
  q.boom(0.01, 0.02, -0.02, [0.3, 1, -0.4], 0.09, 0.002);
  q.boom(-0.01, -0.02, -0.02, [-0.2, -1, -0.5], 0.07, 0.002);
  for (const s of [-1, 1]) q.rcs(s * 0.022, 0.018, -0.022, s, 0);
  q.bell(0.014, -0.025, 0.022);
  q.light(0, -0.024, 0, STROBE, 0.006);
  const relay = q.build();

  // Recon: a sensor package on a propellant sphere. A gimballed sensor
  // ball on an arm, a compact engine on a thrust frame, RCS on four
  // outriggers, one small solar pane and a whip antenna.
  const o = kit(47);
  o.sphere(0.03, 0, 0, 0, HULL, 1, 14); // propellant
  o.cyl(0.031, 0.031, 0.014, 0, PAINT, 14);
  o.box(0.04, 0.03, 0.03, 0, 0.03, 0.02, HULL, 0.9); // avionics bus
  o.greeble(0.04, 0.03, 0.03, 0, 0.03, 0.02, 3, 't');
  const [gx, gy, gz] = o.boom(0, 0.02, 0.035, [0, -0.3, 1], 0.045, 0.006);
  o.sphere(0.013, gx, gy, gz, DARK, 0.6, 12);
  o.cyl(0.005, 0.005, 0.004, gz + 0.012, WINDOW, 8, gx, gy); // aperture
  for (const t of [0.785, 2.356, 3.927, 5.498]) { o.boom(0, 0, -0.012, [Math.cos(t), Math.sin(t), 0], 0.04, 0.003); o.rcs(Math.cos(t) * 0.04, Math.sin(t) * 0.04, -0.012, Math.cos(t), Math.sin(t)); }
  o.solar(0.02, 0.045, 0.02, 0.05, 0.035, 0.35);
  o.boom(-0.012, 0.045, 0.01, [-0.2, 1, -0.3], 0.06, 0.0018);
  o.engine(0.022, -0.045, 0.04, 0.02, -0.03, 4);
  o.light(0, 0.046, 0.0, STROBE, 0.005);
  const recon = o.build();

  ships.probes = [survey, relay, recon];
  return ships;
}

/** Hull material: PBR plating lit by the sun and the sky, with tags for paint and lights. */
/** A white texel: the ground texture for buildings on worlds that have none. */
const white = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1);
white.needsUpdate = true;
/**
 * The hull material. `groundTex` (a world's baked surface map) is what a
 * building's earthworks on that world are painted with.
 */
export function hullMaterial(uT, groundTex = null) {
  const pl = platingTex();
  const mat = new THREE.MeshStandardMaterial({ color: '#d4d8de', map: pl, roughnessMap: pl, metalness: 0.35, roughness: 0.62, emissive: '#06070a' });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uT = uT;
    sh.uniforms.uPxK = hullPx;
    sh.uniforms.tGround = { value: groundTex || white };
    sh.uniforms.uGroundTex = { value: groundTex ? 1 : 0 };
    addShadowUniforms(sh.uniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute float kind; attribute float tint; attribute vec3 iPaint; attribute float iSun; attribute float iSeed; attribute float iHull; attribute float iLit; attribute vec3 iGround; attribute vec3 gnd;
        varying vec3 vGnd;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit; varying vec3 vGround;
        uniform float uPxK; varying float vPx; varying vec3 vLocal; varying vec3 vShW;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vLocal = position;
        vKind = kind; vTint = tint; vPaint = iPaint; vSun = iSun; vSeed = iSeed; vHull = iHull; vLit = iLit; vGround = iGround; vGnd = gnd;`)
      .replace('#include <project_vertex>', `#include <project_vertex>
        // How big the whole vessel is on screen, in pixels.
        vPx = uPxK * length((modelMatrix * instanceMatrix)[0].xyz) * 0.6 / max(-mvPosition.z, 1e-3);
        vShW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uT;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit; varying float vPx; varying vec3 vLocal; varying vec3 vGround;
        varying vec3 vGnd; uniform sampler2D tGround; uniform float uGroundTex;
        varying vec3 vShW;
        ${SHADOW_GLSL}
        float isK(float k) { return 1.0 - step(0.5, abs(vKind - k)); }`)
      .replace('#include <map_fragment>', `#include <map_fragment>
        // Radiators and solar cells aren't armour plate: no plating pattern.
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuse, isK(8.0) + isK(9.0));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), isK(10.0));`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float dark = isK(1.0) + isK(7.0);
        float paint = isK(2.0);
        float rad = isK(8.0); // radiator panels: pale ceramic
        float sol = isK(9.0); // solar cells: deep blue
        vec3 base = mix(mix(mix(vec3(vHull), vec3(0.26, 0.27, 0.3), dark), vec3(0.9, 0.88, 0.84), rad), vec3(0.06, 0.09, 0.2), sol) * vTint;
        // Close up, radiators show their coolant ribs (across the panel) and
        // solar arrays their cell grid and bus bars; both fade out far off.
        float fine = smoothstep(40.0, 140.0, vPx);
        float rib = smoothstep(0.55, 0.85, abs(fract(vLocal.z * 150.0) - 0.5) * 2.0);
        base *= 1.0 - rad * rib * 0.3 * fine;
        vec2 cg = abs(fract(vec2(vLocal.x + vLocal.y, vLocal.z) * 90.0) - 0.5) * 2.0;
        float cell = max(smoothstep(0.8, 0.95, cg.x), smoothstep(0.8, 0.95, cg.y));
        base = mix(base, vec3(0.55, 0.58, 0.62), sol * cell * 0.6 * fine);
        diffuseColor.rgb *= mix(base, vPaint * 0.9 + 0.04, paint);
        {
          // Worked ground: the world's colour, with grit up close.
          vec3 q = floor(vLocal * 900.0);
          float grit = fract(sin(dot(q, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
          float gnd = isK(10.0);
          // painted with the world's own surface where it has a map (gnd.xy
          // on it), else a mottling; gnd.z is the rock's light and dark and
          // the shade at the foot of the structures standing on it.
          vec3 gmap = (uGroundTex > 0.5 ? pow(texture2D(tGround, vGnd.xy).rgb, vec3(2.2)) : vec3(1.0)) * vGnd.z;
          float mot = (sin(vLocal.x * 9.0 + vLocal.z * 3.1) + sin(vLocal.z * 11.0 - vLocal.x * 4.3) + sin((vLocal.x + vLocal.z) * 23.0)) * (1.0 - uGroundTex);
          diffuseColor.rgb = mix(diffuseColor.rgb, vGround * gmap * vTint * (0.9 + grit * 0.2 * fine) * (1.0 + mot * 0.06), gnd);
        }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        // Bare structure is worked metal (it catches the sun), radiators are
        // matte ceramic, solar cells glassy.
        roughnessFactor = mix(roughnessFactor, 0.45, isK(1.0));
        roughnessFactor = mix(roughnessFactor, 0.9, isK(8.0));
        roughnessFactor = mix(roughnessFactor, 0.22, isK(9.0));
        roughnessFactor = mix(roughnessFactor, 1.0, isK(10.0));`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.7, isK(1.0));
        metalnessFactor = mix(metalnessFactor, 0.05, isK(8.0));
        metalnessFactor = mix(metalnessFactor, 0.5, isK(9.0));
        metalnessFactor = mix(metalnessFactor, 0.0, isK(10.0));`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        {
          // Soft pulses, not on/off: a light switching on in one frame reads as a flash.
          float ph = fract(uT * 0.7 + vSeed);
          float blink = smoothstep(0.0, 0.03, ph) * smoothstep(0.12, 0.05, ph);
          float ps = fract(uT * 0.45 + vSeed * 1.7);
          float flash = smoothstep(0.0, 0.02, ps) * smoothstep(0.08, 0.03, ps);
          // Running lights only show once the vessel is big enough on screen
          // to see them on it; far off, a lone bright pixel blooms into a halo
          // bigger than the ship (the "flashes" round distant worlds).
          float near = smoothstep(10.0, 30.0, vPx);
          totalEmissiveRadiance += isK(3.0) * vec3(1.6, 1.1, 0.55) * vLit * near;
          totalEmissiveRadiance += isK(4.0) * vec3(2.2, 0.1, 0.06) * (0.35 + blink * 0.6) * vLit * near;
          totalEmissiveRadiance += isK(5.0) * vec3(0.08, 2.2, 0.45) * (0.35 + blink * 0.6) * vLit * near;
          totalEmissiveRadiance += isK(6.0) * vec3(2.2) * flash * vLit * near;
          totalEmissiveRadiance += isK(7.0) * vec3(0.6, 0.9, 1.6) * vLit * near;
          totalEmissiveRadiance += paint * vPaint * 0.05;
        }`)
      .replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
        // In the sun's eye (an eclipse: vSun) and out of other buildings' shadows.
        float shd = vSun * sunShadow(vShW, 0.004);
        reflectedLight.directDiffuse *= shd;
        reflectedLight.directSpecular *= shd;
        {
          // Fill: a faint cool skylight and an edge rim, so the side away from
          // the sun keeps its outline against space instead of vanishing. The
          // sun stays the one strong, directional light.
          float ndv = abs(dot(normal, normalize(vViewPosition)));
          float rim = pow(1.0 - ndv, 3.0);
          reflectedLight.indirectDiffuse += diffuseColor.rgb * vec3(0.5, 0.58, 0.78) * (0.05 + rim * 0.3);
        }`);
  };
  return mat;
}

/** Drive plumes: a long, thin, blinding torch with shock diamonds near the nozzle. */
function plumeMaterial(uT) {
  return new THREE.ShaderMaterial({
    uniforms: { uT },
    vertexShader: /* glsl */ `${LD_VERT_PARS}
      attribute float part; attribute float iPow; attribute float iSeed; attribute vec3 iTint;
      varying vec2 vQ; varying float vPart; varying float vPow; varying float vSeed; varying vec3 vTint;
      void main() {
        mat4 m = modelMatrix * instanceMatrix;
        vec3 origin = (m * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        vec3 ax = mat3(m) * vec3(0.0, 0.0, -1.0);
        float len = length(ax);
        ax /= max(len, 1e-6);
        float wid = length(mat3(m) * vec3(1.0, 0.0, 0.0));
        vec3 toCam = normalize(cameraPosition - origin);
        vec3 wp;
        if (part < 0.5) {
          // The jet: a ribbon along the drive axis, turned to face the camera.
          vec3 side = normalize(cross(ax, toCam) + vec3(1e-6));
          wp = origin + ax * (position.y * len) + side * position.x * wid;
        } else {
          // The flare at the nozzle: a camera-facing disc.
          vec3 r = normalize(cross(toCam, vec3(0.0, 1.0, 0.0)) + vec3(1e-6, 0.0, 0.0));
          vec3 u = cross(r, toCam);
          wp = origin + (r * position.x + u * position.y) * wid * 5.0 + ax * wid * 0.5;
        }
        vQ = position.xy; vPart = part; vPow = iPow; vSeed = iSeed; vTint = iTint;
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
        ${LD_VERT}
      }`,
    fragmentShader: /* glsl */ `${LD_FRAG_PARS}
      uniform float uT;
      varying vec2 vQ; varying float vPart; varying float vPow; varying float vSeed; varying vec3 vTint;
      void main() {
        ${LD_FRAG}
        if (vPow <= 0.0) discard;
        float flick = 0.88 + 0.12 * sin(uT * 53.0 + vSeed * 17.0) * sin(uT * 31.0 + vSeed * 5.0);
        vec3 col;
        if (vPart < 0.5) {
          float v = clamp(vQ.y, 0.0, 1.0);
          float u = vQ.x;
          float w = 0.16 * (1.0 + v * 1.6);
          float core = exp(-pow(abs(u / (w * 0.35)), 2.0)) * pow(max(1.0 - v, 0.0), 1.4);
          float sheath = exp(-pow(abs(u / w), 2.0)) * pow(max(1.0 - v, 0.0), 2.2);
          // Shock diamonds: bright knots that fade down the jet.
          float diam = (0.5 + 0.5 * cos(v * 70.0 - uT * 4.0)) * exp(-v * 9.0);
          float k = core * (1.0 + diam * 2.5) * 5.0 + sheath * 0.9;
          col = mix(vTint, vec3(1.0, 0.97, 0.92), clamp(core * 1.2, 0.0, 1.0)) * k;
          col *= smoothstep(0.0, 0.02, v);
        } else {
          float r = length(vQ);
          float k = exp(-r * r * 18.0) * 3.0 + exp(-r * 5.0) * 0.25 + exp(-abs(vQ.y) * 60.0) * exp(-abs(vQ.x) * 3.0) * 0.4;
          col = mix(vTint, vec3(1.0), 0.6) * k;
        }
        gl_FragColor = vec4(col * vPow * flick, 1.0);
      }`,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
  });
}

/** Glints: ships far away as points of light (brighter while the drive burns). */
function glintMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uPR: { value: 1 } },
    vertexShader: /* glsl */ `${LD_VERT_PARS}
      attribute vec3 color; attribute float size;
      uniform float uPR; varying vec3 vCol;
      void main() {
        vCol = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPR;
        ${LD_VERT}
      }`,
    fragmentShader: /* glsl */ `${LD_FRAG_PARS}
      varying vec3 vCol;
      void main() {
        ${LD_FRAG}
        vec2 p = gl_PointCoord - 0.5;
        float r = length(p) * 2.0;
        float k = exp(-r * r * 5.0) + exp(-abs(p.y) * 40.0) * (1.0 - r) * 0.35;
        if (k < 0.01) discard;
        gl_FragColor = vec4(vCol * k, 1.0);
      }`,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
  });
}

/**
 * The fleet renderer. Each frame: begin(), then add() for every ship drawn,
 * then end(). `max` caps the ships drawn.
 */
/**
 * A single (non-fleet) hull mesh with the ship material, e.g. a station:
 * returns the mesh and a setter for paint colour, sunlight and lights on/off.
 */
export function singleHull(geo, uT, groundTex = null) {
  const g = geo.clone();
  let mat = singleMat || (singleMat = hullMaterial(uT));
  if (groundTex) {
    if (!groundMats.has(groundTex)) groundMats.set(groundTex, hullMaterial(uT, groundTex));
    mat = groundMats.get(groundTex);
  }
  const m = new THREE.InstancedMesh(g, mat, 1);
  const a = (n, v) => { const at = new THREE.InstancedBufferAttribute(new Float32Array(v), v.length); g.setAttribute(n, at); return at; };
  const paint = a('iPaint', [0.6, 0.6, 0.6]), sun = a('iSun', [1]), lit = a('iLit', [0]), ground = a('iGround', [0.2, 0.19, 0.18]);
  a('iSeed', [Math.random()]); a('iHull', [0.95]);
  m.setMatrixAt(0, new THREE.Matrix4());
  m.frustumCulled = false;
  m.userData.set = (color, sunV, on) => {
    const c = new THREE.Color(color);
    paint.setXYZ(0, c.r, c.g, c.b); paint.needsUpdate = true;
    sun.setX(0, sunV); sun.needsUpdate = true;
    lit.setX(0, on ? 1 : 0); lit.needsUpdate = true;
  };
  // Linear RGB of the ground it stands on (for GROUND parts).
  m.userData.ground = (c) => { ground.setXYZ(0, c[0], c[1], c[2]); ground.needsUpdate = true; };
  return m;
}
let singleMat = null;
/** One per world with a surface map (same shader; only its ground texture differs). */
const groundMats = new WeakMap();

/** Below this on-screen size (the view's px, about 1.8x the hull's length in pixels) ships draw coarse: the parts it drops are then under a pixel or two, so the switch doesn't pop. */
const FAR_PX = 40;
export function createShipRenderer(scene, max) {
  const uT = { value: 0 };
  const geos = shipGeometries();
  const types = [...geos, ...geos.probes];
  const PROBE = geos.length;
  const mat = hullMaterial(uT);
  const instanced = (g) => {
    const geo = g.clone();
    const m = new THREE.InstancedMesh(geo, mat, max);
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    const attr = (n, size) => { const a = new THREE.InstancedBufferAttribute(new Float32Array(max * size), size); a.setUsage(THREE.DynamicDrawUsage); geo.setAttribute(n, a); return a; };
    m.userData = { paint: attr('iPaint', 3), sun: attr('iSun', 1), seed: attr('iSeed', 1), hull: attr('iHull', 1), n: 0 };
    attr('iLit', 1).array.fill(1);
    m.frustumCulled = false;
    m.count = 0;
    scene.add(m);
    return m;
  };
  const meshes = types.map(instanced);
  // Parts that turn on their own (a habitat ring): drawn as their own
  // instances, rotated about the hull axis.
  const rotors = types.map((g) => (g.userData.rotor ? instanced(g.userData.rotor) : null));
  // Far-off ships draw a coarse version (same silhouette, no small parts).
  const coarse = types.map((g) => (g.userData.coarse ? instanced(g.userData.coarse) : null));
  const all = [...meshes, ...rotors.filter(Boolean), ...coarse.filter(Boolean)];
  const rz = new THREE.Matrix4();

  // Plumes: one instanced quad pair per burning ship.
  const pg = new THREE.InstancedBufferGeometry();
  pg.setAttribute('position', new THREE.Float32BufferAttribute([
    -1, -0.02, 0, 1, -0.02, 0, 1, 1, 0, -1, 1, 0, // jet
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0, // flare
  ], 3));
  pg.setAttribute('part', new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 1, 1, 1], 1));
  pg.setIndex([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7]);
  // Room for each ship's drive plus a pair of attitude jets.
  const pMax = max * 3;
  const plumeAttr = (n, size) => { const a = new THREE.InstancedBufferAttribute(new Float32Array(pMax * size), size); a.setUsage(THREE.DynamicDrawUsage); pg.setAttribute(n, a); return a; };
  const pPow = plumeAttr('iPow', 1), pSeed = plumeAttr('iSeed', 1), pTint = plumeAttr('iTint', 3);
  const plumes = new THREE.InstancedMesh(pg, plumeMaterial(uT), pMax);
  plumes.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  plumes.frustumCulled = false;
  plumes.count = 0;
  plumes.renderOrder = 2;
  scene.add(plumes);

  // Glints.
  const gGeo = new THREE.BufferGeometry();
  const gPos = new Float32Array(max * 3), gCol = new Float32Array(max * 3), gSize = new Float32Array(max);
  gGeo.setAttribute('position', new THREE.BufferAttribute(gPos, 3).setUsage(THREE.DynamicDrawUsage));
  gGeo.setAttribute('color', new THREE.BufferAttribute(gCol, 3).setUsage(THREE.DynamicDrawUsage));
  gGeo.setAttribute('size', new THREE.BufferAttribute(gSize, 1).setUsage(THREE.DynamicDrawUsage));
  const gMat = glintMaterial();
  const glints = new THREE.Points(gGeo, gMat);
  glints.frustumCulled = false;
  glints.renderOrder = 3;
  scene.add(glints);

  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const sc = new THREE.Vector3();
  const tgt = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const col = new THREE.Color();
  let nPlume = 0, nGlint = 0, total = 0;
  const PLUME_TINT = new THREE.Color(0.35, 0.6, 1.0);
  const JET_TINT = new THREE.Color(0.85, 0.9, 1.0); // cold-gas / monoprop puffs: pale, not the torch's blue
  const q2 = new THREE.Quaternion(), xAxis = new THREE.Vector3(1, 0, 0);

  return {
    geometries: geos,
    /** Hull types to pick from, and the probes' (probeType + 0..probes-1). */
    hulls: geos.length,
    probeType: geos.length,
    probes: geos.probes.length,
    uT,
    begin(t, pr) {
      uT.value = t;
      gMat.uniforms.uPR.value = pr;
      for (const m of all) m.userData.n = 0;
      nPlume = nGlint = total = 0;
    },
    /**
     * One ship. type: a hull, or probeType + n for a probe. p position, n facing (unit),
     * scale [x,y,z], paint colour (hex or Color), hull grey, burning,
     * plume length factor, glint [size px, brightness] (size 0 for none),
     * px: on-screen size of the ship in pixels (for level of detail), sun: 0..1 lit.
     */
    add(type, p, n, s, paint, hull, seed, burning, plume, glint, px, sun) {
      if (total >= max) return;
      total++;
      tgt.copy(p).add(n);
      m4.lookAt(tgt, p, Math.abs(n.y) > 0.99 ? sc.set(1, 0, 0) : up);
      q.setFromRotationMatrix(m4);
      // Too small to see as a hull: just the glint.
      if (px > 1.5) {
        const m = px < FAR_PX && coarse[type] ? coarse[type] : meshes[type];
        const i = m.userData.n++;
        m4.compose(p, q, sc.set(s[0], s[1], s[2]));
        m.setMatrixAt(i, m4);
        col.set(paint);
        m.userData.paint.setXYZ(i, col.r, col.g, col.b);
        m.userData.sun.setX(i, sun);
        m.userData.seed.setX(i, (seed * 0.137) % 1);
        m.userData.hull.setX(i, hull);
        const rm = rotors[type];
        if (rm) {
          const j = rm.userData.n++;
          rm.setMatrixAt(j, m4.multiply(rz.makeRotationZ(uT.value * types[type].userData.rotorSpin + seed)));
          rm.userData.paint.setXYZ(j, col.r, col.g, col.b);
          rm.userData.sun.setX(j, sun);
          rm.userData.seed.setX(j, (seed * 0.137) % 1);
          rm.userData.hull.setX(j, hull);
        }
      }
      if (burning && nPlume < pMax) {
        const i = nPlume++;
        // Nozzle at the back of the drive bell; length along -Z.
        tgt.set(0, 0, types[type].userData.nozzle).multiply(sc.set(s[0], s[1], s[2])).applyQuaternion(q).add(p);
        const len = 1.9 * plume * Math.max(s[2], 0.62); // long torches even on small hulls
        m4.compose(tgt, q, sc.set(0.06 * s[0] * (type >= PROBE ? 0.5 : 1), 1, len));
        plumes.setMatrixAt(i, m4);
        // Up close the torch is toned down a little so it doesn't outshine
        // the hull. Far off it dims too (the point of light carries the ship
        // there), and a short thruster puff fades out entirely.
        const far = THREE.MathUtils.smoothstep(px, 4, 40);
        pPow.setX(i, (1 - 0.35 * THREE.MathUtils.smoothstep(px, 120, 500)) * (plume < 0.2 ? far : 0.3 + 0.7 * far));
        pSeed.setX(i, (seed * 0.371) % 1);
        pTint.setXYZ(i, PLUME_TINT.r, PLUME_TINT.g, PLUME_TINT.b);
      }
      if (glint && glint[0] > 0) {
        const i = nGlint++;
        gPos[i * 3] = p.x; gPos[i * 3 + 1] = p.y; gPos[i * 3 + 2] = p.z;
        const torch = glint[2] ?? burning;
        col.set(torch ? '#cfe8ff' : paint);
        const b = glint[1] * (torch ? 1.5 : 1);
        gCol[i * 3] = col.r * b; gCol[i * 3 + 1] = col.g * b; gCol[i * 3 + 2] = col.b * b;
        gSize[i] = glint[0];
      }
    },
    /**
     * An attitude jet: a short puff from point o, exhaust along unit d
     * (the ship is pushed the other way). len and wid in world units, pow 0..1.
     */
    jet(o, d, len, wid, pow, seed) {
      if (nPlume >= pMax) return;
      const i = nPlume++;
      // The plume runs along local -Z: point -Z along d.
      tgt.copy(o).sub(d);
      m4.lookAt(tgt, o, Math.abs(d.y) > 0.99 ? xAxis : up);
      q2.setFromRotationMatrix(m4);
      m4.compose(o, q2, sc.set(wid, 1, len));
      plumes.setMatrixAt(i, m4);
      pPow.setX(i, pow);
      pSeed.setX(i, (seed * 0.613) % 1);
      pTint.setXYZ(i, JET_TINT.r, JET_TINT.g, JET_TINT.b);
    },
    end() {
      for (const m of all) {
        m.count = m.userData.n;
        if (!m.count) continue;
        m.instanceMatrix.needsUpdate = true;
        for (const k of ['paint', 'sun', 'seed', 'hull']) m.userData[k].needsUpdate = true;
      }
      plumes.count = nPlume;
      if (nPlume) { plumes.instanceMatrix.needsUpdate = true; pPow.needsUpdate = pSeed.needsUpdate = pTint.needsUpdate = true; }
      gGeo.setDrawRange(0, nGlint);
      if (nGlint) { gGeo.attributes.position.needsUpdate = true; gGeo.attributes.color.needsUpdate = true; gGeo.attributes.size.needsUpdate = true; }
    },
  };
}
