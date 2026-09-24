/**
 * The hidden cove: a beach at the head of a cliff-walled inlet, a dock, and
 * somebody's afternoon left on the sand. Deliberately bare otherwise — it is
 * the quiet end of the island, and the chair should be the only thing in it.
 */
import { CylinderGeometry, Group, Mesh } from 'three';
import { PLACES, terrainHeightAt } from './terrain.js';
import { createPier, createTree } from './props.js';
import { createCloth } from './cloth.js';
import { createBeachCamp } from './beach-camp.js';
import { MAT, CLOTH } from '../core/materials.js';
import { QUALITY } from '../core/quality.js';
import { chance, pick, rand, TAU } from '../core/utils.js';
import { bakeStatic } from '../core/merge.js';

export function createCove(scene) {
  const group = new Group();
  group.name = 'cove';
  scene.add(group);

  const beach = PLACES.coveBeach;
  const dock = PLACES.coveDock;
  const outward = Math.atan2(dock.z - beach.z, dock.x - beach.x);

  // The dock, running out into deeper water.
  createPier(group, {
    x: dock.x,
    z: dock.z,
    length: 46,
    width: 4.2,
    rot: -outward + Math.PI / 2,
  });

  // Nets on poles, drying in the breeze.
  for (let i = 0; i < 3; i++) {
    const x = beach.x + rand(-30, 30);
    const z = beach.z + rand(-24, 24);
    const ground = terrainHeightAt(x, z);
    if (ground < 1) continue;
    const frame = new Group();
    frame.position.set(x, ground, z);
    frame.rotation.y = rand(0, TAU);
    group.add(frame);
    for (const side of [-3.2, 3.2]) {
      const post = new Mesh(new CylinderGeometry(0.18, 0.22, 6.5, 5), MAT.woodDark);
      post.position.set(side, 3.2, 0);
      frame.add(post);
    }
    const net = createCloth(frame, { width: 6, height: 3.6, mode: 'hang', material: MAT.leaf2 });
    net.position.set(0, 4.6, 0);
  }

  // Palms behind the sand, and scrub up the cliff sides.
  for (let i = 0; i < Math.round(QUALITY.trees * 0.14); i++) {
    createTree(group, beach.x + rand(-58, 58), beach.z + rand(-20, 60), rand(0.7, 1.05), chance(0.6) ? 'palm' : 'olive');
  }

  // Somebody's afternoon on the sand: deck chair, drinks, paper, radio.
  const camp = createBeachCamp(group);

  // A flag on the dock head so the cove is findable from the air.
  const pole = new Mesh(new CylinderGeometry(0.14, 0.18, 7.5, 5), MAT.woodDark);
  pole.position.set(dock.x, 4.5, dock.z);
  group.add(pole);
  const flag = createCloth(group, { width: 3, height: 2, material: pick(CLOTH) });
  flag.position.set(dock.x + 1.6, 7.2, dock.z);

  bakeStatic(group);
  return { group, moorings: [], camp };
}
