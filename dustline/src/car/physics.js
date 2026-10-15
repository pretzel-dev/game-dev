/**
 * The car: a rigid body on four raycast springs.
 *
 * Each wheel casts a ray down the car's own up axis; the ray's length is the
 * suspension. Where it hits, a spring and damper push the body up and the
 * tyre pushes sideways and along the ground. Because the rays follow the
 * car, it drives up the inside of a loop or round the wall of the drum the
 * same way it drives on flat ground.
 *
 * Arcade help, all of it gentle:
 *  - on loops and the drum, gravity turns to face the surface at speed, so
 *    the car stays pinned;
 *  - in the air the stick flips, spins and rolls the car directly;
 *  - let go in the air and it turns its wheels towards the ground below;
 *  - hit something and you glance off it, keeping most of your speed;
 *  - land on your roof and it rolls itself back over.
 *
 * Runs in Node too (`tools/check.mjs`), so nothing here touches the DOM.
 */
import { Quaternion, Vector3 } from 'three';
import { TUNING as T } from './tuning.js';
import { FLAG_STICK } from '../world/collide.js';
import { balloonAt, ENVELOPE, BASKET_DROP } from '../world/balloons.js';

const STEP = 1 / 120;

export function createCar(spawn) {
  const car = {
    pos: new Vector3(spawn.x, spawn.y, spawn.z),
    vel: new Vector3(),
    quat: headingQuat(spawn.heading),
    angVel: new Vector3(),
    wheels: [],
    steer: 0,
    speed: 0,
    forwardSpeed: 0,
    grounded: 0,
    airTime: 0,
    onStick: false,
    boosting: false,
    onPad: false,
    slip: 0,
    throttle: 0,
    upsideDownTime: 0,
    stuckTime: 0,
    // Trick book-keeping.
    airSpinLocal: new Vector3(),
    inverted: false,
    wallTime: 0,
    events: [],
    contactKinds: new Set(),
    accumulator: 0,
    time: 0,
    lastHit: 0,
    glanceDir: new Vector3(),
    glanceTime: 0,
  };
  for (const [x, z, front] of [
    [T.track, T.front, true],
    [-T.track, T.front, true],
    [T.track, T.rear, false],
    [-T.track, T.rear, false],
  ]) {
    car.wheels.push({
      local: new Vector3(x, T.mountHeight, z),
      front,
      left: x > 0,
      length: T.restLength, // current spring length (for the model)
      prevCompression: 0,
      contact: false,
      normal: new Vector3(0, 1, 0),
      point: new Vector3(),
      spin: 0,
      spinRate: 0,
      slip: 0,
      surface: 'ground',
      load: 0,
    });
  }
  return car;
}

/**
 * Heading in radians: 0 faces -z (north), π/2 faces +x (east). The car's
 * own forward axis is +z, so turn that onto the heading.
 */
export function headingQuat(heading) {
  return new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), Math.PI - heading);
}

/** Heading of the car's nose, in the same convention. */
export function headingOf(car) {
  const f = new Vector3(0, 0, 1).applyQuaternion(car.quat);
  return Math.atan2(f.x, -f.z);
}

/** Put the car back on its wheels at (x, y, z), facing `heading`. */
export function placeCar(car, x, y, z, heading) {
  car.pos.set(x, y, z);
  car.vel.set(0, 0, 0);
  car.angVel.set(0, 0, 0);
  car.quat.copy(headingQuat(heading));
  car.airTime = 0;
  car.airSpinLocal.set(0, 0, 0);
}

/* scratch */
const fwd = new Vector3();
const up = new Vector3();
const left = new Vector3();
const force = new Vector3();
const torque = new Vector3();
const tmp = new Vector3();
const tmp2 = new Vector3();
const mount = new Vector3();
const r = new Vector3();
const vc = new Vector3();
const wf = new Vector3();
const ws = new Vector3();
const nAvg = new Vector3();
const qInv = new Quaternion();
const dq = new Quaternion();
const gEff = new Vector3();
const contacts = [];

function localToWorldVec(car, v, out) {
  return out.copy(v).applyQuaternion(car.quat);
}

