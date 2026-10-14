/**
 * The few preferences worth remembering between visits. Never throws:
 * private browsing and locked-down storage are normal.
 */
const KEY = 'dustline.settings';
const defaults = { sound: true, camera: 0, light: 'afternoon' };

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
