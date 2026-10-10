import * as THREE from 'three';
import { NOISE, LD_VERT_PARS, LD_VERT, LD_FRAG_PARS, LD_FRAG, FULLSCREEN_VERT } from './glsl.js';

/**
 * Worlds, painted on the GPU from noise once per game ("baked") into two
 * textures each, then lit live by a shader of their own:
 *
 *  - albedo: surface colour (sRGB) and height (alpha);
 *  - aux: tangent-space normal (RG), city lights (B), and clouds (A; lava
 *    on volcanic worlds, which have no water clouds).
 *
 * Homeworlds have oceans with sun glitter, continents with mountain ranges
 * and ice caps, a cloud deck that drifts and casts shadows, city lights on
 * the night side and a scattering atmosphere that reddens at the terminator
 * and glows when backlit. Rocky planets and moons are cratered (bowls, rims,
 * central peaks, bright ray systems), with lunar-style lighting for the
 * airless ones. Gas giants have shearing cloud bands that flow at different
 * speeds by latitude, swirling storms, and ring systems that cast shadows
 * on the planet (and the planet on them). Moons and planets eclipse each
 * other.
 */

const DIR_FROM_UV = /* glsl */ `
vec3 dirFromUv(vec2 uv) {
  float phi = uv.x * 6.28318530718;
  float th = (1.0 - uv.y) * 3.14159265359;
  return vec3(-cos(phi) * sin(th), cos(th), sin(phi) * sin(th));
}`;

