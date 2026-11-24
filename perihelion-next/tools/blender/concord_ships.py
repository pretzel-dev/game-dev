# The Meridian Concord's ships: armoured hulls that swell and taper. A narrow
# bow widens to shoulders, pinches at the waist and grows again round the
# engines, each in its own housing. Stepped superstructure, a small tower aft.
#
# Each class has its own character: the corvette is a nimble dart with big
# engines; the frigate leans forward, tubes on its shoulders; the battleship
# is deep and tiered; the escort carries its guns out where you see them; the
# tender shows its tanks.
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
# True lengths in hull units: the game draws these models at the size they are made (`true_size`),
# so a fitting is the same size on every class. A frigate is 0.72.
LEN = [0.36, 0.72, 0.60, 1.85, 1.02, 1.05]


def gun(p, s=1.0, up=1):
    turret(p, (0, up, 0), s)


def plates(H, z0, z1, pitch=0.055, hf=0.3, dyf=0.27):
    """Belt armour along both flanks between z0 and z1: plates above and below a dark trench with lit ports."""
    n = max(1, int((z1 - z0) / pitch))
    pl = (z1 - z0) / n
    for sx in (-1, 1):
        for i in range(n):
            z = z0 + pl * (i + 0.5)
            h = H.at(z)[1]
            H.flank(z, sx, (0.004, h * 0.15, pl * 1.02), DARK, 0.6, 0.0, True, 0, 0.0005)
            for sy in (-1, 1):
                H.flank(z, sx, (0.008, h * hf, pl * 0.9), HULL, rnd.uniform(0.8, 0.98), 0.002, True, sy * h * dyf, 0.002)
        for i in range(int((z1 - z0 - 0.02) / 0.011)):
            if rnd.random() < 0.72:
                H.flank(z0 + 0.012 + i * 0.011, sx, (0.002, 0.004, 0.005), WINDOW, 1, 0.0, False, 0, 0.003)


def stripes(H, z, n=2, hf=0.55):
    """The owner's stripes across both flanks at z: one broad, then narrow."""
    for sx in (-1, 1):
        for k in range(n):
            zz = z + k * 0.03
            H.flank(zz, sx, (0.003, H.at(zz)[1] * hf, 0.024 if k == 0 else 0.008), PAINT, 1.0, 0.0, True, 0, 0.0025)


def bow_ports(H, z0, z1):
    for sx in (-1, 1):
        for i in range(int((z1 - z0) / 0.013)):
            if rnd.random() < 0.6:
                H.flank(z0 + i * 0.013, sx, (0.002, 0.004, 0.005), WINDOW, 1, 0.0, False, 0, 0.001)


def tip(H, L):
    lathe(drum(-0.011, 0.011, 0.008), at((0, H.mid(L - 0.004), L - 0.004), (1, 0, 0)), 8, DARK, 0.9, 0.0, False)
    cyl((0, H.mid(L), L - 0.004), (0, H.mid(L), L + 0.03), 0.0015, 4, DARK, 0.9, 0.0, False)


def tower(z, y, s=1.0):
    """The conn: small, with a strip of window forward and thin masts."""
    tw = 0.045 * s
    Hull([(z - tw * 0.7, tw * 0.8, 0.026 * s, y + 0.013 * s, 0.35), (z + tw * 0.2, tw, 0.03 * s, y + 0.015 * s, 0.35), (z + tw * 0.7, tw * 0.7, 0.02 * s, y + 0.01 * s, 0.35)], HULL, 0.96, 0.002)
    box((tw * 1.15, 0.005, tw * 1.1), T((0, y + 0.032 * s, z)), DARK, 0.8, 0.0015)
    for i in range(5):
        box((0.004, 0.003, 0.002), T(((i - 2) * 0.007 * s, y + 0.017 * s, z + tw * 0.71)), WINDOW, 1, 0, False)
    cyl((0, y + 0.03 * s, z - 0.01), (0, y + 0.03 * s + 0.13, z - 0.01), 0.002, 4, DARK, 0.9, 0.0, False)
    cyl((0.012, y + 0.03 * s, z + 0.01), (0.012, y + 0.03 * s + 0.06, z + 0.01), 0.0015, 4, DARK, 0.9, 0.0, False)
    light((0, y + 0.03 * s + 0.132, z - 0.01), STROBE, 0.005)


