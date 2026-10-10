import { test } from "node:test";
import assert from "node:assert/strict";
import { navigationRecord } from "../navigation.mjs";
test("cold navigation preserves initial errors even after a challenge redirects to a successful homepage", () => {
  assert.equal(
    navigationRecord(
      "https://aaryamody.app/#projects",
      "https://aaryamody.app/",
      403,
    ).problems.length,
    2,
  );
  assert.equal(
    navigationRecord(
      "https://aaryamody.app/?view=world#about",
      "https://aaryamody.app/?view=world#about",
      200,
    ).problems.length,
    0,
  );
  assert.equal(
    navigationRecord(
      "http://www.aaryamody.app/#about",
      "https://aaryamody.app/#about",
      200,
    ).problems.length,
    0,
  );
  assert.equal(
    navigationRecord(
      "https://aaryamody.app/?view=world",
      "https://aaryamody.app/",
      200,
    ).problems.length,
    1,
  );
});

test("same-document fragment changes have no HTTP response while a cold response remains required", () => {
  assert.equal(
    navigationRecord(
      "https://aaryamody.app/#about",
      "https://aaryamody.app/#about",
      null,
      { sameDocument: true },
    ).problems.length,
    0,
  );
  assert.equal(
    navigationRecord(
      "https://aaryamody.app/#about",
      "https://aaryamody.app/#about",
      null,
    ).problems.length,
    1,
  );
  assert.equal(
    navigationRecord(
      "https://aaryamody.app/#about",
      "https://aaryamody.app/",
      403,
      { sameDocument: true },
    ).problems.length,
    2,
  );
});
