import { createElement, Map as MapIcon, RotateCcw, X, Download } from "lucide";
const $ = (s) => document.querySelector(s);
const body = document.body,
  panel = $("#content-panel"),
  slot = $("#panel-content"),
  stage = $("#world-stage"),
  scroller = $(".panel-body");
const assets = JSON.parse($("#world-assets").textContent);
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
const ids = ["driftdoctor", "compatforge", "originkeep"];
const islandNames = {
  home: "Home / About Aarya",
  driftdoctor: "DriftDoctor / Repair Works",
  compatforge: "CompatForge / Observatory",
  originkeep: "OriginKeep / Archive",
};
const aliases = {
  proof: "experience",
  systems: "experience",
  cases: "experience",
  credentials: "skills",
};
const cells = [...document.querySelectorAll(".work-cell")];
const archiveCells = cells.filter((cell) => !cell.classList.contains("selected-work"));
const icons = { map: MapIcon, reset: RotateCcw, close: X, download: Download };
for (const cell of cells) {
  cell.open = false;
  // Native grouping closes the previous disclosure synchronously, before the
  // browser queues toggle events. Without JS, all project content stays open.
  cell.name = "work-projects";
}
for (const el of document.querySelectorAll("[data-icon]"))
  el.replaceChildren(
    createElement(icons[el.dataset.icon], {
      "aria-hidden": "true",
      "stroke-width": 1.5,
    }),
  );
let world,
  loading,
  mode = "read",
  failed = false,
  lastFocus,
  pendingFocus,
  activeIsland = "home",
  activePanel,
  moved = [],
  readingPosition = 0,
  readingAnchor = "",
  handledURL,
  pendingView;
const status = (text) => {
  $("#world-status").textContent = text;
};
const announce = (text) => {
  $("#view-status").textContent = text;
};
const keyFor = (hash) =>
  aliases[hash] ||
  (hash.startsWith("island-")
    ? hash.slice(7) === "home"
      ? "about"
      : hash.slice(7)
    : hash);
