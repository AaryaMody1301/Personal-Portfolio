import { spawn } from "node:child_process";
import { once } from "node:events";
import { fileURLToPath } from "node:url";

// CI gets a dedicated preview and deterministic cleanup on Windows and Linux.
// If 4173 is already occupied, fail instead of auditing a different checkout.
const root = fileURLToPath(new URL("../", import.meta.url));
const server = spawn(process.execPath, ["scripts/static-server.cjs"], {
  cwd: root, windowsHide: true, stdio: ["ignore", "pipe", "pipe"]
});
try {
  await new Promise((resolve, reject) => {
    let diagnostics = "";
    const timer = setTimeout(() => reject(new Error("Preview did not start within 15 seconds.")), 15_000);
    const finish = (error) => {
      clearTimeout(timer);
      if (error) reject(error);
      else resolve();
    };
    server.once("error", finish);
    server.once("exit", (code) => finish(new Error(`Preview exited (${code}). ${diagnostics}`)));
    server.stderr.on("data", (data) => { diagnostics = (diagnostics + data).slice(-2000); });
    server.stdout.on("data", (data) => {
      if (data.toString().includes("Static server listening")) finish();
    });
  });
  await import("./audit.mjs");
} finally {
  if (server.exitCode === null && server.signalCode === null) {
    const stopped = once(server, "exit");
    server.kill("SIGTERM");
    await stopped;
  }
}
