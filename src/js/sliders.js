// Sliders

// Imports
import * as data from './slideContent/slideContent.js';

// Variables
const sliders = document.querySelectorAll('.slider');
const slide = document.querySelector('.slide');
const image = slide.querySelector('.image');
const shape = slide.querySelector('.shape');
const content = slide.querySelector('.content');

// Functions
const animationOut = () => {
  shape.style.marginLeft = '-500px';
  shape.style.opacity = 0;
  setTimeout(() => {
    image.style.transform = 'translateX(-50%)';
    image.style.opacity = 0;
    content.style.transform = 'translateX(50%)';
    content.style.opacity = 0;
  }, 250);
};
const animationIn = () => {
  shape.style.marginLeft = 0;
  shape.style.opacity = 1;
  setTimeout(() => {
    image.style.transform = 'translateX(0%)';
    image.style.opacity = 1;
    content.style.transform = 'translateX(0%)';
    content.style.opacity = 1;
    //! Glitched on smaller screen sizes (overflowing of x axis of html after translating on x axis)
    document.documentElement.style.width = '99%';
    setTimeout(() => {
      document.documentElement.style.width = '100%';
    }, 250);
    //!
  }, 250);
};
const displayInfo = slider => {
  const dataset = slider.dataset.for;
  const newSlide = eval(data.default[dataset]);
  animationOut();
  setTimeout(() => {
    slide.querySelector('img').src = newSlide.url;
    slide.querySelector('h2').textContent = newSlide.heading;
    slide.querySelector('p').textContent = newSlide.paragraph;
    setTimeout(animationIn, 400);
  }, 750);
};

// EventListeners
sliders.forEach(slider => {
  slider.addEventListener('click', () => {
    // checks if the slider is not active
    if (!slider.classList.contains('active')) {
      sliders.forEach(slider => slider.classList.remove('active'));
      slider.classList.add('active');
      displayInfo(slider);
    }
  });
});
