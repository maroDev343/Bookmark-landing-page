// FAQ

// Variables
const questionContainers = document.querySelectorAll('.question__container');

// EventListeners
questionContainers.forEach(questionContainer =>
  questionContainer.addEventListener('click', () => questionContainer.classList.toggle('active'))
);