def decks(H, tiers, tint=1.0):
    """Stepped superstructure on the hull's back. Each tier is a list of (z, width, height). Returns the top tier."""
    under, out = H, None
    for i, st in enumerate(tiers):
        out = Hull([(z, w, h, under.top(z) + h / 2 - 0.003, 0.4) for z, w, h in st], HULL, tint - i * 0.07, 0.003)
        under = out
    return out


def keel(H, st):
    return Hull([(z, w, h, H.bottom(z) - h / 2 + 0.003, 0.4) for z, w, h in st], HULL, 0.76, 0.003)


def louvres(H, z0, z1):
    for i in range(int((z1 - z0) / 0.011)):
        z = z0 + i * 0.011
        for sx in (-1, 1):
            H.flank(z, sx, (0.003, H.at(z)[1] * 0.6, 0.005), DARK, 0.7, 0.0, False, 0, 0.001)


def running(H, z):
    light((-H.hw(z) - 0.004, H.mid(z), z), NAV_R, 0.005)
    light((H.hw(z) + 0.004, H.mid(z), z), NAV_G, 0.005)


def jets(H, zs):
    for z in zs:
        K.jets.append((z, H.hw(z) + 0.012))
        for sx in (-1, 1):
            rcs((sx * (H.hw(z) + 0.006), H.mid(z) + H.at(z)[1] * 0.3, z), (sx, 0, 0))


def corvette():
    """A nimble dart: a slim hull, a waist, and engines that look too big for it."""
    L = LEN[0]
    H = Hull([(0.035, 0.05, 0.04), (0.075, 0.074, 0.05), (0.13, 0.058, 0.046), (0.19, 0.07, 0.05, -0.002), (0.27, 0.04, 0.034, -0.005), (L, 0.012, 0.014, -0.01)], HULL, 0.92, 0.004)
    noz = cowl(0, 0, 0.035, 0.026, 0.07)
    for sx in (-1, 1):  # outboard engines on short pylons, proud of the hull
        cowl(sx * 0.058, 0.004, 0.06, 0.018, 0.075)
        box((0.03, 0.01, 0.04), T((sx * 0.042, 0.004, 0.09)), HULL, 0.8, 0.002)
        capsule((sx * 0.058, 0.004, 0.09), (0, 0, 1), 0.016, 0.07, HULL, 0.9, 12)
        # canted fins
        wedge((0.003, 0.05, 0.07), T((sx * 0.07, 0.03, 0.085)) @ Matrix.Rotation(-sx * 0.5, 4, 'Z'), 1.0, 0.35, HULL, 0.85, 0.0, 0, -0.012)
    louvres(H, 0.05, 0.1)
    plates(H, 0.14, 0.22, 0.04)
    stripes(H, 0.235, 2, 0.6)
    D = decks(H, [[(0.1, 0.03, 0.014), (0.16, 0.04, 0.018), (0.25, 0.022, 0.01)]])
    gun((0, D.top(0.2), 0.2), 0.8)
    pdc((0, H.bottom(0.19), 0.19), (0, -1, 0))
    tower(0.125, D.top(0.125), 0.6)
    tip(H, L)
    jets(H, (0.12, 0.25))
    running(H, 0.19)
    return noz


