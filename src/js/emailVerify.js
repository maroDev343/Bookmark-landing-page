// Email Verification

// Variables
const inputContainer = document.querySelector('.input__container');
const emailInput = document.querySelector('.email__input');
const errorMessage = document.querySelector('.error__message');

// Functions
const displayError = message => {
  emailInput.value = '';
  inputContainer.classList.add('error__occurred');
  errorMessage.textContent = message;
};
const hideError = () => {
  inputContainer.classList.remove('error__occurred');
  errorMessage.textContent = '';
};
const checkValidity = input => {
  const value = input.value;
  const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  if (value.match(emailRegex)) {
    hideError();
  } else {
    displayError(`Whoops, make sure it's an email`);
  }
};

// EventListeners
inputContainer.addEventListener('submit', e => {
  e.preventDefault();
  checkValidity(emailInput);
});
