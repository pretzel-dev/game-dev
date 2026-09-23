/**
 * The two or three preferences worth remembering between visits.
 * Never throws — private browsing and locked-down storage are normal.
 */
const KEY = 'covewind.settings';
const VERSION = 2;

const defaults = {
  light: null, // set by main.js from the palette default
  sound: true,
  camera: 0,
  invertPitch: true, // pull back to climb, the way a stick works
  version: VERSION,
};

/**
 * Preferences whose default has changed since. Somebody who flew before the
 * change has the old default written down; forget it rather than honour it,
 * once, instead of leaving them with the setting they never chose.
 */
const FORGET_ON_UPGRADE = ['invertPitch'];

function read() {
  try {
    const stored = JSON.parse(localStorage.getItem(KEY) || '{}');
    if (stored.version !== VERSION) {
      for (const key of FORGET_ON_UPGRADE) delete stored[key];
    }
    return { ...defaults, ...stored, version: VERSION };
  } catch {
    return { ...defaults };
  }
}

const state = read();

export const settings = {
  get(key) {
    return state[key];
  },
  set(key, value) {
    state[key] = value;
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable — the session still works, it just forgets */
    }
  },
};
