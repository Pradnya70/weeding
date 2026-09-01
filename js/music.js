/* =====================================================================
   BACKGROUND MUSIC PLAYER — corner control, no autoplay
   ===================================================================== */

function wireMusic() {
  var btn = $("#musicControl");
  var audio = $("#bgMusic");
  var hasSource = true;

  audio.addEventListener("error", function () { hasSource = false; });

  btn.addEventListener("click", function () {
    if (!hasSource) {
      $(".music-label", btn).textContent = "No track yet";
      setTimeout(function () { $(".music-label", btn).textContent = cfg.music.label; }, 2000);
      return;
    }
    if (audio.paused) {
      audio.play().then(function () {
        btn.classList.add("playing");
        btn.setAttribute("aria-pressed", "true");
      }).catch(function () { hasSource = false; });
    } else {
      audio.pause();
      btn.classList.remove("playing");
      btn.setAttribute("aria-pressed", "false");
    }
  });
}
