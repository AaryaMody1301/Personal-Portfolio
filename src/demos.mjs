import { number, dollars, regions, stockComparison, forecastFold, filterGames, gameTotals, gamesCSV } from "./demo-state.mjs";

const esc = value => String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
const option = (value,label,selected) => `<option value="${esc(value)}"${String(value)===String(selected)?" selected":""}>${esc(label)}</option>`;
const select = (id,name,label,items,value) => `<div class="demo-field"><label for="${id}-${name}">${label}</label><select id="${id}-${name}" name="${name}">${items.map(([key,text])=>option(key,text,value)).join("")}</select></div>`;
const unique = (rows,key) => [...new Set(rows.map(row=>row[key]))].sort((a,b)=>typeof a==="number"?a-b:String(a).localeCompare(String(b)));
const initial = () => ({metric:"revenue",period:2,choice:"stg_orders_v2",step:0,score:"rmse",fold:0,week:24,platform:"all",genre:"all",year:"all",publisher:"all",compareA:"PS4",compareB:"PS5"});
const driftSteps = ["Incident","Choose","Repair","Validate","Review"];

function driftResult(data,state,expanded) {
  const correct=state.choice==="stg_orders_v2",level=expanded?3:4;
  const before=`<div class="sql-panel"><span>Broken dependency</span><pre><code>${esc(data.before)}</code></pre></div>`;
  const after=`<div class="sql-panel"><span>${correct?"Published repair":"Candidate to review"}</span><pre><code>${esc(correct?data.after:data.before.replace("stg_orders'","stg_orders_archive'"))}</code></pre></div>`;
  const decision=`<p class="decision ${correct?"decision-pass":"decision-review"}"><span aria-hidden="true">${correct?"✓":"↗"}</span> ${correct?"Current dependency matches the business context.":"Escalate: the archive is historical, outside the live-mart contract."}</p>`;
  const evidence=`<dl class="demo-stats"><div><dt>Recorded build</dt><dd>${data.recordedBuildBefore} → ${data.recordedBuildAfter}</dd></div><div><dt>Model calls</dt><dd>${data.recordedModelCalls}</dd></div><div><dt>Oracle checks</dt><dd>${Object.values(data.recordedChecks).filter(Boolean).length} / ${Object.keys(data.recordedChecks).length}</dd></div></dl><p class="demo-note">Published correct-path results. This browser demonstration does not rerun dbt or a model.</p>`;
  if(!expanded) return `<p class="demo-kicker">A missing reference. Two observed candidates.</p>${after}${decision}<p class="demo-note">The published trajectory selects <code>stg_orders_v2</code> and reports build ${data.recordedBuildBefore} → ${data.recordedBuildAfter}.</p>`;
  const panels=[
    `${before}<p>The mart must preserve <code>order_id</code> and <code>amount</code>. Its old staging reference no longer exists.</p>`,
    `<p>The business context identifies <code>stg_orders_v2</code> as current. <code>stg_orders_archive</code> is a historical snapshot.</p>${decision}`,
    `${after}${decision}`,
    correct?evidence:`${decision}<p>No validation is run here. Inspect the published current-dependency path in the source evidence.</p>`,
    `${decision}<p>${correct?"Hand the SQL diff, recorded checks and reasoning to a human reviewer. The original workflow does not deploy an unreviewed repair.":"Hand the unresolved dependency choice to a human reviewer instead of accepting a historical source."}</p>${correct?evidence:""}`,
  ];
  return `<div class="demo-step-title"><span class="demo-kicker">Step ${state.step+1} / 5</span><h${level}>${["Read the incident.","Respect the contract.","Inspect the proposed change.","Check the recorded evidence.","Keep the human in the loop."][state.step]}</h${level}></div><div class="drift-panel">${panels[state.step]}</div>`;
}
function stockResult(data,state,expanded) {
  const metric=data.metrics.find(m=>m.key===state.metric),result=stockComparison(data,state.period,state.metric);
  const peak=Math.max(...data.periods.map(p=>p.values[state.metric]??0),1);
  const delta=result.change===null?"Comparison unavailable":`${result.change>=0?"+":""}${number(result.change)}%`;
  const evidence=result.current.evidence[state.metric];
  return `<div class="stock-headline"><div><p class="demo-kicker">${esc(metric.label)} · ${esc(result.current.label)}</p><p class="demo-big-number">${dollars(result.value)}</p></div><div class="stock-change"><strong>${delta}</strong><span>${result.previous?`vs ${esc(result.previous.label)}`:"No earlier seeded period"}</span></div></div><div class="stock-chart" role="group" aria-label="Synthetic quarterly ${esc(metric.label.toLowerCase())} in USD"><div class="chart-grid" aria-hidden="true"></div>${data.periods.map((p,index)=>`<button class="stock-bar ${index===state.period?"is-selected":""}" type="button" disabled data-period="${index}" aria-label="Select ${esc(p.label)}: ${dollars(p.values[state.metric])}" aria-pressed="${index===state.period}"><span class="bar-value">${dollars(p.values[state.metric])}</span><span class="bar-track"><span class="bar-fill" data-axis="y" style="--amount:${p.values[state.metric]/peak*100}%"></span></span><span>${esc(p.label)}</span></button>`).join("")}</div>${expanded?`<div class="evidence-trace"><p class="demo-kicker">Follow the evidence</p><dl><div><dt>Reporting period</dt><dd>${result.current.startDate} → ${result.current.endDate}</dd></div><div><dt>Filed</dt><dd>${result.current.filedAt}</dd></div><div><dt>Concept</dt><dd><code>demo-gaap:${esc(metric.concept)}</code> · USD</dd></div><div><dt>Accession</dt><dd><code>${esc(result.current.accessionNumber)}</code></dd></div><div><dt>Metric key</dt><dd><code>${evidence.metricKey}</code></dd></div><div><dt>Fact key</dt><dd><code>${evidence.factKey}</code></dd></div></dl><p class="demo-note">Fictional filing-like evidence; the original demo uses example.com source links.</p></div>`:""}`;
}
function forecastResult(data,state,expanded) {
  const scores=data.models.map(model=>({...model,value:model[state.score]})),peak=Math.max(...scores.map(x=>x.value));
  const winner=[...scores].sort((a,b)=>a.value-b.value)[0];
  const bars=`<div class="forecast-ranking">${scores.map(model=>`<div class="ranking-row ${model===winner||model.name===winner.name?"is-winner":""}"><div><span>${esc(model.name)}</span><strong>${number(model.value)}</strong></div><span class="ranking-track"><span class="bar-fill" data-axis="x" style="--amount:${model.value/peak*100}%"></span></span></div>`).join("")}</div>`;
  let foldMarkup="";
  if(expanded) {
    const fold=forecastFold(data,state.fold),points=data.observations,min=4000,max=20000,x=index=>42+index/(points.length-1)*510,y=value=>190-(value-min)/(max-min)*160;
    const path=points.map((p,i)=>`${i?"L":"M"}${x(i).toFixed(2)},${y(p.value).toFixed(2)}`).join(" ");
    const split=data.folds[state.fold].trainSize,selected=points[state.week];
    foldMarkup=`<div class="fold-panel"><p class="demo-kicker">Fold ${state.fold+1} · ${fold.train.length} train / 4 holdout weeks</p><p class="mobile-chart-labels"><span>Observed price (USD)</span><span>$4k–$20k</span></p><svg class="fold-chart" viewBox="0 0 600 240" role="img" aria-label="32 observed weekly median vehicle prices; highlighted four-week holdout and last-value baseline"><rect x="${x(split)-6}" y="18" width="${x(split+3)-x(split)+12}" height="180" fill="#E8EEE6"/><path d="M42 110H552M42 190H552" stroke="#DADFD7" stroke-dasharray="3 5"/><text x="3" y="114">$12k</text><text x="3" y="194">$4k</text><path d="${path}" fill="none" stroke="#244B3B" stroke-width="2.5"/><path d="M${x(split)},${y(fold.baseline)}H${x(split+3)}" stroke="#7B5E36" stroke-width="2.5" stroke-dasharray="7 4"/><circle cx="${x(state.week)}" cy="${y(selected.value)}" r="5" fill="#244B3B" stroke="#F7F5EF" stroke-width="2"/><text x="42" y="226">Dec 2014</text><text x="466" y="226">Jul 2015</text></svg><p class="mobile-chart-labels chart-dates"><span>Dec 2014</span><span>Jul 2015</span></p><div class="chart-legend"><span><i></i>Observed median price</span><span><i class="legend-baseline"></i>Last-value baseline</span></div><p class="week-reading"><span>${selected.date}</span><strong>$${number(selected.value)}</strong></p><p class="demo-note">Last-value prediction: $${number(fold.baseline)}. This fold's baseline MAE: ${number(fold.mae)}; RMSE: ${number(fold.rmse)}.</p></div>`;
  }
  return `<p class="demo-kicker">Published mean-fold ${state.score.toUpperCase()} · lower is better</p>${bars}<p class="model-winner"><span class="status-dot" aria-hidden="true"></span>${esc(winner.name)} has the lowest reviewed ${state.score.toUpperCase()}.</p><p class="demo-note">Weekly median vehicle prices (USD). 32 observed weeks, two holdout folds. Model bars show published aggregates.</p>${foldMarkup}`;
}
function gamesResult(data,state,expanded) {
  const rows=filterGames(data.rows,state),totals=gameTotals(rows),peak=Math.max(...regions.map(([key])=>totals[key]),1);
  const bars=regions.map(([key,label])=>`<div class="region-row"><div><span>${label}</span><strong>${number(totals[key])}M</strong></div><span class="ranking-track"><span class="bar-fill" data-axis="x" style="--amount:${totals[key]/peak*100}%"></span></span></div>`).join("");
  let comparison="";
  if(expanded) comparison=`<div class="platform-comparison">${[state.compareA,state.compareB].map(platform=>{const group=rows.filter(row=>row.console===platform);return `<div><span>${esc(platform)}</span><strong>${number(gameTotals(group).total_sales)}M</strong><small>${group.length} sample games</small></div>`;}).join("")}</div><p class="demo-note">Platform comparison within the active filtered cohort.</p><div class="demo-table-scroll" tabindex="0" role="region" aria-label="Filtered sample games table"><table><caption>Filtered synthetic sample · reported lifetime sales in millions</caption><thead><tr><th scope="col">Game / platform</th><th scope="col">Genre</th><th scope="col">Released</th><th scope="col">Score</th><th scope="col">Sales (M)</th></tr></thead><tbody>${rows.map(row=>`<tr><th scope="row">${esc(row.title)} <span>${esc(row.console)}</span></th><td>${esc(row.genre)}</td><td>${row.release_date}</td><td>${row.critic_score===null?"Unavailable":number(row.critic_score,1)}</td><td>${number(row.total_sales)}</td></tr>`).join("")}</tbody></table></div>`;
  return `<dl class="demo-stats games-stats"><div><dt>Sample games</dt><dd data-game-count>${rows.length}<span> / 30</span></dd></div><div><dt>Lifetime sales</dt><dd>${number(totals.total_sales)}<span>M</span></dd></div></dl>${rows.length?`<div class="regional-chart" role="group" aria-label="Reported lifetime sales by region">${bars}</div>`:`<div class="demo-empty"><strong>No games match these filters.</strong><p>Change a filter or reset to explore all 30 sample games.</p></div>`}${comparison}<p class="demo-note">Synthetic seed-42 sample. Sales are lifetime totals, grouped by release date.</p>`;
}
const resultFor={driftdoctor:driftResult,stockpulse:stockResult,"sales-forecasting":forecastResult,"video-game-sales-dashboard":gamesResult};

