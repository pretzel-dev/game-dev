/**
 * The small things: houses, trees, boats, piers, clouds.
 *
 * Everything is built from primitives with flat shading and no textures. The
 * charm has to come from proportion and colour, so shapes stay simple and the
 * variation lives in the numbers.
 */
import {
  BufferGeometry,
  CapsuleGeometry,
  Color,
  ConeGeometry,
  BoxGeometry,
  CylinderGeometry,
  Float32BufferAttribute,
  Group,
  IcosahedronGeometry,
  Mesh,
  SphereGeometry,
  TorusGeometry,
} from 'three';
import { MAT, mat, HOUSE_WALLS, HOUSE_ROOFS, CLOTH } from '../core/materials.js';
import { chance, pick, rand, TAU } from '../core/utils.js';
import { terrainHeightAt } from './terrain.js';
import { createCloth } from './cloth.js';

/* --------------------------------------------------------------- houses --- */

export function createHouse(parent, { x, z, rot = 0, scale = 1, wall = null, tall = false } = {}) {
  const group = new Group();
  group.position.set(x, terrainHeightAt(x, z) - 0.6, z);
  group.rotation.y = rot;
  group.scale.setScalar(scale);
  parent.add(group);

  const w = rand(12, 15.5);
  const d = rand(10.5, 13);
  const storeys = tall ? 3 : chance(0.3) ? 2 : 1;
  const h = 6.2 + storeys * 3.4;

  const walls = new Mesh(new BoxGeometry(w, h, d), wall || pick(HOUSE_WALLS));
  walls.position.y = h / 2;
  walls.castShadow = true;
  walls.receiveShadow = true;
  group.add(walls);

  const roof = new Mesh(new ConeGeometry(Math.max(w, d) * 0.79, 5.6, 4), pick(HOUSE_ROOFS));
  roof.position.y = h + 2.6;
  roof.rotation.y = Math.PI / 4;
  roof.scale.z = d / w;
  roof.castShadow = true;
  group.add(roof);

  const door = new Mesh(new BoxGeometry(2.7, 5, 0.3), MAT.woodDark);
  door.position.set(rand(-2, 2), 2.5, d / 2 + 0.1);
  group.add(door);

  // Shuttered windows, one row per storey.
  for (let s = 0; s < storeys; s++) {
    const y = 6.6 + s * 3.4;
    if (y > h - 1.6) continue;
    for (const sx of [-w * 0.26, w * 0.26]) {
      const win = new Mesh(new BoxGeometry(2.3, 2.6, 0.24), MAT.blue);
      win.position.set(sx, y, d / 2 + 0.08);
      group.add(win);
    }
    if (chance(0.5)) {
      const side = new Mesh(new BoxGeometry(0.24, 2.4, 2.1), MAT.blue);
      side.position.set(w / 2 + 0.06, y, rand(-2, 2));
      group.add(side);
    }
  }

  if (chance(0.55)) {
    const chimney = new Mesh(new BoxGeometry(1.9, 4.6, 1.9), MAT.plaster2);
    chimney.position.set(rand(-w * 0.3, w * 0.3), h + 2.2, rand(-2, 2));
    chimney.castShadow = true;
    group.add(chimney);
  }

  if (chance(0.35)) {
    // A striped awning over the door.
    const awning = new Mesh(new BoxGeometry(5.4, 0.35, 2.6), pick([MAT.red, MAT.blue, MAT.cream]));
    awning.position.set(door.position.x, 6.1, d / 2 + 1.2);
    awning.rotation.x = -0.28;
    awning.castShadow = true;
    group.add(awning);
  }

  if (chance(0.3)) {
    // A little flag on the gable — the wind system animates it.
    const pole = new Mesh(new CylinderGeometry(0.12, 0.12, 4.4, 5), MAT.woodDark);
    pole.position.set(w * 0.36, h + 4, 0);
    group.add(pole);
    const flag = createCloth(group, { width: 3.4, height: 2.2, material: pick(CLOTH), phase: rand(0, TAU) });
    flag.position.set(w * 0.36 + 1.8, h + 4.9, 0);
  }

  return group;
}

/* ---------------------------------------------------------------- trees --- */

const TREE_KINDS = ['round', 'cypress', 'olive', 'palm'];

