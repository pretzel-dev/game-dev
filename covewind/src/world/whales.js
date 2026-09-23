/**
 * Whales in the channels between the islands.
 *
 * They swim a slow circuit, come up to blow, arch and go down again. Nothing
 * about them reacts to you — they are here so the open water between landfalls
 * is somewhere to look rather than something to cross.
 */
import { CapsuleGeometry, ConeGeometry, Group, Mesh, SphereGeometry } from 'three';
import { terrainHeightAt } from './terrain.js';
import { mat } from '../core/materials.js';
import { bakeLocal } from '../core/merge.js';
import { QUALITY } from '../core/quality.js';
import { damp, rand, TAU } from '../core/utils.js';

const SKIN = mat(0x3f5d6b);
const BELLY = mat(0xcfd9cf);

/** Where the pods live: open water, well clear of every shore. */
const POSTS = [
  { x: 330, z: -330, radius: 120 },
  { x: -340, z: 300, radius: 140 },
  { x: 720, z: 60, radius: 110 },
  { x: -160, z: -640, radius: 130 },
];

function buildWhale(scale) {
  const whale = new Group();

  const body = new Mesh(new CapsuleGeometry(4.6, 12, 5, 10), SKIN);
  body.rotation.x = Math.PI / 2;
  body.scale.set(1, 1, 0.72);
  body.castShadow = true;
  whale.add(body);

  const belly = new Mesh(new CapsuleGeometry(3.6, 11, 4, 10), BELLY);
  belly.rotation.x = Math.PI / 2;
  belly.scale.set(1, 0.5, 0.7);
  belly.position.y = -2.4;
  whale.add(belly);

  const head = new Mesh(new SphereGeometry(4.4, 10, 8), SKIN);
  head.scale.set(0.9, 0.72, 1.25);
  head.position.z = 8.5;
  whale.add(head);

  // Tail stock and flukes.
  const stock = new Group();
  stock.position.z = -9.5;
  whale.add(stock);
  const taper = new Mesh(new ConeGeometry(3, 9, 7), SKIN);
  taper.rotation.x = -Math.PI / 2;
  taper.scale.set(1, 1, 0.55);
  taper.position.z = -3.5;
  stock.add(taper);
  for (const side of [-1, 1]) {
    const fluke = new Mesh(new ConeGeometry(3.4, 8, 4), SKIN);
    fluke.rotation.set(Math.PI / 2, 0, side * 0.5);
    fluke.scale.set(1, 1, 0.28);
    fluke.position.set(side * 4, 0, -8);
    stock.add(fluke);
  }

  for (const side of [-1, 1]) {
    const fin = new Mesh(new ConeGeometry(1.9, 7.5, 4), SKIN);
    fin.rotation.set(Math.PI / 2.1, 0, side * 1.25);
    fin.scale.set(1, 1, 0.3);
    fin.position.set(side * 4.6, -1.2, 2);
    whale.add(fin);
  }

  const dorsal = new Mesh(new ConeGeometry(1.5, 3.4, 4), SKIN);
  dorsal.scale.set(1, 1, 0.4);
  dorsal.position.set(0, 3.6, -3);
  dorsal.rotation.x = -0.4;
  whale.add(dorsal);

  whale.scale.setScalar(scale);
  // The tail swings, so it is baked on its own.
  stock.userData.dynamic = true;
  bakeLocal(whale);
  bakeLocal(stock);
  return { whale, stock };
}

/** A puff of breath, as a few soft blobs that rise and fade. */
function buildSpout() {
  const group = new Group();
  const material = mat(0xf6feff, { flat: false, roughness: 1 });
  material.transparent = true;
  material.opacity = 0;
  const blobs = [];
  for (let i = 0; i < 4; i++) {
    const blob = new Mesh(new SphereGeometry(1.5 + i * 0.5, 7, 6), material);
    blob.position.set(rand(-0.8, 0.8), 2 + i * 2.6, rand(-0.8, 0.8));
    group.add(blob);
    blobs.push(blob);
  }
  group.position.set(0, 3.4, 6);
  group.visible = false;
  return { group, material, blobs };
}

export function createWhales(scene) {
  const pods = [];
  const wanted = QUALITY.tier === 'low' ? 2 : QUALITY.tier === 'medium' ? 3 : 4;

  for (let p = 0; p < wanted; p++) {
    const post = POSTS[p % POSTS.length];
    const members = p === 0 ? 3 : 2;
    for (let i = 0; i < members; i++) {
      const scale = rand(0.8, 1.45) * (i === 0 ? 1.15 : 1);
      const { whale, stock } = buildWhale(scale);
      scene.add(whale);
      const spout = buildSpout();
      whale.add(spout.group);

      pods.push({
        group: whale,
        stock,
        spout,
        centre: post,
        radius: post.radius * rand(0.55, 1),
        phase: rand(0, TAU),
        speed: rand(0.028, 0.05),
        // Each whale keeps its own rhythm of dives and breaths.
        cycle: rand(16, 26),
        offset: rand(0, 20),
        scale,
      });
    }
  }

  function update(t, dt) {
    for (const whale of pods) {
      const a = whale.phase + t * whale.speed;
      const x = whale.centre.x + Math.cos(a) * whale.radius;
      const z = whale.centre.z + Math.sin(a) * whale.radius;

      // One long breath cycle: up, blow, arch, down, stay down.
      const cycle = ((t + whale.offset) % whale.cycle) / whale.cycle;
      let depth;
      let pitch = 0;
      if (cycle < 0.12) {
        // Rising.
        const u = cycle / 0.12;
        depth = -14 + u * 15;
        pitch = -0.35 * (1 - u);
      } else if (cycle < 0.32) {
        // On the surface, blowing.
        depth = 1;
      } else if (cycle < 0.46) {
        // The arch and the flukes.
        const u = (cycle - 0.32) / 0.14;
        depth = 1 - u * 10;
        pitch = u * 0.85;
      } else {
        depth = -14;
        pitch = 0.1;
      }

      // Never surface where there is no water to surface in.
      const ground = terrainHeightAt(x, z);
      const room = ground < -12;
      whale.group.visible = room;
      whale.group.position.set(x, depth * (room ? 1 : 0) - (room ? 0 : 40), z);
      whale.group.rotation.y = -a + Math.PI / 2;
      whale.group.rotation.x = damp(whale.group.rotation.x, pitch, 2.5, dt);
      whale.group.rotation.z = Math.sin(t * 0.6 + whale.phase) * 0.06;

      // The tail works all the time, harder when they are going down.
      whale.stock.rotation.x = Math.sin(t * 1.1 + whale.phase) * (0.14 + Math.max(0, pitch) * 0.25);

      // The blow: a couple of seconds of spray just after surfacing.
      const blowing = cycle > 0.13 && cycle < 0.24 && room;
      whale.spout.group.visible = blowing;
      if (blowing) {
        const u = (cycle - 0.13) / 0.11;
        whale.spout.material.opacity = Math.sin(u * Math.PI) * 0.75;
        whale.spout.blobs.forEach((blob, i) => {
          blob.scale.setScalar(0.6 + u * (1.1 + i * 0.35));
        });
      }
    }
  }

  return { pods, update };
}
