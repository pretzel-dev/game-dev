# Outline sheets: rough block-outs of new ship ideas, three per power, drawn as
# plain black shapes (side, top, angled) and again lit, to pick a direction
# before anything is built properly. Nothing here goes into the game.
#
# Run from perihelion-next/ (Blender 5.x):
#   /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup --python tools/blender/concepts.py
# Writes tools/blender/out/concept_<power>_<outline|lit>.png.
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kit import *
import kit

V = Vector
T = Matrix.Translation
PI = math.pi
CELL_W, CELL_H = 1.15, 0.62


# ---- Meridian Concord: thick armoured wedges. Deep hulls in layered plate, a tower, guns on deck
def engines(n, R, L, w, y=0.0, z=0.0):
    for i in range(n):
        bell(z, R, L, 16, 0.42, 1.6, 0.7, ((i - (n - 1) / 2) * w, y))


def gun(p, s=1.0, up=1):
    turret(p, (0, up, 0), s)


def concord_wedge():
    """A: a deep wedge. Stepped decks, a tower aft, a pod under the keel."""
    box((0.21, 0.14, 0.11), T((0, 0, 0.065)), HULL, 0.8, 0.008)
    engines(3, 0.034, 0.075, 0.066, 0, 0.012)
    for sx in (-1, 1):  # a guard frame round the bells
        beam((sx * 0.115, 0.07, -0.05), (sx * 0.115, -0.07, -0.05), 0.008, DARK)
        beam((sx * 0.115, 0.07, -0.05), (sx * 0.105, 0.07, 0.02), 0.008, DARK)
        beam((sx * 0.115, -0.07, -0.05), (sx * 0.105, -0.07, 0.02), 0.008, DARK)
    wedge((0.21, 0.13, 0.5), T((0, 0, 0.37)), 0.22, 0.3, HULL, 0.92, 0.008)
    wedge((0.15, 0.04, 0.34), T((0, 0.075, 0.31)), 0.4, 0.6, HULL, 1.0, 0.005, 0, -0.022)
    wedge((0.1, 0.03, 0.2), T((0, 0.105, 0.25)), 0.5, 0.6, HULL, 0.9, 0.004, 0, -0.012)
    for sx in (-1, 1):
        wedge((0.04, 0.07, 0.24), T((sx * 0.115, -0.01, 0.24)), 0.6, 0.5, HULL, 0.82, 0.005)
        box((0.012, 0.05, 0.1), T((sx * 0.108, 0.01, 0.42)), PAINT, 1.0, 0.0)
    box((0.14, 0.004, 0.035), T((0, 0.097, 0.36)), PAINT, 1.0, 0.0)
    box((0.14, 0.004, 0.012), T((0, 0.097, 0.33)), PAINT, 1.0, 0.0)
    box((0.07, 0.05, 0.08), T((0, 0.14, 0.17)), HULL, 0.95, 0.005)
    box((0.085, 0.012, 0.09), T((0, 0.17, 0.17)), DARK, 0.8, 0.002)
    cyl((0, 0.17, 0.16), (0, 0.33, 0.16), 0.004, 6, DARK)
    box((0.07, 0.05, 0.11), T((0, -0.09, 0.22)), HULL, 0.8, 0.005)
    cyl((0, -0.11, 0.22), (0, -0.25, 0.22), 0.003, 6, DARK)
    gun((0, 0.118, 0.3), 1.3)
    gun((0, 0.085, 0.45), 1.1)
    gun((0, -0.062, 0.4), 1.1, -1)
    lathe(drum(-0.022, 0.022, 0.016), at((0, 0, 0.625), (1, 0, 0)), 10, HULL, 0.9)


