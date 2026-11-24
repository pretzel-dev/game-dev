# The Lantern Holds' home station.
#
# Run from perihelion-next/ (Blender 5.x):
#   /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup --python tools/blender/holds_station.py
# Add `-- build preview` (or bake, export) to run only some steps; previews go
# to tools/blender/out/. Writes src/assets/holds-station.glb and its shade map.
#
# Units are the station's size S (the game scales it).
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kit import *

# ---- The station ----------------------------------------------------------------
def build():
    begin(0)
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


run('holds_station', 'holds-station', build, views=((0.9, 0.35, 3.3, (0, 0, -0.15)), (3.6, 0.5, 3.3, (0, 0, -0.15)), (1.9, 0.2, 1.3, (0, 0, 0.15))))
