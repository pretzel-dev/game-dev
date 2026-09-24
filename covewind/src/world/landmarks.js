/**
 * The places worth flying to: each one small enough to take in at a glance
 * from the air, and each with something for whoever lands nearby.
 *
 *  - the chapel on its rock, domed, with a quay and a boat tied up;
 *  - the Venetian fortress on its island, walls and round towers and a keep;
 *  - the old stone bridge high across the canyon, to fly under;
 *  - a wreck in the pine island's bay, ribs showing through the shallows;
 *  - a lido on the harbour beach and a beach bar on the sand ring, rows of
 *    striped ombrelloni and a lifeguard's chair;
 *  - somebody's hideout in the blue grotto, lanterns and a hammock;
 *  - a shepherd's hut and a few sheep by the tarn above the falls;
 *  - a jetty and a rowing boat on the lake hidden in the pines;
 *  - a hermit's hut on top of the tallest sea stack.
 *
 * Static by design: each group is baked into a few meshes once built.
 */
import {
  BoxGeometry,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  Group,
  IcosahedronGeometry,
  Mesh,
  PointLight,
  SphereGeometry,
  TorusGeometry,
} from 'three';
import { MAT, mat, CLOTH } from '../core/materials.js';
import { bakeStatic } from '../core/merge.js';
import { chance, pick, rand, TAU } from '../core/utils.js';
import { OBSTACLES, OVERHANGS, PLACES, LAKES, island, islandRadiusAt, terrainHeightAt } from './terrain.js';
import {
  archedDoor,
  battlement,
  flowerPots,
  gableRoofGeometry,
  hipRoofGeometry,
  roundTower,
  shutteredWindow,
  stoneArch,
} from './architecture.js';
import { createBoat, createPier, createTree } from './props.js';
import { createCloth } from './cloth.js';

const WHITEWASH = mat(0xf7f1e3, { flat: true });
const DOME = mat(0x6e9fb4, { flat: true });
const RUST = mat(0x8a5a3c, { flat: true });
const OLD_WOOD = mat(0x6f5846, { flat: true });

const castAll = (group) =>
  group.traverse((o) => {
    if (o.isMesh && !o.userData.dynamic) o.castShadow = o.receiveShadow = true;
  });

/** Stand a group on the ground at (x, z), optionally turned. */
function site(parent, x, z, rot = 0, y = null) {
  const g = new Group();
  g.position.set(x, y ?? terrainHeightAt(x, z), z);
  g.rotation.y = rot;
  parent.add(g);
  return g;
}

/* --------------------------------------------------------------- chapel --- */

