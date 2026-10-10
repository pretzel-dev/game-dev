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
export const HULL = 0, DARK = 1, PAINT = 2, WINDOW = 3, NAV_R = 4, NAV_G = 5, STROBE = 6, THROAT = 7;

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
    // A drive bell: a flared nozzle, open at the back, with a glowing throat.
    bell: (rad, z, len = 0.16) => {
      const pts = [];
      for (let i = 0; i <= 8; i++) { const t = i / 8; pts.push(new THREE.Vector2(rad * (0.42 + 0.58 * Math.pow(t, 1.6)), -t * len)); }
      tag(new THREE.LatheGeometry(pts, 20).rotateX(-X).translate(0, 0, z), DARK, 0.7);
      tag(new THREE.CylinderGeometry(rad * 0.4, rad * 0.4, 0.004, 16).rotateX(X).translate(0, 0, z - 0.012), THROAT);
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
    build(scaleXY = 1.35) {
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
        const D = 7;
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
      return geo;
    },
  };
  return k;
}

/** The hulls: [corvette, frigate, hauler], plus `.probe`. All face +Z. */
export function shipGeometries() {
  // Corvette: a tall, slab-sided gunship in stacked decks: a wedge bow over
  // a keel railgun, PDCs at the corners, ops-deck windows, a heavy drive.
  const a = kit(11);
  a.add(new THREE.ConeGeometry(0.05, 0.12, 4).rotateY(Math.PI / 4).rotateX(Math.PI / 2).translate(0, 0, 0.36), HULL); // wedge bow
  a.box(0.072, 0.09, 0.07, 0, 0, 0.29, HULL); // bow block
  a.box(0.078, 0.096, 0.17, 0, 0, 0.17); // forward decks
  a.box(0.086, 0.104, 0.2, 0, 0, -0.02); // mid decks
  a.box(0.06, 0.018, 0.13, 0, 0.058, 0.12, PAINT); // dorsal ops deck in paint
  a.box(0.04, 0.012, 0.06, 0, 0.07, 0.15, HULL); // sensor housing
  a.cyl(0.009, 0.009, 0.01, 0.15, DARK, 8, 0, 0.082);
  a.box(0.08, 0.01, 0.04, 0, -0.055, 0.27, PAINT); // bow band
  for (const z of [-0.1, -0.04, 0.02, 0.08]) a.box(0.092, 0.108, 0.008, 0, 0, z, DARK); // frames
  a.box(0.018, 0.018, 0.4, 0, -0.06, 0.1, DARK); // keel railgun
  a.box(0.008, 0.008, 0.06, 0, -0.06, 0.32, DARK, 0.6);
  a.greeble(0.078, 0.096, 0.17, 0, 0, 0.17, 10);
  a.greeble(0.086, 0.104, 0.2, 0, 0, -0.02, 14);
  a.pdc(0.04, 0.052, 0.24); a.pdc(-0.04, 0.052, 0.24); a.pdc(0.045, -0.054, -0.07, -1); a.pdc(-0.045, -0.054, -0.07, -1);
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) a.box(0.012, 0.012, 0.012, sx * 0.05, sy * 0.058, -0.11, DARK, 0.7); // RCS quads
  a.cyl(0.05, 0.056, 0.07, -0.155, DARK, 14); // reactor
  a.cyl(0.058, 0.058, 0.012, -0.13, HULL, 14);
  a.bell(0.06, -0.19, 0.15);
  a.windows(0.0395, 0.02, 0.1, 0.24, 6);
  a.windows(0.0435, -0.02, -0.08, 0.06, 4);
  a.box(0.03, 0.012, 0.004, 0, 0.022, 0.355, WINDOW); // bridge slit
  a.light(-0.047, 0.0, 0.0, NAV_R); a.light(0.047, 0.0, 0.0, NAV_G); a.light(0, 0.066, -0.08, STROBE);
  const corvette = a.build();

  // Frigate: a long armoured hull in plated segments, a command tower,
  // flank radiators, twin keel railguns and a heavy drive.
  const b = kit(23);
  for (let i = 0; i < 6; i++) {
    const z = 0.28 - i * 0.085;
    const w = 0.088 + (i === 1 || i === 4 ? 0.006 : 0);
    b.box(w, w, 0.082, 0, 0, z, HULL, 0.95 + (i % 2) * 0.08);
    b.greeble(w, w, 0.082, 0, 0, z, 4);
  }
  b.box(0.074, 0.074, 0.05, 0, 0, 0.345); // prow
  b.box(0.06, 0.06, 0.02, 0, 0, 0.375, DARK);
  b.box(0.05, 0.04, 0.08, 0, 0.062, 0.12); // command tower
  b.box(0.054, 0.012, 0.05, 0, 0.088, 0.115, PAINT);
  b.box(0.092, 0.016, 0.16, 0, 0.044, 0.25, PAINT); // dorsal paint band
  b.box(0.22, 0.004, 0.11, 0, 0, -0.12, DARK, 0.55); // radiators
  b.box(0.004, 0.06, 0.11, 0.115, 0, -0.12, DARK, 0.5);
  b.box(0.004, 0.06, 0.11, -0.115, 0, -0.12, DARK, 0.5);
  for (const sx of [-1, 1]) b.box(0.016, 0.016, 0.42, sx * 0.022, -0.054, 0.12, DARK); // twin railguns
  for (const [x, y, z, u] of [[0.046, 0.048, 0.3, 1], [-0.046, 0.048, 0.3, 1], [0.046, -0.048, 0.22, -1], [-0.046, -0.048, 0.22, -1], [0.046, 0.048, -0.02, 1], [-0.046, 0.048, -0.02, 1]]) b.pdc(x, y, z, u);
  b.cyl(0.055, 0.06, 0.06, -0.225, DARK, 14);
  b.bell(0.072, -0.255, 0.17);
  b.windows(0.045, 0.012, 0.18, 0.33, 7);
  b.windows(0.026, 0.07, 0.09, 0.15, 3);
  b.light(-0.116, 0.0, -0.12, NAV_R); b.light(0.116, 0.0, -0.12, NAV_G); b.light(0, 0.096, 0.1, STROBE);
  const frigate = b.build();

  // Hauler: a cab, a thin spine carrying cargo containers (a few in the
  // owner's paint), radiators and a drive.
  const c = kit(37);
  c.box(0.075, 0.065, 0.085, 0, 0, 0.3);
  c.box(0.076, 0.016, 0.05, 0, 0.034, 0.3, PAINT);
  c.box(0.04, 0.012, 0.004, 0, 0.012, 0.343, WINDOW);
  c.box(0.022, 0.022, 0.52, 0, 0, 0.03, DARK);
  for (const [i, z] of [0.19, 0.1, 0.01, -0.08].entries()) {
    for (const [sx, sy] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
      const paint = (i + (sx > 0 ? 1 : 0) + (sy > 0 ? 1 : 0)) % 3 === 0;
      c.box(0.046, 0.036, 0.08, sx * 0.026, sy * 0.021, z, paint ? PAINT : HULL, 0.8 + c.r() * 0.3);
    }
  }
  c.box(0.13, 0.003, 0.07, 0, 0.026, -0.17, DARK, 0.55);
  c.cyl(0.04, 0.046, 0.05, -0.2, DARK);
  c.bell(0.055, -0.225, 0.13);
  c.windows(0.0385, 0.01, 0.27, 0.33, 3);
  c.light(-0.07, 0.03, -0.17, NAV_R); c.light(0.07, 0.03, -0.17, NAV_G); c.light(0, 0.045, 0.3, STROBE);
  const hauler = c.build();

  // Probe: a small bus with a dish and two solar wings; no crew.
  const p = kit(41);
  p.box(0.05, 0.05, 0.07, 0, 0, 0);
  p.cyl(0.047, 0.012, 0.025, 0.05, HULL, 18);
  p.box(0.004, 0.004, 0.05, 0, 0, 0.07, DARK);
  for (const sx of [-1, 1]) { p.box(0.16, 0.004, 0.045, sx * 0.11, 0, 0, DARK, 0.45); p.box(0.03, 0.006, 0.006, sx * 0.04, 0, 0, DARK); }
  p.box(0.05, 0.008, 0.012, 0, 0.029, 0, PAINT);
  p.bell(0.02, -0.035, 0.03);
  p.light(0, 0.03, 0.02, STROBE, 0.006);
  const probe = p.build();

  const ships = [corvette, frigate, hauler];
  ships.probe = probe;
  return ships;
}

