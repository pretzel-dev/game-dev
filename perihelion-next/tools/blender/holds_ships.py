# The Lantern Holds' ships: working vessels pressed into service. Box trusses,
# tanks of whatever size was to hand, cargo modules and ore gear with weapons
# bolted on, nothing on the centreline but the drive.
#
# Run from perihelion-next/ (Blender 5.x):
#   /Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup --python tools/blender/holds_ships.py
# Add `-- build preview` to look at them (tools/blender/out/). Writes
# src/assets/holds-ships.glb (six hulls and their far-off versions) and one shade map.
#
# Each hull faces +z with its drive throat at z = 0; the game centres and
# sizes them (CLASS_LEN in gfx/ships.js). Parts 0-5 are the classes in the
# game's order; parts 6-11 the same hulls for far away.
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kit import *

V = Vector
SPACING = 1.6
LOD = [0.02, 0.034, 0.034, 0.05, 0.045, 0.04]  # CLASS_LOD in gfx/ships.js


def drive(R, L, rr, rl):
    """A bare reactor and bell with a pump pack bolted on one side. Returns (z forward of the shield, torch start)."""
    noz = bell(0, R, L)
    for i in range(5):
        a = TAU * i / 5 + 0.3
        strut(pol(a, rr, 0.014), pol(a, R * 0.62, -L * 0.3), 0.0045)
    lathe([(0.004, 0), (0.004, rr * 0.8), (0.014, rr), (0.014 + rl, rr), (0.02 + rl, rr * 0.7), (0.02 + rl, 0)], Matrix(), 16, DARK, 0.95, 0.0015)
    for i in range(3):
        band(0.02 + rl * (0.2 + 0.3 * i), 0.024 + rl * (0.2 + 0.3 * i), rr, DARK, 0.7, Matrix(), 16, rr * 0.06)
    box((rr * 1.2, rr * 1.2, rl * 0.6), Matrix.Translation((rr * 0.95, -rr * 0.5, 0.02 + rl / 2)), HULL, 0.78, 0.002)  # pump pack
    pipe([(rr * 0.95, -rr * 0.5, 0.02 + rl * 0.2), (rr * 0.95, -rr * 0.5, 0.004), (rr * 0.4, -rr * 0.2, -0.004)], rr * 0.09)
    zs = 0.03 + rl
    lathe([(zs, 0), (zs, rr * 0.95), (zs + 0.006, rr * 1.55), (zs + 0.012, rr * 1.55), (zs + 0.012, 0)], Matrix(), 20, DARK, 0.75, 0.0015)  # shadow shield
    return zs + 0.012, noz


def spine(z0, z1, w, bays, t):
    truss((0, 0, z0), (0, 0, z1), w, bays, t, (1, 0, 0))


def crew(p, r, L, win=6, tint=1.0, paint=True):
    """A crew can off the axis: a drum with a band of paint, lit panes and a flight-deck window."""
    M = can(p, (0, 0, 1), r, L, tint, 16, 1, win, paint, 0.5)
    box((r * 0.9, 0.004, 0.005), M @ Matrix.Translation((0, r * 0.52, L - r * 0.14)), WINDOW, 1, 0, False)
    return M


def hopper(c, w, L, kind, tint):
    """An ore hopper: a ribbed bin with a chute under it."""
    c = V(c)
    box((w, 0.07, L), Matrix.Translation(c + V((0, 0.012, 0))), kind, tint, 0.002)
    for f in (-0.3, 0.0, 0.3):
        box((w * 1.04, 0.064, 0.005), Matrix.Translation(c + V((0, 0.012, L * f))), DARK, 0.8, 0.0, False)
    lathe([(0, 0), (0, 0.016), (0.04, w * 0.68), (0.04, 0)], Matrix.Translation(c + V((0, -0.063, 0))) @ Matrix.Rotation(-math.pi / 2, 4, 'X') @ Matrix.Rotation(math.pi / 4, 4, 'Z') @ Matrix.Diagonal((1, L / w, 1, 1)), 4, kind, tint * 0.88, 0.0, True)


