import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

// Bake static siblings into their island's coordinates. Animated ancestors and
// materials remain separate so travel, samples and material changes still work.
export async function batchStaticMeshes(root, {
  exclude = new Set(),
  include = () => true,
  yieldTask = async () => {},
  disposeOriginals = false,
} = {}) {
  root.updateWorldMatrix(true, true);
  const inverse = root.matrixWorld.clone().invert();
  const buckets = new Map();
  root.traverseVisible((node) => {
    if (!node.isMesh || node.children.length || Array.isArray(node.material) ||
        node.material.transparent || !include(node)) return;
    for (let ancestor = node; ancestor; ancestor = ancestor.parent) {
      if (exclude.has(ancestor)) return;
      if (ancestor === root) break;
    }
    const signature = Object.entries(node.geometry.attributes)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, attribute]) =>
        `${name}:${attribute.itemSize}:${attribute.normalized}:${attribute.array.constructor.name}`)
      .join("|");
    if (!buckets.has(node.material)) buckets.set(node.material, new Map());
    const variants = buckets.get(node.material);
    if (!variants.has(signature)) variants.set(signature, []);
    variants.get(signature).push(node);
  });
  let removed = 0;
  for (const [material, variants] of buckets) {
    for (const nodes of variants.values()) {
      if (nodes.length < 2) continue;
      const geometries = nodes.map((node) => {
        const geometry = node.geometry.index
          ? node.geometry.toNonIndexed()
          : node.geometry.clone();
        geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, node.matrixWorld));
        return geometry;
      });
      const merged = mergeGeometries(geometries, false);
      geometries.forEach((geometry) => geometry.dispose());
      if (merged) {
        merged.computeBoundingSphere();
        root.add(new THREE.Mesh(merged, material));
        for (const node of nodes) node.removeFromParent();
        if (disposeOriginals)
          for (const geometry of new Set(nodes.map((node) => node.geometry))) geometry.dispose();
        removed += nodes.length - 1;
      }
      await yieldTask();
    }
  }
  return removed;
}
