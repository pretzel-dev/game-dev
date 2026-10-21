/**
 * Keyboard, touch and gamepad, folded into a few controls:
 *
 *  - steer: a stick (left and right turn her, up swims forward);
 *  - up and down: swim up towards the light, or down to the sea floor;
 *  - the big button: whatever's nearby (sit, ride, jump, swim off);
 *  - twirl (or let go of a dolphin);
 *  - and on a phone, drag on the right half of the screen to look round.
 *
 * Touch: the stick appears under your thumb anywhere on the left half.
 */
import { clamp } from './core/utils.js';

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
  const touch = { mx: 0, my: 0, up: false, down: false, look: 0, looking: false };
  let actPressed = false;
  let twirlPressed = false;
  const firstInput = () => {
    if (!first) {
      first = true;
      onFirstInput();
    }
  };

  const KEYMAP = {
    KeyW: 'fwd', ArrowUp: 'fwd',
    KeyS: 'back', ArrowDown: 'back',
    KeyA: 'left', ArrowLeft: 'left',
    KeyD: 'right', ArrowRight: 'right',
    Space: 'up', KeyR: 'up', PageUp: 'up',
    ShiftLeft: 'down', ShiftRight: 'down', KeyC: 'down', KeyF: 'down', PageDown: 'down',
  };

  addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    firstInput();
    const k = KEYMAP[e.code];
    if (k) {
      keys.add(k);
      if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault();
      return;
    }
    if (e.repeat) return;
    if (e.code === 'KeyE' || e.code === 'Enter') actPressed = true;
    else if (e.code === 'KeyQ' || e.code === 'KeyT') twirlPressed = true;
    else if (e.code === 'KeyM') actions.sound?.();
    else if (e.code === 'KeyH') actions.home?.();
    else if (e.code === 'Minus' || e.code === 'NumpadSubtract') actions.zoom?.(1.15);
    else if (e.code === 'Equal' || e.code === 'NumpadAdd') actions.zoom?.(1 / 1.15);
  });
  addEventListener('keyup', (e) => {
    const k = KEYMAP[e.code];
    if (k) keys.delete(k);
  });
  addEventListener('blur', () => keys.clear());

  // Never let the page zoom: Safari ignores user-scalable=no.
  const stop = (e) => e.preventDefault();
  document.addEventListener('gesturestart', stop, { passive: false });
  document.addEventListener('gesturechange', stop, { passive: false });
  document.addEventListener('gestureend', stop, { passive: false });
  document.addEventListener(
    'touchmove',
    (e) => {
      if (e.touches.length > 1) e.preventDefault();
    },
    { passive: false }
  );
  let lastTouchEnd = 0;
  document.addEventListener(
    'touchend',
    (e) => {
      const now = performance.now();
      if (now - lastTouchEnd < 320 && !e.target.closest?.('button, input')) e.preventDefault();
      lastTouchEnd = now;
    },
    { passive: false }
  );
  document.addEventListener('dblclick', stop, { passive: false });

  /* ----------------------------------------------------------- the stick --- */
  const pad = document.querySelector('#stickPad');
  const knob = document.querySelector('#stickKnob');
  const base = document.querySelector('#stickBase');
  let stickId = null;
  let ox = 0;
  let oy = 0;
  const RANGE = 60;
  if (pad) {
    pad.addEventListener('pointerdown', (e) => {
      firstInput();
      if (stickId !== null) return;
      stickId = e.pointerId;
      capture(pad, e.pointerId);
      ox = e.clientX;
      oy = e.clientY;
      if (base) {
        base.style.left = `${ox}px`;
        base.style.top = `${oy}px`;
        base.classList.add('on');
      }
      e.preventDefault();
    });
    pad.addEventListener('pointermove', (e) => {
      if (e.pointerId !== stickId) return;
      let dx = (e.clientX - ox) / RANGE;
      let dy = (e.clientY - oy) / RANGE;
      const len = Math.hypot(dx, dy);
      if (len > 1.4) {
        ox += ((e.clientX - ox) * (len - 1.4)) / len;
        oy += ((e.clientY - oy) * (len - 1.4)) / len;
        if (base) {
          base.style.left = `${ox}px`;
          base.style.top = `${oy}px`;
        }
        dx /= len / 1.4;
        dy /= len / 1.4;
      }
      const m = Math.min(1, Math.hypot(dx, dy));
      const a = Math.atan2(dy, dx);
      const s = m < 0.15 ? 0 : Math.min(1, (m - 0.15) / 0.55);
      touch.mx = Math.cos(a) * s;
      touch.my = -Math.sin(a) * s;
      if (knob) knob.style.transform = `translate(${Math.cos(a) * m * RANGE * 0.75}px, ${Math.sin(a) * m * RANGE * 0.75}px)`;
    });
    const end = (e) => {
      if (e.pointerId !== stickId) return;
      stickId = null;
      touch.mx = 0;
      touch.my = 0;
      if (knob) knob.style.transform = '';
      base?.classList.remove('on');
    };
    pad.addEventListener('pointerup', end);
    pad.addEventListener('pointercancel', end);
  }

  /* ------------------------------------------ drag to look round (touch) --- */
  const lookPad = document.querySelector('#lookPad');
  let lookId = null;
  let lastX = 0;
  if (lookPad) {
    lookPad.addEventListener('pointerdown', (e) => {
      firstInput();
      if (lookId !== null) return;
      lookId = e.pointerId;
      lastX = e.clientX;
      capture(lookPad, e.pointerId);
      touch.looking = true;
    });
    lookPad.addEventListener('pointermove', (e) => {
      if (e.pointerId !== lookId) return;
      touch.look += e.clientX - lastX;
      lastX = e.clientX;
    });
    const end = (e) => {
      if (e.pointerId !== lookId) return;
      lookId = null;
      touch.looking = false;
    };
    lookPad.addEventListener('pointerup', end);
    lookPad.addEventListener('pointercancel', end);
  }

  /* ------------------------------------------------------------- buttons --- */
  const hold = (selector, field) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const ids = new Set();
    el.addEventListener('pointerdown', (e) => {
      firstInput();
      ids.add(e.pointerId);
      capture(el, e.pointerId);
      touch[field] = true;
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
  hold('#upBtn', 'up');
  hold('#downBtn', 'down');
  const tap = (selector, fn) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.addEventListener('pointerdown', (e) => {
      firstInput();
      e.preventDefault();
      el.classList.add('down');
      fn();
    });
    const up = () => el.classList.remove('down');
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('pointerleave', up);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  };
  tap('#actBtn', () => (actPressed = true));
  tap('#twirlBtn', () => (twirlPressed = true));

  /* ------------------------------------------------------------- gamepad --- */
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
      if (pressed(0)) actPressed = true;
      if (pressed(2) || pressed(1)) twirlPressed = true;
      if (pressed(9)) actions.menu?.();
      const dz = (v) => (Math.abs(v) < 0.15 ? 0 : v);
      const out = { mx: dz(gp.axes[0] || 0), my: -dz(gp.axes[1] || 0), rise: b(7) - b(6) + (b(5) - b(4)), look: dz(gp.axes[2] || 0) };
      if (out.mx || out.my || out.rise) firstInput();
      return out;
    }
    return null;
  }

  return {
    sample() {
      const gp = readGamepad();
      const kx = (keys.has('right') ? 1 : 0) - (keys.has('left') ? 1 : 0);
      const ky = (keys.has('fwd') ? 1 : 0) - (keys.has('back') ? 1 : 0);
      const turn = clamp(kx + touch.mx + (gp?.mx || 0), -1, 1);
      const forward = clamp(ky + touch.my + (gp?.my || 0), -1, 1);
      const rise = clamp((keys.has('up') || touch.up ? 1 : 0) - (keys.has('down') || touch.down ? 1 : 0) + (gp?.rise || 0), -1, 1);
      const out = { turn, forward, rise, action: actPressed, twirl: twirlPressed, look: touch.look + (gp?.look || 0) * 12, looking: touch.looking || !!gp?.look };
      actPressed = false;
      twirlPressed = false;
      touch.look = 0;
      return out;
    },
  };
}
