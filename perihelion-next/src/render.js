// The view: a Three.js scene of the system (sun, worlds, ships, weapons fire)
// with a 2D "plot table" drawn over it: orbits, range rings, velocity vectors,
// plotted routes, contact markers and the few words the game shows.
// Reads game state every frame; owns the camera.
import * as THREE from 'three';
import { NEUTRAL, RULES, posAt, orbitOffset, parkRadius, crippled, yieldTime, batteryMax, worldSight, rankOf } from './sim.js';
import { createPost } from './gfx/post.js';
import { createSky } from './gfx/sky.js';
import { createSun } from './gfx/sun.js';
import * as shipLib from './gfx/ships.js';
import { stationMesh, STATION_CORES } from './gfx/stations.js';
import { asteroidMesh, createBelt } from './gfx/rocks.js';
import { createFx } from './gfx/fx.js';
import { createBaker, lookOf, surfaceMaterial, cloudMaterial, atmosphereMesh, ringMesh, starLights } from './gfx/planets.js';

export const INK = '#e9e4d6'; // the plot's white
export const AMBER = '#e0a13a';
export const DIM = '#7d7666';
export const HOSTILE = '#ff5a43';
export const NEUTRAL_COLOR = '#8b8776';
export const FACTION_COLORS = { concord: '#7fb6ff', boreal: '#ff8757', holds: '#d8d36a' };
const ALT_COLORS = ['#9be0c8', '#d59bff', '#ffd1a1'];
/** A colour per player: their power's, or an alternate if two play the same power. */
export function playerColors(game) {
  const used = new Set();
  return game.factions.map((f, i) => {
    let c = FACTION_COLORS[f] || FACTION_COLORS.concord;
    if (used.has(c)) c = ALT_COLORS[i % ALT_COLORS.length];
    used.add(c);
    return c;
  });
}

const SUN_RADIUS = 6;
const SHIP_SCALE = 0.45; // ships against worlds, as in the first game
const MAX_SHIPS = 160;
const UP = new THREE.Vector3(0, 1, 0);
const CLASS_SCALE = { corvette: 0.6, frigate: 1, escort: 0.95, battleship: 1.7, tender: 1.2, freighter: 1.3 };

