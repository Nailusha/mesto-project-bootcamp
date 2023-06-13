// функционал для создания разметки карточки

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
  function handleOpenImage(container, popupOpenImage) {
  popupImage.src = container.querySelector('.element__list-item').src;
  popupImageTitle.textContent = container.querySelector('.element__title').textContent;

  openPopup(popupOpenImage);
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
    handleOpenImage,
    likeImage,
    deleteImage,
  };

