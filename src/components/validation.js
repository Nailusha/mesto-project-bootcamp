const validitySettings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit-button',
  inputErrorClass: 'form__input-text-invalid'
  };
  
  // показывает ошибку
  function showError(input, settings, errorMessage) {
  const spanId = `error-${input.id}`;
  const errorField = document.getElementById(spanId);
  input.classList.add(settings.inputErrorClass);
  errorField.textContent = errorMessage;
  }
  
  // скрывает ошибку
  function hideError(input, settings) {
  const spanId = `error-${input.id}`;
  const errorField = document.getElementById(spanId);
  input.classList.remove(settings.inputErrorClass);
  errorField.textContent = '';
  }
  
  // проверка валидации
  function checkValid(input, settings) {
  if (input.validity.valid) {
  hideError(input, settings);
  } else {
  showError(input, settings, input.validationMessage);
  }
  }
  
  // проверка валидности всей формы
  function checkFormValidity(form, submitButton) {
  if (form.checkValidity()) {
  enableButton(submitButton);
  } else {
  disableButton(submitButton);
  }
  }
  
  // включение кнопки
  function enableButton(submitButton) {
  submitButton.disabled = false;
  }
  
  // выключение кнопки
  function disableButton(submitButton) {
  submitButton.disabled = true;
  }
  
  function setEventListeners(form, settings) {
  const inputList = form.querySelectorAll(settings.inputSelector);
  const submitButton = form.querySelector(settings.buttonSelector);
  
  checkFormValidity(form, submitButton);
  
  inputList.forEach(input => {
  input.addEventListener('input', () => {
  checkValid(input, settings);
  checkFormValidity(form, submitButton);
  });
  });
  }
  
  function enableValidation(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach(form => {
  setEventListeners(form, settings);
  });
  }
  
  function handleButtonDisable(event) {
  disableButton(event.target);
  }
  
  enableValidation(validitySettings);
  
  export { handleButtonDisable };