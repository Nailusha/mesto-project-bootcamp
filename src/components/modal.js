// В этот модуль нужно перенести функционал связанный с работой модальных окон. 
// Обратите внимание, что это только универсальный функционал, который работает с модальными окнами. 


// открытие попапа
function openPopup(popup) {
  popup.classList.add('popup__opened');
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup__opened');
}

// функция закрытия ESC
function handleEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(popupOpenImage);
  }
}

// функция закрытия OVERLAY
function handleOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

export {
  openPopup,
  closePopup,
  handleEsc,
  handleOverlay,
};