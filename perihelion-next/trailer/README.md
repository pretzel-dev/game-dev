# Perihelion trailer

`perihelion-trailer.mp4`: a 15-second vertical (1080×1920) trailer, filmed
from real matches in the game.

| Time | Shot | Caption |
|---|---|---|
| 0–2.5s | Time-lapse: worlds sweep round, blue fleets' transfer routes curve across them | Every world is moving. |
| 2.5–4.5s | A fleet at its midpoint turns over and brakes | Burn. Flip. Brake. |
| 4.5–6s | A fleet sweeping past a gas giant | Slingshot past giants. |
| 6–8s | A built-up homeworld, pulling back to the empire | Grow an empire. |
| 8–9.5s | A megaproject ring closing round a gas giant | Raise megaprojects. |
| 9.5–11.5s | A 64-ship armada takes a red homeworld | Take the system. |
| 11.5–13s | Binary, Giant's court, Crowded | No two systems alike. |
| 13–15s | Title, play free, link | |

The classic match is seed 17 with three hard AIs (one playing blue), run for
14 minutes; `search.mjs` found it by scoring how far blue had grown. The
empire, megaproject and armada shots add a little to that match (structures,
ships, the giant) so each idea reads in a second or two.

## Filming it again

Needs Playwright, Chromium, ffmpeg and Python with numpy.

```sh
cd perihelion && npx vite --port 5173      # dev server: the scripts import the sim and AI
cd trailer
# Six jobs (a-f), each films some shots; run them at once to go faster.
for j in a b c d e f; do node trailer.mjs $j frames & done; wait
python3 audio.py                            # writes music.wav
ffmpeg -framerate 30 -i frames/f%04d.jpg -i music.wav -c:v libx264 -crf 17 \
  -pix_fmt yuv420p -c:a aac -b:a 192k -shortest -movflags +faststart perihelion-trailer.mp4
```

Add `preview` after the folder name for a quick low-resolution pass (every
fifth frame). Set `CHROMIUM=/path/to/chrome` if Playwright's own browser isn't
installed.

- `lib.mjs` opens the game on a fake clock, starts a seeded match and
  fast-forwards it with AIs on every seat, so each run is identical.
- `shots.js` stages each shot and moves the camera; `overlay.js` draws the
  captions, the glowing routes in the opening shot, and the title.
- `audio.py` synthesises the soundtrack, with hits on each cut.
- `search.mjs` scores seeds by how much blue has grown (runs in the browser,
  since Node and Chromium can lay out the same seed differently).