function chapel(root, boats) {
  const { x, z } = PLACES.chapel;
  const quay = PLACES.chapelQuay;
  const facing = Math.atan2(quay.x - x, quay.z - z);
  const g = site(root, x, z, facing, terrainHeightAt(x, z) - 0.4);

  const nave = new Mesh(new BoxGeometry(9, 8, 14), WHITEWASH);
  nave.position.y = 4;
  g.add(nave);
  const roof = new Mesh(gableRoofGeometry(14, 9, 3.2, 0.6), MAT.roof);
  roof.rotation.y = Math.PI / 2;
  roof.position.y = 8;
  g.add(roof);
  // An octagonal drum and dome over the crossing, with a lantern on top.
  const drum = new Mesh(new CylinderGeometry(3.6, 3.6, 3.4, 8), WHITEWASH);
  drum.position.set(0, 10.6, -2);
  g.add(drum);
  const dome = new Mesh(new SphereGeometry(3.7, 16, 8, 0, TAU, 0, Math.PI / 2), DOME);
  dome.position.set(0, 12.2, -2);
  g.add(dome);
  const lantern = new Mesh(new CylinderGeometry(0.8, 0.9, 1.6, 8), WHITEWASH);
  lantern.position.set(0, 16.4, -2);
  g.add(lantern);
  const cross = new Mesh(new BoxGeometry(0.2, 1.8, 0.2), MAT.brass);
  cross.position.set(0, 18, -2);
  g.add(cross);
  const arm = new Mesh(new BoxGeometry(1, 0.2, 0.2), MAT.brass);
  arm.position.set(0, 18.3, -2);
  g.add(arm);
  // A bell gable on the front, the kind with an open arch for one bell.
  const gable = new Mesh(new BoxGeometry(4, 4.6, 1), WHITEWASH);
  gable.position.set(0, 10.8, 7);
  g.add(gable);
  const bellHole = new Mesh(new BoxGeometry(1.8, 2.4, 1.1), MAT.dark);
  bellHole.position.set(0, 10.8, 7);
  g.add(bellHole);
  const bell = new Mesh(new ConeGeometry(0.7, 1.2, 8, 1, true), MAT.brass);
  bell.position.set(0, 10.9, 7);
  g.add(bell);
  archedDoor(g, 0, 7, { w: 2.2, h: 4, material: MAT.blue });
  for (const side of [-1, 1]) {
    const buttress = new Mesh(new BoxGeometry(1.2, 6, 2), MAT.stone);
    buttress.position.set(side * 5, 3, 1);
    g.add(buttress);
  }
  OBSTACLES.push({ x, z, radius: 8, top: g.position.y + 19 });

  // Stone steps down to the quay, and a boat tied up there.
  const steps = new Mesh(new BoxGeometry(4, 1, 24), MAT.stone);
  steps.position.set(0, -2, 20);
  steps.rotation.x = 0.4;
  g.add(steps);
  createPier(root, { x: quay.x, z: quay.z, length: 30, width: 6, rot: facing });
  boats.push(createBoat(root, quay.x + 7, quay.z + 4, 0.8, { moored: true, heading: facing, kind: 'fishing' }));
  castAll(g);
}

/* ------------------------------------------------------------- fortress --- */

function fortress(root) {
  const { x, z } = PLACES.fortress;
  const base = terrainHeightAt(x, z) - 1;
  const g = site(root, x, z, 0.2, base);
  // A five-sided curtain wall with a round tower at every corner.
  const corners = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * TAU + 0.3;
    corners.push([Math.cos(a) * 44, Math.sin(a) * 44]);
  }
  for (let i = 0; i < 5; i++) {
    const [x1, z1] = corners[i];
    const [x2, z2] = corners[(i + 1) % 5];
    battlement(g, x1, z1, x2, z2, { height: 10, thickness: 3.4, base: -3 });
    roundTower(g, x1, z1, { radius: 6.5, height: 15, base: -4, roof: i % 2 === 1 });
  }
  // A gatehouse facing the beach, and the keep in the middle.
  const gate = new Group();
  gate.position.set(-44, 0, 0);
  gate.rotation.y = Math.PI / 2;
  g.add(gate);
  const gateBlock = new Mesh(new BoxGeometry(10, 12, 7), MAT.stone);
  gateBlock.position.y = 4;
  gate.add(gateBlock);
  archedDoor(gate, 0, 3.5, { w: 4, h: 6, material: MAT.dark });
  const keep = new Mesh(new BoxGeometry(14, 26, 14), MAT.stone);
  keep.position.y = 11;
  g.add(keep);
  battlement(g, -7, -7, 7, -7, { height: 0.4, thickness: 1, base: 24 });
  battlement(g, 7, -7, 7, 7, { height: 0.4, thickness: 1, base: 24 });
  battlement(g, 7, 7, -7, 7, { height: 0.4, thickness: 1, base: 24 });
  battlement(g, -7, 7, -7, -7, { height: 0.4, thickness: 1, base: 24 });
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    const slit = new Mesh(new BoxGeometry(0.8, 3, 0.3), MAT.dark);
    slit.position.set(Math.sin(a) * 7.05, 16, Math.cos(a) * 7.05);
    slit.rotation.y = a;
    g.add(slit);
  }
  // Barracks along the inside of the walls.
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * TAU + 1.1;
    const hut = new Group();
    hut.position.set(Math.cos(a) * 28, -1, Math.sin(a) * 28);
    hut.rotation.y = -a + Math.PI / 2;
    g.add(hut);
    const body = new Mesh(new BoxGeometry(14, 5, 7), MAT.stone);
    body.position.y = 2.5;
    hut.add(body);
    const roof = new Mesh(hipRoofGeometry(14, 7, 2.4, 0.5), MAT.roof2);
    roof.position.y = 5;
    hut.add(roof);
  }
  const pole = new Mesh(new CylinderGeometry(0.2, 0.25, 9, 6), MAT.woodDark);
  pole.position.set(0, 28.5, 0);
  g.add(pole);
  const flag = createCloth(g, { width: 6, height: 3.6, material: MAT.red });
  flag.position.set(3.1, 31, 0);
  OBSTACLES.push({ x, z, radius: 11, top: base + 34 });
  castAll(g);
}

