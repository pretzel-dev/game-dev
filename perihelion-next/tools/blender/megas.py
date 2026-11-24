# The megaprojects, each in the stages it is built in. The game puts the pieces
# together (gfx/megastructures.js): some stand alone, some are repeated round a
# world. Units are the game's megastructure scale M.
#
#   0-2   Ansible array: hub and arms; two great dishes; the third dish and the small ones
#   3-5   Ark: spine, frame and tanks; habitat drums; engines, bow shield, radiators
#   6-8   Arcology spire: the spire; bearing and docks; range and trainers      9  its wheel (turns)
#   10    Blackout: one battle platform (six go round the world)                11  a picket satellite
#   12    Fuel network: one bay of the ring truss   13  a hub on it   14  a berth with a hull in it
#   15-17 Strike driver: rails on a trestle; coils; muzzle, capsule and lights   18  its power plant
#
# Axes follow megastructures.js: the array has +y away from the world; the ark
# and spire lie along z; the platform has +y up and its guns to +x; ring pieces
# have x along the ring, y up, z outward; the driver runs along x, rising, +y up.
# A vertex at y = FOOT is a trestle foot: the game stands it on the ground.
#
# Run from perihelion-next/ (Blender 5.x):
#   /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup --python tools/blender/megas.py
# Writes src/assets/megas.glb and its shade map.
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kit import *

V = Vector
T = Matrix.Translation
PI = math.pi
FOOT = -5.0
UP = at((0, 0, 0), (0, 1, 0))  # a frame whose local z is +y


def arm(i):
    a = TAU * i / 3 + PI / 2
    return V((math.cos(a), 0, math.sin(a)))


def big_dish(i):
    d = arm(i)
    p = d * 1.2
    box((0.14, 0.1, 0.14), T(p + V((0, -0.07, 0))), HULL, 0.85, 0.006)
    cyl(p + V((0, -0.02, 0)), p + V((0, 0.06, 0)), 0.03, 10, DARK, 0.8, 0.0, False)
    dish(p + V((0, 0.06, 0)), (d.x * 0.25, 1, d.z * 0.25), 0.42)


def array_a():
    lathe([(-0.28, 0), (-0.28, 0.09), (-0.09, 0.1), (-0.07, 0.17), (0.07, 0.17), (0.09, 0.1), (0.22, 0.09), (0.22, 0)], UP, 28, HULL, 0.9, 0.006)
    band(-0.025, 0.025, 0.17, PAINT, 1.0, UP, 28, 0.004)
    windows(0.2, 20, TAU / 20, 0.17, 0.045, 0.012, 0.014, UP, 0.3)
    for i in range(3):
        d = arm(i)
        truss(d * 0.16, d * 1.2, 0.1, 7, 0.016, (0, 1, 0))
        cyl(d * 0.16, d * 1.16, 0.016, 8, HULL, 0.8, 0.0, False)


def array_b():
    big_dish(0)
    big_dish(1)


def array_c():
    big_dish(2)
    for i in range(3):
        d = arm(i)
        for f in (0.45, 0.8):
            p = d * 1.2 * f + V((0, 0.06, 0))
            dish(p, (d.x * 0.4, 1, d.z * 0.4), 0.14)
    lathe([(0, 0), (0, 0.04), (0.2, 0.03), (0.2, 0)], at((0, -0.28, 0), (0, -1, 0)), 12, HULL, 0.9, 0.003)  # laser link
    panel_pair((0, -0.18, 0), (1, 0, 0), 0.5, 2, 0.12, SOLAR, (0, 0, 1))
    light((0, 0.24, 0), STROBE, 0.04)


ARK_L = 4.0


def ark_a():
    L = ARK_L
    lathe([(-L / 2, 0), (-L / 2, 0.12), (L / 2, 0.12), (L / 2, 0)], Matrix(), 20, DARK, 0.9, 0.006)
    for sy in (-1, 1):
        truss((0, sy * 0.47, -L / 2), (0, sy * 0.47, L / 2), 0.18, 18, 0.018, (1, 0, 0))
        for i in range(7):
            z = -L / 2 + 0.2 + i * 0.6
            strut((0, sy * 0.12, z), (0, sy * 0.38, z), 0.014)
    for i in range(6):
        for sx in (-1, 1):
            strapped((sx * 0.25, 0, -L * 0.44 + i * 0.2), 0.11, 0.44, rnd.uniform(0.85, 1.0), i % 3 == 1, (0, 0, 1), 16)


