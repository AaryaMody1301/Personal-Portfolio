import { cpSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");
const pages = JSON.parse(readFileSync(path.join(root, "site-pages.json"), "utf8"));
const manifest = JSON.parse(readFileSync(path.join(root, "assets/manifest.json"), "utf8"));
const files = [...pages, "site-pages.json", "robots.txt", "sitemap.xml",
  "assets/manifest.json", "assets/docs/AaryaMody_Resume.pdf",
  "assets/js/app.js.LEGAL.txt", "assets/js/world.js.LEGAL.txt",
  ...manifest.assets.map(asset => asset.path)];
if (new Set(files).size !== files.length) throw new Error("Duplicate runtime path");
rmSync(output, { recursive: true, force: true });
for (const file of files) {
  const source = path.resolve(root, file);
  if (!source.startsWith(root) || file.includes("..")) throw new Error("Unsafe runtime path");
  const target = path.join(output, file);
  mkdirSync(path.dirname(target), { recursive: true });
  cpSync(source, target);
}
console.log(`Prepared ${files.length} portfolio runtime files for Sites.`);
