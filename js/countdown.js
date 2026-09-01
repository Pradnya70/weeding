/* =====================================================================
   WEDDING COUNTDOWN TIMER (Section 8)
   ===================================================================== */

function startCountdown() {
  var target = new Date(cfg.weddingDateISO).getTime();
  function tick() {
    var now = Date.now();
    var diff = Math.max(0, target - now);

    var days = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var minutes = Math.floor((diff % 3600000) / 60000);
    var seconds = Math.floor((diff % 60000) / 1000);

    $("#cdDays").textContent = String(days).padStart(2, "0");
    $("#cdHours").textContent = String(hours).padStart(2, "0");
    $("#cdMinutes").textContent = String(minutes).padStart(2, "0");
    $("#cdSeconds").textContent = String(seconds).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}
