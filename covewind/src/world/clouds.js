/**
 * Cumulus, the way they are painted in the films: flat grey-violet bottoms,
 * towering sunlit heads, and a hard, clean edge between light and shade.
 *
 * Each cloud is one merged mesh of lumpy puffs, so a whole sky of them is a
 * couple of dozen draw calls. The shading is its own small shader: three
 * steps of light from the sun, a bright rim where the light wraps round the
 * silhouette, and haze that thickens with distance but never quite erases the
 * big towers on the horizon.
 */
import {
  BufferAttribute,
  Color,
  IcosahedronGeometry,
  Mesh,
  ShaderMaterial,
  Vector3,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { QUALITY } from '../core/quality.js';
import { rand, TAU } from '../core/utils.js';

const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vWorld;
  varying float vHeight;
  attribute float height;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vHeight = height;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 litColor;
  uniform vec3 shadeColor;
  uniform vec3 glowColor;
  uniform vec3 sunDir;
  uniform vec3 fogColor;
  uniform float fogNear;
  uniform float fogFar;
  uniform float maxFog;
  varying vec3 vNormal;
  varying vec3 vWorld;
  varying float vHeight;

  void main() {
    vec3 n = normalize(vNormal);
    vec3 l = normalize(sunDir);
    vec3 v = normalize(cameraPosition - vWorld);

    // Wrap the light a little so the terminator sits round the side of each
    // puff, then step it: shade, a mid-tone band, and full sun.
    float d = dot(n, l) * 0.6 + 0.4;
    // Height in the cloud matters as much as the sun: bottoms stay in shade.
    d += (vHeight - 0.35) * 0.55;
    float band = smoothstep(0.28, 0.32, d) * 0.5 + smoothstep(0.6, 0.64, d) * 0.5;
    vec3 col = mix(shadeColor, litColor, band);

    // Silver lining where the sun is behind the cloud.
    float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
    float backlit = max(0.0, dot(-v, l));
    col += (litColor * 0.25 + glowColor * 0.35) * rim * (0.35 + backlit * 0.9);

    float fog = smoothstep(fogNear, fogFar, length(cameraPosition - vWorld)) * maxFog;
    col = mix(col, fogColor, fog);
    gl_FragColor = vec4(col, 1.0);
  }
`;

function createMaterial(maxFog) {
  return new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      litColor: { value: new Color(0xfff1d6) },
      shadeColor: { value: new Color(0xa9a2c8) },
      glowColor: { value: new Color(0xff9a4a) },
      sunDir: { value: new Vector3(-0.55, 0.3, 0.72) },
      fogColor: { value: new Color(0xe9d9bd) },
      fogNear: { value: 900 },
      fogFar: { value: 3200 },
      maxFog: { value: maxFog },
    },
  });
}

/** Lumpy sphere: a cauliflower head rather than a billiard ball. */
function puff(radius, detail, seed) {
  const geometry = new IcosahedronGeometry(radius, detail);
  const pos = geometry.attributes.position;
  const v = new Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n = v.clone().normalize();
    const bump =
      Math.sin(n.x * 5.1 + seed) * Math.sin(n.y * 4.3 + seed * 1.7) * Math.sin(n.z * 4.7 - seed);
    v.multiplyScalar(1 + bump * 0.12);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geometry.computeVertexNormals();
  return geometry;
}

/**
 * Build one cumulus: a wide flat base and a heap that climbs towards the
 * middle. `tower` pushes it taller, for the big ones on the horizon.
 */
function cumulusGeometry({ width = 60, tower = 1, detail = 2 }) {
  const parts = [];
  const count = Math.round(7 + tower * 5);
  const top = width * 0.55 * tower;
  for (let i = 0; i < count; i++) {
    const u = i / (count - 1);
    // Early puffs make the base, later ones stack up the middle.
    const spread = width * (1 - u * 0.7) * 0.5;
    const r = width * (0.2 + (1 - u) * 0.12) * rand(0.8, 1.2);
    const x = rand(-spread, spread);
    const z = rand(-spread * 0.6, spread * 0.6);
    const y = u * top + r * 0.35;
    const g = puff(r, detail, rand(0, 20));
    g.translate(x, y, z);
    parts.push(g);
  }
  const geometry = mergeGeometries(parts, false);
  for (const g of parts) g.dispose();

  // Shear the underside flat, and record how high up the cloud each vertex is
  // so the shader can keep the bottoms in shade.
  const pos = geometry.attributes.position;
  let maxY = 0;
  for (let i = 0; i < pos.count; i++) maxY = Math.max(maxY, pos.getY(i));
  const heights = new Float32Array(pos.count);
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y < 0) pos.setY(i, y * 0.12);
    heights[i] = Math.max(0, y) / maxY;
  }
  geometry.setAttribute('height', new BufferAttribute(heights, 1));
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

export function createClouds(scene) {
  const near = createMaterial(0.85);
  const far = createMaterial(0.55);
  const detail = QUALITY.tier === 'low' ? 1 : 2;
  const clouds = [];

  // Fair-weather cumulus drifting over the islands, some of them low enough
  // to fly through.
  for (let i = 0; i < QUALITY.clouds; i++) {
    const width = rand(40, 95);
    const mesh = new Mesh(cumulusGeometry({ width, tower: rand(0.6, 1.3), detail }), near);
    mesh.position.set(rand(-1600, 1600), rand(190, 380), rand(-1600, 1600));
    mesh.rotation.y = rand(0, TAU);
    scene.add(mesh);
    clouds.push({ group: mesh, drift: rand(1.2, 3), bob: rand(0, TAU) });
  }

  // The towering ones that sit on the horizon all afternoon.
  const towers = [];
  const ring = QUALITY.tier === 'low' ? 7 : 12;
  for (let i = 0; i < ring; i++) {
    const a = (i / ring) * TAU + rand(-0.2, 0.2);
    const distance = rand(2500, 3100);
    const width = rand(380, 700);
    const mesh = new Mesh(cumulusGeometry({ width, tower: rand(1.1, 1.9), detail: 1 }), far);
    mesh.position.set(Math.cos(a) * distance, rand(-40, 30), Math.sin(a) * distance);
    mesh.rotation.y = rand(0, TAU);
    mesh.frustumCulled = false;
    scene.add(mesh);
    towers.push(mesh);
  }

  const materials = [near, far];
  return {
    clouds,
    towers,
    materials,
    /** Called by the lighting whenever the mood changes. */
    setLight({ lit, shade, glow, sunDir, fog, fogNear, fogFar }) {
      for (const m of materials) {
        m.uniforms.litColor.value.copy(lit);
        m.uniforms.shadeColor.value.copy(shade);
        m.uniforms.glowColor.value.copy(glow);
        m.uniforms.sunDir.value.copy(sunDir);
        m.uniforms.fogColor.value.copy(fog);
      }
      near.uniforms.fogNear.value = fogNear;
      near.uniforms.fogFar.value = fogFar + 600;
      far.uniforms.fogNear.value = fogNear * 1.6;
      far.uniforms.fogFar.value = fogFar * 1.4;
    },
    /** The horizon towers travel with the camera, like distant scenery. */
    follow(position) {
      for (const tower of towers) {
        tower.userData.base ??= tower.position.clone();
        tower.position.x = tower.userData.base.x + position.x;
        tower.position.z = tower.userData.base.z + position.z;
      }
    },
  };
}