function modeForURL() {
  const url = new URL(location.href);
  return !failed &&
    !reduced.matches &&
    (url.searchParams.get("view") === "world" ||
      (url.searchParams.get("view") !== "read" &&
        url.hash.startsWith("#island-")))
    ? "world"
    : "read";
}
function snapshot() {
  return {
    mode,
    scroll: mode === "read" ? window.scrollY : readingPosition,
    island: activeIsland,
    readingAnchor,
    camera: world?.getView(),
  };
}
function remember() {
  history.replaceState({ ...history.state, portfolio: snapshot() }, "");
}
function changeURL(hash) {
  const url = new URL(location.href);
  url.hash = hash;
  url.searchParams.set("view", mode === "world" ? "world" : "read");
  history.pushState({ portfolio: snapshot() }, "", url);
  handledURL = location.href;
}
function restore() {
  for (const { node, marker } of moved) marker.replaceWith(node);
  moved = [];
}
function hidePanel(focus = true) {
  const feedback = $(".copy-feedback");
  feedback.hidden = true;
  body.append(feedback);
  if (panel.open) panel.close();
  activePanel = null;
  body.classList.remove("panel-open");
  restore();
  $(".world-copy").inert = mode === "world" && activeIsland !== "home";
  if (focus && lastFocus?.isConnected) lastFocus.focus({ preventScroll: true });
}
function move(node) {
  const marker = document.createComment(`home of ${node.id}`);
  node.before(marker);
  moved.push({ node, marker });
  slot.append(node);
}
function reveal(target) {
  const cell = target.closest(".work-cell");
  if (cell?.hidden) {
    clearFilters();
  }
  let node = target;
  while (node && node !== body) {
    if (node.tagName === "DETAILS") node.open = true;
    node = node.parentElement;
  }
}
function showPanel(hash) {
  const key = keyFor(hash),
    target = document.getElementById(key);
  if (!target) return;
  if (panel.open && activePanel === key) {
    pendingFocus = null;
    return;
  }
  if (!panel.open) lastFocus = pendingFocus || document.activeElement;
  pendingFocus = null;
  hidePanel(false);
  reveal(target);
  if (key === "about")
    for (const id of ["about", "experience", "skills"])
      move(document.getElementById(id));
  else if (key === "projects" || key === "more-projects") {
    move(document.getElementById("projects"));
    move(document.getElementById("more-projects"));
  }
  else move(target);
  activePanel = key;
  $("#panel-title").textContent = ids.includes(key)
    ? islandNames[key]
    : key === "projects" || key === "more-projects"
      ? "Work / 14 projects"
      : `Aarya’s World / ${key}`;
  body.classList.add("panel-open");
  $(".world-copy").inert = true;
  if (!panel.open) panel.showModal();
  scroller.scrollTop = 0;
  $("#panel-title").focus({ preventScroll: true });
  world?.panelEnter(panel);
}
function setDestination(id) {
  if (!(id in islandNames)) id = "home";
  activeIsland = id;
  body.classList.toggle("has-destination", id !== "home");
  $(".world-copy").inert = mode === "world" && (id !== "home" || panel.open);
  $("#world-destination").textContent = islandNames[id];
  for (const button of document.querySelectorAll(
    ".island-labels [data-island]",
  )) {
    if (button.dataset.island === id)
      button.setAttribute("aria-current", "location");
    else button.removeAttribute("aria-current");
  }
}
function readHash({ focus = false } = {}) {
  const key = keyFor(location.hash.slice(1)),
    target = document.getElementById(key);
  if (target) {
    reveal(target);
    requestAnimationFrame(() => {
      if (mode !== "read") return;
      target.scrollIntoView({ behavior: "instant", block: "start" });
      if (focus || target.id === "main-content") {
        const heading =
          target.id === "main-content" || target.matches("h1,h2,h3,summary")
            ? target
            : target.querySelector("h2,h3,summary") || target;
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
    });
  }
}
function route({ preserveCamera = false } = {}) {
  handledURL = location.href;
  const hash = location.hash.slice(1) || "hero";
  if (mode === "read") {
    hidePanel(false);
    readHash();
    return;
  }
  if (hash.startsWith("island-")) {
    hidePanel();
    setDestination(hash.slice(7));
    if (!preserveCamera) world?.travel(activeIsland);
    return;
  }
  if (hash === "hero" || hash === "main-content") {
    hidePanel();
    setDestination("home");
    if (!preserveCamera) world?.reset();
    if (hash === "main-content")
      $("#main-content").focus({ preventScroll: true });
    return;
  }
  const island = ids.includes(hash) ? hash : hash === "about" ? "home" : null;
  if (island) {
    setDestination(island);
    if (!preserveCamera) world?.travel(island);
  }
  showPanel(hash);
}
function loadPoster() {
  for (const el of stage.querySelectorAll("[data-src],[data-srcset]")) {
    if (el.dataset.src) {
      el.src = el.dataset.src;
      delete el.dataset.src;
    }
    if (el.dataset.srcset) {
      el.srcset = el.dataset.srcset;
      delete el.dataset.srcset;
    }
  }
}
function setMode(next, { navigate = false, restoreState } = {}) {
  const previous = mode;
  if (failed || reduced.matches) next = "read";
  if (navigate) remember();
  if (previous === "read") {
    readingPosition = window.scrollY;
    readingAnchor = location.hash.slice(1);
  }
  let contentHash =
    activePanel ||
    (location.hash.startsWith("#island-")
      ? keyFor(location.hash.slice(1))
      : location.hash.slice(1));
  if (previous === "world" && ["hero", "main-content"].includes(contentHash))
    contentHash = "";
  hidePanel(false);
  mode = next;
  body.classList.toggle("world-mode", mode === "world");
  body.classList.toggle("reading-mode", mode === "read");
  requestAnimationFrame(updateProfilePin);
  $("#reading-toggle").textContent =
    mode === "world" ? "Read portfolio" : "Explore world";
  $("#reading-toggle").hidden = failed || reduced.matches;
  // Set the current header height before the World measures its viewport.
  // Waiting for ResizeObserver would allocate once with the reading height
  // and again when the taller World header is delivered.
  measureHeader();
  $(".world-copy").inert = mode === "world" && activeIsland !== "home";
  $("#world-map").hidden = true;
  $("#map-toggle").setAttribute("aria-expanded", "false");
  if (navigate)
    changeURL(
      mode === "world"
        ? world
          ? `island-${activeIsland}`
          : "hero"
        : contentHash || readingAnchor || "hero",
    );
  if (restoreState) {
    readingPosition = restoreState.scroll || 0;
    readingAnchor = restoreState.readingAnchor || "";
    setDestination(restoreState.island || "home");
    pendingView = restoreState.camera;
  }
  if (mode === "read") {
    world?.setActive(false);
    announce(
      failed
        ? "Reading view is ready. The interactive world is unavailable on this device."
        : "Reading portfolio",
    );
    if (restoreState || (previous === "world" && !contentHash))
      requestAnimationFrame(() =>
        window.scrollTo({ top: readingPosition, behavior: "instant" }),
      );
    else readHash({ focus: navigate });
    return;
  }
  loadPoster();
  window.scrollTo({ top: 0, behavior: "instant" });
  world?.refreshLayout();
  if (pendingView && world) {
    world.setView(pendingView);
    pendingView = null;
  }
  world?.setActive(true);
  announce("Interactive world");
  startWorld();
  route({ preserveCamera: !!world && (navigate || !!restoreState) });
}
async function startWorld() {
  if (world || loading || failed) return;
  status("Preparing your world…");
  body.dataset.worldState = "loading";
  loading = (async () => {
    try {
      // Let the real poster paint before downloading/compiling the 3D enhancement.
      await new Promise((resolve) =>
        requestAnimationFrame(() => setTimeout(resolve, 0)),
      );
      const { createWorld } = await import(
        new URL(assets.bundle, document.baseURI).href
      );
      const instance = await createWorld({
        mount: stage,
        assets,
        onFailure: fallback,
        status,
        initialActive: false,
      });
      if (failed) {
        instance.dispose();
        return;
      }
      world = instance;
      world.setPaused(
        $("#motion-toggle").getAttribute("aria-pressed") === "true",
      );
      world.demo(
        "repair",
        $("#driftdoctor .demo").dataset.state === "validated",
        true,
      );
      world.demo(
        "evidence",
        $("#compatforge [aria-pressed=true]").dataset.evidence,
        true,
      );
      world.demo(
        "archive",
        $("#originkeep .demo").dataset.state === "archived",
        true,
      );
      body.dataset.worldState = "ready";
      body.classList.add("world-ready");
      $(".island-labels").hidden = false;
      $(".world-controls").hidden = false;
      status("Drag to look around · choose an island");
      if (mode === "world") world.refreshLayout();
      if (pendingView) {
        world.setView(pendingView);
        pendingView = null;
      }
      world.setActive(mode === "world");
      if (mode === "world")
        route({ preserveCamera: !!history.state?.portfolio?.camera });
    } catch (error) {
      console.warn("World enhancement unavailable:", error.message);
      fallback();
    }
  })();
}
function fallback() {
  failed = true;
  world?.dispose();
  world = null;
  body.dataset.worldState = "fallback";
  body.classList.remove("world-ready");
  setMode("read");
  status(
    "Reading view is ready. The interactive world is unavailable on this device.",
  );
}
function closePanel() {
  remember();
  changeURL(`island-${activeIsland}`);
  route({ preserveCamera: true });
}
function closeMenu() {
  $(".mobile-menu").open = false;
}
document.addEventListener("click", (event) => {
  const island = event.target.closest("[data-island]");
  if (island) {
    remember();
    pendingFocus = island.closest("#world-map") ? $("#map-toggle") : island;
    $("#world-map").hidden = true;
    $("#map-toggle").setAttribute("aria-expanded", "false");
    changeURL(
      island.dataset.island === "home" ? "about" : island.dataset.island,
    );
    route();
    return;
  }
  const modeButton = event.target.closest(
    "#reading-toggle,[data-read],[data-world]",
  );
  if (modeButton && !event.metaKey && !event.ctrlKey) {
    event.preventDefault();
    closeMenu();
    const hash = modeButton.matches("[data-world]")
      ? modeButton.getAttribute("href")?.split("#")[1]
      : null;
    setMode(
      modeButton.matches("[data-read]")
        ? "read"
        : modeButton.matches("[data-world]")
          ? "world"
          : mode === "read"
            ? "world"
            : "read",
      { navigate: true },
    );
    if (hash && mode === "world") {
      changeURL(hash);
      route();
    }
    return;
  }
  const anchor = event.target.closest('a[href^="#"]');
  if (
    anchor &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  ) {
    const hash = anchor.getAttribute("href").slice(1);
    if (!document.getElementById(hash)) return;
    event.preventDefault();
    remember();
    pendingFocus = anchor;
    closeMenu();
    changeURL(hash);
    route();
  }
});
$("#close-panel").addEventListener("click", closePanel);
panel.addEventListener("cancel", (event) => {
  event.preventDefault();
  closePanel();
});
panel.addEventListener("click", (event) => {
  if (event.target === panel) {
    const r = panel.getBoundingClientRect();
    if (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    )
      closePanel();
  }
});
$("#map-toggle").addEventListener("click", () => {
  const map = $("#world-map");
  map.hidden = !map.hidden;
  $("#map-toggle").setAttribute("aria-expanded", String(!map.hidden));
  if (!map.hidden) map.querySelector("button").focus();
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!$("#world-map").hidden) {
    $("#world-map").hidden = true;
    $("#map-toggle").setAttribute("aria-expanded", "false");
    $("#map-toggle").focus();
  }
  if ($(".mobile-menu").open) {
    closeMenu();
    $(".mobile-menu summary").focus();
  }
});
$("#reset-view").addEventListener("click", () => {
  remember();
  changeURL("hero");
  route();
});
$("#motion-toggle").addEventListener("click", (event) => {
  const paused = event.currentTarget.getAttribute("aria-pressed") !== "true";
  event.currentTarget.setAttribute("aria-pressed", String(paused));
  event.currentTarget.textContent = paused ? "Resume motion" : "Pause motion";
  world?.setPaused(paused);
});
let category = "all";
const searchable = new Map(
  archiveCells.map((cell) => [cell, cell.textContent.toLocaleLowerCase()]),
);
function filterProjects() {
  const query = $("#project-search").value.trim().toLocaleLowerCase();
  let count = 0;
  for (const cell of archiveCells) {
    cell.hidden = !(
      (category === "all" || cell.dataset.category === category) &&
      searchable.get(cell).includes(query)
    );
    if (!cell.hidden) count++;
  }
  for (const b of document.querySelectorAll("[data-filter]"))
    b.setAttribute("aria-pressed", String(b.dataset.filter === category));
  $("#project-count").textContent = `${count} of 11 archive projects`;
  $("#project-empty").hidden = count !== 0;
}
function clearFilters() {
  category = "all";
  $("#project-search").value = "";
  filterProjects();
}
$(".project-discovery").hidden = false;
$(".project-discovery").addEventListener("submit", (e) => e.preventDefault());
$(".project-discovery").addEventListener("reset", (e) => {
  e.preventDefault();
  clearFilters();
});
$("#project-search").addEventListener("input", filterProjects);
for (const b of document.querySelectorAll("[data-filter]"))
  b.addEventListener("click", () => {
    category = b.dataset.filter;
    filterProjects();
  });
