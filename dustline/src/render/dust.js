/**
 * Dust: one pool of soft billboards. Wheels on sand throw up big orange
 * plumes when they slide or the car is fast, landings make a ring, and the
 * boost leaves a quick hot shimmer. All one draw call.
 */
import { BufferAttribute, BufferGeometry, Color, NormalBlending, Points, ShaderMaterial } from 'three';
import { QUALITY } from '../core/quality.js';

const vertexShader = /* glsl */ `
  attribute float aAge;
  attribute float aSize;
  attribute vec3 aColor;
  uniform float pixelScale;
  varying float vAge;
  varying vec3 vColor;
  varying float vNear;
  #include <common>
  #include <logdepthbuf_pars_vertex>
  void main() {
    vAge = aAge;
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float grow = aSize * (0.5 + aAge * 1.1);
    gl_PointSize = aAge >= 1.0 ? 0.0 : min(grow * pixelScale / -mv.z, pixelScale * 0.35);
    // Fade puffs that drift right up to the lens.
    vNear = smoothstep(3.0, 9.0, -mv.z);
    #include <logdepthbuf_vertex>
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 tint;
  varying float vAge;
  varying vec3 vColor;
  varying float vNear;
  #include <logdepthbuf_pars_fragment>
  void main() {
    #include <logdepthbuf_fragment>
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    // Soft, but with a toon edge: two flat tones, not a smear.
    float body = smoothstep(0.5, 0.12, d);
    float core = smoothstep(0.32, 0.12, d + c.y * 0.25);
    float alpha = body * (1.0 - vAge) * (1.0 - vAge) * 0.5 * vNear;
    vec3 col = mix(vColor * 0.84, vColor * 1.04, core) * tint;
    gl_FragColor = vec4(col, alpha);
    #include <colorspace_fragment>
  }
`;

export function createDust(scene) {
  const n = QUALITY.dust;
  const pos = new Float32Array(n * 3);
  const vel = new Float32Array(n * 3);
  const age = new Float32Array(n).fill(1);
  const life = new Float32Array(n).fill(1);
  const size = new Float32Array(n);
  const color = new Float32Array(n * 3);
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(pos, 3));
  geo.setAttribute('aAge', new BufferAttribute(age, 1));
  geo.setAttribute('aSize', new BufferAttribute(size, 1));
  geo.setAttribute('aColor', new BufferAttribute(color, 3));
  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: NormalBlending,
    uniforms: { pixelScale: { value: 600 }, tint: { value: new Color(1, 1, 1) } },
  });
  const points = new Points(geo, material);
  points.frustumCulled = false;
  points.renderOrder = 2;
  scene.add(points);

  let next = 0;
  const sand = new Color(0xe0a06a);
  const pale = new Color(0xead2b4);
  const foam = new Color(0xf2f8fb);
  const tmp = new Color();

  function emit(x, y, z, vx, vy, vz, s, l, c = sand) {
    const i = next;
    next = (next + 1) % n;
    pos[i * 3] = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = z;
    vel[i * 3] = vx;
    vel[i * 3 + 1] = vy;
    vel[i * 3 + 2] = vz;
    age[i] = 0;
    life[i] = l;
    size[i] = s;
    tmp.copy(c).multiplyScalar(0.9 + Math.random() * 0.2);
    color[i * 3] = tmp.r;
    color[i * 3 + 1] = tmp.g;
    color[i * 3 + 2] = tmp.b;
  }

  let carry = 0;

  return {
    /** Dust isn't lit, so it takes its colour cast from the light preset. */
    setTint(hex) {
      material.uniforms.tint.value.setHex(hex).lerp(new Color(1, 1, 1), 0.35);
    },
    setPixelScale(heightPx, fov) {
      material.uniforms.pixelScale.value = heightPx / (2 * Math.tan((fov * Math.PI) / 360));
    },
    /** White water thrown up round the car. */
    splash(x, y, z, strength, vx = 0, vz = 0) {
      const k = Math.floor(6 + strength * 26);
      for (let i = 0; i < k; i++) {
        const a = Math.random() * Math.PI * 2;
        const sp = 1.5 + Math.random() * 4 * strength;
        emit(x, y + 0.4, z, Math.cos(a) * sp + vx * 0.3, 3 + Math.random() * 5 * strength, Math.sin(a) * sp + vz * 0.3, 1.2 + strength * 1.6, 0.8 + Math.random() * 0.6, foam);
      }
    },
    /** Mist rolling up off the bottom of the falls. */
    mist(x, y, z) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * 4;
      emit(x + Math.cos(a) * r, y, z + Math.sin(a) * r, Math.cos(a) * 2, 1.5 + Math.random() * 2, Math.sin(a) * 2, 4 + Math.random() * 3, 2.5 + Math.random() * 1.5, foam);
    },
    /** A ring of dust where the car comes down. */
    landing(x, y, z, strength) {
      const k = Math.floor(10 + strength * 30);
      for (let i = 0; i < k; i++) {
        const a = (i / k) * Math.PI * 2;
        const sp = 3 + strength * 7;
        emit(x, y + 0.8, z, Math.cos(a) * sp, 1 + Math.random() * 2, Math.sin(a) * sp, 2.2 + strength * 2.5, 1.3 + Math.random());
      }
    },
    update(dt, car) {
      // Wheels on sand or dirt kick dust, more when sliding or fast.
      const speed = car.speed;
      for (const w of car.wheels) {
        if (!w.contact || w.surface !== 'ground' || car.inWater) continue;
        const rate = Math.min(50, Math.max(0, speed - 3) * 0.8 + w.slip * 60) * (w.front ? 0.4 : 1);
        carry += rate * dt;
        while (carry >= 1) {
          carry -= 1;
          const back = 0.25 + Math.random() * 0.4;
          emit(
            w.point.x + (Math.random() - 0.5) * 0.5,
            w.point.y + 0.7,
            w.point.z + (Math.random() - 0.5) * 0.5,
            -car.vel.x * back + (Math.random() - 0.5) * 3,
            1.2 + Math.random() * 2.5 + w.slip * 2,
            -car.vel.z * back + (Math.random() - 0.5) * 3,
            1.2 + Math.random() * 1.2 + w.slip * 1.2 + speed * 0.03,
            1.4 + Math.random() * 1.6,
            Math.random() < 0.3 ? pale : sand
          );
        }
      }
      for (let i = 0; i < n; i++) {
        if (age[i] >= 1) continue;
        age[i] = Math.min(1, age[i] + dt / life[i]);
        const drag = 1 - Math.min(1, 1.8 * dt);
        vel[i * 3] *= drag;
        vel[i * 3 + 1] = vel[i * 3 + 1] * drag - 0.6 * dt;
        vel[i * 3 + 2] *= drag;
        pos[i * 3] += vel[i * 3] * dt + 0.6 * dt;
        pos[i * 3 + 1] += vel[i * 3 + 1] * dt;
        pos[i * 3 + 2] += vel[i * 3 + 2] * dt + 0.3 * dt;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.aAge.needsUpdate = true;
      geo.attributes.aSize.needsUpdate = true;
      geo.attributes.aColor.needsUpdate = true;
    },
  };
}

