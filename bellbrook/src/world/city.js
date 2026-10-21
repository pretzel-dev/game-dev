/**
 * Bellbrook as pure data: every building, tree, prop and patch of ground,
 * what the fire engine can bump into, where people walk, and every place a
 * (very small, very friendly) fire can start.
 *
 * No DOM and no Three.js here: `tools/check.mjs` builds the town in Node.
 * The same numbers are drawn by `render/town.js`.
 */
import { mulberry32 } from '../core/utils.js';
import { BLOCK, N, HALF, PITCH, ROAD, roadAt, blockMin, blockMax, nearestRoadPoint, NS_NAMES, EW_NAMES } from './roads.js';

export const KERB = 0.15; // pavements and everything inside a block sit this high
export const SEA_Z = 206; // the beach runs from the seafront road down to here
export const BOUNDS = { minX: -198, maxX: 198, minZ: -200, maxZ: SEA_Z - 3 };
export const PIER = { minX: 51, maxX: 61, minZ: SEA_Z - 6, maxZ: SEA_Z + 44 };
// A round platform on the end, with the lighthouse in the middle: drive into
// the rail and you follow it round, like a roundabout, and back along the pier.
export const PIER_HEAD = { x: 56, z: SEA_Z + 56, r: 15 };
const LAND = [BOUNDS, PIER];

// Which kind of neighbourhood each block is. Row 0 is the north edge.
export const DISTRICTS = [
  ['farm', 'fields', 'houses', 'houses', 'school', 'houses'],
  ['houses', 'houses', 'shops', 'shops', 'houses', 'houses'],
  ['houses', 'park', 'downtown', 'townhall', 'shops', 'houses'],
  ['houses', 'playpark', 'downtown', 'station', 'shops', 'build'],
  ['houses', 'shops', 'market', 'hospital', 'houses', 'houses'],
  ['houses', 'houses', 'shops', 'police', 'houses', 'houses'],
];

export const PALETTE = {
  walls: [0xf7d9c4, 0xfbe7a1, 0xc9e4de, 0xc6def1, 0xf2c6de, 0xfaf3dd, 0xdbcdf0, 0xf9c6a0, 0xe3f0c0],
  roofs: [0xd9603b, 0x5b7db1, 0x4f8a5b, 0x8e5a9b, 0xc9443a, 0x7a5a48, 0x3f6f8f],
  towers: [0xe8d5b5, 0xd98e6a, 0x9fc3d9, 0xa8d5ba, 0xf1d28a, 0xc7b8e0, 0xe6a5a5, 0xf4e6cf],
  doors: [0x3f6f8f, 0xc9443a, 0x4f8a5b, 0xf2b51d, 0x8e5a9b, 0x2f4858],
  awnings: [0xe2504a, 0x3f8fd2, 0x4fb06a, 0xf2a93b, 0xd96aa8, 0x8a6ad9, 0x2fb5a8],
};

const SHOPS = [
  { name: 'the bakery', sign: 0xf6c56b, top: 'cupcake' },
  { name: 'the toy shop', sign: 0x3f8fd2, top: 'teddy' },
  { name: 'the ice cream shop', sign: 0xf29cc2, top: 'cone' },
  { name: 'the flower shop', sign: 0x6dbb6a, top: null },
  { name: 'the book shop', sign: 0x8a6ad9, top: null },
  { name: 'the sweet shop', sign: 0xe2504a, top: 'lolly' },
  { name: 'the café', sign: 0x9a6a4a, top: 'teacup' },
  { name: 'the doughnut shop', sign: 0xf2a93b, top: 'donut' },
  { name: 'the pet shop', sign: 0x2fb5a8, top: null },
  { name: 'the bike shop', sign: 0x2f4858, top: null },
  { name: 'the pizza place', sign: 0xd9603b, top: null },
  { name: 'the music shop', sign: 0x5b7db1, top: null },
  { name: 'the greengrocer', sign: 0x4f8a5b, top: null },
  { name: 'the hat shop', sign: 0xc7b8e0, top: null },
  { name: 'the barber', sign: 0x3f6f8f, top: null },
  { name: 'the post office', sign: 0xe2504a, top: null },
];

/** How big each kind of fire is (it scales the flames and how long it takes). */
export const FIRE_SIZE = { window: 1, bin: 0.6, tree: 1.3, hay: 1.5, hut: 1.1, stall: 1.1, skip: 0.9, bbq: 0.6 };

