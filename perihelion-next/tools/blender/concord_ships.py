# The Meridian Concord's ships: one family of long armoured wedges. A parallel
# midbody in belt plate, a long taper to a narrow bow, stepped decks, a small
# tower well aft, the engines in a block at the stern.
#
# What gives them scale: fittings (ports, guns, plates, masts) are the same
# real size on every class, so a bigger hull simply carries more of them.
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
# Lengths as the game draws them (FRIGATE_LEN * CLASS_LEN in gfx/ships.js).
LEN = [0.40, 0.72, 0.65, 1.37, 0.90, 1.00]


def dims(L, fat=1.0):
    k = (L / 0.72) ** 0.8 * fat
    return 0.15 * k, 0.1 * k


def gun(p, s=1.0, up=1):
    turret(p, (0, up, 0), s)


def stern(L, w, h, n):
    """The engine block: bells in a row, cooling louvres, a guard frame. Returns where the torch starts."""
    d = L * 0.13
    box((w * 1.04, h * 1.06, d), T((0, 0, L * 0.02 + d / 2)), HULL, 0.78, 0.006)
    box((w * 0.9, h * 0.86, 0.01), T((0, 0, L * 0.02)), DARK, 0.7, 0.002)
    er = min(0.036, w * 0.8 / n / 2, h * 0.42)
    noz = 0
    for i in range(n):
        noz = bell(L * 0.02, er, er * 2.2, 18, 0.42, 1.6, 0.7, ((i - (n - 1) / 2) * w * 0.86 / n, 0))
    for i in range(max(2, int(d / 0.012) - 1)):
        for sx in (-1, 1):
            box((0.004, h * 0.7, 0.006), T((sx * w * 0.525, 0, L * 0.02 + 0.012 + i * 0.012)), DARK, 0.7, 0.0, False)
    zf = L * 0.02 - er * 1.5
    for sx in (-1, 1):
        beam((sx * w * 0.56, h * 0.5, zf), (sx * w * 0.56, -h * 0.5, zf), 0.006, DARK, 0.8)
        for sy in (-1, 1):
            beam((sx * w * 0.56, sy * h * 0.5, zf), (sx * w * 0.5, sy * h * 0.5, L * 0.05), 0.006, DARK, 0.8)
    box((w * 1.08, h * 1.1, 0.008), T((0, 0, L * 0.02 + d + 0.004)), DARK, 0.75, 0.002)  # shadow shield
    return noz, L * 0.02 + d + 0.008


def belt(z0, z1, w, h, ports=0.75):
    """A length of parallel hull: the box, a trench down each flank with lit ports, belt plates above and below."""
    box((w, h, z1 - z0), T((0, 0, (z0 + z1) / 2)), HULL, 0.9, 0.007)
    npl = max(1, int((z1 - z0) / 0.055))
    pl = (z1 - z0) / npl
    for sx in (-1, 1):
        box((0.004, h * 0.16, z1 - z0 - 0.012), T((sx * w * 0.5, 0, (z0 + z1) / 2)), DARK, 0.6, 0.0, True)
        for i in range(npl):
            for sy in (-1, 1):
                box((0.008, h * 0.3, pl * 0.92), T((sx * (w * 0.5 + 0.002), sy * h * 0.27, z0 + pl * (i + 0.5))), HULL, rnd.uniform(0.8, 0.98), 0.002)
        for i in range(int((z1 - z0 - 0.03) / 0.011)):
            if rnd.random() < ports:
                box((0.002, 0.004, 0.005), T((sx * (w * 0.5 + 0.003), 0, z0 + 0.02 + i * 0.011)), WINDOW, 1, 0, False)
    for sy in (-1, 1):  # deck seams
        for i in range(1, npl):
            box((w * 0.9, 0.002, 0.003), T((0, sy * (h * 0.5 + 0.0005), z0 + pl * i)), DARK, 0.7, 0.0, False)


