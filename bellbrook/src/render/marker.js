/**
 * Showing the way: a trail of glowing arrows along the roads from the fire
 * engine to the fire, and a big bobbing badge over the fire itself (a
 * flame, or a kitten) that you can see from anywhere in town.
 */
import {
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  DoubleSide,
  InstancedMesh,
  MeshBasicMaterial,
  Object3D,
  Sprite,
  SpriteMaterial,
  SRGBColorSpace,
} from 'three';
import { route } from '../world/roads.js';

const MAX = 160;
const GAP = 4.5;

function chevronGeometry() {
  // A flat ">" pointing along -z, about 2.4 m wide.
  const p = [
    [-1.2, 0.6],
    [0, -0.6],
    [0, 0.1],
    [-1.2, 0.6],
    [0, 0.1],
    [-1.2, 1.3],
    [0, -0.6],
    [1.2, 0.6],
    [0, 0.1],
    [0, 0.1],
    [1.2, 0.6],
    [1.2, 1.3],
  ];
  const pos = [];
  for (const [x, z] of p) pos.push(x, 0, z);
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3));
  return g;
}

function badge(kind) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  // A round white badge with a red ring, and a picture in the middle.
  g.fillStyle = '#ffffff';
  g.beginPath();
  g.arc(64, 60, 50, 0, Math.PI * 2);
  g.fill();
  g.lineWidth = 9;
  g.strokeStyle = kind === 'cat' ? '#f2a03b' : '#e2382e';
  g.stroke();
  // A little pointer underneath.
  g.fillStyle = g.strokeStyle;
  g.beginPath();
  g.moveTo(50, 104);
  g.lineTo(78, 104);
  g.lineTo(64, 124);
  g.fill();
  if (kind === 'cat') {
    g.fillStyle = '#f2a03b';
    g.beginPath();
    g.arc(64, 66, 26, 0, Math.PI * 2);
    g.fill();
    g.beginPath();
    g.moveTo(40, 56);
    g.lineTo(44, 26);
    g.lineTo(62, 44);
    g.moveTo(88, 56);
    g.lineTo(84, 26);
    g.lineTo(66, 44);
    g.fill();
    g.fillStyle = '#2a2a30';
    g.beginPath();
    g.arc(54, 62, 4, 0, Math.PI * 2);
    g.arc(74, 62, 4, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#f28aa0';
    g.beginPath();
    g.arc(64, 72, 3.5, 0, Math.PI * 2);
    g.fill();
  } else {
    const flame = (s, col, dy) => {
      g.fillStyle = col;
      g.beginPath();
      g.moveTo(64, 18 + dy);
      g.bezierCurveTo(64 + 34 * s, 48, 64 + 30 * s, 92, 64, 92);
      g.bezierCurveTo(64 - 30 * s, 92, 64 - 34 * s, 48, 64, 18 + dy);
      g.fill();
    };
    flame(1, '#ff5a1a', 0);
    flame(0.62, '#ffb21a', 22);
    flame(0.3, '#fff2a0', 42);
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

export function createMarker(scene) {
  const mat = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85, depthWrite: false, side: DoubleSide });
  const chevrons = new InstancedMesh(chevronGeometry(), mat, MAX);
  chevrons.frustumCulled = false;
  chevrons.count = 0;
  chevrons.renderOrder = 1;
  scene.add(chevrons);
  const o = new Object3D();
  const col = new Color();

  const textures = { fire: badge('fire'), cat: badge('cat') };
  const sprite = new Sprite(new SpriteMaterial({ map: textures.fire, depthTest: false, transparent: true }));
  sprite.renderOrder = 10;
  sprite.visible = false;
  scene.add(sprite);

  let path = null;
  let replan = 0;
  let target = null;
  let points = [];

  return {
    /** Point the way to `fire` (or nothing). */
    set(fire) {
      target = fire;
      replan = 0;
      sprite.visible = !!fire;
      if (fire) sprite.material.map = fire.kind === 'cat' ? textures.cat : textures.fire;
      if (!fire) chevrons.count = 0;
    },
    update(dt, t, truck, cameraDistance, near = 1e9) {
      if (!target) return;
      // The badge bobs over the fire, and grows with distance so it stays readable.
      const s = Math.max(3.2, cameraDistance * 0.075);
      sprite.scale.set(s, s, 1);
      // Close up you can see the fire itself: the badge rises and fades.
      const close = Math.max(0, Math.min(1, (26 - near) / 12));
      sprite.material.opacity = 1 - close * 0.75;
      sprite.position.set(target.x, target.y + 3.4 + s * 0.6 + close * 4 + Math.sin(t * 3) * 0.4, target.z);

      replan -= dt;
      if (replan <= 0) {
        replan = 0.4;
        path = route(truck.x, truck.z, target.x, target.z);
        // The last bit, off the road to the fire itself.
        path.push({ x: target.x, z: target.z });
        // Lay arrows along it, starting a little ahead of the truck.
        points = [];
        let carried = 0;
        const near = Math.hypot(truck.x - target.x, truck.z - target.z);
        for (let k = 1; k < path.length && points.length < MAX; k++) {
          const a = path[k - 1];
          const b = path[k];
          const len = Math.hypot(b.x - a.x, b.z - a.z);
          if (len < 0.01) continue;
          const dx = (b.x - a.x) / len;
          const dz = (b.z - a.z) / len;
          let u = carried;
          while (u < len && points.length < MAX) {
            const x = a.x + dx * u;
            const z = a.z + dz * u;
            const fromTruck = Math.hypot(x - truck.x, z - truck.z);
            const toFire = Math.hypot(x - target.x, z - target.z);
            if (fromTruck > 6 && toFire > 7) points.push({ x, z, h: Math.atan2(dx, -dz) });
            u += GAP;
          }
          carried = u - len;
        }
        if (near < 14) points.length = 0;
        chevrons.count = points.length;
      }
      points.forEach((p, k) => {
        o.position.set(p.x, 0.18, p.z);
        o.rotation.set(0, -p.h, 0);
        o.scale.setScalar(1);
        o.updateMatrix();
        chevrons.setMatrixAt(k, o.matrix);
        // A wave of brightness running along towards the fire.
        const wave = 0.5 + 0.5 * Math.sin(k * 0.7 - t * 6);
        col.setRGB(1, 0.75 + 0.25 * wave, 0.25 + 0.5 * wave);
        chevrons.setColorAt(k, col);
      });
      if (chevrons.instanceMatrix) chevrons.instanceMatrix.needsUpdate = true;
      if (chevrons.instanceColor) chevrons.instanceColor.needsUpdate = true;
    },
    sprite,
  };
}