def concord_broadsword():
    """B: a long armoured hull with engine pods on the shoulders and a gun deck."""
    box((0.15, 0.12, 0.46), T((0, 0, 0.29)), HULL, 0.9, 0.008)
    wedge((0.15, 0.12, 0.2), T((0, 0, 0.62)), 0.35, 0.4, HULL, 0.95, 0.008)
    box((0.13, 0.1, 0.07), T((0, 0, 0.04)), DARK, 0.85, 0.006)
    engines(2, 0.036, 0.08, 0.07, 0, 0.01)
    for sx in (-1, 1):
        capsule((sx * 0.115, 0.015, 0.02), (0, 0, 1), 0.042, 0.26, HULL, 0.85, 16)
        bell(0.03, 0.03, 0.07, 14, 0.42, 1.6, 0.7, (sx * 0.115, 0.015))
        box((0.05, 0.02, 0.1), T((sx * 0.09, 0.015, 0.2)), DARK, 0.8, 0.004)
        box((0.008, 0.09, 0.3), T((sx * 0.08, 0, 0.36)), HULL, 0.8, 0.003)
        box((0.004, 0.05, 0.03), T((sx * 0.086, 0, 0.55)), PAINT, 1.0, 0.0)
        box((0.004, 0.05, 0.012), T((sx * 0.086, 0, 0.51)), PAINT, 1.0, 0.0)
    box((0.1, 0.03, 0.4), T((0, 0.073, 0.32)), HULL, 1.0, 0.005)
    for z in (0.22, 0.34, 0.46):
        gun((0, 0.09, z), 1.2)
    box((0.07, 0.07, 0.07), T((0, 0.1, 0.1)), HULL, 0.95, 0.005)
    cyl((0, 0.13, 0.1), (0, 0.3, 0.1), 0.004, 6, DARK)
    wedge((0.012, 0.09, 0.2), T((0, -0.1, 0.32)), 1.0, 0.4, HULL, 0.78, 0.003, 0, 0.027)
    cyl((0, -0.14, 0.26), (0, -0.24, 0.26), 0.003, 6, DARK)
    box((0.03, 0.004, 0.16), T((0, 0.09, 0.62)), PAINT, 1.0, 0.0)


def concord_bastion():
    """C: short and heavy. A blunt armoured bow, big shoulders, four engines."""
    box((0.24, 0.17, 0.34), T((0, 0, 0.23)), HULL, 0.88, 0.01)
    wedge((0.24, 0.17, 0.16), T((0, 0, 0.48)), 0.55, 0.5, HULL, 0.95, 0.01)
    box((0.2, 0.14, 0.07), T((0, 0, 0.04)), DARK, 0.85, 0.006)
    for sx in (-1, 1):
        for sy in (-1, 1):
            bell(0.01, 0.034, 0.075, 16, 0.42, 1.6, 0.7, (sx * 0.055, sy * 0.04))
        box((0.04, 0.2, 0.2), T((sx * 0.135, 0, 0.2)), HULL, 0.8, 0.008)
        box((0.006, 0.16, 0.03), T((sx * 0.157, 0, 0.26)), PAINT, 1.0, 0.0)
        box((0.006, 0.16, 0.01), T((sx * 0.157, 0, 0.225)), PAINT, 1.0, 0.0)
        box((0.05, 0.05, 0.07), T((sx * 0.06, 0.12, 0.14)), HULL, 0.95, 0.005)
        cyl((sx * 0.06, 0.14, 0.14), (sx * 0.06, 0.25, 0.14), 0.0035, 6, DARK)
    box((0.16, 0.03, 0.26), T((0, 0.1, 0.27)), HULL, 1.0, 0.006)
    gun((0, 0.115, 0.3), 1.5)
    gun((0, 0.115, 0.4), 1.2)
    gun((0, -0.085, 0.3), 1.4, -1)
    box((0.06, 0.004, 0.14), T((0, 0.062, 0.5)), PAINT, 1.0, 0.0)


