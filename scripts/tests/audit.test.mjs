import { test } from "node:test";
import assert from "node:assert/strict";
import { parseLink, decodeLinkPart } from "../check-links.mjs";
import { createServer } from "node:http";
import { auditMetadata } from "../audit-target.mjs";

test("malformed links and invalid encoded fragments are reportable without aborting the sweep", () => {
  assert.equal(parseLink("http://[broken"), null);
  assert.equal(
    parseLink("https://example.com/%", "https://example.com").pathname,
    "/%",
  );
  assert.equal(decodeLinkPart("%E0%A4%A"), null);
  assert.equal(decodeLinkPart("bad%xx@example.com"), null);
  assert.equal(decodeLinkPart("work%2Ddriftdoctor"), "work-driftdoctor");
  assert.equal(
    parseLink("#work-driftdoctor", "https://aaryamody.app/").hash,
    "#work-driftdoctor",
  );
});

test("audit preflight rejects another checkout and unreachable documents", async () => {
  let blocked = false;
  const server = createServer((request, response) => {
    response
      .writeHead(blocked ? 403 : 200)
      .end(request.url === "/" ? "Wrong checkout" : "{}");
  });
  await new Promise((done) => server.listen(0, "127.0.0.1", done));
  const url = `http://127.0.0.1:${server.address().port}/`;
  try {
    await assert.rejects(
      auditMetadata("test", url, { checkLocal: true }),
      /different release/,
    );
    const metadata = await auditMetadata("test", url);
    assert.equal(metadata.release.fingerprint.length, 64);
    blocked = true;
    await assert.rejects(auditMetadata("test", url), /returned 403/);
  } finally {
    await new Promise((done) => server.close(done));
  }
});
