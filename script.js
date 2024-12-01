// Music Control
const musicToggle = document.getElementById("music-toggle");
const backgroundMusic = document.getElementById("background-music");
let isPlaying = true;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    backgroundMusic.pause();
    musicToggle.textContent = "Play Music 🎶";
  } else {
    backgroundMusic.play();
    musicToggle.textContent = "Pause Music 🎶";
  }
  isPlaying = !isPlaying;
});

// Scroll Animation for Photo Gallery
const photoItems = document.querySelectorAll(".photo-item");

const handleScroll = () => {
  const triggerPoint = window.innerHeight * 0.8; // 80% of the viewport height
  photoItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerPoint) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", handleScroll);
