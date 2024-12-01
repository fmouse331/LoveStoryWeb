// script.js
document.getElementById("showImageButton").addEventListener("click", function() {
  const image = document.getElementById("cuteCoupleImage");
  image.classList.remove("hidden");
  image.style.display = "block";
});