# ---- One family at true relative size: what makes a hull read as large
def concord_hull(L):
    """A long armoured wedge of length L. Fittings (ports, guns, plates, masts) stay the same real
    size whatever the hull, so a bigger ship simply has more of them: that is what gives scale."""
    w, h = 0.15 * (L / 0.72) ** 0.8, 0.1 * (L / 0.72) ** 0.8
    n_eng = 2 if L < 0.5 else 3 if L < 1 else 5
    # Stern: the engine block and a guard frame.
    box((w * 1.04, h * 1.06, L * 0.13), T((0, 0, L * 0.085)), HULL, 0.78, 0.006)
    er = min(0.036, w * 0.8 / n_eng / 2)
    engines(n_eng, er, er * 2.2, w * 0.86 / n_eng, 0, L * 0.02)
    for i in range(int(L * 0.13 / 0.012)):  # cooling louvres
        for sx in (-1, 1):
            box((0.004, h * 0.7, 0.006), T((sx * w * 0.525, 0, L * 0.03 + i * 0.012)), DARK, 0.7, 0.0)
    # The hull: a parallel midbody, then a long taper to a narrow bow.
    mid0, mid1 = L * 0.15, L * 0.5
    box((w, h, mid1 - mid0), T((0, 0, (mid0 + mid1) / 2)), HULL, 0.9, 0.007)
    wedge((w, h, L - mid1), T((0, 0, (mid1 + L) / 2)), 0.2, 0.32, HULL, 0.93, 0.007)
    # Stepped decks.
    wedge((w * 0.72, h * 0.2, L * 0.62), T((0, h * 0.6, L * 0.49)), 0.3, 0.5, HULL, 1.0, 0.004, 0, -h * 0.11)
    wedge((w * 0.42, h * 0.16, L * 0.36), T((0, h * 0.78, L * 0.38)), 0.4, 0.5, HULL, 0.9, 0.003, 0, -h * 0.06)
    wedge((w * 0.5, h * 0.22, L * 0.5), T((0, -h * 0.58, L * 0.42)), 0.3, 0.4, HULL, 0.78, 0.004, 0, h * 0.1)
    # A trench down each flank with the lit ports in it, belt plates above and below.
    for sx in (-1, 1):
        box((0.004, h * 0.16, mid1 - mid0 - 0.02), T((sx * w * 0.5, 0, (mid0 + mid1) / 2)), DARK, 0.6, 0.0)
        npl = max(2, int((mid1 - mid0) / 0.055))
        pl = (mid1 - mid0) / npl
        for i in range(npl):
            for sy in (-1, 1):
                box((0.008, h * 0.3, pl * 0.92), T((sx * (w * 0.5 + 0.002), sy * h * 0.27, mid0 + pl * (i + 0.5))), HULL, rnd.uniform(0.8, 0.98), 0.002)
        for i in range(int((mid1 - mid0 - 0.03) / 0.011)):
            if rnd.random() < 0.75:
                box((0.002, 0.004, 0.005), T((sx * (w * 0.5 + 0.003), 0, mid0 + 0.02 + i * 0.011)), WINDOW, 1, 0, False)
        # Owner's stripes on the bow.
        for k, zz in enumerate((0.66, 0.7)):
            fw = 1 - 0.8 * (L * zz - mid1) / (L - mid1)
            box((0.004, h * 0.5 * (1 - 0.68 * (L * zz - mid1) / (L - mid1)), 0.028 if k == 0 else 0.01), T((sx * w * 0.5 * fw, 0, L * zz)), PAINT, 1.0, 0.0)
    # Guns: small against the hull, and more of them on a bigger ship.
    ng = max(1, round(L / 0.2))
    for i in range(ng):
        z = L * 0.3 + i * (L * 0.36 / max(1, ng - 1) if ng > 1 else 0)
        gun((0, h * (0.7 if z > L * 0.56 else 0.86) - (z - L * 0.3) * 0.12 * h / (L * 0.36 + 1e-6), z), 0.9)
        if i % 2 == 0:
            gun((0, -h * 0.69 + (z - L * 0.3) * 0.1 * h / (L * 0.36 + 1e-6), z + 0.03), 0.8, -1)
    for sx in (-1, 1):
        for i in range(max(1, round(L / 0.3))):
            pdc((sx * w * 0.36, h * 0.52, L * 0.22 + i * 0.16), (sx * 0.3, 1, 0))
    # The tower: small, well aft, with thin masts.
    tw = 0.045
    box((tw, 0.03, tw * 1.4), T((0, h * 0.86 + 0.015, L * 0.2)), HULL, 0.96, 0.003)
    box((tw * 1.2, 0.006, tw * 1.5), T((0, h * 0.86 + 0.033, L * 0.2)), DARK, 0.8, 0.0)
    for i in range(5):
        box((0.004, 0.003, 0.002), T(((i - 2) * 0.008, h * 0.86 + 0.02, L * 0.2 + tw * 0.7)), WINDOW, 1, 0, False)
    cyl((0, h * 0.86 + 0.03, L * 0.19), (0, h * 0.86 + 0.16, L * 0.19), 0.002, 4, DARK)
    cyl((0.012, h * 0.86 + 0.03, L * 0.21), (0.012, h * 0.86 + 0.09, L * 0.21), 0.0015, 4, DARK)
    cyl((0, -h * 0.69, L * 0.3), (0, -h * 0.69 - 0.1, L * 0.3), 0.002, 4, DARK)
    lathe(drum(-0.012, 0.012, 0.01), at((0, 0, L - 0.004), (1, 0, 0)), 8, DARK, 0.9)
    box((w * 0.2, 0.003, L * 0.2), T((0, h * 0.71 - 0.11 * h, L * 0.6)), PAINT, 1.0, 0.0)


