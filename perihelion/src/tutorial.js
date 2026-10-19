// Tutorial: a guided first game. Each step says what to do, points at it
// (a button, or a world on the map) and waits until it's done, judged from
// the orders you give and the game state, not from screen positions. So it
// keeps working as the map, buttons and rules change. No DOM here: main.js
// shows the card and the highlights.

import { NEUTRAL, RULES, plan } from './sim.js';

/** The neutral world worth taking first: lightly held and close to home. */
export function firstTarget(game, me) {
  const home = game.bodies.find((b) => b.owner === me && b.home) || game.bodies.find((b) => b.owner === me);
  if (!home) return null;
  // Flight time plus a penalty for defences: a short hop to a soft world wins.
  const cost = (b) => plan(game, home, b, game.time).T + (b.ships + b.guns) * 25;
  const open = game.bodies.filter((b) => b.owner === NEUTRAL && !b.visitor && !b.giant).map((b) => [cost(b), b]);
  open.sort((a, b) => a[0] - b[0]);
  return open.length ? open[0][1] : null;
}

const tap = (c) => (c.touch ? 'tap' : 'click');
const Tap = (c) => (c.touch ? 'Tap' : 'Click');

/**
 * The steps. Each has a title, a line of text for touch and for mouse
 * (`text(c)`; `c` has game, me, home, touch, target and so on), what to
 * point at (`point`: a CSS selector, or `world`: a body id) and when it's
 * done: `on` (an order type that counts), `done(c)` (a check every update)
 * or neither (a Next button).
 */
export const STEPS = [
  {
    title: 'Your homeworld',
    text: (c) => `This is <b>${c.home.name}</b>. Blue rings mark your worlds. ${c.touch ? 'Tap' : 'Click'} it to select it.`,
    world: (c) => c.home.id,
    done: (c) => c.ui.selected === c.home.id,
  },
  {
    title: 'Look around',
    text: (c) => (c.touch
      ? 'Drag to turn the view. Pinch to zoom, and drag with two fingers to slide the map. Double-tap a world to fly to it; the target button shows the whole system.'
      : 'Right-drag to turn the view, scroll to zoom, drag to slide the map. Double-click a world to fly to it; the target button (or H) shows the whole system.'),
    point: '#system',
    done: (c) => c.moved > 1,
  },
  {
    title: 'Credits and crew',
    text: (c) => `Top left: your credits, and what you earn each second. Every world you hold earns; mines and harvesters add more.${c.game.crew ? ' Beside it, crew: every ship needs one, and your worlds and Habitats supply them.' : ''}`,
    point: '#clock',
  },
  {
    title: 'Order a ship',
    text: (c) => `${c.ui.selected === c.home.id ? '' : `Select <b>${c.home.name}</b>, then ${tap(c)}`}${c.ui.selected === c.home.id ? Tap(c) : ''} <b>+ Ship</b>. Its shipyard builds one at a time (${RULES.ship.cost} credits each). Ships are never built for you.`,
    point: '[data-b="ship"]',
    world: (c) => (c.ui.selected === c.home.id ? null : c.home.id),
    on: 'ship',
  },
  {
    title: 'Build',
    text: (c) => `${c.ui.selected === c.home.id ? '' : `Select <b>${c.home.name}</b>. `}${Tap(c)} an empty <b>+</b> slot, then pick a building (${c.touch ? 'press and hold one' : 'hover over one'} to read what it does). A Research station speeds up research.`,
    point: (c) => (c.ui.slot !== null && c.ui.selected === c.home.id ? '.ctx .opt:not([disabled])' : '.cell.empty'),
    world: (c) => (c.ui.selected === c.home.id ? null : c.home.id),
    on: 'build',
  },
  {
    title: 'Research',
    text: (c) => `${c.touch ? 'Tap empty space to close the panel, then tap' : 'Click'} <b>R&amp;D</b> (bottom left). Pick a branch, then <b>Research</b>. One project at a time, paid in credits.`,
    point: (c) => (c.researchOpen ? '#rlist button[data-k]:not([disabled])' : '#rnd'),
    on: 'research',
  },
  {
    title: 'Send ships',
    text: (c) => {
      const t = c.target ? `<b>${c.target.name}</b>` : 'a nearby grey world';
      if (c.ui.mode === 'launch' && c.ui.target !== null) return `Set how many with the slider, then <b>Confirm</b>. The dashed line is the route to where ${t} <em>will</em> be.`;
      if (c.ui.mode === 'launch') return `Now ${tap(c)} ${t} (ringed) as the destination.`;
      return `Take a world: select <b>${c.home.name}</b>, ${tap(c)} <b>Launch</b>, then ${tap(c)} ${t}. Grey worlds are independent and lightly held.`;
    },
    point: (c) => (c.ui.mode === 'launch' ? (c.ui.target !== null ? '#launch' : null) : c.ui.selected === c.home.id ? '#launch' : null),
    world: (c) => (c.ui.mode === 'launch' ? (c.ui.target === null && c.target ? c.target.id : null) : c.ui.selected === c.home.id ? null : c.home.id),
    on: 'launch',
  },
  {
    title: 'Speed up time',
    text: (c) => `Everything orbits, and trips take a while. ${Tap(c)} <b>1×</b> to run time faster (up to 8×), and back to 1× when things get busy.`,
    point: '#warp',
    done: (c) => c.warp > 1 || c.gained > 0,
  },
  {
    title: 'Take it',
    text: (c) => (c.inFlight
      ? `Your fleet burns halfway, flips and brakes into orbit. When it arrives it fights the guns and ships there. ${Tap(c)} the fleet to follow it.`
      : 'No fleet on its way: send more ships (build a few first if you need to).'),
    world: (c) => c.sentTo,
    done: (c) => c.gained > 0,
  },
  {
    title: 'Over to you',
    text: (c) => `${c.gained > 0 ? "The world is yours and earns for you now. " : ""}Your rival is out in the fog: take every one of their worlds to win. A ▼ on a label means enemies are on the way. Special worlds carry perks; ${tap(c)} any world to see what it has.`,
    last: true,
  },
];