def blister(p, s=1.0):
    """A gun pod's ball mount with twin barrels, facing out from the hull axis."""
    p = V(p)
    sphere(p, 0.016 * s, DARK, 0.95, 12, 8, False)
    o = V((p.x, p.y, 0)).normalized() * 0.012 * s
    side = V((-o.y, o.x, 0)) * 0.3
    for e in (-1, 1):
        box((0.0035 * s, 0.0035 * s, 0.036 * s), Matrix.Translation(p + o + side * e + V((0, 0, 0.02 * s))), DARK, 0.6, 0.0, False)


def lights(red, green, strobe):
    light(red, NAV_R, 0.006)
    light(green, NAV_G, 0.006)
    light(strobe, STROBE, 0.006)


def corvette():
    """A prospector's tug with a scanner dish and one tank."""
    z, noz = drive(0.036, 0.08, 0.02, 0.03)
    spine(z, z + 0.15, 0.03, 3, 0.0035)
    strapped((0.048, -0.004, z + 0.02), 0.032, 0.11, 0.95, True)
    strut((0.012, 0, z + 0.05), (0.03, -0.004, z + 0.05), 0.004)
    strut((0.012, 0, z + 0.1), (0.03, -0.004, z + 0.1), 0.004)
    strut((-0.014, 0.01, z + 0.08), (-0.03, 0.02, z + 0.08), 0.004)
    dish((-0.03, 0.02, z + 0.08), (-0.7, 0.5, 0.5), 0.036)
    crew((-0.012, 0.008, z + 0.15), 0.031, 0.085, 5)
    box((0.03, 0.03, 0.05), Matrix.Translation((0.034, -0.012, z + 0.175)), HULL, 0.78, 0.002)  # sensor pod
    lathe(drum(0, 0.012, 0.009), Matrix.Translation((0.034, -0.012, z + 0.2)), 10, DARK, 0.6, 0.0, False)
    patchrad((-0.016, -0.01, z + 0.045), (-1, -0.25, 0), 0.06, 0.045, 2, -1, 0.0025)
    cyl((0.03, 0, z + 0.2), V((0.03, 0, z + 0.2)) + V((0.4, 0.2, 1)).normalized() * 0.08, 0.0012, 4, DARK, 0.9, 0.0, False)
    rcs((0.052, 0, z + 0.145), (1, 0, 0))
    rcs((-0.046, 0.008, z + 0.17), (-1, 0, 0))
    lights((-0.044, 0.02, z + 0.19), (0.052, 0.0, z + 0.19), (0.048, 0.03, z + 0.075))
    return noz


def frigate():
    """A hauler with a cargo module turned magazine and torpedo racks bolted on."""
    z, noz = drive(0.055, 0.12, 0.03, 0.045)
    spine(z, z + 0.42, 0.05, 6, 0.0045)
    strapped((0.07, 0.0, z + 0.03), 0.044, 0.16, 0.95, True)
    strapped((-0.03, 0.056, z + 0.03), 0.028, 0.1, 0.84)
    sphere((0.0, -0.064, z + 0.2), 0.036, HULL, 1.02, 18, 10)
    band(-0.004, 0.004, 0.036, DARK, 0.8, Matrix.Translation((0, -0.064, z + 0.2)), 18, 0.002)
    for zz in (0.07, 0.16):
        strut((0.02, 0, z + zz), (0.04, 0, z + zz), 0.004)
    patchrad((-0.028, 0.0, z + 0.2), (-1, -0.12, 0), 0.17, 0.13, 3, 1)
    # The magazine: a cargo module in its frame, hatches along the top.
    mc = V((0.008, 0.012, z + 0.32))
    box((0.1, 0.085, 0.11), Matrix.Translation(mc), HULL, 0.7, 0.003)
    box((0.102, 0.022, 0.09), Matrix.Translation(mc + V((0, 0.018, 0))), PAINT, 1.0, 0.001)
    cage((0.112, 0.097, 0.122), mc, 0.005)
    for i in range(3):
        box((0.07, 0.004, 0.02), Matrix.Translation(mc + V((0, 0.044, -0.034 + i * 0.034))), DARK, 0.7, 0.0, False)
    for zz in (0.36, 0.42):
        beam((0.03, 0, z + zz), (0.1, -0.01, z + zz), 0.007)
    tubes((0.108, -0.012, z + 0.38), 2, 3, 0.0085, 0.13)
    tubes((-0.072, 0.03, z + 0.33), 1, 2, 0.0085, 0.08, 0.75)
    beam((-0.04, 0.02, z + 0.33), (-0.06, 0.03, z + 0.33), 0.007)
    crew((-0.02, 0.014, z + 0.41), 0.036, 0.105, 7)
    pdc((0.008, 0.056, z + 0.3))
    strut((0.02, 0.03, z + 0.43), (0.03, 0.04, z + 0.45), 0.004)
    dish((0.03, 0.04, z + 0.45), (0.6, 0.7, 0.4), 0.032)
    rcs((0.04, -0.03, z + 0.43), (1, 0, 0))
    rcs((-0.064, 0.014, z + 0.47), (-1, 0, 0))
    rcs((0.04, 0.03, z - 0.02), (1, 0, 0))
    rcs((-0.04, -0.03, z - 0.02), (-1, 0, 0))
    lights((-0.064, 0.02, z + 0.44), (0.134, -0.01, z + 0.38), (0.008, 0.075, z + 0.36))
    return noz