/* --------------------------------------------------------------- bridge --- */

function bridge(root) {
  const span = OVERHANGS.find((o) => o.bridge);
  const { x, z } = PLACES.bridge;
  // Local x runs across the canyon, from one wall to the other.
  const g = site(root, x, z, -Math.atan2(0.8, 0.6), 0);
  const deckTop = span.top;
  const soffit = span.bottom;
  const length = 150;

  const deck = new Mesh(new BoxGeometry(length, 8, 14), MAT.stone);
  deck.position.y = deckTop - 4;
  g.add(deck);
  for (const side of [-1, 1]) {
    const parapet = new Mesh(new BoxGeometry(length, 1.6, 1), MAT.stoneDark);
    parapet.position.set(0, deckTop + 0.8, side * 6.5);
    g.add(parapet);
  }
  // Spandrel wall between the arch and the deck, in slices that follow the
  // curve of the arch, pierced by a little arcade.
  const rise = 18;
  const halfSpan = 50;
  const radius = (halfSpan * halfSpan) / (2 * rise) + rise / 2;
  const centreY = soffit - radius;
  for (let sx = -52; sx < 52; sx += 4) {
    const mid = sx + 2;
    const extrados = centreY + Math.sqrt(Math.max(0, (radius + 3.4) ** 2 - mid * mid));
    const bottom = Math.min(extrados, soffit + 2);
    const height = deckTop - 8 - bottom;
    if (height <= 0.2) continue;
    const slice = new Mesh(new BoxGeometry(4.05, height, 12), MAT.stone);
    slice.position.set(mid, bottom + height / 2, 0);
    g.add(slice);
  }
  for (let i = -4; i <= 4; i++) {
    if (Math.abs(i) < 1) continue;
    const hole = new Mesh(new BoxGeometry(5, 7, 12.4), MAT.dark);
    hole.position.set(i * 10, soffit + 5, 0);
    g.add(hole);
  }
  // The great arch itself, springing from the canyon walls.
  stoneArch(g, { span: 100, rise: 18, thickness: 3.4, depth: 13, y: soffit - 18, pieces: 17, material: MAT.stoneDark });
  // Abutments into the rock on both sides.
  for (const side of [-1, 1]) {
    const pier = new Mesh(new BoxGeometry(22, 80, 16), MAT.stone);
    pier.position.set(side * 60, deckTop - 44, 0);
    g.add(pier);
  }
  // Lamp posts along the parapet.
  for (let i = -3; i <= 3; i++) {
    for (const side of [-1, 1]) {
      const post = new Mesh(new CylinderGeometry(0.15, 0.2, 3.4, 5), MAT.dark);
      post.position.set(i * 18, deckTop + 1.7, side * 6.4);
      g.add(post);
      const lamp = new Mesh(new SphereGeometry(0.45, 6, 4), MAT.lamp);
      lamp.position.set(i * 18, deckTop + 3.6, side * 6.4);
      g.add(lamp);
    }
  }
  castAll(g);
}

/* ---------------------------------------------------------------- wreck --- */

