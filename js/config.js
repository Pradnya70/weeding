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

  brideName: "Pradnya",
  brideFullName: "Pradnya Kulkarni",
  brideProfession: "Software Developer",

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
      name: "Engagement & Sangeet",
      date: "28th November 2026",
      time: "5:00 PM onwards",
      venue: "Sonai Palace Function Hall, Ahmedpur",
      icon: "engagement"
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
    heroTagline: "Together with our families, we invite you to celebrate our wedding.",

    introHeading: "It Began With a Simple Introduction",
    introText: "Ours is a traditional arranged marriage. Our families introduced us, and over a few thoughtful visits, two families came together as one.",

    firstMeetingText: "Vaibhav and his parents visited Pradnya's home to meet her family over a cup of tea — the first step of our journey together.",

    yesHeading: "And Then Came the Answer",
    yesBigText: "YES",
    yesSubheading: "After two family visits, Pradnya said yes, and the marriage was formally fixed soon after.",

    careersHeading: "The Couple"
  },

  // ---------------------------------------------------------------
  // TIMELINE
  // ---------------------------------------------------------------
  timeline: [
    { period: "The First Visit", title: "Vaibhav Visits Pradnya's Home", text: "Vaibhav and his parents meet Pradnya and her family.", icon: "family" },
    { period: "The Return Visit", title: "Pradnya Visits Vaibhav's Home", text: "Pradnya and her family visit Vaibhav's home in return.", icon: "home" },
    { period: "The Answer", title: "The Yes", text: "Pradnya says yes, and the marriage is formally fixed.", icon: "heart" },
    { period: "28 Nov 2026", title: "Engagement, Sangeet & Haldi", text: "Pre-wedding celebrations at Sonai Palace, Ahmedpur.", icon: "hands" },
    { period: "The Big Day", title: "The Wedding", text: "Vaibhav and Pradnya are married in the presence of family and friends.", icon: "rings" }
  ],

  // ---------------------------------------------------------------
  // IMAGES — replace files inside /assets using these exact names
  // ---------------------------------------------------------------
  images: {
    coupleHero: "assets/hero-couple.jpg",
    firstMeeting: "assets/first-meeting.jpg",
    // Only photos not already shown elsewhere on the page.
    // Add more as { src: "assets/your-photo.jpg", category: "Moments" }
    gallery: [
      { src: "assets/gallery-01.jpg", category: "Moments" }
    ]
  },

  // ---------------------------------------------------------------
  // MUSIC
  // ---------------------------------------------------------------
  music: {
    // Add a song to /assets and put its path here, e.g. "assets/wedding-music.mp3"
    src: "",
    label: "Music"
  },

  // ---------------------------------------------------------------
  // WEDDING TEASER REEL — vertical 9:16 video (1080x1920)
  // ---------------------------------------------------------------
  reels: [
    { src: "assets/wedding-trailer.mp4", title: "Wedding Teaser" },
    { src: "assets/reel-cafe.mp4", title: "Coffee Date" },
    // wide: true = landscape film, shown full-width with normal video controls
    { src: "assets/film-pune-city.mp4", title: "Pune Diaries — A Walk Through the City's Iconic Spots", wide: true, poster: "assets/film-pune-city-poster.jpg" }
  ],

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
