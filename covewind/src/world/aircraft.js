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
  Vector3,
} from 'three';
import { MAT, mat } from '../core/materials.js';
import { clamp, damp, rand, TAU } from '../core/utils.js';
import { createCloth } from './cloth.js';
import { terrainHeightAt } from './terrain.js';

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

  // Floats instead of wheels: this aeroplane lives on the water, and the cove
  // is somewhere to land rather than only to look at.
  for (const side of [-1, 1]) {
    const float = new Group();
    float.position.set(side * 2.9 * s, -2.5 * s, 0.9 * s);
    group.add(float);

    const hull = new Mesh(new BoxGeometry(1.5 * s, 1.15 * s, 8.4 * s), MAT.cream);
    hull.castShadow = true;
    float.add(hull);

    // Upswept bow and a planing step, which is what makes a float read as one.
    const bow = new Mesh(new ConeGeometry(1.05 * s, 3.2 * s, 4), MAT.cream);
    bow.rotation.x = Math.PI / 2;
    bow.rotation.z = Math.PI / 4;
    bow.scale.set(1, 1, 0.72);
    bow.position.set(0, 0.16 * s, 5.3 * s);
    bow.castShadow = true;
    float.add(bow);

    const keel = new Mesh(new BoxGeometry(1.1 * s, 0.5 * s, 3.4 * s), MAT.red);
    keel.position.set(0, -0.72 * s, -1.1 * s);
    float.add(keel);

    const stern = new Mesh(new BoxGeometry(1.4 * s, 0.9 * s, 1.2 * s), MAT.cream);
    stern.position.set(0, 0.2 * s, -4.6 * s);
    float.add(stern);

    // Struts up to the fuselage and the lower wing.
    for (const z of [2.2, -1.6]) {
      const strut = new Mesh(new BoxGeometry(0.2 * s, 2 * s, 0.5 * s), MAT.dark);
      strut.position.set(side * 2.9 * s, -1.5 * s, z * s);
      group.add(strut);
    }
    const brace = new Mesh(new BoxGeometry(2.6 * s, 0.18 * s, 0.4 * s), MAT.dark);
    brace.position.set(side * 1.6 * s, -1.9 * s, 0.6 * s);
    brace.rotation.z = side * 0.42;
    group.add(brace);
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
  elevator.rotation.x = damp(elevator.rotation.x, clamp(pitch, -1, 1) * 0.42, 12, dt);
  rudder.rotation.y = damp(rudder.rotation.y, clamp(yaw, -1, 1) * 0.5, 12, dt);
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

/** How far above the ground the neighbours insist on staying. */
const AI_CLEARANCE = 46;

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

    // Climb over the island rather than through it: look at the ground under
    // the aeroplane and a little way ahead, and take the higher of the two.
    const lookAhead = 90;
    const ahead = a + 0.35;
    const aheadR = p.figure ? p.radius * (0.65 + 0.35 * Math.cos(ahead * 2)) : p.radius;
    const ground = Math.max(
      terrainHeightAt(_pos.x, _pos.z),
      terrainHeightAt(
        p.centre.x + Math.cos(ahead) * aheadR,
        p.centre.z + Math.sin(ahead) * (p.figure ? aheadR * 1.15 : aheadR)
      ),
      terrainHeightAt(_pos.x + Math.sin(p.group.rotation.y) * lookAhead, _pos.z + Math.cos(p.group.rotation.y) * lookAhead)
    );
    const floor = ground + AI_CLEARANCE;
    if (_pos.y < floor) _pos.y = floor;
    // Ease into the climb so they rise like an aeroplane rather than a lift —
    // but climb away from rising ground faster than they settle back down.
    const rate = _pos.y > (p.height ?? _pos.y) ? 3.4 : 0.9;
    p.height = p.height === undefined ? _pos.y : damp(p.height, _pos.y, rate, dt);
    _pos.y = p.height;

    const dx = _pos.x - p.group.position.x;
    const dy = _pos.y - p.group.position.y;
    const dz = _pos.z - p.group.position.z;
    p.group.position.copy(_pos);
    if (dx * dx + dz * dz > 1e-5) p.group.rotation.y = Math.atan2(dx, dz);
    // Nose follows the climb or descent.
    const climb = Math.atan2(dy, Math.max(0.001, Math.hypot(dx, dz)));
    p.group.rotation.x = damp(p.group.rotation.x, -climb * 0.6 - 0.06 * Math.sin(t + p.bob), 3, dt);
    p.group.rotation.z = damp(p.group.rotation.z, p.figure ? 0.34 * Math.cos(a * 2) : 0.3, 2, dt);
    p.group.userData.propeller.rotation.z += dt * 34;
  }
}
