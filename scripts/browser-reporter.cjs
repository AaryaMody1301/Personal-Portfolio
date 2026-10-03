const { mkdirSync, writeFileSync } = require("node:fs");
const { resolve } = require("node:path");

module.exports = class ReleaseReporter {
  onBegin(config, suite) {
    this.config = config;
    this.suite = suite;
    this.metadata = import("./audit-target.mjs")
      .then(({ auditMetadata, baseURL }) =>
        auditMetadata("browser", baseURL, { checkLocal: true }),
      )
      .catch((error) => ({ preflightError: error.message }));
  }
  async onEnd(result) {
    const metadata = await this.metadata;
    const tests = this.suite.allTests().map((test) => ({
      title: test.titlePath().join(" / "),
      outcome: test.outcome(),
      annotations: test.annotations,
      results: test.results.map((run) => ({
        status: run.status,
        errors: run.errors.map((error) => error.message),
      })),
    }));
    const directory = resolve(
      this.config.rootDir,
      "..",
      process.env.PORTFOLIO_REPORTS_DIR,
    );
    mkdirSync(directory, { recursive: true });
    writeFileSync(
      resolve(directory, "browser-release.json"),
      JSON.stringify(
        {
          ...metadata,
          status: result.status,
          duration: result.duration,
          selection: {
            command: process.argv.slice(2),
            grep: String(this.config.grep),
            projects: this.config.projects.map((project) => ({
              name: project.name,
              browser: project.use.browserName,
              grep: String(project.grep),
              viewport: project.use.viewport,
              emulated: !!project.use.isMobile,
            })),
          },
          tests,
        },
        null,
        2,
      ) + "\n",
    );
    if (metadata.preflightError) return { status: "failed" };
  }
};
