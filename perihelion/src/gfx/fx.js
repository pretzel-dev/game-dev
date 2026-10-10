import * as THREE from 'three';
import { NOISE, LD_VERT_PARS, LD_VERT, LD_FRAG_PARS, LD_FRAG } from './glsl.js';

/**
 * Combat effects on one GPU particle system. Particles are written once,
 * when spawned (a ring buffer), and the shader works out where each one is
 * and how it looks from its age, so there's no per-frame work on the CPU.
 *
 * Kinds: flash (a hot, brief glow), fireball (billowing, cooling from white
 * to deep red), spark (a streak along its velocity that cools as it flies),
 * shockwave (an expanding ring), bolt (a tracer round flying a straight
 * line), beam (a railgun's instant line, fading).
 *
 * In vacuum there's no smoke and nothing hangs about: explosions are a
 * flash, a short-lived fireball of venting atmosphere and fuel, and a cloud
 * of glowing debris that keeps going.
 */
const FLASH = 0, FIRE = 1, SPARK = 2, RING = 3, BOLT = 4, BEAM = 5;

export function createFx(scene, max = 4096) {
  const uT = { value: 0 };
  const geo = new THREE.InstancedBufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3));
  geo.setIndex([0, 1, 2, 0, 2, 3]);
  const A = {};
  const attr = (name, size) => {
    const a = new THREE.InstancedBufferAttribute(new Float32Array(max * size), size);
    a.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute(name, a);
    A[name] = a;
  };
  attr('aP0', 3); attr('aVel', 3); attr('aDir', 3); attr('aCol', 3); attr('aTime', 2); attr('aSize', 2); attr('aKind', 2);
  // Start everything long dead.
  A.aTime.array.fill(-1e6);
  geo.instanceCount = max;

  const mat = new THREE.ShaderMaterial({
    uniforms: { uT, uPx: { value: 0.002 } },
    vertexShader: /* glsl */ `${LD_VERT_PARS}
      attribute vec3 aP0, aVel, aDir, aCol; attribute vec2 aTime, aSize, aKind;
      uniform float uT, uPx;
      varying vec2 vQ; varying vec3 vCol; varying float vAge; varying float vKind; varying float vSeed; varying float vLen; varying float vFade;
      void main() {
        float age = (uT - aTime.x) / aTime.y; // 0..1 over its life
        vAge = age;
        vKind = aKind.x; vSeed = aKind.y; vCol = aCol; vQ = position.xy;
        if (age < 0.0 || age > 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
        float t = age * aTime.y;
        // Debris and sparks slow a little (a tidy look, not physics).
        float drag = aKind.x == ${SPARK}.0 ? 1.2 : aKind.x == ${FIRE}.0 ? 2.5 : 0.0;
        float travel = drag > 0.0 ? (1.0 - exp(-drag * t)) / drag : t;
        vec3 p = aP0 + aVel * travel;
        float size = mix(aSize.x, aSize.y, aKind.x == ${FIRE}.0 ? sqrt(age) : age);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        // Far away, a flash only a pixel or two across fades rather than sparkles.
        vFade = aKind.x == ${FLASH}.0 || aKind.x == ${FIRE}.0 || aKind.x == ${RING}.0 ? clamp(size / (uPx * -mv.z) / 4.0, 0.12, 1.0) : 1.0;
        // Rounds, beams and sparks never get thinner than about a pixel.
        if (aKind.x == ${SPARK}.0 || aKind.x == ${BOLT}.0 || aKind.x == ${BEAM}.0) size = max(size, uPx * -mv.z * (aKind.x == ${BEAM}.0 ? 2.0 : 1.3));
        vec3 dirW = aDir;
        if (aKind.x == ${SPARK}.0) dirW = -aVel * exp(-drag * t) * 0.06;
        float len = length(dirW);
        vLen = len;
        if (len > 1e-5) {
          // A streak from p back along dirW, a fixed width across.
          vec4 mv2 = modelViewMatrix * vec4(p + dirW, 1.0);
          vec2 d = mv2.xy - mv.xy;
          float dl = length(d);
          vec2 ax = dl > 1e-6 ? d / dl : vec2(1.0, 0.0);
          vec2 side = vec2(-ax.y, ax.x);
          float u = position.y * 0.5 + 0.5; // 0 at the head, 1 at the tail
          vec3 base = mix(mv.xyz, mv2.xyz, u);
          // Across by the width, and past both ends by it so the caps are round.
          base.xy += side * position.x * size + ax * position.y * size;
          mv = vec4(base, 1.0);
        } else {
          mv.xy += position.xy * size;
        }
        gl_Position = projectionMatrix * mv;
        ${LD_VERT}
      }`,
    fragmentShader: /* glsl */ `${LD_FRAG_PARS}
      ${NOISE}
      varying vec2 vQ; varying vec3 vCol; varying float vAge; varying float vKind; varying float vSeed; varying float vLen; varying float vFade;
      void main() {
        ${LD_FRAG}
        if (vAge < 0.0 || vAge > 1.0) discard;
        float r = length(vQ);
        vec3 col;
        if (vKind < 0.5) {
          // Flash: hot core, soft halo, gone fast.
          float k = (exp(-r * r * 6.0) * 1.5 + exp(-r * 3.5) * 0.35) * smoothstep(1.0, 0.6, r);
          col = vCol * k * pow(1.0 - vAge, 2.0);
        } else if (vKind < 1.5) {
          // Fireball: billowing noise, cooling from white-yellow to red, thinning out.
          float n = fbm(vec3(vQ * 1.8, vSeed * 10.0 + vAge * 1.5), 4) * 0.5 + 0.5;
          float edge = smoothstep(1.0, 0.25, r + (n - 0.5) * 0.7);
          float dens = edge * smoothstep(0.15, 0.6, n + (1.0 - vAge) * 0.4 - r * 0.3);
          float temp = (1.0 - vAge) * (0.6 + n * 0.6) - r * 0.25;
          vec3 ramp = mix(vec3(0.6, 0.05, 0.01), vec3(1.0, 0.45, 0.08), smoothstep(0.05, 0.45, temp));
          ramp = mix(ramp, vec3(1.0, 0.9, 0.7), smoothstep(0.5, 0.95, temp));
          col = ramp * vCol * dens * (1.0 - vAge * 0.7) * (1.0 + smoothstep(0.6, 1.0, temp) * 2.0);
        } else if (vKind < 2.5) {
          // Spark: a thin hot streak, cooling.
          float k = exp(-vQ.x * vQ.x * 4.0) * smoothstep(1.0, 0.2, abs(vQ.y));
          vec3 hot = mix(vCol, vec3(1.0, 0.95, 0.85), 1.0 - vAge);
          col = hot * k * (1.0 - vAge) * 2.0;
        } else if (vKind < 3.5) {
          // Shockwave: a thin bright ring.
          float k = exp(-pow((r - 0.85) / 0.06, 2.0));
          col = vCol * k * pow(1.0 - vAge, 1.5);
        } else if (vKind < 4.5) {
          // Tracer round: a short bright dash with a hotter head.
          float across = exp(-vQ.x * vQ.x * 3.0);
          float along = smoothstep(1.0, 0.2, vQ.y) * smoothstep(-1.0, -0.85, vQ.y);
          float head = exp(-pow((vQ.y + 0.8) / 0.2, 2.0));
          col = (vCol * along + vec3(1.0, 0.95, 0.9) * head * 1.5) * across * 1.6;
        } else {
          // Railgun beam: a white-hot core in a coloured sheath, fading fast.
          float core = exp(-vQ.x * vQ.x * 30.0);
          float sheath = exp(-vQ.x * vQ.x * 3.0);
          float fade = pow(1.0 - vAge, 2.0);
          col = (vec3(1.0) * core * 4.0 + vCol * sheath * 1.2) * fade * smoothstep(1.0, 0.85, abs(vQ.y));
        }
        gl_FragColor = vec4(col * vFade, 1.0);
      }`,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide, // streaks can face either way
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 5;
  scene.add(mesh);

  let next = 0;
  let dirty = false;
  const c = new THREE.Color();
  /** Spawn one particle. */
  function emit(kind, p, vel, dir, color, life, s0, s1, delay = 0, intensity = 1) {
    const i = next;
    next = (next + 1) % max;
    A.aP0.setXYZ(i, p.x, p.y, p.z);
    A.aVel.setXYZ(i, vel ? vel.x : 0, vel ? vel.y : 0, vel ? vel.z : 0);
    A.aDir.setXYZ(i, dir ? dir.x : 0, dir ? dir.y : 0, dir ? dir.z : 0);
    c.set(color).multiplyScalar(intensity);
    A.aCol.setXYZ(i, c.r, c.g, c.b);
    A.aTime.setXY(i, uT.value + delay, life);
    A.aSize.setXY(i, s0, s1);
    A.aKind.setXY(i, kind, Math.random());
    dirty = true;
  }
  const v = new THREE.Vector3();
  const d = new THREE.Vector3();
  const rnd = () => v.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();

  return {
    uT,
    update(t, px) {
      uT.value = t;
      if (px) mat.uniforms.uPx.value = px;
      if (dirty) {
        for (const k in A) A[k].needsUpdate = true;
        dirty = false;
      }
    },
    /** A ship blowing up at p, `scale` ~ 1 for a ship. */
    explosion(p, scale = 1) {
      emit(FLASH, p, null, null, '#ffffff', 0.16, 0.3 * scale, 1.5 * scale, 0, 3.5);
      emit(RING, p, null, null, '#9fd4ff', 0.5, 0.15 * scale, 1.9 * scale, 0, 1.2);
      emit(FIRE, p, rnd().multiplyScalar(0.2), null, '#ffffff', 0.75 + Math.random() * 0.2, 0.25 * scale, 0.95 * scale, 0.02, 2.2);
      for (let k = 0; k < 2; k++) emit(FIRE, d.copy(p).add(rnd().multiplyScalar(0.25 * scale)), rnd().multiplyScalar(0.4), null, '#ffffff', 0.55, 0.12 * scale, 0.5 * scale, 0.08 + k * 0.12, 2);
      for (let k = 0; k < 16; k++) emit(SPARK, p, rnd().multiplyScalar((1.5 + Math.random() * 3.5) * scale), null, '#ff9a40', 0.5 + Math.random() * 0.8, 0.025 * scale, 0.015 * scale, 0, 3);
      // Glowing debris that keeps going.
      for (let k = 0; k < 6; k++) emit(FLASH, p, rnd().multiplyScalar(0.4 + Math.random() * 0.8), null, '#ff7a30', 1.5 + Math.random() * 1.5, 0.06 * scale, 0.025 * scale, 0.05, 2.5);
    },
    /** A round hitting something: a spit of sparks. */
    impact(p, color, big = false) {
      emit(FLASH, p, null, null, color, 0.15, 0.1, big ? 0.6 : 0.35, 0, 1.6);
      for (let k = 0; k < (big ? 6 : 3); k++) emit(SPARK, p, rnd().multiplyScalar(1.5 + Math.random() * 3), null, '#ffd090', 0.25 + Math.random() * 0.3, 0.02, 0.01, 0, 2.5);
    },
    /** Point defence swatting a round. */
    intercept(p) { emit(FLASH, p, null, null, '#dff4ff', 0.12, 0.05, 0.3, 0, 3); },
    /** A tracer or slug from a toward b, arriving after `life` seconds. */
    bolt(a, b, color, life, tail, width, delay = 0) {
      d.subVectors(b, a);
      const vel = v.copy(d).divideScalar(life);
      const dir = d.clone().normalize().multiplyScalar(-tail);
      emit(BOLT, a, vel, dir, color, life, width, width, delay, 1.6);
    },
    /** A railgun shot: the whole line at once, fading. */
    beam(a, b, color, life = 0.3) {
      d.subVectors(b, a);
      emit(BEAM, b, null, d.clone().negate(), color, life, 0.045, 0.02, 0, 1.4);
    },
    /** An expanding ring (a capture, say). */
    ring(p, color, size, life = 1.2) { emit(RING, p, null, null, color, life, size * 0.3, size, 0, 1.5); },
  };
}
