import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { batchStaticMeshes } from "../../src/batch-static.mjs";

test("static batching preserves vertices in a transformed island", async () => {
  const root = new THREE.Group();
  root.position.set(8, -3, 2);
  root.rotation.y = 0.6;
  const material = new THREE.MeshLambertMaterial();
  const nested = new THREE.Group();
  nested.position.set(2, 1, -4);
  nested.rotation.z = 0.4;
  root.add(nested);
  for (let i = 0; i < 2; i++) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(), material);
    mesh.position.set(i * 2, i, 0);
    mesh.scale.set(1, 2, 0.5);
    nested.add(mesh);
  }
  root.updateWorldMatrix(true, true);
  const inverse = root.matrixWorld.clone().invert();
  const expected = nested.children.flatMap((mesh) => {
    const geometry = mesh.geometry.toNonIndexed();
    geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, mesh.matrixWorld));
    return Array.from(geometry.attributes.position.array);
  });
  assert.equal(await batchStaticMeshes(root), 1);
  const merged = root.children.find((node) => node.isMesh);
  assert.ok(merged.geometry.index, "shared vertices remain indexed");
  const actual = Array.from(merged.geometry.toNonIndexed().attributes.position.array);
  assert.equal(actual.length, expected.length);
  actual.forEach((value, index) => assert.ok(Math.abs(value - expected[index]) < 1e-6));
  assert.equal(nested.children.length, 0);
  assert.equal(merged.material, material);
});

test("animated ancestors and transparent meshes retain independent transforms", async () => {
  const root = new THREE.Group();
  const animated = new THREE.Group();
  const material = new THREE.MeshLambertMaterial();
  const transparent = new THREE.MeshBasicMaterial({ transparent: true });
  root.add(animated);
  for (let i = 0; i < 2; i++) {
    animated.add(new THREE.Mesh(new THREE.BoxGeometry(), material));
    root.add(new THREE.Mesh(new THREE.BoxGeometry(), transparent));
  }
  assert.equal(await batchStaticMeshes(root, { exclude: new Set([animated]) }), 0);
  assert.equal(animated.children.length, 2);
  assert.equal(root.children.length, 3);
});

test("removed procedural buffers are released and setup yields between batches", async () => {
  const root = new THREE.Group();
  const material = new THREE.MeshLambertMaterial();
  let disposed = 0, yielded = 0;
  for (let i = 0; i < 3; i++) {
    const geometry = new THREE.BoxGeometry();
    geometry.addEventListener("dispose", () => disposed++);
    root.add(new THREE.Mesh(geometry, material));
  }
  assert.equal(await batchStaticMeshes(root, {
    disposeOriginals: true,
    yieldTask: async () => yielded++,
  }), 2);
  assert.equal(disposed, 3);
  assert.equal(yielded, 1);
  assert.equal(root.children.length, 1);
});
