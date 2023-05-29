const add = document.querySelector('.popup__card'); // окно создания карточки
const edit = document.querySelector('.popup__profile'); // окно профиля

const popupGlobal = document.querySelectorAll('.popup');

const buttonEdit = document.querySelector('.profile__button-edit'); // кнопка редактирования профиля
const buttonAdd = document.querySelector('.profile__button-add'); //кнопка создания карточек

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileEdit = document.querySelector('.profile-create');

const formCard = document.querySelector('.form__profile');
const profileFormTitle = document.querySelector('.form__profile-input-title');
const profileFormSubtitle = document.querySelector('.form__profile-input-subtitle');

const cardTemplate = document.getElementById('card-template').content.querySelector('.element');

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

let closePopupButton = []; // кнопка для закрытия окна
closePopupButton = document.querySelectorAll('.popup__button-closed'); // получаем массив всех кнопок closed

closePopupButton.forEach((element) => { // перебериаем все кнопки закрыть

  element.addEventListener('click', function () { // навешиваем на кнопку событие клика

    if(edit.classList.contains('popup__opened')){ // проверяем, если попап edit открыт
        edit.classList.remove('popup__opened'); // закрываем 
      }
    if(add.classList.contains('popup__opened')){ // проверяем, add если попап открыт
        add.classList.remove('popup__opened'); // закрываем
      }
  });

});

buttonEdit.addEventListener('click', function () {
    edit.classList.add('popup__opened');

});
buttonAdd.addEventListener('click', function () {
    add.classList.add('popup__opened');
});

// функция которая будет размещать карточки
function createCardElement(cardData) {
  const cardNode = cardTemplate.cloneNode(true);
  const cardImage = cardNode.querySelector('.element__list-item');
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const cardTitle = cardNode.querySelector('.element__title');
  cardTitle.textContent = cardData.name;

  const likeButtons = cardNode.querySelectorAll('.element__button-like');

  likeButtons.forEach(function(likeButton) {
    likeButton.addEventListener('click', function() {
      if (likeButton.classList.contains('element__button-like_active')) {
        likeButton.classList.remove('element__button-like_active');
      } else {
        likeButton.classList.add('element__button-like_active');
      }
    });
  });

  const deleteButtons = cardNode.querySelectorAll('.element__button-delete');
  deleteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      button.closest('.element').remove();
    });
  });

  return cardNode;
}

cardsImage.forEach(cardData => {
  const newCard = createCardElement(cardData);
  container.append(newCard);
});

const popupOpenImage = document.querySelector('.popup__open-image');
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__title');

// реализовываем открытие картинок во всплывающем окне
openImageButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const cardNode = button.closest('.element');
    const cardImage = cardNode.querySelector('.element__list-item');
    const cardTitle = cardNode.querySelector('.element__title');
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.alt;
    popupTitle.textContent = cardTitle.textContent;
    popupOpenImage.classList.add('popup__opened');
  });
});

closePopupButton.addEventListener('click', function() {
  popupOpenImage.classList.remove('popup__opened');
});

const cardForm = document.querySelector('.form__card');
const cardTitleInput = document.querySelector('.form__card-input-title');
const cardSubtitleInput = document.querySelector('.form__card-input-subtitle');
const cardCreateButton = document.querySelector('.card-create');

// реализовывает добавление карточек на страницу
cardForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newCardData = {
    name: cardTitleInput.value,
    link: cardSubtitleInput.value
  };
  const newCard = createCardElement(newCardData);
  container.append(newCard);
  cardForm.reset();
  add.classList.remove('popup__opened');
});

cardCreateButton.addEventListener('click', function() {
  edit.classList.remove('popup__opened');
  add.classList.add('popup__opened');
});


// функция для редактирования данных профиля
function handleFormSubmit(evt) {
  evt.preventDefault();

  const titleValue = profileFormTitle.value;
  const subtitleValue = profileFormSubtitle.value;

  profileTitle.textContent = titleValue;
  profileSubtitle.textContent = subtitleValue;

  popupGlobal.classList.remove("popup__opened");
}

formCard.addEventListener('submit', handleFormSubmit);




