const baseURL = process.env.PORTFOLIO_BASE_URL || "http://127.0.0.1:4173/";
const results = [];
for (const path of ["projects/sql-analytics.html", "projects/sql-practice/"]) {
  for (const query of ["", "?utm_source=resume", "?utm_source=resume&campaign=hiring", "?ref=resume%20link&value=a%26b%3Fc"]) {
    const requested = new URL(path + query, baseURL);
    const expected = new URL("/" + query + "#work-sql-practice-project", baseURL);
    try {
      const response = await fetch(requested, { redirect: "manual", signal: AbortSignal.timeout(15000) });
      const location = response.headers.get("location");
      const actual = location ? new URL(location, requested) : null;
      results.push({ requested: requested.href, status: response.status, location, expected: expected.href,
        passed: response.status === 301 && actual?.href === expected.href });
      await response.body?.cancel();
    } catch (error) {
      results.push({ requested: requested.href, error: error.message, passed: false });
    }
  }
}
console.log(JSON.stringify({ baseURL, results }, null, 2));
if (results.some(result => !result.passed)) process.exitCode = 1;
