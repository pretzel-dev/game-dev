/**
 * The island's own noises, placed in space: gulls over the harbour and the
 * cove, surf on the nearest shore, a murmur over the village, and the bells.
 *
 * All synthesised, all panned with `PannerNode`, and all quiet — the point is
 * that you notice them only when you fly low enough to.
 */
import { PLACES, nearestCoast } from '../world/terrain.js';
import { beachCampSpot } from '../world/beach-camp.js';
import { clamp } from '../core/utils.js';

function panner(ctx, { refDistance = 80, maxDistance = 1300, rolloff = 1.1 } = {}) {
  const node = ctx.createPanner();
  node.panningModel = 'equalpower';
  node.distanceModel = 'inverse';
  node.refDistance = refDistance;
  node.maxDistance = maxDistance;
  node.rolloffFactor = rolloff;
  return node;
}

function place(node, x, y, z, ctx) {
  if (node.positionX) {
    const now = ctx.currentTime;
    node.positionX.setTargetAtTime(x, now, 0.05);
    node.positionY.setTargetAtTime(y, now, 0.05);
    node.positionZ.setTargetAtTime(z, now, 0.05);
  } else if (node.setPosition) {
    node.setPosition(x, y, z);
  }
}

export function createAmbience(ctx, master, noise) {
  const bus = ctx.createGain();
  bus.gain.value = 0.85;
  bus.connect(master);

  /* ------------------------------------------------------------ village --- */
  const villageMurmur = ctx.createBufferSource();
  villageMurmur.buffer = noise;
  villageMurmur.loop = true;
  const murmurBand = ctx.createBiquadFilter();
  murmurBand.type = 'bandpass';
  murmurBand.frequency.value = 520;
  murmurBand.Q.value = 1.3;
  const murmurGain = ctx.createGain();
  murmurGain.gain.value = 0;
  const murmurPanner = panner(ctx, { refDistance: 110, maxDistance: 900, rolloff: 1.5 });
  place(murmurPanner, PLACES.villageCentre.x, 30, PLACES.villageCentre.z, ctx);
  villageMurmur.connect(murmurBand).connect(murmurGain).connect(murmurPanner).connect(bus);
  villageMurmur.start();

  /* --------------------------------------------------------------- surf --- */
  const surf = ctx.createBufferSource();
  surf.buffer = noise;
  surf.loop = true;
  const surfFilter = ctx.createBiquadFilter();
  surfFilter.type = 'lowpass';
  surfFilter.frequency.value = 900;
  const surfGain = ctx.createGain();
  surfGain.gain.value = 0;
  const surfPanner = panner(ctx, { refDistance: 90, maxDistance: 800, rolloff: 1.4 });
  surf.connect(surfFilter).connect(surfGain).connect(surfPanner).connect(bus);
  surf.start();

  /* -------------------------------------------------------------- gulls --- */
  function gull(x, y, z) {
    const now = ctx.currentTime;
    const out = panner(ctx, { refDistance: 60, maxDistance: 700, rolloff: 1.6 });
    place(out, x, y, z, ctx);
    out.connect(bus);

    const gain = ctx.createGain();
    gain.gain.value = 0;
    const band = ctx.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.value = 1500;
    band.Q.value = 4.5;
    gain.connect(band).connect(out);

    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.connect(gain);

    // Two or three cries, each a rising then falling squawk.
    const cries = 2 + Math.floor(Math.random() * 2);
    let at = now + 0.02;
    for (let i = 0; i < cries; i++) {
      const base = 820 + Math.random() * 420;
      osc.frequency.setValueAtTime(base * 0.8, at);
      osc.frequency.exponentialRampToValueAtTime(base * 1.7, at + 0.07);
      osc.frequency.exponentialRampToValueAtTime(base * 0.75, at + 0.3);
      gain.gain.setValueAtTime(0.0001, at);
      gain.gain.exponentialRampToValueAtTime(0.5, at + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.34);
      at += 0.42 + Math.random() * 0.3;
    }
    osc.start(now);
    osc.stop(at + 0.4);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
      band.disconnect();
      out.disconnect();
    };
  }

  /* -------------------------------------------------------------- bells --- */
  function bell(x, y, z, fundamental = 210, strength = 0.5) {
    const now = ctx.currentTime;
    const out = panner(ctx, { refDistance: 140, maxDistance: 1600, rolloff: 0.9 });
    place(out, x, y, z, ctx);
    out.connect(bus);

    // Inharmonic partials are what makes a bell sound like a bell.
    const partials = [1, 2.02, 2.41, 3.03, 4.12, 5.47];
    const amps = [1, 0.55, 0.4, 0.3, 0.16, 0.09];
    const stops = [];
    partials.forEach((ratio, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = fundamental * ratio;
      const gain = ctx.createGain();
      const peak = strength * amps[i] * 0.5;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(peak, now + 0.012);
      // Higher partials fade first, exactly as they do in a real bell.
      gain.gain.exponentialRampToValueAtTime(0.0001, now + Math.max(1.2, 5.4 - i * 0.55));
      osc.connect(gain).connect(out);
      osc.start(now);
      osc.stop(now + 6);
      stops.push(() => {
        osc.disconnect();
        gain.disconnect();
      });
      if (i === 0) osc.onended = () => stops.forEach((fn) => fn());
    });
  }

  /* ------------------------------------------------------- waterfall --- */

  // A steady roar at the foot of the falls: noise, low and wide.
  const fallsSource = ctx.createBufferSource();
  fallsSource.buffer = noise;
  fallsSource.loop = true;
  const fallsFilter = ctx.createBiquadFilter();
  fallsFilter.type = 'lowpass';
  fallsFilter.frequency.value = 1400;
  const fallsGain = ctx.createGain();
  fallsGain.gain.value = 0;
  const fallsPanner = panner(ctx, { refDistance: 90, maxDistance: 900, rolloff: 1.5 });
  place(fallsPanner, PLACES.fallsTop.x, 40, PLACES.fallsTop.z + 16, ctx);
  fallsSource.connect(fallsFilter).connect(fallsGain).connect(fallsPanner).connect(bus);
  fallsSource.start();

  /* ------------------------------------------------------- beach radio --- */

  // A little portable radio left playing on the sand in the cove. One voice, a
  // narrow band and some hiss: the sound of a speaker the size of a biscuit.
  const radioSpot = beachCampSpot();
  const radioPanner = panner(ctx, { refDistance: 22, maxDistance: 280, rolloff: 2.1 });
  place(radioPanner, radioSpot.x, radioSpot.y + 1, radioSpot.z, ctx);
  radioPanner.connect(bus);

  const radioBand = ctx.createBiquadFilter();
  radioBand.type = 'bandpass';
  radioBand.frequency.value = 1250;
  radioBand.Q.value = 2.6;
  radioBand.connect(radioPanner);

  const radioVoice = ctx.createGain();
  radioVoice.gain.value = 0;
  radioVoice.connect(radioBand);
  const radioOsc = ctx.createOscillator();
  radioOsc.type = 'square';
  radioOsc.frequency.value = 440;
  radioOsc.connect(radioVoice);
  radioOsc.start();

  // The carrier hiss underneath, always there while the set is on.
  const radioHiss = ctx.createBufferSource();
  radioHiss.buffer = noise;
  radioHiss.loop = true;
  const hissGain = ctx.createGain();
  hissGain.gain.value = 0.035;
  radioHiss.connect(hissGain).connect(radioBand);
  radioHiss.start();

  // A lazy pentatonic tune in semitones from A, with rests written in.
  const TUNE = [0, 3, 5, 7, 5, 3, 0, null, 3, 5, 7, 10, 12, 10, 7, null, 5, 7, 5, 3, 0, null];
  const BEAT = 0.34;
  let noteIndex = 0;
  let nextNote = ctx.currentTime + 0.5;

  function scheduleRadio() {
    // If nobody has been near for a while the clock has run on without us;
    // pick the tune up from now rather than scheduling the missed hour.
    if (nextNote < ctx.currentTime) nextNote = ctx.currentTime + 0.05;
    // Keep half a second of tune queued up, no more.
    while (nextNote < ctx.currentTime + 0.5) {
      const step = TUNE[noteIndex % TUNE.length];
      noteIndex++;
      const length = BEAT * (noteIndex % 8 === 0 ? 2 : 1);
      if (step !== null) {
        const freq = 440 * Math.pow(2, (step + 12) / 12);
        radioOsc.frequency.setValueAtTime(freq, nextNote);
        radioVoice.gain.setValueAtTime(0.0001, nextNote);
        radioVoice.gain.exponentialRampToValueAtTime(0.09, nextNote + 0.02);
        radioVoice.gain.exponentialRampToValueAtTime(0.02, nextNote + length * 0.7);
        radioVoice.gain.exponentialRampToValueAtTime(0.0001, nextNote + length * 0.95);
      }
      nextNote += length;
    }
  }

  /* ------------------------------------------------------------- update --- */

  let gullTimer = 2;
  let bellTimer = 40;
  let murmurPhase = 0;

  function update(dt, flight, camera) {
    const now = ctx.currentTime;
    const { x, z } = flight.pos;

    // Village murmur: audible when you are near it and not too high.
    const toVillage = Math.hypot(x - PLACES.villageCentre.x, z - PLACES.villageCentre.z);
    murmurPhase += dt * 0.35;
    const height = clamp(1 - (flight.pos.y - 20) / 220, 0, 1);
    const villageLevel = clamp(1 - toVillage / 320, 0, 1) * height * (0.55 + Math.sin(murmurPhase) * 0.18);
    murmurGain.gain.setTargetAtTime(villageLevel * 0.1, now, 0.4);

    // Surf follows the nearest piece of coast, on whichever island that is.
    const coast = nearestCoast(x, z);
    place(
      surfPanner,
      coast.spec.centre.x + Math.cos(coast.theta) * (coast.r - coast.distance),
      2,
      coast.spec.centre.z + Math.sin(coast.theta) * (coast.r - coast.distance),
      ctx
    );
    const distance = Math.abs(coast.distance);
    const surfLevel = clamp(1 - distance / 260, 0, 1) * height;
    surfGain.gain.setTargetAtTime(surfLevel * 0.11, now, 0.5);
    surfFilter.frequency.setTargetAtTime(600 + surfLevel * 900, now, 0.5);

    // Gulls call near the harbour and the cove, more often when you are close.
    gullTimer -= dt;
    if (gullTimer <= 0) {
      const nearHarbour = Math.hypot(x - PLACES.harbour.x, z - PLACES.harbour.z);
      const nearCove = Math.hypot(x - PLACES.coveBeach.x, z - PLACES.coveBeach.z);
      const spot = nearCove < nearHarbour ? PLACES.coveBeach : PLACES.harbour;
      const proximity = clamp(1 - Math.min(nearHarbour, nearCove) / 460, 0, 1);
      gullTimer = 2.5 + Math.random() * 7 - proximity * 1.6;
      if (proximity > 0.06) {
        gull(
          spot.x + (Math.random() - 0.5) * 160,
          24 + Math.random() * 60,
          spot.z + (Math.random() - 0.5) * 160
        );
      }
    }

    // The falls, which you can hear from a good way out over the water.
    const toFalls = Math.hypot(x - PLACES.fallsTop.x, z - PLACES.fallsTop.z);
    fallsGain.gain.setTargetAtTime(clamp(1 - toFalls / 620, 0, 1) * 0.17, now, 0.4);

    // The radio only bothers to play when someone is close enough to hear it.
    const toRadio = Math.hypot(x - radioSpot.x, z - radioSpot.z);
    if (toRadio < 320) scheduleRadio();
    hissGain.gain.setTargetAtTime(toRadio < 320 ? 0.035 : 0, now, 0.4);

    // The bells, on their own slow schedule.
    bellTimer -= dt;
    if (bellTimer <= 0) {
      bellTimer = 52 + Math.random() * 40;
      const toChurch = Math.hypot(x - PLACES.church.x, z - PLACES.church.z);
      const toLight = Math.hypot(x - PLACES.lighthouse.x, z - PLACES.lighthouse.z);
      if (toLight < toChurch) {
        // The lighthouse's fog bell: lower, slower, lonelier.
        bell(PLACES.lighthouse.x, 40, PLACES.lighthouse.z, 150, 0.45);
      } else {
        bell(PLACES.church.x, 34, PLACES.church.z, 232, 0.5);
        setTimeout(() => {
          try {
            bell(PLACES.church.x, 34, PLACES.church.z, 232, 0.36);
          } catch {
            /* context may have gone away */
          }
        }, 2100);
      }
    }
  }

  return { update, gull, bell, bus };
}
