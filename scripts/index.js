let popupContainer = document.querySelector('.popup__container'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButton = document.querySelectorAll('.popup__opened'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__button-closed'); // Кнопка для скрытия окна
let buttonEdit = document.querySelector('.profile .profile__button-edit');
let form = document.querySelector('.form');

// Навешиваем событие появления формы
buttonEdit.addEventListener('click', function () {
    document.querySelector('.popup').classList.add('popup__opened');});


// Навешиваем событие закрытия формы, если ничего менять не нужно
closePopupButton.addEventListener('click', function () {
    document.querySelector('.popup').classList.remove('popup__opened');});


// Навешиваем событие отправки формы как при помощи Enter,
// так и при помощи кнопки
form.addEventListener('submit', function(event) {
    event.preventDefault()

    // Берем новые значения из формы
    // Выбираем элемент, который нужно изменить
    // Меняем текстовое содержимое элемента
    document.querySelector('.profile__title').textContent = document.querySelector('.form__input-title').placeholder;
    document.querySelector('.profile__subtitle').textContent = document.querySelector('.form__input-subtitle').placeholder;

    // Закрываем форму
    document.querySelector('.popup').classList.remove('popup__opened');   
});