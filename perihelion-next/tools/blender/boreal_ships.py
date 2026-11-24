# The Boreal Republic's ships: utilitarian and intimidating. Built round the
# gun and the reactor: a slab-sided engine block with a cluster of small
# engines, the reactor in the open in a frame (lit from within), and long gun
# rails or a blunt armoured head forward. Dark plate, hard corners, no trim.
#
# Each class has its own outline: the corvette is one gun with an engine; the
# frigate is twin rails; the escort is a flak tower with gun arms in a cross;
# the battleship is a hammer (a great head and block joined by a frame of
# tanks, three rails out past the bow); the tender is a frame of ball tanks;
# the freighter a frame of cargo drums.
#
# Fittings are the same real size on every class (the game draws these models
# at the size they are made), so a bigger hull simply carries more of them.
#
# Run from perihelion-next/ (Blender 5.x):
#   /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup --python tools/blender/boreal_ships.py
# Writes src/assets/boreal-ships.glb and its shade map. See holds_ships.py for the layout.
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kit import *

V = Vector
T = Matrix.Translation
LOD = [0.02, 0.034, 0.034, 0.05, 0.045, 0.04]
# True lengths in hull units (a frigate is 0.72).
LEN = [0.4, 0.76, 0.56, 1.8, 1.0, 1.05]


def gun(p, s=1.0, up=1):
    turret(p, (0, up, 0), s)


def block(w, h, z0, z1, engines, R):
    """The engine block: slab sides with cooling slats, short thick radiators, a cluster of small engines.
    `engines` is a list of (x, y) for the bells."""
    d = z1 - z0
    Hull([(z0, w * 0.86, h * 0.86, 0, 0.18), (z0 + d * 0.2, w, h, 0, 0.18), (z1 - d * 0.12, w, h, 0, 0.18), (z1, w * 0.8, h * 0.8, 0, 0.18)], HULL, 0.62, 0.006)
    box((w * 0.8, h * 0.8, 0.012), T((0, 0, z0)), DARK, 0.7, 0.002)
    for x, y in engines:
        torch(x, y, z0, R, R * 2.1, 16)
    n = max(2, int(d * 0.62 / 0.014))
    for i in range(n):
        z = z0 + d * 0.24 + i * 0.014
        for sx in (-1, 1):
            box((0.006, h * 0.72, 0.007), T((sx * w * 0.5, 0, z)), DARK, 0.7, 0.0, False)
    for sx in (-1, 1):
        for sy in (-1, 1):
            box((w * 0.3, 0.008, d * 0.6), T((sx * w * 0.62, sy * h * 0.24, z0 + d * 0.52)), RAD, 0.95, 0.002)
        box((0.008, h * 0.6, d * 0.64), T((sx * w * 0.77, 0, z0 + d * 0.52)), DARK, 0.8, 0.002)
        rcs((sx * (w * 0.5 + 0.008), h * 0.36, z0 + d * 0.14), (sx, 0, 0))
    box((w * 0.5, 0.004, 0.02), T((0, h * 0.5 + 0.001, z1 - d * 0.3)), PAINT, 1.0, 0.0, True)


def frame(w, h, z0, z1, bays, t=0.008):
    """An open girder frame between two masses: four chords, hoops, diagonals."""
    for sx in (-1, 1):
        for sy in (-1, 1):
            beam((sx * w / 2, sy * h / 2, z0), (sx * w / 2, sy * h / 2, z1), t, DARK, 0.75)
    L = (z1 - z0) / bays
    for i in range(bays + 1):
        z = z0 + i * L
        for s in (-1, 1):
            beam((-w / 2, s * h / 2, z), (w / 2, s * h / 2, z), t * 0.8, DARK, 0.75)
            beam((s * w / 2, -h / 2, z), (s * w / 2, h / 2, z), t * 0.8, DARK, 0.75)
        if i < bays:
            for s in (-1, 1):
                f = 1 if i % 2 else -1
                strut((s * w / 2, -f * h / 2, z), (s * w / 2, f * h / 2, z + L), t * 0.6)


def core(z0, z1, r, n, y=0.0):
    """The reactor, in the open: drums in a row, each with a lit band."""
    L = (z1 - z0) / n
    M = T((0, y, 0))
    for i in range(n):
        a, b = z0 + i * L + L * 0.08, z0 + (i + 1) * L - L * 0.08
        lathe(drum(a, b, r), M, 16, DARK, 0.9, 0.002)
        lathe([((a + b) / 2 - L * 0.07, r), ((a + b) / 2 - L * 0.07, r + 0.0012), ((a + b) / 2 + L * 0.07, r + 0.0012), ((a + b) / 2 + L * 0.07, r)], M, 16, WINDOW, 1.0, 0.0, False)
        lathe(drum(b, b + L * 0.16, r * 0.55), M, 10, DARK, 0.7, 0.0, False)


