import { resolve, sep } from "node:path";
import { readFile } from "node:fs/promises";
import { root, digest } from "./prepare-assets.mjs";

export const baseURL =
  process.env.PORTFOLIO_BASE_URL || "http://127.0.0.1:4173/";
export const live = !["localhost", "127.0.0.1", "[::1]"].includes(
  new URL(baseURL).hostname,
);
export const reportsRoot = resolve(
  root,
  process.env.PORTFOLIO_REPORTS_DIR ||
    `reports/${live ? "live" : "local"}/${new Date().toISOString().replace(/[:.]/g, "-")}`,
);
if (!reportsRoot.startsWith(resolve(root, "reports") + sep))
  throw new Error(
    "PORTFOLIO_REPORTS_DIR must be inside this checkout's reports directory.",
  );
export const referenceRoot = resolve(
  root,
  process.env.PORTFOLIO_REFERENCE_DIR || ".",
);

export async function auditMetadata(
  scope,
  url = baseURL,
  { checkLocal = false } = {},
) {
  const paths = ["", "assets/manifest.json"];
  const bytes = await Promise.all(
    paths.map(async (path) => {
      const response = await fetch(new URL(path, url), {
        signal: AbortSignal.timeout(30000),
      });
      if (!response.ok)
        throw new Error(
          `Audit preflight: ${path || "homepage"} returned ${response.status}`,
        );
      return Buffer.from(await response.arrayBuffer());
    }),
  );
  if (
    checkLocal &&
    ["localhost", "127.0.0.1", "[::1]"].includes(new URL(url).hostname)
  ) {
    for (const [i, path] of ["index.html", "assets/manifest.json"].entries()) {
      if (digest(bytes[i]) !== digest(await readFile(resolve(root, path))))
        throw new Error(`Audit preview serves a different release: ${path}`);
    }
  }
  return {
    date: new Date().toISOString(),
    url,
    scope,
    release: {
      htmlSHA256: digest(bytes[0]),
      manifestSHA256: digest(bytes[1]),
      fingerprint: digest(Buffer.concat(bytes)),
    },
  };
}

export async function captureState(page) {
  await page.waitForFunction(
    () =>
      ["ready", "fallback"].includes(document.body.dataset.worldState) ||
      (document.body.dataset.worldState === "idle" &&
        document.body.classList.contains("reading-mode")),
    undefined,
    { timeout: 20000 },
  );
  const state = await page.locator("body").getAttribute("data-world-state");
  if (state === "fallback") {
    const capable = await page.evaluate(() => {
      const gl = document.createElement("canvas").getContext("webgl2");
      gl?.getExtension("WEBGL_lose_context")?.loseContext();
      return !!gl;
    });
    if (capable)
      throw new Error(
        "Unexpected application fallback on a WebGL2-capable capture profile",
      );
  }
  return state;
}
