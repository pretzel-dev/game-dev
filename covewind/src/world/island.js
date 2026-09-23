/**
 * The island meshes, their cliffs and the rocks in the water.
 *
 * One polar grid per island, with vertex colours — sand, grass, dry grass,
 * rock — chosen from the same height field the aeroplane collides with, so the
 * beaches are wherever the land actually meets the sea. Rings bunch a little
 * towards the coast, which is where the silhouette lives.
 */
import {
  BufferGeometry,
  Color,
  CylinderGeometry,
  DodecahedronGeometry,
  Float32BufferAttribute,
  Group,
  Mesh,
  TorusGeometry,
} from 'three';
import {
  ISLANDS,
  PLACES,
  TAU,
  cliffFactorAt,
  island as islandByKey,
  islandRadiusAt,
  terrainGradient,
  terrainHeightAt,
} from './terrain.js';
import { MAT, mat } from '../core/materials.js';
import { palette } from '../core/palette.js';
import { QUALITY } from '../core/quality.js';
import { rand, smoothstep } from '../core/utils.js';

const COLOURS = {
  wetSand: new Color(0xcfb483),
  sand: new Color(palette.sand),
  pebble: new Color(palette.pebble),
  grass: new Color(palette.grass),
  grass2: new Color(palette.grass2),
  dry: new Color(palette.grassDry),
  maquis: new Color(palette.maquis),
  rock: new Color(palette.rock),
  rockWarm: new Color(palette.rockWarm),
};

const _rock = new Color();

/**
 * Ground colour from height and steepness — the island's whole palette, and
 * how grassy the spot is (0..1) for the wind shimmer.
 */
function groundColour(x, z, height, slope, out) {
  // Painted in patches rather than gradients: broad fields, then the scrub
  // and bare stone on top of them, each with a hard-ish edge.
  const broad = 0.5 + 0.5 * Math.sin(x * 0.0075 + z * 0.0061 + 1.3);
  const mid = 0.5 + 0.5 * Math.sin(x * 0.021 + z * 0.017 - 0.6) * Math.sin(z * 0.013 - x * 0.009);
  const fine = 0.5 + 0.5 * Math.sin(x * 0.055 - z * 0.047) * Math.sin(z * 0.038 + 0.7);
  const patch = (v, at) => smoothstep(at - 0.06, at + 0.06, v);

  out.copy(COLOURS.grass).lerp(COLOURS.grass2, patch(broad * 0.6 + mid * 0.4, 0.5) * 0.8);
  // Golden summer grass on the upper slopes and in open patches.
  out.lerp(COLOURS.dry, patch(mid, 0.62) * smoothstep(14, 60, height) * 0.85);
  out.lerp(COLOURS.dry, smoothstep(70, 150, height) * 0.6);
  // Dark maquis in clumps across the lower hillsides.
  const scrub = patch(fine * 0.55 + broad * 0.45, 0.66) * (1 - smoothstep(90, 150, height));
  out.lerp(COLOURS.maquis, scrub * 0.9);

  // White limestone wherever it is steep, banded so a cliff reads as strata.
  const band = 0.5 + 0.5 * Math.sin(height * 0.42 + x * 0.004);
  const rock = _rock.copy(COLOURS.rock).lerp(COLOURS.rockWarm, patch(band, 0.55) * 0.7);
  const bare = Math.max(
    smoothstep(0.85, 1.25, slope),
    patch(mid, 0.7) * smoothstep(110, 160, height)
  );
  out.lerp(rock, Math.min(bare, 1));

  // Pebble beaches, sand, and a darker wet strip right at the waterline.
  const beach = smoothstep(6.5, 3.5, height) * smoothstep(1.4, 0.7, slope);
  out.lerp(broad > 0.5 ? COLOURS.pebble : COLOURS.sand, beach);
  out.lerp(COLOURS.wetSand, smoothstep(1.8, 0.2, height) * smoothstep(1.1, 0.5, slope));

  return (1 - Math.min(bare, 1)) * (1 - beach) * (1 - scrub * 0.6);
}

/** Shared by every island: the wind brushing across the grass. */
export const terrainUniforms = { time: { value: 0 } };