# ---- Boreal Republic: built round the gun and the reactor. Open frames, a glowing core, many small engines
def cluster(n, R, L, ring, z=0.0):
    bell(z, R * 1.25, L * 1.1, 16)
    for i in range(n):
        a = TAU * i / n
        bell(z, R, L, 12, 0.42, 1.6, 0.7, (math.cos(a) * ring, math.sin(a) * ring))


def core(z0, z1, r, n=4):
    """The reactor, in the open: glowing drums in a frame."""
    L = (z1 - z0) / n
    for i in range(n):
        lathe(drum(z0 + i * L + L * 0.1, z0 + (i + 1) * L - L * 0.1, r), Matrix(), 16, RAD, 1.0)
        lathe(drum(z0 + (i + 1) * L - L * 0.1, z0 + (i + 1) * L + L * 0.1, r * 0.6), Matrix(), 10, DARK, 0.8)
    cage((r * 2.7, r * 2.7, z1 - z0 + 0.02), (0, 0, (z0 + z1) / 2), 0.008)


def boreal_lance():
    """A: two long gun rails ahead of an open, glowing reactor and a block of engines."""
    box((0.17, 0.13, 0.18), T((0, 0, 0.1)), HULL, 0.82, 0.008)
    cluster(4, 0.026, 0.06, 0.05, 0.012)
    for sx in (-1, 1):
        for i in range(4):
            box((0.012, 0.11, 0.03), T((sx * 0.09, 0, 0.04 + i * 0.04)), DARK, 0.7, 0.002)
        box((0.045, 0.06, 0.5), T((sx * 0.04, 0, 0.6)), HULL, 0.9, 0.006)
        box((0.05, 0.02, 0.44), T((sx * 0.04, 0.035, 0.6)), DARK, 0.7, 0.003)
        box((0.006, 0.04, 0.05), T((sx * 0.064, 0, 0.74)), PAINT, 1.0, 0.0)
    for z in (0.42, 0.56, 0.7, 0.83):
        box((0.14, 0.075, 0.02), T((0, 0, z)), DARK, 0.85, 0.003)
    core(0.2, 0.36, 0.04)
    box((0.06, 0.04, 0.09), T((0, 0.085, 0.3)), HULL, 0.95, 0.005)
    cyl((0, 0.1, 0.3), (0, 0.24, 0.3), 0.0035, 6, DARK)
    gun((0, 0.07, 0.14), 1.2)
    gun((0, -0.066, 0.14), 1.2, -1)


def boreal_spine():
    """B: a long spine. Tanks round it, paired glowing panels, a shield at the bow."""
    bell(0, 0.07, 0.15, 24)
    cluster(3, 0.02, 0.05, 0.055, 0.03)
    lathe([(0.01, 0), (0.01, 0.04), (0.09, 0.035), (0.09, 0)], Matrix(), 16, DARK, 0.9)
    lathe([(0.095, 0), (0.095, 0.05), (0.11, 0.075), (0.12, 0.075), (0.12, 0)], Matrix(), 20, DARK, 0.75)
    truss3(0.12, 0.68, 0.022, 10, 0.004)
    for sx in (-1, 1):
        for z in (0.2, 0.31):
            strut((0, 0, z), (sx * 0.2, 0, z), 0.004)
            box((0.13, 0.005, 0.085), T((sx * 0.14, 0, z)), RAD, 1.0, 0.0)
    for i in range(4):
        a = TAU * i / 4 + 0.4
        sphere((math.cos(a) * 0.052, math.sin(a) * 0.052, 0.43), 0.042, HULL, 1.0)
    lathe([(0.5, 0), (0.5, 0.04), (0.51, 0.05), (0.6, 0.05), (0.61, 0.04), (0.61, 0)], Matrix(), 18, HULL, 0.9)
    lathe([(0.535, 0.045), (0.535, 0.053), (0.555, 0.053), (0.555, 0.045)], Matrix(), 18, PAINT, 1.0)
    lathe([(0.68, 0), (0.68, 0.085), (0.7, 0.06), (0.71, 0)], Matrix(), 20, HULL, 0.8)
    cyl((0, 0, 0.71), (0, 0, 0.78), 0.003, 6, DARK)
    gun((0, 0.052, 0.555), 1.0)


