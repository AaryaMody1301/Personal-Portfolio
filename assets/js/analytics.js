(() => {
  const token = document.documentElement.dataset.cfAnalyticsToken?.trim();
  if (!token) return;

  const beacon = document.createElement("script");
  beacon.type = "module";
  beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  beacon.dataset.cfBeacon = JSON.stringify({ token });
  document.head.append(beacon);
})();
