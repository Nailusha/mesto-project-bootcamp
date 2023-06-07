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

// открытие попапа
function openPopup(popup) {
  popup.classList.add('popup__opened');
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup__opened');
}

// функция для редактирования данных профиля
function handleFormSubmit(evt) {
  evt.preventDefault();

  const titleValue = profileFormTitle.value;
  const subtitleValue = profileFormSubtitle.value;

  profileTitle.textContent = titleValue;
  profileSubtitle.textContent = subtitleValue;

  closePopup(profileWindow);
}

const userForm = document.forms.profilecontent;
const userNameFiled = userForm.formprofile;

// показывает ошибку
function showErorr(input, errorMessange) {
  const spanId = `error-${input.id}`;
  const errorField = document.getElementById(spanId);
  errorField.textContent = errorMessange;
}

//скрывает ошибку
function hideError(input) {
    const spanId = `error-${input.id}`;
    const errorField = document.getElementById(spanId);
    errorField.textContent = '';
}

// проверка валидации
function checkValid(input) {
  if (input.validity.valid) {
    hideError(input);
  } else {
    showErorr(input, input.validationMessage);
  }
}

const inputList = document.querySelectorAll('.form__input');
inputList.forEach(input => {
  input.addEventListener('input', () => checkValid(input));
});

function handleSubmitButton(evt) {
  evt.preventDefault();
}

userForm.addEventListener('submit', handleSubmitButton);


// функция которая будет размещать карточки
function createCardElement(cardData) {
  const cardClone = cardTemplate.cloneNode(true); //клон с помощью template
  const cardImage = cardClone.querySelector('.element__list-item'); //карточка фото
  const cardTitle = cardClone.querySelector('.element__title'); //описание фото
  const likeButton = cardClone.querySelector('.element__button-like'); //кнопка лайка
  const deleteButton = cardClone.querySelector('.element__button-delete'); //кнопка удаления
  
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  //слушатель на открытие изображения
  cardImage.addEventListener('click', function() {
    handleOpenImage(cardClone, popupOpenImage);
  });

  //слушатель на лайк
  likeButton.addEventListener('click', likeImage);

  //слушатель на удаление
  deleteButton.addEventListener('click', function() {
    deleteImage(cardClone);
  });

  return cardClone;
}

cardsImage.forEach(function(cardData) {
  const newCard = createCardElement(cardData);
  container.prepend(newCard);
});

// функция создания новой карточки
function handleNewCard(evt) {
  evt.preventDefault();
  
  const newCardData = {
    name: cardTitleInput.value,
    link: cardSubtitleInput.value
  };
  
  const newCard = createCardElement(newCardData);
  container.prepend(newCard);
  cardForm.reset();

  closePopup(cardWindow);
}

//функция на открытие изобрыжения
function handleOpenImage(container, popupOpenImage) {
  popupImage.src = container.querySelector('.element__list-item').src;
  popupImageTitle.textContent = container.querySelector('.element__title').text;
  
  openPopup(popupOpenImage);
}

// функция закрытия OVERLAY
function handleOverlay(evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(evt.target);
  };
}

// функция закрытия ESC
function handleEsc(evt) {
  if( evt.key === 'Escape') {
    closePopup(popupOpenImage);
  };
}

//функция на лайк
function likeImage(evt) {
  evt.target.classList.toggle('element__button-like_active');
}

//функция на удаление
function deleteImage(deliteelement) {
  deliteelement.remove();
}

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

// слушатели на кнопки
profileCreateButton.addEventListener('click', closePopup);
cardCreateButton.addEventListener('click', closePopup);

cardWindow.addEventListener('submit', handleNewCard);
profileWindow.addEventListener('submit', handleFormSubmit);

// слушатель на весь документ для работы Escape
document.addEventListener('keydown', handleEsc);

// слушатель для закрытия OVERLAY
popupOpenImage.addEventListener('click', handleOverlay); 








