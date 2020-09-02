const popup = document.querySelector('.popup');
const popupEditButton = document.querySelector('.button_type_edit');
const popupCloseButton = popup.querySelector('.button_type_close');

const popupToggle = function () {
  popup.classList.toggle('popup_is-opened');
}

const popupCloseByClickOverlay = function () {
  if (event.target !== event.currentTarget) {
    return;
  }
  popupToggle();
}

popupEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', popupCloseByClickOverlay);
