/**
 * Things to knock flying: traffic cones, oil drums and crates in the yard,
 * and tumbleweeds rolling about on the breeze. Each is a little sphere with
 * a spin; the car punts them, they bounce on the ground, and some time after
 * they settle they are quietly put back.
 */
import {
  BoxGeometry,
  ConeGeometry,
  CylinderGeometry,
  IcosahedronGeometry,
  InstancedMesh,
  Matrix4,
  Quaternion,
  Vector3,
} from 'three';
import { heightAt, normalAt, RIM_START } from '../world/terrain.js';
import { part, merge, toonFlat } from './props.js';

const TYPES = {
  cone: { r: 0.4, h: 0.38, mass: 0.2, geo: () => merge([
    part(new ConeGeometry(0.32, 0.8, 8), 0xff6a1a, { at: [0, 0.4, 0] }),
    part(new CylinderGeometry(0.2, 0.25, 0.14, 8), 0xf6f3ee, { at: [0, 0.42, 0] }),
    part(new BoxGeometry(0.7, 0.06, 0.7), 0xe0541a, { at: [0, 0.03, 0] }),
  ]) },
  barrel: { r: 0.5, h: 0.45, mass: 0.6, geo: () => merge([
    part(new CylinderGeometry(0.42, 0.42, 0.95, 10), 0x2d6fb8, { at: [0, 0.475, 0] }),
    part(new CylinderGeometry(0.43, 0.43, 0.06, 10), 0xe9e4da, { at: [0, 0.3, 0] }),
    part(new CylinderGeometry(0.43, 0.43, 0.06, 10), 0xe9e4da, { at: [0, 0.65, 0] }),
  ]) },
  crate: { r: 0.55, h: 0.5, mass: 0.5, geo: () => merge([
    part(new BoxGeometry(1, 1, 1), 0xc68b4e, { at: [0, 0.5, 0] }),
    part(new BoxGeometry(1.02, 0.12, 1.02), 0x8c5e33, { at: [0, 0.15, 0] }),
    part(new BoxGeometry(1.02, 0.12, 1.02), 0x8c5e33, { at: [0, 0.85, 0] }),
  ]) },
  weed: { r: 0.7, h: 0.6, mass: 0.05, geo: () => merge([
    part(new IcosahedronGeometry(0.62, 1), 0xa7895a, { at: [0, 0.62, 0] }),
    part(new IcosahedronGeometry(0.5, 0), 0x8a6e45, { at: [0.1, 0.65, -0.05], rot: [0.5, 0.3, 0] }),
  ]) },
};

