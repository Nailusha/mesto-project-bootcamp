const add = document.querySelector('.popup__card'); 
const edit = document.querySelector('.popup__profile'); 
const popupOpenImage = document.querySelector('.popup__open-image');

const popupGlobal = document.querySelector('.popup');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const profileEdit = document.querySelector('.profile-create');

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
    button.closest('.elements__list').remove();
  });
});

  return cardNode;
}

// Создаем карточки из массива данных
cardsImage.forEach(function(cardData) {
  container.append(createCardElement(cardData));
});



// Находим форму в DOM
const formCard = document.querySelector('.form__profile');

// Находим поля формы в DOM
const profileFormTitle = document.querySelector('.form__profile-input-title');
const profileFormSubtitle = document.querySelector('.form__profile-input-subtitle');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  const titleValue = profileFormTitle.value;
  const subtitleValue = profileFormSubtitle.value;

  // Выберите элементы, куда должны быть вставлены значения полей
  
  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = titleValue;
  profileSubtitle.textContent = subtitleValue;

  popupGlobal.classList.remove("popup__opened");
}

// Прикрепляем обработчик к форме:
// он будет следить за событием "submit" - "отправка"
formCard.addEventListener('submit', handleFormSubmit);



const addImageButton = document.querySelector('.card-create'); // Кнопка в попапе для добавления картинки
const imageLinkInput = document.querySelector('.form__card-input-subtitle'); // Поле ввода ссылки на картинку в попапе для добавления картинки
const imageNameInput = document.querySelector('.form__card-input-title'); // Поле ввода имени картинки в попапе для добавления картинки

addImageButton.addEventListener('click', function () {
  const imageLink = imageLinkInput.value;
  const imageName = imageNameInput.value;
  
  if (imageLink && imageName) {
    const newCardData = {
      name: imageName,
      link: imageLink
    };
    
    const newCardElement = createCardElement(newCardData);
    container.append(newCardElement);
    
    // Очистка полей ввода
    imageLinkInput.value = '';
    imageNameInput.value = '';
    
    // Закрытие попапа
    popupGlobal.classList.remove('popup__opened');
  }
});







