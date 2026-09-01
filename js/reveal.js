/* =====================================================================
   SCROLL REVEAL ANIMATIONS
   Fades/slides each .reveal-up / .reveal-left / .reveal-right / timeline
   item / final line into place the first time it enters the viewport.
   ===================================================================== */

function wireScrollReveal() {
  var targets = $all(".reveal-up, .reveal-left, .reveal-right, .tl-item, .final-lines p");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in-view"); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  targets.forEach(function (el) { observer.observe(el); });
}