def rail(x, y, z0, z1, w=0.04, h=0.05):
    """A gun rail: a long box section, a dark slot along it, clamps, an owner's mark near the muzzle."""
    L = z1 - z0
    box((w, h, L), T((x, y, (z0 + z1) / 2)), HULL, 0.66, 0.005)
    box((w * 1.08, h * 0.3, L * 0.94), T((x, y, (z0 + z1) / 2 + L * 0.02)), DARK, 0.55, 0.002)
    for i in range(max(2, int(L / 0.11))):
        box((w * 1.25, h * 1.2, 0.016), T((x, y, z0 + 0.04 + i * 0.11)), DARK, 0.85, 0.002)
    box((w * 1.02, h * 1.02, 0.03), T((x, y, z1 - 0.07)), PAINT, 1.0, 0.0, True)
    box((w * 1.2, h * 1.2, 0.03), T((x, y, z1 - 0.015)), DARK, 0.8, 0.003)


def head(w, h, z0, z1, prow=0.35, tint=0.72):
    """A blunt armoured head: slab sides, a short chamfered prow, slit ports. Returns its hull."""
    zp = z1 - (z1 - z0) * prow
    H = Hull([(z0, w * 0.88, h * 0.88, 0, 0.16), (z0 + 0.02, w, h, 0, 0.16), (zp, w, h, 0, 0.16), (z1, w * 0.5, h * 0.55, 0, 0.2)], HULL, tint, 0.007)
    n = max(1, int((zp - z0 - 0.03) / 0.05))
    pl = (zp - z0 - 0.03) / n
    for sx in (-1, 1):
        for i in range(n):
            z = z0 + 0.03 + pl * (i + 0.5)
            H.flank(z, sx, (0.008, h * 0.62, pl * 0.9), HULL, rnd.uniform(0.6, 0.78), 0.002, True, 0, 0.002)
            for k in range(3):
                if rnd.random() < 0.7:
                    H.flank(z + (k - 1) * 0.012, sx, (0.002, 0.003, 0.007), WINDOW, 1, 0.0, False, h * 0.38, 0.002)
        rcs((sx * (w * 0.5 + 0.008), 0, zp - 0.02), (sx, 0, 0))
    return H


def bridge(z, y, s=1.0):
    """The conn: a plain box with a slit of window and a mast."""
    box((0.05 * s, 0.03 * s, 0.07 * s), T((0, y + 0.015 * s, z)), HULL, 0.8, 0.003)
    box((0.04 * s, 0.004, 0.002), T((0, y + 0.02 * s, z + 0.0355 * s)), WINDOW, 1, 0, False)
    cyl((0, y + 0.03 * s, z - 0.01), (0, y + 0.03 * s + 0.12, z - 0.01), 0.002, 4, DARK, 0.9, 0.0, False)
    box((0.03 * s, 0.014, 0.004), T((0, y + 0.03 * s + 0.07, z - 0.01)), DARK, 0.9, 0.0, False)
    light((0, y + 0.03 * s + 0.122, z - 0.01), STROBE, 0.005)


def running(x, y, z):
    light((-x, y, z), NAV_R, 0.005)
    light((x, y, z), NAV_G, 0.005)


def corvette():
    """One gun with an engine on the end of it."""
    L = LEN[0]
    block(0.075, 0.062, 0.03, 0.115, [(0, 0), (-0.022, 0), (0.022, 0)], 0.012)
    core(0.12, 0.165, 0.02, 1)
    frame(0.06, 0.055, 0.115, 0.17, 1, 0.006)
    rail(0, 0, 0.17, L, 0.038, 0.044)
    box((0.034, 0.02, 0.05), T((0, 0.036, 0.21)), HULL, 0.78, 0.003)
    box((0.028, 0.003, 0.002), T((0, 0.04, 0.2355)), WINDOW, 1, 0, False)
    cyl((0, 0.046, 0.2), (0, 0.13, 0.2), 0.0018, 4, DARK, 0.9, 0.0, False)
    pdc((0, -0.022, 0.24), (0, -1, 0))
    for sx in (-1, 1):
        rcs((sx * 0.028, 0, L - 0.06), (sx, 0, 0))
    running(0.04, 0, 0.1)


