/* =====================================================================
   LETTER MODAL (Section 4)
   ===================================================================== */

function wireLetterModal() {
  var open = function () {
    $("#letterModal").classList.add("open");
    document.body.style.overflow = "hidden";
  };
  var close = function () {
    $("#letterModal").classList.remove("open");
    document.body.style.overflow = "";
  };
  $("#openLetterBtn").addEventListener("click", open);
  $("#letterPreview").addEventListener("click", open);
  $("#letterPreview").addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });
  $("#closeLetterBtn").addEventListener("click", close);
  $("#letterModalBackdrop").addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && $("#letterModal").classList.contains("open")) close();
  });
}
