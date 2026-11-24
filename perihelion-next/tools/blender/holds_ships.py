# The Lantern Holds' ships: practical and functional. Working vessels built on
# a truss spine: a bare drive aft, a crew can on the nose, and between them a
# cage of hoops holding whatever the ship is for, all of it mismatched and lit.
#
# Each class has its own outline: the corvette is a tug with one small cage;
# the frigate is the lantern (a cage of odd modules); the escort is a gun wheel;
# the battleship has two cages and a mass driver slung beneath; the tender is a
# cage full of ball tanks; the freighter is an ore train.
#
# Fittings are the same real size on every class (the game draws these models
# at the size they are made), so a bigger hull simply carries more of them.
#
# Run from perihelion-next/ (Blender 5.x):
#   /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup --python tools/blender/holds_ships.py
# Writes src/assets/holds-ships.glb (six hulls and their far-off versions) and one shade map.
# Parts 0-5 are the classes in the game's order; parts 6-11 the same hulls for far away.
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kit import *

V = Vector
T = Matrix.Translation
LOD = [0.02, 0.034, 0.034, 0.05, 0.045, 0.04]
# True lengths in hull units (a frigate is 0.72).
LEN = [0.36, 0.72, 0.56, 1.7, 1.0, 1.05]


def drive(R, extra=()):
    """A bare reactor and bell with a pump pack bolted on one side, and any odd smaller engines added since.
    Returns z forward of the shadow shield."""
    L, rr, rl = R * 2.2, R * 0.55, R * 0.85
    torch(0, 0, 0, R, L, 22)
    for i in range(5):
        a = TAU * i / 5 + 0.3
        strut(pol(a, rr, 0.014), pol(a, R * 0.62, -L * 0.3), 0.0045)
    lathe([(0.004, 0), (0.004, rr * 0.8), (0.014, rr), (0.014 + rl, rr), (0.02 + rl, rr * 0.7), (0.02 + rl, 0)], Matrix(), 16, DARK, 0.95, 0.0015)
    for i in range(3):
        band(0.02 + rl * (0.2 + 0.3 * i), 0.024 + rl * (0.2 + 0.3 * i), rr, DARK, 0.7, Matrix(), 16, rr * 0.06)
    box((rr * 1.2, rr * 1.2, rl * 0.6), T((rr * 0.95, -rr * 0.5, 0.02 + rl / 2)), HULL, 0.78, 0.002)  # pump pack
    pipe([(rr * 0.95, -rr * 0.5, 0.02 + rl * 0.2), (rr * 0.95, -rr * 0.5, 0.004), (rr * 0.4, -rr * 0.2, -0.004)], rr * 0.09)
    zs = 0.03 + rl
    lathe([(zs, 0), (zs, rr * 0.95), (zs + 0.006, rr * 1.7), (zs + 0.012, rr * 1.7), (zs + 0.012, 0)], Matrix(), 20, DARK, 0.75, 0.0015)  # shadow shield
    for x, y, r in extra:
        torch(x, y, 0.02, r, r * 2.3, 14)
        cyl((x, y, 0.02), (x, y, zs), r * 0.5, 8, DARK, 0.9, 0.0, False)
        strut((x * 0.3, y * 0.3, zs), (x, y, 0.03), 0.004)
    return zs + 0.012


def spine(z0, z1, w, bays):
    truss((0, 0, z0), (0, 0, z1), w, bays, 0.0045, (1, 0, 0))


def hoop(z, R, t=0.008, w=0.012, spokes=4, a0=0.785, hub=0.02, kind=DARK, tint=0.8):
    """One hoop of a cage, on spokes from the spine."""
    lathe([(z - w / 2, R - t), (z - w / 2, R), (z + w / 2, R), (z + w / 2, R - t), (z - w / 2, R - t)], Matrix(), 28, kind, tint, 0.0, True)
    for i in range(spokes):
        a = a0 + TAU * i / spokes
        strut(pol(a, hub, z), pol(a, R - t, z), 0.0045)


