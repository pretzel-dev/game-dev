# The neutral stations: three kinds, so they are not all copies. Far bigger
# than ships (the game draws them several frigates across).
#
#  0  Wheel: a spoked wheel on a long spine, docks at the bow, tanks and power aft.
#  1  the wheel itself (it turns on its own, so it is a separate model)
#  2  Hub: a drum with arms of modules in one plane and a long keel mast.
#  3  Yard: a spine with open dock frames down one side and panels down the other.
#
# Run from perihelion-next/ (Blender 5.x):
#   /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup --python tools/blender/stations.py
# Writes src/assets/stations.glb and its shade map. Units are the station's size S; z is its axis.
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kit import *

V = Vector
T = Matrix.Translation
PI = math.pi
WHEEL_R = 0.3


def wheel_body():
    """The spine: a docking bow, crew drums, the wheel's bearing, panels, tanks and a reactor aft."""
    lathe([(-0.4, 0), (-0.4, 0.03), (-0.36, 0.04), (-0.07, 0.04), (-0.06, 0.055), (0.06, 0.055), (0.07, 0.04), (0.26, 0.04), (0.29, 0.062), (0.4, 0.062), (0.43, 0.036), (0.45, 0.036), (0.45, 0)], Matrix(), 28, HULL, 0.86, 0.003)
    band(-0.012, 0.012, 0.055, DARK, 0.8, Matrix(), 28, 0.004)
    band(0.3, 0.31, 0.062, PAINT, 1.0, Matrix(), 28)
    band(-0.3, -0.29, 0.04, PAINT, 1.0, Matrix(), 28)
    for z, n, r in ((0.33, 26, 0.062), (0.37, 26, 0.062), (0.16, 18, 0.04), (-0.18, 18, 0.04), (-0.24, 18, 0.04)):
        windows(rnd.random(), n, TAU / n, r, z, 0.0045, 0.007, Matrix(), 0.4)
    for z in (0.1, 0.22, -0.12, -0.33):
        band(z - 0.004, z + 0.004, 0.04, DARK, 0.8, Matrix(), 28, 0.004)
    lathe(drum(0.45, 0.47, 0.03), Matrix(), 16, DARK, 0.6, 0.0, False)  # the bow port
    for i in range(4):  # docking arms round the bow drum
        a = TAU * i / 4 + 0.4
        d = V((math.cos(a), math.sin(a), 0))
        capsule(d * 0.055 + V((0, 0, 0.35)), d, 0.014, 0.1, HULL, 0.9, 10)
        lathe(drum(-0.006, 0.006, 0.022), at(d * 0.158 + V((0, 0, 0.35)), d), 12, DARK, 0.8, 0.0, False)
        light(d * 0.17 + V((0, 0, 0.36)), NAV_G if i % 2 else NAV_R, 0.006)
    panel_pair((0, 0, -0.2), (math.cos(0.3), math.sin(0.3), 0), 0.34, 3, 0.052)
    panel_pair((0, 0, 0.2), (math.cos(1.9), math.sin(1.9), 0), 0.24, 2, 0.05)
    for i in range(4):  # tanks round the stern
        a = TAU * i / 4 + 0.2
        p = pol(a, 0.078, -0.34)
        sphere(p, 0.04, HULL, rnd.uniform(0.85, 1.0), 18, 10)
        band(-0.003, 0.003, 0.04, DARK, 0.8, T(p), 18, 0.002)
    lathe([(-0.47, 0), (-0.47, 0.04), (-0.46, 0.055), (-0.41, 0.055), (-0.4, 0.04), (-0.4, 0)], Matrix(), 18, DARK, 0.85, 0.003)
    for a in (0.9, 0.9 + PI):
        o = V((math.cos(a), math.sin(a), 0))
        radiator(V((0, 0, -0.435)) + o * 0.055, o, (0, 0, 1), 0.2, 0.07, 2, 0.003)
    m0, m1 = pol(2.6, 0.04, 0.27), pol(2.6, 0.2, 0.33)
    truss(m0, m1, 0.016, 4, 0.0028, (0, 0, 1))
    dish(m1, (-0.5, 0.5, 0.7), 0.06)
    light(m1 + V((0, 0, -0.02)), STROBE, 0.006)
    for i in range(6):  # the bearing's stays, out to where the spokes meet the rim
        a = TAU * i / 6
        strut(pol(a, 0.04, 0.09), pol(a, 0.058, 0.02), 0.003)
        strut(pol(a, 0.04, -0.09), pol(a, 0.058, -0.02), 0.003)


