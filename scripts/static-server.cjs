const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { createGzip } = require("node:zlib");

const root = path.resolve(process.cwd());
const parentPid = process.ppid;
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".glb": "model/gltf-binary",
  ".hdr": "application/octet-stream",
  ".ttf": "font/ttf",
  ".json": "application/json",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

const server = http.createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url, "http://127.0.0.1").pathname,
    );
  } catch {
    response.writeHead(400).end();
    return;
  }
  const relativePath =
    pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const filePath = path.resolve(root, relativePath);

  if (filePath !== root && !filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403).end();
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      response.writeHead(404).end();
      return;
    }

    const compressed =
      /\bgzip\b/.test(request.headers["accept-encoding"] || "") &&
      /\.(?:html|css|js|json|svg|txt|xml|ttf)$/i.test(filePath);
    response.writeHead(200, {
      "Content-Type":
        contentTypes[path.extname(filePath).toLowerCase()] ||
        "application/octet-stream",
      "Cache-Control": "no-store",
      Vary: "Accept-Encoding",
      ...(compressed ? { "Content-Encoding": "gzip" } : {}),
    });
    const file = fs
      .createReadStream(filePath)
      .on("error", () => response.destroy());
    if (compressed)
      file
        .pipe(createGzip().on("error", () => response.destroy()))
        .pipe(response);
    else file.pipe(response);
  });
});

server.listen(4173, "127.0.0.1", () => {
  console.log("Static server listening at http://127.0.0.1:4173");
});

function shutdown() {
  server.closeAllConnections?.();
  server.closeIdleConnections?.();
  process.exit(0);
}

process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);
process.once("disconnect", shutdown);

// Playwright launches the server through a Windows shell that may not forward
// termination signals to the Node child. Exit when that parent shell disappears
// so local test runs never leave a listener behind.
const parentWatchdog = setInterval(() => {
  try {
    process.kill(parentPid, 0);
  } catch {
    clearInterval(parentWatchdog);
    shutdown();
  }
}, 1_000);
parentWatchdog.unref();
