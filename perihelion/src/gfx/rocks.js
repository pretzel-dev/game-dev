import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { NOISE } from './glsl.js';
import { rng } from '../sim.js';

/**
 * Asteroids: lumpy, cratered rubble-pile shapes, dark (most asteroids are as
 * dark as coal), with a fine gritty relief added in the shader from 3D noise
 * so they stay detailed up close. Plus the belt itself: a lane of
 * thousands of small tumbling rocks and a faint dust band, so the belt
 * reads as a place, not four lonely rocks.
 */

// Small 3D value noise for shaping meshes on the CPU.
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
    L(L(c(0, 0, 1), c(1, 0, 1), u), L(c(0, 1, 1), c(1, 1, 1), u), v), w);
}
function fbm(x, y, z, s, oct) {
  let sum = 0, amp = 0.5, f = 1;
  for (let o = 0; o < oct; o++) { sum += vnoise(x * f, y * f, z * f, s + o) * amp; f *= 2.03; amp *= 0.5; }
  return sum;
}

/** A rock shape: radius ~size, seeded. `detail` is the icosphere level. */
export function rockGeometry(seed, size, detail = 5, rough = 1) {
  const r = rng(seed * 97 + 1);
  let geo = new THREE.IcosahedronGeometry(size, detail);
  geo.deleteAttribute('normal');
  geo.deleteAttribute('uv');
  geo = mergeVertices(geo);
  const waves = Array.from({ length: 5 }, () => ({ d: new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize(), f: 0.6 + r() * 1.2, ph: r() * 6.28, a: 0.05 + r() * 0.08 }));
  const craters = Array.from({ length: 7 + Math.floor(r() * 5) }, () => ({ d: new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize(), size: 0.15 + r() * 0.3 }));
  const stretch = new THREE.Vector3(1.2 + r() * 0.6, 0.75 + r() * 0.2, 0.85 + r() * 0.35);
  const s = Math.floor(seed) % 1000;
  const p = geo.attributes.position;
  const v = new THREE.Vector3();
  const n = new THREE.Vector3();
  const cols = [];
  // Albedo type: mostly dark carbon-rich rock, some stony (redder, brighter).
  const stony = r() < 0.35;
  const tint = stony ? [1.08, 0.95, 0.82] : [1.0, 0.98, 0.95];
  const base = stony ? 0.26 : 0.16;
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    n.copy(v).normalize();
    let k = 1;
    for (const w of waves) k += w.a * Math.sin(n.dot(w.d) * w.f * 3 + w.ph);
    // Ridged lumps: broken blocks rather than a smooth potato.
    k += (Math.abs(fbm(n.x * 2.2, n.y * 2.2, n.z * 2.2, s + 7, 3) - 0.5) - 0.15) * 0.25 * rough;
    let bowl = 0;
    for (const c of craters) {
      const d = n.distanceTo(c.d) / c.size;
      if (d < 1) { const dd = 1 - d * d; k -= 0.11 * dd * c.size * 3; bowl = Math.max(bowl, dd); }
      else if (d < 1.3) k += 0.025 * (1 - (d - 1) / 0.3) * c.size * 3;
    }
    k += (fbm(n.x * 7, n.y * 7, n.z * 7, s + 5, 3) - 0.5) * 0.09 * rough;
    v.multiplyScalar(k).multiply(stretch);
    p.setXYZ(i, v.x, v.y, v.z);
    // Patchy regolith: brighter on fresh slopes, darker in crater bowls.
    let t = base + (fbm(n.x * 2.5, n.y * 2.5, n.z * 2.5, s + 9, 4) - 0.5) * 0.18 + (k - 1) * 0.25 - bowl * 0.04;
    t += (fbm(n.x * 12, n.y * 12, n.z * 12, s + 2, 2) - 0.5) * 0.08;
    t = Math.max(0.05, Math.min(0.5, t));
    cols.push(t * tint[0], t * tint[1], t * tint[2]);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  geo.computeVertexNormals();
  return geo;
}

/** Rock material: vertex-coloured, with fine relief from noise in the shader. */
export function rockMaterial(opts = {}) {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0.04 });
  const scale = opts.scale ?? 6;
  const tumble = !!opts.tumble;
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uT = opts.uT || { value: 0 };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        uniform float uT; varying vec3 vObj; varying vec3 vRx; varying vec3 vRy; varying vec3 vRz;
        mat3 rotAxis(vec3 a, float t) { float c = cos(t), s = sin(t); vec3 u = normalize(a); return mat3(c + u.x*u.x*(1.0-c), u.y*u.x*(1.0-c) + u.z*s, u.z*u.x*(1.0-c) - u.y*s, u.x*u.y*(1.0-c) - u.z*s, c + u.y*u.y*(1.0-c), u.z*u.y*(1.0-c) + u.x*s, u.x*u.z*(1.0-c) + u.y*s, u.y*u.z*(1.0-c) - u.x*s, c + u.z*u.z*(1.0-c)); }`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
        ${tumble ? `float fid = float(gl_InstanceID);
        vec3 ax = vec3(fract(sin(fid * 12.9898) * 43758.5), fract(sin(fid * 78.233) * 43758.5), fract(sin(fid * 37.719) * 43758.5)) - 0.5;
        mat3 tum = rotAxis(ax + 1e-3, uT * (0.05 + fract(fid * 0.618) * 0.3) + fid);
        objectNormal = tum * objectNormal;` : ''}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        ${tumble ? 'transformed = tum * transformed;' : ''}
        vObj = transformed;
        vRx = normalMatrix * vec3(1.0, 0.0, 0.0); vRy = normalMatrix * vec3(0.0, 1.0, 0.0); vRz = normalMatrix * vec3(0.0, 0.0, 1.0);`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vObj; varying vec3 vRx; varying vec3 vRy; varying vec3 vRz;
        ${NOISE}
        float rockH(vec3 p) { return fbm(p, 3) + abs(snoise(p * 0.5)) * 0.5; }`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          // Grit and small craters: bump the normal with the gradient of 3D noise.
          vec3 p = vObj * ${scale.toFixed(2)};
          float e = 0.08;
          float h0 = rockH(p);
          vec3 g = vec3(rockH(p + vec3(e, 0.0, 0.0)) - h0, rockH(p + vec3(0.0, e, 0.0)) - h0, rockH(p + vec3(0.0, 0.0, e)) - h0) / e;
          vec3 gv = vRx * g.x + vRy * g.y + vRz * g.z;
          normal = normalize(normal - (gv - dot(gv, normal) * normal) * 0.22);
          diffuseColor.rgb *= 0.85 + h0 * 0.3;
        }`);
  };
  return mat;
}