export function createTree(parent, x, z, scale = 1, kind = null) {
  const ground = terrainHeightAt(x, z);
  if (ground < 4.5) return null;

  const group = new Group();
  group.position.set(x, ground, z);
  group.rotation.y = rand(0, TAU);
  group.scale.setScalar(scale);
  parent.add(group);

  const type = kind || pick(TREE_KINDS);
  if (type === 'cypress') {
    const trunk = new Mesh(new CylinderGeometry(0.7, 1.1, 5, 6), MAT.woodDark);
    trunk.position.y = 2.5;
    group.add(trunk);
    const crown = new Mesh(new ConeGeometry(2.9, 15, 7), MAT.leaf);
    crown.position.y = 11;
    crown.castShadow = true;
    group.add(crown);
  } else if (type === 'olive') {
    const trunk = new Mesh(new CylinderGeometry(1, 1.7, 5.5, 6), MAT.wood);
    trunk.position.y = 2.7;
    trunk.rotation.z = rand(-0.12, 0.12);
    group.add(trunk);
    for (let i = 0; i < 3; i++) {
      const puff = new Mesh(new IcosahedronGeometry(rand(3.4, 5), 0), chance(0.5) ? MAT.leaf : MAT.leaf2);
      puff.position.set(rand(-3, 3), rand(6.5, 9), rand(-3, 3));
      puff.scale.y = 0.72;
      puff.castShadow = true;
      group.add(puff);
    }
  } else if (type === 'palm') {
    const trunk = new Mesh(new CylinderGeometry(0.55, 1.1, 11, 6), MAT.wood);
    trunk.position.y = 5.5;
    trunk.rotation.z = rand(-0.16, 0.16);
    trunk.castShadow = true;
    group.add(trunk);
    for (let i = 0; i < 6; i++) {
      const frond = new Mesh(new ConeGeometry(1.5, 7.5, 3), MAT.leaf2);
      const a = (i / 6) * TAU + rand(-0.2, 0.2);
      frond.position.set(Math.cos(a) * 2.6, 11.2, Math.sin(a) * 2.6);
      frond.rotation.set(Math.sin(a) * 1.15, -a, -Math.cos(a) * 1.15);
      frond.castShadow = true;
      group.add(frond);
    }
  } else {
    const trunk = new Mesh(new CylinderGeometry(1.1, 1.7, 7.5, 6), MAT.wood);
    trunk.position.y = 3.7;
    trunk.castShadow = true;
    group.add(trunk);
    const crown = new Mesh(new IcosahedronGeometry(6.2, 1), chance(0.5) ? MAT.leaf : MAT.leaf2);
    crown.scale.set(rand(0.8, 1.1), rand(1, 1.35), rand(0.8, 1.1));
    crown.position.y = 10.4;
    crown.castShadow = true;
    group.add(crown);
  }
  return group;
}

/* ---------------------------------------------------------------- boats --- */

/**
 * @param {object} [opts]
 * @param {boolean} [opts.moored] Tied up: bobs on the swell but never wanders.
 * @param {number}  [opts.heading] Which way it points.
 */
export function createBoat(parent, x, z, scale = 1, { moored = false, heading = null } = {}) {
  const group = new Group();
  group.position.set(x, 1.2, z);
  group.rotation.y = heading ?? rand(0, TAU);
  group.scale.setScalar(scale);
  parent.add(group);

  // Hull: a slab with a pointed bow, which is all a boat needs from the air.
  const hullColour = pick([MAT.wood, MAT.red, MAT.blue, MAT.cream]);
  const hull = new Mesh(new BoxGeometry(5.4, 2.6, 10), hullColour);
  hull.position.y = 0.1;
  hull.castShadow = true;
  group.add(hull);

  const bow = new Mesh(new ConeGeometry(3.9, 6, 4), hullColour);
  bow.rotation.x = Math.PI / 2;
  bow.rotation.z = Math.PI / 4;
  bow.scale.set(0.98, 1, 0.66);
  bow.position.set(0, 0.1, 7.2);
  bow.castShadow = true;
  group.add(bow);

  const rail = new Mesh(new BoxGeometry(5.8, 0.45, 10.4), MAT.cream);
  rail.position.y = 1.5;
  group.add(rail);

  const fishing = chance(0.55);
  if (fishing) {
    const cabin = new Mesh(new BoxGeometry(4, 2.8, 4.4), MAT.cream);
    cabin.position.set(0, 3.1, -2.2);
    cabin.castShadow = true;
    group.add(cabin);
    const roof = new Mesh(new BoxGeometry(4.4, 0.4, 4.8), MAT.blue);
    roof.position.set(0, 4.6, -2.2);
    group.add(roof);
    // Net stack and a couple of floats.
    const net = new Mesh(new TorusGeometry(1.5, 0.5, 5, 8), MAT.leaf2);
    net.rotation.x = Math.PI / 2;
    net.position.set(0, 2, 3.4);
    group.add(net);
  } else {
    const mast = new Mesh(new CylinderGeometry(0.18, 0.24, 12, 6), MAT.wood);
    mast.position.y = 6;
    mast.castShadow = true;
    group.add(mast);
    const sail = new Mesh(sailGeometry(), chance(0.5) ? MAT.white : MAT.red);
    sail.position.set(0.3, 0, 0);
    sail.castShadow = true;
    group.add(sail);
  }

  if (chance(0.4)) {
    const flag = createCloth(group, { width: 2.2, height: 1.4, material: pick(CLOTH) });
    flag.position.set(1.2, fishing ? 6 : 11.4, -2);
  }

  return {
    group,
    phase: rand(0, TAU),
    drift: moored ? 0 : rand(1.4, 3.6), // units per second
    heading: group.rotation.y,
    turn: 0,
    turnTimer: 0,
  };
}

