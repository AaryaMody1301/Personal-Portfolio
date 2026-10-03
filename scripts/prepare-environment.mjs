import { chromium } from "@playwright/test";
import { build } from "esbuild";
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { DataUtils, REVISION } from "three";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { root } from "./prepare-assets.mjs";

// Optional asset-authoring step. Normal builds use the checked-in filtered HDR.
// All browser requests are fulfilled in memory; no server or network is used.
const source = await readFile(
  new URL("../assets/environment/venice-sunset.hdr", import.meta.url),
);
const bundle = await build({
  stdin: {
    resolveDir: root,
    contents: `import * as THREE from 'three';
      import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
      window.bake = async () => {
        const renderer = new THREE.WebGLRenderer();
        const generator = new THREE.PMREMGenerator(renderer);
        let texture, target;
        try {
          texture = await new HDRLoader().loadAsync('./source.hdr');
          target = generator.fromEquirectangular(texture);
          const pixels = new Uint16Array(target.width * target.height * 4);
          renderer.readRenderTargetPixels(target, 0, 0, target.width, target.height, pixels);
          if (!pixels.some(value => value > 0)) throw Error('Could not read filtered HDR pixels');
          const bytes = new Uint8Array(pixels.buffer);
          let binary = '';
          for (let offset = 0; offset < bytes.length; offset += 8192)
            binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
          return { width: target.width, height: target.height, pixels: btoa(binary) };
        } finally {
          target?.dispose(); texture?.dispose(); generator.dispose(); renderer.dispose();
        }
      };`,
  },
  bundle: true,
  format: "iife",
  write: false,
});
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome",
});
let image;
try {
  const page = await browser.newPage();
  await page.route("http://127.0.0.1:4173/__bake__/**", async (route) => {
    const path = new URL(route.request().url()).pathname;
    if (path.endsWith("/source.hdr"))
      await route.fulfill({
        contentType: "application/octet-stream",
        body: source,
      });
    else if (path.endsWith("/bake.js"))
      await route.fulfill({
        contentType: "text/javascript",
        body: Buffer.from(bundle.outputFiles[0].contents),
      });
    else
      await route.fulfill({
        contentType: "text/html",
        body: '<!doctype html><script src="./bake.js"></script>',
      });
  });
  await page.goto("http://127.0.0.1:4173/__bake__/");
  image = await page.evaluate(() => window.bake());
} finally {
  await browser.close();
}

const bytes = Buffer.from(image.pixels, "base64");
const pixels = new Uint16Array(
  bytes.buffer,
  bytes.byteOffset,
  bytes.length / 2,
);
const chunks = [
  Buffer.from(
    `#?RADIANCE\n# Venice Sunset, Greg Zaal / Poly Haven, CC0. Three.js r${REVISION} PMREM.\nFORMAT=32-bit_rle_rgbe\n\n-Y ${image.height} +X ${image.width}\n`,
  ),
];
for (let y = image.height - 1; y >= 0; y--) {
  const channels = Array.from({ length: 4 }, () => new Uint8Array(image.width));
  for (let x = 0; x < image.width; x++) {
    const offset = (y * image.width + x) * 4;
    const rgb = [0, 1, 2].map((c) =>
      Math.max(0, DataUtils.fromHalfFloat(pixels[offset + c])),
    );
    const max = Math.max(...rgb);
    if (!Number.isFinite(max)) throw new Error("Invalid HDR readback");
    if (max < 1e-32) continue;
    const exponent = Math.floor(Math.log2(max)) + 1;
    const scale = 256 / 2 ** exponent;
    for (let c = 0; c < 3; c++)
      channels[c][x] = Math.min(255, Math.floor(rgb[c] * scale));
    channels[3][x] = exponent + 128;
  }
  chunks.push(Buffer.from([2, 2, image.width >> 8, image.width & 255]));
  for (const channel of channels) {
    let offset = 0;
    const encoded = [];
    while (offset < channel.length) {
      let run = 1;
      while (
        run < 127 &&
        offset + run < channel.length &&
        channel[offset + run] === channel[offset]
      )
        run++;
      if (run >= 4) {
        encoded.push(128 + run, channel[offset]);
        offset += run;
      } else {
        const start = offset;
        offset += run;
        while (offset < channel.length && offset - start < 128) {
          run = 1;
          while (
            run < 4 &&
            offset + run < channel.length &&
            channel[offset + run] === channel[offset]
          )
            run++;
          if (run >= 4) break;
          offset += Math.min(run, 128 - (offset - start));
        }
        encoded.push(offset - start, ...channel.subarray(start, offset));
      }
    }
    chunks.push(Buffer.from(encoded));
  }
}
const filtered = Buffer.concat(chunks);
const decoded = new HDRLoader().parse(
  filtered.buffer.slice(
    filtered.byteOffset,
    filtered.byteOffset + filtered.byteLength,
  ),
);
if (decoded.width !== image.width || decoded.height !== image.height)
  throw new Error("Filtered HDR dimensions changed during encoding");
await writeFile(
  new URL("../assets/environment/venice-sunset-pmrem.hdr", import.meta.url),
  filtered,
);
const hash = (data) => createHash("sha256").update(data).digest("hex");
console.log(
  JSON.stringify({
    width: image.width,
    height: image.height,
    sourceBytes: source.length,
    filteredBytes: filtered.length,
    sourceSHA256: hash(source),
    filteredSHA256: hash(filtered),
    threeRevision: REVISION,
  }),
);
