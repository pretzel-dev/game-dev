/**
 * The waterfall island: a tarn on the top, a river over the lip, and a long
 * fall into the sea with the spray hanging in front of it.
 *
 * The falling water is one scrolling shader on a couple of quads — cheap, and
 * it reads from a mile away, which is the point of a landmark.
 */
import {
  BufferGeometry,
  Color,
  DoubleSide,
  Float32BufferAttribute,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  ShaderMaterial,
} from 'three';
import { PLACES, terrainHeightAt } from './terrain.js';
import { createTree } from './props.js';
import { MAT, mat } from '../core/materials.js';
import { QUALITY } from '../core/quality.js';
import { chance, rand, TAU } from '../core/utils.js';

const WATER_TOP = new Color(0xbfe9f2);
const WATER_DEEP = new Color(0x5fb6c9);

const fallVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fallFragment = /* glsl */ `
  uniform float time;
  uniform vec3 topColor;
  uniform vec3 deepColor;
  varying vec2 vUv;

  void main() {
    // Streaks falling at slightly different speeds, breaking up as they go.
    float lane = floor(vUv.x * 9.0);
    float speed = 1.4 + fract(sin(lane * 12.9898) * 43758.5453) * 0.8;
    float v = vUv.y * 3.0 + time * speed;
    float streak = 0.55 + 0.45 * sin(v * 6.2831 + lane);
    float broken = smoothstep(0.15, 0.9, fract(v * 0.5 + sin(lane) * 0.3));

    vec3 col = mix(deepColor, topColor, streak * 0.7 + broken * 0.3);
    // Whiter where it has fallen furthest and is all foam.
    col = mix(col, vec3(1.0), smoothstep(0.55, 0.0, vUv.y) * 0.65);

    float alpha = 0.55 + streak * 0.35;
    alpha *= smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
    gl_FragColor = vec4(col, alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

/** A ribbon of still water, for the tarn's outflow. */
function river(parent, points, width) {
  const positions = [];
  const indices = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const prev = points[Math.max(0, i - 1)];
    const next = points[Math.min(points.length - 1, i + 1)];
    const tx = next.x - prev.x;
    const tz = next.z - prev.z;
    const len = Math.hypot(tx, tz) || 1;
    const half = width / 2;
    for (const side of [-1, 1]) {
      const x = p.x + (-tz / len) * half * side;
      const z = p.z + (tx / len) * half * side;
      positions.push(x, Math.max(terrainHeightAt(x, z), p.y) + 0.35, z);
    }
    if (i > 0) {
      const a = (i - 1) * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const mesh = new Mesh(
    geometry,
    new MeshStandardMaterial({
      color: 0x74c4d6,
      roughness: 0.35,
      flatShading: true,
      transparent: true,
      opacity: 0.88,
      side: DoubleSide,
    })
  );
  mesh.renderOrder = 2;
  parent.add(mesh);
  return mesh;
}

export function createFalls(scene) {
  const group = new Group();
  group.name = 'falls';
  scene.add(group);

  const top = PLACES.fallsTop;
  const foot = PLACES.fallsFoot;
  const tarn = PLACES.fallsTarn;
  const lipHeight = terrainHeightAt(top.x, top.z);

  // The tarn on the shelf behind the lip.
  const pool = new Mesh(
    new PlaneGeometry(118, 96, 1, 1),
    new MeshStandardMaterial({
      color: 0x63b6cc,
      roughness: 0.3,
      transparent: true,
      opacity: 0.9,
      flatShading: true,
    })
  );
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(tarn.x, terrainHeightAt(tarn.x, tarn.z) + 1.4, tarn.z);
  pool.renderOrder = 2;
  group.add(pool);

  // The river from the tarn to the lip.
  river(
    group,
    [
      { x: tarn.x + 6, z: tarn.z + 18, y: terrainHeightAt(tarn.x, tarn.z) + 1 },
      { x: tarn.x + 10, z: tarn.z + 44, y: lipHeight + 2 },
      { x: top.x, z: top.z - 8, y: lipHeight + 1.5 },
      { x: top.x, z: top.z + 6, y: lipHeight + 1 },
    ],
    26
  );

  // The fall itself: two quads, one behind the other, so it has some body.
  const drop = lipHeight + 4;
  const material = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: DoubleSide,
    uniforms: {
      time: { value: 0 },
      topColor: { value: WATER_TOP.clone() },
      deepColor: { value: WATER_DEEP.clone() },
    },
    vertexShader: fallVertex,
    fragmentShader: fallFragment,
  });

  const sheets = [];
  for (const [i, offset] of [0, -7].entries()) {
    const sheet = new Mesh(new PlaneGeometry(34 - i * 8, drop, 1, 1), material);
    sheet.position.set(top.x + i * 3, drop / 2 - 2, top.z + 12 + offset * -1);
    sheet.renderOrder = 3;
    sheets.push(sheet);
    group.add(sheet);
  }

  // Spray where it lands, and a plunge pool of foam.
  const mistMaterial = mat(0xf4fbff, { flat: false, roughness: 1 });
  mistMaterial.transparent = true;
  mistMaterial.opacity = 0.5;
  mistMaterial.emissive = new Color(0x5a6a70);
  const mist = [];
  for (let i = 0; i < (QUALITY.tier === 'low' ? 5 : 9); i++) {
    const puff = new Mesh(new IcosahedronGeometry(rand(7, 14), 1), mistMaterial);
    puff.position.set(top.x + rand(-22, 22), rand(2, 26), top.z + 18 + rand(-16, 16));
    puff.scale.set(rand(1, 1.6), rand(0.6, 1), rand(1, 1.5));
    puff.renderOrder = 4;
    mist.push({ mesh: puff, phase: rand(0, TAU), base: puff.position.y });
    group.add(puff);
  }

  const foam = new Mesh(
    new PlaneGeometry(86, 70, 1, 1),
    new MeshStandardMaterial({
      color: 0xf2fbff,
      roughness: 0.6,
      transparent: true,
      opacity: 0.72,
      flatShading: true,
    })
  );
  foam.rotation.x = -Math.PI / 2;
  foam.position.set(top.x + 2, 0.7, top.z + 24);
  foam.renderOrder = 2;
  group.add(foam);

  // Pines along the lip, leaning out over the drop.
  for (let i = 0; i < Math.round(QUALITY.trees * 0.12); i++) {
    createTree(
      group,
      top.x + rand(-90, 90),
      top.z + rand(-70, -12),
      rand(0.7, 1.1),
      chance(0.6) ? 'cypress' : 'round'
    );
  }

  return {
    group,
    position: { x: top.x, y: drop * 0.5, z: top.z + 12 },
    update(t) {
      material.uniforms.time.value = t;
      for (const puff of mist) {
        puff.mesh.position.y = puff.base + Math.sin(t * 0.6 + puff.phase) * 3;
        puff.mesh.rotation.y = t * 0.05 + puff.phase;
      }
    },
    /** Where the foot of the fall is, for the ambience. */
    foot: { x: top.x, y: 4, z: top.z + 20, far: foot },
  };
}
