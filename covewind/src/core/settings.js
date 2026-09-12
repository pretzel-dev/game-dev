/**
 * The two or three preferences worth remembering between visits.
 * Never throws — private browsing and locked-down storage are normal.
 */
const KEY = 'covewind.settings';

const defaults = {
  light: null, // set by main.js from the palette default
  sound: true,
  camera: 0,
};

function read() {
  try {
    return { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || '{}') };
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
