import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import sharp from "sharp";
import drift from "../../src/fixtures/drift.json" with { type: "json" };
import stock from "../../src/fixtures/stock.json" with { type: "json" };
import forecast from "../../src/fixtures/forecast.json" with { type: "json" };
import games from "../../src/fixtures/games.json" with { type: "json" };
import checksums from "../../src/fixtures/checksums.json" with { type: "json" };
import { stockComparison, forecastFold, filterGames, gameTotals, gamesCSV } from "../../src/demo-state.mjs";

test("frozen demo artifacts retain their checksums and pinned source provenance",async()=>{
  for(const [name,data] of Object.entries({drift,stock,forecast,games})) {
    const bytes=await readFile(new URL(`../../src/fixtures/${name}.json`,import.meta.url));
    assert.equal(createHash("sha256").update(bytes).digest("hex"),checksums[name]);
    for(const source of data.sources||[data.source]) {assert.match(source.revision,/^[a-f0-9]{40}$/);assert.ok(source.url.includes(`/blob/${source.revision}/`));assert.match(source.sha256,/^[a-f0-9]{64}$/);}
  }
  assert.equal(drift.recordedBuildBefore,2);assert.equal(drift.recordedBuildAfter,0);assert.equal(drift.recordedModelCalls,1);assert.equal(Object.keys(drift.recordedChecks).length,7);assert.ok(Object.values(drift.recordedChecks).every(Boolean));
});
test("synthetic financial comparisons preserve source values, unavailable data and stable evidence identities",()=>{
  assert.equal(stockComparison(stock,2,"revenue").change,12.890625);
  assert.equal(stockComparison(stock,2,"net_income").change,20);
  assert.equal(stockComparison(stock,0,"revenue").change,null);
  const missing=structuredClone(stock);missing.periods[1].values.revenue=null;assert.equal(stockComparison(missing,2,"revenue").change,null);
  missing.periods[1].values.revenue=0;assert.equal(stockComparison(missing,2,"revenue").change,null);
  const period=stock.periods[2],key=createHash("sha256").update("DEMO|DEMO-2026-Q2|revenue").digest("hex");
  assert.equal(period.evidence.revenue.metricKey,key);assert.equal(period.evidence.revenue.factKey,createHash("sha256").update(`fact|${key}`).digest("hex"));
});
test("chronological fold calculations reproduce the published baseline aggregates without leakage",()=>{
  assert.equal(forecast.observations.length,32);
  const folds=forecast.folds.map((_,index)=>forecastFold(forecast,index));
  assert.deepEqual(folds.map(x=>x.baseline),[12800,13800]);assert.deepEqual(folds.map(x=>x.mae),[425,2675]);
  assert.ok(folds.every(f=>f.train.at(-1).date<f.test[0].date&&f.test.length===4));
  assert.equal(folds.reduce((sum,f)=>sum+f.mae,0)/2,1550);
  assert.equal(Number((folds.reduce((sum,f)=>sum+f.rmse,0)/2).toFixed(2)),1891.95);
  assert.match([...forecast.models].sort((a,b)=>a.rmse-b.rmse)[0].name,/ARIMA/);assert.equal([...forecast.models].sort((a,b)=>a.mae-b.mae)[0].name,"ETS");
});
test("sample filters, totals and CSV export describe the same cohort and retain missing values",()=>{
  assert.equal(games.rows.length,30);assert.equal(filterGames(games.rows,{platform:"NS"}).length,8);
  assert.equal(filterGames(games.rows,{platform:"unavailable"}).length,0);
  assert.equal(gameTotals([]).total_sales,0);assert.ok(games.rows.some(row=>row.critic_score===null));
  assert.ok(Math.abs(gameTotals(games.rows).total_sales-210.56477868556976)<1e-9);
  for(const row of games.rows)assert.ok(Math.abs(row.total_sales-row.na_sales-row.jp_sales-row.pal_sales-row.other_sales)<1e-5);
  const filtered=filterGames(games.rows,{platform:"NS",genre:"Action"}),csv=gamesCSV(filtered);
  assert.equal(csv.trimEnd().split("\r\n").length,filtered.length+1);
  for(const row of filtered)assert.ok(csv.includes(`"${row.title}"`));
  const escaped=gamesCSV([{...games.rows[0],title:'A, "quoted" title',critic_score:null}]);assert.ok(escaped.includes('"A, ""quoted"" title"'));assert.ok(escaped.includes(',"",'));
});
test("favicon exports decode at their promised sizes, including each embedded ICO image",async()=>{
  for(const size of [16,32,48]) {const meta=await sharp(await readFile(`assets/brand/favicon-${size}.png`)).metadata();assert.equal(meta.width,size);assert.equal(meta.height,size);}
  const apple=await sharp(await readFile("assets/brand/apple-touch-icon.png")).metadata();assert.equal(apple.width,180);assert.equal(apple.height,180);
  const ico=await readFile("assets/brand/favicon.ico");assert.equal(ico.readUInt16LE(2),1);assert.equal(ico.readUInt16LE(4),3);
  for(let i=0;i<3;i++){const entry=6+i*16,length=ico.readUInt32LE(entry+8),offset=ico.readUInt32LE(entry+12),image=await sharp(ico.subarray(offset,offset+length)).metadata();assert.equal(image.width,[16,32,48][i]);assert.equal(image.height,[16,32,48][i]);}
});
