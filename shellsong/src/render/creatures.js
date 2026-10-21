/**
 * Draws the sea's creatures (from world/creatures.js): fish and jellyfish
 * are instanced (hundreds for the price of a few draw calls); turtles,
 * stingrays, dolphins, whales, seahorses, crabs, ships and gulls are
 * little models with their fins, flippers, wings and tails animated.
 */
import { Color, Group, InstancedMesh, Mesh, MeshLambertMaterial, MeshPhongMaterial, Object3D, SphereGeometry } from 'three';
import { Builder, SHAPES } from './builder.js';

const vc = new MeshLambertMaterial({ vertexColors: true });
const vcShiny = new MeshPhongMaterial({ vertexColors: true, shininess: 60, specular: 0x556677 });
const halfDown = new SphereGeometry(0.5, 14, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2).toNonIndexed();
const halfUp = new SphereGeometry(0.5, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2).toNonIndexed();

function mesh(builder, mat = vc) {
  const m = new Mesh(builder.geometry(), mat);
  m.castShadow = true;
  return m;
}

/* -------------------------------------------------------------- models --- */

function fishGeometry() {
  const b = new Builder();
  b.add(SHAPES.sphere(10, 7), 0, 0, 0, 0.32, 0.5, 1, 0xffffff);
  b.add(SHAPES.sphere(8, 5), 0, 0, 0.05, 0.34, 0.36, 0.2, 0x555555);
  b.add(SHAPES.cone(6), 0, 0, 0.62, 0.05, 0.4, 0.42, 0xffffff, 0, Math.PI / 2);
  b.add(SHAPES.cone(5), 0, 0.28, 0, 0.05, 0.3, 0.3, 0xffffff);
  for (const sx of [-1, 1]) b.ball(sx * 0.14, 0.06, -0.32, 0.055, 0x1a1a22, 6, 4);
  return b.geometry();
}

function turtle() {
  const g = new Group();
  const b = new Builder();
  b.add(halfUp, 0, 0, 0, 1.4, 0.7, 1.7, 0x5a8a4a);
  for (let k = 0; k < 5; k++) b.add(SHAPES.gem(), ((k % 3) - 1) * 0.35, 0.28, (Math.floor(k / 3) - 0.3) * 0.5, 0.35, 0.08, 0.35, 0x7aaa5a);
  b.add(halfDown, 0, 0.02, 0, 1.3, 0.25, 1.6, 0xd8d0a0);
  b.ball(0, 0.05, -1.0, 0.24, 0x9ac07a);
  for (const sx of [-1, 1]) b.ball(sx * 0.1, 0.12, -1.15, 0.04, 0x1a1a22, 6, 4);
  g.add(mesh(b));
  const flippers = [];
  for (const [sx, z, len] of [
    [-1, -0.45, 0.8],
    [1, -0.45, 0.8],
    [-1, 0.55, 0.45],
    [1, 0.55, 0.45],
  ]) {
    const pivot = new Group();
    pivot.position.set(sx * 0.6, 0, z);
    const fb = new Builder();
    fb.add(SHAPES.sphere(8, 5), (sx * len) / 2, 0, 0, len, 0.08, len * 0.45, 0x9ac07a);
    pivot.add(mesh(fb));
    g.add(pivot);
    flippers.push({ pivot, sx, front: z < 0 });
  }
  g.userData = { flippers };
  return g;
}

function ray() {
  const g = new Group();
  const b = new Builder();
  b.add(SHAPES.sphere(10, 6), 0, 0, 0, 0.9, 0.25, 1.4, 0x6a7a90);
  b.add(SHAPES.cyl(4), 0, 0, 1.4, 0.05, 1.8, 0.05, 0x5a6a80, 0, Math.PI / 2);
  for (const sx of [-1, 1]) b.ball(sx * 0.18, 0.1, -0.5, 0.05, 0x1a1a22, 6, 4);
  g.add(mesh(b));
  const wings = [-1, 1].map((sx) => {
    const pivot = new Group();
    pivot.position.set(sx * 0.35, 0, 0);
    const wb = new Builder();
    wb.add(SHAPES.gem(), sx * 0.75, 0, 0.05, 1.6, 0.12, 1.1, 0x6a7a90, sx * 0.6);
    wb.add(SHAPES.gem(), sx * 0.75, -0.03, 0.05, 1.5, 0.08, 1.0, 0xe8eef4, sx * 0.6);
    pivot.add(mesh(wb));
    g.add(pivot);
    return { pivot, sx };
  });
  g.userData = { wings };
  return g;
}