def cage(z0, z1, R, hoops=2, rails=4):
    """A cage: hoops and the rails that tie them. Returns the hoops' z."""
    zs = [z0 + (z1 - z0) * i / (hoops - 1) for i in range(hoops)]
    for z in zs:
        hoop(z, R)
    for i in range(rails):
        a = 0.39 + TAU * i / rails
        strut(pol(a, R - 0.004, z0), pol(a, R - 0.004, z1), 0.004)
    return zs


def crew(p, r, L, win=6, tint=1.0, paint=True):
    """A crew can: a drum with a band of paint, lit panes and a flight-deck window."""
    M = can(p, (0, 0, 1), r, L, tint, 16, 1, win, paint, 0.5)
    box((r * 0.9, 0.004, 0.005), M @ T((0, r * 0.52, L - r * 0.14)), WINDOW, 1, 0, False)
    return M


def module(i, a, rad, z, r, L):
    """One of a cage's loads, of whatever make was to hand: a can, a ball tank, a strapped tank or a crate."""
    p = pol(a, rad, z)
    k = i % 4
    if k == 0:
        can(p, (0, 0, 1), r, L, rnd.uniform(0.7, 1.0), 14, 1, rnd.choice((0, 4, 6)), rnd.random() < 0.4, 0.4)
    elif k == 1:
        sphere(p + V((0, 0, L / 2)), r * 1.25, HULL, rnd.uniform(0.85, 1.02), 18, 10)
        band(-0.004, 0.004, r * 1.25, DARK, 0.8, T(p + V((0, 0, L / 2))), 18, 0.002)
    elif k == 2:
        strapped(p, r * 0.9, L, rnd.uniform(0.8, 0.95), rnd.random() < 0.5)
    else:
        box((r * 1.7, r * 1.7, L * 0.8), T(p + V((0, 0, L / 2))) @ Matrix.Rotation(a, 4, 'Z'), PAINT if rnd.random() < 0.3 else HULL, rnd.uniform(0.6, 0.95), 0.003)
        for f in (-0.25, 0.25):
            box((r * 1.76, r * 1.76, 0.004), T(p + V((0, 0, L / 2 + f * L))) @ Matrix.Rotation(a, 4, 'Z'), DARK, 0.8, 0.0, False)


def nose(z, r, L, win=6):
    """The crewed end: the can, a dish on a stub, a whip, attitude jets and the running lights."""
    crew((0, 0, z), r, L, win)
    strut((r * 0.5, r * 0.7, z + L * 0.4), (r * 0.9, r * 1.5, z + L * 0.5), 0.004)
    dish((r * 0.9, r * 1.5, z + L * 0.5), (0.5, 0.8, 0.4), r * 0.85)
    cyl((0, 0, z + L), (0.01, 0.01, z + L + 0.07), 0.0012, 4, DARK, 0.9, 0.0, False)
    for sx in (-1, 1):
        rcs((sx * (r + 0.008), 0, z + L * 0.5), (sx, 0, 0))
    light((-r - 0.01, 0, z + L * 0.3), NAV_R, 0.005)
    light((r + 0.01, 0, z + L * 0.3), NAV_G, 0.005)
    light((0, r + 0.01, z + L * 0.2), STROBE, 0.005)


def aft_jets(z, r=0.04):
    for sx in (-1, 1):
        strut((0, 0, z), (sx * r, 0, z), 0.004)
        rcs((sx * r, 0, z), (sx, 0, 0))


def corvette():
    """A tug: one small cage with three pods, a big dish, a crew can."""
    L = LEN[0]
    z = drive(0.03)
    spine(z, 0.25, 0.024, 4)
    aft_jets(z + 0.02, 0.03)
    cage(0.12, 0.2, 0.062, 2, 3)
    for i, a in enumerate((0.3, 2.4, 4.4)):
        module(i, a, 0.036, 0.115, 0.02, 0.08)
    patchrad((-0.014, 0, z + 0.03), (-1, 0.2, 0), 0.04, 0.05, 2, -1, 0.0025)
    nose(0.25, 0.027, 0.085, 5)
    pdc((0, 0.03, 0.27))


