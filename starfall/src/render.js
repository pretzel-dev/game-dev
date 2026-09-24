import * as THREE from 'three';
import { NEUTRAL, progress, capOf, upgradeProgress } from './sim.js';

export const OWNER_COLORS = ['#4db4ff', '#ff5a6e', '#ffb347', '#b57bff'];
export const NEUTRAL_COLOR = '#7d8398';
export const ownerColor = (o) => (o === NEUTRAL ? NEUTRAL_COLOR : OWNER_COLORS[o]);

const MAX_FLEETS = 512;
const MAX_SHIPS = 1500; // individual ship sprites, shared by fleets and sieges
const MAX_BOOMS = 260;

/** Stable pseudo-random 0..1 for (a, b), so each ship keeps its own quirks. */
function hash(a, b) {
  let x = Math.imul(a ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(b + 0x632be5ab, 0xc2b2ae35);
  x ^= x >>> 15;
  x = Math.imul(x, 0x2c1b3c6d);
  x ^= x >>> 12;
  return (x >>> 0) / 4294967296;
}

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.18, 'rgba(255,255,255,0.55)');
  grad.addColorStop(0.45, 'rgba(255,255,255,0.12)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function ringTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.strokeStyle = '#fff';
  g.lineWidth = 5;
  g.beginPath();
  g.arc(64, 64, 56, 0, Math.PI * 2);
  g.stroke();
  return new THREE.CanvasTexture(c);
}

