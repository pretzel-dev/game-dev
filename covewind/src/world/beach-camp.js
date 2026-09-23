/**
 * Somebody's afternoon, left on the sand in the cove: a striped deck chair, a
 * table with a couple of drinks, a newspaper fluttering where it was put down,
 * and a radio still playing to nobody.
 *
 * It is the smallest thing on the island and the only one you have to land to
 * see properly, which is the point of having floats.
 */
import { BoxGeometry, CylinderGeometry, Group, Mesh, SphereGeometry } from 'three';
import { PLACES, terrainHeightAt } from './terrain.js';
import { createCloth } from './cloth.js';
import { MAT, mat } from '../core/materials.js';

/** Seaward, from the middle of the beach towards the cove mouth. */
const OUTWARD = Math.atan2(
  PLACES.coveDock.z - PLACES.coveBeach.z,
  PLACES.coveDock.x - PLACES.coveBeach.x
);

const NEWSPRINT = mat(0xf2ecdc);
const CANVAS_A = mat(0xd8604e);
const CANVAS_B = mat(0xfaf0d6);
const RADIO_BODY = mat(0xd9c39a);
const DRINK = mat(0xe98d3a);
const GLASS = mat(0xd8eef2);

/**
 * Where the camp sits: a few paces up the sand from the waterline, off to one
 * side of the dock. Derived from the height field, so it follows the beach if
 * the island is ever retuned.
 */
export function beachCampSpot() {
  const base = PLACES.coveBeach;
  const dx = Math.cos(OUTWARD);
  const dz = Math.sin(OUTWARD);
  // A few paces along the shore, clear of the dock and the shack.
  const alongX = -dz * 16;
  const alongZ = dx * 16;

  // Walk down the sand, stop short of the water, then step back up the beach
  // so the whole camp sits on dry sand.
  let steps = 0;
  for (let d = -12; d <= 60; d += 1.5) {
    if (terrainHeightAt(base.x + alongX + dx * d, base.z + alongZ + dz * d) < 2.8) break;
    steps = d;
  }
  const back = Math.max(-12, steps - 4.5);
  const chosen = { x: base.x + alongX + dx * back, z: base.z + alongZ + dz * back };

  return { ...chosen, y: terrainHeightAt(chosen.x, chosen.z), facing: OUTWARD };
}

function deckChair(parent) {
  const chair = new Group();
  parent.add(chair);

  const frame = MAT.wood;
  // Two A-frames: front legs short, back legs long, hinged in the middle.
  for (const side of [-1, 1]) {
    const front = new Mesh(new BoxGeometry(0.14, 1.5, 0.14), frame);
    front.position.set(side * 0.62, 0.7, 0.5);
    front.rotation.x = 0.34;
    chair.add(front);

    const back = new Mesh(new BoxGeometry(0.14, 2.3, 0.14), frame);
    back.position.set(side * 0.62, 0.95, -0.55);
    back.rotation.x = -0.5;
    chair.add(back);

    const arm = new Mesh(new BoxGeometry(0.13, 0.13, 1.9), frame);
    arm.position.set(side * 0.62, 1.32, -0.1);
    arm.rotation.x = -0.16;
    chair.add(arm);
  }

  // The striped canvas, slung between the frames and reclined.
  const canvas = new Group();
  canvas.position.set(0, 1.02, -0.1);
  canvas.rotation.x = -0.42;
  chair.add(canvas);
  for (let i = 0; i < 9; i++) {
    const slat = new Mesh(new BoxGeometry(1.34, 0.09, 0.3), i % 2 ? CANVAS_A : CANVAS_B);
    slat.position.set(0, 0, -1.1 + i * 0.28);
    // The sling dips in the middle, the way canvas does.
    slat.position.y = -Math.cos((i / 8 - 0.5) * 2.6) * 0.12;
    slat.castShadow = true;
    canvas.add(slat);
  }

  // The headrest end, propped a little higher.
  const headrest = new Mesh(new BoxGeometry(1.34, 0.11, 0.72), CANVAS_A);
  headrest.position.set(0, 1.68, -1.2);
  headrest.rotation.x = -0.95;
  headrest.castShadow = true;
  chair.add(headrest);

  return chair;
}

function sideTable(parent) {
  const table = new Group();
  table.position.set(1.55, 0, 0.15);
  parent.add(table);

  const top = new Mesh(new CylinderGeometry(0.72, 0.72, 0.12, 12), MAT.woodDark);
  top.position.y = 1.05;
  top.castShadow = true;
  table.add(top);

  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.4;
    const leg = new Mesh(new CylinderGeometry(0.06, 0.07, 1.05, 5), MAT.woodDark);
    leg.position.set(Math.cos(a) * 0.5, 0.52, Math.sin(a) * 0.5);
    leg.rotation.z = -Math.cos(a) * 0.13;
    leg.rotation.x = Math.sin(a) * 0.13;
    table.add(leg);
  }

  // Two tall drinks, one with a slice on the rim, and a bottle between them.
  for (const [i, x] of [-0.26, 0.28].entries()) {
    const glass = new Mesh(new CylinderGeometry(0.17, 0.14, 0.52, 8), GLASS);
    glass.position.set(x, 1.37, i ? 0.18 : -0.16);
    glass.castShadow = true;
    table.add(glass);

    const juice = new Mesh(new CylinderGeometry(0.15, 0.13, 0.34, 8), DRINK);
    juice.position.set(x, 1.3, i ? 0.18 : -0.16);
    table.add(juice);

    const straw = new Mesh(new CylinderGeometry(0.025, 0.025, 0.7, 4), MAT.red);
    straw.position.set(x + 0.07, 1.58, i ? 0.18 : -0.16);
    straw.rotation.z = -0.3;
    table.add(straw);
  }

  const slice = new Mesh(new CylinderGeometry(0.12, 0.12, 0.03, 8), MAT.yellow);
  slice.position.set(-0.26, 1.63, -0.16);
  slice.rotation.x = Math.PI / 2.4;
  table.add(slice);

  const bottle = new Mesh(new CylinderGeometry(0.13, 0.17, 0.6, 8), MAT.leaf);
  bottle.position.set(0.02, 1.41, -0.02);
  bottle.castShadow = true;
  table.add(bottle);
  const neck = new Mesh(new CylinderGeometry(0.05, 0.07, 0.3, 6), MAT.leaf);
  neck.position.set(0.02, 1.82, -0.02);
  table.add(neck);

  return table;
}

