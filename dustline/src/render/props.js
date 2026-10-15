/**
 * Everything standing about in the canyon: saguaros, Joshua trees, scrub,
 * boulders, telegraph poles with their sagging wires, and wind turbines.
 * Each kind is one instanced mesh, built from a few primitives with vertex
 * colours, so the whole lot is a dozen draw calls.
 */
import {
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  Euler,
  IcosahedronGeometry,
  InstancedMesh,
  LineBasicMaterial,
  LineSegments,
  Matrix4,
  MeshToonMaterial,
  Quaternion,
  SphereGeometry,
  Vector3,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { TOON_RAMP } from './materials.js';
import { QUALITY } from '../core/quality.js';

const toon = new MeshToonMaterial({ color: 0xffffff, vertexColors: true, gradientMap: TOON_RAMP });
const toonFlat = toon;

/** Give a geometry one flat colour (as a vertex attribute) and a transform. */
export function part(geometry, color, { at = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1] } = {}) {
  let g = geometry.index ? geometry.toNonIndexed() : geometry;
  for (const name of Object.keys(g.attributes)) if (name !== 'position' && name !== 'normal') g.deleteAttribute(name);
  const m = new Matrix4().compose(new Vector3(...at), new Quaternion().setFromEuler(new Euler(...rot)), new Vector3(...scale));
  g.applyMatrix4(m);
  const c = new Color(color);
  const n = g.attributes.position.count;
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new BufferAttribute(col, 3));
  return g;
}

export const merge = (parts) => {
  const g = mergeGeometries(parts, false);
  g.computeBoundingSphere();
  return g;
};

/* ------------------------------------------------------------- shapes --- */

function saguaro(arms) {
  const green = 0x5d8a46;
  const parts = [
    part(new CylinderGeometry(0.42, 0.48, 5.4, 9), green, { at: [0, 2.7, 0] }),
    part(new SphereGeometry(0.42, 9, 5, 0, Math.PI * 2, 0, Math.PI / 2), green, { at: [0, 5.4, 0] }),
  ];
  const arm = (side, h, reach, up) => {
    parts.push(part(new CylinderGeometry(0.28, 0.28, reach, 7), green, { at: [side * reach * 0.5, h, 0], rot: [0, 0, Math.PI / 2] }));
    parts.push(part(new CylinderGeometry(0.3, 0.3, up, 7), green, { at: [side * reach, h + up / 2 - 0.1, 0] }));
    parts.push(part(new SphereGeometry(0.3, 7, 4, 0, Math.PI * 2, 0, Math.PI / 2), green, { at: [side * reach, h + up - 0.1, 0] }));
  };
  if (arms >= 1) arm(1, 2.6, 1.2, 1.9);
  if (arms >= 2) arm(-1, 3.3, 1.0, 1.5);
  // A few spring flowers on top.
  parts.push(part(new SphereGeometry(0.12, 5, 3), 0xf2e6c2, { at: [0.15, 5.78, 0.1] }));
  return merge(parts);
}

function joshua() {
  const bark = 0x7a6248;
  const leaf = 0x6f8a42;
  const parts = [part(new CylinderGeometry(0.22, 0.35, 3.2, 6), bark, { at: [0, 1.6, 0] })];
  const branches = [
    [0.9, 3.9, 0.2, 0.6],
    [-0.8, 4.2, -0.3, -0.5],
    [0.2, 4.6, -0.8, 0.1],
  ];
  for (const [x, y, z, lean] of branches) {
    parts.push(part(new CylinderGeometry(0.13, 0.18, 1.8, 5), bark, { at: [x * 0.5, y - 0.6, z * 0.5], rot: [z * 0.6, 0, -x * 0.6 + lean * 0.2] }));
    parts.push(part(new IcosahedronGeometry(0.62, 0), leaf, { at: [x, y + 0.1, z], scale: [1, 0.85, 1] }));
  }
  return merge(parts);
}

function cottonwood() {
  const bark = 0x8a7a66;
  const parts = [part(new CylinderGeometry(0.35, 0.55, 4.5, 7), bark, { at: [0, 2.25, 0] })];
  const greens = [0x6f9a3e, 0x82ad48, 0x5f8a36];
  const lumps = [
    [0, 6.4, 0, 2.6],
    [1.6, 5.6, 0.6, 1.9],
    [-1.5, 5.8, -0.4, 2],
    [0.3, 5.4, -1.7, 1.8],
    [-0.4, 7.6, 0.6, 1.7],
  ];
  lumps.forEach(([x, y, z, r], i) => parts.push(part(new IcosahedronGeometry(r, 1), greens[i % 3], { at: [x, y, z] })));
  return merge(parts);
}

function bush() {
  return merge([
    part(new IcosahedronGeometry(0.9, 0), 0x8f8a52, { at: [0, 0.35, 0], scale: [1.2, 0.6, 1] }),
    part(new IcosahedronGeometry(0.6, 0), 0xa39058, { at: [0.5, 0.45, 0.3], scale: [1, 0.7, 1] }),
  ]);
}

function rockGeo() {
  const g = new DodecahedronGeometry(1, 1);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const v = new Vector3().fromBufferAttribute(p, i);
    const k = 0.78 + 0.3 * Math.abs(Math.sin(v.x * 3.1 + v.y * 1.7) * Math.cos(v.z * 2.3));
    v.multiplyScalar(k);
    v.y *= 0.72;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  return merge([part(g, 0xb4603e)]);
}

