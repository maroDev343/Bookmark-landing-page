// Loads Content on scroll

// Variables
const sectionHero = document.querySelector('#hero');
const sectionFeatures = document.querySelector('#features');

const isMobile = window.outerWidth <= 685 ? 2.25 : 1.25;
// Functions
const checkSlide = () => {
  const animations = document.querySelectorAll('.hidden');
  let appearPos;
  animations.forEach(animation => {
    if (animation.id == 'footer') appearPos = -isMobile;
    else appearPos = isMobile;
    // All math needed
    const slideInAt = window.scrollY + window.innerHeight - animation.offsetHeight / appearPos;
    const imageBottom = animation.offsetTop + animation.offsetHeight;
    const isHalfShown = slideInAt > animation.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast && !animation.classList.contains('show-on-load')) {
      animation.classList.remove('hidden');
    }
    //! Glitched on smaller screen sizes (overflowing of x axis of html after translating on x axis)
    if (animation.id == 'sign-up' && !animation.classList.contains('hidden')) {
      setTimeout(() => {
        document.documentElement.style.width = '99%';
        setTimeout(() => {
          document.documentElement.style.width = '100%';
        }, 250);
      }, 1000);
    }
    //!
  });
};
// EventListeners
window.addEventListener('scroll', checkSlide);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.show-on-load').classList.remove('hidden');
  window.scrollTo(0, 0);
});
