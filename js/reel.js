/* =====================================================================
   WEDDING TEASER REEL — muted autoplay while on screen, tap for sound
   ===================================================================== */

function wireReel() {
  var video = $("#reelVideo");
  var btn = $("#reelSound");
  if (!video) return;

  video.src = cfg.reel.src;

  var setLabel = function () {
    btn.textContent = video.muted ? "🔇 Tap for sound" : "🔊 Sound on";
    btn.setAttribute("aria-pressed", String(!video.muted));
  };

  var toggleSound = function () {
    video.muted = !video.muted;
    if (!video.muted) {
      // Don't play the reel's audio over the background music.
      var music = $("#bgMusic");
      if (!music.paused) $("#musicControl").click();
      video.play();
    }
    setLabel();
  };

  btn.addEventListener("click", toggleSound);
  video.addEventListener("click", toggleSound);

  // Only play while the reel is visible, to save data and battery.
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) video.play().catch(function () {});
        else video.pause();
      });
    }, { threshold: 0.4 }).observe(video);
  } else {
    video.play().catch(function () {});
  }

  setLabel();
}