def frigate():
    """Twin rails ahead of an open reactor and a block of engines."""
    L = LEN[1]
    block(0.16, 0.12, 0.03, 0.2, [(0, 0), (-0.048, 0.03), (0.048, 0.03), (-0.048, -0.03), (0.048, -0.03)], 0.02)
    frame(0.11, 0.1, 0.2, 0.36, 2)
    core(0.21, 0.35, 0.036, 4)
    box((0.15, 0.085, 0.03), T((0, 0, 0.375)), DARK, 0.85, 0.004)  # breech
    for sx in (-1, 1):
        rail(sx * 0.04, 0, 0.39, L)
        rcs((sx * 0.07, 0, L - 0.08), (sx, 0, 0))
    for z in (0.5, 0.64):
        box((0.13, 0.03, 0.022), T((0, 0, z)), DARK, 0.85, 0.003)
    bridge(0.3, 0.05, 0.9)
    box((0.07, 0.014, 0.12), T((0, 0.057, 0.29)), HULL, 0.7, 0.003)
    gun((0, 0.06, 0.13), 1.1)
    gun((0, -0.06, 0.13), 1.1, -1)
    pdc((0, 0.016, 0.52))
    pdc((0, -0.016, 0.6), (0, -1, 0))
    running(0.085, 0, 0.12)


def escort():
    """A flak tower: gun arms in a cross round a blunt head. A plus sign from ahead."""
    L = LEN[2]
    block(0.13, 0.11, 0.03, 0.17, [(0, 0), (-0.036, 0.024), (0.036, 0.024), (-0.036, -0.024), (0.036, -0.024)], 0.017)
    frame(0.08, 0.08, 0.17, 0.25, 1)
    core(0.18, 0.245, 0.028, 2)
    H = head(0.11, 0.11, 0.25, L, 0.3)
    for i in range(4):
        a = math.pi / 2 * i
        d = V((math.cos(a), math.sin(a), 0))
        for z in (0.3, 0.42):
            beam(d * 0.05 + V((0, 0, z)), d * 0.15 + V((0, 0, z)), 0.016, DARK, 0.8)
            box((0.05, 0.05, 0.06), at(d * 0.165 + V((0, 0, z)), (0, 0, 1), a), HULL, 0.68, 0.004)
            turret(d * 0.19 + V((0, 0, z)), d, 1.15)
        strut(d * 0.15 + V((0, 0, 0.3)), d * 0.15 + V((0, 0, 0.42)), 0.006)
    for a in (0.785, 2.356, 3.927, 5.498):
        pdc(pol(a, 0.07, 0.36), (math.cos(a), math.sin(a), 0))
    box((0.006, 0.03, 0.006), T((0, 0.07, 0.27)), DARK, 0.9, 0.0, False)
    box((0.05, 0.024, 0.004), T((0, 0.094, 0.27)), HULL, 0.8, 0.0015)
    box((0.112, 0.02, 0.02), T((0, 0.03, L - 0.12)), PAINT, 1.0, 0.0, True)
    running(0.07, 0, 0.1)


def battleship():
    """A hammer: a great armoured head and an engine block, joined by an open frame of tanks and reactor, three rails out past the bow."""
    L = LEN[3]
    eng = [(0, 0)] + [(math.cos(TAU * i / 6) * 0.095, math.sin(TAU * i / 6) * 0.075) for i in range(6)]
    block(0.32, 0.24, 0.04, 0.34, eng, 0.03)
    frame(0.2, 0.18, 0.34, 0.92, 5, 0.01)
    core(0.36, 0.9, 0.034, 8, -0.05)
    for i in range(4):
        sphere((0.04 * (1 if i % 2 else -1), 0.04, 0.43 + i * 0.135), 0.066, HULL, rnd.uniform(0.7, 0.85), 22, 12)
        band(-0.004, 0.004, 0.066, DARK, 0.8, T((0.04 * (1 if i % 2 else -1), 0.04, 0.43 + i * 0.135)), 22, 0.002)
    H = head(0.26, 0.21, 0.92, 1.42, 0.3)
    for sx in (-1, 1):
        rail(sx * 0.09, -0.03, 1.0, L, 0.044, 0.056)
        for i in range(5):  # casemates down the head
            z = 0.99 + i * 0.07
            H.flank(z, sx, (0.03, 0.06, 0.05), HULL, 0.66, 0.003, True, -0.03, 0.012)
            for e in (-1, 1):
                H.flank(z + 0.05, sx, (0.005, 0.005, 0.06), DARK, 0.6, 0.0, False, -0.03 + e * 0.012, 0.02)
        box((0.05, 0.05, 0.3), T((sx * 0.185, 0, 0.19)), HULL, 0.58, 0.004)  # armoured cheeks on the block
        for z in (0.12, 0.26):
            gun((sx * 0.1, 0.12, z), 1.2)
        pdc((sx * 0.11, 0.105, 1.3))
        pdc((sx * 0.11, -0.105, 1.1), (0, -1, 0))
    rail(0, -0.12, 1.02, L - 0.04, 0.05, 0.06)
    for z in (1.5, 1.64):
        box((0.24, 0.03, 0.022), T((0, -0.04, z)), DARK, 0.85, 0.003)
        beam((0, -0.04, z), (0, -0.12, z), 0.014, DARK, 0.85)
    bridge(1.04, 0.105, 1.1)
    box((0.12, 0.02, 0.26), T((0, 0.112, 1.12)), HULL, 0.7, 0.004)
    gun((0, 0.122, 1.2), 1.6)
    gun((0, 0.105, 1.33), 1.3)
    gun((0, -0.105, 1.0), 1.5, -1)
    gun((0, 0.12, 0.19), 1.5)
    gun((0, -0.12, 0.19), 1.5, -1)
    box((0.262, 0.03, 0.03), T((0, 0.05, 1.26)), PAINT, 1.0, 0.0, True)
    box((0.262, 0.03, 0.01), T((0, 0.05, 1.22)), PAINT, 1.0, 0.0, True)
    for sx in (-1, 1):
        rcs((sx * 0.12, 0, L - 0.1), (sx, 0, 0))
    running(0.2, 0, 0.2)


