/**
 * Draws everything that stays put (from world/ocean.js): coral reefs,
 * boulders, kelp forests, palm islands, the underwater palace with its
 * towers, pillars, lanterns and thrones, the glowing grottos, the
 * shipwrecks, the giant clams and the treasure chests.
 *
 * Most of it is merged into a few meshes. Kelp sways in its shader; clams
 * and chests open in `update`.
 */
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  CylinderGeometry,
  DoubleSide,
  Group,
  InstancedMesh,
  Mesh,
  MeshLambertMaterial,
  MeshPhongMaterial,
  Object3D,
  SphereGeometry,
  TorusGeometry,
  Vector3,
} from 'three';
import { Builder, SHAPES } from './builder.js';
import { withCaustics } from './seabed.js';
import { makeTreasure } from './treasures.js';
import { colorOf } from './looks.js';
import { noise2 } from '../core/utils.js';
import { QUALITY } from '../core/quality.js';

const PEARL = 0xfff4f0;
const GOLD = 0xf2c94a;
const WOOD = 0x6a4a32;
const WOOD_LIGHT = 0x8a6a48;

const nonIndexed = new Map();
function flat(key, make) {
  if (!nonIndexed.has(key)) {
    const g = make();
    nonIndexed.set(key, g.index ? g.toNonIndexed() : g);
  }
  return nonIndexed.get(key);
}
const HALF_DOWN = () => flat('halfdown', () => new SphereGeometry(0.5, 16, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2));

/** A dome (upper half of a sphere) with holes cut where its doors are. */
function domeGeometry(r, doors, lumpy = 0) {
  const g = new SphereGeometry(r, 48, 20, 0, Math.PI * 2, 0, Math.PI / 2).toNonIndexed();
  const p = g.attributes.position.array;
  const keep = [];
  const v = new Vector3();
  for (let k = 0; k < p.length; k += 9) {
    v.set((p[k] + p[k + 3] + p[k + 6]) / 3, (p[k + 1] + p[k + 4] + p[k + 7]) / 3, (p[k + 2] + p[k + 5] + p[k + 8]) / 3).normalize();
    if (doors.some((d) => v.x * d.x + v.y * d.y + v.z * d.z >= d.cos)) continue;
    for (let j = 0; j < 9; j += 3) {
      let x = p[k + j];
      let y = p[k + j + 1];
      let z = p[k + j + 2];
      if (lumpy) {
        const n = noise2(x * 0.35 + 5, z * 0.35 + y * 0.3) * lumpy;
        const l = Math.hypot(x, y, z);
        x *= (l + n) / l;
        y *= (l + n) / l;
        z *= (l + n) / l;
      }
      keep.push(x, y, z);
    }
  }
  const out = new BufferGeometry();
  out.setAttribute('position', new BufferAttribute(new Float32Array(keep), 3));
  out.computeVertexNormals();
  return out;
}

/** The princess's (or the King's) scallop-shell throne. */
export function buildThrone(color, scale = 1) {
  const g = new Group();
  const shell = new MeshPhongMaterial({ color, shininess: 90 });
  const pearl = new MeshPhongMaterial({ color: PEARL, shininess: 120 });
  const add = (geo, mat, x, y, z, sx, sy, sz, rx = 0, rz = 0) => {
    const m = new Mesh(geo, mat);
    m.position.set(x, y, z);
    m.scale.set(sx, sy, sz);
    m.rotation.set(rx, 0, rz);
    m.castShadow = true;
    m.receiveShadow = true;
    g.add(m);
    return m;
  };
  const sph = new SphereGeometry(1, 14, 10);
  // Pedestal and seat.
  add(new CylinderGeometry(0.9, 1.1, 0.7, 20), pearl, 0, 0.35, 0, 1, 1, 1);
  add(sph, shell, 0, 0.95, 0.05, 0.95, 0.32, 0.8);
  // The scallop back: ribs fanned out behind, each tipped with a pearl.
  for (let k = 0; k < 9; k++) {
    const a = -1.15 + (k / 8) * 2.3;
    const rib = add(sph, shell, Math.sin(a) * 0.75, 1.2 + Math.cos(a) * 0.75, 0.75, 0.2, 0.85, 0.14, -0.2, -a);
    rib.position.y += 0.2;
    add(sph, pearl, Math.sin(a) * 1.5, 1.4 + Math.cos(a) * 1.5, 0.8, 0.1, 0.1, 0.1);
  }
  add(sph, shell, 0, 1.25, 0.8, 0.9, 0.55, 0.12);
  g.scale.setScalar(scale);
  g.userData.shell = shell;
  return g;
}