def wheel_rim():
    """The wheel: a rim of decks on six spokes, lit inside and out."""
    R = WHEEL_R
    ring(R, 0, 0.06, 0.03, 60, HULL, 0.92)
    lathe([(-0.012, R), (-0.012, R + 0.003), (0.012, R + 0.003), (0.012, R)], Matrix(), 60, PAINT, 1.0, 0.0, True)
    for z in (-0.03, 0.03):
        lathe([(z - 0.003, R - 0.034), (z - 0.003, R + 0.004), (z + 0.003, R + 0.004), (z + 0.003, R - 0.034), (z - 0.003, R - 0.034)], Matrix(), 60, DARK, 0.8, 0.0, False)
    for i in range(6):
        a = TAU * i / 6
        cyl(pol(a, 0.058, 0), pol(a, R - 0.03, 0), 0.009, 8, HULL, 0.8, 0.0, True)
        for s in (-1, 1):
            strut(pol(a, 0.06, s * 0.012), pol(a + TAU / 12, R - 0.03, 0), 0.0025)
        box((0.03, 0.05, 0.07), radial(a, R - 0.045, 0), DARK, 0.85, 0.002)
    for i in range(72):
        a = TAU * i / 72
        if rnd.random() < 0.7:
            box((0.007, 0.006, 0.003), radial(a, R - 0.0305, rnd.choice((-0.015, 0.015))) @ Matrix.Rotation(PI, 4, 'X'), WINDOW, 1, 0, False)
        if rnd.random() < 0.5:
            box((0.004, 0.005, 0.003), Matrix.Translation(pol(a, R - 0.015, 0.0305)) @ Matrix.Rotation(a, 4, 'Z') @ Matrix.Rotation(PI / 2, 4, 'Y'), WINDOW, 1, 0, False)
    lathe([(-0.03, 0.058), (-0.03, 0.066), (0.03, 0.066), (0.03, 0.058), (-0.03, 0.058)], Matrix(), 28, DARK, 0.85, 0.0, True)


def hub():
    """A drum hub with six arms of modules in one plane, a long keel mast below and an antenna farm above."""
    lathe([(-0.07, 0), (-0.07, 0.07), (-0.05, 0.095), (0.07, 0.095), (0.09, 0.07), (0.09, 0)], Matrix(), 32, HULL, 0.9, 0.004)
    band(0.0, 0.012, 0.095, PAINT, 1.0, Matrix(), 32)
    windows(0.1, 30, TAU / 30, 0.095, 0.04, 0.005, 0.008, Matrix(), 0.35)
    windows(0.2, 30, TAU / 30, 0.095, -0.025, 0.005, 0.008, Matrix(), 0.5)
    lathe([(0.09, 0), (0.09, 0.05), (0.13, 0.05), (0.14, 0.03), (0.14, 0)], Matrix(), 20, DARK, 0.85, 0.003)
    arms = ((0.38, 0.024), (0.24, 0.032), (0.32, 0.022), (0.2, 0.028), (0.36, 0.024), (0.24, 0.032))
    for i, (L, r) in enumerate(arms):
        a = TAU * i / 6 + 0.2
        d = V((math.cos(a), math.sin(a), 0))
        M = can(d * 0.085, d, r, L, rnd.uniform(0.75, 0.98), 16, 3, 0, i % 3 == 0, 0.35)
        windows(0.3, 5, 0.5, r, L * 0.4, 0.004, 0.006, M, 0.2)
        windows(0.9, 5, 0.5, r, L * 0.7, 0.004, 0.006, M, 0.3)
        for k in range(2):  # odd modules clamped on along the arm
            if rnd.random() < 0.75:
                box((0.05, 0.04, 0.036), at(d * (0.17 + k * 0.1) + V((0, 0, (-1) ** (i + k) * (r + 0.014))), d), PAINT if (i + k) % 4 == 0 else HULL, rnd.uniform(0.62, 0.9), 0.003)
        lathe([(0, 0), (0, r * 1.5), (0.012, r * 1.5), (0.012, r * 0.9), (0.016, r * 0.9), (0.016, 0)], at(d * (0.085 + L), d), 14, DARK, 0.75, 0.0015)
        light(d * (0.11 + L) + V((0, 0, r + 0.01)), NAV_G if i % 2 else NAV_R, 0.006)
        if i in (1, 4):
            panel_pair(d * (0.1 + L * 0.6), (0, 0, 1), 0.16, 2, 0.05, SOLAR, d)
    for i in range(6):
        a = TAU * i / 6 + 0.72
        d = V((math.cos(a), math.sin(a), 0))
        radiator(d * 0.095 + V((0, 0, 0.06)), d, (0, 0, 1), 0.09, 0.05, 1, 0.003)
    lathe([(-0.07, 0), (-0.2, 0), (-0.2, 0.04), (-0.07, 0.04)][::-1] + [(-0.07, 0)], Matrix(), 16, DARK, 0.85, 0.002)
    lathe(drum(-0.34, -0.2, 0.026), Matrix(), 12, DARK, 0.8, 0.002)
    truss((0, 0, -0.34), (0, 0, -0.52), 0.024, 5, 0.003, (1, 0, 0))
    light((0, 0, -0.525), STROBE, 0.006)
    for a, L in ((0.3, 0.1), (2.1, 0.07), (4.0, 0.13)):
        p = pol(a, 0.03, 0.14)
        cyl(p, p + V((0, 0, L)), 0.0018, 4, DARK, 0.9, 0.0, False)
    dish((0, 0, 0.142), (0.2, 0.3, 1), 0.04)