function dolphin() {
  const g = new Group();
  const b = new Builder();
  const grey = 0x7a98b8;
  b.add(SHAPES.sphere(14, 10), 0, 0, 0, 0.7, 0.68, 2.3, grey);
  b.add(SHAPES.sphere(12, 8), 0, -0.12, -0.15, 0.6, 0.48, 1.9, 0xe8f0f8);
  b.add(SHAPES.sphere(10, 6), 0, -0.05, -1.25, 0.24, 0.2, 0.6, grey);
  b.add(SHAPES.cone(8), 0, 0.42, 0.15, 0.08, 0.5, 0.45, grey, 0, -0.5);
  for (const sx of [-1, 1]) {
    b.add(SHAPES.sphere(8, 5), sx * 0.38, -0.2, -0.45, 0.5, 0.05, 0.22, grey, sx * 0.6, 0, sx * 0.5);
    b.ball(sx * 0.2, 0.1, -0.85, 0.045, 0x1a1a22, 6, 4);
  }
  // A smile.
  b.add(SHAPES.box(), 0, -0.1, -1.05, 0.22, 0.02, 0.3, 0x5a6a80);
  g.add(mesh(b, vcShiny));
  const tail = new Group();
  tail.position.set(0, 0, 0.95);
  const tb = new Builder();
  tb.add(SHAPES.sphere(10, 6), 0, 0, 0.35, 0.3, 0.28, 0.9, grey);
  for (const sx of [-1, 1]) tb.add(SHAPES.sphere(8, 5), sx * 0.3, 0, 0.82, 0.6, 0.05, 0.3, grey, sx * 0.5);
  tail.add(mesh(tb, vcShiny));
  g.add(tail);
  g.userData = { tail };
  return g;
}

function whale() {
  const g = new Group();
  const b = new Builder();
  const blue = 0x3a4a6a;
  b.add(SHAPES.sphere(18, 12), 0, 0, 0, 3.4, 2.8, 13, blue);
  b.add(SHAPES.sphere(16, 10), 0, -0.6, -1.5, 3.0, 1.8, 10, 0xe0e4ec);
  for (let k = 0; k < 6; k++) b.add(SHAPES.box(), 0, -1.35, -5 + k * 1.3, 2.2, 0.06, 0.12, 0x9aa4b4);
  for (let k = 0; k < 7; k++) b.ball(((k % 3) - 1) * 0.5, 1.15, -5.3 + k * 0.4, 0.14, 0x2a3a5a, 6, 4);
  for (const sx of [-1, 1]) {
    b.add(SHAPES.sphere(10, 6), sx * 2.6, -0.6, -2.2, 4.4, 0.25, 1.0, blue, sx * 0.35, 0, sx * 0.4);
    b.ball(sx * 1.3, -0.1, -4.6, 0.2, 0x1a1a22, 8, 6);
    b.ball(sx * 1.36, -0.05, -4.62, 0.07, 0xffffff, 6, 4);
  }
  b.add(SHAPES.cone(6), 0, 1.25, 2.6, 0.5, 0.6, 0.9, blue);
  g.add(mesh(b));
  const tail = new Group();
  tail.position.set(0, 0, 5.8);
  const tb = new Builder();
  tb.add(SHAPES.sphere(12, 8), 0, 0, 1.4, 1.4, 1.2, 3.6, blue);
  for (const sx of [-1, 1]) tb.add(SHAPES.sphere(10, 6), sx * 1.6, 0, 3.2, 3.2, 0.2, 1.3, blue, sx * 0.45);
  tail.add(mesh(tb));
  g.add(tail);
  g.userData = { tail };
  return g;
}

