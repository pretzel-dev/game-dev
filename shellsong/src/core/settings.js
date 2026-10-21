/**
 * The few preferences worth remembering between visits. Never throws:
 * private browsing and locked-down storage are normal.
 */
const KEY = 'shellsong.settings';
const defaults = {
  sound: true,
  music: true,
  look: { hair: 'gold', skin: 'peach', top: 'pink', tail: 'teal', crown: 'gold', throne: 'pink' },
  name: '',
  treasure: [],
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
