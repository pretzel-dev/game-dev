/**
 * The buggy: a low tub with a tube cage, long-travel shocks, fat knobbly
 * tyres, a rear wing and two whip flags. All primitives, all toon-shaded.
 *
 * Car frame: +z forward, +x left, +y up, origin at the centre of mass (the
 * same frame as the physics).
 */
import {
  BoxGeometry,
  CylinderGeometry,
  ExtrudeGeometry,
  Group,
  Mesh,
  Shape,
  SphereGeometry,
  TorusGeometry,
  Vector3,
  DoubleSide,
  BufferGeometry,
  BufferAttribute,
} from 'three';
import { mat } from '../render/materials.js';
import { TUNING as T } from './tuning.js';

export const LIVERIES = {
  blue: { body: 0x2f59c9, accent: 0xd8352a, trim: 0xf2efe8, flag: 0xff7a1a },
  red: { body: 0xd13a2c, accent: 0x1f2f6b, trim: 0xf2efe8, flag: 0xffd23a },
  yellow: { body: 0xf2b51d, accent: 0x222326, trim: 0xf2efe8, flag: 0xe8402d },
  green: { body: 0x2f9a58, accent: 0xf1e6c8, trim: 0x1d2a22, flag: 0xff5a8a },
};

function tube(a, b, r, material) {
  const va = new Vector3(...a);
  const vb = new Vector3(...b);
  const length = va.distanceTo(vb);
  const g = new CylinderGeometry(r, r, length, 6);
  const m = new Mesh(g, material);
  m.position.copy(va).add(vb).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), vb.clone().sub(va).normalize());
  m.castShadow = true;
  return m;
}

function box(w, h, d, material, at, rot = [0, 0, 0]) {
  const m = new Mesh(new BoxGeometry(w, h, d), material);
  m.position.set(...at);
  m.rotation.set(...rot);
  m.castShadow = true;
  return m;
}

function sideProfileBody(material) {
  // Side view in (z, y): a wedge nose, the cockpit tub, the engine deck.
  const s = new Shape();
  s.moveTo(2.05, -0.28);
  s.lineTo(1.25, -0.42);
  s.lineTo(-1.55, -0.42);
  s.lineTo(-1.75, -0.12);
  s.lineTo(-1.6, 0.18);
  s.lineTo(-0.7, 0.2);
  s.lineTo(-0.55, 0.05);
  s.lineTo(0.75, 0.05);
  s.lineTo(1.35, 0.0);
  s.lineTo(2.1, -0.16);
  s.closePath();
  const g = new ExtrudeGeometry(s, { depth: 1.36, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 1 });
  g.translate(0, 0, -0.68);
  // Extruded along +z; turn it so the profile's x runs along the car's z.
  g.rotateY(-Math.PI / 2);
  const m = new Mesh(g, material);
  m.castShadow = true;
  return m;
}

function wheel(livery) {
  const g = new Group();
  const tyre = new Mesh(new CylinderGeometry(T.wheelRadius, T.wheelRadius, 0.4, 16), mat(0x2a2624, { flat: true }));
  tyre.rotation.z = Math.PI / 2;
  tyre.castShadow = true;
  g.add(tyre);
  // Knobbly tread: a ring of little blocks.
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const k = new Mesh(new BoxGeometry(0.42, 0.08, 0.13), mat(0x221f1d));
    k.position.set(0, Math.cos(a) * T.wheelRadius, Math.sin(a) * T.wheelRadius);
    k.rotation.x = -a;
    g.add(k);
  }
  const rim = new Mesh(new CylinderGeometry(0.26, 0.26, 0.42, 10), mat(livery.trim));
  rim.rotation.z = Math.PI / 2;
  g.add(rim);
  const hub = new Mesh(new CylinderGeometry(0.09, 0.09, 0.44, 6), mat(livery.accent));
  hub.rotation.z = Math.PI / 2;
  g.add(hub);
  return g;
}