/** World-space angular acceleration from a world torque. */
function applyTorque(car, tq, dt) {
  qInv.copy(car.quat).invert();
  tmp.copy(tq).applyQuaternion(qInv);
  tmp.set(tmp.x / T.inertia[0], tmp.y / T.inertia[1], tmp.z / T.inertia[2]);
  tmp.applyQuaternion(car.quat);
  car.angVel.addScaledVector(tmp, dt);
}

/** Velocity change from an impulse J at offset rr from the centre of mass. */
function applyImpulse(car, J, rr, angularShare = 1) {
  car.vel.addScaledVector(J, 1 / T.mass);
  tmp2.crossVectors(rr, J);
  qInv.copy(car.quat).invert();
  tmp2.applyQuaternion(qInv);
  tmp2.set(tmp2.x / T.inertia[0], tmp2.y / T.inertia[1], tmp2.z / T.inertia[2]);
  tmp2.applyQuaternion(car.quat);
  car.angVel.addScaledVector(tmp2, angularShare);
}

/**
 * Advance the car by dt seconds of real time (fixed sub-steps inside).
 * input: { throttle 0..1, brake 0..1, steer -1..1 (+ right), boost, handbrake,
 *          pitch -1..1 (+ nose down), roll -1..1 (+ right), airFresh }
 */
export function updateCar(car, input, world, dt) {
  car.events.length = 0;
  car.accumulator += Math.min(dt, 0.1);
  while (car.accumulator >= STEP) {
    car.accumulator -= STEP;
    step(car, input, world, STEP);
  }
}

