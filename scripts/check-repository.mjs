import { execFileSync } from "node:child_process";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { root, prepareAssets } from "./prepare-assets.mjs";

const git = (args, input) =>
  execFileSync("git", args, { cwd: root, encoding: "utf8", input });
const files = [
  ...new Set(
    git(["ls-files", "--cached", "--others", "--exclude-standard", "-z"])
      .split("\0")
      .filter(Boolean),
  ),
];
const problems = [];
const required = [
  "README.md",
  "CONTRIBUTING.md",
  "LICENSE",
  ".gitignore",
  ".gitattributes",
  ".nvmrc",
  "package.json",
  "package-lock.json",
  ".github/workflows/portfolio-ci.yml",
];
for (const path of required) {
  try {
    await stat(resolve(root, path));
  } catch {
    problems.push("Missing repository file: " + path);
  }
}

const localOnly =
  /(^|\/)(?:node_modules|\.venv|venv|\.agents|\.codex|\.idea|\.vscode|reports|test-results|playwright-report|output|archive)(?:\/|$)|(^|\/)\.env(?:\.|$)(?!example$)|\.(?:pem|key|p12|pfx)$/;
const credentials =
  /(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{50,}|AKIA[0-9A-Z]{16}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----)/;
let checked = 0;
for (const path of files) {
  // A pending working-tree deletion should not block a check before staging.
  let bytes;
  try {
    bytes = await readFile(resolve(root, path));
  } catch (error) {
    if (error.code === "ENOENT") continue;
    throw error;
  }
  checked += 1;
  if (localOnly.test(path))
    problems.push("Local-only or credential file is tracked: " + path);
  if (/\.(?:pdf|png|jpe?g|webp|woff2|ttf|glb|hdr)$/i.test(path)) continue;
  const content = bytes.toString("utf8");
  if (content.includes("\r"))
    problems.push(
      "Use LF line endings before preparing/staging assets: " + path,
    );
  if (credentials.test(content))
    problems.push("Possible credential in " + path + " (value withheld)");
  if (/\.(?:js|mjs|cjs)$/.test(path)) {
    try {
      execFileSync(process.execPath, ["--check", resolve(root, path)], {
        stdio: "pipe",
      });
    } catch {
      problems.push("JavaScript syntax check failed: " + path);
    }
  }
}

const ignoredExamples = [
  "node_modules/example.js",
  ".venv/example",
  ".agents/example",
  ".codex/example",
  "archive/example",
  "reports/example",
  "output/example.zip",
  "test-results/example",
  ".env",
  ".env.local",
];
const ignored = new Set(
  git(
    ["check-ignore", "--no-index", "--stdin"],
    ignoredExamples.join("\n") + "\n",
  )
    .trim()
    .split(/\r?\n/),
);
for (const path of ignoredExamples)
  if (!ignored.has(path)) problems.push("Missing ignore rule for " + path);

const pkg = JSON.parse(await readFile(resolve(root, "package.json"), "utf8"));
const lock = JSON.parse(
  await readFile(resolve(root, "package-lock.json"), "utf8"),
);
for (const [name, version] of Object.entries({
  ...pkg.devDependencies,
  ...pkg.dependencies,
})) {
  if (!/^\d+\.\d+\.\d+$/.test(version))
    problems.push("Pin the tested development dependency: " + name);
  if (
    (lock.packages[""].devDependencies[name] ||
      lock.packages[""].dependencies[name]) !== version ||
    lock.packages["node_modules/" + name].version !== version
  )
    problems.push("Lockfile mismatch for " + name);
}
try {
  await prepareAssets({ check: true });
} catch (error) {
  problems.push(error.message);
}
if (problems.length) {
  console.error("Repository check failed:\n- " + problems.join("\n- "));
  process.exitCode = 1;
} else
  console.log(
    `Repository check passed: ${checked} files, ignore rules, LF text, dependency pins, syntax, and generated assets. Credential pattern check found no matches.`,
  );