def ark_b():
    for i in range(5):
        z = -0.55 + i * 0.44
        lathe([(z, 0.13), (z, 0.3), (z + 0.04, 0.37), (z + 0.3, 0.37), (z + 0.34, 0.3), (z + 0.34, 0.13)], Matrix(), 36, HULL, 0.95 - 0.04 * (i % 2), 0.006)
        if i % 2:
            band(z + 0.14, z + 0.2, 0.37, PAINT, 1.0, Matrix(), 36, 0.004)
        for zz in (0.08, 0.26):
            windows(rnd.random(), 36, TAU / 36, 0.37, z + zz, 0.014, 0.016, Matrix(), 0.35)
        band(z + 0.33, z + 0.36, 0.3, DARK, 0.8, Matrix(), 36, 0.02)


def ark_c():
    L = ARK_L
    bell(-L / 2, 0.3, 0.34, 32)
    for i in range(8):
        a = TAU * i / 8
        strut(pol(a, 0.34, -L / 2 + 0.1), pol(a, 0.2, -L / 2 - 0.1), 0.016)
    for sx in (-1, 1):
        for sy in (-1, 1):
            bell(-L / 2 - 0.02, 0.1, 0.2, 16, 0.42, 1.6, 0.7, (sx * 0.27, sy * 0.27))
            cyl((sx * 0.27, sy * 0.27, -L / 2 - 0.02), (sx * 0.12, sy * 0.12, -L / 2 + 0.16), 0.03, 8, DARK, 0.85, 0.0, False)
    lathe([(L / 2, 0), (L / 2, 0.14), (L / 2 + 0.12, 0.5), (L / 2 + 0.15, 0.52), (L / 2 + 0.17, 0.3), (L / 2 + 0.2, 0)], Matrix(), 36, HULL, 0.8, 0.005)  # bow shield
    for sx in (-1, 1):
        radiator((sx * 0.13, 0, -L * 0.3), (sx, 0, 0), (0, 0, 1), 0.85, 0.65, 4, 0.012)
        light((sx * 0.42, 0, 0), NAV_G if sx > 0 else NAV_R, 0.04)
    light((0, 0, L / 2 + 0.24), STROBE, 0.05)


def spire_a():
    lathe([(-0.66, 0), (-0.66, 0.08), (-0.62, 0.1), (0.5, 0.1), (0.56, 0.06), (0.7, 0.03), (0.7, 0)], Matrix(), 24, HULL, 0.9, 0.005)
    for z, paint in ((-0.45, False), (-0.2, False), (0.25, True), (0.42, True)):
        lathe([(z - 0.06, 0.1), (z - 0.05, 0.17), (z + 0.05, 0.17), (z + 0.06, 0.1)], Matrix(), 28, HULL, 0.95, 0.005)
        if paint:
            band(z - 0.012, z + 0.012, 0.17, PAINT, 1.0, Matrix(), 28, 0.004)
        windows(rnd.random(), 22, TAU / 22, 0.17, z + 0.028, 0.012, 0.012, Matrix(), 0.3)
    for z in (-0.33, -0.08, 0.1, 0.34):
        windows(rnd.random(), 16, TAU / 16, 0.1, z, 0.01, 0.014, Matrix(), 0.4)
    cyl((0, 0, 0.7), (0, 0, 0.9), 0.006, 6, DARK, 0.9, 0.0, False)


def spire_b():
    lathe([(-0.07, 0.1), (-0.06, 0.15), (0.06, 0.15), (0.07, 0.1)], Matrix(), 24, DARK, 0.85, 0.004)  # the wheel's bearing
    for i in range(4):
        a = TAU * i / 4
        box((0.11, 0.11, 0.15), at(pol(a, 0.2, -0.62), (0, 0, 1), a), HULL, 0.82, 0.006)  # docking bays
        box((0.07, 0.07, 0.01), at(pol(a, 0.2, -0.7), (0, 0, 1), a), DARK, 0.5, 0.0, False)
        light(pol(a, 0.27, -0.62), NAV_G if i % 2 else NAV_R, 0.025)