const BAKE_FRAG = /* glsl */ `
${NOISE}
${DIR_FROM_UV}
uniform int uKind;   // 0 homeworld, 1 rocky planet, 2 moon, 3 gas giant
uniform int uType;   // biome / subtype
uniform float uSeed;
uniform vec3 uPalA, uPalB, uPalC;
uniform vec4 uStorm[4]; // xyz direction, w size
varying vec2 vUv;

vec3 toS(vec3 c) { return pow(clamp(c, 0.0, 1.0), vec3(1.0 / 2.2)); }

// Impact craters on one scale: bowls, raised rims, central peaks, ejecta
// and (for the young ones) bright rays. Adds to height h and albedo tint a.
void craters(vec3 d, float freq, float density, float depth, float seed, inout float h, inout float a) {
  vec3 p = d * freq;
  vec3 c0 = floor(p);
  for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec3 cell = c0 + vec3(float(x), float(y), float(z));
    vec3 hh = hash33(cell + seed);
    if (hh.x > density) continue;
    vec3 cd = normalize(cell + hash33(cell * 1.31 + seed + 4.0));
    float cosd = dot(d, cd);
    if (cosd < 0.0) continue;
    float dist = acos(min(cosd, 1.0)) * freq;
    float R = 0.18 + 0.42 * hh.y * hh.y;
    float r = dist / R;
    if (r > 3.0) continue;
    float k = R * depth;
    float prof;
    if (r < 1.0) prof = -(1.0 - r * r) * 0.8 + (R > 0.42 ? 0.35 * exp(-r * r * 30.0) : 0.0);
    else prof = 0.0;
    prof += 0.32 * exp(-pow((r - 1.0) / 0.16, 2.0));
    prof += r > 1.0 ? 0.05 * exp(-(r - 1.0) * 2.5) : 0.0;
    h += prof * k;
    // Old craters have dark lava-filled floors; young ones throw bright rays.
    if (hh.z > 0.82) {
      vec3 t1 = normalize(cross(cd, vec3(0.3, 1.0, 0.2)));
      vec3 t2 = cross(cd, t1);
      float ang = atan(dot(d, t2), dot(d, t1));
      float rays = pow(0.5 + 0.5 * sin(ang * 23.0 + hh.y * 40.0), 6.0) * pow(0.5 + 0.5 * sin(ang * 9.0 + hh.x * 70.0), 2.0);
      a += (r < 1.15 ? 0.18 : rays * 0.22 * exp(-(r - 1.0) * 0.9) * step(1.0, r));
    } else if (r < 1.0) a -= 0.05 * hh.z;
  }
}

// Long cracks across an icy crust (lineae): 0 off a crack, 1 on one.
float lineae(vec3 d, float s) {
  float l = 0.0;
  for (int i = 0; i < 3; i++) {
    float f = float(i);
    float n = snoise(d * (2.0 + f * 1.7) + s + f * 13.0 + vec3(0.0, fbm(d * 3.0 + f, 3) * 0.6, 0.0));
    l = max(l, exp(-pow(n / 0.025, 2.0)) * (0.6 + 0.4 * snoise(d * 5.0 + f * 3.0)));
  }
  return clamp(l, 0.0, 1.0);
}

void main() {
  vec3 d = dirFromUv(vUv);
  float lat = asin(clamp(d.y, -1.0, 1.0));
  float alat = abs(d.y);
  vec3 col = vec3(0.5);
  float h = 0.5;
  vec3 q = d + uSeed;

  if (uKind == 0) {
    // ---- Homeworld ----
    vec3 w = vec3(fbm(q * 1.3, 4), fbm(q * 1.3 + 5.3, 4), fbm(q * 1.3 + 9.1, 4));
    float cont = fbm(q * 1.25 + w * 0.6, 8);
    float sea = uType == 1 ? -0.32 : uType == 5 ? 0.2 : uType == 2 ? 0.0 : uType == 3 ? 0.02 : uType == 4 ? -0.06 : 0.05;
    float land = cont - sea;
    float mtn = ridged(q * 3.2 + w * 1.2, 7);
    float hgt = land + mtn * smoothstep(0.0, 0.2, land) * 0.32;
    float moist = fbm(q * 2.4 + 17.0, 5) * 0.5 + 0.5;
    float fine = fbm(q * 18.0, 4);
    float iceLine = (uType == 2 ? 0.42 : uType == 1 ? 0.93 : uType == 3 ? 0.9 : 0.8) - hgt * 0.2 + fine * 0.04;
    if (uType == 0 || uType == 5 || uType == 3) {
      // Temperate, ocean and jungle worlds: blue water, green and tan land.
      if (land < 0.0) {
        float k = clamp(1.0 + land * 5.0, 0.0, 1.0);
        col = mix(vec3(0.004, 0.018, 0.055), vec3(0.02, 0.12, 0.17), k * k * k);
        if (uType == 3) col = mix(vec3(0.004, 0.03, 0.04), vec3(0.03, 0.14, 0.12), k * k * k);
      } else {
        float hot = 1.0 - alat;
        float tropics = smoothstep(0.5, 0.65, hot) * smoothstep(0.92, 0.78, hot); // dry belts either side of the equator
        float dry = clamp(moist * 1.2 - 0.05 - tropics * 0.45 + (uType == 3 ? 0.4 : 0.0), 0.0, 1.0);
        vec3 forest = uType == 3 ? vec3(0.025, 0.08, 0.02) : vec3(0.04, 0.09, 0.025);
        vec3 grass = vec3(0.12, 0.15, 0.05);
        vec3 desert = vec3(0.42, 0.30, 0.16);
        col = mix(desert, mix(grass, forest, smoothstep(0.4, 0.8, dry)), smoothstep(0.15, 0.45, dry));
        col = mix(col, vec3(0.3, 0.22, 0.14), smoothstep(0.08, 0.3, hgt - land) * 0.8); // mountains
        col = mix(col, vec3(0.5, 0.45, 0.32), smoothstep(0.0, 0.015, 0.015 - land) * 0.6); // beaches
        col = mix(col, vec3(0.28, 0.32, 0.25), smoothstep(0.65, 0.85, alat)); // tundra
        col *= 0.85 + fine * 0.25;
        col = mix(col, vec3(0.68, 0.7, 0.72), smoothstep(0.32, 0.42, hgt - land) * 0.9); // snow on peaks
      }
    } else if (uType == 1) {
      // Desert: dune seas, dark rock ridges, dry basins and salt pans.
      float dunes = ridged(vec3(d.x * 30.0, d.y * 10.0, d.z * 30.0) + w, 3);
      col = mix(vec3(0.45, 0.24, 0.10), vec3(0.62, 0.40, 0.20), moist);
      col = mix(col, vec3(0.20, 0.11, 0.06), smoothstep(0.15, 0.35, mtn * smoothstep(0.0, 0.3, land)));
      col *= 0.9 + dunes * 0.15;
      col = mix(col, vec3(0.75, 0.70, 0.62), smoothstep(-0.02, -0.12, land) * 0.7);
      hgt = max(hgt, -0.15) + dunes * 0.01;
    } else if (uType == 2) {
      // Ice: white sheets, blue crevasses, a few dark frozen seas.
      float cr = lineae(d, uSeed);
      col = land < 0.0 ? vec3(0.08, 0.18, 0.28) * (0.8 + fine * 0.3) : mix(vec3(0.48, 0.55, 0.62), vec3(0.66, 0.69, 0.72), smoothstep(0.0, 0.3, land));
      col = mix(col, vec3(0.15, 0.3, 0.45), cr * 0.7);
      hgt = max(hgt, -0.05) - cr * 0.02;
    } else {
      // Volcanic: black basalt, rust highlands, glowing lava seams (in aux).
      col = land < 0.0 ? vec3(0.025, 0.018, 0.015) : mix(vec3(0.05, 0.04, 0.035), vec3(0.22, 0.09, 0.04), smoothstep(0.0, 0.4, land + moist * 0.2));
      col *= 0.8 + fine * 0.4;
      hgt = max(hgt, -0.08);
    }
    if (alat > iceLine && uType != 1) col = mix(col, vec3(0.7, 0.73, 0.76), smoothstep(0.0, 0.04, alat - iceLine));
    if (uType == 1 && alat > iceLine) col = mix(col, vec3(0.8, 0.78, 0.74), 0.8);
    h = clamp(max(hgt, uType == 1 ? -1.0 : 0.0) * 0.5 + 0.5, 0.0, 1.0);
    if (land < 0.0 && uType != 1 && uType != 4) h = 0.5 + land * 0.04; // sea floor, below the waterline
  } else if (uKind == 1 || uKind == 2) {
    // ---- Rocky planets and moons ----
    float mare = fbm(q * 1.6, 5);
    float grit = fbm(q * 14.0, 4);
    float hgt = fbm(q * 2.5, 6) * 0.15;
    float a = 0.0;
    int t = uType;
    bool icy = (uKind == 1 && t == 3) || (uKind == 2 && t == 2);
    float cd = icy ? 0.25 : 1.0;
    craters(d, 3.0, 0.35 * cd, 0.10, uSeed, hgt, a);
    craters(d, 7.0, 0.45 * cd, 0.07, uSeed + 1.0, hgt, a);
    craters(d, 16.0, 0.55 * cd, 0.045, uSeed + 2.0, hgt, a);
    craters(d, 38.0, 0.6 * cd, 0.03, uSeed + 3.0, hgt, a);
    if (uKind == 1 && t == 0) {
      // Rust desert: dark albedo provinces, canyons, polar caps.
      float can = ridged(q * 2.0 + 3.0, 5);
      hgt -= smoothstep(0.75, 0.95, can) * 0.06;
      col = mix(vec3(0.20, 0.08, 0.035), vec3(0.50, 0.24, 0.10), smoothstep(-0.2, 0.3, mare));
      col *= 0.85 + grit * 0.2 + a * 0.6;
      col = mix(col, vec3(0.86, 0.84, 0.82), smoothstep(0.86, 0.9, alat + fbm(q * 6.0, 3) * 0.04));
    } else if (uKind == 1 && t == 2) {
      // Thick-clouded world: no surface visible, only swirled cream and sulphur cloud.
      vec3 sw = vec3(fbm(q * 2.0, 4), fbm(q * 2.0 + 7.0, 4), 0.0);
      float c = fbm(vec3(d.x * 2.0, d.y * 7.0, d.z * 2.0) + sw * 1.5 + uSeed, 6);
      col = mix(vec3(0.55, 0.45, 0.25), vec3(0.85, 0.78, 0.6), c * 0.5 + 0.5);
      hgt = 0.0;
    } else if (icy) {
      // Icy crust: bright, few craters, long reddish-brown cracks.
      float cr = lineae(d, uSeed);
      col = mix(vec3(0.62, 0.62, 0.6), vec3(0.85, 0.85, 0.82), mare * 0.5 + 0.5);
      col = mix(col, vec3(0.42, 0.22, 0.12), cr * 0.75);
      col *= 0.92 + grit * 0.1 + a * 0.3;
      hgt -= cr * 0.015;
    } else if (uKind == 2 && t == 3) {
      // Sulphur moon: yellow and orange plains, dark volcanic spots and halos.
      vec2 v = worley(q * 5.0);
      float spot = smoothstep(0.18, 0.05, v.x);
      float halo = smoothstep(0.45, 0.15, v.x) * (1.0 - spot);
      col = mix(vec3(0.62, 0.52, 0.18), vec3(0.75, 0.62, 0.32), mare * 0.5 + 0.5);
      col = mix(col, vec3(0.55, 0.22, 0.06), halo * 0.6);
      col = mix(col, vec3(0.06, 0.04, 0.03), spot);
      col *= 0.9 + grit * 0.15;
      hgt *= 0.4;
    } else {
      // Grey or tan airless rock: dark maria, bright highlands.
      vec3 hi = (uKind == 2 && t == 1) ? vec3(0.32, 0.27, 0.22) : vec3(0.42, 0.40, 0.37);
      vec3 lo = (uKind == 2 && t == 1) ? vec3(0.10, 0.085, 0.07) : vec3(0.13, 0.125, 0.12);
      if (uKind == 1) { hi = vec3(0.40, 0.36, 0.31); lo = vec3(0.16, 0.14, 0.12); }
      col = mix(lo, hi, smoothstep(0.05, 0.3, mare + 0.15));
      col *= 0.85 + grit * 0.2;
      col += a * vec3(0.9, 0.88, 0.85) * 0.6;
    }
    h = clamp(0.5 + hgt * 2.0, 0.0, 1.0);
  } else {
    // ---- Gas giant ----
    vec3 p = d;
    // Storms: swirl the cloud field round each one before drawing the bands.
    for (int i = 0; i < 4; i++) {
      vec3 sd = uStorm[i].xyz;
      float sz = uStorm[i].w;
      if (sz <= 0.0) continue;
      float dd = length(p - sd);
      float ang = 5.0 * exp(-pow(dd / sz, 2.0)) * (i == 0 ? 1.0 : -1.0);
      float c = cos(ang), s = sin(ang);
      p = p * c + cross(sd, p) * s + sd * dot(sd, p) * (1.0 - c);
    }
    // Zones and belts: several band frequencies, pushed about by turbulence
    // that's strongest where neighbouring bands shear past each other.
    float turb = fbm(vec3(p.x * 4.0, p.y * 14.0, p.z * 4.0) + uSeed, 6);
    float y = p.y + turb * 0.03;
    float s1 = uSeed * 3.1, s2 = uSeed * 1.7, s3 = uSeed * 0.9;
    float main = sin(y * 9.0 + s1);
    float bands = main * 0.45 + sin(y * 19.0 + s2) * 0.28 + sin(y * 41.0 + s3) * 0.16 + sin(y * 87.0 + s1) * 0.08;
    float edge = 1.0 - abs(main);
    float eddy = fbm(vec3(p.x * 10.0, p.y * 36.0, p.z * 10.0) + turb * 3.0 + uSeed, 6);
    float wisp = fbm(vec3(p.x * 28.0, p.y * 110.0, p.z * 28.0) + eddy * 2.0, 4);
    float band = bands + eddy * (0.25 + edge * 0.45) + wisp * 0.1;
    col = mix(uPalC * 0.8, uPalA, smoothstep(-0.75, -0.1, band));
    col = mix(col, uPalB, smoothstep(0.0, 0.7, band));
    col = mix(col, uPalB * 1.12, smoothstep(0.75, 1.1, band) * 0.6);
    col *= 0.92 + wisp * 0.12;
    // The great storm: a paler (or redder) oval.
    float st = exp(-pow(length(d - uStorm[0].xyz) / (uStorm[0].w * 0.6), 2.0));
    col = mix(col, uPalC * 1.15, st * 0.7);
    for (int i = 1; i < 4; i++) col = mix(col, vec3(0.85, 0.83, 0.78), exp(-pow(length(d - uStorm[i].xyz) / (uStorm[i].w * 0.35), 2.0)) * 0.8);
    col = mix(col, col * vec3(0.8, 0.85, 0.95), smoothstep(0.75, 0.95, alat)); // bluish poles
    h = 0.5;
  }
  gl_FragColor = vec4(toS(col), h);
}`;

