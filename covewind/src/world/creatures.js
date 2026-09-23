/**
 * Gulls and villagers — the island's ambient life.
 *
 * The gulls are the only thing in Covewind that reacts to the player: fly
 * close and the flock breaks, wheels away and then settles back onto its
 * circuit. Villagers stop and look up when you come over low.
 */
import {
  BufferGeometry,
  CapsuleGeometry,
  Float32BufferAttribute,
  Group,
  Mesh,
  Vector3,
} from 'three';
import { MAT } from '../core/materials.js';
import { QUALITY } from '../core/quality.js';
import { angleDelta, damp, rand, TAU } from '../core/utils.js';
import { ISLANDS, PLACES, surfaceHeightAt, terrainHeightAt, islandRadiusAt } from './terrain.js';

const birds = [];

function wingGeometry() {
  const geometry = new BufferGeometry();
  geometry.setAttribute(
    'position',
    new Float32BufferAttribute([0, 0, 0, -3.1, 0.12, -0.75, -0.65, 0.18, 0.72], 3)
  );
  geometry.setIndex([0, 1, 2]);
  geometry.computeVertexNormals();
  return geometry;
}

function createBird(scene, x, y, z, scale = 1) {
  const group = new Group();
  group.position.set(x, y, z);
  group.scale.setScalar(scale);
  scene.add(group);

  const body = new Mesh(new CapsuleGeometry(0.3, 1.35, 3, 6), MAT.white);
  body.rotation.x = Math.PI / 2;
  group.add(body);

  const geometry = wingGeometry();
  const left = new Mesh(geometry, MAT.white);
  const right = new Mesh(geometry, MAT.white);
  right.scale.x = -1;
  group.add(left, right);

  const bird = {
    group,
    left,
    right,
    pos: new Vector3(x, y, z),
    prev: new Vector3(x, y, z),
    vel: new Vector3(),
    centre: new Vector3(x, 0, z),
    radius: rand(24, 78),
    baseY: y,
    phase: rand(0, TAU),
    speed: rand(0.3, 0.62),
    flap: rand(0, TAU),
    startle: 0,
    startleRadius: rand(34, 58),
  };
  birds.push(bird);
  return bird;
}

export function createBirds(scene) {
  const count = QUALITY.birds;
  for (let i = 0; i < count; i++) {
    // Most gulls hang around the harbour and the cove; the rest patrol the
    // coast of whichever island they belong to.
    const roll = i / count;
    let x;
    let z;
    if (roll < 0.26) {
      x = PLACES.harbour.x + rand(-90, 90);
      z = PLACES.harbour.z + rand(-40, 110);
    } else if (roll < 0.42) {
      x = PLACES.coveBeach.x + rand(-70, 90);
      z = PLACES.coveBeach.z + rand(-90, 50);
    } else {
      const spec = ISLANDS[i % ISLANDS.length];
      const a = rand(0, TAU);
      const r = islandRadiusAt(spec, a) + rand(-40, 70);
      x = spec.centre.x + Math.cos(a) * r;
      z = spec.centre.z + Math.sin(a) * r;
    }
    createBird(scene, x, rand(28, 105), z, rand(0.75, 1.3));
  }
  return birds;
}

const _away = new Vector3();
const _target = new Vector3();

export function updateBirds(t, dt, planePos, onScatter) {
  for (const bird of birds) {
    const distance = bird.pos.distanceTo(planePos);

    if (distance < bird.startleRadius && bird.startle <= 0) {
      bird.startle = rand(2.6, 4.8);
      _away.copy(bird.pos).sub(planePos);
      _away.y = Math.abs(_away.y) * 0.35 + 4;
      _away.normalize();
      bird.vel.addScaledVector(_away, rand(16, 26));
      bird.vel.y += rand(4, 11);
      if (onScatter) onScatter(bird, distance);
    }

    bird.prev.copy(bird.pos);

    if (bird.startle > 0) {
      bird.startle -= dt;
      bird.vel.y -= 3.2 * dt; // they glide back down as they calm
      bird.pos.addScaledVector(bird.vel, dt);
      bird.vel.multiplyScalar(Math.exp(-1.15 * dt));
    } else {
      const a = bird.phase + t * bird.speed;
      _target.set(
        bird.centre.x + Math.cos(a) * bird.radius,
        bird.baseY + Math.sin(t * 1.7 + bird.phase) * 4,
        bird.centre.z + Math.sin(a) * bird.radius
      );
      bird.pos.lerp(_target, 1 - Math.exp(-1.5 * dt));
      bird.vel.multiplyScalar(Math.exp(-3 * dt));
    }

    // Never let a startled gull fly into the hill or the sea.
    const floor = Math.max(surfaceHeightAt(bird.pos.x, bird.pos.z) + 7, 6);
    if (bird.pos.y < floor) {
      bird.pos.y = floor;
      bird.vel.y = Math.max(bird.vel.y, 2);
    }

    bird.group.position.copy(bird.pos);

    const dx = bird.pos.x - bird.prev.x;
    const dz = bird.pos.z - bird.prev.z;
    if (dx * dx + dz * dz > 1e-6) {
      const heading = Math.atan2(dx, dz);
      bird.group.rotation.y = damp(
        bird.group.rotation.y,
        bird.group.rotation.y + angleDelta(bird.group.rotation.y, heading),
        9,
        dt
      );
    }

    const urgency = bird.startle > 0 ? 2.1 : 1;
    bird.flap += dt * (6.5 + urgency * 5);
    const flap = Math.sin(bird.flap) * (0.55 + urgency * 0.22);
    bird.left.rotation.z = flap;
    bird.right.rotation.z = -flap;
    bird.group.rotation.z = damp(bird.group.rotation.z, flap * 0.12, 6, dt);
  }
}

/* ------------------------------------------------------------ villagers --- */

export function updateVillagers(villagers, t, dt, planePos) {
  const lowPass = planePos.y < 70;
  for (const v of villagers) {
    const dx = planePos.x - v.group.position.x;
    const dz = planePos.z - v.group.position.z;
    const near = lowPass && dx * dx + dz * dz < 110 * 110;

    if (near) {
      // Stop, turn, and watch the aeroplane go over.
      const want = Math.atan2(dx, dz);
      v.group.rotation.y += angleDelta(v.group.rotation.y, want) * Math.min(1, dt * 3);
      v.group.rotation.x = damp(v.group.rotation.x, -0.16, 3, dt);
      continue;
    }

    v.group.rotation.x = damp(v.group.rotation.x, 0, 3, dt);
    v.phase += dt;
    if (v.phase > 6) {
      v.phase = rand(0, 2);
      v.heading += rand(-1.6, 1.6);
      // Gently herd them back towards where they started.
      const back = Math.atan2(v.home.x - v.group.position.x, v.home.z - v.group.position.z);
      const away = Math.hypot(v.home.x - v.group.position.x, v.home.z - v.group.position.z);
      if (away > 45) v.heading = back;
    }

    const step = v.speed * dt;
    const nx = v.group.position.x + Math.sin(v.heading) * step;
    const nz = v.group.position.z + Math.cos(v.heading) * step;
    if (terrainHeightAt(nx, nz) > 2.5) {
      v.group.position.x = nx;
      v.group.position.z = nz;
    } else {
      v.heading += 2.2; // turned back by the water
    }
    v.group.position.y = terrainHeightAt(v.group.position.x, v.group.position.z);
    v.group.rotation.y = v.heading;
    // A tiny bob so they read as walking.
    v.group.position.y += Math.abs(Math.sin(t * 6 + v.phase)) * 0.12;
  }
}