export function buildCity(seed = 0xbe11b200) {
  const rng = mulberry32(seed);
  const rand = (a = 0, b = 1) => a + rng() * (b - a);
  const pick = (list) => list[Math.floor(rng() * list.length) % list.length];
  const chance = (p) => rng() < p;

  const city = {
    blocks: [],
    buildings: [],
    windows: [],
    doors: [],
    awnings: [],
    signs: [],
    trees: [],
    boxes: [], // what the fire engine bumps into: { minX, maxX, minZ, maxZ, h }
    circles: [], // { x, z, r }
    ground: [], // flat patches: { x0, x1, z0, z1, kind }
    discs: [], // round patches: { x, z, r, kind }
    props: [], // { type, x, z, rot, ...extra }
    lamps: [],
    spots: [], // where a fire (or a kitten up a tree) can happen
    loops: [], // where people walk
    ponds: [], // water the fire engine can splash through
    crew: [], // firefighters waving at the station
    spawn: null,
  };

  /* ------------------------------------------------------------ helpers --- */

  const box = (x, z, w, d, h) => city.boxes.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, h });
  const prop = (type, x, z, extra = {}) => {
    const p = { type, x, z, rot: 0, ...extra };
    city.props.push(p);
    return p;
  };
  const spot = (kind, x, y, z, name, extra = {}) => {
    const s = { id: city.spots.length, kind, x, y, z, name, size: FIRE_SIZE[kind] ?? 1, nx: 0, nz: 0, ...extra };
    city.spots.push(s);
    return s;
  };
  const tree = (x, z, opts = {}) => {
    const t = {
      x,
      z,
      h: opts.h ?? rand(4.5, 6.5),
      r: opts.r ?? rand(1.8, 2.6),
      color: opts.color ?? pick([0x6fbf5a, 0x5aae52, 0x82c95e, 0x4f9f4a, 0x97cf62]),
      shape: opts.shape ?? (chance(0.2) ? 'cone' : 'ball'),
    };
    city.trees.push(t);
    city.circles.push({ x, z, r: 0.45 });
    return t;
  };
  // Trees a kitten can climb, or that can catch (a little) fire. Only ones
  // near a road, so the fire engine can get close.
  const friendlyTree = (t, where) => {
    // On top of the leaves, where you can see it (and spray it).
    spot('tree', t.x, t.h * 0.66 + t.r * 0.8, t.z, `a tree ${where}`, { tree: t });
    spot('cat', t.x, t.h * 0.78, t.z, `a tree ${where}`, { tree: t });
  };

  /** Faces: 'n', 's', 'e', 'w'. Normals point out of the building. */
  const FACE = { n: [0, -1], s: [0, 1], e: [1, 0], w: [-1, 0] };

  /**
   * A building with windows on the faces you can see from a road. `fire`
   * lists the faces whose windows may catch fire (they face a road).
   */
  function building(b) {
    const B = {
      floorH: 3.2,
      roof: 'flat',
      roofH: 0,
      faces: ['n', 's', 'e', 'w'],
      fire: [],
      door: null,
      shopfront: false,
      trim: 0xffffff,
      ...b,
    };
    B.h = B.floors * B.floorH;
    city.buildings.push(B);
    box(B.x, B.z, B.w, B.d, B.h + B.roofH);
    const firstWindow = city.windows.length;
    for (const f of B.faces) {
      const [nx, nz] = FACE[f];
      const along = f === 'n' || f === 's' ? B.w : B.d;
      const half = (f === 'n' || f === 's' ? B.d : B.w) / 2;
      const fx = B.x + nx * half;
      const fz = B.z + nz * half;
      const tx = -nz; // along the face
      const tz = nx;
      const cols = Math.max(1, Math.floor((along - 1.6) / (B.winGap ?? 3)));
      const gap = along / cols;
      for (let fl = 0; fl < B.floors; fl++) {
        const ground = fl === 0;
        for (let c = 0; c < cols; c++) {
          const u = -along / 2 + gap * (c + 0.5);
          const isDoor = ground && B.door === f && Math.abs(u) < gap * 0.6;
          if (isDoor) continue;
          const shop = ground && B.shopfront && f === B.door;
          const w = {
            x: fx + tx * u,
            y: fl * B.floorH + (shop ? 1.35 : B.floorH * 0.55),
            z: fz + tz * u,
            nx,
            nz,
            w: shop ? Math.min(gap - 0.8, 3.2) : Math.min(1.3, gap - 0.7),
            h: shop ? 1.9 : 1.45,
            fire: B.fire.includes(f) && !shop && fl * B.floorH < 11,
            building: B,
          };
          city.windows.push(w);
        }
      }
      if (B.door === f) {
        city.doors.push({ x: fx, z: fz, nx, nz, w: B.doorW ?? 1.5, h: B.doorH ?? 2.3, color: B.doorColor ?? pick(PALETTE.doors) });
      }
    }
    // One or two windows on each building can have a fire.
    const can = city.windows.slice(firstWindow).filter((w) => w.fire);
    for (let k = 0; k < Math.min(can.length, B.fireCount ?? 1); k++) {
      const w = can.splice(Math.floor(rng() * can.length), 1)[0];
      spot('window', w.x + w.nx * 0.9, w.y, w.z + w.nz * 0.9, B.name, { nx: w.nx, nz: w.nz, window: w });
    }
    return B;
  }

  /** The road a face looks onto, by name. */
  function streetFor(blk, f) {
    if (f === 'n') return EW_NAMES[blk.r];
    if (f === 's') return EW_NAMES[blk.r + 1];
    if (f === 'w') return NS_NAMES[blk.c];
    return NS_NAMES[blk.c + 1];
  }

  /* ---------------------------------------------------------- districts --- */

  function houses(blk) {
    const { x0, x1, z0, z1, cx } = blk;
    for (const qz of [0, 1]) {
      for (const qx of [0, 1]) {
        const front = qz === 0 ? 'n' : 's';
        const side = qx === 0 ? 'w' : 'e';
        const w = rand(8.6, 10.4);
        const d = rand(7.4, 8.4);
        const lx = cx + (qx ? 10 : -10) + rand(-0.6, 0.6);
        const lz = qz === 0 ? z0 + 3 + 5 + d / 2 : z1 - 3 - 5 - d / 2;
        const floors = chance(0.6) ? 2 : 1;
        const street = streetFor(blk, front);
        const wall = pick(PALETTE.walls);
        const B = building({
          kind: 'house',
          name: `a house on ${street}`,
          x: lx,
          z: lz,
          w,
          d,
          floors,
          floorH: 3,
          color: wall,
          roof: 'gable',
          roofH: rand(2.4, 3.2),
          roofColor: pick(PALETTE.roofs),
          door: front,
          faces: [front, side],
          fire: [front, side],
          chimney: chance(0.6),
        });
        const fn = front === 'n' ? -1 : 1; // which way the front faces in z
        const frontZ = lz + (fn * d) / 2;
        // Garden path from the door to the pavement, a flower bed either side.
        const pz0 = frontZ;
        const pz1 = front === 'n' ? z0 + 3 : z1 - 3;
        city.ground.push({ x0: lx - 0.8, x1: lx + 0.8, z0: Math.min(pz0, pz1), z1: Math.max(pz0, pz1), kind: 'path' });
        prop('flowers', lx - 2.6, (pz0 + pz1) / 2, { w: 2.6, d: 1.2, color: pick([0xf25a7a, 0xf2d03b, 0xb07ae0, 0xffffff, 0xf28a3b]) });
        prop('flowers', lx + 2.6, (pz0 + pz1) / 2, { w: 2.6, d: 1.2, color: pick([0xf25a7a, 0xf2d03b, 0xb07ae0, 0xffffff, 0xf28a3b]) });
        prop('postbox', lx + 1.4, pz1 - fn * 0.6, { color: B.doorColor ?? 0xc9443a });
        // A tree in the front garden: kittens love these.
        const tx = lx + (qx ? 1 : -1) * (w / 2 + 2.6);
        const t = tree(tx, (pz0 + pz1) / 2 + fn * 0.4, { h: rand(5, 6.5), r: rand(2, 2.4), shape: 'ball' });
        friendlyTree(t, `outside a house on ${street}`);
        if (chance(0.5)) {
          const bx = lx - (qx ? 1 : -1) * (w / 2 - 0.6);
          prop('bin', bx, pz1 - fn * 0.8, { color: pick([0x3f8f4a, 0x3f6f8f, 0x555a60]) });
          spot('bin', bx, 0.9, pz1 - fn * 0.8, `a bin on ${street}`);
        }
        // Back garden: a tree, a washing line or a swing.
        const backZ = lz - fn * (d / 2 + 4.5);
        tree(lx + rand(-3, 3), backZ, { h: rand(4.5, 6) });
        if (chance(0.5)) prop('washing', lx + (qx ? -2 : 2), backZ + fn * 1.5, { rot: 0 });
      }
    }
    // A hedge down the middle of the back gardens.
    prop('hedge', cx, blk.cz, { w: 1.2, d: BLOCK - 14, h: 1.3, rot: 0 });
    prop('hedge', cx, blk.cz, { w: BLOCK - 14, d: 1.2, h: 1.3, rot: 0 });
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: z0 + 3, z1: z1 - 3, kind: 'garden' });
  }

  function shops(blk) {
    const { x0, x1, z0, z1, cx, cz } = blk;
    for (const front of ['n', 's']) {
      const d = 12.5;
      const z = front === 'n' ? z0 + 3 + d / 2 + 0.3 : z1 - 3 - d / 2 - 0.3;
      for (let k = 0; k < 3; k++) {
        const shop = blk.shopList.pop();
        const x = cx + (k - 1) * 12.4;
        const floors = pick([2, 2, 3]);
        const B = building({
          kind: 'shop',
          name: shop.name,
          x,
          z,
          w: 12,
          d,
          floors,
          floorH: 3.4,
          color: pick(PALETTE.walls),
          door: front,
          doorColor: shop.sign,
          shopfront: true,
          faces: [front, ...(k === 0 ? ['w'] : k === 2 ? ['e'] : [])],
          fire: [front],
          parapet: true,
          rooftop: shop.top,
          signColor: shop.sign,
        });
        const nz = front === 'n' ? -1 : 1;
        const faceZ = z + (nz * d) / 2;
        city.awnings.push({ x, z: faceZ, nx: 0, nz, w: 11, color: pick(PALETTE.awnings), stripes: chance(0.7) });
        city.signs.push({ x, y: 3.0, z: faceZ + nz * 0.15, nx: 0, nz, w: 7, color: shop.sign });
        if (shop.top) prop(shop.top, x, z, { y: B.h + 0.3 });
        prop('bench', x + 4, faceZ + nz * 2.2, { rot: 0 });
      }
    }
    // A little courtyard with a tree in the middle.
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: z0 + 3, z1: z1 - 3, kind: 'plaza' });
    tree(cx - 8, cz, { h: 5, shape: 'ball' });
    tree(cx + 8, cz, { h: 5, shape: 'ball' });
  }

  function downtown(blk) {
    const { x0, x1, z0, z1, cx, cz } = blk;
    for (const qz of [0, 1]) {
      for (const qx of [0, 1]) {
        const x = cx + (qx ? 9.5 : -9.5);
        const z = cz + (qz ? 9.5 : -9.5);
        const fz = qz ? 's' : 'n';
        const fx = qx ? 'e' : 'w';
        const floors = Math.floor(rand(4, 7.99));
        building({
          kind: 'tower',
          name: `a tall building on ${streetFor(blk, fz)}`,
          x,
          z,
          w: 17,
          d: 17,
          floors,
          color: pick(PALETTE.towers),
          door: fz,
          shopfront: true,
          faces: [fz, fx],
          fire: [fz, fx],
          fireCount: 2,
          parapet: true,
          rooftop: chance(0.45) ? 'watertower' : 'vents',
        });
      }
    }
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: z0 + 3, z1: z1 - 3, kind: 'plaza' });
  }

  function townhall(blk) {
    const { x0, x1, z0, z1, cx, cz } = blk;
    building({
      kind: 'townhall',
      name: 'the town hall',
      x: cx,
      z: cz - 8,
      w: 28,
      d: 16,
      floors: 2,
      floorH: 4.2,
      color: 0xf4e6cf,
      door: 's',
      doorW: 3,
      doorH: 3.4,
      doorColor: 0x7a4a2a,
      faces: ['s', 'e', 'w'],
      parapet: true,
      winGap: 3.4,
    });
    prop('clocktower', cx, cz - 8, { y: 8.4 });
    box(cx, cz - 8, 6, 6, 26);
    // The square in front, with a fountain. (No fires here: it's where the mayor waves from.)
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: z0 + 3, z1: z1 - 3, kind: 'square' });
    prop('fountain', cx, cz + 8, { r: 4 });
    city.circles.push({ x: cx, z: cz + 8, r: 4.3 });
    for (const sx of [-1, 1]) {
      prop('flowers', cx + sx * 12, cz + 8, { w: 6, d: 3, color: 0xf25a7a });
      tree(cx + sx * 17, cz + 15, { h: 5.5, shape: 'cone' });
      prop('bench', cx + sx * 8, cz + 15, { rot: Math.PI });
    }
  }

  function station(blk) {
    const { x0, x1, z0, z1, cx } = blk;
    // The fire station: three big red doors onto the apron, a hose tower,
    // a brass bell over the middle door. You start here, facing out.
    const bz = z0 + 3 + 8;
    const front = bz + 8;
    building({
      kind: 'station',
      name: 'the fire station',
      x: cx - 2,
      z: bz,
      w: 32,
      d: 16,
      floors: 2,
      floorH: 4.6,
      color: 0xc8463a,
      faces: ['s', 'w'],
      parapet: true,
      winGap: 3.6,
      trim: 0xfff4e0,
    });
    for (let k = -1; k <= 1; k++) prop('baydoor', cx - 2 + k * 9.5, front, { w: 7, h: 5.2, nz: 1 });
    prop('bell', cx - 2, front + 0.4, { y: 7.1, nz: 1 });
    prop('stationsign', cx - 2, front + 0.1, { y: 8.2, nz: 1 });
    prop('hosetower', x1 - 3 - 3, bz + 2, { h: 17, nz: 1 });
    box(x1 - 3 - 3, bz + 2, 5, 5, 17);
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: front, z1: z1 - 3, kind: 'apron' });
    prop('flagpole', x0 + 6, z1 - 7, { h: 10 });
    prop('hydrant', x0 + 4, front + 1);
    // Three firefighters who wave you off and cheer you home.
    for (let k = 0; k < 3; k++) city.crew.push({ x: cx - 15 + k * 1.6, z: front + 2.5 + (k % 2) * 0.8 });
    city.spawn = { x: cx - 2, z: front + 10, heading: Math.PI };
  }

  function hospital(blk) {
    const { x0, x1, z0, z1, cx, cz } = blk;
    building({
      kind: 'hospital',
      name: 'the hospital',
      x: cx,
      z: cz - 4,
      w: 32,
      d: 20,
      floors: 3,
      floorH: 3.6,
      color: 0xf6f8f6,
      door: 's',
      doorW: 3,
      doorColor: 0x5ab0a0,
      faces: ['s', 'e', 'w'],
      parapet: true,
      stripe: 0x6cc8b4,
    });
    prop('heartsign', cx, cz + 6.2, { y: 9.5, nz: 1 });
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: cz + 6, z1: z1 - 3, kind: 'apron' });
    prop('parked', cx - 10, cz + 12, { vehicle: 'ambulance', heading: Math.PI / 2 });
    city.circles.push({ x: cx - 10, z: cz + 12, r: 2.2 });
    tree(cx + 14, cz + 14, { h: 5 });
  }

  function police(blk) {
    const { x0, x1, z0, z1, cx, cz } = blk;
    building({
      kind: 'police',
      name: 'the police station',
      x: cx,
      z: cz - 6,
      w: 28,
      d: 16,
      floors: 2,
      floorH: 3.6,
      color: 0xb8cfe8,
      door: 's',
      doorColor: 0x2f4f8f,
      faces: ['s', 'e', 'w'],
      parapet: true,
      stripe: 0x2f4f8f,
    });
    prop('bluelamp', cx, cz + 2.2, { y: 3.4 });
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: cz + 2, z1: z1 - 3, kind: 'apron' });
    prop('parked', cx + 9, cz + 10, { vehicle: 'police', heading: Math.PI / 2 });
    city.circles.push({ x: cx + 9, z: cz + 10, r: 2.2 });
    tree(cx - 14, cz + 12, { h: 5, shape: 'cone' });
  }

  function school(blk) {
    const { x0, x1, z0, z1, cx, cz } = blk;
    building({
      kind: 'school',
      name: 'the school',
      x: cx,
      z: z1 - 3 - 8,
      w: 34,
      d: 14,
      floors: 2,
      floorH: 3.6,
      color: 0xfbe08a,
      door: 's',
      doorW: 2.6,
      doorColor: 0x3f8fd2,
      faces: ['s', 'e', 'w'],
      fire: ['s'],
      roof: 'gable',
      roofH: 3,
      roofColor: 0x3f8fd2,
    });
    prop('schoolclock', cx, z1 - 3 - 1 + 0.1, { y: 8.6, nz: 1 });
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: z0 + 3, z1: cz + 2, kind: 'pitch' });
    prop('goal', cx - 16, cz - 9, { rot: Math.PI / 2 });
    prop('goal', cx + 16, cz - 9, { rot: -Math.PI / 2 });
    prop('slide', cx - 12, cz - 2, { rot: 0 });
    prop('swings', cx + 12, cz - 2, { rot: 0 });
    const t = tree(x1 - 5, z0 + 5, { h: 6, shape: 'ball' });
    friendlyTree(t, 'by the school');
    prop('bin', x0 + 5, cz, { color: 0x3f6f8f });
    spot('bin', x0 + 5, 0.9, cz, 'a bin by the school');
  }

  function market(blk) {
    const { x0, x1, z0, z1, cx, cz } = blk;
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: z0 + 3, z1: z1 - 3, kind: 'square' });
    const goods = ['apples', 'flowers', 'cheese', 'fish', 'cakes', 'veg', 'toys', 'bread', 'honey'];
    let k = 0;
    for (const gz of [-1, 0, 1]) {
      for (const gx of [-1, 0, 1]) {
        if (gx === 0 && gz === 0) continue;
        const x = cx + gx * 12;
        const z = cz + gz * 12;
        const color = PALETTE.awnings[k % PALETTE.awnings.length];
        prop('stall', x, z, { color, goods: goods[k % goods.length] });
        box(x, z, 4, 2.6, 2.8);
        spot('stall', x, 1.8, z + 1.8 * Math.sign(gz || 1), `the market`, { nz: Math.sign(gz || 1) });
        k++;
      }
    }
    prop('fountain', cx, cz, { r: 2.6, small: true });
    city.circles.push({ x: cx, z: cz, r: 2.9 });
  }

  function build(blk) {
    const { x0, x1, z0, z1, cx, cz } = blk;
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: z0 + 3, z1: z1 - 3, kind: 'dirt' });
    // A half-built block of flats in yellow scaffolding.
    prop('frame', cx + 6, cz + 6, { w: 18, d: 14, floors: 3 });
    box(cx + 6, cz + 6, 18, 14, 10);
    prop('crane', cx - 12, cz + 12, { h: 30 });
    box(cx - 12, cz + 12, 3, 3, 30);
    prop('digger', cx - 10, cz - 8, { rot: 0.6 });
    city.circles.push({ x: cx - 10, z: cz - 8, r: 2.2 });
    prop('sandpile', cx + 10, cz - 10, { r: 4 });
    prop('skip', cx - 2, cz - 14, { rot: 0 });
    box(cx - 2, cz - 14, 4, 2.2, 1.6);
    spot('skip', cx - 2, 1.4, cz - 15.4, 'the building site', { nz: -1 });
    for (let k = 0; k < 6; k++) prop('cone', x0 + 6 + k * 3, z0 + 5);
  }

  function farm(blk) {
    const { x0, x1, z0, z1, cx, cz } = blk;
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: z0 + 3, z1: z1 - 3, kind: 'meadow' });
    building({
      kind: 'barn',
      name: 'the big red barn',
      x: cx - 4,
      z: cz - 4,
      w: 14,
      d: 18,
      floors: 1,
      floorH: 6,
      color: 0xc8463a,
      door: 'e',
      doorW: 5,
      doorH: 4.6,
      doorColor: 0xfff4e0,
      faces: ['e'],
      roof: 'barn',
      roofH: 5,
      roofColor: 0x7a3a30,
      ridge: 'z',
      winGap: 6,
    });
    prop('silo', cx - 15, cz - 12, { h: 13 });
    city.circles.push({ x: cx - 15, z: cz - 12, r: 3.2 });
    for (const [hx, hz] of [
      [cx + 10, cz + 12],
      [cx + 14, cz + 6],
      [cx + 4, cz + 15],
    ]) {
      prop('hay', hx, hz, { r: 1.5 });
      city.circles.push({ x: hx, z: hz, r: 1.6 });
      spot('hay', hx, 1.6, hz, 'the farm');
    }
    prop('tractor', cx + 12, cz - 12, { rot: -0.5 });
    city.circles.push({ x: cx + 12, z: cz - 12, r: 1.8 });
    prop('fence', cx, cz, { w: BLOCK - 7, d: BLOCK - 7 });
  }

  function fields(blk) {
    const { x0, x1, z0, z1, cx, cz } = blk;
    city.ground.push({ x0: x0 + 3, x1: cx + 2, z0: z0 + 3, z1: z1 - 3, kind: 'field' });
    city.ground.push({ x0: cx + 2, x1: x1 - 3, z0: z0 + 3, z1: z1 - 3, kind: 'meadow' });
    prop('windmill', cx + 11, cz - 9, { h: 12 });
    city.circles.push({ x: cx + 11, z: cz - 9, r: 2.6 });
    for (let k = 0; k < 4; k++) prop('cow', cx + 7 + (k % 2) * 6, cz + 4 + Math.floor(k / 2) * 6, { rot: rand(0, 6.28) });
    for (const [hx, hz] of [
      [cx - 6, cz - 12],
      [cx - 12, cz + 10],
    ]) {
      prop('hay', hx, hz, { r: 1.5 });
      city.circles.push({ x: hx, z: hz, r: 1.6 });
      spot('hay', hx, 1.6, hz, 'the hay field');
    }
  }

  function park(blk, play) {
    const { x0, x1, z0, z1, cx, cz } = blk;
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: z0 + 3, z1: z1 - 3, kind: 'park' });
    city.ground.push({ x0: cx - 1.3, x1: cx + 1.3, z0: z0 + 3, z1: z1 - 3, kind: 'path' });
    city.ground.push({ x0: x0 + 3, x1: x1 - 3, z0: cz - 1.3, z1: cz + 1.3, kind: 'path' });
    if (!play) {
      // The duck pond. Drive through it if you like: it's only shallow.
      const px = cx + 9;
      const pz = cz - 9;
      city.discs.push({ x: px, z: pz, r: 8, kind: 'pond' });
      city.ponds.push({ x: px, z: pz, r: 8 });
      for (let k = 0; k < 4; k++) prop('duck', px + Math.cos(k * 1.7) * 4, pz + Math.sin(k * 1.7) * 4, { rot: k * 1.7, pond: { x: px, z: pz } });
      prop('picnic', cx - 9, cz + 9, { rot: 0.3 });
      prop('bbq', cx - 13, cz + 12);
      spot('bbq', cx - 13, 1.0, cz + 12, 'the barbecue in the park');
    } else {
      prop('slide', cx + 9, cz - 9, { rot: Math.PI / 2 });
      prop('swings', cx - 9, cz - 9, { rot: 0 });
      prop('roundabout', cx + 9, cz + 9);
      prop('sandpit', cx - 9, cz + 9, { r: 3.5 });
      prop('seesaw', cx - 9, cz + 1.8, { rot: 0 });
    }
    const places = [
      [x0 + 6, z0 + 6],
      [x1 - 6, z1 - 6],
      [x0 + 6, z1 - 6],
      [x1 - 6, z0 + 6],
      [cx - 6, cz - 15],
      [cx + 15, cz + 4],
    ];
    places.forEach(([x, z], k) => {
      if (!play && Math.hypot(x - (cx + 9), z - (cz - 9)) < 10) return;
      const t = tree(x, z, { h: rand(5.5, 7), r: rand(2.2, 2.8), shape: k % 3 === 2 ? 'cone' : 'ball' });
      if (k < 4) friendlyTree(t, play ? 'in the playground' : 'in the park');
    });
    prop('bench', cx + 4, cz + 3, { rot: 0 });
    prop('bench', cx - 4, cz - 3, { rot: Math.PI });
    prop('bin', cx + 3, cz - 3, { color: 0x3f8f4a });
    spot('bin', cx + 3, 0.9, cz - 3, play ? 'a bin in the playground' : 'a bin in the park');
  }

  /* -------------------------------------------------------------- blocks --- */

  const shopList = [...SHOPS];
  for (let k = shopList.length - 1; k > 0; k--) {
    const j = Math.floor(rng() * (k + 1));
    [shopList[k], shopList[j]] = [shopList[j], shopList[k]];
  }
  // Six shop blocks with six shops each: names come round again, which is fine.
  const allShops = [...shopList, ...shopList, ...shopList].slice(0, 36);

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const kind = DISTRICTS[r][c];
      const blk = { c, r, kind, x0: blockMin(c), x1: blockMax(c), z0: blockMin(r), z1: blockMax(r) };
      blk.cx = (blk.x0 + blk.x1) / 2;
      blk.cz = (blk.z0 + blk.z1) / 2;
      city.blocks.push(blk);
      // The pavement round every block.
      city.ground.push({ x0: blk.x0, x1: blk.x1, z0: blk.z0, z1: blk.z1, kind: 'pavement' });
      blk.loop = { x0: blk.x0 + 1.5, x1: blk.x1 - 1.5, z0: blk.z0 + 1.5, z1: blk.z1 - 1.5, block: blk };
      city.loops.push(blk.loop);
      if (kind === 'houses') houses(blk);
      else if (kind === 'shops') {
        blk.shopList = allShops.splice(0, 6);
        shops(blk);
      } else if (kind === 'downtown') downtown(blk);
      else if (kind === 'townhall') townhall(blk);
      else if (kind === 'station') station(blk);
      else if (kind === 'hospital') hospital(blk);
      else if (kind === 'police') police(blk);
      else if (kind === 'school') school(blk);
      else if (kind === 'market') market(blk);
      else if (kind === 'build') build(blk);
      else if (kind === 'farm') farm(blk);
      else if (kind === 'fields') fields(blk);
      else if (kind === 'park') park(blk, false);
      else if (kind === 'playpark') park(blk, true);

      // Street lamps on the pavement, two a side.
      for (const u of [0.3, 0.7]) {
        const lx = blk.x0 + (blk.x1 - blk.x0) * u;
        const lz = blk.z0 + (blk.z1 - blk.z0) * u;
        city.lamps.push({ x: lx, z: blk.z0 + 0.5, nx: 0, nz: -1 });
        city.lamps.push({ x: lx, z: blk.z1 - 0.5, nx: 0, nz: 1 });
        city.lamps.push({ x: blk.x0 + 0.5, z: lz, nx: -1, nz: 0 });
        city.lamps.push({ x: blk.x1 - 0.5, z: lz, nx: 1, nz: 0 });
      }
      // A red hydrant on one corner of most blocks.
      if ((c + r) % 2 === 0) prop('hydrant', blk.x0 + 0.9, blk.z0 + 0.9);
    }
  }

  /* --------------------------------------------- outside the grid: edges --- */

  // Grass all round, with a ring of trees and a hedge at the very edge.
  for (let x = BOUNDS.minX + 6; x <= BOUNDS.maxX - 6; x += 9) {
    tree(x + rand(-2, 2), BOUNDS.minZ + rand(5, 12), { h: rand(6, 9), r: rand(2.4, 3.2) });
    if (chance(0.6)) tree(x + rand(-2, 2), BOUNDS.minZ + rand(14, 20), { h: rand(5, 8), r: rand(2.2, 3) });
  }
  for (let z = BOUNDS.minZ + 20; z <= HALF + 2; z += 9) {
    for (const side of [-1, 1]) {
      const edge = side < 0 ? BOUNDS.minX : BOUNDS.maxX;
      tree(edge - side * rand(5, 12), z + rand(-2, 2), { h: rand(6, 9), r: rand(2.4, 3.2) });
    }
  }

  /* ----------------------------------------------------------- the beach --- */

  const promenade = roadAt(N); // the seafront road
  city.ground.push({ x0: BOUNDS.minX, x1: BOUNDS.maxX, z0: promenade + 6, z1: promenade + 9, kind: 'pavement' });
  city.ground.push({ x0: BOUNDS.minX, x1: BOUNDS.maxX, z0: promenade + 9, z1: SEA_Z + 2, kind: 'sand' });
  city.loops.push({ x0: -186, x1: 186, z0: promenade + 7.5, z1: promenade + 22, block: null });
  // Beach huts in a row of bright colours.
  const hutColors = [0xf25a7a, 0x3f8fd2, 0xf2d03b, 0x4fb06a, 0xf28a3b, 0xb07ae0, 0x2fb5a8];
  for (let k = 0; k < 13; k++) {
    const x = -165 + k * 9; // gaps wide enough to drive through, never to get wedged in
    const color = hutColors[k % hutColors.length];
    prop('hut', x, promenade + 14, { color });
    box(x, promenade + 14, 3.6, 3.4, 4.2);
    if (k % 2 === 0) spot('hut', x, 2.2, promenade + 14 - 2.2, 'a beach hut', { nz: -1 });
  }
  for (let k = 0; k < 14; k++) {
    const x = -40 + k * 13 + rand(-3, 3);
    if (Math.abs(x - 56) < 9) continue;
    prop('umbrella', x, promenade + 26 + rand(0, 8), { color: hutColors[k % hutColors.length] });
  }
  prop('lifeguard', 20, SEA_Z - 6);
  prop('sandcastle', 0, SEA_Z - 10);
  prop('sandcastle', 90, SEA_Z - 12);
  // The pier, with a lighthouse on the end, and boats bobbing about.
  prop('pier', (PIER.minX + PIER.maxX) / 2, (PIER.minZ + PIER.maxZ) / 2, { w: PIER.maxX - PIER.minX, d: PIER.maxZ - PIER.minZ });
  prop('pierhead', PIER_HEAD.x, PIER_HEAD.z, { r: PIER_HEAD.r, neck: PIER.maxX - PIER.minX });
  prop('lighthouse', PIER_HEAD.x, PIER_HEAD.z, { h: 16 });
  city.circles.push({ x: PIER_HEAD.x, z: PIER_HEAD.z, r: 3 });
  for (const [bx, bz, color] of [
    [10, SEA_Z + 30, 0xf25a7a],
    [-40, SEA_Z + 45, 0x3f8fd2],
    [110, SEA_Z + 26, 0xf2d03b],
    [-110, SEA_Z + 34, 0xffffff],
    [160, SEA_Z + 60, 0x4fb06a],
  ]) {
    prop('boat', bx, bz, { color, rot: rand(0, 6.28) });
  }

  /* ------------------------------------------------- where fires can go --- */

  // Each place a fire can be gets the road point to drive to, and no spot
  // may be somewhere the fire engine can't get close to.
  for (const s of city.spots) {
    const p = nearestRoadPoint(s.x, s.z);
    s.road = { x: p.x, z: p.z };
    s.roadDist = p.dist;
  }
  city.spots = city.spots.filter((s) => s.roadDist < 30);
  city.spots.forEach((s, k) => (s.id = k));

  return city;
}

