/* =====================================================================
   INIT — runs once the DOM is ready, wiring up everything defined
   in the other js/ files (loaded before this one in index.html).
   ===================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  populateContent();
  renderTimeline();
  renderEventCards();
  renderGallery();
  injectIcons();
  wireAllFallbacks();
  wireLetterModal();
  wireLightbox();
  startCountdown();
  wireNav();
  wireScrollReveal();
  wireMusic();
  wireRSVP();
  spawnPetals();
  spawnYesParticles();
});
