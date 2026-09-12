/**
 * The sky dome: a two-colour gradient with a sun that actually sits where the
 * directional light is. Cheap enough for any phone, and it carries most of the
 * mood when the light preset changes.
 */
import { BackSide, Color, Mesh, ShaderMaterial, SphereGeometry, Vector3 } from 'three';

const vertexShader = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 topColor;
  uniform vec3 horizonColor;
  uniform vec3 glowColor;
  uniform vec3 sunDir;
  uniform float glowStrength;
  varying vec3 vDir;

  void main() {
    vec3 dir = normalize(vDir);
    float h = smoothstep(-0.09, 0.74, dir.y);
    vec3 col = mix(horizonColor, topColor, h);

    float cosA = dot(dir, normalize(sunDir));
    // Broad haze around the sun, then the disc itself.
    col += glowColor * pow(max(0.0, cosA), 7.0) * glowStrength * 0.35;
    col += glowColor * pow(max(0.0, cosA), 120.0) * glowStrength * 1.1;
    col += vec3(1.0, 0.97, 0.9) * smoothstep(0.9993, 0.9997, cosA) * 0.7;

    // A whisper of banding towards the horizon keeps it painterly.
    col += horizonColor * 0.05 * (1.0 - h) * (0.5 + 0.5 * sin(dir.y * 46.0));

    gl_FragColor = vec4(col, 1.0);

    // Match the tone mapping and colour space the rest of the scene goes
    // through, or the sky sits in a different world to the island under it.
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export function createSky(scene) {
  const material = new ShaderMaterial({
    side: BackSide,
    depthWrite: false,
    fog: false,
    vertexShader,
    fragmentShader,
    uniforms: {
      topColor: { value: new Color(0x77bfd8) },
      horizonColor: { value: new Color(0xffd6a0) },
      glowColor: { value: new Color(0xffa04a) },
      sunDir: { value: new Vector3(-0.55, 0.34, 0.72) },
      glowStrength: { value: 0.5 },
    },
  });
  const sky = new Mesh(new SphereGeometry(1600, 32, 20), material);
  sky.frustumCulled = false;
  sky.renderOrder = -1;
  scene.add(sky);
  return { mesh: sky, uniforms: material.uniforms };
}