/** Is the point inside the land you can drive on (town + beach + pier)? */
export function inBounds(x, z) {
  if (Math.hypot(x - PIER_HEAD.x, z - PIER_HEAD.z) <= PIER_HEAD.r) return true;
  if (!LAND.some((r) => x >= r.minX && x <= r.maxX && z >= r.minZ && z <= r.maxZ)) return false;
  const c = roundCorner(x, z);
  return !c || (c.x === x && c.z === z);
}

// The corners of the land are rounded, so driving into one carries you round it.
const CORNER = 24;
/** If (x, z) is out past a rounded corner of the land, the nearest point on it. */
function roundCorner(x, z) {
  const b = BOUNDS;
  const cx = x < b.minX + CORNER ? b.minX + CORNER : x > b.maxX - CORNER ? b.maxX - CORNER : null;
  const cz = z < b.minZ + CORNER ? b.minZ + CORNER : z > b.maxZ - CORNER ? b.maxZ - CORNER : null;
  if (cx === null || cz === null) return null;
  // (Not where the pier leaves the beach.)
  if (x >= PIER.minX && x <= PIER.maxX) return null;
  const d = Math.hypot(x - cx, z - cz);
  if (d <= CORNER) return { x, z };
  return { x: cx + ((x - cx) / d) * CORNER, z: cz + ((z - cz) / d) * CORNER };
}

