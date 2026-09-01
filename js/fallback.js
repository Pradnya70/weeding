/* =====================================================================
   IMAGE FALLBACKS
   If an <img> fails to load (real photo not added yet), show the
   elegant CSS placeholder that sits right next to it instead.
   ===================================================================== */

function wireImageFallback(imgId, fallbackId) {
  var img = document.getElementById(imgId);
  var fallback = document.getElementById(fallbackId);
  if (!img || !fallback) return;
  var showFallback = function () {
    img.style.display = "none";
    fallback.classList.add("show");
  };
  if (img.complete && img.naturalWidth === 0) {
    showFallback();
  } else {
    img.addEventListener("error", showFallback);
  }
}

function wireAllFallbacks() {
  wireImageFallback("heroPhoto", "heroFallback");
  wireImageFallback("finalPhoto", "finalFallback");
  wireImageFallback("firstMeetingPhoto", "firstMeetingFallback");
  wireImageFallback("letterPhoto", "letterFallback");
  wireImageFallback("groomPhoto", "groomFallback");
  wireImageFallback("bridePhoto", "brideFallback");
  wireImageFallback("venuePhoto", "venueFallback");
  wireImageFallback("brideFamilyPhoto", "brideFamilyFallback");
  wireImageFallback("groomFamilyPhoto", "groomFamilyFallback");
}
