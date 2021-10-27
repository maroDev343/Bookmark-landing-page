// Loads Content on scroll

// Variables
const sectionHero = document.querySelector('#hero');
const sectionFeatures = document.querySelector('#features');

// Functions
const checkSlide = () => {
  const animations = document.querySelectorAll('.hidden');
  let appearPos;
  animations.forEach(animation => {
    if (animation.id == 'footer') appearPos = -1.25;
    else appearPos = 1.25;

    // All math needed
    const slideInAt = window.scrollY + window.innerHeight - animation.offsetHeight / appearPos;
    const imageBottom = animation.offsetTop + animation.offsetHeight;
    const isHalfShown = slideInAt > animation.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      animation.classList.remove('hidden');
    }
  });
};

// EventListeners
window.addEventListener('scroll', checkSlide);

document.addEventListener('DOMContentLoaded', () => window.scrollTo(0, 0));
