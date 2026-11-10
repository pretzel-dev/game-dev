import * as THREE from 'three';

/**
 * Sun shadows, only when the camera is close to a world with buildings on
 * it: the buildings (and whatever else is on SHADOW_LAYER) are drawn from
 * the sun's direction into a depth map framed tightly round the patch of
 * ground under the camera, and the hull, rock and world shaders darken
 * what's behind them. Zoomed out it's off and costs nothing (nothing that
 * small could show a shadow anyway).
 *
 * The depth is packed into an ordinary RGBA texture (no depth-texture
 * extension needed on phones). Its uniforms are shared objects, so every
 * material that includes SHADOW_GLSL sees the same map.
 */
export const SHADOW_LAYER = 3;
export const shadowU = {
  tShadow: { value: null },
  uShadowMat: { value: new THREE.Matrix4() },
  uShadowOn: { value: 0 },
  uShadowRange: { value: 1 },
  uShadowTexel: { value: 1 / 1024 },
};
/** Depth in 0..1 packed into 24 bits of RGB (its own, so it doesn't depend on Three's chunk order). */
const PACK = /* glsl */ `
vec4 shPack(float v) { vec3 e = fract(v * vec3(1.0, 255.0, 65025.0)); e -= e.yzz * vec3(1.0 / 255.0, 1.0 / 255.0, 0.0); return vec4(e, 1.0); }
float shUnpack(vec4 c) { return dot(c.rgb, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0)); }`;
/** Adds sunShadow(worldPos, bias): 1 in light, 0 in a building's shadow. */
export const SHADOW_GLSL = /* glsl */ `${PACK}
uniform sampler2D tShadow; uniform mat4 uShadowMat; uniform float uShadowOn, uShadowRange, uShadowTexel;
float sunShadow(vec3 wp, float bias) {
  if (uShadowOn < 0.5) return 1.0;
  vec4 sc = uShadowMat * vec4(wp, 1.0);
  vec3 p = sc.xyz / sc.w * 0.5 + 0.5;
  if (p.x <= 0.0 || p.x >= 1.0 || p.y <= 0.0 || p.y >= 1.0 || p.z >= 1.0) return 1.0;
  float d = p.z * uShadowRange - bias;
  float lit = 0.0;
  for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++)
    lit += step(d, shUnpack(texture2D(tShadow, p.xy + vec2(float(i), float(j)) * uShadowTexel)) * uShadowRange);
  // Fade out at the edge of the framed patch, so its border never shows.
  vec2 e = min(p.xy, 1.0 - p.xy);
  return mix(1.0, lit / 9.0, smoothstep(0.0, 0.08, min(e.x, e.y)));
}`;
export function addShadowUniforms(uniforms) {
  for (const k in shadowU) uniforms[k] = shadowU[k];
}

export function createShadows(renderer, scene) {
  let size = 0, rt = null;
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 10);
  cam.layers.set(SHADOW_LAYER);
  const mat = new THREE.ShaderMaterial({
    vertexShader: /* glsl */ `
      attribute float kind;
      varying float vZ; varying float vKind;
      void main() {
        vec4 p = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          p = instanceMatrix * p;
        #endif
        gl_Position = projectionMatrix * modelViewMatrix * p;
        vZ = gl_Position.z / gl_Position.w * 0.5 + 0.5;
        vKind = kind;
      }`,
    fragmentShader: /* glsl */ `
      ${PACK}
      varying float vZ; varying float vKind;
      void main() {
        if (abs(vKind - 10.0) < 0.5) discard; // worked ground: it is the ground, it doesn't cast
        gl_FragColor = shPack(clamp(vZ, 0.0, 0.9999));
      }`,
    side: THREE.DoubleSide,
  });
  const clear = new THREE.Color(), white = new THREE.Color(1, 1, 1);
  const c = new THREE.Vector3(), toSun = new THREE.Vector3(), up = new THREE.Vector3();
  return {
    /**
     * Frame the map on the ground under the camera of the followed world
     * (centre `p`, radius `R`), lit from `sun`; or switch shadows off (null).
     */
    update(p, R, sun, camera, res) {
      if (!p) { shadowU.uShadowOn.value = 0; return; }
      if (size !== res) {
        rt?.dispose();
        size = res;
        rt = new THREE.WebGLRenderTarget(res, res, { depthBuffer: true, generateMipmaps: false, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
        shadowU.tShadow.value = rt.texture;
        shadowU.uShadowTexel.value = 1 / res;
      }
      const above = camera.position.distanceTo(p) - R;
      c.copy(camera.position).sub(p).normalize().multiplyScalar(R).add(p);
      const hw = THREE.MathUtils.clamp(above * 1.4, 0.06, R * 1.2);
      toSun.copy(sun).sub(c).normalize();
      up.set(0, 1, 0);
      if (Math.abs(toSun.y) > 0.95) up.set(1, 0, 0);
      const back = R + 1;
      cam.position.copy(c).addScaledVector(toSun, back);
      cam.up.copy(up);
      cam.lookAt(c);
      cam.left = -hw; cam.right = hw; cam.top = hw; cam.bottom = -hw;
      cam.near = 0.01; cam.far = back + hw * 2;
      cam.updateProjectionMatrix();
      cam.updateMatrixWorld();
      shadowU.uShadowMat.value.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse);
      shadowU.uShadowRange.value = cam.far - cam.near;
      shadowU.uShadowOn.value = 1;
      // Draw the casters' depth.
      const bg = scene.background, ov = scene.overrideMaterial, prev = renderer.getRenderTarget(), alpha = renderer.getClearAlpha();
      renderer.getClearColor(clear);
      scene.background = null;
      scene.overrideMaterial = mat;
      renderer.setRenderTarget(rt);
      renderer.setClearColor(white, 1);
      renderer.clear();
      renderer.render(scene, cam);
      renderer.setRenderTarget(prev);
      renderer.setClearColor(clear, alpha);
      scene.background = bg;
      scene.overrideMaterial = ov;
    },
  };
}
