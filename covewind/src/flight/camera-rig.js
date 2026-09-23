/**
 * Camera feel — second only to flight feel.
 *
 * Three cameras, all of which lag behind the aeroplane and lead into turns
 * rather than sticking to it rigidly, and a photo-mode orbit. The rig never
 * lets the camera sink into the island or the sea.
 */
import { Vector3 } from 'three';
import { clamp, damp, lerp, smoothstep, TAU } from '../core/utils.js';
import { surfaceHeightAt } from '../world/terrain.js';

export const CAMERA_MODES = ['Chase', 'Close', 'Postcard'];

const _forward = new Vector3();
const _flat = new Vector3();
const _right = new Vector3();
const _desired = new Vector3();
const _target = new Vector3();
const _up = new Vector3(0, 1, 0);
const _alt = new Vector3();

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

  // The chase camera follows a smoothed copy of the aeroplane's own axes, so
  // it swings round through a loop or a roll instead of snapping when the
  // heading flips over the top.
  const trail = new Vector3(0, 0, 1);
  const trailUp = new Vector3(0, 1, 0);
  const _bodyUp = new Vector3();
  const _bodyFwd = new Vector3();
  let aerobatic = 0;

  function update(dt, flight, plane, { boosting = false } = {}) {
    _bodyFwd.set(0, 0, 1).applyQuaternion(plane.quaternion);
    _bodyUp.set(0, 1, 0).applyQuaternion(plane.quaternion);
    _forward.copy(_bodyFwd);
    _flat.set(_bodyFwd.x, 0, _bodyFwd.z);
    if (_flat.lengthSq() < 1e-4) _flat.copy(trail).setY(0);
    _flat.normalize();
    // Right-hand side of the aeroplane: forward × up.
    _right.set(-_flat.z, 0, _flat.x);

    // How far from ordinary flying are we? Steep, or anywhere near inverted.
    const wild = Math.max(
      smoothstep(0.75, 1.15, Math.abs(flight.climb ?? flight.pitch)),
      smoothstep(0.35, -0.2, _bodyUp.y)
    );
    aerobatic = damp(aerobatic, wild, wild > aerobatic ? 3 : 0.8, dt);

    trail.lerp(_bodyFwd, 1 - Math.exp(-4.2 * dt)).normalize();
    trailUp.lerp(_bodyUp, 1 - Math.exp(-3.4 * dt)).normalize();

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
      // Chase: sits behind and above, swings wide through a turn, and comes in
      // closer and lower when the floats are in the water. Through aerobatics
      // it rides along the aeroplane's own axes, so a loop is a loop on screen.
      const bank = Math.sin(flight.roll);
      const astern = flight.waterborne ? -18 : -26 - speedT * 6;
      const height = flight.waterborne ? 5.5 : 9.2;
      _desired
        .copy(flight.pos)
        .addScaledVector(_flat, astern)
        .addScaledVector(_right, -bank * 4.5) // swing wide, to the outside of the turn
        .addScaledVector(_up, height - (flight.climb ?? flight.pitch) * 4);
      _alt.copy(flight.pos).addScaledVector(trail, astern).addScaledVector(trailUp, height * 0.8);
      _desired.lerp(_alt, aerobatic);
      _target
        .copy(flight.pos)
        .addScaledVector(_forward, 30)
        .addScaledVector(_up, 1.6);
      lag = 4.2 + speedT * 1.6 + aerobatic * 3;
      targetFov = 58 + speedT * 4 + aerobatic * 4;
    } else if (state.mode === 1) {
      // Close: just off the tail, for skimming the waves.
      _desired
        .copy(flight.pos)
        .addScaledVector(_flat, -12.5)
        .addScaledVector(_up, 4.2);
      _alt.copy(flight.pos).addScaledVector(trail, -12.5).addScaledVector(trailUp, 4);
      _desired.lerp(_alt, aerobatic);
      _target.copy(flight.pos).addScaledVector(_forward, 42);
      lag = 6.5 + aerobatic * 3;
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

    // Keep the line from the aeroplane to the camera clear of the island: down
    // in the cove, a camera 26 metres astern would otherwise sit inside a cliff.
    pullInPastTerrain(_desired, flight.pos);

    camera.position.lerp(_desired, 1 - Math.exp(-lag * dt));

    // Never let the camera scrape through the ground or dip under the sea.
    const floor = surfaceHeightAt(camera.position.x, camera.position.z) + 3.5;
    if (camera.position.y < floor) camera.position.y = lerp(camera.position.y, floor, 0.6);

    lookAt.lerp(_target, 1 - Math.exp(-(lag + 2) * dt));

    // A touch of roll in the camera sells the turn without making anyone
    // queasy; through aerobatics the horizon is allowed to go round.
    const tilt = state.photo.active ? 0 : Math.sin(flight.roll) * 0.14;
    _up.set(0, 1, 0).addScaledVector(_right, tilt).normalize();
    if (!state.photo.active && state.mode !== 2) _up.lerp(trailUp, aerobatic * 0.85).normalize();
    camera.up.lerp(_up, 1 - Math.exp(-4 * dt)).normalize();
    _up.set(0, 1, 0);
    camera.lookAt(lookAt);

    state.fov = damp(state.fov, targetFov, 3.2, dt);
    if (Math.abs(camera.fov - state.fov) > 0.01) {
      camera.fov = state.fov;
      camera.updateProjectionMatrix();
    }
  }

  /**
   * Shorten the camera boom until nothing solid lies between the subject and
   * the camera. Six height samples is plenty for an island this smooth.
   */
  function pullInPastTerrain(desired, focus) {
    const steps = 6;
    let clear = 1;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const x = focus.x + (desired.x - focus.x) * t;
      const y = focus.y + (desired.y - focus.y) * t;
      const z = focus.z + (desired.z - focus.z) * t;
      if (y < surfaceHeightAt(x, z) + 3) {
        clear = (i - 1) / steps;
        break;
      }
    }
    if (clear >= 1) return;

    // Shorten rather than climb: going up and over would put the obstacle
    // between the camera and the aeroplane, which is worse than a close shot.
    // Never come closer than 40% of the way in.
    const t = Math.max(clear, 0.4);
    desired.set(
      focus.x + (desired.x - focus.x) * t,
      Math.max(focus.y + (desired.y - focus.y) * t, surfaceHeightAt(desired.x, desired.z) + 3.5),
      focus.z + (desired.z - focus.z) * t
    );
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
