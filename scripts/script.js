const root = document.querySelector('.root');
const popup = root.querySelector('.popup');
const profile= root.querySelector('.profile');
const popupEditButton = profile.querySelector('.button_type_edit');
const popupCloseButton = popup.querySelector('.button_type_close');

let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');

let newNameInput = popup.querySelector('.js-popup__profile-name');
let newNameValue = profileName.textContent;
newNameInput.setAttribute('value', newNameValue);

let editDescriptionInput = popup.querySelector('.js-popup__profile-description');
let editDescriptionValue = profileDescription.textContent;
editDescriptionInput.setAttribute('value', editDescriptionValue);


const popupToggle = function () {
  popup.classList.toggle('popup_is-opened');
  newNameValue = profileName.textContent;
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



const changeValue = function () {




}
