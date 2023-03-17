// Навешиваем событие появления формы
let buttonEdit = document.querySelector('.profile .profile__button-edit');
buttonEdit.addEventListener('click', function () {
    document.querySelector('.popup').classList.add('popup_opened');});


// Навешиваем событие закрытия формы, если ничего менять не нужно
let buttonCloseIcon = document.querySelector('.button__close-icon');
buttonCloseIcon.addEventListener('click', function () {
    document.querySelector('.popup').classList.remove('popup_opened');});


// Навешиваем событие отправки формы как при помощи Enter,
// так и при помощи кнопки
let form = document.querySelector('.form')
form.addEventListener('submit', function(event) {
    event.preventDefault()

    // Берем новые значения из формы
    // Выбираем элемент, который нужно изменить
    // Меняем текстовое содержимое элемента
    document.querySelector('.profile__title').textContent = document.querySelector('.form__input_title').placeholder;
    document.querySelector('.profile__subtitle').textContent = document.querySelector('.form__input_subtitle').placeholder;

    // Закрываем форму
    document.querySelector('.popup').classList.remove('popup_opened');   
});