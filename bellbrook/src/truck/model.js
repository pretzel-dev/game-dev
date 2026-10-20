/**
 * The fire engine: a chunky toy with a big cab, shiny lockers down the
 * sides, a ladder on a turntable, a water cannon on the roof, blue lights
 * that flash with the siren, and a brass bell on the front.
 *
 * Built facing -z with its wheels on y = 0. `poseTruck` places it from the
 * physics each frame, leans it in the turns, spins the wheels, points the
 * water cannon and raises the ladder.
 */
import { Group, Mesh, MeshLambertMaterial, MeshPhongMaterial, Object3D, PointLight, SpotLight, Vector3 } from 'three';
import { Builder, SHAPES } from '../render/builder.js';
import { angleDelta, clamp, damp } from '../core/utils.js';

export const PAINTS = {
  red: 0xd8252b,
  yellow: 0xf2c21b,
  blue: 0x2f6fd8,
  green: 0x4fae3a,
  pink: 0xf06aa8,
};

const CHROME = 0xe4e8ee;
const DARK = 0x2a2d34;
const GLASS = 0x2f4a6a;
const WHITE = 0xfdfbf6;
const GOLD = 0xf2c21b;
const TYRE = 0x25262b;

function wheelGeometry() {
  const b = new Builder();
  b.add(SHAPES.cyl(18), 0, 0, 0, 1.1, 0.5, 1.1, TYRE, 0, 0, Math.PI / 2);
  b.add(SHAPES.cyl(12), 0.04, 0, 0, 0.62, 0.52, 0.62, CHROME, 0, 0, Math.PI / 2);
  b.add(SHAPES.cyl(8), 0.06, 0, 0, 0.22, 0.56, 0.22, 0xd8252b, 0, 0, Math.PI / 2);
  // A spoke so you can see them turn.
  b.add(SHAPES.box(), 0.07, 0, 0, 0.5, 0.08, 0.16, DARK);
  return b.geometry();
}

