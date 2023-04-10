const add = document.querySelector('.popup__card'); // получаем модификатор попапа для добавления
const edit = document.querySelector('.popup__profile'); // получаем модификатор попапа для редактирвоания

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

  const cardTitle = cardNode.querySelector('.element__title');
  cardTitle.textContent = cardData.name;

  const likeButton = cardNode.querySelector('.element__button-like');
  // Добавляем слушатели событий для кнопок
  likeButton.addEventListener ('click', function() {
    likeButton.classList.toggle('element__button-like_active');
  });

  const deleteButton = cardNode.querySelector('.element__button-delete');
  deleteButton.addEventListener('click', function() {
    cardNode.remove();
  });

  return cardNode;
}

// Создаем карточки из массива данных
cardsImage.forEach(function(cardData) {
  container.append(createCardElement(cardData));
});





