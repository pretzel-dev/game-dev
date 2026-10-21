/**
 * Every little particle: bubbles, sparkles, splashes, whale spouts,
 * confetti, stars and hearts. One point-sprite system draws them all; the
 * fragment shader picks the shape.
 */
import { BufferAttribute, BufferGeometry, Color, Points, ShaderMaterial } from 'three';

export const SHAPE = { puff: 0, confetti: 1, bubble: 2, star: 3, drop: 4, heart: 5, note: 6 };

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
      // A bubble: a clear ring with a bright glint.
      if (r > 1.0) discard;
      float ring = smoothstep(0.6, 0.95, r) * (1.0 - smoothstep(0.95, 1.0, r));
      float glint = smoothstep(0.35, 0.0, length(uv - vec2(-0.35, 0.4)));
      a *= ring * 0.8 + glint + 0.08;
      col = mix(col, vec3(1.0), glint);
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
    } else if (vShape > 5.5) {
      // A music note: a round head, a stem and a little flag.
      vec2 h = uv - vec2(-0.25, -0.5);
      float head = length(h * vec2(1.0, 1.35)) - 0.3;
      float stem = max(abs(uv.x - 0.03) - 0.07, abs(uv.y - 0.15) - 0.65);
      float flag = max(abs(uv.x - 0.25) - 0.22, abs(uv.y - 0.62 + (uv.x - 0.03) * 0.5) - 0.12);
      if (min(head, min(stem, flag)) > 0.0) discard;
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

export function createFx(scene, max = 2000) {
  const material = makeMaterial();
  const geo = makeGeometry(max);
  const points = new Points(geo, material);
  points.frustumCulled = false;
  points.renderOrder = 7;
  scene.add(points);

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
    fade: new Float32Array(max),
    wobble: new Float32Array(max),
  };
  let next = 0;
  const c = new Color();
  const R = () => Math.random() - 0.5;

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
    P.wobble[k] = o.wobble ?? 0;
  }

  return {
    emit,
    /** Bubbles rising (they pop at the surface). */
    bubbles(x, y, z, n = 1, size = 0.18) {
      for (let k = 0; k < n; k++) {
        const s = size * (0.5 + Math.random());
        emit({ x: x + R() * 0.4, y: y + R() * 0.3, z: z + R() * 0.4, vx: R() * 0.3, vy: 1.2 + Math.random() * 1.2, vz: R() * 0.3, life: 2.5 + Math.random() * 2, size: s, size1: s * 1.4, color: 0xd8f8ff, shape: SHAPE.bubble, fade: 0.85, wobble: 1 });
      }
    },
    /** Twinkling stars of light, for treasure and magic. */
    sparkle(x, y, z, color = 0xfff0a0, n = 1, spread = 0.6, size = 0.35) {
      for (let k = 0; k < n; k++) {
        emit({ x: x + R() * spread * 2, y: y + R() * spread * 2, z: z + R() * spread * 2, vx: R() * 0.4, vy: 0.4 + Math.random() * 0.6, vz: R() * 0.4, life: 0.8 + Math.random() * 0.8, size: size * (0.6 + Math.random()), size1: 0.02, color, bright: 1.8, shape: SHAPE.star, spinV: 3, fade: 0.2 });
      }
    },
    splash(x, y, z, n = 20, strength = 1) {
      for (let k = 0; k < n; k++) {
        const a = Math.random() * 6.28;
        const s = (1 + Math.random() * 2.5) * strength;
        emit({ x, y: y + 0.1, z, vx: Math.cos(a) * s, vy: 2.5 + Math.random() * 4 * strength, vz: Math.sin(a) * s, life: 0.7 + Math.random() * 0.4, size: 0.3 + Math.random() * 0.3, size1: 0.12, color: 0xe8fbff, alpha: 0.95, gravity: 11, shape: SHAPE.drop });
      }
      for (let k = 0; k < n / 4; k++) emit({ x: x + R() * 1.5, y: y + 0.1, z: z + R() * 1.5, vy: 0.3, life: 0.8, size: 0.4 * strength, size1: 1.1 * strength, color: 0xffffff, alpha: 0.5, drag: 1, fade: 0.2 });
    },
    /** A whale blowing: a column of spray. */
    spout(x, y, z) {
      for (let k = 0; k < 60; k++) emit({ x: x + R() * 0.4, y, z: z + R() * 0.4, vx: R() * 1.5, vy: 7 + Math.random() * 5, vz: R() * 1.5, life: 1.6, size: 0.4 + Math.random() * 0.4, size1: 1.2, color: 0xf4fbff, alpha: 0.8, gravity: 7, drag: 0.6, shape: SHAPE.drop, fade: 0.5 });
    },
    confetti(x, y, z, n = 120, gravity = 2.5) {
      const cols = [0xff6aa8, 0x5ad0ff, 0xffe05a, 0x7af0a0, 0xb07aff, 0xff9a5a, 0xffffff];
      for (let k = 0; k < n; k++) {
        const a = Math.random() * 6.28;
        const s = 1.5 + Math.random() * 3.5;
        emit({ x, y, z, vx: Math.cos(a) * s, vy: 2 + Math.random() * 5, vz: Math.sin(a) * s, life: 3 + Math.random() * 1.5, size: 0.35, color: cols[k % cols.length], gravity, drag: 1.6, shape: SHAPE.confetti, spinV: (Math.random() - 0.5) * 12, fade: 0.8 });
      }
    },
    coins(x, y, z, n = 30) {
      for (let k = 0; k < n; k++) {
        const a = Math.random() * 6.28;
        const s = 1 + Math.random() * 2.5;
        emit({ x, y, z, vx: Math.cos(a) * s, vy: 3 + Math.random() * 3, vz: Math.sin(a) * s, life: 2, size: 0.32, color: 0xffd23a, bright: 1.4, gravity: 3, drag: 1.2, shape: SHAPE.confetti, spinV: 10, fade: 0.7 });
      }
    },
    stars(x, y, z, n = 10, color = 0xffd84a) {
      for (let k = 0; k < n; k++) {
        const a = (k / n) * 6.28;
        emit({ x, y, z, vx: Math.cos(a) * 2.5, vy: 1.5 + Math.random() * 2, vz: Math.sin(a) * 2.5, life: 1.6, size: 0.9, size1: 0.4, color, bright: 1.5, drag: 1.2, shape: SHAPE.star, spinV: 2, fade: 0.6 });
      }
    },
    note(x, y, z) {
      const cols = [0xff6aa8, 0x5ad0ff, 0xffe05a, 0xb07aff, 0x7af0a0];
      emit({ x: x + R() * 0.6, y, z: z + R() * 0.6, vx: R() * 0.8, vy: 0.9 + Math.random() * 0.6, vz: R() * 0.8, life: 2, size: 0.55, size1: 0.7, color: cols[Math.floor(Math.random() * cols.length)], bright: 1.3, shape: SHAPE.note, fade: 0.6, wobble: 1 });
    },
    heart(x, y, z, color = 0xff6a9a) {
      emit({ x, y, z, vy: 0.9, life: 1.6, size: 0.6, size1: 0.9, color, bright: 1.2, shape: SHAPE.heart, fade: 0.6 });
    },

    setScale(heightPx, fovDeg) {
      material.uniforms.scale.value = heightPx / (2 * Math.tan(((fovDeg * Math.PI) / 180) / 2));
    },

    update(dt, t) {
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
        P.x[k] += (P.vx[k] + (P.wobble[k] ? Math.sin(t * 6 + k) * 0.25 : 0)) * dt;
        P.y[k] += P.vy[k] * dt;
        P.z[k] += P.vz[k] * dt;
        // Bubbles pop at the surface.
        if (P.shape[k] === SHAPE.bubble && P.y[k] > -0.1) P.age[k] = P.life[k];
        P.spin[k] += P.spinV[k] * dt;
        pos[k * 3] = P.x[k];
        pos[k * 3 + 1] = P.y[k];
        pos[k * 3 + 2] = P.z[k];
        const f = P.fade[k];
        const alpha = u < f ? 1 : 1 - (u - f) / (1 - f);
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
    },
  };
}
