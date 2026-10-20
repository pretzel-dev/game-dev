/**
 * A toy-box view: high up and looking down at an angle, always from the
 * same side (so "up" on the stick always means "up the screen"). It
 * follows the truck with a little lead, leans towards whatever you're
 * spraying so both are in shot, and can be turned a quarter at a time.
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

export function createCameraRig(camera, { view = 0 } = {}) {
  const focus = new Vector3();
  const lead = new Vector3();
  let yaw = VIEW.baseYaw + view * (Math.PI / 2);
  let wantYaw = yaw;
  let distance = VIEW.distance;
  let wantDistance = VIEW.distance;
  let shake = 0;
  let index = view;

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
    /** Turn the view a quarter (dir +1 or -1). */
    turn(dir = 1) {
      index = (((index + dir) % 4) + 4) % 4;
      wantYaw = VIEW.baseYaw + index * (Math.PI / 2);
      return index;
    },
    zoom(f) {
      wantDistance = clamp(wantDistance * f, VIEW.minDistance, VIEW.maxDistance);
    },
    kick(s) {
      shake = Math.max(shake, s);
    },
    reset(truck) {
      focus.set(truck.x, 0, truck.z);
      lead.set(0, 0, 0);
      yaw = wantYaw;
      place();
    },
    /** `look`: a point to keep in shot too (the fire being sprayed), or null. */
    update(dt, truck, look = null) {
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
      const fx = Math.sin(yaw);
      const fz = -Math.cos(yaw);
      const rx = Math.cos(yaw);
      const rz = Math.sin(yaw);
      return { dx: rx * mx + fx * my, dz: rz * mx + fz * my };
    },
  };
}