def frigate():
    """Intimidating: a long blade of a bow under a heavy brow, torpedo tubes on the shoulders, guns forward."""
    L = LEN[1]
    H = Hull([(0.04, 0.1, 0.07), (0.1, 0.168, 0.1), (0.17, 0.118, 0.09), (0.28, 0.165, 0.112, -0.002), (0.38, 0.15, 0.104, -0.004), (0.58, 0.07, 0.06, -0.012), (L, 0.02, 0.026, -0.022)], HULL, 0.92, 0.006)
    noz = cowl(0, 0, 0.045, 0.036, 0.085)
    for sx in (-1, 1):
        cowl(sx * 0.062, 0, 0.055, 0.028, 0.08)
    louvres(H, 0.075, 0.125)
    plates(H, 0.18, 0.38)
    for sx in (-1, 1):  # tubes let into the front of the shoulders
        tubes((sx * (H.hw(0.33) + 0.004), -0.006, 0.36), 1, 2, 0.008, 0.07)
        H.flank(0.3, sx, (0.02, 0.06, 0.07), HULL, 0.82, 0.003, True, -0.006, 0.006)
    stripes(H, 0.46, 2, 0.55)
    bow_ports(H, 0.4, 0.45)
    # A brow: the upper deck runs out over the bow like a hood.
    D = decks(H, [[(0.12, 0.07, 0.022), (0.24, 0.11, 0.026), (0.42, 0.09, 0.022), (0.62, 0.03, 0.012)], [(0.14, 0.05, 0.016), (0.26, 0.06, 0.018), (0.36, 0.035, 0.012)]])
    K_ = keel(H, [(0.2, 0.05, 0.02), (0.3, 0.07, 0.03), (0.48, 0.03, 0.014)])
    gun((0, H.top(0.44) + 0.02, 0.44), 1.0)
    gun((0, H.top(0.52) + 0.018, 0.52), 0.9)
    gun((0, D.top(0.3), 0.3), 0.9)
    gun((0, K_.bottom(0.3), 0.3), 0.9, -1)
    gun((0, H.bottom(0.46) - 0.002, 0.46), 0.8, -1)
    for sx in (-1, 1):
        pdc((sx * 0.062, H.top(0.24), 0.24))
    box((0.03, 0.003, 0.1), T((0, H.top(0.6) + 0.004, 0.6)), PAINT, 1.0, 0.0, True)
    tower(0.18, D.top(0.18), 0.9)
    cyl((0, K_.bottom(0.26), 0.26), (0, K_.bottom(0.26) - 0.08, 0.26), 0.002, 4, DARK, 0.9, 0.0, False)
    tip(H, L)
    jets(H, (0.16, 0.5))
    running(H, 0.3)
    return noz


def escort():
    """You see the guns. A broad flat arrowhead, nothing like the frigate's dart: turrets all along both leading edges, above and below."""
    L = LEN[2]
    H = Hull([(0.04, 0.12, 0.05), (0.09, 0.25, 0.062), (0.17, 0.3, 0.06), (0.3, 0.22, 0.056, -0.002), (0.45, 0.1, 0.044, -0.004), (L, 0.02, 0.02, -0.008)], HULL, 0.92, 0.005)
    noz = cowl(0, 0, 0.045, 0.03, 0.08)
    for sx in (-1, 1):
        cowl(sx * 0.062, 0, 0.05, 0.024, 0.075)
        cowl(sx * 0.112, 0, 0.065, 0.02, 0.07)
    louvres(H, 0.105, 0.15)
    stripes(H, 0.4, 2, 0.6)
    D = decks(H, [[(0.1, 0.06, 0.02), (0.2, 0.08, 0.026), (0.42, 0.04, 0.014)], [(0.12, 0.04, 0.014), (0.2, 0.045, 0.016), (0.3, 0.025, 0.01)]])
    Kl = keel(H, [(0.12, 0.05, 0.016), (0.24, 0.06, 0.02), (0.42, 0.025, 0.01)])
    # Gun galleries: a raised strip along each leading edge, top and bottom, a turret every few metres.
    for sx in (-1, 1):
        for i in range(6):
            z = 0.17 + i * 0.052
            x = sx * (H.hw(z) - 0.022)
            gun((x, H.top(z), z), 0.9)
            gun((x, H.bottom(z), z + 0.012), 0.8, -1)
            H.flank(z, sx, (0.008, H.at(z)[1] * 0.7, 0.046), HULL, rnd.uniform(0.8, 0.96), 0.002, True, 0, 0.002)
        for i in range(int(0.3 / 0.011)):
            if rnd.random() < 0.6:
                H.flank(0.17 + i * 0.011, sx, (0.002, 0.004, 0.005), WINDOW, 1, 0.0, False, 0, 0.0065)
        pdc((sx * 0.1, H.top(0.12), 0.12))
    gun((0, D.top(0.34) + 0.002, 0.34), 1.0)
    gun((0, H.top(0.48), 0.48), 0.9)
    gun((0, Kl.bottom(0.3), 0.3), 0.95, -1)
    box((0.006, 0.03, 0.006), T((0, D.top(0.14) + 0.04, 0.14)), DARK, 0.9, 0.0, False)  # fire-control array
    box((0.055, 0.026, 0.004), T((0, D.top(0.14) + 0.066, 0.14)), HULL, 0.9, 0.0015)
    tower(0.19, D.top(0.19), 0.7)
    tip(H, L)
    jets(H, (0.13, 0.46))
    running(H, 0.2)
    return noz


