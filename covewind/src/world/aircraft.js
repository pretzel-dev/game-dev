/**
 * Aeroplanes: the player's, and the neighbours'.
 *
 * The model carries working control surfaces — ailerons, elevator, rudder —
 * because seeing the aeroplane answer the stick is half of how flying feels.
 */
import {
  BoxGeometry,
  CapsuleGeometry,
  ConeGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  SphereGeometry,
  TorusGeometry,
  Vector3,
} from 'three';
import { MAT, mat } from '../core/materials.js';
import { clamp, damp, rand, TAU } from '../core/utils.js';
import { createCloth } from './cloth.js';

/**
 * @param {number} color Fuselage colour.
 * @param {boolean} tiny Smaller, simpler build used for the AI aeroplanes.
 */
export function createPlaneModel(color = 0xc9473d, tiny = false) {
  const group = new Group();
  const body = mat(color);
  const s = tiny ? 0.74 : 1;

  const fuselage = new Mesh(new CapsuleGeometry(1.12 * s, 5.1 * s, 6, 10), body);
  fuselage.rotation.x = Math.PI / 2;
  fuselage.scale.z = 1.1;
  group.add(fuselage);

  const nose = new Mesh(new ConeGeometry(1.05 * s, 2.7 * s, 10), MAT.cream);
  nose.rotation.x = Math.PI / 2;
  nose.position.z = 4.95 * s;
  group.add(nose);

  // Upper wing, with a pair of ailerons that follow the stick.
  const wing = new Mesh(new BoxGeometry(13 * s, 0.38 * s, 2.5 * s), body);
  wing.position.set(0, 0.15 * s, -0.3 * s);
  group.add(wing);

  const ailerons = [];
  for (const side of [-1, 1]) {
    const pivot = new Group();
    pivot.position.set(side * 4.6 * s, 0.15 * s, -1.5 * s);
    group.add(pivot);
    const aileron = new Mesh(new BoxGeometry(3.4 * s, 0.3 * s, 0.9 * s), MAT.cream);
    aileron.position.z = -0.45 * s;
    pivot.add(aileron);
    ailerons.push({ pivot, side });
  }

  // Lower wing and struts — the little biplane silhouette reads well from above.
  const lower = new Mesh(new BoxGeometry(10 * s, 0.28 * s, 1.7 * s), MAT.cream);
  lower.position.set(0, -0.85 * s, 0.45 * s);
  group.add(lower);
  for (const side of [-1, 1]) {
    const strut = new Mesh(new BoxGeometry(0.18 * s, 1.2 * s, 0.7 * s), MAT.dark);
    strut.position.set(side * 3.4 * s, -0.35 * s, 0.1 * s);
    group.add(strut);
  }

  // Tail: fixed surfaces plus a moving elevator and rudder.
  const tailplane = new Mesh(new BoxGeometry(5.4 * s, 0.26 * s, 1.3 * s), body);
  tailplane.position.z = -4.9 * s;
  group.add(tailplane);

  const elevator = new Group();
  elevator.position.set(0, 0, -5.5 * s);
  group.add(elevator);
  const elevatorSurface = new Mesh(new BoxGeometry(5.2 * s, 0.24 * s, 0.9 * s), MAT.cream);
  elevatorSurface.position.z = -0.45 * s;
  elevator.add(elevatorSurface);

  const fin = new Mesh(new BoxGeometry(0.26 * s, 2.9 * s, 1.5 * s), body);
  fin.position.set(0, 1.45 * s, -5 * s);
  group.add(fin);

  const rudder = new Group();
  rudder.position.set(0, 1.45 * s, -5.7 * s);
  group.add(rudder);
  const rudderSurface = new Mesh(new BoxGeometry(0.22 * s, 2.5 * s, 1 * s), MAT.cream);
  rudderSurface.position.z = -0.5 * s;
  rudder.add(rudderSurface);

  const cockpit = new Mesh(new SphereGeometry(0.84 * s, 10, 7), MAT.dark);
  cockpit.scale.set(1, 0.7, 1.3);
  cockpit.position.set(0, 0.88 * s, 0.75 * s);
  group.add(cockpit);

  // Undercarriage.
  const axle = new Mesh(new CylinderGeometry(0.12 * s, 0.12 * s, 5.4 * s, 6), MAT.dark);
  axle.rotation.z = Math.PI / 2;
  axle.position.set(0, -1.2 * s, 1.5 * s);
  group.add(axle);
  for (const side of [-1, 1]) {
    const wheel = new Mesh(new TorusGeometry(0.7 * s, 0.18 * s, 6, 10), MAT.dark);
    wheel.rotation.y = Math.PI / 2;
    wheel.position.set(side * 2.6 * s, -1.72 * s, 1.5 * s);
    group.add(wheel);
    const spat = new Mesh(new ConeGeometry(0.5 * s, 1.6 * s, 6), MAT.cream);
    spat.rotation.x = Math.PI / 2;
    spat.position.set(side * 2.6 * s, -1.3 * s, 1.7 * s);
    group.add(spat);
  }

  const propeller = new Group();
  propeller.position.z = 6.15 * s;
  group.add(propeller);
  for (let i = 0; i < 2; i++) {
    const blade = new Mesh(new BoxGeometry(0.36 * s, 6.8 * s, 0.14 * s), MAT.dark);
    blade.rotation.z = (i * Math.PI) / 2;
    propeller.add(blade);
  }
  const spinner = new Mesh(new ConeGeometry(0.5 * s, 1.1 * s, 8), MAT.red);
  spinner.rotation.x = Math.PI / 2;
  spinner.position.z = 6.5 * s;
  group.add(spinner);

  let scarf = null;
  if (!tiny) {
    const pilot = new Mesh(new SphereGeometry(0.54, 9, 7), MAT.skin);
    pilot.position.set(0, 1.3, 0.5);
    group.add(pilot);
    const goggles = new Mesh(new BoxGeometry(1.05, 0.3, 0.2), MAT.dark);
    goggles.position.set(0, 1.42, 0.96);
    group.add(goggles);

    scarf = new Group();
    scarf.position.set(0, 1.15, 0.1);
    group.add(scarf);
    const trail = createCloth(scarf, { width: 4.2, height: 0.9, material: MAT.red, phase: 0 });
    trail.rotation.y = Math.PI / 2;
    trail.position.set(0, 0, -2.1);
  }

  group.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });

  group.userData = { propeller, ailerons, elevator, rudder, scarf };
  return group;
}

