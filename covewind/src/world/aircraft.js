/**
 * Aeroplanes: the player's, and the neighbours'.
 *
 * A little 1930s parasol floatplane: a teardrop fuselage turned on a lathe,
 * an elliptical wing perched above the open cockpit on struts, a round cowl
 * and a two-blade propeller, and a pair of proper pontoons. Everything is
 * shaped rather than boxed, so the cel shading has curves to draw across.
 *
 * The model carries working control surfaces — ailerons, elevator, rudder —
 * because seeing the aeroplane answer the stick is half of how flying feels.
 */
import {
  AdditiveBlending,
  CircleGeometry,
  CylinderGeometry,
  DoubleSide,
  ExtrudeGeometry,
  Group,
  LatheGeometry,
  Mesh,
  MeshBasicMaterial,
  Quaternion,
  Shape,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
} from 'three';
import { MAT, mat } from '../core/materials.js';
import { clamp, damp, rand, TAU } from '../core/utils.js';
import { createCloth } from './cloth.js';
import { terrainHeightAt } from './terrain.js';

/* -------------------------------------------------------------- helpers --- */

/** A solid of revolution along +z, from [radius, z] pairs nose-last. */
function lathe(profile, segments = 18) {
  const points = profile.map(([r, z]) => new Vector2(Math.max(0.001, r), z));
  const geometry = new LatheGeometry(points, segments);
  geometry.rotateX(Math.PI / 2); // lathe axis y → aeroplane axis z
  return geometry;
}

/**
 * A flat surface from a planform, given as leading- and trailing-edge
 * functions of span. Extruded thin with a rounded edge, lying in the XZ plane
 * with its chord along z (forward positive).
 */
function surface({ span, leading, trailing, thickness = 0.2, steps = 16, bevel = 0.09, from = -1 }) {
  const shape = new Shape();
  const xs = [];
  for (let i = 0; i <= steps; i++) {
    const u = from + ((1 - from) * i) / steps;
    xs.push(u * span);
  }
  shape.moveTo(xs[0], trailing(xs[0]));
  for (const x of xs) shape.lineTo(x, leading(x));
  for (let i = xs.length - 1; i >= 0; i--) shape.lineTo(xs[i], trailing(xs[i]));
  const geometry = new ExtrudeGeometry(shape, {
    depth: thickness,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
    curveSegments: 4,
  });
  geometry.translate(0, 0, -thickness / 2);
  geometry.rotateX(Math.PI / 2); // shape y (chord) → z, extrusion → −y
  geometry.computeVertexNormals();
  return geometry;
}

const _a = new Vector3();
const _b = new Vector3();
const _mid = new Vector3();
const _dir = new Vector3();
const _q = new Quaternion();
const Y = new Vector3(0, 1, 0);

/** A round strut from one point to another. */
function strut(parent, a, b, radius, material) {
  _a.set(...a);
  _b.set(...b);
  const length = _a.distanceTo(_b);
  const mesh = new Mesh(new CylinderGeometry(radius, radius, length, 6), material);
  _mid.addVectors(_a, _b).multiplyScalar(0.5);
  mesh.position.copy(_mid);
  _dir.subVectors(_b, _a).normalize();
  mesh.quaternion.copy(_q.setFromUnitVectors(Y, _dir));
  parent.add(mesh);
  return mesh;
}

/** Elliptical chord: full at the root, rounding off to nothing at the tip. */
const ellipse = (x, span, chord, power = 0.55) =>
  chord * Math.pow(Math.max(0, 1 - (x / span) ** 2), power);

/* ---------------------------------------------------------------- model --- */

/**
 * @param {number} color Fuselage colour.
 * @param {boolean} tiny Smaller build used for the AI aeroplanes: no pilot.
 * @param {object} [scheme] Wing and trim colours.
 */
