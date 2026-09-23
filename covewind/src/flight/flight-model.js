/**
 * How the aeroplane flies.
 *
 * Attitude is a quaternion, so nothing stops you going over the top: pull all
 * the way back and you loop, double-tap a bank and you roll, hold the second
 * tap and you can stop upside down. Casual flying is unchanged — the stick
 * banks to an angle and holds it, the aeroplane turns the way it leans, and
 * hands off it tidies itself back to level.
 *
 * Speed trades against height, the ground and the sea are cushions, and a
 * stall is a soft nose-drop. There is no way to crash, no fail state and
 * nothing to lose.
 *
 * `heading`, `pitch` and `roll` are still published every frame (derived from
 * the quaternion) for the camera, audio and HUD, and you can still set them
 * directly — the model notices and rebuilds its attitude from them.
 */
import { Euler, Quaternion, Vector3 } from 'three';
import { TUNE } from './tuning.js';
import { surfaceHeightAt, terrainGradient, terrainHeightAt, ceilingAt } from '../world/terrain.js';
import { waveHeight } from '../world/water.js';
import { clamp, damp, shapeAxis, smoothstep } from '../core/utils.js';

const TAU = Math.PI * 2;

export function createFlight() {
  return {
    pos: new Vector3(-60, 108, 330),
    velocity: new Vector3(),
    quat: new Quaternion(),
    heading: Math.PI * 0.86,
    pitch: -0.03,
    roll: 0,
    /** Bank relative to the horizon, −π..π, positive right wing down. */
    bank: 0,
    /** Angle of the nose above the horizon. */
    climb: 0,
    /** Upright (0) or inverted (π): what "level" means when hands are off. */
    rollBase: 0,
    /** An aileron roll in progress: {dir, rolled, holding}. */
    trick: null,
    throttle: 0.64,
    speed: 40,
    wobble: 0,
    stall: 0,
    /** 0..1 — how hard the ground cushion is currently pushing back. */
    contact: 0,
    overWater: true,
    skimming: false,
    boosting: false,
    groundClearance: 100,
    /** True while the floats are in the water. */
    waterborne: false,
    /** Set for one frame on touchdown and on unsticking, for hints and audio. */
    justLanded: false,
    justTookOff: false,
    /** Floats touching the shallows while taxiing. */
    grounded: false,
    /** Under an overhang (arch, cave roof, bridge): the roof height, or null. */
    underRoof: null,
    /** Accumulators the trick-spotter reads: how far it has pitched and rolled. */
    loopProgress: 0,
    rollProgress: 0,
    invertedTime: 0,
    /** Set for one frame when a manoeuvre completes: 'loop', 'roll'. */
    justDid: null,
  };
}

const _forward = new Vector3();
const _up = new Vector3();
const _right = new Vector3();
const _axis = new Vector3();
const _ahead = new Vector3();
const _q = new Quaternion();
const _euler = new Euler(0, 0, 0, 'YXZ');
const WORLD_UP = new Vector3(0, 1, 0);

/** Unit vector the aeroplane is pointing along. */
export function headingVector(flight, out = _forward) {
  syncAttitude(flight);
  return out.set(0, 0, 1).applyQuaternion(flight.quat);
}

/** If someone set heading/pitch/roll by hand, rebuild the quaternion. */
function syncAttitude(flight) {
  if (flight.heading === flight._h && flight.pitch === flight._p && flight.roll === flight._r) return;
  _euler.set(-flight.pitch, flight.heading, flight.roll, 'YXZ');
  flight.quat.setFromEuler(_euler);
  flight.rollBase = Math.abs(flight.roll) > Math.PI / 2 ? Math.PI : 0;
  flight.trick = null;
  publishAttitude(flight);
}

