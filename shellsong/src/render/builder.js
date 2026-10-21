/**
 * Builds one big mesh out of lots of little shapes: each shape is a stock
 * geometry, placed, scaled and painted with a vertex colour. The whole town
 * goes into a handful of these, so a phone draws it in a handful of calls.
 */
import {
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  Euler,
  IcosahedronGeometry,
  Matrix3,
  Matrix4,
  Quaternion,
  SphereGeometry,
  TorusGeometry,
  Vector3,
} from 'three';

const flat = new Map();
function nonIndexed(key, make) {
  if (!flat.has(key)) {
    const g = make();
    flat.set(key, g.index ? g.toNonIndexed() : g);
  }
  return flat.get(key);
}

/** A unit roof: ridge along x at height 1, eaves at z = ±0.5. Slopes only. */
function roofSlopes() {
  const p = [
    // south slope
    -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0, -0.5, 0, 0.5, 0.5, 1, 0, -0.5, 1, 0,
    // north slope
    0.5, 0, -0.5, -0.5, 0, -0.5, -0.5, 1, 0, 0.5, 0, -0.5, -0.5, 1, 0, 0.5, 1, 0,
  ];
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(new Float32Array(p), 3));
  g.computeVertexNormals();
  return g;
}

/** The two triangles at the ends of a gable roof. */
function gableEnds() {
  const p = [0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 1, 0, -0.5, 0, -0.5, -0.5, 0, 0.5, -0.5, 1, 0];
  const g = new BufferGeometry();
  g.setAttribute('position', new BufferAttribute(new Float32Array(p), 3));
  g.computeVertexNormals();
  return g;
}

export const SHAPES = {
  box: () => nonIndexed('box', () => new BoxGeometry(1, 1, 1)),
  cyl: (seg = 12) => nonIndexed(`cyl${seg}`, () => new CylinderGeometry(0.5, 0.5, 1, seg)),
  cone: (seg = 12) => nonIndexed(`cone${seg}`, () => new ConeGeometry(0.5, 1, seg)),
  sphere: (w = 10, h = 7) => nonIndexed(`sph${w}x${h}`, () => new SphereGeometry(0.5, w, h)),
  blob: () => nonIndexed('blob', () => new IcosahedronGeometry(0.5, 1)),
  gem: () => nonIndexed('gem', () => new IcosahedronGeometry(0.5, 0)),
  torus: (r = 0.35, t = 0.15) => nonIndexed(`tor${r}${t}`, () => new TorusGeometry(r, t, 8, 18)),
  roof: () => nonIndexed('roof', roofSlopes),
  gable: () => nonIndexed('gable', gableEnds),
  plane: () => nonIndexed('plane', () => new BoxGeometry(1, 0.001, 1)),
};

const m4 = new Matrix4();
const n3 = new Matrix3();
const q = new Quaternion();
const e = new Euler();
const v = new Vector3();
const s = new Vector3();
const c = new Color();
const tmp = new Vector3();

export class Builder {
  constructor() {
    this.pos = [];
    this.nor = [];
    this.col = [];
  }

  /** Add `geo` at (x, y, z), scaled (sx, sy, sz), turned by (rx, ry, rz). */
  add(geo, x, y, z, sx, sy, sz, color, ry = 0, rx = 0, rz = 0) {
    e.set(rx, ry, rz, 'YXZ');
    q.setFromEuler(e);
    m4.compose(v.set(x, y, z), q, s.set(sx, sy, sz));
    return this.addMatrix(geo, m4, color);
  }

  addMatrix(geo, matrix, color) {
    n3.getNormalMatrix(matrix);
    c.set(color);
    const P = geo.attributes.position.array;
    const Nn = geo.attributes.normal.array;
    for (let k = 0; k < P.length; k += 3) {
      tmp.set(P[k], P[k + 1], P[k + 2]).applyMatrix4(matrix);
      this.pos.push(tmp.x, tmp.y, tmp.z);
      tmp.set(Nn[k], Nn[k + 1], Nn[k + 2]).applyMatrix3(n3).normalize();
      this.nor.push(tmp.x, tmp.y, tmp.z);
      this.col.push(c.r, c.g, c.b);
    }
    return this;
  }

  /** A box by its centre-bottom: sits on y. */
  box(x, y, z, w, h, d, color, ry = 0) {
    return this.add(SHAPES.box(), x, y + h / 2, z, w, h, d, color, ry);
  }
  /** A cylinder standing on y. */
  cyl(x, y, z, r, h, color, seg = 12) {
    return this.add(SHAPES.cyl(seg), x, y + h / 2, z, r * 2, h, r * 2, color);
  }
  cone(x, y, z, r, h, color, seg = 12) {
    return this.add(SHAPES.cone(seg), x, y + h / 2, z, r * 2, h, r * 2, color);
  }
  ball(x, y, z, r, color, w = 10, h = 7) {
    return this.add(SHAPES.sphere(w, h), x, y, z, r * 2, r * 2, r * 2, color);
  }
  blob(x, y, z, r, color, sy = 1) {
    return this.add(SHAPES.blob(), x, y, z, r * 2, r * 2 * sy, r * 2, color);
  }
  /** A flat rectangle at height y (for paint on the ground). */
  quad(x0, x1, z0, z1, y, color) {
    const pts = [x0, y, z0, x0, y, z1, x1, y, z1, x0, y, z0, x1, y, z1, x1, y, z0];
    c.set(color);
    for (let k = 0; k < pts.length; k += 3) {
      this.pos.push(pts[k], pts[k + 1], pts[k + 2]);
      this.nor.push(0, 1, 0);
      this.col.push(c.r, c.g, c.b);
    }
    return this;
  }
  /** A flat disc at height y. */
  disc(x, z, r, y, color, seg = 28) {
    c.set(color);
    for (let k = 0; k < seg; k++) {
      const a0 = (k / seg) * Math.PI * 2;
      const a1 = ((k + 1) / seg) * Math.PI * 2;
      this.pos.push(x, y, z, x + Math.cos(a1) * r, y, z + Math.sin(a1) * r, x + Math.cos(a0) * r, y, z + Math.sin(a0) * r);
      for (let j = 0; j < 3; j++) {
        this.nor.push(0, 1, 0);
        this.col.push(c.r, c.g, c.b);
      }
    }
    return this;
  }

  get empty() {
    return this.pos.length === 0;
  }

  geometry() {
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(new Float32Array(this.pos), 3));
    g.setAttribute('normal', new BufferAttribute(new Float32Array(this.nor), 3));
    g.setAttribute('color', new BufferAttribute(new Float32Array(this.col), 3));
    g.computeBoundingSphere();
    return g;
  }
}
