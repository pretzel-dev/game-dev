/**
 * The chase camera. It follows where the car is going rather than where it
 * is pointing, so flips and spins happen in front of you instead of whirling
 * the world round; on loops and walls it tilts with the car so the loop
 * stays a loop on screen.
 */
import { Vector3 } from 'three';
import { heightAt } from '../world/terrain.js';

export const CAMERA_MODES = ['Chase', 'Far', 'Low'];
const SETUPS = [
  { dist: 7.6, height: 2.5, look: 1.0 },
  { dist: 13, height: 4.6, look: 1.4 },
  { dist: 5.2, height: 1.35, look: 0.9 },
];

export function createCameraRig(camera, { mode = 0 } = {}) {
  const pos = new Vector3();
  const look = new Vector3();
  const dir = new Vector3(0, 0, -1);
  const camUp = new Vector3(0, 1, 0);
  const tmp = new Vector3();
  const carUp = new Vector3();
  const carFwd = new Vector3();
  const want = new Vector3();
  let fov = camera.fov;
  let shake = 0;
  let current = mode % SETUPS.length;
  let orbit = 0; // photo-ish look-around offset (radians), eases back

  function reset(car) {
    carFwd.set(0, 0, 1).applyQuaternion(car.quat);
    dir.copy(carFwd);
    camUp.set(0, 1, 0);
    pos.copy(car.pos).addScaledVector(dir, -SETUPS[current].dist).add(tmp.set(0, SETUPS[current].height, 0));
    look.copy(car.pos);
  }

  return {
    reset,
    get mode() {
      return current;
    },
    cycle() {
      current = (current + 1) % SETUPS.length;
      return current;
    },
    kick(amount) {
      shake = Math.min(1, shake + amount);
    },
    nudge(dx) {
      orbit = Math.max(-2.6, Math.min(2.6, orbit + dx));
    },
    update(dt, car, { boosting = false, looking = false } = {}) {
      const setup = SETUPS[current];
      carUp.set(0, 1, 0).applyQuaternion(car.quat);
      carFwd.set(0, 0, 1).applyQuaternion(car.quat);
      const speed = car.speed;
      const grounded = car.grounded >= 2;

      // Where to look from: behind the travel direction once moving.
      // (Reversing keeps the camera behind the car, not in front of it.)
      if (speed > 3 && car.forwardSpeed > -1) want.copy(car.vel).normalize();
      else want.copy(carFwd);
      if (grounded) want.lerp(carFwd, speed > 3 ? 0.35 : 1).normalize();
      // Upside-down wheels-on-loop is still "behind": fine. In the air,
      // turn slowly so a spin plays out on screen.
      const rate = grounded ? 5 : 1.2;
      dir.lerp(want, 1 - Math.exp(-rate * dt)).normalize();

      // Which way is up for the camera.
      const pinned = grounded && (car.onStick || carUp.y < 0.7);
      if (pinned) tmp.copy(carUp);
      else tmp.set(0, 1, 0);
      camUp.lerp(tmp, 1 - Math.exp(-(pinned ? 4 : 2.5) * dt)).normalize();

      // Flatten the view direction against "up" a little, so going down a
      // slope doesn't swing the camera overhead.
      const back = tmp.copy(dir).addScaledVector(camUp, -dir.dot(camUp) * 0.6).normalize();
      if (orbit) back.applyAxisAngle(camUp, orbit);
      if (!looking) orbit *= 1 - Math.min(1, dt * 1.5);
      const dist = setup.dist + Math.min(4, speed * 0.05);
      want.copy(car.pos).addScaledVector(back, -dist).addScaledVector(camUp, setup.height);
      pos.lerp(want, 1 - Math.exp(-(grounded ? 10 : 6) * dt));
      if (camUp.y > 0.8) {
        const g = heightAt(pos.x, pos.z) + 1.1;
        if (pos.y < g) pos.y = g;
      }
      look.copy(car.pos).addScaledVector(dir, 3).addScaledVector(camUp, setup.look);

      shake = Math.max(0, shake - dt * 2.5);
      camera.position.copy(pos);
      if (shake > 0) {
        const s = shake * shake * 0.35;
        camera.position.x += (Math.random() - 0.5) * s;
        camera.position.y += (Math.random() - 0.5) * s;
      }
      camera.up.copy(camUp);
      camera.lookAt(look);

      const targetFov = 62 + Math.min(14, speed * 0.24) + (boosting ? 5 : 0);
      fov += (targetFov - fov) * (1 - Math.exp(-3 * dt));
      if (Math.abs(camera.fov - fov) > 0.01) {
        camera.fov = fov;
        camera.updateProjectionMatrix();
      }
    },
    get lookAt() {
      return look;
    },
  };
}