/** Derive the angles everyone else reads from the quaternion. */
function publishAttitude(flight) {
  _euler.setFromQuaternion(flight.quat, 'YXZ');
  flight.heading = _euler.y;
  flight.pitch = -_euler.x;
  flight.roll = _euler.z;
  _forward.set(0, 0, 1).applyQuaternion(flight.quat);
  _up.set(0, 1, 0).applyQuaternion(flight.quat);
  _right.set(-1, 0, 0).applyQuaternion(flight.quat);
  flight.climb = Math.asin(clamp(_forward.y, -1, 1));
  flight.bank = Math.atan2(-_right.y, _up.y);
  flight._h = flight.heading;
  flight._p = flight.pitch;
  flight._r = flight.roll;
}

/** Rotate about an axis fixed to the aeroplane. */
function rotateBody(flight, x, y, z, angle) {
  if (!angle) return;
  _axis.set(x, y, z);
  _q.setFromAxisAngle(_axis, angle);
  flight.quat.multiply(_q);
}

/** Rotate about an axis fixed to the world. */
function rotateWorld(flight, axis, angle) {
  if (!angle) return;
  _q.setFromAxisAngle(axis, angle);
  flight.quat.premultiply(_q);
}

/** Lift (positive) or drop the nose towards the horizon, whatever the bank. */
function raiseNose(flight, angle) {
  _forward.set(0, 0, 1).applyQuaternion(flight.quat);
  _axis.crossVectors(_forward, WORLD_UP);
  if (_axis.lengthSq() < 1e-6) return;
  _axis.normalize();
  rotateWorld(flight, _axis, angle);
}

/** Wrap an angle to −π..π. */
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));

/**
 * @param {object} flight  State from `createFlight`.
 * @param {object} input   `{ pitch, roll, yaw, boost, trick }`, each −1..1.
 * @param {object} wind    Wind state from `createWind`.
 * @param {number} dt      Seconds.
 * @param {number} t       Elapsed time, for the wave field.
 */
