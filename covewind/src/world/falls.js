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
  CircleGeometry,
  PlaneGeometry,
  ShaderMaterial,
} from 'three';
import { PLACES, terrainHeightAt as heightCut } from './terrain.js';

// The falls pour over the roof of the grotto, so everything here stands on the
// rock as it was before the tunnel was cut.
const terrainHeightAt = (x, z) => heightCut(x, z, true);
import { createTree } from './props.js';
import { MAT, mat } from '../core/materials.js';
import { QUALITY } from '../core/quality.js';
import { chance, rand, TAU } from '../core/utils.js';
import { bakeStatic } from '../core/merge.js';

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

  float hash(float n) { return fract(sin(n) * 43758.5453); }

  void main() {
    // Drawn water: long ribbons of light and shade falling at their own
    // pace, with white streaks breaking through, the way a waterfall is
    // painted in a background rather than simulated.
    float lanes = 22.0;
    float lane = floor(vUv.x * lanes);
    float speed = 1.2 + hash(lane) * 1.1;
    float v = vUv.y * 2.4 + time * speed + hash(lane + 7.0) * 10.0;
    float ribbon = step(0.5, fract(v * 0.7 + hash(lane + 3.0)));
    float streak = step(0.86, fract(v * 1.3 + hash(lane + 11.0) * 3.0));

    vec3 col = mix(deepColor, topColor, 0.35 + ribbon * 0.4);
    col = mix(col, vec3(1.0), streak * 0.85);
    // All foam near the bottom, where it has fallen furthest.
    float foam = smoothstep(0.32, 0.0, vUv.y + (hash(lane) - 0.5) * 0.08);
    col = mix(col, vec3(1.0), foam * 0.9);

    float edge = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x);
    float alpha = (0.72 + ribbon * 0.2 + streak * 0.1) * edge;
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
  const mesh = new Mesh(geometry, mat(0x6cc6d4, { transparent: true, opacity: 0.9, side: DoubleSide, emissive: 0x0d2a33 }));
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

  // The tarn itself is one of the lakes (see `island.js`).

  // The river from the tarn to the lip.
  river(
    group,
    [
      { x: tarn.x + 6, z: tarn.z + 30, y: lipHeight + 0.4 },
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
    sheet.userData.dynamic = true;
    sheets.push(sheet);
    group.add(sheet);
  }

  // Spray where it lands, and a plunge pool of foam.
  const mistMaterial = mat(0xf4fbff, { flat: false, roughness: 1 });
  mistMaterial.transparent = true;
  mistMaterial.opacity = 0.4;
  mistMaterial.emissive = new Color(0x5a6a70);
  const mist = [];
  for (let i = 0; i < (QUALITY.tier === 'low' ? 5 : 9); i++) {
    // Spray to either side of the plunge, leaving the way in behind the
    // fall clear for anyone who knows it is there.
    const side = i % 2 ? 1 : -1;
    const puff = new Mesh(new IcosahedronGeometry(rand(5, 9), 1), mistMaterial);
    puff.position.set(top.x + side * rand(20, 34), rand(2, 16), top.z + 24 + rand(-6, 12));
    puff.scale.set(rand(1, 1.6), rand(0.6, 1), rand(1, 1.5));
    puff.renderOrder = 4;
    puff.userData.dynamic = true;
    mist.push({ mesh: puff, phase: rand(0, TAU), base: puff.position.y });
    group.add(puff);
  }

  const foam = new Mesh(
    new CircleGeometry(40, 24),
    mat(0xf2fbff, { transparent: true, opacity: 0.7, emissive: 0x44555a })
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

  bakeStatic(group);

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
