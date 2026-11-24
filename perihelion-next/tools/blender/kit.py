# Shared kit for the Blender-made models: parts (lathes, boxes, tanks, trusses...),
# then the plumbing that bevels, joins, unwraps, bakes and exports them.
#
# A model script imports this, defines `build()` and calls `run(...)`. Blender's
# axes are the game's (z is the hull axis, fore is +z). Part kinds match
# gfx/ships.js. Each face carries: kind, tint, bake (takes part in the shade
# map) and part (which model in the file it belongs to, for files with several).
import bpy, bmesh, math, random, os, sys
from mathutils import Matrix, Vector

ROOT = os.getcwd()
ARGS = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
STEPS = tuple(ARGS) or ('build', 'bake', 'export')
OUT = os.path.join(ROOT, 'src', 'assets')
BAKE_PX = 2048
OUT_PX = 1024

HULL, DARK, PAINT, WINDOW, NAV_R, NAV_G, STROBE, THROAT, RAD, SOLAR = range(10)
TAU = math.pi * 2
D = math.radians
rnd = random.Random(11)


class K:
    """What the parts being made right now belong to."""
    base = Matrix()   # where this model sits in the file (models are spaced apart for baking)
    part = 0          # its index in the file
    lod = 0.0         # > 0: the far-off version; parts smaller than this radius are left out
    name = 'model'
    file = 'model'
    views = ((0.9, 0.35, 3.3, (0, 0, 0)),)


def begin(part, offset=(0, 0, 0), lod=0.0, seed=11):
    K.part, K.base, K.lod = part, Matrix.Translation(Vector(offset)), lod
    rnd.seed(seed)


def _keep(pts, kind):
    """In a far-off version, drop small parts (lights and windows stay: they are what shows)."""
    if not K.lod or WINDOW <= kind <= THROAT:
        return True
    c = sum(pts, Vector()) / len(pts)
    return max((p - c).length for p in pts) >= K.lod


# ---- Parts ----------------------------------------------------------------------
class Bucket:
    """Faces that get the same edge bevel. Each face carries kind, tint and bake."""
    def __init__(self, bevel):
        self.bevel = bevel
        self.bm = bmesh.new()
        L = self.bm.faces.layers.float
        self.kind, self.tint, self.bake, self.part = L.new('kind'), L.new('tint'), L.new('bake'), L.new('part')

    def tag(self, faces, kind, tint, bake):
        for f in faces:
            f[self.kind], f[self.tint], f[self.bake], f[self.part] = kind, tint, 1.0 if bake and not K.lod else 0.0, K.part
            f.smooth = True


B = {}


def bucket(bevel):
    if K.lod:
        bevel = 0.0
    if bevel not in B:
        B[bevel] = Bucket(bevel)
    return B[bevel]


def basis(d):
    return Vector((0, 0, 1)).rotation_difference(Vector(d).normalized()).to_matrix().to_4x4()


def at(p, d=(0, 0, 1), roll=0.0):
    """A frame at p whose local z runs along d."""
    return Matrix.Translation(Vector(p)) @ basis(d) @ Matrix.Rotation(roll, 4, 'Z')


def radial(a, r, z):
    """A frame on the hull at angle a, radius r: local z points out, local x along the station."""
    zc = Vector((math.cos(a), math.sin(a), 0))
    xc = Vector((0, 0, 1))
    yc = zc.cross(xc)
    m = Matrix((xc, yc, zc)).transposed().to_4x4()
    m.translation = zc * r + Vector((0, 0, z))
    return m


