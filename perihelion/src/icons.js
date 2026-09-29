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
};
export const icon = (name, cls = '') => `<svg class="ic${cls ? ` ${cls}` : ''}" viewBox="0 0 16 16" aria-hidden="true"><path d="${P[name]}"/></svg>`;
