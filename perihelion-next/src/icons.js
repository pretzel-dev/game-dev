// One small set of line icons for the whole game: 16×16, drawn with the
// current text colour, so they sit in labels, panels and notes alike and look
// the same on every device (no emoji).
const P = {
  // Map and controls
  guns: 'M3 12h10M5 12V9h6v3M8 9V3.5',
  attack: 'M3 3l10 10M13 3L3 13M3 10v3h3M13 10v3h-3',
  fleet: 'M5 3.5l6 4.5-6 4.5',
  probe: 'M8 2.5l5 5.5-5 5.5-5-5.5z',
  incoming: 'M4 5l4 6 4-6',
  reinforce: 'M4 11l4-6 4 6',
  system: 'M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M8 8m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0',
  focus: 'M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M8 8m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0',
  pause: 'M5.5 3.5v9M10.5 3.5v9',
  play: 'M5 3l8 5-8 5z',
  close: 'M4 4l8 8M12 4l-8 8',
  assist: 'M12.5 5.5A5 5 0 1 0 13 9M12.5 2v3.5H9',
  spy: 'M2.5 7.5h11M4.5 7.5l1.5-4h4l1.5 4M5.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10.5 11.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 11.5h1',
  dark: 'M10.5 2.5a5.5 5.5 0 1 0 3 9.5a4.5 4.5 0 0 1-3-9.5z',
  // Special worlds
  seam: 'M8 1.5l4.5 4-4.5 8.5-4.5-8.5zM3.5 5.5h9M6 5.5l2 8.5 2-8.5',
  relay: 'M3.5 9.5a5 5 0 0 0 7-7zM7 6l4.5-4.5M6 11l-2 3.5h7L9 11',
  depot: 'M8 1.5C11 5.5 12 7.5 12 10a4 4 0 0 1-8 0c0-2.5 1-4.5 4-8.5zM6.5 10.5a1.5 1.5 0 0 0 1.5 1.5',
  post: 'M8 9v5.5M5.5 14.5h5M5.2 6.2a4 4 0 0 1 5.6 0M3 4a7 7 0 0 1 10 0M8 8.5m-.6 0a.6.6 0 1 0 1.2 0a.6.6 0 1 0-1.2 0',
  fortress: 'M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5z',
  archive: 'M2 3.5h4.5A1.5 1.5 0 0 1 8 5v9a1.5 1.5 0 0 0-1.5-1.5H2zM14 3.5H9.5A1.5 1.5 0 0 0 8 5v9a1.5 1.5 0 0 1 1.5-1.5H14z',
  hulk: 'M8 5v9.5M5 7.5h6M2.5 10.5a5.5 4.5 0 0 0 11 0M8 2.2m-1.3 0a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0',
  forge: 'M8 1.5v2.5M8 12v2.5M1.5 8H4M12 8h2.5M3.4 3.4l1.8 1.8M10.8 10.8l1.8 1.8M12.6 3.4l-1.8 1.8M5.2 10.8l-1.8 1.8M8 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0',
  // Events
  comet: 'M5 11m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7 9l6.5-6.5M7.8 10.8l5-3.3M5.2 8.2l3.3-5',
  derelict: 'M1.5 9.5l3.5-3h6l3.5 3-3.5 3H5zM9 6.5L7.5 4M6.5 9.5l1.5 1.5 1-2',
  signal: 'M1.5 8.5h3l2-5 3 9 2-4h3',
  wreck: 'M8 1.5v13M2.4 4.8l11.2 6.4M13.6 4.8L2.4 11.2',
  convoy: 'M2 4.5l3 3.5-3 3.5M6.5 4.5l3 3.5-3 3.5M11 4.5l3 3.5-3 3.5',
  cache: 'M2.5 5L8 2l5.5 3v6L8 14l-5.5-3zM2.5 5L8 8l5.5-3M8 8v6',
  // Research branches
  drives: 'M8 1.5l2.5 5h-5zM5.5 6.5h5v4h-5zM6.5 10.5L5 14.5M9.5 10.5l1.5 4M8 10.5v4',
  sensors: 'M2.5 10a6 6 0 0 0 8.5-8.5zM6.8 6.2l5-5M12 1.5h2v2',
  intel: 'M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8zM8 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0',
  weapons: 'M2 14l8-8M9.5 6.5l1.5-4 2.5 2.5-4 1.5M3 10l3 3',
  armour: 'M8 1.5l5.5 3v7L8 14.5l-5.5-3v-7zM8 4.5v7M5 6.5v3M11 6.5v3',
  industry: 'M3 13l5.5-5.5M9.2 2.6a3.3 3.3 0 1 0 4.2 4.2l-2.2-.4-.6-1.6zM2 14l1-1',
  // Joint techs
  ansible: 'M8 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4.6 4.6a4.8 4.8 0 0 0 0 6.8M11.4 4.6a4.8 4.8 0 0 1 0 6.8M2.2 2.2a8.2 8.2 0 0 0 0 11.6M13.8 2.2a8.2 8.2 0 0 1 0 11.6',
  targeting: 'M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0M8 8m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8 1v3M8 12v3M1 8h3M12 8h3',
  kinetic: 'M1.5 8h7M5.5 4.5L9 8l-3.5 3.5M11 3v10M13.5 5v6',
  torch: 'M8 1.5c2.5 3 3.5 5 3.5 7.5a3.5 3.5 0 0 1-7 0c0-1.5.7-2.5 1.5-3.5.3 1.5 1 2 2 2 0-2-.5-4 0-6z',
  hardened: 'M8 1.5l5.5 2v4.5c0 3.2-2.3 5.4-5.5 6.5-3.2-1.1-5.5-3.3-5.5-6.5V3.5zM8 5.5v5M5.5 8h5',
  pdnet: 'M2 12.5a6 6 0 0 1 12 0zM4.6 6.2L3.4 4M8 5V2.5M11.4 6.2L12.6 4',
  // Megaprojects
  sundiver: 'M5 8m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9.5 3.5h5v9h-5zM9.5 8h5M12 3.5v9',
  massdriver: 'M2 13L13 2M4.5 13.5L14 4M10.5 2h3.5v3.5',
  ringyard: 'M8 8m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M8 8m-6.5 0a6.5 2.5 0 1 0 13 0a6.5 2.5 0 1 0-13 0',
  citadel: 'M2.5 14.5v-9h2v2h2v-2h3v2h2v-2h2v9zM6.5 14.5v-3h3v3',
  telescope: 'M2 10l9-5 1.5 3-9 5zM6.5 11.5l-2 3M7.5 11l2 3.5M11 5l1.5-1 1.5 3-1.5 1',
  star: 'M8 1.5l1.9 4.2 4.6.4-3.5 3 1.1 4.5L8 11.2l-4.1 2.4 1.1-4.5-3.5-3 4.6-.4z',
};
import { LUCIDE } from './lucide.js';
/** Inner SVG markup and viewBox for an icon (Lucide ones are on a 24 grid). */
export const iconBody = (name) => (LUCIDE[name] ? { vb: '0 0 24 24', body: LUCIDE[name], lu: true } : { vb: '0 0 16 16', body: `<path d="${P[name]}"/>`, lu: false });
export const icon = (name, cls = '') => { const i = iconBody(name); return `<svg class="ic${i.lu ? ' lu' : ''}${cls ? ` ${cls}` : ''}" viewBox="${i.vb}" aria-hidden="true">${i.body}</svg>`; };