def escort():
    """An ore bin in a cargo frame, gun pods clamped wherever they fit."""
    z, noz = drive(0.055, 0.11, 0.03, 0.04)
    spine(z, z + 0.1, 0.05, 2, 0.0045)
    sphere((0.052, 0.01, z + 0.045), 0.04, HULL, 1.02, 18, 10)
    strapped((-0.05, -0.012, z + 0.01), 0.026, 0.075, 0.9, True)
    bc = V((0, 0, z + 0.2))
    box((0.13, 0.11, 0.2), Matrix.Translation(bc), HULL, 0.82, 0.004)
    for i in range(5):  # the bin's ribs
        box((0.136, 0.116, 0.006), Matrix.Translation(bc + V((0, 0, -0.08 + i * 0.04))), DARK, 0.85, 0.0, False)
    box((0.134, 0.03, 0.09), Matrix.Translation(bc + V((0, 0.028, 0.035))), PAINT, 1.0, 0.001)
    cage((0.19, 0.17, 0.25), bc, 0.0065)
    for x, y, zz in ((0.095, 0.085, 0.1), (-0.095, 0.085, 0.13), (0.095, -0.085, 0.15), (-0.095, -0.085, 0.08), (0.11, 0.0, 0.22), (-0.11, 0.02, 0.2), (0.0, 0.1, 0.22), (0.0, -0.1, 0.19), (0.095, 0.085, 0.31), (-0.095, 0.06, 0.3), (0.08, -0.085, 0.3), (-0.095, -0.085, 0.32)):
        box((0.04, 0.04, 0.046), Matrix.Translation((x, y, z + zz)), HULL, rnd.uniform(0.62, 0.95), 0.002)
        blister((x * 1.2, y * 1.2, z + zz), 1.3)
    crew((0.022, 0.012, z + 0.3), 0.034, 0.085, 6)
    patchrad((-0.03, 0, z + 0.04), (-1, 0.1, 0), 0.075, 0.1, 2)
    patchrad((0.06, -0.03, z + 0.03), (1, -0.3, 0), 0.05, 0.05, 1)
    cyl((-0.04, 0.05, z + 0.3), V((-0.04, 0.05, z + 0.3)) + V((-0.2, 0.6, 1)).normalized() * 0.1, 0.0012, 4, DARK, 0.9, 0.0, False)
    rcs((0.072, 0, z + 0.335), (1, 0, 0))
    rcs((-0.072, 0, z + 0.33), (-1, 0, 0))
    lights((-0.1, 0, z + 0.2), (0.1, 0, z + 0.26), (0.022, 0.052, z + 0.35))
    return noz