def frigate():
    """The lantern: a cage of six odd modules, torpedo racks clamped on outside, a long nose."""
    L = LEN[1]
    z = drive(0.045, ((-0.05, 0.02, 0.018),))
    spine(z, 0.58, 0.034, 9)
    aft_jets(z + 0.03)
    zs = cage(0.19, 0.4, 0.105, 3)
    for i in range(6):
        module(i, TAU * i / 6 + 0.2, 0.062, 0.2 + (i % 3) * 0.012, 0.03, 0.15 + (i % 2) * 0.03)
    for a in (0.0, 3.14):  # torpedo racks, firing forward past the cage
        p = pol(a, 0.128, 0.3)
        tubes(p, 1, 3, 0.0085, 0.12)
        beam(pol(a, 0.1, 0.3), pol(a, 0.115, 0.3), 0.008)
    for sx in (-1, 1):
        patchrad((sx * 0.02, 0, z + 0.05), (sx, 0.15, 0), 0.07, 0.1, 2, 0 if sx > 0 else -1)
        patchrad((sx * 0.02, 0.0, 0.5), (sx, -0.2, 0), 0.08, 0.07, 2)
    pdc(pol(1.57, 0.106, 0.4), (0, 1, 0))
    pdc(pol(-1.57, 0.106, 0.19), (0, -1, 0))
    nose(0.58, 0.036, 0.11, 7)


def escort():
    """A gun wheel: one broad hoop with turrets all round its rim."""
    L = LEN[2]
    z = drive(0.04)
    spine(z, 0.42, 0.03, 6)
    aft_jets(z + 0.03)
    R = 0.2
    zc = 0.25
    lathe([(zc - 0.02, R - 0.022), (zc - 0.02, R), (zc + 0.02, R), (zc + 0.02, R - 0.022), (zc - 0.02, R - 0.022)], Matrix(), 40, HULL, 0.8, 0.0, True)
    lathe([(zc - 0.006, R), (zc - 0.006, R + 0.003), (zc + 0.006, R + 0.003), (zc + 0.006, R)], Matrix(), 40, PAINT, 1.0, 0.0, True)
    for i in range(8):
        a = TAU * i / 8
        d = V((math.cos(a), math.sin(a), 0))
        strut(d * 0.02 + V((0, 0, zc - 0.07)), d * (R - 0.02) + V((0, 0, zc)), 0.0045)
        strut(d * 0.02 + V((0, 0, zc + 0.07)), d * (R - 0.02) + V((0, 0, zc)), 0.0035)
        box((0.034, 0.034, 0.05), at(d * (R + 0.012) + V((0, 0, zc)), (0, 0, 1), a), HULL, rnd.uniform(0.65, 0.9), 0.003)
        turret(d * (R + 0.029) + V((0, 0, zc)), d, 1.0)
        box((0.006, 0.003, 0.004), at(d * (R - 0.024) + V((0, 0, zc)), (0, 0, 1), a), WINDOW, 1, 0, False)
    for i in range(3):
        module(i * 2, TAU * i / 3 + 0.5, 0.045, 0.2, 0.024, 0.1)
    patchrad((-0.02, 0, z + 0.04), (-1, 0.1, 0), 0.06, 0.08, 2)
    nose(0.42, 0.034, 0.1, 6)


