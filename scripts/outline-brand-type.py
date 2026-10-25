"""One-time licensed-font outline export; normal Node builds reuse the JSON.

Requires fonttools[woff] 4.67.0. Source fonts and OFL notices stay in assets/.
"""
import hashlib
import json
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.roundingPen import RoundingPen
from fontTools.pens.boundsPen import BoundsPen

ROOT = Path(__file__).resolve().parents[1]
fonts, sources = {}, {}
for name, filename, weight in [("serif", "newsreader-latin-variable.woff2", 450), ("sans", "inter-latin-variable.woff2", 500)]:
    path = ROOT / "assets/fonts" / filename
    font = TTFont(path)
    axes = {axis.axisTag: {"wght": weight, "opsz": 36}.get(axis.axisTag, axis.defaultValue) for axis in font["fvar"].axes}
    fonts[name] = instantiateVariableFont(font, axes, inplace=False)
    sources[name] = {"file": filename, "sha256": hashlib.sha256(path.read_bytes()).hexdigest(), "axes": axes}

def outline(text, style="serif", wordmark=False):
    font = fonts[style]
    glyphs, cmap = font.getGlyphSet(), font.getBestCmap()
    pen, bounds = SVGPathPen(glyphs), BoundsPen(glyphs)
    x = 0
    optical = {("A", "a"): -18, ("a", "r"): -8, ("M", "o"): -14, ("d", "y"): -8} if wordmark else {}
    for index, char in enumerate(text):
        if index:
            x += optical.get((text[index - 1], char), 0)
        name = cmap[ord(char)]
        transform = (1, 0, 0, -1, x, 0)
        glyphs[name].draw(TransformPen(RoundingPen(pen, roundFunc=lambda n: round(n, 2)), transform))
        glyphs[name].draw(TransformPen(bounds, transform))
        x += font["hmtx"][name][0]
    left, top, right, bottom = bounds.bounds
    box = [round(left - 8, 2), round(top - 8, 2), round(right - left + 16, 2), round(bottom - top + 16, 2)]
    return {"text": text, "path": pen.getCommands(), "viewBox": box}

items = {"wordmark": outline("Aarya Mody", wordmark=True)}
for key, text in {"driftdoctor": "DriftDoctor", "stockpulse": "StockPulse", "sales-forecasting": "Sales Forecasting", "games-line-1": "Video Game Sales", "games-line-2": "Dashboard", "tagline-1": "From complex data", "tagline-2": "to clear decisions."}.items():
    items[key] = outline(text)
for key, text in {"positioning": "DATA ANALYTICS & ENGINEERING", "selected": "AARYA MODY / SELECTED WORK", "domain": "aaryamody.app", "evidence": "EVIDENCE. APPROACH. LIMITATIONS."}.items():
    items[key] = outline(text, "sans")
result = {"sources": sources, "outlines": items}
(ROOT / "src/brand-type.json").write_bytes((json.dumps(result, ensure_ascii=False, separators=(",", ":")) + "\n").encode("utf-8"))
print(f"Outlined wordmark and {len(items) - 1} social-image labels from bundled fonts.")
