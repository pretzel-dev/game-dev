/**
 * The island mesh, its cliffs and the rocks in the water.
 *
 * The ground is one polar grid with vertex colours — sand, grass, dry grass,
 * rock — chosen from the same height field the plane collides with, so the
 * beaches are wherever the land actually meets the sea. Rings bunch up towards
 * the coast, which is where the silhouette lives.
 */
import {
  BufferGeometry,
  Color,
  CylinderGeometry,
  DodecahedronGeometry,
  Float32BufferAttribute,
  Group,
  Mesh,
  MeshStandardMaterial,
  TorusGeometry,
} from 'three';
import {
  PLACES,
  TAU,
  cliffFactor,
  islandRadius,
  terrainGradient,
  terrainHeightAt,
} from './terrain.js';
import { MAT } from '../core/materials.js';
import { palette } from '../core/palette.js';
import { QUALITY } from '../core/quality.js';
import { rand, smoothstep } from '../core/utils.js';

const COLOURS = {
  wetSand: new Color(0xd9bc8a),
  sand: new Color(palette.sand),
  grass: new Color(palette.grass),
  grass2: new Color(palette.grass2),
  dry: new Color(palette.grassDry),
  rock: new Color(palette.rock),
  rockWarm: new Color(palette.rockWarm),
};

const _rock = new Color();

/** Ground colour from height, steepness and how cliffy the coast is here. */
function groundColour(x, z, height, slope, cliff, out) {
  // Three scales of wobble, so the hillside reads as fields, scrub and bare
  // patches rather than one flat green.
  const broad = 0.5 + 0.5 * Math.sin(x * 0.0075 + z * 0.0061 + 1.3);
  const mid = 0.5 + 0.5 * Math.sin(x * 0.021 + z * 0.017 - 0.6) * Math.sin(z * 0.013 - x * 0.009);
  const fine = 0.5 + 0.5 * Math.sin(x * 0.055 - z * 0.047) * Math.sin(z * 0.038 + 0.7);
  out.copy(COLOURS.grass).lerp(COLOURS.grass2, broad * 0.55 + mid * 0.45);
  out.lerp(COLOURS.dry, mid * 0.45 * smoothstep(10, 55, height));
  out.lerp(COLOURS.grass, fine * 0.18);

  // Higher ground dries out towards the ridge.
  out.lerp(COLOURS.dry, smoothstep(52, 140, height) * 0.72);

  // Rock: on anything steep, and along the cliffy stretches of coast. Banded
  // by height so a cliff face reads as strata.
  const band = 0.5 + 0.5 * Math.sin(height * 0.33 + x * 0.004);
  const rock = _rock.copy(COLOURS.rock).lerp(COLOURS.rockWarm, band);
  const bare = Math.max(
    smoothstep(0.4, 0.95, slope),
    cliff * smoothstep(70, 14, height) * 0.85,
    mid * smoothstep(112, 172, height) * 0.8
  );
  out.lerp(rock, Math.min(bare, 1));

  // Beaches, and a darker wet strip right at the waterline.
  out.lerp(COLOURS.sand, smoothstep(7.5, 3.0, height) * smoothstep(1.1, 0.5, slope));
  out.lerp(COLOURS.wetSand, smoothstep(2.2, 0.2, height) * smoothstep(1.1, 0.5, slope));
  return out;
}

export function createIsland(scene) {
  const rings = QUALITY.islandRings;
  const segs = QUALITY.islandSegments;
  const positions = [];
  const colors = [];
  const indices = [];
  const c = new Color();

  for (let r = 0; r <= rings; r++) {
    const u = r / rings;
    // Bunch rings towards the coast, where the shape matters most.
    const rr = 1 - Math.pow(1 - u, 1.7);
    for (let s = 0; s < segs; s++) {
      const th = (s / segs) * TAU;
      const edge = islandRadius(th);
      const cliff = cliffFactor(th);
      const rad = edge * rr;
      const x = Math.cos(th) * rad;
      const z = Math.sin(th) * rad;

      let y;
      if (r === rings) {
        y = -34; // skirt, so the island never shows daylight under its hem
      } else {
        y = terrainHeightAt(x, z);
        // A little hand-crumpled noise, strongest on the slopes.
        y += Math.sin(s * 12.37 + r * 2.1) * 0.55 * (1 - rr);
      }
      positions.push(x, y, z);

      const g = terrainGradient(x, z, 5);
      const slope = Math.hypot(g.x, g.z);
      groundColour(x, z, y, slope, cliff, c);
      if (r === rings) c.lerp(COLOURS.rock, 0.7);
      colors.push(c.r, c.g, c.b);
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
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  const mesh = new Mesh(
    geometry,
    new MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0, flatShading: true })
  );
  mesh.receiveShadow = true;
  mesh.name = 'island';
  scene.add(mesh);

  addCoastalRocks(scene);
  addCoveArch(scene);

  return mesh;
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

/** Stacks and boulders along the cliffy parts of the coast. */
function addCoastalRocks(scene) {
  const count = QUALITY.coveRocks;
  for (let i = 0; i < count; i++) {
    // Walk the coast, and only build where it is genuinely cliffy.
    let th = 0;
    let tries = 0;
    do {
      th = rand(-1.5, 0.6);
      tries++;
    } while (cliffFactor(th) < 0.45 && tries < 40);

    const edge = islandRadius(th);
    const offshore = rand(-6, 34); // most sit just off the rocks
    const rad = edge + offshore;
    const x = Math.cos(th) * rad;
    const z = Math.sin(th) * rad;
    const ground = terrainHeightAt(x, z);
    const height = rand(12, 34) * (offshore > 12 ? 0.85 : 1.2);

    const stack = rockStack(height, rand(8, 18), i % 3 === 0 ? MAT.rockWarm : MAT.rock);
    stack.position.set(x, Math.max(ground - 3, -7), z);
    stack.rotation.y = rand(0, TAU);
    scene.add(stack);
  }

  // A handful of boulders on the beaches, for scale.
  for (let i = 0; i < 8; i++) {
    const target = i % 2 ? PLACES.coveBeach : PLACES.villageBeach;
    const x = target.x + rand(-52, 52);
    const z = target.z + rand(-52, 52);
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

/**
 * The arch at the mouth of the cove. It is big enough to fly through, which is
 * the only kind of challenge this island offers.
 */
function addCoveArch(scene) {
  const theta = Math.atan2(PLACES.coveBeach.z, PLACES.coveBeach.x);
  const radius = islandRadius(theta) + 62;
  const x = Math.cos(theta) * radius;
  const z = Math.sin(theta) * radius;

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
  top.rotation.z = 0;
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
  const theta = Math.atan2(PLACES.coveBeach.z, PLACES.coveBeach.x);
  const radius = islandRadius(theta) + 62;
  return { x: Math.cos(theta) * radius, z: Math.sin(theta) * radius };
}
