import { openPopup, closePopup, handleEsc, handleOverlay } from "./components/modal.js";
import { createCardElement, handleOpenImage, likeImage, deleteImage,} from "./components/card.js";

const cardWindow = document.querySelector('.popup__card'); // окно создания карточки
const profileWindow = document.querySelector('.popup__profile'); // окно профиля

const popupGlobal = document.querySelectorAll('.popup');
const popupContainer = document.querySelectorAll('.popup__container');
const popupOpenImage = document.querySelector('.popup__open-image');

const profileCloseBtn = profileWindow.querySelector('.popup__button-closed');
const cardCloseBtn = cardWindow.querySelector('.popup__button-closed');
const imageCloseBtn = popupOpenImage.querySelector('.popup__button-closed');

const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__title');

const buttonEdit = document.querySelector('.profile__button-edit'); // кнопка редактирования профиля
const buttonAdd = document.querySelector('.profile__button-add'); //кнопка создания карточек

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const profileCreateButton = document.querySelector('.profile-create'); // кнопка сохранить
const formCard = document.querySelector('.form__profile');
const profileFormTitle = document.querySelector('.form__profile-input-title');
const profileFormSubtitle = document.querySelector('.form__profile-input-subtitle');

const cardForm = document.querySelector('.form__card');
const cardTitleInput = document.querySelector('.form__card-input-title');
const cardSubtitleInput = document.querySelector('.form__card-input-subtitle');
const cardCreateButton = document.querySelector('.card-create');

const cardTemplate = document.getElementById('card-template').content.querySelector('.element'); // шаблон

const container = document.querySelector('.elements__list');
const cardsImage = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



// функция для редактирования данных профиля
function handleFormSubmit(evt) {
  evt.preventDefault();

  const titleValue = userForm.elements.profileFormTitle.value;
  const subtitleValue = userForm.elements.profileFormSubtitle.value;

  profileTitle.textContent = titleValue;
  profileSubtitle.textContent = subtitleValue;

  closePopup(profileWindow);
}

function createCard(name) {
  const newCard = createCardElement(name, handleNewCard)
  return newCard;

}

// функция создания новой карточки
function handleNewCard(evt) {
  evt.preventDefault();

  const newCardData = {
    name: cardTitleInput.value,
    link: cardSubtitleInput.value
  };

  const newCard = createCard(newCardData);
  container.prepend(newCard);
  cardForm.reset();

  closePopup(cardWindow);
}

cardsImage.forEach(function(cardData) {
  const newCard = createCard(cardData);
  container.prepend(newCard);
});

  // слушатели на открытие окон
  buttonEdit.addEventListener('click', () =>
  openPopup(profileWindow)
  );
  
  buttonAdd.addEventListener('click', () =>
  openPopup(cardWindow)
  );
  

// слушатели нажатия на крестик
profileCloseBtn.addEventListener('click', () =>
  closePopup(profileWindow)
);

cardCloseBtn.addEventListener('click', () =>
  closePopup(cardWindow)
);

imageCloseBtn.addEventListener('click', () =>
  closePopup(popupOpenImage)
);

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