function step(car, input, world, h) {
  car.input = input;
  const { collision, boosts } = world;
  car.time += h;
  localToWorldVec(car, tmp.set(0, 0, 1), fwd);
  localToWorldVec(car, tmp.set(0, 1, 0), up);
  localToWorldVec(car, tmp.set(1, 0, 0), left);

  const speed = car.vel.length();
  car.speed = speed;
  const vFwd = car.vel.dot(fwd);
  car.forwardSpeed = vFwd;

  force.set(0, 0, 0);
  torque.set(0, 0, 0);

  /* -- steering ------------------------------------------------------ */
  const lock = T.steerMax / (1 + Math.max(0, speed) / T.steerFalloff);
  const target = (input.steer || 0) * lock;
  car.steer += (target - car.steer) * Math.min(1, T.steerRate * h * 2);

  /* -- wheels -------------------------------------------------------- */
  const rayLen = T.restLength + T.wheelRadius;
  let grounded = 0;
  let stick = 0;
  nAvg.set(0, 0, 0);
  let slipSum = 0;

  // Throttle and brake → drive. Brake on a car rolling backwards (or
  // stopped) is reverse.
  const thr = input.throttle || 0;
  const brk = input.brake || 0;
  let drive = 0;
  let braking = 0;
  if (thr > 0.05) {
    const top = car.boosting ? T.boostTopSpeed : T.topSpeed;
    if (vFwd < -1) braking = thr;
    else drive = thr * T.engine * Math.max(0, 1 - Math.max(0, vFwd) / top) ** 0.7;
  }
  if (brk > 0.05) {
    if (vFwd > 1) braking = Math.max(braking, brk);
    else drive -= brk * T.engine * 0.8 * Math.max(0, 1 - Math.max(0, -vFwd) / T.reverseSpeed);
  }
  car.throttle = Math.max(thr, brk);

  for (const w of car.wheels) {
    localToWorldVec(car, w.local, mount).add(car.pos);
    const hit = collision.raycast(mount.x, mount.y, mount.z, -up.x, -up.y, -up.z, rayLen);
    if (!hit) {
      w.contact = false;
      w.length += (T.restLength - w.length) * Math.min(1, 14 * h);
      w.prevCompression = 0;
      w.load = 0;
      w.slip = 0;
      w.spinRate *= 1 - 0.4 * h;
      continue;
    }
    const n = w.normal.set(hit.nx, hit.ny, hit.nz);
    w.contact = true;
    w.surface = hit.terrain ? 'ground' : 'track';
    grounded++;
    if (hit.flags & FLAG_STICK) stick++;
    nAvg.add(n);
    const compression = Math.max(0, rayLen - hit.t);
    w.length = Math.min(T.restLength, Math.max(T.restLength - T.travel - 0.1, hit.t - T.wheelRadius));
    w.point.copy(mount).addScaledVector(up, -hit.t);
    const cv = (compression - w.prevCompression) / h;
    w.prevCompression = compression;
    let fs = T.spring * compression + (cv > 0 ? T.damper : T.rebound) * cv;
    if (compression > T.travel) fs += T.bumpStop * (compression - T.travel);
    // Only so much of the push goes through a wheel touching a wall edge-on.
    const facing = Math.max(0, n.dot(up));
    fs = Math.max(0, fs) * (0.25 + 0.75 * facing);
    w.load = fs;
    force.addScaledVector(up, fs);
    r.copy(mount).sub(car.pos);
    torque.add(tmp.crossVectors(r, tmp2.copy(up).multiplyScalar(fs)));

    // Tyre. Directions in the ground plane.
    wf.copy(fwd);
    if (w.front) wf.applyAxisAngle(up, -car.steer);
    wf.addScaledVector(n, -wf.dot(n)).normalize();
    ws.crossVectors(n, wf); // points left
    r.copy(w.point).sub(car.pos);
    vc.crossVectors(car.angVel, r).add(car.vel);
    const vLong = vc.dot(wf);
    const vLat = vc.dot(ws);
    const share = T.mass / 4;

    const grip = (!w.front && input.handbrake ? T.gripSlide : T.grip) * fs;
    let fLat = (-vLat * share * T.lateralStiffness) / h;
    let fLong = drive * share;
    if (braking > 0 || (input.handbrake && !w.front)) {
      const want = input.handbrake && !w.front ? 1 : braking;
      const stop = (Math.abs(vLong) * share) / h;
      fLong -= Math.sign(vLong) * Math.min(stop, want * T.brake * share);
    }
    fLong -= vLong * T.rolling * share;
    const mag = Math.hypot(fLat, fLong);
    let slip = 0;
    if (mag > grip && mag > 0) {
      slip = 1 - grip / mag;
      fLat *= grip / mag;
      fLong *= grip / mag;
    }
    w.slip = slip + Math.min(1, Math.abs(vLat) / 8) * 0.6;
    slipSum += w.slip;
    tmp.copy(wf).multiplyScalar(fLong).addScaledVector(ws, fLat);
    force.add(tmp);
    // Act a little above the contact patch so grip never trips the car.
    r.copy(w.point).lerp(car.pos, T.rollCentre).sub(car.pos);
    torque.add(tmp2.crossVectors(r, tmp));
    w.spinRate = vLong / T.wheelRadius;
  }
  for (const w of car.wheels) w.spin += w.spinRate * h;
  car.slip = grounded ? slipSum / grounded : 0;
  car.grounded = grounded;
  if (grounded) nAvg.normalize();

  /* -- boost ----------------------------------------------------------- */
  car.boosting = !!input.boost;
  if (car.boosting && vFwd < T.boostTopSpeed) force.addScaledVector(fwd, T.boost * T.mass);
  car.onPad = false;
  for (const b of boosts) {
    const dx = car.pos.x - b.x;
    const dz = car.pos.z - b.z;
    const along = dx * b.dx + dz * b.dz;
    const across = -dx * b.dz + dz * b.dx;
    if (Math.abs(along) < b.len / 2 + 1 && Math.abs(across) < b.width / 2 + 1 && Math.abs(car.pos.y - b.y) < 3) {
      car.onPad = true;
      const v = car.vel.x * b.dx + car.vel.z * b.dz;
      if (v < T.boostPadTop) {
        force.x += b.dx * T.boostPad * T.mass;
        force.z += b.dz * T.boostPad * T.mass;
      }
      if (!car.wasOnPad) car.events.push({ type: 'pad' });
    }
  }
  car.wasOnPad = car.onPad;

  /* -- water: wading through the plunge pool ---------------------------- */
  car.inWater = 0;
  for (const w of world.water || []) {
    const dx = car.pos.x - w.x;
    const dz = car.pos.z - w.z;
    if (dx * dx + dz * dz > w.r * w.r) continue;
    const depth = w.level - (car.pos.y - 0.7);
    if (depth <= 0) continue;
    const d = Math.min(1.6, depth);
    car.inWater = d;
    force.addScaledVector(car.vel, -T.mass * 3.5 * d);
    force.y += T.mass * T.gravity * 0.3 * d;
  }
  if (car.inWater && !car.wasInWater && car.speed > 4) {
    car.events.push({ type: 'splash', strength: Math.min(1, car.speed / 25) });
    car.vel.multiplyScalar(0.7);
  }
  car.wasInWater = car.inWater > 0;

  /* -- gravity, pinned to loops at speed ------------------------------- */
  gEff.set(0, -T.gravity, 0);
  car.onStick = stick >= 2;
  if (car.onStick) {
    const k = Math.min(1, Math.max(0, (speed - T.stickSpeed) / (T.stickFull - T.stickSpeed)));
    tmp.copy(nAvg).multiplyScalar(-T.gravity);
    gEff.lerp(tmp, k);
  }
  force.addScaledVector(gEff, T.mass);
  if (grounded >= 2) force.addScaledVector(nAvg, -T.downforce * T.mass * speed * speed * 0.01);
  force.addScaledVector(car.vel, -T.drag * speed);

  /* -- in the air -------------------------------------------------------- */
  qInv.copy(car.quat).invert();
  const wl = tmp.copy(car.angVel).applyQuaternion(qInv); // local angular velocity
  if (grounded === 0) {
    car.airTime += h;
    const pitch = input.pitch || 0;
    const roll = input.roll || 0;
    const spin = input.steer || 0;
    const k = Math.min(1, T.airResponse * h);
    // + pitch = nose down = +x rotation; + spin = right = -y; + roll = right = +z.
    if (Math.abs(pitch) > 0.05) wl.x += (pitch * T.airSpin - wl.x) * k;
    else wl.x *= 1 - 0.6 * h;
    if (Math.abs(spin) > 0.05) wl.y += (-spin * T.airSpin - wl.y) * k;
    else wl.y *= 1 - 0.6 * h;
    if (Math.abs(roll) > 0.05) wl.z += (roll * T.airSpin - wl.z) * k;
    else wl.z *= 1 - 0.6 * h;
    // Hands off: let the nose follow the arc of the jump and the wings
    // stay level, so a plain jump flies like a plain jump.
    if (Math.abs(pitch) > 0.05 || Math.abs(roll) > 0.05) car.airInputTime = car.time;
    if (car.time - (car.airInputTime || 0) > 0.35 && up.y > 0.2 && speed > 6) {
      const vf = car.vel.dot(fwd) / speed;
      if (vf > 0.5) {
        const vu = car.vel.dot(up) / speed;
        const follow = Math.max(-2, Math.min(2, -vu * 3));
        wl.x += (follow - wl.x) * Math.min(1, 3 * h);
      }
      wl.z *= 1 - Math.min(1, 2.5 * h);
    }
    car.angVel.copy(wl).applyQuaternion(car.quat);
    car.airSpinLocal.addScaledVector(wl, h);

    // Let go and it looks for the ground and turns its wheels to it.
    if (Math.abs(pitch) < 0.05 && Math.abs(roll) < 0.05 && car.airTime > 0.15) {
      const look = collision.raycast(car.pos.x, car.pos.y, car.pos.z, 0, -1, 0, T.landAssistRange);
      const vy = car.vel.y;
      if (look && vy < 2) {
        const nearness = 1 - look.t / T.landAssistRange;
        tmp2.set(look.nx, look.ny, look.nz);
        const axis = tmp.crossVectors(up, tmp2);
        // Only fix pitch and roll; keep any spin about the up axis.
        const spinPart = car.angVel.dot(up);
        const keep = tmp2.copy(up).multiplyScalar(spinPart);
        const target = axis.multiplyScalar(T.landAssist * (0.4 + nearness));
        car.angVel.lerp(target.add(keep), Math.min(1, (2 + 6 * nearness) * h));
      }
    }
  } else {
    car.airTime = 0;
    applyTorque(car, torque, h);
    // A little yaw help so it steers like a toy, not a lorry.
    const yawRate = car.angVel.dot(up);
    const want = (-(input.steer || 0) * Math.min(Math.abs(vFwd), 20) * Math.sign(vFwd || 1)) / 9;
    if (Math.abs(input.steer || 0) > 0.05 && !input.handbrake) {
      car.angVel.addScaledVector(up, (want - yawRate) * Math.min(1, 2.5 * h));
    }
    if (input.handbrake && Math.abs(input.steer || 0) > 0.05) {
      car.angVel.addScaledVector(up, -(input.steer || 0) * 3.2 * h);
    }
    // Angular damping on the ground keeps it calm over bumps.
    car.angVel.multiplyScalar(1 - 1.2 * h);
  }

  // After a glance, swing the nose onto the new line over a moment.
  if (car.glanceTime > 0) {
    car.glanceTime -= h;
    const d = tmp.copy(car.glanceDir).addScaledVector(up, -car.glanceDir.dot(up));
    if (d.lengthSq() > 1e-4) {
      d.normalize();
      const err = Math.atan2(tmp2.crossVectors(fwd, d).dot(up), fwd.dot(d));
      const want = Math.max(-7, Math.min(7, err * 9));
      car.angVel.addScaledVector(up, want - car.angVel.dot(up));
    }
  }

  /* -- integrate --------------------------------------------------------- */
  car.vel.addScaledVector(force, h / T.mass);
  car.pos.addScaledVector(car.vel, h);
  const w = car.angVel;
  const angle = w.length() * h;
  if (angle > 1e-9) {
    dq.setFromAxisAngle(tmp.copy(w).normalize(), angle);
    car.quat.premultiply(dq).normalize();
  }

  /* -- body against the world ------------------------------------------ */
  collideBody(car, collision);
  bounceOffBalloons(car, world.balloons);

  /* -- tricks and feats -------------------------------------------------- */
  bookkeeping(car, h);
}

