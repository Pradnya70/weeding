/* =====================================================================
   WEDDING WEBSITE CONFIGURATION
   ---------------------------------------------------------------------
   Edit everything about the site from this ONE file:
   names, dates, venue, story text, images, and music.

   To replace a photo: put your real image inside /assets and update
   its path in the "images" section below (e.g. images.coupleHero) to
   point at it — couple-hero.svg and venue.svg are illustrated dummy
   placeholders, swap them for your own couple.jpg / venue.jpg photos
   whenever they're ready.
   ===================================================================== */

var WEDDING_CONFIG = {

  // ---------------------------------------------------------------
  // THE COUPLE
  // ---------------------------------------------------------------
  groomName: "Vaibhav",
  groomFullName: "Vaibhav Deshmukh",
  groomProfession: "SBI Circle Based Officer",
  groomAbout: "Patient, sincere and warm — Vaibhav believes that trust is built quietly, one honest conversation at a time.",

  brideName: "Pradnya",
  brideFullName: "Pradnya Kulkarni",
  brideProfession: "Software Developer",
  brideAbout: "Thoughtful and independent — Pradnya believes a lifelong decision deserves time, patience and understanding.",

  coupleHashtag: "#VaibhavWedsPradnya",

  // ---------------------------------------------------------------
  // WEDDING DETAILS
  // ---------------------------------------------------------------
  // Use a real future date in the format: "YYYY-MM-DDTHH:mm:ss"
  weddingDateISO: "2026-11-29T12:45:00",
  weddingDateDisplay: "29th November 2026",

  venueName: "Sonai Palace Function Hall",
  venueAddress: "Ahmedpur, Maharashtra 413515",
  city: "Ahmedpur",
  state: "Maharashtra",
  mapsQuery: "Sonai Palace Function Hall, Ahmedpur 413515",

  events: [
    {
      name: "Engagement",
      date: "28th November 2026",
      time: "5:00 PM",
      venue: "Sonai Palace Function Hall, Ahmedpur",
      icon: "engagement"
    },
    {
      name: "Sangeet",
      date: "28th November 2026",
      time: "7:00 PM",
      venue: "Sonai Palace Function Hall, Ahmedpur",
      icon: "sangeet"
    },
    {
      name: "Haldi",
      date: "28th November 2026",
      time: "9:00 PM",
      venue: "Sonai Palace Function Hall, Ahmedpur",
      icon: "haldi"
    },
    {
      name: "Wedding",
      date: "29th November 2026",
      time: "12:45 PM",
      venue: "Sonai Palace Function Hall, Ahmedpur",
      icon: "wedding"
    }
  ],

  // ---------------------------------------------------------------
  // STORY TEXT — the heart of the site
  // ---------------------------------------------------------------
  story: {
    heroTagline: "Two families. Two journeys. One beautiful beginning.",

    introHeading: "Some Stories Begin With Love.<br>Ours Began With a Simple Introduction.",
    introText: "Theirs was a traditional arranged marriage. Two families, guided by trust and respect, came together and introduced Vaibhav and Pradnya to one another. There was no long romantic history — just two families visiting each other, taking their time, and slowly, quietly discovering the beginning of forever.",
    introHighlight: "That 5-minute conversation changed everything.",

    firstMeetingHeading: "The First Step",
    firstMeetingText: "It began with Vaibhav, along with his parents, visiting Pradnya's home to see her and meet her family — the traditional first step of an arranged introduction. It was a simple, respectful meeting, with both families sharing a cup of tea and getting to know one another for the very first time.",
    firstMeetingCaption: "Every forever starts with a single visit.",



    yesHeading: "Then Came The Answer...",
    yesBigText: "YES",
    yesSubheading: "After two family visits, the answer everyone was waiting for finally came — and it was YES. A few days later, the marriage was formally fixed.",

    careersHeading: "Different journeys.<br>Different dreams.<br>One future.",

    finalLines: [
      "From a simple first visit...",
      "to a visit returned with warmth...",
      "to one beautiful YES...",
      "our forever begins."
    ]
  },

  // ---------------------------------------------------------------
  // TIMELINE
  // ---------------------------------------------------------------
  timeline: [
    { period: "The First Step", title: "Vaibhav Visits Pradnya's Home", text: "Vaibhav, along with his parents, visits Pradnya's home to see her and meet her family — the traditional first step.", icon: "family" },
    { period: "The Return Visit", title: "Pradnya Visits Vaibhav's Home", text: "Pradnya, with her family, visits Vaibhav's home in return, observing his family's values and everyday warmth.", icon: "home" },
    { period: "The Answer", title: "The YES", text: "Pradnya says yes, and a few days later the marriage is formally fixed.", icon: "heart" },
    { period: "28 Nov 2026", title: "Engagement, Sangeet & Haldi", text: "Both families come together at Sonai Palace, Ahmedpur, to celebrate the engagement, dance the night away at sangeet, and bless the couple with haldi.", icon: "hands" },
    { period: "The Big Day", title: "The Wedding Day", text: "Vaibhav & Pradnya begin their forever, surrounded by everyone they love.", icon: "rings" }
  ],

  // ---------------------------------------------------------------
  // FAMILY
  // ---------------------------------------------------------------
  family: {
    brideFamilyIntro: "Raised with warmth, independence and strong values.",
    groomFamilyIntro: "A close-knit family built on patience, respect and togetherness."
  },

  // ---------------------------------------------------------------
  // IMAGES — replace files inside /assets using these exact names
  // ---------------------------------------------------------------
  images: {
    coupleHero: "assets/couple-hero.svg",
    firstMeeting: "assets/first-meeting.jpg",
    groom: "assets/groom.jpg",
    bride: "assets/bride.jpg",
    familyBride: "assets/family-bride.jpg",
    familyGroom: "assets/family-groom.jpg",
    venue: "assets/venue.svg",
    gallery: [
      { src: "assets/gallery-01.jpg", category: "Our Beginning" },
      { src: "assets/gallery-02.jpg", category: "Family" },
      { src: "assets/gallery-03.jpg", category: "Memories" },
      { src: "assets/gallery-04.jpg", category: "Wedding Moments" },
      { src: "assets/gallery-05.jpg", category: "Family" },
      { src: "assets/gallery-06.jpg", category: "Memories" },
      { src: "assets/prewedding-01.jpg", category: "Pre-Wedding" },
      { src: "assets/prewedding-02.jpg", category: "Pre-Wedding" },
      { src: "assets/prewedding-03.jpg", category: "Pre-Wedding" },
      { src: "assets/prewedding-04.jpg", category: "Pre-Wedding" },
      { src: "assets/prewedding-05.jpg", category: "Pre-Wedding" },
      { src: "assets/prewedding-06.jpg", category: "Pre-Wedding" }
    ]
  },

  // ---------------------------------------------------------------
  // MUSIC
  // ---------------------------------------------------------------
  music: {
    src: "assets/wedding-music.mp3",
    label: "Music"
  },

  // ---------------------------------------------------------------
  // RSVP
  // ---------------------------------------------------------------
  rsvp: {
    // Optional: a Formspree / backend endpoint. Leave empty to store
    // responses locally in the browser only (no server required).
    endpoint: ""
  }
};

// Make the final timeline entry mirror the configured wedding date so
// it never needs to be edited in two places.
WEDDING_CONFIG.timeline[WEDDING_CONFIG.timeline.length - 1].period = WEDDING_CONFIG.weddingDateDisplay;