export function createTruckModel(paint = 'red') {
  const root = new Group();
  const body = new Group(); // leans and bounces on the springs
  root.add(body);
  const mat = new MeshLambertMaterial({ vertexColors: true });
  const shiny = new MeshPhongMaterial({ vertexColors: true, shininess: 70, specular: 0x666666 });
  const color = PAINTS[paint] ?? PAINTS.red;

  /* ----------------------------------------------------------- the body --- */
  const b = new Builder();
  // Chassis and bumpers.
  b.box(0, 0.45, 0.2, 2.2, 0.45, 7.0, DARK);
  b.box(0, 0.5, -3.55, 2.7, 0.42, 0.3, CHROME);
  b.box(0, 0.55, 3.62, 2.5, 0.32, 0.22, DARK);
  // Cab.
  b.box(0, 0.85, -2.45, 2.6, 2.05, 2.1, color);
  b.box(0, 2.9, -2.45, 2.5, 0.12, 2.0, color);
  b.box(0, 1.95, -3.51, 2.3, 0.85, 0.06, GLASS); // windscreen
  for (const sx of [-1, 1]) {
    b.box(sx * 1.31, 1.95, -2.6, 0.04, 0.8, 1.2, GLASS); // side windows
    b.box(sx * 1.32, 1.15, -2.45, 0.04, 0.1, 2.0, WHITE);
    b.box(sx * 1.45, 2.05, -3.35, 0.12, 0.45, 0.06, DARK); // mirrors
    b.box(sx * 1.38, 2.1, -3.35, 0.18, 0.04, 0.04, DARK);
  }
  // Grille, headlights, and the brass bell.
  b.box(0, 0.95, -3.51, 1.2, 0.55, 0.06, CHROME);
  for (let k = 0; k < 4; k++) b.box(0, 1.0 + k * 0.12, -3.54, 1.1, 0.04, 0.02, DARK);
  for (const sx of [-1, 1]) {
    b.add(SHAPES.cyl(14), sx * 0.95, 1.18, -3.52, 0.42, 0.08, 0.42, 0xfff6d0, 0, Math.PI / 2);
    b.add(SHAPES.cyl(14), sx * 0.95, 1.18, -3.5, 0.52, 0.06, 0.52, CHROME, 0, Math.PI / 2);
  }
  b.add(SHAPES.cone(14), -0.75, 1.62, -3.68, 0.34, 0.3, 0.34, GOLD);
  b.ball(-0.75, 1.8, -3.68, 0.1, GOLD);
  // Rear body.
  b.box(0, 0.85, 1.25, 2.6, 1.95, 4.7, color);
  b.box(0, 2.8, 1.25, 2.5, 0.08, 4.6, 0xb8bec6);
  for (const sx of [-1, 1]) {
    // Shiny roller-door lockers, three a side.
    for (let k = 0; k < 3; k++) {
      const z = -0.25 + k * 1.45;
      b.box(sx * 1.31, 1.25, z, 0.04, 1.35, 1.25, CHROME);
      for (let r = 0; r < 6; r++) b.box(sx * 1.335, 1.32 + r * 0.21, z, 0.02, 0.03, 1.2, 0xb8bec6);
    }
    // A white stripe and a gold one.
    b.box(sx * 1.32, 0.95, 0.2, 0.04, 0.16, 7.0, WHITE);
    b.box(sx * 1.32, 0.88, 0.2, 0.04, 0.05, 7.0, GOLD);
    // The hose reel on the side.
    b.add(SHAPES.torus(0.35, 0.14), sx * 1.38, 2.25, 3.0, 1, 1, 1, WHITE, Math.PI / 2);
    b.add(SHAPES.cyl(10), sx * 1.36, 2.25, 3.0, 0.4, 0.12, 0.4, color, 0, 0, Math.PI / 2);
  }
  // Rear: steps, lights, a big hose coil.
  b.box(0, 0.4, 3.75, 1.6, 0.12, 0.4, CHROME);
  for (const sx of [-1, 1]) b.box(sx * 1.05, 1.0, 3.61, 0.36, 0.5, 0.06, 0xe2504a);
  b.box(0, 1.2, 3.61, 1.3, 1.1, 0.04, CHROME);
  // Ladder rest over the cab.
  b.box(0, 2.95, -2.8, 0.2, 0.55, 0.2, DARK);
  // Light bar base.
  b.box(0, 2.98, -2.3, 2.0, 0.12, 0.45, DARK);
  // Wheel arches.
  for (const z of [-2.35, 1.55, 2.75]) {
    for (const sx of [-1, 1]) b.box(sx * 1.2, 1.12, z, 0.3, 0.12, 1.3, DARK);
  }
  const bodyMesh = new Mesh(b.geometry(), shiny);
  bodyMesh.castShadow = true;
  body.add(bodyMesh);

  // Crew in the cab: two firefighters in yellow helmets.
  const crew = new Builder();
  for (const sx of [-0.55, 0.55]) {
    crew.ball(sx, 2.05, -2.7, 0.24, 0xf0c8a0);
    crew.add(SHAPES.sphere(10, 6), sx, 2.2, -2.7, 0.56, 0.36, 0.6, GOLD);
    crew.box(sx, 1.4, -2.6, 0.6, 0.5, 0.4, 0x2a2f3a);
  }
  body.add(new Mesh(crew.geometry(), mat));

  /* -------------------------------------------------- flashing lights --- */
  const lightMats = [0, 1].map(() => new MeshLambertMaterial({ color: 0x2a4aa0, emissive: 0x4a8aff, emissiveIntensity: 0 }));
  const lightMeshes = [-1, 1].map((sx, k) => {
    const m = new Mesh(SHAPES.box(), lightMats[k]);
    m.scale.set(0.75, 0.28, 0.4);
    m.position.set(sx * 0.55, 3.24, -2.3);
    body.add(m);
    return m;
  });
  // Little ones on the front grille too.
  [-1, 1].forEach((sx, k) => {
    const m = new Mesh(SHAPES.box(), lightMats[k]);
    m.scale.set(0.22, 0.14, 0.08);
    m.position.set(sx * 0.45, 0.82, -3.71);
    body.add(m);
  });
  const blue = new PointLight(0x4a8aff, 0, 22, 1.6);
  blue.position.set(0, 4, -2.3);
  body.add(blue);
  const headlamp = new SpotLight(0xfff1d0, 0, 45, 0.6, 0.6, 1.2);
  headlamp.position.set(0, 1.3, -3.6);
  headlamp.target.position.set(0, 0, -16);
  body.add(headlamp, headlamp.target);

  /* --------------------------------------------------- the water cannon --- */
  const cannonYaw = new Group();
  cannonYaw.position.set(0, 2.85, -0.4);
  body.add(cannonYaw);
  const cb = new Builder();
  cb.cyl(0, 0, 0, 0.32, 0.3, CHROME, 12);
  cb.box(0, 0.3, 0, 0.24, 0.35, 0.24, color);
  cannonYaw.add(new Mesh(cb.geometry(), shiny));
  const cannonPitch = new Group();
  cannonPitch.position.set(0, 0.55, 0);
  cannonYaw.add(cannonPitch);
  const bb = new Builder();
  bb.add(SHAPES.cyl(10), 0, 0, -0.5, 0.2, 1.1, 0.2, CHROME, 0, Math.PI / 2);
  bb.add(SHAPES.cyl(10), 0, 0, -1.08, 0.3, 0.16, 0.3, color, 0, Math.PI / 2);
  bb.ball(0, 0, 0, 0.17, CHROME);
  const barrel = new Mesh(bb.geometry(), shiny);
  barrel.castShadow = true;
  cannonPitch.add(barrel);
  const nozzle = new Object3D();
  nozzle.position.set(0, 0, -1.2);
  cannonPitch.add(nozzle);

  /* ----------------------------------------------------------- the ladder --- */
  const turntable = new Group();
  turntable.position.set(0, 2.85, 2.7);
  body.add(turntable);
  const tb = new Builder();
  tb.cyl(0, 0, 0, 0.75, 0.25, CHROME, 16);
  tb.box(0, 0.25, 0, 0.9, 0.5, 0.9, color);
  turntable.add(new Mesh(tb.geometry(), shiny));
  const ladderPitch = new Group();
  ladderPitch.position.set(0, 0.6, 0);
  turntable.add(ladderPitch);
  const lower = ladderSection(5.6, 0.95, CHROME);
  ladderPitch.add(lower);
  const upper = ladderSection(5.0, 0.72, WHITE);
  upper.position.set(0, 0.16, -0.3);
  ladderPitch.add(upper);
  const tip = new Object3D();
  upper.add(tip);
  tip.position.set(0, 0.2, -5.0);

  /* ------------------------------------------------------------- wheels --- */
  const wheelGeo = wheelGeometry();
  const wheels = [];
  for (const [z, steer] of [
    [-2.35, true],
    [1.55, false],
    [2.75, false],
  ]) {
    for (const sx of [-1, 1]) {
      const pivot = new Group();
      pivot.position.set(sx * 1.08, 0.55, z);
      const w = new Mesh(wheelGeo, mat);
      w.rotation.y = sx < 0 ? Math.PI : 0;
      w.castShadow = true;
      const spin = new Group();
      spin.add(w);
      pivot.add(spin);
      root.add(pivot);
      wheels.push({ pivot, spin, steer });
    }
  }

  root.userData = {
    body,
    wheels,
    lightMats,
    lightMeshes,
    blue,
    headlamp,
    cannonYaw,
    cannonPitch,
    nozzle,
    turntable,
    ladderPitch,
    upper,
    tip,
    lean: 0,
    pitch: 0,
    bounce: 0,
    bounceV: 0,
    lastSpeed: 0,
    ladder: 0, // 0 stowed .. 1 up and out
    aimYaw: 0,
    aimPitch: 0.25,
    laddYaw: 0,
  };
  return root;
}