def battleship():
    """An ore hauler built round its mass driver, now a gun."""
    z, noz = drive(0.09, 0.18, 0.05, 0.08)
    bell(0.03, 0.036, 0.08, 14, 0.45, 1.5, 0.65, (-0.085, 0.03))
    cyl((-0.085, 0.03, 0.03), (-0.085, 0.03, 0.09), 0.022, 10, DARK, 0.9, 0.0, True)
    spine(z, z + 0.86, 0.08, 10, 0.006)
    gx, gy = 0.02, -0.075
    # The driver: two rails in a trough, coil hoops along it, a shrouded muzzle.
    box((0.05, 0.022, 1.14), Matrix.Translation((gx, gy - 0.02, z + 0.63)), HULL, 0.55, 0.002)
    for e in (-1, 1):
        box((0.012, 0.04, 1.14), Matrix.Translation((gx + e * 0.02, gy + 0.008, z + 0.63)), DARK, 0.9, 0.0015)
    for i in range(11):
        zz = z + 0.1 + i * 0.094
        box((0.064, 0.064, 0.02), Matrix.Translation((gx, gy, zz)), PAINT if i == 7 else HULL, rnd.uniform(0.7, 0.95), 0.002)
    box((0.07, 0.076, 0.1), Matrix.Translation((gx, gy, z + 1.07)), HULL, 0.8, 0.003)
    box((0.072, 0.02, 0.06), Matrix.Translation((gx, gy + 0.03, z + 1.07)), PAINT, 1.0, 0.001)
    for zz in (0.95, 1.17):
        cage((0.09, 0.094, 0.035), (gx, gy, z + zz), 0.006)
    for i in range(4):  # capacitor drums
        can((gx - 0.062, gy - 0.01, z + 0.16 + i * 0.19), (0, 0, 1), 0.03, 0.085, rnd.uniform(0.75, 1.0), 14, 1, 0, False, 0.35)
    for i in range(6):
        strut((0, -0.04, z + 0.1 + i * 0.15), (gx, gy + 0.03, z + 0.1 + i * 0.15), 0.006)
    strapped((0.115, 0.03, z + 0.08), 0.072, 0.26, 0.95, True, (0, 0, 1), 20)
    strapped((-0.1, 0.035, z + 0.11), 0.05, 0.18, 0.86)
    sphere((-0.11, 0.02, z + 0.4), 0.066, HULL, 1.02, 22, 12)
    band(-0.005, 0.005, 0.066, DARK, 0.8, Matrix.Translation((-0.11, 0.02, z + 0.4)), 22, 0.003)
    strapped((0.095, 0.045, z + 0.36), 0.04, 0.13, 0.88)
    for x, zz in ((0.05, 0.2), (-0.05, 0.2), (-0.05, 0.4), (0.05, 0.42)):
        strut((x * 0.8, 0.02, z + zz), (x * 1.5, 0.03, z + zz), 0.006)
    # Cargo modules: one now a magazine, the others stores.
    mc = V((0.0, 0.06, z + 0.61))
    box((0.14, 0.1, 0.17), Matrix.Translation(mc), HULL, 0.72, 0.004)
    box((0.142, 0.024, 0.13), Matrix.Translation(mc + V((0, 0.022, 0))), PAINT, 1.0, 0.001)
    cage((0.152, 0.112, 0.182), mc, 0.006)
    box((0.1, 0.09, 0.12), Matrix.Translation((-0.1, 0.0, z + 0.57)), HULL, 0.62, 0.004)
    box((0.09, 0.085, 0.15), Matrix.Translation((0.105, 0.02, z + 0.65)), HULL, 0.92, 0.004)
    for c, s in (((-0.1, 0.0, z + 0.57), (0.104, 0.094, 0.006)), ((0.105, 0.02, z + 0.65), (0.094, 0.089, 0.006))):
        for f in (-0.04, 0.04):
            box(s, Matrix.Translation(V(c) + V((0, 0, f))), DARK, 0.8, 0.0, False)
    crew((-0.035, 0.03, z + 0.76), 0.05, 0.14, 9)
    crew((0.065, 0.02, z + 0.75), 0.034, 0.09, 5, 0.85, False)
    turret((0, 0.11, z + 0.61), (0, 1, 0), 1.5)
    turret((-0.1, 0.045, z + 0.57), (0, 1, 0), 1.2)
    turret((0.105, 0.0625, z + 0.65), (0, 1, 0), 1.2)
    tubes((0.125, 0.0, z + 0.83), 2, 3, 0.009, 0.13)
    beam((0.04, 0, z + 0.8), (0.11, 0, z + 0.8), 0.008)
    patchrad((0.03, 0.045, z + 0.33), (0.73, 0.68, 0), 0.24, 0.21, 4, 2, 0.004)
    patchrad((-0.03, 0.045, z + 0.3), (-0.82, 0.56, 0), 0.16, 0.16, 3, -1, 0.004)
    patchrad((-0.04, 0.0, z + 0.74), (-1, -0.1, 0), 0.09, 0.1, 2, -1, 0.0035)
    strut((-0.03, 0.06, z + 0.84), (-0.03, 0.09, z + 0.86), 0.005)
    dish((-0.03, 0.09, z + 0.86), (-0.4, 1, 0.3), 0.045)
    pdc((0.105, 0.0625, z + 0.715))
    pdc((-0.035, 0.08, z + 0.82))
    pdc((gx, gy - 0.033, z + 0.5), (0, -1, 0))
    pdc((gx, gy - 0.033, z + 0.85), (0, -1, 0))
    rcs((0.06, -0.04, z + 0.86), (1, 0, 0))
    rcs((-0.09, 0.03, z + 0.86), (-1, 0, 0))
    rcs((0.07, 0.05, z - 0.02), (1, 0, 0))
    rcs((-0.07, -0.05, z - 0.02), (-1, 0, 0))
    for i in range(4):
        box((0.004, 0.003, 0.008), Matrix.Translation((-0.1 - 0.0505, -0.02 + i * 0.012, z + 0.59)), WINDOW, 1, 0, False)
    lights((-0.154, 0, z + 0.57), (0.154, 0.02, z + 0.65), (0, 0.14, z + 0.66))
    return noz


