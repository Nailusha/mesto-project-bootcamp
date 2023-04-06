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


const buttonDelete = document.querySelectorAll('.element__button-delete'); //кнопка удаления
const imageItem = document.querySelectorAll('.element'); //действие с изображением

    for (let i = 0; i < buttonDelete.length; i++) {
        buttonDelete[i].addEventListener('click', function() {
            imageItem[i].remove();
    });
  };

const buttonLike = document.querySelector('.element__button-like'); //кнопка лайка
let clicked = false;
buttonLike.addEventListener ('click', function() {
    if (!clicked) {
        buttonLike.style.backgroundColor = 'black';
        clicked = true;
    } else {
        buttonLike.style.backgroundColor = '';
        clicked = false;
    }
});

const cardImages = document.querySelectorAll('.element__list-item');
const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
document.body.appendChild(overlay);

for (let i = 0; i < cardImages.length; i++) {
    cardImages[i].addEventListener('click', function() {
    const imageSrc = this.getAttribute('src');
    const overlayImage = document.createElement('img');
    overlayImage.setAttribute('src', imageSrc);
    overlay.appendChild(overlayImage);
    overlay.style.display = 'block';
  });
}

overlay.addEventListener('click', function() {
  this.style.display = 'none';
  this.removeChild(this.firstChild);
});

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



  const cardImage = document.getElementById('.card-image');
  const imageContainer = document.getElementById('.elements__list');

  cardImage.addEventListener('click', () => {
    const newCard = document.createElement('.ul');
    newCard.classList.add('.card-image');
    newCard.innerHTML = `
      <h3>Заголовок карточки</h3>
      <p>Описание карточки</p>
    `;
    imageContainer.appendChild(newCard);
});

const container = document.getElementById("example");
console.log("container");