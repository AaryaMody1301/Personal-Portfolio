import { build, transform } from "esbuild";
import { readFile, writeFile } from "node:fs/promises";
await build({
  entryPoints: ["src/main.mjs"],
  outfile: "assets/js/app.js",
  bundle: true,
  minify: true,
  format: "iife",
  target: ["es2022"],
  legalComments: "linked",
});
await build({
  entryPoints: ["src/world.mjs"],
  outfile: "assets/js/world.js",
  bundle: true,
  minify: true,
  format: "esm",
  target: ["es2022"],
  legalComments: "linked",
});
const stylesheet = await transform(
  await readFile("assets/css/world.css", "utf8"),
  { loader: "css", minify: true, legalComments: "inline" },
);
await writeFile("assets/css/style.css", stylesheet.code);
console.log("Built local UI and world bundles.");
