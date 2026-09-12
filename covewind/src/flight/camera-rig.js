/**
 * Camera feel — second only to flight feel.
 *
 * Three cameras, all of which lag behind the aeroplane and lead into turns
 * rather than sticking to it rigidly, and a photo-mode orbit. The rig never
 * lets the camera sink into the island or the sea.
 */
import { Vector3 } from 'three';
import { clamp, damp, lerp, TAU } from '../core/utils.js';
import { surfaceHeightAt } from '../world/terrain.js';

export const CAMERA_MODES = ['Chase', 'Close', 'Postcard'];

const _forward = new Vector3();
const _flat = new Vector3();
const _right = new Vector3();
const _desired = new Vector3();
const _target = new Vector3();
const _up = new Vector3(0, 1, 0);

export function createCameraRig(camera, { mode = 0 } = {}) {
  const lookAt = new Vector3();
  const state = {
    mode,
    fov: 58,
    postcardAngle: 0.9,
    photo: {
      active: false,
      yaw: 0.7,
      pitch: 0.22,
      distance: 34,
      autoSpin: 1,
      idle: 0,
    },
  };

  function cycle() {
    state.mode = (state.mode + 1) % CAMERA_MODES.length;
    return state.mode;
  }

  function update(dt, flight, plane, { boosting = false } = {}) {
    const cp = Math.cos(flight.pitch);
    _forward.set(Math.sin(flight.heading) * cp, Math.sin(flight.pitch), Math.cos(flight.heading) * cp);
    _flat.set(Math.sin(flight.heading), 0, Math.cos(flight.heading));
    _right.set(Math.cos(flight.heading), 0, -Math.sin(flight.heading));

    const speedT = clamp((flight.speed - 20) / 55, 0, 1);
    let lag = 4.6;
    let targetFov = 58;

    if (state.photo.active) {
      const photo = state.photo;
      photo.idle += dt;
      if (photo.idle > 2.5) photo.yaw += dt * 0.09 * photo.autoSpin;
      const cy = Math.cos(photo.pitch);
      _desired
        .set(Math.sin(photo.yaw) * cy, Math.sin(photo.pitch), Math.cos(photo.yaw) * cy)
        .multiplyScalar(photo.distance)
        .add(plane.position);
      _target.copy(plane.position);
      lag = 7;
      targetFov = 46;
    } else if (state.mode === 0) {
      // Chase: sits behind and above, swings wide through a turn.
      const bank = Math.sin(flight.roll);
      _desired
        .copy(flight.pos)
        .addScaledVector(_flat, -26 - speedT * 6)
        .addScaledVector(_right, bank * 4.5)
        .addScaledVector(_up, 9.2 - flight.pitch * 4);
      _target
        .copy(flight.pos)
        .addScaledVector(_forward, 30)
        .addScaledVector(_up, 1.6);
      lag = 4.2 + speedT * 1.6;
      targetFov = 58 + speedT * 4;
    } else if (state.mode === 1) {
      // Close: just off the tail, for skimming the waves.
      _desired
        .copy(flight.pos)
        .addScaledVector(_flat, -12.5)
        .addScaledVector(_up, 4.2);
      _target.copy(flight.pos).addScaledVector(_forward, 42);
      lag = 6.5;
      targetFov = 62 + speedT * 4;
    } else {
      // Postcard: a slow drifting wide shot that shows off the island.
      state.postcardAngle += dt * 0.06;
      const swing = Math.sin(state.postcardAngle) * 0.55;
      _desired
        .copy(flight.pos)
        .addScaledVector(_right, 30 + swing * 14)
        .addScaledVector(_flat, -34 + swing * 9)
        .addScaledVector(_up, 16 + Math.sin(state.postcardAngle * 0.7) * 5);
      _target.copy(flight.pos).addScaledVector(_forward, 16);
      lag = 2.4;
      targetFov = 52;
    }

    if (boosting) targetFov += 7;

    camera.position.lerp(_desired, 1 - Math.exp(-lag * dt));

    // Never let the camera scrape through the ground or dip under the sea.
    const floor = surfaceHeightAt(camera.position.x, camera.position.z) + 3.5;
    if (camera.position.y < floor) camera.position.y = lerp(camera.position.y, floor, 0.6);

    lookAt.lerp(_target, 1 - Math.exp(-(lag + 2) * dt));

    // A touch of roll in the camera sells the turn without making anyone queasy.
    const tilt = state.photo.active ? 0 : Math.sin(flight.roll) * 0.14;
    _up.set(tilt, 1, 0).normalize();
    camera.up.lerp(_up, 1 - Math.exp(-4 * dt));
    _up.set(0, 1, 0);
    camera.lookAt(lookAt);

    state.fov = damp(state.fov, targetFov, 3.2, dt);
    if (Math.abs(camera.fov - state.fov) > 0.01) {
      camera.fov = state.fov;
      camera.updateProjectionMatrix();
    }
  }

  /** Snap the rig to a sensible starting place. */
  function reset(flight) {
    _flat.set(Math.sin(flight.heading), 0, Math.cos(flight.heading));
    camera.position.copy(flight.pos).addScaledVector(_flat, -28).add(new Vector3(0, 10, 0));
    lookAt.copy(flight.pos);
    camera.lookAt(lookAt);
  }

  /* -------------------------------------------------------- photo mode --- */

  function orbit(dx, dy) {
    const photo = state.photo;
    photo.yaw -= dx * 0.006;
    photo.pitch = clamp(photo.pitch + dy * 0.005, -0.5, 1.25);
    photo.idle = 0;
    photo.autoSpin = dx === 0 ? photo.autoSpin : Math.sign(-dx) || 1;
  }

  function zoom(delta) {
    state.photo.distance = clamp(state.photo.distance * (1 + delta * 0.0016), 12, 130);
    state.photo.idle = 0;
  }

  /** @param {Vector3} [planePosition] So the orbit starts where you were looking. */
  function setPhoto(active, planePosition) {
    state.photo.active = active;
    if (active) {
      state.photo.idle = 0;
      const dx = camera.position.x - (planePosition?.x ?? 0);
      const dz = camera.position.z - (planePosition?.z ?? 0);
      state.photo.yaw = (Math.atan2(dx, dz) + TAU) % TAU;
      state.photo.distance = clamp(Math.hypot(dx, dz), 22, 60);
      state.photo.pitch = 0.22;
    }
  }

  return { state, update, cycle, reset, orbit, zoom, setPhoto, lookAt };
}
