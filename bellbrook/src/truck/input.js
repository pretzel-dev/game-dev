/**
 * Keyboard, mouse, touch and gamepad, folded into one small set of controls:
 *
 *  - move: a direction on the screen (x right, y up), 0..1 long;
 *  - spray: hold to spray water (aimed at the nearest fire, or ahead);
 *  - aim: a point on the screen to spray at (a finger on the right half,
 *    or the mouse button held down), which overrides the automatic aim;
 *  - and taps: siren, horn, ladder, turn the view, sound, menu.
 *
 * Touch: drag anywhere on the left half to drive (the stick appears under
 * your thumb). Touch anywhere on the right half to spray there.
 */
import { clamp } from '../core/utils.js';

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
  const touch = { mx: 0, my: 0, spray: false, aim: null };
  const mouse = { aim: null };
  let lastActivity = 0;
  const firstInput = () => {
    lastActivity = 0;
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
    Space: 'spray', Enter: 'spray', NumpadEnter: 'spray',
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
    if (e.code === 'KeyF' || e.code === 'KeyN') actions.siren?.();
    else if (e.code === 'KeyH' || e.code === 'KeyB') actions.horn?.();
    else if (e.code === 'KeyL') actions.ladder?.();
    else if (e.code === 'KeyQ') actions.turn?.(-1);
    else if (e.code === 'KeyE') actions.turn?.(1);
    else if (e.code === 'KeyM') actions.sound?.();
    else if (e.code === 'KeyT') actions.light?.();
    else if (e.code === 'KeyC') actions.camera?.();
    else if (e.code === 'Minus' || e.code === 'NumpadSubtract') actions.zoom?.(1.15);
    else if (e.code === 'Equal' || e.code === 'NumpadAdd') actions.zoom?.(1 / 1.15);
  });
  addEventListener('keyup', (e) => {
    const k = KEYMAP[e.code];
    if (k) keys.delete(k);
  });
  addEventListener('blur', () => {
    keys.clear();
    mouse.aim = null;
  });

  // Never let the page zoom: Safari ignores user-scalable=no, so stop its
  // pinch gestures, two-finger moves and double-tap zoom by hand.
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
      if (now - lastTouchEnd < 320 && !e.target.closest?.('button')) e.preventDefault();
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
      // Let the stick follow the thumb if it wanders too far.
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
      // A small dead zone, then full speed quickly: little thumbs don't do fine control.
      const s = m < 0.15 ? 0 : Math.min(1, (m - 0.15) / 0.55);
      touch.mx = Math.cos(a) * s;
      touch.my = -Math.sin(a) * s;
      if (knob) knob.style.transform = `translate(${Math.cos(a) * Math.min(m, 1) * RANGE * 0.75}px, ${Math.sin(a) * Math.min(m, 1) * RANGE * 0.75}px)`;
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

  /* ---------------------------------------------- touch to spray there --- */
  const aimPad = document.querySelector('#aimPad');
  let aimId = null;
  if (aimPad) {
    aimPad.addEventListener('pointerdown', (e) => {
      firstInput();
      if (aimId !== null) return;
      aimId = e.pointerId;
      capture(aimPad, e.pointerId);
      touch.aim = { x: e.clientX, y: e.clientY };
      e.preventDefault();
    });
    aimPad.addEventListener('pointermove', (e) => {
      if (e.pointerId === aimId) touch.aim = { x: e.clientX, y: e.clientY };
    });
    const end = (e) => {
      if (e.pointerId !== aimId) return;
      aimId = null;
      touch.aim = null;
    };
    aimPad.addEventListener('pointerup', end);
    aimPad.addEventListener('pointercancel', end);
  }

  /* --------------------------------------------- mouse: click to spray --- */
  const canvas = () => document.querySelector('canvas');
  addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0 || e.target !== canvas()) return;
    firstInput();
    mouse.aim = { x: e.clientX, y: e.clientY };
  });
  addEventListener('pointermove', (e) => {
    if (e.pointerType === 'mouse' && mouse.aim) mouse.aim = { x: e.clientX, y: e.clientY };
  });
  addEventListener('pointerup', (e) => {
    if (e.pointerType === 'mouse') mouse.aim = null;
  });
  addEventListener(
    'wheel',
    (e) => {
      if (e.target !== canvas()) return;
      actions.zoom?.(e.deltaY > 0 ? 1.1 : 1 / 1.1);
    },
    { passive: true }
  );

  /* -------------------------------------------------------------- buttons --- */
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
  hold('#sprayBtn', 'spray');
  const tap = (selector, action) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.addEventListener('pointerdown', (e) => {
      firstInput();
      e.preventDefault();
      el.classList.add('down');
      action();
    });
    const up = () => el.classList.remove('down');
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('pointerleave', up);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  };
  tap('#sirenBtn', () => actions.siren?.());
  tap('#hornBtn', () => actions.horn?.());
  tap('#ladderBtn', () => actions.ladder?.());

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
      if (pressed(2)) actions.siren?.();
      if (pressed(1)) actions.horn?.();
      if (pressed(3)) actions.ladder?.();
      if (pressed(4)) actions.turn?.(-1);
      if (pressed(5)) actions.turn?.(1);
      if (pressed(9)) actions.menu?.();
      const dz = (v) => (Math.abs(v) < 0.15 ? 0 : v);
      const out = {
        mx: dz(gp.axes[0] || 0),
        my: -dz(gp.axes[1] || 0),
        ax: dz(gp.axes[2] || 0),
        ay: -dz(gp.axes[3] || 0),
        spray: b(0) > 0.5 || b(7) > 0.3,
      };
      if (out.mx || out.my || out.spray || out.ax || out.ay) firstInput();
      return out;
    }
    return null;
  }

  return {
    get lastActivity() {
      return lastActivity;
    },
    sample(dt) {
      lastActivity += dt;
      const kx = (keys.has('right') ? 1 : 0) - (keys.has('left') ? 1 : 0);
      const ky = (keys.has('up') ? 1 : 0) - (keys.has('down') ? 1 : 0);
      const gp = readGamepad();
      let mx = kx + touch.mx + (gp?.mx || 0);
      let my = ky + touch.my + (gp?.my || 0);
      const m = Math.hypot(mx, my);
      if (m > 1) {
        mx /= m;
        my /= m;
      }
      if (touch.mx || touch.my || touch.spray || touch.aim) lastActivity = 0;
      const stickAim = gp && (gp.ax || gp.ay) ? { x: clamp(gp.ax, -1, 1), y: clamp(gp.ay, -1, 1) } : null;
      return {
        mx,
        my,
        spray: keys.has('spray') || touch.spray || !!gp?.spray || !!touch.aim || !!mouse.aim || !!stickAim,
        aim: touch.aim || mouse.aim,
        stickAim,
      };
    },
  };
}
