# Bellbrook: implementation brief

The core idea: **a love letter to fire engines, for small children.** Drive a
toy fire engine round a cute town; when a call comes in, follow the arrows,
spray the fire until it's out, and everyone cheers. Sometimes it's a kitten
up a tree: raise the ladder. There is never a score, timer, fail state or
danger: fires are small and cartoonish, never spread and never grow back,
and nothing can hold the truck fast.

Prioritise, in order:

1. Easy, forgiving controls for little hands (point the stick where you want
   to go; one big water button that aims for you).
2. Fire-engine joy: the siren, lights, horn, water, ladder, and the cheering.
3. A town that feels alive and cute: people, traffic, neighbourhoods.
4. Look (bright, toy-like, ink-outlined) and phone performance.

## Rules that keep it working

- `src/world/*` and `src/truck/physics.js` stay free of the DOM and of
  rendering: `tools/check.mjs` runs them in Node.
- **Run `npm run check` after any change to the town, the driving or the
  calls.** It checks the layout, answers 25 calls with an autopilot, mashes
  the stick all over town and runs the townsfolk and traffic. A failing check
  blocks the deploy.
- Everything new in the town goes in `world/city.js` (data) and is drawn in
  `render/town.js`. Anything solid needs a box or circle collider; keep gaps
  between solid things either 0 or wider than the truck (about 3 m).
- Fire spots must be within 30 m of a road (they're filtered otherwise) and on
  a side you can see and spray from the road.
- The static town is merged into a few meshes by `render/builder.js`: add
  shapes to a builder, don't add lots of separate meshes.
- Minimal UI: the call banner, a happy word, the odd hint, the off-screen
  arrow. Words must also work for children who can't read yet: icons, the
  badge over the fire and the arrows carry the meaning.
