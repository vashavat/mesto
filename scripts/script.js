const popup = document.querySelector('.popup');
const profile= document.querySelector('.profile');
const form = popup.querySelector('.popup__edit-form');
const profileEditButton = profile.querySelector('.button_type_edit');
const popupCloseButton = popup.querySelector('.button_type_close');
const profileSaveButton = popup.querySelector('.popup__edit-form');

let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');

let nameInput = popup.querySelector('.popup__input-field_name');
let descriptionInput = popup.querySelector('.popup__input-field_description');


const popupToggle = function () {
  if (popup.classList.contains('popup_is-opened')) {
    form.reset();
  } else {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }

  popup.classList.toggle('popup_is-opened');
}

const popupCloseByClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  popupToggle();
}

profileEditButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', popupCloseByClickOverlay);

// Сохранение формы

const formSubmitHandler = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  popupToggle();
}

profileSaveButton.addEventListener('submit', formSubmitHandler);