def tender():
    """Whatever tanks could be had, and a crane."""
    z, noz = drive(0.06, 0.13, 0.032, 0.045)
    spine(z, z + 0.62, 0.05, 8, 0.0045)
    sphere((0.06, 0.0, z + 0.2), 0.115, HULL, 1.0, 32, 18)
    Ms = Matrix.Translation((0.06, 0, z + 0.2))
    band(-0.018, 0.018, 0.115, PAINT, 1.0, Ms, 32, 0.0015)
    for zz in (-0.07, 0.07):
        band(zz - 0.004, zz + 0.004, 0.115 * math.sqrt(1 - (zz / 0.115) ** 2), DARK, 0.8, Ms, 32, 0.003)
    lathe(drum(0.11, 0.13, 0.03), Ms, 12, DARK, 0.8, 0.0015)
    strapped((-0.09, 0.01, z + 0.17), 0.07, 0.27, 0.86, False, (0, 0, 1), 20)
    strapped((0.072, -0.02, z + 0.39), 0.05, 0.17, 0.95, True)
    sphere((-0.065, 0.03, z + 0.54), 0.05, HULL, 0.82, 20, 12)
    cage((0.2, 0.12, 0.012), (-0.01, 0, z + 0.36), 0.006)
    for x, zz in ((-0.04, 0.25), (-0.04, 0.37), (0.03, 0.47), (-0.03, 0.54)):
        strut((0, 0, z + zz), (x, 0.01, z + zz), 0.005)
    # Transfer lines from tank to tank and a hose reel.
    pipe([(0.06, 0.1, z + 0.26), (0.02, 0.06, z + 0.36), (-0.06, 0.07, z + 0.4)], 0.004, DARK, 0.9)
    pipe([(0.07, 0.03, z + 0.45), (0.03, 0.04, z + 0.56), (-0.03, 0.06, z + 0.56)], 0.0035, DARK, 0.9)
    lathe(drum(-0.012, 0.012, 0.024), at((0.05, 0.04, z + 0.6), (1, 0, 0)), 14, DARK, 0.75, 0.0015)
    crew((0.02, 0.02, z + 0.62), 0.034, 0.09, 6)
    box((0.03, 0.03, 0.03), Matrix.Translation((-0.03, 0.03, z + 0.61)), DARK, 0.8, 0.002)
    j0 = V((-0.03, 0.03, z + 0.61))
    j1 = j0 + V((-1, 0.3, 0.25)).normalized() * 0.17
    j2 = j1 + V((-0.25, -0.1, 1)).normalized() * 0.12
    beam(j0, j1, 0.009, HULL, 0.8)
    sphere(j1, 0.013, DARK, 0.8, 10, 6, False)
    beam(j1, j2, 0.007, HULL, 0.8)
    box((0.02, 0.02, 0.03), Matrix.Translation(j2), DARK, 0.7, 0.002)
    patchrad((-0.03, 0.0, z + 0.035), (-1, -0.1, 0), 0.07, 0.09, 2)
    rcs((0.06, 0.02, z + 0.69), (1, 0, 0))
    rcs((-0.02, 0.02, z + 0.7), (-1, 0, 0))
    rcs((0.04, 0.03, z - 0.02), (1, 0, 0))
    rcs((-0.04, -0.03, z - 0.02), (-1, 0, 0))
    lights((-0.165, 0.01, z + 0.3), (0.18, 0, z + 0.2), j1 + V((0, 0.02, 0)))
    return noz