def boreal_hammer():
    """C: an armoured head and an engine block, joined by an open frame full of tanks."""
    box((0.17, 0.14, 0.14), T((0, 0, 0.08)), HULL, 0.82, 0.008)
    cluster(5, 0.024, 0.055, 0.052, 0.012)
    for sx in (-1, 1):
        box((0.06, 0.008, 0.12), T((sx * 0.115, 0.03, 0.08)), RAD, 1.0, 0.0)
        box((0.06, 0.008, 0.12), T((sx * 0.115, -0.03, 0.08)), RAD, 1.0, 0.0)
    cage((0.13, 0.11, 0.3), (0, 0, 0.3), 0.009)
    for z in (0.24, 0.36):
        cage((0.13, 0.11, 0.004), (0, 0, z), 0.007)
    for i, z in enumerate((0.2, 0.3, 0.4)):
        sphere((0.022 * (1 if i % 2 else -1), 0, z), 0.045, HULL, 1.0)
    core(0.2, 0.42, 0.014, 3)
    box((0.16, 0.13, 0.14), T((0, 0, 0.52)), HULL, 0.92, 0.008)
    wedge((0.16, 0.13, 0.12), T((0, 0, 0.65)), 0.45, 0.45, HULL, 0.96, 0.008)
    box((0.162, 0.03, 0.03), T((0, 0.02, 0.5)), PAINT, 1.0, 0.0)
    box((0.06, 0.04, 0.07), T((0, 0.085, 0.5)), HULL, 0.95, 0.005)
    cyl((0, 0.1, 0.5), (0, 0.22, 0.5), 0.0035, 6, DARK)
    cyl((0, 0, 0.6), (0, 0, 0.82), 0.014, 10, DARK, 0.7)
    gun((0, 0.07, 0.6), 1.1)
    gun((0, -0.07, 0.56), 1.1, -1)


# ---- Stations: far bigger than ships (a frigate would be about the size of one docking arm's end)
def wheel(R, z, w=0.05, t=0.03, spokes=6, seg=48):
    lathe([(z - w / 2, R - t), (z - w / 2, R), (z + w / 2, R), (z + w / 2, R - t), (z - w / 2, R - t)], Matrix(), seg, HULL, 0.95)
    lathe([(z - w * 0.2, R), (z - w * 0.2, R + 0.004), (z + w * 0.2, R + 0.004), (z + w * 0.2, R)], Matrix(), seg, PAINT, 1.0)
    for i in range(spokes):
        a = TAU * i / spokes
        cyl(pol(a, 0.03, z), pol(a, R - t, z), 0.008, 6, DARK, 0.8)
        strut(pol(a, 0.03, z + 0.1), pol(a + TAU / spokes / 2, R - t, z), 0.003)


def panels(z, reach, n=3, a=0.0, w=0.05, kind=SOLAR):
    for s in (-1, 1):
        d = V((math.cos(a), math.sin(a), 0)) * s
        strut(V((0, 0, z)), V((0, 0, z)) + d * reach, 0.004)
        nrm = d.cross(V((0, 0, 1)))
        for i in range(n):
            m = Matrix((V((0, 0, 1)), d, nrm)).transposed().to_4x4()
            m.translation = V((0, 0, z + (i - (n - 1) / 2) * w * 1.15)) + d * (reach * 0.58)
            box((w, reach * 0.7, 0.003), m, kind, 1.0, 0.0)


def station_wheel():
    """A: a spoked wheel on a long spine. Docks at the bow, tanks and power aft."""
    lathe([(-0.42, 0), (-0.42, 0.035), (-0.3, 0.04), (0.3, 0.04), (0.34, 0.06), (0.4, 0.06), (0.42, 0.03), (0.42, 0)], Matrix(), 20, HULL, 0.85)
    wheel(0.27, 0.02)
    panels(-0.2, 0.3, 3, 0.3)
    panels(0.24, 0.22, 2, 1.2)
    for i in range(4):
        a = TAU * i / 4
        sphere(pol(a, 0.06, -0.33), 0.04, HULL, 1.0)
        capsule(pol(a + 0.78, 0.12, 0.32), pol(a + 0.78, 1, 0), 0.016, 0.1, HULL, 0.9, 10)
    lathe(drum(-0.47, -0.42, 0.06), Matrix(), 16, DARK, 0.8)
    for z in (-0.12, 0.12):
        lathe(drum(z - 0.02, z + 0.02, 0.055), Matrix(), 18, DARK, 0.85)


