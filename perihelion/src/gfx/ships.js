import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { LD_VERT_PARS, LD_VERT, LD_FRAG_PARS, LD_FRAG } from './glsl.js';
import { rng } from '../sim.js';

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
export const HULL = 0, DARK = 1, PAINT = 2, WINDOW = 3, NAV_R = 4, NAV_G = 5, STROBE = 6, THROAT = 7, RAD = 8;

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
  const k = {
    r,
    add: (geo, kind = HULL, tint = 1) => tag(geo, kind, tint),
    box: (w, h, d, x = 0, y = 0, z = 0, kind = HULL, tint) => tag(new THREE.BoxGeometry(w, h, d).translate(x, y, z), kind, tint),
    cyl: (r1, r2, len, z, kind = HULL, seg = 12, x = 0, y = 0, tint) => tag(new THREE.CylinderGeometry(r1, r2, len, seg).rotateX(X).translate(x, y, z), kind, tint),
    // A chamfered block: an eight-sided frustum, stretched to w x h (r1 at the front, r2 at the back).
    oct: (w, h, len, z, taper = 1, x = 0, y = 0, kind = HULL, tint) => tag(new THREE.CylinderGeometry(0.5 * taper, 0.5, len, 8).rotateY(Math.PI / 8).rotateX(X).scale(w, h, 1).translate(x, y, z), kind, tint),
    sphere: (rad, x, y, z, kind = HULL, tint, seg = 10) => tag(new THREE.SphereGeometry(rad, seg, Math.max(6, seg * 0.6 | 0)).translate(x, y, z), kind, tint),
    // A propellant tank: a capsule along the hull axis.
    tank: (rad, len, x, y, z, kind = HULL, tint) => tag(new THREE.CapsuleGeometry(rad, len, 2, 10).rotateX(X).translate(x, y, z), kind, tint),
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
    radiator: (x, y, z, reach, len, a, segs = 3, t = 0.003) => {
      const gap = len * 0.035;
      const sl = (len - gap * (segs - 1)) / segs;
      for (let i = 0; i < segs; i++) {
        const zz = z - len / 2 + sl / 2 + i * (sl + gap);
        tag(new THREE.BoxGeometry(reach, t, sl).translate(reach / 2, 0, 0).rotateZ(a).translate(x, y, zz), RAD, 0.92 + r() * 0.14);
      }
      tag(new THREE.BoxGeometry(t * 2, t * 2, len).translate(x, y, z), DARK, 0.8);
      return [x + Math.cos(a) * reach, y + Math.sin(a) * reach];
    },
    // An open lattice truss along z: four rails, frames and diagonals.
    truss: (x, y, z0, z1, w, bays, t = 0.004, kind = DARK) => {
      const L = (z1 - z0) / bays;
      for (const sx of [-1, 1]) for (const sy of [-1, 1]) k.box(t, t, z1 - z0, x + (sx * w) / 2, y + (sy * w) / 2, (z0 + z1) / 2, kind);
      const diag = Math.hypot(w, L), ang = Math.atan2(w, L);
      for (let i = 0; i <= bays; i++) {
        const z = z0 + i * L;
        for (const s of [-1, 1]) { k.box(w, t, t, x, y + (s * w) / 2, z, kind); k.box(t, w, t, x + (s * w) / 2, y, z, kind); }
        if (i === bays) break;
        const f = i % 2 ? 1 : -1;
        for (const s of [-1, 1]) {
          tag(new THREE.BoxGeometry(t * 0.8, t * 0.8, diag).rotateX(ang * f * s).translate(x + (s * w) / 2, y, z + L / 2), kind, 0.85);
          tag(new THREE.BoxGeometry(t * 0.8, t * 0.8, diag).rotateY(ang * f * s).translate(x, y + (s * w) / 2, z + L / 2), kind, 0.85);
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
      const pts = [];
      for (let i = 0; i <= 8; i++) { const t = i / 8; pts.push(new THREE.Vector2(rad * (0.42 + 0.58 * Math.pow(t, 1.6)), -t * len)); }
      tag(new THREE.LatheGeometry(pts, 20).rotateX(-X).translate(0, 0, z), DARK, 0.7);
      tag(new THREE.CylinderGeometry(rad * 0.4, rad * 0.4, 0.004, 16).rotateX(X).translate(0, 0, z - 0.012), THROAT);
      if (k.nozzle === undefined) k.nozzle = z - len - 0.01; // where the main drive's torch starts
    },
    // A small secondary bell (no torch of its own: manoeuvring or auxiliary drives).
    bell2: (rad, x, y, z, len = 0.05) => {
      const pts = [];
      for (let i = 0; i <= 6; i++) { const t = i / 6; pts.push(new THREE.Vector2(rad * (0.45 + 0.55 * Math.pow(t, 1.5)), -t * len)); }
      tag(new THREE.LatheGeometry(pts, 12).rotateX(-X).translate(x, y, z), DARK, 0.65);
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
    build(scaleXY = 1.35, D = 7) {
      const out = [];
      for (const g of parts) {
        const n = g.index ? g.toNonIndexed() : g;
        n.deleteAttribute('uv');
        const cnt = n.attributes.position.count;
        const kind = new Float32Array(cnt).fill(g.userData.kind);
        const tint = new Float32Array(cnt).fill(g.userData.tint * (0.9 + r() * 0.2));
        n.setAttribute('kind', new THREE.BufferAttribute(kind, 1));
        n.setAttribute('tint', new THREE.BufferAttribute(tint, 1));
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
        out.push(n);
      }
      const geo = mergeGeometries(out);
      geo.scale(scaleXY, scaleXY, 1);
      geo.computeBoundingSphere();
      geo.userData.nozzle = k.nozzle ?? 0;
      return geo;
    },
  };
  return k;
}

/**
 * The hulls: [cutter, frigate, freighter, cruiser, surveyor], plus
 * `.probes` (survey, relay, recon). All face +Z and burn along it.
 *
 * Function first: crew sits forward in small armoured sections (no bridges
 * or windows to speak of), the reactor sits aft behind a shadow shield with
 * the drive on the thrust axis, propellant rides in real tanks, and heat
 * goes out through radiators of different kinds (radial fins, folding
 * sheets, segmented ladders). Decks run across the hull, stacked along the
 * thrust axis. Each class has its own proportions: a stubby cutter, a long
 * lean frigate, an open-truss freighter, a broad armoured cruiser with a
 * drone bay, and a surveyor whose habitat ring turns on its own.
 */
export function shipGeometries() {
  // Cutter (patrol, interception): short and dense, mostly drive. An
  // armoured crew capsule, a spinal coilgun under the keel, two unequal
  // tanks, and small radiator fins off the reactor.
  const a = kit(11);
  a.oct(0.064, 0.07, 0.11, 0.2, 0.74); // armoured crew capsule
  a.oct(0.05, 0.054, 0.03, 0.27, 0.62); // nose armour
  a.box(0.024, 0.008, 0.004, 0, -0.008, 0.286, DARK); // recessed sensor slot
  a.box(0.05, 0.006, 0.08, 0.004, 0.037, 0.19, PAINT);
  a.box(0.012, 0.012, 0.42, 0, -0.045, 0.1, DARK); // spinal coilgun
  a.box(0.018, 0.018, 0.016, 0, -0.045, 0.31, DARK, 0.7);
  a.tank(0.028, 0.06, -0.014, 0.006, 0.06);
  a.tank(0.02, 0.05, 0.034, -0.012, 0.055, HULL, 0.9);
  a.truss(0, 0, -0.055, 0.02, 0.032, 2);
  a.shield(0.048, -0.062);
  a.cyl(0.04, 0.046, 0.07, -0.105, DARK, 14); // reactor
  a.cyl(0.049, 0.049, 0.01, -0.082, PAINT, 14);
  a.bell(0.058, -0.142, 0.13);
  a.radiator(0.03, 0.022, -0.105, 0.058, 0.062, 0.55, 2);
  a.radiator(-0.03, -0.022, -0.1, 0.044, 0.05, Math.PI + 0.35, 2);
  a.pdc(0.012, 0.042, 0.13);
  for (const [x, y] of [[0.036, 0.03], [-0.036, -0.03]]) a.rcs(x, y, 0.24, Math.sign(x), 0);
  for (const [x, y] of [[0.044, -0.03], [-0.044, 0.03]]) a.rcs(x, y, -0.08, Math.sign(x), 0);
  a.light(-0.034, 0.0, 0.2, NAV_R); a.light(0.034, 0.0, 0.2, NAV_G); a.light(0.0, 0.046, 0.04, STROBE);
  const cutter = a.build();

  // Frigate (escort, line): long and lean. A sensor prow, a missile
  // magazine with hatches, an armoured command citadel, then an open spine
  // carrying tanks and two unlike radiators (a ladder to port, a folding
  // sheet to starboard), and an armoured reactor housing at the drive.
  const b = kit(23);
  b.oct(0.07, 0.07, 0.06, 0.35, 0.74); // sensor prow
  b.cyl(0.012, 0.012, 0.004, 0.381, DARK, 12, 0, 0.008);
  b.box(0.08, 0.072, 0.14, 0, 0, 0.25); // magazine
  b.cells(-0.012, 0.037, 0.25, 3, 8);
  b.box(0.084, 0.076, 0.006, 0, 0, 0.18, DARK);
  b.oct(0.076, 0.07, 0.1, 0.12, 1); // command citadel
  b.box(0.05, 0.008, 0.07, 0.008, 0.038, 0.12, PAINT);
  b.windows(0.038, 0.006, 0.09, 0.14, 2, [1]);
  b.turret(-0.012, 0.042, 0.09);
  b.pdc(0.042, 0.02, 0.3); b.pdc(-0.042, -0.02, 0.27, -1);
  b.truss(0, 0, -0.2, 0.07, 0.034, 3);
  b.tank(0.024, 0.12, 0.034, 0.012, -0.06);
  b.tank(0.024, 0.12, -0.034, -0.008, -0.08);
  b.tank(0.018, 0.07, 0, -0.036, -0.02, HULL, 0.85);
  b.radiator(-0.02, 0, -0.06, 0.12, 0.2, Math.PI + 0.22, 4);
  const [fx, fy] = b.radiator(0.02, 0, -0.075, 0.07, 0.16, -0.12, 3);
  b.radiator(fx, fy, -0.075, 0.06, 0.16, 0.42, 3);
  b.shield(0.055, -0.208);
  b.oct(0.084, 0.084, 0.08, -0.255, 1); // armoured reactor housing
  b.box(0.088, 0.016, 0.05, 0, 0.0, -0.255, PAINT);
  b.cyl(0.05, 0.056, 0.03, -0.31, DARK, 14);
  b.bell(0.066, -0.326, 0.14);
  for (const [x, y] of [[0.038, 0.03], [-0.038, -0.03]]) b.rcs(x, y, 0.33, Math.sign(x), 0);
  for (const [x, y] of [[0.046, 0.03], [-0.046, -0.03]]) b.rcs(x, y, -0.235, Math.sign(x), 0);
  b.light(-0.142, -0.03, -0.06, NAV_R); b.light(0.13, 0.0, -0.075, NAV_G); b.light(0.0, 0.05, 0.12, STROBE);
  const frigate = b.build();

  // Freighter: a small crew pod on the end of a long open truss, cargo
  // modules clamped round it (some slots empty, some in the owner's paint),
  // a cluster of spherical propellant tanks aft and radial radiator fins
  // round the reactor.
  const c = kit(37);
  c.oct(0.05, 0.046, 0.06, 0.31, 0.8); // crew pod
  c.box(0.026, 0.008, 0.004, 0, 0.006, 0.341, WINDOW);
  c.box(0.052, 0.008, 0.04, 0, 0.026, 0.3, PAINT);
  c.truss(0, 0, -0.15, 0.28, 0.03, 5);
  for (const [i, z] of [0.22, 0.14, 0.06, -0.02].entries()) {
    for (const [j, [sx, sy]] of [[1, 0], [-1, 0], [0, 1], [0, -1]].entries()) {
      if ((i * 4 + j) % 5 === 2) continue; // an empty slot
      const paint = (i + j) % 3 === 0;
      c.box(sx ? 0.036 : 0.044, sy ? 0.036 : 0.044, 0.07, sx * 0.034, sy * 0.034, z, paint ? PAINT : HULL, 0.8 + c.r() * 0.3);
    }
  }
  c.sphere(0.04, 0.03, 0.022, -0.1, HULL, 0.95, 12);
  c.sphere(0.036, -0.034, 0.016, -0.11, HULL, 1, 12);
  c.sphere(0.038, 0.002, -0.036, -0.095, HULL, 0.9, 12);
  c.shield(0.05, -0.155);
  c.cyl(0.036, 0.042, 0.05, -0.185, DARK, 12);
  for (const ang of [0.4, 1.9, 3.4, 4.8]) c.radiator(Math.cos(ang) * 0.036, Math.sin(ang) * 0.036, -0.185, 0.045 + c.r() * 0.02, 0.05, ang, 2);
  c.bell(0.05, -0.21, 0.12);
  c.rcs(0.03, 0.02, 0.29, 1, 0); c.rcs(-0.03, -0.02, 0.29, -1, 0);
  c.light(-0.03, 0.0, 0.31, NAV_R); c.light(0.03, 0.0, 0.31, NAV_G); c.light(0.0, 0.03, 0.27, STROBE);
  const freighter = c.build();

  // Cruiser (heavy, carries drones): broad and armoured, its crew deep
  // inside. Two dorsal gun mounts, a laser on a starboard sponson with its
  // own radiator, missile cells to port and a drone bay under the hull. A
  // short truss neck to a separate reactor section, big radiators, and a
  // main drive flanked by two auxiliaries.
  const d = kit(53);
  d.oct(0.12, 0.08, 0.06, 0.31, 0.8); // armoured bow
  d.box(0.07, 0.008, 0.004, 0, -0.012, 0.341, DARK);
  d.oct(0.13, 0.086, 0.16, 0.2, 1);
  d.oct(0.14, 0.09, 0.16, 0.03, 1);
  for (const z of [0.12, -0.05]) d.box(0.144, 0.094, 0.006, 0, 0, z, DARK);
  d.box(0.05, 0.01, 0.14, 0.03, 0.042, 0.2, PAINT);
  d.box(0.07, 0.006, 0.09, 0.02, -0.046, 0.04, DARK, 0.35); // drone bay mouth
  d.box(0.05, 0.002, 0.006, 0.02, -0.049, 0.004, WINDOW);
  d.turret(-0.032, 0.049, 0.22, 1, 1.2); d.turret(0.028, 0.047, 0.05, 1, 1.2);
  d.box(0.03, 0.03, 0.12, 0.08, 0.008, 0.16); // laser sponson
  d.cyl(0.01, 0.013, 0.04, 0.235, DARK, 10, 0.08, 0.008);
  d.radiator(0.095, 0.008, 0.12, 0.042, 0.06, 0.35, 2);
  d.cells(-0.04, 0.047, 0.06, 2, 6);
  d.pdc(-0.07, -0.02, 0.26, -1); d.pdc(0.05, -0.046, -0.02, -1); d.pdc(-0.06, 0.046, -0.03);
  d.windows(0.07, 0.0, 0.16, 0.2, 2, [-1]);
  d.truss(0, 0, -0.15, -0.05, 0.05, 2);
  d.radiator(0.028, 0, -0.1, 0.13, 0.085, 0.15, 3);
  d.radiator(-0.028, 0, -0.095, 0.11, 0.07, Math.PI - 0.4, 3);
  d.radiator(0, -0.028, -0.1, 0.07, 0.06, -Math.PI / 2 - 0.2, 2);
  d.shield(0.07, -0.153);
  d.oct(0.1, 0.09, 0.08, -0.2, 1); // reactor section
  d.cyl(0.055, 0.06, 0.03, -0.255, DARK, 14);
  d.bell(0.064, -0.27, 0.14);
  d.bell2(0.024, 0.055, 0.03, -0.245); d.bell2(0.024, -0.055, -0.03, -0.245);
  for (const [x, y] of [[0.064, 0.03], [-0.064, -0.03]]) d.rcs(x, y, 0.3, Math.sign(x), 0);
  for (const [x, y] of [[0.054, -0.036], [-0.054, 0.036]]) d.rcs(x, y, -0.2, Math.sign(x), 0);
  d.light(-0.072, 0.0, 0.1, NAV_R); d.light(0.072, 0.0, 0.03, NAV_G); d.light(0.0, 0.05, -0.2, STROBE);
  const cruiser = d.build();

  // Surveyor (exploration, science): instruments forward on booms and an
  // offset dish, a fixed hub with a habitat ring turning round it for
  // gravity, then a light truss with tanks, one big folding radiator and a
  // modest drive. The ring is a separate part (`rotor`) so it can spin.
  const e = kit(67);
  e.cyl(0.024, 0.03, 0.05, 0.33, HULL, 12); // instrument bay
  e.boom(0, 0, 0.355, [0, 0, 1], 0.05, 0.004);
  e.box(0.01, 0.01, 0.01, 0, 0, 0.405, DARK);
  e.boom(0.018, 0.018, 0.33, [1, 0.7, 0.3], 0.07);
  e.dish(0.04, -0.03, 0.03, 0.3, [-0.5, 0.6, 0.6]);
  e.cyl(0.028, 0.028, 0.12, 0.22, HULL, 14); // hub
  e.cyl(0.04, 0.04, 0.03, 0.2, DARK, 14); // ring bearing
  e.cyl(0.032, 0.032, 0.012, 0.25, PAINT, 14);
  e.truss(0, 0, -0.17, 0.16, 0.026, 4);
  e.tank(0.02, 0.08, 0.028, 0.01, 0.04); e.tank(0.02, 0.08, -0.028, 0.0, 0.0); e.tank(0.016, 0.06, 0.0, -0.028, -0.07, HULL, 0.9);
  const [gx, gy] = e.radiator(0.014, 0, -0.12, 0.1, 0.1, 0.1, 3);
  e.radiator(gx, gy, -0.12, 0.08, 0.1, -0.25, 3);
  e.shield(0.045, -0.176);
  e.cyl(0.034, 0.04, 0.05, -0.205, DARK, 12);
  e.bell(0.046, -0.23, 0.11);
  e.rcs(0.03, 0, 0.3, 1, 0); e.rcs(-0.03, 0, 0.3, -1, 0); e.rcs(0.02, 0.02, -0.18, 0, 1);
  e.light(-0.07, 0.07, 0.2, NAV_R); e.light(0.07, -0.07, 0.2, NAV_G); e.light(0.0, 0.0, 0.41, STROBE);
  const surveyor = e.build();
  const er = kit(71);
  er.hoop(0.085, 0.022, 0.03, 24, 0.2, 3, 0.04);
  surveyor.userData.rotor = er.build();
  surveyor.userData.rotorSpin = 0.6;

  // Probes: no crew, so no windows or decks; small buses with instruments.
  // Survey: a camera forward, a dish, a long magnetometer boom and an RTG
  // on a strut for power.
  const p = kit(41);
  p.oct(0.05, 0.05, 0.06, 0, 1);
  p.cyl(0.014, 0.016, 0.04, 0.05, DARK, 12); // imager
  p.dish(0.036, 0, 0.026, 0, [0, 1, 0.25]);
  const [mx, my, mz] = p.boom(-0.02, 0, -0.01, [-1, 0.15, -0.1], 0.18, 0.003);
  p.box(0.012, 0.012, 0.012, mx, my, mz, DARK, 0.7);
  const [rx, ry, rz] = p.boom(0.02, -0.02, -0.02, [0.7, -0.7, -0.2], 0.05, 0.004);
  p.cyl(0.01, 0.01, 0.04, rz, DARK, 8, rx, ry);
  for (const f of [0, 1, 2, 3]) p.box(f % 2 ? 0.004 : 0.03, f % 2 ? 0.03 : 0.004, 0.032, rx, ry, rz, DARK, 0.6);
  p.box(0.05, 0.008, 0.012, 0, -0.027, 0, PAINT);
  p.bell(0.02, -0.035, 0.03);
  p.light(0, 0.03, -0.02, STROBE, 0.006);
  const survey = p.build();

  // Relay: almost all antenna; a big dish, a small bus, two unequal solar
  // wings and a pair of whip antennae.
  const q = kit(43);
  q.box(0.04, 0.04, 0.05, 0, 0, 0);
  q.dish(0.075, 0, 0, 0.026, [0, 0, 1]);
  q.boom(0.02, 0, 0, [1, 0, 0], 0.03);
  q.box(0.12, 0.003, 0.05, 0.11, 0, 0, DARK, 0.45);
  q.boom(-0.02, 0, 0, [-1, 0, 0], 0.025);
  q.add(new THREE.BoxGeometry(0.08, 0.003, 0.05).rotateX(0.5).translate(-0.085, 0, 0), DARK, 0.45);
  q.boom(0.01, 0.02, -0.02, [0.3, 1, -0.4], 0.09, 0.002);
  q.boom(-0.01, -0.02, -0.02, [-0.2, -1, -0.5], 0.07, 0.002);
  q.box(0.042, 0.008, 0.01, 0, 0.024, -0.01, PAINT);
  q.bell(0.016, -0.025, 0.025);
  q.light(0, -0.024, 0, STROBE, 0.006);
  const relay = q.build();

  // Recon drone: a low, faceted, dark armoured body, a sensor ball
  // underneath, one small solar pane and a relatively big drive.
  const o = kit(47);
  o.oct(0.07, 0.032, 0.1, 0.0, 0.7, 0, 0, HULL, 0.7);
  o.oct(0.05, 0.026, 0.03, 0.065, 0.5, 0, 0, HULL, 0.7);
  o.sphere(0.014, 0, -0.022, 0.04, DARK, 0.6, 12);
  o.box(0.07, 0.004, 0.012, 0, 0.017, -0.01, PAINT);
  o.add(new THREE.BoxGeometry(0.05, 0.003, 0.04).rotateZ(0.3).translate(0.045, 0.026, -0.03), DARK, 0.45);
  o.cyl(0.018, 0.022, 0.02, -0.06, DARK, 12);
  o.bell(0.026, -0.07, 0.04);
  o.light(0, 0.02, 0.03, STROBE, 0.005);
  const recon = o.build();

  const ships = [cutter, frigate, freighter, cruiser, surveyor];
  ships.probes = [survey, relay, recon];
  return ships;
}

/** Hull material: PBR plating lit by the sun and the sky, with tags for paint and lights. */
export function hullMaterial(uT) {
  const pl = platingTex();
  const mat = new THREE.MeshStandardMaterial({ color: '#d4d8de', map: pl, roughnessMap: pl, metalness: 0.35, roughness: 0.62, emissive: '#06070a' });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uT = uT;
    sh.uniforms.uPxK = hullPx;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute float kind; attribute float tint; attribute vec3 iPaint; attribute float iSun; attribute float iSeed; attribute float iHull; attribute float iLit;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit;
        uniform float uPxK; varying float vPx;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vKind = kind; vTint = tint; vPaint = iPaint; vSun = iSun; vSeed = iSeed; vHull = iHull; vLit = iLit;`)
      .replace('#include <project_vertex>', `#include <project_vertex>
        // How big the whole vessel is on screen, in pixels.
        vPx = uPxK * length((modelMatrix * instanceMatrix)[0].xyz) * 0.6 / max(-mvPosition.z, 1e-3);`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uT;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit; varying float vPx;
        float isK(float k) { return 1.0 - step(0.5, abs(vKind - k)); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float dark = isK(1.0) + isK(7.0);
        float paint = isK(2.0);
        float rad = isK(8.0); // radiator panels: pale ceramic
        vec3 base = mix(mix(vec3(vHull), vec3(0.24, 0.25, 0.28), dark), vec3(0.9, 0.88, 0.84), rad) * vTint;
        diffuseColor.rgb *= mix(base, vPaint * 0.9 + 0.04, paint);`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.7, isK(1.0));
        roughnessFactor = mix(roughnessFactor, 0.85, isK(8.0));`)
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
        reflectedLight.directDiffuse *= vSun;
        reflectedLight.directSpecular *= vSun;`);
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
export function singleHull(geo, uT) {
  const g = geo.clone();
  const m = new THREE.InstancedMesh(g, singleMat || (singleMat = hullMaterial(uT)), 1);
  const a = (n, v) => { const at = new THREE.InstancedBufferAttribute(new Float32Array(v), v.length); g.setAttribute(n, at); return at; };
  const paint = a('iPaint', [0.6, 0.6, 0.6]), sun = a('iSun', [1]), lit = a('iLit', [0]);
  a('iSeed', [Math.random()]); a('iHull', [0.95]);
  m.setMatrixAt(0, new THREE.Matrix4());
  m.frustumCulled = false;
  m.userData.set = (color, sunV, on) => {
    const c = new THREE.Color(color);
    paint.setXYZ(0, c.r, c.g, c.b); paint.needsUpdate = true;
    sun.setX(0, sunV); sun.needsUpdate = true;
    lit.setX(0, on ? 1 : 0); lit.needsUpdate = true;
  };
  return m;
}
let singleMat = null;

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
  const all = [...meshes, ...rotors.filter(Boolean)];
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
        const m = meshes[type];
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
        pPow.setX(i, 1);
        pSeed.setX(i, (seed * 0.371) % 1);
        pTint.setXYZ(i, PLUME_TINT.r, PLUME_TINT.g, PLUME_TINT.b);
      }
      if (glint && glint[0] > 0) {
        const i = nGlint++;
        gPos[i * 3] = p.x; gPos[i * 3 + 1] = p.y; gPos[i * 3 + 2] = p.z;
        col.set(burning ? '#cfe8ff' : paint);
        const b = glint[1] * (burning ? 2.2 : 1);
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