/** Hull material: PBR plating lit by the sun and the sky, with tags for paint and lights. */
export function hullMaterial(uT) {
  const pl = platingTex();
  const mat = new THREE.MeshStandardMaterial({ color: '#d4d8de', map: pl, roughnessMap: pl, bumpMap: pl, bumpScale: 0.6, metalness: 0.35, roughness: 0.5, emissive: '#06070a' });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uT = uT;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute float kind; attribute float tint; attribute vec3 iPaint; attribute float iSun; attribute float iSeed; attribute float iHull; attribute float iLit;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vKind = kind; vTint = tint; vPaint = iPaint; vSun = iSun; vSeed = iSeed; vHull = iHull; vLit = iLit;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uT;
        varying float vKind; varying float vTint; varying vec3 vPaint; varying float vSun; varying float vSeed; varying float vHull; varying float vLit;
        float isK(float k) { return 1.0 - step(0.5, abs(vKind - k)); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float dark = isK(1.0) + isK(7.0);
        float paint = isK(2.0);
        vec3 base = mix(vec3(vHull), vec3(0.24, 0.25, 0.28), dark) * vTint;
        diffuseColor.rgb *= mix(base, vPaint * 0.9 + 0.04, paint);`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.7, isK(1.0)) ;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        {
          float blink = step(fract(uT * 0.7 + vSeed), 0.06);
          float flash = step(fract(uT * 0.45 + vSeed * 1.7), 0.03);
          totalEmissiveRadiance += isK(3.0) * vec3(2.4, 1.6, 0.8) * vLit;
          totalEmissiveRadiance += isK(4.0) * vec3(6.0, 0.25, 0.15) * (0.25 + blink) * vLit;
          totalEmissiveRadiance += isK(5.0) * vec3(0.2, 6.0, 1.2) * (0.25 + blink) * vLit;
          totalEmissiveRadiance += isK(6.0) * vec3(9.0) * flash * vLit;
          totalEmissiveRadiance += isK(7.0) * vec3(0.6, 0.9, 1.6) * vLit;
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
          float core = exp(-pow(u / (w * 0.35), 2.0)) * pow(1.0 - v, 1.4);
          float sheath = exp(-pow(u / w, 2.0)) * pow(1.0 - v, 2.2);
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
  const types = [...geos, geos.probe];
  const mat = hullMaterial(uT);
  const meshes = types.map((g) => {
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
  });

  // Plumes: one instanced quad pair per burning ship.
  const pg = new THREE.InstancedBufferGeometry();
  pg.setAttribute('position', new THREE.Float32BufferAttribute([
    -1, -0.02, 0, 1, -0.02, 0, 1, 1, 0, -1, 1, 0, // jet
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0, // flare
  ], 3));
  pg.setAttribute('part', new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 1, 1, 1], 1));
  pg.setIndex([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7]);
  const plumeAttr = (n, size) => { const a = new THREE.InstancedBufferAttribute(new Float32Array(max * size), size); a.setUsage(THREE.DynamicDrawUsage); pg.setAttribute(n, a); return a; };
  const pPow = plumeAttr('iPow', 1), pSeed = plumeAttr('iSeed', 1), pTint = plumeAttr('iTint', 3);
  const plumes = new THREE.InstancedMesh(pg, plumeMaterial(uT), max);
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

  return {
    geometries: geos,
    uT,
    begin(t, pr) {
      uT.value = t;
      gMat.uniforms.uPR.value = pr;
      for (const m of meshes) m.userData.n = 0;
      nPlume = nGlint = total = 0;
    },
    /**
     * One ship. type: 0..2 hulls, 3 probe. p position, n facing (unit),
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
      }
      if (burning) {
        const i = nPlume++;
        // Nozzle at the back of the drive bell; length along -Z.
        tgt.set(0, 0, type === 1 ? -0.43 : type === 3 ? -0.07 : -0.36).multiply(sc.set(s[0], s[1], s[2])).applyQuaternion(q).add(p);
        const len = 1.9 * plume * s[2];
        m4.compose(tgt, q, sc.set(0.06 * s[0] * (type === 3 ? 0.5 : 1), 1, len));
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
    end() {
      for (const m of meshes) {
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
