# The Lantern Holds' home station, built in Blender and exported for the game.
#
# Run from perihelion-next/ (Blender 5.x):
#   /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup --python tools/blender/holds_station.py
# Add `-- build` (or bake, export, preview) to run only some steps:
#   'build'  the model (one joined mesh, bevelled, with kind/tint per face)
#   'bake'   ambient occlusion and weathering into one texture
#   'export' src/assets/holds-station.glb and holds-station-bake.webp
#   'preview' a few renders into tools/blender/out/ (for checking the shapes)
#
# Units are the station's size S (the game scales it). Blender's axes are the
# game's: z is the station's axis (fore is +z). Part kinds match gfx/ships.js.
import bpy, bmesh, math, random, os
from mathutils import Matrix, Vector

import sys
ROOT = globals().get('ROOT', os.getcwd())
ARGS = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
STEPS = globals().get('STEPS', tuple(ARGS) or ('build', 'bake', 'export'))
OUT = os.path.join(ROOT, 'src', 'assets')
NAME = 'holds_station'
BAKE_PX = 2048
OUT_PX = 1024

HULL, DARK, PAINT, WINDOW, NAV_R, NAV_G, STROBE, THROAT, RAD, SOLAR = range(10)
TAU = math.pi * 2
rnd = random.Random(11)


# ---- Parts kit ----------------------------------------------------------------
class Bucket:
    """Faces that get the same edge bevel. Each face carries kind, tint and bake."""
    def __init__(self, bevel):
        self.bevel = bevel
        self.bm = bmesh.new()
        L = self.bm.faces.layers.float
        self.kind, self.tint, self.bake = L.new('kind'), L.new('tint'), L.new('bake')

    def tag(self, faces, kind, tint, bake):
        for f in faces:
            f[self.kind], f[self.tint], f[self.bake] = kind, tint, 1.0 if bake else 0.0
            f.smooth = True


B = {}


def bucket(bevel):
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
    b = bucket(bevel)
    m = M @ Matrix.Diagonal((*size, 1.0))
    v = bmesh.ops.create_cube(b.bm, size=1.0, matrix=m)['verts']
    faces = {f for x in v for f in x.link_faces}
    b.tag(faces, kind, tint, bake)


def sphere(p, r, kind=HULL, tint=1.0, u=24, v=14, bake=True, squash=1.0):
    b = bucket(0.0)
    m = Matrix.Translation(Vector(p)) @ Matrix.Diagonal((1, 1, squash, 1))
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