def lathe(prof, M=Matrix(), seg=32, kind=HULL, tint=1.0, bevel=0.0, bake=True):
    """Turn a profile of (z, r) points round local z. r = 0 closes an end."""
    M = K.base @ M
    if not _keep([M @ Vector((s * r, 0, z)) for z, r in prof for s in (-1, 1)], kind):
        return []
    if K.lod and seg > 8:
        seg = max(6, seg // 2)
    b = bucket(bevel)
    bm = b.bm
    rings = []
    for z, r in prof:
        if r < 1e-7:
            rings.append([bm.verts.new(M @ Vector((0, 0, z)))])
        else:
            rings.append([bm.verts.new(M @ Vector((r * math.cos(TAU * i / seg), r * math.sin(TAU * i / seg), z))) for i in range(seg)])
    faces = []
    for a, c in zip(rings, rings[1:]):
        if len(a) == 1 and len(c) == 1:
            continue
        for j in range(seg):
            k = (j + 1) % seg
            if len(c) == 1:
                faces.append(bm.faces.new((a[j], a[k], c[0])))
            elif len(a) == 1:
                faces.append(bm.faces.new((a[0], c[k], c[j])))
            else:
                faces.append(bm.faces.new((a[j], a[k], c[k], c[j])))
    b.tag(faces, kind, tint, bake)
    return faces


def drum(z0, z1, r):
    return [(z0, 0), (z0, r), (z1, r), (z1, 0)]


def cyl(p0, p1, r, seg=12, kind=HULL, tint=1.0, bevel=0.0, bake=True, r1=None):
    p0, p1 = Vector(p0), Vector(p1)
    L = (p1 - p0).length
    if L < 1e-6:
        return
    r1 = r if r1 is None else r1
    lathe([(0, 0), (0, r), (L, r1), (L, 0)], at(p0, p1 - p0), seg, kind, tint, bevel, bake)


def strut(p0, p1, t, kind=DARK, tint=0.8):
    cyl(p0, p1, t * 0.7, 4, kind, tint, 0.0, False)


def box(size, M, kind=HULL, tint=1.0, bevel=0.0, bake=True):
    m = K.base @ M @ Matrix.Diagonal((*size, 1.0))
    if not _keep([m @ Vector((sx * 0.5, sy * 0.5, sz * 0.5)) for sx in (-1, 1) for sy in (-1, 1) for sz in (-1, 1)], kind):
        return
    b = bucket(bevel)
    v = bmesh.ops.create_cube(b.bm, size=1.0, matrix=m)['verts']
    faces = {f for x in v for f in x.link_faces}
    b.tag(faces, kind, tint, bake)


def sphere(p, r, kind=HULL, tint=1.0, u=24, v=14, bake=True, squash=1.0):
    if K.lod and r < K.lod:
        return
    if K.lod:
        u, v = max(8, u // 2), max(5, v // 2)
    b = bucket(0.0)
    m = K.base @ Matrix.Translation(Vector(p)) @ Matrix.Diagonal((1, 1, squash, 1))
    vs = bmesh.ops.create_uvsphere(b.bm, u_segments=u, v_segments=v, radius=r, matrix=m)['verts']
    b.tag({f for x in vs for f in x.link_faces}, kind, tint, bake)


def pipe(pts, r, kind=DARK, tint=0.9, seg=6):
    pts = [Vector(p) for p in pts]
    for a, c in zip(pts, pts[1:]):
        cyl(a, c, r, seg, kind, tint, 0.0, False)
    for p in pts[1:-1]:
        sphere(p, r * 1.15, kind, tint, 6, 4, False)


def truss(p0, p1, w, bays, t, up=(1, 0, 0), kind=DARK, tint=0.75):
    """An open square lattice from p0 to p1."""
    p0, p1 = Vector(p0), Vector(p1)
    d = (p1 - p0).normalized()
    u = (Vector(up) - d * Vector(up).dot(d)).normalized()
    v = d.cross(u)
    c = [u * (sx * w / 2) + v * (sy * w / 2) for sx, sy in ((1, 1), (-1, 1), (-1, -1), (1, -1))]
    for o in c:
        strut(p0 + o, p1 + o, t, kind, tint)
    L = (p1 - p0).length / bays
    for i in range(bays + 1):
        q = p0 + d * (L * i)
        for j in range(4):
            strut(q + c[j], q + c[(j + 1) % 4], t * 0.8, kind, tint)
        if i < bays:
            for j in range(4):
                a, e = (c[j], c[(j + 1) % 4]) if (i + j) % 2 else (c[(j + 1) % 4], c[j])
                strut(q + a, q + d * L + e, t * 0.65, kind, tint * 0.9)


def windows(a0, n, da, r, z, w=0.006, h=0.009, M=Matrix(), skip=0.0):
    """A row of small lit panes round a drum of radius r."""
    for i in range(n):
        if rnd.random() < skip:
            continue
        a = a0 + i * da
        box((h, w, 0.003), M @ radial(a, r + 0.0006, z), WINDOW, 1.0, 0.0, False)


def band(z0, z1, r, kind=PAINT, tint=1.0, M=Matrix(), seg=32, t=0.0025):
    lathe([(z0, r - 0.004), (z0, r + t), (z1, r + t), (z1, r - 0.004)], M, seg, kind, tint, 0.0, True)


def can(p, d, r, L, tint=0.9, seg=20, ribs=2, win=0, paint=False, dome=0.45):
    """A pressurised module: a drum with rounded ends, ribs, a hatch ring and a few lit panes."""
    M = at(p, d)
    h = r * dome
    prof = [(0, 0), (0, r * 0.45), (h * 0.35, r * 0.78), (h, r), (L - h, r), (L - h * 0.35, r * 0.78), (L, r * 0.45), (L, 0)]
    lathe(prof, M, seg, HULL, tint, 0.002)
    for i in range(ribs):
        z = h + (L - 2 * h) * (i + 0.5) / ribs
        band(z - r * 0.07, z + r * 0.07, r, DARK, 0.85, M, seg, r * 0.05)
    if paint:
        band(L - h - r * 0.5, L - h - r * 0.28, r, PAINT, 1.0, M, seg, 0.0018)
    if win:
        windows(rnd.random() * TAU, win, TAU / max(win, 10), r, h + (L - 2 * h) * 0.3, r * 0.1, r * 0.14, M, 0.25)
    # End hatches.
    lathe(drum(-r * 0.06, 0.004, r * 0.5), M, 12, DARK, 0.8, 0.0, False)
    lathe(drum(L - 0.004, L + r * 0.06, r * 0.5), M, 12, DARK, 0.8, 0.0, False)
    return M


def tank(p, r, tint=1.0, strap=True, paint=False):
    sphere(p, r, HULL, tint, 28, 16)
    if strap:
        M = Matrix.Translation(Vector(p))
        band(-r * 0.07, r * 0.07, r * 1.0, PAINT if paint else DARK, 0.85, M, 28, r * 0.03)
        for zz in (-0.62, 0.62):
            rr = r * math.sqrt(1 - zz * zz)
            band(r * zz - r * 0.03, r * zz + r * 0.03, rr, DARK, 0.8, M, 28, r * 0.03)


def radiator(root, out, along, reach, length, segs=4, t=0.004):
    """Panels in a row with a manifold at the root and a header at the tip."""
    root, out, along = Vector(root), Vector(out).normalized(), Vector(along).normalized()
    n = out.cross(along)
    M0 = Matrix((along, out, n)).transposed().to_4x4()
    gap = length * 0.03
    sl = (length - gap * (segs - 1)) / segs
    for i in range(segs):
        c = root + along * (-length / 2 + sl / 2 + i * (sl + gap)) + out * (reach / 2 + 0.012)
        m = M0.copy()
        m.translation = c
        box((sl, reach, t), m, RAD, 0.9 + rnd.random() * 0.14, 0.0, True)
        box((sl * 0.04, reach, t * 2.2), m, DARK, 0.75, 0.0, False)
    cyl(root - along * length * 0.52, root + along * length * 0.52, t * 1.6, 8, DARK, 0.85, 0.0, False)
    tip = root + out * (reach + 0.014)
    cyl(tip - along * length * 0.5, tip + along * length * 0.5, t * 1.0, 6, DARK, 0.7, 0.0, False)


def dish(p, d, R, depth=None):
    depth = depth or R * 0.32
    M = at(p, d)
    n = 7
    back = [(-0.004 + depth * (i / n) ** 2, R * i / n) for i in range(n + 1)]
    front = [(depth * (i / n) ** 2, (R - 0.003) * i / n) for i in range(n, -1, -1)]
    lathe([(back[0][0], 0)] + back[1:] + front[:-1] + [(0, 0)], M, 28, HULL, 1.05, 0.0, True)
    feed = M @ Vector((0, 0, R * 0.8))
    for k in range(3):
        a = TAU * k / 3
        strut(M @ Vector((math.cos(a) * R * 0.85, math.sin(a) * R * 0.85, depth * 0.72)), feed, 0.004)
    lathe(drum(R * 0.74, R * 0.86, R * 0.07), M, 8, DARK, 0.8, 0.0, False)
    lathe(drum(-R * 0.25, -0.002, R * 0.16), M, 10, DARK, 0.8, 0.0, False)


def light(p, kind, s=0.012):
    box((s, s, s), Matrix.Translation(Vector(p)), kind, 1.0, 0.0, False)


def pol(a, r, z):
    return Vector((math.cos(a) * r, math.sin(a) * r, z))


# ---- Ship fittings ----------------------------------------------------------------
def bell(z, R, L, seg=24, a=0.42, e=1.6, tint=0.7, p=(0, 0)):
    """A drive bell: throat at z, opening aft. Returns where its torch starts."""
    M = Matrix.Translation((p[0], p[1], 0))
    n, t = 8, max(0.002, R * 0.05)
    pts = [(z - L * (i / n), R * (a + (1 - a) * (i / n) ** e)) for i in range(n + 1)]
    lathe(list(reversed(pts)) + [(z, 0)], M, seg, DARK, tint, 0.0, True)
    lathe([(z - 0.004, 0)] + [(zz - (0.004 if i == 0 else 0), max(r - t, 0.001)) for i, (zz, r) in enumerate(pts)] + [pts[-1]], M, seg, DARK, tint * 0.75, 0.0, True)
    lathe(drum(z - 0.016, z - 0.009, R * a * 0.85), M, 14, THROAT, 1.0, 0.0, False)
    for i in (2, 5):  # stiffening hoops
        band(pts[i][0] - R * 0.03, pts[i][0] + R * 0.03, pts[i][1] + 0.001, DARK, tint * 1.2, M, seg, R * 0.03)
    return z - L - 0.01


def capsule(p, d, r, L, kind=HULL, tint=1.0, seg=16, bake=True):
    """A tank with rounded ends, L long overall, from p along d. Returns its frame."""
    M = at(p, d)
    n = 4
    cap = [(r * (1 - math.cos(math.pi / 2 * i / n)), r * math.sin(math.pi / 2 * i / n)) for i in range(n + 1)]
    prof = cap + [(L - z, rr) for z, rr in reversed(cap)]
    lathe(prof, M, seg, kind, tint, 0.0, bake)
    return M


def strapped(p, r, L, tint=1.0, paint=False, d=(0, 0, 1), seg=16):
    """A propellant tank with straps and, sometimes, a band of the owner's paint. p is its aft end."""
    M = capsule(p, d, r, L, HULL, tint, seg)
    for f in (0.3, 0.7):
        band(L * f - r * 0.07, L * f + r * 0.07, r, DARK, 0.8, M, seg, r * 0.04)
    if paint:
        band(L * 0.44, L * 0.56, r, PAINT, 1.0, M, seg, r * 0.02)
    lathe(drum(-r * 0.12, r * 0.05, r * 0.3), M, 8, DARK, 0.8, 0.0, False)  # fill valve
    return M


def beam(p0, p1, t, kind=DARK, tint=0.8, bevel=0.0):
    """A square member between two points (heavier than a strut: it takes shade)."""
    p0, p1 = Vector(p0), Vector(p1)
    L = (p1 - p0).length
    box((t, t, L), at((p0 + p1) / 2, p1 - p0), kind, tint, bevel, True)


def cage(size, c, t, kind=DARK, tint=0.8):
    """An open box frame round c: twelve beams."""
    w, h, d = (v / 2 for v in size)
    c = Vector(c)
    for sy in (-1, 1):
        for sz in (-1, 1):
            beam(c + Vector((-w, sy * h, sz * d)), c + Vector((w, sy * h, sz * d)), t, kind, tint)
    for sx in (-1, 1):
        for sz in (-1, 1):
            beam(c + Vector((sx * w, -h, sz * d)), c + Vector((sx * w, h, sz * d)), t, kind, tint)
        for sy in (-1, 1):
            beam(c + Vector((sx * w, sy * h, -d)), c + Vector((sx * w, sy * h, d)), t, kind, tint)


def patchrad(root, out, length, reach, segs=3, missing=-1, t=0.003):
    """A patched radiator along z: panels of different ages and reach, one maybe gone."""
    root, out = Vector(root), Vector(out).normalized()
    n = out.cross(Vector((0, 0, 1)))
    M0 = Matrix((Vector((0, 0, 1)), out, n)).transposed().to_4x4()
    gap = length * 0.05
    sl = (length - gap * (segs - 1)) / segs
    for i in range(segs):
        rr = reach * rnd.uniform(0.78, 1.08)
        old = rnd.random() < 0.3
        tint = rnd.uniform(0.7, 1.05)
        zc = -length / 2 + sl / 2 + i * (sl + gap)
        m = M0.copy()
        if i == missing:
            m.translation = root + Vector((0, 0, zc)) + out * (reach * 0.45)
            for sx in (-1, 1):
                strut(m @ Vector((sx * sl / 2, -reach * 0.45, 0)), m @ Vector((sx * sl / 2, reach * 0.45, 0)), t)
            strut(m @ Vector((-sl / 2, reach * 0.45, 0)), m @ Vector((sl / 2, reach * 0.45, 0)), t)
            continue
        m.translation = root + Vector((0, 0, zc)) + out * (rr / 2)
        box((sl, rr, t), m, DARK if old else RAD, tint, 0.0, True)
        box((sl * 0.05, rr, t * 2), m, DARK, 0.7, 0.0, False)
    cyl(root - Vector((0, 0, length * 0.52)), root + Vector((0, 0, length * 0.52)), t * 1.5, 6, DARK, 0.8, 0.0, False)


def rcs(p, out):
    """An attitude-jet cluster: a block with nozzles out to the side, fore and aft."""
    p, out = Vector(p), Vector(out).normalized()
    box((0.012, 0.012, 0.015), Matrix.Translation(p), DARK, 0.85, 0.001)
    for o in (out * 0.008, Vector((0, 0, 0.0095)), Vector((0, 0, -0.0095))):
        box((0.0045, 0.0045, 0.0045), Matrix.Translation(p + o), DARK, 0.5, 0.0, False)


def pdc(p, up=(0, 1, 0), s=1.0):
    """A point-defence mount: a ring, a turret and twin barrels pointing forward."""
    p, up = Vector(p), Vector(up).normalized()
    lathe([(0, 0), (0, 0.013 * s), (0.006 * s, 0.011 * s), (0.006 * s, 0)], at(p, up), 10, DARK, 0.9, 0.0, False)
    side = up.cross(Vector((0, 0, 1))).normalized()
    M = Matrix((side, up, Vector((0, 0, 1)))).transposed().to_4x4()
    M.translation = p + up * 0.011 * s
    box((0.015 * s, 0.011 * s, 0.017 * s), M, HULL, 0.8, 0.001)
    for e in (-1, 1):
        box((0.003 * s, 0.003 * s, 0.034 * s), M @ Matrix.Translation((e * 0.0035 * s, 0.001 * s, 0.022 * s)), DARK, 0.6, 0.0, False)


def turret(p, up=(0, 1, 0), s=1.0):
    """A heavier twin gun: a barbette, a slab-sided house and long barrels."""
    p, up = Vector(p), Vector(up).normalized()
    lathe([(0, 0), (0, 0.021 * s), (0.008 * s, 0.018 * s), (0.008 * s, 0)], at(p, up), 14, DARK, 0.9, 0.0, True)
    side = up.cross(Vector((0, 0, 1))).normalized()
    M = Matrix((side, up, Vector((0, 0, 1)))).transposed().to_4x4()
    M.translation = p + up * 0.016 * s
    box((0.03 * s, 0.016 * s, 0.036 * s), M, HULL, 0.85, 0.002)
    for e in (-1, 1):
        box((0.0045 * s, 0.0045 * s, 0.07 * s), M @ Matrix.Translation((e * 0.006 * s, 0.001 * s, 0.05 * s)), DARK, 0.6, 0.0, False)


def tubes(c, nx, ny, rad=0.0085, L=0.1, tint=0.85):
    """A torpedo rack: a box launcher with nx by ny tubes firing forward."""
    c = Vector(c)
    st = rad * 2.5
    box((nx * st + rad, ny * st + rad, L), Matrix.Translation(c), HULL, tint, 0.002)
    for i in range(nx):
        for j in range(ny):
            q = c + Vector(((i - (nx - 1) / 2) * st, (j - (ny - 1) / 2) * st, L / 2))
            lathe([(-0.002, 0), (-0.002, rad), (0.003, rad), (0.003, rad * 0.75), (0.0005, rad * 0.75), (0.0005, 0)], Matrix.Translation(q), 10, DARK, 0.45, 0.0, False)


# ---- Blender plumbing -----------------------------------------------------------
def scene():
    if bpy.app.background or not bpy.context.window:
        return bpy.context.scene
    sc = bpy.data.scenes.get(K.name) or bpy.data.scenes.new(K.name)
    bpy.context.window.scene = sc
    return sc


def finish():
    """Bevel each bucket, give it clean normals, and join everything into one mesh."""
    sc = scene()
    for o in list(sc.collection.all_objects):
        if o.type == 'MESH':
            bpy.data.objects.remove(o, do_unlink=True)
    objs = []
    for bevel, b in B.items():
        bm = b.bm
        bm.normal_update()
        if bevel > 0:
            edges = [e for e in bm.edges if len(e.link_faces) == 2 and e.calc_face_angle(0) > math.radians(38)]
            bmesh.ops.bevel(bm, geom=edges, offset=bevel, offset_type='OFFSET', segments=1, profile=0.5, affect='EDGES', clamp_overlap=True)
            for _ in range(3):  # new faces take their neighbour's tags
                for f in bm.faces:
                    if f[b.tint] == 0:
                        for e in f.edges:
                            for g in e.link_faces:
                                if g[b.tint] > 0:
                                    f[b.kind], f[b.tint], f[b.bake], f[b.part] = g[b.kind], g[b.tint], g[b.bake], g[b.part]
                                    break
            for f in bm.faces:
                f.smooth = True
        else:
            for e in bm.edges:
                if len(e.link_faces) == 2 and e.calc_face_angle(0) > math.radians(38):
                    e.smooth = False
        me = bpy.data.meshes.new(f'{K.name}_{bevel}')
        bm.to_mesh(me)
        bm.free()
        ob = bpy.data.objects.new(me.name, me)
        sc.collection.objects.link(ob)
        if bevel > 0:
            mod = ob.modifiers.new('wn', 'WEIGHTED_NORMAL')
            mod.keep_sharp = True
            mod.weight = 60
        objs.append(ob)
    B.clear()
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    bpy.ops.object.convert(target='MESH')
    bpy.ops.object.join()
    ob = bpy.context.view_layer.objects.active
    ob.name = K.name
    ob.data.name = K.name
    return ob


def pack_colour(ob):
    """kind, tint and part into a colour attribute (r = kind / 15, g = tint / 2, b = part / 15), which glTF carries."""
    me = ob.data
    kind = [0.0] * len(me.polygons)
    tint, part = kind[:], kind[:]
    me.attributes['kind'].data.foreach_get('value', kind)
    me.attributes['tint'].data.foreach_get('value', tint)
    me.attributes['part'].data.foreach_get('value', part)
    col = me.color_attributes.get('Col') or me.color_attributes.new('Col', 'FLOAT_COLOR', 'CORNER')
    out = []
    for p in me.polygons:
        out += [kind[p.index] / 15, tint[p.index] / 2, part[p.index] / 15, 1.0] * p.loop_total
    col.data.foreach_set('color', out)
    me.color_attributes.active_color = col
    me.color_attributes.render_color_index = list(me.color_attributes).index(col)


def unwrap(ob):
    me = ob.data
    bake = [0.0] * len(me.polygons)
    me.attributes['bake'].data.foreach_get('value', bake)
    while me.uv_layers:
        me.uv_layers.remove(me.uv_layers[0])
    me.uv_layers.new(name='atlas')
    me.vertices.foreach_set('select', [False] * len(me.vertices))
    me.edges.foreach_set('select', [False] * len(me.edges))
    me.polygons.foreach_set('select', [b > 0.5 for b in bake])
    bpy.context.view_layer.objects.active = ob
    ob.select_set(True)
    bpy.context.tool_settings.mesh_select_mode = (False, False, True)
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.uv.smart_project(angle_limit=math.radians(66), island_margin=0.0025, area_weight=0.0, scale_to_bounds=False)
    bpy.ops.object.mode_set(mode='OBJECT')
    uv = me.uv_layers['atlas'].data
    for p in me.polygons:
        for li in p.loop_indices:
            if bake[p.index] > 0.5:
                u = uv[li].uv
                uv[li].uv = (0.03 + u[0] * 0.97, 0.03 + u[1] * 0.97)
            else:
                uv[li].uv = (0.008, 0.008)  # a spare corner, painted "no shade"


def image(name):
    im = bpy.data.images.get(name)
    if im:
        bpy.data.images.remove(im)
    im = bpy.data.images.new(name, BAKE_PX, BAKE_PX, alpha=False, float_buffer=False)
    im.colorspace_settings.name = 'Non-Color'
    return im


def bake(ob):
    import numpy as np
    sc = scene()
    sc.render.engine = 'CYCLES'
    sc.cycles.samples = 96
    sc.cycles.use_denoising = False
    if not sc.world:
        sc.world = bpy.data.worlds.new(K.name)
    sc.world.light_settings.distance = 0.22
    mat = bpy.data.materials.get(K.name + '_bake')
    if mat:
        bpy.data.materials.remove(mat)
    mat = bpy.data.materials.new(K.name + '_bake')
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()
    out = nt.nodes.new('ShaderNodeOutputMaterial')
    em = nt.nodes.new('ShaderNodeEmission')
    # Weathering: broad blotches, and streaks drawn out along the station's axis.
    tc = nt.nodes.new('ShaderNodeTexCoord')
    mp = nt.nodes.new('ShaderNodeMapping')
    mp.inputs['Scale'].default_value = (9, 9, 1.6)
    n1 = nt.nodes.new('ShaderNodeTexNoise')
    n1.inputs['Scale'].default_value = 3.0
    n1.inputs['Detail'].default_value = 8.0
    n1.inputs['Roughness'].default_value = 0.62
    n2 = nt.nodes.new('ShaderNodeTexNoise')
    n2.inputs['Scale'].default_value = 5.0
    n2.inputs['Detail'].default_value = 6.0
    mix = nt.nodes.new('ShaderNodeMath')
    mix.operation = 'MULTIPLY'
    ramp = nt.nodes.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].position = 0.12
    ramp.color_ramp.elements[1].position = 0.42
    tex = nt.nodes.new('ShaderNodeTexImage')
    nt.links.new(tc.outputs['Object'], mp.inputs['Vector'])
    nt.links.new(mp.outputs['Vector'], n1.inputs['Vector'])
    nt.links.new(tc.outputs['Object'], n2.inputs['Vector'])
    nt.links.new(n1.outputs['Fac'], mix.inputs[0])
    nt.links.new(n2.outputs['Fac'], mix.inputs[1])
    nt.links.new(mix.outputs[0], ramp.inputs['Fac'])
    nt.links.new(ramp.outputs['Color'], em.inputs['Color'])
    nt.links.new(em.outputs[0], out.inputs['Surface'])
    ob.data.materials.clear()
    ob.data.materials.append(mat)
    bpy.ops.object.select_all(action='DESELECT')
    ob.select_set(True)
    bpy.context.view_layer.objects.active = ob
    res = []
    for kind in ('AO', 'EMIT'):
        im = image(f'{K.name}_{kind}')
        tex.image = im
        nt.nodes.active = tex
        bpy.ops.object.bake(type=kind, margin=6, use_clear=True)
        a = np.empty(BAKE_PX * BAKE_PX * 4, dtype=np.float32)
        im.pixels.foreach_get(a)
        res.append(a.reshape(BAKE_PX, BAKE_PX, 4)[:, :, 0].copy())
    ao, wx = res
    c = int(BAKE_PX * 0.02)
    ao[:c, :c] = 0.92
    wx[:c, :c] = 0.7
    final = image(K.name + '_bake')
    px = np.ones((BAKE_PX, BAKE_PX, 4), dtype=np.float32)
    px[:, :, 0], px[:, :, 1], px[:, :, 2] = ao, wx, 0.0
    final.pixels.foreach_set(px.ravel())
    final.update()
    return final


def export(ob, im):
    os.makedirs(OUT, exist_ok=True)
    if im:
        im.scale(OUT_PX, OUT_PX)  # baked large, shipped small: the shade is soft
        im.filepath_raw = os.path.join(OUT, K.file + '-bake.webp')
        im.file_format = 'WEBP'
        im.save(quality=82)
    ob.data.materials.clear()
    bpy.ops.object.select_all(action='DESELECT')
    ob.select_set(True)
    bpy.context.view_layer.objects.active = ob
    bpy.ops.export_scene.gltf(
        filepath=os.path.join(OUT, K.file + '.glb'), export_format='GLB', use_selection=True, export_yup=False,
        export_apply=True, export_normals=True, export_texcoords=True, export_materials='NONE',
        export_vertex_color='ACTIVE', export_active_vertex_color_when_no_material=True, export_all_vertex_colors=False,
        export_attributes=False, export_extras=True, export_meshopt_compression_enable=True, export_meshopt_extension='EXT_meshopt_compression', export_animations=False, export_skins=False, export_morph=False,
    )


def preview(ob):
    """Quick renders, coloured by part kind, lit by one sun: enough to judge shapes and bevels."""
    sc = scene()
    sc.render.engine = 'CYCLES'
    sc.cycles.samples = 24
    sc.cycles.use_denoising = True
    sc.render.resolution_x, sc.render.resolution_y = 1100, 800
    sc.view_settings.view_transform = 'Standard'
    if not sc.world:
        sc.world = bpy.data.worlds.new(K.name)
    sc.world.use_nodes = True
    sc.world.node_tree.nodes['Background'].inputs[0].default_value = (0.012, 0.014, 0.02, 1)
    for o in list(sc.collection.objects):
        if o.type in ('LIGHT', 'CAMERA'):
            bpy.data.objects.remove(o, do_unlink=True)
    sun = bpy.data.objects.new('sun', bpy.data.lights.new('sun', 'SUN'))
    sun.data.energy = 4
    sun.rotation_euler = (math.radians(55), 0, math.radians(35))
    sc.collection.objects.link(sun)
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam'))
    cam.data.lens = 60
    sc.collection.objects.link(cam)
    sc.camera = cam
    me = ob.data
    kind = [0.0] * len(me.polygons)
    tint = kind[:]
    me.attributes['kind'].data.foreach_get('value', kind)
    me.attributes['tint'].data.foreach_get('value', tint)
    pal = {THROAT: (0.4, 0.6, 1.0), HULL: (0.62, 0.63, 0.65), DARK: (0.2, 0.21, 0.23), PAINT: (0.7, 0.66, 0.2), WINDOW: (1, 0.75, 0.35), NAV_R: (1, 0.1, 0.05), NAV_G: (0.1, 1, 0.3), STROBE: (1, 1, 1), RAD: (0.85, 0.83, 0.8), SOLAR: (0.05, 0.08, 0.2)}
    col = me.color_attributes.get('Pre') or me.color_attributes.new('Pre', 'FLOAT_COLOR', 'CORNER')
    out = []
    for p in me.polygons:
        c = pal.get(int(round(kind[p.index])), (1, 0, 1))
        t = tint[p.index] if kind[p.index] < 2.5 or kind[p.index] > 7.5 else 1
        out += [c[0] * t, c[1] * t, c[2] * t, 1.0] * p.loop_total
    col.data.foreach_set('color', out)
    mat = bpy.data.materials.new(K.name + '_pre')
    mat.use_nodes = True
    nt = mat.node_tree
    bsdf = nt.nodes['Principled BSDF']
    at_ = nt.nodes.new('ShaderNodeAttribute')
    at_.attribute_name = 'Pre'
    nt.links.new(at_.outputs['Color'], bsdf.inputs['Base Color'])
    bsdf.inputs['Metallic'].default_value = 0.4
    bsdf.inputs['Roughness'].default_value = 0.5
    me.materials.clear()
    me.materials.append(mat)
    outdir = os.path.join(ROOT, 'tools', 'blender', 'out')
    os.makedirs(outdir, exist_ok=True)
    for i, (az, el, dist, tgt) in enumerate(K.views):
        t = Vector(tgt)
        cam.location = t + Vector((math.cos(az) * math.cos(el), math.sin(el), math.sin(az) * math.cos(el))) * dist
        cam.rotation_euler = (t - cam.location).to_track_quat('-Z', 'Y').to_euler()
        sc.render.filepath = os.path.join(outdir, f'{K.name}_{i}.png')
        bpy.ops.render.render(write_still=True)
    me.materials.clear()


def run(name, file, build, views=None, extras=None):
    """Build, bake and export one file of models. `build()` makes the parts; `extras` go out as glTF extras."""
    K.name, K.file = name, file
    if views:
        K.views = views
    ob = bpy.data.objects.get(name)
    im = bpy.data.images.get(name + '_bake')
    if 'build' in STEPS:
        info = build() or {}
        ob = finish()
        for k, v in {**(extras or {}), **info}.items():
            ob[k] = v
        pack_colour(ob)
        unwrap(ob)
    if 'bake' in STEPS:
        im = bake(ob)
    if 'export' in STEPS:
        export(ob, im)
    if 'preview' in STEPS:
        preview(ob)
    if bpy.app.background:
        os.makedirs(os.path.join(ROOT, 'tools', 'blender', 'out'), exist_ok=True)
        bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT, 'tools', 'blender', 'out', name + '.blend'))
    print('MODEL', name, 'verts', len(ob.data.vertices), 'tris', sum(len(p.vertices) - 2 for p in ob.data.polygons))