function jellyGeometry() {
  const b = new Builder();
  b.add(halfUp, 0, 0, 0, 1, 0.75, 1, 0xffffff);
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2;
    b.add(SHAPES.cyl(4), Math.cos(a) * 0.3, -0.6, Math.sin(a) * 0.3, 0.03, 1.2, 0.03, 0xffffff);
  }
  b.add(SHAPES.sphere(8, 6), 0, -0.25, 0, 0.35, 0.6, 0.35, 0xffffff);
  return b.geometry();
}

function seahorse(color) {
  const b = new Builder();
  for (let k = 0; k < 5; k++) b.ball(0, 0.5 - k * 0.18, 0.05 * Math.sin(k * 1.2) + (k > 2 ? (k - 2) * 0.06 : 0), 0.13 - k * 0.018, color, 8, 6);
  b.ball(0, 0.68, -0.05, 0.12, color, 8, 6);
  b.add(SHAPES.cyl(6), 0, 0.66, -0.2, 0.06, 0.22, 0.06, color, 0, Math.PI / 2);
  b.add(SHAPES.sphere(6, 4), 0, 0.35, 0.14, 0.04, 0.2, 0.15, 0xffffff);
  for (const sx of [-1, 1]) b.ball(sx * 0.07, 0.72, -0.1, 0.025, 0x1a1a22, 6, 4);
  return mesh(b);
}

function crab(color) {
  const b = new Builder();
  b.add(SHAPES.sphere(10, 6), 0, 0.2, 0, 0.7, 0.3, 0.5, color);
  for (const sx of [-1, 1]) {
    b.cyl(sx * 0.12, 0.25, -0.2, 0.02, 0.2, color, 4);
    b.ball(sx * 0.12, 0.47, -0.2, 0.05, 0x1a1a22, 6, 4);
    b.ball(sx * 0.42, 0.22, -0.3, 0.12, color, 8, 6);
    for (let k = 0; k < 3; k++) b.add(SHAPES.box(), sx * 0.42, 0.1, -0.05 + k * 0.12, 0.35, 0.04, 0.04, color, 0, 0, sx * 0.5);
  }
  return mesh(b);
}

function ship(color) {
  const b = new Builder();
  b.add(halfDown, 0, 0.6, 0, 4.4, 3.4, 15, color);
  b.box(0, 0.45, 0, 4, 0.3, 13.5, 0xc8a070);
  b.box(0, 0.6, 5, 3.8, 1.8, 3, color);
  for (const [z, h] of [
    [-3.5, 9],
    [1.5, 11],
  ]) {
    b.cyl(0, 0.6, z, 0.2, h, 0x6a4a32, 6);
    b.add(SHAPES.box(), 0, 0.6 + h * 0.55, z + 0.35, 4.6, h * 0.55, 0.12, 0xfff8ee, 0, -0.08);
    b.add(SHAPES.box(), 0.9, 0.6 + h + 0.3, z, 1.6, 0.6, 0.05, 0xe2382e);
  }
  b.add(SHAPES.cyl(6), 0, 1.6, -8.2, 0.15, 4, 0.15, 0x6a4a32, 0, -1.2);
  return mesh(b);
}

function gull() {
  const g = new Group();
  const b = new Builder();
  b.add(SHAPES.sphere(10, 6), 0, 0, 0, 0.3, 0.3, 0.75, 0xffffff);
  b.ball(0, 0.12, -0.38, 0.13, 0xffffff, 8, 6);
  b.add(SHAPES.cone(5), 0, 0.1, -0.56, 0.05, 0.16, 0.05, 0xf2a03a, 0, -Math.PI / 2);
  b.add(SHAPES.box(), 0, 0.02, 0.42, 0.22, 0.04, 0.2, 0xdddddd);
  g.add(mesh(b));
  const wings = [-1, 1].map((sx) => {
    const pivot = new Group();
    pivot.position.set(sx * 0.12, 0.05, -0.02);
    const wb = new Builder();
    wb.box(sx * 0.45, -0.02, 0, 0.9, 0.04, 0.3, 0xc8ccd4);
    wb.box(sx * 0.95, -0.02, 0.02, 0.2, 0.04, 0.26, 0x2a2a30);
    pivot.add(mesh(wb));
    g.add(pivot);
    return { pivot, sx };
  });
  g.userData = { wings };
  return g;
}

/* -------------------------------------------------------------- the view --- */

