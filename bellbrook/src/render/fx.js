/**
 * Every little particle: the water out of the hose, cartoon flames, puffs
 * of smoke and steam, splashes, confetti, stars and hearts. One point
 * sprite system draws them all; the fragment shader picks the shape.
 *
 * Wet patches on the ground where the water lands are a few instanced
 * discs that dry out over a few seconds.
 */
import {
  BufferAttribute,
  BufferGeometry,
  CircleGeometry,
  Color,
  InstancedMesh,
  MeshBasicMaterial,
  Object3D,
  Points,
  ShaderMaterial,
} from 'three';

export const SHAPE = { puff: 0, confetti: 1, flame: 2, star: 3, drop: 4, heart: 5 };

const vertexShader = /* glsl */ `
  attribute vec4 tint;
  attribute vec2 extra; // size, shape
  attribute float spin;
  uniform float scale;
  varying vec4 vTint;
  varying float vShape;
  varying float vSpin;
  void main() {
    vTint = tint;
    vShape = extra.y;
    vSpin = spin;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = clamp(extra.x * scale / -mv.z, 0.0, 400.0);
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = /* glsl */ `
  varying vec4 vTint;
  varying float vShape;
  varying float vSpin;
  void main() {
    vec2 uv = gl_PointCoord * 2.0 - 1.0;
    uv.y = -uv.y;
    float r = length(uv);
    vec3 col = vTint.rgb;
    float a = vTint.a;
    if (vShape < 0.5) {
      // Puff: a solid round cloud, lit from the top left.
      if (r > 1.0) discard;
      a *= smoothstep(1.0, 0.8, r);
      col *= 0.82 + 0.3 * clamp(dot(uv, vec2(-0.45, 0.6)) + 0.4, 0.0, 1.0);
    } else if (vShape < 1.5) {
      // Confetti: a little tumbling rectangle.
      float c = cos(vSpin);
      float s = sin(vSpin);
      vec2 q = mat2(c, -s, s, c) * uv;
      q.y /= 0.25 + 0.75 * abs(sin(vSpin * 1.7));
      if (abs(q.x) > 0.8 || abs(q.y) > 0.45) discard;
    } else if (vShape < 2.5) {
      // Flame: a teardrop pointing up, with a pale hot core.
      float y = uv.y;
      float w = y < -0.25 ? sqrt(max(0.0, 0.42 - (y + 0.25) * (y + 0.25))) : 0.648 * pow(max(0.0, 1.0 - (y + 0.25) / 1.15), 0.85);
      float edge = abs(uv.x) / max(w, 1e-3);
      if (edge > 1.0 || y > 0.9) discard;
      float core = smoothstep(0.75, 0.35, edge) * smoothstep(0.55, -0.35, y);
      col = mix(col, vec3(1.0, 0.95, 0.6) * 1.6, core);
      col *= 1.25;
    } else if (vShape < 3.5) {
      // Star: five points.
      float ang = atan(uv.y, uv.x) + vSpin;
      float k = 0.5 + 0.5 * pow(abs(cos(ang * 2.5)), 3.0);
      if (r > k * 0.95) discard;
      col *= 1.1 + 0.3 * (1.0 - r);
    } else if (vShape < 4.5) {
      // A drop of water: bright, with a glint.
      if (r > 1.0) discard;
      a *= smoothstep(1.0, 0.55, r);
      col += vec3(0.6) * smoothstep(0.4, 0.0, length(uv - vec2(-0.3, 0.35)));
    } else {
      // Heart.
      vec2 h = uv * 1.25;
      h.y += 0.25;
      float x = abs(h.x);
      float d = h.y - sqrt(max(0.0, x)) * 0.8;
      if (x * x + d * d * 1.4 > 0.75) discard;
    }
    gl_FragColor = vec4(col, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function makeMaterial() {
  return new ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    uniforms: { scale: { value: 600 } },
  });
}

function makeGeometry(max) {
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(new Float32Array(max * 3), 3));
  g.setAttribute('tint', new BufferAttribute(new Float32Array(max * 4), 4));
  g.setAttribute('extra', new BufferAttribute(new Float32Array(max * 2), 2));
  g.setAttribute('spin', new BufferAttribute(new Float32Array(max), 1));
  for (const k of ['position', 'tint', 'extra', 'spin']) g.attributes[k].setUsage(35048); // DynamicDrawUsage
  return g;
}