let copyTimer, copyInvoker;
async function copyText(text, label, button) {
  clearTimeout(copyTimer);
  copyInvoker = button;
  const feedback = $(".copy-feedback");
  if (panel.open) panel.append(feedback);
  else body.append(feedback);
  feedback.hidden = false;
  try {
    await navigator.clipboard.writeText(text);
    $("#copy-status").textContent = `${label} copied.`;
    $("#copy-fallback").hidden = true;
    feedback.querySelector("label").hidden = true;
    copyTimer = setTimeout(() => {
      feedback.hidden = true;
    }, 5000);
  } catch {
    $("#copy-status").textContent = `Copy ${label.toLowerCase()} below.`;
    $("#copy-fallback").hidden = false;
    feedback.querySelector("label").hidden = false;
    $("#copy-fallback").value = text;
    $("#copy-fallback").focus();
    $("#copy-fallback").select();
  }
}
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-copy-email],[data-copy-project]");
  if (!button) return;
  const url = new URL($('link[rel="canonical"]').href);
  url.searchParams.set("view", "read");
  url.hash = button.dataset.copyProject || "";
  copyText(
    button.hasAttribute("data-copy-email") ? "aaryamody5@gmail.com" : url.href,
    button.hasAttribute("data-copy-email") ? "Email address" : "Project link",
    button,
  );
});
$("#copy-dismiss").addEventListener("click", () => {
  $(".copy-feedback").hidden = true;
  copyInvoker?.focus();
});
const header = $(".site-header");
const measureHeader = () =>
  document.documentElement.style.setProperty(
    "--header-height",
    `${header.getBoundingClientRect().height}px`,
  );
