/**
 * Flight checks — `npm run check`.
 *
 * The flight model is pure maths, so the things that matter most about how it
 * feels can be flown here in a few milliseconds instead of by hand: that the
 * stick turns the way you expect, that the aeroplane lands on water and gets
 * off again, and that nothing can put it through the island.
 */
import { createFlight, updateFlight } from '../src/flight/flight-model.js';
import { terrainHeightAt } from '../src/world/terrain.js';
import { PLACES } from '../src/world/terrain.js';

let failures = 0;
const check = (name, ok, detail) => {
  if (ok) console.log(`  ok   ${name}`);
  else {
    failures++;
    console.log(`  FAIL ${name} — ${detail}`);
  }
};

const CALM = { vector: { x: 0, y: 0, z: 0 }, gust: 0, updraft: 0 };
const STICK = { pitch: 0, roll: 0, yaw: 0, boost: false };

/** Fly for `seconds` at a fixed 60Hz with the given input. */
function fly(flight, seconds, input = {}, onStep = null) {
  const dt = 1 / 60;
  const stick = { ...STICK, ...input };
  for (let i = 0; i < Math.round(seconds / dt); i++) {
    updateFlight(flight, stick, CALM, dt, i * dt);
    if (onStep) onStep(flight, i * dt);
  }
  return flight;
}

function levelAt(x, y, z, heading = 0, throttle = 0.64) {
  const flight = createFlight();
  flight.pos.set(x, y, z);
  flight.heading = heading;
  flight.pitch = 0;
  flight.roll = 0;
  flight.throttle = throttle;
  flight.speed = 40;
  return flight;
}

console.log('\nWhich way does it go');
{
  // Heading 0 flies towards +z; the aeroplane's right hand is towards −x.
  const right = fly(levelAt(600, 120, -600), 4, { roll: 1 });
  check('bank right, turn right', right.pos.x < 599, `drifted to x=${right.pos.x.toFixed(1)}`);
  check('banking rolls right side down', right.roll > 0.3, `roll ${right.roll.toFixed(2)}`);

  const left = fly(levelAt(600, 120, -600), 4, { roll: -1 });
  check('bank left, turn left', left.pos.x > 601, `drifted to x=${left.pos.x.toFixed(1)}`);

  const rudder = fly(levelAt(600, 120, -600), 3, { yaw: 1 });
  check('rudder right yaws right', rudder.heading < -0.1, `heading ${rudder.heading.toFixed(2)}`);

  const up = fly(levelAt(600, 120, -600), 2, { pitch: 1 });
  check('stick back climbs', up.pos.y > 130, `${up.pos.y.toFixed(0)}m`);
  const down = fly(levelAt(600, 120, -600), 2, { pitch: -1 });
  check('stick forward descends', down.pos.y < 110, `${down.pos.y.toFixed(0)}m`);
}

console.log('\nLanding on the water');
{
  // Out on open water: throttled back, nose a little down, and it should settle.
  const flight = levelAt(600, 22, -600, 0, 0.16);
  flight.speed = 28;
  fly(flight, 1.5, { pitch: -0.12 }); // ease the nose down, then hands off
  fly(flight, 8, {});
  check('settles onto the sea', flight.waterborne, `still flying at ${flight.pos.y.toFixed(1)}m, ${flight.speed.toFixed(0)}kt`);
  check('sits on the surface', flight.pos.y > -1 && flight.pos.y < 5, `${flight.pos.y.toFixed(1)}m`);

  // Idling along, then full throttle to unstick.
  fly(flight, 6, {});
  check('idles slowly on the water', flight.speed < 16, `${flight.speed.toFixed(0)}kt`);
  check('stays on the water at low power', flight.waterborne, 'took off on its own');

  // Throttle shut, and it drifts to a stop rather than creeping for ever.
  flight.throttle = 0;
  fly(flight, 10, {});
  check('the throttle closes all the way', flight.speed < 1, `still making ${flight.speed.toFixed(1)}kt`);

  // Under way again, pulling back on the stick brakes against the water.
  flight.throttle = 0.5;
  fly(flight, 6, {});
  const cruising = flight.speed;
  fly(flight, 3, { pitch: 1 });
  check('pull back to stop', flight.speed < cruising * 0.4, `${cruising.toFixed(0)}kt to ${flight.speed.toFixed(0)}kt`);

  flight.throttle = 1;
  fly(flight, 12, {});
  check('full throttle gets it off again', !flight.waterborne, `still on the water at ${flight.speed.toFixed(0)}kt`);
  fly(flight, 6, { pitch: 0.3 });
  check('climbs away', flight.pos.y > 12, `${flight.pos.y.toFixed(0)}m`);
}

