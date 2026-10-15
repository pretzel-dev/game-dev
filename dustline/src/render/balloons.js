/**
 * Hot air balloons (striped envelopes, wicker baskets, a burner that roars
 * now and then) and the hoops. Balloons sit where `world/balloons.js` says
 * they are at car.time, so you hit exactly what you see; one that's just been
 * bounced off wobbles.
 */
import {
  BoxGeometry,
  BufferAttribute,
  Color,
  ConeGeometry,
  CylinderGeometry,
  Group,
  LatheGeometry,
  Mesh,
  MeshToonMaterial,
  TorusGeometry,
  Vector2,
} from 'three';
import { TOON_RAMP, SOFT_RAMP, mat } from './materials.js';
import { ENVELOPE, BASKET_DROP, balloonAt } from '../world/balloons.js';

const PAIRS = [
  [0xe8412b, 0xffd23a],
  [0x2f59c9, 0xf2efe8],
  [0x7a3cff, 0xff7ab8],
  [0x2f9a58, 0xffe9a8],
  [0xff8a1a, 0x2a3a8a],
  [0xd13a2c, 0xf2efe8],
];

function envelope(colours) {
  // A teardrop: wide shoulders, tapering to the mouth.
  const pts = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20; // 0 top .. 1 mouth
    const a = t * Math.PI;
    let r = Math.sin(a) * ENVELOPE * (1.05 - 0.25 * t);
    if (t > 0.75) r = Math.max(r, 1.6 + (1 - t) * 6);
    pts.push(new Vector2(Math.max(0.01, r), ENVELOPE * (1 - 2 * t) - t * t * 3));
  }
  const g = new LatheGeometry(pts, 24).toNonIndexed();
  // Gores: alternate the two colours round the envelope.
  const pos = g.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const a = new Color(colours[0]);
  const b = new Color(colours[1]);
  for (let i = 0; i < pos.count; i += 3) {
    const cx = (pos.getX(i) + pos.getX(i + 1) + pos.getX(i + 2)) / 3;
    const cz = (pos.getZ(i) + pos.getZ(i + 1) + pos.getZ(i + 2)) / 3;
    const cy = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 3;
    const gore = Math.floor(((Math.atan2(cz, cx) / (Math.PI * 2)) + 1) * 12) % 2;
    const band = cy < -ENVELOPE * 0.55 ? 1 : 0;
    const c = (gore ^ band) ? b : a;
    for (let k = 0; k < 3; k++) col.set([c.r, c.g, c.b], (i + k) * 3);
  }
  g.setAttribute('color', new BufferAttribute(col, 3));
  g.computeVertexNormals();
  return g;
}

export function createBalloons(scene, layout) {
  const envMat = new MeshToonMaterial({ color: 0xffffff, vertexColors: true, gradientMap: SOFT_RAMP });
  const wicker = mat(0x9a6a3a);
  const rope = mat(0x4a3a2a);
  const flameMat = mat(0xffb040, { emissive: 0xff7a10 });
  const items = layout.balloons.map((b, i) => {
    const group = new Group();
    const env = new Mesh(envelope(PAIRS[b.colour % PAIRS.length]), envMat);
    env.castShadow = true;
    group.add(env);
    const basket = new Mesh(new BoxGeometry(2.2, 1.4, 2.2), wicker);
    basket.position.y = -BASKET_DROP;
    basket.castShadow = true;
    group.add(basket);
    for (const [x, z] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
      const r = new Mesh(new CylinderGeometry(0.04, 0.04, 5.6, 4), rope);
      r.position.set(x * 1.3, -BASKET_DROP + 3.3, z * 1.3);
      r.rotation.set(z * 0.08, 0, -x * 0.08);
      group.add(r);
    }
    const flame = new Mesh(new ConeGeometry(0.5, 2.2, 8), flameMat);
    flame.position.y = -BASKET_DROP + 2.6;
    flame.visible = false;
    group.add(flame);
    scene.add(group);
    return { b, group, env, flame, seed: i * 1.37 };
  });

  // Hoops: red and white striped rings.
  const hoopGeo = new TorusGeometry(1, 0.06, 8, 48).toNonIndexed();
  {
    const pos = hoopGeo.attributes.position;
    const col = new Float32Array(pos.count * 3);
    const red = new Color(0xd8352a);
    const white = new Color(0xf6f3ee);
    for (let i = 0; i < pos.count; i += 3) {
      const a = Math.atan2(pos.getY(i), pos.getX(i));
      const c = Math.floor(((a / (Math.PI * 2)) + 1) * 16) % 2 ? red : white;
      for (let k = 0; k < 3; k++) col.set([c.r, c.g, c.b], (i + k) * 3);
    }
    hoopGeo.setAttribute('color', new BufferAttribute(col, 3));
  }
  const hoopMat = new MeshToonMaterial({ color: 0xffffff, vertexColors: true, gradientMap: TOON_RAMP, emissive: 0x220000 });
  const hoops = layout.hoops.map((h) => {
    const m = new Mesh(hoopGeo, hoopMat);
    m.scale.set(h.r, h.r, h.r * 3);
    m.position.set(h.x, h.y, h.z);
    m.rotation.y = Math.atan2(h.nx, h.nz);
    m.castShadow = true;
    scene.add(m);
    return { h, m, flash: 0 };
  });

  const p = { x: 0, y: 0, z: 0 };
  return {
    update(dt, time) {
      for (const it of items) {
        balloonAt(it.b, time, p);
        it.group.position.set(p.x, p.y, p.z);
        // Wobble after a bounce.
        const since = time - (it.b.hit ?? -99);
        const w = since < 1.5 ? Math.exp(-since * 3) * Math.sin(since * 18) * 0.12 : 0;
        it.env.scale.set(1 + w, 1 - w, 1 + w);
        // The burner fires now and then.
        const burn = Math.sin(time * 0.31 + it.seed * 5) > 0.93 || since < 0.8;
        it.flame.visible = burn;
        if (burn) it.flame.scale.setScalar(0.8 + Math.random() * 0.5);
      }
      for (const h of hoops) {
        h.flash = Math.max(0, h.flash - dt);
        h.m.rotation.z += dt * (0.2 + h.flash * 6);
      }
    },
    flashHoop(index) {
      if (hoops[index]) hoops[index].flash = 1.5;
    },
  };
}