def battleship():
    """Two cages in tandem on a long spine, and under it all the ore hauler's mass driver, now a gun."""
    L = LEN[3]
    z = drive(0.075, ((-0.1, 0.03, 0.03), (0.09, -0.05, 0.024)))
    spine(z, 1.42, 0.05, 18)
    aft_jets(z + 0.04, 0.07)
    # The aft cage: propellant, in whatever tanks there were.
    cage(0.3, 0.62, 0.17, 3)
    for i in range(6):
        a = TAU * i / 6 + 0.3
        if i % 2:
            sphere(pol(a, 0.1, 0.38 + (i % 3) * 0.05), 0.062, HULL, rnd.uniform(0.85, 1.0), 22, 12)
        else:
            strapped(pol(a, 0.1, 0.34), 0.046, 0.24, rnd.uniform(0.8, 0.95), i == 2)
    # The fore cage: stores, shops and people.
    cage(0.82, 1.14, 0.15, 3)
    for i in range(8):
        module(i, TAU * i / 8 + 0.1, 0.09, 0.84 + (i % 3) * 0.015, 0.034, 0.2 + (i % 2) * 0.04)
    for zz, R in ((0.3, 0.17), (0.62, 0.17), (0.82, 0.15), (1.14, 0.15)):  # guns on the hoops
        for a in (1.57, -1.57, 0.0, 3.14):
            d = V((math.cos(a), math.sin(a), 0))
            turret(d * R + V((0, 0, zz)), d, 1.2)
    # The driver, slung beneath on hangers.
    gy = -0.235
    box((0.05, 0.022, 1.36), T((0, gy - 0.02, 0.98)), HULL, 0.55, 0.002)
    for e in (-1, 1):
        box((0.012, 0.04, 1.36), T((e * 0.02, gy + 0.008, 0.98)), DARK, 0.9, 0.0015)
    for i in range(14):
        box((0.064, 0.064, 0.02), T((0, gy, 0.36 + i * 0.095)), PAINT if i == 10 else HULL, rnd.uniform(0.7, 0.95), 0.002)
    box((0.07, 0.076, 0.1), T((0, gy, 1.62)), HULL, 0.8, 0.003)
    box((0.072, 0.02, 0.06), T((0, gy + 0.03, 1.62)), PAINT, 1.0, 0.001)
    for i in range(7):
        strut((0, -0.03, 0.34 + i * 0.17), (0, gy + 0.03, 0.34 + i * 0.17), 0.006)
    for i in range(5):  # capacitor drums along it
        can((0.06, gy + 0.01, 0.36 + i * 0.2), (0, 0, 1), 0.03, 0.09, rnd.uniform(0.75, 1.0), 14, 1, 0, False, 0.35)
    for sx in (-1, 1):
        tubes(pol(0 if sx > 0 else 3.14, 0.18, 1.0), 2, 3, 0.009, 0.13)
        patchrad((sx * 0.03, 0.02, z + 0.1), (sx, 0.5, 0), 0.14, 0.2, 3, 1 if sx > 0 else -1, 0.004)
        patchrad((sx * 0.03, 0.02, 0.72), (sx, 0.6, 0), 0.12, 0.16, 3, -1, 0.004)
        patchrad((sx * 0.03, 0.0, 1.28), (sx, 0.3, 0), 0.1, 0.1, 2, -1, 0.0035)
    crew((0.05, 0.03, 1.2), 0.04, 0.12, 7, 0.85, False)
    nose(1.42, 0.05, 0.14, 9)
    pdc((0, 0.052, 1.46))
    pdc((0, 0.06, 0.72))
    pdc((0, gy - 0.04, 0.6), (0, -1, 0))
    pdc((0, gy - 0.04, 1.3), (0, -1, 0))


