/**
 * The lighthouse on the headland — the island's landmark from any altitude.
 */
import {
  AdditiveBlending,
  ConeGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  TorusGeometry,
} from 'three';
import { PLACES, terrainHeightAt } from './terrain.js';
import { createHouse, createTree } from './props.js';
import { createCloth } from './cloth.js';
import { MAT, CLOTH } from '../core/materials.js';
import { pick, rand } from '../core/utils.js';

export function createLighthouse(scene) {
  const { x, z } = PLACES.lighthouse;
  const ground = terrainHeightAt(x, z);
  const group = new Group();
  group.name = 'lighthouse';
  group.position.set(x, ground, z);
  scene.add(group);

  const tower = new Mesh(new CylinderGeometry(5.6, 8.4, 34, 16, 1), MAT.cream);
  tower.position.y = 17;
  tower.castShadow = true;
  tower.receiveShadow = true;
  group.add(tower);

  for (const y of [9, 22]) {
    const band = new Mesh(new CylinderGeometry(7.2 - (y - 9) * 0.12, 7.6 - (y - 9) * 0.12, 5.5, 16), MAT.red);
    band.position.y = y;
    group.add(band);
  }

  const gallery = new Mesh(new CylinderGeometry(8.6, 8.6, 1.2, 18), MAT.dark);
  gallery.position.y = 34.4;
  gallery.castShadow = true;
  group.add(gallery);

  const rail = new Mesh(new TorusGeometry(8.4, 0.25, 5, 20), MAT.dark);
  rail.rotation.x = Math.PI / 2;
  rail.position.y = 36.4;
  group.add(rail);

  const lampRoom = new Mesh(new CylinderGeometry(5.2, 5.6, 6.8, 12), MAT.blue);
  lampRoom.position.y = 38.4;
  lampRoom.castShadow = true;
  group.add(lampRoom);

  const lamp = new Mesh(new CylinderGeometry(2.6, 2.6, 4, 10), new MeshBasicMaterial({ color: 0xfff2c0 }));
  lamp.position.y = 38.4;
  group.add(lamp);

  const roof = new Mesh(new ConeGeometry(6.8, 6, 12), MAT.red);
  roof.position.y = 44.8;
  roof.castShadow = true;
  group.add(roof);

  const finial = new Mesh(new ConeGeometry(0.5, 2.2, 6), MAT.dark);
  finial.position.y = 48.6;
  group.add(finial);

  // The beam. Two cones facing opposite ways so it sweeps like a real optic.
  const beamMaterial = new MeshBasicMaterial({
    color: 0xfff0af,
    transparent: true,
    opacity: 0.15,
    depthWrite: false,
    side: 2,
    blending: AdditiveBlending,
    fog: false,
  });
  const beams = new Group();
  beams.position.y = 38.4;
  group.add(beams);
  for (const dir of [1, -1]) {
    const beam = new Mesh(new ConeGeometry(11, 150, 16, 1, true), beamMaterial);
    beam.rotation.x = (Math.PI / 2) * dir;
    beam.position.z = 75 * dir;
    beams.add(beam);
  }

  // Keeper's cottage, garden wall and a windswept few trees.
  createHouse(scene, { x: x - 34, z: z - 18, rot: -0.5, scale: 0.8, wall: MAT.cream });
  const pole = new Mesh(new CylinderGeometry(0.16, 0.2, 9, 5), MAT.woodDark);
  pole.position.set(-16, 4.5, 14);
  group.add(pole);
  const flag = createCloth(group, { width: 4.2, height: 2.6, material: pick(CLOTH) });
  flag.position.set(-13.8, 8, 14);

  for (let i = 0; i < 7; i++) {
    createTree(scene, x + rand(-70, 40), z + rand(-70, 70), rand(0.55, 0.85), 'cypress');
  }

  return {
    group,
    beams,
    beamMaterial,
    lampPosition: { x, y: ground + 38.4, z },
    update(t, beamOpacity) {
      beams.rotation.y = t * 0.42;
      beamMaterial.opacity = beamOpacity;
      // The lamp itself pulses very gently as the optic turns.
      lamp.scale.setScalar(1 + Math.sin(t * 0.84) * 0.05);
    },
  };
}
