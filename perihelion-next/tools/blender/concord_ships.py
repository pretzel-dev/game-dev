# The Meridian Concord's ships: slab armour, chisel prows, casemates, short
# thick radiators, the drive in a squared housing.
#
# Run from perihelion-next/ (Blender 5.x):
#   /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup --python tools/blender/concord_ships.py
# Writes src/assets/concord-ships.glb and its shade map. See holds_ships.py for the layout.
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kit import *

V = Vector
T = Matrix.Translation
SPACING = 1.6
LOD = [0.02, 0.034, 0.034, 0.05, 0.045, 0.04]


def drive(w, h, d, R, L, rad=0.0):
    """The drive in a squared, shrouded housing behind a slab shadow shield. Returns (z forward of the shield, torch start)."""
    noz = bell(0, R, L)
    box((w, h, d), T((0, 0, d / 2 + 0.004)), HULL, 0.8, 0.006)
    box((w * 0.8, h * 0.8, 0.012), T((0, 0, 0)), DARK, 0.7, 0.002)  # thrust plate
    sl = L * 0.36
    for s in (-1, 1):  # shroud slabs round the throat
        wedge((w, 0.008, sl), T((0, s * (h / 2 - 0.004), -sl / 2 + 0.004)) @ Matrix.Rotation(math.pi, 4, 'Y'), 0.86, 1.0, HULL, 0.76, 0.002)
        wedge((0.008, h, sl), T((s * (w / 2 - 0.004), 0, -sl / 2 + 0.004)) @ Matrix.Rotation(math.pi, 4, 'Y'), 1.0, 0.86, HULL, 0.76, 0.002)
        for f in (-0.3, 0.3):  # access panels on the housing
            box((0.003, h * 0.5, d * 0.22), T((s * (w / 2 + 0.001), 0, d / 2 + f * d)), DARK, 0.85, 0.0, False)
        if rad:  # short, thick radiator slabs
            box((rad, 0.012, d * 0.9), T((s * (w / 2 + rad / 2), 0, d / 2)), RAD, 0.95, 0.002)
            box((0.008, 0.02, d * 0.94), T((s * (w / 2 + rad), 0, d / 2)), DARK, 0.8, 0.002)
    box((w * 1.08, h * 1.08, 0.012), T((0, 0, d + 0.012)), DARK, 0.75, 0.003)  # shadow shield
    return d + 0.02, noz


def citadel(w, h, L, z0, stripe=0.22, plates=3):
    """An armoured block: the hull, dorsal and keel slabs, belt plates, a stripe of the owner's paint down its back."""
    z = z0 + L / 2
    box((w, h, L), T((0, 0, z)), HULL, 0.88, 0.007)
    box((w * 0.74, 0.012, L * 0.92), T((0, h / 2 + 0.004, z)), HULL, 0.98, 0.003)
    box((w * stripe, 0.004, L * 0.86), T((0, h / 2 + 0.011, z)), PAINT, 1.0, 0.0, True)
    box((w * 0.74, 0.012, L * 0.92), T((0, -h / 2 - 0.004, z)), HULL, 0.74, 0.003)
    pl = L * 0.86 / plates
    for s in (-1, 1):
        for i in range(plates):
            box((0.012, h * 0.66, pl * 0.94), T((s * (w / 2 + 0.004), 0, z0 + L * 0.07 + pl * (i + 0.5))), HULL, rnd.uniform(0.8, 0.94), 0.003)


def prow(w, h, L, z0, fw, fh, stripe=0.22):
    """A chisel prow from z0, the stripe carried down its back."""
    wedge((w, h, L), T((0, 0, z0 + L / 2)), fw, fh, HULL, 0.92, 0.006)
    a, b = 0.08, 0.84
    ya, yb = (h / 2) * (1 + (fh - 1) * a), (h / 2) * (1 + (fh - 1) * b)
    wa, wb = w * stripe * (1 + (fw - 1) * a), w * stripe * (1 + (fw - 1) * b)
    wedge((wa, 0.004, L * (b - a)), T((0, ya + 0.0015, z0 + L * (a + b) / 2)), wb / wa, 1.0, PAINT, 1.0, 0.0, 0.0, yb - ya)


def conn(w, c, win=True):
    """The conn: a low armoured house with a strip of window forward."""
    c = V(c)
    box((w, w * 0.45, w), T(c), HULL, 0.92, 0.003)
    if win:
        box((w * 0.8, w * 0.1, 0.003), T(c + V((0, w * 0.06, w / 2 + 0.001))), WINDOW, 1, 0, False)


