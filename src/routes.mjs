export function canonicalLegacyURL(href, destinations) {
  const url = new URL(href);
  if (["read", "world"].includes(url.searchParams.get("view"))) url.searchParams.delete("view");
  if (url.pathname === "/" || url.pathname === "/index.html") {
    let hash;
    try { hash = decodeURIComponent(url.hash.slice(1)); } catch { return url; }
    if (Object.hasOwn(destinations, hash)) { const target = new URL(destinations[hash], url.origin); url.pathname = target.pathname; url.hash = target.hash; }
  }
  return url;
}
