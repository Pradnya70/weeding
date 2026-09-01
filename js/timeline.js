/* =====================================================================
   VERTICAL STORY TIMELINE (Section 7)
   ===================================================================== */

function renderTimeline() {
  var wrap = $("#verticalTimeline");
  wrap.innerHTML = cfg.timeline.map(function (item) {
    return (
      '<div class="tl-item">' +
        '<div class="tl-dot" data-icon="' + item.icon + '"></div>' +
        '<p class="tl-period">' + item.period + "</p>" +
        '<h3 class="tl-title">' + item.title + "</h3>" +
        '<p class="tl-text">' + item.text + "</p>" +
      "</div>"
    );
  }).join("");
}