export function createFx(scene, max = 2000, waterMax = 1000) {
  const material = makeMaterial();
  const geo = makeGeometry(max);
  const points = new Points(geo, material);
  points.frustumCulled = false;
  points.renderOrder = 2;
  scene.add(points);

  const waterGeo = makeGeometry(waterMax);
  const waterPoints = new Points(waterGeo, material);
  waterPoints.frustumCulled = false;
  waterPoints.renderOrder = 3;
  scene.add(waterPoints);

  // Particle state.
  const P = {
    x: new Float32Array(max),
    y: new Float32Array(max),
    z: new Float32Array(max),
    vx: new Float32Array(max),
    vy: new Float32Array(max),
    vz: new Float32Array(max),
    age: new Float32Array(max).fill(1),
    life: new Float32Array(max).fill(1),
    s0: new Float32Array(max),
    s1: new Float32Array(max),
    r: new Float32Array(max),
    g: new Float32Array(max),
    b: new Float32Array(max),
    a: new Float32Array(max),
    shape: new Float32Array(max),
    grav: new Float32Array(max),
    drag: new Float32Array(max),
    spin: new Float32Array(max),
    spinV: new Float32Array(max),
    fade: new Float32Array(max), // when (0..1 of life) it starts to fade
  };
  let next = 0;
  const c = new Color();

  function emit(o) {
    const k = next;
    next = (next + 1) % max;
    P.x[k] = o.x;
    P.y[k] = o.y;
    P.z[k] = o.z;
    P.vx[k] = o.vx ?? 0;
    P.vy[k] = o.vy ?? 0;
    P.vz[k] = o.vz ?? 0;
    P.age[k] = 0;
    P.life[k] = o.life ?? 1;
    P.s0[k] = o.size ?? 1;
    P.s1[k] = o.size1 ?? o.size ?? 1;
    c.set(o.color ?? 0xffffff);
    P.r[k] = c.r * (o.bright ?? 1);
    P.g[k] = c.g * (o.bright ?? 1);
    P.b[k] = c.b * (o.bright ?? 1);
    P.a[k] = o.alpha ?? 1;
    P.shape[k] = o.shape ?? 0;
    P.grav[k] = o.gravity ?? 0;
    P.drag[k] = o.drag ?? 0;
    P.spin[k] = o.spin ?? Math.random() * 6.28;
    P.spinV[k] = o.spinV ?? 0;
    P.fade[k] = o.fade ?? 0.6;
  }

  const R = () => Math.random() - 0.5;

  /* ------------------------------------------------------ wet patches --- */
  const WET = 48;
  const wetMat = new MeshBasicMaterial({ color: 0x1a3550, transparent: true, opacity: 0.22, depthWrite: false });
  const wet = new InstancedMesh(new CircleGeometry(1, 18), wetMat, WET);
  wet.frustumCulled = false;
  const wetAge = new Float32Array(WET).fill(99);
  const wetPos = new Float32Array(WET * 3);
  const wetSize = new Float32Array(WET);
  let wetNext = 0;
  let wetCool = 0;
  const o3 = new Object3D();
  scene.add(wet);
  wet.instanceColor = null;

  /* ------------------------------------------------------------ emitters --- */
  const fx = {
    points,
    emit,
    /** Cartoon flames for a fire of `size` at strength hp (0..1). */
    flames(f, dt, nx = 0, nz = 0) {
      const n = (34 + 40 * f.size) * (0.35 + 0.65 * f.hp) * dt;
      let carry = n;
      while (carry > 0) {
        if (Math.random() > carry) break;
        carry -= 1;
        const spread = 0.7 * f.size * (0.5 + 0.5 * f.hp);
        const pick = Math.random();
        emit({
          x: f.x + R() * spread * 2 + nx * 0.3,
          y: f.y - 0.4 * f.size + Math.random() * 0.3,
          z: f.z + R() * spread * 2 + nz * 0.3,
          vx: R() * 0.4 + nx * 0.7,
          vy: 2.0 + Math.random() * 1.8,
          vz: R() * 0.4 + nz * 0.7,
          life: 0.5 + Math.random() * 0.4,
          size: (2.0 + Math.random() * 1.6) * f.size * (0.45 + 0.55 * f.hp),
          size1: 0.4 * f.size,
          color: pick < 0.45 ? 0xffa21a : pick < 0.8 ? 0xff6a1a : 0xff3b1a,
          bright: 1.6,
          shape: SHAPE.flame,
          fade: 0.5,
        });
      }
    },
    smoke(f, dt) {
      if (Math.random() > (3 + 5 * f.size) * dt) return;
      const grey = 0.36 + (1 - f.hp) * 0.4;
      emit({
        x: f.x + R() * f.size,
        y: f.y + 0.6 * f.size,
        z: f.z + R() * f.size,
        vx: R() * 0.5 + 0.35,
        vy: 2.2 + Math.random(),
        vz: R() * 0.5,
        life: 4 + Math.random() * 2,
        size: 1.6 * f.size,
        size1: 6 + f.size * 3,
        color: new Color(grey, grey, grey * 1.04).getHex(),
        alpha: 0.6,
        drag: 0.15,
        fade: 0.3,
      });
    },
    steam(x, y, z, n = 1, big = 1) {
      for (let k = 0; k < n; k++) {
        emit({
          x: x + R() * 0.6 * big,
          y: y + R() * 0.4,
          z: z + R() * 0.6 * big,
          vx: R() * 1.2 * big,
          vy: 1.5 + Math.random() * 1.6 * big,
          vz: R() * 1.2 * big,
          life: 1.2 + Math.random() * 0.8,
          size: 0.8 * big,
          size1: 3 * big,
          color: 0xffffff,
          alpha: 0.75,
          drag: 0.6,
          fade: 0.2,
        });
      }
    },
    splash(x, y, z, n = 3, strength = 1, color = 0xd8f2ff) {
      for (let k = 0; k < n; k++) {
        const a = Math.random() * 6.28;
        const s = (1 + Math.random() * 2) * strength;
        emit({
          x,
          y: y + 0.05,
          z,
          vx: Math.cos(a) * s,
          vy: 1.5 + Math.random() * 2.5 * strength,
          vz: Math.sin(a) * s,
          life: 0.45 + Math.random() * 0.3,
          size: 0.25 + Math.random() * 0.2,
          size1: 0.1,
          color,
          alpha: 0.9,
          gravity: 12,
          shape: SHAPE.drop,
        });
      }
    },
    confetti(x, y, z, n = 120) {
      const cols = [0xe2504a, 0x3f8fd2, 0xf2d03b, 0x4fb06a, 0xf28a3b, 0xb07ae0, 0xf25a7a, 0xffffff];
      for (let k = 0; k < n; k++) {
        const a = Math.random() * 6.28;
        const s = 2 + Math.random() * 5;
        emit({
          x,
          y,
          z,
          vx: Math.cos(a) * s,
          vy: 6 + Math.random() * 8,
          vz: Math.sin(a) * s,
          life: 3 + Math.random() * 1.5,
          size: 0.4,
          color: cols[k % cols.length],
          gravity: 6,
          drag: 1.4,
          shape: SHAPE.confetti,
          spinV: (Math.random() - 0.5) * 14,
          fade: 0.8,
        });
      }
    },
    stars(x, y, z, n = 8, color = 0xffd84a) {
      for (let k = 0; k < n; k++) {
        const a = (k / n) * 6.28;
        emit({
          x,
          y,
          z,
          vx: Math.cos(a) * 3,
          vy: 3 + Math.random() * 2,
          vz: Math.sin(a) * 3,
          life: 1.4,
          size: 1.3,
          size1: 0.6,
          color,
          bright: 1.4,
          gravity: 2,
          drag: 1.2,
          shape: SHAPE.star,
          spinV: 2,
          fade: 0.6,
        });
      }
    },
    heart(x, y, z) {
      emit({ x, y, z, vy: 1.2, life: 1.4, size: 0.7, size1: 1.0, color: 0xff5a8a, bright: 1.2, shape: SHAPE.heart, fade: 0.6 });
    },
    puff(x, y, z, color = 0x9a9a9a, size = 0.5) {
      emit({ x, y, z, vx: R() * 0.4, vy: 0.9, vz: R() * 0.4, life: 1.0, size, size1: size * 3, color, alpha: 0.5, drag: 1, fade: 0.2 });
    },
    /** Water landed here: maybe darken the ground. */
    wetAt(x, y, z, dt) {
      wetCool -= dt;
      if (wetCool > 0) return;
      wetCool = 0.12;
      const k = wetNext;
      wetNext = (wetNext + 1) % WET;
      wetAge[k] = 0;
      wetPos[k * 3] = x + R();
      wetPos[k * 3 + 1] = y + 0.025 + k * 0.0004;
      wetPos[k * 3 + 2] = z + R();
      wetSize[k] = 1 + Math.random() * 0.8;
    },

    setScale(heightPx, fovDeg) {
      material.uniforms.scale.value = heightPx / (2 * Math.tan(((fovDeg * Math.PI) / 180) / 2));
    },

    update(dt, water) {
      const pos = geo.attributes.position.array;
      const tint = geo.attributes.tint.array;
      const extra = geo.attributes.extra.array;
      const spin = geo.attributes.spin.array;
      for (let k = 0; k < max; k++) {
        if (P.age[k] >= P.life[k]) {
          extra[k * 2] = 0;
          tint[k * 4 + 3] = 0;
          continue;
        }
        P.age[k] += dt;
        const u = Math.min(1, P.age[k] / P.life[k]);
        P.vy[k] -= P.grav[k] * dt;
        const d = Math.exp(-P.drag[k] * dt);
        P.vx[k] *= d;
        P.vy[k] *= P.grav[k] > 0 ? 1 : d;
        P.vz[k] *= d;
        P.x[k] += P.vx[k] * dt;
        P.y[k] += P.vy[k] * dt;
        P.z[k] += P.vz[k] * dt;
        if (P.y[k] < 0.05 && P.grav[k] > 0) {
          P.y[k] = 0.05;
          P.vy[k] *= -0.2;
          P.vx[k] *= 0.5;
          P.vz[k] *= 0.5;
        }
        P.spin[k] += P.spinV[k] * dt;
        pos[k * 3] = P.x[k];
        pos[k * 3 + 1] = P.y[k];
        pos[k * 3 + 2] = P.z[k];
        const fadeStart = P.fade[k];
        const alpha = u < fadeStart ? 1 : 1 - (u - fadeStart) / (1 - fadeStart);
        tint[k * 4] = P.r[k];
        tint[k * 4 + 1] = P.g[k];
        tint[k * 4 + 2] = P.b[k];
        tint[k * 4 + 3] = P.a[k] * alpha * Math.min(1, P.age[k] * 12);
        extra[k * 2] = P.s0[k] + (P.s1[k] - P.s0[k]) * u;
        extra[k * 2 + 1] = P.shape[k];
        spin[k] = P.spin[k];
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.tint.needsUpdate = true;
      geo.attributes.extra.needsUpdate = true;
      geo.attributes.spin.needsUpdate = true;

      // The hose water, straight from the simulation.
      const wpos = waterGeo.attributes.position.array;
      const wt = waterGeo.attributes.tint.array;
      const we = waterGeo.attributes.extra.array;
      for (let k = 0; k < water.max; k++) {
        const alive = water.age[k] < 4;
        wpos[k * 3] = water.px[k];
        wpos[k * 3 + 1] = water.py[k];
        wpos[k * 3 + 2] = water.pz[k];
        wt[k * 4] = 0.75;
        wt[k * 4 + 1] = 0.9;
        wt[k * 4 + 2] = 1.0;
        wt[k * 4 + 3] = alive ? 0.85 : 0;
        we[k * 2] = alive ? 0.3 + Math.min(0.3, water.age[k] * 0.35) : 0;
        we[k * 2 + 1] = SHAPE.drop;
      }
      waterGeo.attributes.position.needsUpdate = true;
      waterGeo.attributes.tint.needsUpdate = true;
      waterGeo.attributes.extra.needsUpdate = true;

      // Drying puddles.
      for (let k = 0; k < WET; k++) {
        wetAge[k] += dt;
        const life = 7;
        const s = wetAge[k] < life ? wetSize[k] * (1 - (wetAge[k] / life) ** 3) : 0;
        o3.position.set(wetPos[k * 3], wetPos[k * 3 + 1], wetPos[k * 3 + 2]);
        o3.rotation.set(-Math.PI / 2, 0, 0);
        o3.scale.set(s + 0.001, s + 0.001, 1);
        o3.updateMatrix();
        wet.setMatrixAt(k, o3.matrix);
      }
      wet.instanceMatrix.needsUpdate = true;
    },
  };
  return fx;
}
