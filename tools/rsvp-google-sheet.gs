/* =====================================================================
   RSVP → GOOGLE SHEET (Google Apps Script)
   ---------------------------------------------------------------------
   Paste this whole file into Extensions → Apps Script of your RSVP
   Google Sheet, then Deploy → New deployment → Web app
   (Execute as: Me, Who has access: Anyone). Copy the web app URL into
   rsvp.endpoint in js/config.js.
   ===================================================================== */

var HEADERS = ["Submitted At", "Name", "Phone", "Guests", "Attending", "Message"];

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  // Add the header row the first time.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(data.submittedAt || Date.now()),
    String(data.name || "").slice(0, 200),
    // Leading apostrophe keeps "+91…" as text instead of a formula/number.
    "'" + String(data.phone || "").slice(0, 30),
    Number(data.guests) || 1,
    data.attending === "yes" ? "Yes" : "No",
    String(data.message || "").slice(0, 1000)
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
