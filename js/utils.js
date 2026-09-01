/* =====================================================================
   SHARED HELPERS — loaded once, used by every other script.
   ===================================================================== */

var cfg = window.WEDDING_CONFIG;
var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $all(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }
