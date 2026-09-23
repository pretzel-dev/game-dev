/**
 * Keyboard, stick and touch, folded into one small set of axes.
 *
 * The touch controls are the ones that got the attention: a stick that only
 * needs a thumb, a throttle you can slide blind, and a boost button big enough
 * to hit while banking.
 */
import { clamp } from '../core/utils.js';

export function createInput({ canvas, actions = {}, onFirstInput } = {}) {
  const keys = Object.create(null);
  const stick = { pitch: 0, roll: 0 };
  let touchBoost = false;
  // A double-tap on a bank direction (or a double flick of the stick) asks
  // for an aileron roll. It is an event: sampled once, then cleared.
  let pendingTrick = 0;
  const lastTap = { dir: 0, at: -1 };
  const DOUBLE_TAP = 0.32;
  function tapRoll(dir) {
    const now = performance.now() / 1000;
    if (lastTap.dir === dir && now - lastTap.at < DOUBLE_TAP) {
      pendingTrick = dir;
      lastTap.at = -1;
    } else {
      lastTap.dir = dir;
      lastTap.at = now;
    }
  }
  // Half the world expects "up" to climb and half expects it to push the nose
  // down. Neither is wrong, so it is a preference rather than a decision.
  let invertPitch = false;
  const input = {
    pitch: 0,
    roll: 0,
    yaw: 0,
    boost: false,
    throttleAxis: 0,
    /** Set by the touch slider; consumed and cleared by the frame loop. */
    throttleSet: null,
    touching: false,
    lastActivity: 0,
    /** ±1 on the frame a roll is asked for. */
    trick: 0,
  };

  let awoken = false;
  const wake = () => {
    input.lastActivity = 0;
    if (awoken) return;
    awoken = true;
    onFirstInput?.();
  };

  /* ------------------------------------------------------------ keyboard --- */

  const ACTION_KEYS = {
    KeyC: 'camera',
    KeyH: 'hud',
    KeyM: 'sound',
    KeyP: 'photo',
    KeyL: 'light',
    KeyI: 'invertPitch',
    KeyX: 'smoke',
    Escape: 'escape',
  };

  addEventListener('keydown', (event) => {
    if (event.repeat) {
      keys[event.code] = true;
      return;
    }
    keys[event.code] = true;
    wake();
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') tapRoll(-1);
    if (event.code === 'KeyD' || event.code === 'ArrowRight') tapRoll(1);
    const action = ACTION_KEYS[event.code];
    if (action && actions[action]) {
      actions[action]();
      event.preventDefault();
    }
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
      event.preventDefault();
    }
  });
  addEventListener('keyup', (event) => {
    keys[event.code] = false;
  });
  addEventListener('blur', () => {
    for (const key of Object.keys(keys)) keys[key] = false;
    input.boost = false;
  });

  /* --------------------------------------------------------------- touch --- */

  const joy = document.querySelector('#joy');
  const knob = document.querySelector('#knob');
  const throttle = document.querySelector('#throttle');
  const throttleFill = document.querySelector('#throttleFill');
  const boostBtn = document.querySelector('#boostBtn');

  if (joy && knob) {
    let pointerId = null;
    const setStick = (event) => {
      const rect = joy.getBoundingClientRect();
      let dx = event.clientX - (rect.left + rect.width / 2);
      let dy = event.clientY - (rect.top + rect.height / 2);
      const max = rect.width * 0.34;
      const length = Math.hypot(dx, dy) || 1;
      if (length > max) {
        dx = (dx / length) * max;
        dy = (dy / length) * max;
      }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      const roll = clamp(dx / max, -1, 1);
      // A flick to the edge counts as a tap: two quick ones roll.
      if (Math.abs(roll) > 0.85 && Math.abs(stick.roll) <= 0.85) tapRoll(Math.sign(roll));
      stick.roll = roll;
      stick.pitch = clamp(-dy / max, -1, 1);
    };
    joy.addEventListener('pointerdown', (event) => {
      pointerId = event.pointerId;
      joy.setPointerCapture(pointerId);
      input.touching = true;
      setStick(event);
      wake();
    });
    joy.addEventListener('pointermove', (event) => {
      if (event.pointerId === pointerId) setStick(event);
    });
    const release = (event) => {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      input.touching = false;
      stick.pitch = 0;
      stick.roll = 0;
      knob.style.transform = 'translate(0, 0)';
    };
    joy.addEventListener('pointerup', release);
    joy.addEventListener('pointercancel', release);
  }

  if (throttle && throttleFill) {
    let pointerId = null;
    const setThrottle = (event) => {
      const rect = throttle.getBoundingClientRect();
      input.throttleSet = clamp(1 - (event.clientY - rect.top) / rect.height, 0, 1);
    };
    throttle.addEventListener('pointerdown', (event) => {
      pointerId = event.pointerId;
      throttle.setPointerCapture(pointerId);
      setThrottle(event);
      wake();
    });
    throttle.addEventListener('pointermove', (event) => {
      if (event.pointerId === pointerId) setThrottle(event);
    });
    const release = () => {
      pointerId = null;
    };
    throttle.addEventListener('pointerup', release);
    throttle.addEventListener('pointercancel', release);
  }

  const smokeBtn = document.querySelector('#smokeBtn');
  smokeBtn?.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    wake();
    actions.smoke?.();
  });

  if (boostBtn) {
    const press = (event) => {
      event.preventDefault();
      touchBoost = true;
      wake();
    };
    const release = () => {
      touchBoost = false;
    };
    boostBtn.addEventListener('pointerdown', press);
    boostBtn.addEventListener('pointerup', release);
    boostBtn.addEventListener('pointercancel', release);
    boostBtn.addEventListener('pointerleave', release);
  }

  /* ------------------------------------------- dragging in photo mode --- */

  if (canvas) {
    const pointers = new Map();
    let pinchDistance = 0;

    canvas.addEventListener('pointerdown', (event) => {
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      canvas.setPointerCapture?.(event.pointerId);
      wake();
    });
    canvas.addEventListener('pointermove', (event) => {
      const previous = pointers.get(event.pointerId);
      if (!previous) return;
      const dx = event.clientX - previous.x;
      const dy = event.clientY - previous.y;
      previous.x = event.clientX;
      previous.y = event.clientY;

      if (pointers.size >= 2) {
        const [a, b] = [...pointers.values()];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinchDistance) actions.zoom?.((pinchDistance - distance) * 2.4);
        pinchDistance = distance;
      } else {
        actions.orbit?.(dx, dy);
      }
    });
    const release = (event) => {
      pointers.delete(event.pointerId);
      if (pointers.size < 2) pinchDistance = 0;
    };
    canvas.addEventListener('pointerup', release);
    canvas.addEventListener('pointercancel', release);
    canvas.addEventListener('wheel', (event) => {
      event.preventDefault();
      actions.zoom?.(event.deltaY);
    }, { passive: false });
  }

  /* -------------------------------------------------------------- frame --- */

  function sample(dt) {
    const keyPitch = (keys.KeyW || keys.ArrowUp ? 1 : 0) - (keys.KeyS || keys.ArrowDown ? 1 : 0);
    const keyRoll = (keys.KeyD || keys.ArrowRight ? 1 : 0) - (keys.KeyA || keys.ArrowLeft ? 1 : 0);
    const keyYaw = (keys.KeyE ? 1 : 0) - (keys.KeyQ ? 1 : 0);

    input.pitch = clamp(keyPitch + stick.pitch, -1, 1) * (invertPitch ? -1 : 1);
    input.roll = clamp(keyRoll + stick.roll, -1, 1);
    input.yaw = clamp(keyYaw, -1, 1);
    input.throttleAxis = (keys.KeyR ? 1 : 0) - (keys.KeyF ? 1 : 0);
    input.boost = !!keys.Space || touchBoost;
    input.trick = pendingTrick;
    pendingTrick = 0;
    if (keyPitch || keyRoll || keyYaw || input.throttleAxis || stick.pitch || stick.roll) {
      input.lastActivity = 0;
    } else {
      input.lastActivity += dt;
    }
    return input;
  }

  /** Called by the frame loop once it has applied the slider value. */
  function clearThrottleSet() {
    input.throttleSet = null;
  }

  function setBoost(value) {
    touchBoost = value;
  }

  function setInvertPitch(value) {
    invertPitch = !!value;
    return invertPitch;
  }

  return {
    input,
    sample,
    clearThrottleSet,
    setBoost,
    setInvertPitch,
    get invertPitch() {
      return invertPitch;
    },
    keys,
    throttleFill,
  };
}