def spire_wheel():
    R = 0.75
    ring(R, 0, 0.18, 0.1, 64, HULL, 0.92)
    lathe([(-0.03, R), (-0.03, R + 0.006), (0.03, R + 0.006), (0.03, R)], Matrix(), 64, PAINT, 1.0, 0.0, True)
    for i in range(4):
        a = TAU * i / 4 + 0.3
        cyl(pol(a, 0.15, 0), pol(a, R - 0.1, 0), 0.025, 10, HULL, 0.8, 0.0, True)
        for s in (-1, 1):
            strut(pol(a, 0.15, s * 0.03), pol(a + TAU / 8, R - 0.1, 0), 0.008)
    for i in range(64):
        a = TAU * i / 64
        if rnd.random() < 0.7:
            box((0.02, 0.018, 0.006), radial(a, R - 0.102, rnd.choice((-0.045, 0.045))) @ Matrix.Rotation(PI, 4, 'X'), WINDOW, 1, 0, False)


def spire_c():
    for i in range(8):  # the target range
        box((0.06, 0.06, 0.06), T((1.1 + (i % 3) * 0.22, 0.5 - i * 0.14, 0.3 + (i % 2) * 0.25)), DARK, 0.7, 0.004)
    for i in range(4):  # trainers out on exercise
        a = TAU * i / 4 + 0.7
        capsule(pol(a, 1.05, 0.08), (0, 0, 1), 0.04, 0.16, HULL, 0.9, 10)
        light(pol(a, 1.05, 0.27), STROBE, 0.025)
    for x, y in ((0.12, 0.12), (-0.12, -0.12)):
        box((0.05, 0.05, 0.3), T((x, y, -0.85)), HULL, 0.85, 0.004)
        box((0.06, 0.02, 0.1), T((x, y, -0.8)), PAINT, 1.0, 0.002)
    light((0, 0, 0.92), STROBE, 0.04)


def platform():
    """A battle platform: a hexagonal casemate, twin heavy guns to +x, a radar ball, a radiator behind."""
    lathe([(-0.14, 0), (-0.14, 0.5), (-0.1, 0.52), (-0.08, 0.5), (0.1, 0.43), (0.12, 0.3), (0.12, 0)], UP @ Matrix.Rotation(PI / 6, 4, 'Z'), 6, HULL, 0.82, 0.012)
    lathe([(0.085, 0.445), (0.085, 0.456), (0.115, 0.34), (0.115, 0.33)], UP @ Matrix.Rotation(PI / 6, 4, 'Z'), 6, PAINT, 1.0, 0.0, True)
    for i in range(6):
        a = TAU * i / 6
        box((0.03, 0.12, 0.3), T((math.cos(a) * 0.47, -0.01, math.sin(a) * 0.47)) @ Matrix.Rotation(-a, 4, 'Y'), HULL, rnd.uniform(0.65, 0.8), 0.006)
        for k in range(3):
            box((0.004, 0.012, 0.02), T((math.cos(a) * 0.487, 0.02, math.sin(a) * 0.487)) @ Matrix.Rotation(-a, 4, 'Y') @ T((0, 0, (k - 1) * 0.06)), WINDOW, 1, 0, False)
    for o in (-1, 1):
        lathe([(0, 0), (0, 0.13), (0.06, 0.11), (0.06, 0)], at((0.05, 0.12, o * 0.18), (0, 1, 0)), 14, DARK, 0.9, 0.004)
        box((0.2, 0.1, 0.17), T((0.06, 0.22, o * 0.18)), HULL, 0.8, 0.008)
        for e in (-1, 1):
            cyl((0.14, 0.23, o * 0.18 + e * 0.04), (0.82, 0.3, o * 0.18 + e * 0.04), 0.022, 8, DARK, 0.6, 0.0, True)
    cyl((-0.22, 0.12, 0), (-0.22, 0.38, 0), 0.018, 6, DARK, 0.9, 0.0, False)
    sphere((-0.22, 0.42, 0), 0.09, HULL, 1.0, 16, 10)
    radiator((-0.47, 0, 0), (-1, 0, 0), (0, 0, 1), 0.4, 0.26, 2, 0.012)
    light((0, -0.18, 0), NAV_R, 0.05)
    light((0, 0.3, 0), STROBE, 0.04)


def picket():
    sphere((0, 0.036, 0), 0.072, HULL, 1.0, 14, 8)
    box((0.3, 0.012, 0.09), T((0, 0.036, 0)), SOLAR, 1.0, 0.0, True)
    cyl((0, 0.1, 0), (0, 0.2, 0), 0.006, 4, DARK, 0.9, 0.0, False)
    light((0, 0.13, 0), NAV_R, 0.036)


