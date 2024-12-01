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

// Photo Modal
const photos = document.querySelectorAll(".photo-item img");
const modal = document.getElementById("photo-modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");
const modalClose = document.getElementById("modal-close");

photos.forEach(photo => {
  photo.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = photo.src;
    modalCaption.textContent = photo.alt;
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