function pole() {
  const wood = 0x6e5440;
  return merge([
    part(new CylinderGeometry(0.13, 0.17, 8, 6), wood, { at: [0, 4, 0] }),
    part(new BoxGeometry(2.4, 0.16, 0.16), wood, { at: [0, 7.4, 0] }),
    part(new CylinderGeometry(0.06, 0.06, 0.25, 5), 0x8fc3c9, { at: [-1, 7.6, 0] }),
    part(new CylinderGeometry(0.06, 0.06, 0.25, 5), 0x8fc3c9, { at: [1, 7.6, 0] }),
  ]);
}

function turbineTower() {
  const white = 0xf3efe8;
  return merge([
    part(new CylinderGeometry(0.9, 1.6, 46, 12), white, { at: [0, 23, 0] }),
    part(new BoxGeometry(2.2, 2.2, 5.5), white, { at: [0, 46.5, -0.8] }),
    part(new ConeGeometry(0.9, 1.6, 10), 0xd8d2c8, { at: [0, 46.5, 2.6], rot: [Math.PI / 2, 0, 0] }),
  ]);
}

function turbineBlades() {
  const parts = [];
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    parts.push(
      part(new BoxGeometry(1.1, 21, 0.25), 0xf6f3ee, {
        at: [Math.sin(a) * 10.5, Math.cos(a) * 10.5, 0],
        rot: [0, 0, -a],
      })
    );
  }
  parts.push(part(new BoxGeometry(1.1, 1.6, 0.26), 0xd24a34, { at: [0, 20.6, 0] }));
  return merge(parts);
}

/* ------------------------------------------------------------ placing --- */

function instanced(geometry, material, list, matrixFor, scene, { shadow = true } = {}) {
  if (!list.length) return null;
  const mesh = new InstancedMesh(geometry, material, list.length);
  const m = new Matrix4();
  list.forEach((item, i) => {
    matrixFor(item, m);
    mesh.setMatrixAt(i, m);
  });
  mesh.castShadow = shadow;
  mesh.receiveShadow = true;
  mesh.computeBoundingSphere();
  scene.add(mesh);
  return mesh;
}

const q = new Quaternion();
const yAxis = new Vector3(0, 1, 0);
const P = new Vector3();
const S = new Vector3();

export function createProps(scene, layout) {
  const props = layout.props;
  const standing = (item, m, sink = 0.15) => {
    q.setFromAxisAngle(yAxis, item.yaw);
    P.set(item.x, item.y - sink, item.z);
    S.setScalar(item.s ?? 1);
    return m.compose(P, q, S);
  };
  for (let arms = 0; arms < 3; arms++) {
    instanced(saguaro(arms), toonFlat, props.cactus.filter((c) => c.arms === arms), (c, m) => standing(c, m), scene);
  }
  instanced(joshua(), toonFlat, props.joshua, (c, m) => standing(c, m), scene);
  instanced(cottonwood(), toonFlat, props.tree, (c, m) => standing(c, m, 0.3), scene);
  const bushes = props.bush.filter((_, i) => (i * 0.618) % 1 < QUALITY.bushes);
  instanced(bush(), toonFlat, bushes, (c, m) => standing(c, m, 0.1), scene, { shadow: false });
  instanced(rockGeo(), toonFlat, props.rock, (r, m) => {
    q.setFromAxisAngle(yAxis, r.yaw);
    return m.compose(P.set(r.x, r.y, r.z), q, S.set(r.r, r.r * 0.9, r.r * 1.1));
  }, scene);
  instanced(pole(), toonFlat, props.pole, (c, m) => standing(c, m, 0.3), scene);

  // Wires between neighbouring poles, sagging.
  {
    const pts = [];
    const list = props.pole;
    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      const b = list[(i + 1) % list.length];
      if (Math.hypot(a.x - b.x, a.z - b.z) > 70) continue;
      for (const side of [-1, 1]) {
        const ax = a.x + Math.cos(a.yaw) * side;
        const az = a.z - Math.sin(a.yaw) * side;
        const bx = b.x + Math.cos(b.yaw) * side;
        const bz = b.z - Math.sin(b.yaw) * side;
        const ay = a.y + 7.25;
        const by = b.y + 7.25;
        let prev = null;
        for (let k = 0; k <= 8; k++) {
          const t = k / 8;
          const p = [ax + (bx - ax) * t, ay + (by - ay) * t - Math.sin(Math.PI * t) * 1.1, az + (bz - az) * t];
          if (prev) pts.push(...prev, ...p);
          prev = p;
        }
      }
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(new Float32Array(pts), 3));
    const lines = new LineSegments(g, new LineBasicMaterial({ color: 0x3a2a24, transparent: true, opacity: 0.6 }));
    scene.add(lines);
  }

  // Turbines: towers stand still, blades turn.
  const towers = instanced(turbineTower(), toonFlat, props.turbine, (t, m) => {
    q.setFromAxisAngle(yAxis, t.yaw);
    return m.compose(P.set(t.x, t.y - 0.5, t.z), q, S.setScalar(1));
  }, scene);
  const blades = new InstancedMesh(turbineBlades(), toonFlat, props.turbine.length);
  blades.castShadow = true;
  blades.frustumCulled = false;
  scene.add(blades);
  const m = new Matrix4();
  const spinQ = new Quaternion();
  const zAxis = new Vector3(0, 0, 1);
  const hub = new Vector3();

  return {
    towers,
    update(t) {
      props.turbine.forEach((tb, i) => {
        q.setFromAxisAngle(yAxis, tb.yaw);
        spinQ.setFromAxisAngle(zAxis, t * 0.9 + tb.phase);
        q.multiply(spinQ);
        hub.set(0, 46.5, 3.2).applyAxisAngle(yAxis, tb.yaw).add(P.set(tb.x, tb.y - 0.5, tb.z));
        m.compose(hub, q, S.setScalar(1));
        blades.setMatrixAt(i, m);
      });
      blades.instanceMatrix.needsUpdate = true;
    },
  };
}

export { toonFlat };
