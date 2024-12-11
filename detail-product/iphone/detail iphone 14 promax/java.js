
let currentIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function currentSlide(index) {
  currentIndex = index - 1;
  showSlide(currentIndex);
}

// Auto Slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % dots.length;
  showSlide(currentIndex);
}, 5000);

showSlide(currentIndex);