def yard():
    """A long truss spine: a crew drum amidships, two open dock frames (a hull half built in one), panels, tanks and a crane."""
    truss((0, 0, -0.46), (0, 0, 0.46), 0.05, 14, 0.0045, (1, 0, 0))
    lathe([(-0.08, 0), (-0.08, 0.06), (-0.06, 0.078), (0.06, 0.078), (0.08, 0.06), (0.08, 0)], Matrix(), 28, HULL, 0.9, 0.004)
    band(-0.012, 0.012, 0.078, PAINT, 1.0, Matrix(), 28)
    windows(0.2, 26, TAU / 26, 0.078, 0.035, 0.005, 0.008, Matrix(), 0.4)
    windows(0.1, 26, TAU / 26, 0.078, -0.035, 0.005, 0.008, Matrix(), 0.5)
    for z in (-0.3, 0.27):  # dock frames slung below the spine
        c = V((0, -0.14, z))
        cage((0.17, 0.13, 0.24), c, 0.008)
        for dz in (-0.08, 0.08):
            beam((0, -0.03, z + dz), (0, -0.075, z + dz), 0.012, DARK, 0.8)
        for sx in (-1, 1):
            for dz in (-0.1, 0.1):
                light(c + V((sx * 0.08, 0.06, dz)), STROBE, 0.006)
            box((0.008, 0.004, 0.2), T(c + V((sx * 0.07, 0.066, 0))), WINDOW, 1, 0, False)  # work lights along the frame
    # A hull on the slip: frames and half its plating.
    Hull([(-0.39, 0.03, 0.03, -0.14), (-0.34, 0.06, 0.045, -0.14), (-0.28, 0.05, 0.04, -0.14), (-0.21, 0.012, 0.014, -0.142)], HULL, 0.8, 0.003)
    for i in range(5):
        lathe([(0, 0.03), (0, 0.034), (0.004, 0.034), (0.004, 0.03)], T((0, -0.14, -0.38 + i * 0.035)), 4, DARK, 0.8, 0.0, False)
    for z in (-0.38, -0.2, 0.18, 0.36):
        panel_pair((0, 0.03, z), (1, 0, 0), 0.22, 1, 0.1, RAD, (0, 0, 1))
    for i in range(3):
        capsule((0.04, 0.035, -0.02 + i * 0.01), (1, 0.25 * (i - 1), 0), 0.03, 0.14, HULL, rnd.uniform(0.8, 0.95), 14)
        sphere((-0.075 - i * 0.07, 0.04, 0.14), 0.032, HULL, rnd.uniform(0.85, 1.0), 16, 10)
    j0 = V((0, 0.03, 0.27))
    j1 = j0 + V((0.5, 1, 0)).normalized() * 0.16
    j2 = j1 + V((0.3, -0.2, -1)).normalized() * 0.14
    beam(j0, j1, 0.009, HULL, 0.8)
    sphere(j1, 0.012, DARK, 0.8, 10, 6, False)
    beam(j1, j2, 0.007, HULL, 0.8)
    lathe([(0.46, 0), (0.46, 0.04), (0.5, 0.04), (0.5, 0.026), (0.51, 0.026), (0.51, 0)], Matrix(), 16, DARK, 0.8, 0.002)
    cyl((0, 0, -0.46), (0, 0, -0.54), 0.006, 6, DARK, 0.9, 0.0, False)
    dish((0, 0.08, 0.03), (0.3, 1, 0.3), 0.045)
    light((0, 0, -0.545), STROBE, 0.006)
    light((0.09, -0.14, 0.4), NAV_G, 0.006)
    light((-0.09, -0.14, 0.4), NAV_R, 0.006)


PARTS = [wheel_body, wheel_rim, hub, yard]

if __name__ == '__main__':
    run('stations', 'stations', lambda: parts(PARTS, 2.0, 40), views=[(0.6, 0.4, 2.4, (i * 2.0, 0, 0)) for i in range(4)])
