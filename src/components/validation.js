// Модуль валидации весь, как он дан в вашем тренажере и как мы его писали на вебинаре.

export const userForm = document.forms.profilecontent;
const userNameFiled = userForm.formprofile;

//функция enableValidation ответственная за включение валидации всех форм
const validityOptions = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__submit-button',
  inputErrorClass: 'form__input_error',
};

// показывает ошибку
function showError(input, settings, errorText) {
  const spanId = `error-${input.id}`;
  const errorField = document.getElementById(spanId);
  errorField.textContent = errorText;
  input.classList.add(settings.inputErrorClass);
}

// скрывает ошибку
function hideError(input, settings) {
  const spanId = `error-${input.id}`;
  const errorField = document.getElementById(spanId);
  errorField.textContent = "";
  input.classList.remove(settings.inputErrorClass);
}

// проверка валидации
function handleFormValidation(input, settings) {
  if (input.validity.valid) {
    hideError(input, settings);
  } else {
    showError(input, settings, input.validationMessage);
  }
}

//функция включает и отключает кнопку сабмит события на основание валидности полей
function buttonStatus(form, submitButton) {
  if (form.checkValidity()) {
    // метод проверки валидности всей формы
    enableButton(submitButton);
  } else {
    disableButton(submitButton);
  }
}

function enableButton(submitButton) {
  submitButton.disabled = false;
}

function disableButton(submitButton) {
  submitButton.disabled = true;
}

function setEventListeners(form, settings) {
  const buttonSubmit = form.querySelector(settings.buttonSelector);
  const inputList = form.querySelectorAll(settings.inputSelector);
  buttonStatus(form, buttonSubmit);
  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      handleFormValidation(input, settings);
      buttonStatus(form, buttonSubmit);
    });
  });
}

//функция перебора и подстановки форм в функци
function enableValidation(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach((form) => {
    setEventListeners(form, settings);
  });
}

//блокирует кнопку пори сабмите формы
function handleButtonDisable(event) {
  disableButton(event.submitter);
}

//передаем настройки переменных функции валидации, чтобы работаь с переменными как с объекстами
enableValidation(validityOptions);


export { handleButtonDisable };