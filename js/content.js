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
  $("#firstMeetingCaption").textContent = s.firstMeetingCaption;

  // Waiting
  $("#waitingHeading").textContent = s.waitingHeading;
  $("#waitingSubheading").textContent = s.waitingSubheading;
  $("#waitingText").textContent = s.waitingText;
  $("#waitingQuote").textContent = '"' + s.waitingQuote + '"';

  // Letter
  $("#letterHeading").textContent = s.letterHeading;
  $("#letterText").textContent = s.letterText;
  $("#openLetterBtn").textContent = s.letterButtonText;
  $("#letterBody").textContent = s.letterBody;

  // Yes
  $("#yesHeading").textContent = s.yesHeading;
  $("#yesBig").childNodes[0].nodeValue = s.yesBigText + " ";
  $("#yesSubheading").textContent = s.yesSubheading;

  // Careers
  $("#careersHeading").innerHTML = s.careersHeading;
  $("#groomCardName").textContent = cfg.groomName;
  $("#groomCardRole").textContent = cfg.groomProfession;
  $("#groomCardAbout").textContent = cfg.groomAbout;
  $("#brideCardName").textContent = cfg.brideName;
  $("#brideCardRole").textContent = cfg.brideProfession;
  $("#brideCardAbout").textContent = cfg.brideAbout;

  // Wedding section
  $("#weddingNames").textContent = cfg.groomName + " & " + cfg.brideName;
  $("#weddingDateText").textContent = cfg.weddingDateDisplay;
  $("#weddingVenueText").textContent = cfg.venueName;
  $("#weddingLocationText").textContent = cfg.city + ", " + cfg.state;
  $("#mapsBtn").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(cfg.mapsQuery);

  // Family
  $("#brideFamilyIntro").textContent = cfg.family.brideFamilyIntro;
  $("#groomFamilyIntro").textContent = cfg.family.groomFamilyIntro;

  // Final section
  $("#finalCoupleName").innerHTML = cfg.groomName + ' <span class="heart-inline">♥</span> ' + cfg.brideName;
  $("#finalDate").textContent = cfg.weddingDateDisplay;
  $("#footerNames").textContent = cfg.groomName + " & " + cfg.brideName;
  $("#footerDate").textContent = cfg.weddingDateDisplay;

  // Images
  $("#heroPhoto").src = cfg.images.coupleHero;
  $("#finalPhoto").src = cfg.images.coupleHero;
  $("#firstMeetingPhoto").src = cfg.images.firstMeeting;
  $("#letterPhoto").src = cfg.images.groomLetter;
  $("#groomPhoto").src = cfg.images.groom;
  $("#bridePhoto").src = cfg.images.bride;
  $("#venuePhoto").src = cfg.images.venue;
  $("#brideFamilyPhoto").src = cfg.images.familyBride;
  $("#groomFamilyPhoto").src = cfg.images.familyGroom;

  // Final lines
  $("#finalLines").innerHTML = s.finalLines.map(function (line) {
    return "<p>" + line + "</p>";
  }).join("");

  document.title = cfg.groomName + " & " + cfg.brideName + " — Forever Begins Here";

  // Music
  $("#bgMusic").src = cfg.music.src;
}