# ---- The station ----------------------------------------------------------------
def build():
    D = math.radians
    R0 = 0.125  # the first hull
    ZA, ZF = -0.36, 0.36

    # The first hull: a long drum with a glazed gallery near the bow.
    prof = [(ZA, 0), (ZA, 0.07), (ZA + 0.018, 0.1), (ZA + 0.04, R0)]
    for z0, z1 in ((ZA + 0.04, -0.24), (-0.22, -0.1), (-0.08, 0.05), (0.07, 0.2)):
        prof += [(z0, R0), (z1, R0), (z1 + 0.004, R0 - 0.006), (z1 + 0.016, R0 - 0.006)]
    prof += [(0.22, R0), (0.262, R0), (0.262, R0 - 0.008), (0.3, R0 - 0.008), (0.3, R0), (0.315, R0), (0.34, 0.1), (ZF, 0.07), (ZF, 0)]
    lathe(prof, Matrix(), 48, HULL, 0.86, 0.0035)
    # The lantern: the old observation gallery, lit all the way round.
    for i in range(24):
        if i % 6 != 5:
            box((0.03, TAU * (R0 - 0.008) / 24 * 0.78, 0.003), radial(TAU * i / 24, R0 - 0.0075, 0.281), WINDOW, 1.0, 0.0, False)
        cyl(pol(TAU * (i + 0.5) / 24, R0 - 0.005, 0.262), pol(TAU * (i + 0.5) / 24, R0 - 0.005, 0.3), 0.002, 4, DARK, 0.8, 0.0, False)
    # Thin owner stripes, plating bands and rows of cabin lights.
    band(0.208, 0.214, R0, PAINT, 1.0, Matrix(), 48)
    band(-0.236, -0.228, R0, PAINT, 1.0, Matrix(), 48)
    for z in (ZA + 0.04, 0.22, 0.315):
        band(z - 0.004, z + 0.004, R0, DARK, 0.8, Matrix(), 48, 0.004)
    for z, n, skip in ((0.16, 44, 0.35), (0.137, 44, 0.5), (0.02, 40, 0.6), (-0.03, 40, 0.7), (-0.15, 40, 0.55), (-0.275, 36, 0.7)):
        windows(rnd.random(), n, TAU / n, R0, z, 0.0042, 0.007, Matrix(), skip)
    # Hull fittings: lockers, hatches, vents.
    for _ in range(54):
        a, z = rnd.random() * TAU, rnd.uniform(-0.3, 0.19)
        w, l, h = rnd.uniform(0.01, 0.028), rnd.uniform(0.012, 0.045), rnd.uniform(0.003, 0.01)
        box((l, w, h), radial(a, R0 + h / 2 - 0.001, z), DARK if rnd.random() < 0.55 else HULL, rnd.uniform(0.7, 1.0), 0.0012)
    # Pipe runs along the hull, with a jog part way.
    for _ in range(10):
        a, z0 = rnd.random() * TAU, rnd.uniform(-0.3, -0.05)
        z1, da = z0 + rnd.uniform(0.12, 0.3), rnd.choice((-1, 1)) * 0.08
        zm, r = (z0 + z1) / 2, R0 + 0.0035
        pipe([pol(a, r, z0), pol(a, r, zm - 0.01), pol(a + da, r, zm + 0.01), pol(a + da, r, min(z1, 0.2))], 0.0022, DARK, 0.95)
    # Catwalks: a rail along the hull on posts.
    for a in (D(95), D(188), D(275), D(5)):
        strut(pol(a, R0 + 0.012, -0.21), pol(a, R0 + 0.012, 0.19), 0.0022, DARK, 0.9)
        for i in range(14):
            z = -0.21 + i * 0.4 / 13
            strut(pol(a, R0, z), pol(a, R0 + 0.012, z), 0.0016, DARK, 0.9)

    # Bow: a neck and the hard point where a yard attaches, with a recessed port.
    lathe([(ZF, 0), (ZF, 0.052), (0.392, 0.052), (0.396, 0.084), (0.42, 0.084), (0.42, 0.064), (0.409, 0.058), (0.409, 0.03), (0.415, 0.03), (0.415, 0)], Matrix(), 28, DARK, 0.9, 0.0025)
    band(0.403, 0.411, 0.084, PAINT, 1.0, Matrix(), 28)
    for k in range(8):
        box((0.004, 0.012, 0.018), radial(TAU * k / 8, 0.046, 0.411) @ Matrix.Rotation(math.pi / 2, 4, 'Y'), HULL, 0.9, 0.0, False)
    # The first hull's solar wings, still in use.
    for s in (-1, 1):
        o = Vector((s * math.cos(D(100)), s * math.sin(D(100)), 0))
        strut(Vector((0, 0, 0.376)) + o * 0.05, Vector((0, 0, 0.376)) + o * 0.5, 0.005)
        n = o.cross(Vector((0, 0, 1)))
        M0 = Matrix((Vector((0, 0, 1)), o, n)).transposed().to_4x4()
        for i in range(4):
            if s < 0 and i == 3:
                continue  # one panel short on this side
            m = M0.copy()
            m.translation = Vector((0, 0, 0.376)) + o * (0.13 + i * 0.094)
            m = m @ Matrix.Rotation(0.5, 4, 'Y')
            box((0.085, 0.088, 0.002), m, SOLAR, 1.0, 0.0, False)
            box((0.089, 0.003, 0.0035), m, DARK, 0.7, 0.0, False)

    # Aft: a cone down to the keel truss, the tank farm, the shield, reactor and radiators.
    lathe([(ZA - 0.045, 0), (ZA - 0.045, 0.058), (ZA, 0.08), (ZA, 0)], Matrix(), 24, DARK, 0.85, 0.003)
    truss((0, 0, ZA - 0.045), (0, 0, -0.75), 0.095, 5, 0.006, (1, 1, 0))
    cyl((0, 0, ZA - 0.045), (0, 0, -0.60), 0.018, 10, HULL, 0.8, 0.0, False)  # the pressurised tunnel aft
    for a, r, paint, tint in ((D(112), 0.08, False, 0.98), (D(163), 0.066, True, 0.86), (D(288), 0.075, False, 0.92), (D(338), 0.06, False, 1.02)):
        p = pol(a, 0.058 + r, -0.485 + (r - 0.07) * 1.2)
        tank(p, r, tint, True, paint)
        strut(pol(a, 0.045, p.z - 0.03), p, 0.005)
        strut(pol(a, 0.045, p.z + 0.03), p, 0.005)
        pipe([p + Vector((0, 0, r * 0.98)), p + Vector((0, 0, r + 0.025)), pol(a, 0.03, p.z + r + 0.035)], 0.0028)
    for a in (D(60), D(235)):  # long tanks of another make
        can(pol(a, 0.105, -0.6), (0, 0, 1), 0.036, 0.15, 0.8, 16, 1, 0, a > 3)
        strut(pol(a, 0.045, -0.53), pol(a, 0.075, -0.53), 0.005)
    lathe([(-0.627, 0), (-0.627, 0.135), (-0.612, 0.15), (-0.604, 0.15), (-0.604, 0)], Matrix(), 32, DARK, 0.7, 0.003)  # shadow shield
    lathe([(-0.745, 0), (-0.745, 0.05), (-0.735, 0.064), (-0.66, 0.064), (-0.645, 0.05), (-0.627, 0.05), (-0.627, 0)], Matrix(), 24, DARK, 0.9, 0.003)  # reactor
    for k in range(10):
        box((0.07, 0.004, 0.012), radial(TAU * k / 10, 0.066, -0.70), DARK, 0.7, 0.0, False)
    for k in range(12):  # shield ribs, aft face
        box((0.005, 0.006, 0.082), radial(TAU * k / 12, 0.094, -0.629) @ Matrix.Rotation(math.pi / 2, 4, 'Y'), DARK, 0.9, 0.0, False)
    for a, reach in ((D(35), 0.58), (D(215), 0.44)):
        o = Vector((math.cos(a), math.sin(a), 0))
        radiator(Vector((0, 0, -0.47)) + o * 0.055, o, (0, 0, 1), reach, 0.25, 5, 0.0035)
        strut(Vector((0, 0, -0.37)) + o * 0.045, Vector((0, 0, -0.42)) + o * (reach * 0.7), 0.0035)
        light(Vector((0, 0, -0.47)) + o * (reach + 0.08), NAV_G if a < 3 else NAV_R, 0.006)

    # Modules grafted on over the years: different makers, different sizes, nothing quite square.
    grafts = [  # angle, radius, z0, length, tint, lit panes, paint, lean
        (D(22), 0.052, -0.2, 0.3, 0.74, 7, False, 0.05),
        (D(213), 0.066, -0.3, 0.28, 0.95, 9, True, -0.035),
        (D(117), 0.046, 0.0, 0.28, 1.0, 6, False, 0.0),
        (D(300), 0.058, -0.14, 0.34, 0.68, 8, True, 0.06),
        (D(72), 0.034, -0.3, 0.2, 0.9, 0, False, -0.08),
        (D(165), 0.03, -0.28, 0.2, 1.02, 0, False, 0.0),
    ]
    for a, r, z0, L, tint, win, paint, lean in grafts:
        d = Vector((-math.sin(a) * lean, math.cos(a) * lean, 1))
        c = pol(a, R0 + r + 0.012, z0)
        can(c, d, r, L, tint, 20, 2 if L > 0.25 else 1, win, paint)
        for f in (0.3, 0.7):  # saddles onto the old hull
            box((r * 0.9, r * 0.9, 0.034), radial(a, R0 + 0.008, z0 + L * f) @ Matrix.Translation((0, -lean * L * (f - 0.0), 0)), DARK, 0.8, 0.002)
    # A small radiator pair on the biggest of them.
    c = pol(D(213), R0 + 0.066 + 0.012, -0.16)
    for s in (-1, 1):
        t = Vector((-math.sin(D(213)), math.cos(D(213)), 0)) * s
        radiator(c + t * 0.066, t, (0, 0, 1), 0.09, 0.1, 2, 0.003)
    # A boxy workshop block, the odd one out.
    Mw = radial(D(160), R0 + 0.035, 0.12)
    box((0.15, 0.09, 0.07), Mw, HULL, 0.78, 0.004)
    box((0.05, 0.092, 0.012), Mw @ Matrix.Translation((0.03, 0, 0.036)), PAINT, 1.0, 0.0015)
    box((0.06, 0.05, 0.03), Mw @ Matrix.Translation((-0.03, 0.0, 0.045)), DARK, 0.8, 0.002)
    for i in range(4):
        box((0.01, 0.006, 0.003), Mw @ Matrix.Translation((-0.055 + i * 0.022, 0.03, 0.0355)), WINDOW, 1, 0, False)

    # An old hauler, drive long gone, moored for good and lived in.
    ah = D(338)
    hd = Vector((math.cos(ah) * 0.14, math.sin(ah) * 0.14, 1))
    hp = pol(ah, 0.25, -0.06)
    Mh = can(hp, hd, 0.05, 0.36, 0.7, 20, 3, 9, True, 0.55)
    lathe([(-0.05, 0.03), (-0.05, 0.046), (-0.002, 0.05), (-0.002, 0.03)], Mh, 16, DARK, 0.7, 0.0, True)  # the empty thrust frame
    lathe(drum(-0.012, -0.004, 0.03), Mh, 12, DARK, 0.45, 0.0, False)
    lathe([(0.36, 0), (0.36, 0.022), (0.4, 0.016), (0.4, 0)], Mh, 12, HULL, 0.8, 0.002)  # the old flight deck
    windows(0, 5, 0.5, 0.0195, 0.385, 0.004, 0.012, Mh, 0)
    for z in (0.02, 0.2):
        p = Mh @ Vector((0, 0, z + 0.06))
        cyl(pol(ah, R0 - 0.01, p.z), p, 0.016, 10, HULL, 0.85, 0.0, True)
    for s in (-1, 1):
        t = Vector((-math.sin(ah), math.cos(ah), 0)) * s
        radiator(Mh @ Vector((0, 0, 0.1)) + t * 0.05, t, hd, 0.07, 0.12, 3, 0.003)

    # Docking arms: a tunnel and rails out to a collar, each a different length.
    for a, z, R in PORTS:
        d = Vector((math.cos(a), math.sin(a), 0))
        p0, p1 = pol(a, R0 - 0.01, z), pol(a, R - 0.05, z)
        cyl(p0, p1, 0.019, 12, HULL, 0.82, 0.0, True)
        t = d.cross(Vector((0, 0, 1)))
        for off in (t * 0.034, -t * 0.034, Vector((0, 0, 0.034)), Vector((0, 0, -0.034))):
            strut(p0 + off, p1 + off, 0.0045)
        n = max(2, int((R - R0) / 0.05))
        for i in range(n + 1):
            q = p0 + (p1 - p0) * (i / n)
            lathe([(-0.0025, 0.027), (-0.0025, 0.05), (0.0025, 0.05), (0.0025, 0.027)], at(q, d, 0.785), 4, DARK, 0.75, 0.0, False)
        if R > 0.6:  # a way station part way along the longer arms
            q = p0 + (p1 - p0) * 0.55
            sphere(q, 0.042, HULL, 0.9, 20, 12)
            lathe(drum(-0.004, 0.004, 0.046), at(q, d), 20, DARK, 0.8, 0.0, False)
            windows(0.2, 8, TAU / 8, 0.0405, 0.012, 0.005, 0.005, at(q, d), 0.25)
        M = at(pol(a, R - 0.05, z), d)
        lathe([(0, 0), (0, 0.036), (0.008, 0.046), (0.034, 0.046), (0.034, 0.06), (0.044, 0.06), (0.044, 0.032), (0.05, 0.032), (0.05, 0)], M, 20, HULL, 0.9, 0.002)
        band(0.016, 0.021, 0.046, PAINT, 1.0, M, 20, 0.0018)
        lathe(drum(0.044, 0.052, 0.028), M, 16, DARK, 0.5, 0.0, False)
        windows(0.4, 6, TAU / 6, 0.046, 0.027, 0.005, 0.005, M, 0.3)
        light(pol(a, R - 0.011, z + 0.063), NAV_G if math.cos(a) > 0 else NAV_R, 0.006)

    # Cargo: a spine of containers alongside, left where they were unloaded.
    ac, rc = D(240), 0.42
    for z in (-0.32, -0.04):
        cyl(pol(ac, R0 - 0.01, z), pol(ac, rc, z), 0.013, 8, HULL, 0.8, 0.0, True)
        strut(pol(ac, R0, z + 0.07), pol(ac, rc, z), 0.0045)
    w = 0.036
    truss(pol(ac, rc, -0.56), pol(ac, rc, 0.09), w, 9, 0.0045, (math.cos(ac), math.sin(ac), 0))
    cs, cl, g = 0.034, 0.05, 0.006
    for side in range(3):
        for layer in range(2):
            for iz in range(11):
                if rnd.random() < (0.16 if layer == 0 else 0.5):
                    continue
                off = w / 2 + cs / 2 + 0.004 + layer * (cs + g)
                y, zo = ((off, 0), (-off, 0), (0, off))[side]
                m = radial(ac, rc, -0.535 + iz * (cl + g)) @ Matrix.Translation((0, y, zo))
                k = rnd.random()
                box((cl, cs, cs), m, PAINT if k < 0.12 else DARK if k < 0.4 else HULL, rnd.uniform(0.5, 1.0), 0.0012)
                box((cl * 0.9, cs * 0.12, cs * 1.03), m, DARK, 0.7, 0.0, False)
    light(pol(ac, rc, 0.1), STROBE, 0.006)

    # Comms: a mast with the main dish, a small dish and whips.
    m0, m1 = pol(D(150), R0 - 0.01, 0.238), pol(D(150), 0.38, 0.35)
    truss(m0, m1, 0.028, 5, 0.0035, (0, 0, 1))
    dish(m1, (-0.55, 0.45, 0.7), 0.1)
    light(m1 + Vector((0, 0, -0.03)), STROBE, 0.007)
    s0 = pol(D(265), R0, 0.3)
    s1 = s0 + Vector((-0.02, -0.09, 0.05))
    strut(s0, s1, 0.004)
    dish(s1, (-0.2, -0.7, 0.6), 0.045)
    for a, z, d, L in ((D(80), 0.31, (0.2, 1, 0.5), 0.22), (D(280), -0.33, (0.1, -1, -0.4), 0.16), (D(190), 0.32, (-1, -0.2, 0.6), 0.14), (D(20), 0.33, (1, 0.1, 0.9), 0.1)):
        p = pol(a, R0 - 0.02, z)
        cyl(p, p + Vector(d).normalized() * L, 0.0015, 4, DARK, 0.9, 0.0, False)
    # Attitude jets fore and aft.
    for z in (ZA + 0.07, 0.235):
        for k in range(4):
            M = radial(TAU * k / 4 + 0.39, R0 + 0.005, z)
            box((0.02, 0.02, 0.014), M, DARK, 0.85, 0.0015)
            for o in ((0.013, 0, 0.004), (-0.013, 0, 0.004), (0, 0.013, 0.004), (0, -0.013, 0.004)):
                box((0.006, 0.006, 0.006), M @ Matrix.Translation(o), DARK, 0.5, 0.0, False)
    light((0, 0, -0.75), STROBE, 0.007)


