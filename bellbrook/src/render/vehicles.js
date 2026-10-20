/**
 * The little vehicles of Bellbrook, built from boxes and balls: round-ish
 * cars, the bus, the ice cream van, and the ambulance and police car that
 * stay parked outside their stations. Each faces -z with its wheels on y = 0.
 */
import { Mesh, MeshLambertMaterial } from 'three';
import { Builder, SHAPES } from './builder.js';

const GLASS = 0x37506e;
const TYRE = 0x2a2a30;
const HUB = 0xd8dde3;

const material = new MeshLambertMaterial({ vertexColors: true });

function wheels(b, xs, zs, r = 0.42, w = 0.36) {
  for (const x of xs) {
    for (const z of zs) {
      b.add(SHAPES.cyl(14), x, r, z, r * 2, w, r * 2, TYRE, 0, 0, Math.PI / 2);
      b.add(SHAPES.cyl(10), x + Math.sign(x) * 0.02, r, z, r * 1.0, w + 0.02, r * 1.0, HUB, 0, 0, Math.PI / 2);
    }
  }
}

function lights(b, w, zFront, zBack, y) {
  for (const sx of [-1, 1]) {
    b.box(sx * (w / 2 - 0.3), y, zFront - 0.02, 0.36, 0.22, 0.06, 0xfff4c8);
    b.box(sx * (w / 2 - 0.3), y, zBack + 0.02, 0.32, 0.2, 0.06, 0xe2504a);
  }
}

export function buildVehicle(kind, color = 0xe2504a) {
  const b = new Builder();
  if (kind === 'bus') {
    const body = color ?? 0xe2504a;
    b.box(0, 0.45, 0, 2.4, 2.6, 8.4, body);
    b.box(0, 3.05, 0, 2.3, 0.12, 8.2, 0xf4f4f4);
    for (let k = 0; k < 6; k++) {
      for (const sx of [-1, 1]) b.box(sx * 1.21, 1.75, -3.2 + k * 1.3, 0.04, 0.9, 1.1, GLASS);
    }
    b.box(0, 1.5, -4.21, 2.1, 1.3, 0.04, GLASS);
    b.box(0, 0.6, -4.22, 2.0, 0.35, 0.04, 0xf2d03b);
    b.box(0, 1.3, 0, 2.42, 0.18, 8.42, 0xf2d03b);
    wheels(b, [-1.05, 1.05], [-2.8, 2.8], 0.5, 0.4);
    lights(b, 2.4, -4.2, 4.2, 0.75);
  } else if (kind === 'icecream') {
    b.box(0, 0.4, 0.4, 2.1, 2.2, 3.8, 0xfff4f8);
    b.box(0, 0.4, -1.8, 2.0, 1.4, 1.0, 0xfff4f8);
    b.box(0, 1.4, -1.8, 1.9, 0.6, 0.9, GLASS);
    b.box(0, 0.5, 0.4, 2.12, 0.35, 3.82, 0xf29cc2);
    b.box(1.06, 1.3, 0.6, 0.04, 0.9, 2.0, 0x6a4a5a);
    b.box(1.2, 1.25, 0.6, 0.35, 0.08, 2.0, 0xf29cc2);
    // The giant cone on the roof.
    b.add(SHAPES.cone(12), 0, 3.2, 0.6, 0.9, 1.3, 0.9, 0xe0b070, 0, Math.PI);
    b.ball(0, 4.0, 0.6, 0.55, 0xf29cc2);
    b.ball(0, 4.45, 0.6, 0.18, 0xe2504a);
    wheels(b, [-0.95, 0.95], [-1.6, 1.6]);
    lights(b, 2.1, -2.3, 2.3, 0.75);
  } else if (kind === 'ambulance' || kind === 'police') {
    const main = 0xffffff;
    const stripe = kind === 'ambulance' ? 0x4fb06a : 0x2f6fd8;
    b.box(0, 0.4, 0.5, 2.1, 1.9, 3.6, main);
    b.box(0, 0.4, -1.8, 2.0, 1.2, 1.2, main);
    b.box(0, 1.25, -1.6, 1.9, 0.65, 0.9, GLASS);
    b.box(0, 0.9, 0.2, 2.12, 0.35, 4.6, stripe);
    b.box(0, 2.3, -0.6, 1.2, 0.2, 0.4, 0x3f8fff);
    wheels(b, [-0.95, 0.95], [-1.5, 1.5]);
    lights(b, 2.1, -2.4, 2.3, 0.7);
  } else {
    // A round little car.
    const c = color;
    b.box(0, 0.35, 0, 1.8, 0.8, 3.6, c);
    b.box(0, 1.15, 0.2, 1.6, 0.7, 2.0, c);
    b.box(0, 1.2, -0.82, 1.5, 0.55, 0.04, GLASS);
    b.box(0, 1.2, 1.22, 1.5, 0.5, 0.04, GLASS);
    for (const sx of [-1, 1]) b.box(sx * 0.81, 1.2, 0.2, 0.04, 0.48, 1.7, GLASS);
    b.box(0, 0.5, -1.82, 1.6, 0.2, 0.06, 0xd8dde3);
    b.box(0, 0.5, 1.82, 1.6, 0.2, 0.06, 0xd8dde3);
    wheels(b, [-0.85, 0.85], [-1.2, 1.2], 0.38, 0.32);
    lights(b, 1.8, -1.8, 1.8, 0.8);
  }
  const mesh = new Mesh(b.geometry(), material);
  mesh.castShadow = true;
  return mesh;
}
