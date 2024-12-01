// Music Control
const musicToggle = document.getElementById("music-toggle");
const backgroundMusic = document.getElementById("background-music");
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    backgroundMusic.pause();
    musicToggle.textContent = "Play Music";
  } else {
    backgroundMusic.play();
    musicToggle.textContent = "Pause Music";
  }
  isPlaying = !isPlaying;
});

// Tap to See Cute Couple
const showImageButton = document.getElementById("showImageButton");
const cuteCoupleImage = document.getElementById("cuteCoupleImage");

showImageButton.addEventListener("click", () => {
  cuteCoupleImage.classList.remove("hidden");
});
