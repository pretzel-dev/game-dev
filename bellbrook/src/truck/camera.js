/**
 * Two ways to watch the fire engine:
 *
 *  - 'above', a toy-box view: high up and looking down at an angle, always
 *    from the same side (so "up" on the stick always means "up the screen").
 *    It follows the truck with a little lead, leans towards whatever you're
 *    spraying so both are in shot, and can be turned a quarter at a time.
 *  - 'behind', a chase camera like Dustline's: low behind the truck,
 *    swinging round after it as it turns, for steering it like a car.
 */
import { Vector3 } from 'three';
import { angleDelta, clamp, damp } from '../core/utils.js';

export const VIEW = {
  pitch: 0.86, // radians down from level
  distance: 48,
  minDistance: 24,
  maxDistance: 90,
  baseYaw: 0.32, // a slight angle on the grid looks nicer than square-on
};

export const CHASE = {
  distance: 13,
  height: 6,
  lookAhead: 6,
  minDistance: 10,
  maxDistance: 30,
};

/** `blocker(a, b)`: how far (0..1) along the line a -> b the first building is (1 if none). */
export function createCameraRig(camera, { view = 0, mode = 'above', blocker = null } = {}) {
  const focus = new Vector3();
  const lead = new Vector3();
  let yaw = VIEW.baseYaw + view * (Math.PI / 2);
  let wantYaw = yaw;
  let distance = VIEW.distance;
  let wantDistance = VIEW.distance;
  let shake = 0;
  let index = view;
  let chaseDistance = CHASE.distance;
  let chaseYaw = 0;
  let pullIn = 1; // < 1 when a building behind the truck would hide it
  const from = new Vector3();
  const to = new Vector3();

  /** Behind the truck: yaw is the way the camera looks (the truck's heading, lagging). */
  function placeBehind(truck, dt = 1) {
    const fx = Math.sin(chaseYaw);
    const fz = -Math.cos(chaseYaw);
    const k = chaseDistance / CHASE.distance;
    // A building behind the truck? Come in closer (and look down more) rather than sit inside it.
    if (blocker) {
      from.set(focus.x, 2.5, focus.z);
      to.set(focus.x - fx * chaseDistance, focus.y + CHASE.height * k, focus.z - fz * chaseDistance);
      const hit = Math.max(0.2, blocker(from, to) - 0.08);
      pullIn = hit < pullIn ? damp(pullIn, hit, 25, dt) : damp(pullIn, hit, 2.5, dt);
    }
    const d = chaseDistance * pullIn;
    camera.position.set(focus.x - fx * d, focus.y + CHASE.height * k * (0.7 + 0.3 * pullIn) + (1 - pullIn) * 4, focus.z - fz * d);
    if (shake > 0) {
      camera.position.x += (Math.random() - 0.5) * shake;
      camera.position.y += (Math.random() - 0.5) * shake;
    }
    camera.lookAt(focus.x + fx * CHASE.lookAhead, focus.y + 1.2, focus.z + fz * CHASE.lookAhead);
  }

  function place() {
    const h = Math.cos(VIEW.pitch) * distance;
    // The camera sits behind the focus point, "behind" being the view yaw.
    camera.position.set(focus.x - Math.sin(yaw) * h, focus.y + Math.sin(VIEW.pitch) * distance, focus.z + Math.cos(yaw) * h);
    if (shake > 0) {
      camera.position.x += (Math.random() - 0.5) * shake;
      camera.position.y += (Math.random() - 0.5) * shake;
    }
    camera.lookAt(focus);
  }

  return {
    get yaw() {
      return yaw;
    },
    get distance() {
      return distance;
    },
    get view() {
      return index;
    },
    get mode() {
      return mode;
    },
    setMode(m, truck) {
      mode = m;
      if (truck) this.reset(truck);
    },
    /** Turn the view a quarter (dir +1 or -1). */
    turn(dir = 1) {
      index = (((index + dir) % 4) + 4) % 4;
      wantYaw = VIEW.baseYaw + index * (Math.PI / 2);
      return index;
    },
    zoom(f) {
      if (mode === 'behind') {
        chaseDistance = clamp(chaseDistance * f, CHASE.minDistance, CHASE.maxDistance);
        return;
      }
      wantDistance = clamp(wantDistance * f, VIEW.minDistance, VIEW.maxDistance);
    },
    kick(s) {
      shake = Math.max(shake, s);
    },
    reset(truck) {
      focus.set(truck.x, 0, truck.z);
      lead.set(0, 0, 0);
      yaw = wantYaw;
      chaseYaw = truck.heading;
      if (mode === 'behind') placeBehind(truck);
      else place();
    },
    /** `look`: a point to keep in shot too (the fire being sprayed), or null. */
    update(dt, truck, look = null) {
      if (mode === 'behind') {
        // Swing round after the truck (faster the faster it goes); when it
        // backs up, keep looking the way it faces.
        focus.x = damp(focus.x, truck.x, 8, dt);
        focus.y = damp(focus.y, look ? Math.min(3, (look.y ?? 0) * 0.3) : 0, 3, dt);
        focus.z = damp(focus.z, truck.z, 8, dt);
        let want = truck.heading;
        // Spraying something off to the side: turn a little to keep it in view.
        if (look) {
          const a = Math.atan2(look.x - truck.x, -(look.z - truck.z));
          want += clamp(angleDelta(want, a), -0.9, 0.9) * 0.5;
        }
        chaseYaw += angleDelta(chaseYaw, want) * Math.min(1, dt * (2 + Math.abs(truck.speed) * 0.15));
        shake = Math.max(0, shake - dt * 2);
        placeBehind(truck, dt);
        return;
      }
      const fx = Math.sin(truck.heading) * truck.speed;
      const fz = -Math.cos(truck.heading) * truck.speed;
      lead.x = damp(lead.x, fx * 0.7, 1.5, dt);
      lead.z = damp(lead.z, fz * 0.7, 1.5, dt);
      let tx = truck.x + lead.x;
      let tz = truck.z + lead.z;
      let ty = 0;
      if (look) {
        const d = Math.hypot(look.x - truck.x, look.z - truck.z);
        const k = d < 40 ? 0.42 : 0;
        tx += (look.x - tx) * k;
        tz += (look.z - tz) * k;
        ty = (look.y ?? 0) * 0.25;
      }
      focus.x = damp(focus.x, tx, 4, dt);
      focus.y = damp(focus.y, ty, 3, dt);
      focus.z = damp(focus.z, tz, 4, dt);
      yaw += angleDelta(yaw, wantYaw) * Math.min(1, dt * 4);
      distance = damp(distance, wantDistance, 4, dt);
      shake = Math.max(0, shake - dt * 2);
      place();
    },
    /** Screen stick (x right, y up) to a direction on the ground. */
    toWorld(mx, my) {
      // Up the screen is away from the camera: (sin yaw, -cos yaw).
      const y = mode === 'behind' ? chaseYaw : yaw;
      const fx = Math.sin(y);
      const fz = -Math.cos(y);
      const rx = Math.cos(y);
      const rz = Math.sin(y);
      return { dx: rx * mx + fx * my, dz: rz * mx + fz * my };
    },
  };
}
