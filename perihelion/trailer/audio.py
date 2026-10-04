import numpy as np, wave
SR = 48000; DUR = 15.0; N = int(SR * DUR)
t = np.arange(N) / SR
rng = np.random.default_rng(3)
L = np.zeros(N); R = np.zeros(N)
def env(a, b, att=0.01, rel=0.2):
    e = np.zeros(N); i0, i1 = int(a*SR), min(N, int(b*SR))
    x = t[i0:i1] - a; e[i0:i1] = np.minimum(1, x/att) * np.minimum(1, (b - t[i0:i1])/rel)
    return np.clip(e, 0, 1)
def lp(x, fc):
    fc = np.broadcast_to(fc, x.shape); a = 1 - np.exp(-2*np.pi*fc/SR); y = np.zeros_like(x); s = 0.0
    for i in range(len(x)): s += a[i]*(x[i]-s); y[i] = s
    return y
def saw(f, ph=0):
    p = np.cumsum(np.broadcast_to(f, t.shape)) / SR + ph
    return 2*(p % 1) - 1
def add(x, pan=0.0, g=1.0):
    global L, R
    L += x * g * np.sqrt(0.5*(1-pan)); R += x * g * np.sqrt(0.5*(1+pan))
def boom(at, g=1.0, f0=110, f1=32, dec=1.2):
    x = np.zeros(N); i0 = int(at*SR); n = min(N-i0, int(dec*4*SR)); tt = np.arange(n)/SR
    f = f1 + (f0-f1)*np.exp(-tt*9); ph = 2*np.pi*np.cumsum(f)/SR
    body = np.sin(ph) * np.exp(-tt/dec)
    click = rng.standard_normal(n) * np.exp(-tt*60) * 0.5
    x[i0:i0+n] = np.tanh(1.6*(body + click)) ; add(x, 0, g)
def noise_hit(at, g, dec, fc):
    x = np.zeros(N); i0 = int(at*SR); n = min(N-i0, int(dec*6*SR)); tt = np.arange(n)/SR
    nz = rng.standard_normal(n) * np.exp(-tt/dec)
    x[i0:i0+n] = nz; x = lp(x, fc) if fc else x
    add(x, rng.uniform(-0.6, 0.6), g)
CUTS = [0, 2.5, 4.5, 7.5, 10.5, 12.5]
# drone: A1 + E2, detuned saws, filter opens over time
drone_env = np.clip(t/2.0, 0, 1) * np.clip((12.45 - t)/0.05, 0, 1)
fc = 180 + 900 * (t/12.5)**2
for det, pan in [(-0.12, -0.7), (0.0, 0), (0.15, 0.7)]:
    d = saw(55*(1+det/100*6)) + 0.6*saw(82.4*(1+det/100*6), 0.3)
    add(lp(d, fc) * drone_env * (0.10 + 0.10*t/12.5), pan)
# high shimmer (sun)
add(np.sin(2*np.pi*880*t + 0.3*np.sin(2*np.pi*0.3*t)) * env(0, 4.6, 1.5, 1.5) * 0.025, -0.3)
add(np.sin(2*np.pi*1318.5*t) * env(0.5, 4.6, 1.5, 1.5) * 0.018, 0.3)
# booms on cuts
for c, g in zip(CUTS[:-1], [0.55, 0.6, 0.7, 0.9, 0.5]): boom(c + (0.02 if c == 0 else 0), g)
# pulse from 4.5: kick on beats, ticks on 8ths, 16ths in battle
for k in np.arange(4.5, 10.5, 0.5): boom(k, 0.32 if k < 7.5 else 0.42, 90, 45, 0.18)
for k in np.arange(4.5, 12.45, 0.25):
    noise_hit(k, 0.06 if k < 7.5 else 0.09, 0.02, None)
for k in np.arange(7.5, 10.5, 0.125): noise_hit(k + 0.0625, 0.035, 0.012, None)
# battle explosions
for k, g in [(7.55, 0.5), (8.05, 0.35), (8.55, 0.45), (8.9, 0.3), (9.3, 0.4), (9.55, 0.35)]: noise_hit(k, g, 0.35, 900)
# riser 10.5 -> 12.45
r_env = np.clip((t-10.5)/1.95, 0, 1)**2 * (t < 12.45)
nz = rng.standard_normal(N)
add(lp(nz, 300 + 6000*r_env) * r_env * 0.35, 0)
rf = 110 * 2**(r_env*2)
add((saw(rf) * 0.5 + saw(rf*1.5, 0.2)*0.3) * r_env * 0.12, 0)
# title hit: big boom + brass-ish A minor chord braam, then pad
boom(12.5, 1.0, 140, 30, 2.0)
noise_hit(12.5, 0.4, 0.6, 2500)
ch = env(12.5, 15.0, 0.02, 1.4)
br = sum(lp(saw(f) + saw(f*1.004, 0.5), 300 + 2500*np.exp(-np.maximum(t-12.5, 0)*3)) for f in [55, 110, 130.8, 164.8, 246.9])
add(br * ch * 0.06, 0)
pad = sum(np.sin(2*np.pi*f*t) for f in [440, 523.25, 659.25, 987.77]) 
add(pad * env(12.6, 15.0, 0.5, 1.6) * 0.03, 0.2)
# reverb: convolve with decaying noise IR
def reverb(x, sec=2.2, mix=0.28):
    n = int(sec*SR); ir = rng.standard_normal(n) * np.exp(-np.arange(n)/SR*3.2); ir /= np.sqrt((ir**2).sum())
    m = 1 << int(np.ceil(np.log2(len(x)+n)))
    y = np.fft.irfft(np.fft.rfft(x, m) * np.fft.rfft(ir, m), m)[:len(x)]
    return x + mix * y
L, R = reverb(L), reverb(R)
mx = np.stack([L, R], 1)
mx = np.tanh(mx / np.abs(mx).max() * 1.4) ; mx /= np.abs(mx).max(); mx *= 0.89
fade = np.clip((15.0 - t)/0.3, 0, 1); mx *= fade[:, None]
with wave.open('music.wav', 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((mx*32767).astype('<i2').tobytes())
print('ok')
