/**
 * Draws the townsfolk: little round people made of a few parts each (legs,
 * body, head, hair or a hat, arms), all instanced, so a hundred of them
 * cost a handful of draw calls. The pose numbers come from world/people.js.
 *
 * Also the kitten who gets stuck up trees.
 */
import { BoxGeometry, Color, CylinderGeometry, Group, InstancedMesh, Matrix4, Mesh, MeshLambertMaterial, Object3D, SphereGeometry } from 'three';
import { Builder, SHAPES } from './builder.js';
import { groundY } from '../world/city.js';

function part(geo, count, scene) {
  const m = new InstancedMesh(geo, new MeshLambertMaterial(), count);
  m.frustumCulled = false;
  m.castShadow = true;
  scene.add(m);
  return m;
}

/** Hang a limb from its top: move the geometry down so y = 0 is the joint. */
function limb(w, h, d) {
  const g = new BoxGeometry(w, h, d);
  g.translate(0, -h / 2, 0);
  return g;
}

export function createPeopleView(scene, people) {
  const list = people.list;
  const n = list.length;
  const legs = part(limb(0.17, 0.72, 0.19), n * 2, scene);
  const body = part(new CylinderGeometry(0.22, 0.27, 0.66, 8), n, scene);
  const head = part(new SphereGeometry(0.23, 10, 7), n, scene);
  const hair = part(new SphereGeometry(0.245, 10, 4, 0, Math.PI * 2, 0, Math.PI * 0.55), n, scene);
  const arms = part(limb(0.12, 0.58, 0.14), n * 2, scene);

  const c = new Color();
  list.forEach((p, k) => {
    body.setColorAt(k, c.set(p.shirt));
    head.setColorAt(k, c.set(p.skin));
    hair.setColorAt(k, c.set(p.hat ?? p.hair));
    legs.setColorAt(k * 2, c.set(p.legs));
    legs.setColorAt(k * 2 + 1, c.set(p.legs));
    arms.setColorAt(k * 2, c.set(p.shirt));
    arms.setColorAt(k * 2 + 1, c.set(p.shirt));
  });
  for (const m of [legs, body, head, hair, arms]) m.instanceColor.needsUpdate = true;

  const base = new Matrix4();
  const out = new Matrix4();
  const o = new Object3D();

  function set(mesh, index, x, y, z, rx = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
    o.position.set(x, y, z);
    o.rotation.set(rx, 0, rz);
    o.scale.set(sx, sy, sz);
    o.updateMatrix();
    out.multiplyMatrices(base, o.matrix);
    mesh.setMatrixAt(index, out);
  }

  return {
    update() {
      for (let k = 0; k < n; k++) {
        const p = list[k];
        const y = groundY(p.x, p.z) + p.hop;
        o.position.set(p.x, y, p.z);
        o.rotation.set(0, -p.heading, 0);
        o.scale.setScalar(p.scale);
        o.updateMatrix();
        base.copy(o.matrix);
        const swing = Math.sin(p.walk * 3.2) * 0.55;
        set(legs, k * 2, -0.11, 0.74, 0, swing);
        set(legs, k * 2 + 1, 0.11, 0.74, 0, -swing);
        set(body, k, 0, 1.06, 0);
        set(head, k, 0, 1.6, 0);
        const hatted = p.hat != null;
        set(hair, k, 0, hatted ? 1.66 : 1.63, 0.02, -0.15, 0, hatted ? 1.12 : 1, hatted ? 0.8 : 1, hatted ? 1.12 : 1);
        // Arms: swing when walking, wave the right one, both up to cheer.
        const up = p.arms * 2.8;
        const wave = p.wave * (2.5 + p.waveSwing * 0.35);
        const pointing = p.state === 'point';
        set(arms, k * 2, -0.31, 1.33, 0, -swing * (1 - p.arms), -up * 0.98);
        set(arms, k * 2 + 1, 0.31, 1.33, 0, pointing ? 1.5 : swing * (1 - p.arms), pointing ? 0 : Math.max(up, wave));
      }
      for (const m of [legs, body, head, hair, arms]) m.instanceMatrix.needsUpdate = true;
    },
  };
}

/** A small ginger kitten, sitting. */
export function createCat() {
  const b = new Builder();
  const fur = 0xf2a03b;
  b.blob(0, 0.32, 0.05, 0.3, fur, 1.05);
  b.ball(0, 0.68, -0.15, 0.24, fur);
  b.add(SHAPES.cone(4), -0.13, 0.9, -0.15, 0.14, 0.18, 0.1, fur);
  b.add(SHAPES.cone(4), 0.13, 0.9, -0.15, 0.14, 0.18, 0.1, fur);
  b.ball(-0.08, 0.72, -0.37, 0.04, 0x2a2a30);
  b.ball(0.08, 0.72, -0.37, 0.04, 0x2a2a30);
  b.ball(0, 0.64, -0.39, 0.03, 0xf28aa0);
  b.add(SHAPES.box(), 0, 0.25, 0.42, 0.08, 0.08, 0.5, fur, 0, -0.6);
  b.blob(0, 0.32, -0.12, 0.16, 0xfff4e8);
  const m = new Mesh(b.geometry(), new MeshLambertMaterial({ vertexColors: true }));
  m.castShadow = true;
  const g = new Group();
  g.add(m);
  g.visible = false;
  return g;
}
