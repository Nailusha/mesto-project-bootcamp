// index.js
import './pages/index.css'; // добавьте импорт главного файла стилей

import { openPopup, closePopup, handleEsc, handleOverlay } from "./components/modal.js";
import { createCardElement } from "./components/card.js";
import { disableButton } from "./components/validation.js";

import { getCards } from "./components/api.js"; //функция отвечает только за отправку/получения данных
import { setCard } from "./components/api.js"; //запрос на добавление карточек
import { getUserInformation } from "./components/api.js"; //информация о пользователе c сервера
import { setUserInformation } from "./components/api.js";//отправка информация о пользователе на сервер
import { setUserAvatar } from "./components/api.js"; //запрос на загрузку аватара на сервер

export const popupOpenImage = document.querySelector('.popup__open-image');

export let userId;
const userForm = document.forms.profilecontent;

const cardWindow = document.querySelector('.popup__card'); // окно создания карточки
const profileWindow = document.querySelector('.popup__profile'); // окно профиля
const avatarWindow = document.querySelector('.popup__avatar'); // окно аватарки

const popupGlobal = document.querySelectorAll('.popup');

const buttonAvat = document.querySelector('.profile__avatar-button');
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

const fotoForm = document.querySelector('.form__avatar');

const container = document.querySelector('.elements__list');

const arkhyzImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
const chelyabinskImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
const ivanovoImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
const kamchatkaImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
const kholmogorskyImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
const baikalImage = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';

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
  const newCardElement = createCardElement(cardData, userId);
  setCard(newCardElement.value)
    .then(res => {
      const newCard = (res);
      container.append(newCard)
      cardForm.reset();

      disableButton(evt.submitter);

      closePopup(cardWindow);
    })
    .catch((error) => {
      console.log(error);
    });
}

//обновление аватар
function handleFotoCard() {
  const input = document.getElementById('profileavatar');
  const image = document.querySelector('.profile__avatar');

  input.addEventListener('input', function () {
    const url = input.value;
    // Проверяем, является ли введенное значение URL-адресом изображения
    if (disableButton(url)) {
      image.src = url; // Изменяем src изображения на введенный URL
    }
  });
}

Promise.all([getCards(), getUserInformation()])
  .then(([allCards, userData]) => {
    userId = userData._id;
    profileTitle.textContent = userData.name;
    profileSubtitle.textContent = userData.about;
    avatarWindow.src = userData.avatar;

    allCards.forEach(cardData => {
      const newCardElement = createCardElement(cardData, userId);
      container.append(newCardElement);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// слушатели на открытие окон
buttonEdit.addEventListener('click', () => openPopup(profileWindow));
buttonAdd.addEventListener('click', () => openPopup(cardWindow));
buttonAvat.addEventListener('click', () => openPopup(avatarWindow));

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

// слушатель на сабмит форм
userForm.addEventListener('submit', handleFormSubmit);
cardForm.addEventListener('submit', handleNewCard);
fotoForm.addEventListener('submit', handleFotoCard);
