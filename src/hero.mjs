export const heroStages = [
  ["Source", "Start with the raw material.", "ERP extracts, events and files arrive in different shapes."],
  ["Validate", "Make the assumptions visible.", "Check keys, reconcile records and surface unexpected changes."],
  ["Model", "Give the data a useful shape.", "Organize dependable records into models people can understand."],
  ["Decide", "Bring the answer into focus.", "Turn a checked model into a clear comparison and a useful next step."],
];
export const heroPositions = stage => Array.from({length:12},(_,i)=>{
  if(stage===0) return {x:35+(i%3)*146+(i%2?13:0),y:32+Math.floor(i/3)*59+(i%3===1?9:0),rotation:(i%3-1)*3,scaleX:1,scaleY:1};
  if(stage===1) return {x:44+(i%3)*144,y:32+Math.floor(i/3)*58,rotation:0,scaleX:1,scaleY:1};
  if(stage===2) return {x:48+(i%4)*116,y:72+Math.floor(i/4)*49,rotation:0,scaleX:.8,scaleY:1};
  return {x:80+Math.floor(i/3)*108,y:225-(i%3)*([21,32,42,53][Math.floor(i/3)]),rotation:0,scaleX:.64,scaleY:[.55,.85,1.14,1.43][Math.floor(i/3)]};
});
export function renderHero() {
  const values=["rows","id","sum","erp","time","item","key","date","area","dupe","ref","v2"];
  return `<div class="hero-aside" data-hero-story data-stage="0"><div class="pipeline interactive-pipeline"><div class="pipeline-heading"><p class="eyebrow">The work between source and answer</p><span class="pipeline-count" aria-hidden="true">01 / 04</span></div><svg class="pipeline-canvas" viewBox="0 0 520 300" role="img" aria-labelledby="pipeline-title pipeline-description"><title id="pipeline-title">Data becomes decisions</title><desc id="pipeline-description">Synthetic records move from scattered source data into validated rows, a model and a comparison chart.</desc><defs><pattern id="pipeline-grid" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="#C5CEC2"/></pattern></defs><rect width="520" height="300" fill="url(#pipeline-grid)"/><g class="pipeline-model-guide" opacity="0"><path d="M36 52H498V226H36Z" fill="none" stroke="#A7B8A2" stroke-dasharray="4 4"/><text x="46" y="42">CURATED MODEL</text></g><g class="pipeline-axis" opacity="0"><path d="M52 34V265H490" stroke="#9AAE96" fill="none"/><text x="81" y="286">Q1</text><text x="189" y="286">Q2</text><text x="297" y="286">Q3</text><text x="405" y="286">Q4</text></g>${values.map((value,i)=>{const p=heroPositions(0)[i];return `<g data-record transform="translate(${p.x} ${p.y}) rotate(${p.rotation})"><rect width="116" height="34" rx="3" fill="#F7F5EF" stroke="#BFCBBB"/><text x="10" y="22">${value}</text><path class="record-check" opacity="0" d="m94 17 4 4 8-9" fill="none" stroke="#244B3B" stroke-width="2"/></g>`;}).join("")}</svg><div class="pipeline-stage-buttons" role="group" aria-label="Explore the data transformation" hidden>${heroStages.map(([label],i)=>`<button type="button" data-hero-stage="${i}" aria-pressed="${i===0}"><span>0${i+1}</span>${label}</button>`).join("")}</div><div class="pipeline-explanation"><p class="pipeline-label">${heroStages[0][1]}</p><p class="pipeline-detail">${heroStages[0][2]}</p></div><p class="pipeline-caption">Conceptual pipeline · synthetic illustration</p></div></div>`;
}