def ports(x, y, z0, z1, n, sides=(-1, 1)):
    for i in range(n):
        z = z0 + (z1 - z0) * i / max(1, n - 1)
        for s in sides:
            box((0.002, 0.006, 0.01), T((s * x, y, z)), WINDOW, 1, 0, False)


def mast(z, L=0.03, r=0.006):
    cyl((0, 0, z), (0, 0, z + L), r, 6, DARK, 0.9, 0.0, False)


def corvette():
    """One small chisel, no radiators to speak of."""
    z, noz = drive(0.086, 0.06, 0.05, 0.034, 0.075)
    citadel(0.092, 0.056, 0.14, z, 0.24, 2)
    prow(0.092, 0.056, 0.14, z + 0.14, 0.18, 0.3, 0.24)
    box((0.05, 0.004, 0.05), T((0, -0.04, z + 0.04)), RAD, 0.9, 0.0, True)
    conn(0.03, (0, 0.042, z + 0.05))
    pdc((0, 0.038, z + 0.115))
    mast(z + 0.275)
    for s in (-1, 1):
        rcs((s * 0.054, 0, z + 0.125), (s, 0, 0))
        rcs((s * 0.05, 0, z + 0.01), (s, 0, 0))
    nav((-0.05, 0.02, z + 0.07), (0.05, 0.02, z + 0.07), (0, -0.04, z + 0.1))
    return noz


def frigate():
    """The line ship. Torpedo casemates on both beams."""
    z, noz = drive(0.13, 0.1, 0.09, 0.05, 0.11, 0.05)
    box((0.06, 0.06, 0.1), T((0, 0, z + 0.05)), DARK, 0.9, 0.004)  # neck
    for s in (-1, 1):
        capsule((s * 0.054, 0, z + 0.004), (0, 0, 1), 0.026, 0.092, HULL, 1.0, 14)
        box((0.07, 0.012, 0.02), T((s * 0.04, 0, z + 0.05)), DARK, 0.8, 0.002)
    m = z + 0.1
    citadel(0.15, 0.09, 0.25, m)
    prow(0.15, 0.09, 0.14, m + 0.25, 0.28, 0.3)
    for s in (-1, 1):
        tubes((s * 0.105, 0, m + 0.185), 2, 2, 0.0085, 0.09)
        box((0.05, 0.05, 0.02), T((s * 0.1, 0, m + 0.13)), DARK, 0.8, 0.002)
    conn(0.05, (0, 0.066, m + 0.05))
    pdc((0, 0.06, m + 0.19))
    pdc((0, -0.058, m + 0.09), (0, -1, 0))
    mast(m + 0.385, 0.04, 0.007)
    for s in (-1, 1):
        rcs((s * 0.087, 0.03, m + 0.02), (s, 0, 0))
        rcs((s * 0.072, 0, z - 0.01), (s, 0, 0))
    ports(0.0825, 0.02, m + 0.06, m + 0.12, 3)
    nav((-0.09, 0, m + 0.1), (0.09, 0, m + 0.1), (0, 0.082, m + 0.05))
    return noz


def escort():
    """A stubby brick with point-defence blisters on every face."""
    z, noz = drive(0.17, 0.12, 0.09, 0.052, 0.1, 0.04)
    citadel(0.2, 0.13, 0.3, z, 0.16)
    prow(0.2, 0.13, 0.1, z + 0.3, 0.6, 0.55, 0.16)
    for zz in (0.05, 0.15, 0.25):
        for x, y in ((0.075, 0.075), (-0.075, 0.075), (0.075, -0.075), (-0.075, -0.075), (0.115, 0), (-0.115, 0)):
            box((0.042, 0.042, 0.05), T((x * 0.94, y * 0.94, z + zz)), HULL, 0.8, 0.003)
            blister((x * 1.08, y * 1.08, z + zz), 1.35)
    box((0.012, 0.04, 0.012), T((0, 0.09, z + 0.2)), DARK, 0.9, 0.0, False)  # fire-control array
    box((0.07, 0.034, 0.006), T((0, 0.12, z + 0.2)), HULL, 0.9, 0.0015)
    box((0.05, 0.006, 0.003), T((0, 0.036, z + 0.4)), WINDOW, 1, 0, False)
    for s in (-1, 1):
        rcs((s * 0.092, 0.05, z + 0.01), (s, 0, 0))
        rcs((s * 0.074, -0.03, z + 0.36), (s, 0, 0))
    nav((-0.11, 0.03, z + 0.2), (0.11, 0.03, z + 0.2), (0, 0.14, z + 0.2))
    return noz