def ring_bay():
    """One bay of the ring: four chords, frames, diagonals, the service way down the middle."""
    w = 0.2
    for sy in (-1, 1):
        for sz in (-1, 1):
            beam((-0.5, sy * w, sz * w), (0.5, sy * w, sz * w), 0.03, DARK, 0.8)
    for x in (-0.5, 0.0):
        for s in (-1, 1):
            strut((x, s * w, -w), (x, s * w, w), 0.022)
            strut((x, -w, s * w), (x, w, s * w), 0.022)
    for s in (-1, 1):
        strut((-0.5, -w, s * w), (0.0, w, s * w), 0.02)
        strut((0.0, w, s * w), (0.5, -w, s * w), 0.02)
        strut((-0.5, s * w, -w), (0.0, s * w, w), 0.02)
        strut((0.0, s * w, w), (0.5, s * w, -w), 0.02)
    cyl((-0.5, 0, 0), (0.5, 0, 0), 0.06, 12, HULL, 0.85, 0.0, True)
    for x in (-0.25, 0.25):
        lathe(drum(-0.012, 0.012, 0.075), at((x, 0, 0), (1, 0, 0)), 12, DARK, 0.8, 0.0, False)
        box((0.01, 0.012, 0.004), T((x + 0.1, 0.0, 0.062)), WINDOW, 1, 0, False)


def ring_hub():
    lathe([(-0.36, 0), (-0.36, 0.24), (-0.3, 0.3), (0.3, 0.3), (0.36, 0.24), (0.36, 0)], UP, 28, HULL, 0.9, 0.01)
    band(-0.07, 0.07, 0.3, PAINT, 1.0, UP, 28, 0.005)
    for y in (0.16, -0.18):
        windows(rnd.random(), 26, TAU / 26, 0.3, y, 0.014, 0.018, UP, 0.35)
    for a in (0.6, 0.6 + PI):
        o = V((math.cos(a), 0, math.sin(a)))
        radiator(V((0, 0.5, 0)) + o * 0.06, o, (0, 1, 0), 0.6, 0.3, 3, 0.014)
    cyl((0, 0.36, 0), (0, 0.66, 0), 0.05, 10, DARK, 0.85, 0.0, True)
    box((0.5, 0.04, 0.5), T((0, -0.38, 0)), PAINT, 1.0, 0.006)  # a deck plate in the owner's colour
    light((0, 0.7, 0), STROBE, 0.04)


def berth():
    """An open frame with a hull in it, a crane over it and work lights; a strut runs in (-z) to the ring."""
    cage((0.9, 0.4, 0.4), (0, 0, 0), 0.018)
    K.base = K.base @ Matrix.Rotation(PI / 2, 4, 'Y')
    Hull([(-0.36, 0.1, 0.1), (-0.2, 0.2, 0.15), (0.0, 0.16, 0.13), (0.36, 0.03, 0.04)], HULL, 0.85, 0.008)
    for i in range(4):
        lathe([(0, 0.1), (0, 0.115), (0.012, 0.115), (0.012, 0.1)], T((0, 0, -0.3 + i * 0.12)), 4, DARK, 0.8, 0.0, False)
    K.base = K.base @ Matrix.Rotation(-PI / 2, 4, 'Y')
    box((0.3, 0.006, 0.14), T((0.1, 0.07, 0)), PAINT, 1.0, 0.0, True)
    beam((0, 0, -0.2), (0, 0, -0.26), 0.05, DARK, 0.8)
    top, jib = V((0, 0.45, -0.2)), V((0.27, 0.45, 0))
    beam((0, 0.2, -0.2), top, 0.03, DARK, 0.8)
    beam(top, jib, 0.025, HULL, 0.85)
    strut(jib, (0.27, 0.2, 0), 0.008)
    for sx in (-1, 1):
        box((0.02, 0.012, 0.3), T((sx * 0.45, 0.2, 0)), WINDOW, 1, 0, False)
        light((sx * 0.45, 0.2, 0.2), STROBE, 0.03)


DRIVER_L = 4.6


def rail_y(x):
    return 0.12 + ((x + DRIVER_L / 2) / DRIVER_L) * 0.75


