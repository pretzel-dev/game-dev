# The Boreal Republic's ships: torch ships. A truss spine from a huge bell to
# a small capsule, tapering radiator vanes, spherical tanks.
#
# Run from perihelion-next/ (Blender 5.x):
#   /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup --python tools/blender/boreal_ships.py
# Writes src/assets/boreal-ships.glb and its shade map. See holds_ships.py for the layout.
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kit import *

V = Vector
T = Matrix.Translation
SPACING = 1.6
LOD = [0.02, 0.034, 0.034, 0.05, 0.045, 0.04]
PI = math.pi


def drive(R, L, rr, rl):
    """A big bell on a thrust frame, a bare reactor and a conical shadow shield, its rim in the owner's paint. Returns (z forward of it, torch start)."""
    noz = bell(0, R, L, 28)
    for i in range(8):
        a = TAU * i / 8 + 0.3
        strut(pol(a, rr * 0.9, 0.014), pol(a, R * 0.6, -L * 0.28), 0.004)
    lathe([(0.008, 0), (0.008, rr * 0.9), (0.014, rr * 0.95), (0.014, rr * 0.9), (0.016, rr * 0.9), (0.016, 0)], Matrix(), 18, DARK, 0.8, 0.0, False)
    lathe([(0.016, 0), (0.016, rr), (0.016 + rl, rr * 0.85), (0.022 + rl, rr * 0.6), (0.022 + rl, 0)], Matrix(), 18, DARK, 0.95, 0.0015)
    for i in range(4):
        zz = 0.016 + rl * (0.15 + 0.22 * i)
        band(zz - 0.002, zz + 0.002, rr * (1 - 0.15 * (0.15 + 0.22 * i)), DARK, 0.7, Matrix(), 18, rr * 0.07)
    zs = 0.03 + rl
    lathe([(zs, 0), (zs, rr), (zs + 0.012, rr * 1.55), (zs + 0.014, rr * 1.62), (zs + 0.03, rr * 1.62), (zs + 0.03, 0)], Matrix(), 24, DARK, 0.75, 0.0015)
    band(zs + 0.017, zs + 0.027, rr * 1.62, PAINT, 1.0, Matrix(), 24, 0.0015)
    return zs + 0.03, noz


def pod(r, L, z, win=5):
    """A small crew capsule on the axis, banded in the owner's paint."""
    M = capsule((0, 0, z), (0, 0, 1), r, L, HULL, 1.0, 18)
    band(L * 0.42, L * 0.52, r, PAINT, 1.0, M, 18, 0.0015)
    band(L * 0.26, L * 0.28, r, DARK, 0.8, M, 18, 0.002)
    windows(0.3, win, TAU / max(win, 8), r, L * 0.66, r * 0.14, r * 0.16, M, 0)
    box((r * 1.0, 0.004, 0.005), T((0, r * 0.72, z + L - r * 0.38)), WINDOW, 1, 0, False)
    return z + L


