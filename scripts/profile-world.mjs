import { navigate } from "./navigation.mjs";
import { chromium, devices } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import { resolve } from "node:path";
import { baseURL, reportsRoot, auditMetadata } from "./audit-target.mjs";
const metadata = await auditMetadata("active-rendering", baseURL, {
  checkLocal: true,
});
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHROMIUM_CHANNEL || "chrome",
});
const results = [];
try {
  for (const [name, options] of [
    [
      "desktop-1440",
      { viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 },
    ],
    ["pixel-5-emulation", devices["Pixel 5"]],
  ]) {
    const page = await browser.newPage(options);
    await navigate(page, new URL("?view=world", baseURL).href);
    await page
      .locator("body[data-world-state=ready]")
      .waitFor({ timeout: 20000 });
    await page.locator("#world-stage[data-lighting]").waitFor();
    await page.waitForTimeout(1500);
    const pending = page.evaluate(async () => {
      const canvas = document.querySelector("canvas"),
        gl = canvas.getContext("webgl2"),
        debug = gl.getExtension("WEBGL_debug_renderer_info");
      const frames = [];
      let last = 0,
        drawCalls = 0;
      const hooks = [
        "drawElements",
        "drawArrays",
        "drawElementsInstanced",
        "drawArraysInstanced",
      ].map((name) => {
        const original = gl[name];
        gl[name] = function (...args) {
          const now = performance.now();
          drawCalls++;
          if (now - last > 8) {
            if (last) frames.push(now - last);
            last = now;
          }
          return original.apply(this, args);
        };
        return [name, original];
      });
      const longTasks = [];
      const observer = new PerformanceObserver((list) =>
        longTasks.push(...list.getEntries().map((e) => Math.round(e.duration))),
      );
      observer.observe({ type: "longtask", buffered: false });
      const start = performance.now();
      await new Promise((r) => setTimeout(r, 12000));
      const duration = performance.now() - start;
      observer.disconnect();
      for (const [name, original] of hooks) gl[name] = original;
      frames.sort((a, b) => a - b);
      return {
        durationMs: Math.round(duration),
        renderedFrames: frames.length,
        fps: +(frames.length / (duration / 1000)).toFixed(1),
        medianFrameMs: +frames[Math.floor(frames.length * 0.5)].toFixed(1),
        p95FrameMs: +frames[Math.floor(frames.length * 0.95)].toFixed(1),
        drawCalls,
        longTasks,
        quality: document.querySelector("#world-stage").dataset.quality,
        drawingBuffer: [canvas.width, canvas.height],
        viewport: [innerWidth, innerHeight],
        gpu: debug
          ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL)
          : gl.getParameter(gl.RENDERER),
      };
    });
    await page.locator(".island-labels [data-island=driftdoctor]").click();
    await page.getByRole("button", { name: "Assemble & validate" }).click();
    await page.locator("#close-panel").click();
    const point = await page.locator("canvas").evaluate((canvas) => {
      const r = canvas.getBoundingClientRect();
      for (const fx of [0.1, 0.3, 0.5, 0.7, 0.9])
        for (const fy of [0.2, 0.4, 0.6, 0.8]) {
          const x = r.x + r.width * fx,
            y = r.y + r.height * fy;
          if (
            [-24, 0, 24].every((dx) =>
              [-24, 0, 24].every(
                (dy) => document.elementFromPoint(x + dx, y + dy) === canvas,
              ),
            )
          )
            return { x, y };
        }
      throw new Error("No unobstructed canvas area for orbit gesture");
    });
    await page.mouse.move(point.x, point.y);
    await page.mouse.down();
    await page.mouse.move(point.x + 20, point.y - 20, { steps: 8 });
    await page.mouse.up();
    await page.locator("#reset-view").click();
    await page.locator(".island-labels [data-island=compatforge]").click();
    await page.getByRole("button", { name: "Unknown", exact: true }).click();
    await page.locator("#close-panel").click();
    await page.locator(".island-labels [data-island=originkeep]").click();
    await page
      .getByRole("button", { name: "Archive sample", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Restore sample", exact: true })
      .click();
    await page.locator("#close-panel").click();
    const profile = await pending;
    await page.locator("#reading-toggle").click();
    const paused = await page
      .locator("#world-stage")
      .getAttribute("data-rendering");
    results.push({
      name,
      browser: browser.version(),
      ...profile,
      readingView: paused,
    });
    await page.close();
  }
} finally {
  await browser.close();
}
await mkdir(reportsRoot, { recursive: true });
const report = {
  ...metadata,
  host: {
    platform: os.platform(),
    release: os.release(),
    cpu: os.cpus()[0]?.model,
    logicalProcessors: os.cpus().length,
    memoryGB: Math.round(os.totalmem() / 1024 ** 3),
  },
  method:
    "12-second draw-call timestamps during island travel, repair, orbit/reset, evidence switching, archive/restore and panel dismissal, after initial assets and lighting load. Headless Chrome on Windows; phone profile is emulated, not physical hardware. Frame estimates group draw-call timestamps separated by more than 8 ms.",
  results,
};
await writeFile(
  resolve(reportsRoot, "world-performance.json"),
  JSON.stringify(report, null, 2) + "\n",
);
console.log(JSON.stringify(report, null, 2));
