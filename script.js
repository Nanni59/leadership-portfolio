/* ============================================================
   Leadership Portfolio — progressive enhancement only.

   This file does two things:
     1. marks the current section in the index as you scroll
     2. shows a word counter for §09, but only at ?dev

   It never renders content. If this file fails to load, every
   word of the portfolio is still on the page and every nav link
   still works as a plain anchor.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. Current section in the index ---------- */

  var links = Array.prototype.slice.call(
    document.querySelectorAll("[data-nav-link]")
  );

  var items = links
    .map(function (link) {
      var id = (link.getAttribute("href") || "").slice(1);
      var target = id ? document.getElementById(id) : null;
      return target ? { link: link, target: target } : null;
    })
    .filter(Boolean);

  if (items.length) {
    var navList = document.querySelector(".nav__list");
    var current = null;
    var ticking = false;

    function setCurrent(entry) {
      if (entry === current) return;

      if (current) current.link.removeAttribute("aria-current");
      current = entry;
      if (!current) return;

      current.link.setAttribute("aria-current", "true");

      // keep the active numeral in view in the horizontal mobile bar
      if (navList && navList.scrollWidth > navList.clientWidth + 1) {
        current.link.scrollIntoView({ block: "nearest", inline: "center" });
      }
    }

    function update() {
      ticking = false;

      // a section is current once its heading passes the upper third
      var line = window.innerHeight * 0.35;
      var found = null;

      for (var i = 0; i < items.length; i++) {
        if (items[i].target.getBoundingClientRect().top <= line) {
          found = items[i];
        }
      }

      // at the very bottom, the last section wins even if it is short
      var atBottom =
        window.innerHeight + window.pageYOffset >=
        document.body.scrollHeight - 2;
      if (atBottom) found = items[items.length - 1];

      setCurrent(found);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  /* ---------- 2. §09 word counter, dev only ---------- */
  /* Shown only when the URL carries ?dev, so it cannot appear in the
     graded or employer-facing version. Try: index.html?dev */

  var isDev = /(^|[?&])dev(=|&|$)/.test(window.location.search);
  var meter = document.querySelector("[data-wordcount]");
  var source = document.querySelector("[data-wordcount-source]");

  if (isDev && meter && source) {
    var out = meter.querySelector("[data-wordcount-value]");

    var text = source.textContent || "";
    // placeholders like [paragraph] are not writing, so they do not count
    var words = text
      .replace(/\[[^\]]*\]/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

    if (out) out.textContent = String(words);
    meter.hidden = false;

    if (words < 250 || words > 500) meter.classList.add("is-out");
  }
})();