/** Deflect the control surfaces to match what the pilot is asking for. */
export function setControlSurfaces(plane, { roll = 0, pitch = 0, yaw = 0 }, dt = 0.016) {
  const { ailerons, elevator, rudder } = plane.userData;
  for (const { pivot, side } of ailerons) {
    pivot.rotation.x = damp(pivot.rotation.x, clamp(roll, -1, 1) * 0.5 * side, 12, dt);
  }
  elevator.rotation.x = damp(elevator.rotation.x, clamp(-pitch, -1, 1) * 0.42, 12, dt);
  rudder.rotation.y = damp(rudder.rotation.y, clamp(-yaw, -1, 1) * 0.5, 12, dt);
}

/* ---------------------------------------------------------- neighbours --- */

export function createAIPlanes(scene) {
  const planes = [];
  const specs = [
    { colour: 0xe1a94b, radius: 360, y: 96, speed: 0.075, figure: false },
    { colour: 0x477a92, radius: 480, y: 142, speed: 0.058, figure: false },
    { colour: 0x7f9d54, radius: 250, y: 68, speed: 0.1, figure: true },
  ];

  for (const spec of specs) {
    const group = createPlaneModel(spec.colour, true);
    scene.add(group);
    planes.push({
      group,
      ...spec,
      phase: rand(0, TAU),
      centre: new Vector3(rand(-50, 50), 0, rand(-40, 40)),
      bob: rand(0, TAU),
      prev: new Vector3(),
    });
  }
  return planes;
}

const _pos = new Vector3();

export function updateAIPlanes(planes, t, dt) {
  for (const p of planes) {
    const a = p.phase + t * p.speed;
    // A lazy figure-eight for one of them, circles for the others.
    const r = p.figure ? p.radius * (0.65 + 0.35 * Math.cos(a * 2)) : p.radius;
    _pos.set(
      p.centre.x + Math.cos(a) * r,
      p.y + Math.sin(t * 0.55 + p.bob) * 11,
      p.centre.z + Math.sin(a) * (p.figure ? r * 1.15 : r)
    );

    const dx = _pos.x - p.group.position.x;
    const dz = _pos.z - p.group.position.z;
    p.group.position.copy(_pos);
    if (dx * dx + dz * dz > 1e-5) p.group.rotation.y = Math.atan2(dx, dz);
    p.group.rotation.x = -0.06 * Math.sin(t + p.bob);
    p.group.rotation.z = damp(p.group.rotation.z, p.figure ? -0.34 * Math.cos(a * 2) : -0.3, 2, dt);
    p.group.userData.propeller.rotation.z += dt * 34;
  }
}
