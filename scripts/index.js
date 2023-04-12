const add = document.querySelector('.popup__card'); 
const edit = document.querySelector('.popup__profile'); 
const popupOpenImage = document.querySelector('.popup__open-image');

const popupGlobal = document.querySelector('.popup');

const profileEdit = document.querySelector('.profile-create');
const profileTitle = document.querySelector('.form__profile-input-title');
const profileSubtitle = document.querySelector('.form__profile-input-subtitle');

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

})

buttonEdit.addEventListener('click', function () {
    edit.classList.add('popup__opened');
});
buttonAdd.addEventListener('click', function () {
    add.classList.add('popup__opened');
});

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

  
// Находим шаблон карточки
const cardTemplate = document.getElementById('card-template');

function createCardElement(cardData) {
  // Создаем новый узел на основе шаблона
  const cardNode = cardTemplate.content.cloneNode(true);

  // Находим элементы карточки внутри созданного узла
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
// Создаем карточки из массива данных
cardsImage.forEach(function(cardData) {
  container.append(createCardElement(cardData));
});


function handleProfileSubmit (event) {
  event.preventDefault()

  profileTitle.textContent = document.querySelector('.form__input-profile-title').value;
  profileSubtitle.textContent = document.querySelector('.form__input-profile-subtitle').value;

  closePopup(edit);
};
profileEdit.addEventListener('submit', handleFormSubmit);