function sailGeometry() {
  const geometry = new BufferGeometry();
  geometry.setAttribute(
    'position',
    new Float32BufferAttribute([0, 11, 0, 0, 1.6, 0, 6.4, 2.4, 0], 3)
  );
  geometry.setIndex([0, 1, 2]);
  geometry.computeVertexNormals();
  return geometry;
}

/* ----------------------------------------------------------- structures --- */

export function createPier(parent, { x, z, length = 54, width = 5, rot = 0 }) {
  const group = new Group();
  group.position.set(x, 0, z);
  group.rotation.y = rot;
  parent.add(group);

  const deck = new Mesh(new BoxGeometry(width, 0.9, length), MAT.wood);
  deck.position.y = 3.1;
  deck.castShadow = true;
  deck.receiveShadow = true;
  group.add(deck);

  const posts = Math.max(2, Math.round(length / 9));
  for (let i = 0; i < posts; i++) {
    const t = (i + 0.5) / posts - 0.5;
    for (const side of [-1, 1]) {
      const post = new Mesh(new CylinderGeometry(0.45, 0.5, 7, 5), MAT.woodDark);
      post.position.set((side * width) / 2.6, 0.4, t * length);
      group.add(post);
    }
  }
  return group;
}

/* --------------------------------------------------------------- clouds --- */

// Clouds are lit by a sun that never quite reaches their undersides, so they
// get their own material with enough self-illumination to stay cloud-white.
const CLOUD_MATERIAL = mat(0xfffaf0, { flat: false, roughness: 1 });
CLOUD_MATERIAL.emissive = new Color(0x4a4438);

export function createCloud(parent, x, y, z, scale = 1) {
  const group = new Group();
  group.position.set(x, y, z);
  group.scale.setScalar(scale);
  group.rotation.y = rand(0, TAU);
  parent.add(group);

  const puffs = 4 + Math.floor(rand(0, 3));
  for (let i = 0; i < puffs; i++) {
    const puff = new Mesh(new IcosahedronGeometry(rand(6, 12), 1), CLOUD_MATERIAL);
    puff.scale.set(rand(1.2, 2), rand(0.5, 0.85), rand(0.9, 1.5));
    puff.position.set(i * 8 - rand(10, 17), rand(-2, 4), rand(-5, 5));
    group.add(puff);
  }
  return { group, drift: rand(0.5, 1.3), bob: rand(0, TAU) };
}

/* ------------------------------------------------------------- villager --- */

export function createVillager(parent, x, z) {
  const ground = terrainHeightAt(x, z);
  if (ground < 2) return null;

  const group = new Group();
  group.position.set(x, ground, z);
  group.rotation.y = rand(0, TAU);
  group.scale.setScalar(rand(0.85, 1.15));
  parent.add(group);

  const body = new Mesh(new CapsuleGeometry(0.62, 1.5, 3, 7), pick([MAT.red, MAT.blue, MAT.yellow, MAT.navy, MAT.cream]));
  body.position.y = 1.45;
  body.castShadow = true;
  group.add(body);

  const head = new Mesh(new SphereGeometry(0.6, 8, 6), MAT.skin);
  head.position.y = 2.75;
  group.add(head);

  if (chance(0.35)) {
    const hat = new Mesh(new ConeGeometry(0.95, 0.5, 8), MAT.linen);
    hat.position.y = 3.16;
    group.add(hat);
  }

  return {
    group,
    phase: rand(0, TAU),
    speed: rand(0.5, 1.3),
    heading: group.rotation.y,
    home: { x, z },
  };
}
