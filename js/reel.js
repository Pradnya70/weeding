/* =====================================================================
   PRE-WEDDING REELS — muted autoplay while on screen, tap for sound.
   Only one reel plays with sound at a time.
   ===================================================================== */

function wireReel() {
  var row = $("#reelRow");
  if (!row) return;

  row.innerHTML = cfg.reels.map(function (r) {
    // Landscape films get native controls so guests can scrub and unmute.
    if (r.wide) {
      return (
        '<div class="reel-wide">' +
          '<video class="reel-video" src="' + r.src + '" muted loop playsinline controls preload="metadata"' + (r.poster ? ' poster="' + r.poster + '"' : "") + ' aria-label="' + r.title + '"></video>' +
          '<p class="reel-title">' + r.title + "</p>" +
        "</div>"
      );
    }
    return (
      '<div class="reel-frame">' +
        '<video class="reel-video" src="' + r.src + '" muted loop playsinline preload="metadata" aria-label="' + r.title + '"></video>' +
        '<button class="reel-sound" type="button" aria-pressed="false"></button>' +
        '<p class="reel-title">' + r.title + "</p>" +
      "</div>"
    );
  }).join("");

  var frames = $all(".reel-frame", row);

  // When the film is unmuted, silence the reels (and vice versa below).
  $all(".reel-wide video", row).forEach(function (film) {
    film.addEventListener("volumechange", function () {
      if (film.muted) return;
      frames.forEach(function (f) {
        var v = $("video", f);
        v.muted = true;
        setLabel(v, $(".reel-sound", f));
      });
    });
  });

  var setLabel = function (video, btn) {
    btn.textContent = video.muted ? "🔇 Tap for sound" : "🔊 Sound on";
    btn.setAttribute("aria-pressed", String(!video.muted));
  };

  frames.forEach(function (frame) {
    var video = $("video", frame);
    var btn = $(".reel-sound", frame);

    var toggleSound = function () {
      var turningOn = video.muted;
      // Mute every other reel so their audio never overlaps.
      frames.forEach(function (f) {
        var v = $("video", f);
        v.muted = true;
        setLabel(v, $(".reel-sound", f));
      });
      if (turningOn) {
        $all(".reel-wide video", row).forEach(function (film) { film.muted = true; });
        var music = $("#bgMusic");
        if (!music.paused) $("#musicControl").click();
        video.muted = false;
        video.play();
      }
      setLabel(video, btn);
    };

    btn.addEventListener("click", toggleSound);
    video.addEventListener("click", toggleSound);
    setLabel(video, btn);
  });

  // Only play reels while they're visible, to save data and battery.
  var videos = $all("video", row);
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.play().catch(function () {});
        else e.target.pause();
      });
    }, { threshold: 0.4 });
    videos.forEach(function (v) { io.observe(v); });
  } else {
    videos.forEach(function (v) { v.play().catch(function () {}); });
  }
}