console.log('\nLanding in the cove');
{
  // The point of the floats: come in over the cove mouth and put it down.
  const cove = PLACES.coveBeach;
  const flight = levelAt(cove.x + 90, 16, cove.z - 90, Math.atan2(-90, 90), 0.16);
  flight.speed = 28;
  fly(flight, 1.5, { pitch: -0.12 });
  fly(flight, 5, {});
  check('lands in the cove', flight.waterborne, `${flight.pos.y.toFixed(1)}m, ${flight.speed.toFixed(0)}kt`);
  check(
    'comes to rest in the cove',
    Math.hypot(flight.pos.x - cove.x, flight.pos.z - cove.z) < 220,
    'drifted out of the cove'
  );

  // Taxi on towards the beach: the floats touch the sand and stop.
  fly(flight, 12, {});
  check('taxiing keeps it on the water', flight.waterborne, 'left the water while taxiing');
  check(
    'never taxis up onto the land',
    terrainHeightAt(flight.pos.x, flight.pos.z) < 0.5,
    `ended over ground at ${terrainHeightAt(flight.pos.x, flight.pos.z).toFixed(1)}m`
  );
}

console.log('\nA diving approach skims instead of landing');
{
  const flight = levelAt(600, 60, -600, 0, 0.9);
  fly(flight, 6, { pitch: -0.6 });
  check('fast and steep stays flying', !flight.waterborne, 'landed while diving at speed');
  check('the sea holds it up', flight.pos.y > 2, `${flight.pos.y.toFixed(1)}m`);
}

console.log('\nNothing can put it through the island');
{
  // Fly at the island from every direction, wings level, nose down, full power.
  let worst = Infinity;
  let worstAt = null;
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const flight = levelAt(Math.cos(a) * 620, 70, Math.sin(a) * 620, Math.atan2(-Math.cos(a), -Math.sin(a)), 1);
    fly(flight, 26, { pitch: -0.25 }, (f) => {
      const ground = terrainHeightAt(f.pos.x, f.pos.z);
      const clearance = f.waterborne ? 9 : f.pos.y - Math.max(ground, 0);
      if (clearance < worst) {
        worst = clearance;
        worstAt = [Math.round(f.pos.x), Math.round(f.pos.z), Math.round(ground)];
      }
    });
  }
  check('never dips into the ground', worst > 0.5, `clearance ${worst.toFixed(1)}m at ${worstAt}`);
  console.log(`  info closest approach to the ground: ${worst.toFixed(1)}m`);
}

console.log('\nHands off, it flies itself');
{
  const flight = levelAt(0, 150, 500, Math.PI, 0.64);
  fly(flight, 60, {});
  check('stays in the air', flight.pos.y > 20 && !flight.waterborne, `${flight.pos.y.toFixed(0)}m`);
  check('wings level themselves', Math.abs(flight.roll) < 0.06, `roll ${flight.roll.toFixed(3)}`);
  check('stays near the island', Math.hypot(flight.pos.x, flight.pos.z) < 1400, 'drifted away');
}

console.log(failures ? `\n${failures} flight check(s) failed\n` : '\nAll flight checks passed\n');
process.exit(failures ? 1 : 0);