export function renderDemo(slug,data,expanded=false) {
  const id=`${slug}-${expanded?"full":"preview"}`,state=initial();
  let controls="",extra="",sourceValues="";
  if(slug==="driftdoctor") {
    controls=`<div class="choice-group" role="group" aria-label="Choose a staging dependency">${data.candidates.map(choice=>`<button type="button" data-choice="${choice}" aria-pressed="${choice===state.choice}"><span aria-hidden="true">${choice===state.choice?"●":"○"}</span><code>${choice}</code></button>`).join("")}</div>`;
    if(expanded) controls=`<div class="demo-steps" role="group" aria-label="Repair workflow stages">${driftSteps.map((label,index)=>`<button type="button" data-step="${index}" aria-pressed="${index===0}"><span>${index+1}</span>${label}</button>`).join("")}</div>`+controls;
    if(expanded) extra=`<div class="demo-step-actions"><button type="button" data-demo-action="previous" disabled>← Previous</button><button type="button" data-demo-action="next">Next step →</button></div>`;
    sourceValues=`<p>${esc(data.context)}</p><pre><code>${esc(data.before)}\n\n${esc(data.after)}</code></pre><p>Recorded build ${data.recordedBuildBefore} → ${data.recordedBuildAfter}; one bounded model call; seven passing oracle checks. Held-out synthetic example, outside the twelve-case primary benchmark.</p>`;
  } else if(slug==="stockpulse") {
    controls=select(id,"metric","Financial metric",data.metrics.map(m=>[m.key,m.label]),state.metric)+(expanded?select(id,"period","Reporting period",data.periods.map((p,i)=>[i,p.label]),state.period):"");
    sourceValues=`<div class="demo-table-scroll" tabindex="0" role="region" aria-label="Synthetic financial source values"><table><caption>All synthetic seeded values, USD billions</caption><thead><tr><th scope="col">Period</th>${data.metrics.map(m=>`<th scope="col">${m.label}</th>`).join("")}</tr></thead><tbody>${data.periods.map(p=>`<tr><th scope="row">${p.label}</th>${data.metrics.map(m=>`<td>${dollars(p.values[m.key])}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  } else if(slug==="sales-forecasting") {
    controls=`<div class="segmented-control" role="group" aria-label="Benchmark scoring metric">${["rmse","mae"].map(key=>`<button type="button" data-score="${key}" aria-pressed="${state.score===key}">${key.toUpperCase()}</button>`).join("")}</div>`;
    if(expanded) controls+=select(id,"fold","Chronological fold",[[0,"Fold 1 · 24 training weeks"],[1,"Fold 2 · 28 training weeks"]],0)+select(id,"week","Inspect observed week",data.observations.map((row,index)=>[index,row.date]),state.week);
    sourceValues=`<div class="demo-table-scroll" tabindex="0" role="region" aria-label="Published forecasting scores"><table><caption>Published means over two chronological folds</caption><thead><tr><th scope="col">Model</th><th scope="col">MAE</th><th scope="col">Mean fold RMSE</th></tr></thead><tbody>${data.models.map(m=>`<tr><th scope="row">${m.name}</th><td>${number(m.mae)}</td><td>${number(m.rmse)}</td></tr>`).join("")}</tbody></table></div>${expanded?`<div class="demo-table-scroll observations-table" tabindex="0" role="region" aria-label="All observed weekly prices"><table><caption>32 observed weekly median vehicle prices, USD</caption><thead><tr><th scope="col">Week</th><th scope="col">Observed median price</th></tr></thead><tbody>${data.observations.map(row=>`<tr><th scope="row">${row.date}</th><td>$${number(row.value)}</td></tr>`).join("")}</tbody></table></div>`:""}`;
  } else {
    controls=select(id,"platform","Platform",[["all","All platforms"],...unique(data.rows,"console").map(x=>[x,x])],"all")+select(id,"genre","Genre",[["all","All genres"],...unique(data.rows,"genre").map(x=>[x,x])],"all");
    if(expanded) controls+=select(id,"year","Release year",[["all","All release years"],...unique(data.rows,"release_year").map(x=>[x,x])],"all")+select(id,"publisher","Publisher",[["all","All publishers"],...unique(data.rows,"publisher").map(x=>[x,x])],"all")+select(id,"compareA","Compare platform A",unique(data.rows,"console").map(x=>[x,x]),state.compareA)+select(id,"compareB","Compare platform B",unique(data.rows,"console").map(x=>[x,x]),state.compareB);
    extra=`<div class="demo-tools"><button type="button" data-demo-action="reset">Reset filters ↺</button>${expanded?'<button type="button" data-demo-action="export">Export filtered CSV ↓</button>':""}</div>`;
    sourceValues=`<p>Original deterministic sample generator, seed 42; 30 cleaned games. Source sales fields retain float32 values, and missing critic scores remain unavailable.</p>`;
  }
  const sources=data.sources||[data.source];
  return `<div class="demo demo-${slug}${expanded?" demo-expanded":""}" data-demo="${slug}" data-expanded="${expanded}" id="${id}"><div class="demo-topbar"><span class="demo-window-dots" aria-hidden="true"><i></i><i></i><i></i></span><p>${slug==="stockpulse"?"StockPulse / DEMO":slug==="driftdoctor"?"DriftDoctor / contract review":slug==="sales-forecasting"?"Forecasting / benchmark lab":"Game sales / sample explorer"}</p><span class="demo-source-badge">${slug==="stockpulse"?"Fictional data":"Portfolio demo"}</span></div><div class="demo-inner"><div class="demo-controls" hidden>${controls}</div><div class="demo-results">${resultFor[slug](data,state,expanded)}</div><div class="demo-enhancement" hidden>${extra}</div><details class="demo-source"><summary>Source values &amp; provenance <span aria-hidden="true">+</span></summary>${sourceValues}${sources.map(source=>`<p><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">Inspect pinned source ↗</a></p><p class="source-revision">Source revision <code>${source.revision}</code><br>SHA-256 <code>${source.sha256}</code></p>`).join("")}</details><p class="demo-disclaimer">Source-based portfolio demonstration · ${slug==="driftdoctor"?"recorded synthetic evidence":slug==="stockpulse"?"synthetic financial fixtures":slug==="sales-forecasting"?"limited acceptance benchmark":"synthetic sample data"}</p><p class="sr-only demo-announcement" role="status" aria-live="polite"></p></div><script type="application/json" data-fixture>${JSON.stringify(data).replace(/</g,"\\u003c")}</script></div>`;
}

export function initializeDemo(root) {
  if(root.dataset.ready) return;
  const slug=root.dataset.demo,expanded=root.dataset.expanded==="true",data=JSON.parse(root.querySelector("[data-fixture]").textContent);
  let state=initial();
  function update(announce=true) {
    const focusedPeriod=document.activeElement?.matches(".stock-bar")?document.activeElement.dataset.period:null;
    root.querySelector(".demo-results").innerHTML=resultFor[slug](data,state,expanded);
    for(const button of root.querySelectorAll("[data-period]"))button.disabled=false;
    if(focusedPeriod!==null)root.querySelector(`[data-period="${focusedPeriod}"]`)?.focus({preventScroll:true});
    for(const control of root.querySelectorAll("select")) control.value=String(state[control.name]);
    for(const button of root.querySelectorAll("[data-choice]")) {button.setAttribute("aria-pressed",String(state.choice===button.dataset.choice));button.querySelector("span").textContent=state.choice===button.dataset.choice?"●":"○";}
    for(const button of root.querySelectorAll("[data-step]")) button.setAttribute("aria-pressed",String(state.step===Number(button.dataset.step)));
    for(const button of root.querySelectorAll("[data-score]")) button.setAttribute("aria-pressed",String(state.score===button.dataset.score));
    const previous=root.querySelector('[data-demo-action="previous"]'),next=root.querySelector('[data-demo-action="next"]');
    if(previous) previous.disabled=state.step===0;
    if(next) next.disabled=state.step===4;
    if(document.activeElement?.matches('[data-demo-action="previous"]:disabled,[data-demo-action="next"]:disabled'))root.querySelector(`[data-step="${state.step}"]`)?.focus({preventScroll:true});
    if(announce) {
      const message=slug==="driftdoctor"?`${driftSteps[state.step]}. ${state.choice} selected. ${state.choice==="stg_orders_v2"?"Current dependency matches the contract.":"Historical dependency requires escalation."}`:slug==="stockpulse"?`${data.metrics.find(x=>x.key===state.metric).label}, ${data.periods[state.period].label}: ${dollars(data.periods[state.period].values[state.metric])}.`:slug==="sales-forecasting"?`${state.score.toUpperCase()} comparison updated. ${state.score==="rmse"?"ARIMA":"ETS"} has the lowest published error.`:`${filterGames(data.rows,state).length} sample games match the filters.`;
      root.querySelector(".demo-announcement").textContent=message;
      root.dispatchEvent(new CustomEvent("demo:change",{bubbles:true}));
    }
  }
  root.addEventListener("change",event=>{
    const control=event.target.closest("select");if(!control)return;
    state[control.name]=["period","fold","week"].includes(control.name)?Number(control.value):control.value;
    if(control.name==="fold") state.week=data.folds[state.fold].trainSize;
    update();
  });
  root.addEventListener("click",event=>{
    const button=event.target.closest("button");if(!button)return;
    if(button.dataset.choice) state.choice=button.dataset.choice;
    else if(button.dataset.step!==undefined) state.step=Number(button.dataset.step);
    else if(button.dataset.score) state.score=button.dataset.score;
    else if(button.dataset.period!==undefined) state.period=Number(button.dataset.period);
    else if(button.dataset.demoAction==="next") state.step=Math.min(4,state.step+1);
    else if(button.dataset.demoAction==="previous") state.step=Math.max(0,state.step-1);
    else if(button.dataset.demoAction==="reset") state=initial();
    else if(button.dataset.demoAction==="export") {
      const rows=filterGames(data.rows,state),url=URL.createObjectURL(new Blob([gamesCSV(rows)],{type:"text/csv;charset=utf-8"})),link=document.createElement("a");
      link.href=url;link.download="video-game-sales-filtered.csv";link.hidden=true;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
      root.querySelector(".demo-announcement").textContent=`Exported ${rows.length} sample games.`;return;
    } else return;
    update();
  });
  root.dataset.ready="true";update(false);
  root.querySelector(".demo-controls").hidden=false;root.querySelector(".demo-enhancement").hidden=false;
}
