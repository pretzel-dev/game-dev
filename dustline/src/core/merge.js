/**
 * Bake a group of static meshes into one mesh per material.
 *
 * A village is a few hundred little boxes, cones and cylinders; drawn one by
 * one that is a few hundred draw calls, which is what a phone cannot afford.
 * Once built they never move, so they are merged in world space, grouped by
 * material. Anything marked `userData.dynamic` (flags, laundry, the lamp that
 * pulses) is left alone, as is anything under a node marked that way.
 */
import { Mesh } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

function isDynamic(object, root) {
  for (let o = object; o && o !== root; o = o.parent) {
    if (o.userData?.dynamic) return true;
  }
  return false;
}

export function bakeStatic(root) {
  root.updateMatrixWorld(true);
  const buckets = new Map();
  const baked = [];
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material)) return;
    if (isDynamic(o, root)) return;
    let geometry = o.geometry.clone();
    geometry.applyMatrix4(o.matrixWorld);
    if (geometry.index) geometry = geometry.toNonIndexed();
    for (const name of Object.keys(geometry.attributes)) {
      if (name !== 'position' && name !== 'normal') geometry.deleteAttribute(name);
    }
    if (!geometry.attributes.normal) geometry.computeVertexNormals();
    const key = `${o.material.uuid}|${o.castShadow}|${o.receiveShadow}|${o.renderOrder}`;
    if (!buckets.has(key)) buckets.set(key, { material: o.material, parts: [], cast: o.castShadow, receive: o.receiveShadow, order: o.renderOrder });
    buckets.get(key).parts.push(geometry);
    baked.push(o);
  });

  for (const o of baked) o.removeFromParent();

  const merged = [];
  for (const bucket of buckets.values()) {
    const geometry = mergeGeometries(bucket.parts, false);
    for (const part of bucket.parts) part.dispose();
    if (!geometry) continue;
    geometry.computeBoundingSphere();
    const mesh = new Mesh(geometry, bucket.material);
    mesh.castShadow = bucket.cast;
    mesh.receiveShadow = bucket.receive;
    mesh.renderOrder = bucket.order;
    // World-space already: the mesh goes straight into the scene root.
    mesh.matrixAutoUpdate = false;
    let top = root;
    while (top.parent) top = top.parent;
    top.add(mesh);
    merged.push(mesh);
  }
  return merged;
}

/**
 * The same, but kept inside `root` in its own local space — for things that
 * move as a whole (an aeroplane), whose static parts can still be one mesh
 * per material while the propeller and control surfaces stay separate.
 */
export function bakeLocal(root) {
  root.updateMatrixWorld(true);
  const inverse = root.matrixWorld.clone().invert();
  const buckets = new Map();
  const baked = [];
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material)) return;
    if (isDynamic(o, root)) return;
    let geometry = o.geometry.clone();
    geometry.applyMatrix4(inverse.clone().multiply(o.matrixWorld));
    if (geometry.index) geometry = geometry.toNonIndexed();
    for (const name of Object.keys(geometry.attributes)) {
      if (name !== 'position' && name !== 'normal') geometry.deleteAttribute(name);
    }
    const key = `${o.material.uuid}|${o.castShadow}|${o.receiveShadow}|${o.renderOrder}`;
    if (!buckets.has(key)) buckets.set(key, { material: o.material, parts: [], cast: o.castShadow, receive: o.receiveShadow, order: o.renderOrder });
    buckets.get(key).parts.push(geometry);
    baked.push(o);
  });
  for (const o of baked) o.removeFromParent();
  for (const bucket of buckets.values()) {
    const geometry = mergeGeometries(bucket.parts, false);
    for (const part of bucket.parts) part.dispose();
    if (!geometry) continue;
    geometry.computeBoundingSphere();
    const mesh = new Mesh(geometry, bucket.material);
    mesh.castShadow = bucket.cast;
    mesh.receiveShadow = bucket.receive;
    mesh.renderOrder = bucket.order;
    root.add(mesh);
  }
  return root;
}
