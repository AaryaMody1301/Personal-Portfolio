import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { prepareAssets, root, digest } from "./prepare-assets.mjs";

const references = (html) => [...new Set(html.match(/assets\/[\w./-]+/g))].sort();
const mimeTypes = { css: "text/css", js: /(?:java|ecma)script/, pdf: "application/pdf", webp: "image/webp", jpg: "image/jpeg", svg: "image/svg+xml", xml: /(?:text|application)\/xml/, txt: "text/plain" };

export async function verifyDeployment(siteUrl = "https://aaryamody.app/") {
  await prepareAssets({ check: true });
  const get = (path) => fetch(new URL(path, siteUrl), { redirect: "follow", signal: AbortSignal.timeout(30000) });
  const response = await get("");
  if (!response.ok) throw new Error("Site returned " + response.status);
  if (!response.headers.get("content-type")?.includes("text/html")) throw new Error("The page is not served as HTML.");
  const html = await response.text();
  const localHtml = await readFile(resolve(root, "index.html"), "utf8");
  const paths = references(localHtml);
  const problems = [];
  const expectedDate = localHtml.match(/"dateModified":\s*"([^"]+)"/)[1];
  for (const signal of ["Data Engineering &amp; Applied AI", "Data Analyst I", "DriftDoctor", "CompatForge", "OriginKeep", expectedDate]) {
    if (!html.includes(signal)) problems.push("Missing current page content: " + signal);
  }
  if (!/<link\s+rel=["']canonical["']\s+href=["']https:\/\/aaryamody\.app\/?["']/.test(html)) problems.push("Canonical URL does not match.");
  if (JSON.stringify(references(html)) !== JSON.stringify(paths)) problems.push("HTML references stale or unexpected asset versions; upload the matching index.html.");
  // Compare every rendered/downloadable local asset, not only the page title/PDF.
  // A 200 response containing an HTML error page is not a successful JS/CSS load.
  for (const path of [...paths, "robots.txt", "sitemap.xml"]) {
    const asset = await get(path);
    if (!asset.ok) { problems.push(path + ": HTTP " + asset.status); continue; }
    const contentType = asset.headers.get("content-type") || "";
    const mime = mimeTypes[path.split(".").pop()];
    if (mime && !(mime instanceof RegExp ? mime.test(contentType) : contentType.includes(mime))) {
      problems.push(path + ": wrong content type " + contentType);
    }
    const remote = Buffer.from(await asset.arrayBuffer());
    const local = await readFile(resolve(root, path));
    if (digest(remote) !== digest(local)) problems.push(path + ": served bytes differ from this release (incomplete upload or stale cache).");
  }
  if (problems.length) throw new Error("Deployment verification failed:\n- " + problems.join("\n- "));
  return { assets: paths.length, url: siteUrl };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const result = await verifyDeployment(process.argv[2]);
    console.log("Verified current HTML, " + result.assets + " asset hashes, resume, robots.txt, and sitemap.xml at " + result.url);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
