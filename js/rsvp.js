/* =====================================================================
   RSVP FORM (Section 11)
   Always keeps a local copy (localStorage) so nothing is lost even
   without a backend; optionally also POSTs to cfg.rsvp.endpoint.
   ===================================================================== */

function wireRSVP() {
  var form = $("#rsvpForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = {
      name: $("#rsvpName").value.trim(),
      phone: $("#rsvpPhone").value.trim(),
      guests: $("#rsvpGuests").value,
      attending: form.querySelector('input[name="attending"]:checked').value,
      message: $("#rsvpMessage").value.trim(),
      submittedAt: new Date().toISOString()
    };

    try {
      var existing = JSON.parse(localStorage.getItem("wedding_rsvps") || "[]");
      existing.push(data);
      localStorage.setItem("wedding_rsvps", JSON.stringify(existing));
    } catch (err) { /* localStorage unavailable — safe to ignore */ }

    if (cfg.rsvp.endpoint) {
      fetch(cfg.rsvp.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).catch(function () { /* network issue — local copy already saved */ });
    }

    var success = $("#rsvpSuccess");
    success.textContent = data.attending === "yes"
      ? "Thank you! We can't wait to celebrate with you. ❤️"
      : "Thank you for letting us know — you'll be missed!";
    form.reset();
  });
}
