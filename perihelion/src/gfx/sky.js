import * as THREE from 'three';
import { NOISE } from './glsl.js';
import { rng } from '../sim.js';

/**
 * The sky: a painted backdrop baked once per system into a cube map, plus a
 * layer of crisp bright stars drawn live.
 *
 * The bake (on the GPU, from noise) has the Milky Way seen edge-on with its
 * bright core and dark dust lanes, two or three big soft nebulae in a palette
 * picked per system (in the spirit of Homeworld's painted skies, but kept dim
 * so the system stays the subject), drifts of faint stars and a few far-off
 * galaxies. The same cube map, prefiltered, lights metal hulls with faint
 * reflections of the nebulae.
 */

// Nebula palettes: pairs of [core, rim] colours in linear RGB (kept dim).
const PALETTES = [
  [[0.10, 0.45, 0.55], [0.55, 0.12, 0.40]], // teal and magenta
  [[0.65, 0.30, 0.08], [0.35, 0.06, 0.08]], // amber and oxblood
  [[0.20, 0.30, 0.75], [0.45, 0.15, 0.60]], // blue and violet
  [[0.15, 0.50, 0.40], [0.60, 0.45, 0.15]], // jade and gold
  [[0.60, 0.20, 0.25], [0.15, 0.25, 0.60]], // rose and indigo
  [[0.40, 0.55, 0.70], [0.25, 0.10, 0.35]], // ice and plum
];

const skyFrag = /* glsl */ `
${NOISE}
uniform vec3 uPole;
uniform vec3 uNebDir[3];
uniform vec3 uNebA[3];
uniform vec3 uNebB[3];
uniform float uNebSize[3];
uniform vec3 uGal[3];
uniform float uSeed;
uniform float uRes;
varying vec3 vDir;

// One layer of point stars on a 3D grid of cells: at most one star per cell.
vec3 starLayer(vec3 d, float freq, float dens, float bright) {
  vec3 p = d * freq;
  vec3 base = floor(p) + step(0.5, fract(p)) - 1.0; // the 2x2x2 cells nearest p
  vec3 acc = vec3(0.0);
  for (int z = 0; z <= 1; z++) for (int y = 0; y <= 1; y++) for (int x = 0; x <= 1; x++) {
    vec3 cell = base + vec3(float(x), float(y), float(z));
    vec3 h = hash33(cell + uSeed);
    if (h.x > dens) continue;
    vec3 sp = normalize(cell + hash33(cell * 1.7 + 3.1));
    float ang = length(cross(sp, d));
    if (dot(sp, d) < 0.0) continue;
    float px = 2.0 / uRes; // about a texel, in radians
    float k = exp(-pow(ang / (px * 0.55), 2.0));
    // Star colour from a temperature: mostly white, some blue, some orange.
    float tcol = h.y;
    vec3 col = tcol < 0.15 ? vec3(0.65, 0.78, 1.0) : tcol < 0.75 ? vec3(1.0, 0.97, 0.92) : tcol < 0.93 ? vec3(1.0, 0.82, 0.6) : vec3(1.0, 0.6, 0.45);
    acc += col * k * bright * pow(h.z, 3.0);
  }
  return acc;
}

void main() {
  vec3 d = normalize(vDir);
  vec3 col = vec3(0.0);

  // --- The Milky Way: the galaxy's disc seen from inside, round the sky. ---
  float lat = asin(clamp(dot(d, uPole), -1.0, 1.0));
  vec3 X = normalize(vec3(1.0, 0.0, 0.0) - uPole * uPole.x);
  vec3 Y = cross(uPole, X);
  float lon = atan(dot(d, Y), dot(d, X));
  float wob = 0.16 * (0.75 + 0.5 * fbm(d * 2.5 + 13.0, 3));
  float band = exp(-pow(lat / wob, 2.0)) + 0.25 * exp(-pow(lat / 0.55, 2.0));
  float clouds = fbm(d * 6.0 + 41.0, 6) * 0.5 + 0.5;
  float core = exp(-pow(lon / 0.75, 2.0)) * exp(-pow(lat / 0.28, 2.0));
  float lanes = ridged(d * 7.0 + 77.0, 5);
  float dust = smoothstep(0.35, 0.8, lanes) * exp(-pow((lat - 0.02 * sin(lon * 3.0)) / 0.07, 2.0));
  float mw = band * (0.25 + clouds * 0.9) + core * 1.4;
  mw *= 1.0 - min(0.92, dust * 1.3);
  col += mix(vec3(0.55, 0.62, 0.85), vec3(1.0, 0.82, 0.6), clamp(core * 1.4, 0.0, 1.0)) * mw * 0.020;
  // Unresolved star haze in the band.
  col += starLayer(d, 700.0, 0.03 * clamp(band, 0.0, 1.0), 0.05) * (1.0 - dust);

  // --- Nebulae: big soft clouds of glowing gas with dark dust through them. ---
  for (int i = 0; i < 3; i++) {
    float sz = uNebSize[i];
    if (sz <= 0.0) continue;
    float a = acos(clamp(dot(d, uNebDir[i]), -1.0, 1.0));
    if (a > sz * 1.8) continue;
    vec3 q = d * (2.2 / sz) + float(i) * 17.0;
    vec3 w = vec3(fbm(q, 4), fbm(q + 5.2, 4), fbm(q + 9.7, 4));
    float gas = fbm(q * 1.6 + w * 1.8, 6) * 0.5 + 0.5;
    float wisps = ridged(q * 2.4 + w * 2.2, 5);
    float fall = smoothstep(sz * 1.8, 0.0, a);
    fall *= fall;
    float dens = clamp(gas * 1.6 - 0.45, 0.0, 1.0) * fall;
    vec3 c = mix(uNebB[i], uNebA[i], smoothstep(0.2, 0.9, dens + wisps * 0.3));
    float glow = dens * dens * 0.9 + wisps * wisps * dens * 0.8;
    float dk = smoothstep(0.55, 0.85, ridged(q * 1.3 + 31.0, 4)) * fall;
    col *= 1.0 - dk * 0.7;
    col += c * glow * 0.075 * (1.0 - dk * 0.85);
    // Young hot stars embedded in the brightest gas.
    col += starLayer(d, 520.0, 0.01 * dens, 0.4) * c * 2.5;
  }

  // --- Faint galaxies far beyond: small tilted ellipses with a bright core. ---
  for (int i = 0; i < 3; i++) {
    vec3 gd = normalize(uGal[i]);
    float s = length(uGal[i]) * 0.012;
    vec3 gx = normalize(cross(gd, vec3(0.3, 1.0, 0.2)));
    vec3 gy = cross(gd, gx);
    vec2 uv = vec2(dot(d, gx), dot(d, gy)) / s;
    if (dot(d, gd) < 0.0 || length(uv) > 3.0) continue;
    float ang = float(i) * 1.3;
    uv = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * uv;
    uv.y *= 2.6;
    float r = length(uv);
    float th = atan(uv.y, uv.x);
    float arms = 0.5 + 0.5 * sin(th * 2.0 - log(r + 0.05) * 4.0);
    float gal = exp(-r * 2.4) * (0.4 + 0.6 * arms) + exp(-r * 9.0) * 1.5;
    col += vec3(0.85, 0.85, 1.0) * gal * 0.035;
  }

  // --- Background stars everywhere (the bright ones are drawn live). ---
  col += starLayer(d, 420.0, 0.004, 0.12);
  col += starLayer(d, 180.0, 0.006, 0.25);

  gl_FragColor = vec4(col, 1.0);
}`;

