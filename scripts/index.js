const popupProfile = document.querySelector('.popup__profile'); // Окно редактирования
const popupCard = document.querySelector ('.popup__card'); // Окно добавления

const popup = document.querySelector('.popup'); // Само окно

const formProfile = document.querySelector('.form__profile');
const formCard = document.querySelector('.form__card');

const openPopupButton = document.querySelectorAll('.popup__opened'); // Кнопки для показа окна
const closePopupButton = document.querySelector('.popup__button-closed'); // Кнопка для скрытия окна

const buttonEdit = document.querySelector('.profile__button-edit'); // Кнопка редактирования
const buttonAdd = document.querySelector('.profile__button-add'); // Кнопка добавления
const buttonDelete = document.querySelector('.element__button-delete'); //Кнопка удаления
const buttonLike = document.querySelector('.element__button-like'); //Кнопка лайка

// Навешиваем событие появления формы
buttonEdit.addEventListener('click', function () {
    popup.classList.add('popup__opened');
});
buttonAdd.addEventListener('click', function () {
    popup.classList.add('popup__opened');
});

// Навешиваем событие закрытия формы, если ничего менять не нужно
closePopupButton.addEventListener('click', function () {
    popup.classList.remove('popup__opened');
});

// Закрываем форму
    popup.classList.remove('popup__opened');   