def battleship():
    """Formidable: a deep hull, tiered citadel with superfiring guns, casemated shoulders, a bank of five engines."""
    L = LEN[3]
    H = Hull([(0.06, 0.22, 0.14), (0.19, 0.39, 0.22), (0.36, 0.27, 0.19), (0.6, 0.35, 0.23, -0.004), (0.95, 0.32, 0.22, -0.008), (1.42, 0.14, 0.12, -0.026), (L, 0.04, 0.05, -0.05)], HULL, 0.92, 0.008)
    noz = cowl(0, 0, 0.07, 0.056, 0.12)
    for sx in (-1, 1):
        cowl(sx * 0.1, -0.014, 0.085, 0.045, 0.11)
        cowl(sx * 0.166, 0.022, 0.11, 0.034, 0.1)
        wedge((0.012, 0.19, 0.15), T((sx * 0.208, 0, 0.15)), 1.0, 0.7, HULL, 0.8, 0.003)  # armoured skirts round the bank
    louvres(H, 0.24, 0.33)
    plates(H, 0.39, 0.95)
    for sx in (-1, 1):
        for i in range(7):  # casemates along the shoulders
            z = 0.47 + i * 0.07
            H.flank(z, sx, (0.03, 0.06, 0.05), HULL, 0.86, 0.003, True, -0.036, 0.012)
            for e in (-1, 1):
                H.flank(z + 0.048, sx, (0.005, 0.005, 0.06), DARK, 0.6, 0.0, False, -0.036 + e * 0.012, 0.02)
        # spinal rails slung under the bow
        box((0.03, 0.036, 0.66), T((sx * 0.05, H.bottom(1.36) - 0.004, 1.36)), HULL, 0.74, 0.003)
        box((0.034, 0.012, 0.64), T((sx * 0.05, H.bottom(1.36) - 0.004, 1.37)), DARK, 0.55, 0.0015)
        for i in range(7):
            box((0.04, 0.046, 0.014), T((sx * 0.05, H.bottom(1.36) - 0.004, 1.07 + i * 0.1)), DARK, 0.85, 0.002)
    stripes(H, 1.16, 3, 0.55)
    bow_ports(H, 0.97, 1.14)
    t0 = [(0.27, 0.16, 0.034), (0.54, 0.24, 0.04), (0.97, 0.2, 0.034), (1.46, 0.05, 0.014)]
    t1 = [(0.32, 0.12, 0.034), (0.57, 0.16, 0.038), (0.86, 0.12, 0.03), (1.1, 0.04, 0.012)]
    t2 = [(0.36, 0.08, 0.03), (0.54, 0.1, 0.034), (0.7, 0.06, 0.018)]
    D = decks(H, [t0, t1, t2])
    Kl = keel(H, [(0.4, 0.12, 0.034), (0.68, 0.18, 0.05), (1.08, 0.07, 0.022)])
    D0 = Hull([(z, w, h, H.top(z) + h / 2 - 0.003, 0.4) for z, w, h in t0], draw=False)
    D1 = Hull([(z, w, h, D0.top(z) + h / 2 - 0.003, 0.4) for z, w, h in t1], draw=False)
    # Superfiring main guns stepping down toward the bow, more along the keel.
    gun((0, D.top(0.64), 0.64), 1.6)
    gun((0, D1.top(0.8), 0.8), 1.5)
    gun((0, D1.top(0.94), 0.94), 1.3)
    gun((0, D0.top(1.14), 1.14), 1.3)
    gun((0, D0.top(1.27), 1.27), 1.1)
    gun((0, D0.top(1.38), 1.38), 1.0)
    for z in (0.52, 0.7, 0.88, 1.02):
        gun((0, Kl.bottom(z), z), 1.3, -1)
    for sx in (-1, 1):
        for z in (0.44, 0.58, 0.72, 0.86):
            gun((sx * 0.095, D0.top(z), z), 0.9)
        for i in range(6):
            pdc((sx * 0.145, H.top(0.42 + i * 0.1), 0.42 + i * 0.1))
        for i in range(3):  # missile cells in the deck
            for j in range(8):
                box((0.008, 0.002, 0.008), T((sx * (0.04 + i * 0.011), D0.top(1.06) + 0.001, 1.02 + j * 0.011)), DARK, rnd.uniform(0.45, 0.75), 0.0, False)
    box((0.04, 0.003, 0.24), T((0, H.top(1.58) + 0.003, 1.58)) @ Matrix.Rotation(0.16, 4, 'X'), PAINT, 1.0, 0.0, True)
    tower(0.44, D.top(0.44), 1.0)
    cyl((0, Kl.bottom(0.6), 0.6), (0, Kl.bottom(0.6) - 0.1, 0.6), 0.002, 4, DARK, 0.9, 0.0, False)
    tip(H, L)
    jets(H, (0.34, 1.3))
    running(H, 0.7)
    return noz


