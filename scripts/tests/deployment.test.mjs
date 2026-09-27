import { test } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve, extname } from "node:path";
import { root } from "../prepare-assets.mjs";
import { verifyDeployment } from "../verify-live.mjs";

test("deployment verification rejects mixed assets and HTML error pages served as scripts", async () => {
  let fault = "none";
  const mime = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".pdf": "application/pdf", ".txt": "text/plain", ".xml": "application/xml" };
  const server = createServer(async (request, response) => {
    const pathname = new URL(request.url, "http://localhost").pathname;
    const path = pathname === "/" ? "index.html" : pathname.slice(1);
    try {
      let bytes = await readFile(resolve(root, path));
      let type = mime[extname(path)];
      if (/\/main\.[a-f0-9]{12}\.js$/.test(path)) {
        if (fault === "stale") bytes = Buffer.from("/* Cached previous script */");
        if (fault === "html") { bytes = Buffer.from("<!doctype html><h1>Host error</h1>"); type = "text/html"; }
      }
      if (path === "index.html" && fault === "references") bytes = Buffer.from(bytes.toString().replace(/main\.[a-f0-9]{12}\.js/, "main.js"));
      response.writeHead(200, { "Content-Type": type }).end(bytes);
    } catch { response.writeHead(404).end(); }
  });
  await new Promise((done) => server.listen(0, "127.0.0.1", done));
  const url = `http://127.0.0.1:${server.address().port}/`;
  try {
    assert.equal((await verifyDeployment(url)).assets, 8);
    fault = "stale";
    await assert.rejects(verifyDeployment(url), /served bytes differ/);
    fault = "html";
    await assert.rejects(verifyDeployment(url), /wrong content type text\/html/);
    fault = "references";
    await assert.rejects(verifyDeployment(url), /HTML references stale/);
  } finally { await new Promise((done) => server.close(done)); }
});
