/**
 * Wingtip contrails and sea spray.
 *
 * Both are pure feedback: the trails tell you how hard you are pulling, the
 * spray tells you how close you are to the water. Neither costs anything but
 * a buffer update per frame.
 */
import {
  AdditiveBlending,
  BufferGeometry,
  DynamicDrawUsage,
  Float32BufferAttribute,
  Mesh,
  MeshBasicMaterial,
  Points,
  PointsMaterial,
  Vector3,
} from 'three';
import { QUALITY } from '../core/quality.js';
import { clamp, damp, rand } from '../core/utils.js';
import { waveHeight } from '../world/water.js';
import { TUNE } from './tuning.js';

/* ------------------------------------------------------------ contrails --- */

const _tip = new Vector3();
const _dir = new Vector3();
const _side = new Vector3();
const _toCam = new Vector3();

export function createContrails(scene) {
  const length = QUALITY.contrailLength;
  const ribbons = [-1, 1].map((side) => {
    const geometry = new BufferGeometry();
    const positions = new Float32Array(length * 2 * 3);
    const colors = new Float32Array(length * 2 * 4);
    const indices = [];
    for (let i = 0; i < length - 1; i++) {
      const a = i * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3).setUsage(DynamicDrawUsage));
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 4).setUsage(DynamicDrawUsage));
    geometry.setIndex(indices);

    const mesh = new Mesh(
      geometry,
      new MeshBasicMaterial({
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: AdditiveBlending,
        fog: false,
      })
    );
    mesh.frustumCulled = false;
    mesh.renderOrder = 2;
    scene.add(mesh);

    return {
      side,
      mesh,
      geometry,
      // History of emitted points, newest last.
      history: Array.from({ length }, () => ({ p: new Vector3(), strength: 0 })),
      ready: false,
    };
  });

  let strength = 0;
  // Emit on a clock rather than per frame, so the trail is the same length on
  // a 30fps phone as on a 120Hz laptop.
  const EMIT_INTERVAL = 1 / 40;
  let emitTimer = 0;

  function update(dt, plane, flight, camera) {
    const want = flight.boosting ? 1 : flight.contact > 0.35 && flight.speed > 52 ? 0.45 : 0;
    strength = damp(strength, want, want > strength ? 7 : 2.2, dt);
    emitTimer += dt;
    const emit = emitTimer >= EMIT_INTERVAL;
    if (emit) emitTimer %= EMIT_INTERVAL;

    for (const ribbon of ribbons) {
      // Wingtip position in world space.
      _tip.set(ribbon.side * 6.4, 0.15, -0.4);
      plane.localToWorld(_tip);

      const history = ribbon.history;
      if (emit) {
        const oldest = history.shift();
        oldest.p.copy(_tip);
        oldest.strength = strength;
        history.push(oldest);
      } else {
        // Between emissions the newest point simply follows the wingtip.
        const newest = history[history.length - 1];
        newest.p.copy(_tip);
        newest.strength = strength;
      }
      if (!ribbon.ready) {
        for (const h of history) h.p.copy(_tip);
        ribbon.ready = true;
      }

      const positions = ribbon.geometry.attributes.position.array;
      const colors = ribbon.geometry.attributes.color.array;
      for (let i = 0; i < history.length; i++) {
        const point = history[i];
        const next = history[Math.min(history.length - 1, i + 1)];
        const prev = history[Math.max(0, i - 1)];
        _dir.copy(next.p).sub(prev.p);
        if (_dir.lengthSq() < 1e-8) _dir.set(0, 0, 1);
        _toCam.copy(camera.position).sub(point.p);
        _side.crossVectors(_dir, _toCam);
        if (_side.lengthSq() < 1e-8) _side.set(1, 0, 0);
        _side.normalize();

        const age = i / (history.length - 1); // 0 = oldest
        const width = 0.28 + (1 - age) * 0.85;
        const alpha = point.strength * age * age * 0.2;

        for (let s = 0; s < 2; s++) {
          const v = (i * 2 + s) * 3;
          const sign = s === 0 ? -1 : 1;
          positions[v] = point.p.x + _side.x * width * sign;
          positions[v + 1] = point.p.y + _side.y * width * sign;
          positions[v + 2] = point.p.z + _side.z * width * sign;
          const c = (i * 2 + s) * 4;
          colors[c] = 1;
          colors[c + 1] = 0.97;
          colors[c + 2] = 0.92;
          colors[c + 3] = alpha;
        }
      }
      ribbon.geometry.attributes.position.needsUpdate = true;
      ribbon.geometry.attributes.color.needsUpdate = true;
      ribbon.mesh.visible = strength > 0.01 || alphaRemains(history);
    }
  }

  function alphaRemains(history) {
    for (const point of history) if (point.strength > 0.01) return true;
    return false;
  }

  return { update };
}

/* ----------------------------------------------------------------- spray --- */

export function createSpray(scene) {
  const count = QUALITY.spray;
  const geometry = new BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 4);
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3).setUsage(DynamicDrawUsage));
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 4).setUsage(DynamicDrawUsage));

  const points = new Points(
    geometry,
    new PointsMaterial({
      size: 2.2,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      fog: true,
    })
  );
  points.frustumCulled = false;
  scene.add(points);

  const particles = Array.from({ length: count }, () => ({
    pos: new Vector3(),
    vel: new Vector3(),
    life: 0,
  }));
  let next = 0;
  let emitCarry = 0;

  function emit(flight, t) {
    const p = particles[next];
    next = (next + 1) % count;
    p.pos.set(
      flight.pos.x + rand(-2.5, 2.5),
      waveHeight(flight.pos.x, flight.pos.z, t) + rand(0, 1),
      flight.pos.z + rand(-2.5, 2.5)
    );
    p.vel.set(rand(-4, 4), rand(5, 13), rand(-4, 4)).addScaledVector(flight.velocity, 0.06);
    p.life = rand(0.5, 1.1);
  }

  function update(dt, flight, t) {
    if (flight.skimming && flight.speed > 22) {
      const rate = clamp((TUNE.skimHeight + 2 - flight.groundClearance) / 8, 0, 1) * 40;
      emitCarry += rate * dt;
      while (emitCarry > 1) {
        emit(flight, t);
        emitCarry -= 1;
      }
    } else {
      emitCarry = 0;
    }

    const pos = geometry.attributes.position.array;
    const col = geometry.attributes.color.array;
    let alive = 0;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (p.life > 0) {
        p.life -= dt;
        p.vel.y -= 17 * dt;
        p.vel.multiplyScalar(Math.exp(-1.1 * dt));
        p.pos.addScaledVector(p.vel, dt);
        alive++;
      }
      pos[i * 3] = p.pos.x;
      pos[i * 3 + 1] = p.pos.y;
      pos[i * 3 + 2] = p.pos.z;
      col[i * 4] = 1;
      col[i * 4 + 1] = 1;
      col[i * 4 + 2] = 0.97;
      col[i * 4 + 3] = clamp(p.life, 0, 1) * 0.85;
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
    points.visible = alive > 0;
  }

  return { update };
}
