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

  /* ---------------------------------------------------------------- tilt --- */

  // Fly by tilting the phone. Whatever angle it is held at when tilt is
  // switched on (or recentred) is "level"; tip it away from you to dive,
  // towards you to climb, and roll it like a steering wheel to bank.
  const tilt = { on: false, pitch: 0, roll: 0, base: null, raw: null };
  const TILT_RANGE = 30; // degrees for full stick

  function screenAngle() {
    return (screen.orientation && screen.orientation.angle) ?? window.orientation ?? 0;
  }

  function onOrientation(event) {
    if (event.beta == null || event.gamma == null) return;
    // Work from the direction of "up" as the phone sees it rather than raw
    // beta/gamma, which fold over on themselves when the phone is held
    // upright — that fold was what made a straight-held phone climb.
    const b = (event.beta * Math.PI) / 180;
    const g = (event.gamma * Math.PI) / 180;
    const ux = -Math.cos(b) * Math.sin(g);
    const uy = Math.sin(b);
    const uz = Math.cos(b) * Math.cos(g);
    // Into screen axes, however the phone is turned.
    const angle = ((screenAngle() % 360) + 360) % 360;
    let sx = ux;
    let sy = uy;
    if (angle === 90) [sx, sy] = [-uy, ux];
    else if (angle === 270) [sx, sy] = [uy, -ux];
    else if (angle === 180) [sx, sy] = [-ux, -uy];
    // Pitch: how far the top of the screen is tipped up. Roll: how far the
    // right-hand side has gone down, like a steering wheel.
    const pitch = (Math.atan2(sy, uz) * 180) / Math.PI;
    const roll = (Math.asin(Math.max(-1, Math.min(1, -sx))) * 180) / Math.PI;
    tilt.raw = { pitch, roll };
    if (!tilt.base) tilt.base = { pitch, roll };
    let dp = pitch - tilt.base.pitch;
    if (dp > 180) dp -= 360;
    if (dp < -180) dp += 360;
    const dr = roll - tilt.base.roll;
    tilt.pitch = clamp(dp / TILT_RANGE, -1, 1);
    tilt.roll = clamp(dr / TILT_RANGE, -1, 1);
    // A quick flick of the wrist counts as a tap, so two of them roll.
    if (Math.abs(tilt.roll) > 0.95 && Math.abs(tilt.lastRoll ?? 0) <= 0.95) tapRoll(Math.sign(tilt.roll));
    tilt.lastRoll = tilt.roll;
  }

  /** Switch tilt steering; asks permission on iOS. Resolves to the new state. */
  async function setTilt(on) {
    if (on) {
      const DOE = window.DeviceOrientationEvent;
      if (!DOE) return (tilt.on = false);
      if (typeof DOE.requestPermission === 'function') {
        try {
          if ((await DOE.requestPermission()) !== 'granted') return (tilt.on = false);
        } catch {
          return (tilt.on = false);
        }
      }
      tilt.base = null;
      tilt.raw = null;
      addEventListener('deviceorientation', onOrientation);
      tilt.on = true;
      // Some browsers (and pages embedded in another page) hand out the
      // event but never send a reading. Give it a moment to prove itself.
      await new Promise((r) => setTimeout(r, 900));
      if (!tilt.raw) {
        removeEventListener('deviceorientation', onOrientation);
        return (tilt.on = false);
      }
    } else {
      removeEventListener('deviceorientation', onOrientation);
      tilt.on = false;
      tilt.pitch = tilt.roll = 0;
    }
    return tilt.on;
  }

  function recentreTilt() {
    if (tilt.raw) tilt.base = { ...tilt.raw };
  }

  /* -------------------------------------------------------------- frame --- */

  function sample(dt) {
    const keyPitch = (keys.KeyW || keys.ArrowUp ? 1 : 0) - (keys.KeyS || keys.ArrowDown ? 1 : 0);
    const keyRoll = (keys.KeyD || keys.ArrowRight ? 1 : 0) - (keys.KeyA || keys.ArrowLeft ? 1 : 0);
    const keyYaw = (keys.KeyE ? 1 : 0) - (keys.KeyQ ? 1 : 0);

    // Tilt stands in for the thumb stick while your thumb is off it.
    const tiltOn = tilt.on && !input.touching;
    // Tilting the top of the phone towards you (pull back) climbs, matching
    // the stick's "pull back" sense before any inversion is applied.
    // Tipping the top of the phone towards you climbs in "pull back" mode;
    // in "push forward" mode it is the other way round, like the stick.
    const tp = tiltOn ? shapeTilt(invertPitch ? -tilt.pitch : tilt.pitch) : 0;
    const tr = tiltOn ? shapeTilt(tilt.roll) : 0;
    input.pitch = clamp(clamp(keyPitch + stick.pitch, -1, 1) * (invertPitch ? -1 : 1) + tp, -1, 1);
    input.roll = clamp(keyRoll + stick.roll + tr, -1, 1);
    input.yaw = clamp(keyYaw, -1, 1);
    input.throttleAxis = (keys.KeyR ? 1 : 0) - (keys.KeyF ? 1 : 0);
    input.boost = !!keys.Space || touchBoost;
    input.trick = pendingTrick;
    pendingTrick = 0;
    if (keyPitch || keyRoll || keyYaw || input.throttleAxis || stick.pitch || stick.roll || Math.abs(tp) + Math.abs(tr) > 0.1) {
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

  // A small dead zone so a phone held roughly still flies straight.
  function shapeTilt(v) {
    const m = Math.abs(v);
    return m < 0.15 ? 0 : Math.sign(v) * ((m - 0.15) / 0.85);
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
    setTilt,
    recentreTilt,
    get tilt() {
      return tilt.on;
    },
    get invertPitch() {
      return invertPitch;
    },
    keys,
    throttleFill,
  };
}