/** A flag on a whip: a triangle that we can flap by moving its tip. */
function whipFlag(color) {
  const g = new Group();
  const pole = new Mesh(new CylinderGeometry(0.015, 0.025, 2.4, 4), mat(0x222222));
  pole.position.y = 1.2;
  g.add(pole);
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(new Float32Array([0, 2.4, 0, 0, 2.05, 0, 0, 2.22, -0.55]), 3));
  geo.computeVertexNormals();
  const flag = new Mesh(geo, mat(color, { side: DoubleSide }));
  g.add(flag);
  g.userData.flag = geo;
  return g;
}

export function createCarModel(liveryName = 'blue') {
  const livery = LIVERIES[liveryName] || LIVERIES.blue;
  const root = new Group();
  const body = new Group(); // everything on the springs
  root.add(body);

  const paint = mat(livery.body);
  const accent = mat(livery.accent);
  const trim = mat(livery.trim);
  const dark = mat(0x26262a);
  const cage = mat(0x1f2023);

  body.add(sideProfileBody(paint));
  // Side pods with the accent colour and a white stripe.
  for (const side of [-1, 1]) {
    body.add(box(0.22, 0.32, 2.2, accent, [side * 0.82, -0.18, 0.05]));
    body.add(box(0.05, 0.08, 2.0, trim, [side * 0.95, -0.12, 0.05]));
  }
  // Nose number board.
  body.add(box(0.7, 0.04, 0.5, trim, [0, -0.13, 1.55], [-0.2, 0, 0]));
  // Headlights.
  for (const side of [-1, 1]) {
    const l = new Mesh(new SphereGeometry(0.11, 8, 6), mat(0xfff4c8, { emissive: 0x6b5a2a }));
    l.position.set(side * 0.42, -0.08, 1.95);
    body.add(l);
  }

  // Tube cage.
  const cr = 0.045;
  const hoopF = [[0.68, 0.05, 0.55], [0.58, 1.05, 0.25], [-0.58, 1.05, 0.25], [-0.68, 0.05, 0.55]];
  const hoopR = [[0.68, 0.2, -0.65], [0.6, 1.08, -0.55], [-0.6, 1.08, -0.55], [-0.68, 0.2, -0.65]];
  for (const hoop of [hoopF, hoopR]) for (let i = 0; i < hoop.length - 1; i++) body.add(tube(hoop[i], hoop[i + 1], cr, cage));
  body.add(tube(hoopF[1], hoopR[1], cr, cage));
  body.add(tube(hoopF[2], hoopR[2], cr, cage));
  body.add(tube(hoopF[1], hoopR[2], cr * 0.8, cage));
  body.add(tube([0.58, 1.05, 0.25], [0.5, 0.0, 1.35], cr, cage));
  body.add(tube([-0.58, 1.05, 0.25], [-0.5, 0.0, 1.35], cr, cage));
  body.add(tube([0.6, 1.08, -0.55], [0.55, 0.2, -1.5], cr, cage));
  body.add(tube([-0.6, 1.08, -0.55], [-0.55, 0.2, -1.5], cr, cage));
  // Roof panel in body colour.
  body.add(box(1.12, 0.05, 0.86, paint, [0, 1.09, -0.15]));

  // Driver: seat, shoulders, helmet with a dark visor.
  body.add(box(0.5, 0.6, 0.12, dark, [0, 0.25, -0.32], [-0.15, 0, 0]));
  body.add(box(0.46, 0.34, 0.3, mat(0x3c4b6e), [0, 0.32, -0.14]));
  const helmet = new Mesh(new SphereGeometry(0.19, 10, 8), trim);
  helmet.position.set(0, 0.68, -0.1);
  body.add(helmet);
  body.add(box(0.26, 0.1, 0.08, dark, [0, 0.69, 0.07]));
  body.add(tube([0.12, 0.42, 0.25], [0, 0.42, 0.5], 0.04, mat(0x3c4b6e)));
  body.add(tube([-0.12, 0.42, 0.25], [0, 0.42, 0.5], 0.04, mat(0x3c4b6e)));
  const wheelRim = new Mesh(new TorusGeometry(0.15, 0.025, 4, 12), dark);
  wheelRim.position.set(0, 0.48, 0.52);
  wheelRim.rotation.x = -0.5;
  body.add(wheelRim);

  // Engine and exhausts behind the driver.
  body.add(box(0.8, 0.4, 0.7, mat(0x55575c), [0, 0.32, -1.1]));
  for (const side of [-1, 1]) {
    body.add(tube([side * 0.25, 0.35, -1.3], [side * 0.3, 0.45, -1.85], 0.07, mat(0x8b8780)));
  }
  // Rear wing.
  body.add(box(1.7, 0.05, 0.42, accent, [0, 1.15, -1.55], [0.12, 0, 0]));
  for (const side of [-1, 1]) {
    body.add(box(0.04, 0.3, 0.42, paint, [side * 0.86, 1.08, -1.55]));
    body.add(tube([side * 0.35, 0.45, -1.35], [side * 0.35, 1.12, -1.55], 0.03, cage));
  }

  // Whip flags at the back corners.
  const flags = [];
  for (const side of [-1, 1]) {
    const f = whipFlag(livery.flag);
    f.position.set(side * 0.62, 1.05, -0.62);
    body.add(f);
    flags.push(f);
  }

  // Wheels and shocks (in root, not body: they move on their own).
  const wheels = [];
  const shocks = [];
  for (const [x, z] of [
    [T.track, T.front],
    [-T.track, T.front],
    [T.track, T.rear],
    [-T.track, T.rear],
  ]) {
    const pivot = new Group(); // steers
    pivot.position.set(x, T.mountHeight - T.restLength * 0.7, z);
    const spinner = wheel(livery);
    pivot.add(spinner);
    root.add(pivot);
    wheels.push({ pivot, spinner });
    const shock = new Mesh(new CylinderGeometry(0.06, 0.06, 1, 6), accent);
    shock.castShadow = true;
    root.add(shock);
    shocks.push({ mesh: shock, top: new Vector3(x * 0.55, 0.15, z * 0.92) });
  }

  root.userData = { body, wheels, shocks, flags };
  return root;
}