// Second pass: normals from the heights, city lights, and the cloud deck.
const AUX_FRAG = /* glsl */ `
${NOISE}
${DIR_FROM_UV}
// Wind the sphere round the nearest cyclone centre (mid-latitudes only).
vec3 cyclones(vec3 d, float seed) {
  vec3 p = d * 2.6;
  vec3 c0 = floor(p);
  vec3 best = d; float bd = 9.0;
  for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec3 cell = c0 + vec3(float(x), float(y), float(z));
    vec3 c = normalize(cell + hash33(cell + seed));
    float dd = length(d - c);
    if (dd < bd) { bd = dd; best = c; }
  }
  float la = asin(best.y);
  float str = smoothstep(0.35, 0.7, abs(la)) * smoothstep(1.35, 1.05, abs(la)) * sign(la);
  float ang = str * 4.0 * exp(-bd * bd / 0.025);
  float c = cos(ang), s = sin(ang);
  return d * c + cross(best, d) * s + best * dot(best, d) * (1.0 - c);
}
uniform sampler2D tAlb;
uniform vec2 uTexel;
uniform float uRelief;
uniform int uKind, uType;
uniform float uSeed;
uniform float uClouds;
varying vec2 vUv;
void main() {
  vec3 d = dirFromUv(vUv);
  float st = max(sqrt(1.0 - d.y * d.y), 0.08);
  // Sobel over a two-texel spacing: smooths away the steps of 8-bit heights.
  vec2 ex = vec2(uTexel.x * 2.0, 0.0), ey = vec2(0.0, uTexel.y * 2.0);
  float h0 = texture2D(tAlb, vUv).a;
  float hE = texture2D(tAlb, vUv + ex).a * 2.0 + texture2D(tAlb, vUv + ex + ey).a + texture2D(tAlb, vUv + ex - ey).a;
  float hW = texture2D(tAlb, vUv - ex).a * 2.0 + texture2D(tAlb, vUv - ex + ey).a + texture2D(tAlb, vUv - ex - ey).a;
  float hN = texture2D(tAlb, vUv + ey).a * 2.0 + texture2D(tAlb, vUv + ey + ex).a + texture2D(tAlb, vUv + ey - ex).a;
  float hS = texture2D(tAlb, vUv - ey).a * 2.0 + texture2D(tAlb, vUv - ey + ex).a + texture2D(tAlb, vUv - ey - ex).a;
  float dx = (hE - hW) / 4.0 / (4.0 * uTexel.x * 6.2832 * st);
  float dy = (hN - hS) / 4.0 / (4.0 * uTexel.y * 3.1416);
  vec3 n = normalize(vec3(-dx * uRelief, -dy * uRelief, 1.0));
  vec3 q = d + uSeed;
  // City lights: clustered towns along coasts and rivers, none at sea or on ice.
  float lights = 0.0;
  if (uKind == 0) {
    float land = step(0.5001, h0);
    float alat = abs(d.y);
    // Populated regions, metro clusters in them, and a fine grain of streets.
    float region = smoothstep(0.05, 0.45, fbm(q * 3.0 + 40.0, 4));
    float metro = smoothstep(0.62, 0.82, fbm(q * 16.0 + 3.0, 4) * 0.5 + 0.5);
    float towns = pow(max(0.0, snoise(q * 70.0 + 9.0)), 3.0);
    float grain = 0.25 + 0.75 * smoothstep(0.1, 0.7, snoise(q * 190.0) * 0.5 + 0.5);
    float coast = 1.0 + smoothstep(0.03, 0.0, h0 - 0.5) * 1.5; // cities crowd the coasts
    lights = land * region * (metro * 0.85 + towns * 0.35) * grain * coast * smoothstep(0.8, 0.6, alat);
    if (uType == 1) lights *= 1.3;
  } else if (uKind == 1 || uKind == 2) {
    // Domes and mining towns on other worlds: sparse.
    float region = smoothstep(0.3, 0.6, fbm(q * 2.0 + 40.0, 3));
    lights = region * pow(max(0.0, fbm(q * 50.0, 3) * 0.5 + 0.5), 6.0) * 6.0;
  } else {
    // Floating cities and skimmer fleets in the upper deck.
    float region = smoothstep(0.35, 0.6, fbm(q * 2.0 + 40.0, 3)) * smoothstep(0.7, 0.4, abs(d.y));
    lights = region * pow(max(0.0, snoise(q * 70.0) * 0.5 + 0.5), 8.0) * 4.0;
  }
  // Clouds: storm belts at mid latitudes and the tropics, swirls, clear subtropics.
  float a = 0.0;
  if (uKind == 0 && uType == 4) {
    // Volcanic world: lava seams instead of water clouds.
    float seam = exp(-pow(snoise(q * 4.0 + fbm(q * 3.0, 3)) / 0.04, 2.0)) + exp(-pow(snoise(q * 9.0 + 2.0) / 0.03, 2.0)) * 0.5;
    a = clamp(seam * step(0.5, h0) * (0.4 + 0.6 * smoothstep(0.5, 0.75, h0)), 0.0, 1.0);
  } else if (uClouds > 0.0) {
    // Weather: an equatorial band of storms, clear subtropics with scattered
    // fair-weather cumulus, and mid-latitude storm tracks wound into spiral
    // cyclones (turning opposite ways in each hemisphere).
    vec3 dc = cyclones(d, uSeed);
    float lat = asin(d.y);
    vec3 w = vec3(fbm(dc * 2.0 + 5.0, 4), fbm(dc * 2.0 + 8.0, 4), fbm(dc * 2.0 + 11.0, 4));
    float big = fbm(vec3(dc.x * 2.4, dc.y * 4.5, dc.z * 2.4) + w * 0.7 + uSeed + 50.0, 7);
    float alat = abs(lat);
    float bias = -0.1 + 0.25 * exp(-pow(lat / 0.12, 2.0))
      + 0.2 * smoothstep(0.6, 0.9, alat) * smoothstep(1.45, 1.1, alat)
      - 0.18 * exp(-pow((alat - 0.4) / 0.14, 2.0));
    float cov = smoothstep(0.0, 0.22, big + bias);
    float streak = fbm(vec3(dc.x * 10.0, dc.y * 40.0, dc.z * 10.0) + w * 2.0, 4);
    cov *= 0.75 + 0.35 * streak;
    float cu = smoothstep(0.66, 0.82, fbm(d * 22.0 + 3.0, 4) * 0.5 + 0.5) * 0.3 * (1.0 - cov);
    a = clamp(cov + cu, 0.0, 1.0) * uClouds;
    if (uType == 1) a *= 0.35; // desert: thin
    if (uType == 2) a *= 0.7;
    if (uType == 3 || uType == 5) a = min(1.0, a * 1.2); // wet worlds
  }
  gl_FragColor = vec4(n.xy * 0.5 + 0.5, clamp(lights, 0.0, 1.0), a);
}`;

