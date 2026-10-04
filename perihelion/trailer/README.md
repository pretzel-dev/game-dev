# Perihelion trailer

`perihelion-trailer.mp4`: a 15-second vertical (1080×1920) trailer, filmed from a
real match in the built game.

To film it again (needs Playwright, Chromium, ffmpeg, Python with numpy):

```sh
cd perihelion && npm run build && npm run preview     # serves on :4173
cd trailer
# Each run films the listed shots (0-5); run several at once to go faster.
for s in 0 1,2 3 4,5; do node trailer.mjs $s frames & done; wait
python3 audio.py                                      # writes music.wav
ffmpeg -framerate 30 -i frames/f%04d.jpg -i music.wav -c:v libx264 -crf 17 \
  -pix_fmt yuv420p -c:a aac -b:a 192k -shortest -movflags +faststart perihelion-trailer.mp4
```

Set `CHROMIUM=/path/to/chrome` if Playwright's own browser isn't installed.

- `lib.mjs` opens the game with a fake clock and a fixed random seed, so the
  match plays out the same every time and each frame is rendered on demand.
- `shots.js` is the camera for each shot; `overlay.js` draws captions and the title.
- `audio.py` synthesises the soundtrack (drone, hits on each cut, riser).
