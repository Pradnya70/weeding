/* =====================================================================
   DECORATIVE PARTICLES — floating petals (global) and the golden
   sparkle particles behind the YES moment (Section 5)
   ===================================================================== */

function spawnPetals() {
  if (prefersReducedMotion) return;
  var layer = $("#petalsLayer");
  var glyphs = ["❀", "✿", "❁", "❦"];
  var count = window.innerWidth < 700 ? 8 : 14;
  for (var i = 0; i < count; i++) {
    var petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    petal.style.fontSize = 12 + Math.random() * 14 + "px";
    petal.style.animationDuration = 14 + Math.random() * 14 + "s";
    petal.style.animationDelay = -(Math.random() * 20) + "s";
    layer.appendChild(petal);
  }
}

function spawnYesParticles() {
  if (prefersReducedMotion) return;
  var layer = $("#yesParticles");
  var count = 22;
  for (var i = 0; i < count; i++) {
    var spark = document.createElement("span");
    spark.className = "yes-spark";
    spark.style.left = Math.random() * 100 + "%";
    spark.style.top = 30 + Math.random() * 50 + "%";
    spark.style.animationDelay = -(Math.random() * 3.2) + "s";
    spark.style.animationDuration = 2.6 + Math.random() * 2 + "s";
    layer.appendChild(spark);
  }
}
