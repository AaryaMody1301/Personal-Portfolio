import { test } from "node:test";
import assert from "node:assert/strict";
import { worldAuditError } from "../lighthouse-result.mjs";

test("a high-scoring reading fallback cannot satisfy the World audit", () => {
  const fallback = { categories: { performance: { score: 1 } }, audits: {} };
  assert.equal(worldAuditError("world", fallback).code, "WORLD_NOT_RENDERED");
  assert.equal(worldAuditError("read", fallback), null);
});

test("World acceptance requires a measured frame, not shader preparation or a mark", () => {
  const report = (items) => ({ audits: { "user-timings": { details: { items } } } });
  assert.equal(worldAuditError("world", report([
    { name: "World shader preparation", timingType: "Measure", duration: 24 },
  ])).code, "WORLD_NOT_RENDERED");
  assert.equal(worldAuditError("world", report([
    { name: "World first full frame", timingType: "Mark" },
  ])).code, "WORLD_NOT_RENDERED");
  assert.equal(worldAuditError("world", report([
    { name: "World first full frame", timingType: "Measure", duration: 3.436 },
  ])), null);
});
