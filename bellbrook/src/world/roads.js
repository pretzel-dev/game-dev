/**
 * The road grid: seven roads each way, 56 m apart, with a 44 m block
 * between each pair. Everything else in town is laid out from these numbers.
 *
 * Also the "follow the arrows" route: from wherever the fire engine is to
 * the road nearest a fire, along the roads.
 */
export const BLOCK = 44;
export const ROAD = 12;
export const PITCH = BLOCK + ROAD;
export const N = 6; // blocks each way
export const HALF = (N * PITCH) / 2; // 168: the outer roads
export const LANE = 3; // lane centre from the road's centre line

/** Centre line of road `i` (0..N), the same numbers for x and z. */
export const roadAt = (i) => -HALF + i * PITCH;

/** Block `c` spans roadAt(c) + ROAD/2 to roadAt(c + 1) - ROAD/2. */
export const blockMin = (c) => roadAt(c) + ROAD / 2;
export const blockMax = (c) => roadAt(c + 1) - ROAD / 2;

// Cute street names, so a grown-up can read out where the fire is.
// "Avenues" run north to south (constant x), "streets" east to west.
export const NS_NAMES = ['Acorn Lane', 'Maple Street', 'Daisy Avenue', 'High Street', 'Honey Lane', 'Pebble Road', 'Willow Way'];
export const EW_NAMES = ['Orchard Road', 'Clover Street', 'Bluebell Road', 'Market Street', 'Puddle Lane', 'Teapot Street', 'Seaside Parade'];

const clampRoad = (v) => Math.max(-HALF, Math.min(HALF, v));

/**
 * The closest point on any road centre line. `axis` is 'ns' (a road
 * running north-south, index `i` in x) or 'ew' (index `j` in z).
 */
export function nearestRoadPoint(x, z) {
  const i = Math.max(0, Math.min(N, Math.round((x + HALF) / PITCH)));
  const j = Math.max(0, Math.min(N, Math.round((z + HALF) / PITCH)));
  const a = { x: roadAt(i), z: clampRoad(z), axis: 'ns', index: i };
  const b = { x: clampRoad(x), z: roadAt(j), axis: 'ew', index: j };
  const da = Math.hypot(a.x - x, a.z - z);
  const db = Math.hypot(b.x - x, b.z - z);
  const p = da <= db ? a : b;
  p.dist = Math.min(da, db);
  return p;
}

/** Is (x, z) on the tarmac (within `margin` of a centre line)? */
export function onRoad(x, z, margin = ROAD / 2) {
  return nearestRoadPoint(x, z).dist <= margin;
}

/** The two junctions at the ends of the stretch a road point is on. */
function endsOf(p) {
  if (p.axis === 'ns') {
    const j0 = Math.max(0, Math.min(N - 1, Math.floor((p.z + HALF) / PITCH)));
    return [
      { i: p.index, j: j0 },
      { i: p.index, j: j0 + 1 },
    ];
  }
  const i0 = Math.max(0, Math.min(N - 1, Math.floor((p.x + HALF) / PITCH)));
  return [
    { i: i0, j: p.index },
    { i: i0 + 1, j: p.index },
  ];
}

const nodePoint = (n) => ({ x: roadAt(n.i), z: roadAt(n.j) });
const dist = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.z - b.z);

/**
 * Waypoints along the roads from (fx, fz) to the road nearest (tx, tz).
 * Every road exists, so the shortest way between two junctions is an L:
 * pick the pair of ends that makes it shortest, and turn the corner so
 * the last leg runs along the road the goal is on.
 */
export function route(fx, fz, tx, tz) {
  const A = nearestRoadPoint(fx, fz);
  const B = nearestRoadPoint(tx, tz);
  const pts = [{ x: A.x, z: A.z }];
  const sameLine = A.axis === B.axis && A.index === B.index;
  if (sameLine) {
    pts.push({ x: B.x, z: B.z });
    return pts;
  }
  let best = null;
  for (const a of endsOf(A)) {
    for (const b of endsOf(B)) {
      const cost = dist(A, nodePoint(a)) + Math.abs(a.i - b.i) * PITCH + Math.abs(a.j - b.j) * PITCH + dist(nodePoint(b), B);
      if (!best || cost < best.cost) best = { a, b, cost };
    }
  }
  const { a, b } = best;
  const corner = B.axis === 'ew' ? { i: a.i, j: b.j } : { i: b.i, j: a.j };
  for (const n of [a, corner, b]) pts.push(nodePoint(n));
  pts.push({ x: B.x, z: B.z });
  // Drop repeats and points that double straight back on the way out.
  const out = [];
  for (const p of pts) {
    const last = out[out.length - 1];
    if (last && Math.abs(last.x - p.x) < 0.01 && Math.abs(last.z - p.z) < 0.01) continue;
    out.push(p);
  }
  return out;
}

/** Total length of a polyline. */
export function pathLength(pts) {
  let len = 0;
  for (let k = 1; k < pts.length; k++) len += Math.hypot(pts[k].x - pts[k - 1].x, pts[k].z - pts[k - 1].z);
  return len;
}
