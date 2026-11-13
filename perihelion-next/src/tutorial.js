// Tutorial: a guided first game, ported from the first Perihelion. Each step says what to do, points at it (a
// button, or a world on the map) and waits until it is done, judged from the orders given and the game state,
// not from screen positions. No DOM here: main.js shows the card and the highlights.

import { NEUTRAL, batteryMax, posAt } from './sim.js';

/** The world to take first: independent, no battery, nearest the capital. */
export function firstTarget(game, me) {
  const home = game.homes[me];
  if (!home) return null;
  const hp = posAt(game, home, game.time);
  const d = (b) => { const p = posAt(game, b, game.time); return Math.hypot(p.x - hp.x, p.y - hp.y, p.z - hp.z); };
  const open = game.bodies.filter((b) => b.owner === NEUTRAL && !batteryMax(b) && b.kind !== 'asteroid');
  return open.sort((a, b) => d(a) - d(b))[0] || null;
}

/**
 * The steps. `text(c)` is one or two short lines; `point` is a CSS selector to outline; `world` a body to ring on
 * the map; a step ends on `on` (an order of that kind), `done(c)` (checked every update) or a Next button.
 */
export const STEPS = [
  { title: 'Your capital', text: (c) => `${c.touch ? 'Tap' : 'Click'} <em>${c.home.name}</em>.`, world: (c) => c.home.id, done: (c) => c.ui.selBody === c.home.id },
  { title: 'The view', text: (c) => (c.touch ? 'Drag to turn. Pinch to zoom. Two fingers to move.' : 'Drag to move. Right-drag to turn. Scroll to zoom.'), done: (c) => c.moved > 1 },
  { title: 'Credits', text: () => 'Top left: your credits and income a day. The bars are your ships and your ship limit.', point: '#purse' },
  { title: 'Select ships', text: (c) => `${c.touch ? 'Tap' : 'Click'} one of your ships at <em>${c.home.name}</em>.`, world: (c) => c.home.id, done: (c) => c.ui.sel.size > 0 },
  { title: 'Send them', text: (c) => `${c.ui.sel.size ? '' : 'Select your ships. '}${c.touch ? 'Tap' : 'Click'} <em>${c.target.name}</em> and pick a course.`, world: (c) => c.target.id, point: '[data-a="go"]', on: 'order' },
  { title: 'Time', text: () => 'Travel takes days. This button makes time run faster.', point: '#warp', done: (c) => c.warp > 1 },
  { title: 'Take the world', text: (c) => `<em>${c.target.name}</em> yields when your ships hold its orbit.`, world: (c) => c.target.id, done: (c) => c.gained > 0 },
  { title: 'Build', text: (c) => `Select <em>${c.home.name}</em>. ${c.touch ? 'Tap' : 'Click'} Build and pick a structure.`, world: (c) => (c.ui.selBody === c.home.id ? null : c.home.id), point: (c) => (c.ui.build ? '[data-a="build"]:not(.no)' : '[data-a="slot"]'), on: 'build' },
  { title: 'Build a ship', text: (c) => `Select <em>${c.home.name}</em> and pick a ship.`, world: (c) => (c.ui.selBody === c.home.id ? null : c.home.id), point: '[data-a="ship"]:not(.no)', on: 'ship' },
  { title: 'Research', text: () => 'Open research (the flask) and pick a box.', point: (c) => (c.sheet ? '[data-a="research"]' : '#rnd'), on: 'research' },
  { title: 'Winning', text: () => 'Take the enemy capital (double ring). It needs 3 of your ships in its orbit.', last: true },
];