function wreck(root) {
  const { x, z } = PLACES.wreck;
  const g = site(root, x, z, 0.9, -3.2);
  g.rotation.z = 0.28;
  g.rotation.x = -0.1;
  // Keel and ribs of an old trading ketch, the planking long gone.
  const keel = new Mesh(new BoxGeometry(0.9, 0.9, 30), OLD_WOOD);
  g.add(keel);
  for (let i = 0; i < 12; i++) {
    const t = i / 11 - 0.5;
    const width = 7 * Math.cos(t * 2.4);
    const rib = new Mesh(new TorusGeometry(width / 2, 0.32, 4, 10, Math.PI), OLD_WOOD);
    rib.rotation.z = Math.PI;
    rib.position.set(0, width / 2 - 0.4, t * 26);
    g.add(rib);
  }
  const planks = new Mesh(new BoxGeometry(6, 0.4, 9), OLD_WOOD);
  planks.position.set(-1.8, 1.6, -7);
  planks.rotation.z = 1.1;
  g.add(planks);
  const mast = new Mesh(new CylinderGeometry(0.35, 0.45, 14, 6), OLD_WOOD);
  mast.position.set(0, 7, 4);
  mast.rotation.z = -0.5;
  g.add(mast);
  const yard = new Mesh(new CylinderGeometry(0.2, 0.2, 8, 5), OLD_WOOD);
  yard.position.set(-2.4, 11, 4);
  yard.rotation.z = 0.9;
  g.add(yard);
  const anchor = new Mesh(new TorusGeometry(1.1, 0.25, 5, 10, Math.PI), RUST);
  anchor.position.set(2, -0.5, 13);
  g.add(anchor);
  castAll(g);
}

/* ------------------------------------------------------------------ lido --- */

const STRIPES = [
  [MAT.red, MAT.white],
  [MAT.blue, MAT.white],
  [MAT.yellow, MAT.white],
  [mat(0x2f8f6a), MAT.cream],
];

/** A beach umbrella, striped in eight segments, with a sunbed beside it. */
function ombrellone(parent, x, z, colours, rot = 0) {
  const y = terrainHeightAt(x, z);
  const pole = new Mesh(new CylinderGeometry(0.08, 0.08, 3.4, 4), MAT.white);
  pole.position.set(x, y + 1.7, z);
  parent.add(pole);
  for (let i = 0; i < 8; i++) {
    const wedge = new Mesh(new ConeGeometry(2.4, 0.9, 2, 1, false, (i / 8) * TAU, TAU / 8), colours[i % 2]);
    wedge.position.set(x, y + 3.5, z);
    parent.add(wedge);
  }
  const bed = new Mesh(new BoxGeometry(0.9, 0.3, 2.2), MAT.white);
  bed.position.set(x + Math.cos(rot) * 1.6, y + 0.4, z + Math.sin(rot) * 1.6);
  bed.rotation.y = -rot + Math.PI / 2;
  parent.add(bed);
  if (chance(0.5)) {
    const towel = new Mesh(new BoxGeometry(0.8, 0.05, 1.8), pick(CLOTH));
    towel.position.set(bed.position.x, y + 0.58, bed.position.z);
    towel.rotation.y = bed.rotation.y;
    parent.add(towel);
  }
}

