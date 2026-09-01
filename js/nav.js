/* =====================================================================
   NAV BAR — scroll background swap, mobile menu toggle, scroll progress
   ===================================================================== */

function wireNav() {
  var nav = $("#siteNav");
  var onScroll = function () {
    nav.classList.toggle("scrolled", window.scrollY > 80);
    updateScrollProgress();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var toggle = $("#navToggle");
  var links = $("#navLinks");
  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  $all("#navLinks a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function updateScrollProgress() {
  var doc = document.documentElement;
  var scrollTop = doc.scrollTop || document.body.scrollTop;
  var scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
  var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  $("#scrollProgress").style.width = pct + "%";
}