def freighter():
    """An ore train. Hoppers of several makes, a gap, a tank in a spare slot."""
    z, noz = drive(0.055, 0.12, 0.03, 0.04)
    spine(z, z + 0.76, 0.045, 10, 0.0045)
    for i in range(6):
        for s in (-1, 1):
            zz = z + 0.115 + i * 0.113
            w = rnd.uniform(0.066, 0.096)
            tint = rnd.uniform(0.6, 1.0)
            if i == 2 and s == 1:
                patchrad((0.025, 0, zz), (1, 0.08, 0), 0.1, 0.1, 2)
            elif i == 4 and s == -1:
                strapped((-0.062, 0, zz - 0.055), 0.034, 0.11, 0.9)
            elif i == 1 and s == -1:
                cage((0.07, 0.07, 0.095), (-0.062, 0.012, zz), 0.005)
            else:
                hopper((s * (0.026 + w / 2), 0, zz), w, 0.098, PAINT if (i * 2 + (1 if s > 0 else 0)) % 5 == 3 else HULL, tint)
    crew((-0.014, 0.012, z + 0.76), 0.032, 0.085, 5)
    strut((0.015, 0.02, z + 0.77), (0.03, 0.03, z + 0.79), 0.004)
    dish((0.03, 0.03, z + 0.79), (0.5, 0.8, 0.3), 0.028)
    rcs((0.04, 0, z + 0.78), (1, 0, 0))
    rcs((-0.052, 0.012, z + 0.8), (-1, 0, 0))
    rcs((0.04, 0.03, z - 0.02), (1, 0, 0))
    rcs((-0.04, -0.03, z - 0.02), (-1, 0, 0))
    lights((-0.115, 0.02, z + 0.45), (0.115, 0.02, z + 0.45), (-0.014, 0.05, z + 0.83))
    return noz


HULLS = [corvette, frigate, escort, battleship, tender, freighter]


def build():
    nozzles = []
    for i, f in enumerate(HULLS):
        begin(i, (i * SPACING, 0, 0), 0.0, 160 + i)
        nozzles.append(f())
        begin(i + len(HULLS), (i * SPACING, 3.0, 0), LOD[i], 160 + i)
        f()
    return {'nozzles': nozzles, 'spacing': SPACING, 'hulls': len(HULLS), 'lod_y': 3.0}


LEN = [0.4, 0.72, 0.6, 1.5, 0.95, 1.05]
run('holds_ships', 'holds-ships', build, views=[(0.5, 0.35, LEN[i] * 2.6, (i * SPACING, 0, LEN[i] * 0.38)) for i in range(6)] + [(0.5, 0.35, 1.9, (1 * SPACING, 3.0, 0.27))])