const groundMaterial = (() => {
  const material = mat(0xffffff, { vertexColors: true, soft: true });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.time = terrainUniforms.time;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float grassy;\nvarying float vGrassy;\nvarying vec2 vGround;')
      .replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nvGrassy = grassy;\nvGround = (modelMatrix * vec4(position, 1.0)).xz;'
      );
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float time;\nvarying float vGrassy;\nvarying vec2 vGround;')
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        {
          // Gusts running over a meadow: bright bands that travel downwind.
          vec2 g = vGround;
          float a = sin(g.x * 0.021 + g.y * 0.013 - time * 1.1);
          float b = sin(g.x * 0.047 - g.y * 0.031 - time * 1.7 + a * 1.4);
          float gust = smoothstep(0.55, 0.95, a * 0.6 + b * 0.4);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.16 + vec3(0.03, 0.035, 0.0), gust * vGrassy * 0.75);
        }`
      );
  };
  return material;
})();

/** One island's ground mesh. */
function buildIsland(scene, spec) {
  // Smaller islands need fewer rings, and the segment count follows the coast
  // so triangles stay roughly square whatever the island's size.
  const scale = spec.base / 300;
  const rings = Math.max(20, Math.round(QUALITY.islandRings * (0.6 + scale * 0.4)));
  const segs = Math.max(64, Math.round(QUALITY.islandSegments * (0.55 + scale * 0.45)));

  const positions = [];
  const colors = [];
  const grass = [];
  const indices = [];
  const c = new Color();

  for (let r = 0; r <= rings; r++) {
    const u = r / rings;
    // Bunch rings towards the coast, where the shape matters most — but only
    // gently. Crowd them and the quads become long thin slivers that flat
    // shading turns into radial streaks down every cliff.
    const rr = 1 - Math.pow(1 - u, 1.25);
    for (let s = 0; s < segs; s++) {
      const th = (s / segs) * TAU;
      const edge = islandRadiusAt(spec, th);
      const rad = edge * rr;
      const x = spec.centre.x + Math.cos(th) * rad;
      const z = spec.centre.z + Math.sin(th) * rad;

      let y;
      if (r === rings) {
        y = -40; // skirt, so an island never shows daylight under its hem
      } else {
        y = terrainHeightAt(x, z);
        // A little hand-crumpled noise, strongest on the slopes.
        y += Math.sin(s * 12.37 + r * 2.1) * 0.35 * (1 - rr);
      }
      positions.push(x, y, z);

      const g = terrainGradient(x, z, 5);
      const slope = Math.hypot(g.x, g.z);
      const grassy = groundColour(x, z, y, slope, c);
      if (r === rings) c.lerp(COLOURS.rock, 0.7);
      colors.push(c.r, c.g, c.b);
      grass.push(r === rings ? 0 : grassy);
    }
  }

  for (let r = 0; r < rings; r++) {
    for (let s = 0; s < segs; s++) {
      const n = (s + 1) % segs;
      const a = r * segs + s;
      const b = r * segs + n;
      const d = (r + 1) * segs + s;
      const e = (r + 1) * segs + n;
      // Counter-clockwise seen from above, so the ground faces the sky.
      indices.push(a, b, d, b, e, d);
    }
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
  geometry.setAttribute('grassy', new Float32BufferAttribute(grass, 1));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  const mesh = new Mesh(geometry, groundMaterial);
  mesh.receiveShadow = true;
  mesh.name = `island:${spec.key}`;
  scene.add(mesh);
  return mesh;
}

export function createIslands(scene) {
  const meshes = ISLANDS.map((spec) => buildIsland(scene, spec));
  for (const spec of ISLANDS) addCoastalRocks(scene, spec);
  addCoveArch(scene);
  return { meshes, byKey: Object.fromEntries(ISLANDS.map((s, i) => [s.key, meshes[i]])) };
}

/** A rough, tapered stack of stone — the shape every good sea cliff has. */
function rockStack(height, radius, material) {
  const group = new Group();
  let y = 0;
  let r = radius;
  const slabs = 2 + Math.floor(rand(1, 3.99));
  for (let i = 0; i < slabs; i++) {
    const h = (height / slabs) * rand(0.75, 1.25);
    const slab = new Mesh(new CylinderGeometry(r * rand(0.62, 0.86), r, h, 6 + ((i * 2) % 3), 1), material);
    slab.position.y = y + h / 2;
    slab.rotation.y = rand(0, TAU);
    slab.castShadow = true;
    slab.receiveShadow = true;
    group.add(slab);
    y += h * 0.94;
    r *= rand(0.66, 0.86);
  }
  return group;
}

/** Stacks and boulders along the cliffy parts of one island's coast. */
function addCoastalRocks(scene, spec) {
  const count = Math.round(QUALITY.coveRocks * (spec.key === 'atoll' ? 0.3 : 0.75));
  for (let i = 0; i < count; i++) {
    // Walk the coast, and only build where it is genuinely cliffy.
    let th = 0;
    let tries = 0;
    do {
      th = rand(0, TAU);
      tries++;
    } while (cliffFactorAt(spec, th) < 0.45 && tries < 60);
    if (cliffFactorAt(spec, th) < 0.3) continue;

    const edge = islandRadiusAt(spec, th);
    const offshore = rand(-6, 34); // most sit just off the rocks
    const rad = edge + offshore;
    const x = spec.centre.x + Math.cos(th) * rad;
    const z = spec.centre.z + Math.sin(th) * rad;
    const ground = terrainHeightAt(x, z);
    const height = rand(12, 34) * (offshore > 12 ? 0.85 : 1.2);

    const stack = rockStack(height, rand(8, 18), i % 3 === 0 ? MAT.rockWarm : MAT.rock);
    stack.position.set(x, Math.max(ground - 3, -7), z);
    stack.rotation.y = rand(0, TAU);
    scene.add(stack);
  }

  // A handful of boulders on the beaches, for scale.
  for (const beach of spec.beaches ?? []) {
    for (let i = 0; i < 4; i++) {
      const th = beach.theta + rand(-0.3, 0.3);
      const rad = islandRadiusAt(spec, th) * rand(0.82, 0.98);
      const x = spec.centre.x + Math.cos(th) * rad;
      const z = spec.centre.z + Math.sin(th) * rad;
      const ground = terrainHeightAt(x, z);
      if (ground < -3 || ground > 16) continue;
      const boulder = new Mesh(new DodecahedronGeometry(rand(2.4, 5.5), 0), MAT.rock);
      boulder.position.set(x, ground + 0.6, z);
      boulder.rotation.set(rand(-0.4, 0.4), rand(0, TAU), rand(-0.3, 0.3));
      boulder.scale.y = rand(0.6, 1.05);
      boulder.castShadow = true;
      boulder.receiveShadow = true;
      scene.add(boulder);
    }
  }
}

/**
 * The arch at the mouth of the cove. It is big enough to fly through, which is
 * the only kind of challenge this archipelago offers.
 */
function addCoveArch(scene) {
  const { x, z, theta } = archPosition();
  const arch = new Group();
  arch.position.set(x, 0, z);
  arch.rotation.y = -theta + Math.PI / 2;

  const span = 30;
  const legHeight = 24;
  for (const side of [-1, 1]) {
    const leg = new Mesh(new CylinderGeometry(7.5, 11.5, legHeight, 7, 1), MAT.rockWarm);
    leg.position.set(side * span, legHeight / 2 - 5, 0);
    leg.rotation.y = side * 0.4;
    leg.castShadow = true;
    leg.receiveShadow = true;
    arch.add(leg);
  }

  const top = new Mesh(new TorusGeometry(span, 8, 5, 12, Math.PI), MAT.rockWarm);
  top.position.y = legHeight - 5;
  top.scale.y = 0.78;
  top.castShadow = true;
  top.receiveShadow = true;
  arch.add(top);

  const cap = new Mesh(new DodecahedronGeometry(9, 0), MAT.rock);
  cap.position.set(rand(-6, 6), legHeight + span * 0.78 - 7, 0);
  cap.scale.set(1.2, 0.7, 0.9);
  cap.castShadow = true;
  arch.add(cap);

  scene.add(arch);
  return arch;
}

/** Where the arch is, so the rest of the world can point at it. */
export function archPosition() {
  const spec = islandByKey('cove');
  const theta = Math.atan2(PLACES.coveBeach.z - spec.centre.z, PLACES.coveBeach.x - spec.centre.x);
  const radius = islandRadiusAt(spec, theta) + 62;
  return {
    x: spec.centre.x + Math.cos(theta) * radius,
    z: spec.centre.z + Math.sin(theta) * radius,
    theta,
  };
}