def tender():
    """A cage full of ball tanks, and a crane."""
    L = LEN[4]
    z = drive(0.05, ((0.055, -0.02, 0.02),))
    spine(z, 0.86, 0.034, 12)
    aft_jets(z + 0.03)
    cage(0.2, 0.74, 0.19, 4)
    for j in range(3):
        for i in range(3):
            a = TAU * i / 3 + j * 1.05
            p = pol(a, 0.1, 0.29 + j * 0.18)
            sphere(p, 0.082, HULL, rnd.uniform(0.86, 1.02), 26, 14)
            band(-0.005, 0.005, 0.082, PAINT if (i + j) % 4 == 0 else DARK, 1.0 if (i + j) % 4 == 0 else 0.8, T(p), 26, 0.002)
            lathe(drum(0.078, 0.09, 0.016), T(p), 8, DARK, 0.8, 0.0, False)
    pipe([(0.02, 0.02, 0.22), (0.02, 0.02, 0.8)], 0.004, DARK, 0.9)
    lathe(drum(-0.012, 0.012, 0.024), at((0.05, 0.02, 0.8), (1, 0, 0)), 14, DARK, 0.75, 0.0015)  # hose reel
    j0 = V((-0.02, 0.03, 0.8))
    j1 = j0 + V((-1, 0.4, 0.2)).normalized() * 0.2
    j2 = j1 + V((-0.2, -0.1, 1)).normalized() * 0.13
    box((0.03, 0.03, 0.03), T(j0), DARK, 0.8, 0.002)
    beam(j0, j1, 0.009, HULL, 0.8)
    sphere(j1, 0.013, DARK, 0.8, 10, 6, False)
    beam(j1, j2, 0.007, HULL, 0.8)
    box((0.02, 0.02, 0.03), T(j2), DARK, 0.7, 0.002)
    patchrad((-0.02, 0, z + 0.04), (-1, 0.1, 0), 0.07, 0.09, 2)
    nose(0.86, 0.034, 0.1, 6)


def hopper(c, w, L, kind, tint):
    """An ore hopper: a ribbed bin with a chute under it."""
    c = V(c)
    box((w, 0.07, L), T(c + V((0, 0.012, 0))), kind, tint, 0.002)
    for f in (-0.3, 0.0, 0.3):
        box((w * 1.04, 0.064, 0.005), T(c + V((0, 0.012, L * f))), DARK, 0.8, 0.0, False)
    lathe([(0, 0), (0, 0.016), (0.04, w * 0.68), (0.04, 0)], T(c + V((0, -0.063, 0))) @ Matrix.Rotation(-math.pi / 2, 4, 'X') @ Matrix.Rotation(math.pi / 4, 4, 'Z') @ Matrix.Diagonal((1, L / w, 1, 1)), 4, kind, tint * 0.88, 0.0, True)


def freighter():
    """An ore train. Hoppers of several makes down both sides, a gap, a tank in a spare slot."""
    L = LEN[5]
    z = drive(0.048)
    spine(z, 0.92, 0.04, 13)
    aft_jets(z + 0.03)
    for i in range(7):
        for s in (-1, 1):
            zz = 0.2 + i * 0.106
            w = rnd.uniform(0.066, 0.096)
            tint = rnd.uniform(0.6, 1.0)
            if i == 2 and s == 1:
                patchrad((0.022, 0, zz), (1, 0.08, 0), 0.1, 0.1, 2)
            elif i == 4 and s == -1:
                strapped((-0.06, 0, zz - 0.05), 0.034, 0.1, 0.9)
            elif i == 5 and s == 1:
                beam((0.022, 0.012, zz - 0.045), (0.09, 0.012, zz - 0.045), 0.005)
                beam((0.022, 0.012, zz + 0.045), (0.09, 0.012, zz + 0.045), 0.005)
            else:
                hopper((s * (0.024 + w / 2), 0, zz), w, 0.094, PAINT if (i * 2 + (1 if s > 0 else 0)) % 5 == 3 else HULL, tint)
    nose(0.92, 0.032, 0.09, 5)


HULLS = [corvette, frigate, escort, battleship, tender, freighter]

if __name__ == '__main__':
    run('holds_ships', 'holds-ships', lambda: fleet(HULLS, LOD, 160), views=[(0.5, 0.35, LEN[i] * 2.6, (i * 1.6, 0, LEN[i] * 0.45)) for i in range(6)])
