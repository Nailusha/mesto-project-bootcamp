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

  const likeButton = cardNode.querySelector('.element__button-like');
  // Добавляем слушатели событий для кнопок
  for (let i = 0; i < likeButton.length; i++) {
  likeButton[i].addEventListener ('click', function() {
    likeButton.classList.toggle('element__button-like_active');
  });
};

const deleteButton = cardNode.querySelectorAll('.element__button-delete');
deleteButton.forEach(function(button) {
  button.addEventListener('click', function() {
    deleteButton[i].closest('.element').remove();
  });
});

  return cardNode;
}

// Создаем карточки из массива данных
cardsImage.forEach(function(cardData) {
  container.append(createCardElement(cardData));
});

const formCard = document.querySelector('.form__card');
formCard.addEventListener('submit', function(event) {
  event.preventDefault();

  // Получаем значения полей формы
  const cardTitle = document.querySelector('.form__card-input-title').value;
  const cardSubtitle = document.querySelector('.form__card-input-subtitle').value;

  // Создаем новую карточку
  const card = document.createElement('div');
  card.classList.add('card');

  // Добавляем нужные значения в карточку
  const titleElement = document.createElement('h2');
  titleElement.textContent = title;
  card.appendChild(titleElement);

  const subtitleElement = document.createElement('p');
  subtitleElement.textContent = subtitle;
  card.appendChild(subtitleElement);

  // Добавляем карточку на страницу
  const container = document.querySelector('.elements__list');
  container.appendChild(card);

  // Скрываем попап
  add.classList.remove('popup__opened');

  // Очищаем поля формы
  formCard.reset();
});

function handleProfileSubmit (event) {
  event.preventDefault()

  profileTitle.textContent = document.querySelector('.form__input-profile-title').value;
  profileSubtitle.textContent = document.querySelector('.form__input-profile-subtitle').value;

  closePopup(edit);
};






