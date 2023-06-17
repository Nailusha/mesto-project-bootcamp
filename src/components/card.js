// функционал для создания разметки карточки

import { openPopup } from "./modal.js";
import { popupOpenImage, userId } from "../index.js";
import { deleteLike, setLike, deleteCard } from "../components/api.js"

const cardTemplate = document.getElementById('card-template').content.querySelector('.element');
// шаблон

const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__title');

// функция, которая будет размещать карточки
function createCardElement(cardData, userId) {
  const cardClone = cardTemplate.cloneNode(true); // клон с помощью template
  const cardImage = cardClone.querySelector('.element__list-item'); // карточка фото
  const cardTitle = cardClone.querySelector('.element__title'); // описание фото
  const likeButton = cardClone.querySelector('.element__button-like'); // кнопка лайка
  const deleteButton = cardClone.querySelector('.element__button-delete'); // кнопка удаления
  const likeCounter = cardClone.querySelector('.element__like-count') //отображение колич.лайков

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;


  
  // функция активации лайков
  function handleLikeCount(evt, cardData, userId, likeButton) {
    const queryMethod = isLiked(cardData.likes, userId);
    if (queryMethod) {
      deleteLike(cardData._id)
        .then((res) => {
          cardData.likes = res.likes;
          likeImage(res.likes, userId, likeButton);
        })
        .catch((err) => console.log(err));
    } else {
      setLike(cardData._id)
        .then((res) => {
          cardData.likes = res.likes;
          likeImage(res.likes, userId, likeButton);
        })
        .catch((err) => console.log(err));
    }
  }

  likeImage(cardData.likes, userId, likeButton);

  if (cardData.owner._id !== userId) {
    deleteButton.remove();
  }

  //функция с лайкамии
  function isLiked(likesArray, userId) {
    return likesArray.some(item => item._id === userId)
  };

  function likeImage(likesArray, userId, likeButton) { 
    likeButton.classList.toggle("element__button-like_active", isLiked(likesArray, userId));
    likeCounter.textContent = likesArray.length;
  }

  // слушатель на открытие изображения
  cardImage.addEventListener('click', function () {
    handleOpenImage(cardData);
  });

  // слушатель на лайк
  likeButton.addEventListener("click", (evt) =>
  handleLikeCount(evt, cardData, userId, likeButton)
  );

  // слушатель на удаление
  deleteButton.addEventListener('click', () =>
  deleteCard(cardData._id)
    .then(() => {
      deleteImage(cardClone);
    })
    .catch((err) => console.log(err))
  );

  return cardClone;
}



//удаление карточек
function deleteImage(deleteElement) {
  deleteElement.remove();
}

// функция на открытие изображения
function handleOpenImage(cardData) {
  popupImage.src = cardData.link; 
  popupImageTitle.textContent = cardData.name;
  popupImage.alt = cardData.name;

  openPopup(popupOpenImage);
}

export {
  createCardElement,
};