# Docking arms: angle, z, reach. HOLD_PORTS in gfx/stations.js must match these.
PORTS = [(math.radians(45), 0.215, 0.58), (math.radians(135), -0.13, 0.7), (math.radians(232), 0.19, 0.5), (math.radians(318), -0.24, 0.62)]


# ---- Blender plumbing -----------------------------------------------------------
def scene():
    if bpy.app.background or not bpy.context.window:
        return bpy.context.scene
    sc = bpy.data.scenes.get(NAME) or bpy.data.scenes.new(NAME)
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
                                    f[b.kind], f[b.tint], f[b.bake] = g[b.kind], g[b.tint], g[b.bake]
                                    break
            for f in bm.faces:
                f.smooth = True
        else:
            for e in bm.edges:
                if len(e.link_faces) == 2 and e.calc_face_angle(0) > math.radians(38):
                    e.smooth = False
        me = bpy.data.meshes.new(f'{NAME}_{bevel}')
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
    ob.name = NAME
    ob.data.name = NAME
    return ob


def pack_colour(ob):
    """kind, tint into a colour attribute (r = kind / 15, g = tint / 2), which glTF carries."""
    me = ob.data
    kind = [0.0] * len(me.polygons)
    tint = kind[:]
    me.attributes['kind'].data.foreach_get('value', kind)
    me.attributes['tint'].data.foreach_get('value', tint)
    col = me.color_attributes.get('Col') or me.color_attributes.new('Col', 'FLOAT_COLOR', 'CORNER')
    out = []
    for p in me.polygons:
        out += [kind[p.index] / 15, tint[p.index] / 2, 0.0, 1.0] * p.loop_total
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
        sc.world = bpy.data.worlds.new(NAME)
    sc.world.light_settings.distance = 0.22
    mat = bpy.data.materials.get(NAME + '_bake')
    if mat:
        bpy.data.materials.remove(mat)
    mat = bpy.data.materials.new(NAME + '_bake')
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
        im = image(f'{NAME}_{kind}')
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
    final = image(NAME + '_bake')
    px = np.ones((BAKE_PX, BAKE_PX, 4), dtype=np.float32)
    px[:, :, 0], px[:, :, 1], px[:, :, 2] = ao, wx, 0.0
    final.pixels.foreach_set(px.ravel())
    final.update()
    return final


