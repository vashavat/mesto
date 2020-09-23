const profile= document.querySelector('.profile');

// Popups
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');

// Buttons
const profileEditButton = profile.querySelector('.button_type_edit');
const profileSaveButton = popupEditProfile.querySelector('.popup__edit-form');
const popupCardAddButton = profile.querySelector('.button_type_add');
const cardAddButton = popupAddCard.querySelector('.popup__add-card-form');
const profileEditCloseButton = popupEditProfile.querySelector('.button_type_close');
const popupAddCardCloseButton = popupAddCard.querySelector('.button_type_close');
const popupImageCloseButton = popupImage.querySelector('.button_type_close');

// Forms
const editProfileForm = popupEditProfile.querySelector('.popup__edit-form');
const addCardForm = popupAddCard.querySelector('.popup__add-card-form');

const cardsList = document.querySelector('.cards__list');


const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');

const nameInput = popupEditProfile.querySelector('.popup__input-field_name');
const descriptionInput = popupEditProfile.querySelector('.popup__input-field_description');

const openPopup = function (popup) {
  popup.classList.add('popup_is-opened');
}

const closePopup = function (popup) {
  popup.classList.remove('popup_is-opened');
}

const resetForm = function () {

}


const popupEditFormToggle = function () {
  if (popupEditProfile.classList.contains('popup_is-opened')) {
    editProfileForm.reset();
  } else {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
  openPopup(popupEditProfile);
}

const popupAddFormToggle = function () {
  popupAddCard.classList.toggle('popup_is-opened');
}

const popupImageToggle = function () {
  popupImage.classList.toggle('popup_is-opened');
}

const popupEditProfileCloseByClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  popupEditFormToggle();
}

const popupAddCardCloseByClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  popupAddFormToggle();
}

const popupImageCloseByClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  popupImageToggle();
}

profileEditButton.addEventListener('click', popupEditFormToggle);
profileEditCloseButton.addEventListener('click', popupEditFormToggle);
popupEditProfile.addEventListener('click', popupEditProfileCloseByClickOverlay);

popupCardAddButton.addEventListener('click', popupAddFormToggle);
popupAddCardCloseButton.addEventListener('click', popupAddFormToggle);
popupAddCard.addEventListener('click', popupAddCardCloseByClickOverlay);

popupImageCloseButton.addEventListener('click', popupImageToggle);
popupImage.addEventListener('click', popupImageCloseByClickOverlay);

// Сохранение формы

const formSubmitHandler = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  popupEditFormToggle();
}

profileSaveButton.addEventListener('submit', formSubmitHandler);

// Добавление карточки

const addCard = function (item) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  const nameValue = item.name;
  const linkValue = item.link;

  cardElement.querySelector('.card__title').textContent = nameValue;
  cardElement.querySelector('.card__image').src = linkValue;
  cardElement.querySelector('.button_type_like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('button_type_like-active');
  });

  cardElement.querySelector('.button_type_delete').addEventListener('click', function(evt) {
    evt.target.parentElement.remove();
  });

  cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
    popupImageToggle();
    popupImage.querySelector('.popup__image').src = evt.target.src;
    popupImage.querySelector('.popup__image').alt = item.name;
    popupImage.querySelector('.popup__image-name').textContent = item.name;
  });

  cardsList.prepend(cardElement);
}

const addCardHandler = function(evt) {
  evt.preventDefault();
  const cardName = document.querySelector('.popup__input-field_card-name');
  const cardLink = document.querySelector('.popup__input-field_card-link');
  const item = {name: cardName.value, link: cardLink.value};
  addCard(item);
  popupAddFormToggle();
}

cardAddButton.addEventListener('submit', addCardHandler);

initialCards.forEach(addCard);