function radioSet(parent) {
  const radio = new Group();
  radio.position.set(-1.45, 0, 0.7);
  radio.rotation.y = 0.5;
  parent.add(radio);

  const body = new Mesh(new BoxGeometry(1.15, 0.72, 0.42), RADIO_BODY);
  body.position.y = 0.36;
  const face = new Mesh(new BoxGeometry(1.02, 0.58, 0.06), MAT.red);
  face.position.set(0, 0.37, 0.2);
  face.rotation.x = -0.08;
  radio.add(face);
  body.rotation.x = -0.08;
  body.castShadow = true;
  radio.add(body);

  const grille = new Mesh(new CylinderGeometry(0.24, 0.24, 0.06, 12), MAT.dark);
  grille.rotation.x = Math.PI / 2;
  grille.position.set(-0.26, 0.38, 0.22);
  radio.add(grille);

  for (const [i, x] of [0.18, 0.42].entries()) {
    const dial = new Mesh(new CylinderGeometry(0.09, 0.09, 0.05, 8), i ? MAT.red : MAT.dark);
    dial.rotation.x = Math.PI / 2;
    dial.position.set(x, 0.38, 0.22);
    radio.add(dial);
  }

  const handle = new Mesh(new BoxGeometry(0.62, 0.07, 0.07), MAT.dark);
  handle.position.set(0, 0.78, 0);
  radio.add(handle);

  const aerial = new Mesh(new CylinderGeometry(0.022, 0.035, 1.5, 4), MAT.dark);
  aerial.position.set(0.5, 1.05, -0.12);
  aerial.rotation.z = -0.42;
  aerial.rotation.x = -0.2;
  radio.add(aerial);

  return radio;
}

function newspaper(parent) {
  // Put down open on the sand, one page lifting in the breeze. The cloth is the
  // same system the village laundry uses, so it moves with the same wind.
  const paper = new Group();
  paper.position.set(-0.75, 0.06, 1.5);
  paper.rotation.y = -0.7;
  parent.add(paper);

  const folded = new Mesh(new BoxGeometry(1.5, 0.05, 1.05), NEWSPRINT);
  folded.position.set(0.1, 0.03, 0);
  folded.receiveShadow = true;
  paper.add(folded);

  // A headline and two columns of type, at the scale of a thing you cannot read.
  const headline = new Mesh(new BoxGeometry(0.78, 0.012, 0.075), MAT.dark);
  headline.position.set(-0.05, 0.06, -0.38);
  paper.add(headline);
  for (let column = 0; column < 2; column++) {
    for (let line = 0; line < 7; line++) {
      const type = new Mesh(new BoxGeometry(0.58, 0.012, 0.022), MAT.dark);
      type.position.set(-0.24 + column * 0.66, 0.06, -0.22 + line * 0.085);
      paper.add(type);
    }
  }

  const page = createCloth(paper, {
    width: 1.15,
    height: 0.92,
    material: NEWSPRINT,
    phase: 2.4,
    amplitude: 0.14, // a corner stirring, not a sail
  });
  page.rotation.set(-Math.PI / 2 + 0.1, 0, 0.12);
  page.position.set(-0.66, 0.09, 0.04);

  return paper;
}

export function createBeachCamp(parent) {
  const spot = beachCampSpot();
  const group = new Group();
  group.name = 'beachCamp';
  group.position.set(spot.x, spot.y, spot.z);
  // Facing the water, turned a few degrees for the view down the cove.
  group.rotation.y = -spot.facing + Math.PI / 2 + 0.25;
  group.scale.setScalar(1.35);
  parent.add(group);

  deckChair(group);
  sideTable(group);
  radioSet(group);
  newspaper(group);

  // A pair of sandals kicked off beside the chair, because somebody is swimming.
  for (const [i, x] of [-0.9, -0.55].entries()) {
    const sandal = new Mesh(new BoxGeometry(0.28, 0.07, 0.66), MAT.blue);
    sandal.position.set(x, 0.05, -1.1 + i * 0.1);
    sandal.rotation.y = i ? 0.4 : -0.25;
    group.add(sandal);
  }

  const bucket = new Mesh(new CylinderGeometry(0.3, 0.24, 0.42, 10), MAT.red);
  bucket.position.set(2.2, 0.22, 1.5);
  bucket.rotation.z = 0.25;
  bucket.castShadow = true;
  group.add(bucket);

  const ball = new Mesh(new SphereGeometry(0.34, 10, 8), MAT.yellow);
  ball.position.set(2.9, 0.34, -0.9);
  ball.castShadow = true;
  group.add(ball);

  group.traverse((o) => {
    if (o.isMesh) o.castShadow = true;
  });

  return {
    group,
    spot,
    /** Where the radio is, for the ambience to play from. */
    radioPosition: { x: spot.x - 1.9, y: spot.y + 0.6, z: spot.z + 0.9 },
  };
}