def export(ob, im):
    os.makedirs(OUT, exist_ok=True)
    if im:
        im.scale(OUT_PX, OUT_PX)  # baked large, shipped small: the shade is soft
        im.filepath_raw = os.path.join(OUT, 'holds-station-bake.webp')
        im.file_format = 'WEBP'
        im.save(quality=82)
    ob.data.materials.clear()
    bpy.ops.object.select_all(action='DESELECT')
    ob.select_set(True)
    bpy.context.view_layer.objects.active = ob
    bpy.ops.export_scene.gltf(
        filepath=os.path.join(OUT, 'holds-station.glb'), export_format='GLB', use_selection=True, export_yup=False,
        export_apply=True, export_normals=True, export_texcoords=True, export_materials='NONE',
        export_vertex_color='ACTIVE', export_active_vertex_color_when_no_material=True, export_all_vertex_colors=False,
        export_attributes=False, export_meshopt_compression_enable=True, export_meshopt_extension='EXT_meshopt_compression', export_animations=False, export_skins=False, export_morph=False,
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
        sc.world = bpy.data.worlds.new(NAME)
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
    pal = {HULL: (0.62, 0.63, 0.65), DARK: (0.2, 0.21, 0.23), PAINT: (0.7, 0.66, 0.2), WINDOW: (1, 0.75, 0.35), NAV_R: (1, 0.1, 0.05), NAV_G: (0.1, 1, 0.3), STROBE: (1, 1, 1), RAD: (0.85, 0.83, 0.8), SOLAR: (0.05, 0.08, 0.2)}
    col = me.color_attributes.get('Pre') or me.color_attributes.new('Pre', 'FLOAT_COLOR', 'CORNER')
    out = []
    for p in me.polygons:
        c = pal.get(int(round(kind[p.index])), (1, 0, 1))
        t = tint[p.index] if kind[p.index] < 2.5 or kind[p.index] > 7.5 else 1
        out += [c[0] * t, c[1] * t, c[2] * t, 1.0] * p.loop_total
    col.data.foreach_set('color', out)
    mat = bpy.data.materials.new(NAME + '_pre')
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
    for i, (az, el, dist, tgt) in enumerate(((0.9, 0.35, 3.3, (0, 0, -0.15)), (3.6, 0.5, 3.3, (0, 0, -0.15)), (1.9, 0.2, 1.3, (0, 0, 0.15)))):
        t = Vector(tgt)
        cam.location = t + Vector((math.cos(az) * math.cos(el), math.sin(el), math.sin(az) * math.cos(el))) * dist
        cam.rotation_euler = (t - cam.location).to_track_quat('-Z', 'Y').to_euler()
        sc.render.filepath = os.path.join(outdir, f'{NAME}_{i}.png')
        bpy.ops.render.render(write_still=True)
    me.materials.clear()


ob = bpy.data.objects.get(NAME)
im = bpy.data.images.get(NAME + '_bake')
if 'build' in STEPS:
    rnd.seed(11)
    build()
    ob = finish()
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
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT, 'tools', 'blender', 'out', NAME + '.blend'))
result = {'verts': len(ob.data.vertices), 'tris': sum(len(p.vertices) - 2 for p in ob.data.polygons), 'steps': list(STEPS)}
