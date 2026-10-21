/**
 * The sea floor (and the islands above it) as one big mesh, painted with
 * vertex colours: pale sand, darker deep water sand, rock on the steep bits,
 * and grass on the islands. Rippling patches of sunlight (caustics) dance
 * across everything under the water.
 */
import { BufferAttribute, BufferGeometry, Color, Mesh, MeshLambertMaterial } from 'three';
import { heightAt, slopeAt } from '../world/ocean.js';
import { QUALITY } from '../core/quality.js';

const SAND = new Color(0xf2e2b4);
const DEEP = new Color(0xc8b48a);
const ROCK = new Color(0x9a8a7a);
const GRASS = new Color(0x7ac060);
const BEACH = new Color(0xfff0c8);

/** Shared GLSL: a pattern of moving light, like sunlight through ripples. */
export const CAUSTICS = /* glsl */ `
  uniform float uTime;
  varying vec3 vCausticPos;
  float caustic(vec2 p, float t) {
    vec2 q = p * 0.32;
    float c = 0.0;
    for (int i = 0; i < 3; i++) {
      q += vec2(sin(q.y * 1.7 + t * 0.9), cos(q.x * 1.3 - t * 0.7)) * 0.65;
      c += abs(sin(q.x + q.y));
    }
    c = 1.0 - c / 3.0;
    return pow(max(c, 0.0), 6.0);
  }
`;

/** Add caustics (and their time uniform) to a Lambert or Phong material. */
export function withCaustics(material, uniforms, strength = 0.55) {
  material.onBeforeCompile = (s) => {
    s.uniforms.uTime = uniforms.uTime;
    s.vertexShader = s.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vCausticPos;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvCausticPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\n' + CAUSTICS).replace(
      '#include <color_fragment>',
      `#include <color_fragment>
      {
        float under = step(vCausticPos.y, -0.2);
        float shallow = smoothstep(-40.0, -3.0, vCausticPos.y);
        float c = caustic(vCausticPos.xz, uTime) + 0.5 * caustic(vCausticPos.xz * 1.7 + 3.1, uTime * 1.3);
        diffuseColor.rgb += c * ${strength.toFixed(2)} * shallow * under * vec3(0.75, 1.0, 1.0);
      }`
    );
  };
  material.customProgramCacheKey = () => `caustics${strength}`;
  return material;
}

export function createSeabed(scene, uniforms) {
  const N = QUALITY.seabed;
  const S = 680;
  const step = S / N;
  const pos = new Float32Array((N + 1) * (N + 1) * 3);
  const col = new Float32Array((N + 1) * (N + 1) * 3);
  const c = new Color();
  for (let j = 0; j <= N; j++) {
    for (let i = 0; i <= N; i++) {
      const x = -S / 2 + i * step;
      const z = -S / 2 + j * step;
      const y = heightAt(x, z);
      const k = (j * (N + 1) + i) * 3;
      pos[k] = x;
      pos[k + 1] = y;
      pos[k + 2] = z;
      const g = slopeAt(x, z);
      const steep = Math.min(1, Math.hypot(g.x, g.z) * 1.3);
      c.copy(SAND).lerp(DEEP, Math.min(1, Math.max(0, (-y - 18) / 18)));
      c.lerp(ROCK, steep * 0.8);
      if (y > -0.5) c.copy(BEACH);
      if (y > 1.4) c.copy(BEACH).lerp(GRASS, Math.min(1, (y - 1.4) / 1.2));
      // A little speckle so the sand isn't flat.
      const n = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
      const sp = (n - Math.floor(n) - 0.5) * 0.06;
      col[k] = c.r + sp;
      col[k + 1] = c.g + sp;
      col[k + 2] = c.b + sp;
    }
  }
  const idx = [];
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const a = j * (N + 1) + i;
      const b = a + 1;
      const d = a + N + 1;
      const e = d + 1;
      idx.push(a, d, b, b, d, e);
    }
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(pos, 3));
  g.setAttribute('color', new BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const mesh = new Mesh(g, withCaustics(new MeshLambertMaterial({ vertexColors: true }), uniforms, 0.6));
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}