export function createPlaneModel(color = 0xc9473d, tiny = false, scheme = {}) {
  const group = new Group();
  const s = tiny ? 0.78 : 1;
  const model = new Group();
  model.scale.setScalar(s);
  group.add(model);

  const body = mat(color);
  const wingMat = scheme.wing ? mat(scheme.wing) : MAT.cream;
  const trim = scheme.trim ? mat(scheme.trim) : MAT.cream;
  const metal = MAT.dark;

  /* -- fuselage: a teardrop with a round engine cowl ----------------------- */
  const fuselage = new Mesh(
    lathe(
      [
        [0.02, -6.3],
        [0.28, -6.1],
        [0.55, -5.2],
        [0.82, -3.6],
        [1.08, -1.6],
        [1.26, 0.2],
        [1.34, 1.8],
        [1.32, 3.0],
        [1.22, 3.7],
      ],
      20
    ),
    body
  );
  fuselage.scale.set(0.92, 1.05, 1);
  model.add(fuselage);

  // A cream flash down the side, the kind of livery that is painted by hand.
  const flash = new Mesh(
    lathe([
      [0.02, -5.9],
      [0.6, -5.2],
      [0.88, -3.4],
      [1.1, -1.4],
      [1.25, 0.6],
      [1.3, 2.2],
    ]),
    trim
  );
  flash.scale.set(0.935, 0.42, 1.001);
  flash.position.y = -0.2;
  model.add(flash);

  const cowl = new Mesh(
    lathe([
      [1.22, 3.6],
      [1.4, 3.9],
      [1.46, 4.5],
      [1.38, 5.1],
      [1.1, 5.35],
      [0.9, 5.3],
    ]),
    trim
  );
  model.add(cowl);
  // The engine face inside the ring, and exhaust stubs along the cowl.
  const face = new Mesh(new CircleGeometry(1.0, 16), metal);
  face.position.z = 5.28;
  model.add(face);
  for (let i = 0; i < 3; i++) {
    for (const side of [-1, 1]) {
      const stub = new Mesh(new CylinderGeometry(0.1, 0.13, 0.55, 6), metal);
      stub.rotation.z = Math.PI / 2;
      stub.position.set(side * 1.36, -0.25 - i * 0.28, 3.4 - i * 0.18);
      model.add(stub);
    }
  }

  /* -- propeller --------------------------------------------------------- */
  const propeller = new Group();
  propeller.position.z = 5.55;
  model.add(propeller);
  const spinner = new Mesh(lathe([[0.62, 0], [0.6, 0.35], [0.45, 0.8], [0.02, 1.35]]), MAT.red);
  propeller.add(spinner);
  for (let i = 0; i < 2; i++) {
    const blade = new Mesh(new SphereGeometry(1, 10, 6), MAT.woodDark);
    blade.scale.set(0.32, 3.1, 0.1);
    blade.position.y = (i ? -1 : 1) * 2.9;
    blade.rotation.y = (i ? -1 : 1) * 0.35;
    const tip = new Mesh(new SphereGeometry(1, 8, 5), MAT.yellow);
    tip.scale.set(0.34, 0.45, 0.11);
    tip.position.y = (i ? -1 : 1) * 2.75;
    blade.add(tip);
    tip.scale.divide(blade.scale);
    tip.position.y /= blade.scale.y;
    propeller.add(blade);
  }
  // The blur of a spinning prop: a faint disc that shows up at speed.
  const disc = new Mesh(
    new CircleGeometry(3.2, 28),
    new MeshBasicMaterial({
      color: 0xfff6e0,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
      side: DoubleSide,
      blending: AdditiveBlending,
    })
  );
  disc.position.z = 5.6;
  disc.renderOrder = 4;
  model.add(disc);

  /* -- cockpit ------------------------------------------------------------- */
  const coaming = new Mesh(new TorusGeometry(0.72, 0.13, 6, 16), MAT.woodDark);
  coaming.rotation.x = Math.PI / 2;
  coaming.scale.set(1, 1.35, 1);
  coaming.position.set(0, 1.3, -0.5);
  model.add(coaming);
  const windscreen = new Mesh(new SphereGeometry(0.8, 12, 6, 0, TAU, 0, Math.PI / 2), MAT.glass);
  windscreen.scale.set(0.9, 0.55, 0.4);
  windscreen.position.set(0, 1.2, 0.55);
  model.add(windscreen);
  const headrest = new Mesh(
    lathe([[0.02, -3.6], [0.35, -2.8], [0.5, -1.8], [0.46, -1.35], [0.02, -1.3]], 10),
    body
  );
  headrest.scale.set(1, 0.9, 1);
  headrest.position.y = 1.05;
  model.add(headrest);

  /* -- the wing: elliptical, perched above the cockpit --------------------- */
  const SPAN = 7.2;
  const CHORD = 2.9;
  const AILERON = [3.4, 6.2];
  const inAileron = (x) => Math.abs(x) > AILERON[0] && Math.abs(x) < AILERON[1];
  const wingY = 3.1;
  const wing = new Mesh(
    surface({
      span: SPAN,
      steps: 28,
      leading: (x) => ellipse(x, SPAN, CHORD) * 0.42,
      trailing: (x) => -ellipse(x, SPAN, CHORD) * 0.58 + (inAileron(x) ? 0.72 : 0),
      thickness: 0.22,
      bevel: 0.1,
    }),
    wingMat
  );
  wing.position.set(0, wingY, 0.4);
  model.add(wing);

  // Roundels on the upper wing, for something to read from above.
  for (const side of [-1, 1]) {
    const ring = new Mesh(new CircleGeometry(0.95, 20), body);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(side * 4.8, wingY + 0.24, 0.35);
    model.add(ring);
    const dot = new Mesh(new CircleGeometry(0.45, 16), MAT.cream);
    dot.rotation.x = -Math.PI / 2;
    dot.position.set(side * 4.8, wingY + 0.26, 0.35);
    model.add(dot);
  }

  const ailerons = [];
  // The hinge runs along the notch in the wing's trailing edge; the aileron's
  // own outline is measured from it, so it sits flush at neutral.
  const notch = (x) => 0.4 - ellipse(x, SPAN, CHORD) * 0.58 + 0.72;
  let hinge = 0;
  for (let i = 0; i <= 8; i++) hinge += notch(AILERON[0] + ((AILERON[1] - AILERON[0]) * i) / 8) / 9;
  for (const side of [-1, 1]) {
    const pivot = new Group();
    pivot.position.set(0, wingY, hinge);
    model.add(pivot);
    const aileron = new Mesh(
      surface({
        span: AILERON[1] - 0.05,
        from: (AILERON[0] + 0.05) / (AILERON[1] - 0.05),
        steps: 8,
        leading: (x) => notch(x) - hinge - 0.04,
        trailing: (x) => notch(x) - hinge - 0.7,
        thickness: 0.14,
        bevel: 0.06,
      }),
      trim
    );
    aileron.scale.x = -side; // side −1 is the left wing, which sits at +x
    pivot.add(aileron);
    ailerons.push({ pivot, side });
  }

  // Cabane struts from the fuselage up to the wing, and a V of wing struts
  // down to the lower longerons.
  for (const side of [-1, 1]) {
    strut(model, [side * 0.55, 1.1, 1.2], [side * 1.0, wingY - 0.1, 1.0], 0.07, metal);
    strut(model, [side * 0.55, 1.1, -0.6], [side * 1.0, wingY - 0.1, -0.4], 0.07, metal);
    strut(model, [side * 1.05, -0.5, 0.9], [side * 4.3, wingY - 0.1, 0.9], 0.09, metal);
    strut(model, [side * 1.05, -0.5, 0.2], [side * 4.3, wingY - 0.1, -0.5], 0.09, metal);
  }

  /* -- tail ---------------------------------------------------------------- */
  const TAIL_SPAN = 2.7;
  const tailplane = new Mesh(
    surface({
      span: TAIL_SPAN,
      leading: (x) => ellipse(x, TAIL_SPAN, 1.5) * 0.55,
      trailing: () => 0,
      thickness: 0.12,
      bevel: 0.06,
    }),
    body
  );
  tailplane.position.set(0, 0.35, -5.2);
  model.add(tailplane);

  const elevator = new Group();
  elevator.position.set(0, 0.35, -5.2);
  model.add(elevator);
  const elevatorSurface = new Mesh(
    surface({
      span: TAIL_SPAN,
      leading: () => 0,
      trailing: (x) => -ellipse(x, TAIL_SPAN, 1.3) * 0.6,
      thickness: 0.1,
      bevel: 0.05,
    }),
    trim
  );
  elevator.add(elevatorSurface);

  // Fin and rudder: the same trick, stood on end.
  const finShape = new Shape();
  finShape.moveTo(0, 0);
  finShape.quadraticCurveTo(-0.2, 2.2, -1.0, 2.7);
  finShape.lineTo(-1.2, 2.7);
  finShape.lineTo(-1.2, 0);
  finShape.lineTo(0, 0);
  const fin = new Mesh(
    new ExtrudeGeometry(finShape, { depth: 0.12, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 2 }),
    body
  );
  fin.geometry.translate(0, 0, -0.06);
  fin.rotation.y = -Math.PI / 2; // shape x → −z (aft), extrusion across
  fin.position.set(0, 0.6, -4.2);
  model.add(fin);

  const rudder = new Group();
  rudder.position.set(0, 0.6, -5.4);
  model.add(rudder);
  const rudderShape = new Shape();
  rudderShape.moveTo(0, -0.3);
  rudderShape.lineTo(0, 2.7);
  rudderShape.quadraticCurveTo(-1.0, 2.6, -1.05, 1.2);
  rudderShape.quadraticCurveTo(-1.0, -0.2, 0, -0.3);
  const rudderGeometry = new ExtrudeGeometry(rudderShape, {
    depth: 0.1,
    bevelEnabled: true,
    bevelSize: 0.05,
    bevelThickness: 0.05,
    bevelSegments: 2,
  });
  rudderGeometry.translate(0, 0, -0.05);
  const rudderSurface = new Mesh(rudderGeometry, trim);
  rudderSurface.rotation.y = -Math.PI / 2;
  rudder.add(rudderSurface);

  /* -- floats -------------------------------------------------------------- */
  const floatProfile = [
    [0.02, -4.4],
    [0.3, -4.1],
    [0.55, -2.8],
    [0.72, -0.6],
    [0.78, 1.2],
    [0.74, 2.9],
    [0.55, 3.9],
    [0.25, 4.5],
    [0.02, 4.7],
  ];
  for (const side of [-1, 1]) {
    const pontoon = new Group();
    pontoon.position.set(side * 2.5, -2.6, 0.6);
    model.add(pontoon);
    const hull = new Mesh(lathe(floatProfile, 14), MAT.cream);
    hull.scale.set(1, 0.85, 1);
    pontoon.add(hull);
    const stripe = new Mesh(lathe(floatProfile, 14), body);
    stripe.scale.set(1.02, 0.3, 1.0);
    stripe.position.y = -0.32;
    pontoon.add(stripe);
    // Struts: two pairs up to the fuselage, splayed like an N.
    strut(model, [side * 2.5, -2.3, 2.6], [side * 0.7, -0.9, 2.4], 0.08, metal);
    strut(model, [side * 2.5, -2.3, -0.8], [side * 0.7, -0.9, -0.6], 0.08, metal);
    strut(model, [side * 2.5, -2.3, 2.6], [side * 0.7, -0.9, -0.6], 0.06, metal);
  }
  // A spreader bar between the floats.
  strut(model, [-2.5, -2.2, 1.0], [2.5, -2.2, 1.0], 0.06, metal);

  /* -- pilot --------------------------------------------------------------- */
  let scarf = null;
  if (!tiny) {
    const pilot = new Group();
    pilot.position.set(0, 1.25, -0.55);
    model.add(pilot);
    const shoulders = new Mesh(new SphereGeometry(0.6, 12, 8), mat(0x8a5a3c));
    shoulders.scale.set(1, 0.6, 0.8);
    pilot.add(shoulders);
    const head = new Mesh(new SphereGeometry(0.44, 14, 10), MAT.skin);
    head.position.y = 0.58;
    pilot.add(head);
    const cap = new Mesh(new SphereGeometry(0.47, 14, 8, 0, TAU, 0, Math.PI * 0.55), mat(0x6b4630));
    cap.position.y = 0.62;
    pilot.add(cap);
    for (const side of [-1, 1]) {
      const lens = new Mesh(new TorusGeometry(0.13, 0.05, 6, 12), MAT.brass);
      lens.position.set(side * 0.17, 0.66, 0.4);
      pilot.add(lens);
    }

    scarf = new Group();
    scarf.position.set(0, 1.55, -0.85);
    model.add(scarf);
    const trail = createCloth(scarf, { width: 3.2, height: 0.55, material: MAT.red, phase: 0 });
    trail.rotation.y = Math.PI / 2;
    trail.position.set(0, 0, -1.6);
  }

  group.traverse((o) => {
    if (o.isMesh && o !== disc) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });

  group.userData = { propeller, disc, ailerons, elevator, rudder, scarf };
  return group;
}

/** Deflect the control surfaces to match what the pilot is asking for. */
export function setControlSurfaces(plane, { roll = 0, pitch = 0, yaw = 0 }, dt = 0.016, speed = 40) {
  const { ailerons, elevator, rudder, disc } = plane.userData;
  for (const { pivot, side } of ailerons) {
    pivot.rotation.x = damp(pivot.rotation.x, clamp(roll, -1, 1) * 0.45 * side, 12, dt);
  }
  elevator.rotation.x = damp(elevator.rotation.x, clamp(pitch, -1, 1) * 0.42, 12, dt);
  rudder.rotation.y = damp(rudder.rotation.y, clamp(yaw, -1, 1) * 0.5, 12, dt);
  if (disc) disc.material.opacity = clamp(0.04 + speed / 400, 0.04, 0.22);
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
