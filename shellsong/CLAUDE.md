# Shellsong: implementation brief

**Charlotte's game** (the owner's daughter). She asked for: a mermaid where
you choose your hair, skin, shell top (she said "shell bra"), tail, crown and
throne colours; swimming in the ocean; grottos; shipwrecks; treasure; sitting
on rocks; ships and seagulls; lots of fish, turtles, stingrays, dolphins and
whales; dolphins you can ride; an underwater palace with the King in it that
you can swim inside; and her own shell throne, because she's the princess.
Keep every one of those working. New ideas should fit that list and her age
(a young child): gentle, sparkly, no danger, no losing.

Prioritise, in order:

1. Easy, forgiving swimming for small hands (stick to steer and swim, two
   buttons for up and down, one big contextual button).
2. Her choices: the colours must be easy to pick and change at any time.
3. Things to find and do: treasure, the palace and throne, dolphins, rocks.
4. Look (bright, cute) and phone performance.

## Rules that keep it working

- `src/world/*` stays free of the DOM and of rendering: `tools/check.mjs`
  runs it in Node. Rendering reads the same numbers.
- **Run `npm run check` after any change to the ocean, swimming or
  creatures.** A failing check blocks the deploy.
- Anything solid goes in `world/ocean.js` as a collider (sphere, upright
  cylinder, turned box, or a dome with doorways) and is drawn in
  `render/scenery.js`. Leave gaps either closed or wide (a mermaid is about
  1.3 m across); round off corners she could get wedged in.
- Treasure lives in `TREASURE_LIST` (ocean.js) and must be reachable: the
  checks swim to every one. Grotto treasure needs `approach` waypoints.
- Saved settings: `look` (colour names, see `render/looks.js`), `name`,
  `treasure` (ids found), `sound`, `music`.
- Minimal UI: the big button, the King's speech bubble, a treasure banner,
  the odd hint. Pictures carry the meaning for a child who can't read yet.
