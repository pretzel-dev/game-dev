/**
 * Your fish friend: a round little yellow fish with blue stripes and big
 * eyes, who swims along beside you, does a happy spin when you emote, and
 * jumps for joy when you find treasure. Purely for company: it doesn't
 * bump into anything, it just keeps up.
 */
import { Group, Mesh, MeshPhongMaterial } from 'three';
import { Builder, SHAPES } from './builder.js';
import { angleDelta, damp } from '../core/utils.js';

export function createFriend(scene) {
  const g = new Group();
  const b = new Builder();
  b.add(SHAPES.sphere(14, 10), 0, 0, 0, 0.42, 0.46, 0.55, 0xffd23a);
  for (const z of [-0.05, 0.12]) b.add(SHAPES.sphere(12, 6), 0, 0, z, 0.44, 0.48, 0.07, 0x3a8aff);
  b.add(SHAPES.cone(6), 0, 0.27, 0.05, 0.05, 0.22, 0.26, 0xffd23a);
  for (const sx of [-1, 1]) {
    b.ball(sx * 0.13, 0.07, -0.19, 0.075, 0xffffff, 10, 8);
    b.ball(sx * 0.15, 0.07, -0.24, 0.042, 0x1a1a2a, 8, 6);
    b.ball(sx * 0.16, 0.09, -0.27, 0.014, 0xffffff, 6, 4);
    b.add(SHAPES.sphere(8, 5), sx * 0.22, -0.05, 0, 0.18, 0.04, 0.12, 0x3a8aff, sx * 0.5);
  }
  b.add(SHAPES.box(), 0, -0.07, -0.27, 0.08, 0.02, 0.02, 0xd84a3a);
  const body = new Mesh(b.geometry(), new MeshPhongMaterial({ vertexColors: true, shininess: 70 }));
  body.castShadow = true;
  g.add(body);
  const tail = new Group();
  tail.position.z = 0.26;
  const tb = new Builder();
  tb.add(SHAPES.cone(6), 0, 0, 0.14, 0.05, 0.3, 0.38, 0x3a8aff, 0, Math.PI / 2);
  tail.add(new Mesh(tb.geometry(), body.material));
  g.add(tail);
  scene.add(g);

  const state = { x: 0, y: 0, z: 0, yaw: 0, spin: 0, hop: 0, ready: false };
  return {
    /** A happy spin (emotes) or a jump (treasure). */
    cheer(big = false) {
      state.spin = 1;
      if (big) state.hop = 1;
    },
    update(m, dt, t) {
      // Beside her right shoulder, a little behind, bobbing.
      const side = m.mode === 'ride' || m.mode === 'leap' ? 1.6 : 1.1;
      const rx = Math.cos(m.yaw);
      const rz = Math.sin(m.yaw);
      const fx = Math.sin(m.yaw);
      const fz = -Math.cos(m.yaw);
      const tx = m.x + rx * side - fx * 0.6;
      const tz = m.z + rz * side - fz * 0.6;
      const ty = Math.min(-0.25, m.y + 0.4 + Math.sin(t * 2.2) * 0.15);
      if (!state.ready) Object.assign(state, { x: tx, y: ty, z: tz, ready: true });
      const px = state.x;
      const pz = state.z;
      state.x = damp(state.x, tx, 3, dt);
      state.y = damp(state.y, ty, 3, dt);
      state.z = damp(state.z, tz, 3, dt);
      const moved = Math.hypot(state.x - px, state.z - pz);
      const want = moved > 0.01 ? Math.atan2(state.x - px, -(state.z - pz)) : m.yaw;
      state.yaw += angleDelta(state.yaw, want) * Math.min(1, dt * 5);
      state.spin = Math.max(0, state.spin - dt * 0.9);
      state.hop = Math.max(0, state.hop - dt * 1.2);
      g.position.set(state.x, state.y + Math.sin(state.hop * Math.PI) * 0.8, state.z);
      g.rotation.set(0, -state.yaw + (1 - state.spin) * Math.PI * 4 * (state.spin > 0 ? 1 : 0), Math.sin(t * 3) * 0.1);
      tail.rotation.y = Math.sin(t * (6 + moved * 60)) * 0.5;
    },
  };
}