function ladderSection(length, width, color) {
  const b = new Builder();
  for (const sx of [-1, 1]) b.box((sx * width) / 2, 0, -length / 2, 0.1, 0.16, length, color);
  for (let k = 0.25; k < length; k += 0.45) b.box(0, 0.04, -k, width, 0.06, 0.06, color);
  const m = new Mesh(b.geometry(), new MeshLambertMaterial({ vertexColors: true }));
  m.castShadow = true;
  const g = new Group();
  g.add(m);
  return g;
}

const tmp = new Vector3();

/**
 * Place and animate the truck. `opts`: { aim: {x, y, z} | null (where the
 * hose points), siren, ladderUp, ladderAt: {x, z} | null, night, y }
 */
export function poseTruck(model, truck, dt, t, opts) {
  const u = model.userData;
  model.position.set(truck.x, opts.y ?? 0, truck.z);
  model.rotation.y = -truck.heading;

  // Lean out of the turns, nod under braking, a little bounce.
  const lateral = truck.yawRate * truck.speed;
  u.lean = damp(u.lean, clamp(-lateral * 0.012, -0.08, 0.08), 6, dt);
  const accel = (truck.speed - u.lastSpeed) / Math.max(dt, 1e-3);
  u.lastSpeed = truck.speed;
  u.pitch = damp(u.pitch, clamp(-accel * 0.006, -0.05, 0.05), 5, dt);
  u.bounceV += (-u.bounce * 120 - u.bounceV * 9) * dt;
  u.bounce += u.bounceV * dt;
  if (opts.bump) u.bounceV += opts.bump;
  u.body.rotation.set(u.pitch, 0, u.lean);
  u.body.position.y = u.bounce * 0.15 + Math.sin(t * 30) * 0.004 * Math.min(1, Math.abs(truck.speed));

  for (const w of u.wheels) {
    w.spin.rotation.x -= (truck.speed * dt) / 0.55;
    if (w.steer) w.pivot.rotation.y = clamp(-truck.yawRate * 0.5, -0.5, 0.5);
  }

  // Blue lights: left, right, left, right, with a double flash.
  const on = opts.siren;
  const phase = (t * 3.2) % 1;
  const left = on && (phase < 0.12 || (phase > 0.2 && phase < 0.32));
  const right = on && phase > 0.5 && (phase < 0.62 || (phase > 0.7 && phase < 0.82));
  u.lightMats[0].emissiveIntensity = left ? 4 : 0.05;
  u.lightMats[1].emissiveIntensity = right ? 4 : 0.05;
  u.lightMats[0].color.setHex(left ? 0x9ac4ff : 0x2a4aa0);
  u.lightMats[1].color.setHex(right ? 0x9ac4ff : 0x2a4aa0);
  u.blue.intensity = left || right ? (opts.night ? 60 : 18) : 0;
  u.blue.position.x = left ? -0.6 : 0.6;
  u.headlamp.intensity = opts.night ? 120 : 0;

  // Water cannon: turn towards the aim point (in the truck's frame).
  if (opts.aim) {
    tmp.set(opts.aim.x, opts.aim.y, opts.aim.z);
    u.cannonYaw.parent.worldToLocal(tmp);
    const dx = tmp.x - u.cannonYaw.position.x;
    const dz = tmp.z - u.cannonYaw.position.z;
    const yaw = Math.atan2(-dx, -dz);
    u.aimYaw += angleDelta(u.aimYaw, yaw) * Math.min(1, dt * 12);
    if (opts.aimPitch != null) u.aimPitch = damp(u.aimPitch, opts.aimPitch, 12, dt);
  } else {
    u.aimYaw += angleDelta(u.aimYaw, 0) * Math.min(1, dt * 3);
    u.aimPitch = damp(u.aimPitch, 0.1, 3, dt);
  }
  u.cannonYaw.rotation.y = u.aimYaw;
  u.cannonPitch.rotation.x = u.aimPitch;

  // Ladder: swing round to the tree, up, and out.
  u.ladder = damp(u.ladder, opts.ladderUp ? 1 : 0, opts.ladderUp ? 3 : 2.6, dt);
  let wantYaw = 0;
  if (opts.ladderUp && opts.ladderAt) {
    tmp.set(opts.ladderAt.x, 0, opts.ladderAt.z);
    u.turntable.parent.worldToLocal(tmp);
    wantYaw = Math.atan2(-(tmp.x - u.turntable.position.x), -(tmp.z - u.turntable.position.z));
  }
  const swing = Math.min(1, u.ladder * 2.5);
  u.laddYaw += angleDelta(u.laddYaw, wantYaw * swing) * Math.min(1, dt * 3);
  u.turntable.rotation.y = u.laddYaw;
  const raise = clamp((u.ladder - 0.15) / 0.5, 0, 1);
  u.ladderPitch.rotation.x = raise * 0.75;
  const extend = clamp((u.ladder - 0.45) / 0.55, 0, 1);
  u.upper.position.z = -0.3 - extend * opts.ladderReach;
}

/** World position of the nozzle, and of the top of the ladder. */
export function nozzleWorld(model, out) {
  model.updateMatrixWorld(true);
  return model.userData.nozzle.getWorldPosition(out);
}
export function ladderTipWorld(model, out) {
  return model.userData.tip.getWorldPosition(out);
}
export function ladderBaseWorld(model, out) {
  return model.userData.turntable.getWorldPosition(out);
}