export function createLoose(scene, layout, rand = Math.random) {
  const items = [];
  for (const l of layout.loose) {
    const y = heightAt(l.x, l.z) + (l.stack || 0) * 1.0;
    items.push(makeItem(l.type, l.x, y, l.z));
  }
  // Tumbleweeds, scattered across the open desert.
  for (let i = 0; i < 26; i++) {
    const a = rand() * Math.PI * 2;
    const d = 200 + rand() * (RIM_START - 260);
    const x = Math.cos(a) * d;
    const z = Math.sin(a) * d;
    items.push(makeItem('weed', x, heightAt(x, z), z));
  }

  function makeItem(type, x, y, z) {
    return {
      type,
      def: TYPES[type],
      home: new Vector3(x, y, z),
      pos: new Vector3(x, y, z),
      vel: new Vector3(),
      quat: new Quaternion(),
      spin: new Vector3(),
      rest: 0,
      moved: false,
      stacked: y > heightAt(x, z) + 0.2,
    };
  }

  const meshes = {};
  for (const type of Object.keys(TYPES)) {
    const list = items.filter((it) => it.type === type);
    if (!list.length) continue;
    const mesh = new InstancedMesh(TYPES[type].geo(), toonFlat, list.length);
    mesh.castShadow = true;
    mesh.frustumCulled = false;
    scene.add(mesh);
    meshes[type] = { mesh, list };
  }

  const m = new Matrix4();
  const one = new Vector3(1, 1, 1);
  const n = { x: 0, y: 1, z: 0 };
  const dq = new Quaternion();
  const tmp = new Vector3();
  const off = new Vector3();
  const wind = new Vector3(2.2, 0, 1.1);

  return {
    /** Returns how many things the car hit this frame. */
    update(dt, car, t) {
      let hits = 0;
      for (const it of items) {
        const r = it.def.r;
        // The car, as a sphere round its middle.
        off.copy(it.pos).sub(car.pos);
        off.y += it.def.h - 0.2;
        const d = off.length();
        if (d < 1.9 + r && car.speed > 1.5) {
          const rel = tmp.copy(car.vel).sub(it.vel);
          const push = rel.dot(off) / (d || 1);
          if (push > 0) {
            off.normalize();
            const k = 1 + 0.6 / it.def.mass * 0.2;
            it.vel.addScaledVector(off, push * k).addScaledVector(car.vel, 0.35);
            it.vel.y += 2 + push * 0.35;
            it.spin.set((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 14);
            it.moved = true;
            it.stacked = false;
            it.rest = 0;
            hits++;
            // Knock one crate and the stack comes down.
            for (const other of items) {
              if (other.stacked && Math.hypot(other.home.x - it.home.x, other.home.z - it.home.z) < 1.6) {
                other.stacked = false;
                other.moved = true;
                other.vel.copy(it.vel).multiplyScalar(0.5);
                other.spin.set(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2);
              }
            }
          }
        }
        // Tumbleweeds drift with the wind and bounce along.
        if (it.type === 'weed') {
          const g = heightAt(it.pos.x, it.pos.z);
          if (it.pos.y - g < 0.1) {
            it.vel.x += (wind.x - it.vel.x) * dt * 0.6;
            it.vel.z += (wind.z - it.vel.z) * dt * 0.6;
            if (Math.random() < dt * 0.8) it.vel.y += 1.5 + Math.random() * 2;
          }
          it.spin.set(it.vel.z / r, 0, -it.vel.x / r);
          if (Math.hypot(it.pos.x, it.pos.z) > RIM_START + 30) it.pos.copy(it.home);
        }
        if (it.stacked) continue;
        // Fall, bounce, roll to a stop.
        it.vel.y -= 12 * dt;
        it.pos.addScaledVector(it.vel, dt);
        const g = heightAt(it.pos.x, it.pos.z);
        if (it.pos.y < g) {
          normalAt(it.pos.x, it.pos.z, n);
          it.pos.y = g;
          const vn = it.vel.x * n.x + it.vel.y * n.y + it.vel.z * n.z;
          if (vn < 0) {
            it.vel.x -= n.x * vn * 1.4;
            it.vel.y -= n.y * vn * 1.4;
            it.vel.z -= n.z * vn * 1.4;
          }
          const f = it.type === 'weed' ? 0.4 : 3.5;
          it.vel.x *= 1 - Math.min(1, f * dt);
          it.vel.z *= 1 - Math.min(1, f * dt);
          if (it.type !== 'weed') it.spin.multiplyScalar(1 - Math.min(1, 4 * dt));
        }
        const w = it.spin.length();
        if (w > 1e-3) {
          dq.setFromAxisAngle(tmp.copy(it.spin).normalize(), w * dt);
          it.quat.premultiply(dq);
        }
        // Settled things stand back up slowly; after a while, home again.
        if (it.type !== 'weed' && it.moved) {
          if (it.vel.lengthSq() < 0.05) {
            it.rest += dt;
            if (it.rest > 2) it.quat.slerp(dq.identity(), Math.min(1, dt * 2));
          }
          if (it.rest > 25 && car.pos.distanceTo(it.home) > 70) {
            it.pos.copy(it.home);
            it.vel.set(0, 0, 0);
            it.quat.identity();
            it.moved = false;
            it.rest = 0;
          }
        }
      }
      for (const { mesh, list } of Object.values(meshes)) {
        list.forEach((it, i) => {
          m.compose(it.pos, it.quat, one);
          mesh.setMatrixAt(i, m);
        });
        mesh.instanceMatrix.needsUpdate = true;
      }
      return hits;
    },
  };
}
