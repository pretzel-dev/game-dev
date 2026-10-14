/**
 * The stunt pieces, drawn as one mesh: every loop, ramp, deck and pipe is
 * swept geometry carrying a "paint" attribute (which finish, and where on
 * it), and one toon shader turns that into hazard stripes, kerbs, planks,
 * chevrons and the glowing arrows on boost pads. Pillars are instanced.
 */
import {
  BufferAttribute,
  BufferGeometry,
  CylinderGeometry,
  DoubleSide,
  InstancedMesh,
  Matrix4,
  Mesh,
  MeshToonMaterial,
  Quaternion,
  Vector3,
} from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { TOON_RAMP, mat } from './materials.js';
import { NOISE_GLSL } from './terrain-mesh.js';

const PAINT_GLSL = /* glsl */ `
  vec3 paintColor(vec4 p, vec3 w, out float glow) {
    float id = floor(p.x + 0.5);
    float u = p.y;
    float v = p.z;
    float width = p.w;
    glow = 0.0;
    if (id < 0.5) {
      // Asphalt: a dark road, white edge lines, a dashed yellow centre.
      vec3 c = srgb(vec3(0.24, 0.23, 0.24)) * (0.92 + 0.08 * dlNoise(vec2(u, v) * 1.7));
      float edge = step(u, 0.45) + step(width - 0.45, u);
      c = mix(c, srgb(vec3(0.95, 0.93, 0.88)), clamp(edge, 0.0, 1.0));
      float dash = step(abs(u - width * 0.5), 0.14) * step(fract(v / 5.0), 0.55);
      c = mix(c, srgb(vec3(0.98, 0.78, 0.18)), dash);
      return c;
    } else if (id < 1.5) {
      // Hazard stripes.
      float s = step(0.5, fract((u + v) / 1.4));
      return mix(srgb(vec3(0.98, 0.78, 0.12)), srgb(vec3(0.13, 0.12, 0.13)), s);
    } else if (id < 2.5) {
      return srgb(vec3(0.78, 0.25, 0.17));
    } else if (id < 3.5) {
      return srgb(vec3(0.33, 0.26, 0.24));
    } else if (id < 4.5) {
      // Planks, running round the drum.
      float plank = floor(u / 0.32);
      vec3 c = srgb(vec3(0.74, 0.52, 0.32)) * (0.86 + 0.14 * dlHash(vec2(plank, floor(v / 4.0 + plank * 0.37))));
      c *= 1.0 - 0.25 * step(0.92, fract(u / 0.32));
      return c;
    } else if (id < 5.5) {
      // Kicker: orange with white chevrons pointing the way up.
      vec3 c = srgb(vec3(0.96, 0.47, 0.13));
      float ch = fract(v / 2.2 - abs(u - width * 0.5) * 0.28);
      c = mix(c, srgb(vec3(0.99, 0.95, 0.88)), step(0.72, ch));
      float edge = step(u, 0.3) + step(width - 0.3, u);
      return mix(c, srgb(vec3(0.15, 0.14, 0.15)), clamp(edge, 0.0, 1.0));
    } else if (id < 6.5) {
      // Boost pad: green, with arrows that run forward.
      vec3 c = srgb(vec3(0.10, 0.42, 0.20));
      float a = fract((v - uTime * 9.0) / 3.0 + abs(u - width * 0.5) * 0.22);
      float arrow = step(0.62, a) * step(abs(u - width * 0.5), width * 0.42);
      glow = arrow;
      return mix(c, srgb(vec3(0.45, 1.0, 0.45)), arrow);
    } else if (id < 7.5) {
      // Kerb: red and white blocks.
      return mix(srgb(vec3(0.85, 0.16, 0.13)), srgb(vec3(0.97, 0.95, 0.92)), step(0.5, fract(v / 1.6)));
    } else if (id < 8.5) {
      // Skatepark concrete with seams.
      vec3 c = srgb(vec3(0.86, 0.81, 0.74)) * (0.95 + 0.05 * dlNoise(vec2(u, v) * 0.8));
      c *= 1.0 - 0.12 * step(0.96, fract(v / 4.0));
      return c;
    } else if (id < 9.5) {
      return srgb(vec3(0.60, 0.58, 0.56));
    }
    return strata(w);
  }
`;

export function createTrackMesh(scene, layout) {
  let count = 0;
  for (const p of layout.pieces) count += p.positions.length / 3;
  const pos = new Float32Array(count * 3);
  const paint = new Float32Array(count * 4);
  let o = 0;
  for (const p of layout.pieces) {
    pos.set(p.positions, o * 3);
    // Width of each strip, for centre lines and chevrons: the largest u in
    // each group of six vertices (one quad).
    for (let k = 0; k < p.paints.length / 3; k++) {
      paint[(o + k) * 4] = p.paints[k * 3];
      paint[(o + k) * 4 + 1] = p.paints[k * 3 + 1];
      paint[(o + k) * 4 + 2] = p.paints[k * 3 + 2];
      const q = Math.floor(k / 6) * 6;
      let w = 0;
      for (let m = 0; m < 6; m++) w = Math.max(w, p.paints[(q + m) * 3 + 1] || 0);
      paint[(o + k) * 4 + 3] = w;
    }
    o += p.positions.length / 3;
  }
  let geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(pos, 3));
  geo.setAttribute('aPaint', new BufferAttribute(paint, 4));
  geo = mergeVertices(geo, 1e-3);
  geo.computeVertexNormals();
  geo.computeBoundingSphere();

  const time = { value: 0 };
  const material = new MeshToonMaterial({ color: 0xffffff, gradientMap: TOON_RAMP, side: DoubleSide });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = time;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 aPaint;\nvarying vec4 vPaint;\nvarying vec3 vWorld;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvPaint = aPaint;\nvWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>\nvarying vec4 vPaint;\nvarying vec3 vWorld;\nuniform float uTime;\n${NOISE_GLSL}\n${PAINT_GLSL}`
      )
      .replace(
        'vec4 diffuseColor = vec4( diffuse, opacity );',
        'float glow;\nvec4 diffuseColor = vec4( paintColor(vPaint, vWorld, glow), opacity );'
      )
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * glow * 1.4;');
  };
  const mesh = new Mesh(geo, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.matrixAutoUpdate = false;
  scene.add(mesh);

  // Pillars.
  const pillarGeo = new CylinderGeometry(1, 1, 1, 10);
  pillarGeo.translate(0, 0.5, 0);
  const pillars = new InstancedMesh(pillarGeo, mat(0xb9b2aa), layout.pillars.length);
  const m = new Matrix4();
  const q = new Quaternion();
  layout.pillars.forEach((p, i) => {
    m.compose(new Vector3(p.x, p.y0, p.z), q, new Vector3(p.r, p.y1 - p.y0, p.r));
    pillars.setMatrixAt(i, m);
  });
  pillars.castShadow = true;
  pillars.receiveShadow = true;
  scene.add(pillars);

  return {
    mesh,
    update(t) {
      time.value = t;
    },
  };
}
