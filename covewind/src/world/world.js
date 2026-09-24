/**
 * Builds the archipelago and ticks everything living on it.
 */
import { Vector3 } from 'three';
import { createIslands, archPosition, terrainUniforms } from './island.js';
import { createVillage } from './village.js';
import { createLighthouse } from './lighthouse.js';
import { createCove } from './cove.js';
import { createFalls } from './falls.js';
import { createWhales } from './whales.js';
import { createBirds, updateBirds, updateVillagers } from './creatures.js';
import { createAIPlanes, updateAIPlanes } from './aircraft.js';
import { createBoat, createTree } from './props.js';
import { createLandmarks } from './landmarks.js';
import { createDolphins } from './dolphins.js';
import { buildForest, foliageUniforms } from './forest.js';
import { lakeUniforms } from './island.js';
import { updateCloth } from './cloth.js';
import { waveHeight } from './water.js';
import { ISLANDS, PLACES, island, islandRadiusAt, terrainHeightAt, TAU } from './terrain.js';
import { QUALITY } from '../core/quality.js';
import { angleDelta, damp, pick, rand } from '../core/utils.js';

/** Scatter trees over one island, thickest on the lower slopes. */
function plantIsland(scene, spec, count, kinds = null) {
  for (let i = 0; i < count; i++) {
    const a = rand(0, TAU);
    const r = islandRadiusAt(spec, a) * Math.sqrt(rand(0.05, 0.92));
    const x = spec.centre.x + Math.cos(a) * r;
    const z = spec.centre.z + Math.sin(a) * r;
    createTree(scene, x, z, rand(0.6, 1.15), kinds ? pick(kinds) : null);
  }
}

