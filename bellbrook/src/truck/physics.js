/**
 * How the fire engine drives. Deliberately simple and forgiving, for small
 * hands: you point the stick where you want to go and the truck turns and
 * goes there. It can turn on the spot when slow, it lines itself up with
 * the road if you're nearly lined up already, and if it's nosed into a
 * wall it backs out by itself. Nothing ever holds it fast.
 *
 * Heading 0 faces north (-z); forward is (sin h, -cos h).
 */
import { angleDelta, clamp, damp } from '../core/utils.js';
import { nearestRoadPoint } from '../world/roads.js';
import { pushCircle } from '../world/collide.js';
import { clampToBounds } from '../world/city.js';

export const TRUCK = {
  maxSpeed: 14, // m/s, about 50 km/h: a toy in a small town
  reverseSpeed: 5,
  accel: 7,
  brake: 15,
  coast: 5,
  turnRadius: 6, // the tightest circle at speed
  spin: 1.25, // rad/s of turn when barely moving (toys can do that)
  snap: 0.42, // within this many radians of a road, run along the road
  radius: 1.35, // three circles along the body
  offsets: [-2.3, 0, 2.3],
};

export function createTruck(spawn) {
  return {
    x: spawn.x,
    z: spawn.z,
    heading: spawn.heading ?? 0,
    speed: 0,
    yawRate: 0,
    blocked: 0,
    backing: 0,
    contact: null, // the last wall it touched, to slide along it
    contactT: 0,
    inWater: false,
    time: 0,
    events: [],
  };
}

export function placeTruck(t, x, z, heading) {
  t.x = x;
  t.z = z;
  t.heading = heading;
  t.speed = 0;
  t.yawRate = 0;
  t.blocked = 0;
  t.backing = 0;
  t.contactT = 0;
}

/**
 * input: { dx, dz } desired direction in the world (length 0..1),
 *        or { hold: true } to stop where it is.
 * world: { collider, ponds }, cars: moving circles to keep clear of.
 */
export function updateTruck(t, input, world, dt, cars = null) {
  t.time += dt;
  let ix = input.dx || 0;
  let iz = input.dz || 0;
  const mag = Math.min(1, Math.hypot(ix, iz));
  // Up against something and still pushing into it? Go along it instead,
  // the way it's already leaning. That's how it gets round hay bales,
  // parked cars and the corners of buildings without being steered.
  t.contactT -= dt;
  if (t.contactT > 0 && mag > 0.08) {
    const n = t.contact;
    const into = ix * n.x + iz * n.z;
    if (into < 0) {
      ix -= into * n.x;
      iz -= into * n.z;
      let m = Math.hypot(ix, iz);
      if (m < 0.3 * mag) {
        const side = Math.sign(Math.sin(t.heading) * -n.z + -Math.cos(t.heading) * n.x) || 1;
        ix = -n.z * side;
        iz = n.x * side;
        m = 1;
      }
      ix = (ix / m) * mag;
      iz = (iz / m) * mag;
    }
  }
  let want = t.heading;
  let targetSpeed = 0;
  let turn = 0;

  if (mag > 0.08) {
    want = Math.atan2(ix, -iz);
    // Nearly along the road you're on? Then exactly along it.
    const road = nearestRoadPoint(t.x, t.z);
    if (road.dist < 8) {
      const axis = Math.round(want / (Math.PI / 2)) * (Math.PI / 2);
      if (Math.abs(angleDelta(want, axis)) < TRUCK.snap) want = axis;
    }
    const diff = angleDelta(t.heading, want);
    if (t.backing > 0) {
      // Backing out of a corner: reverse, swinging the nose round.
      t.backing -= dt;
      targetSpeed = -TRUCK.reverseSpeed;
      turn = clamp(diff * 2.6, -1, 1);
    } else {
      // Slow down for sharp turns; crawl round to face the way you want.
      const sharp = Math.abs(diff);
      targetSpeed = mag * TRUCK.maxSpeed * clamp(1.15 - sharp / 1.5, 0.12, 1);
      turn = clamp(diff * 2.6, -1, 1);
    }
  } else t.backing = 0;

  // Speed.
  const rate = targetSpeed === 0 ? TRUCK.coast : Math.sign(targetSpeed) !== Math.sign(t.speed) && Math.abs(t.speed) > 0.3 ? TRUCK.brake : TRUCK.accel;
  if (t.speed < targetSpeed) t.speed = Math.min(targetSpeed, t.speed + rate * dt);
  else t.speed = Math.max(targetSpeed, t.speed - rate * dt);

  // Turning: tighter when slow, and it can always turn a little on the spot.
  const speedAbs = Math.abs(t.speed);
  const maxYaw = Math.max(speedAbs / TRUCK.turnRadius, TRUCK.spin * (1 - Math.min(1, speedAbs / 5)));
  t.yawRate = damp(t.yawRate, turn * maxYaw, 10, dt);
  t.heading += t.yawRate * dt;
  t.heading = Math.atan2(Math.sin(t.heading), Math.cos(t.heading));

  // Move.
  const fx = Math.sin(t.heading);
  const fz = -Math.cos(t.heading);
  t.x += fx * t.speed * dt;
  t.z += fz * t.speed * dt;

  // Bump: push each of the three body circles clear, twice over.
  let hitN = null;
  let hitDepth = 0;
  for (let pass = 0; pass < 2; pass++) {
    for (const off of TRUCK.offsets) {
      const p = pushCircle(world.collider, t.x + fx * off, t.z + fz * off, TRUCK.radius, cars);
      if (p.depth > 1e-4) {
        t.x += p.x;
        t.z += p.z;
        if (p.depth > hitDepth) {
          hitDepth = p.depth;
          hitN = [p.nx, p.nz];
        }
      }
    }
  }
  // The middle of the truck never leaves the land, whatever pushed it.
  const inside = clampToBounds(t.x, t.z);
  t.x = inside.x;
  t.z = inside.z;
  if (hitN) {
    t.contact = { x: hitN[0], z: hitN[1] };
    t.contactT = 0.35;
    // Lose the speed going into the wall, keep the speed along it. Head on
    // at speed, that's a bump.
    const into = -(fx * hitN[0] + fz * hitN[1]) * Math.sign(t.speed || 1);
    if (into > 0.6 && Math.abs(t.speed) > 5) {
      t.events.push({ type: 'bump', strength: Math.min(1, (Math.abs(t.speed) * into) / 12) });
      t.speed *= 0.3;
    } else if (into > 0) t.speed *= 1 - into * into * Math.min(1, 8 * dt);
    // Nosed in and going nowhere? Back out for a moment.
    if (mag > 0.3 && Math.abs(t.speed) < 1.2 && t.backing <= 0 && into > 0.3) {
      t.blocked += dt;
      if (t.blocked > 0.45) {
        t.backing = 1.1;
        t.blocked = 0;
      }
    }
  } else t.blocked = Math.max(0, t.blocked - dt);

  // Splashing through the duck pond.
  const wasWet = t.inWater;
  t.inWater = world.ponds.some((p) => Math.hypot(t.x - p.x, t.z - p.z) < p.r - 0.5);
  if (t.inWater && !wasWet && Math.abs(t.speed) > 2) t.events.push({ type: 'splash', strength: Math.min(1, Math.abs(t.speed) / 12) });
}

/** The way the truck is facing. */
export const forwardOf = (t) => ({ x: Math.sin(t.heading), z: -Math.cos(t.heading) });
