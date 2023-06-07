const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  // Hide all slides
  for (let slide of slides) {
    slide.style.display = "none";
  }
  // Show the current slide
  slides[n].style.display = "flex";
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    nextSlide();
  } else if (event.code === "ArrowLeft") {
    previousSlide();
  }
});

showSlide(currentSlide);
