/* =====================================================================
   POPULATE TEXT + IMAGE SOURCES FROM CONFIG
   Every name, date, story paragraph and image path on the page comes
   from js/config.js — this file just pours it into the HTML.
   ===================================================================== */

function populateContent() {
  var s = cfg.story;

  // Hero
  $("#heroGroomName").textContent = cfg.groomName;
  $("#heroBrideName").textContent = cfg.brideName;
  $("#heroTagline").textContent = s.heroTagline;
  $("#heroDate").textContent = cfg.weddingDateDisplay;
  $("#navBrand").setAttribute("aria-label", cfg.groomName + " and " + cfg.brideName);

  // Intro
  $("#introHeading").innerHTML = s.introHeading;
  $("#introText").textContent = s.introText;

  // First meeting
  $("#firstMeetingText").textContent = s.firstMeetingText;

  // Yes
  $("#yesHeading").textContent = s.yesHeading;
  $("#yesBig").childNodes[0].nodeValue = s.yesBigText + " ";
  $("#yesSubheading").textContent = s.yesSubheading;

  // Careers
  $("#careersHeading").innerHTML = s.careersHeading;
  $("#groomCardName").textContent = cfg.groomName;
  $("#groomCardRole").textContent = cfg.groomProfession;
  $("#brideCardName").textContent = cfg.brideName;
  $("#brideCardRole").textContent = cfg.brideProfession;

  // Wedding section
  $("#weddingNames").textContent = cfg.groomName + " & " + cfg.brideName;
  $("#venueName").textContent = cfg.venueName;
  $("#venueAddress").textContent = cfg.venueAddress;
  $("#mapsBtn").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(cfg.mapsQuery);

  // Final section
  $("#finalCoupleName").innerHTML = cfg.groomName + ' <span class="heart-inline">&amp;</span> ' + cfg.brideName;
  $("#finalDate").textContent = cfg.weddingDateDisplay;
  $("#footerNames").textContent = cfg.groomName + " & " + cfg.brideName;
  $("#footerDate").textContent = cfg.weddingDateDisplay;

  // Images
  $("#heroPhoto").src = cfg.images.coupleHero;
  $("#finalPhoto").src = cfg.images.coupleHero;
  $("#firstMeetingPhoto").src = cfg.images.firstMeeting;

  document.title = cfg.groomName + " & " + cfg.brideName + " — Wedding";

  // Music
  if (cfg.music.src) $("#bgMusic").src = cfg.music.src;
}
