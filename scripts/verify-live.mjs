import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { prepareAssets, root, digest } from "./prepare-assets.mjs";
import { readSitePages } from "./site-pages.mjs";
import {
  baseURL,
  reportsRoot,
  referenceRoot,
  auditMetadata,
} from "./audit-target.mjs";

const references = (html) =>
  [...new Set(html.match(/assets\/[\w./-]+/g))].sort();
const mimeTypes = {
  glb: new RegExp("model/gltf-binary|application/octet-stream"),
  hdr: "application/octet-stream",
  ttf: new RegExp("font/ttf|application/(?:octet-stream|x-font-ttf)"),
  json: "application/json",
  css: "text/css",
  js: /(?:java|ecma)script/,
  pdf: "application/pdf",
  webp: "image/webp",
  jpg: "image/jpeg",
  svg: "image/svg+xml",
  xml: /(?:text|application)\/xml/,
  txt: "text/plain",
  html: "text/html",
};

export async function verifyDeployment(
  siteUrl = baseURL,
  { referenceDir = root } = {},
) {
  if (resolve(referenceDir) === resolve(root))
    await prepareAssets({ check: true });
  const manifest = JSON.parse(
    await readFile(resolve(referenceDir, "assets/manifest.json"), "utf8"),
  ).assets;
  const get = (path) =>
    fetch(new URL(path, siteUrl), {
      redirect: "follow",
      signal: AbortSignal.timeout(30000),
    });
  const response = await get("");
  if (!response.ok) throw new Error("Site returned " + response.status);
  if (!response.headers.get("content-type")?.includes("text/html"))
    throw new Error("The page is not served as HTML.");
  const html = await response.text();
  const localHtml = await readFile(resolve(referenceDir, "index.html"), "utf8");
  const pages = await readSitePages(referenceDir);
  const documents = await Promise.all(pages.map((path) =>
    readFile(resolve(referenceDir, path), "utf8"),
  ));
  const paths = [
    ...new Set([
      ...documents.flatMap(references),
      ...pages.slice(1),
      "site-pages.json",
      ...manifest.map((item) => item.path),
      "assets/manifest.json",
      "assets/js/app.js.LEGAL.txt",
      "assets/js/world.js.LEGAL.txt",
    ]),
  ].sort();
  const problems = [];
  const resources = [];
  if (digest(Buffer.from(html)) !== digest(Buffer.from(localHtml)))
    problems.push("HTML bytes differ from the reference release.");
  const expectedDate = localHtml.match(/"dateModified":\s*"([^"]+)"/)[1];
  for (const signal of [
    localHtml.match(/<title>([\s\S]*?)<\/title>/i)[1],
    "Data Analyst I",
    "DriftDoctor",
    "CompatForge",
    "OriginKeep",
    expectedDate,
  ]) {
    if (!html.includes(signal))
      problems.push("Missing current page content: " + signal);
  }
  const canonicalPattern = /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i;
  const expectedCanonical = localHtml.match(canonicalPattern)?.[1];
  if (!expectedCanonical || html.match(canonicalPattern)?.[1] !== expectedCanonical)
    problems.push("Canonical URL does not match.");
  if (
    JSON.stringify(references(html)) !== JSON.stringify(references(localHtml))
  )
    problems.push(
      "HTML references stale or unexpected asset versions; upload the matching index.html.",
    );
  // Compare every rendered/downloadable local asset, not only the page title/PDF.
  // A 200 response containing an HTML error page is not a successful JS/CSS load.
  for (const path of [...paths, "robots.txt", "sitemap.xml"]) {
    const asset = await get(path);
    if (!asset.ok) {
      problems.push(path + ": HTTP " + asset.status);
      continue;
    }
    const contentType = asset.headers.get("content-type") || "";
    const mime = mimeTypes[path.split(".").pop()];
    if (
      mime &&
      !(mime instanceof RegExp
        ? mime.test(contentType)
        : contentType.includes(mime))
    ) {
      problems.push(path + ": wrong content type " + contentType);
    }
    const remote = Buffer.from(await asset.arrayBuffer());
    const local = await readFile(resolve(referenceDir, path));
    resources.push({
      path,
      status: asset.status,
      contentType,
      bytes: remote.length,
      hash: digest(remote),
      expectedHash: digest(local),
      cacheControl: asset.headers.get("cache-control"),
      server: asset.headers.get("server"),
    });
    if (digest(remote) !== digest(local))
      problems.push(
        path +
          ": served bytes differ from this release; investigate upload, caching, or host transformation.",
      );
  }
  const result = {
    ...(await auditMetadata("deployment", siteUrl)),
    assets: paths.length,
    pages: pages.length,
    url: siteUrl,
    referenceDir,
    expectedRelease: {
      htmlSHA256: digest(Buffer.from(localHtml)),
      manifestSHA256: digest(
        await readFile(resolve(referenceDir, "assets/manifest.json")),
      ),
    },
    problems,
    resources,
  };
  if (problems.length) {
    const error = new Error(
      "Deployment verification failed:\n- " + problems.join("\n- "),
    );
    error.report = result;
    throw error;
  }
  return result;
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const targetURL = process.argv[2] || baseURL;
  const deploymentReportsRoot =
    process.argv[2] && !process.env.PORTFOLIO_REPORTS_DIR
      ? resolve(
          root,
          "reports",
          ["localhost", "127.0.0.1", "[::1]"].includes(
            new URL(targetURL).hostname,
          )
            ? "local"
            : "live",
          basename(reportsRoot),
        )
      : reportsRoot;
  try {
    const result = await verifyDeployment(targetURL, {
      referenceDir: referenceRoot,
    });
    await mkdir(deploymentReportsRoot, { recursive: true });
    await writeFile(
      resolve(deploymentReportsRoot, "deployment.json"),
      JSON.stringify(result, null, 2) + "\n",
    );
    console.log(
      "Verified current HTML, " +
        result.assets +
        " asset hashes, resume, robots.txt, and sitemap.xml at " +
        result.url,
    );
  } catch (error) {
    if (error.report) {
      await mkdir(deploymentReportsRoot, { recursive: true });
      await writeFile(
        resolve(deploymentReportsRoot, "deployment.json"),
        JSON.stringify(error.report, null, 2) + "\n",
      );
    }
    console.error(error.message);
    process.exitCode = 1;
  }
}
