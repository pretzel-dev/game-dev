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
  CircleGeometry,
  SphereGeometry,
  TorusGeometry,
} from 'three';
import { MAT, mat, HOUSE_WALLS, HOUSE_ROOFS, SHUTTERS, CLOTH } from '../core/materials.js';
import { archedDoor, bougainvillea, flowerPots, hipRoofGeometry, shutteredWindow } from './architecture.js';
import { chance, pick, rand, TAU } from '../core/utils.js';
import { lakeAt, terrainHeightAt } from './terrain.js';
import { plant } from './forest.js';
import { HOUSE_SITES } from './village-plan.js';
import { createCloth } from './cloth.js';
import { bakeLocal } from '../core/merge.js';

/* --------------------------------------------------------------- houses --- */

/**
 * A Dalmatian house: pale stone or washed plaster, a hipped terracotta roof
 * with deep eaves, green shutters, an arched door, and — depending on the
 * house — a balcony of geraniums, bougainvillea down the wall, a flag.
 */
export function createHouse(parent, { x, z, rot = 0, scale = 1, wall = null, tall = false } = {}) {
  const group = new Group();
  group.position.set(x, terrainHeightAt(x, z) - 0.6, z);
  group.rotation.y = rot;
  group.scale.setScalar(scale);
  parent.add(group);

  const w = rand(11, 15);
  const d = rand(9.5, 12.5);
  const storeys = tall ? 3 : chance(0.45) ? 2 : 1;
  const storeyH = 3.6;
  const h = 1.2 + storeys * storeyH + 0.6;
  const wallMat = wall || pick(HOUSE_WALLS);
  const shutter = pick(SHUTTERS);

  // A stone plinth that takes up the slope, then the walls.
  const plinth = new Mesh(new BoxGeometry(w + 0.4, 1.8, d + 0.4), MAT.stoneDark);
  plinth.position.y = 0.3;
  group.add(plinth);
  const walls = new Mesh(new BoxGeometry(w, h, d), wallMat);
  walls.position.y = h / 2;
  group.add(walls);

  const roof = new Mesh(hipRoofGeometry(w, d, rand(3.2, 4.4), 0.9), pick(HOUSE_ROOFS));
  roof.position.y = h;
  group.add(roof);
  // Eaves course under the roof.
  const eaves = new Mesh(new BoxGeometry(w + 0.5, 0.45, d + 0.5), MAT.stone);
  eaves.position.y = h - 0.1;
  group.add(eaves);

  const front = d / 2 + 0.05;
  const doorX = rand(-w * 0.25, w * 0.25);
  archedDoor(group, doorX, front, { w: 2.2, h: 3.4, material: chance(0.5) ? shutter : MAT.woodDark });

  // Windows: a row per storey on the front, and a couple down each side.
  for (let st = 0; st < storeys; st++) {
    const y = 1.2 + st * storeyH + storeyH * 0.55;
    const columns = w > 13 ? [-w * 0.32, 0, w * 0.32] : [-w * 0.27, w * 0.27];
    for (const cx of columns) {
      if (st === 0 && Math.abs(cx - doorX) < 2.6) continue;
      shutteredWindow(group, cx, y, front, { shutter, w: 1.4, h: 2.1 });
    }
    // Sides: a window each, facing out along ±x.
    for (const side of [-1, 1]) {
      if (!chance(0.6)) continue;
      const holder = new Group();
      holder.rotation.y = (side * Math.PI) / 2;
      group.add(holder);
      shutteredWindow(holder, rand(-d * 0.2, d * 0.2), y, w / 2 + 0.05, { shutter, w: 1.3, h: 2 });
    }
  }

  if (storeys > 1 && chance(0.55)) {
    // A balcony on the first floor, with pots along it.
    const y = 1.2 + storeyH;
    const slab = new Mesh(new BoxGeometry(4.6, 0.35, 1.6), MAT.stone);
    slab.position.set(doorX, y, front + 0.8);
    group.add(slab);
    const rail = new Mesh(new BoxGeometry(4.6, 1, 0.12), MAT.dark);
    rail.position.set(doorX, y + 0.7, front + 1.55);
    group.add(rail);
    flowerPots(group, doorX, y + 0.18, front + 1.2, 4, 1);
  } else if (chance(0.5)) {
    flowerPots(group, doorX + 2.2, 0.6, front + 0.5, 2, 0.8);
  }

  if (chance(0.35)) bougainvillea(group, rand(-w * 0.35, w * 0.35), h - 0.5, front, 2.4);

  if (chance(0.6)) {
    // A chimney with the little stone hat they wear here.
    const cx = rand(-w * 0.25, w * 0.25);
    const chimney = new Mesh(new BoxGeometry(1.4, 3.8, 1.4), wallMat);
    chimney.position.set(cx, h + 2.4, rand(-1.5, 1.5));
    group.add(chimney);
    const hat = new Mesh(new BoxGeometry(2, 0.35, 2), MAT.roof2);
    hat.position.set(cx, h + 4.45, chimney.position.z);
    group.add(hat);
  }

  if (chance(0.3)) {
    // A striped awning over the door.
    const awning = new Mesh(new BoxGeometry(4.2, 0.3, 2.2), pick([MAT.red, MAT.blue, MAT.yellow]));
    awning.position.set(doorX, 3.9, front + 1.05);
    awning.rotation.x = -0.3;
    group.add(awning);
  }

  if (chance(0.25)) {
    // A little flag on the roof — the wind system animates it.
    const pole = new Mesh(new CylinderGeometry(0.1, 0.1, 4.4, 5), MAT.woodDark);
    pole.position.set(w * 0.3, h + 3.4, 0);
    group.add(pole);
    const flag = createCloth(group, { width: 3, height: 1.9, material: pick(CLOTH), phase: rand(0, TAU) });
    flag.position.set(w * 0.3 + 1.6, h + 4.6, 0);
  }

  group.traverse((o) => {
    if (o.isMesh && !o.userData.dynamic) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  return group;
}

/* ---------------------------------------------------------------- trees --- */

const TREE_KINDS = ['pine', 'cypress', 'olive', 'round', 'round', 'pine'];

/**
 * Plant a tree (drawn later, instanced, by `forest.js`). Refuses the beach,
 * the sea and anything steep enough to be a cliff. `parent` is kept for the
 * old call sites; trees all live in one forest now.
 */
export function createTree(parent, x, z, scale = 1, kind = null) {
  // Trees on a tunnel roof stand on the rock as it was before it was cut.
  const ground = terrainHeightAt(x, z, true);
  if (ground < 4.5) return null;
  const step = 4;
  const slope =
    Math.hypot(
      terrainHeightAt(x + step, z, true) - terrainHeightAt(x - step, z, true),
      terrainHeightAt(x, z + step, true) - terrainHeightAt(x, z - step, true)
    ) /
    (2 * step);
  if (slope > 0.95) return null;
  if (lakeAt(x, z)) return null;
  // Not through anybody's roof.
  for (const site of HOUSE_SITES) {
    if (Math.abs(site.x - x) < 11 && Math.abs(site.z - z) < 11) return null;
  }
  const type = kind || pick(TREE_KINDS);
  plant(type, x, ground, z, scale * (type === 'bush' ? rand(0.7, 1.3) : 1));
  return true;
}

/* ---------------------------------------------------------------- boats --- */

/**
 * A double-ended wooden hull, lofted from U-shaped sections: pointed at both
 * ends like a gozzo, with the sheer sweeping up at bow and stern.
 */
function hullGeometry(length = 10, beam = 3.4, depth = 1.8) {
  const sections = 12;
  const ring = [];
  for (let i = 0; i <= sections; i++) {
    const t = i / sections;
    const z = (t - 0.5) * length;
    const b = (beam / 2) * Math.pow(Math.sin(Math.PI * t), 0.55);
    const sheer = 0.9 + Math.pow(Math.abs(t - 0.5) * 2, 2.2) * 0.9;
    const d = depth * (0.35 + 0.65 * Math.pow(Math.sin(Math.PI * t), 0.4));
    // Gunwale, bilge and keel on the starboard side, mirrored to port.
    ring.push([
      [b, sheer, z],
      [b * 0.92, -d * 0.35, z],
      [b * 0.45, -d * 0.85, z],
      [0, -d, z],
      [-b * 0.45, -d * 0.85, z],
      [-b * 0.92, -d * 0.35, z],
      [-b, sheer, z],
    ]);
  }
  const positions = [];
  const quad = (a, b, c, d) => positions.push(...a, ...b, ...c, ...a, ...c, ...d);
  for (let i = 0; i < sections; i++) {
    const r0 = ring[i];
    const r1 = ring[i + 1];
    for (let k = 0; k < r0.length - 1; k++) {
      quad(r0[k], r1[k], r1[k + 1], r0[k + 1]);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

/** Deck boards, just under the gunwale. */
function deckGeometry(length, beam) {
  const shape = [];
  const n = 12;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    shape.push([(beam / 2) * 0.95 * Math.pow(Math.sin(Math.PI * t), 0.55), (t - 0.5) * length]);
  }
  const positions = [];
  for (let i = 0; i < n; i++) {
    const [b0, z0] = shape[i];
    const [b1, z1] = shape[i + 1];
    positions.push(-b0, 0, z0, b1, 0, z1, b0, 0, z0);
    positions.push(-b0, 0, z0, -b1, 0, z1, b1, 0, z1);
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

const HULLS = [MAT.white, MAT.blue, MAT.cream, MAT.red, mat(0x2f7f78), MAT.yellow];
const SAILS = [MAT.white, MAT.linen, mat(0xd9733a), mat(0xc8452f), mat(0xe8b23f)];

/**
 * @param {object} [opts]
 * @param {boolean} [opts.moored] Tied up: bobs on the swell but never wanders.
 * @param {number}  [opts.heading] Which way it points.
 * @param {'fishing'|'sail'} [opts.kind]
 */
export function createBoat(parent, x, z, scale = 1, { moored = false, heading = null, kind = null } = {}) {
  const group = new Group();
  group.position.set(x, 1.2, z);
  group.rotation.y = heading ?? rand(0, TAU);
  group.scale.setScalar(scale);
  group.userData.dynamic = true; // it bobs, so it is never baked
  parent.add(group);

  const length = 10;
  const beam = 3.6;
  const hullColour = pick(HULLS);
  const hull = new Mesh(hullGeometry(length, beam, 1.9), hullColour);
  hull.castShadow = true;
  group.add(hull);
  // A painted band along the sheer, in a second colour.
  const band = new Mesh(hullGeometry(length * 1.005, beam * 1.02, 0.5), hullColour === MAT.white ? MAT.blue : MAT.white);
  band.position.y = 0.45;
  band.scale.y = 0.5;
  group.add(band);
  const deck = new Mesh(deckGeometry(length * 0.96, beam * 0.96), MAT.wood);
  deck.position.y = 0.95;
  group.add(deck);

  const fishing = kind ? kind === 'fishing' : chance(0.5);
  if (fishing) {
    // A little wheelhouse aft, a mast with a lamp, and nets on the foredeck.
    const cabin = new Mesh(new BoxGeometry(2.4, 2, 2.4), MAT.cream);
    cabin.position.set(0, 2, -1.8);
    cabin.castShadow = true;
    group.add(cabin);
    const roof = new Mesh(new BoxGeometry(2.8, 0.3, 2.8), hullColour === MAT.white ? MAT.blue : hullColour);
    roof.position.set(0, 3.1, -1.8);
    group.add(roof);
    const mast = new Mesh(new CylinderGeometry(0.1, 0.13, 5, 5), MAT.woodDark);
    mast.position.set(0, 4, 0.8);
    group.add(mast);
    const lamp = new Mesh(new SphereGeometry(0.25, 6, 4), MAT.lamp);
    lamp.position.set(0, 6.4, 0.8);
    group.add(lamp);
    const net = new Mesh(new TorusGeometry(0.9, 0.38, 5, 8), MAT.leaf2);
    net.rotation.x = Math.PI / 2;
    net.position.set(0, 1.3, 2.6);
    group.add(net);
    for (let i = 0; i < 3; i++) {
      const float = new Mesh(new SphereGeometry(0.28, 6, 4), pick([MAT.red, MAT.yellow]));
      float.position.set(rand(-0.8, 0.8), 1.5, 2.6 + rand(-0.6, 0.6));
      group.add(float);
    }
  } else {
    // Mast, boom, a mainsail and a jib — sometimes the painted ochre and red
    // of the old lagoon boats.
    const mast = new Mesh(new CylinderGeometry(0.12, 0.18, 12, 6), MAT.woodDark);
    mast.position.set(0, 6.8, 1.2);
    mast.castShadow = true;
    group.add(mast);
    const colour = pick(SAILS);
    const main = new Mesh(sailGeometry([0, 12.4, 0], [0, 1.7, 0], [0, 2.1, -5.2]), colour);
    main.position.set(0, 0.2, 1.1);
    main.castShadow = true;
    group.add(main);
    const jib = new Mesh(sailGeometry([0, 11, 0], [0, 1.6, 0], [0, 1.8, 4]), colour === MAT.white ? MAT.linen : MAT.white);
    jib.position.set(0, 0.2, 1.3);
    group.add(jib);
    if (colour !== MAT.white && colour !== MAT.linen && chance(0.6)) {
      // A painted sun on the sail, as the old boats wore.
      const sun = new Mesh(new CircleGeometry(1.1, 12), MAT.yellow);
      sun.position.set(0.02, 6, -1.3);
      sun.rotation.y = Math.PI / 2;
      group.add(sun);
      const sunBack = sun.clone();
      sunBack.position.x = -0.02;
      sunBack.rotation.y = -Math.PI / 2;
      group.add(sunBack);
    }
  }

  if (chance(0.4)) {
    const flag = createCloth(group, { width: 1.8, height: 1.1, material: pick(CLOTH) });
    flag.position.set(0.9, fishing ? 6.4 : 12.6, fishing ? 0.8 : 1.2);
  }

  bakeLocal(group);

  return {
    group,
    phase: rand(0, TAU),
    drift: moored ? 0 : rand(1.4, 3.6), // units per second
    heading: group.rotation.y,
    turn: 0,
    turnTimer: 0,
    // Under sail, a boat leans away from the wind.
    heel: fishing ? 0 : rand(0.08, 0.16),
  };
}

/** A triangular sail, double-sided, from three corners. */
function sailGeometry(a = [0, 11, 0], b = [0, 1.6, 0], c = [6.4, 2.4, 0]) {
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute([...a, ...b, ...c, ...a, ...c, ...b], 3));
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

/* ------------------------------------------------------------- villager --- */

export function createVillager(parent, x, z) {
  const ground = terrainHeightAt(x, z);
  if (ground < 2) return null;

  const group = new Group();
  group.position.set(x, ground, z);
  group.rotation.y = rand(0, TAU);
  group.scale.setScalar(rand(0.85, 1.15));
  group.userData.dynamic = true; // villagers wander
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

  bakeLocal(group);

  return {
    group,
    phase: rand(0, TAU),
    speed: rand(0.5, 1.3),
    heading: group.rotation.y,
    home: { x, z },
  };
}