export function createSky(renderer, quality) {
  const res = quality === 'high' ? 1024 : 512;
  const ext = renderer.extensions;
  const hdr = ext.has('EXT_color_buffer_float') || ext.has('EXT_color_buffer_half_float') ? THREE.HalfFloatType : THREE.UnsignedByteType;
  const cubeRT = new THREE.WebGLCubeRenderTarget(res, { type: hdr, generateMipmaps: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter });
  const cubeCam = new THREE.CubeCamera(0.1, 100, cubeRT);
  const bakeScene = new THREE.Scene();
  const uniforms = {
    uPole: { value: new THREE.Vector3() },
    uNebDir: { value: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()] },
    uNebA: { value: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()] },
    uNebB: { value: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()] },
    uNebSize: { value: [0, 0, 0] },
    uGal: { value: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()] },
    uSeed: { value: 0 },
    uRes: { value: res },
  };
  bakeScene.add(new THREE.Mesh(new THREE.SphereGeometry(10, 64, 32), new THREE.ShaderMaterial({
    uniforms,
    vertexShader: 'varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: skyFrag,
    side: THREE.BackSide,
    depthWrite: false,
  })));
  const pmrem = new THREE.PMREMGenerator(renderer);
  let envRT = null;
  let baked = null;

  // Bright stars: crisp points drawn every frame (twinkling a little), so
  // they stay sharp at any screen resolution. The brightest bloom.
  const N = quality === 'high' ? 2600 : 1400;
  const starGeo = new THREE.BufferGeometry();
  const sPos = new Float32Array(N * 3), sCol = new Float32Array(N * 3), sSize = new Float32Array(N);
  starGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3));
  starGeo.setAttribute('size', new THREE.BufferAttribute(sSize, 1));
  const starMat = new THREE.ShaderMaterial({
    uniforms: { uT: { value: 0 }, uPR: { value: 1 } },
    vertexShader: /* glsl */ `
      attribute float size; attribute vec3 color;
      uniform float uT, uPR;
      varying vec3 vCol; varying float vB;
      void main() {
        // Stars sit at infinity: only the camera's rotation moves them.
        vec3 d = mat3(viewMatrix) * normalize(position);
        gl_Position = projectionMatrix * vec4(d * 100.0, 1.0);
        gl_Position.z = gl_Position.w * 0.999999;
        float tw = 0.85 + 0.15 * sin(uT * (1.5 + fract(position.x * 7.1) * 3.0) + position.y * 13.0);
        vB = size;
        vCol = color * tw;
        gl_PointSize = (1.2 + size * 2.2) * uPR;
      }`,
    fragmentShader: /* glsl */ `
      varying vec3 vCol; varying float vB;
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        float r = length(p) * 2.0;
        float core = exp(-r * r * 9.0);
        // Faint diffraction spikes on the brightest few.
        float spike = vB > 1.6 ? (exp(-abs(p.x) * 60.0) + exp(-abs(p.y) * 60.0)) * (1.0 - r) * 0.5 : 0.0;
        float a = core + max(spike, 0.0);
        if (a < 0.01) discard;
        gl_FragColor = vec4(vCol * a, 1.0);
      }`,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    depthWrite: false,
  });
  const stars = new THREE.Points(starGeo, starMat);
  stars.frustumCulled = false;
  stars.renderOrder = -100;

  function bake(seed = 1) {
    if (baked === seed) return;
    baked = seed;
    const r = rng(seed * 7919 + 13);
    const dir = () => { const z = r() * 2 - 1, a = r() * Math.PI * 2, q = Math.sqrt(1 - z * z); return new THREE.Vector3(Math.cos(a) * q, z, Math.sin(a) * q); };
    // Tilt the galaxy's plane well away from the plane of the orbits, so the
    // Milky Way arcs across the sky behind the system instead of lying in it.
    uniforms.uPole.value.set(0.3 + r() * 0.4, 0.75 + r() * 0.2, 0.3 - r() * 0.6).normalize();
    const pal = PALETTES[Math.floor(r() * PALETTES.length)];
    const pal2 = PALETTES[Math.floor(r() * PALETTES.length)];
    const count = 2 + (r() < 0.5 ? 1 : 0);
    for (let i = 0; i < 3; i++) {
      const p = i === 1 ? pal2 : pal;
      const flip = r() < 0.4;
      uniforms.uNebDir.value[i].copy(dir());
      uniforms.uNebA.value[i].fromArray(flip ? p[1] : p[0]);
      uniforms.uNebB.value[i].fromArray(flip ? p[0] : p[1]);
      uniforms.uNebSize.value[i] = i < count ? 0.35 + r() * 0.45 : 0;
      uniforms.uGal.value[i].copy(dir()).multiplyScalar(0.6 + r() * 1.2);
    }
    uniforms.uSeed.value = Math.floor(r() * 1000);
    cubeCam.update(renderer, bakeScene);
    if (envRT) envRT.dispose();
    envRT = pmrem.fromCubemap(cubeRT.texture);
    // Bright stars, crowded toward the Milky Way.
    const pole = uniforms.uPole.value;
    const v = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      v.copy(dir());
      if (r() < 0.45) { v.addScaledVector(pole, -v.dot(pole) * (0.7 + r() * 0.3)).normalize(); }
      sPos.set([v.x, v.y, v.z], i * 3);
      const m = r() ** 6; // most are faint
      const tc = r();
      const c = tc < 0.18 ? [0.7, 0.82, 1.0] : tc < 0.75 ? [1.0, 0.97, 0.93] : tc < 0.94 ? [1.0, 0.84, 0.62] : [1.0, 0.62, 0.48];
      const b = 0.25 + m * 3.5;
      sCol.set([c[0] * b, c[1] * b, c[2] * b], i * 3);
      sSize[i] = m * 2.2;
    }
    starGeo.attributes.position.needsUpdate = true;
    starGeo.attributes.color.needsUpdate = true;
    starGeo.attributes.size.needsUpdate = true;
  }

  return {
    stars,
    bake,
    get background() { return cubeRT.texture; },
    get env() { return envRT ? envRT.texture : null; },
    update(t, pr) { starMat.uniforms.uT.value = t; starMat.uniforms.uPR.value = pr; },
  };
}
