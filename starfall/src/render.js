import * as THREE from 'three';
import { NEUTRAL, progress, capOf } from './sim.js';

export const OWNER_COLORS = ['#4db4ff', '#ff5a6e', '#ffb347', '#b57bff'];
export const NEUTRAL_COLOR = '#7d8398';
export const ownerColor = (o) => (o === NEUTRAL ? NEUTRAL_COLOR : OWNER_COLORS[o]);

const MAX_FLEETS = 512;

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
  const orbit = { az: 0.6, pol: 1.05, dist: 300, minDist: 40, maxDist: 800, vaz: 0, vpol: 0 };

  let systems = [];
  let fleetSprites = [];
  const extent = { x: 40, z: 40 };

  // Fleet trails: one segment from each fleet to its destination.
  const trailPos = new Float32Array(MAX_FLEETS * 6);
  const trailCol = new Float32Array(MAX_FLEETS * 6);
  const trailGeo = new THREE.BufferGeometry();
  trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
  trailGeo.setAttribute('color', new THREE.BufferAttribute(trailCol, 3));
  const trails = new THREE.LineSegments(trailGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.35 }));
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

  function fleetSprite(i) {
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
    camera.position.setFromSphericalCoords(orbit.dist, orbit.pol, orbit.az);
    camera.lookAt(0, 0, 0);
    camera.updateMatrixWorld();

    const w = window.innerWidth;
    const h = window.innerHeight;

    for (const v of systems) {
      const { s } = v;
      const col = ownerColor(s.owner);
      if (v.owner !== s.owner) {
        if (v.owner !== null) v.pulse = 1;
        v.owner = s.owner;
        v.halo.material.color.set(col);
        for (const r of v.rings) r.material.color.set(col);
        v.label.style.color = col;
      }
      v.pulse = Math.max(0, v.pulse - dt * 1.5);
      const full = s.owner !== NEUTRAL && s.units >= capOf(s) - 0.01;
      v.halo.scale.setScalar(s.size * (7 + v.pulse * 10 + (full ? Math.sin(time * 4) * 0.4 : 0)));
      v.rings.forEach((r, i) => {
        r.visible = i < s.level;
        r.rotation.z += dt * (0.25 + i * 0.1);
      });
      const selected = ui.selected === s.id;
      const hovered = (ui.hover === s.id || ui.target === s.id) && !selected;
      v.sel.visible = selected || hovered;
      v.sel.material.opacity = selected ? 0.9 : 0.45;
      v.sel.material.color.set(selected ? '#ffffff' : col);
      v.sel.scale.setScalar(s.size * (7.5 + (selected ? Math.sin(time * 5) * 0.4 : 0)));

      // Screen-space label under the star.
      tmp.copy(v.g.position).project(camera);
      const units = Math.floor(s.units);
      if (units !== v.shown) {
        v.label.textContent = units;
        v.shown = units;
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
    let used = 0;
    const fleets = game.fleets.slice(0, MAX_FLEETS);
    fleets.forEach((f, i) => {
      const a = game.systems[f.from].pos;
      const b = game.systems[f.to].pos;
      fleetPos(game, f, head);
      dir.set(b.x - a.x, b.y - a.y, b.z - a.z).normalize();
      side.crossVectors(dir, UP).normalize();
      const color = ownerColor(f.owner);
      const ships = Math.min(15, Math.max(1, Math.ceil(f.units / 5)));
      for (let j = 0; j < ships; j++) {
        const sp = fleetSprite(used++);
        const row = Math.ceil(j / 2);
        const sign = j % 2 ? 1 : -1;
        sp.visible = true;
        sp.position.copy(head).addScaledVector(dir, -row * 2.4).addScaledVector(side, sign * row * 1.8);
        sp.material.color.set(color);
        sp.scale.setScalar(j === 0 ? 7 : 5);
      }
      trailPos.set([head.x, head.y, head.z, b.x, b.y, b.z], i * 6);
      tmpColor.set(color);
      trailCol.set([tmpColor.r, tmpColor.g, tmpColor.b, tmpColor.r * 0.15, tmpColor.g * 0.15, tmpColor.b * 0.15], i * 6);

      const lbl = fleetLabel(i);
      tmp.copy(head).project(camera);
      if (tmp.z > 1) { lbl.style.visibility = 'hidden'; return; }
      lbl.style.visibility = 'visible';
      lbl.style.color = color;
      const left = Math.max(0, f.duration - f.t);
      const text = `${f.units}<small>${Math.floor(left / 60)}:${String(Math.floor(left % 60)).padStart(2, '0')}</small>`;
      if (lbl.innerHTML !== text) lbl.innerHTML = text;
      lbl.style.transform = `translate(${(tmp.x * 0.5 + 0.5) * w}px, ${(-tmp.y * 0.5 + 0.5) * h - 22}px) translate(-50%, 0)`;
    });
    for (let i = used; i < fleetSprites.length; i++) fleetSprites[i].visible = false;
    for (let i = fleets.length; i < fleetLabels.length; i++) fleetLabels[i].style.visibility = 'hidden';
    trailGeo.setDrawRange(0, fleets.length * 2);
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

  return { build, render, resize, pick, orbit, fitDistance };
}
