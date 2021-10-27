// How scrolling affects the navigation & Mobile navigation

// Variables
const navigation = document.querySelector('#navigation');
const desktopNavigation = document.querySelector('.desktop__nav');
const mobileNavigation = document.querySelector('.mobile__nav');
const toggle = mobileNavigation.querySelector('.toggle');
const breakpoint = 685;
const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
const body = document.body;

// Flags
let lastScroll = window.scrollY;

// Functions
const scrolling = () => {
  window.scrollY > lastScroll //? scrolling down
    ? (navigation.style.transform = 'translateY(-100%)')
    : (navigation.style.transform = 'translateY(0)');
  lastScroll = window.scrollY;
};
const displayAndHide = (display, hide) => {
  display.style.display = 'flex';
  hide.style.display = 'none';
};
const mobileCheck = () => {
  mediaQuery.matches
    ? displayAndHide(mobileNavigation, desktopNavigation)
    : displayAndHide(desktopNavigation, mobileNavigation);
};

// EventListeners
window.addEventListener('scroll', scrolling);
window.addEventListener('resize', mobileCheck);
document.addEventListener('DOMContentLoaded', mobileCheck);
toggle.addEventListener('click', () => {
  mobileNavigation.classList.toggle('opened');
  mobileNavigation.classList.contains('opened')
    ? (body.style.overflow = 'hidden')
    : (body.style.overflow = 'initial');
});
