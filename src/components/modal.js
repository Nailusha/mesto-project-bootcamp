// В этот модуль нужно перенести функционал связанный с работой модальных окон. 
// Обратите внимание, что это только универсальный функционал, который работает с модальными окнами. 

const popupGlobal = document.querySelectorAll('.popup');

// открытие попапа
function openPopup(popup) {
  popup.classList.add('popup__opened');
  document.addEventListener("keydown", handleEsc);
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup__opened');
  document.removeEventListener("keydown", handleEsc);
}

// функция закрытия ESC
function handleEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector(".popup__opened");
    closePopup(popup);
  }
}

// функция закрытия OVERLAY
function handleOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

popupGlobal.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup__opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__closed')) {
      closePopup(popup)
    }
  });
})

export {
  openPopup,
  closePopup
};