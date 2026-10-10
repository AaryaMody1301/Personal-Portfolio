import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export async function readSitePages(root) {
  const pages = JSON.parse(await readFile(resolve(root, "site-pages.json"), "utf8"));
  if (
    !Array.isArray(pages) || pages[0] !== "index.html" ||
    new Set(pages).size !== pages.length ||
    pages.some((path) => typeof path !== "string" ||
      !/^[a-z0-9][a-z0-9/-]*\.html$/.test(path) || path.includes(".."))
  ) throw new Error("Invalid site page registry.");
  return pages;
}