def bow(z0, L, w, h, fw=0.2, fh=0.32):
    """The long taper to a narrow bow, with the owner's stripes and a sensor drum at the tip."""
    wedge((w, h, L - z0), T((0, 0, (z0 + L) / 2)), fw, fh, HULL, 0.93, 0.007)
    for sx in (-1, 1):
        for k, f in enumerate((0.3, 0.38)):
            z = z0 + (L - z0) * f
            box((0.004, h * 0.5 * (1 - (1 - fh) * f), 0.028 if k == 0 else 0.01), T((sx * w * 0.5 * (1 - (1 - fw) * f), 0, z)), PAINT, 1.0, 0.0, True)
        for i in range(int((L - z0) * 0.5 / 0.013)):
            f = 0.06 + i * 0.013 / (L - z0)
            if rnd.random() < 0.6 and f < 0.26:
                box((0.002, 0.004, 0.005), T((sx * (w * 0.5 * (1 - (1 - fw) * f) + 0.001), 0, z0 + (L - z0) * f)), WINDOW, 1, 0, False)
    lathe(drum(-0.012, 0.012, 0.009), at((0, 0, L - 0.003), (1, 0, 0)), 8, DARK, 0.9, 0.0, False)
    cyl((0, 0, L - 0.004), (0, 0, L + 0.03), 0.0015, 4, DARK, 0.9, 0.0, False)


def decks(L, w, h, z0, z1):
    """Stepped decks above, a shallower keel below. Returns a function giving the deck height at z."""
    c, n = (z0 + z1) / 2, z1 - z0
    wedge((w * 0.72, h * 0.2, n), T((0, h * 0.6, c)), 0.3, 0.5, HULL, 1.0, 0.004, 0, -h * 0.05)
    wedge((w * 0.42, h * 0.16, n * 0.58), T((0, h * 0.78, z0 + n * 0.32)), 0.4, 0.5, HULL, 0.9, 0.003, 0, -h * 0.04)
    wedge((w * 0.5, h * 0.22, n * 0.8), T((0, -h * 0.58, z0 + n * 0.42)), 0.3, 0.4, HULL, 0.78, 0.004, 0, h * 0.066)
    box((w * 0.14, 0.003, n * 0.3), T((0, h * 0.675, z0 + n * 0.74)), PAINT, 1.0, 0.0, True)

    def top(z):
        f = (z - z0) / n
        if f < 0.58:
            return h * 0.86 - h * 0.08 * (f / 0.58)
        return h * 0.7 - h * 0.1 * f
    return top


def tower(z, y, s=1.0):
    """The conn: small, with a strip of window forward and thin masts."""
    tw = 0.045 * s
    box((tw, 0.03 * s, tw * 1.4), T((0, y + 0.015 * s, z)), HULL, 0.96, 0.003)
    box((tw * 1.2, 0.006, tw * 1.5), T((0, y + 0.033 * s, z)), DARK, 0.8, 0.0015)
    for i in range(5):
        box((0.004, 0.003, 0.002), T(((i - 2) * 0.008 * s, y + 0.02 * s, z + tw * 0.7)), WINDOW, 1, 0, False)
    cyl((0, y + 0.03 * s, z - 0.01), (0, y + 0.03 * s + 0.13, z - 0.01), 0.002, 4, DARK, 0.9, 0.0, False)
    cyl((0.012, y + 0.03 * s, z + 0.01), (0.012, y + 0.03 * s + 0.06, z + 0.01), 0.0015, 4, DARK, 0.9, 0.0, False)
    light((0, y + 0.03 * s + 0.132, z - 0.01), STROBE, 0.005)


def running(w, z):
    light((-w * 0.52, 0, z), NAV_R, 0.005)
    light((w * 0.52, 0, z), NAV_G, 0.005)


def jets(w, h, L):
    for sx in (-1, 1):
        rcs((sx * (w * 0.5 + 0.008), h * 0.3, L * 0.17), (sx, 0, 0))
        rcs((sx * (w * 0.36), -h * 0.2, L * 0.62), (sx, 0, 0))


def warship(L, n, guns=None, fat=1.0):
    """Corvette, frigate, battleship: the same hull at three lengths."""
    w, h = dims(L, fat)
    noz, z0 = stern(L, w, h, n)
    mid = L * 0.5
    belt(z0, mid, w, h)
    bow(mid, L, w, h)
    top = decks(L, w, h, z0 + 0.01, L * 0.82)
    ng = guns if guns is not None else max(1, round(L / 0.2))
    for i in range(ng):
        z = L * 0.32 + (i * (L * 0.36 / (ng - 1)) if ng > 1 else 0)
        gun((0, top(z), z), 0.9)
        if i % 2 == 0:
            gun((0, -h * 0.69 + (z - L * 0.3) * 0.2 * h / L, z + 0.03), 0.8, -1)
    for sx in (-1, 1):
        for i in range(max(1, round(L / 0.3))):
            pdc((sx * w * 0.43, h * 0.5, L * 0.24 + i * 0.16), (0, 1, 0))
    tower(L * 0.2, h * 0.86)
    cyl((0, -h * 0.69, L * 0.3), (0, -h * 0.69 - 0.09, L * 0.3), 0.002, 4, DARK, 0.9, 0.0, False)
    jets(w, h, L)
    running(w, L * 0.4)
    return noz