export function createCreaturesView(scene, C) {
  // Fish: one instanced mesh, each school in its own colour.
  const F = C.fish;
  const fish = new InstancedMesh(fishGeometry(), new MeshPhongMaterial({ vertexColors: true, shininess: 70, specular: 0x666666 }), F.n);
  fish.frustumCulled = false;
  const col = new Color();
  for (let k = 0; k < F.n; k++) fish.setColorAt(k, col.setHex(C.schools[F.school[k]].color));
  scene.add(fish);

  const jellies = new InstancedMesh(jellyGeometry(), new MeshPhongMaterial({ vertexColors: true, transparent: true, opacity: 0.6, emissive: 0x332244, shininess: 90, depthWrite: false }), C.jellies.length);
  jellies.frustumCulled = false;
  C.jellies.forEach((j, k) => jellies.setColorAt(k, col.setHex(j.color)));
  scene.add(jellies);

  const place = (list, make) =>
    list.map((a) => {
      const m = make(a);
      scene.add(m);
      return m;
    });
  const turtles = place(C.turtles, turtle);
  const rays = place(C.rays, ray);
  const dolphins = place(C.dolphins, dolphin);
  const whales = place(C.whales, whale);
  const seahorses = place(C.seahorses, (h) => seahorse(h.color));
  const crabs = place(C.crabs, (c) => crab(c.color));
  const ships = place(C.ships, (s) => ship(s.color));
  const gulls = place(C.gulls, gull);

  const o = new Object3D();
  const pose = (m, a, scale = 1) => {
    m.position.set(a.x, a.y, a.z);
    m.rotation.set(a.pitch || 0, -(a.yaw || 0), a.roll || 0, 'YXZ');
    m.scale.setScalar(scale);
  };

  return {
    update(t) {
      for (let k = 0; k < F.n; k++) {
        o.position.set(F.px[k], F.py[k], F.pz[k]);
        o.rotation.set(0, -F.yaw[k] + Math.sin(t * 9 + k) * 0.15, 0);
        o.scale.setScalar(0.42 * F.size[k]);
        o.updateMatrix();
        fish.setMatrixAt(k, o.matrix);
      }
      fish.instanceMatrix.needsUpdate = true;
      C.jellies.forEach((j, k) => {
        const p = 1 + Math.sin(j.anim * 2.2) * 0.15;
        o.position.set(j.x, j.y, j.z);
        o.rotation.set(0, j.anim * 0.1, 0);
        o.scale.set(j.size * p, j.size / p, j.size * p);
        o.updateMatrix();
        jellies.setMatrixAt(k, o.matrix);
      });
      jellies.instanceMatrix.needsUpdate = true;

      C.turtles.forEach((a, k) => {
        pose(turtles[k], a, a.size);
        for (const f of turtles[k].userData.flippers) f.pivot.rotation.z = f.sx * Math.sin(a.anim + (f.front ? 0 : 1.5)) * (f.front ? 0.6 : 0.3);
      });
      C.rays.forEach((a, k) => {
        pose(rays[k], a, a.size);
        for (const w of rays[k].userData.wings) w.pivot.rotation.z = w.sx * Math.sin(a.anim) * 0.35;
      });
      C.dolphins.forEach((a, k) => {
        pose(dolphins[k], a, 1);
        dolphins[k].userData.tail.rotation.x = Math.sin(a.anim) * 0.35;
      });
      C.whales.forEach((a, k) => {
        pose(whales[k], a, a.size);
        whales[k].userData.tail.rotation.x = Math.sin(a.anim) * 0.25;
      });
      C.seahorses.forEach((h, k) => pose(seahorses[k], { ...h, pitch: 0, roll: Math.sin(h.anim) * 0.1 }, 1.4));
      C.crabs.forEach((c, k) => pose(crabs[k], { x: c.x, y: c.y, z: c.z, yaw: c.yaw + Math.PI / 2 }, 1.2));
      C.ships.forEach((s, k) => pose(ships[k], s, 1));
      C.gulls.forEach((g, k) => {
        pose(gulls[k], g, 1.3);
        for (const w of gulls[k].userData.wings) w.pivot.rotation.z = w.sx * Math.sin(g.anim) * 0.5;
      });
    },
  };
}
