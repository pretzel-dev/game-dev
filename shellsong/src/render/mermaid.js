/**
 * The mermaid (and the merman King), built from rounded shapes: a big head
 * with big eyes and a smile, long flowing hair, a shell top, arms that
 * swim, and a long tail in segments that ripples, with a fan of a fin.
 * Every colour can be changed at any time with `setLook`.
 *
 * Built upright, facing -z. When she swims she tips forward to lie along
 * the way she's going; when she sits, her tail curls in front of her.
 */
import {
  BufferAttribute,
  BufferGeometry,
  CapsuleGeometry,
  ConeGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  MeshLambertMaterial,
  MeshPhongMaterial,
  SphereGeometry,
  TorusGeometry,
} from 'three';
import { damp } from '../core/utils.js';
import { colorOf } from './looks.js';

const TAIL = [
  // [length, radius] from the waist down
  [0.2, 0.175],
  [0.19, 0.165],
  [0.18, 0.145],
  [0.17, 0.12],
  [0.16, 0.095],
  [0.15, 0.072],
  [0.13, 0.055],
];

/** Shiny tail with a scale pattern drawn on it. */
function scaleMaterial(color) {
  const m = new MeshPhongMaterial({ color, shininess: 80, specular: 0x88aaaa });
  m.onBeforeCompile = (s) => {
    s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vScaleUv;').replace('#include <uv_vertex>', '#include <uv_vertex>\nvScaleUv = uv;');
    s.fragmentShader = s.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vScaleUv;')
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        {
          vec2 g = vScaleUv * vec2(14.0, 9.0);
          g.x += step(1.0, mod(g.y, 2.0)) * 0.5;
          vec2 f = fract(g) - vec2(0.5, 0.15);
          float edge = smoothstep(0.42, 0.5, length(f * vec2(1.0, 0.8)));
          diffuseColor.rgb *= 1.0 - edge * 0.28;
          diffuseColor.rgb += (1.0 - edge) * 0.06;
        }`
      );
  };
  return m;
}

const sphere = new SphereGeometry(1, 16, 12);
const lowSphere = new SphereGeometry(1, 10, 8);

function part(geo, mat, x, y, z, sx = 1, sy = sx, sz = sx) {
  const m = new Mesh(geo, mat);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  return m;
}

/**
 * look: { hair, skin, top, tail, crown } names (see looks.js).
 * opts.king: the merman King (bigger, with a beard and a trident).
 */
export function createMerperson(look, { king = false } = {}) {
  const mats = {
    skin: new MeshLambertMaterial({ color: 0xffffff }),
    hair: new MeshLambertMaterial({ color: 0xffffff }),
    top: new MeshPhongMaterial({ color: 0xffffff, shininess: 60 }),
    tail: scaleMaterial(0xffffff),
    fin: new MeshPhongMaterial({ color: 0xffffff, shininess: 60, transparent: true, opacity: 0.88 }),
    crown: new MeshPhongMaterial({ color: 0xffffff, shininess: 120, specular: 0xffffff }),
    eye: new MeshLambertMaterial({ color: 0x2a1d3a }),
    white: new MeshLambertMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5 }),
    blush: new MeshLambertMaterial({ color: 0xff9aa8, transparent: true, opacity: 0.6 }),
    mouth: new MeshLambertMaterial({ color: 0xb03a4a }),
    gem: new MeshPhongMaterial({ color: 0xff5aa8, shininess: 120, emissive: 0x401028 }),
    pearl: new MeshPhongMaterial({ color: 0xfff8f4, shininess: 120 }),
    beard: new MeshLambertMaterial({ color: 0xf4f4f8 }),
    gold: new MeshPhongMaterial({ color: 0xf2c94a, shininess: 120, specular: 0xffffff }),
  };

  const root = new Group();
  const body = new Group();
  root.add(body);
  if (king) root.scale.setScalar(1.85);

  // Torso and shell top.
  body.add(part(new CapsuleGeometry(0.16, 0.3, 6, 14), mats.skin, 0, 0, 0, 1, 1, 0.85));
  if (!king) {
    for (const sx of [-1, 1]) {
      const shell = part(new SphereGeometry(1, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), mats.top, sx * 0.075, 0.09, -0.1, 0.085, 0.07, 0.085);
      shell.rotation.x = -Math.PI / 2 + 0.15;
      shell.rotation.z = sx * 0.25;
      body.add(shell);
      // Ridges on the shells.
      for (let k = -1; k <= 1; k++) {
        const ridge = part(lowSphere, mats.top, sx * 0.075 + k * 0.028, 0.09 + Math.abs(k) * -0.01, -0.165, 0.008, 0.05, 0.01);
        body.add(ridge);
      }
    }
    body.add(part(lowSphere, mats.pearl, 0, 0.07, -0.135, 0.022));
  } else {
    // A golden sash for the King.
    const sash = part(new TorusGeometry(0.16, 0.025, 6, 20), mats.gold, 0, 0.02, 0, 1, 1, 0.85);
    sash.rotation.set(Math.PI / 2, 0.5, 0);
    body.add(sash);
  }
  // Waist: a band of pearls where the tail starts.
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2;
    body.add(part(lowSphere, mats.pearl, Math.cos(a) * 0.155, -0.17, Math.sin(a) * 0.135, 0.025));
  }

  // Head.
  const head = new Group();
  head.position.set(0, 0.42, 0);
  body.add(head);
  body.add(part(new CylinderGeometry(0.055, 0.065, 0.12, 10), mats.skin, 0, 0.27, 0));
  head.add(part(sphere, mats.skin, 0, 0, 0, 0.21, 0.205, 0.2));
  for (const sx of [-1, 1]) {
    head.add(part(lowSphere, mats.eye, sx * 0.075, 0.005, -0.178, 0.04, 0.055, 0.025));
    head.add(part(lowSphere, mats.white, sx * 0.075 + 0.014, 0.025, -0.198, 0.013));
    head.add(part(lowSphere, mats.blush, sx * 0.12, -0.055, -0.155, 0.035, 0.022, 0.012));
  }
  const smile = part(new TorusGeometry(0.035, 0.008, 6, 12, Math.PI), mats.mouth, 0, -0.07, -0.19);
  smile.rotation.z = Math.PI;
  head.add(smile);
  head.add(part(lowSphere, mats.skin, 0, -0.02, -0.2, 0.018));

  // Hair: a cap, a fringe, and long hair that flows behind.
  const hair = new Group();
  head.add(hair);
  hair.add(part(sphere, mats.hair, 0, 0.035, 0.02, 0.225, 0.215, 0.215));
  for (let k = -2; k <= 2; k++) hair.add(part(lowSphere, mats.hair, k * 0.055, 0.12 - Math.abs(k) * 0.025, -0.16 + Math.abs(k) * 0.02, 0.06, 0.05, 0.05));
  // Hairstyles: each one a group, shown or hidden. Every chain of locks sways.
  const locks = [];
  /** A chain of ellipsoid locks hanging from (x, y, z), getting narrower. */
  const chain = (into, x, y, z, count, w0, step = 0.13) => {
    let parent = into;
    for (let k = 0; k < count; k++) {
      const g = new Group();
      g.position.set(k === 0 ? x : 0, k === 0 ? y : -step, k === 0 ? z : 0.005);
      const w = w0 - k * (w0 / (count + 2));
      g.add(part(sphere, mats.hair, 0, -step * 0.6, 0.02, w, step * 1.05, w * 0.4));
      g.userData.first = k === 0;
      parent.add(g);
      locks.push(g);
      parent = g;
    }
  };
  const styles = {};
  // Long, flowing down her back.
  styles.long = new Group();
  for (const sx of [-1, 1]) styles.long.add(part(lowSphere, mats.hair, sx * 0.17, -0.05, 0.0, 0.07, 0.15, 0.09));
  chain(styles.long, 0, -0.02, 0.15, king ? 2 : 5, 0.21);
  // A high ponytail with a pearl band.
  styles.ponytail = new Group();
  styles.ponytail.add(part(new TorusGeometry(0.045, 0.018, 6, 12), mats.pearl, 0, 0.16, 0.17));
  chain(styles.ponytail, 0, 0.16, 0.19, 5, 0.11, 0.12);
  // Two buns on top, and a short fall behind.
  styles.buns = new Group();
  for (const sx of [-1, 1]) {
    styles.buns.add(part(sphere, mats.hair, sx * 0.13, 0.17, 0.04, 0.085));
    styles.buns.add(part(lowSphere, mats.pearl, sx * 0.13, 0.23, -0.02, 0.022));
  }
  chain(styles.buns, 0, -0.02, 0.15, 2, 0.17);
  // A short, round bob.
  styles.bob = new Group();
  for (const sx of [-1, 1]) styles.bob.add(part(sphere, mats.hair, sx * 0.16, -0.06, 0.03, 0.1, 0.16, 0.13));
  styles.bob.add(part(sphere, mats.hair, 0, -0.06, 0.13, 0.2, 0.16, 0.1));
  // Two long plaits, one each side.
  styles.plaits = new Group();
  for (const sx of [-1, 1]) chain(styles.plaits, sx * 0.14, -0.06, 0.1, 5, 0.075, 0.11);
  for (const g of Object.values(styles)) hair.add(g);

  // Crown: a ring of points with a gem at the front.
  const crown = new Group();
  crown.position.set(0, 0.17, 0.0);
  crown.rotation.x = -0.15;
  head.add(crown);
  const cr = king ? 0.13 : 0.1;
  crown.add(part(new CylinderGeometry(cr, cr * 1.05, 0.05, 18, 1, true), mats.crown, 0, 0, 0));
  for (let k = 0; k < (king ? 7 : 5); k++) {
    const a = (k / (king ? 7 : 5)) * Math.PI * 2 + Math.PI / 2;
    crown.add(part(new ConeGeometry(0.022, king ? 0.12 : 0.08, 6), mats.crown, Math.cos(a) * cr, king ? 0.08 : 0.06, -Math.sin(a) * cr));
    crown.add(part(lowSphere, mats.pearl, Math.cos(a) * cr, king ? 0.145 : 0.105, -Math.sin(a) * cr, 0.014));
  }
  crown.add(part(lowSphere, mats.gem, 0, 0.0, -cr - 0.01, 0.025));

  if (king) {
    // A big white beard and moustache.
    for (let k = 0; k < 7; k++) {
      const a = (k / 6) * Math.PI - Math.PI;
      head.add(part(lowSphere, mats.beard, Math.cos(a) * 0.13, -0.12 + Math.sin(a) * 0.06, -0.12, 0.07, 0.09, 0.06));
    }
    head.add(part(lowSphere, mats.beard, 0, -0.24, -0.1, 0.11, 0.14, 0.07));
    for (const sx of [-1, 1]) head.add(part(lowSphere, mats.beard, sx * 0.05, -0.05, -0.19, 0.055, 0.022, 0.025));
    smile.visible = false;
  }

  // Arms.
  const arms = [-1, 1].map((sx) => {
    const shoulder = new Group();
    shoulder.position.set(sx * 0.19, 0.13, 0);
    body.add(shoulder);
    shoulder.add(part(new CapsuleGeometry(0.042, 0.17, 4, 8), mats.skin, 0, -0.11, 0));
    const elbow = new Group();
    elbow.position.set(0, -0.22, 0);
    shoulder.add(elbow);
    elbow.add(part(new CapsuleGeometry(0.036, 0.15, 4, 8), mats.skin, 0, -0.09, 0));
    elbow.add(part(lowSphere, mats.skin, 0, -0.2, 0, 0.045));
    // A pearl bracelet.
    const bracelet = part(new TorusGeometry(0.04, 0.012, 5, 12), mats.pearl, 0, -0.15, 0);
    bracelet.rotation.x = Math.PI / 2;
    elbow.add(bracelet);
    return { shoulder, elbow, side: sx };
  });
  if (king) {
    // The trident, in his right hand.
    const tri = new Group();
    tri.add(part(new CylinderGeometry(0.018, 0.018, 1.5, 6), mats.gold, 0, 0.3, 0));
    for (const sx of [-1, 0, 1]) tri.add(part(new ConeGeometry(0.03, 0.18, 6), mats.gold, sx * 0.07, 1.1 + (sx === 0 ? 0.04 : 0), 0));
    const bar = part(new CylinderGeometry(0.012, 0.012, 0.16, 6), mats.gold, 0, 1.0, 0);
    bar.rotation.z = Math.PI / 2;
    tri.add(bar);
    tri.position.set(0, -0.2, 0);
    tri.rotation.x = -1.4; // upright while his forearm points forward
    arms[1].elbow.add(tri);
  }

  // Tail: one smooth, tapering tube, rebuilt every frame along the bends.
  const tail = createTail(mats.tail);
  body.add(tail.mesh);
  // The fin: two soft lobes, fanned out.
  const fin = new Group();
  body.add(fin);
  for (const sx of [-1, 1]) {
    const lobe = part(sphere, mats.fin, sx * 0.13, -0.17, 0, 0.13, 0.26, 0.035);
    lobe.rotation.z = sx * 0.75;
    fin.add(lobe);
  }
  fin.add(part(sphere, mats.tail, 0, 0, 0, 0.06, 0.07, 0.05));

  root.userData = { mats, body, head, hair, locks, styles, crown, arms, tail, fin, king, wave: 0, swimPose: 0, sitPose: 0, phase: 0, bends: TAIL.map(() => 0), emote: 0, emoteKind: null };
  setLook(root, look);
  return root;
}

/**
 * The tail as a tube: rings of vertices along a curve that bends a little
 * at a time, so it's smooth however much it waves.
 */
function createTail(material) {
  const SUB = 4;
  const RADIAL = 14;
  const rings = TAIL.length * SUB + 1;
  const total = TAIL.reduce((s, [l]) => s + l, 0);
  const pos = new Float32Array(rings * (RADIAL + 1) * 3);
  const nor = new Float32Array(rings * (RADIAL + 1) * 3);
  const uv = new Float32Array(rings * (RADIAL + 1) * 2);
  const idx = [];
  for (let j = 0; j < rings - 1; j++) {
    for (let k = 0; k < RADIAL; k++) {
      const a = j * (RADIAL + 1) + k;
      const b = a + RADIAL + 1;
      idx.push(a, a + 1, b, a + 1, b + 1, b);
    }
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(pos, 3));
  geo.setAttribute('normal', new BufferAttribute(nor, 3));
  geo.setAttribute('uv', new BufferAttribute(uv, 2));
  geo.setIndex(idx);
  const mesh = new Mesh(geo, material);
  mesh.castShadow = true;
  mesh.frustumCulled = false;
  const out = { y: 0, z: 0, angle: 0 };
  return {
    mesh,
    /** bends: how much each segment turns (radians). Returns where it ends. */
    update(bends) {
      let y = -0.12;
      let z = 0;
      let angle = 0;
      let along = 0;
      let ring = 0;
      for (let i = 0; i < TAIL.length; i++) {
        const [len, r0] = TAIL[i];
        const r1 = i + 1 < TAIL.length ? TAIL[i + 1][1] : 0.04;
        for (let s = 0; s < SUB || (i === TAIL.length - 1 && s === SUB); s++) {
          const f = s / SUB;
          const r = r0 + (r1 - r0) * f;
          // The tangent points down the tail: (0, -cos a, -sin a).
          const ty = -Math.cos(angle);
          const tz = -Math.sin(angle);
          for (let k = 0; k <= RADIAL; k++) {
            const phi = (k / RADIAL) * Math.PI * 2;
            const cx = Math.cos(phi);
            const sn = Math.sin(phi);
            // Round sideways, a little flatter front to back.
            const nx = cx;
            const ny = sn * tz;
            const nz = sn * -ty;
            const q = (ring * (RADIAL + 1) + k) * 3;
            pos[q] = nx * r;
            pos[q + 1] = y + ny * r * 0.85;
            pos[q + 2] = z + nz * r * 0.85;
            const l = Math.hypot(nx, ny, nz) || 1;
            nor[q] = nx / l;
            nor[q + 1] = ny / l;
            nor[q + 2] = nz / l;
            const w = (ring * (RADIAL + 1) + k) * 2;
            uv[w] = k / RADIAL;
            uv[w + 1] = along / total;
          }
          ring++;
          if (s === SUB) break;
          angle += bends[i] / SUB;
          const step = len / SUB;
          y += -Math.cos(angle) * step;
          z += -Math.sin(angle) * step;
          along += step;
        }
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.normal.needsUpdate = true;
      out.y = y;
      out.z = z;
      out.angle = angle;
      return out;
    },
  };
}

export function setLook(model, look) {
  const { mats, king, styles } = model.userData;
  const style = king ? 'long' : styles[look?.style] ? look.style : 'long';
  for (const [name, g] of Object.entries(styles)) g.visible = name === style;
  if (king) {
    mats.skin.color.setHex(0xf2c8a0);
    mats.hair.color.setHex(0xf4f4f8);
    mats.tail.color.setHex(0x2a8ac0);
    mats.fin.color.setHex(0x6ac8f0);
    mats.crown.color.setHex(0xf2c94a);
    mats.gem.color.setHex(0x5aa8ff);
    return;
  }
  mats.skin.color.setHex(colorOf(look, 'skin'));
  mats.hair.color.setHex(colorOf(look, 'hair'));
  mats.top.color.setHex(colorOf(look, 'top'));
  const tail = colorOf(look, 'tail');
  mats.tail.color.setHex(tail);
  mats.fin.color.setHex(tail).lerp(mats.white.color, 0.35);
  mats.crown.color.setHex(colorOf(look, 'crown'));
}

/**
 * Pose and animate. state: { pitch, roll, yaw, speed, stroke, mode, twirl,
 * atSurface, wave } (the mermaid from world/swim.js, or something like it).
 */
export function poseMerperson(model, s, dt, t) {
  const u = model.userData;
  const swimming = s.mode === 'swim' && (s.speed > 1.2 || Math.abs(s.vy || 0) > 1.5) && !(s.atSurface && s.speed < 2.5);
  const sitting = s.mode === 'sit' || s.mode === 'throne' || s.mode === 'ride' || s.mode === 'leap';
  u.swimPose = damp(u.swimPose, swimming ? 1 : 0, 3, dt);
  u.sitPose = damp(u.sitPose, sitting ? 1 : 0, 5, dt);
  const stroke = s.stroke ?? 0;
  u.phase += dt * (2 + stroke * 5);

  // Emotes: which one, and how far in (fading in and out).
  const em = s.emote;
  if (em) u.emoteKind = em.kind;
  u.emote = damp(u.emote, em ? Math.min(1, (em.dur - em.t) * 3) : 0, 8, dt);
  const ek = u.emote > 0.01 ? u.emoteKind : null;
  const et = em ? em.t : 0;
  const ew = u.emote;

  // Lie along the swim, tipped by pitch; upright when floating or sitting.
  let spin = s.twirl > 0 ? (1 - s.twirl) * Math.PI * 4 : 0;
  let flip = 0;
  let sway = 0;
  if (ek === 'flip' && em) flip = -Math.PI * 2 * Math.min(1, (em.t / em.dur) * 1.15);
  if (ek === 'dance') {
    sway = Math.sin(et * 7) * 0.3 * ew;
    spin += Math.sin(et * 3.5) * 0.5 * ew;
  }
  u.body.rotation.set(-(Math.PI / 2) * u.swimPose * (1 - u.sitPose) + (s.pitch || 0) * u.swimPose + flip, spin, (s.roll || 0) * (0.4 + 0.6 * u.swimPose) + sway);
  // A gentle bob when still (and a bounce when dancing).
  u.body.position.y = Math.sin(t * 1.6) * 0.05 * (1 - u.swimPose) * (1 - u.sitPose) + (ek === 'dance' ? Math.abs(Math.sin(et * 7)) * 0.08 * ew : 0);

  // Tail: a wave running down it, bigger when swimming hard. Sitting, it
  // reaches forward over the edge of the rock and hangs down into the water.
  const amp = 0.12 + stroke * 0.32 + (ek === 'dance' ? 0.25 * ew : 0);
  const SIT = [1.35, 0.15, -0.25, -0.35, -0.35, -0.3, -0.2];
  u.bends.forEach((_, i) => {
    const wave = Math.sin(u.phase - i * 0.75) * amp * (0.4 + i * 0.12);
    const swish = i > 3 ? Math.sin(t * 1.5 - i * 0.5) * 0.08 : 0;
    u.bends[i] = wave * (1 - u.sitPose * 0.8) + (SIT[i] + swish) * u.sitPose + Math.sin(t * 1.2 + i) * 0.04;
  });
  const end = u.tail.update(u.bends);
  u.fin.position.set(0, end.y, end.z);
  u.fin.rotation.x = end.angle + Math.sin(u.phase - 6) * amp * 1.2 - 0.25 * u.sitPose;

  // Hair streams back when swimming, floats and sways when still.
  // Her head lifts to look ahead when she swims (and tips back to sing).
  const headX = 1.1 * u.swimPose * (1 - u.sitPose) - (ek === 'sing' ? 0.3 * ew : 0);
  u.locks.forEach((g, i) => {
    // The hair always flows out behind her, whatever her head is doing: the
    // root of each lock is set against the head's tilt, so in the body's
    // frame it points down her back and away from it (never into her neck).
    // Floating, it hangs down and out behind; swimming, it streams back
    // along her body, lifted over her back.
    const sway = Math.sin(t * 1.8 - i * 0.6) * 0.1;
    if (g.userData.first) g.rotation.x = -(0.5 - 0.22 * u.swimPose) - headX + sway;
    else g.rotation.x = 0.08 - 0.06 * u.swimPose + sway * 0.6;
    g.rotation.z = Math.sin(t * 1.1 - i * 0.5) * 0.08;
  });

  // Arms: a breaststroke when swimming, floating out when still, and a wave.
  const wantWave = s.wave || ek === 'wave' ? 1 : 0;
  u.wave = damp(u.wave, wantWave, 4, dt);
  // (Rotating x forward swings an arm to the front; z swings it out to the side.)
  for (const a of u.arms) {
    const sx = a.side;
    const still = 1 - u.swimPose;
    const sweep = Math.sin(u.phase * 0.5) * 0.45 * u.swimPose;
    let x = 0.25 * still + sweep;
    let z = sx * (0.55 * still + 0.3 * u.swimPose + 0.2 * Math.sin(t * 1.3 + sx) * still);
    let elbow = 0.35 * still + 0.15;
    if (s.mode === 'ride' || s.mode === 'leap') {
      x = 1.0;
      z = sx * 0.25;
      elbow = 0.4;
    }
    if (sx > 0 && u.wave > 0.01) {
      // Waving hello.
      x = x * (1 - u.wave) + 0.2 * u.wave;
      z = z * (1 - u.wave) + (2.5 + Math.sin(t * 9) * 0.35) * u.wave;
      elbow = elbow * (1 - u.wave) + 0.4 * u.wave;
    }
    // Emotes take over the arms.
    if (ek === 'kiss' && sx > 0) {
      // Hand to her lips, then out towards you.
      const out = em ? Math.min(1, Math.max(0, (em.t - 0.6) * 2.5)) : 1;
      x = x * (1 - ew) + (1.2 + out * 0.5) * ew;
      z = z * (1 - ew) + 0.25 * ew;
      elbow = elbow * (1 - ew) + (2.3 - out * 1.8) * ew;
    } else if (ek === 'sing') {
      x = x * (1 - ew) + 0.9 * ew;
      z = z * (1 - ew) + sx * (1.0 + Math.sin(et * 2 + sx) * 0.25) * ew;
      elbow = elbow * (1 - ew) + 0.2 * ew;
    } else if (ek === 'dance') {
      const up = Math.sin(et * 7 + (sx > 0 ? 0 : Math.PI)) > 0;
      x = x * (1 - ew) + 0.3 * ew;
      z = z * (1 - ew) + sx * (up ? 2.7 : 1.2) * ew;
      elbow = elbow * (1 - ew) + 0.5 * ew;
    } else if (ek === 'flip') {
      x = x * (1 - ew) + 2.8 * ew;
      z = z * (1 - ew) + sx * 0.3 * ew;
      elbow = elbow * (1 - ew);
    }
    if (u.king && sx > 0) {
      // Holding the trident upright.
      x = 0.3;
      z = 0.35;
      elbow = 1.4;
    }
    a.shoulder.rotation.set(x, 0, z);
    a.elbow.rotation.set(elbow, 0, 0);
  }
  // Look where she's going when swimming (lying along the swim, her head
  // lifts to face forward), and round about when still. Singing, chin up.
  u.head.rotation.x = headX;
  u.head.rotation.y = Math.sin(t * 0.5) * 0.15 * (1 - u.swimPose);
  u.head.rotation.z = ek === 'sing' || ek === 'dance' ? Math.sin(et * 3) * 0.15 * ew : 0;
}

