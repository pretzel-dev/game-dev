/**
 * Drives at every piece from all round, flat out, and reports anywhere the
 * car ends up pinned (going nowhere with the gas down). Used by check.mjs,
 * and on its own for a full report: `node tools/stuck-probe.mjs`.
 */
import { Vector3 } from 'three';
import { heightAt } from '../src/world/terrain.js';
import { createCar, updateCar, placeCar } from '../src/car/physics.js';

export function probe(layout, { directions = 8, samples = 3, seconds = 5 } = {}) {
  const world = { collision: layout.collision, boosts: layout.boosts, water: layout.water, balloons: layout.balloons };
  const pinned = [];
  let runs = 0;
  for (const piece of layout.pieces) {
    if (piece.name === 'boost') continue;
    const path = piece.path;
    for (let k = 0; k < samples; k++) {
      const target = path[Math.floor(((k + 0.5) / samples) * (path.length - 1))];
      for (let d = 0; d < directions; d++) {
        const a = (d / directions) * Math.PI * 2;
        const sx = target[0] + Math.cos(a) * 30;
        const sz = target[2] + Math.sin(a) * 30;
        // Not from somewhere enclosed (under a deck or a slope).
        const over = layout.collision.raycast(sx, heightAt(sx, sz) + 1, sz, 0, 1, 0, 40);
        if (over && !over.terrain) continue;
        const car = createCar(layout.spawn);
        placeCar(car, sx, heightAt(sx, sz) + 1.4, sz, Math.atan2(target[0] - sx, -(target[2] - sz)));
        runs++;
        let still = 0;
        let worst = 0;
        let unstuck = 0;
        const last = new Vector3().copy(car.pos);
        for (let i = 0; i < seconds * 60; i++) {
          updateCar(car, { throttle: 1, steer: 0 }, world, 1 / 60);
          for (const e of car.events) if (e.type === 'unstuck') unstuck++;
          if (i % 30 === 29) {
            if (car.pos.distanceTo(last) < 1.5) still += 0.5;
            else still = 0;
            worst = Math.max(worst, still);
            last.copy(car.pos);
          }
        }
        if (worst >= 1.5 || unstuck) pinned.push({ piece: piece.name, at: target.map((v) => Math.round(v)), from: Math.round((a * 180) / Math.PI), worst, unstuck });
      }
    }
  }
  return { runs, pinned };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { buildLayout } = await import('../src/world/layout.js');
  const { runs, pinned } = probe(buildLayout());
  console.log(`${runs} runs, ${pinned.length} pinned`);
  for (const p of pinned) console.log(JSON.stringify(p));
}
