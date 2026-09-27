(() => {
  function init() {
    const header = document.getElementById("site-header");
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("nav-menu");
    if (!header || !toggle || !menu) return;

    const mobile = window.matchMedia("(max-width: 800px)");
    let menuOpen = false;
    let keyboardInput = false;
    let previousY = window.scrollY;
    let travel = 0;
    let scrollPending = false;

    function showHeader() {
      header.classList.remove("is-hidden");
      travel = 0;
    }

    function setMenu(open, restoreFocus = false) {
      menuOpen = mobile.matches && open;
      toggle.setAttribute("aria-expanded", String(menuOpen));
      toggle.innerHTML = menuOpen ? 'Close <span aria-hidden="true">−</span>' : 'Menu <span aria-hidden="true">+</span>';
      menu.classList.toggle("is-open", menuOpen);
      // display:none also removes closed links from the tab order on older browsers.
      menu.inert = mobile.matches && !menuOpen;
      if (mobile.matches) menu.setAttribute("aria-hidden", String(!menuOpen));
      else menu.removeAttribute("aria-hidden");
      showHeader();
      if (restoreFocus) toggle.focus();
    }

    toggle.addEventListener("click", () => setMenu(!menuOpen));
    document.addEventListener("keydown", (event) => {
      keyboardInput = true;
      if (event.key === "Tab") showHeader();
      if (event.key === "Escape" && menuOpen) setMenu(false, true);
    });
    document.addEventListener("pointerdown", () => { keyboardInput = false; }, { passive: true });
    header.addEventListener("focusin", showHeader);
    document.addEventListener("click", (event) => {
      if (menuOpen && !header.contains(event.target)) setMenu(false);
    });

    function syncHeaderHeight() {
      document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");
    }
    function resizeNavigation() {
      setMenu(false);
      syncHeaderHeight();
      previousY = Math.max(0, window.scrollY);
    }
    // Safari versions predating MediaQueryList.addEventListener still enhance safely.
    if (mobile.addEventListener) mobile.addEventListener("change", resizeNavigation);
    else mobile.addListener(resizeNavigation);
    window.addEventListener("resize", syncHeaderHeight, { passive: true });
    window.addEventListener("pageshow", resizeNavigation);
    if ("ResizeObserver" in window) new ResizeObserver(syncHeaderHeight).observe(header);

    function updateHeader() {
      scrollPending = false;
      // Clamp rubber-band overscroll so iOS bounce cannot invert the direction.
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const y = Math.max(0, Math.min(window.scrollY, maxY));
      const delta = y - previousY;
      previousY = y;
      if (menuOpen || y < Math.max(160, header.offsetHeight * 1.5) ||
          (keyboardInput && header.contains(document.activeElement))) {
        showHeader();
        return;
      }
      if (!delta) return;
      if ((delta > 0 && travel < 0) || (delta < 0 && travel > 0)) travel = 0;
      travel += delta;
      if (travel > 12) header.classList.add("is-hidden");
      if (travel < -8) showHeader();
    }
    window.addEventListener("scroll", () => {
      if (scrollPending) return;
      scrollPending = true;
      window.requestAnimationFrame(updateHeader);
    }, { passive: true });

    menu.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        const wasOpen = menuOpen;
        setMenu(false);
        if (wasOpen) {
          const target = document.getElementById(link.hash.slice(1));
          if (target) {
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
          }
        }
      });
    });
    menu.querySelector("a[download]").addEventListener("click", () => setMenu(false, true));

    // Native links remain usable when this deferred script is delayed or blocked.
    setMenu(false);
    menu.classList.add("is-enhanced");
    header.classList.add("is-enhanced");
    toggle.hidden = false;
    syncHeaderHeight();

    if ("IntersectionObserver" in window) {
      const links = menu.querySelectorAll(".nav-link");
      const observer = new IntersectionObserver((entries) => {
        const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!current) return;
        let id = current.target.id;
        if (id === "more-projects") id = "projects";
        links.forEach((link) => {
          if (link.hash === "#" + id) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
      document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
    }
    const year = document.getElementById("copyright-year");
    if (year) year.textContent = String(new Date().getFullYear());
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