def driver_a():
    L, n = DRIVER_L, 12
    for i in range(n + 1):
        x = -L / 2 + L * i / n
        y = rail_y(x)
        for sz in (-1, 1):
            strut((x, y, sz * 0.08), (x, FOOT, sz * 0.14), 0.03)
        beam((x, y - 0.03, -0.1), (x, y - 0.03, 0.1), 0.03, DARK, 0.8)
        if i < n:
            x2 = x + L / n
            for sz in (-1, 1):
                beam((x, y, sz * 0.05), (x2, rail_y(x2), sz * 0.05), 0.04, HULL, 0.9, 0.006)
            strut((x, y - 0.03, -0.1), (x2, rail_y(x2) - 0.03, 0.1), 0.02)


def driver_b():
    L, n = DRIVER_L, 12
    d = V((L, 0.75, 0)).normalized()
    for i in range(n):
        x = -L / 2 + L * (i + 0.5) / n
        M = at((x, rail_y(x), 0), d)
        lathe([(-0.03, 0.09), (-0.03, 0.135), (0.03, 0.135), (0.03, 0.09), (-0.03, 0.09)], M, 20, PAINT if i % 3 == 0 else DARK, 0.9, 0.0, True)
        lathe([(-0.04, 0.135), (-0.04, 0.142), (0.04, 0.142), (0.04, 0.135)], M, 20, HULL, 0.8, 0.0, False)


def driver_c():
    L = DRIVER_L
    d = V((L, 0.75, 0)).normalized()
    mx = L / 2
    for sz in (-1, 1):
        strut((mx, rail_y(mx), sz * 0.12), (mx, FOOT, sz * 0.25), 0.05)
        strut((mx - 0.3, rail_y(mx - 0.3), sz * 0.1), (mx, FOOT, sz * 0.25), 0.03)
    M = at((mx, rail_y(mx), 0), d)
    lathe([(-0.06, 0.12), (-0.06, 0.2), (0.08, 0.2), (0.08, 0.12), (-0.06, 0.12)], M, 24, PAINT, 1.0, 0.0, True)
    lathe([(0.08, 0.12), (0.08, 0.17), (0.22, 0.15), (0.22, 0.12), (0.08, 0.12)], M, 24, DARK, 0.8, 0.0, True)
    cx = -L * 0.2
    box((0.22, 0.07, 0.07), at((cx, rail_y(cx) + 0.06, 0), d, 0) @ Matrix.Rotation(PI / 2, 4, 'Y'), PAINT, 1.0, 0.006)
    for i in range(1, 6):
        x = -L / 2 + L * i / 6
        light((x, rail_y(x) + 0.16, 0.1), NAV_G if i % 2 else NAV_R, 0.03)
    light((mx + 0.05, rail_y(mx) + 0.24, 0), STROBE, 0.04)


def plant():
    """The driver's power plant and capacitor banks, standing on the ground at the foot of the rails."""
    box((0.46, 0.3, 0.5), T((0, 0.15, 0)), HULL, 0.82, 0.012)
    box((0.48, 0.04, 0.52), T((0, 0.31, 0)), PAINT, 1.0, 0.006)
    for z in (-0.18, 0, 0.18):
        lathe([(0, 0), (0, 0.06), (0.24, 0.06), (0.26, 0.04), (0.26, 0)], at((-0.33, 0, z), (0, 1, 0)), 14, HULL, 0.9, 0.004)
        pipe([(-0.33, 0.22, z), (-0.28, 0.26, z), (-0.23, 0.26, z)], 0.012, DARK, 0.9)
    for z in (-0.3, 0.3):
        radiator((0, 0.33, z), (0, 1, 0), (1, 0, 0), 0.4, 0.3, 2, 0.012)
    for i in range(4):
        box((0.004, 0.03, 0.05), T((0.232, 0.2, -0.15 + i * 0.1)), WINDOW, 1, 0, False)


PARTS = [array_a, array_b, array_c, ark_a, ark_b, ark_c, spire_a, spire_b, spire_c, spire_wheel, platform, picket, ring_bay, ring_hub, berth, driver_a, driver_b, driver_c, plant]

if __name__ == '__main__':
    run('megas', 'megas', lambda: parts(PARTS, 6.0, 60), views=[(0.7, 0.5, 5.5, (i * 6.0, 0, 0)) for i in (1, 4, 6, 10, 14)] + [(1.5, 0.3, 7.0, (16 * 6.0, 0.4, 0))])
