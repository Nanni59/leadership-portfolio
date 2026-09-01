/* ============================================================
   Leadership Portfolio — progressive enhancement only.

   Two jobs:
     1. mark the current section in the numbered index as you scroll
     2. show a word counter for §09, but only at ?dev

   No entrance animations. The two signature interactions - the
   overlapping cover cluster and the numbered index - are CSS hover
   and this scroll marker, nothing more.

   This file never renders content. If it fails to load, every word
   is still on the page and every nav link still works as an anchor.
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

      // Keep the active numeral centred in the horizontal mobile bar without
      // asking the browser to scroll the link itself into view. scrollIntoView
      // can also move the document vertically and interrupt anchor jumps.
      if (navList && navList.scrollWidth > navList.clientWidth + 1) {
        // offsetLeft is measured from the link's offsetParent, which is the
        // bar rather than the scrolling list, so it carries the list's own
        // inset. Measure inside the scroller instead.
        var offsetInList =
          current.link.getBoundingClientRect().left -
          navList.getBoundingClientRect().left +
          navList.scrollLeft;

        var left =
          offsetInList + current.link.offsetWidth / 2 - navList.clientWidth / 2;

        navList.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
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

    // the pillar labels are structural, not part of the word count
    var clone = source.cloneNode(true);
    Array.prototype.forEach.call(clone.querySelectorAll(".pillar"), function (p) {
      p.parentNode.removeChild(p);
    });

    var text = clone.textContent || "";
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
