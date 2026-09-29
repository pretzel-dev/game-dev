import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { icon } from './icons.js';
import { NEUTRAL, posAt, fleetState, rng, vetLevel, starPos, PERKS, EVENTS, present } from './sim.js';

export const OWNER_COLORS = ['#58b8ff', '#ff6a5a', '#ffb347'];
export const NEUTRAL_COLOR = '#8a90a6';
export const ownerColor = (o) => (o === NEUTRAL ? NEUTRAL_COLOR : OWNER_COLORS[o]);

const SUN_RADIUS = 6;
const MAX_SHIPS = 400;
const MAX_BOOMS = 120;

// ---- Procedural textures ----------------------------------------------------

function canvasTex(w, h, draw, scale = 1) {
  const c = document.createElement('canvas');
  c.width = w * scale;
  c.height = h * scale;
  const g = c.getContext('2d');
  // Draw in w x h coordinates but at `scale` times the pixels, so worlds stay
  // crisp up close.
  g.scale(scale, scale);
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const glowTex = canvasTex(128, 128, (g) => {
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.2, 'rgba(255,255,255,0.5)');
  grad.addColorStop(0.5, 'rgba(255,255,255,0.1)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
});

// Owner ring; veterans get one short gap per level cut into its upper right.
const ringTexs = [0, 1, 2, 3].map((lvl) => canvasTex(128, 128, (g) => {
  g.strokeStyle = '#fff';
  g.lineWidth = 4;
  const gap = 0.16;
  const step = 0.3;
  const start = -Math.PI / 4 - ((lvl - 1) * step) / 2; // centred on the upper right
  const cuts = Array.from({ length: lvl }, (_, k) => start + k * step);
  let from = cuts.length ? cuts[cuts.length - 1] + gap / 2 : 0;
  const to = cuts.length ? cuts[0] - gap / 2 + Math.PI * 2 : Math.PI * 2;
  g.beginPath();
  g.arc(64, 64, 58, from, to);
  g.stroke();
  for (let k = 0; k < cuts.length - 1; k++) {
    g.beginPath();
    g.arc(64, 64, 58, cuts[k] + gap / 2, cuts[k + 1] - gap / 2);
    g.stroke();
  }
}));
const ringTex = ringTexs[0];

/** Fine speckle over a whole texture, so surfaces have grain when close. */
function grain(g, w, h, r, amount) {
  for (let i = 0; i < 6000; i++) {
    g.fillStyle = r() < 0.5 ? `rgba(0,0,0,${amount})` : `rgba(255,255,255,${amount * 0.6})`;
    g.fillRect(r() * w, r() * h, 0.35, 0.35);
  }
}

// Small 3D value noise, enough for coastlines and cloud decks.
function vhash(x, y, z, s) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 2147483647) ^ Math.imul(s, 1274126177);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
function vnoise(x, y, z, s) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const fx = x - xi, fy = y - yi, fz = z - zi;
  const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy), w = fz * fz * (3 - 2 * fz);
  const L = (a, b, t) => a + (b - a) * t;
  const c = (i, j, k) => vhash(xi + i, yi + j, zi + k, s);
  return L(L(L(c(0, 0, 0), c(1, 0, 0), u), L(c(0, 1, 0), c(1, 1, 0), u), v),
    L(L(c(0, 0, 1), c(1, 0, 1), u), L(c(0, 1, 1), c(1, 1, 1), u), v), w) * 2 - 1;
}
function fbm(x, y, z, s, oct) {
  let sum = 0, amp = 0.5, f = 1;
  for (let o = 0; o < oct; o++) { sum += vnoise(x * f, y * f, z * f, s + o) * amp; f *= 2.03; amp *= 0.5; }
  return sum;
}

/** Cloud deck for a living world: swirling, banded by latitude, mostly clear. */
function cloudTex(b) {
  return canvasTex(512, 256, (g) => {
    const img = g.getImageData(0, 0, g.canvas.width, g.canvas.height);
    const { width: W, height: H, data: d } = img;
    const seed = b.id * 31 + 11;
    for (let y = 0; y < H; y++) {
      const lat = (y / H - 0.5) * Math.PI;
      const cl = Math.cos(lat);
      // Storm belts at mid latitudes, clear subtropics.
      const belt = 0.1 + 0.25 * Math.abs(Math.sin(lat * 3));
      for (let x = 0; x < W; x++) {
        const lon = (x / W) * Math.PI * 2;
        const px = Math.cos(lon) * cl, py = Math.sin(lat), pz = Math.sin(lon) * cl;
        const sw = fbm(px * 2, py * 2, pz * 2, seed + 5, 3);
        const n = fbm(px * 3 + sw, py * 6 + sw * 0.5, pz * 3 - sw, seed, 5) + belt - 0.3;
        const a = Math.max(0, Math.min(1, n * 2.6));
        const i = (y * W + x) * 4;
        d[i] = d[i + 1] = d[i + 2] = 255; d[i + 3] = a * 210;
      }
    }
    g.putImageData(img, 0, 0);
  }, 1);
}

/** Gas giant: soft horizontal bands. Rocky world: mottled continents and craters. */
function surfaceTex(b) {
  const r = rng(Math.floor(b.hue * 1e6) + b.id);
  const col = new THREE.Color();
  return canvasTex(256, 128, (g, w, h) => {
    drawSurface(g, w, h);
    grain(g, w, h, r, b.giant ? 0.05 : 0.12);
  }, b.home ? 2 : b.kind === 'planet' ? 4 : 2);

  function drawSurface(g, w, h) {
    if (b.home) {
      // A living world, drawn from 3D noise on the sphere so coastlines are
      // fractal and seamless: oceans with shelves, continents coloured by
      // latitude and height, ice caps. Clouds are a separate layer.
      const img = g.getImageData(0, 0, g.canvas.width, g.canvas.height);
      const W = img.width;
      const H = img.height;
      const seed = b.id * 17 + 3;
      const d = img.data;
      for (let y = 0; y < H; y++) {
        const lat = (y / H - 0.5) * Math.PI;
        const cl = Math.cos(lat);
        for (let x = 0; x < W; x++) {
          const lon = (x / W) * Math.PI * 2;
          const px = Math.cos(lon) * cl;
          const py = Math.sin(lat);
          const pz = Math.sin(lon) * cl;
          // Domain warp, then fractal height.
          const wx = fbm(px * 1.5, py * 1.5, pz * 1.5, seed + 9, 3) * 0.6;
          const h = fbm(px * 1.6 + wx, py * 1.6 - wx, pz * 1.6 + wx, seed, 6) - 0.04;
          const ab = Math.abs(py);
          const ice = ab > 0.86 - h * 0.25;
          let R, G, B;
          if (ice) { R = 236; G = 242; B = 248; }
          else if (h < 0) {
            // Ocean: shallow shelves turquoise, deep water dark.
            const k = Math.max(0, 1 + h * 7);
            R = 12 + 30 * k * k; G = 44 + 70 * k * k; B = 92 + 60 * k;
          } else {
            const hot = 1 - ab; // deserts near the tropics, forests elsewhere
            const dry = Math.max(0, fbm(px * 3, py * 3, pz * 3, seed + 4, 3) + (hot > 0.55 && hot < 0.85 ? 0.25 : -0.1));
            const m = Math.min(1, h * 3.2);
            R = 58 + dry * 120 + m * 50; G = 86 + dry * 60 + m * 20; B = 40 + dry * 30 + m * 30;
            if (ab > 0.7) { const t = (ab - 0.7) / 0.16; R += t * 40; G += t * 30; B += t * 40; } // tundra
          }
          const i = (y * W + x) * 4;
          d[i] = R; d[i + 1] = G; d[i + 2] = B; d[i + 3] = 255;
        }
      }
      g.putImageData(img, 0, 0);
      return;
    }
    if (b.kind === 'planet' && b.giant) {
      const base = 0.05 + b.hue * 0.12;
      for (let y = 0; y < h; y++) {
        const band = Math.sin(y * 0.18 + Math.sin(y * 0.05) * 3) * 0.5 + 0.5;
        col.setHSL(base + band * 0.04, 0.35 + band * 0.2, 0.35 + band * 0.25 + (r() - 0.5) * 0.03);
        g.fillStyle = `#${col.getHexString()}`;
        g.fillRect(0, y, w, 1);
      }
      // A great storm.
      col.setHSL(base, 0.6, 0.55);
      g.fillStyle = `#${col.getHexString()}`;
      g.beginPath();
      g.ellipse(w * r(), h * (0.3 + r() * 0.4), 14, 6, 0, 0, Math.PI * 2);
      g.fill();
    } else {
      const moon = b.kind !== 'planet';
      const hue = moon ? 0.08 : [0.08, 0.55, 0.02, 0.33][Math.floor(b.hue * 4)];
      col.setHSL(hue, moon ? 0.05 : 0.3, moon ? 0.45 : 0.35);
      g.fillStyle = `#${col.getHexString()}`;
      g.fillRect(0, 0, w, h);
      for (let i = 0; i < 90; i++) {
        col.setHSL(hue + (r() - 0.5) * 0.05, moon ? 0.05 : 0.35, 0.25 + r() * 0.3);
        g.fillStyle = `#${col.getHexString()}`;
        g.globalAlpha = 0.35;
        g.beginPath();
        g.arc(r() * w, r() * h, 2 + r() * (moon ? 8 : 22), 0, Math.PI * 2);
        g.fill();
      }
      // Craters.
      g.globalAlpha = 0.5;
      for (let i = 0; i < (moon ? 40 : 12); i++) {
        const x = r() * w;
        const y = r() * h;
        const cr = 1 + r() * 4;
        g.strokeStyle = 'rgba(0,0,0,0.5)';
        g.beginPath();
        g.arc(x, y, cr, 0, Math.PI * 2);
        g.stroke();
      }
      g.globalAlpha = 1;
      if (!moon) {
        g.fillStyle = 'rgba(255,255,255,0.8)';
        g.fillRect(0, 0, w, 5);
        g.fillRect(0, h - 5, w, 5);
      }
    }
  }
}