function starfield() {
  const n = 1800;
  const pos = new Float32Array(n * 3);
  const col = new Float32Array(n * 3);
  const c = new THREE.Color();
  for (let i = 0; i < n; i++) {
    const v = new THREE.Vector3().randomDirection().multiplyScalar(1500 + Math.random() * 600);
    pos.set([v.x, v.y, v.z], i * 3);
    c.setHSL(0.55 + Math.random() * 0.15, 0.4, 0.4 + Math.random() * 0.5);
    col.set([c.r, c.g, c.b], i * 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return new THREE.Points(geo, new THREE.PointsMaterial({ size: 1.6, vertexColors: true, sizeAttenuation: false, transparent: true, opacity: 0.8 }));
}

export function createView(canvas, labelRoot) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#05060d');
  const camera = new THREE.PerspectiveCamera(50, 1, 1, 5000);
  scene.add(starfield());

  const glow = glowTexture();
  const ringTex = ringTexture();
  const world = new THREE.Group();
  scene.add(world);

  // Orbit camera state.
  const orbit = { az: 0.6, pol: 1.05, dist: 300, minDist: 30, maxDist: 900, target: new THREE.Vector3(), vaz: 0, vpol: 0 };

  let systems = [];
  let fleetSprites = [];
  const extent = { x: 40, z: 40 };

  // Fleet trails: one segment from each fleet to its destination.
  const trailPos = new Float32Array(MAX_FLEETS * 6);
  const trailCol = new Float32Array(MAX_FLEETS * 6);
  const trailGeo = new THREE.BufferGeometry();
  trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
  trailGeo.setAttribute('color', new THREE.BufferAttribute(trailCol, 3));
  const trails = new THREE.LineSegments(trailGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.25 }));
  trails.frustumCulled = false;
  scene.add(trails);

  // Drag-to-send preview line.
  const dragGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
  const dragLine = new THREE.Line(dragGeo, new THREE.LineDashedMaterial({ color: OWNER_COLORS[0], dashSize: 3, gapSize: 2 }));
  dragLine.frustumCulled = false;
  dragLine.visible = false;
  scene.add(dragLine);

  function build(game) {
    world.clear();
    labelRoot.innerHTML = '';
    fleetLabels = [];
    extent.x = Math.max(...game.systems.map((s) => Math.abs(s.pos.x)));
    extent.z = Math.max(...game.systems.map((s) => Math.abs(s.pos.z)));
    systems = game.systems.map((s) => {
      const g = new THREE.Group();
      g.position.set(s.pos.x, s.pos.y, s.pos.z);
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(s.size, 24, 16),
        new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.08 + s.hue * 0.55, 0.5, 0.82) }),
      );
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      halo.scale.setScalar(s.size * 7);
      const rings = [];
      for (let i = 0; i < 4; i++) {
        const r = new THREE.Mesh(
          new THREE.TorusGeometry(s.size * (1.9 + i * 0.55), 0.06, 6, 64),
          new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.85 }),
        );
        r.rotation.set(Math.PI / 2 + (i - 1.5) * 0.25, 0, i * 0.7);
        g.add(r);
        rings.push(r);
      }
      const sel = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, transparent: true, depthWrite: false, color: '#ffffff' }));
      sel.scale.setScalar(s.size * 7.5);
      sel.visible = false;
      g.add(core, halo, sel);
      world.add(g);
      const label = document.createElement('div');
      label.className = 'lbl';
      labelRoot.appendChild(label);
      return { s, g, core, halo, rings, sel, label, shown: -1, owner: null, pulse: 0 };
    });
    orbit.dist = fitDistance();
  }

  function fitDistance() {
    // Fit the map's footprint, assuming x runs across the screen and z up it.
    const tanV = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const tanH = tanV * (camera.aspect || 1);
    const d = Math.max((extent.x + 5) / tanH, (extent.z + 5) * Math.cos(orbit.pol - 0.5) / tanV);
    return THREE.MathUtils.clamp(d, orbit.minDist, orbit.maxDist);
  }

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  // Explosions: short additive flashes that swell and fade.
  const booms = [];
  let boomNext = 0;
  function boom(x, y, z, color, size, life) {
    let b = booms[boomNext];
    if (!b) {
      b = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      b.userData = {};
      scene.add(b);
      booms[boomNext] = b;
    }
    boomNext = (boomNext + 1) % MAX_BOOMS;
    b.position.set(x, y, z);
    b.material.color.set(color);
    b.userData.age = 0;
    b.userData.life = life;
    b.userData.size = size;
    b.visible = true;
  }
  function updateBooms(dt) {
    for (const b of booms) {
      if (!b.visible) continue;
      const d = b.userData;
      d.age += dt;
      const k = d.age / d.life;
      if (k >= 1) { b.visible = false; continue; }
      b.scale.setScalar(d.size * (0.4 + Math.sqrt(k)));
      b.material.opacity = Math.min(1, (1 - k) * 1.6);
    }
  }
  const BOOM_COLORS = ['#ffffff', '#ffd27a', '#ff9a4a', '#ff6a3a'];

  function fleetSprite(i) {
    if (i >= MAX_SHIPS) return null;
    if (!fleetSprites[i]) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      scene.add(sp);
      fleetSprites[i] = sp;
    }
    return fleetSprites[i];
  }

  const tmp = new THREE.Vector3();
  const head = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const side = new THREE.Vector3();
  const UP = new THREE.Vector3(0, 1, 0);
  const up2 = new THREE.Vector3();
  let fleetLabels = [];
  function fleetLabel(i) {
    if (!fleetLabels[i]) {
      const el = document.createElement('div');
      el.className = 'lbl flbl';
      labelRoot.appendChild(el);
      fleetLabels[i] = el;
    }
    return fleetLabels[i];
  }
  const tmpColor = new THREE.Color();

  function fleetPos(game, f, out) {
    const a = game.systems[f.from].pos;
    const b = game.systems[f.to].pos;
    const p = progress(f);
    // Slight arc so crossing fleets don't overlap.
    const lift = Math.sin(p * Math.PI) * 4;
    return out.set(a.x + (b.x - a.x) * p, a.y + (b.y - a.y) * p + lift, a.z + (b.z - a.z) * p);
  }

  function render(game, ui, dt, time) {
    // Camera inertia.
    if (!ui.dragging) {
      orbit.az += orbit.vaz;
      orbit.pol += orbit.vpol;
      orbit.vaz *= 0.92;
      orbit.vpol *= 0.92;
    }
    orbit.pol = THREE.MathUtils.clamp(orbit.pol, 0.25, Math.PI - 0.25);
    orbit.dist = THREE.MathUtils.clamp(orbit.dist, orbit.minDist, orbit.maxDist);
    orbit.target.x = THREE.MathUtils.clamp(orbit.target.x, -extent.x, extent.x);
    orbit.target.z = THREE.MathUtils.clamp(orbit.target.z, -extent.z, extent.z);
    orbit.target.y = 0;
    camera.position.setFromSphericalCoords(orbit.dist, orbit.pol, orbit.az).add(orbit.target);
    camera.lookAt(orbit.target);
    camera.updateMatrixWorld();

    const w = window.innerWidth;
    const h = window.innerHeight;
    let used = 0; // ship sprites handed out this frame
    updateBooms(dt);

    const vis = ui.vis;
    for (const v of systems) {
      const { s } = v;
      // Fog of war: beyond sensor range a star is just a dim point of light.
      const known = !vis || vis.systems.has(s.id);
      const shownOwner = known ? s.owner : NEUTRAL;
      const col = ownerColor(shownOwner);
      if (v.owner !== shownOwner || v.known !== known) {
        if (v.owner !== null && known && v.known) v.pulse = 1;
        v.owner = shownOwner;
        v.known = known;
        v.halo.material.color.set(col);
        v.halo.material.opacity = known ? 1 : 0.35;
        v.core.material.opacity = known ? 1 : 0.45;
        v.core.material.transparent = !known;
        for (const r of v.rings) r.material.color.set(col);
        v.label.style.color = col;
        v.label.style.opacity = known ? 1 : 0.45;
      }
      v.pulse = Math.max(0, v.pulse - dt * 1.5);
      const full = s.owner !== NEUTRAL && s.units >= capOf(s) - 0.01;
      v.halo.scale.setScalar(s.size * (7 + v.pulse * 10 + (full ? Math.sin(time * 4) * 0.4 : 0)));
      // Rings show the level; the next one fades in, spinning fast, while it's built.
      const building = upgradeProgress(s);
      v.rings.forEach((r, i) => {
        const underway = building > 0 && i === s.level;
        r.visible = known && (i < s.level || underway);
        r.material.opacity = underway ? 0.15 + building * 0.7 : 0.85;
        r.rotation.z += dt * (underway ? 3 : 0.25 + i * 0.1);
      });
      if (known && building > 0 && Math.random() < dt * 10) {
        const a = Math.random() * Math.PI * 2;
        const rr = s.size * (1.9 + s.level * 0.55);
        boom(s.pos.x + Math.cos(a) * rr, s.pos.y + (Math.random() - 0.5) * s.size, s.pos.z + Math.sin(a) * rr, '#bfe6ff', s.size * 2.4, 0.6);
      }

      // Sieges: attackers circle the star while explosions flicker through the fight.
      for (const g of known ? s.sieges : []) {
        const gc = ownerColor(g.owner);
        const n = Math.min(60, Math.ceil(g.units));
        for (let j = 0; j < n; j++) {
          const sp = fleetSprite(used++);
          if (!sp) break;
          const r1 = hash(g.owner * 7919 + s.id, j);
          const r2 = hash(j, s.id * 31 + g.owner);
          const rad = s.size * (3 + r1 * 3);
          const ang = r2 * Math.PI * 2 + time * (0.25 + r1 * 0.35);
          const tilt = (r1 - 0.5) * 1.2;
          sp.visible = true;
          sp.position.set(
            s.pos.x + Math.cos(ang) * rad,
            s.pos.y + Math.sin(ang) * rad * tilt,
            s.pos.z + Math.sin(ang) * rad,
          );
          sp.material.color.set(gc);
          sp.scale.setScalar(2.2);
        }
      }
      if (!known) s.fighting = 0;
      if (s.fighting) {
        // One flash per ship lost, split between the attackers and the defences.
        let flashes = Math.min(14, s.fighting * 2 + Math.random());
        s.fighting = 0;
        for (; flashes >= 1; flashes--) {
          const onShip = Math.random() < 0.6;
          const a = Math.random() * Math.PI * 2;
          const rad = s.size * (onShip ? 3 + Math.random() * 3 : 1.1 + Math.random() * 0.6);
          boom(
            s.pos.x + Math.cos(a) * rad,
            s.pos.y + (Math.random() - 0.5) * rad * (onShip ? 0.6 : 1.4),
            s.pos.z + Math.sin(a) * rad,
            BOOM_COLORS[(Math.random() * BOOM_COLORS.length) | 0],
            s.size * (2.2 + Math.random() * 3),
            0.45 + Math.random() * 0.6,
          );
        }
        v.pulse = Math.max(v.pulse, 0.15);
      }
      const selected = ui.selected === s.id;
      const hovered = (ui.hover === s.id || ui.target === s.id) && !selected;
      v.sel.visible = selected || hovered;
      v.sel.material.opacity = selected ? 0.9 : 0.45;
      v.sel.material.color.set(selected ? '#ffffff' : col);
      v.sel.scale.setScalar(s.size * (7.5 + (selected ? Math.sin(time * 5) * 0.4 : 0)));

      // Screen-space label under the star.
      tmp.copy(v.g.position).project(camera);
      const attackers = s.sieges.map((g) => `<span style="color:${ownerColor(g.owner)}"> ⚔ ${Math.ceil(g.units)}</span>`).join('');
      const text = known ? `${Math.floor(s.units)}${attackers}` : '?';
      if (text !== v.shown) {
        v.label.innerHTML = text;
        v.shown = text;
      }
      if (tmp.z > 1) {
        v.label.style.visibility = 'hidden';
      } else {
        v.label.style.visibility = 'visible';
        const x = (tmp.x * 0.5 + 0.5) * w;
        const y = (-tmp.y * 0.5 + 0.5) * h;
        const px = (s.size * 2.2 * h) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.distanceTo(v.g.position));
        v.label.style.transform = `translate(${x}px, ${y + px + 4}px) translate(-50%, 0)`;
      }
    }

    // Fleets: a wedge of ships sized by the fleet, a trail to the target and a label.
    // Enemy fleets only show inside sensor range, and their details need intel.
    const intel = vis ? vis.intel : 2;
    const fleets = game.fleets.slice(0, MAX_FLEETS);
    let trailCount = 0;
    fleets.forEach((f, i) => {
      const a = game.systems[f.from].pos;
      const b = game.systems[f.to].pos;
      fleetPos(game, f, head);
      const mine = !vis || f.owner === vis.owner;
      const lbl = fleetLabel(i);
      if (!mine && !vis.sees(head)) { f.fighting = 0; lbl.style.visibility = 'hidden'; return; }
      if (f.fighting) {
        // A battle in open space: flashes between this fleet and its opponent.
        let flashes = Math.min(10, f.fighting * 2 + Math.random());
        f.fighting = 0;
        for (; flashes >= 1; flashes--) {
          const r = 2 + Math.random() * 6;
          const a1 = Math.random() * Math.PI * 2;
          const a2 = (Math.random() - 0.5) * Math.PI;
          boom(
            head.x + Math.cos(a1) * Math.cos(a2) * r,
            head.y + Math.sin(a2) * r,
            head.z + Math.sin(a1) * Math.cos(a2) * r,
            BOOM_COLORS[(Math.random() * BOOM_COLORS.length) | 0],
            3 + Math.random() * 4,
            0.4 + Math.random() * 0.5,
          );
        }
      }
      dir.set(b.x - a.x, b.y - a.y, b.z - a.z).normalize();
      side.crossVectors(dir, UP).normalize();
      up2.crossVectors(side, dir);
      const color = ownerColor(f.owner);
      // A loose cloud, one sprite per ship (up to a point). Each ship has its own
      // spot and pace, so the cloud drifts and stragglers trail behind.
      const n = Math.min(50, Math.ceil(f.units));
      const spread = 1.2 + Math.sqrt(n) * 0.45;
      const p = progress(f);
      const grow = Math.min(1, p * 8, (1 - p) * 8); // gather at launch, close up on arrival
      for (let j = 0; j < n; j++) {
        const sp = fleetSprite(used++);
        if (!sp) break;
        const r1 = hash(f.id, j * 3);
        const r2 = hash(f.id, j * 3 + 1);
        const r3 = hash(f.id, j * 3 + 2);
        const ang = r1 * Math.PI * 2;
        const rad = Math.sqrt(r2) * spread;
        const lag = r3 * r3 * spread * 2.2 + Math.sin(time * (0.6 + r1) + r2 * 9) * 0.35;
        sp.visible = true;
        sp.position.copy(head)
          .addScaledVector(side, Math.cos(ang) * rad * grow)
          .addScaledVector(up2, Math.sin(ang) * rad * 0.7 * grow)
          .addScaledVector(dir, -lag * grow);
        sp.material.color.set(color);
        sp.scale.setScalar(1.7 + r1 * 1.1);
      }
      // Route lines only for our own fleets, or enemy ones once intel shows targets.
      if (mine || intel >= 2) {
        trailPos.set([head.x, head.y, head.z, b.x, b.y, b.z], trailCount * 6);
        tmpColor.set(color);
        trailCol.set([tmpColor.r * 0.6, tmpColor.g * 0.6, tmpColor.b * 0.6, 0, 0, 0], trailCount * 6);
        trailCount++;
      }

      // Labels stay small: our fleets show their size; enemy fleets need intel.
      tmp.copy(head).project(camera);
      if (tmp.z > 1 || (!mine && intel < 1)) { lbl.style.visibility = 'hidden'; return; }
      lbl.style.visibility = 'visible';
      lbl.style.color = color;
      const left = Math.max(0, f.duration - f.t);
      const eta = !mine && intel >= 2 ? `<small>${Math.floor(left / 60)}:${String(Math.floor(left % 60)).padStart(2, '0')}</small>` : '';
      const text = `${Math.ceil(f.units)}${eta}`;
      if (lbl.innerHTML !== text) lbl.innerHTML = text;
      lbl.style.transform = `translate(${(tmp.x * 0.5 + 0.5) * w}px, ${(-tmp.y * 0.5 + 0.5) * h - 22}px) translate(-50%, 0)`;
    });
    for (let i = used; i < fleetSprites.length; i++) fleetSprites[i].visible = false;
    for (let i = fleets.length; i < fleetLabels.length; i++) fleetLabels[i].style.visibility = 'hidden';
    trailGeo.setDrawRange(0, trailCount * 2);
    trailGeo.attributes.position.needsUpdate = true;
    trailGeo.attributes.color.needsUpdate = true;

    // Order preview: while aiming by drag, or once a target is picked.
    const aimAt = ui.drag ? ui.hover : ui.target;
    const aimFrom = ui.drag ? ui.drag.from : ui.selected;
    if (aimFrom !== null && (ui.drag || aimAt !== null)) {
      dragLine.visible = true;
      const a = game.systems[aimFrom].pos;
      const p = dragGeo.attributes.position;
      p.setXYZ(0, a.x, a.y, a.z);
      if (aimAt !== null && aimAt !== aimFrom) {
        const b = game.systems[aimAt].pos;
        p.setXYZ(1, b.x, b.y, b.z);
      } else {
        // Unproject the finger onto the plane through the source star facing the camera.
        const ndc = new THREE.Vector3((ui.drag.x / w) * 2 - 1, -(ui.drag.y / h) * 2 + 1, 0.5).unproject(camera);
        const dir = ndc.sub(camera.position).normalize();
        const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(camera.getWorldDirection(new THREE.Vector3()), new THREE.Vector3(a.x, a.y, a.z));
        const hit = new THREE.Ray(camera.position, dir).intersectPlane(plane, new THREE.Vector3());
        if (hit) p.setXYZ(1, hit.x, hit.y, hit.z);
      }
      p.needsUpdate = true;
      dragLine.computeLineDistances();
    } else {
      dragLine.visible = false;
    }

    renderer.render(scene, camera);
  }

  /** The point on the map's mid-plane under a screen position. */
  function groundAt(x, y) {
    const ndc = new THREE.Vector3((x / window.innerWidth) * 2 - 1, -(y / window.innerHeight) * 2 + 1, 0.5).unproject(camera);
    const ray = new THREE.Ray(camera.position, ndc.sub(camera.position).normalize());
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(camera.getWorldDirection(new THREE.Vector3()), orbit.target);
    return ray.intersectPlane(plane, new THREE.Vector3());
  }

  /** Zooms by factor (<1 is in), keeping the point under (x, y) under the fingers. */
  function zoomAt(x, y, factor) {
    const before = groundAt(x, y);
    const next = THREE.MathUtils.clamp(orbit.dist * factor, orbit.minDist, orbit.maxDist);
    const k = next / orbit.dist;
    orbit.dist = next;
    if (before) orbit.target.lerp(before, 1 - k);
  }

  /** Slides the view by a screen-space drag in pixels. */
  function pan(dx, dy) {
    const perPx = (2 * orbit.dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / window.innerHeight;
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
    const fwd = new THREE.Vector3().crossVectors(UP, right).normalize();
    orbit.target.addScaledVector(right, -dx * perPx).addScaledVector(fwd, dy * perPx);
  }

  /** Nearest system to a screen point, within a finger-sized radius. */
  function pick(x, y) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    let best = null;
    let bestD = Infinity;
    for (const v of systems) {
      tmp.copy(v.g.position).project(camera);
      if (tmp.z > 1) continue;
      const sx = (tmp.x * 0.5 + 0.5) * w;
      const sy = (-tmp.y * 0.5 + 0.5) * h;
      const d = Math.hypot(sx - x, sy - y);
      const px = (v.s.size * 3 * h) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.distanceTo(v.g.position));
      if (d < Math.max(34, px) && d < bestD) { bestD = d; best = v.s.id; }
    }
    return best;
  }

  return { build, render, resize, pick, orbit, fitDistance, zoomAt, pan };
}