def corvette():
    return warship(LEN[0], 1, 1)


def frigate():
    """The line ship, with torpedo casemates let into both flanks."""
    L = LEN[1]
    noz = warship(L, 3)
    w, h = dims(L)
    for sx in (-1, 1):
        tubes((sx * (w * 0.5 + 0.012), -h * 0.02, L * 0.44), 1, 2, 0.008, 0.07)
    return noz


def escort():
    """Stockier, and ringed with point defence."""
    L = LEN[2]
    w, h = dims(L, 1.22)
    noz = warship(L, 3, 2, 1.22)
    global K_axis
    for i in range(5):
        z = L * 0.2 + i * L * 0.075
        for sx in (-1, 1):
            for sy in (-1, 1):
                box((0.03, 0.03, 0.034), T((sx * w * 0.46, sy * h * 0.44, z)), HULL, 0.8, 0.002)
                blister((sx * w * 0.56, sy * h * 0.56, z), 1.0)
    box((0.008, 0.035, 0.008), T((0, h * 0.86 + 0.06, L * 0.3)), DARK, 0.9, 0.0, False)  # fire-control array
    box((0.06, 0.028, 0.005), T((0, h * 0.86 + 0.085, L * 0.3)), HULL, 0.9, 0.0015)
    return noz


def battleship():
    """The same hull at nearly twice the length: twin rails let into the bow, casemates, missile cells."""
    L = LEN[3]
    noz = warship(L, 5)
    w, h = dims(L)
    for sx in (-1, 1):  # spinal rails
        box((0.03, 0.036, L * 0.36), T((sx * w * 0.16, -h * 0.3, L * 0.74)), HULL, 0.74, 0.003)
        box((0.034, 0.012, L * 0.34), T((sx * w * 0.16, -h * 0.3, L * 0.75)), DARK, 0.55, 0.0015)
        for i in range(5):
            box((0.04, 0.046, 0.014), T((sx * w * 0.16, -h * 0.3, L * 0.6 + i * L * 0.075)), DARK, 0.85, 0.002)
        for i in range(4):  # casemates
            z = L * 0.2 + i * 0.1
            box((0.03, h * 0.34, 0.06), T((sx * (w * 0.5 + 0.012), -h * 0.02, z)), HULL, 0.88, 0.003)
            for e in (-1, 1):
                box((0.005, 0.005, 0.06), T((sx * (w * 0.5 + 0.02), -h * 0.02 + e * 0.012, z + 0.05)), DARK, 0.6, 0.0, False)
        for i in range(3):  # missile cells in the deck
            for j in range(6):
                box((0.008, 0.002, 0.008), T((sx * (w * 0.26 + i * 0.011), h * 0.705, L * 0.3 + j * 0.011)), DARK, rnd.uniform(0.45, 0.75), 0.0, False)
    return noz


def head(z0, L, w, h):
    """The crewed bow section of an auxiliary: a short length of belted hull, the bow and the tower."""
    zb = z0 + (L - z0) * 0.4
    belt(z0, zb, w, h, 0.6)
    bow(zb, L, w, h, 0.3, 0.4)
    box((w * 0.6, h * 0.16, zb - z0), T((0, h * 0.58, (z0 + zb) / 2)), HULL, 1.0, 0.004)
    tower(z0 + (zb - z0) * 0.5, h * 0.66, 0.9)
    pdc((0, h * 0.66, zb - 0.02))
    box((0.008, 0.008, 0.008), T((0, -h * 0.52, zb)), DARK, 0.8, 0.0, False)


