/**
 * The ground: the height field as a handful of big chunks, painted in the
 * shader from where each pixel is (no textures beyond one small map):
 * orange sand with wind ripples, striped red rock wherever it is steep,
 * pale mud on the floor of the wash, and packed dirt with ruts on the roads.
 */
import {
  BufferAttribute,
  BufferGeometry,
  DataTexture,
  LinearFilter,
  Mesh,
  RGBAFormat,
  UnsignedByteType,
} from 'three';
import { HALF, CELL, N, field, roadDist, normalAt, washDepth, MESAS } from '../world/terrain.js';
import { SOFT_RAMP } from './materials.js';
import { MeshToonMaterial } from 'three';
import { QUALITY } from '../core/quality.js';

export const NOISE_GLSL = /* glsl */ `
  float dlHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float dlNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(dlHash(i), dlHash(i + vec2(1, 0)), f.x), mix(dlHash(i + vec2(0, 1)), dlHash(i + vec2(1, 1)), f.x), f.y);
  }
  float dlFbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) { v += dlNoise(p) * a; p = p * 2.03 + 17.1; a *= 0.5; }
    return v;
  }
  vec3 srgb(vec3 c) { return pow(c, vec3(2.2)); }
  /* The cliffs' stripes, shared by the ground and natural rock pieces. */
  vec3 strata(vec3 w) {
    // Bands a few metres tall low down, broad ones up the canyon wall.
    float scale = mix(0.2, 0.075, smoothstep(40.0, 140.0, w.y));
    float band = w.y * scale + dlNoise(w.xz * 0.02) * 1.6 + dlNoise(w.xz * 0.09) * 0.25;
    float k = mod(floor(band), 5.0);
    vec3 c = k < 1.0 ? vec3(0.70, 0.29, 0.19)
      : k < 2.0 ? vec3(0.84, 0.48, 0.30)
      : k < 3.0 ? vec3(0.92, 0.72, 0.53)
      : k < 4.0 ? vec3(0.78, 0.40, 0.25)
      : vec3(0.56, 0.23, 0.16);
    c *= 0.9 + 0.1 * step(0.8, fract(band * 3.0));
    c *= 0.93 + 0.07 * dlNoise(w.xz * 0.3 + w.y);
    return srgb(c);
  }
`;