function lido(root, boats) {
  // Rows of umbrellas on the town beach, facing the sea.
  const g = site(root, 0, 0, 0, 0);
  const beach = PLACES.villageBeach;
  const seaward = Math.atan2(beach.z - PLACES.villageCentre.z, beach.x - PLACES.villageCentre.x);
  const across = seaward + Math.PI / 2;
  const colours = pick(STRIPES);
  for (let row = 0; row < 3; row++) {
    for (let i = -3; i <= 3; i++) {
      const bx = beach.x + Math.cos(across) * i * 6 + Math.cos(seaward) * (row * 6 - 8);
      const bz = beach.z + Math.sin(across) * i * 6 + Math.sin(seaward) * (row * 6 - 8);
      const ground = terrainHeightAt(bx, bz);
      if (ground < 0.6 || ground > 6) continue;
      ombrellone(g, bx, bz, row === 1 ? pick(STRIPES) : colours, seaward);
    }
  }
  // The lifeguard's high chair, at the end of the rows.
  const cx = beach.x + Math.cos(across) * 26 + Math.cos(seaward) * 2;
  const cz = beach.z + Math.sin(across) * 26 + Math.sin(seaward) * 2;
  if (terrainHeightAt(cx, cz) > 0.5) {
    const chair = site(g, cx, cz, -seaward + Math.PI / 2);
    for (const [lx, lz] of [[-0.8, -0.8], [0.8, -0.8], [-0.8, 0.8], [0.8, 0.8]]) {
      const leg = new Mesh(new CylinderGeometry(0.1, 0.1, 4, 4), MAT.white);
      leg.position.set(lx, 2, lz);
      chair.add(leg);
    }
    const seat = new Mesh(new BoxGeometry(2, 0.3, 2), MAT.red);
    seat.position.y = 4;
    chair.add(seat);
    const back = new Mesh(new BoxGeometry(2, 1.6, 0.2), MAT.red);
    back.position.set(0, 4.8, -0.9);
    chair.add(back);
    const flag = createCloth(chair, { width: 1.6, height: 1, material: MAT.red });
    flag.position.set(1, 6.4, -0.9);
  }
  // A pedalo out in the shallows.
  const px = beach.x + Math.cos(seaward) * 40;
  const pz = beach.z + Math.sin(seaward) * 40;
  const pedalo = new Group();
  pedalo.position.set(px, 0.6, pz);
  pedalo.rotation.y = rand(0, TAU);
  pedalo.userData.dynamic = true;
  root.add(pedalo);
  for (const side of [-1, 1]) {
    const float = new Mesh(new CylinderGeometry(0.5, 0.5, 4.4, 8), MAT.white);
    float.rotation.x = Math.PI / 2;
    float.position.x = side * 1;
    pedalo.add(float);
  }
  const seat = new Mesh(new BoxGeometry(2, 0.8, 1.6), MAT.yellow);
  seat.position.y = 0.7;
  pedalo.add(seat);
  boats.push({ group: pedalo, phase: rand(0, TAU), drift: 0, heading: pedalo.rotation.y, turn: 0, turnTimer: 0, heel: 0, ride: 0.2 });

  // A beach bar on the sand ring of the atoll, with umbrellas round it.
  const atoll = island('atoll');
  const a = 3.93;
  const r = islandRadiusAt(atoll, a) * 0.8;
  const bx = atoll.centre.x + Math.cos(a) * r;
  const bz = atoll.centre.z + Math.sin(a) * r;
  const bar = site(g, bx, bz, -a + Math.PI / 2);
  const hut = new Mesh(new BoxGeometry(7, 3.2, 5), OLD_WOOD);
  hut.position.y = 1.6;
  bar.add(hut);
  const thatch = new Mesh(new ConeGeometry(6.2, 3, 6), mat(0xcfae6a));
  thatch.position.y = 4.6;
  bar.add(thatch);
  const counter = new Mesh(new BoxGeometry(7.4, 1.2, 1), MAT.cream);
  counter.position.set(0, 1.4, 3);
  bar.add(counter);
  for (let i = 0; i < 6; i++) {
    const ang = a + (i - 2.5) * 0.06;
    const ux = atoll.centre.x + Math.cos(ang) * r * rand(0.97, 1.06);
    const uz = atoll.centre.z + Math.sin(ang) * r * rand(0.97, 1.06);
    if (Math.hypot(ux - bx, uz - bz) < 8) continue;
    ombrellone(g, ux, uz, pick(STRIPES), ang);
  }
  castAll(g);
}

/* --------------------------------------------------------------- hideout --- */

