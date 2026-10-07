// Scores alone cannot distinguish the reading fallback from a rendered World.
export function worldAuditError(view, report) {
  if (view !== "world") return null;
  const timings = report.audits?.["user-timings"]?.details?.items || [];
  if (timings.some((item) =>
    item.name === "World first full frame" && item.timingType === "Measure" &&
    Number.isFinite(item.duration))) return null;
  return {
    code: "WORLD_NOT_RENDERED",
    message: "The World audit did not record a first full frame; reading fallback scores cannot satisfy World acceptance.",
  };
}