export function createWorld(scene, sky) {
  const islands = createIslands(scene);
  const village = createVillage(scene);
  const lighthouse = createLighthouse(scene);
  const cove = createCove(scene);
  const falls = createFalls(scene);

  // Each island planted to its character: olive groves and pines round the
  // town, cypress on the canyon's rim, woods on the falls island, palms on
  // the sand ring, a dark stand of umbrella pines on the pine island, and
  // maquis scrub everywhere there is room.
  const T = QUALITY.trees;
  plantIsland(scene, island('harbour'), Math.round(T * 0.2), ['olive', 'olive', 'pine', 'round', 'cypress']);
  plantIsland(scene, island('cove'), Math.round(T * 0.08), ['pine', 'round', 'olive']);
  plantIsland(scene, island('canyon'), Math.round(T * 0.08), ['cypress', 'pine', 'olive']);
  plantIsland(scene, island('falls'), Math.round(T * 0.13), ['round', 'round', 'pine', 'cypress']);
  plantIsland(scene, island('atoll'), Math.round(T * 0.07), ['palm']);
  plantIsland(scene, island('fortress'), Math.round(T * 0.04), ['cypress', 'olive']);
  plantIsland(scene, island('chapel'), 6, ['cypress']);
  plantIsland(scene, island('pines'), Math.round(T * 0.2), ['pine', 'pine', 'pine', 'round']);
  for (const spec of ISLANDS) {
    if (spec.spires || spec.lagoon) continue;
    plantIsland(scene, spec, Math.round(T * (spec.base / 330) * 0.35), ['bush']);
  }

  const clouds = sky.clouds;

  // Boats: the harbour's moorings, plus a few working between the islands.
  const boats = [...village.moorings];
  for (let i = 0; i < QUALITY.boats; i++) {
    let x = 0;
    let z = 0;
    for (let tries = 0; tries < 24; tries++) {
      x = rand(-1100, 1100);
      z = rand(-1100, 1100);
      if (terrainHeightAt(x, z) < -14) break;
    }
    boats.push(createBoat(scene, x, z, rand(0.7, 1.25)));
  }

  const places = createLandmarks(scene);
  boats.push(...places.boats);

  // A regatta: little sailing boats with coloured sails, rounding a course
  // in the open water between the town and the sand ring.
  const regatta = { centre: { x: 430, z: 330 }, radius: 110 };
  for (let i = 0; i < (QUALITY.tier === 'low' ? 3 : 6); i++) {
    const boat = createBoat(scene, regatta.centre.x, regatta.centre.z, rand(0.75, 0.95), { kind: 'sail' });
    boat.course = { ...regatta, angle: (i / 6) * TAU * 0.5, speed: rand(5.5, 7), wobble: rand(-8, 8) };
    boat.drift = 0;
    boat.heel = rand(0.16, 0.24);
    boats.push(boat);
  }

  const dolphins = createDolphins(scene, QUALITY.tier === 'low' ? 3 : 5);

  const birds = createBirds(scene);
  const aiPlanes = createAIPlanes(scene);
  const whales = createWhales(scene);

  // Everything that planted a tree has done so by now.
  const forest = buildForest(scene);

  const landmarks = {
    village: PLACES.villageCentre,
    harbour: PLACES.harbour,
    lighthouse: PLACES.lighthouse,
    cove: PLACES.coveBeach,
    arch: archPosition(),
    summit: PLACES.summit,
    beachCamp: cove.camp.spot,
    canyon: PLACES.canyonMouth,
    canyonEnd: PLACES.canyonEnd,
    falls: falls.position,
    lagoon: PLACES.lagoon,
    campanile: PLACES.church,
    lido: PLACES.villageBeach,
    chapel: PLACES.chapel,
    fortress: PLACES.fortress,
    stacks: PLACES.stacks,
    wreck: PLACES.wreck,
    pines: island('pines').centre,
    grotto: PLACES.grottoMouth,
  };

  const _planePos = new Vector3();

  function update(t, dt, flight, wind, { beamOpacity = 0.15, onBirdScatter, onDolphins } = {}) {
    _planePos.copy(flight.pos);
    terrainUniforms.time.value = t;
    foliageUniforms.time.value = t;
    foliageUniforms.gust.value = wind.gust;
    lakeUniforms.time.value = t;

    for (const cloud of clouds) {
      cloud.group.position.x += cloud.drift * dt * (1 + wind.gust * 0.8);
      cloud.group.position.y += Math.sin(t * 0.12 + cloud.bob) * dt * 0.6;
      if (cloud.group.position.x > 1700) cloud.group.position.x = -1700;
    }

    for (const boat of boats) {
      const { group } = boat;
      if (boat.lake != null) {
        // A lake is still: the boat just breathes on it.
        group.position.y = boat.lake + 0.9 + Math.sin(t * 0.8 + boat.phase) * 0.05;
        continue;
      }
      // Boats ride the same waves the aeroplane skims.
      const here = waveHeight(group.position.x, group.position.z, t);
      const ahead = waveHeight(group.position.x, group.position.z + 6, t);
      const side = waveHeight(group.position.x + 6, group.position.z, t);
      group.position.y = here + (boat.ride ?? 1.05);
      group.rotation.x = damp(group.rotation.x, (ahead - here) * 0.08, 3, dt);
      group.rotation.z = damp(group.rotation.z, -(side - here) * 0.08 + (boat.heel ?? 0), 3, dt);

      if (boat.course) {
        // Round and round the marks, leaning into the breeze.
        const c = boat.course;
        c.angle += (c.speed / c.radius) * dt;
        const r = c.radius + c.wobble + Math.sin(c.angle * 3) * 12;
        group.position.x = c.centre.x + Math.cos(c.angle) * r;
        group.position.z = c.centre.z + Math.sin(c.angle) * r;
        const heading = Math.atan2(-Math.sin(c.angle), Math.cos(c.angle));
        group.rotation.y += angleDelta(group.rotation.y, heading) * Math.min(1, dt * 2);
      } else if (boat.drift > 0) {
        // Look ahead, and put the wheel over gently — a boat turns over
        // several seconds, not in a frame.
        const lookAhead = 26;
        const bowX = group.position.x + Math.sin(boat.heading) * lookAhead;
        const bowZ = group.position.z + Math.cos(boat.heading) * lookAhead;
        if (terrainHeightAt(bowX, bowZ) > -5) {
          if (boat.turnTimer <= 0) {
            // Commit to one direction for the whole manoeuvre.
            boat.turn = Math.sin(boat.heading * 3.1 + group.position.x * 0.01) > 0 ? 1 : -1;
            boat.turnTimer = 4;
          }
        } else if (boat.turnTimer <= 0) {
          boat.turn = 0;
        }
        boat.turnTimer = Math.max(0, boat.turnTimer - dt);
        boat.heading += boat.turn * 0.5 * dt;

        const step = boat.drift * dt;
        const nx = group.position.x + Math.sin(boat.heading) * step;
        const nz = group.position.z + Math.cos(boat.heading) * step;
        if (terrainHeightAt(nx, nz) < -3) {
          group.position.x = nx;
          group.position.z = nz;
        }
        // Damp along the shortest way round, so the hull never unwinds a turn.
        group.rotation.y += angleDelta(group.rotation.y, boat.heading) * Math.min(1, dt * 1.6);
      }
    }

    updateBirds(t, dt, _planePos, onBirdScatter);
    updateVillagers(village.villagers, t, dt, _planePos);
    updateAIPlanes(aiPlanes, t, dt);
    updateCloth(t, wind.gust);
    whales.update(t, dt);
    if (dolphins.update(t, dt, flight)) onDolphins?.();
    falls.update(t);
    lighthouse.update(t, beamOpacity);
  }

  return {
    islands,
    island: islands.byKey.harbour,
    village,
    lighthouse,
    cove,
    falls,
    whales,
    dolphins,
    places,
    clouds,
    boats,
    birds,
    aiPlanes,
    landmarks,
    specs: ISLANDS,
    update,
  };
}