def aft(L, w=0.16, h=0.1):
    """An auxiliary's engine section: the same swell round three housed engines, ending in a frame to build on."""
    H = Hull([(0.04, w * 0.6, h * 0.7), (0.1, w, h), (0.17, w * 0.72, h * 0.9), (0.22, w * 0.6, h * 0.8)], HULL, 0.86, 0.006)
    noz = cowl(0, 0, 0.045, 0.034, 0.085)
    for sx in (-1, 1):
        cowl(sx * 0.058, 0, 0.055, 0.026, 0.08)
    louvres(H, 0.075, 0.125)
    box((w * 0.8, h, 0.01), T((0, 0, 0.222)), DARK, 0.75, 0.002)
    return noz, H


def head(z0, L, w=0.1, h=0.08):
    """An auxiliary's crewed bow: a short armoured hull with the tower on it."""
    n = L - z0
    H = Hull([(z0, w * 0.8, h * 0.85), (z0 + n * 0.2, w, h), (z0 + n * 0.5, w * 0.9, h * 0.92, -0.002), (L, 0.02, 0.024, -0.012)], HULL, 0.92, 0.006)
    plates(H, z0 + n * 0.14, z0 + n * 0.5, 0.045)
    stripes(H, z0 + n * 0.6, 2, 0.6)
    D = decks(H, [[(z0 + n * 0.1, w * 0.5, 0.016), (z0 + n * 0.3, w * 0.6, 0.02), (z0 + n * 0.6, w * 0.3, 0.01)]])
    tower(z0 + n * 0.26, D.top(z0 + n * 0.26), 0.8)
    pdc((0, D.top(z0 + n * 0.45), z0 + n * 0.45))
    pdc((0, H.bottom(z0 + n * 0.4), z0 + n * 0.4), (0, -1, 0))
    tip(H, L)
    jets(H, (z0 + n * 0.5,))
    return H


def tender():
    """You see the tanks: a bare keel between the engines and the bow with six big tanks hung on it, and a fuelling boom."""
    L = LEN[4]
    noz, A = aft(L)
    z0, z1 = 0.22, 0.776
    box((0.04, 0.04, z1 - z0 + 0.04), T((0, 0, (z0 + z1) / 2)), DARK, 0.85, 0.003)
    r = 0.074
    for i in range(4):
        zc = z0 + 0.075 + i * 0.136
        for sx in (-1, 1):
            p = V((sx * (r + 0.03), 0, zc))
            sphere(p, r, HULL, rnd.uniform(0.92, 1.02), 28, 16)
            M = T(p)
            band(-0.005, 0.005, r, PAINT if i == 2 else DARK, 1.0 if i == 2 else 0.8, M, 28, 0.002)
            lathe(drum(r * 0.94, r * 1.05, r * 0.2), M, 8, DARK, 0.8, 0.0, False)
            beam((sx * 0.02, 0, zc), (sx * 0.035, 0, zc), 0.014, DARK, 0.8)
            for sy in (-1, 1):
                strut((0, sy * 0.02, zc - 0.05), p + V((0, sy * r * 0.7, -r * 0.6)), 0.004)
        if i < 3:  # frames between the pairs
            for s in (-1, 1):
                box((0.2, 0.008, 0.008), T((0, s * 0.06, zc + 0.068)), DARK, 0.8, 0.0015)
            box((0.008, 0.128, 0.008), T((0, 0, zc + 0.068)), DARK, 0.8, 0.0015)
    pipe([(0.02, 0.03, z0 + 0.02), (0.02, 0.03, z1)], 0.004, DARK, 0.9)
    pipe([(-0.02, 0.03, z0 + 0.02), (-0.02, 0.03, z1)], 0.003, HULL, 0.9)
    Hd = head(z1, L, 0.11, 0.085)
    j0 = V((Hd.hw(z1 + 0.06) + 0.008, 0.0, z1 + 0.06))
    box((0.026, 0.026, 0.026), T(j0), DARK, 0.8, 0.002)
    j1 = j0 + V((1, 0.15, 0.4)).normalized() * 0.19
    beam(j0, j1, 0.009, HULL, 0.85)
    box((0.02, 0.02, 0.028), T(j1), DARK, 0.8, 0.002)
    cyl(j1 + V((0, 0, 0.012)), j1 + V((0, 0, 0.065)), 0.005, 8, HULL, 0.9, 0.0, False)
    light(j1 + V((0, 0.016, 0)), STROBE, 0.005)
    jets(A, (0.14,))
    light((-(r * 2 + 0.034), 0, z0 + 0.21), NAV_R, 0.005)
    light((r * 2 + 0.034, 0, z0 + 0.21), NAV_G, 0.005)
    K.jets.append((z1 + 0.1, 0.06))
    return noz