/** Per-world look: what kind of world it bakes as, and its sky. */
export const BIOMES = ['temperate', 'desert', 'ice', 'jungle', 'volcanic', 'ocean'];
const BIOME_SKY = { temperate: [0.35, 0.6, 1.0], desert: [1.0, 0.7, 0.45], ice: [0.6, 0.8, 1.0], jungle: [0.4, 0.7, 0.85], volcanic: [1.0, 0.45, 0.25], ocean: [0.3, 0.55, 1.0] };
const GIANT_PALS = [
  [[0.50, 0.33, 0.18], [0.82, 0.70, 0.52], [0.62, 0.30, 0.15]], // ochre and cream, rust storm
  [[0.30, 0.45, 0.60], [0.70, 0.82, 0.88], [0.20, 0.30, 0.55]], // ice blue
  [[0.22, 0.42, 0.40], [0.55, 0.72, 0.66], [0.15, 0.30, 0.32]], // teal
  [[0.45, 0.20, 0.12], [0.78, 0.55, 0.40], [0.35, 0.12, 0.08]], // rust
  [[0.35, 0.28, 0.45], [0.70, 0.62, 0.75], [0.25, 0.18, 0.40]], // violet
  [[0.62, 0.55, 0.40], [0.88, 0.84, 0.72], [0.50, 0.40, 0.28]], // cream
];

