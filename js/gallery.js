/* =====================================================================
   PHOTO GALLERY + LIGHTBOX (Section 9)
   ===================================================================== */

var galleryImages = [];
var lightboxIndex = 0;

function renderGallery() {
  galleryImages = cfg.images.gallery;
  var categories = ["All"].concat(Array.from(new Set(galleryImages.map(function (g) { return g.category; }))));

  $("#galleryFilters").innerHTML = categories.map(function (cat, i) {
    return '<button class="filter-btn' + (i === 0 ? " active" : "") + '" data-filter="' + cat + '">' + cat + "</button>";
  }).join("");

  var grid = $("#galleryGrid");

  function draw(filter) {
    var items = galleryImages
      .map(function (img, idx) { return Object.assign({}, img, { idx: idx }); })
      .filter(function (img) { return filter === "All" || img.category === filter; });

    grid.innerHTML = items.map(function (img) {
      return (
        '<div class="gallery-item" data-index="' + img.idx + '">' +
          '<img src="' + img.src + '" alt="' + img.category + '" loading="lazy">' +
          '<div class="photo-fallback">' +
            '<div class="fallback-icon" data-icon="heart"></div>' +
          "</div>" +
          '<div class="gallery-cat">' + img.category + "</div>" +
        "</div>"
      );
    }).join("");

    // wire the missing-photo fallback for each gallery image
    $all(".gallery-item", grid).forEach(function (el) {
      var img = $("img", el);
      var fb = $(".photo-fallback", el);
      img.addEventListener("error", function () {
        img.style.display = "none";
        fb.classList.add("show");
      });
    });

    injectIcons();
    $all(".gallery-item", grid).forEach(function (el) {
      el.addEventListener("click", function () { openLightbox(parseInt(el.dataset.index, 10)); });
    });
  }

  draw("All");

  $all(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      $all(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      draw(btn.dataset.filter);
    });
  });
}

function openLightbox(index) {
  lightboxIndex = index;
  updateLightboxImage();
  $("#lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  $("#lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
function updateLightboxImage() {
  var item = galleryImages[lightboxIndex];
  $("#lightboxImage").src = item.src;
  $("#lightboxImage").alt = item.category;
}
function wireLightbox() {
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxBackdrop").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", function () {
    lightboxIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  });
  $("#lightboxNext").addEventListener("click", function () {
    lightboxIndex = (lightboxIndex + 1) % galleryImages.length;
    updateLightboxImage();
  });
  document.addEventListener("keydown", function (e) {
    if (!$("#lightbox").classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") $("#lightboxPrev").click();
    if (e.key === "ArrowRight") $("#lightboxNext").click();
  });
}
