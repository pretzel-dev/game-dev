/**
 * A camera that swims along behind the mermaid, a little above her, and
 * swings round after her as she turns. When she sits down it drifts round
 * to the front so you can see her face. It stays out of rocks and walls
 * (coming in closer instead), off the sea floor, and never sits right on
 * the surface of the water: at the top it pops up above it to see the
 * ships and gulls.
 */
import { Vector3 } from 'three';
import { angleDelta, clamp, damp } from './core/utils.js';
import { heightAt } from './world/ocean.js';
import { insideSomething } from './world/collide.js';

export const CHASE = { distance: 6.5, height: 1.6, ride: 10, sit: 5.5, min: 3.5, max: 16 };

export function createCamera(camera, ocean) {
  const focus = new Vector3();
  let yaw = 0;
  let dist = CHASE.distance;
  let zoom = 1;
  let look = 0; // extra yaw from dragging to look round
  let pull = 1;
  let shake = 0;
  const p = { x: 0, y: 0, z: 0 };

  function place(m, dt, snap = false) {
    // Sitting, or doing an emote (other than a flip): come round to see her face.
    const sitting = m.mode === 'sit' || m.mode === 'throne' || (m.emote && m.emote.kind !== 'flip' && m.mode !== 'ride' && m.mode !== 'leap');
    const riding = m.mode === 'ride' || m.mode === 'leap';
    // Sitting: look at her from the front, a little to one side.
    const want = sitting ? m.yaw + Math.PI + 0.5 + Math.sin(m.time * 0.1) * 0.3 : m.yaw;
    const rate = snap ? 1 : Math.min(1, dt * (sitting ? 1.2 : 2.5 + Math.min(4, m.speed) * 0.3));
    yaw += angleDelta(yaw, want + look) * rate;
    const d = (riding ? CHASE.ride : sitting ? CHASE.sit : CHASE.distance) * zoom;
    dist = snap ? d : damp(dist, d, 2, dt);
    focus.x = snap ? m.x : damp(focus.x, m.x, 10, dt);
    focus.y = snap ? m.y : damp(focus.y, m.y, 8, dt);
    focus.z = snap ? m.z : damp(focus.z, m.z, 10, dt);

    const fx = Math.sin(yaw);
    const fz = -Math.cos(yaw);
    // Keep the view clear: test along the line out from her, and come in
    // closer if anything's in the way.
    let clear = 1;
    for (let k = 1; k <= 8; k++) {
      const u = k / 8;
      p.x = focus.x - fx * dist * u;
      p.y = focus.y + CHASE.height * u;
      p.z = focus.z - fz * dist * u;
      if (insideSomething(ocean, p, 0.35)) {
        clear = Math.max(0.3, (k - 1) / 8);
        break;
      }
    }
    pull = snap ? clear : clear < pull ? damp(pull, clear, 20, dt) : damp(pull, clear, 2, dt);
    let cx = focus.x - fx * dist * pull;
    let cy = focus.y + CHASE.height * (0.6 + 0.4 * pull) + (sitting ? 0.3 : 0);
    let cz = focus.z - fz * dist * pull;
    // Never on the surface itself: above it at the top, below it otherwise.
    if (m.atSurface || m.mode === 'sit') cy = Math.max(cy, 1.4);
    else cy = Math.min(cy, -0.7);
    cy = Math.max(cy, heightAt(cx, cz) + 0.9);
    if (shake > 0) {
      cx += (Math.random() - 0.5) * shake;
      cy += (Math.random() - 0.5) * shake;
      shake = Math.max(0, shake - dt * 2);
    }
    camera.position.set(cx, cy, cz);
    const ahead = sitting ? 0 : 2;
    camera.lookAt(focus.x + fx * ahead, focus.y + (sitting ? 0.6 : 0.3), focus.z + fz * ahead);
  }

  return {
    get yaw() {
      return yaw;
    },
    reset(m) {
      place(m, 1, true);
    },
    update(m, dt) {
      place(m, dt);
    },
    /** Dragging on the right of the screen turns the view a little (it springs back). */
    lookRound(dx, held, dt) {
      if (held) look = clamp(look + dx * 0.006, -2.2, 2.2);
      else look = damp(look, 0, 1.2, dt);
    },
    zoom(f) {
      zoom = clamp(zoom * f, CHASE.min / CHASE.distance, CHASE.max / CHASE.distance);
    },
    kick(s) {
      shake = Math.max(shake, s);
    },
    get underwater() {
      return camera.position.y < 0;
    },
  };
}