def ball(p, r, paint=False, tint=1.0, seg=20):
    sphere(p, r, HULL, tint, seg, max(8, seg * 3 // 5))
    M = T(V(p))
    band(-r * 0.2, r * 0.2, r * 0.98, PAINT if paint else DARK, 1.0 if paint else 0.8, M, seg, r * 0.03)
    lathe(drum(r * 0.95, r * 1.06, r * 0.22), M, 8, DARK, 0.8, 0.0, False)
    lathe(drum(-r * 1.06, -r * 0.95, r * 0.22), M, 8, DARK, 0.8, 0.0, False)


def outrig(z, reach, t=0.004):
    """Attitude jets out on a pair of booms."""
    for s in (-1, 1):
        strut((0, 0, z), (s * reach, 0, z), t)
        rcs((s * reach, 0, z), (s, 0, 0))


def whip(z, L=0.04):
    cyl((0, 0, z), (0, 0, z + L), 0.002, 4, DARK, 0.9, 0.0, False)


def corvette():
    """A needle. Bell, two tanks, a boom and a capsule."""
    z, noz = drive(0.046, 0.11, 0.02, 0.03)
    cyl((0, 0, z), (0, 0, z + 0.13), 0.008, 8, DARK, 0.9, 0.0, True)
    for s in (-1, 1):
        ball((s * 0.031, 0, z + 0.035), 0.028, True, 1.0, 16)
        vane((s * 0.006, 0), 0 if s > 0 else PI, z + 0.07, z + 0.115, 0.03, 0.014, 2, 0.0025)
    top = pod(0.026, 0.085, z + 0.118, 4)
    whip(top - 0.004, 0.045)
    box((0.01, 0.01, 0.012), T((0, 0, top + 0.04)), DARK, 0.9, 0.0, False)
    outrig(z + 0.125, 0.03, 0.003)
    nav((-0.03, 0.008, z + 0.125), (0.03, 0.008, z + 0.125), (0, 0.03, z + 0.16))
    return noz


def frigate():
    """Truss spine, four delta vanes, a revolver of torpedo tubes behind the capsule."""
    z, noz = drive(0.075, 0.17, 0.034, 0.05)
    truss3(z, z + 0.35, 0.028, 6, 0.004)
    for a in (0.45, PI - 0.45, PI + 0.45, -0.45):
        vane((math.cos(a) * 0.02, math.sin(a) * 0.02), a, z + 0.01, z + 0.24, 0.15, 0.04, 4)
    for s in (-1, 1):
        ball((s * 0.05, 0, z + 0.295), 0.038, True)
    lathe(drum(z + 0.344, z + 0.356, 0.05), Matrix(), 18, DARK, 0.85, 0.002)
    for i in range(6):
        p = pol(TAU * i / 6, 0.037, z + 0.353)
        cyl(p, p + V((0, 0, 0.085)), 0.012, 10, HULL, 0.82, 0.0, True)
        lathe([(0.085, 0.012), (0.089, 0.012), (0.089, 0.009), (0.086, 0.009), (0.086, 0)], T(p), 10, DARK, 0.4, 0.0, False)
    top = pod(0.032, 0.11, z + 0.435, 6)
    whip(top - 0.004, 0.05)
    strut((0, 0.02, z + 0.33), (0, 0.035, z + 0.335), 0.004)
    dish((0.0, 0.035, z + 0.335), (0.3, 1, 0.5), 0.03)
    pdc((0, 0.031, z + 0.49))
    outrig(z + 0.44, 0.062)
    for s in (-1, 1):
        rcs((s * 0.05, 0, z - 0.02), (s, 0, 0))
    nav((-0.066, 0.008, z + 0.44), (0.066, 0.008, z + 0.44), (0, 0.038, z + 0.52))
    return noz


def escort():
    """Short spine, point-defence blisters out on two rings of outriggers."""
    z, noz = drive(0.07, 0.15, 0.034, 0.045)
    truss3(z, z + 0.27, 0.03, 4, 0.0045)
    for a in (0, PI):
        vane((math.cos(a) * 0.025, 0), a, z + 0.01, z + 0.13, 0.11, 0.05, 3)
    for zz, a0 in ((0.17, PI / 4), (0.25, 0)):
        for i in range(4):
            a = a0 + TAU * i / 4
            c = V((math.cos(a), math.sin(a), 0))
            beam(c * 0.015 + V((0, 0, z + zz)), c * 0.1 + V((0, 0, z + zz)), 0.007)
            box((0.04, 0.04, 0.046), T(c * 0.098 + V((0, 0, z + zz))), HULL, 0.82, 0.003)
            blister(c * 0.122 + V((0, 0, z + zz)), 1.35)
    lathe([(z + 0.28, 0), (z + 0.28, 0.04), (z + 0.285, 0.046), (z + 0.37, 0.046), (z + 0.4, 0.026), (z + 0.4, 0)], Matrix(), 20, HULL, 0.95, 0.002)
    band(z + 0.3, z + 0.345, 0.046, PAINT, 1.0, Matrix(), 20, 0.0015)
    windows(0.2, 7, TAU / 9, 0.046, z + 0.357, 0.005, 0.006, Matrix(), 0)
    for i in range(4):
        a = PI / 4 + TAU * i / 4
        blister((math.cos(a) * 0.04, math.sin(a) * 0.04, z + 0.385), 1.2)
    whip(z + 0.398, 0.035)
    for s in (-1, 1):
        rcs((s * 0.05, 0, z + 0.3), (s, 0, 0))
        rcs((s * 0.05, 0, z - 0.02), (s, 0, 0))
    nav((-0.05, 0.01, z + 0.33), (0.05, 0.01, z + 0.33), (0, 0.05, z + 0.33))
    return noz


def battleship():
    """A spinal railgun the length of the ship, a huge bell and four great vanes."""
    z, noz = drive(0.125, 0.25, 0.055, 0.09)
    truss3(z, z + 0.8, 0.05, 10, 0.006)
    for a in (0.5, PI - 0.5, PI + 0.5, -0.5):
        vane((math.cos(a) * 0.04, math.sin(a) * 0.04), a, z + 0.02, z + 0.47, 0.28, 0.07, 6, 0.004)
    cyl((0, 0, z), (0, 0, z + 1.2), 0.021, 12, HULL, 0.6, 0.0, True)  # the gun, out past the bow
    for i in range(8):
        lathe(drum(z + 0.072 + i * 0.1, z + 0.088 + i * 0.1, 0.03), Matrix(), 14, DARK, 0.9, 0.0015)
    for j in range(2):
        for i in range(3):
            a = PI / 2 + PI / 3 + TAU * i / 3 + j * (PI / 3)
            ball((math.cos(a) * 0.088, math.sin(a) * 0.088, z + 0.56 + j * 0.125), 0.058, j == 0, 1.0 - 0.1 * j, 22)
    lathe([(z + 0.8, 0), (z + 0.8, 0.05), (z + 0.81, 0.062), (z + 0.93, 0.058), (z + 0.97, 0.03), (z + 0.97, 0)], Matrix(), 22, HULL, 0.95, 0.002)
    band(z + 0.83, z + 0.89, 0.0615, PAINT, 1.0, Matrix(), 22, 0.0015)
    windows(0.2, 10, TAU / 12, 0.06, z + 0.905, 0.006, 0.007, Matrix(), 0.1)
    for zz, L in ((1.06, 0.02), (1.14, 0.07)):  # muzzle
        lathe(drum(z + zz - L / 2, z + zz + L / 2, 0.03), Matrix(), 12, DARK, 0.8, 0.002)
    for s in (-1, 1):
        tubes((s * 0.085, 0, z + 0.85), 2, 2, 0.009, 0.09)
        beam((s * 0.04, 0, z + 0.85), (s * 0.07, 0, z + 0.85), 0.008)
        rcs((s * 0.085, 0, z - 0.03), (s, 0, 0))
    outrig(z + 0.77, 0.11, 0.006)
    turret((0, 0.06, z + 0.87), (0, 1, 0), 1.3)
    turret((0, -0.06, z + 0.87), (0, -1, 0), 1.3)
    for zz in (0.5, 0.75):
        pdc((0, 0.03, z + zz))
        pdc((0.03, -0.022, z + zz), (0.6, -0.8, 0))
    strut((-0.02, 0.03, z + 0.76), (-0.03, 0.05, z + 0.77), 0.004)
    dish((-0.03, 0.05, z + 0.77), (-0.4, 1, 0.4), 0.04)
    nav((-0.115, 0.01, z + 0.77), (0.115, 0.01, z + 0.77), (0, 0.08, z + 0.9))
    return noz


def tender():
    """Three big spheres threaded on the spine, a transfer boom."""
    z, noz = drive(0.07, 0.15, 0.034, 0.045)
    truss3(z, z + 0.62, 0.03, 8, 0.0045)
    for a in (0, PI):
        vane((math.cos(a) * 0.025, 0), a, z + 0.005, z + 0.125, 0.14, 0.07, 3)
    for i in range(3):
        ball((0, 0, z + 0.225 + i * 0.17), 0.09, i == 1, 0.92 + i * 0.05, 28)
        lathe(drum(z + 0.304 + i * 0.17, z + 0.316 + i * 0.17, 0.062), Matrix(), 16, DARK, 0.85, 0.002)
    top = pod(0.03, 0.105, z + 0.635, 5)
    j0 = V((0.03, 0, z + 0.645))
    j1 = j0 + V((1, 0.1, 0.3)).normalized() * 0.2
    j2 = j1 + V((0.15, 0, 1)).normalized() * 0.1
    beam(j0, j1, 0.009, HULL, 0.85)
    sphere(j1, 0.014, DARK, 0.8, 10, 6, False)
    beam(j1, j2, 0.006, DARK, 0.85)
    lathe(drum(-0.01, 0.01, 0.009), T(j2), 8, HULL, 0.9, 0.0, False)
    for s in (-1, 1):
        rcs((s * 0.036, 0, z + 0.66), (s, 0, 0))
        rcs((s * 0.05, 0, z - 0.02), (s, 0, 0))
    nav((-0.093, 0, z + 0.395), (0.093, 0, z + 0.395), j1 + V((0, 0.02, 0)))
    return noz


def freighter():
    """The same spine, ringed with cargo drums."""
    z, noz = drive(0.065, 0.14, 0.03, 0.04)
    truss3(z, z + 0.75, 0.026, 10, 0.004)
    for a in (0, PI):
        vane((math.cos(a) * 0.022, 0), a, z + 0.01, z + 0.17, 0.1, 0.035, 3)
    for i in range(5):
        for j in range(3):
            a = PI / 2 + PI / 3 + TAU * j / 3
            p = V((math.cos(a) * 0.05, math.sin(a) * 0.05, z + 0.196 + i * 0.112))
            M = can(p, (0, 0, 1), 0.034, 0.098, rnd.uniform(0.7, 1.0), 14, 1, 0, False, 0.25)
            if (i + j) % 4 == 1:
                band(0.06, 0.076, 0.034, PAINT, 1.0, M, 14, 0.0015)
    top = pod(0.026, 0.085, z + 0.752, 4)
    for s in (-1, 1):
        rcs((s * 0.032, 0, z + 0.77), (s, 0, 0))
        rcs((s * 0.046, 0, z - 0.02), (s, 0, 0))
    nav((-0.085, 0, z + 0.47), (0.085, 0, z + 0.47), (0, 0.03, z + 0.8))
    return noz


HULLS = [corvette, frigate, escort, battleship, tender, freighter]


def build():
    nozzles = []
    for i, f in enumerate(HULLS):
        begin(i, (i * SPACING, 0, 0), 0.0, 130 + i)
        nozzles.append(f())
        begin(i + len(HULLS), (i * SPACING, 3.0, 0), LOD[i], 130 + i)
        f()
    return {'nozzles': nozzles, 'spacing': SPACING, 'hulls': len(HULLS), 'lod_y': 3.0}


LEN = [0.4, 0.72, 0.6, 1.5, 0.95, 1.05]
run('boreal_ships', 'boreal-ships', build, views=[(0.5, 0.35, LEN[i] * 2.6, (i * SPACING, 0, LEN[i] * 0.38)) for i in range(6)])