def aux_head(z0, L):
    H = head(0.1, 0.085, z0, L, 0.4, 0.74)
    bridge(z0 + 0.06, 0.0425, 0.85)
    pdc((0, -0.0425, z0 + 0.08), (0, -1, 0))
    box((0.102, 0.016, 0.016), T((0, 0.02, L - 0.1)), PAINT, 1.0, 0.0, True)
    return H


def tender():
    """A frame of ball tanks between the block and a small head, a transfer boom."""
    L = LEN[4]
    block(0.15, 0.12, 0.03, 0.19, [(0, 0), (-0.045, 0.028), (0.045, 0.028), (-0.045, -0.028), (0.045, -0.028)], 0.019)
    frame(0.21, 0.21, 0.19, 0.78, 4, 0.009)
    for i in range(4):
        z = 0.264 + i * 0.1475
        sphere((0, 0, z), 0.092, HULL, rnd.uniform(0.72, 0.88), 28, 16)
        band(-0.005, 0.005, 0.092, PAINT if i == 1 else DARK, 1.0 if i == 1 else 0.8, T((0, 0, z)), 28, 0.002)
        if i < 3:
            lathe(drum(z + 0.062, z + 0.086, 0.03), Matrix(), 12, DARK, 0.8, 0.0, False)
    core(0.2, 0.3, 0.018, 2, -0.085)
    aux_head(0.78, L)
    j0 = V((0.058, 0, 0.84))
    j1 = j0 + V((1, 0.1, 0.4)).normalized() * 0.2
    box((0.026, 0.026, 0.026), T(j0), DARK, 0.8, 0.002)
    beam(j0, j1, 0.009, HULL, 0.7)
    box((0.02, 0.02, 0.03), T(j1), DARK, 0.8, 0.002)
    cyl(j1 + V((0, 0, 0.012)), j1 + V((0, 0, 0.07)), 0.005, 8, HULL, 0.8, 0.0, False)
    light(j1 + V((0, 0.016, 0)), STROBE, 0.005)
    running(0.11, 0, 0.48)


def freighter():
    """A frame of cargo drums, the same block and head as the tender."""
    L = LEN[5]
    block(0.15, 0.12, 0.03, 0.19, [(0, 0), (-0.045, 0.028), (0.045, 0.028), (-0.045, -0.028), (0.045, -0.028)], 0.019)
    frame(0.16, 0.14, 0.19, 0.83, 6, 0.008)
    core(0.2, 0.28, 0.018, 2, -0.05)
    for i in range(6):
        z = 0.245 + i * 0.1067
        for sx in (-1, 1):
            for sy in (-1, 1):
                if i == 0 and sy < 0:
                    continue
                if rnd.random() < 0.08:
                    continue
                M = can((sx * 0.04, sy * 0.034, z - 0.046), (0, 0, 1), 0.032, 0.092, rnd.uniform(0.55, 0.85), 14, 1, 0, False, 0.22)
                if rnd.random() < 0.2:
                    band(0.036, 0.056, 0.032, PAINT, 1.0, M, 14, 0.0015)
    aux_head(0.83, L)
    running(0.085, 0, 0.5)


HULLS = [corvette, frigate, escort, battleship, tender, freighter]

if __name__ == '__main__':
    run('boreal_ships', 'boreal-ships', lambda: fleet(HULLS, LOD, 130), views=[(0.5, 0.35, LEN[i] * 2.6, (i * 1.6, 0, LEN[i] * 0.45)) for i in range(6)])
