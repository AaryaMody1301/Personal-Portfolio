import { build, transform } from "esbuild";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { renderPages } from "../src/render.mjs";
import { featured, site } from "../src/content.mjs";
await import("./prepare-social.mjs");
await build({ entryPoints:["src/main.mjs"], outfile:"assets/js/app.js", bundle:true, minify:true, format:"iife", target:["es2022"], legalComments:"linked" });
const stylesheet = await transform(await readFile("src/styles.css", "utf8"), { loader:"css", minify:true });
await writeFile("assets/css/style.css", stylesheet.code);
for (const [path, html] of renderPages()) { await mkdir(dirname(path), { recursive:true }); await writeFile(path, html); }
await writeFile("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${["/", ...featured.map(p=>`/projects/${p.slug}/`)].map(url=>`  <url><loc>${site.origin}${url}</loc><lastmod>${site.date}</lastmod></url>`).join("\n")}\n</urlset>\n`);
console.log("Built five static portfolio pages and shared local assets.");
