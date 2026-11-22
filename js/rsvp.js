/* =====================================================================
   RSVP FORM (Section 11)
   Sends each response to cfg.rsvp.endpoint (a Google Apps Script web
   app that appends a row to a Google Sheet — see tools/rsvp-google-sheet.gs).
   Also keeps a local copy in localStorage as a backup.
   ===================================================================== */

function wireRSVP() {
  var form = $("#rsvpForm");
  var submit = $(".rsvp-submit", form);
  var success = $("#rsvpSuccess");

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

    var thankYou = function () {
      success.textContent = data.attending === "yes"
        ? "Thank you! We can't wait to celebrate with you."
        : "Thank you for letting us know — you'll be missed.";
      form.reset();
      submit.disabled = false;
      submit.textContent = "Send RSVP";
    };

    if (!cfg.rsvp.endpoint) { thankYou(); return; }

    submit.disabled = true;
    submit.textContent = "Sending…";
    success.textContent = "";

    // text/plain + no-cors avoids the CORS preflight Google Apps Script
    // can't answer; the response is opaque, so a resolved fetch = sent.
    fetch(cfg.rsvp.endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(data)
    }).then(thankYou).catch(function () {
      success.textContent = "Couldn't send — please check your internet connection and try again.";
      submit.disabled = false;
      submit.textContent = "Send RSVP";
    });
  });
}