const up = new Vector3(0, 1, 0);
const tmp = new Vector3();
const hub = new Vector3();

/** Pose the model from the physics state. */
export function poseCar(model, car, dt, t) {
  model.position.copy(car.pos);
  model.quaternion.copy(car.quat);
  const { body, wheels, shocks, flags } = model.userData;
  car.wheels.forEach((w, i) => {
    const wm = wheels[i];
    const y = T.mountHeight - w.length;
    wm.pivot.position.y += (y - wm.pivot.position.y) * Math.min(1, dt * 30);
    wm.pivot.rotation.y = w.front ? -car.steer : 0;
    wm.spinner.rotation.x = w.spin;
    const s = shocks[i];
    hub.copy(wm.pivot.position);
    hub.x *= 0.92;
    s.mesh.position.copy(s.top).add(hub).multiplyScalar(0.5);
    tmp.copy(hub).sub(s.top);
    s.mesh.scale.set(1, tmp.length(), 1);
    s.mesh.quaternion.setFromUnitVectors(up, tmp.normalize());
  });
  // The body sways a touch on its springs: a little squat and roll.
  const ax = car.wheels[0].length + car.wheels[2].length - car.wheels[1].length - car.wheels[3].length;
  const az = car.wheels[0].length + car.wheels[1].length - car.wheels[2].length - car.wheels[3].length;
  body.rotation.z += (-ax * 0.12 - body.rotation.z) * Math.min(1, dt * 10);
  body.rotation.x += (az * 0.1 - body.rotation.x) * Math.min(1, dt * 10);
  // Flags: lean back with speed, flutter.
  const lean = Math.min(1.1, car.speed / 30);
  flags.forEach((f, i) => {
    f.rotation.x = -lean * 0.45 + Math.sin(t * 9 + i) * 0.04 * lean;
    f.rotation.z = Math.sin(t * 5.3 + i * 2) * 0.05;
    const pos = f.userData.flag.attributes.position;
    pos.setX(2, Math.sin(t * 22 + i) * 0.12 * (0.3 + lean));
    pos.setZ(2, -0.55 + Math.sin(t * 15 + i) * 0.04);
    pos.needsUpdate = true;
  });
}