new ResizeObserver(measureHeader).observe(header);
measureHeader();
const sectionObserver = new IntersectionObserver(
  (entries) => {
    if (mode !== "read") return;
    for (const entry of entries)
      if (entry.isIntersecting)
        for (const link of document.querySelectorAll(
          '.site-header a[href^="#"]',
        )) {
          if (link.hash === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        }
  },
  { rootMargin: "-15% 0px -65% 0px" },
);
for (const section of document.querySelectorAll("#reading-content > section"))
  sectionObserver.observe(section);
document.addEventListener("click", (event) => {
  const button = event.target.closest(
    ".demo button[data-action],.demo button[data-evidence]",
  );
  if (!button) return;
  const demo = button.closest(".demo"),
    result = demo.querySelector(".demo-result");
  if (button.dataset.action === "repair") {
    const repaired = demo.dataset.state !== "validated";
    demo.dataset.state = repaired ? "validated" : "drifted";
    button.textContent = repaired ? "Reset sample" : "Assemble & validate";
    result.textContent = repaired
      ? "Sample sequence: diagnosed renamed column → guarded repair → contract check passed → diff ready for human review."
      : "Sample: a renamed column has broken a contract.";
    world?.demo("repair", repaired);
  } else if (button.dataset.evidence) {
    const state = button.dataset.evidence;
    for (const b of demo.querySelectorAll("[data-evidence]"))
      b.setAttribute("aria-pressed", String(b === button));
    result.textContent = {
      supported:
        "Supported: the sample vendor statement and reproduced observation agree for this configuration.",
      unknown:
        "Unknown: this sample has no reproduced observation for the selected driver. Missing evidence stays missing.",
      conflicting:
        "Conflicting: the sample vendor claim and reproduced observation disagree. Both sources stay visible for review.",
    }[state];
    world?.demo("evidence", state);
  } else {
    const archived = demo.dataset.state !== "archived";
    demo.dataset.state = archived ? "archived" : "active";
    button.textContent = archived ? "Restore sample" : "Archive sample";
    result.textContent = archived
      ? "Archived: the sample file is set aside; its source, identity, and versions remain recorded."
      : "Restored: version 2 is active again, with the same sample content identity and provenance.";
    world?.demo("archive", archived);
  }
});

window.addEventListener("popstate", (event) => {
  const state = event.state?.portfolio;
  setMode(modeForURL(), { restoreState: state });
  route({ preserveCamera: !!state?.camera });
  if (mode === "read" && state)
    requestAnimationFrame(() =>
      window.scrollTo({ top: state.scroll || 0, behavior: "instant" }),
    );
});
window.addEventListener("hashchange", () => {
  if (location.href !== handledURL) {
    const next = modeForURL();
    if (next !== mode) setMode(next);
    route();
  }
});
const motionChange = (event) => {
  if (event.matches) setMode("read", { navigate: true });
};
reduced.addEventListener("change", motionChange);
document.addEventListener("visibilitychange", () =>
  world?.setActive(mode === "world" && !document.hidden),
);
// Keep a cached page resumable; release GPU resources when leaving permanently.
window.addEventListener("pagehide", (event) => {
  if (event.persisted) world?.setActive(false);
  else world?.dispose();
});
window.addEventListener("pageshow", () =>
  world?.setActive(mode === "world" && !document.hidden),
);
history.scrollRestoration = "manual";
// Keep every profile link reachable when text grows or the window is short.
function updateProfilePin() {
  const headerHeight = $("#site-header").offsetHeight;
  const profileHeight = $(".world-copy").offsetHeight;
  body.classList.toggle(
    "profile-pinned",
    mode === "read" && innerWidth >= 1024 &&
      profileHeight + headerHeight + 64 <= innerHeight,
  );
}
const profileObserver = new ResizeObserver(updateProfilePin);
profileObserver.observe($(".world-copy"));
profileObserver.observe($("#site-header"));
window.addEventListener("resize", updateProfilePin);
document.fonts.ready.then(updateProfilePin);
setMode(modeForURL());
handledURL = location.href;
