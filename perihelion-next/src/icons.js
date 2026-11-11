// One small set of hairline icons for the whole game: 16×16, drawn in the
// current text colour. The interface speaks almost entirely in these.
const P = {
  // Controls
  pause: 'M5.5 3.5v9M10.5 3.5v9',
  play: 'M5 3l8 5-8 5z',
  close: 'M4 4l8 8M12 4l-8 8',
  menu: 'M3 4.5h10M3 8h10M3 11.5h10',
  back: 'M10 3.5L5.5 8l4.5 4.5',
  system: 'M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M8 8m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0',
  focus: 'M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M8 8m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0',
  sound: 'M3 6.5v3h2.5L9 12.5v-9L5.5 6.5zM11 6a3 3 0 0 1 0 4M12.5 4.5a5 5 0 0 1 0 7',
  mute: 'M3 6.5v3h2.5L9 12.5v-9L5.5 6.5zM11.5 6.5l3 3M14.5 6.5l-3 3',
  // Ways to fly
  hard: 'M2.5 4l4 4-4 4M6.5 4l4 4-4 4M10.5 4l4 4-4 4',
  cruise: 'M5.5 4l4 4-4 4',
  dark: 'M10.5 2.5a5.5 5.5 0 1 0 3 9.5a4.5 4.5 0 0 1-3-9.5z',
  sling: 'M2.5 12.5c1-5 4-8 7-8a3 3 0 0 1 0 6c-1.5 0-2.5-1-2.5-2.2M11 12l2.5.5.5-2.5',
  // Captain's calls
  strike: 'M2 8h12M10.5 4.5L14 8l-3.5 3.5M5 5.5a3.5 3.5 0 0 0 0 5',
  match: 'M3 5.5h7M3 10.5h7M10 3l3 2.5L10 8M10 8l3 2.5L10 13',
  torp: 'M2.5 8h7.5l3.5-2v4l-3.5-2M2.5 6.5v3M5 8',
  salvo: 'M2 5h6l3-1.5v3L8 5M2 11h6l3-1.5v3L8 11M13.5 5v6',
  fire: 'M8 2v3M8 11v3M2 8h3M11 8h3M8 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0',
  evade: 'M2.5 11l3-6 3 6 3-6 2 4',
  cut: 'M4.5 4.5h7v7h-7z',
  plot: 'M3 13L13 3M13 3H8.5M13 3v4.5M3 13m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0-2.4 0',
  retreat: 'M12.5 12.5v-5a3.5 3.5 0 0 0-7 0v3M3 8l2.5 2.5L8 8',
  // Worlds
  yard: 'M2.5 13.5h11M4 13.5v-8l4-2.5 4 2.5v8M6.5 13.5V9h3v4.5',
  mine: 'M3 13l7.5-7.5M8 3c2.5 0 5 2 5 5M9 4l3 3',
  refinery: 'M8 2.5c2.5 3 4 5 4 7a4 4 0 0 1-8 0c0-2 1.5-4 4-7z',
  battery: 'M3 13h10M5 13V9.5h6V13M8 9.5L12 4',
  add: 'M8 3.5v9M3.5 8h9',
  lab: 'M6 2.5h4M6.5 2.5v4L3 12.5a1 1 0 0 0 1 1.5h8a1 1 0 0 0 1-1.5L9.5 6.5v-4M5 10.5h6',
  exchange: 'M2.5 5.5h9M9 3l2.5 2.5L9 8M13.5 10.5h-9M7 8l-2.5 2.5L7 13',
  industry: 'M2.5 13.5v-6l4 2.5v-2.5l4 2.5V4.5h3v9z',
  intel: 'M1.5 8c2-3.5 4.2-5 6.5-5s4.500 1.500 6.500 5c-2 3.500-4.200 5-6.500 5s-4.500-1.500-6.500-5zM8 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0',
  agent: 'M2.500 7.500h11M4.500 7.500l1.200-4h4.600l1.200 4M5.500 11m-1.800 0a1.800 1.800 0 1 0 3.600 0a1.800 1.800 0 1 0-3.600 0M10.500 11m-1.800 0a1.800 1.800 0 1 0 3.600 0a1.800 1.800 0 1 0-3.600 0M7.300 11h1.400',
  star: 'M8 2l1.800 3.900 4.200.500-3.100 2.900.800 4.200L8 11.400 4.300 13.500l.800-4.200L2 6.400l4.200-.500z',
  habitat: 'M2.5 13.5h11M3.5 13.5V8a4.5 4.5 0 0 1 9 0v5.5M6.5 13.5v-3h3v3',
  array: 'M8 13.5V9M8 9a5 5 0 0 1-5-5M8 9a5 5 0 0 0 5-5M8 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M5 13.5h6',
  depot: 'M4 13.5V5.5a4 4 0 0 1 8 0v8zM4 9h8M2.5 13.5h11',
  up: 'M4 10l4-4 4 4',
  research: 'M6 2.5h4M6.5 2.5v4L3 12.5a1 1 0 0 0 1 1.5h8a1 1 0 0 0 1-1.5L9.5 6.5v-4M5 10.5h6',
  drives: 'M5 2.5h6l1.5 5h-9zM5.5 9.5L4 13.5M8 9.5v4M10.5 9.5l1.5 4',
  weapons: 'M2.5 8h8M10.5 5.5v5M13.5 6.5v3M5 6v4',
  sensors: 'M8 13.5V9M8 9a5 5 0 0 1-5-5M8 9a5 5 0 0 0 5-5M8 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M5 13.5h6',
  // Things that happen
  contact: 'M8 2.5l5.5 5.5L8 13.5 2.5 8z',
  lost: 'M8 8m-5.5 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M5.5 5.5l5 5M10.5 5.5l-5 5',
  captured: 'M4 14V2.5M4 3h8l-2 2.5 2 2.5H4',
  fuel: 'M8 2.5c2.5 3 4 5 4 7a4 4 0 0 1-8 0c0-2 1.5-4 4-7zM6 10.5h4',
  bolt: 'M9 1.5L4 9h3.5L6.5 14.5 12 7H8.5z',
  freight: 'M2.5 5.5h11v6h-11zM6 5.5v6M10 5.5v6',
  raided: 'M2.5 5.5h11v6h-11zM3 13L13 3.5',
  arrived: 'M8 2.5v8M4.5 7L8 10.5 11.5 7M3.5 13.5h9',
  wrench: 'M10.5 2.5a3 3 0 0 0-2.7 4.2L2.5 12l1.5 1.5 5.3-5.3A3 3 0 0 0 13.5 5.5L11.5 7.5 9.5 5.5z',
  crown: 'M2.5 12.5h11M3 12.5L2.5 5l3 3L8 3.5 10.5 8l3-3-.5 7.5',
  skull: 'M8 2.5a5 5 0 0 0-3 9v2h6v-2a5 5 0 0 0-3-9zM6.2 8m-.9 0a.9.9 0 1 0 1.8 0a.9.9 0 1 0-1.8 0M9.8 8m-.9 0a.9.9 0 1 0 1.8 0a.9.9 0 1 0-1.8 0',
  credits: 'M11.5 4.8A4.5 4.5 0 1 0 11.5 11.2M8 1.5v13',
  flag: 'M4 14V2.5M4 3h8l-2 2.5 2 2.5H4',
  people: 'M5.5 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2 13c0-2 1.5-3.5 3.5-3.5S9 11 9 13M11 7m-1.6 0a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0-3.2 0M10.5 10c2 0 3.5 1.2 3.5 3',
  book: 'M3 3h4.5a1.5 1.5 0 0 1 1.5 1.5V13a1.5 1.5 0 0 0-1.5-1.5H3zM13 3H8.5M13 3v8.5H9',
  sun: 'M8 8m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4',
  check: 'M3.5 8.5l3 3 6-7',
};
export const icon = (name, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 16 16" aria-hidden="true"><path d="${P[name] || P.contact}"/></svg>`;

// Ship marks, the same shapes the plot draws.
const G = {
  corvette: 'M13 8L4 11.5v-7z',
  frigate: 'M14 8L3 12.5 6 8 3 3.5z',
  escort: 'M14 8L8 12.5 2 8l6-4.5z',
  battleship: 'M15 8l-4 4H2V4h9z',
  tender: 'M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0',
  freighter: 'M3 5h10v6H3z',
};
export const glyph = (cls, color = 'currentColor') => `<svg class="gl" viewBox="0 0 16 16" aria-hidden="true"><path d="${G[cls] || P.contact}" fill="${color}"/></svg>`;