export function giantPalette(b) { return GIANT_PALS[Math.floor(b.hue * GIANT_PALS.length) % GIANT_PALS.length]; }

export function lookOf(b) {
  if (b.home) return { kind: 0, type: Math.max(0, BIOMES.indexOf(b.biome || 'temperate')), atmo: BIOME_SKY[b.biome] || BIOME_SKY.temperate, atmoK: 1.0, clouds: b.biome === 'volcanic' ? 0 : 1, relief: 0.06 };
  if (b.giant) return { kind: 3, type: 0, atmo: giantPalette(b)[1].map((x) => x * 0.9 + 0.1), atmoK: 0.55, clouds: 0, relief: 0 };
  if (b.kind === 'planet') {
    const type = Math.floor(b.hue * 4) % 4;
    const atmo = [[1.0, 0.6, 0.4], null, [1.0, 0.85, 0.55], [0.6, 0.75, 1.0]][type];
    return { kind: 1, type, atmo, atmoK: type === 2 ? 1.2 : 0.45, clouds: 0, relief: type === 2 ? 0 : 0.09, airless: type === 1 };
  }
  // Moons: grey, tan, icy or sulphur; moons of giants run icier and stranger.
  const type = Math.floor(b.hue * 4) % 4;
  return { kind: 2, type, atmo: null, atmoK: 0, clouds: 0, relief: 0.12, airless: true };
}

/** Bakes a world's two maps on the GPU. Sizes by kind and quality. */
export function createBaker(renderer, quality) {
  const tri = new THREE.BufferGeometry();
  tri.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  const quad = new THREE.Mesh(tri);
  quad.frustumCulled = false;
  const scene = new THREE.Scene();
  scene.add(quad);
  const cam = new THREE.Camera();
  const bakeMat = new THREE.ShaderMaterial({
    uniforms: {
      uKind: { value: 0 }, uType: { value: 0 }, uSeed: { value: 0 },
      uPalA: { value: new THREE.Vector3() }, uPalB: { value: new THREE.Vector3() }, uPalC: { value: new THREE.Vector3() },
      uStorm: { value: [0, 1, 2, 3].map(() => new THREE.Vector4()) },
    },
    vertexShader: FULLSCREEN_VERT,
    fragmentShader: BAKE_FRAG,
    depthTest: false,
    depthWrite: false,
  });
  const auxMat = new THREE.ShaderMaterial({
    uniforms: { tAlb: { value: null }, uTexel: { value: new THREE.Vector2() }, uRelief: { value: 1 }, uKind: { value: 0 }, uType: { value: 0 }, uSeed: { value: 0 }, uClouds: { value: 0 } },
    vertexShader: FULLSCREEN_VERT,
    fragmentShader: AUX_FRAG,
    depthTest: false,
    depthWrite: false,
  });
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const target = (w, h) => {
    const rt = new THREE.WebGLRenderTarget(w, h, {
      depthBuffer: false, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter,
      wrapS: THREE.RepeatWrapping, wrapT: THREE.ClampToEdgeWrapping,
    });
    rt.texture.anisotropy = aniso;
    return rt;
  };
  return function bake(b, look) {
    const hi = quality() === 'high';
    const W = look.kind === 0 ? (hi ? 2048 : 1024) : (hi ? 1024 : 512);
    const H = W / 2;
    const seed = (b.id * 7.31 + b.hue * 13.7) % 97;
    const u = bakeMat.uniforms;
    u.uKind.value = look.kind;
    u.uType.value = look.type;
    u.uSeed.value = seed;
    if (look.kind === 3) {
      const pal = giantPalette(b);
      u.uPalA.value.fromArray(pal[0]); u.uPalB.value.fromArray(pal[1]); u.uPalC.value.fromArray(pal[2]);
      let s = Math.floor(seed * 1000);
      const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
      u.uStorm.value.forEach((v, i) => {
        const la = (r() - 0.5) * (i ? 1.4 : 0.9), lo = r() * Math.PI * 2;
        v.set(Math.cos(la) * Math.cos(lo), Math.sin(la), Math.cos(la) * Math.sin(lo), i === 0 ? 0.12 + r() * 0.06 : 0.04 + r() * 0.03);
      });
    }
    const alb = target(W, H);
    const aux = target(W, H);
    const prev = renderer.getRenderTarget();
    quad.material = bakeMat;
    renderer.setRenderTarget(alb);
    renderer.render(scene, cam);
    const a = auxMat.uniforms;
    a.tAlb.value = alb.texture;
    a.uTexel.value.set(1 / W, 1 / H);
    a.uRelief.value = look.relief * (W / 1024) * 0.5 + look.relief * 0.5;
    a.uKind.value = look.kind;
    a.uType.value = look.type;
    a.uSeed.value = seed;
    a.uClouds.value = look.clouds;
    quad.material = auxMat;
    renderer.setRenderTarget(aux);
    renderer.render(scene, cam);
    renderer.setRenderTarget(prev);
    return { alb: alb.texture, aux: aux.texture, rts: [alb, aux] };
  };
}

// ---- Live shading ----------------------------------------------------------

// Lights shared by every world: up to two stars.
export const starLights = {
  pos: { value: [new THREE.Vector3(), new THREE.Vector3()] },
  col: { value: [new THREE.Vector3(1.22, 1.17, 1.08), new THREE.Vector3()] },
};

const ECLIPSE = /* glsl */ `
uniform vec4 uOcc[4];
// Soft shadow of up to four spheres (other worlds) between p and the light.
float eclipse(vec3 p, vec3 L, float lightDist) {
  float s = 1.0;
  for (int i = 0; i < 4; i++) {
    vec4 o = uOcc[i];
    vec3 oc = o.xyz - p;
    float t = dot(oc, L);
    float m = length(oc - L * t);
    float pen = o.w * 0.06 + t * 0.012; // penumbra grows with distance
    float k = smoothstep(o.w - pen, o.w + pen, m);
    s *= (o.w > 0.0 && t > 0.0 && t < lightDist) ? k : 1.0;
  }
  return s;
}`;