export function createScenery(scene, ocean, uniforms, look) {
  const solid = new Builder();
  const glow = new Builder(); // things that shine: lanterns, crystals
  const anim = [];

  /* ------------------------------------------------- rocks and coral --- */
  for (const r of ocean.rocks) {
    solid.add(SHAPES.blob(), r.x, r.y, r.z, r.r * 2, r.r * 2 * r.sy, r.r * 2, r.color);
    solid.add(SHAPES.gem(), r.x + r.r * 0.4, r.y + r.r * 0.3 * r.sy, r.z - r.r * 0.3, r.r * 1.1, r.r * 0.9 * r.sy, r.r * 1.1, new Color(r.color).multiplyScalar(0.9).getHex());
  }
  for (const c of ocean.coral) {
    const s = c.s;
    const { x, y, z, color } = c;
    switch (c.kind) {
      case 'branch':
        for (let k = 0; k < 5; k++) {
          const a = c.yaw + k * 1.3;
          const lean = 0.35 + (k % 2) * 0.25;
          const len = (0.8 + (k % 3) * 0.35) * s;
          solid.add(SHAPES.cyl(6), x + Math.cos(a) * 0.2 * s, y + len * 0.45, z + Math.sin(a) * 0.2 * s, 0.14 * s, len, 0.14 * s, color, -a + Math.PI / 2, 0, lean);
          solid.ball(x + Math.cos(a) * (0.2 + Math.sin(lean) * len) * s, y + Math.cos(lean) * len * 0.95, z + Math.sin(a) * (0.2 + Math.sin(lean) * len) * s, 0.1 * s, color, 6, 4);
        }
        break;
      case 'brain':
        solid.add(SHAPES.blob(), x, y + 0.2 * s, z, 1.6 * s, 1.0 * s, 1.6 * s, color);
        break;
      case 'fan':
        solid.add(SHAPES.cyl(14), x, y + 0.75 * s, z, 1.5 * s, 0.06, 1.3 * s, color, c.yaw, Math.PI / 2);
        solid.add(SHAPES.cyl(5), x, y + 0.2 * s, z, 0.08, 0.4 * s, 0.08, color);
        break;
      case 'tube':
        for (let k = 0; k < 5; k++) {
          const a = c.yaw + k * 1.25;
          const h = (0.5 + (k % 3) * 0.3) * s;
          solid.cyl(x + Math.cos(a) * 0.22 * s, y, z + Math.sin(a) * 0.22 * s, 0.1 * s, h, color, 7);
        }
        break;
      case 'anemone':
        solid.cyl(x, y, z, 0.25 * s, 0.25 * s, color, 8);
        for (let k = 0; k < 10; k++) {
          const a = (k / 10) * Math.PI * 2;
          solid.add(SHAPES.cone(5), x + Math.cos(a) * 0.17 * s, y + 0.45 * s, z + Math.sin(a) * 0.17 * s, 0.07 * s, 0.45 * s, 0.07 * s, 0xffffff - (color & 0x3f3f3f), 0, Math.cos(a) * 0.3, -Math.sin(a) * 0.3);
        }
        break;
      case 'star':
        for (let k = 0; k < 5; k++) {
          const a = c.yaw + (k / 5) * Math.PI * 2;
          solid.add(SHAPES.box(), x + Math.cos(a) * 0.15 * s, y + 0.05, z + Math.sin(a) * 0.15 * s, 0.32 * s, 0.08, 0.1 * s, color, -a);
        }
        break;
      default:
        // A barrel sponge.
        solid.cyl(x, y, z, 0.35 * s, 0.7 * s, color, 10);
        solid.cyl(x, y + 0.69 * s, z, 0.24 * s, 0.03, new Color(color).multiplyScalar(0.5).getHex(), 10);
    }
  }

  /* ------------------------------------------------------ the islands --- */
  for (const p of ocean.palms) {
    const segs = 6;
    let px = p.x;
    let pz = p.z;
    let py = p.y;
    const lx = Math.cos(p.yaw) * p.lean;
    const lz = Math.sin(p.yaw) * p.lean;
    for (let k = 0; k < segs; k++) {
      const h = p.h / segs;
      solid.add(SHAPES.cyl(7), px, py + h / 2, pz, 0.36 - k * 0.03, h * 1.05, 0.36 - k * 0.03, k % 2 ? 0xa07a4a : 0x8a6a3a, 0, lz * (k / segs), -lx * (k / segs));
      px += lx * h * (k / segs);
      pz += lz * h * (k / segs);
      py += h;
    }
    for (let k = 0; k < 7; k++) {
      const a = (k / 7) * Math.PI * 2;
      solid.add(SHAPES.box(), px + Math.cos(a) * 1.3, py - 0.2, pz + Math.sin(a) * 1.3, 2.8, 0.08, 0.7, 0x4aa850, -a, 0, -0.45);
    }
    for (let k = 0; k < 3; k++) solid.ball(px + Math.cos(k * 2.1) * 0.25, py - 0.3, pz + Math.sin(k * 2.1) * 0.25, 0.18, 0x6a4a2a);
  }

  /* ------------------------------------------------------- the palace --- */
  const P = ocean.palace;
  const hall = ocean.shells[0];
  const dome = new Mesh(
    domeGeometry(P.hallR, hall.doors),
    withCaustics(new MeshPhongMaterial({ color: 0xffe4ee, shininess: 70, specular: 0x998899, side: DoubleSide, emissive: 0x3a2030 }), uniforms, 0.35)
  );
  dome.position.set(P.x, P.floor, P.z);
  dome.castShadow = true;
  scene.add(dome);
  // Golden ribs over the dome, a ring round its foot, a mosaic floor.
  for (let k = 0; k < 6; k++) {
    const rib = new Mesh(new TorusGeometry(P.hallR + 0.15, 0.22, 6, 40, Math.PI), new MeshPhongMaterial({ color: GOLD, shininess: 120, specular: 0xffffff }));
    rib.position.set(P.x, P.floor, P.z);
    rib.rotation.y = (k / 6) * Math.PI;
    scene.add(rib);
  }
  const goldMat = new MeshPhongMaterial({ color: GOLD, shininess: 120, specular: 0xffffff });
  const footRing = new Mesh(new TorusGeometry(P.hallR + 0.2, 0.35, 8, 64), goldMat);
  footRing.position.set(P.x, P.floor + 0.2, P.z);
  footRing.rotation.x = Math.PI / 2;
  scene.add(footRing);
  const rings = [0xfff4f0, 0x9ae0e8, 0xffc8dc, 0xfff4f0, 0x9ae0e8, 0xffc8dc, 0xf2c94a];
  rings.forEach((c, k) => solid.add(SHAPES.cyl(40), P.x, P.floor + 0.05 + k * 0.004, P.z, (P.hallR - k * 1.9) * 2, 0.1, (P.hallR - k * 1.9) * 2, c));
  // Towers, with spiral bands of pearls and pointed golden roofs.
  for (const t of P.towers) {
    const h = t.y1 - t.y0;
    solid.add(SHAPES.cyl(20), t.x, t.y0 + h / 2, t.z, t.r * 2, h, t.r * 2, 0xffe8f0);
    for (let k = 0; k < 4; k++) solid.add(SHAPES.torus(0.5, 0.05), t.x, t.y0 + 3 + k * 3.5, t.z, t.r * 2.1, t.r * 2.1, 3, k % 2 ? GOLD : 0xff9ac8, 0, Math.PI / 2);
    for (let k = 0; k < 4; k++) {
      const a = k * 1.57 + 0.4;
      glow.add(SHAPES.sphere(8, 6), t.x + Math.cos(a) * t.r, t.y0 + 9 + (k % 2) * 3, t.z + Math.sin(a) * t.r, 0.9, 1.4, 0.9, 0xffe8a0);
    }
    solid.cone(t.x, t.y1, t.z, t.r * 1.3, 6, 0xff8ac0, 20);
    solid.add(SHAPES.torus(0.5, 0.06), t.x, t.y1, t.z, t.r * 2.6, t.r * 2.6, 4, GOLD, 0, Math.PI / 2);
    solid.ball(t.x, t.y1 + 6.3, t.z, 0.5, GOLD);
  }
  // The avenue of pillars, each with a glowing pearl on top.
  for (const p of P.pillars) {
    solid.cyl(p.x, p.y0, p.z, p.r, p.y1 - p.y0, 0xfff0f4, 14);
    solid.cyl(p.x, p.y1 - 0.2, p.z, p.r * 1.4, 0.4, GOLD, 14);
    solid.cyl(p.x, p.y0, p.z, p.r * 1.4, 0.5, GOLD, 14);
  }
  for (const l of ocean.lanterns) glow.ball(l.x, l.y, l.z, 0.45, 0xfff0c0, 12, 9);
  // Lanterns round the inside of the hall, too.
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * Math.PI * 2 + 0.3;
    glow.ball(P.x + Math.cos(a) * (P.hallR - 1.5), P.floor + 4, P.z + Math.sin(a) * (P.hallR - 1.5), 0.35, 0xfff0c0, 10, 8);
  }
  // A grand arch over the front door.
  const arch = new Mesh(new TorusGeometry(6.8, 0.4, 8, 32, Math.PI), goldMat);
  arch.position.set(P.x, P.floor, P.z + P.hallR + 0.6);
  scene.add(arch);
  // Thrones: the King's, in gold, and yours, in your colour.
  const kingThrone = buildThrone(GOLD, 1.6);
  kingThrone.position.set(P.kingThrone.x, P.floor, P.kingThrone.z);
  kingThrone.rotation.y = P.kingThrone.yaw;
  scene.add(kingThrone);
  const throne = buildThrone(colorOf(look, 'throne'), 1);
  throne.position.set(P.throne.x, P.floor, P.throne.z);
  throne.rotation.y = P.throne.yaw;
  scene.add(throne);
  // Little coral pedestals for your treasures.
  for (const d of P.display) {
    solid.cyl(d.x, P.floor, d.z, 0.16, d.y - P.floor - 0.05, 0xffd0e0, 8);
    solid.cyl(d.x, d.y - 0.08, d.z, 0.3, 0.08, 0xfff4f0, 12);
  }

  /* ------------------------------------------------------ the grottos --- */
  ocean.grottos.forEach((g, gi) => {
    const shell = ocean.shells[1 + gi];
    // The rock glows faintly inside, in the colour of its crystals.
    const glowTint = new Color(g.crystal).multiplyScalar(0.35);
    const rock = withCaustics(new MeshLambertMaterial({ color: 0x9a8aaa, side: DoubleSide, emissive: glowTint }), uniforms, 0.3);
    const m = new Mesh(domeGeometry(g.r + 0.3, shell.doors, 1.2), rock);
    m.position.set(g.x, g.floor, g.z);
    m.castShadow = true;
    m.receiveShadow = true;
    scene.add(m);
    // Glowing crystals round the walls inside, and a few by the door.
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * Math.PI * 2;
      const ox = Math.cos(a);
      const oz = Math.sin(a);
      if (ox * g.door.x + oz * g.door.z > 0.75) continue;
      const rr = g.r - 1.2;
      const h = 0.8 + (k % 3) * 0.6;
      glow.add(SHAPES.gem(), g.x + ox * rr, g.floor + h * 0.5, g.z + oz * rr, 0.5, h * 1.6, 0.5, g.crystal, a, 0.3 * oz, -0.3 * ox);
      glow.add(SHAPES.gem(), g.x + ox * (rr - 0.6), g.floor + 0.3, g.z + oz * (rr - 0.6), 0.3, 0.8, 0.3, 0xffffff, a);
    }
    // Two crystals either side of the doorway, so you can find the way in.
    for (const s of [-1, 1]) {
      const px = -g.door.z * s;
      const pz = g.door.x * s;
      glow.add(SHAPES.gem(), g.x + g.door.x * (g.r + 1) + px * 5, g.floor + 1, g.z + g.door.z * (g.r + 1) + pz * 5, 0.8, 2.6, 0.8, g.crystal);
    }
  });

  /* --------------------------------------------------- the shipwrecks --- */
  for (const w of ocean.wrecks) {
    const b = new Builder();
    // Hull: the bottom half of a long rounded shape, then the deck.
    const deck = 3.2;
    b.add(HALF_DOWN(), 0, deck, 0, 6.4, 5.2, 21, WOOD);
    b.box(0, deck - 0.15, 0, 5.8, 0.3, 19, WOOD_LIGHT);
    for (let k = 0; k < 6; k++) b.box(((k % 3) - 1) * 1.6, deck + 0.02, -6 + k * 2.5, 0.8, 0.1, 1.2, 0x2a2018);
    // The stern castle, with little windows.
    b.box(0, deck, 7.5, 5.4, 2.4, 4, WOOD);
    for (let k = -1; k <= 1; k++) b.box(k * 1.5, deck + 1.1, 9.52, 0.7, 0.6, 0.06, 0x1a2a3a);
    b.box(0, deck + 2.4, 7.5, 5.8, 0.25, 4.4, WOOD_LIGHT);
    // A bowsprit, a broken mast with a torn sail, and the top half lying on deck.
    b.add(SHAPES.cyl(6), 0, deck + 1, -11.5, 0.3, 4, 0.3, WOOD, 0, -1.2);
    b.cyl(0, deck, -1.5, 0.35, 7, WOOD, 8);
    b.add(SHAPES.box(), 0.4, deck + 4.5, -1.2, 4.5, 3, 0.06, w.sail, 0.3, 0.2, 0.15);
    b.cyl(0, deck + 7, -1.5, 0.7, 0.4, WOOD_LIGHT, 10);
    b.add(SHAPES.cyl(6), 1.5, deck + 0.4, 3, 0.3, 7, 0.3, WOOD, 0.4, 0, 1.45);
    // Cannons poking out of both sides.
    for (const sx of [-1, 1]) {
      for (let k = 0; k < 3; k++) b.add(SHAPES.cyl(8), sx * 3.1, deck - 0.9, -4 + k * 3.5, 0.32, 1.2, 0.32, 0x2a2a30, 0, 0, Math.PI / 2);
    }
    // Seaweed growing on it.
    for (let k = 0; k < 8; k++) b.cone(((k * 37) % 5) - 2, deck, -8 + k * 2.2, 0.15, 1 + (k % 3) * 0.5, 0x3a9a4a, 5);
    const mesh = new Mesh(b.geometry(), withCaustics(new MeshLambertMaterial({ vertexColors: true }), uniforms, 0.4));
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.set(w.x, w.floor - 0.8, w.z);
    mesh.rotation.set(0, -w.yaw, w.roll, 'YXZ');
    scene.add(mesh);
    // Barrels spilled on the sand.
    for (let k = 0; k < 4; k++) {
      const a = w.yaw + 1.6 + k * 0.5;
      const bx = w.x + Math.cos(a) * (6 + k);
      const bz = w.z + Math.sin(a) * (6 + k);
      solid.add(SHAPES.cyl(10), bx, w.floor + 0.4 + (k % 2) * 0.1, bz, 0.9, 1.2, 0.9, 0x8a5a3a, a, k % 2 ? Math.PI / 2 : 0);
    }
  }

  /* ------------------------------------------------------------ kelp --- */
  const kelpGeo = new CylinderGeometry(0.05, 0.08, 1, 4, 10, true);
  kelpGeo.translate(0, 0.5, 0);
  // Leaves: flatten it into a wavy ribbon.
  const kp = kelpGeo.attributes.position;
  for (let k = 0; k < kp.count; k++) kp.setX(k, kp.getX(k) * 9);
  kelpGeo.computeVertexNormals();
  const kelpMat = new MeshLambertMaterial({ color: 0xffffff, side: DoubleSide, emissive: 0x0a2a10 });
  kelpMat.onBeforeCompile = (s) => {
    s.uniforms.uTime = uniforms.uTime;
    s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;').replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      {
        vec3 base = vec3(instanceMatrix[3][0], 0.0, instanceMatrix[3][2]);
        float h = position.y;
        float sway = sin(uTime * 0.9 + base.x * 0.3 + base.z * 0.2 + h * 2.0) * 0.35 * h * h;
        transformed.x += sway;
        transformed.z += cos(uTime * 0.7 + base.z * 0.3 + h * 1.5) * 0.25 * h * h;
      }`
    );
  };
  const kelpList = ocean.kelp.slice(0, QUALITY.kelp);
  const kelp = new InstancedMesh(kelpGeo, kelpMat, kelpList.length);
  const o = new Object3D();
  const kc = new Color();
  kelpList.forEach((k, i) => {
    o.position.set(k.x, k.y, k.z);
    o.rotation.set(0, (k.x * 13.7) % 6.28, 0);
    o.scale.set(1, k.h, 1);
    o.updateMatrix();
    kelp.setMatrixAt(i, o.matrix);
    kelp.setColorAt(i, kc.setHSL(0.27 + ((Math.abs(k.z) * 7.1) % 1) * 0.07, 0.6, 0.45));
  });
  kelp.instanceMatrix.needsUpdate = true;
  scene.add(kelp);

  /* ---------------------------------------------- clams and chests --- */
  const clamMat = new MeshPhongMaterial({ color: 0xd8b0e8, shininess: 60, side: DoubleSide });
  const clams = ocean.clams.map((c) => {
    const g = new Group();
    g.position.set(c.x, c.y, c.z);
    g.rotation.y = c.yaw;
    const base = new Mesh(new SphereGeometry(1.2, 16, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), clamMat);
    base.scale.set(1, 0.5, 0.85);
    base.position.y = 0.55;
    g.add(base);
    const hinge = new Group();
    hinge.position.set(0, 0.55, 1.0);
    g.add(hinge);
    const lid = new Mesh(new SphereGeometry(1.2, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), clamMat);
    lid.scale.set(1, 0.5, 0.85);
    lid.position.set(0, 0, -1.0);
    hinge.add(lid);
    for (const m of [base, lid]) {
      m.castShadow = true;
      m.receiveShadow = true;
    }
    scene.add(g);
    return { hinge, open: 0 };
  });

  const chestMat = new MeshLambertMaterial({ color: 0x8a5a32 });
  const chestTrim = new MeshPhongMaterial({ color: GOLD, shininess: 120, specular: 0xffffff });
  const chests = new Map();
  for (const t of ocean.treasures) {
    if (t.container !== 'chest') continue;
    const g = new Group();
    g.position.set(t.x, t.y, t.z);
    g.rotation.y = -(t.yaw || 0);
    const base = new Mesh(SHAPES.box(), chestMat);
    base.scale.set(1.4, 0.8, 0.9);
    base.position.y = 0.4;
    g.add(base);
    for (const sx of [-0.55, 0.55]) {
      const band = new Mesh(SHAPES.box(), chestTrim);
      band.scale.set(0.12, 0.84, 0.94);
      band.position.set(sx, 0.4, 0);
      g.add(band);
    }
    const hinge = new Group();
    hinge.position.set(0, 0.8, 0.45);
    g.add(hinge);
    const lid = new Mesh(new CylinderGeometry(0.45, 0.45, 1.4, 12, 1, false, 0, Math.PI), chestMat);
    lid.rotation.z = Math.PI / 2; // a half cylinder, round side up, along the chest
    lid.position.set(0, 0, -0.45);
    hinge.add(lid);
    const lock = new Mesh(SHAPES.box(), chestTrim);
    lock.scale.set(0.22, 0.26, 0.08);
    lock.position.set(0, -0.05, -0.92);
    hinge.add(lock);
    for (const m of [base, lid]) m.castShadow = true;
    scene.add(g);
    chests.set(t.id, { hinge, open: 0 });
  }

  /* -------------------------------------------- treasures where hidden --- */
  const hidden = new Map();
  for (const t of ocean.treasures) {
    const m = makeTreasure(t.id);
    m.scale.setScalar(1.5);
    m.position.set(t.x, t.y + (t.container === 'chest' ? 0.85 : t.container === 'clam' ? 0.1 : 0), t.z);
    scene.add(m);
    hidden.set(t.id, m);
  }

  /* -------------------------------------------------------- the meshes --- */
  const solidMesh = new Mesh(solid.geometry(), withCaustics(new MeshLambertMaterial({ vertexColors: true }), uniforms, 0.45));
  solidMesh.castShadow = true;
  solidMesh.receiveShadow = true;
  scene.add(solidMesh);
  const glowMesh = new Mesh(glow.geometry(), new MeshLambertMaterial({ vertexColors: true, emissive: 0xffffff, emissiveIntensity: 0.55 }));
  glowMesh.material.onBeforeCompile = (s) => {
    // Glow in their own colour.
    s.fragmentShader = s.fragmentShader.replace('vec3 totalEmissiveRadiance = emissive;', 'vec3 totalEmissiveRadiance = emissive * vColor.rgb;');
  };
  scene.add(glowMesh);

  return {
    throne,
    kingThrone,
    setThroneColor(hex) {
      throne.userData.shell.color.setHex(hex);
    },
    /** found: Set of treasure ids. near: the mermaid's position. */
    update(t, dt, found, near) {
      ocean.clams.forEach((c, k) => {
        const d = Math.hypot(near.x - c.x, near.y - c.y, near.z - c.z);
        const want = d < 9 ? 1 : 0.15 + 0.1 * Math.sin(t * 0.4 + k);
        clams[k].open += (want - clams[k].open) * Math.min(1, dt * 2);
        clams[k].hinge.rotation.x = clams[k].open * 0.9;
      });
      for (const [id, c] of chests) {
        c.open += ((found.has(id) ? 1 : 0) - c.open) * Math.min(1, dt * 2.5);
        c.hinge.rotation.x = c.open * 1.9;
      }
      for (const tr of ocean.treasures) {
        const m = hidden.get(tr.id);
        m.visible = !found.has(tr.id);
        if (!m.visible) continue;
        m.rotation.y = t * 0.8;
        if (tr.container === 'bottle') m.position.y = -0.1 + Math.sin(t * 1.6) * 0.12;
        else m.position.y = tr.y + (tr.container === 'chest' ? 0.85 : 0.1) + Math.sin(t * 2) * 0.06;
      }
      for (const f of anim) f(t);
    },
  };
}

