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

formCard.addEventListener('submit', function(event) {
    event.preventDefault()

    // Берем новые значения из формы
    // Выбираем элемент, который нужно изменить
    // Меняем текстовое содержимое элемента
    document.querySelector('.form__card-input-title').textContent = document.querySelector.value;
    document.querySelector('.form__card-input-subtitle').textContent = document.querySelector.value;

    // Закрываем форму
    popup.classList.remove('popup__opened');   
});