def freighter():
    """Armoured container rows clamped down a box keel, the same engines and bow as the tender."""
    L = LEN[5]
    noz, A = aft(L)
    z0, z1 = 0.22, 0.74
    box((0.046, 0.06, z1 - z0 + 0.04), T((0, 0, (z0 + z1) / 2)), DARK, 0.9, 0.003)
    box((0.05, 0.006, z1 - z0), T((0, 0.034, (z0 + z1) / 2)), HULL, 0.85, 0.002)
    n = int((z1 - z0 - 0.01) / 0.082)
    for i in range(n):
        z = z0 + 0.05 + i * 0.082
        for sx in (-1, 1):
            beam((sx * 0.023, 0, z - 0.041), (sx * 0.1, 0, z - 0.041), 0.005, DARK, 0.8)
            for sy in (-1, 1):
                if rnd.random() < 0.08:
                    continue
                c = V((sx * 0.062, sy * 0.027, z))
                box((0.072, 0.05, 0.074), T(c), HULL, rnd.uniform(0.62, 1.0), 0.003)
                box((0.003, 0.04, 0.062), T(c + V((sx * 0.0365, 0, 0))), PAINT if rnd.random() < 0.2 else DARK, 0.9, 0.0, True)
                for e in (-1, 1):
                    box((0.074, 0.052, 0.003), T(c + V((0, 0, e * 0.02))), DARK, 0.8, 0.0, False)
    head(z1, L, 0.1, 0.08)
    jets(A, (0.14,))
    K.jets.append((z1 + 0.1, 0.06))
    light((-0.104, 0, 0.48), NAV_R, 0.005)
    light((0.104, 0, 0.48), NAV_G, 0.005)
    return noz


HULLS = [corvette, frigate, escort, battleship, tender, freighter]


def build():
    nozzles, engines, counts, jet = [], [], [], []
    for i, f in enumerate(HULLS):
        begin(i, (i * SPACING, 0, 0), 0.0, 100 + i)
        nozzles.append(f())
        counts.append(len(K.engines))
        engines += [v for e in K.engines for v in e]
        lo, hi = min(K.jets), max(K.jets)
        jet += [lo[0], lo[1], hi[0], hi[1]]
        begin(i + len(HULLS), (i * SPACING, 3.0, 0), LOD[i], 100 + i)
        f()
    return {'nozzles': nozzles, 'spacing': SPACING, 'hulls': len(HULLS), 'lod_y': 3.0, 'true_size': 1, 'engines_n': counts, 'engines': engines, 'jets': jet}


# Previews: each hull from above its port quarter, then from below its bow.
run('concord_ships', 'concord-ships', build, views=[(2.2, 0.45, LEN[i] * 2.3, (i * SPACING, 0, LEN[i] * 0.48)) for i in range(6)] + [(0.9, -0.35, LEN[i] * 2.3, (i * SPACING, 0, LEN[i] * 0.48)) for i in (1, 3)])
