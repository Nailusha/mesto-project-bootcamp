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

const profileAvatar = document.querySelector('.profile__avatar');
const inputAvatarSrc = document.querySelector('.form__input-avatar');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const inputProfileTitle = document.querySelector('.form__profile-input-title');
const inputProfileSubtitle = document.querySelector('.form__profile-input-subtitle');

const cardForm = document.querySelector('.form__card');
const cardTitleInput = document.querySelector('.form__card-input-title');
const cardSubtitleInput = document.querySelector('.form__card-input-subtitle');

const fotoForm = document.querySelector('.form__avatar');

const container = document.querySelector('.elements__list');

// функция для редактирования данных профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  
  setUserInformation(inputProfileSubtitle.value, inputProfileTitle.value)
  .then((res) => {
    profileSubtitle.textContent = res.about;
    profileTitle.textContent = res.name;
    

  closePopup(profileWindow);
  })

  .catch(e => console.log(e))
    .finally(() => {
        evt.submitter.textContent = 'Сохранить'
    })
};

// функция создания новой карточки
function handleNewCard(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';

  const cardData = {
    name: cardTitleInput.value,
    link: cardSubtitleInput.value,
    owner: {
      _id: userId
    }
  };

  setCard(cardData.name, cardData.link)
    .then(res => {
      const newCardElement = createCardElement(res, userId);
      container.prepend(newCardElement);
      cardForm.reset();

      disableButton(evt.submitter);

      closePopup(cardWindow);
    })
    .catch(e => console.log(e))

    .finally(() => {
        evt.submitter.textContent = 'Сохранить'
    })
}


//обновление аватар
function handleFotoCard(evt) {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...'

  setUserAvatar(inputAvatarSrc.value)
  .then((res) => {
    profileAvatar.src = res.avatar;
    closePopup(avatarWindow);            
})
  .catch(e => console.log(e))

  .finally(() => {
      evt.submitter.textContent = 'Сохранить'
    })
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
