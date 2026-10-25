import type from "./brand-type.json" with { type: "json" };

// Original AM geometry. Font outlines come from the bundled OFL fonts.
export const monogramPaths = [
  "M2 58 16 6h7l14 52h-8l-2.7-11H12.7L10 58H2Zm13.3-19h9.2L20 21l-4.7 18Z",
  "M30 58V6h6l10 24L56 6h6v52h-8V28L46 46 38 28v30Z",
];
export const monogram = (color = "currentColor") => `<g fill="${color}" fill-rule="evenodd">${monogramPaths.map(d=>`<path d="${d}"/>`).join("")}</g>`;
export const monogramSVG = (color = "#244B3B") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">${monogram(color)}</svg>`;
export function outlinedText(key, x, y, width, color = "#202A24") {
  const item=type.outlines[key], [left,top,w]=item.viewBox, scale=width/w;
  return `<g transform="translate(${x} ${y}) scale(${scale}) translate(${-left} ${-top})" fill="${color}"><path d="${item.path}"/></g>`;
}
export function lockupSVG(color = "#244B3B") {
  const word=type.outlines.wordmark, height=word.viewBox[3]/word.viewBox[2]*245;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 64" width="340" height="64">${monogram(color)}${outlinedText("wordmark",86,(64-height)/2,245,color)}</svg>`;
}
export const wordmarkSVG = (color = "#244B3B") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${type.outlines.wordmark.viewBox.join(" ")}"><path fill="${color}" d="${type.outlines.wordmark.path}"/></svg>`;
export const faviconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" rx="17" fill="#244B3B"/><g transform="translate(8 8)">${monogram("#F7F5EF")}</g></svg>`;
