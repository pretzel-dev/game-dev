/**
 * Dolphins. Fly low and steady over open water for a few seconds and a pod
 * comes to race you, leaping alongside in long arcs. Climb away, cross onto
 * land or slow right down and they peel off and dive.
 *
 * The one creature on the archipelago that plays with you, and the only
 * reward for skimming the waves is their company.
 */
import { Group, LatheGeometry, Mesh, SphereGeometry, ConeGeometry, Vector2, Vector3 } from 'three';
import { mat } from '../core/materials.js';
import { bakeLocal } from '../core/merge.js';
import { clamp, damp, rand, TAU } from '../core/utils.js';
import { coastDistance } from './terrain.js';
import { waveHeight } from './water.js';

const BACK = mat(0x6f8fa6);
const BELLY = mat(0xe9eef0);

function buildDolphin() {
  const group = new Group();
  const profile = [
    [0.01, -2.6],
    [0.25, -2.2],
    [0.55, -1.2],
    [0.72, 0.1],
    [0.66, 1.0],
    [0.42, 1.7],
    [0.2, 2.1],
    [0.08, 2.6],
  ].map(([r, z]) => new Vector2(r, z));
  const bodyGeometry = new LatheGeometry(profile, 12);
  bodyGeometry.rotateX(Math.PI / 2);
  const body = new Mesh(bodyGeometry, BACK);
  body.scale.set(1, 0.9, 1);
  group.add(body);
  const belly = new Mesh(bodyGeometry, BELLY);
  belly.scale.set(0.9, 0.7, 0.96);
  belly.position.y = -0.18;
  group.add(belly);
  const fin = new Mesh(new ConeGeometry(0.35, 0.9, 4), BACK);
  fin.scale.set(0.35, 1, 1);
  fin.rotation.x = -0.6;
  fin.position.set(0, 0.75, -0.1);
  group.add(fin);
  for (const side of [-1, 1]) {
    const fluke = new Mesh(new SphereGeometry(0.5, 8, 4), BACK);
    fluke.scale.set(1, 0.12, 0.45);
    fluke.position.set(side * 0.45, 0, -2.55);
    fluke.rotation.y = side * 0.5;
    group.add(fluke);
    const flipper = new Mesh(new SphereGeometry(0.4, 8, 4), BACK);
    flipper.scale.set(1, 0.12, 0.5);
    flipper.position.set(side * 0.62, -0.3, 0.6);
    flipper.rotation.set(0, side * 0.6, side * 0.5);
    group.add(flipper);
  }
  group.traverse((o) => {
    if (o.isMesh) o.castShadow = true;
  });
  bakeLocal(group);
  return group;
}

const _fwd = new Vector3();
const _side = new Vector3();

export function createDolphins(scene, count = 5) {
  const pod = [];
  for (let i = 0; i < count; i++) {
    const group = buildDolphin();
    group.visible = false;
    group.scale.setScalar(rand(1.1, 1.5));
    scene.add(group);
    pod.push({
      group,
      // Where it rides relative to the aeroplane: off to one side and a
      // little behind, each at its own distance.
      side: (i % 2 ? 1 : -1) * rand(9, 20),
      back: rand(-4, 16),
      period: rand(1.5, 2.1),
      phase: rand(0, TAU),
      height: rand(3.5, 6.5),
      pos: new Vector3(),
      lag: rand(0.6, 1),
    });
  }

  let invited = 0; // seconds of good skimming
  let present = 0; // 0..1: how much of the pod is with you
  let joined = false;

  return {
    pod,
    /** Returns true on the frame the pod first arrives. */
    update(t, dt, flight) {
      const openSea = flight.overWater && !flight.onLake && !flight.underRoof && coastDistance(flight.pos.x, flight.pos.z) > 35;
      const skimming = openSea && !flight.waterborne && flight.groundClearance < 18 && flight.speed > 24;
      invited = skimming ? invited + dt : Math.max(0, invited - dt * 2);
      const want = invited > 2.5 ? 1 : 0;
      present = damp(present, want, want ? 0.8 : 1.4, dt);

      let arrived = false;
      if (want && !joined && present > 0.5) {
        joined = true;
        arrived = true;
      }
      if (!want && present < 0.05) joined = false;

      _fwd.set(Math.sin(flight.heading), 0, Math.cos(flight.heading));
      _side.set(-_fwd.z, 0, _fwd.x);
      for (const d of pod) {
        const g = d.group;
        g.visible = present > 0.02;
        if (!g.visible) {
          d.pos.copy(flight.pos).addScaledVector(_fwd, -40).addScaledVector(_side, d.side);
          continue;
        }
        // Chase a spot beside the aeroplane; when leaving, fall behind.
        const tx = flight.pos.x - _fwd.x * (d.back + (1 - present) * 60) + _side.x * d.side;
        const tz = flight.pos.z - _fwd.z * (d.back + (1 - present) * 60) + _side.z * d.side;
        d.pos.x = damp(d.pos.x, tx, 2.2 * d.lag, dt);
        d.pos.z = damp(d.pos.z, tz, 2.2 * d.lag, dt);

        // Leap: out of the water in an arc, then a long glide below.
        const cycle = ((t / d.period + d.phase) % 1 + 1) % 1;
        const air = clamp(cycle / 0.45, 0, 1);
        const arc = cycle < 0.45 ? Math.sin(air * Math.PI) : -Math.sin(((cycle - 0.45) / 0.55) * Math.PI) * 0.5;
        const surface = waveHeight(d.pos.x, d.pos.z, t);
        const y = surface - 1.4 + arc * d.height * present;
        g.position.set(d.pos.x, y, d.pos.z);
        // Nose follows the arc: up on the way out, down on the way in.
        const slope = cycle < 0.45 ? Math.cos(air * Math.PI) : -Math.cos(((cycle - 0.45) / 0.55) * Math.PI) * 0.5;
        g.rotation.set(-slope * 0.9, flight.heading, 0, 'YXZ');
      }
      return arrived;
    },
  };
}