def station_hub():
    """B: a drum hub with arms of modules in one plane and a long keel mast."""
    lathe([(-0.07, 0), (-0.07, 0.07), (-0.05, 0.09), (0.07, 0.09), (0.09, 0.07), (0.09, 0)], Matrix(), 24, HULL, 0.9)
    lathe([(0.09, 0), (0.09, 0.05), (0.13, 0.05), (0.13, 0)], Matrix(), 16, DARK, 0.85)
    for i, (L, r) in enumerate(((0.36, 0.022), (0.24, 0.03), (0.3, 0.02), (0.2, 0.026), (0.34, 0.022), (0.22, 0.03))):
        a = TAU * i / 6 + 0.2
        d = V((math.cos(a), math.sin(a), 0))
        capsule(d * 0.08, d, r, L, HULL, 0.8 + 0.04 * i, 12)
        for k in range(2):
            box((0.05, 0.05, 0.035), at(d * (0.16 + k * 0.1), d), PAINT if (i + k) % 3 == 0 else HULL, 0.75, 0.003)
        lathe(drum(-0.012, 0.012, r * 1.5), at(d * (0.08 + L), d), 12, DARK, 0.8)
    for i in range(6):
        a = TAU * i / 6 + 0.72
        box((0.1, 0.004, 0.03), at(V((math.cos(a), math.sin(a), 0)) * 0.14 + V((0, 0, 0.11)), (0, 0, 1), a), HULL, 0.9, 0.0)
    cyl((0, 0, -0.07), (0, 0, -0.2), 0.04, 12, DARK, 0.85)
    cyl((0, 0, -0.2), (0, 0, -0.34), 0.026, 10, DARK, 0.8)
    cyl((0, 0, -0.34), (0, 0, -0.5), 0.012, 8, DARK, 0.75)
    cyl((0, 0, 0.13), (0, 0, 0.2), 0.008, 6, DARK)


def station_yard():
    """C: a long spine with open dock frames down one side and panels down the other."""
    truss((0, 0, -0.45), (0, 0, 0.45), 0.05, 12, 0.005, (1, 0, 0))
    lathe([(-0.08, 0), (-0.08, 0.06), (-0.06, 0.075), (0.06, 0.075), (0.08, 0.06), (0.08, 0)], Matrix(), 20, HULL, 0.9)
    lathe([(-0.02, 0.07), (-0.02, 0.079), (0.02, 0.079), (0.02, 0.07)], Matrix(), 20, PAINT, 1.0)
    for z in (-0.32, 0.26):
        cage((0.16, 0.12, 0.2), (0, -0.13, z), 0.007)
        beam((0, -0.03, z), (0, -0.07, z), 0.012, DARK)
    wedge((0.05, 0.035, 0.15), T((0, -0.13, -0.32)), 0.3, 0.4, HULL, 0.9, 0.004)
    for z in (-0.36, -0.24, 0.2, 0.32):
        panels(z, 0.2, 1, PI / 2 + 0.0, 0.09, RAD)
    for i in range(3):
        capsule((0.05, 0.03, -0.2 + i * 0.012), (1, 0.3 * i, 0), 0.03, 0.14, HULL, 0.8 + 0.07 * i, 12)
    lathe(drum(0.45, 0.5, 0.04), Matrix(), 14, DARK, 0.8)
    cyl((0, 0, -0.45), (0, 0, -0.52), 0.008, 6, DARK)


# ---- Lantern Holds: lopsided clusters hung off a spine, lit and lived in
def holds_drive(R=0.05, L=0.11):
    bell(0, R, L, 20)
    lathe([(0.008, 0), (0.008, R * 0.55), (0.06, R * 0.5), (0.06, 0)], Matrix(), 14, DARK, 0.9)
    lathe([(0.066, 0), (0.066, R * 0.9), (0.076, R * 0.9), (0.076, 0)], Matrix(), 16, DARK, 0.75)
    return 0.076