def battleship():
    """A stepped citadel between twin spinal rails that run out past the prow."""
    z, noz = drive(0.28, 0.17, 0.15, 0.08, 0.17)
    for s in (-1, 1):
        bell(0, 0.04, 0.08, 14, 0.45, 1.5, 0.65, (s * 0.1, 0))
    box((0.2, 0.15, 0.3), T((0, 0, z + 0.15)), HULL, 0.84, 0.006)
    box((0.14, 0.012, 0.27), T((0, 0.079, z + 0.15)), HULL, 0.8, 0.003)
    for s in (-1, 1):
        for i in range(3):  # thick radiator slabs between armoured ribs
            box((0.075, 0.014, 0.08), T((s * 0.137, 0, z + 0.05 + i * 0.1)), RAD, 0.95, 0.002)
            box((0.085, 0.05, 0.012), T((s * 0.14, 0, z + 0.004 + i * 0.1)), HULL, 0.8, 0.003)
    m = z + 0.3
    citadel(0.3, 0.17, 0.42, m, 0.14, 4)
    box((0.12, 0.014, 0.26), T((0, 0.104, m + 0.2)), HULL, 0.9, 0.003)  # second layer of deck armour
    box((0.03, 0.004, 0.24), T((0, 0.112, m + 0.2)), PAINT, 1.0, 0.0, True)
    conn(0.07, (0, 0.125, m + 0.1))
    for s in (-1, 1):
        for i in range(3):  # casemates
            box((0.05, 0.07, 0.085), T((s * 0.18, 0, m + 0.075 + i * 0.135)), HULL, 0.9, 0.004)
            for e in (-1, 1):
                box((0.007, 0.007, 0.08), T((s * 0.19, e * 0.015, m + 0.14 + i * 0.135)), DARK, 0.6, 0.0, False)
    f = m + 0.42
    citadel(0.2, 0.14, 0.16, f, 0.2, 2)
    prow(0.2, 0.14, 0.15, f + 0.16, 0.3, 0.35, 0.2)
    for s in (-1, 1):  # the rails
        box((0.046, 0.06, 0.44), T((s * 0.128, 0, f + 0.19)), HULL, 0.78, 0.004)
        box((0.05, 0.016, 0.44), T((s * 0.128, 0, f + 0.2)), DARK, 0.55, 0.0015)
        for i in range(4):
            box((0.058, 0.072, 0.02), T((s * 0.128, 0, f + 0.05 + i * 0.115)), DARK, 0.85, 0.002)
        box((0.06, 0.03, 0.03), T((s * 0.09, 0, f + 0.2)), DARK, 0.8, 0.002)
    turret((0, 0.112, m + 0.3), (0, 1, 0), 1.6)
    turret((0, 0.082, f + 0.08), (0, 1, 0), 1.4)
    turret((0, -0.097, m + 0.2), (0, -1, 0), 1.6)
    for sx in (-1, 1):  # missile cells
        for i in range(3):
            for j in range(5):
                box((0.01, 0.002, 0.01), T((sx * 0.07 + (i - 1) * 0.014, 0.1, m + 0.33 + (j - 2) * 0.014)), DARK, rnd.uniform(0.45, 0.75), 0.0, False)
    for x, y, zz in ((0.11, 0.092, 0.02), (-0.11, 0.092, 0.02), (0.11, -0.092, 0.4), (-0.11, -0.092, 0.4)):
        pdc((x, y, m + zz), (0, 1 if y > 0 else -1, 0))
    for s in (-1, 1):
        rcs((s * 0.16, 0.06, m + 0.4), (s, 0, 0))
        rcs((s * 0.108, 0.05, z + 0.02), (s, 0, 0))
    ports(0.1025, 0.03, f + 0.04, f + 0.12, 4)
    ports(0.1525, 0.05, m + 0.05, m + 0.37, 9)
    nav((-0.16, 0.07, m + 0.2), (0.16, 0.07, m + 0.2), (0, 0.15, m + 0.1))
    return noz


