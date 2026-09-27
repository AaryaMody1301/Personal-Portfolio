import { createHash } from "node:crypto";
import { readFile, writeFile, readdir, unlink } from "node:fs/promises";
import { dirname, basename, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const root = fileURLToPath(new URL("../", import.meta.url));
export const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");
const sources = [
  "assets/css/style.css", "assets/js/main.js", "assets/js/analytics.js",
  "assets/images/portrait.webp", "assets/images/portrait-small.webp",
  "assets/images/og-image.jpg", "assets/images/favicon.svg"
];

// Keep editable source files; index.html references immutable, content-named copies.
// A fresh URL avoids the host's week-long cache of an older CSS or JS response.
export async function prepareAssets({ check = false } = {}) {
  let html = await readFile(resolve(root, "index.html"), "utf8");
  const manifest = [];
  for (const source of sources) {
    const bytes = await readFile(resolve(root, source));
    const extension = extname(source);
    const stem = basename(source, extension);
    const folder = dirname(source).replaceAll("\\", "/");
    const hash = digest(bytes);
    const filename = `${stem}.${hash.slice(0, 12)}${extension}`;
    const path = `${folder}/${filename}`;
    const escape = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`${escape(folder)}/${escape(stem)}(?:\\.[a-f0-9]{12})?${escape(extension)}`, "g");
    const references = [...html.matchAll(pattern)].map((match) => match[0]);
    if (!references.length) throw new Error(`Missing HTML reference for ${source}`);
    if (check) {
      if (references.some((reference) => reference !== path)) throw new Error(`Stale ${source}; run npm run assets:prepare.`);
      if (digest(await readFile(resolve(root, path))) !== hash) throw new Error(`Corrupt generated asset: ${path}`);
    } else {
      await writeFile(resolve(root, path), bytes);
      html = html.replace(pattern, path);
    }
    manifest.push({ source, path, hash });
  }
  if (!check) {
    await writeFile(resolve(root, "index.html"), html);
    // Only remove obsolete generated siblings with the exact content-hash naming
    // scheme, after publishing all replacements into the local HTML. No recursion.
    for (const { source, path } of manifest) {
      const folder = resolve(root, dirname(source));
      const extension = extname(source);
      const stem = basename(source, extension).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const generated = new RegExp(`^${stem}\\.[a-f0-9]{12}${extension.replace(".", "\\.")}$`);
      for (const file of await readdir(folder)) {
        if (generated.test(file) && file !== basename(path)) await unlink(resolve(folder, file));
      }
    }
  }
  return manifest;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const manifest = await prepareAssets({ check: process.argv.includes("--check") });
  console.log(`Verified ${manifest.length} content-versioned assets.`);
}
