import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { featured } from "../src/content.mjs";
import { monogramSVG, wordmarkSVG, lockupSVG, faviconSVG, outlinedText, monogram } from "../src/brand.mjs";

for (const [name,svg] of Object.entries({monogram:monogramSVG(),"monogram-reversed":monogramSVG("#F7F5EF"),wordmark:wordmarkSVG(),logo:lockupSVG(),"logo-reversed":lockupSVG("#F7F5EF")})) await writeFile(`assets/brand/${name}.svg`,svg+"\n");
await writeFile("assets/images/favicon.svg",faviconSVG+"\n");
const icons=[];
for(const size of [16,32,48]) {
  const png=await sharp(Buffer.from(faviconSVG)).resize(size,size).png().toBuffer();
  await writeFile(`assets/brand/favicon-${size}.png`,png);icons.push({size,png});
}
const header=Buffer.alloc(6+icons.length*16);header.writeUInt16LE(1,2);header.writeUInt16LE(icons.length,4);let offset=header.length;
icons.forEach(({size,png},index)=>{const entry=6+index*16;header[entry]=size;header[entry+1]=size;header.writeUInt16LE(1,entry+4);header.writeUInt16LE(32,entry+6);header.writeUInt32LE(png.length,entry+8);header.writeUInt32LE(offset,entry+12);offset+=png.length;});
await writeFile("assets/brand/favicon.ico",Buffer.concat([header,...icons.map(x=>x.png)]));
await writeFile("assets/brand/apple-touch-icon.png",await sharp(Buffer.from(faviconSVG)).resize(180,180).png().toBuffer());
for(const project of [null,...featured]) {
  const lines=project?.slug==="video-game-sales-dashboard"?["games-line-1","games-line-2"]:project?[project.slug]:["tagline-1","tagline-2"];
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#F7F5EF"/><path d="M0 0H1200V12H0Z" fill="#244B3B"/><g transform="translate(78 48) scale(.85)">${monogram("#244B3B")}</g>${outlinedText(project?"selected":"positioning",160,62,project?470:520,"#244B3B")}${lines.map((key,i)=>outlinedText(key,76,198+i*113,project?.slug==="driftdoctor"?680:project?.slug==="stockpulse"?620:project?.slug==="sales-forecasting"?900:850)).join("")}<path d="M80 510H1120" stroke="#DADFD7"/>${outlinedText("domain",80,550,175,"#5C655E")}${outlinedText(project?"evidence":"wordmark",project?735:900,project?554:540,project?385:220,"#244B3B")}</svg>`;
  await writeFile(`assets/images/${project?`og-${project.slug}`:"og-image"}.jpg`,await sharp(Buffer.from(svg)).jpeg({quality:88,mozjpeg:true}).toBuffer());
}
const gsapPackage=JSON.parse(await readFile("node_modules/gsap/package.json","utf8"));
const gsapNotices=await Promise.all(["gsap-core.js","CSSPlugin.js","ScrollTrigger.js","Observer.js"].map(async file=>{const source=await readFile(`node_modules/gsap/${file}`,"utf8");const notice=source.match(/\/\*![\s\S]*?\*\//)?.[0];if(!notice)throw new Error(`Missing upstream GSAP notice: ${file}`);return `${file}\n${notice}`;}));
const notices=["AARYA MODY — THIRD-PARTY SOURCES AND NOTICES","Original interactive portfolio, AM geometry and source-derived project diagrams. Wordmark and social-image outlines are derived from bundled fonts.","Newsreader — https://github.com/productiontype/Newsreader",await readFile("assets/licenses/Newsreader-OFL.txt","utf8"),"Inter — https://rsms.me/inter/",await readFile("assets/licenses/Inter-OFL.txt","utf8"),"Lucide — https://lucide.dev/",await readFile("node_modules/lucide/LICENSE","utf8"),"GSAP — https://gsap.com",gsapPackage.license,...gsapNotices];
await writeFile("assets/licenses/THIRD-PARTY-NOTICES.txt",notices.join("\n\n")+"\n");
console.log("Prepared canonical logo exports, favicons, five social images and notices.");