/** Nearest point inside the drivable land. */
export function clampToBounds(x, z) {
  if (inBounds(x, z)) return { x, z };
  if (x >= BOUNDS.minX && x <= BOUNDS.maxX && z >= BOUNDS.minZ && z <= BOUNDS.maxZ) return roundCorner(x, z);
  let best = null;
  let bestD = Infinity;
  for (const r of LAND) {
    let p = { x: Math.min(r.maxX, Math.max(r.minX, x)), z: Math.min(r.maxZ, Math.max(r.minZ, z)) };
    if (r === BOUNDS) p = roundCorner(p.x, p.z) || p;
    const d = Math.hypot(p.x - x, p.z - z);
    if (d < bestD) {
      bestD = d;
      best = p;
    }
  }
  const dx = x - PIER_HEAD.x;
  const dz = z - PIER_HEAD.z;
  const d = Math.hypot(dx, dz);
  if (d - PIER_HEAD.r < bestD) best = { x: PIER_HEAD.x + (dx / d) * PIER_HEAD.r, z: PIER_HEAD.z + (dz / d) * PIER_HEAD.r };
  return best;
}

/** Height of the ground underfoot: up on the kerb inside a block, else 0. */
export function groundY(x, z) {
  const inBlock = (v) => {
    const u = v + HALF;
    const m = u - Math.floor(u / PITCH) * PITCH;
    return u > 0 && u < N * PITCH && m > ROAD / 2 && m < PITCH - ROAD / 2;
  };
  if (inBlock(x) && inBlock(z)) return KERB;
  if (z > HALF + ROAD / 2 && z < HALF + 9 && x > -198 && x < 198) return KERB;
  return 0;
}
