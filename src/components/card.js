// функционал для создания разметки карточки

import { openPopup } from "./modal.js"; 

const cardTemplate = document.getElementById('card-template').content.querySelector('.element'); // шаблон

const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__title');

// функция, которая будет размещать карточки
function createCardElement(cardData) {
    const cardClone = cardTemplate.cloneNode(true); // клон с помощью template
    const cardImage = cardClone.querySelector('.element__list-item'); // карточка фото
    const cardTitle = cardClone.querySelector('.element__title'); // описание фото
    const likeButton = cardClone.querySelector('.element__button-like'); // кнопка лайка
    const deleteButton = cardClone.querySelector('.element__button-delete'); // кнопка удаления
  
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
  
    // слушатель на открытие изображения
    cardImage.addEventListener('click', function() {
      handleOpenImage(cardClone, popupOpenImage);
    });
  
    // слушатель на лайк
    likeButton.addEventListener('click', likeImage);
  
    // слушатель на удаление
    deleteButton.addEventListener('click', function() {
      deleteImage(cardClone);
    });
  
    return cardClone;
  }
  
// функция на открытие изображения
  function handleOpenImage(cardTemplate, popupImage) {
  popupImage.src = cardTemplate.querySelector('.element__list-item').src;
  popupImageTitle.textContent = cardTemplate.querySelector('.element__title').textContent;
  popupImage.alt = popupImageTitle.textContent;

  openPopup();
}

// функция на лайк
    function likeImage(evt) {
    evt.target.classList.toggle('element__button-like_active');
  }
  
// функция на удаление
  function deleteImage(deleteElement) {
    deleteElement.remove();
  }

  export {
    createCardElement,
  };

