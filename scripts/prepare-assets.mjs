import { createHash } from "node:crypto";
import { readFile, writeFile, readdir, unlink } from "node:fs/promises";
import { dirname, basename, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
export const root = fileURLToPath(new URL("../", import.meta.url));
export const digest = (bytes) =>
  createHash("sha256").update(bytes).digest("hex");
const leaves = [
  "assets/fonts/syne.ttf",
  "assets/models/birch.glb",
  "assets/models/bush.glb",
  "assets/environment/venice-sunset-pmrem.hdr",
  "assets/images/portrait.webp",
  "assets/images/portrait-small.webp",
  "assets/images/og-image.jpg",
  "assets/images/favicon.svg",
  "assets/images/world-poster.webp",
  "assets/images/world-poster-mobile.webp",
  "assets/licenses/THIRD-PARTY-NOTICES.txt",
];
const parents = [
  "assets/css/style.css",
  "assets/js/app.js",
  "assets/js/world.js",
];
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const pattern = (source) => {
  const ext = extname(source);
  return new RegExp(
    `${escape(source.slice(0, -ext.length))}(?:\\.[a-f0-9]{12})?${escape(ext)}`,
    "g",
  );
};
const named = (source, hash) =>
  `${source.slice(0, -extname(source).length)}.${hash.slice(0, 12)}${extname(source)}`;
export async function prepareAssets({ check = false } = {}) {
  let html = await readFile(resolve(root, "index.html"), "utf8");
  const manifest = [];
  for (const source of [...leaves, ...parents]) {
    let bytes = await readFile(resolve(root, source));
    if (source.endsWith(".css")) {
      let css = bytes.toString("utf8");
      for (const item of manifest) {
        const relative = "../" + item.source.slice(7);
        css = css.replace(pattern(relative), "../" + item.path.slice(7));
      }
      bytes = Buffer.from(css);
    }
    const hash = digest(bytes),
      path = named(source, hash);
    if (check) {
      if (digest(await readFile(resolve(root, path))) !== hash)
        throw new Error(`Corrupt or stale asset: ${path}`);
    } else await writeFile(resolve(root, path), bytes);
    const refs = [...html.matchAll(pattern(source))].map((m) => m[0]);
    if (source !== "assets/fonts/syne.ttf" && !refs.length)
      throw new Error(`Missing HTML reference for ${source}`);
    if (check && refs.some((ref) => ref !== path))
      throw new Error(`Stale ${source}; run npm run assets:prepare.`);
    html = html.replace(pattern(source), path);
    manifest.push({ source, path, hash, bytes: bytes.length });
  }
  const json = JSON.stringify({ version: 1, assets: manifest }, null, 2) + "\n";
  if (check) {
    if (
      (await readFile(resolve(root, "assets/manifest.json"), "utf8")) !== json
    )
      throw new Error("Stale asset manifest.");
  } else {
    await writeFile(resolve(root, "index.html"), html);
    await writeFile(resolve(root, "assets/manifest.json"), json);
    // Only remove obsolete generated siblings. Absolute parent paths are inside root.
    for (const { source, path } of manifest) {
      const folder = resolve(root, dirname(source));
      if (!folder.startsWith(root)) throw new Error("Asset outside workspace");
      const ext = extname(source);
      const rx = new RegExp(
        `^${escape(basename(source, ext))}\\.[a-f0-9]{12}${escape(ext)}$`,
      );
      for (const file of await readdir(folder))
        if (rx.test(file) && file !== basename(path))
          await unlink(resolve(folder, file));
    }
  }
  return manifest;
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  console.log(
    "Verified " +
      (await prepareAssets({ check: process.argv.includes("--check") }))
        .length +
      " content-versioned assets and transitive resources.",
  );