/** RGBA8 map: R road distance (×8), G wash depth (×10), B mesa-top, A steepness. */
function makeMap() {
  const nrm = { x: 0, y: 1, z: 0 };
  const data = new Uint8Array(N * N * 4);
  for (let j = 0; j < N; j++) {
    const z = -HALF + j * CELL;
    for (let i = 0; i < N; i++) {
      const x = -HALF + i * CELL;
      const k = j * N + i;
      data[k * 4] = Math.min(255, roadDist[k] * 8);
      data[k * 4 + 1] = Math.min(255, washDepth(x, z) * 10);
      let top = 0;
      for (const m of MESAS) {
        if (m.kind === 'mesa' && Math.hypot(x - m.x, z - m.z) < m.r * 0.92) top = 255;
      }
      data[k * 4 + 2] = top;
      normalAt(x, z, nrm);
      data[k * 4 + 3] = Math.min(255, (1 - nrm.y) * 600);
    }
  }
  const tex = new DataTexture(data, N, N, RGBAFormat, UnsignedByteType);
  tex.magFilter = LinearFilter;
  tex.minFilter = LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

export function createTerrainMesh(scene) {
  const map = makeMap();
  const material = new MeshToonMaterial({ color: 0xffffff, gradientMap: SOFT_RAMP });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.tMap = { value: map };
    shader.uniforms.fieldHalf = { value: HALF };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWorld;\nvarying vec3 vWNormal;')
      .replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nvWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;\nvWNormal = normalize(mat3(modelMatrix) * objectNormal);'
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        varying vec3 vWorld;
        varying vec3 vWNormal;
        uniform sampler2D tMap;
        uniform float fieldHalf;
        ${NOISE_GLSL}
        vec3 groundColor() {
          vec2 uv = (vWorld.xz + fieldHalf) / (2.0 * fieldHalf);
          vec4 m = texture2D(tMap, uv);
          float roadD = m.r * 255.0 / 8.0;
          float wash = m.g * 255.0 / 10.0;
          // Steepness from the field itself (smooth), not the mesh normals.
          float slope = m.a * 255.0 / 600.0;
          vec2 p = vWorld.xz;
          float n1 = dlFbm(p * 0.012);
          float n2 = dlNoise(p * 0.21);
          vec3 sand = mix(srgb(vec3(0.85, 0.52, 0.30)), srgb(vec3(0.93, 0.66, 0.42)), n1);
          // Wind ripples: fine lines that wander.
          float rip = sin(dot(p, vec2(0.8, 0.6)) * 1.9 + n1 * 14.0 + dlNoise(p * 0.05) * 6.0);
          sand *= 1.0 - 0.07 * smoothstep(0.55, 1.0, rip);
          // Scrubby, darker ground in patches.
          float scrub = smoothstep(0.52, 0.72, dlFbm(p * 0.004 + 40.0));
          sand = mix(sand, srgb(vec3(0.72, 0.55, 0.36)), scrub * 0.45);
          sand *= 0.95 + 0.05 * n2;
          // Mesa tops: a darker desert-varnish crust.
          sand = mix(sand, srgb(vec3(0.66, 0.36, 0.24)), m.b * 0.6);
          vec3 col = mix(sand, strata(vWorld), smoothstep(0.16, 0.34, slope));
          // The floor of the wash: pale, cracked mud.
          float floorMask = smoothstep(17.0, 21.0, wash) * (1.0 - smoothstep(0.1, 0.3, slope));
          vec3 mud = srgb(vec3(0.93, 0.78, 0.60));
          vec2 cell = p * 0.35 + dlNoise(p * 0.2) * 0.6;
          vec2 f = abs(fract(cell) - 0.5);
          mud *= 1.0 - 0.18 * smoothstep(0.44, 0.5, max(f.x, f.y));
          col = mix(col, mud, floorMask);
          // Roads: packed dirt, two ruts, a soft berm at the edge.
          float onRoad = 1.0 - smoothstep(6.2, 7.6, roadD);
          vec3 dirt = srgb(vec3(0.80, 0.62, 0.46)) * (0.93 + 0.07 * n2);
          dirt *= 1.0 - 0.13 * (1.0 - smoothstep(0.0, 0.9, abs(roadD - 2.7)));
          col = mix(col, dirt, onRoad);
          col *= 1.0 - 0.08 * (1.0 - smoothstep(0.0, 1.4, abs(roadD - 8.0)));
          return col;
        }`
      )
      .replace('vec4 diffuseColor = vec4( diffuse, opacity );', 'vec4 diffuseColor = vec4( groundColor(), opacity );');
  };

  const step = QUALITY.terrainStep; // in cells
  const chunkCells = 100 * step;
  const meshes = [];
  const nrm = { x: 0, y: 1, z: 0 };
  for (let cj = 0; cj < N - 1; cj += chunkCells) {
    for (let ci = 0; ci < N - 1; ci += chunkCells) {
      const i1 = Math.min(N - 1, ci + chunkCells);
      const j1 = Math.min(N - 1, cj + chunkCells);
      const nx = Math.floor((i1 - ci) / step) + 1;
      const nz = Math.floor((j1 - cj) / step) + 1;
      const pos = new Float32Array(nx * nz * 3);
      const nor = new Float32Array(nx * nz * 3);
      let o = 0;
      for (let b = 0; b < nz; b++) {
        const j = Math.min(N - 1, cj + b * step);
        for (let a = 0; a < nx; a++) {
          const i = Math.min(N - 1, ci + a * step);
          const x = -HALF + i * CELL;
          const z = -HALF + j * CELL;
          pos[o] = x;
          pos[o + 1] = field[j * N + i];
          pos[o + 2] = z;
          normalAt(x, z, nrm);
          nor[o] = nrm.x;
          nor[o + 1] = nrm.y;
          nor[o + 2] = nrm.z;
          o += 3;
        }
      }
      const index = new Uint32Array((nx - 1) * (nz - 1) * 6);
      let k = 0;
      for (let b = 0; b < nz - 1; b++) {
        for (let a = 0; a < nx - 1; a++) {
          const v = b * nx + a;
          index[k++] = v;
          index[k++] = v + nx;
          index[k++] = v + 1;
          index[k++] = v + 1;
          index[k++] = v + nx;
          index[k++] = v + nx + 1;
        }
      }
      const geo = new BufferGeometry();
      geo.setAttribute('position', new BufferAttribute(pos, 3));
      geo.setAttribute('normal', new BufferAttribute(nor, 3));
      geo.setIndex(new BufferAttribute(index, 1));
      geo.computeBoundingSphere();
      geo.computeBoundingBox();
      const mesh = new Mesh(geo, material);
      mesh.receiveShadow = true;
      mesh.matrixAutoUpdate = false;
      scene.add(mesh);
      meshes.push(mesh);
    }
  }
  return { meshes, material };
}

