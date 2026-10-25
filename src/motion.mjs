import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroStages, heroPositions } from "./hero.mjs";
gsap.registerPlugin(ScrollTrigger);

export function initializeMotion() {
  const preference=document.querySelector(".motion-control select"),system=matchMedia("(prefers-reduced-motion: reduce)"),story=document.querySelector("[data-hero-story]");
  let choice="system",context,stage=0,heldAt=null,entered=false;
  try { const saved=localStorage.getItem("portfolio-motion");if(["system","full","reduced"].includes(saved))choice=saved; } catch {}
  const reduced=()=>choice==="reduced"||(choice==="system"&&system.matches);
  function setStage(index,animate=true) {
    stage=index;if(!story)return;
    story.dataset.stage=String(index);
    story.querySelector(".pipeline-count").textContent=`0${index+1} / 04`;
    story.querySelector(".pipeline-label").textContent=heroStages[index][1];
    story.querySelector(".pipeline-detail").textContent=heroStages[index][2];
    story.querySelector("#pipeline-description").textContent=`${heroStages[index][0]}. ${heroStages[index][2]} Conceptual synthetic illustration.`;
    for(const button of story.querySelectorAll("[data-hero-stage]"))button.setAttribute("aria-pressed",String(Number(button.dataset.heroStage)===index));
    const duration=animate && !reduced() ? .42 : 0,positions=heroPositions(index);
    story.querySelectorAll("[data-record]").forEach((node,i)=>{
      gsap.to(node,{...positions[i],duration,ease:"power2.inOut",overwrite:true});
      gsap.to(node.querySelector("rect"),{fill:index===3?"#244B3B":"#F7F5EF",stroke:index===1?"#244B3B":"#BFCBBB",duration,overwrite:true});
    });
    gsap.to(story.querySelectorAll("[data-record] text"),{opacity:index===3?0:1,duration,overwrite:true});
    gsap.to(story.querySelectorAll(".record-check"),{opacity:index===1?1:0,duration,overwrite:true});
    gsap.to(story.querySelector(".pipeline-model-guide"),{opacity:index===2?1:0,duration,overwrite:true});
    gsap.to(story.querySelector(".pipeline-axis"),{opacity:index===3?1:0,duration,overwrite:true});
  }
  if(story) {
    story.querySelector(".pipeline-stage-buttons").hidden=false;
    story.addEventListener("click",event=>{const button=event.target.closest("[data-hero-stage]");if(button){heldAt=scrollY;setStage(Number(button.dataset.heroStage));}});
  }
  function configure() {
    context?.revert();document.documentElement.dataset.motion=reduced()?"reduced":"full";
    document.documentElement.dataset.motionReady="false";
    preference.value=choice;
    if(reduced()) {
      if(story)gsap.killTweensOf(story.querySelectorAll("*"));
      const targets=document.querySelectorAll(".bar-fill,.portrait picture,.demo-big-number,.drift-panel,.demo-empty,.chapter-title,.chapter-headline,.work-counter,details[open]>:not(summary)");
      gsap.killTweensOf(targets);gsap.set(targets,{clearProps:"transform,opacity"});
      const archive=document.querySelector(".archive-list");if(archive)gsap.set(archive,{clearProps:"height,overflow"});
      setStage(stage,false);document.documentElement.dataset.motionReady="true";return;
    }
    context=gsap.context(()=>{
      const hero=document.querySelector(".hero-copy");
      if(!entered&&hero) {gsap.from(hero.children,{y:14,duration:.55,stagger:.045,ease:"power2.out",clearProps:"transform",onComplete:()=>{document.documentElement.dataset.motionReady="true";}});entered=true;}
      else document.documentElement.dataset.motionReady="true";
      const desktop=gsap.matchMedia();
      desktop.add("(min-width: 900px) and (min-height: 650px)",()=>{
        if(story)ScrollTrigger.create({trigger:"#hero",start:"top 90px",end:"bottom 170px",onUpdate:self=>{
          if(heldAt!==null) {if(Math.abs(scrollY-heldAt)<5)return;heldAt=null;}
          const next=Math.min(3,Math.floor(self.progress*4));if(next!==stage)setStage(next);
        }});
        for(const chapter of document.querySelectorAll(".project-chapter"))gsap.fromTo(chapter.querySelector(".chapter-media"),{y:18},{y:0,ease:"none",scrollTrigger:{trigger:chapter,start:"top 85%",end:"top 25%",scrub:.5}});
      });
      const line=document.querySelector(".experience-line");
      if(line)gsap.fromTo(line,{scaleY:.08},{scaleY:1,transformOrigin:"top",ease:"none",scrollTrigger:{trigger:"#experience",start:"top 80%",end:"bottom 75%",scrub:.4}});
      return ()=>desktop.revert();
    });
    setStage(stage,false);ScrollTrigger.refresh();
  }
  preference.closest("label").hidden=false;
  preference.addEventListener("change",()=>{choice=preference.value;try{localStorage.setItem("portfolio-motion",choice);}catch{}configure();});
  system.addEventListener("change",()=>{if(choice==="system")configure();});
  configure();
  document.addEventListener("portfolio:chapter",event=>{
    if(reduced()||document.hidden)return;
    const chapter=document.querySelectorAll(".project-chapter")[event.detail.index];
    const targets=[...chapter.querySelectorAll(".chapter-title,.chapter-headline"),document.querySelector(".work-counter")];
    gsap.fromTo(targets,{y:10},{y:0,duration:.4,stagger:.035,ease:"power2.out",overwrite:true,clearProps:"transform"});
  });
  document.addEventListener("demo:change",event=>{
    if(reduced()||document.hidden)return;
    const root=event.target;
    gsap.from(root.querySelectorAll('.bar-fill[data-axis="x"]'),{scaleX:.7,transformOrigin:"left",duration:.3,ease:"power2.out",overwrite:true});
    gsap.from(root.querySelectorAll('.bar-fill[data-axis="y"]'),{scaleY:.7,transformOrigin:"bottom",duration:.3,ease:"power2.out",overwrite:true});
    const panels=root.querySelectorAll(".demo-big-number,.drift-panel,.demo-empty");
    if(panels.length)gsap.from(panels,{y:4,duration:.22,clearProps:"transform"});
  });
  for(const details of document.querySelectorAll("details"))details.addEventListener("toggle",()=>{
    if(details.open&&!reduced()&&!document.hidden) {
      const content=[...details.children].filter(node=>node.tagName!=="SUMMARY");
      let destination;try{destination=document.getElementById(decodeURIComponent(location.hash.slice(1)));}catch{}
      if(details.id==="archive"&&!details.contains(destination))gsap.fromTo(details.querySelector(".archive-list"),{height:0,overflow:"hidden"},{height:"auto",duration:.3,ease:"power2.out",overwrite:true,clearProps:"height,overflow",onComplete:()=>ScrollTrigger.refresh()});
      else if(content.length)gsap.from(content,{y:5,duration:.22,clearProps:"transform"});
    }
    ScrollTrigger.refresh();
  });
  const portrait=document.querySelector(".portrait"),fine=matchMedia("(pointer: fine)");
  if(portrait) {
    portrait.addEventListener("pointermove",event=>{if(reduced()||!fine.matches)return;const box=portrait.getBoundingClientRect(),x=(event.clientX-box.left)/box.width-.5,y=(event.clientY-box.top)/box.height-.5;gsap.to(portrait.querySelector("picture"),{x:x*8,y:y*8,rotationY:x*2,rotationX:-y*2,duration:.3,overwrite:true});});
    portrait.addEventListener("pointerleave",()=>gsap.to(portrait.querySelector("picture"),{x:0,y:0,rotationX:0,rotationY:0,duration:reduced()?0:.3}));
  }
  document.addEventListener("visibilitychange",()=>{
    if(document.hidden) {gsap.globalTimeline.pause();gsap.ticker.sleep();}
    else {gsap.ticker.wake();gsap.globalTimeline.resume();ScrollTrigger.refresh();}
  });
}
