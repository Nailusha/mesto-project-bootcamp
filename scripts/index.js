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

// Находим контейнер, в который будем добавлять карточки
const container = document.querySelector('.card-image');

// Находим шаблон карточки
const cardTemplate = document.querySelector('#card-template');

// Создаем новый узел на основе шаблона
const cardNode = cardTemplate.content.cloneNode(true);

// Находим элементы карточки внутри созданного узла
const cardImage = cardNode.querySelector('.element__list-item');
const cardTitle = cardNode.querySelector('.element__title');
const likeButton = cardNode.querySelector('.element__button-like');
const imageContainer = document.getElementById('.elements__list');

const сards = [
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

function createCard(data) {

  cardImage.src = data.link;
  cardTitle.textContent = data.name;

  return cardNode;
}

buttonAdd.addEventListener('click', function() {
  const newCard = createCard(cards);
  container.appendChild(newCard);
});

// Добавляем созданную карточку в контейнер
container.addEventListener('click', () => {
    const container = document.createElement('.ul');
    container.classList.add('.card-image');
    container.innerHTML = `
      <h3>Заголовок карточки</h3>
      <p>Описание карточки</p>
    `;
    imageContainer.appendChild(cardNode);
});

// Добавляем слушатели событий для кнопок
let clicked = false;
likeButton.addEventListener ('click', function() {
    if (!clicked) {
      likeButton.style.backgroundColor = 'black';
        clicked = true;
    } else {
      likeButton.style.backgroundColor = '';
        clicked = false;
    }
});

const deleteButton = cardNode.querySelector('.element__button-delete');
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', function() {
      cardImage[i].remove();
  });
  };
