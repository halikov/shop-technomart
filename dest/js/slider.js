const slider = (slider, dotSelector, sliderItem, activeClass) => {
  const header = document.querySelector(slider),
    dots = document.querySelectorAll(dotSelector),
    slides = document.querySelectorAll(sliderItem);

  function hideSlide() {
    slides.forEach(slide => {
      slide.style.display = 'none';
    });

    dots.forEach(dot => {
      dot.classList.remove(activeClass);
    });
  }

  function showSlide(i = 0) {
    slides[i].style.display = 'flex';
    dots[i].classList.add(activeClass);
  }

  hideSlide();
  showSlide();

  header.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains(dotSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(dotSelector.replace(/\./, ""))) {
      dots.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideSlide();
          showSlide(i);
        }
      });
    }
  });
};

slider('.slider', '.slider__dot-indicator', '.slider__item', 'slider__dot-indicator--checked');
slider('.slider', '.slider__arrow', '.slider__item')
