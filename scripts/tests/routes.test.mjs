import { test } from "node:test";
import assert from "node:assert/strict";
import { canonicalLegacyURL } from "../../src/routes.mjs";
import { legacyDestinations, featured, archive, pagePaths } from "../../src/content.mjs";
test("legacy case routes preserve unrelated parameters and normalize once",()=>{
 for(const project of featured) for(const hash of [project.id,...project.aliases]){
  const url=canonicalLegacyURL(`https://aaryamody.app/?utm_source=resume&view=world#${hash}`,legacyDestinations);
  assert.equal(url.pathname,`/projects/${project.slug}/`);assert.equal(url.search,"?utm_source=resume");assert.equal(url.hash,"");assert.equal(canonicalLegacyURL(url.href,legacyDestinations).href,url.href);
 }
});
test("archived and malformed fragments cannot lose destinations or throw",()=>{
 for(const project of archive){const url=canonicalLegacyURL(`https://aaryamody.app/?view=read#${project.id}`,legacyDestinations);assert.equal(url.hash,"#"+project.id);assert.equal(url.pathname,"/");}
 assert.equal(canonicalLegacyURL("https://aaryamody.app/#%E0%A4%A",legacyDestinations).hash,"#%E0%A4%A");
 assert.equal(canonicalLegacyURL("https://aaryamody.app/?view=other#unknown",legacyDestinations).href,"https://aaryamody.app/?view=other#unknown");
 assert.equal(canonicalLegacyURL("https://aaryamody.app/?view=world#island-home",legacyDestinations).hash,"#about");
 assert.equal(featured.length,4);assert.equal(archive.length,10);assert.equal(pagePaths.length,5);
});