const push = new Vector3();
const nSum = new Vector3();
const hitPoint = new Vector3();

function collideBody(car, collision) {
  car.contactKinds.clear();
  let roofDown = false;
  let wall = false;
  let any = false;
  push.set(0, 0, 0);
  nSum.set(0, 0, 0);
  hitPoint.set(0, 0, 0);
  let weight = 0;
  let ledge = 0;
  for (const [x, y, z, rad] of T.body) {
    localToWorldVec(car, tmp.set(x, y, z), mount).add(car.pos);
    const n = collision.sphereContacts(mount.x, mount.y, mount.z, rad, contacts);
    for (let i = 0; i < n; i++) {
      const c = contacts[i];
      const nrm = tmp2.set(c.nx, c.ny, c.nz);
      // Several triangles of one surface all report the same overlap; only
      // push out by what is left after the pushes already made.
      const d = c.depth - push.dot(nrm);
      if (d <= 0) continue;
      any = true;
      car.contactKinds.add(c.kind);
      car.pos.addScaledVector(nrm, d);
      push.addScaledVector(nrm, d);
      nSum.addScaledVector(nrm, c.depth);
      hitPoint.addScaledVector(mount, c.depth).addScaledVector(nrm, -rad * c.depth);
      weight += c.depth;
      // A wall is something across the car's path, not the floor of a loop
      // the car is bottoming out on.
      const isWall = Math.abs(up.dot(nrm)) < 0.5 || c.kind === 'post' || c.kind === 'rock';
      // A low edge in front (the end of a strip of road, the lip of a
      // ramp at ground level): something to climb over, not a wall to stop
      // against. Lift the car onto it.
      if (!isWall && c.kind === 'piece' && car.vel.dot(nrm) < -0.5) {
        const contactY = tmp.copy(mount).addScaledVector(nrm, -rad).sub(car.pos).dot(up);
        const across = 1 - Math.abs(up.dot(nrm));
        if (contactY < -0.15 && across > 0.08) ledge = Math.max(ledge, Math.min(0.35, c.depth + 0.12));
      }
      if (isWall) wall = true;
      if (up.dot(nrm) < -0.2) roofDown = true;
    }
  }

  if (ledge > 0 && !wall) {
    // Hop up and keep going: only stop sinking, never stop forward.
    car.pos.addScaledVector(up, ledge);
    const vu = car.vel.dot(up);
    if (vu < 0) car.vel.addScaledVector(up, -vu);
    any = false;
  }
  if (any && weight > 0) {
    const nrm = nSum.normalize();
    hitPoint.multiplyScalar(1 / weight);
    const vn = car.vel.dot(nrm);
    if (vn < 0) {
      const before = car.vel.length();
      car.vel.addScaledVector(nrm, -vn * (1 + T.restitution));
      // A knock turns the car a little; never a cartwheel.
      r.copy(hitPoint).sub(car.pos);
      tmp.crossVectors(r, nrm).multiplyScalar(Math.min(4, -vn * 0.12));
      car.angVel.add(tmp);
      if (wall) {
        // Glance off: keep most of the speed, turned along the wall.
        const vn2 = car.vel.dot(nrm);
        const tang = tmp.copy(car.vel).addScaledVector(nrm, -vn2);
        const tl = tang.length();
        const keep = before * T.wallKeep;
        if (tl > 0.5) {
          if (tl < keep) tang.multiplyScalar(keep / tl);
        } else if (before > 4) {
          // Square on: slide off to whichever side the nose is turned.
          tang.copy(left).addScaledVector(nrm, -left.dot(nrm));
          if (tang.lengthSq() < 1e-4) tang.set(-nrm.z, 0, nrm.x);
          tang.normalize().multiplyScalar(keep * 0.6 * (fwd.dot(tang) >= 0 ? 1 : -1));
        }
        car.vel.copy(tang).addScaledVector(nrm, Math.max(0, vn2) + 0.3);
        // Swing the nose round to follow, so the tyres don't scrub it all
        // away: a glance turns the car, it doesn't stop it.
        const tdir = tmp2.copy(tang).normalize();
        // Nose along the new path if we were going forwards, tail if reversing.
        const facing = car.forwardSpeed >= 0 ? 1 : -1;
        const yaw = Math.asin(Math.max(-1, Math.min(1, tmp.crossVectors(fwd, tdir).dot(up) * facing)));
        if (Math.abs(yaw) > 0.05) {
          car.glanceDir.copy(tdir).multiplyScalar(facing);
          car.glanceTime = 0.4;
        }
        if (car.time - car.lastHit > 0.4 && before > 6) {
          car.events.push({ type: 'bump', strength: Math.min(1, -vn / 20) });
          car.lastHit = car.time;
        }
      } else if (-vn > 7) {
        // A hard landing soaks up the tumble along with the fall.
        car.angVel.multiplyScalar(0.6);
      }
      if (!wall && -vn > 7 && car.time - car.lastHit > 0.3) {
        car.events.push({ type: 'thud', strength: Math.min(1, -vn / 20) });
        car.lastHit = car.time;
      }
    }
  }
  // Nothing in this world should ever spin the car like a top.
  const spin = car.angVel.length();
  if (spin > 14) car.angVel.multiplyScalar(14 / spin);

  // On its roof or side with no wheels down: roll back over.
  const upright = up.y;
  if (car.grounded <= 1 && car.contactKinds.size && (roofDown || upright < 0.35)) {
    car.upsideDownTime += STEP;
  } else {
    car.upsideDownTime = Math.max(0, car.upsideDownTime - STEP * 2);
  }
  if (car.upsideDownTime > 0.7) {
    car.upsideDownTime = 0;
    // Pop up and roll towards upright about the car's forward axis.
    car.vel.y += 6;
    const rollDir = left.y > 0 ? 1 : -1;
    car.angVel.copy(fwd).multiplyScalar(rollDir * 5.5);
    car.events.push({ type: 'flipback' });
  }

  // Wedged somewhere and not moving: lift it out. Either hung up with no
  // wheels down, or pushing against something (gas or brake held) and
  // going nowhere.
  const pushing = (car.input?.throttle || 0) > 0.3 || (car.input?.brake || 0) > 0.3;
  const against = car.contactKinds.has('piece') || car.contactKinds.has('post') || car.contactKinds.has('rock');
  if (car.speed < 0.6 && car.grounded < 2) car.stuckTime += STEP;
  else if (car.speed < 1.5 && pushing && (against || car.grounded < 3)) car.stuckTime += STEP * 2;
  else car.stuckTime = Math.max(0, car.stuckTime - STEP);
  if (car.stuckTime > 2.4) {
    car.stuckTime = 0;
    // Put it on top of whatever it is stuck on or under.
    const heading = Math.atan2(fwd.x, -fwd.z);
    const look = collision.raycast(car.pos.x, car.pos.y + 14, car.pos.z, 0, -1, 0, 30);
    const y = look ? car.pos.y + 14 - look.t + 1.6 : car.pos.y + 2.5;
    placeCar(car, car.pos.x, Math.max(y, car.pos.y + 0.5), car.pos.z, heading);
    car.events.push({ type: 'unstuck' });
  }
}

