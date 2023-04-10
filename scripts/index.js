const add = document.querySelector('.popup__card'); // получаем модификатор попапа для добавления
const edit = document.querySelector('.popup__profile'); // получаем модификатор попапа для редактирвоания
const cardConteiner = document.querySelector('.element');

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


const сardsImage = [
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

function createCardElement(cardData) {
  
  // Находим шаблон карточки
  const cardTemplate = document.querySelector('#card-template');

  // Создаем новый узел на основе шаблона
  const cardNode = cardTemplate.content.cloneNode(true);

  // Находим элементы карточки внутри созданного узла
  const cardImage = cardNode.querySelector('.element__list-item');
  cardImage.src = cardData.link;

  const cardTitle = cardNode.querySelector('.element__title');
  cardTitle.textContent = cardData.name;

  const likeButton = cardNode.querySelector('.element__button-like');
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

  // Добавляем созданную карточку в контейнер
  container.appendChild(cardNode);

  return cardNode;
};





