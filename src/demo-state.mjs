export const number = (value, digits = 2) => new Intl.NumberFormat("en-US", { maximumFractionDigits: digits, minimumFractionDigits: digits }).format(value);
export const dollars = value => value === null ? "Unavailable" : `$${number(value / 1e9)}B`;
export const regions = [["na_sales", "North America"], ["jp_sales", "Japan"], ["pal_sales", "PAL regions"], ["other_sales", "Other regions"]];
export function stockComparison(data, periodIndex, metric) {
  const current = data.periods[periodIndex], previous = data.periods[periodIndex - 1];
  const value = current.values[metric] ?? null, baseline = previous?.values[metric] ?? null;
  return { current, previous, value, baseline, change: value === null || baseline === null || baseline === 0 ? null : (value - baseline) / Math.abs(baseline) * 100 };
}
export function forecastFold(data, index) {
  const fold = data.folds[index], train = data.observations.slice(0, fold.trainSize), test = data.observations.slice(fold.trainSize, fold.trainSize + fold.horizon);
  const baseline = train.at(-1).value, errors = test.map(row => row.value - baseline);
  return { train, test, baseline, mae: errors.reduce((sum, value) => sum + Math.abs(value), 0) / errors.length, rmse: Math.sqrt(errors.reduce((sum, value) => sum + value * value, 0) / errors.length) };
}
export function filterGames(rows, { platform = "all", genre = "all", year = "all", publisher = "all" } = {}) {
  return rows.filter(row => (platform === "all" || row.console === platform) && (genre === "all" || row.genre === genre) && (year === "all" || row.release_year === Number(year)) && (publisher === "all" || row.publisher === publisher)).sort((a, b) => b.total_sales - a.total_sales || a.title.localeCompare(b.title));
}
export function gameTotals(rows) {
  const fields = ["total_sales", ...regions.map(([key]) => key)];
  return Object.fromEntries(fields.map(key => [key, rows.reduce((sum, row) => sum + row[key], 0)]));
}
export function gamesCSV(rows) {
  const keys = ["title", "console", "genre", "publisher", "release_date", "critic_score", "total_sales", ...regions.map(([key]) => key)];
  const cell = value => `"${String(value ?? "").replaceAll('"', '""')}"`;
  return [keys, ...rows.map(row => keys.map(key => row[key]))].map(row => row.map(cell).join(",")).join("\r\n") + "\r\n";
}