const TAU = Math.PI * 2;
const bp = { x: 0, y: 0, z: 0 };
const bn = new Vector3();

/** Balloons are trampolines: hit the envelope (or the basket) and bounce. */
function bounceOffBalloons(car, balloons) {
  if (!balloons) return;
  for (const b of balloons) {
    balloonAt(b, car.time, bp);
    for (const [cy, rad, spring] of [
      [0, ENVELOPE + 1.3, 1.9],
      [-BASKET_DROP, 2.4, 1.4],
    ]) {
      bn.set(car.pos.x - bp.x, car.pos.y - (bp.y + cy), car.pos.z - bp.z);
      const d = bn.length();
      if (d >= rad || d < 1e-3) continue;
      bn.multiplyScalar(1 / d);
      car.pos.set(bp.x, bp.y + cy, bp.z).addScaledVector(bn, rad);
      const vn = car.vel.dot(bn);
      if (vn < 0) {
        car.vel.addScaledVector(bn, -vn * spring);
        car.vel.y += 4;
        car.angVel.multiplyScalar(0.5);
        b.hit = car.time;
        car.events.push({ type: 'balloon', strength: Math.min(1, -vn / 20) });
      }
    }
  }
}

function bookkeeping(car, h) {
  const upY = up.y;
  if (car.grounded >= 2) {
    if (car.wasAirborne && car.airLanding > 0.45) landed(car);
    car.wasAirborne = false;
    car.airLanding = 0;
    car.airSpinLocal.set(0, 0, 0);
    // Upside down with wheels on something: that's a loop in progress.
    if (upY < -0.5) car.inverted = true;
    if (car.inverted && upY > 0.85) {
      car.inverted = false;
      car.events.push({ type: 'trick', name: 'loop' });
    }
    // Riding a wall.
    if (Math.abs(upY) < 0.4 && car.speed > 10) {
      car.wallTime += h;
      if (car.wallTime > 0.9 && !car.wallNoted) {
        car.wallNoted = true;
        car.events.push({ type: 'trick', name: 'wall ride' });
      }
    } else {
      car.wallTime = Math.max(0, car.wallTime - h);
      if (car.wallTime === 0) car.wallNoted = false;
    }
  } else if (car.grounded === 0) {
    car.wasAirborne = true;
    car.airLanding = (car.airLanding || 0) + h;
    car.inverted = false;
  }
}

function landed(car) {
  const a = car.airSpinLocal;
  const t = car.airLanding;
  const flips = Math.round(Math.abs(a.x) / TAU);
  const spins = Math.round(Math.abs(a.y) / Math.PI); // half-turns
  const rolls = Math.round(Math.abs(a.z) / TAU);
  const parts = [];
  if (flips) parts.push(`${times(flips)}${a.x > 0 ? 'front' : 'back'}flip`);
  if (rolls) parts.push(`${times(rolls)}barrel roll`);
  if (spins >= 2) parts.push(`${spins * 180}`);
  let size = null;
  if (t > 3.6) size = 'huge air';
  else if (t > 2.2) size = 'big air';
  car.events.push({ type: 'landed', airTime: t, tricks: parts, size, speed: car.speed });
}

function times(n) {
  return n === 1 ? '' : n === 2 ? 'double ' : n === 3 ? 'triple ' : `${n}× `;
}