const screenRes = { value: new THREE.Vector2(1, 1) };
/** An orbit as a hairline that is brightest just behind the world and fades round the turn. */
function orbitLine(b) {
  const N = b.parent !== null ? 160 : 400;
  const pos = [], next = [], ang = [], side = [], idx = [];
  const at = (a) => { const q = orbitOffset(b, a); return [q.x, q.y, q.z]; };
  for (let i = 0; i <= N; i++) {
    const a = (i / N) * Math.PI * 2;
    for (const sd of [-1, 1]) { pos.push(...at(a)); next.push(...at(a + 0.01)); ang.push(a); side.push(sd); }
    if (i < N) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('nextPos', new THREE.Float32BufferAttribute(next, 3));
  geo.setAttribute('ang', new THREE.Float32BufferAttribute(ang, 1));
  geo.setAttribute('side', new THREE.Float32BufferAttribute(side, 1));
  geo.setIndex(idx);
  const moon = b.parent !== null;
  const mesh = new THREE.Mesh(geo, new THREE.ShaderMaterial({
    uniforms: { uTh: { value: 0 }, uRes: screenRes, uWidth: { value: moon ? 1.4 : 2.2 }, uColor: { value: new THREE.Color(moon ? '#6b6452' : '#8f8468') }, uOpacity: { value: moon ? 0.55 : 0.75 } },
    vertexShader: `attribute vec3 nextPos; attribute float ang; attribute float side;
      uniform float uTh; uniform vec2 uRes; uniform float uWidth;
      varying float vF; varying float vSide;
      void main() {
        vec4 c = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vec4 n = projectionMatrix * modelViewMatrix * vec4(nextPos, 1.0);
        vec2 dir = normalize((n.xy / n.w - c.xy / c.w) * uRes + 1e-6);
        vF = fract((uTh - ang) / 6.2831853);
        float w = uWidth * pow(max(1.0 - vF, 0.0), 0.9);
        c.xy += vec2(-dir.y, dir.x) * side * w / uRes * c.w;
        vSide = side;
        gl_Position = c;
      }`,
    fragmentShader: `uniform vec3 uColor; uniform float uOpacity; varying float vF; varying float vSide;
      void main() {
        float a = uOpacity * pow(max(1.0 - vF, 0.0), 1.3) * smoothstep(1.0, 0.35, abs(vSide));
        gl_FragColor = vec4(uColor, a);
      }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  }));
  mesh.frustumCulled = false;
  return mesh;
}

export function createView(canvas, plot, opts = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  let quality = opts.quality || 'high';
  const maxPR = () => Math.min(window.devicePixelRatio || 1, quality === 'high' ? 2.5 : 1.5);
  let pixelRatio = maxPR();
  renderer.setPixelRatio(1);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.02, 20000);
  const post = createPost(renderer);
  post.setSamples(4);
  post.setLevel(quality);
  const ctx = plot.getContext('2d');

  const sky = createSky(renderer, quality);
  scene.add(sky.stars);
  scene.environmentIntensity = 0.9;
  scene.backgroundIntensity = 0.85;

  // Dust motes that travel with the camera: moving the view shows parallax, a sense of depth.
  const DUST = quality === 'high' ? 900 : 400;
  const dustGeo = new THREE.BufferGeometry();
  {
    const a = new Float32Array(DUST * 3);
    for (let i = 0; i < a.length; i++) a[i] = Math.random();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(a, 3));
  }
  const dustMat = new THREE.ShaderMaterial({
    uniforms: { uBox: { value: 50 }, uPR: { value: 1 } },
    vertexShader: `uniform float uBox, uPR; varying float vA;
      void main() {
        vec3 rel = (fract(position - cameraPosition / uBox) - 0.5) * uBox;
        vec4 mv = viewMatrix * vec4(cameraPosition + rel, 1.0);
        float d = -mv.z;
        vA = smoothstep(uBox * 0.5, uBox * 0.3, length(rel)) * smoothstep(uBox * 0.02, uBox * 0.08, d);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(uBox * 0.06 / max(d, 0.001), 1.0, 3.0) * uPR;
      }`,
    fragmentShader: `varying float vA;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        float a = (1.0 - r * r) * vA * 0.28;
        if (a <= 0.002) discard;
        gl_FragColor = vec4(vec3(0.8, 0.74, 0.62) * a, 1.0);
      }`,
    blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
  });
  const dust = new THREE.Points(dustGeo, dustMat);
  dust.frustumCulled = false;
  scene.add(dust);

  const sun = createSun(SUN_RADIUS, quality);
  scene.add(sun.group);
  scene.add(new THREE.PointLight('#fff1dd', 3, 0, 0));
  scene.add(new THREE.AmbientLight('#2a3040', 0.6));

  const world = new THREE.Group();
  scene.add(world);
  let views = [];
  let farClip = 6000;
  const orbit = { az: 0.4, pol: 0.95, dist: 300, minDist: 0.8, maxDist: 1400, target: new THREE.Vector3(), vaz: 0, vpol: 0, follow: null, ship: null, goalDist: null };
  let belt = null;
  const bake = createBaker(renderer, () => quality);
  const baked = [];
  const sphereGeos = new Map();
  const sphereGeo = (r, fine) => {
    const k = `${r}:${fine}`;
    if (!sphereGeos.has(k)) sphereGeos.set(k, new THREE.SphereGeometry(r, fine ? 128 : 96, fine ? 80 : 56));
    return sphereGeos.get(k);
  };
  const shipR = shipLib.createShipRenderer(scene, MAX_SHIPS);
  const fx = createFx(scene);
  const hullType = (faction, cls, id) => (shipLib.hullIndex ? shipLib.hullIndex(faction, cls) : id % shipR.hulls);

  function build(game) {
    sky.bake((game.seed || 1) + 1);
    scene.background = sky.background;
    scene.environment = sky.env;
    for (const rt of baked) rt.dispose();
    baked.length = 0;
    world.clear();
    heads.clear(); ghosts.clear(); trails.clear();
    views = game.bodies.map((b) => {
      const g = new THREE.Group();
      let body, ring = null, atmo = null;
      if (b.kind === 'station') body = stationMesh(b.size * 0.8, b.home && game.factions[b.owner] === 'holds' ? 3 : b.id % STATION_CORES, shipR.uT);
      else if (b.kind === 'asteroid') body = asteroidMesh(b);
      else {
        const look = lookOf(b);
        const maps = bake(b, look);
        baked.push(...maps.rts);
        const tilt = 0.2 + b.hue * 0.3;
        if (b.giant && b.hue > 0.4) {
          ring = ringMesh(b);
          ring.rotation.x = Math.PI / 2;
          const holder = new THREE.Group();
          holder.rotation.z = tilt;
          holder.add(ring);
          g.add(holder);
        }
        body = new THREE.Mesh(sphereGeo(b.size, look.kind === 0 || look.kind === 3 ? 1 : 0), surfaceMaterial(b, look, maps, ring && ring.userData.ring));
        body.rotation.order = 'ZYX';
        body.rotation.z = tilt;
        if (look.atmo) { atmo = atmosphereMesh(b, look, quality); g.add(atmo); }
        if (look.clouds) {
          const clouds = new THREE.Mesh(sphereGeo(b.size * 1.008, 1), cloudMaterial(maps));
          clouds.name = 'clouds';
          body.add(clouds);
        }
      }
      g.add(body);
      world.add(g);
      const line = orbitLine(b);
      const lineHolder = new THREE.Group();
      lineHolder.add(line);
      world.add(lineHolder);
      return { b, g, body, line, lineHolder, ring, atmo, owner: null, occ: [], sx: 0, sy: 0, sr: 0, on: false, show: 1 };
    });
    if (belt) { belt.group.removeFromParent(); belt.dispose(); belt = null; }
    const rocks = game.bodies.filter((x) => x.kind === 'asteroid');
    if (rocks.length) {
      const ref = rocks[0];
      belt = createBelt(game.belt.r - 2, game.belt.r + game.belt.w + 2, (r) => ref.period * Math.pow(r / ref.r, 1.5), quality, shipR.uT);
      world.add(belt.group);
    }
    for (const v of views) {
      const b = v.b;
      if (b.kind !== 'planet' && b.kind !== 'moon') continue;
      const fam = b.kind === 'planet' ? game.bodies.filter((x) => x.parent === b.id && x.kind === 'moon')
        : game.bodies.filter((x) => x.id === b.parent || (x.parent === b.parent && x.kind === 'moon' && x.id !== b.id));
      v.occ = fam.slice(0, 4).map((x) => x.id);
    }
    const outer = Math.max(...game.bodies.filter((b) => b.kind === 'planet').map((b) => b.r));
    sysR = outer;
    orbit.maxDist = outer * 4;
    farClip = outer * 30;
  }

  const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), tmp3 = new THREE.Vector3();
  const bodyPos = [];
  const ppuAt = (p) => window.innerHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * Math.max(1e-3, camera.position.distanceTo(p)));

  let sizedW = 0, sizedH = 0;
  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    sizedW = w; sizedH = h;
    renderer.setSize(Math.round(w * pixelRatio), Math.round(h * pixelRatio), false);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    post.setSize(w, h, pixelRatio);
    screenRes.value.set(w, h);
    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    plot.width = Math.round(w * dpr); plot.height = Math.round(h * dpr);
    plot.style.width = w + 'px'; plot.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  const sunNdc = new THREE.Vector3();
  function updateFlare(dt) {
    sunNdc.set(0, 0, 0).project(camera);
    let vis = sunNdc.z < 1 && Math.abs(sunNdc.x) < 1.1 && Math.abs(sunNdc.y) < 1.1 ? 1 : 0;
    if (vis) {
      const o = camera.position;
      tmp3.set(0, 0, 0).sub(o);
      const len = tmp3.length();
      tmp3.divideScalar(len);
      for (const v of views) {
        tmp2.copy(v.g.position).sub(o);
        const along = tmp2.dot(tmp3);
        if (along < 0 || along > len) continue;
        if (Math.sqrt(Math.max(0, tmp2.lengthSq() - along * along)) < v.b.size) { vis = 0; break; }
      }
      vis *= THREE.MathUtils.clamp((1.1 - Math.max(Math.abs(sunNdc.x), Math.abs(sunNdc.y))) * 4, 0, 1);
    }
    const f = post.flare;
    f.vis += (vis * 0.9 - f.vis) * Math.min(1, dt * 8 + 0.05);
    f.pos.set(sunNdc.x * 0.5 + 0.5, sunNdc.y * 0.5 + 0.5);
  }
  /** How much sunlight reaches p (0 in a world's shadow). */
  function sunlit(p) {
    let vis = 1;
    let lx = -p.x, ly = -p.y, lz = -p.z;
    const ld = Math.hypot(lx, ly, lz) || 1;
    lx /= ld; ly /= ld; lz /= ld;
    for (const v of views) {
      if (v.b.kind !== 'planet' && v.b.kind !== 'moon') continue;
      const q = bodyPos[v.b.id];
      const ox = q.x - p.x, oy = q.y - p.y, oz = q.z - p.z;
      const t = ox * lx + oy * ly + oz * lz;
      if (t <= 0 || t > ld) continue;
      const m = Math.hypot(ox - lx * t, oy - ly * t, oz - lz * t);
      const r = v.b.size, pen = r * 0.08 + t * 0.012;
      if (m < r + pen) vis *= THREE.MathUtils.smoothstep(m, r - pen, r + pen);
    }
    return vis;
  }

  const hash = (a, b) => {
    let x = Math.imul(a ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(b + 0x632be5ab, 0xc2b2ae35);
    x ^= x >>> 15; x = Math.imul(x, 0x2c1b3c6d);
    return ((x ^ (x >>> 12)) >>> 0) / 4294967296;
  };
  // Attitude jets (as in the first game). A ship turns the way a real one does: paired jets at
  // nose and tail fire on opposite sides to start a turn and the opposite pair to stop it.
  const spin = new Map();
  const jA = new THREE.Vector3(), jN = new THREE.Vector3(), jP = new THREE.Vector3(), jD = new THREE.Vector3(), tmp5 = new THREE.Vector3();
  function attitudeJets(id, p, n, s, gt, t, px) {
    let st = spin.get(id);
    if (!st) { spin.set(id, { n: n.clone(), w: new THREE.Vector3(), a: new THREE.Vector3(), t: gt }); return; }
    const dt = gt - st.t;
    if (dt <= 1e-4) { if (dt < -1) st.t = gt; return; }
    if (dt > 2) { st.n.copy(n); st.w.set(0, 0, 0); st.a.set(0, 0, 0); st.t = gt; return; }
    jA.crossVectors(st.n, n).divideScalar(dt);
    const k = 1 - Math.exp(-dt * 6);
    jN.copy(jA).sub(st.w).divideScalar(dt);
    st.w.lerp(jA, k); st.a.lerp(jN, k); st.n.copy(n); st.t = gt;
    if (px < 8) return;
    const alpha = st.a.length();
    const rate = 5 + hash(id, 17) * 5;
    const u = t * rate + hash(id, 23) * 9;
    const slot = Math.floor(u);
    const r1 = hash(id * 7 + slot, 31), r2 = hash(slot, id * 3 + 1);
    const frac = u - slot;
    let pow;
    if (alpha >= 0.04) {
      pow = Math.min(1, (alpha - 0.04) * 3);
      if (r1 > 0.45 + 0.35 * pow || frac > 0.35 + r2 * 0.6) return;
    } else {
      if (r1 > 0.05 || frac > 0.3) return;
      pow = 0.15 + r2 * 0.2;
      jN.set(r2 - 0.5, hash(slot, id) - 0.5, hash(id, slot * 5) - 0.5);
    }
    const L = s * 0.32;
    jD.crossVectors(alpha >= 0.04 ? st.a : jN, n);
    if (jD.lengthSq() < 1e-10) return;
    jD.normalize();
    const len = s * (0.06 + 0.1 * pow) * (0.75 + r2 * 0.5), wid = s * 0.05;
    const p0 = (0.35 + 0.5 * pow) * (0.8 + r1 * 0.4);
    const which = r2 < 0.18 ? 1 : r2 > 0.86 ? 2 : 3;
    if (which & 1) { jP.copy(p).addScaledVector(n, L).addScaledVector(jD, -s * 0.06); shipR.jet(jP, tmp5.copy(jD).negate(), len, wid, p0, id); }
    if (which & 2) { jP.copy(p).addScaledVector(n, -L * 0.85).addScaledVector(jD, s * 0.06); shipR.jet(jP, jD, len * (0.85 + r1 * 0.3), wid, p0, id + 0.5); }
  }
  // What the view remembers between frames.
  const heads = new Map(); // ship id -> facing (unit vector), turned smoothly
  const ghosts = new Map(); // enemy ship id -> last known { x, y, z, vx, vy, vz, t, owner, cls, known }
  const trails = new Map(); // torpedo id -> recent screen points
  const shipScreen = new Map(); // ship id -> { x, y, r } this frame, for picking
  let W = 1, H = 1, colors = [], heat = 0;
  const sp = { x: 0, y: 0, ok: false };
  /** Project a world point to CSS pixels. */
  function proj(x, y, z, out = sp) {
    tmp.set(x, y, z).project(camera);
    out.ok = tmp.z < 1 && tmp.z > -1;
    out.x = (tmp.x * 0.5 + 0.5) * W; out.y = (-tmp.y * 0.5 + 0.5) * H;
    return out;
  }
  const colorOf = (o) => (o === NEUTRAL ? NEUTRAL_COLOR : colors[o] || INK);

  /** A circle lying in the plane of the orbits, as the plot draws range rings. */
  function ringOn(cx, cy, cz, r, color, alpha, dash, width = 1) {
    ctx.beginPath();
    let started = false;
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      const q = proj(cx + Math.cos(a) * r, cy, cz + Math.sin(a) * r);
      if (!q.ok) { started = false; continue; }
      if (started) ctx.lineTo(q.x, q.y); else { ctx.moveTo(q.x, q.y); started = true; }
    }
    ctx.strokeStyle = color; ctx.globalAlpha = alpha; ctx.lineWidth = width; ctx.setLineDash(dash || []);
    ctx.stroke();
    ctx.setLineDash([]); ctx.globalAlpha = 1;
  }
  function pathOn(pts, color, alpha, dash, width = 1) {
    ctx.beginPath();
    let started = false;
    for (const p of pts) {
      const q = proj(p.x, p.y, p.z);
      if (!q.ok) { started = false; continue; }
      if (started) ctx.lineTo(q.x, q.y); else { ctx.moveTo(q.x, q.y); started = true; }
    }
    ctx.strokeStyle = color; ctx.globalAlpha = alpha; ctx.lineWidth = width; ctx.setLineDash(dash || []);
    ctx.stroke();
    ctx.setLineDash([]); ctx.globalAlpha = 1;
  }
  /** A ship's mark on the plot: a shape per class, pointing where the ship points. */
  function glyph(cls, x, y, ang, size, color, hollow, alpha = 1) {
    ctx.save();
    ctx.translate(x, y); ctx.rotate(ang);
    ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 1.3; ctx.lineJoin = 'miter';
    const s = size;
    ctx.beginPath();
    if (cls === 'corvette') { ctx.moveTo(s, 0); ctx.lineTo(-s * 0.7, s * 0.45); ctx.lineTo(-s * 0.7, -s * 0.45); }
    else if (cls === 'frigate') { ctx.moveTo(s * 1.1, 0); ctx.lineTo(-s * 0.8, s * 0.7); ctx.lineTo(-s * 0.35, 0); ctx.lineTo(-s * 0.8, -s * 0.7); }
    else if (cls === 'escort') { ctx.moveTo(s, 0); ctx.lineTo(0, s * 0.8); ctx.lineTo(-s, 0); ctx.lineTo(0, -s * 0.8); }
    else if (cls === 'battleship') { ctx.moveTo(s * 1.5, 0); ctx.lineTo(s * 0.5, s * 0.8); ctx.lineTo(-s * 1.2, s * 0.8); ctx.lineTo(-s * 1.2, -s * 0.8); ctx.lineTo(s * 0.5, -s * 0.8); }
    else if (cls === 'tender') { ctx.arc(0, 0, s * 0.85, 0, Math.PI * 2); }
    else if (cls === 'freighter') { ctx.rect(-s * 0.7, -s * 0.45, s * 1.4, s * 0.9); }
    else { ctx.moveTo(s, 0); ctx.lineTo(0, s); ctx.lineTo(-s, 0); ctx.lineTo(0, -s); } // an unidentified contact
    ctx.closePath();
    if (hollow) ctx.stroke(); else { ctx.fill(); }
    if (cls === 'tender') { ctx.strokeStyle = '#05060a'; ctx.beginPath(); ctx.moveTo(-s * 0.5, 0); ctx.lineTo(s * 0.5, 0); ctx.moveTo(0, -s * 0.5); ctx.lineTo(0, s * 0.5); ctx.stroke(); }
    ctx.restore();
  }
  function label(text, x, y, color, alpha = 1, size = 10, align = 'center') {
    ctx.font = `600 ${size}px Rajdhani, system-ui, sans-serif`;
    try { ctx.letterSpacing = '1.5px'; } catch { /* older browsers */ }
    ctx.textAlign = align; ctx.textBaseline = 'middle';
    ctx.globalAlpha = alpha; ctx.fillStyle = color;
    ctx.fillText(text.toUpperCase(), x, y);
    ctx.globalAlpha = 1;
  }
  const hexA = (hex, a) => { const c = new THREE.Color(hex); return `rgba(${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)},${a})`; };

  let tNow = 0, sysR = 500, far = false;
  const report = { battle: 0, burn: 0, zoom: 0 };

  function render(game, ui, dt, t) {
    const realDt = Math.min(0.1, Math.max(0, t - tNow));
    tNow = t;
    W = window.innerWidth; H = window.innerHeight;
    if (W !== sizedW || H !== sizedH) resize(); // phone browsers change the page height without always saying so
    colors = ui.colors || playerColors(game);
    const me = ui.me;
    const now = game.time + (game.acc || 0);
    const lead = game.acc || 0;
    starLights.pos.value[0].set(0, 0, 0);
    starLights.col.value[1].set(0, 0, 0);
    sun.group.scale.setScalar(game.stars[0].size);
    sun.update(t);
    if (belt) belt.update(now);
    sky.update(t, pixelRatio);
    for (const v of views) bodyPos[v.b.id] = posAt(game, v.b, now);

    // ---- Camera ----
    const sees = (s) => ui.dev || s.owner === me || s.seen[me] > 0;
    const livePos = (s, out) => out.set(s.x + s.vx * lead, s.y + s.vy * lead, s.z + s.vz * lead);
    if (orbit.ship != null) {
      const s = game.ships.find((x) => x.id === orbit.ship);
      if (!s || !sees(s)) orbit.ship = null;
      else orbit.target.lerp(livePos(s, tmp), Math.min(1, realDt * 8));
    }
    if (orbit.follow !== null) { const p = bodyPos[orbit.follow]; orbit.target.lerp(tmp.set(p.x, p.y, p.z), Math.min(1, realDt * 8)); }
    else if (orbit.ship == null) orbit.target.y *= 1 - Math.min(1, realDt * 2);
    const extent = orbit.maxDist * 0.35;
    const flat = Math.hypot(orbit.target.x, orbit.target.z);
    if (flat > extent) { orbit.target.x *= extent / flat; orbit.target.z *= extent / flat; }
    if (!ui.dragging) { orbit.az += orbit.vaz; orbit.pol += orbit.vpol; orbit.vaz *= 0.92; orbit.vpol *= 0.92; }
    if (orbit.goalDist) {
      orbit.dist += (orbit.goalDist - orbit.dist) * Math.min(1, realDt * 4);
      if (Math.abs(orbit.goalDist - orbit.dist) < 0.01 * orbit.dist) orbit.goalDist = null;
    }
    orbit.pol = THREE.MathUtils.clamp(orbit.pol, 0.12, Math.PI - 0.12);
    const minGoal = orbit.follow !== null ? game.bodies[orbit.follow].size * 1.3 + 0.3 : 0.8;
    orbit.minDist += (minGoal - orbit.minDist) * Math.min(1, realDt * 3);
    orbit.dist = THREE.MathUtils.clamp(orbit.dist, orbit.minDist, orbit.maxDist);
    camera.position.setFromSphericalCoords(orbit.dist, orbit.pol, orbit.az).add(orbit.target);
    camera.lookAt(orbit.target);
    const near = THREE.MathUtils.clamp(orbit.dist * 0.02, 0.01, 12);
    if (Math.abs(near - camera.near) > camera.near * 0.05) { camera.near = near; camera.far = farClip; camera.updateProjectionMatrix(); }
    camera.updateMatrixWorld();

    // ---- Worlds ----
    for (const v of views) {
      const b = v.b, p = bodyPos[b.id];
      v.g.position.set(p.x, p.y, p.z);
      if (b.parent !== null) { const q = bodyPos[b.parent]; v.lineHolder.position.set(q.x, q.y, q.z); }
      v.line.material.uniforms.uTh.value = b.phase + (2 * Math.PI * now) / b.period;
      if (b.kind === 'station') {
        v.body.rotation.z += realDt * (v.body.userData.spin ?? 0.5);
        const rotor = v.body.userData.rotor;
        if (rotor) rotor.rotation.z += realDt * rotor.userData.spin;
        v.body.userData.set(colorOf(b.owner), sunlit(p), b.owner !== NEUTRAL);
      } else if (b.kind === 'asteroid') { v.body.rotation.x += realDt * 0.3; v.body.rotation.y += realDt * 0.2; }
      else {
        v.body.rotation.y += realDt * 0.05;
        const cl = v.body.getObjectByName('clouds');
        if (cl) cl.rotation.y += realDt * 0.012;
        const u = v.body.material.uniforms;
        if (u) {
          u.uT.value = t;
          if (cl) u.uCloudShift.value = -cl.rotation.y / (Math.PI * 2);
          u.uCenter.value.set(p.x, p.y, p.z);
          v.occ.forEach((id, k) => { const q = bodyPos[id]; u.uOcc.value[k].set(q.x, q.y, q.z, game.bodies[id].size); });
          if (cl) cl.material.uniforms.uOcc.value = u.uOcc.value;
          if (v.atmo) { v.atmo.material.uniforms.uCenter.value.set(p.x, p.y, p.z); v.atmo.material.uniforms.uOcc.value = u.uOcc.value; }
          if (v.ring) {
            v.ring.updateMatrixWorld(true);
            u.uRingN.value.set(0, 0, 1).transformDirection(v.ring.matrixWorld);
            u.uRingIn.value = v.ring.userData.ring.inner;
            u.uRingOut.value = v.ring.userData.ring.outer;
            v.ring.material.uniforms.uCenter.value.set(p.x, p.y, p.z);
          }
          if (u.uCity && v.owner !== b.owner) u.uCity.value = b.owner === NEUTRAL ? 0 : 1;
        }
      }
      v.owner = b.owner;
      // A planet's family (moons, station) appears as you come in on it, or when one of them is picked.
      if (b.parent !== null) {
        const pp = bodyPos[b.parent];
        const span = b.r * ppuAt(tmp2.set(pp.x, pp.y, pp.z));
        v.show = ui.selBody === b.id || ui.target === b.id || orbit.follow === b.id ? 1 : THREE.MathUtils.smoothstep(span, 16, 34);
        v.lineHolder.visible = v.show > 0.05;
        v.line.material.uniforms.uOpacity.value = 0.55 * v.show;
      } else v.show = 1;
      const q = proj(p.x, p.y, p.z);
      v.on = q.ok; v.sx = q.x; v.sy = q.y; v.sr = b.size * ppuAt(tmp2.set(p.x, p.y, p.z));
    }

    // ---- Effects from the sim (shots, hits, explosions) ----
    const inSight = (x, y, z) => {
      if (ui.dev) return true;
      for (const s of game.ships) if (s.owner === me && Math.hypot(s.x - x, s.y - y, s.z - z) < 140) return true;
      for (const b of game.bodies) if (b.owner === me) { const p = bodyPos[b.id]; if (Math.hypot(p.x - x, p.y - y, p.z - z) < 160) return true; }
      return false;
    };
    const sound = (type, x, y, z, gain = 1) => {
      if (!opts.onSound) return;
      const q = proj(x, y, z);
      const d = camera.position.distanceTo(tmp2.set(x, y, z));
      opts.onSound(type, THREE.MathUtils.clamp((q.x / W) * 2 - 1, -1, 1), THREE.MathUtils.clamp(gain * 40 / (d + 30), 0.08, 1));
    };
    heat = Math.max(0, heat - realDt * 0.35);
    for (const e of ui.fx || []) {
      if (!inSight(e.x, e.y, e.z)) continue;
      const c = colorOf(e.owner);
      const a = tmp.set(e.x, e.y, e.z).clone();
      if (e.type === 'rail') {
        const b = new THREE.Vector3(e.tx, e.ty, e.tz);
        if (!e.hit) b.add(tmp2.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(1.2)).lerp(a, -0.6);
        fx.beam(a, b, '#eaf2ff', 0.35);
        fx.bolt(a, b, '#ffffff', 0.12, 1.2, 0.05);
        if (e.hit) fx.impact(b, '#ffd9a0', true);
        sound('rail', e.x, e.y, e.z); if (e.hit) sound('railHit', e.tx, e.ty, e.tz, 0.8);
        heat = Math.min(1, heat + 0.12);
      } else if (e.type === 'pdc') {
        const b = new THREE.Vector3(e.tx, e.ty, e.tz);
        for (let k = 0; k < 5; k++) fx.bolt(a, tmp2.copy(b).add(tmp3.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(0.5)), '#ffc46b', 0.22, 0.25, 0.016, k * 0.04);
        sound('pdc', e.x, e.y, e.z, 0.7);
        heat = Math.min(1, heat + 0.04);
      } else if (e.type === 'pdcKill') {
        const f = new THREE.Vector3(e.fx, e.fy, e.fz);
        for (let k = 0; k < 6; k++) fx.bolt(f, tmp2.copy(a).add(tmp3.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(0.4)), '#ffc46b', 0.2, 0.25, 0.016, k * 0.03);
        fx.intercept(a); fx.explosion(a, 0.25);
        sound('pdc', e.fx, e.fy, e.fz, 0.7); sound('pdcKill', e.x, e.y, e.z, 0.7);
        heat = Math.min(1, heat + 0.06);
      } else if (e.type === 'torpHit') { fx.explosion(a, 1.3); fx.ring(a, '#ffd6a8', 2.2, 0.9); sound('torpHit', e.x, e.y, e.z); heat = Math.min(1, heat + 0.3); }
      else if (e.type === 'boom') {
        fx.explosion(a, 1.2 + e.size); fx.ring(a, c, 3 + e.size * 2, 1.6);
        for (let k = 0; k < 3; k++) fx.explosion(tmp2.copy(a).add(tmp3.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(e.size)), 0.5 + Math.random() * 0.5);
        sound('boom', e.x, e.y, e.z); heat = 1;
      } else if (e.type === 'launch') sound('torpLaunch', e.x, e.y, e.z);
    }
    fx.update(t, (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / H);

    // ---- The plot ----
    ctx.clearRect(0, 0, W, H);
    const sel = ui.sel || new Set();
    const zoomedOut = orbit.dist > 260;
    // Seen from far out the plot keeps to the essentials: who holds what, and where the fleets are.
    far = orbit.dist > sysR * 0.45;

    // Routes on offer for the chosen destination.
    if (ui.routes) {
      for (const r of ui.routes) {
        const on = r.key === ui.routeKey;
        pathOn(r.path, r.ok ? (on ? INK : AMBER) : HOSTILE, on ? 0.95 : 0.35, on ? [] : [3, 5], on ? 1.6 : 1);
      }
    }
    // Courses of selected ships.
    if (ui.paths) for (const [id, pts] of ui.paths) if (sel.has(id)) pathOn(pts, colorOf(me), 0.55, [6, 4], 1.1);

    // Worlds: a ring in the holder's colour; arcs for the battery, a yield in progress, the yard.
    for (const v of views) {
      if (!v.on) continue;
      const b = v.b;
      if (v.show < 0.05) continue;
      if (far && b.kind === 'asteroid' && ui.selBody !== b.id && ui.target !== b.id) {
        if (b.owner !== NEUTRAL) { ctx.fillStyle = colorOf(b.owner); ctx.fillRect(v.sx - 1.5, v.sy - 1.5, 3, 3); }
        continue;
      }
      const R = Math.max(v.sr * 1.25 + 4, b.kind === 'planet' ? 9 : 6);
      // From afar a planet carries a dot for each world of its family, in the holder's colour.
      if (b.kind === 'planet') {
        const fam = views.filter((x) => x.b.parent === b.id);
        if (fam.length && fam[0].show < 0.5) {
          fam.forEach((x, i) => { ctx.fillStyle = colorOf(x.b.owner); ctx.globalAlpha = 0.9 * (1 - fam[0].show * 2); ctx.fillRect(v.sx - (fam.length * 6 - 2) / 2 + i * 6, v.sy + R + 19, 4, 4); });
          ctx.globalAlpha = 1;
        }
      }
      const c = colorOf(b.owner);
      const picked = ui.selBody === b.id, aimed = ui.target === b.id;
      const big = v.sr > 60;
      ctx.lineWidth = picked || aimed ? 1.8 : 1.1;
      ctx.strokeStyle = picked ? INK : c;
      ctx.globalAlpha = (b.owner === NEUTRAL ? 0.45 : 0.9) * (big ? 0.35 : 1);
      ctx.beginPath(); ctx.arc(v.sx, v.sy, R, 0, Math.PI * 2); ctx.stroke();
      if (b.home) { ctx.beginPath(); ctx.arc(v.sx, v.sy, R + 3, 0, Math.PI * 2); ctx.stroke(); }
      if (aimed) { ctx.setLineDash([2, 4]); ctx.strokeStyle = AMBER; ctx.beginPath(); ctx.arc(v.sx, v.sy, R + 7, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]); }
      ctx.globalAlpha = 1;
      const bm = batteryMax(b);
      if (bm > 0 && !far) {
        // The battery: ticks round the top, lit while it can still fire.
        const n = Math.round(bm / RULES.batteryHp) * 3, lit = Math.ceil((b.bhp / bm) * n);
        for (let i = 0; i < n; i++) {
          const a = -Math.PI / 2 + (i - (n - 1) / 2) * 0.22;
          ctx.strokeStyle = i < lit ? c : DIM; ctx.globalAlpha = i < lit ? 0.95 : 0.5; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(v.sx, v.sy, R + (b.home ? 7 : 4), a - 0.07, a + 0.07); ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
      if (b.yt > 0) {
        ctx.strokeStyle = colorOf(b.yo); ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(v.sx, v.sy, R + (b.home ? 11 : 8), -Math.PI / 2, -Math.PI / 2 + (b.yt / yieldTime(b)) * Math.PI * 2); ctx.stroke();
      }
      if (b.owner === me && b.queue.length && !far) {
        const q = b.queue[0];
        ctx.strokeStyle = INK; ctx.globalAlpha = 0.8; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(v.sx, v.sy, Math.max(3, R - 3), Math.PI / 2, Math.PI / 2 + (1 - q.left / q.total) * Math.PI * 2); ctx.stroke();
        ctx.globalAlpha = 1;
      }
      if (b.blockaded && b.owner === me) { ctx.strokeStyle = HOSTILE; ctx.setLineDash([4, 3]); ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(v.sx, v.sy, R + 5, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]); }
      // A special world carries a small gold diamond; a world with one of your agents on it, a small eye.
      if (b.trait && !far) { ctx.fillStyle = AMBER; ctx.globalAlpha = 0.9; ctx.beginPath(); ctx.moveTo(v.sx + R + 6, v.sy - 3); ctx.lineTo(v.sx + R + 9, v.sy); ctx.lineTo(v.sx + R + 6, v.sy + 3); ctx.lineTo(v.sx + R + 3, v.sy); ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1; }
      if (game.agents && game.agents.some((a) => a.owner === me && a.body === b.id)) { ctx.strokeStyle = INK; ctx.lineWidth = 1; ctx.beginPath(); ctx.ellipse(v.sx - R - 7, v.sy, 4, 2.5, 0, 0, Math.PI * 2); ctx.stroke(); ctx.fillStyle = INK; ctx.fillRect(v.sx - R - 8, v.sy - 1, 2, 2); }
      // Names: planets always; moons and the rest once there is room.
      const parent = b.parent !== null ? views[b.parent] : null;
      const crowded = parent && Math.hypot(parent.sx - v.sx, parent.sy - v.sy) < 46;
      if (!crowded && !(b.kind === 'asteroid' && orbit.dist > 900) && !big) label(b.name, v.sx, v.sy + R + (b.yt > 0 ? 18 : 11), picked ? INK : b.owner === NEUTRAL ? DIM : c, picked ? 1 : 0.8, b.kind === 'planet' ? 10.5 : 9);
    }

    // ---- Ships ----
    shipR.begin(t, pixelRatio);
    shipScreen.clear();
    let burnSum = 0, drawn = 0;
    const live = new Set();
    // Ships sitting in a small orbit are listed in a row over their world instead of piled on it.
    const rows = new Map();
    for (const s of game.ships) {
      if (!sees(s)) continue;
      live.add(s.id);
      const known = ui.dev || s.owner === me || s.seen[me] === 2;
      if (s.owner !== me) ghosts.set(s.id, { x: s.x, y: s.y, z: s.z, vx: s.vx, vy: s.vy, vz: s.vz, t: now, owner: s.owner, cls: known && !s.unknown ? s.cls : null });
      livePos(s, tmp);
      const p = tmp.clone();
      // Facing: along the thrust while burning, else as it was; turned smoothly.
      let h = heads.get(s.id);
      if (!h) { h = new THREE.Vector3(s.vx, s.vy, s.vz); if (h.lengthSq() < 1e-6) h.set(1, 0, 0); h.normalize(); heads.set(s.id, h); }
      const thrust = Math.hypot(s.tx, s.ty, s.tz);
      if (s.burn && thrust > 1e-4) {
        tmp2.set(s.tx, s.ty, s.tz).divideScalar(thrust);
        h.lerp(tmp2, Math.min(1, realDt * 1.6 * Math.max(1, (ui.warp || 1)))).normalize();
      } else if (s.at !== null) {
        const bp = bodyPos[s.at];
        tmp2.set(-(p.z - bp.z), 0, p.x - bp.x).normalize();
        h.lerp(tmp2, Math.min(1, realDt * 2)).normalize();
      }
      const ppu = ppuAt(p);
      const scale = SHIP_SCALE * (CLASS_SCALE[s.cls] || 1);
      const hullPx = scale * ppu;
      const c = known ? colorOf(s.owner) : AMBER;
      if (s.owner === me && s.burn) burnSum += thrust / s.st.accel;
      if (drawn < MAX_SHIPS && known) {
        drawn++;
        const fade = 1 - THREE.MathUtils.smoothstep(hullPx, 4, 16);
        const glint = fade <= 0 ? null : [s.burn ? 7 : 4.5, (s.burn ? 0.9 : 0.5) * fade, !!s.burn];
        const hull = 0.85 + ((s.id * 37) % 20) / 100 - (crippled(s) ? 0.3 : 0);
        const sc = shipLib.hullIndex ? SHIP_SCALE : scale; // the new hulls carry their class size in the model
        shipR.add(hullType(game.factions[s.owner], s.cls, s.id), p, h, [sc, sc, sc], c, hull, s.id, !!s.burn, (0.45 + 0.55 * Math.min(1, thrust / (s.st.accel || 0.1))) * (0.8 + Math.sin(t * 40 + s.id) * 0.05), glint, hullPx, sunlit(p));
        attitudeJets(s.id, p, h, sc * (CLASS_SCALE[s.cls] || 1), now, t, hullPx);
      } else if (s.burn) shipR.add(0, p, h, [0.01, 0.01, 0.01], c, 1, s.id, true, 1.4, [7, 0.9, true], 0, 1);
      const q = proj(p.x, p.y, p.z);
      if (!q.ok) continue;
      const sx = q.x, sy = q.y;
      let b = s.at !== null ? views[s.at] : null;
      if (b && b.show < 0.5) b = views[b.b.parent]; // her moon isn't drawn from this far out: list her at the planet
      if (b && b.on && (b.b.id !== s.at || parkRadius(b.b) * ppu < 22)) {
        const key = b.b.id;
        if (!rows.has(key)) rows.set(key, []);
        rows.get(key).push({ s, known, c });
        continue;
      }
      const q2 = proj(p.x + h.x, p.y + h.y, p.z + h.z);
      drawShipMark(s, sx, sy, Math.atan2(q2.y - sy, q2.x - sx), hullPx, known, c, ppu);
    }
    for (const [bid, list] of rows) {
      const v = views[bid];
      const R = Math.max(v.sr * 1.25 + 4, v.b.kind === 'planet' ? 9 : 6) + (batteryMax(v.b) ? 9 : 3) + (v.b.home ? 4 : 0);
      list.sort((a, b) => a.s.owner - b.s.owner || a.s.id - b.s.id);
      const step = far ? 10 : 15, x0 = v.sx - ((list.length - 1) * step) / 2;
      const up = v.b.kind === 'asteroid' && !batteryMax(v.b) ? Math.max(v.sr, 2) + 8 : R + 9; // a rock has no ring round it: sit right on it
      list.forEach((it, i) => drawShipMark(it.s, x0 + i * step, v.sy - up, -Math.PI / 2, 0, it.known, it.c, 0, true));
    }
    function drawShipMark(s, sx, sy, ang, hullPx, known, c, ppu, docked = false) {
      const mine = s.owner === me, picked = sel.has(s.id), aimed = ui.targetShip === s.id;
      const cls = known && !s.unknown ? s.cls : null;
      const gs = cls === 'battleship' ? 6.5 : cls === 'corvette' ? 4.5 : 5.5;
      shipScreen.set(s.id, { x: sx, y: sy, r: Math.max(16, hullPx * 0.6) });
      // The mark fades as the real hull grows on screen.
      const ga = docked ? 1 : 1 - THREE.MathUtils.smoothstep(hullPx, 18, 40);
      if (far && cls === 'freighter' && !picked && !aimed) return; // freighters are left off the far view
      if (ga > 0.02) glyph(cls, sx, sy, ang, far ? gs * 0.75 : gs, c, !mine && !known, ga * (crippled(s) ? 0.6 : 1));
      // Rank: a short gold bar per step, over the mark.
      const rk = known && !far ? rankOf(s) : 0;
      for (let k = 0; k < rk; k++) { ctx.fillStyle = AMBER; ctx.fillRect(sx - (rk * 4 - 1) / 2 + k * 4, sy - gs - 5, 3, 1.5); }
      if (picked || aimed) {
        ctx.strokeStyle = aimed && !mine ? HOSTILE : INK; ctx.lineWidth = 1.2;
        const r = Math.max(11, hullPx * 0.7);
        // Corner brackets rather than a full ring.
        for (let k = 0; k < 4; k++) { const a0 = k * Math.PI / 2 + Math.PI / 4; ctx.beginPath(); ctx.arc(sx, sy, r, a0 - 0.35, a0 + 0.35); ctx.stroke(); }
      }
      if (mine && cls !== 'freighter') {
        // Fuel (amber) and hull (white) as two short bars; a cross if she's adrift.
        const w = 14, y0 = sy + (docked ? -13 : Math.max(10, hullPx * 0.7) + 3);
        if (picked || (!far && (s.dv < s.st.dv * 0.3 || s.hull < s.st.hull * 0.6))) {
          ctx.globalAlpha = 0.9;
          ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(sx - w / 2, y0, w, 5);
          ctx.fillStyle = s.hull < s.st.hull * 0.35 ? HOSTILE : INK; ctx.fillRect(sx - w / 2, y0, w * Math.max(0, s.hull / s.st.hull), 2);
          ctx.fillStyle = AMBER; ctx.fillRect(sx - w / 2, y0 + 3, w * Math.max(0, Math.min(1, s.dv / s.st.dv)), 2);
          ctx.globalAlpha = 1;
        }
        if (crippled(s)) { ctx.strokeStyle = HOSTILE; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(sx - 9, sy - 9); ctx.lineTo(sx - 4, sy - 4); ctx.moveTo(sx - 4, sy - 9); ctx.lineTo(sx - 9, sy - 4); ctx.stroke(); }
      }
      if (s.board > 0) { ctx.strokeStyle = colorOf(s.boardBy); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(sx, sy, 14, -Math.PI / 2, -Math.PI / 2 + Math.min(1, s.board / (s.st.civil ? RULES.board.freighter : RULES.board.warship)) * Math.PI * 2); ctx.stroke(); }
      if ((picked || aimed) && known && cls !== 'freighter') label(s.name || '', sx, sy - (docked ? 22 : Math.max(16, hullPx * 0.7) + 8), aimed && !mine ? HOSTILE : INK, 0.95, 10);
    }
    report.burn = Math.min(1, burnSum / 2);

    // Last known positions of contacts that have dropped off the sensors.
    for (const [id, gh] of ghosts) {
      if (live.has(id)) continue;
      const age = now - gh.t;
      if (age > 90 || !game.ships.some((s) => s.id === id) && !game.mp) { ghosts.delete(id); continue; }
      if (age > 90) { ghosts.delete(id); continue; }
      const q = proj(gh.x + gh.vx * age, gh.y + gh.vy * age, gh.z + gh.vz * age);
      if (!q.ok) continue;
      glyph(gh.cls, q.x, q.y, 0, 5, colorOf(gh.owner), true, 0.5 * (1 - age / 90));
      // The longer since it was seen, the wider the circle it could be in.
      ctx.strokeStyle = colorOf(gh.owner); ctx.globalAlpha = 0.25 * (1 - age / 90); ctx.setLineDash([2, 3]);
      ctx.beginPath(); ctx.arc(q.x, q.y, 8 + age * 0.25, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;
    }

    // Torpedoes: a hot point with a short wake.
    const liveT = new Set();
    for (const m of game.torps) {
      if (!ui.dev && m.owner !== me && !inSight(m.x, m.y, m.z)) continue;
      liveT.add(m.id);
      const p = tmp.set(m.x + m.vx * lead, m.y + m.vy * lead, m.z + m.vz * lead).clone();
      const sp2 = Math.hypot(m.vx, m.vy, m.vz) || 1;
      tmp2.set(m.vx / sp2, m.vy / sp2, m.vz / sp2);
      shipR.add(0, p, tmp2, [0.01, 0.01, 0.01], '#ffd9b0', 1, m.id, !!m.burn, 0.7, [m.burn ? 5 : 2.5, m.burn ? 1 : 0.5, !!m.burn], 0, 1);
      const q = proj(p.x, p.y, p.z);
      if (!q.ok) continue;
      let tr = trails.get(m.id);
      if (!tr) { tr = []; trails.set(m.id, tr); }
      tr.push(p); if (tr.length > 14) tr.shift();
      pathOn(tr, m.owner === me ? INK : HOSTILE, 0.7, null, 1);
      ctx.fillStyle = m.owner === me ? INK : HOSTILE; ctx.fillRect(q.x - 1.5, q.y - 1.5, 3, 3);
    }
    for (const id of trails.keys()) if (!liveT.has(id)) trails.delete(id);
    shipR.end();

    // Reach of the selected ships: rails (solid), torpedoes (dashed), cold sensors (dotted).
    if (sel.size && sel.size <= 4 && !zoomedOut) {
      for (const s of game.ships) {
        if (!sel.has(s.id) || s.st.civil) continue;
        const x = s.x + s.vx * lead, y = s.y + s.vy * lead, z = s.z + s.vz * lead;
        if (s.st.rails.length) ringOn(x, y, z, s.st.railRange, INK, 0.35, null);
        if (s.st.tubes) ringOn(x, y, z, RULES.torpRange, AMBER, 0.3, [6, 6]);
        ringOn(x, y, z, s.st.cold, INK, 0.2, [1, 5]);
      }
    }
    // A selected world of yours: how far its sensors and battery reach.
    if (ui.selBody != null && game.bodies[ui.selBody].owner === me && !zoomedOut) {
      const b = game.bodies[ui.selBody], p = bodyPos[b.id];
      ringOn(p.x, p.y, p.z, RULES.cold * worldSight(b, game), INK, 0.2, [1, 5]);
      if (batteryMax(b)) ringOn(p.x, p.y, p.z, RULES.railRange + b.size, INK, 0.35, null);
    }
    // A burn being plotted by hand: the arrow from the ship.
    if (ui.plot) {
      const s = game.ships.find((x) => x.id === ui.plot.ship);
      if (s) {
        const a = proj(s.x, s.y, s.z), ax = a.x, ay = a.y;
        ctx.strokeStyle = AMBER; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ui.plot.x, ui.plot.y); ctx.stroke();
        ctx.beginPath(); ctx.arc(ui.plot.x, ui.plot.y, 5, 0, Math.PI * 2); ctx.stroke();
        if (ui.plot.path) pathOn(ui.plot.path, AMBER, 0.8, [5, 4], 1.2);
      }
    }

    updateFlare(realDt);
    shipLib.hullPx.value = (H * pixelRatio) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    dustMat.uniforms.uBox.value = orbit.dist * 0.9;
    dustMat.uniforms.uPR.value = pixelRatio;
    post.uniforms.uFocus.value = orbit.dist;
    post.uniforms.uDof.value = quality === 'high' ? 1 - THREE.MathUtils.smoothstep(orbit.dist, 10, 40) : 0;
    report.battle = heat;
    report.zoom = 1 - THREE.MathUtils.smoothstep(orbit.dist, 15, 300);
    adapt(t);
    post.render(scene, camera, t);
    return report;
  }

  /** What is under the finger: a ship (if one is close), else a world. */
  function pick(x, y, shipsFirst = true) {
    let best = null, bestD = Infinity;
    if (shipsFirst) {
      for (const [id, q] of shipScreen) {
        const d = Math.hypot(q.x - x, q.y - y);
        if (d < Math.max(20, q.r) && d < bestD) { bestD = d; best = { ship: id }; }
      }
      if (best) return best;
    }
    for (const v of views) {
      if (!v.on || v.show < 0.5) continue;
      const d = Math.hypot(v.sx - x, v.sy - y);
      const r = Math.max(26, v.sr + 12);
      if (d < r && d < bestD) { bestD = d; best = { body: v.b.id }; }
    }
    return best;
  }
  function groundAt(x, y) {
    const ndc = new THREE.Vector3((x / window.innerWidth) * 2 - 1, -(y / window.innerHeight) * 2 + 1, 0.5).unproject(camera);
    const ray = new THREE.Ray(camera.position, ndc.sub(camera.position).normalize());
    const ecliptic = new THREE.Plane(UP.clone(), -orbit.target.y);
    const hit = ray.intersectPlane(ecliptic, new THREE.Vector3());
    if (hit && hit.distanceTo(camera.position) < orbit.dist * 4) return hit;
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(camera.getWorldDirection(new THREE.Vector3()), orbit.target);
    return ray.intersectPlane(plane, new THREE.Vector3());
  }
  const release = () => { orbit.follow = null; orbit.ship = null; };
  function zoomAt(x, y, factor) {
    release(); orbit.goalDist = null;
    const before = groundAt(x, y);
    const next = THREE.MathUtils.clamp(orbit.dist * factor, orbit.minDist, orbit.maxDist);
    const k = next / orbit.dist;
    orbit.dist = next;
    if (before) orbit.target.lerp(before, 1 - k);
  }
  function pan(dx, dy) {
    release();
    const perPx = (2 * orbit.dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / window.innerHeight;
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
    const fwd = new THREE.Vector3().crossVectors(UP, right).normalize();
    orbit.target.addScaledVector(right, -dx * perPx).addScaledVector(fwd, dy * perPx);
  }
  function focus(game, id, zoom = true) {
    orbit.ship = null; orbit.follow = id;
    if (id === null || !zoom) return;
    orbit.goalDist = Math.max(orbit.minDist, game.bodies[id].size * 9 + 6);
  }
  /** The point a drag should turn around: the world under the cursor, else where the cursor meets the plane. */
  function pivotAt(x, y) {
    const h = pick(x, y, false);
    if (h) return views[h.body].g.position.clone();
    return groundAt(x, y) || orbit.target.clone();
  }
  /** Turn the view around a pivot (camera and look-at point both swing). */
  function rotateAround(pivot, daz, dpol) {
    release(); orbit.goalDist = null;
    const off = new THREE.Vector3().subVectors(camera.position, orbit.target);
    const sph = new THREE.Spherical().setFromVector3(off);
    const pol = THREE.MathUtils.clamp(sph.phi + dpol, 0.15, Math.PI - 0.15);
    dpol = pol - sph.phi;
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0).normalize();
    const q = new THREE.Quaternion().setFromAxisAngle(UP, daz).multiply(new THREE.Quaternion().setFromAxisAngle(right, dpol));
    const cam = camera.position.clone().sub(pivot).applyQuaternion(q).add(pivot);
    orbit.target.sub(pivot).applyQuaternion(q).add(pivot);
    sph.setFromVector3(cam.clone().sub(orbit.target));
    orbit.az = sph.theta; orbit.pol = sph.phi; orbit.dist = sph.radius;
  }
  function followShip(id, zoom = false) { orbit.follow = null; orbit.ship = id; if (zoom) orbit.goalDist = 9; }
  const following = () => orbit.follow !== null || orbit.ship != null;
  function zoomBy(factor) { orbit.goalDist = null; orbit.dist = THREE.MathUtils.clamp(orbit.dist * factor, orbit.minDist, orbit.maxDist); }
  function zoomToward(x, y, factor) {
    if (following()) { zoomBy(factor); return; }
    const h = pick(x, y, false);
    orbit.goalDist = null;
    if (!h) { zoomAt(x, y, factor); return; }
    const p = views[h.body].g.position;
    const next = THREE.MathUtils.clamp(orbit.dist * factor, orbit.minDist, orbit.maxDist);
    orbit.target.lerp(p, 1 - next / orbit.dist);
    orbit.dist = next;
  }
  function screenOf(id) { const v = views[id]; return { x: v.sx, y: v.sy }; }
  function screenOfShip(id) { return shipScreen.get(id) || null; }
  /** The point on the plane of the orbits under a screen position (for plotting burns by hand). */
  function worldAt(x, y) { const p = groundAt(x, y); return p ? { x: p.x, y: p.y, z: p.z } : null; }

  function setQuality(q) {
    quality = q;
    pixelRatio = maxPR();
    post.setSamples(4);
    post.setLevel(q);
    resize();
  }
  // Dynamic resolution: render fewer pixels if frames run slow, more again when there's room.
  let perfN = 0, perfAcc = 0, lastT = null, holdUntil = 0, trial = null, capped = false;
  function adapt(t) {
    if (lastT !== null) { const ft = t - lastT; if (ft > 0 && ft < 0.5) { perfAcc += ft; perfN++; } }
    lastT = t;
    if (perfN < 90) return;
    const avg = perfAcc / perfN;
    perfAcc = 0; perfN = 0;
    const max = maxPR();
    const min = max >= 1.5 ? Math.max(1.25, max * 0.8) : max * 0.9;
    if (trial) { if (avg > trial.avg * 0.9) { pixelRatio = trial.pr; capped = true; resize(); } trial = null; return; }
    if (!capped && avg > 1 / 45 && pixelRatio > min) { trial = { pr: pixelRatio, avg }; pixelRatio = Math.max(min, pixelRatio - 0.25); holdUntil = t + 20; resize(); }
    else if (avg < 1 / 57 && pixelRatio < max && t > holdUntil) { pixelRatio = Math.min(max, pixelRatio + 0.25); resize(); }
  }

  return { _debug: { scene, renderer, camera }, build, render, resize, setQuality, pick, orbit, zoomAt, zoomBy, pan, focus, followShip, following, zoomToward, screenOf, screenOfShip, worldAt, pivotAt, rotateAround };
}
