/**
 * The hidden cove: a beach at the head of a cliff-walled inlet, a shack, a
 * dock, and nets drying in the wind. Worth finding, and worth landing beside.
 */
import { BoxGeometry, CylinderGeometry, Group, Mesh, SphereGeometry } from 'three';
import { PLACES, terrainHeightAt } from './terrain.js';
import { createBoat, createHouse, createPier, createTree } from './props.js';
import { createCloth } from './cloth.js';
import { MAT, CLOTH } from '../core/materials.js';
import { QUALITY } from '../core/quality.js';
import { chance, pick, rand, TAU } from '../core/utils.js';

export function createCove(scene) {
  const group = new Group();
  group.name = 'cove';
  scene.add(group);

  const beach = PLACES.coveBeach;
  const dock = PLACES.coveDock;
  const outward = Math.atan2(dock.z - beach.z, dock.x - beach.x);

  // A fisherman's shack tucked against the cliff.
  createHouse(group, {
    x: beach.x - 26,
    z: beach.z + 24,
    rot: outward + Math.PI,
    scale: 0.7,
    wall: MAT.plaster2,
  });

  // The dock, running out into deeper water.
  createPier(group, {
    x: dock.x,
    z: dock.z,
    length: 46,
    width: 4.2,
    rot: -outward + Math.PI / 2,
  });

  const moorings = [];
  for (let i = 0; i < 2; i++) {
    moorings.push(
      createBoat(group, dock.x + rand(-16, 16), dock.z + rand(-16, 16), rand(0.55, 0.8), {
        moored: true,
        heading: outward + rand(-0.3, 0.3),
      })
    );
  }

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

  // Buoys and crab pots on the sand.
  for (let i = 0; i < 14; i++) {
    const x = beach.x + rand(-40, 42);
    const z = beach.z + rand(-36, 36);
    const ground = terrainHeightAt(x, z);
    const buoy = new Mesh(new SphereGeometry(rand(0.7, 1.1), 8, 6), pick([MAT.red, MAT.yellow, MAT.blue, MAT.white]));
    buoy.position.set(x, Math.max(ground, 0.4) + 0.6, z);
    group.add(buoy);
    if (chance(0.3)) {
      const pot = new Mesh(new BoxGeometry(1.8, 1.1, 1.8), MAT.wood);
      pot.position.set(x + rand(-4, 4), Math.max(ground, 0.5) + 0.6, z + rand(-4, 4));
      pot.rotation.y = rand(0, TAU);
      group.add(pot);
    }
  }

  // Palms behind the sand, and scrub up the cliff sides.
  for (let i = 0; i < Math.round(QUALITY.trees * 0.14); i++) {
    createTree(group, beach.x + rand(-58, 58), beach.z + rand(-20, 60), rand(0.7, 1.05), chance(0.6) ? 'palm' : 'olive');
  }

  // A flag on the dock head so the cove is findable from the air.
  const pole = new Mesh(new CylinderGeometry(0.14, 0.18, 7.5, 5), MAT.woodDark);
  pole.position.set(dock.x, 4.5, dock.z);
  group.add(pole);
  const flag = createCloth(group, { width: 3, height: 2, material: pick(CLOTH) });
  flag.position.set(dock.x + 1.6, 7.2, dock.z);

  return { group, moorings };
}
