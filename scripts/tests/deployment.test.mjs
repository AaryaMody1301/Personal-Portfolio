import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, mkdtemp, cp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve, extname } from "node:path";
import { root } from "../prepare-assets.mjs";
import { verifyDeployment } from "../verify-live.mjs";

test("deployment verification rejects mixed assets and HTML error pages served as scripts", async () => {
  let fault = "none",
    servedRoot = root;
  const rollback = await mkdtemp(resolve(tmpdir(), "portfolio-reference-"));
  const mime = {
    ".glb": "model/gltf-binary",
    ".hdr": "application/octet-stream",
    ".ttf": "font/ttf",
    ".json": "application/json",
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".jpg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".pdf": "application/pdf",
    ".txt": "text/plain",
    ".xml": "application/xml",
  };
  const server = createServer(async (request, response) => {
    const pathname = new URL(request.url, "http://localhost").pathname;
    const path = pathname === "/" ? "index.html" : pathname.slice(1);
    try {
      let bytes = await readFile(resolve(servedRoot, path));
      let type = mime[extname(path)];
      if (fault === "model" && path.includes("models/birch."))
        bytes = Buffer.from("corrupt GLB");
      if (fault === "font" && path.includes("fonts/syne."))
        bytes = Buffer.from("stale font");
      if (fault === "manifest" && path === "assets/manifest.json")
        bytes = Buffer.from("{}");
      if (/\/app\.[a-f0-9]{12}\.js$/.test(path)) {
        if (fault === "stale")
          bytes = Buffer.from("/* Cached previous script */");
        if (fault === "html") {
          bytes = Buffer.from("<!doctype html><h1>Host error</h1>");
          type = "text/html";
        }
      }
      if (path === "index.html" && fault === "references")
        bytes = Buffer.from(
          bytes.toString().replace(/app\.[a-f0-9]{12}\.js/, "app.js"),
        );
      response.writeHead(200, { "Content-Type": type }).end(bytes);
    } catch {
      response.writeHead(404).end();
    }
  });
  await new Promise((done) => server.listen(0, "127.0.0.1", done));
  const url = `http://127.0.0.1:${server.address().port}/`;
  try {
    assert.ok((await verifyDeployment(url)).assets >= 17);
    await cp(resolve(root, "assets"), resolve(rollback, "assets"), {
      recursive: true,
    });
    for (const path of ["robots.txt", "sitemap.xml"])
      await cp(resolve(root, path), resolve(rollback, path));
    await writeFile(
      resolve(rollback, "index.html"),
      (await readFile(resolve(root, "index.html"), "utf8")).replace(
        /<title>[\s\S]*?<\/title>/i,
        "<title>Aarya’s World | Earlier release</title>",
      ),
    );
    servedRoot = rollback;
    assert.equal(
      (await verifyDeployment(url, { referenceDir: rollback })).problems.length,
      0,
    );
    servedRoot = root;
    fault = "stale";
    await assert.rejects(verifyDeployment(url), /served bytes differ/);
    fault = "html";
    await assert.rejects(
      verifyDeployment(url),
      /wrong content type text\/html/,
    );
    for (const missingResource of ["model", "font", "manifest"]) {
      fault = missingResource;
      await assert.rejects(verifyDeployment(url), /served bytes differ/);
    }
    fault = "references";
    await assert.rejects(verifyDeployment(url), /HTML references stale/);
  } finally {
    await new Promise((done) => server.close(done));
    await rm(rollback, { recursive: true, force: true });
  }
});