export function updateFlight(flight, input, wind, dt, t) {
  flight.justLanded = false;
  flight.justTookOff = false;
  flight.justDid = null;
  syncAttitude(flight);
  if (flight.waterborne) {
    updateOnWater(flight, input, dt, t);
    _euler.set(-flight.pitch, flight.heading, flight.roll, 'YXZ');
    flight.quat.setFromEuler(_euler);
    publishAttitude(flight);
    return flight;
  }

  const pitchIn = shapeAxis(clamp(input.pitch, -1, 1));
  const rollIn = shapeAxis(clamp(input.roll, -1, 1));
  const yawIn = shapeAxis(clamp(input.yaw, -1, 1), 0.1, 0.2);
  flight.boosting = !!input.boost;

  /* -- stall: authority fades as the aeroplane runs out of air, and comes
        straight back the moment the nose drops ------------------------ */
  const stalling = smoothstep(TUNE.stallSpeed + 6, TUNE.stallSpeed - 6, flight.speed);
  flight.stall = damp(flight.stall, stalling, 4, dt);
  const authority = 1 - flight.stall * (1 - TUNE.stallAuthority);
  const speedFactor = clamp(flight.speed / 60, 0.4, 1.3);

  /* -- pitch: a rate, with no limit, so you can loop ----------------------- */
  const pitchRate = pitchIn * TUNE.pitchRate * (0.62 + 0.38 * speedFactor) * authority;
  rotateBody(flight, 1, 0, 0, -pitchRate * dt);
  flight.loopProgress = Math.abs(pitchIn) > 0.3 ? flight.loopProgress + pitchRate * dt : 0;

  /* -- roll ---------------------------------------------------------------- */
  publishAttitude(flight);
  // Let go of everything while upside down and, after a few seconds, the
  // aeroplane rolls itself the right way up. Inverted is for when you mean it.
  const hands = Math.abs(pitchIn) + Math.abs(rollIn) + Math.abs(yawIn) > 0.04;
  flight.handsOff = hands ? 0 : (flight.handsOff ?? 0) + dt;
  if (flight.rollBase && flight.handsOff > TUNE.invertedPatience) flight.rollBase = 0;
  if (input.trick && !flight.trick) {
    flight.trick = { dir: Math.sign(input.trick), rolled: 0, holding: true };
  }
  let rollRate;
  if (flight.trick) {
    // An aileron roll: full rate in one direction. Let go early and it
    // finishes the whole roll; hold on and it keeps rolling, then settles at
    // whichever of upright or inverted comes next.
    const trick = flight.trick;
    if (trick.holding && !(Math.sign(rollIn) === trick.dir && Math.abs(rollIn) > 0.4)) {
      trick.holding = false;
      // A quick double-tap is a whole roll; held past a third of the way
      // round, it stops at the next "level" — inverted, or upright again.
      trick.target = trick.rolled < Math.PI * 0.6 ? TAU : Math.ceil(trick.rolled / Math.PI) * Math.PI;
    }
    rollRate = trick.dir * TUNE.trickRollRate;
    let step = TUNE.trickRollRate * dt;
    if (!trick.holding) {
      const left = trick.target - trick.rolled;
      if (left <= step) {
        step = Math.max(0, left);
        rollRate = (trick.dir * step) / dt;
        // Settle on whichever way up it has ended.
        flight.rollBase = Math.abs(wrap(flight.bank + trick.dir * step)) > Math.PI / 2 ? Math.PI : 0;
        if (trick.target >= TAU - 0.01) flight.justDid = 'roll';
        flight.trick = null;
      }
    }
    trick.rolled += step;
  } else {
    // Stick banks to an angle and holds it, measured from upright or from
    // inverted, and hands off it eases back to that base. Stick right always
    // rolls the aeroplane clockwise from the pilot's seat, either way up.
    const target = flight.rollBase + rollIn * TUNE.maxRoll;
    const error = wrap(target - flight.bank);
    const handsOff = Math.abs(rollIn) < 0.04;
    // Bank means little pointing straight up or down, and levelling the wings
    // while someone is pulling through a loop would turn it into something
    // else, so hands-off levelling waits for both.
    const settle = handsOff
      ? smoothstep(0.25, 0.6, Math.abs(Math.cos(flight.climb))) * (Math.abs(pitchIn) > 0.5 ? 0 : 1)
      : 1;
    const rate = handsOff ? TUNE.rollCentring : TUNE.rollRate;
    rollRate = clamp(error * rate * settle, -TUNE.trickRollRate, TUNE.trickRollRate);
  }
  rotateBody(flight, 0, 0, 1, rollRate * dt);
  flight.rollProgress = flight.trick ? flight.trick.rolled : 0;

  /* -- rudder -------------------------------------------------------------- */
  rotateBody(flight, 0, 1, 0, -yawIn * TUNE.yawRate * dt);

  // Gusts rock the wings a little; they never take the aeroplane away from you.
  flight.wobble += dt * (2.2 + flight.speed * 0.02);
  const buffet = wind.gust * (0.05 + flight.stall * 0.12);
  rotateBody(flight, 0, 0, 1, Math.sin(flight.wobble * 1.7) * buffet * dt * 2.4);
  rotateBody(flight, 1, 0, 0, -Math.sin(flight.wobble * 2.3 + 1.1) * buffet * dt * 1.4);

  publishAttitude(flight);

  // Bank right, turn right: the lift leans with the wings and pulls the nose
  // round. Heading grows anticlockwise seen from above, so a right-hand turn
  // is a negative rotation about the world's up.
  const lean = Math.sin(flight.bank) * Math.max(0, Math.cos(flight.climb));
  const turn = lean * (TUNE.turnBase + flight.speed * TUNE.turnFromSpeed) * authority;
  rotateWorld(flight, WORLD_UP, -turn * dt);

  // Hands off and the right way up, the nose drifts back to the horizon.
  const upright = flight.rollBase === 0 && !flight.trick;
  if (Math.abs(pitchIn) < 0.04 && Math.abs(flight.climb) < 1.1) {
    raiseNose(flight, -flight.climb * TUNE.pitchCentring * (upright ? 1 : 0.4) * dt);
  }
  // A stalled aeroplane drops its nose until it is flying again.
  if (flight.stall > 0.01) {
    raiseNose(flight, -flight.stall * TUNE.stallNoseDown * Math.cos(flight.climb * 0.5) * dt);
  }

  publishAttitude(flight);

  /* -- speed: throttle, boost, and the trade against height -------------- */
  const target =
    TUNE.baseSpeed +
    flight.throttle * TUNE.throttleSpeed +
    (flight.boosting ? TUNE.boostSpeed : 0) -
    Math.sin(flight.climb) * TUNE.pitchSpeedTrade;
  // Climbing bleeds speed faster than cruising restores it — that is what
  // makes the top of a loop float.
  const response = flight.climb > 0.5 && target < flight.speed ? TUNE.speedResponse * 1.4 : TUNE.speedResponse;
  flight.speed = damp(flight.speed, target, response, dt);
  flight.speed = clamp(flight.speed, TUNE.minSpeed, TUNE.maxSpeed);

  /* -- position ---------------------------------------------------------- */
  _forward.set(0, 0, 1).applyQuaternion(flight.quat);
  _up.set(0, 1, 0).applyQuaternion(flight.quat);
  flight.velocity.copy(_forward).multiplyScalar(flight.speed);

  // Lift and sink, then the wind on top. Fast means a gentle climb; slow means
  // the wing stops holding you up, which is how you get down onto the water.
  // Upside down the wing pushes the wrong way, so inverted flight sinks.
  const speedDelta = flight.speed - TUNE.liftNeutralSpeed;
  const lift = speedDelta * (speedDelta >= 0 ? TUNE.liftPerSpeed : TUNE.sinkPerSpeed);
  const idle = (1 - flight.throttle) * TUNE.idleSink;
  const bankSink = Math.abs(Math.sin(flight.bank)) * TUNE.bankSink;
  const inverted = Math.max(0, -_up.y);
  flight.velocity.y += lift * Math.max(0, _up.y) - idle - bankSink - inverted * TUNE.invertedSink;
  flight.velocity.x += wind.vector.x * 0.35;
  flight.velocity.z += wind.vector.z * 0.35;
  flight.velocity.y += wind.updraft * 0.5;

  flight.pos.addScaledVector(flight.velocity, dt);

  flight.invertedTime = _up.y < -0.6 ? flight.invertedTime + dt : 0;
  if (flight.loopProgress > TAU * 0.92) {
    flight.justDid = 'loop';
    flight.loopProgress = 0;
  } else if (flight.loopProgress < -TAU * 0.92) {
    flight.justDid = 'outside loop';
    flight.loopProgress = 0;
  }

  /* -- overhangs: the arch, cave roofs and bridges ------------------------ */
  const roof = ceilingAt(flight.pos.x, flight.pos.z);
  flight.underRoof = null;
  let groundOverride = null;
  if (roof) {
    if (flight.pos.y < roof.bottom) {
      flight.underRoof = roof.bottom;
      // A soft lid: the air under the rock pushes you back down.
      const lid = roof.bottom - TUNE.roofCushion;
      if (flight.pos.y > lid) {
        flight.pos.y = damp(flight.pos.y, lid, 8, dt);
        if (flight.climb > 0) raiseNose(flight, -flight.climb * 4 * dt);
      }
    } else {
      // Above it, the rock is ground like any other.
      groundOverride = roof.top;
    }
  }

  /* -- the ground is a cushion ------------------------------------------- */
  const ground = groundOverride ?? terrainHeightAt(flight.pos.x, flight.pos.z);
  flight.overWater = ground <= 0;
  const wave = flight.overWater ? waveHeight(flight.pos.x, flight.pos.z, t) : 0;
  const surface = Math.max(ground, wave);
  flight.groundClearance = flight.pos.y - surface;

  // Look ahead as well, so cliffs lift you over rather than stopping you.
  const flatLen = Math.hypot(_forward.x, _forward.z) || 1;
  _ahead.set(
    flight.pos.x + (_forward.x / flatLen) * TUNE.lookAhead,
    flight.pos.y,
    flight.pos.z + (_forward.z / flatLen) * TUNE.lookAhead
  );
  // Under a roof, the way ahead is the tunnel, not the hill on top of it.
  const aheadRoof = flight.underRoof ? ceilingAt(_ahead.x, _ahead.z) : null;
  const aheadSurface = aheadRoof ? Math.max(0, terrainHeightAt(_ahead.x, _ahead.z)) : surfaceHeightAt(_ahead.x, _ahead.z);
  const aheadClearance = flight.pos.y - aheadSurface;

  // The look-ahead is there to lift you over what you would otherwise fly
  // into, so it counts only ground that stands at or above the aeroplane. A
  // beach you are descending towards is below you, and must not shove you back
  // up just as you were settling onto the water in front of it.
  const risesAhead = aheadSurface > flight.pos.y - 2;

  // Water gives you a low pass; land keeps a rooftop's clearance. Below
  // landing speed the sea stops holding you up at all, so you can settle onto it.
  const cushion = flight.overWater && !risesAhead ? TUNE.waterCushion : TUNE.landCushion;
  const landing = flight.overWater && !risesAhead && flight.speed < TUNE.landingSpeed && _up.y > 0.7;
  const clearance = risesAhead ? Math.min(flight.groundClearance, aheadClearance) : flight.groundClearance;
  const push = landing ? 0 : clamp(1 - clearance / cushion, 0, 1);
  flight.contact = damp(flight.contact, push, 9, dt);

  if (push > 0) {
    const floor = (risesAhead ? Math.max(surface, aheadSurface) : surface) + cushion * 0.72;
    const lid = flight.underRoof ? flight.underRoof - TUNE.roofCushion : Infinity;
    flight.pos.y = Math.min(damp(flight.pos.y, Math.max(flight.pos.y, floor), TUNE.cushionRise * push, dt), Math.max(lid, floor));
    // The nose is eased up, never snapped — and near the ground an
    // upside-down aeroplane is rolled back the right way up.
    if (flight.climb < 0.16 * push) raiseNose(flight, (0.16 * push - flight.climb) * 3.5 * push * dt);
    if (_up.y < 0.2 && !flight.trick) flight.rollBase = 0;
    flight.speed *= 1 - TUNE.skimScrub * push * dt;

    // Slopes gently turn you away from the rock, like air spilling off a ridge.
    const grad = terrainGradient(flight.pos.x, flight.pos.z, 14);
    if (!flight.underRoof && Math.hypot(grad.x, grad.z) > 0.25) {
      const awayHeading = Math.atan2(-grad.x, -grad.z);
      const delta = wrap(awayHeading - flight.heading);
      rotateWorld(flight, WORLD_UP, delta * push * 0.45 * dt);
    }
  }

  flight.skimming = flight.overWater && flight.groundClearance < TUNE.skimHeight;

  // Touchdown: slow, low, over open water, wings roughly level, not climbing.
  if (landing && flight.groundClearance < TUNE.touchdownHeight && flight.velocity.y < 3) {
    flight.waterborne = true;
    flight.justLanded = true;
    flight.trick = null;
    flight.rollBase = 0;
    flight.speed = Math.min(flight.speed, TUNE.takeoffSpeed - 6);
    flight.pos.y = surface + TUNE.floatDraft;
    publishAttitude(flight);
    flight.pitch = 0;
    flight.roll = 0;
    return flight;
  }

  /* -- the sky has a soft lid, and the sea a soft fence ------------------- */
  if (flight.pos.y > TUNE.softCeiling) {
    flight.pos.y = damp(flight.pos.y, TUNE.softCeiling, 1.6, dt);
    if (flight.climb > 0.1) raiseNose(flight, -(flight.climb - 0.1) * 2 * dt);
  }
  flight.pos.y = Math.min(flight.pos.y, TUNE.ceiling);

  const distance = Math.hypot(flight.pos.x, flight.pos.z);
  if (distance > TUNE.homeRadius) {
    const home = Math.atan2(-flight.pos.x, -flight.pos.z);
    const delta = wrap(home - flight.heading);
    const strength = smoothstep(TUNE.homeRadius, TUNE.homeRadius + 320, distance);
    rotateWorld(flight, WORLD_UP, delta * TUNE.turnHomeRate * strength * dt * 3);
  }

  flight.quat.normalize();
  publishAttitude(flight);
  return flight;
}

