/* =====================================================================
   WEDDING EVENT CARDS — Haldi / Mehendi / Wedding / Reception (Section 8)
   ===================================================================== */

function renderEventCards() {
  var wrap = $("#eventCards");
  wrap.innerHTML = cfg.events.map(function (ev) {
    return (
      '<div class="event-card">' +
        '<div class="event-icon" data-icon="' + ev.icon + '"></div>' +
        '<h3 class="event-name">' + ev.name + "</h3>" +
        '<p class="event-detail">' + ev.date + "</p>" +
        '<p class="event-detail">' + ev.time + "</p>" +
        '<p class="event-detail">' + ev.venue + "</p>" +
      "</div>"
    );
  }).join("");
}
