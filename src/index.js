// index.js
import './pages/index.css'; // добавьте импорт главного файла стилей

import { openPopup, closePopup, handleEsc, handleOverlay } from "./components/modal.js";
import { createCardElement } from "./components/card.js";
import { disableButton } from "./components/validation.js";

export const popupOpenImage = document.querySelector('.popup__open-image');

const userForm = document.forms.profilecontent;

const cardWindow = document.querySelector('.popup__card'); // окно создания карточки
const profileWindow = document.querySelector('.popup__profile'); // окно профиля

const popupGlobal = document.querySelectorAll('.popup');
const popupContainer = document.querySelectorAll('.popup__container');

const profileCloseBtn = profileWindow.querySelector('.popup__button-closed');
const cardCloseBtn = cardWindow.querySelector('.popup__button-closed');
const imageCloseBtn = popupOpenImage.querySelector('.popup__button-closed');

const buttonEdit = document.querySelector('.profile__button-edit'); // кнопка редактирования профиля
const buttonAdd = document.querySelector('.profile__button-add'); //кнопка создания карточек

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const profileCreateButton = document.querySelector('.profile-create'); // кнопка сохранить
const formProfile = document.querySelector('.form__profile');
const profileFormTitle = document.querySelector('.form__profile-input-title');
const profileFormSubtitle = document.querySelector('.form__profile-input-subtitle');

const cardForm = document.querySelector('.form__card');
const cardTitleInput = document.querySelector('.form__card-input-title');
const cardSubtitleInput = document.querySelector('.form__card-input-subtitle');
const cardCreateButton = document.querySelector('.card-create');

const container = document.querySelector('.elements__list');

const arkhyzImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
const chelyabinskImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
const ivanovoImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
const kamchatkaImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
const kholmogorskyImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
const baikalImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';

const cardsImage = [
{
name: 'Архыз',
link: arkhyzImage
},
{
name: 'Челябинская область',
link: chelyabinskImage
},
{
name: 'Иваново',
link: ivanovoImage
},
{
name: 'Камчатка',
link: kamchatkaImage
},
{
name: 'Холмогорский район',
link: kholmogorskyImage
},
{
name: 'Байкал',
link: baikalImage
}
];

// функция для редактирования данных профиля
function handleFormSubmit(evt) {
evt.preventDefault();

profileTitle.textContent = profileFormTitle.value;
profileSubtitle.textContent = profileFormSubtitle.value; 

closePopup(profileWindow);
};

// функция создания новой карточки
function handleNewCard(evt) {
  evt.preventDefault();

  const newCardData = {
    name: cardTitleInput.value,
    link: cardSubtitleInput.value
  };

  const newCard = createCardElement(newCardData); // Создаем карточку напрямую
  container.prepend(newCard);
  cardForm.reset();

  disableButton(evt.submitter);

  closePopup(cardWindow);
}

// добавление карточки в начало
cardsImage.forEach(function (cardData) {
  const newCard = createCardElement(cardData); // Создаем карточку напрямую
  container.prepend(newCard);
});

// слушатели на открытие окон
buttonEdit.addEventListener('click', () => openPopup(profileWindow));
buttonAdd.addEventListener('click', () => openPopup(cardWindow));

// слушатели нажатия на крестик
document.querySelectorAll('.popup__button-closed').forEach(button => {
  const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
}); 
// слушатели на закрытие попапа при клике на OVERLAY
popupGlobal.forEach(popup => {
popup.addEventListener('click', handleOverlay);
});

// слушатель на закрытие попапа при нажатии ESC
document.addEventListener('keydown', handleEsc);

// слушатель на отправку формы профиля
userForm.addEventListener('submit', handleFormSubmit);

// слушатель на отправку формы карточки
cardForm.addEventListener('submit', handleNewCard);