/** City lights: warm specks clustered into towns and cities (black elsewhere). */
function lightsTex(b) {
  const r = rng(b.id * 131 + 7);
  const t = canvasTex(256, 128, (g, w, h) => {
    g.fillStyle = '#000';
    g.fillRect(0, 0, w, h);
    const cities = b.giant ? 6 : b.kind === 'moon' ? 5 : 18;
    for (let c = 0; c < cities; c++) {
      const cx = r() * w;
      const cy = h * (0.15 + r() * 0.7);
      const n = 20 + Math.floor(r() * 60);
      for (let i = 0; i < n; i++) {
        // Dense cores thinning out to suburbs.
        const k = r() ** 2;
        g.fillStyle = r() < 0.2 ? '#fff4d0' : '#ffb95a';
        g.globalAlpha = 0.4 + r() * 0.6;
        g.fillRect((cx + (r() - 0.5) * 30 * k + w) % w, cy + (r() - 0.5) * 14 * k, 0.45, 0.45);
      }
    }
    g.globalAlpha = 1;
  }, 4);
  return t;
}

// Sun position in view space, shared by every material that glows at night.
const sunView = { value: new THREE.Vector3() };

/** Makes a material's emissive map (city lights) show only on the night side. */
function nightOnly(mat) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uSunView = sunView;
    sh.fragmentShader = `uniform vec3 uSunView;\n${sh.fragmentShader}`.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
      {
        float day = dot(normal, normalize(uSunView + vViewPosition));
        totalEmissiveRadiance *= smoothstep(0.12, -0.25, day);
      }`,
    );
  };
  return mat;
}

// ---- Meshes -------------------------------------------------------------------

/**
 * Three hull types in a hard-sci-fi style: no aerodynamics, flat fronts,
 * stacked pressure hulls, trusses, radiators, and a big drive section. All are
 * built along +Z (front forward, drive at the back) and merged.
 */
function shipGeometries() {
  const X = Math.PI / 2;
  // Each part is tagged: hull (light), dark (engines, radiators, trusses) or
  // accent (painted in the owner's colour, as a separate mesh).
  const tag = (g, t) => ((g.userData.tag = t), g);
  const box = (w, h, d, x = 0, y = 0, z = 0, t = 'hull') => tag(new THREE.BoxGeometry(w, h, d).translate(x, y, z), t);
  const cyl = (r1, r2, l, z, t = 'hull', seg = 10) => tag(new THREE.CylinderGeometry(r1, r2, l, seg).rotateX(X).translate(0, 0, z), t);
  const drive = (r, z) => [
    cyl(r * 0.9, r * 1.05, 0.1, z, 'dark'), // engine block
    tag(new THREE.CylinderGeometry(r * 0.45, r * 0.9, 0.14, 12, 1, true).rotateX(-X).translate(0, 0, z - 0.11), 'dark'), // bell
  ];
  const HULL = new THREE.Color('#c9ced6');
  const DARK = new THREE.Color('#3b414c');
  const build = (parts) => {
    const base = [];
    const accent = [];
    for (const g of parts) {
      const n = g.toNonIndexed();
      if (g.userData.tag === 'accent') { accent.push(n); continue; }
      const c = g.userData.tag === 'dark' ? DARK : HULL;
      const col = new Float32Array(n.attributes.position.count * 3);
      for (let i = 0; i < col.length; i += 3) col.set([c.r, c.g, c.b], i);
      n.setAttribute('color', new THREE.BufferAttribute(col, 3));
      base.push(n);
    }
    return { base: mergeGeometries(base), accent: mergeGeometries(accent) };
  };
  // Frigate: stacked hull sections on a spine, flat bow, radiators amidships.
  const frigate = build([
    box(0.16, 0.14, 0.16, 0, 0, 0.26),
    box(0.165, 0.03, 0.12, 0, 0.06, 0.26, 'accent'), // bow stripe
    box(0.12, 0.12, 0.06, 0, 0, 0.36, 'accent'), // bow cap
    cyl(0.1, 0.1, 0.18, 0.08),
    cyl(0.105, 0.105, 0.03, 0.08, 'accent'), // hull band
    box(0.2, 0.18, 0.12, 0, 0, -0.08, 'dark'),
    box(0.36, 0.008, 0.14, 0, 0.05, -0.08, 'dark'),
    box(0.36, 0.008, 0.14, 0, -0.05, -0.08, 'dark'),
    box(0.035, 0.035, 0.08, 0.1, 0.07, 0.26, 'dark'),
    box(0.035, 0.035, 0.08, -0.1, -0.07, 0.26, 'dark'),
    ...drive(0.1, -0.2),
  ]);
  // Gunboat: squat and wide, a keel of armour and twin gun pods.
  const gunboat = build([
    box(0.26, 0.1, 0.4, 0, 0, 0.05),
    box(0.2, 0.06, 0.1, 0, 0.07, 0.12, 'accent'), // bridge
    box(0.06, 0.06, 0.38, 0.17, 0, 0.08, 'accent'), // gun pods
    box(0.06, 0.06, 0.38, -0.17, 0, 0.08, 'accent'),
    box(0.02, 0.02, 0.14, 0.17, 0, 0.32, 'dark'),
    box(0.02, 0.02, 0.14, -0.17, 0, 0.32, 'dark'),
    box(0.3, 0.12, 0.08, 0, 0, -0.18, 'dark'),
    ...drive(0.11, -0.26),
  ]);
  // Carrier: a long open truss with a command block, cargo pods and radiators.
  const carrier = build([
    box(0.14, 0.14, 0.12, 0, 0, 0.32),
    box(0.145, 0.04, 0.125, 0, 0.05, 0.32, 'accent'),
    box(0.03, 0.03, 0.56, 0.05, 0.05, 0, 'dark'),
    box(0.03, 0.03, 0.56, -0.05, -0.05, 0, 'dark'),
    box(0.03, 0.03, 0.56, 0.05, -0.05, 0, 'dark'),
    box(0.03, 0.03, 0.56, -0.05, 0.05, 0, 'dark'),
    box(0.1, 0.1, 0.1, 0.12, 0, 0.1),
    box(0.1, 0.1, 0.1, -0.12, 0, 0.1, 'accent'),
    box(0.1, 0.1, 0.1, 0, 0.12, -0.04),
    box(0.42, 0.006, 0.1, 0, 0, -0.14, 'dark'),
    box(0.18, 0.16, 0.08, 0, 0, -0.22),
    ...drive(0.09, -0.3),
  ]);
  return [frigate, gunboat, carrier];
}

function stationMesh(size) {
  const m = new THREE.MeshStandardMaterial({ color: '#c9ced8', metalness: 0.6, roughness: 0.4 });
  const g = new THREE.Group();
  g.add(new THREE.Mesh(new THREE.TorusGeometry(size, size * 0.12, 8, 32), m));
  // Lit windows around the ring, shown once someone runs the station.
  const pts = [];
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * size * 1.13, Math.sin(a) * size * 1.13, (i % 3 - 1) * size * 0.05));
  }
  const windows = new THREE.Points(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.PointsMaterial({ color: '#ffd08a', size: 2, sizeAttenuation: false, transparent: true, opacity: 0.9 }),
  );
  windows.name = 'windows';
  windows.visible = false;
  g.add(windows);
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(size * 0.15, size * 0.15, size * 1.4, 12).rotateX(Math.PI / 2), m));
  for (let i = 0; i < 4; i++) {
    const spoke = new THREE.Mesh(new THREE.CylinderGeometry(size * 0.04, size * 0.04, size * 2, 6), m);
    spoke.rotation.z = (i * Math.PI) / 4;
    g.add(spoke);
  }
  // Solar panels.
  const panel = new THREE.MeshStandardMaterial({ color: '#2a3f7a', metalness: 0.3, roughness: 0.6, side: THREE.DoubleSide });
  for (const s of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(size * 0.5, size * 1.4), panel);
    p.position.z = s * size * 1.1;
    p.rotation.y = Math.PI / 2;
    g.add(p);
  }
  return g;
}

function asteroidMesh(b) {
  const r = rng(b.id * 97 + 1);
  // Merge shared vertices first so the displacement is smooth (no torn,
  // triangular facets), then shape with low-frequency noise and a few craters.
  let geo = new THREE.IcosahedronGeometry(b.size, 5);
  geo.deleteAttribute('normal');
  geo.deleteAttribute('uv');
  geo = mergeVertices(geo);
  const waves = Array.from({ length: 5 }, () => ({
    d: new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize(),
    f: 0.6 + r() * 1.2,
    ph: r() * 6.28,
    a: 0.05 + r() * 0.07,
  }));
  // Finer ripples for surface detail.
  for (let i = 0; i < 4; i++) waves.push({ d: new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize(), f: 3 + r() * 3, ph: r() * 6.28, a: 0.015 + r() * 0.015 });
  const craters = Array.from({ length: 6 }, () => ({
    d: new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize(),
    size: 0.2 + r() * 0.25,
  }));
  const stretch = new THREE.Vector3(1.2 + r() * 0.5, 0.8 + r() * 0.2, 0.9 + r() * 0.3);
  const p = geo.attributes.position;
  const v = new THREE.Vector3();
  const n = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    n.copy(v).normalize();
    let k = 1;
    for (const w of waves) k += w.a * Math.sin(n.dot(w.d) * w.f * 3 + w.ph);
    for (const c of craters) {
      const d = n.distanceTo(c.d);
      if (d < c.size) k -= 0.12 * Math.cos((d / c.size) * Math.PI * 0.5) ** 2;
      else if (d < c.size * 1.25) k += 0.03; // raised rim
    }
    v.multiplyScalar(k).multiply(stretch);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: '#8a7f72', roughness: 0.95, metalness: 0.05 }));
}

function orbitLine(b) {
  const pts = [];
  for (let i = 0; i <= 128; i++) {
    const th = (i / 128) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(th) * b.r, Math.sin(th) * b.r * b.incl, Math.sin(th) * b.r));
  }
  return new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color: '#3a4460', transparent: true, opacity: b.parent === null ? 0.5 : 0.35 }),
  );
}

/** A thin atmosphere: a shell that glows toward the limb (fresnel). */
function atmosphere(b) {
  const color = new THREE.Color(b.home ? '#6fb6ff' : b.giant ? '#e8d2a8' : '#b9c8dc');
  const strength = b.home ? 1.1 : b.giant ? 0.45 : 0.6;
  return new THREE.Mesh(
    new THREE.SphereGeometry(b.size * 1.05, 48, 32),
    new THREE.ShaderMaterial({
      uniforms: { color: { value: color }, strength: { value: strength } },
      vertexShader: `varying vec3 vN; varying vec3 vV;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal);
          vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `uniform vec3 color; uniform float strength; varying vec3 vN; varying vec3 vV;
        void main() {
          float rim = pow(1.0 - max(dot(vN, vV), 0.0), 3.0);
          gl_FragColor = vec4(color, rim * strength);
        }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
}

// ---- Structures -------------------------------------------------------------

const structMat = new THREE.MeshStandardMaterial({ color: '#b9c0cc', metalness: 0.6, roughness: 0.45 });
const ghostMat = new THREE.MeshBasicMaterial({ color: '#9fd4ff', transparent: true, opacity: 0.35, wireframe: true });

/** A structure's mesh, sized to the world: yards orbit, guns and mines sit on the surface. */
function structureMesh(type, b, k, done, level = 1) {
  const mat = done ? structMat : ghostMat;
  const s = Math.max(0.25, b.size * 0.14);
  const g = new THREE.Group();
  if (type === 'shipyard') {
    // An open gantry ring in low orbit with a docking spine.
    g.add(new THREE.Mesh(new THREE.TorusGeometry(b.size * 1.35, s * 0.12, 6, 48), mat));
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      const truss = new THREE.Mesh(new THREE.BoxGeometry(s * 0.25, s * 0.25, s * 1.2), mat);
      truss.position.set(Math.cos(a) * b.size * 1.35, 0, Math.sin(a) * b.size * 1.35);
      truss.lookAt(0, 0, 0);
      g.add(truss);
    }
    g.rotation.x = Math.PI / 2 + 0.35;
    return g;
  }
  if (type === 'skimmer') {
    // Gas skimmers: scoop craft dipping through the upper cloud deck, one per level.
    const rad = b.size * 1.08;
    for (let i = 0; i < level; i++) {
      const a = (i / level) * Math.PI * 2 + k;
      const craft = new THREE.Group();
      const body = new THREE.Mesh(new THREE.ConeGeometry(s * 0.35, s * 1.4, 6), mat);
      body.rotation.z = Math.PI / 2;
      const tank = new THREE.Mesh(new THREE.SphereGeometry(s * 0.3, 8, 6), mat);
      tank.position.x = -s * 0.6;
      craft.add(body, tank);
      craft.position.set(Math.cos(a) * rad, 0, Math.sin(a) * rad);
      craft.rotation.y = -a;
      g.add(craft);
    }
    g.rotation.x = 0.25 + k * 0.3;
    return g;
  }
  // Surface structures at a fixed spot, standing out from the ground.
  const r = rng(b.id * 17 + k * 101 + (type === 'mine' ? 5 : 0));
  const dir = new THREE.Vector3(r() - 0.5, (r() - 0.5) * 0.9, r() - 0.5).normalize();
  if (type === 'defence') {
    // One barrel per level on a wider, heavier mount.
    const w = 1 + (level - 1) * 0.3;
    const base = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.5 * w, s * 0.6 * w, s * 0.35, 8), mat);
    g.add(base);
    for (let i = 0; i < level; i++) {
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.08, s * 0.08, s * (0.9 + level * 0.15), 6), mat);
      barrel.position.set((i - (level - 1) / 2) * s * 0.25, s * 0.45, s * 0.25);
      barrel.rotation.x = 0.7;
      g.add(barrel);
    }
    if (level > 1) {
      const dome = new THREE.Mesh(new THREE.SphereGeometry(s * 0.3 * w, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat);
      dome.position.y = s * 0.17;
      g.add(dome);
    }
  } else if (type === 'exchange') {
    // Orbital exchange: a slim spire with a tether up to a counting-house in orbit.
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.12, s * 0.35, s * 1.8, 6), mat);
    spire.position.y = s * 0.9;
    g.add(spire);
    const tether = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.02, s * 0.02, s * 3, 3), mat);
    tether.position.y = s * 3.2;
    g.add(tether);
    const hub = new THREE.Mesh(new THREE.TorusGeometry(s * (0.4 + level * 0.12), s * 0.08, 6, 20), mat);
    hub.position.y = s * 4.7;
    hub.rotation.x = Math.PI / 2;
    g.add(hub);
    if (done) {
      const light = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ffe39a', blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      light.position.y = s * 4.7;
      light.scale.setScalar(s * (1.2 + level * 0.4));
      g.add(light);
    }
  } else if (type === 'lab') {
    // Research station: a dish per level on a mast, with a lit window band.
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.16, s * 1.1, 6), mat);
    mast.position.y = s * 0.55;
    g.add(mast, new THREE.Mesh(new THREE.BoxGeometry(s * 0.8, s * 0.3, s * 0.8), mat));
    for (let i = 0; i < level; i++) {
      const dish = new THREE.Mesh(new THREE.SphereGeometry(s * (0.45 - i * 0.08), 12, 6, 0, Math.PI * 2, 0, Math.PI / 3), mat);
      dish.position.y = s * (0.7 + i * 0.35);
      dish.rotation.set(Math.PI + 0.5, i * 2.1, 0);
      g.add(dish);
    }
    if (done) {
      const light = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#9fd4ff', blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      light.position.y = s * (1.1 + level * 0.3);
      light.scale.setScalar(s * (1 + level * 0.4));
      g.add(light);
    }
  } else {
    // Mine: a rig with one derrick and work light per level, on a growing pad.
    g.add(new THREE.Mesh(new THREE.BoxGeometry(s * (0.9 + (level - 1) * 0.4), s * 0.4, s * 0.7), mat));
    for (let i = 0; i < level; i++) {
      const x0 = (i - (level - 1) / 2) * s * 0.45;
      const tower = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.08, s * 0.14, s * (1.4 - i * 0.2), 5), mat);
      tower.position.set(x0, s * 0.7, 0);
      g.add(tower);
      if (done) {
        const light = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ffc070', blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
        light.position.set(x0, s * (1.5 - i * 0.2), 0);
        light.scale.setScalar(s * 1.6);
        g.add(light);
      }
    }
  }
  g.position.copy(dir).multiplyScalar(b.size * (b.kind === 'asteroid' ? 1.1 : 1));
  g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  return g;
}

// ---- View ---------------------------------------------------------------------

export function createView(canvas, labelRoot) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, logarithmicDepthBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#03040a');
  const camera = new THREE.PerspectiveCamera(45, 1, 0.02, 20000);

  // Distant stars.
  {
    const n = 2500;
    const pos = new Float32Array(n * 3);
    const v = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      v.randomDirection().multiplyScalar(4000 + Math.random() * 2000);
      pos.set([v.x, v.y, v.z], i * 3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: 1.3, sizeAttenuation: false, color: '#9aa6c8', transparent: true, opacity: 0.7 })));
  }

  // The sun: bright core, layered glow, and the only real light.
  // Churning granulation with dark-edged cells, limb darkening, and slow
  // brighter faculae, dark sunspots, and a soft glow around it.
  const sunTime = { value: 0 };
  const sunGroup = new THREE.Group();
  scene.add(sunGroup);
  sunGroup.add(new THREE.Mesh(new THREE.SphereGeometry(SUN_RADIUS, 64, 48), new THREE.ShaderMaterial({
    uniforms: { uT: sunTime },
    vertexShader: `varying vec3 vP; varying vec3 vN; varying vec3 vV;
      void main() {
        vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `uniform float uT; varying vec3 vP; varying vec3 vN; varying vec3 vV;
      float h(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      float n3(vec3 p) {
        vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(h(i), h(i + vec3(1,0,0)), f.x), mix(h(i + vec3(0,1,0)), h(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(h(i + vec3(0,0,1)), h(i + vec3(1,0,1)), f.x), mix(h(i + vec3(0,1,1)), h(i + vec3(1,1,1)), f.x), f.y), f.z);
      }
      float fbm(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += n3(p) * a; p *= 2.1; a *= 0.5; } return s; }
      void main() {
        vec3 p = normalize(vP);
        float t = uT * 0.02;
        float warp = fbm(p * 3.0 + t);
        float cells = fbm(p * 9.0 + warp * 2.0 - t * 2.0);
        float spots = smoothstep(0.66, 0.74, fbm(p * 2.6 + vec3(0.0, t * 0.3, 0.0)));
        float pen = smoothstep(0.6, 0.66, fbm(p * 2.6 + vec3(0.0, t * 0.3, 0.0)));
        float fac = smoothstep(0.55, 0.62, fbm(p * 5.0 - t * 0.5)) * (1.0 - pen);
        float mu = max(dot(vN, vV), 0.0);
        float limb = 0.45 + 0.55 * pow(mu, 0.5);
        vec3 hot = vec3(1.0, 0.96, 0.82), mid = vec3(1.0, 0.72, 0.32), cool = vec3(0.85, 0.35, 0.1);
        vec3 c = mix(mid * 0.85, hot, smoothstep(0.4, 0.75, cells));
        c = mix(c, cool, (1.0 - limb) * 0.8);
        c += fac * 0.18 * hot;
        c *= 1.0 - pen * 0.35 - spots * 0.5;
        gl_FragColor = vec4(c * (0.55 + 0.4 * limb), 1.0);
      }`,
  })));
  // Prominences: glowing loops of plasma rising off the surface, each
  // swelling and fading on its own clock, then reappearing somewhere else.
  const proms = [];
  {
    const r = rng(7);
    const up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < 9; i++) {
      const size = 0.7 + r() * 1.3;
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(size, 0.07 + r() * 0.08, 6, 28, Math.PI),
        new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.04 + r() * 0.05, 1, 0.55), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }),
      );
      const place = () => {
        const n = new THREE.Vector3().randomDirection();
        m.position.copy(n).multiplyScalar(SUN_RADIUS * 0.97);
        m.quaternion.setFromUnitVectors(up, n);
        m.rotateY(Math.random() * Math.PI);
      };
      place();
      proms.push({ m, place, phase: r() * 40, period: 25 + r() * 30, peak: 0.5 + r() * 0.4, grow: size });
      sunGroup.add(m);
    }
  }
  for (const [s, c, o] of [[18, '#fff0c0', 0.5], [40, '#ffd27a', 0.35], [110, '#ff9a4a', 0.2]]) {
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: c, opacity: o, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    glow.scale.setScalar(s);
    sunGroup.add(glow);
  }
  // Binary systems: a second, smaller star (same look) circling with the first.
  const sun2 = sunGroup.clone();
  sun2.visible = false;
  sun2.add(new THREE.PointLight('#ffd9b0', 1.4, 0, 0)); // lights its own worlds
  scene.add(sun2);
  scene.add(new THREE.PointLight('#fff1dd', 3, 0, 0));
  scene.add(new THREE.AmbientLight('#26304a', 0.35));

  const shipGeos = shipGeometries();
  const world = new THREE.Group();
  scene.add(world);
  let views = [];

  const orbit = { az: 0.4, pol: 0.9, dist: 380, minDist: 1.2, maxDist: 900, target: new THREE.Vector3(), vaz: 0, vpol: 0, follow: null };

  let companionPath = null;
  function build(game) {
    world.clear();
    labelRoot.innerHTML = '';
    fleetLabels.length = 0;
    views = game.bodies.map((b) => {
      const g = new THREE.Group();
      let body;
      let hulk = null;
      let tail = null;
      if (b.kind === 'station') body = stationMesh(b.size);
      else if (b.kind === 'asteroid') body = asteroidMesh(b);
      else if (b.visitor) {
        // Comet: an icy nucleus with a tail streaming away from the sun.
        // Derelict: a dark hulk. The same body plays either part.
        body = asteroidMesh(b);
        // Two soft tails of glowing puffs: a straight blue ion tail pointing
        // straight away from the sun, and a paler dust tail that curves back
        // along the path; plus a bright coma round the nucleus.
        tail = new THREE.Group();
        const puff = (color) => new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
        tail.userData.ion = Array.from({ length: 26 }, () => puff('#9fd0ff'));
        tail.userData.dust = Array.from({ length: 22 }, () => puff('#fff0cf'));
        tail.userData.coma = puff('#e8f6ff');
        for (const sp of [...tail.userData.ion, ...tail.userData.dust, tail.userData.coma]) tail.add(sp);
        g.add(tail);
        hulk = stationMesh(0.7);
        g.add(hulk);
      }
      else {
        body = new THREE.Mesh(
          new THREE.SphereGeometry(b.size, 48, 32),
          nightOnly(new THREE.MeshStandardMaterial({
            map: surfaceTex(b), roughness: 1, metalness: 0,
            emissiveMap: lightsTex(b), emissive: '#ffd08a', emissiveIntensity: 0,
          })),
        );
        body.rotation.z = 0.2 + b.hue * 0.3;
        if (b.kind === 'planet') g.add(atmosphere(b));
        if (b.home) {
          const clouds = new THREE.Mesh(
            new THREE.SphereGeometry(b.size * 1.012, 48, 32),
            new THREE.MeshStandardMaterial({ map: cloudTex(b), transparent: true, depthWrite: false, roughness: 1 }),
          );
          clouds.name = 'clouds';
          body.add(clouds);
        }
        if (b.giant && b.hue > 0.4) {
          const ring = new THREE.Mesh(
            new THREE.RingGeometry(b.size * 1.4, b.size * 2.2, 64),
            new THREE.MeshStandardMaterial({ color: '#c8b89a', transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
          );
          ring.rotation.x = Math.PI / 2 - 0.25;
          g.add(ring);
        }
      }
      g.add(body);
      const surface = new THREE.Group();
      body.add(surface);
      // Owner marker: a thin ring that always faces the camera.
      const mark = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, transparent: true, depthWrite: false, depthTest: false, opacity: 0.8 }));
      mark.scale.setScalar(b.size * 3.2);
      g.add(mark);
      world.add(g);
      // Orbit: moons' orbits ride with their planet.
      const line = orbitLine(b);
      const lineHolder = new THREE.Group();
      lineHolder.add(line);
      world.add(lineHolder);
      const label = document.createElement('div');
      label.className = 'lbl';
      labelRoot.appendChild(label);
      if (b.visitor) lineHolder.visible = false;
      // Perks with a reach (fuel depot, fortress): a ring on the plane of the
      // orbits showing it, shown while the world is selected or looked at.
      let reach = null;
      if (b.perk && PERKS[b.perk].range) {
        const rr = PERKS[b.perk].range;
        const pts = [];
        for (let i = 0; i <= 96; i++) { const a = (i / 96) * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * rr, 0, Math.sin(a) * rr)); }
        reach = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineDashedMaterial({ color: '#ffd479', transparent: true, opacity: 0.55, dashSize: 2.5, gapSize: 2 }));
        reach.computeLineDistances();
        reach.visible = false;
        world.add(reach);
      }
      return { b, g, body, surface, mark, lineHolder, label, shown: '', owner: null, pulse: 0, sig: null, structs: null, hulk, tail, reach };
    });
    // Binary: the companion sun's (eccentric) path, so you can see where it's headed.
    if (companionPath) { companionPath.removeFromParent(); companionPath = null; }
    if (game.stars && game.stars[1]) {
      const pts = [];
      for (let i = 0; i <= 256; i++) { const q = starPos(game, 1, (i / 256) * game.stars[1].period); pts.push(new THREE.Vector3(q.x, q.y, q.z)); }
      companionPath = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineDashedMaterial({ color: '#ffb070', transparent: true, opacity: 0.35, dashSize: 4, gapSize: 4 }));
      companionPath.computeLineDistances();
      world.add(companionPath);
    }
  }

  // Ships: meshes with a drive plume and a far-away glint, pooled.
  const ships = [];
  function ship(i) {
    if (i >= MAX_SHIPS) return null;
    if (!ships[i]) {
      const mesh = new THREE.Mesh(shipGeos[0].base, new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.55, roughness: 0.45 }));
      // Owner-coloured paint: stripes, bows and pods, lit a little so it reads.
      const accent = new THREE.Mesh(shipGeos[0].accent, new THREE.MeshStandardMaterial({ metalness: 0.3, roughness: 0.5 }));
      mesh.add(accent);
      const plume = new THREE.Mesh(
        new THREE.ConeGeometry(0.07, 1, 10, 1, true).rotateX(-Math.PI / 2).translate(0, 0, -0.92),
        new THREE.MeshBasicMaterial({ color: '#9fd4ff', transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }),
      );
      mesh.add(plume);
      const glint = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      scene.add(mesh, glint);
      ships[i] = { mesh, accent, plume, glint };
    }
    return ships[i];
  }

  // Routes and intercept points.
  const routeGeo = new THREE.BufferGeometry();
  const SEGS = 16; // route curves are drawn as this many segments
  const routePos = new Float32Array(200 * SEGS * 6);
  const routeCol = new Float32Array(200 * SEGS * 6);
  routeGeo.setAttribute('position', new THREE.BufferAttribute(routePos, 3));
  routeGeo.setAttribute('color', new THREE.BufferAttribute(routeCol, 3));
  const routes = new THREE.LineSegments(routeGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.45 }));
  routes.frustumCulled = false;
  scene.add(routes);
  const ghosts = [];
  function ghost(i) {
    if (!ghosts[i]) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, transparent: true, depthWrite: false, opacity: 0.5 }));
      scene.add(s);
      ghosts[i] = s;
    }
    return ghosts[i];
  }

  // Order preview: dashed path to where the target will be.
  const previewGeo = new THREE.BufferGeometry().setFromPoints(Array.from({ length: 33 }, () => new THREE.Vector3()));
  const preview = new THREE.Line(previewGeo, new THREE.LineDashedMaterial({ color: OWNER_COLORS[0], dashSize: 1.5, gapSize: 1 }));
  preview.frustumCulled = false;
  scene.add(preview);

  // Explosions and weapon tracers.
  const booms = [];
  let boomNext = 0;
  function boom(p, color, size, life) {
    let s = booms[boomNext];
    if (!s) {
      s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      s.userData = {};
      scene.add(s);
      booms[boomNext] = s;
    }
    boomNext = (boomNext + 1) % MAX_BOOMS;
    s.position.copy(p);
    s.material.color.set(color);
    Object.assign(s.userData, { age: 0, life, size });
    s.visible = true;
  }
  const MAX_SHOTS = 240;
  const shots = [];
  function shoot(a, b, color, lvl = 0, pd = false) {
    let sh = shots.find((x) => !x.live);
    if (!sh) {
      if (shots.length >= MAX_SHOTS) return;
      sh = { a: new THREE.Vector3(), b: new THREE.Vector3(), c: new THREE.Color() };
      shots.push(sh);
    }
    sh.live = true;
    sh.a.copy(a);
    sh.b.copy(b);
    sh.color = color;
    // Light the shooter's colour towards white so rounds read as hot.
    // Guns by research: tracers, then coilgun slugs, then railgun streaks.
    sh.c.set(color).lerp(new THREE.Color('#ffffff'), [0.45, 0.6, 0.85][lvl]);
    sh.tail = [0.18, 0.3, 1][lvl];
    sh.age = 0;
    sh.life = lvl === 2 ? 0.16 : THREE.MathUtils.clamp(a.distanceTo(b) / (lvl ? 24 : 14), 0.1, 0.7);
    // Point-defence drones swat some rounds short of the target.
    sh.pd = pd && Math.random() < 0.3;
    if (sh.pd) sh.b.lerpVectors(a, b, 0.7 + Math.random() * 0.2);
  }
  const tracerGeo = new THREE.BufferGeometry();
  const tracerPos = new Float32Array(MAX_SHOTS * 6);
  const tracerCol = new Float32Array(MAX_SHOTS * 6);
  tracerGeo.setAttribute('position', new THREE.BufferAttribute(tracerPos, 3));
  tracerGeo.setAttribute('color', new THREE.BufferAttribute(tracerCol, 3));
  const tracers = new THREE.LineSegments(tracerGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  tracers.frustumCulled = false;
  scene.add(tracers);

  const tmp = new THREE.Vector3();
  const tmp2 = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const perp = new THREE.Vector3();
  const UP = new THREE.Vector3(0, 1, 0);
  const ppuAt = (p) => window.innerHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.distanceTo(p));
  const hash = (a, b) => {
    let x = Math.imul(a ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(b + 0x632be5ab, 0xc2b2ae35);
    x ^= x >>> 15;
    x = Math.imul(x, 0x2c1b3c6d);
    return ((x ^ (x >>> 12)) >>> 0) / 4294967296;
  };

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  const bodyPos = [];
  const fleetLabels = [];
  function fleetLabel(i) {
    if (!fleetLabels[i]) {
      const el = document.createElement('div');
      el.className = 'flbl';
      labelRoot.appendChild(el);
      fleetLabels[i] = el;
    }
    return fleetLabels[i];
  }

  /**
   * Places a ship mesh (with glint and plume) at p, nose along n. `id` picks
   * its hull and small variations (length, paint), stable for that ship.
   */
  /** Keep ships outside worlds (launching from a planet, a moon passing a fleet). */
  function unclip(p) {
    for (const v of views) {
      const q = bodyPos[v.b.id];
      if (!q) continue;
      const min = v.b.size * 1.25 + 0.25;
      const dx = p.x - q.x, dy = p.y - q.y, dz = p.z - q.z;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 >= min * min) continue;
      const d = Math.sqrt(d2);
      if (d < 1e-6) { p.x = q.x + min; continue; }
      const k = min / d;
      p.set(q.x + dx * k, q.y + dy * k, q.z + dz * k);
    }
  }
  function placeShip(sh, p, n, color, burning, t, seed, id = seed, plume = 1) {
    sh.mesh.visible = true;
    const v = Math.floor(hash(id, 3) * shipGeos.length);
    if (sh.mesh.geometry !== shipGeos[v].base) {
      sh.mesh.geometry = shipGeos[v].base;
      sh.accent.geometry = shipGeos[v].accent;
    }
    const k = 0.9 + hash(id, 5) * 0.25;
    sh.mesh.scale.set(0.8, 0.8, 0.8 * k);
    // A slight per-ship tint on the hull (vertex colours carry the light/dark split).
    sh.mesh.material.color.setHSL(0.6, 0.05 + hash(id, 9) * 0.08, 0.85 + hash(id, 11) * 0.15);
    unclip(p);
    sh.mesh.position.copy(p);
    tmp2.copy(p).add(n);
    sh.mesh.lookAt(tmp2);
    sh.accent.material.color.set(color);
    sh.accent.material.emissive.set(color).multiplyScalar(0.35);
    sh.plume.visible = burning;
    if (burning) sh.plume.scale.set(0.8 + plume * 0.2, 0.8 + plume * 0.2, plume * (0.8 + Math.sin(t * 40 + seed) * 0.15));
    // Visible from afar as a point of light; brighter while the drive burns.
    const ppu = ppuAt(p);
    sh.glint.visible = true;
    sh.glint.position.copy(p);
    sh.glint.material.color.set(burning ? '#cfe8ff' : color);
    sh.glint.material.opacity = ppu > 60 ? 0 : burning ? 1 : 0.7;
    sh.glint.scale.setScalar((burning ? 9 : 5) / ppu);
  }

  function render(game, ui, dt, t) {
    const now = game.time;
    sunTime.value = t;
    const stars = game.stars || [{ r: 0, period: 1, phase: 0, size: 1 }];
    stars.slice(0, 2).forEach((st, i) => {
      const g = i ? sun2 : sunGroup;
      const q = starPos(game, i, now);
      g.visible = true;
      g.position.set(q.x, q.y, q.z);
      g.scale.setScalar(st.size);
    });
    if (stars.length < 2) sun2.visible = false;
    for (const pr of proms) {
      const u = ((t + pr.phase) % pr.period) / pr.period;
      if (u < pr.lastU) pr.place();
      pr.lastU = u;
      pr.m.material.opacity = Math.sin(u * Math.PI) ** 2 * pr.peak;
      pr.m.scale.setScalar(0.6 + u * 0.6);
    }
    const techOf = (o, k) => (o >= 0 && game.tech ? game.tech[o][k] : 0);
    // Camera: follow the focused body, with inertia on rotation.
    for (const v of views) {
      const p = posAt(game, v.b, now);
      bodyPos[v.b.id] = p;
    }
    // Keep the view centre inside the system so it can't drift off into space.
    let extent = 0;
    for (const v of views) if (present(game, v.b, now)) extent = Math.max(extent, Math.hypot(bodyPos[v.b.id].x, bodyPos[v.b.id].z));
    extent = extent * 1.2 + 20;
    const flat = Math.hypot(orbit.target.x, orbit.target.z);
    if (flat > extent) { orbit.target.x *= extent / flat; orbit.target.z *= extent / flat; }
    orbit.target.y = THREE.MathUtils.clamp(orbit.target.y, -extent * 0.3, extent * 0.3);
    if (orbit.follow === null) orbit.target.y *= 1 - Math.min(1, dt * 2); // drift back to the plane of the orbits
    if (orbit.follow !== null) {
      const p = bodyPos[orbit.follow];
      orbit.target.lerp(tmp.set(p.x, p.y, p.z), Math.min(1, dt * 6));
    }
    if (!ui.dragging) {
      orbit.az += orbit.vaz;
      orbit.pol += orbit.vpol;
      orbit.vaz *= 0.92;
      orbit.vpol *= 0.92;
    }
    if (orbit.goalDist) {
      orbit.dist += (orbit.goalDist - orbit.dist) * Math.min(1, dt * 4);
      if (Math.abs(orbit.goalDist - orbit.dist) < 0.01 * orbit.dist) orbit.goalDist = null;
    }
    orbit.pol = THREE.MathUtils.clamp(orbit.pol, 0.15, Math.PI - 0.15);
    orbit.dist = THREE.MathUtils.clamp(orbit.dist, orbit.minDist, orbit.maxDist);
    camera.position.setFromSphericalCoords(orbit.dist, orbit.pol, orbit.az).add(orbit.target);
    camera.lookAt(orbit.target);
    camera.updateMatrixWorld();

    const w = window.innerWidth;
    const h = window.innerHeight;
    let used = 0;
    sunView.value.set(0, 0, 0).applyMatrix4(camera.matrixWorldInverse);

    // Moons and stations crowded against their planet on screen hide their
    // label; their ship counts ride on the planet's label instead.
    // Hostile fleets on their way to each world: count and soonest arrival.
    // Fog of war: what the player's sensors and intel reveal.
    const vis = ui.vis;
    const knowsWorld = (b) => !vis || vis.bodies.has(b.id);
    const seesFleet = (f) => !vis || f.owner === vis.owner || vis.sees(fleetState(f, now));
    // Intel II: routes and landing points; Intel III: arrival times and warnings.
    const knowsDest = (f) => !vis || f.owner === vis.owner || (vis.intel >= 2 && seesFleet(f));
    // A listening post warns of anything heading for your worlds.
    const knowsEta = (f) => !vis || f.owner === vis.owner || (vis.intel >= 3 && seesFleet(f)) || (vis.warn && game.bodies[f.to].owner === vis.owner);
    const knowsSize = (f) => !vis || f.owner === vis.owner || vis.intel >= 1;
    const incoming = new Map();
    for (const f of game.fleets) {
      if (f.probe) continue;
      const tb = game.bodies[f.to];
      // Enemy arrivals (with intel), and your own reinforcements, always.
      if (f.owner === tb.owner ? f.owner !== (vis ? vis.owner : 0) : !knowsEta(f)) continue;
      const left = f.T - (now - f.t0);
      const k = `${f.to}:${f.owner}`;
      const cur = incoming.get(k) || { to: f.to, owner: f.owner, n: 0, eta: Infinity, sized: knowsSize(f) };
      cur.n += f.n;
      cur.eta = Math.min(cur.eta, left);
      incoming.set(k, cur);
    }
    const incomingTo = new Map();
    for (const x of incoming.values()) {
      if (!incomingTo.has(x.to)) incomingTo.set(x.to, []);
      incomingTo.get(x.to).push(x);
    }
    const crowded = new Set();
    const extras = new Map();
    for (const v of views) {
      const b = v.b;
      if (b.parent === null || ui.selected === b.id || ui.target === b.id || b.sieges.length || game.fleets.some((f) => f.to === b.id && f.owner !== b.owner)) continue;
      const q = bodyPos[b.parent];
      tmp.copy(v.g.position).project(camera);
      tmp2.set(q.x, q.y, q.z).project(camera);
      if (Math.hypot((tmp.x - tmp2.x) * w, (tmp.y - tmp2.y) * h) / 2 >= 46) continue;
      crowded.add(b.id);
      if (b.owner !== NEUTRAL && b.ships > 0 && knowsWorld(b)) {
        if (!extras.has(b.parent)) extras.set(b.parent, []);
        extras.get(b.parent).push(`<span class="kid" style="color:${ownerColor(b.owner)}">+${b.ships}</span>`);
      }
    }

    for (const v of views) {
      const { b } = v;
      const p = bodyPos[b.id];
      v.g.position.set(p.x, p.y, p.z);
      if (b.parent !== null) {
        const q = bodyPos[b.parent];
        v.lineHolder.position.set(q.x, q.y, q.z);
      } else if (b.star) {
        const q = starPos(game, b.star, now);
        v.lineHolder.position.set(q.x, q.y, q.z);
      }
      if (v.reach) {
        v.reach.position.set(p.x, 0, p.z);
        v.reach.visible = ui.selected === b.id || ui.peek === b.id || ui.target === b.id;
      }
      if (b.visitor) {
        const here = present(game, b, now);
        v.g.visible = here;
        if (!here) { v.label.style.visibility = 'hidden'; continue; }
        const comet = game.visit && game.visit.kind === 'comet';
        v.body.visible = v.tail.visible = comet;
        v.hulk.visible = !comet;
        if (comet) {
          // Tails grow and brighten as the comet nears the sun.
          const r = Math.max(1, Math.hypot(p.x, p.y, p.z));
          const len = THREE.MathUtils.clamp(2600 / r, 8, 60);
          const bright = THREE.MathUtils.clamp(120 / r, 0.55, 1);
          const away = tmp2.set(p.x, p.y, p.z).normalize();
          // Direction of travel, for the dust tail's backward curve.
          const ahead = posAt(game, b, now + 2);
          const back = new THREE.Vector3(p.x - ahead.x, p.y - ahead.y, p.z - ahead.z).normalize();
          const { ion, dust, coma } = v.tail.userData;
          ion.forEach((sp, i) => {
            const u = (i + 1) / ion.length;
            sp.position.copy(away).multiplyScalar(u * len);
            sp.scale.setScalar(0.8 + u * len * 0.12);
            sp.material.opacity = 0.5 * bright * (1 - u) ** 1.3;
          });
          dust.forEach((sp, i) => {
            const u = (i + 1) / dust.length;
            sp.position.copy(away).multiplyScalar(u * len * 0.75).addScaledVector(back, u * u * len * 0.35);
            sp.scale.setScalar(1 + u * len * 0.18);
            sp.material.opacity = 0.38 * bright * (1 - u) ** 1.1;
          });
          coma.position.set(0, 0, 0);
          coma.scale.setScalar(2.2 + bright * 3);
          coma.material.opacity = 0.35 + bright * 0.4;
        } else v.hulk.rotation.y += dt * 0.08;
      }
      // Slow spin; stations turn faster, asteroids tumble.
      if (b.kind === 'station') v.body.rotation.z += dt * 0.5;
      else if (b.kind === 'asteroid') { v.body.rotation.x += dt * 0.3; v.body.rotation.y += dt * 0.2; }
      else {
        v.body.rotation.y += dt * 0.05;
        const cl = v.body.getObjectByName('clouds');
        if (cl) cl.rotation.y += dt * 0.012;
      }

      const col = ownerColor(b.owner);
      if (v.owner !== b.owner) {
        if (v.owner !== null) v.pulse = 1;
        v.owner = b.owner;
        // Signs of life: city lights on the night side of worlds someone holds.
        if (v.body.material && v.body.material.emissiveMap) {
          v.body.material.emissiveIntensity = b.owner === NEUTRAL ? 0 : 1.6;
        }
        const windows = v.body.getObjectByName && v.body.getObjectByName('windows');
        if (windows) windows.visible = b.owner !== NEUTRAL;
        v.mark.material.color.set(col);
        v.label.style.color = col;
      }
      v.pulse = Math.max(0, v.pulse - dt);

      // Structures: rebuilt when anything is added, finished or lost.
      const sig = b.structures.map((x) => x.type + x.level + ((x.left > 0 && !x.next) || x.scrap ? '~' : '')).join();
      if (sig !== v.sig) {
        v.sig = sig;
        if (v.structs) v.structs.removeFromParent();
        v.surface.clear();
        v.structs = new THREE.Group();
        b.structures.forEach((x, k) => {
          if (b.kind === 'station' && x.type === 'shipyard') return; // the station is the yard
          const m = structureMesh(x.type, b, k, !x.scrap && (x.left <= 0 || !!x.next), x.level);
          // Surface structures turn with the world; yards and skimmers orbit on their own.
          (x.type === 'shipyard' || x.type === 'skimmer' ? v.structs : v.surface).add(m);
        });
        v.g.add(v.structs);
      }
      const selected = ui.selected === b.id;
      const targeted = ui.target === b.id;
      const ppu = ppuAt(v.g.position);
      // Markers stay a readable size on screen however far out we are.
      const markPx = Math.max(b.size * 3.2 * ppu, 22);
      v.mark.scale.setScalar((markPx / ppu) * (1 + v.pulse * 0.6 + (selected ? Math.sin(t * 5) * 0.06 : 0)));
      v.mark.material.opacity = selected ? 1 : targeted ? 0.9 : b.owner === NEUTRAL ? 0.25 : 0.7;
      // Up close the world itself is the marker: fade the ring out of the way.
      if (b.size * ppu > 70) v.mark.material.opacity *= 0.25;
      // Garrison veterancy shows as gaps in the ring (only if we can see it).
      const lvl = knowsWorld(b) && b.ships > 0 ? vetLevel(b.vet) : 0;
      if (v.mark.material.map !== ringTexs[lvl]) { v.mark.material.map = ringTexs[lvl]; v.mark.material.needsUpdate = true; }
      if (selected || targeted) v.mark.material.color.set(selected ? '#ffffff' : col);
      else v.mark.material.color.set(col);

      // Docked ships in a parking orbit; attackers circle wider.
      const known = knowsWorld(b);
      if (v.structs) v.structs.visible = known;
      v.surface.visible = known;
      const fighting = known && b.sieges.length > 0;
      const defPts = [];
      const atkPts = [];
      const park = (n, owner, radius, speed, seed, out) => {
        for (let j = 0; j < n; j++) {
          const sh = ship(used++);
          if (!sh) return;
          const r1 = hash(seed, j);
          const a = r1 * Math.PI * 2 + t * speed * (0.8 + r1 * 0.4);
          const rr = radius * (1 + hash(j, seed) * 0.15);
          tmp.set(p.x + Math.cos(a) * rr, p.y + Math.sin(a * 0.7 + r1) * rr * 0.15, p.z + Math.sin(a) * rr);
          dir.set(-Math.sin(a), 0, Math.cos(a));
          placeShip(sh, tmp, dir, ownerColor(owner), false, t, j, seed * 131 + j);
          sh.glint.material.opacity *= 0.6;
          if (out) out.push({ p: tmp.clone(), owner });
        }
      };
      if (known) park(Math.min(b.ships, 20), b.owner, b.size * 1.8 + 0.4, 0.25, b.id * 13, fighting ? defPts : null);
      for (const g of known ? b.sieges : []) park(Math.min(g.n, 20), g.owner, b.size * 2.4 + 0.8, -0.18, b.id * 29 + g.owner, atkPts);

      if (fighting) {
        // Gun emplacements: fixed points on the surface that turn with the body.
        for (let k = 0; k < Math.ceil(b.guns); k++) {
          const th = hash(b.id, k * 2) * Math.PI * 2 + t * 0.05;
          const ph = (hash(k * 2 + 1, b.id) - 0.5) * 1.6;
          const r = b.size * 1.02;
          defPts.push({ p: new THREE.Vector3(p.x + Math.cos(th) * Math.cos(ph) * r, p.y + Math.sin(ph) * r, p.z + Math.sin(th) * Math.cos(ph) * r), owner: b.owner });
        }
        // Rounds fly between real ships and guns, both ways, in the shooter's colour.
        const total = atkPts.length + defPts.length;
        let n = total * dt * 1.6;
        while (n > 0 && atkPts.length && defPts.length) {
          if (Math.random() < n) {
            const fromAtk = Math.random() < atkPts.length / total;
            const src = (fromAtk ? atkPts : defPts)[(Math.random() * (fromAtk ? atkPts : defPts).length) | 0];
            const dst = (fromAtk ? defPts : atkPts)[(Math.random() * (fromAtk ? defPts : atkPts).length) | 0];
            shoot(src.p, dst.p, ownerColor(src.owner), Math.min(2, techOf(src.owner, 'weapons')), techOf(dst.owner, 'armour') >= 2);
          }
          n -= 1;
        }
        // Each ship lost goes up where it was.
        for (const [lost, pts] of [[b.lostDef, defPts], [b.lostAtk, atkPts]]) {
          for (let k = 0; k < Math.min(3, lost || 0); k++) {
            const at = pts.length ? pts[(Math.random() * pts.length) | 0].p : tmp.set(p.x, p.y, p.z);
            // A white flash, a fireball, and burning debris drifting apart.
            boom(at, '#ffffff', 3, 0.3);
            boom(at, '#ffc070', 5, 1.2);
            for (let d = 0; d < 4; d++) {
              tmp2.set(at.x + (Math.random() - 0.5) * 1.6, at.y + (Math.random() - 0.5) * 1.6, at.z + (Math.random() - 0.5) * 1.6);
              boom(tmp2, '#ff8a40', 1.4, 1 + Math.random() * 0.8);
            }
          }
        }
      }
      b.lostDef = b.lostAtk = 0;
      if (b.captured) { v.pulse = 1; b.captured = false; }

      // Label: ship count big, name small. Moons and stations hide their label
      // while they're crowded against their planet on screen (unless busy).
      tmp.copy(v.g.position).project(camera);
      const hide = tmp.z > 1 || crowded.has(b.id);
      if (hide) { v.label.style.visibility = 'hidden'; continue; }
      const attackers = (known ? b.sieges : []).map((g) => `<span class="atk" style="color:${ownerColor(g.owner)}">${icon('attack')}${g.n}</span>`).join('');
      const count = !known ? '<b class="unk">?</b>' : b.owner === NEUTRAL ? `<i class="guns">${icon('guns')}${Math.ceil(b.guns)}</i>` : b.ships ? `<b>${b.ships}</b>` : '';
      const kids = (extras.get(b.id) || []).join('');
      const warn = (incomingTo.get(b.id) || []).map((x) => {
        const e = Math.max(0, x.eta);
        const own = x.owner === b.owner;
        return `<span class="${own ? 'rein' : 'inc'}" style="color:${ownerColor(x.owner)}">${icon(own ? 'reinforce' : 'incoming')}${x.sized ? x.n : '?'} ${Math.floor(e / 60)}:${String(Math.floor(e % 60)).padStart(2, '0')}</span>`;
      }).join('');
      // Events at this world: an icon, then the countdown to start or the hold left.
      const evs = (game.happenings || []).filter((h) => h.at === b.id).map((h) => {
        const E = EVENTS[h.kind];
        const soon = now < h.starts;
        const left = soon ? h.starts - now : E.hold - h.held;
        const c = !soon && h.holder !== NEUTRAL ? ownerColor(h.holder) : '#ffd479';
        return `<span class="ev" style="color:${c}">${icon(h.kind)} ${soon ? 'in ' : ''}${Math.floor(left / 60)}:${String(Math.floor(left % 60)).padStart(2, '0')}</span>`;
      }).join('');
      const perk = b.perk ? `<i class="perk" title="${PERKS[b.perk].name}">${icon(b.perk)}</i> ` : '';
      const text = `<span class="row1">${count}${kids}</span>${attackers}${warn}${evs}<small>${perk}${b.name}</small>`;
      if (text !== v.shown) { v.label.innerHTML = text; v.shown = text; }
      v.label.style.visibility = 'visible';
      const x = (tmp.x * 0.5 + 0.5) * w;
      const y = (-tmp.y * 0.5 + 0.5) * h;
      v.label.style.transform = `translate(${x}px, ${y + markPx / 2 + 2}px) translate(-50%, 0)`;
    }

    // Fleets in flight.
    let routeN = 0;
    let ghostN = 0;
    for (const f of game.fleets) {
      if (!seesFleet(f)) continue;
      const s = fleetState(f, now);
      const color = ownerColor(f.owner);
      // Nose along the thrust; the formation spreads across the direction of travel.
      const nose = new THREE.Vector3(s.nx, s.ny, s.nz);
      dir.set(s.vx, s.vy, s.vz);
      if (dir.lengthSq() < 1e-9) dir.copy(nose);
      dir.normalize();
      perp.crossVectors(dir, UP);
      if (perp.lengthSq() < 1e-6) perp.set(1, 0, 0);
      perp.normalize();
      for (let j = 0; j < (f.probe ? 1 : f.n); j++) {
        const sh = ship(used++);
        if (!sh) break;
        // Formation: a loose, uneven column of threes. Each ship keeps its own
        // offset and drifts a little, so it reads as crewed ships, not a grid.
        // It opens out after launch and closes up before arrival.
        const row = Math.floor(j / 3);
        const col = (j % 3) - 1;
        const since = now - f.t0;
        const open = THREE.MathUtils.smoothstep(Math.min(since, f.T - since), 0, 12) * 0.92 + 0.08;
        const h1 = hash(f.id, j), h2 = hash(j, f.id), h3 = hash(f.id + 7, j * 3);
        const drift = t * (0.3 + h1 * 0.4) + h2 * 6;
        tmp.set(s.x, s.y, s.z)
          .addScaledVector(perp, (col * (0.9 + h3 * 0.5) + (row % 2) * 0.45 + (h1 - 0.5) * 0.7 + Math.sin(drift) * 0.08) * open)
          .addScaledVector(UP, ((h2 - 0.5) * 0.9 + Math.cos(drift * 0.8) * 0.06) * open)
          .addScaledVector(dir, (-row * (1.1 + h3 * 0.5) - (h2 - 0.5) * 0.8) * open);
        placeShip(sh, tmp, nose, color, s.burning, t, j, f.id * 97 + j, 1 + 0.35 * techOf(f.owner, 'drives'));
      }
      if (routeN < 200 * SEGS && knowsDest(f)) {
        // The rest of the route, sampled along the (curved) path.
        const c = new THREE.Color(color);
        let prev = s;
        for (let k = 1; k <= SEGS; k++) {
          const u = s.progress + ((1 - s.progress) * k) / SEGS;
          const q = fleetState(f, f.t0 + u * f.T);
          const fade = 1 - (k / SEGS) * 0.7;
          routePos.set([prev.x, prev.y, prev.z, q.x, q.y, q.z], routeN * 6);
          routeCol.set([c.r * fade, c.g * fade, c.b * fade, c.r * fade, c.g * fade, c.b * fade], routeN * 6);
          routeN++;
          prev = q;
        }
        const gh = ghost(ghostN++);
        gh.visible = true;
        gh.position.set(f.p1.x, f.p1.y, f.p1.z);
        gh.material.color.set(color);
        // Enemy landing points pulse so they stand out.
        const hostile = f.owner !== (ui.me ?? 0);
        const pulse = hostile ? 1 + 0.35 * Math.sin(t * 6) : 1;
        gh.material.opacity = hostile ? 0.9 : 0.5;
        gh.scale.setScalar((hostile ? 22 : 14) * pulse / ppuAt(gh.position));
      }
    }
    for (let i = used; i < ships.length; i++) { ships[i].mesh.visible = false; ships[i].glint.visible = false; }

    // Ship counts on fleets in flight: a small tag beside each one.
    let fl = 0;
    for (const f of game.fleets) {
      const s = fleetState(f, now);
      tmp.set(s.x, s.y, s.z).project(camera);
      const el = fleetLabel(fl++);
      if (tmp.z > 1 || !seesFleet(f)) { el.style.visibility = 'hidden'; continue; }
      const mine = f.owner === (ui.me ?? 0);
      // Probes: just an icon from afar, named when the camera is close.
      const text = f.probe ? `${icon('probe')}${camera.position.distanceTo(tmp2.set(s.x, s.y, s.z)) < 60 ? ' probe' : ''}` : `${icon('fleet')}${knowsSize(f) ? f.n : '?'}`;
      const lv = knowsSize(f) ? vetLevel(f.vet) : 0;
      if (el._v !== lv) { el._v = lv; el.dataset.v = lv; }
      if (el._t !== text) { el._t = text; el.innerHTML = text; }
      el.style.color = ownerColor(f.owner);
      el.style.borderColor = ownerColor(f.owner);
      el.style.opacity = mine ? (ui.fleet === f.id ? 1 : 0.85) : 0.6;
      el.classList.toggle('sel', ui.fleet === f.id);
      el.style.visibility = 'visible';
      el.style.transform = `translate(${(tmp.x * 0.5 + 0.5) * w + 12}px, ${(-tmp.y * 0.5 + 0.5) * h - 9}px)`;
    }
    for (let i = fl; i < fleetLabels.length; i++) fleetLabels[i].style.visibility = 'hidden';
    for (let i = ghostN; i < ghosts.length; i++) ghosts[i].visible = false;
    routeGeo.setDrawRange(0, routeN * 2);
    routeGeo.attributes.position.needsUpdate = true;
    routeGeo.attributes.color.needsUpdate = true;

    // Rounds in flight: a short bright streak moving from gun to target, with
    // a spark where it lands.
    let tn = 0;
    for (const sh of shots) {
      if (!sh.live) continue;
      sh.age += dt;
      const k = sh.age / sh.life;
      if (k >= 1) {
        sh.live = false;
        if (sh.pd) boom(sh.b, '#dff4ff', 0.35, 0.15);
        else boom(sh.b, sh.color, sh.tail === 1 ? 0.9 : 0.5, 0.25);
        continue;
      }
      if (tn >= MAX_SHOTS) continue;
      tmp.lerpVectors(sh.a, sh.b, sh.tail === 1 ? 0 : Math.max(0, k - sh.tail));
      if (sh.tail === 1) tmp2.copy(sh.b);
      else tmp2.lerpVectors(sh.a, sh.b, k);
      tracerPos.set([tmp.x, tmp.y, tmp.z, tmp2.x, tmp2.y, tmp2.z], tn * 6);
      const c = sh.c;
      if (sh.tail === 1) { const f = 1 - k; tracerCol.set([c.r * f * 0.6, c.g * f * 0.6, c.b * f * 0.6, c.r * f, c.g * f, c.b * f], tn * 6); }
      else tracerCol.set([c.r * 0.2, c.g * 0.2, c.b * 0.2, c.r, c.g, c.b], tn * 6);
      tn++;
    }
    tracerGeo.setDrawRange(0, tn * 2);
    tracerGeo.attributes.position.needsUpdate = true;
    tracerGeo.attributes.color.needsUpdate = true;

    for (const s of booms) {
      if (!s.visible) continue;
      s.userData.age += dt;
      const k = s.userData.age / s.userData.life;
      if (k >= 1) { s.visible = false; continue; }
      s.scale.setScalar(s.userData.size * (0.4 + Math.sqrt(k)));
      s.material.opacity = Math.min(1, (1 - k) * 1.6);
    }

    // Order preview.
    if (ui.preview) {
      const { p1 } = ui.preview;
      preview.visible = true;
      const pf = { ...ui.preview, t0: 0 };
      for (let k = 0; k <= 32; k++) {
        const q = fleetState(pf, (k / 32) * pf.T);
        previewGeo.attributes.position.setXYZ(k, q.x, q.y, q.z);
      }
      previewGeo.attributes.position.needsUpdate = true;
      preview.computeLineDistances();
      preview.material.dashSize = 6 / ppuAt(tmp.set(p1.x, p1.y, p1.z));
      preview.material.gapSize = preview.material.dashSize * 0.7;
      const gh = ghost(ghostN++);
      gh.visible = true;
      gh.position.set(p1.x, p1.y, p1.z);
      gh.material.color.set('#ffffff');
      gh.material.opacity = 0.6;
      gh.scale.setScalar(22 / ppuAt(gh.position));
    } else {
      preview.visible = false;
    }

    renderer.render(scene, camera);
  }

  /** Nearest body to a screen point, within a finger's reach. */
  function pick(x, y) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    let best = null;
    let bestD = Infinity;
    for (const v of views) {
      if (!v.g.visible) continue; // a visitor that isn't here
      tmp.copy(v.g.position).project(camera);
      if (tmp.z > 1) continue;
      const d = Math.hypot((tmp.x * 0.5 + 0.5) * w - x, (-tmp.y * 0.5 + 0.5) * h - y);
      const r = Math.max(30, v.b.size * ppuAt(v.g.position) + 12);
      if (d < r && d < bestD) { bestD = d; best = v.b.id; }
    }
    return best;
  }

  /** Nearest fleet (of `owner`) to a screen point, within a finger's reach. */
  function pickFleet(game, x, y, owner) {
    let best = null;
    let bestD = 24;
    for (const f of game.fleets) {
      if (f.owner !== owner) continue;
      const s = fleetState(f, game.time);
      tmp.set(s.x, s.y, s.z).project(camera);
      if (tmp.z > 1) continue;
      const d = Math.hypot((tmp.x * 0.5 + 0.5) * window.innerWidth - x, (-tmp.y * 0.5 + 0.5) * window.innerHeight - y);
      if (d < bestD) { bestD = d; best = f.id; }
    }
    return best;
  }

  function groundAt(x, y) {
    const ndc = new THREE.Vector3((x / window.innerWidth) * 2 - 1, -(y / window.innerHeight) * 2 + 1, 0.5).unproject(camera);
    const ray = new THREE.Ray(camera.position, ndc.sub(camera.position).normalize());
    // Prefer the plane of the orbits, so zooming toward the cursor never lifts
    // the view centre off into empty space above or below the system.
    const ecliptic = new THREE.Plane(UP.clone(), -orbit.target.y);
    const hit = ray.intersectPlane(ecliptic, new THREE.Vector3());
    if (hit && hit.distanceTo(camera.position) < orbit.dist * 4) return hit;
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(camera.getWorldDirection(new THREE.Vector3()), orbit.target);
    return ray.intersectPlane(plane, new THREE.Vector3());
  }
  function zoomAt(x, y, factor) {
    // Zoom toward the fingers, wherever they are.
    orbit.follow = null;
    orbit.goalDist = null;
    const before = groundAt(x, y);
    const next = THREE.MathUtils.clamp(orbit.dist * factor, orbit.minDist, orbit.maxDist);
    const k = next / orbit.dist;
    orbit.dist = next;
    if (before) orbit.target.lerp(before, 1 - k);
  }
  function pan(dx, dy) {
    orbit.follow = null;
    const perPx = (2 * orbit.dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / window.innerHeight;
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
    const fwd = new THREE.Vector3().crossVectors(UP, right).normalize();
    orbit.target.addScaledVector(right, -dx * perPx).addScaledVector(fwd, dy * perPx);
  }
  function focus(game, id, zoom = true) {
    orbit.follow = id;
    if (id === null || !zoom) return;
    const b = game.bodies[id];
    // Glide in rather than jump.
    orbit.goalDist = Math.max(orbit.minDist, b.size * 9 + 3);
  }
  /** The point a drag should turn around: the world under the cursor, else
   * where the cursor meets the plane through the current view centre. */
  function pivotAt(game, x, y) {
    const id = pick(x, y);
    if (id !== null) return views[id].g.position.clone();
    return groundAt(x, y) || orbit.target.clone();
  }
  /** Turn the view around a pivot (camera and look-at point both swing). */
  function rotateAround(pivot, daz, dpol) {
    orbit.follow = null;
    orbit.goalDist = null;
    const off = new THREE.Vector3().subVectors(camera.position, orbit.target);
    const sph = new THREE.Spherical().setFromVector3(off);
    const pol = THREE.MathUtils.clamp(sph.phi + dpol, 0.15, Math.PI - 0.15);
    dpol = pol - sph.phi;
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0).normalize();
    const q = new THREE.Quaternion().setFromAxisAngle(UP, daz).multiply(new THREE.Quaternion().setFromAxisAngle(right, dpol));
    const cam = camera.position.clone().sub(pivot).applyQuaternion(q).add(pivot);
    orbit.target.sub(pivot).applyQuaternion(q).add(pivot);
    sph.setFromVector3(cam.clone().sub(orbit.target));
    orbit.az = sph.theta;
    orbit.pol = sph.phi;
    orbit.dist = sph.radius;
  }
  /** Zoom toward a world if the cursor is on one, else toward the cursor. */
  function zoomToward(x, y, factor) {
    const id = pick(x, y);
    orbit.goalDist = null;
    if (id === null) { zoomAt(x, y, factor); return; }
    orbit.follow = null;
    const p = views[id].g.position;
    const next = THREE.MathUtils.clamp(orbit.dist * factor, orbit.minDist, orbit.maxDist);
    orbit.target.lerp(p, 1 - next / orbit.dist);
    orbit.dist = next;
  }

  /** Where a body is on screen, in CSS pixels (for tests and tooling). */
  function screenOf(id) {
    tmp.copy(views[id].g.position).project(camera);
    return { x: (tmp.x * 0.5 + 0.5) * window.innerWidth, y: (-tmp.y * 0.5 + 0.5) * window.innerHeight };
  }

  return { build, render, resize, pick, pickFleet, orbit, zoomAt, pan, focus, screenOf, pivotAt, rotateAround, zoomToward };
}