export function surfaceMaterial(b, look, maps, ring) {
  const giant = look.kind === 3;
  const uniforms = {
    tAlb: { value: maps.alb }, tAux: { value: maps.aux },
    uStarPos: starLights.pos, uStarCol: starLights.col,
    uCity: { value: 0 }, uCityCol: { value: new THREE.Vector3(2.4, 1.5, 0.7) },
    uCloudShift: { value: 0 }, uCloudK: { value: look.clouds ? 0.55 : 0 },
    uLava: { value: look.kind === 0 && look.type === 4 ? 1 : 0 },
    uOcean: { value: look.kind === 0 && look.type !== 1 && look.type !== 4 ? 1 : 0 },
    uAirless: { value: look.airless ? 1 : 0 },
    uAtmo: { value: new THREE.Vector3(...(look.atmo || [0, 0, 0])) },
    uAtmoK: { value: look.atmoK },
    uT: { value: 0 }, uFlow: { value: giant ? 1 : look.kind === 1 && look.type === 2 ? 0.4 : 0 },
    uOcc: { value: [0, 1, 2, 3].map(() => new THREE.Vector4(0, 0, 0, 0)) },
    uRingN: { value: new THREE.Vector3(0, 1, 0) }, uRingIn: { value: 0 }, uRingOut: { value: 0 }, tRing: { value: ring ? ring.tex : null },
    uCenter: { value: new THREE.Vector3() }, uRadius: { value: b.size },
  };
  return new THREE.ShaderMaterial({
    uniforms,
    vertexShader: /* glsl */ `${LD_VERT_PARS}
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWT; varying vec3 vWB; varying vec3 vWN;
      void main() {
        vUv = uv;
        // Tangent frame on the sphere (east, north, up), in world space.
        vec3 n = normalize(position);
        vec3 t = normalize(vec3(n.z, 0.0, -n.x) + vec3(1e-5, 0.0, 0.0));
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vWN = normalize(mat3(modelMatrix) * n);
        vWT = normalize(mat3(modelMatrix) * t);
        vWB = cross(vWN, vWT);
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${LD_VERT}
      }`,
    fragmentShader: /* glsl */ `${LD_FRAG_PARS}
      ${ECLIPSE}
      uniform sampler2D tAlb, tAux, tRing;
      uniform vec3 uStarPos[2], uStarCol[2];
      uniform float uCity, uCloudShift, uCloudK, uLava, uOcean, uAirless, uAtmoK, uT, uFlow, uRingIn, uRingOut, uRadius;
      uniform vec3 uCityCol, uAtmo, uRingN, uCenter;
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWT; varying vec3 vWB; varying vec3 vWN;
      vec3 fromS(vec3 c) { return pow(c, vec3(2.2)); }
      void main() {
        ${LD_FRAG}
        vec2 uv = vUv;
        vec4 alb, aux;
        if (uFlow > 0.0) {
          // Bands flow at their own speeds (jets): two samples half a cycle
          // apart, cross-faded, so the shear never builds up into a smear.
          float lat = uv.y - 0.5;
          float jet = sin(lat * 40.0) * 0.6 + sin(lat * 17.0 + 1.0) * 0.4;
          float ph = uT * 0.02 * uFlow;
          float f0 = fract(ph), f1 = fract(ph + 0.5);
          vec2 o0 = vec2(jet * f0 * 0.012, 0.0), o1 = vec2(jet * f1 * 0.012, 0.0);
          float w = abs(f0 * 2.0 - 1.0);
          alb = mix(texture2D(tAlb, uv + o0), texture2D(tAlb, uv + o1), 1.0 - w);
          aux = texture2D(tAux, uv);
        } else {
          alb = texture2D(tAlb, uv);
          aux = texture2D(tAux, uv);
        }
        vec3 albedo = fromS(alb.rgb);
        vec2 nxy = aux.xy * 2.0 - 1.0;
        vec3 Ng = normalize(vWN);
        vec3 N = normalize(normalize(vWT) * nxy.x + normalize(vWB) * nxy.y + Ng * sqrt(max(0.0, 1.0 - dot(nxy, nxy))));
        vec3 V = normalize(cameraPosition - vWorld);
        float water = uOcean * smoothstep(0.502, 0.497, alb.a);
        float clouds = uCloudK > 0.0 ? texture2D(tAux, uv + vec2(uCloudShift, 0.0)).a : 0.0;
        vec3 col = vec3(0.0);
        float dayAll = 0.0;
        for (int i = 0; i < 2; i++) {
          vec3 sc = uStarCol[i];
          if (sc.r + sc.g + sc.b <= 0.0) continue;
          vec3 Lv = uStarPos[i] - vWorld;
          float ld = length(Lv);
          vec3 L = Lv / ld;
          float ndl = dot(N, L);
          float ngl = dot(Ng, L);
          float diff;
          if (uAirless > 0.5) {
            // Lunar-Lambert: airless dust looks flat at full phase, with a crisp terminator.
            float ndv = max(dot(N, V), 0.0);
            float ls = 2.0 * max(ndl, 0.0) / (max(ndl, 0.0) + ndv + 1e-3);
            diff = mix(max(ndl, 0.0), ls * 0.5, 0.45);
          } else {
            diff = max(0.0, (ndl + 0.04) / 1.04);
          }
          // Only the lit hemisphere (the normal map can't light the night side).
          diff *= smoothstep(-0.06, 0.08, ngl);
          float sh = eclipse(vWorld, L, ld);
          // Ring shadow on the planet.
          if (uRingOut > 0.0) {
            float dn = dot(L, uRingN);
            if (abs(dn) > 1e-3) {
              float t = dot(uCenter - vWorld, uRingN) / dn;
              if (t > 0.0) {
                float rr = length(vWorld + L * t - uCenter) / uRadius;
                if (rr > uRingIn && rr < uRingOut) sh *= 1.0 - texture2D(tRing, vec2((rr - uRingIn) / (uRingOut - uRingIn), 0.5)).a * 0.85;
              }
            }
          }
          sh *= 1.0 - clouds * uCloudK;
          // A warm tint where the light comes in low through the air.
          vec3 tint = mix(vec3(1.0), vec3(1.0, 0.62, 0.38), (1.0 - smoothstep(0.0, 0.35, ngl)) * step(0.01, uAtmoK) * 0.8);
          col += albedo * diff * sh * sc * tint;
          // Sun glitter on open water.
          if (water > 0.0) {
            vec3 Hh = normalize(L + V);
            float nh = max(dot(Ng, Hh), 0.0);
            float fres = 0.02 + 0.98 * pow(1.0 - max(dot(Ng, V), 0.0), 5.0);
            float spec = (pow(nh, 220.0) * 6.0 + pow(nh, 30.0) * 0.12) * (0.4 + fres);
            col += sc * spec * water * sh * smoothstep(0.0, 0.1, ngl);
          }
          dayAll = max(dayAll, smoothstep(-0.15, 0.25, ngl));
        }
        // Night: city lights and lava glow, dimmed under cloud.
        float night = 1.0 - smoothstep(-0.1, 0.12, dayAll);
        col += aux.b * uCity * uCityCol * night * (1.0 - clouds * 0.7) * 1.1;
        if (uLava > 0.0) col += aux.a * vec3(3.0, 0.7, 0.12) * (0.35 + 0.65 * night);
        // A whisper of skylight on the dark side (starlight, ring- and moonshine).
        col += albedo * vec3(0.006, 0.007, 0.01);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
}

/** The cloud deck: a thin shell that drifts over the surface. */
export function cloudMaterial(maps) {
  return new THREE.ShaderMaterial({
    uniforms: { tAux: { value: maps.aux }, uStarPos: starLights.pos, uStarCol: starLights.col, uOcc: { value: [0, 1, 2, 3].map(() => new THREE.Vector4(0, 0, 0, 0)) } },
    vertexShader: /* glsl */ `${LD_VERT_PARS}
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vWN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${LD_VERT}
      }`,
    fragmentShader: /* glsl */ `${LD_FRAG_PARS}
      ${ECLIPSE}
      uniform sampler2D tAux; uniform vec3 uStarPos[2], uStarCol[2];
      varying vec2 vUv; varying vec3 vWorld; varying vec3 vWN;
      void main() {
        ${LD_FRAG}
        float a = texture2D(tAux, vUv).a;
        if (a < 0.01) discard;
        vec3 N = normalize(vWN);
        vec3 V = normalize(cameraPosition - vWorld);
        vec3 col = vec3(0.0);
        for (int i = 0; i < 2; i++) {
          vec3 sc = uStarCol[i];
          if (sc.r + sc.g + sc.b <= 0.0) continue;
          vec3 Lv = uStarPos[i] - vWorld;
          float ld = length(Lv);
          vec3 L = Lv / ld;
          float ndl = dot(N, L);
          float diff = smoothstep(-0.12, 0.5, ndl);
          vec3 tint = mix(vec3(1.0, 0.55, 0.35), vec3(1.0), smoothstep(-0.05, 0.3, ndl));
          col += sc * diff * tint * eclipse(vWorld, L, ld) * 0.92;
        }
        // Thick cloud is brighter; thin edges let the ground through.
        float thick = smoothstep(0.0, 0.9, a);
        col *= 0.75 + thick * 0.3;
        // Thin at the limb as seen from above, so the edge stays crisp.
        float limb = smoothstep(0.0, 0.2, dot(N, V));
        gl_FragColor = vec4(col, a * 0.95 * (0.5 + 0.5 * limb));
      }`,
    transparent: true,
    depthWrite: false,
  });
}

/**
 * Atmosphere: a shell a little bigger than the world, shaded by marching a
 * few steps through it along each view ray (single scattering): blue sky
 * on the day side, red and orange where sunlight skims the terminator, and
 * a bright forward-scattered rim when the world is backlit by its sun.
 */
export function atmosphereMesh(b, look, quality = 'high') {
  const thick = look.kind === 3 ? 0.035 : look.kind === 0 ? 0.045 : 0.035;
  const Ra = b.size * (1 + thick);
  const c = look.atmo;
  // Scattering colour: Rayleigh-like, so blue scatters most on blue worlds;
  // other worlds use their sky colour.
  const beta = new THREE.Vector3(c[0], c[1], c[2]);
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(Ra, 64, 40),
    new THREE.ShaderMaterial({
      uniforms: {
        uCenter: { value: new THREE.Vector3() }, uRp: { value: b.size * 0.998 }, uRa: { value: Ra },
        uStarPos: starLights.pos, uStarCol: starLights.col, uBeta: { value: beta }, uK: { value: look.atmoK },
        uOcc: { value: [0, 1, 2, 3].map(() => new THREE.Vector4(0, 0, 0, 0)) },
      },
      vertexShader: /* glsl */ `${LD_VERT_PARS}
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
          ${LD_VERT}
        }`,
      fragmentShader: /* glsl */ `${LD_FRAG_PARS}
        ${ECLIPSE}
        uniform vec3 uCenter, uBeta; uniform float uRp, uRa, uK;
        uniform vec3 uStarPos[2], uStarCol[2];
        varying vec3 vWorld;
        void main() {
          ${LD_FRAG}
          vec3 ro = cameraPosition;
          vec3 rd = normalize(vWorld - ro);
          vec3 oc = ro - uCenter;
          float b = dot(oc, rd);
          float c = dot(oc, oc) - uRa * uRa;
          float h = b * b - c;
          if (h < 0.0) discard;
          h = sqrt(h);
          float t0 = max(-b - h, 0.0), t1 = -b + h;
          float hp = b * b - (dot(oc, oc) - uRp * uRp);
          bool ground = false;
          if (hp > 0.0) { float tp = -b - sqrt(hp); if (tp > 0.0) { t1 = min(t1, tp); ground = true; } }
          float H = uRa - uRp;
          float seg = (t1 - t0) / H; // in shell thicknesses
          const int N = STEPS;
          float dt = seg / float(N);
          vec3 sum = vec3(0.0);
          vec3 mie = vec3(0.0);
          float odV = 0.0;
          vec3 ext = uBeta * 0.5 + 0.12; // extinction: blue goes first
          ext = vec3(0.10, 0.22, 0.48) + (vec3(1.0) - uBeta) * 0.25;
          for (int i = 0; i < N; i++) {
            float t = t0 + (t1 - t0) * (float(i) + 0.5) / float(N);
            vec3 p = ro + rd * t;
            float alt = clamp((length(p - uCenter) - uRp) / H, 0.0, 1.0);
            float dens = exp(-alt * 4.0);
            odV += dens * dt;
            vec3 up = normalize(p - uCenter);
            for (int s = 0; s < 2; s++) {
              vec3 sc = uStarCol[s];
              if (sc.r + sc.g + sc.b <= 0.0) continue;
              vec3 Lv = uStarPos[s] - p;
              float ld = length(Lv);
              vec3 L = Lv / ld;
              float mu = dot(up, L);
              // Light reaching this point: blocked by the planet below the
              // horizon, reddened by the long path when the sun is low.
              float lit = smoothstep(-0.18, 0.06, mu) * eclipse(p, L, ld);
              float odS = dens * 6.0 / (max(mu, 0.0) * 6.0 + 0.6);
              vec3 att = exp(-ext * (odS + odV) * 1.2);
              float cth = dot(rd, L);
              float pr = 0.75 * (1.0 + cth * cth);
              float g = 0.76;
              float pm = (1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * cth, 1.5) * 0.08;
              sum += dens * lit * att * sc * pr * dt;
              mie += dens * lit * att * sc * pm * dt;
            }
          }
          vec3 col = (sum * uBeta * 0.55 + mie * 0.9) * uK;
          // Over the ground, the air is a thin haze: fade it so the surface reads.
          if (ground) col *= 0.75;
          gl_FragColor = vec4(col, 1.0);
        }`,
      defines: { STEPS: quality === 'high' ? 8 : 5 },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  mesh.renderOrder = 1;
  return mesh;
}

/**
 * Rings: bands of ice and dust (a strip texture made per giant), lit by the
 * sun from either side (brighter seen against the light), and shadowed by
 * the planet.
 */
export function ringMesh(b) {
  const inner = 1.35, outer = 2.35;
  const N = 512;
  const data = new Uint8Array(N * 4);
  let s = Math.floor(b.hue * 1e6) + b.id * 97;
  const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const gaps = Array.from({ length: 3 }, () => ({ at: 0.2 + r() * 0.7, w: 0.006 + r() * 0.025 }));
  // Ringlets: a random walk of density, smoothed a little, so there are
  // hundreds of fine bands rather than a few hoops.
  const walk = new Float32Array(N);
  let w = 0.5;
  for (let i = 0; i < N; i++) { w += (r() - 0.5) * 0.18; w += (0.55 - w) * 0.04; walk[i] = w; }
  for (let i = 0; i < N; i++) {
    const x = i / (N - 1);
    let a = (walk[Math.max(0, i - 1)] + walk[i] + walk[Math.min(N - 1, i + 1)]) / 3;
    a *= 0.65 + 0.35 * Math.sin(x * 9 + r() * 0.2);
    a *= Math.min(1, x / 0.1) * Math.min(1, (1 - x) / 0.06);
    if (x > 0.42 && x < 0.72) a *= 1.4; // a dense main ring
    if (x < 0.18) a *= 0.45; // a faint inner ring
    for (const g of gaps) if (Math.abs(x - g.at) < g.w) a *= 0.06;
    a = Math.max(0, Math.min(1, a));
    const tone = 0.8 + 0.2 * walk[(i * 7) % N];
    const dusty = x < 0.3 ? 0.6 : 0.2;
    data.set([(170 + dusty * 20) * tone, (163 + dusty * 5) * tone, (150 - dusty * 25) * tone, a * 255], i * 4);
  }
  const tex = new THREE.DataTexture(data, N, 1, THREE.RGBAFormat);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  const geo = new THREE.RingGeometry(b.size * inner, b.size * outer, 160, 1);
  const mesh = new THREE.Mesh(geo, new THREE.ShaderMaterial({
    uniforms: { tRing: { value: tex }, uIn: { value: inner }, uOut: { value: outer }, uR: { value: b.size }, uCenter: { value: new THREE.Vector3() }, uStarPos: starLights.pos, uStarCol: starLights.col },
    vertexShader: /* glsl */ `${LD_VERT_PARS}
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        vLocal = position;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        vN = normalize(mat3(modelMatrix) * vec3(0.0, 0.0, 1.0));
        gl_Position = projectionMatrix * viewMatrix * wp;
        ${LD_VERT}
      }`,
    fragmentShader: /* glsl */ `${LD_FRAG_PARS}
      uniform sampler2D tRing; uniform float uIn, uOut, uR; uniform vec3 uCenter;
      uniform vec3 uStarPos[2], uStarCol[2];
      varying vec3 vWorld; varying vec3 vN; varying vec3 vLocal;
      void main() {
        ${LD_FRAG}
        float rr = length(vLocal.xy) / uR;
        vec4 tx = texture2D(tRing, vec2((rr - uIn) / (uOut - uIn), 0.5));
        if (tx.a < 0.01) discard;
        vec3 V = normalize(cameraPosition - vWorld);
        vec3 col = vec3(0.0);
        for (int i = 0; i < 2; i++) {
          vec3 sc = uStarCol[i];
          if (sc.r + sc.g + sc.b <= 0.0) continue;
          vec3 L = normalize(uStarPos[i] - vWorld);
          // Planet's shadow across the rings.
          vec3 oc = uCenter - vWorld;
          float t = dot(oc, L);
          float m = length(oc - L * t);
          float sh = t > 0.0 ? smoothstep(uR * 0.97, uR * 1.03, m) : 1.0;
          float sameSide = sign(dot(vN, L)) * sign(dot(vN, V));
          // Lit face: diffuse. Seen against the light: forward scattering through thin ring.
          float lit = sameSide > 0.0 ? (0.35 + 0.65 * abs(dot(vN, L))) : (1.0 - tx.a) * 1.6 * pow(max(0.0, dot(-V, L)), 3.0) + 0.12;
          col += pow(tx.rgb, vec3(2.2)) * sc * lit * sh;
        }
        gl_FragColor = vec4(col, tx.a * 0.92);
      }`,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  }));
  mesh.userData.ring = { tex, inner, outer };
  return mesh;
}