function hideout(root) {
  // A ledge at the edge of the grotto cavern, where somebody keeps a boat.
  const c = PLACES.grottoCavern;
  const lake = LAKES[0];
  const away = Math.atan2(c.z - lake.z, c.x - lake.x) + 1.2;
  const lx = c.x + Math.cos(away) * 50;
  const lz = c.z + Math.sin(away) * 50;
  const g = site(root, lx, lz, -away + Math.PI / 2, 0);
  const ledge = new Mesh(new CylinderGeometry(9, 11, 3.4, 9), MAT.rock);
  ledge.position.y = 0.4;
  g.add(ledge);
  const deck = new Mesh(new BoxGeometry(8, 0.4, 5), OLD_WOOD);
  deck.position.set(0, 2.3, 5);
  g.add(deck);
  // Lanterns, a hammock, crates and a tent.
  const tent = new Mesh(new ConeGeometry(3, 3.4, 4), mat(0xd9c49a));
  tent.position.set(-3, 3.8, -2);
  tent.rotation.y = Math.PI / 4;
  g.add(tent);
  for (let i = 0; i < 3; i++) {
    const crate = new Mesh(new BoxGeometry(1.4, 1.2, 1.4), MAT.wood);
    crate.position.set(3 + i * 0.4, 2.7 + (i === 2 ? 1.2 : 0), -2 + (i === 2 ? 0 : i * 1.5));
    g.add(crate);
  }
  const hammock = new Mesh(new TorusGeometry(2.2, 0.35, 4, 10, Math.PI), mat(0xe8d6ae));
  hammock.rotation.z = Math.PI;
  hammock.position.set(0, 5, -4);
  g.add(hammock);
  const lanterns = [];
  for (let i = 0; i < 4; i++) {
    const lantern = new Mesh(new SphereGeometry(0.35, 8, 6), MAT.lamp);
    lantern.position.set(-4 + i * 2.8, 6.2 - (i % 2) * 0.6, 1);
    g.add(lantern);
    lanterns.push(lantern);
  }
  // A warm light to see the ledge by.
  const light = new PointLight(0xffc27a, 60, 60, 1.6);
  light.position.set(lx, 8, lz);
  light.userData.dynamic = true;
  root.add(light);
  const boat = createBoat(root, lx + Math.cos(away + 1.2) * 16, lz + Math.sin(away + 1.2) * 16, 0.7, {
    moored: true,
    heading: away,
    kind: 'fishing',
  });
  castAll(g);
  return boat;
}

/* ---------------------------------------------------------------- sheep --- */

function tarnside(root) {
  const lake = LAKES[0];
  const g = site(root, 0, 0, 0, 0);
  // A shepherd's hut, drystone with a slab roof.
  const a = 2.4;
  const hx = lake.x + Math.cos(a) * (lake.radius + 18);
  const hz = lake.z + Math.sin(a) * (lake.radius + 18);
  const hut = site(g, hx, hz, a, terrainHeightAt(hx, hz, true) - 0.3);
  const body = new Mesh(new CylinderGeometry(3.4, 3.8, 3.4, 8), MAT.stoneDark);
  body.position.y = 1.7;
  hut.add(body);
  const cap = new Mesh(new ConeGeometry(4.2, 2.8, 8), MAT.stone);
  cap.position.y = 4.8;
  hut.add(cap);
  const door = new Mesh(new BoxGeometry(1.2, 2, 0.3), MAT.dark);
  door.position.set(0, 1, 3.6);
  hut.add(door);

  // Sheep, which are mostly a cloud with legs.
  const wool = mat(0xfaf6ea, { soft: true });
  for (let i = 0; i < 9; i++) {
    const ang = rand(0, TAU);
    const d = lake.radius + rand(6, 34);
    const sx = lake.x + Math.cos(ang) * d;
    const sz = lake.z + Math.sin(ang) * d;
    const ground = terrainHeightAt(sx, sz, true);
    if (ground < lake.level) continue;
    const sheep = site(g, sx, sz, rand(0, TAU), ground);
    const body2 = new Mesh(new IcosahedronGeometry(1.1, 1), wool);
    body2.scale.set(1, 0.85, 1.35);
    body2.position.y = 1.2;
    sheep.add(body2);
    const head = new Mesh(new SphereGeometry(0.42, 8, 6), MAT.dark);
    head.position.set(0, 1.4, 1.45);
    sheep.add(head);
    for (const [lx, lz] of [[-0.45, -0.6], [0.45, -0.6], [-0.45, 0.6], [0.45, 0.6]]) {
      const leg = new Mesh(new CylinderGeometry(0.09, 0.09, 0.8, 4), MAT.dark);
      leg.position.set(lx, 0.4, lz);
      sheep.add(leg);
    }
  }
  castAll(g);
}

/* ------------------------------------------------------------ pine lake --- */

