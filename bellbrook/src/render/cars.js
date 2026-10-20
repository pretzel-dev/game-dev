/** Draws the traffic: one little mesh per vehicle, placed from world/traffic.js. */
import { buildVehicle } from './vehicles.js';
import { carPose } from '../world/traffic.js';

export function createCarsView(scene, traffic) {
  const meshes = traffic.cars.map((car) => {
    const m = buildVehicle(car.kind, car.color);
    scene.add(m);
    return m;
  });
  return {
    update(t) {
      traffic.cars.forEach((car, k) => {
        const m = meshes[k];
        const p = carPose(car);
        m.position.set(p.x, Math.abs(Math.sin(car.wheel * 1.3)) * 0.03, p.z);
        m.rotation.y = -car.heading;
      });
    },
  };
}
