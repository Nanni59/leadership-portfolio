/* ============================================================
   Leadership Portfolio — progressive enhancement only.

   This file does three things:
     1. marks the current section in the index as you scroll
     2. runs restrained entrance reveals
     3. shows a word counter for §09, but only at ?dev

   It never renders content. If this file fails to load, every word
   of the portfolio is still on the page, every nav link still works
   as a plain anchor, and nothing is left invisible - the reveal
   styles are gated behind the .js class added below.
   ============================================================ */

(function () {
  "use strict";

  var root = document.documentElement;
  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 0. Enable JS-only styling ---------- */

  root.classList.add("js");

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

  /* ---------- 2. Entrance reveals ---------- */
  /* 16px of movement over 380ms, once, never repeated on scroll back. */

  var revealables = document.querySelectorAll(".reveal");

  if (!revealables.length) {
    // nothing to do
  } else if (reduced || !("IntersectionObserver" in window)) {
    // no motion wanted, or no support: show everything immediately
    Array.prototype.forEach.call(revealables, function (el) {
      el.classList.add("is-in");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    Array.prototype.forEach.call(revealables, function (el) {
      observer.observe(el);
    });

    // Failsafe. Content must never be permanently invisible on a graded
    // page, so after 3 seconds everything is shown unconditionally,
    // whatever the observer did or did not do. In normal use the observer
    // has already revealed these and this changes nothing.
    window.setTimeout(function () {
      Array.prototype.forEach.call(revealables, function (el) {
        el.classList.add("is-in");
      });
      observer.disconnect();
    }, 3000);
  }

  /* ---------- 3. §09 word counter, dev only ---------- */
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
