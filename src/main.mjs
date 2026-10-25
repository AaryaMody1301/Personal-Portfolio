import { createElement, ArrowUpRight, ArrowRight, ArrowDown, Download, Copy } from "lucide";
import { canonicalLegacyURL } from "./routes.mjs";
import { initializeDemo } from "./demos.mjs";
import { initializeMotion } from "./motion.mjs";
const icons = { "arrow-up-right": ArrowUpRight, "arrow-right": ArrowRight, "arrow-down": ArrowDown, download: Download, copy: Copy };
for (const node of document.querySelectorAll("[data-icon]")) node.replaceChildren(createElement(icons[node.dataset.icon], { "aria-hidden": "true", "stroke-width": 1.5 }));
const destinations = JSON.parse(document.getElementById("legacy-destinations").textContent);
const archive = document.getElementById("archive");
function route(initial = false) {
  const url = canonicalLegacyURL(location.href, destinations);
  if (url.pathname !== location.pathname) { location.replace(url.href); return; }
  const changed = url.href !== location.href;
  if (changed) history.replaceState(history.state, "", url);
  let id;
  try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  const inArchive = target && (target === archive || archive?.contains(target));
  if (initial && archive && !inArchive) archive.open = false;
  if (target) {
    let ancestor = target;
    while (ancestor) { if (ancestor.tagName === "DETAILS") ancestor.open = true; ancestor = ancestor.parentElement; }
    if (initial || changed) requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "instant" }));
  }
}
route(true);
window.addEventListener("hashchange", () => route());
window.addEventListener("popstate", () => route());
window.addEventListener("pageshow", () => route());
const menu = document.querySelector(".mobile-menu");
menu.addEventListener("click", event => { if (event.target.closest("a")) menu.open = false; });
document.addEventListener("keydown", event => { if (event.key === "Escape" && menu.open) { menu.open = false; menu.querySelector("summary").focus(); } });
document.addEventListener("click", event => { if (!menu.contains(event.target)) menu.open = false; });
let copyInvoker;
const feedback = document.getElementById("copy-feedback"), fallback = document.getElementById("copy-fallback");
document.querySelector("[data-copy-email]").addEventListener("click", async event => {
  copyInvoker = event.currentTarget;
  const input = fallback.querySelector("input");
  fallback.hidden = true; feedback.hidden = false;
  try { await navigator.clipboard.writeText(input.value); document.getElementById("copy-status").textContent = "Email address copied."; }
  catch { document.getElementById("copy-status").textContent = "Select and copy the email address below."; fallback.hidden = false; input.focus(); input.select(); }
});
document.getElementById("copy-dismiss").addEventListener("click", () => { feedback.hidden = true; copyInvoker?.focus(); });

const demos=document.querySelectorAll("[data-demo]");
if("IntersectionObserver" in window) {
  const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){initializeDemo(entry.target);observer.unobserve(entry.target);}},{rootMargin:"250px"});
  for(const demo of demos)observer.observe(demo);
} else for(const demo of demos)initializeDemo(demo);

const capabilityControls=document.querySelector(".capability-controls");
if(capabilityControls) {
  capabilityControls.hidden=false;
  capabilityControls.addEventListener("click",event=>{
    const button=event.target.closest("[data-capability]");if(!button)return;
    const key=button.getAttribute("aria-pressed")==="true"?null:button.dataset.capability;
    for(const item of capabilityControls.querySelectorAll("button"))item.setAttribute("aria-pressed",String(item.dataset.capability===key));
    for(const card of document.querySelectorAll("[data-capability-target]"))card.classList.toggle("is-selected",card.dataset.capabilityTarget===key);
    for(const evidence of document.querySelectorAll("[data-capability-evidence]"))evidence.classList.toggle("is-evidence",Boolean(key&&evidence.dataset.capabilityEvidence.split(" ").includes(key)));
    document.querySelector(".capability-feedback").textContent=key?`${button.textContent.trim()} evidence highlighted. Follow the evidence link in the selected card.`:"All capabilities shown.";
  });
}

const progress=document.querySelector(".reading-progress span"),navLinks=[...document.querySelectorAll(".desktop-nav a")],chapters=[...document.querySelectorAll(".project-chapter")];
let scrollQueued=false,activeChapter=-1;
function updateReading() {
  scrollQueued=false;
  const height=document.documentElement.scrollHeight-innerHeight;
  progress.style.transform=`scaleX(${height>0?Math.min(1,scrollY/height):0})`;
  if(!document.body.classList.contains("case-page")) {
    let current="hero";
    for(const id of ["hero","projects","experience","about","contact"])if(document.getElementById(id)?.getBoundingClientRect().top<innerHeight*.45)current=id;
    for(const link of navLinks) {if(link.hash===`#${current}`)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current");}
  }
  if(chapters.length) {
    let active=0;chapters.forEach((chapter,index)=>{if(chapter.getBoundingClientRect().top<innerHeight*.5)active=index;});
    if(active!==activeChapter) {
      activeChapter=active;
      chapters.forEach((chapter,index)=>chapter.classList.toggle("is-active",index===active));
      document.querySelector("[data-work-current]").textContent=String(active+1).padStart(2,"0");
      document.querySelector("[data-work-title]").textContent=chapters[active].querySelector("h3 a").textContent.trim();
      document.dispatchEvent(new CustomEvent("portfolio:chapter",{detail:{index:active}}));
    }
  }
}
function queueReading(){if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateReading);}}
addEventListener("scroll",queueReading,{passive:true});addEventListener("resize",queueReading);addEventListener("pageshow",queueReading);updateReading();
initializeMotion();
