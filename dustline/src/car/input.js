/**
 * Keyboard, touch and gamepad, folded into one set of controls:
 * throttle, brake, steer, boost, handbrake, and in the air pitch and roll.
 *
 * In the air, W/S flip the car, but only if pressed after take-off: you will
 * be holding W when you leave the ramp, and that shouldn't flip you.
 */
import { clamp } from '../core/utils.js';

/** Keep a finger's moves even if it slides off; harmless if refused. */
function capture(el, id) {
  try {
    el.setPointerCapture(id);
  } catch {
    /* synthetic or already-gone pointer */
  }
}

export function createInput({ actions = {}, onFirstInput = () => {} } = {}) {
  const keys = new Set();
  let first = false;
  const latched = { up: false, down: false };
  let wasAir = false;
  let lastActivity = 0;
  const touch = { steer: 0, pitch: 0, gas: false, brake: false, boost: false, active: false };

  const firstInput = () => {
    if (!first) {
      first = true;
      onFirstInput();
    }
  };

  const KEYMAP = {
    KeyW: 'up', ArrowUp: 'up',
    KeyS: 'down', ArrowDown: 'down',
    KeyA: 'left', ArrowLeft: 'left',
    KeyD: 'right', ArrowRight: 'right',
    KeyQ: 'rollL', KeyE: 'rollR',
    Space: 'handbrake',
    ShiftLeft: 'boost', ShiftRight: 'boost',
  };

  addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    firstInput();
    lastActivity = 0;
    const k = KEYMAP[e.code];
    if (k) {
      keys.add(k);
      if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault();
      return;
    }
    if (e.repeat) return;
    if (e.code === 'KeyR') actions.reset?.();
    else if (e.code === 'KeyC') actions.camera?.();
    else if (e.code === 'KeyM') actions.sound?.();
    else if (e.code === 'KeyH') actions.hud?.();
    else if (e.code === 'KeyL') actions.light?.();
  });
  addEventListener('keyup', (e) => {
    const k = KEYMAP[e.code];
    if (k) keys.delete(k);
  });
  addEventListener('blur', () => keys.clear());

  /* -------------------------------------------------------------- touch --- */
  const pad = document.querySelector('#steerPad');
  const knob = document.querySelector('#steerKnob');
  const base = document.querySelector('#steerBase');
  let steerId = null;
  let ox = 0;
  let oy = 0;
  const RANGE = 62;
  if (pad) {
    pad.addEventListener('pointerdown', (e) => {
      firstInput();
      steerId = e.pointerId;
      capture(pad, e.pointerId);
      ox = e.clientX;
      oy = e.clientY;
      touch.active = true;
      if (base) {
        base.style.left = `${ox}px`;
        base.style.top = `${oy}px`;
        base.classList.add('on');
      }
      e.preventDefault();
    });
    const move = (e) => {
      if (e.pointerId !== steerId) return;
      const dx = clamp((e.clientX - ox) / RANGE, -1, 1);
      const dy = clamp((e.clientY - oy) / RANGE, -1, 1);
      touch.steer = dx;
      touch.pitch = -dy; // push up = nose down
      if (knob) knob.style.transform = `translate(${dx * RANGE * 0.7}px, ${dy * RANGE * 0.7}px)`;
    };
    const end = (e) => {
      if (e.pointerId !== steerId) return;
      steerId = null;
      touch.steer = 0;
      touch.pitch = 0;
      if (knob) knob.style.transform = '';
      base?.classList.remove('on');
    };
    pad.addEventListener('pointermove', move);
    pad.addEventListener('pointerup', end);
    pad.addEventListener('pointercancel', end);
  }
  const hold = (selector, field) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const ids = new Set();
    el.addEventListener('pointerdown', (e) => {
      firstInput();
      ids.add(e.pointerId);
      capture(el, e.pointerId);
      touch[field] = true;
      touch.active = true;
      el.classList.add('down');
      e.preventDefault();
    });
    const up = (e) => {
      ids.delete(e.pointerId);
      if (!ids.size) {
        touch[field] = false;
        el.classList.remove('down');
      }
    };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  };
  hold('#gasBtn', 'gas');
  hold('#brakeBtn', 'brake');
  hold('#boostBtn', 'boost');

  /* ------------------------------------------------------------ gamepad --- */
  const padPrev = [];
  function readGamepad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const gp of pads) {
      if (!gp || !gp.connected) continue;
      const b = (i) => gp.buttons[i]?.value ?? 0;
      const pressed = (i) => {
        const now = b(i) > 0.5;
        const was = padPrev[i];
        padPrev[i] = now;
        return now && !was;
      };
      if (pressed(3)) actions.camera?.();
      if (pressed(9) || pressed(8)) actions.reset?.();
      const dz = (v) => (Math.abs(v) < 0.12 ? 0 : v);
      const out = {
        steer: dz(gp.axes[0] || 0),
        pitch: -dz(gp.axes[1] || 0),
        throttle: b(7),
        brake: b(6),
        boost: b(0) > 0.5,
        handbrake: b(1) > 0.5,
        roll: b(5) - b(4),
      };
      if (out.throttle || out.brake || out.steer || out.boost) {
        firstInput();
        lastActivity = 0;
      }
      return out;
    }
    return null;
  }

  return {
    get lastActivity() {
      return lastActivity;
    },
    get touchActive() {
      return touch.active;
    },
    /** Sample the controls; `airborne` drives the W/S latch. */
    sample(dt, airborne) {
      lastActivity += dt;
      if (airborne && !wasAir) {
        latched.up = keys.has('up');
        latched.down = keys.has('down');
      }
      wasAir = airborne;
      if (!keys.has('up')) latched.up = false;
      if (!keys.has('down')) latched.down = false;

      const kSteer = (keys.has('right') ? 1 : 0) - (keys.has('left') ? 1 : 0);
      const kPitch = (keys.has('up') && !latched.up ? 1 : 0) - (keys.has('down') && !latched.down ? 1 : 0);
      const kRoll = (keys.has('rollR') ? 1 : 0) - (keys.has('rollL') ? 1 : 0);
      const gp = readGamepad();
      const steer = clamp(kSteer + touch.steer + (gp?.steer || 0), -1, 1);
      if (touch.steer || touch.gas || touch.brake) lastActivity = 0;
      return {
        throttle: Math.max(keys.has('up') ? 1 : 0, touch.gas ? 1 : 0, gp?.throttle || 0),
        brake: Math.max(keys.has('down') ? 1 : 0, touch.brake ? 1 : 0, gp?.brake || 0),
        steer,
        boost: keys.has('boost') || touch.boost || !!gp?.boost,
        handbrake: keys.has('handbrake') || !!gp?.handbrake,
        pitch: clamp(kPitch + (touch.pitch || 0) + (gp?.pitch || 0), -1, 1),
        roll: clamp(kRoll + (gp?.roll || 0), -1, 1),
        touchBrake: touch.brake,
      };
    },
  };
}
