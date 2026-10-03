import { chromium } from "@playwright/test";
import { execFileSync } from "node:child_process";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { root } from "./prepare-assets.mjs";
import { baseURL, reportsRoot, auditMetadata } from "./audit-target.mjs";

export function parseLink(value, base) {
  try {
    return new URL(value, base);
  } catch {
    return null;
  }
}
export function decodeLinkPart(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return null;
  }
}

export async function checkLinks() {
  const metadata = await auditMetadata("links", baseURL, { checkLocal: true });

  const entries = new Map();
  const portfolioOrigin = "https://aaryamody.app";
  function add(value, source, base = baseURL, file = false) {
    if (!value || value.startsWith("data:")) return;
    let url = parseLink(value, base) || { href: value, protocol: "invalid:" };
    if (url.origin === portfolioOrigin)
      url = new URL(url.pathname + url.search + url.hash, baseURL);
    const key = (file ? "file:" : "") + url.href;
    if (!entries.has(key))
      entries.set(key, { url: url.href, file, sources: [] });
    entries.get(key).sources.push(source);
  }
  const browser = await chromium.launch({
    channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome",
  });
  try {
    const page = await browser.newPage({ javaScriptEnabled: false });
    const response = await fetch(baseURL, {
      signal: AbortSignal.timeout(30000),
    });
    if (!response.ok) throw new Error(`Homepage returned ${response.status}`);
    const html = await response.text();
    await page.setContent(html);
    const parsed = await page.evaluate(() => ({
      ids: [...document.querySelectorAll("[id]")].map((n) => n.id),
      urls: [...document.querySelectorAll("[href],[src],[srcset]")]
        .flatMap((n) => [
          n.getAttribute("href"),
          n.getAttribute("src"),
          ...(n.getAttribute("srcset") || "")
            .split(",")
            .map((v) => v.trim().split(/\s+/)[0]),
        ])
        .filter(Boolean),
      metadata: [
        ...document.querySelectorAll(
          'meta[property="og:image"],meta[property="og:url"],meta[name="twitter:image"]',
        ),
      ].map((n) => n.content),
      world: Object.values(
        JSON.parse(document.getElementById("world-assets").textContent),
      ),
    }));
    for (const value of [...parsed.urls, ...parsed.metadata, ...parsed.world])
      add(value, "index.html");
    const manifestURL = new URL("assets/manifest.json", baseURL);
    const manifestResponse = await fetch(manifestURL);
    const manifest = await manifestResponse.json();
    add(manifestURL.href, "manifest");
    for (const asset of manifest.assets) {
      add(asset.path, "manifest");
      if (asset.path.endsWith(".css")) {
        const url = new URL(asset.path, baseURL);
        const css = await (await fetch(url)).text();
        for (const match of css.matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g))
          add(match[1], asset.path, url);
      }
    }
    for (const path of [
      "robots.txt",
      "sitemap.xml",
      "assets/js/app.js.LEGAL.txt",
      "assets/js/world.js.LEGAL.txt",
    ])
      add(path, "release");
    const files = execFileSync(
      "git",
      ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
      { cwd: root, encoding: "utf8" },
    ).split("\0");
    for (const path of new Set(files.filter((p) => p.endsWith(".md")))) {
      let markdown;
      try {
        markdown = await readFile(resolve(root, path), "utf8");
      } catch (error) {
        if (error.code === "ENOENT") continue;
        throw error;
      }
      for (const match of markdown.matchAll(
        /!?\[[^\]]*\]\((<?[^\s)]+>?)(?:\s+"[^"]*")?\)/g,
      )) {
        const value = match[1].replace(/^<|>$/g, "");
        if (/^[a-z]+:/i.test(value)) add(value, path);
        else add(value, path, pathToFileURL(resolve(root, path)).href, true);
      }
    }
    await page.close();
    const results = [];
    const pending = [...entries.values()];
    async function check(entry) {
      const url = parseLink(entry.url);
      const result = { ...entry, sources: [...new Set(entry.sources)] };
      if (!url) return { ...result, status: "broken", reason: "Malformed URL" };
      if (entry.file) {
        try {
          await readFile(fileURLToPath(url));
          return { ...result, status: "working", kind: "repository" };
        } catch {
          const optional = /\/(?:archive|reports|output)\//.test(url.pathname);
          return {
            ...result,
            status: optional ? "unverified" : "broken",
            kind: "repository",
            reason: optional
              ? "Generated local evidence is unavailable in this checkout"
              : "Missing local documentation target",
          };
        }
      }
      if (url.protocol === "mailto:" || url.protocol === "tel:") {
        const valid =
          url.protocol === "mailto:"
            ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                decodeLinkPart(url.pathname) || "",
              )
            : /^\+?[\d() .-]{7,20}$/.test(url.pathname);
        return {
          ...result,
          status: valid ? "working" : "broken",
          kind: "contact",
          reason: "Syntax checked; no message or call sent",
        };
      }
      if (!["http:", "https:"].includes(url.protocol))
        return {
          ...result,
          status: "unverified",
          reason: "Unsupported URL scheme",
        };
      const internal = url.origin === new URL(baseURL).origin;
      const kind = internal ? "portfolio" : "external";
      if (internal && url.pathname === new URL(baseURL).pathname && url.hash) {
        return {
          ...result,
          kind,
          status: parsed.ids.includes(decodeLinkPart(url.hash.slice(1)))
            ? "working"
            : "broken",
          reason: "Homepage fragment checked",
        };
      }
      try {
        const response = await fetch(url, {
          redirect: "follow",
          signal: AbortSignal.timeout(20000),
        });
        const type = response.headers.get("content-type") || "";
        const text = type.includes("text/html")
          ? (await response.text()).slice(0, 200000)
          : "";
        if (!text) await response.body?.cancel();
        const blocked =
          [401, 403, 407, 429, 999].includes(response.status) ||
          /(?:\/login|\/authwall|\/checkpoint|\/signin)/i.test(response.url) ||
          /<title>[^<]*(?:just a moment|access denied|security check|captcha)/i.test(
            text,
          );
        return {
          ...result,
          kind,
          status: blocked
            ? "blocked"
            : response.ok
              ? "working"
              : [404, 410].includes(response.status)
                ? "broken"
                : "unverified",
          httpStatus: response.status,
          finalURL: response.url,
          contentType: type,
        };
      } catch (error) {
        return { ...result, kind, status: "unverified", reason: error.message };
      }
    }
    await Promise.all(
      Array.from({ length: 5 }, async () => {
        while (pending.length) results.push(await check(pending.shift()));
      }),
    );
    // A browser retry distinguishes an actual 404 from fetch-only protection.
    for (const result of results.filter(
      (r) =>
        r.kind === "external" && ["broken", "unverified"].includes(r.status),
    )) {
      const page = await browser.newPage();
      try {
        const response = await page.goto(result.url, {
          waitUntil: "domcontentloaded",
          timeout: 20000,
        });
        result.browserStatus = response?.status();
        result.browserTitle = await page.title();
        if (
          [401, 403, 429].includes(response?.status()) ||
          /\/authwall|\/login|\/signin/.test(page.url())
        )
          result.status = "blocked";
        else if (response?.ok() && !/404|not found/i.test(result.browserTitle))
          result.status = "working";
      } catch (error) {
        result.browserReason = error.message;
      } finally {
        await page.close();
      }
    }
    results.sort((a, b) => a.url.localeCompare(b.url));
    const counts = Object.fromEntries(
      ["working", "broken", "blocked", "unverified"].map((status) => [
        status,
        results.filter((r) => r.status === status).length,
      ]),
    );
    const report = {
      ...metadata,
      counts,
      results,
    };
    await mkdir(reportsRoot, { recursive: true });
    await writeFile(
      resolve(reportsRoot, "links.json"),
      JSON.stringify(report, null, 2) + "\n",
    );
    console.log(
      JSON.stringify(
        { counts, attention: results.filter((r) => r.status !== "working") },
        null,
        2,
      ),
    );
    if (
      counts.broken ||
      results.some((r) => r.kind === "portfolio" && r.status !== "working")
    )
      process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  await checkLinks();