def tender():
    """Four big tanks in an armoured cradle, a fuelling boom to starboard."""
    z, noz = drive(0.15, 0.12, 0.09, 0.055, 0.11, 0.045)
    tz = z + 0.2
    for sx in (-1, 1):
        for sy in (-1, 1):
            capsule((sx * 0.068, sy * 0.068, tz - 0.185), (0, 0, 1), 0.064, 0.37, HULL, 1.0, 20)
    box((0.05, 0.05, 0.4), T((0, 0, tz)), DARK, 0.85, 0.003)
    box((0.19, 0.012, 0.26), T((0, 0.134, tz)), HULL, 0.95, 0.003)
    box((0.045, 0.004, 0.24), T((0, 0.141, tz)), PAINT, 1.0, 0.0, True)
    box((0.19, 0.012, 0.26), T((0, -0.134, tz)), HULL, 0.78, 0.003)
    for e in (-0.11, 0.11):  # cradle frames
        for s in (-1, 1):
            box((0.28, 0.014, 0.014), T((0, s * 0.133, tz + e)), DARK, 0.8, 0.002)
            box((0.014, 0.28, 0.014), T((s * 0.133, 0, tz + e)), DARK, 0.8, 0.002)
    c = z + 0.4
    citadel(0.14, 0.1, 0.15, c, 0.22, 2)
    prow(0.14, 0.1, 0.07, c + 0.15, 0.55, 0.5)
    box((0.04, 0.04, 0.04), T((0.085, 0.01, c + 0.05)), DARK, 0.8, 0.003)
    j0 = V((0.085, 0.01, c + 0.05))
    j1 = j0 + V((1, 0.12, 0.5)).normalized() * 0.22
    beam(j0, j1, 0.013, HULL, 0.85)
    box((0.03, 0.03, 0.04), T(j1), DARK, 0.8, 0.002)
    cyl(j1 + V((0, 0, 0.015)), j1 + V((0, 0, 0.085)), 0.007, 8, HULL, 0.9, 0.0, False)
    box((0.04, 0.006, 0.003), T((0, 0.036, c + 0.2)), WINDOW, 1, 0, False)
    for s in (-1, 1):
        rcs((s * 0.082, 0, c + 0.13), (s, 0, 0))
        rcs((s * 0.087, 0, z - 0.01), (s, 0, 0))
    nav((-0.14, 0, tz), (0.14, 0, tz), j1 + V((0, 0.022, 0)))
    return noz


def freighter():
    """Armoured container rows down a box keel."""
    z, noz = drive(0.13, 0.1, 0.08, 0.048, 0.1, 0.04)
    box((0.045, 0.05, 0.68), T((0, 0, z + 0.34)), DARK, 0.9, 0.003)
    for i in range(6):
        for s in (-1, 1):
            c = V((s * 0.064, 0, z + 0.06 + i * 0.111))
            tint = rnd.uniform(0.7, 1.0)
            box((0.078, 0.1, 0.098), T(c), HULL, tint, 0.004)
            box((0.004, 0.08, 0.08), T(c + V((s * 0.039, 0, 0))), PAINT if (i + (1 if s > 0 else 0)) % 3 == 1 else DARK, 0.9, 0.0, True)
            for e in (-1, 1):
                box((0.08, 0.004, 0.09), T(c + V((0, e * 0.05, 0))), DARK, 0.8, 0.0, False)
    box((0.05, 0.008, 0.66), T((0, 0.056, z + 0.34)), HULL, 0.85, 0.002)
    c = z + 0.68
    box((0.12, 0.09, 0.1), T((0, 0, c + 0.05)), HULL, 0.9, 0.006)
    box((0.03, 0.004, 0.09), T((0, 0.046, c + 0.05)), PAINT, 1.0, 0.0, True)
    prow(0.12, 0.09, 0.06, c + 0.1, 0.55, 0.5)
    box((0.04, 0.006, 0.003), T((0, 0.03, c + 0.16)), WINDOW, 1, 0, False)
    for s in (-1, 1):
        rcs((s * 0.068, 0, c + 0.08), (s, 0, 0))
        rcs((s * 0.072, 0.03, z - 0.01), (s, 0, 0))
    nav((-0.105, 0, z + 0.34), (0.105, 0, z + 0.34), (0, 0.064, z + 0.5))
    return noz


HULLS = [corvette, frigate, escort, battleship, tender, freighter]


def build():
    nozzles = []
    for i, f in enumerate(HULLS):
        begin(i, (i * SPACING, 0, 0), 0.0, 100 + i)
        nozzles.append(f())
        begin(i + len(HULLS), (i * SPACING, 3.0, 0), LOD[i], 100 + i)
        f()
    return {'nozzles': nozzles, 'spacing': SPACING, 'hulls': len(HULLS), 'lod_y': 3.0}


LEN = [0.4, 0.72, 0.6, 1.5, 0.95, 1.05]
run('concord_ships', 'concord-ships', build, views=[(0.5, 0.35, LEN[i] * 2.6, (i * SPACING, 0, LEN[i] * 0.38)) for i in range(6)])
