// A hosting challenge must not turn a failed cold navigation into a false pass.
export function navigationRecord(
  requestedURL,
  settledURL,
  status,
  { sameDocument = false } = {},
) {
  const requested = new URL(requestedURL),
    settled = new URL(settledURL);
  const problems = [];
  if (
    (status === null && !sameDocument) ||
    (status !== null && (status < 200 || status >= 400))
  )
    problems.push(`Initial HTTP status: ${status}`);
  if (
    requested.pathname !== settled.pathname ||
    requested.search !== settled.search ||
    requested.hash !== settled.hash
  )
    problems.push("Requested route was not preserved");
  return {
    requestedURL,
    settledURL,
    initialHTTPStatus: status,
    navigationType: sameDocument ? "same-document" : "document",
    problems,
  };
}
export async function navigate(page, url, options) {
  const requestedURL = new URL(
    url,
    page.url() === "about:blank" ? "http://127.0.0.1:4173/" : page.url(),
  ).href;
  const previousURL = page.url();
  const response = await page.goto(url, options);
  const record = navigationRecord(
    requestedURL,
    page.url(),
    response?.status() ?? null,
    {
      sameDocument:
        !response && previousURL.split("#")[0] === requestedURL.split("#")[0],
    },
  );
  if (record.problems.length)
    throw new Error(`Navigation failed: ${JSON.stringify(record)}`);
  return record;
}
