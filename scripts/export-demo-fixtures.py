"""One-time export from pinned public source files; ordinary builds use the JSON.

Environment used: Python 3.14, numpy 2.5.4, pandas 3.1.0.
Pass the directory containing the five source files as the first argument.
The original dashboard functions run with JIT decorators disabled and an unused
cache stub; generation, cleaning and derived-feature functions are unchanged.
"""
import ast
import csv
import hashlib
import io
import json
import logging
from pathlib import Path
import re
import sys

import numpy as np
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "reports/sources/interactive-20261024"
OUT = ROOT / "src/fixtures"
SOURCES = {
    "drift": ("DriftDoctor", "0760ce3772678fdb7309b467f41f0371c1c10feb", "evidence/phase9/agent-fallback-demo.json", "249a5f02bf6418e740b2917f4035efa0e90968a2"),
    "stock": ("StockPulse", "16f7dedd66af4d74d1f2fd3f68de255deaae1d5e", "scripts/seed-demo.ts", "cf2b2a85d8f629ff1ee1e01bce1413c9efdcf9bd"),
    "forecast": ("Sales-Forcasting-Using-Time-Series-Analysis", "8e8f89947dee09edb3d5d0ef3345ab23320ee714", "data/benchmarks/car_prices_weekly_median.csv", "eb5e95184c4d43b0b4500be4e6fd5e8040d96019"),
    "metrics": ("Sales-Forcasting-Using-Time-Series-Analysis", "8e8f89947dee09edb3d5d0ef3345ab23320ee714", "docs/RELEASE_BENCHMARK.md", "78a046dc7e92cdd5cda69b7ffbf6e149858d7574"),
    "games": ("Video-Game-Sales-Dashboard", "6a843ac9b37283bf197b93fe12f8c1041abfb39a", "src/data/data_loader.py", "16089c15591bac3e35ff0c3dc6114734f95ac848"),
}
texts, provenance = {}, {}
for key, (repo, revision, path, blob) in SOURCES.items():
    raw = (SOURCE / Path(path).name).read_bytes()
    actual_blob = hashlib.sha1(f"blob {len(raw)}\0".encode() + raw).hexdigest()
    if actual_blob != blob:
        raise ValueError(f"Source bytes do not match pinned Git blob: {key}")
    texts[key] = raw.decode("utf-8")
    provenance[key] = {"url": f"https://github.com/AaryaMody1301/{repo}/blob/{revision}/{path}", "revision": revision, "gitBlob": blob, "sha256": hashlib.sha256(raw).hexdigest()}

def save(name, value):
    raw = (json.dumps(value, indent=2, ensure_ascii=False, allow_nan=False) + "\n").encode("utf-8")
    (OUT / f"{name}.json").write_bytes(raw)
    return hashlib.sha256(raw).hexdigest()

hashes = {}
drift = json.loads(texts["drift"])
hashes["drift"] = save("drift", {"source": provenance["drift"], "context": drift["business_context"], "before": "select order_id, amount from {{ ref('stg_orders') }}", "after": "select order_id, amount from {{ ref('stg_orders_v2') }}", "candidates": ["stg_orders_v2", "stg_orders_archive"], "recordedBuildBefore": drift["hybrid"]["trajectory"][0]["build"]["returncode"], "recordedBuildAfter": drift["hybrid"]["final_build"]["returncode"], "recordedModelCalls": drift["hybrid"]["model_calls"], "recordedChecks": drift["oracle"]["checks"]})

period_text = re.search(r"const periods = (\[.*?\]) as const;", texts["stock"], re.S).group(1)
periods = ast.literal_eval(re.sub(r"\b(\w+):", r'"\1":', period_text))
metrics = [{"key": key, "label": label, "concept": concept} for key, label, concept in [("revenue", "Revenue", "DemoRevenue"), ("net_income", "Net income", "DemoNetIncome"), ("operating_cash_flow", "Operating cash flow", "DemoOperatingCashFlow"), ("capex", "Capital expenditure", "DemoCapitalExpenditure")]]
for period in periods:
    period["label"] = f'{period["fiscalPeriod"]} {period["fiscalYear"]}'
    period["evidence"] = {}
    for metric in metrics:
        metric_key = hashlib.sha256(f'DEMO|{period["accessionNumber"]}|{metric["key"]}'.encode()).hexdigest()
        period["evidence"][metric["key"]] = {"metricKey": metric_key, "factKey": hashlib.sha256(f"fact|{metric_key}".encode()).hexdigest()}
hashes["stock"] = save("stock", {"source": provenance["stock"], "symbol": "DEMO", "company": "StockPulse Demo Corp.", "synthetic": True, "metrics": metrics, "periods": periods})

observations = [{"date": row["saledate"][:10], "sourceTimestamp": row["saledate"], "value": float(row["sellingprice"])} for row in csv.DictReader(io.StringIO(texts["forecast"]))]
models = []
for line in texts["metrics"].splitlines():
    if not re.match(r"\| [123] \|", line):
        continue
    cells = [cell.strip().replace("**", "") for cell in line.strip("|").split("|")]
    models.append({"name": cells[1], "mae": float(cells[2]), "rmse": float(cells[3])})
assert len(observations) == 32 and len(models) == 3
hashes["forecast"] = save("forecast", {"sources": [provenance["forecast"], provenance["metrics"]], "target": "Weekly median vehicle price (USD)", "models": models, "observations": observations, "folds": [{"trainSize": 24, "horizon": 4}, {"trainSize": 28, "horizon": 4}]})

tree = ast.parse(texts["games"])
nodes = [ast.ImportFrom(module="__future__", names=[ast.alias(name="annotations")], level=0)]
for node in tree.body:
    if isinstance(node, ast.FunctionDef):
        node.decorator_list = []
        nodes.append(node)
    elif isinstance(node, ast.Assign) and all(isinstance(target, ast.Name) and target.id.isupper() for target in node.targets):
        nodes.append(node)
module = ast.fix_missing_locations(ast.Module(body=nodes, type_ignores=[]))
scope = {"np": np, "pd": pd, "logger": logging.getLogger("fixture-export"), "prange": range, "DataFrameCache": lambda **kwargs: None}
exec(compile(module, "pinned-data-loader", "exec"), scope)
frame, _ = scope["create_sample_data"]()
rows = []
for _, row in frame.iterrows():
    item = {name: str(row[name]) for name in ["title", "console", "genre", "publisher", "developer"]}
    item["release_date"] = row["release_date"].strftime("%Y-%m-%d")
    item["release_year"] = int(row["release_year"])
    for name in ["total_sales", "na_sales", "jp_sales", "pal_sales", "other_sales", "critic_score"]:
        item[name] = None if pd.isna(row[name]) else float(row[name])
    rows.append(item)
assert len(rows) == 30
hashes["games"] = save("games", {"source": provenance["games"], "seed": 42, "units": "millions of reported lifetime sales", "generation": "Original sample/clean/derived functions; JIT disabled; unused cache stubbed", "environment": {"numpy": np.__version__, "pandas": pd.__version__}, "rows": rows})
save("checksums", hashes)
print(f"Exported four pinned fixtures: {len(rows)} games, {len(observations)} weeks, {len(periods)} synthetic quarters.")