def holds_lantern():
    """B: a cage of mismatched modules round the middle, a long nose."""
    z = holds_drive()
    truss((0, 0, z), (0, 0, z + 0.56), 0.03, 9, 0.004, (1, 0, 0))
    for i, (r, L, dz) in enumerate(((0.03, 0.2, 0), (0.038, 0.16, 0.03), (0.026, 0.22, -0.01), (0, 0, 0), (0.034, 0.18, 0.02), (0.03, 0.14, 0.05))):
        p = pol(TAU * i / 6, 0.09, z + 0.12 + dz)
        if r:
            capsule(p, (0, 0, 1), r, L, HULL, 0.75 + 0.05 * i)
        else:
            sphere(p + V((0, 0, 0.1)), 0.05, HULL, 1.0)
    for zz in (0.14, 0.3):
        lathe([(z + zz, 0.125), (z + zz, 0.132), (z + zz + 0.012, 0.132), (z + zz + 0.012, 0.125)], Matrix(), 28, DARK, 0.8)
    can((0, 0, z + 0.56), (0, 0, 1), 0.036, 0.1, 1.0, 14, 1, 0, False)
    for s in (-1, 1):
        patchrad((s * 0.02, 0, z + 0.44), (s, 0.2, 0), 0.1, 0.12, 2)


def real(name):
    """The class functions of a finished ships script (its `run` line left off), to draw them on a sheet."""
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), name)
    g = {'__file__': path}
    exec(compile(open(path).read().split('\nHULLS = ')[0], path, 'exec'), g)
    return g


CONCORD = real('concord_ships.py')
POWERS = {
    'concord_a': ('Meridian Concord (true relative size)', (('Corvette', CONCORD['corvette']), ('Frigate', CONCORD['frigate']), ('Escort', CONCORD['escort'])), 0.55),
    'concord_b': ('Meridian Concord (true relative size)', (('Battleship', CONCORD['battleship']), ('Tender', CONCORD['tender']), ('Freighter', CONCORD['freighter'])), 0.55),
    'concord': ('Meridian Concord', (('A  Wedge', concord_wedge), ('B  Broadsword', concord_broadsword), ('C  Bastion', concord_bastion))),
    'boreal': ('Boreal Republic', (('A  Lance', boreal_lance), ('B  Spine', boreal_spine), ('C  Hammer', boreal_hammer))),
    'family': ('Meridian Concord: one family at true relative size', (('Corvette', lambda: concord_hull(0.4)), ('Frigate', lambda: concord_hull(0.72)), ('Battleship', lambda: concord_hull(1.37))), 0.68),
    'stations': ('Stations', (('A  Wheel', station_wheel), ('B  Hub', station_hub), ('C  Yard', station_yard))),
}
SIDE = Matrix(((0, 0, 1), (1, 0, 0), (0, 1, 0))).to_4x4()   # ship z -> sheet right, ship y -> sheet up
TOP = Matrix(((0, 0, 1), (0, -1, 0), (1, 0, 0))).to_4x4()   # ship z -> sheet right, ship x -> sheet up
ANGLED = Matrix.Rotation(math.radians(-22), 4, 'X') @ Matrix.Rotation(math.radians(38), 4, 'Z') @ SIDE
VIEWS = (('side', SIDE), ('top', TOP), ('angled', ANGLED))


def text(s, x, z, size, mat):
    cu = bpy.data.curves.new('t', 'FONT')
    cu.body, cu.size = s, size
    ob = bpy.data.objects.new('t', cu)
    ob.location = (x, 0, z)
    ob.rotation_euler = (PI / 2, 0, 0)
    ob.data.materials.append(mat)
    bpy.context.scene.collection.objects.link(ob)
    return ob


def flat(name, col):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    nt.nodes.clear()
    out, em = nt.nodes.new('ShaderNodeOutputMaterial'), nt.nodes.new('ShaderNodeEmission')
    em.inputs['Color'].default_value = (*col, 1)
    nt.links.new(em.outputs[0], out.inputs['Surface'])
    return m


