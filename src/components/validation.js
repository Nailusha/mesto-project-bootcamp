// Модуль валидации весь, как он дан в вашем тренажере и как мы его писали на вебинаре.

export const userForm = document.forms.profilecontent;
const userNameFiled = userForm.formprofile;

// показывает ошибку
function showError(input, errorMessage) {
  const spanId = input.id + '-error';
  const errorField = document.getElementById(spanId);
  errorField.textContent = errorMessage;
}

// скрывает ошибку
function hideError(input) {
  const spanId = input.id + '-error';
  const errorField = document.getElementById(spanId);
  errorField.textContent = '';
}

// проверка валидации
function checkValid(input) {
  if (input.validity.valid) {
    hideError(input);
  } else {
    showError(input, input.validationMessage);
  }
}

const inputList = document.querySelectorAll('.form__input');

inputList.forEach(input => {
  input.addEventListener('input', () => checkValid(input));
});

function handleSubmitButton(evt) {
  evt.preventDefault();
}

export { handleSubmitButton };