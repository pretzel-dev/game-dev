/**
 * The few preferences worth remembering between visits. Never throws:
 * private browsing and locked-down storage are normal.
 */
const KEY = 'bellbrook.settings';
const defaults = { sound: true, light: 'day', paint: 'red', view: 0 };

function read() {
  try {
    return { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || '{}') };
  } catch {
    return { ...defaults };
  }
}

const state = read();

export const settings = {
  get: (key) => state[key],
  set(key, value) {
    state[key] = value;
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable: it just forgets */
    }
  },
};