/**
 * Taxiing on the surface. The throttle drives the speed, the stick and rudder
 * steer, and the swell tips the floats about. Open the throttle all the way and
 * the aeroplane unsticks and flies again.
 */
function updateOnWater(flight, input, dt, t) {
  const steer = clamp(
    shapeAxis(clamp(input.roll, -1, 1)) + shapeAxis(clamp(input.yaw, -1, 1), 0.1, 0.2),
    -1,
    1
  );
  flight.boosting = !!input.boost;
  flight.contact = 1;
  flight.stall = 0;
  flight.underRoof = ceilingAt(flight.pos.x, flight.pos.z)?.bottom ?? null;

  // Throttle drives the speed, all the way down to stopped, and pulling back
  // on the stick brakes against the water.
  const brake = clamp(shapeAxis(clamp(input.pitch, -1, 1)), 0, 1);
  const target = flight.throttle * TUNE.taxiSpeed + (flight.boosting ? TUNE.taxiBoost : 0);
  flight.speed = damp(flight.speed, target, TUNE.waterDrag, dt);
  if (brake > 0) flight.speed = damp(flight.speed, 0, TUNE.waterBrake * brake, dt);
  if (flight.speed < 0.25) flight.speed = 0;

  // Slow water taxiing needs the rudder; at speed the floats track straighter.
  const authority = 0.5 + clamp(flight.speed / 26, 0, 1) * 0.75;
  flight.heading -= steer * TUNE.waterSteer * authority * dt;

  const step = flight.speed * dt;
  const nextX = flight.pos.x + Math.sin(flight.heading) * step;
  const nextZ = flight.pos.z + Math.cos(flight.heading) * step;
  if (terrainHeightAt(nextX, nextZ) < -1.5) {
    flight.pos.x = nextX;
    flight.pos.z = nextZ;
    flight.grounded = false;
  } else {
    // Nudging the sand: the floats stop, and you can turn back out.
    flight.speed *= 1 - 2.4 * dt;
    flight.grounded = true;
  }

  // Ride the swell: height from the wave under the floats, tilt from its slope.
  const wave = waveHeight(flight.pos.x, flight.pos.z, t);
  const ahead = waveHeight(flight.pos.x + Math.sin(flight.heading) * 6, flight.pos.z + Math.cos(flight.heading) * 6, t);
  const side = waveHeight(flight.pos.x + Math.cos(flight.heading) * 6, flight.pos.z - Math.sin(flight.heading) * 6, t);
  flight.pos.y = damp(flight.pos.y, wave + TUNE.floatDraft, 8, dt);
  flight.pitch = damp(flight.pitch, (ahead - wave) * 0.06, 3, dt);
  flight.roll = damp(flight.roll, (side - wave) * 0.05 + steer * 0.12, 3, dt);

  flight.velocity.set(Math.sin(flight.heading) * flight.speed, 0, Math.cos(flight.heading) * flight.speed);
  flight.groundClearance = TUNE.floatDraft;
  flight.overWater = true;
  flight.skimming = flight.speed > 10;

  // On the step and away — unless there is rock overhead, in which case the
  // floats keep planing until you are out from under it.
  if (flight.speed > TUNE.takeoffSpeed && !flight.underRoof) {
    flight.waterborne = false;
    flight.justTookOff = true;
    flight.grounded = false;
    flight.pitch = 0.14;
    flight.contact = 0;
  }
  return flight;
}

/** Adjust throttle by a delta, clamped to the usable range. */
export function nudgeThrottle(flight, delta) {
  flight.throttle = clamp(flight.throttle + delta, 0, 1);
  return flight.throttle;
}