def sheet(key):
    title, options, *rest = POWERS[key]
    zoom = rest[0] if rest else 1.0
    for o in list(bpy.data.objects):
        bpy.data.objects.remove(o, do_unlink=True)
    kit.B.clear()
    K.name = 'concept_' + key
    for r, (label, fn) in enumerate(options):
        for c, (_, M) in enumerate(VIEWS):
            K.base = T((c * CELL_W - 0.36, 0, -r * CELL_H)) @ M @ Matrix.Scale(zoom, 4)
            K.part, K.lod = 0, 0.0
            rnd.seed(7 + r)
            fn()
    ob = kit.finish()
    sc = bpy.context.scene
    W, H = CELL_W * 3 + 0.45, CELL_H * 3 + 0.3
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam'))
    cam.data.type = 'ORTHO'
    cam.data.ortho_scale = W
    cam.location = (W / 2 - 0.95, -20, -H / 2 + 0.52)
    cam.rotation_euler = (PI / 2, 0, 0)
    sc.collection.objects.link(cam)
    sc.camera = cam
    sc.render.resolution_x, sc.render.resolution_y = 1950, int(1950 * H / W)
    sc.view_settings.view_transform = 'Standard'
    sc.render.engine = 'CYCLES'
    sc.cycles.samples = 16
    sc.cycles.use_denoising = True
    if not sc.world:
        sc.world = bpy.data.worlds.new('w')
    sc.world.use_nodes = True
    bg = sc.world.node_tree.nodes['Background']
    black, bone = flat('black', (0.01, 0.01, 0.012)), flat('bone', (0.8, 0.77, 0.7))
    sun = bpy.data.objects.new('sun', bpy.data.lights.new('sun', 'SUN'))
    sun.data.energy = 5
    sun.rotation_euler = (math.radians(50), math.radians(-25), math.radians(20))
    sc.collection.objects.link(sun)
    me = ob.data
    kind, tint = [0.0] * len(me.polygons), [0.0] * len(me.polygons)
    me.attributes['kind'].data.foreach_get('value', kind)
    me.attributes['tint'].data.foreach_get('value', tint)
    pal = {HULL: (0.72, 0.73, 0.74), DARK: (0.16, 0.17, 0.19), PAINT: (0.85, 0.3, 0.08), WINDOW: (1, 0.75, 0.35), THROAT: (0.4, 0.6, 1.0), RAD: (0.9, 0.2, 0.06), SOLAR: (0.5, 0.26, 0.1)}
    colattr = me.color_attributes.new('Pre', 'FLOAT_COLOR', 'CORNER')
    cols = []
    for p in me.polygons:
        k = int(round(kind[p.index]))
        cc = pal.get(k, (0.5, 0.5, 0.5))
        t = tint[p.index] if k in (HULL, DARK) else 1
        cols += [cc[0] * t, cc[1] * t, cc[2] * t, 1.0] * p.loop_total
    colattr.data.foreach_set('color', cols)
    clay = bpy.data.materials.new('clay')
    clay.use_nodes = True
    bs = clay.node_tree.nodes['Principled BSDF']
    an = clay.node_tree.nodes.new('ShaderNodeAttribute')
    an.attribute_name = 'Pre'
    clay.node_tree.links.new(an.outputs['Color'], bs.inputs['Base Color'])
    bs.inputs['Roughness'].default_value = 0.5
    bs.inputs['Metallic'].default_value = 0.25
    out = os.path.join(kit.ROOT, 'tools', 'blender', 'out')
    os.makedirs(out, exist_ok=True)
    for mode, mat, ink, world in (('outline', black, black, (0.8, 0.77, 0.7)), ('lit', clay, bone, (0.004, 0.005, 0.008))):
        texts = [text(title, -0.9, 0.42, 0.075, ink)]
        for r, (label, _) in enumerate(options):
            texts.append(text(label, -0.9, -r * CELL_H + 0.2, 0.05, ink))
        for c, (name, _) in enumerate(VIEWS):
            texts.append(text(name, c * CELL_W - 0.36, 0.3, 0.04, ink))
        ob.data.materials.clear()
        ob.data.materials.append(mat)
        bg.inputs[0].default_value = (*world, 1)
        sun.hide_render = mode == 'outline'
        sc.render.filepath = os.path.join(out, f'concept_{key}_{mode}.png')
        bpy.ops.render.render(write_still=True)
        for t in texts:
            bpy.data.objects.remove(t, do_unlink=True)


for key in (kit.ARGS or [k for k in POWERS if not k.startswith('concord_')]):
    sheet(key)