function pineLake(root, boats) {
  const lake = LAKES[1];
  const a = -0.6;
  const jx = lake.x + Math.cos(a) * (lake.radius - 4);
  const jz = lake.z + Math.sin(a) * (lake.radius - 4);
  const g = site(root, jx, jz, -a - Math.PI / 2, lake.level);
  const deck = new Mesh(new BoxGeometry(3, 0.4, 16), OLD_WOOD);
  deck.position.set(0, 1, -4);
  g.add(deck);
  for (let i = 0; i < 4; i++) {
    for (const side of [-1, 1]) {
      const post = new Mesh(new CylinderGeometry(0.2, 0.2, 3, 5), MAT.woodDark);
      post.position.set(side * 1.3, -0.2, -11 + i * 4.5);
      g.add(post);
    }
  }
  // A cabin among the trees on the shore behind it.
  const cx = lake.x + Math.cos(a) * (lake.radius + 16);
  const cz = lake.z + Math.sin(a) * (lake.radius + 16);
  const cabin = site(root, cx, cz, -a + Math.PI / 2, terrainHeightAt(cx, cz) - 0.3);
  const body = new Mesh(new BoxGeometry(8, 4, 6), OLD_WOOD);
  body.position.y = 2;
  cabin.add(body);
  const roof = new Mesh(gableRoofGeometry(8, 6, 2.8, 0.7), mat(0x7a4a36));
  roof.position.y = 4;
  cabin.add(roof);
  shutteredWindow(cabin, 1.8, 2.2, 3.05, { shutter: MAT.green, w: 1.2, h: 1.4 });
  const chimney = new Mesh(new BoxGeometry(0.9, 3, 0.9), MAT.stone);
  chimney.position.set(-2.6, 5, 0);
  cabin.add(chimney);
  boats.push(createBoat(root, lake.x + Math.cos(a) * (lake.radius - 16), lake.z + Math.sin(a) * (lake.radius - 16), 0.55, {
    moored: true,
    heading: -a,
    kind: 'fishing',
  }));
  boats[boats.length - 1].lake = lake.level;
  castAll(g);
  castAll(cabin);
}

/* --------------------------------------------------------------- hermit --- */

function hermit(root) {
  const spec = island('stacks');
  const tallest = spec.spires.reduce((a, b) => (b.height > a.height ? b : a));
  const x = spec.centre.x + tallest.dx - 6;
  const z = spec.centre.z + tallest.dz + 8;
  const g = site(root, x, z, 0.4, terrainHeightAt(x, z, true) - 0.3);
  const hut = new Mesh(new BoxGeometry(5, 3.6, 4.4), WHITEWASH);
  hut.position.y = 1.8;
  g.add(hut);
  const roof = new Mesh(hipRoofGeometry(5, 4.4, 1.8, 0.4), MAT.roof);
  roof.position.y = 3.6;
  g.add(roof);
  archedDoor(g, 0, 2.2, { w: 1.2, h: 2.2, material: MAT.blue });
  flowerPots(g, 1.8, 0, 2.6, 2, 0.8);
  const pole = new Mesh(new CylinderGeometry(0.1, 0.12, 6, 5), MAT.woodDark);
  pole.position.set(-3.2, 3, 0);
  g.add(pole);
  const flag = createCloth(g, { width: 2.2, height: 1.4, material: MAT.yellow });
  flag.position.set(-2, 5.4, 0);
  castAll(g);
}

/* ---------------------------------------------------------------- build --- */

export function createLandmarks(scene) {
  const root = new Group();
  root.name = 'landmarks';
  scene.add(root);
  const boats = [];

  chapel(root, boats);
  fortress(root);
  bridge(root);
  wreck(root);
  lido(root, boats);
  boats.push(hideout(root));
  tarnside(root);
  pineLake(root, boats);
  hermit(root);

  // Cypresses round the chapel and the fortress.
  for (let i = 0; i < 8; i++) {
    const a = rand(0, TAU);
    createTree(root, PLACES.chapel.x + Math.cos(a) * rand(12, 24), PLACES.chapel.z + Math.sin(a) * rand(12, 24), rand(0.7, 1), 'cypress');
  }

  bakeStatic(root);
  return { root, boats };
}
