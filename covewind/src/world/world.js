/**
 * Builds the island and ticks everything living on it.
 */
import { Vector3 } from 'three';
import { createIsland, archPosition } from './island.js';
import { createVillage } from './village.js';
import { createLighthouse } from './lighthouse.js';
import { createCove } from './cove.js';
import { createBirds, updateBirds, updateVillagers } from './creatures.js';
import { createAIPlanes, updateAIPlanes } from './aircraft.js';
import { createBoat, createCloud, createTree } from './props.js';
import { updateCloth } from './cloth.js';
import { waveHeight } from './water.js';
import { PLACES, islandRadius, terrainHeightAt, TAU } from './terrain.js';
import { QUALITY } from '../core/quality.js';
import { damp, rand } from '../core/utils.js';

export function createWorld(scene) {
  const island = createIsland(scene);
  const village = createVillage(scene);
  const lighthouse = createLighthouse(scene);
  const cove = createCove(scene);

  // Scrub and olive groves across the middle of the island.
  const inland = Math.round(QUALITY.trees * 0.41);
  for (let i = 0; i < inland; i++) {
    const a = rand(0, TAU);
    const r = rand(40, 300) * 0.82;
    createTree(scene, Math.cos(a) * r, Math.sin(a) * r, rand(0.6, 1.15));
  }

  const clouds = [];
  for (let i = 0; i < QUALITY.clouds; i++) {
    clouds.push(
      createCloud(scene, rand(-860, 860), rand(215, 400), rand(-860, 860), rand(0.9, 2.4))
    );
  }

  const boats = [...village.moorings, ...cove.moorings];
  for (let i = 0; i < QUALITY.boats; i++) {
    // Out on the open water, clear of the rocks.
    const a = rand(0, TAU);
    const r = islandRadius(a) + rand(45, 260);
    boats.push(createBoat(scene, Math.cos(a) * r, Math.sin(a) * r, rand(0.7, 1.25)));
  }

  const birds = createBirds(scene);
  const aiPlanes = createAIPlanes(scene);

  const landmarks = {
    village: PLACES.villageCentre,
    harbour: PLACES.harbour,
    lighthouse: PLACES.lighthouse,
    cove: PLACES.coveBeach,
    arch: archPosition(),
    summit: PLACES.summit,
  };

  const _planePos = new Vector3();

  function update(t, dt, flight, wind, { beamOpacity = 0.15, onBirdScatter } = {}) {
    _planePos.copy(flight.pos);

    for (const cloud of clouds) {
      cloud.group.position.x += cloud.drift * dt * (1 + wind.gust * 0.8);
      cloud.group.position.y += Math.sin(t * 0.12 + cloud.bob) * dt * 0.6;
      if (cloud.group.position.x > 820) cloud.group.position.x = -820;
    }

    for (const boat of boats) {
      const { group } = boat;
      // Boats ride the same waves the aeroplane skims.
      const here = waveHeight(group.position.x, group.position.z, t);
      const ahead = waveHeight(group.position.x, group.position.z + 6, t);
      const side = waveHeight(group.position.x + 6, group.position.z, t);
      group.position.y = here + 1.05;
      group.rotation.x = damp(group.rotation.x, (ahead - here) * 0.08, 3, dt);
      group.rotation.z = damp(group.rotation.z, -(side - here) * 0.08, 3, dt);

      if (boat.drift > 0.1) {
        const nx = group.position.x + Math.sin(boat.heading) * boat.drift * dt * 6;
        const nz = group.position.z + Math.cos(boat.heading) * boat.drift * dt * 6;
        if (terrainHeightAt(nx, nz) < -4) {
          group.position.x = nx;
          group.position.z = nz;
        } else {
          boat.heading += 1.9; // sheer away from the rocks
        }
        group.rotation.y = damp(group.rotation.y, boat.heading, 1.4, dt);
      }
    }

    updateBirds(t, dt, _planePos, onBirdScatter);
    updateVillagers(village.villagers, t, dt, _planePos);
    updateAIPlanes(aiPlanes, t, dt);
    updateCloth(t, wind.gust);
    lighthouse.update(t, beamOpacity);
  }

  return {
    island,
    village,
    lighthouse,
    cove,
    clouds,
    boats,
    birds,
    aiPlanes,
    landmarks,
    update,
  };
}
