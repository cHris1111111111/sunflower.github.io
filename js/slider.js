document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  // Cambio automático cada 5 segundos
  setInterval(nextSlide, 5000);

  // Navegar con puntitos
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });
});
