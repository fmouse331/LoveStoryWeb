// Music Toggle
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');

musicToggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = 'Pause Music 🎶';
  } else {
    music.pause();
    musicToggle.textContent = 'Play Music 🎶';
  }
});

// Select elements
const showImageButton = document.getElementById('showImageButton');
const cuteCoupleImage = document.getElementById('cuteCoupleImage');

// Add event listener to the button
showImageButton.addEventListener('click', () => {
  // Toggle the 'hidden' class
  cuteCoupleImage.classList.toggle('hidden');
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

// Attach scroll event listener to window
window.addEventListener("scroll", handleScroll);

// Run the scroll animation once on page load
document.addEventListener("DOMContentLoaded", handleScroll);