const sharedRock = { mat: null };
/** A world-sized asteroid (an asteroid body, or a comet's nucleus). */
export function asteroidMesh(b) {
  const geo = rockGeometry(b.id, b.size, 5);
  if (!sharedRock.mat) sharedRock.mat = rockMaterial({ scale: 5 });
  return new THREE.Mesh(geo, sharedRock.mat);
}

/**
 * The belt: an instanced lane of tumbling rocks between r0 and r1, in three
 * rings that orbit at their own (Keplerian) speeds, plus a faint dust band.
 * `period(r)` gives the orbital period at radius r.
 */
export function createBelt(r0, r1, period, quality, uT) {
  const group = new THREE.Group();
  const N = quality === 'high' ? 2400 : 900;
  const geos = [0, 1, 2, 3].map((k) => rockGeometry(500 + k * 17, 1, 2, 1.3));
  const mat = rockMaterial({ scale: 4, tumble: true, uT });
  const r = rng(Math.floor(r0 * 131));
  const rings = [];
  const BANDS = 3;
  for (let band = 0; band < BANDS; band++) {
    const ring = new THREE.Group();
    const a0 = r0 + ((r1 - r0) * band) / BANDS, a1 = r0 + ((r1 - r0) * (band + 1)) / BANDS;
    ring.userData.omega = (Math.PI * 2) / period((a0 + a1) / 2);
    group.add(ring);
    rings.push(ring);
    const per = Math.ceil(N / BANDS / geos.length);
    for (const geo of geos) {
      const m = new THREE.InstancedMesh(geo, mat, per);
      const mx = new THREE.Matrix4(), q = new THREE.Quaternion(), pos = new THREE.Vector3(), sc = new THREE.Vector3();
      for (let i = 0; i < per; i++) {
        const rad = a0 + r() * (a1 - a0);
        const ang = r() * Math.PI * 2;
        // Thicker toward the middle of the lane; a few clumps.
        const y = (r() + r() + r() - 1.5) * 1.6;
        pos.set(Math.cos(ang) * rad, y, Math.sin(ang) * rad);
        q.setFromEuler(new THREE.Euler(r() * 6, r() * 6, r() * 6));
        const s = 0.04 + Math.pow(r(), 4) * 0.32; // many pebbles, a few boulders
        mx.compose(pos, q, sc.setScalar(s));
        m.setMatrixAt(i, mx);
      }
      m.frustumCulled = false;
      ring.add(m);
    }
  }
  // Dust: a soft, streaky band, faintly lit (forward-scattering toward the sun).
  const dustGeo = new THREE.RingGeometry(r0 - 4, r1 + 4, 256, 4).rotateX(-Math.PI / 2);
  const dust = new THREE.Mesh(dustGeo, new THREE.ShaderMaterial({
    uniforms: { uR0: { value: r0 - 4 }, uR1: { value: r1 + 4 } },
    vertexShader: `#include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vW;
      void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
      #include <logdepthbuf_vertex>
      }`,
    fragmentShader: `#include <logdepthbuf_pars_fragment>
      ${NOISE}
      uniform float uR0, uR1; varying vec3 vW;
      void main() {
        #include <logdepthbuf_fragment>
        float rr = length(vW.xz);
        float u = (rr - uR0) / (uR1 - uR0);
        float prof = smoothstep(0.0, 0.3, u) * smoothstep(1.0, 0.7, u);
        float ang = atan(vW.z, vW.x);
        float n = snoise(vec3(cos(ang) * 6.0, sin(ang) * 6.0, rr * 0.4)) * 0.5 + 0.5;
        float streaks = snoise(vec3(cos(ang) * 40.0, sin(ang) * 40.0, rr * 2.5)) * 0.5 + 0.5;
        float k = prof * (0.4 + n * 0.6) * (0.6 + streaks * 0.4);
        gl_FragColor = vec4(vec3(0.55, 0.47, 0.38) * k * 0.035, 1.0);
      }`,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  }));
  group.add(dust);
  return {
    group,
    update(now) { for (const ring of rings) ring.rotation.y = -ring.userData.omega * now; },
    dispose() { for (const g of geos) g.dispose(); dustGeo.dispose(); },
  };
}