def tender():
    """Four big tanks in an armoured cradle between the engines and the crewed bow, a fuelling boom to starboard."""
    L = LEN[4]
    w, h = dims(0.72)
    noz, z0 = stern(L, w, h, 3)
    z1 = L * 0.62
    box((0.05, 0.05, z1 - z0), T((0, 0, (z0 + z1) / 2)), DARK, 0.85, 0.003)
    r = 0.062
    for sx in (-1, 1):
        for sy in (-1, 1):
            M = capsule((sx * 0.066, sy * 0.066, z0 + 0.012), (0, 0, 1), r, z1 - z0 - 0.024, HULL, rnd.uniform(0.92, 1.0), 22)
            for f in (0.25, 0.5, 0.75):
                band((z1 - z0) * f - 0.004, (z1 - z0) * f + 0.004, r, DARK, 0.8, M, 22, 0.002)
    box((0.16, 0.01, (z1 - z0) * 0.8), T((0, 0.13, (z0 + z1) / 2)), HULL, 0.95, 0.003)
    box((0.03, 0.003, (z1 - z0) * 0.7), T((0, 0.1365, (z0 + z1) / 2)), PAINT, 1.0, 0.0, True)
    box((0.16, 0.01, (z1 - z0) * 0.8), T((0, -0.13, (z0 + z1) / 2)), HULL, 0.78, 0.003)
    for f in (0.12, 0.5, 0.88):  # cradle frames
        z = z0 + (z1 - z0) * f
        for s in (-1, 1):
            box((0.27, 0.012, 0.012), T((0, s * 0.129, z)), DARK, 0.8, 0.002)
            box((0.012, 0.27, 0.012), T((s * 0.129, 0, z)), DARK, 0.8, 0.002)
    head(z1, L, w * 0.92, h * 0.95)
    j0 = V((w * 0.46 + 0.01, 0.0, z1 + 0.05))
    box((0.03, 0.03, 0.03), T(j0), DARK, 0.8, 0.002)
    j1 = j0 + V((1, 0.15, 0.5)).normalized() * 0.2
    beam(j0, j1, 0.01, HULL, 0.85)
    box((0.022, 0.022, 0.03), T(j1), DARK, 0.8, 0.002)
    cyl(j1 + V((0, 0, 0.012)), j1 + V((0, 0, 0.07)), 0.005, 8, HULL, 0.9, 0.0, False)
    light(j1 + V((0, 0.018, 0)), STROBE, 0.005)
    for sx in (-1, 1):
        rcs((sx * (w * 0.5 + 0.008), h * 0.3, L * 0.1), (sx, 0, 0))
        rcs((sx * w * 0.4, 0, L * 0.86), (sx, 0, 0))
    running(0.27, (z0 + z1) / 2)
    return noz


def freighter():
    """Armoured container rows clamped down a box keel."""
    L = LEN[5]
    w, h = dims(0.72)
    noz, z0 = stern(L, w * 0.92, h, 3)
    z1 = L * 0.7
    box((0.046, 0.06, z1 - z0), T((0, 0, (z0 + z1) / 2)), DARK, 0.9, 0.003)
    box((0.05, 0.006, z1 - z0 - 0.02), T((0, 0.034, (z0 + z1) / 2)), HULL, 0.85, 0.002)
    n = int((z1 - z0 - 0.02) / 0.082)
    for i in range(n):
        z = z0 + 0.05 + i * 0.082
        for sx in (-1, 1):
            beam((sx * 0.023, 0, z - 0.041), (sx * 0.1, 0, z - 0.041), 0.005, DARK, 0.8)
            for sy in (-1, 1):
                if rnd.random() < 0.08:
                    continue
                c = V((sx * 0.062, sy * 0.027, z))
                box((0.072, 0.05, 0.074), T(c), HULL, rnd.uniform(0.62, 1.0), 0.003)
                k = rnd.random()
                box((0.003, 0.04, 0.062), T(c + V((sx * 0.0365, 0, 0))), PAINT if k < 0.2 else DARK, 0.9, 0.0, True)
                for e in (-1, 1):
                    box((0.074, 0.052, 0.003), T(c + V((0, 0, e * 0.02))), DARK, 0.8, 0.0, False)
    head(z1, L, w * 0.82, h * 0.9)
    for sx in (-1, 1):
        rcs((sx * (w * 0.46 + 0.008), h * 0.3, L * 0.1), (sx, 0, 0))
        rcs((sx * w * 0.36, 0, L * 0.86), (sx, 0, 0))
    running(0.21, (z0 + z1) / 2)
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


run('concord_ships', 'concord-ships', build, views=[(0.6, 0.3, LEN[i] * 2.4, (i * SPACING, 0, LEN[i] * 0.45)) for i in range(6)])
