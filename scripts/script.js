const initialCards = [
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

const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const profile= document.querySelector('.profile');
const editForm = popupEditProfile.querySelector('.popup__edit-form');
const addForm = popupAddCard.querySelector('.popup__add-card-form');
const cardsList = document.querySelector('.cards__list');

const profileEditButton = profile.querySelector('.button_type_edit');
const popupEditProfileCloseButton = popupEditProfile.querySelector('.button_type_close');
const profileSaveButton = popupEditProfile.querySelector('.popup__edit-form');
const popupAddCardCloseButton = popupAddCard.querySelector('.button_type_close');
const popupAddButton = profile.querySelector('.button_type_add');
const cardAddButton = document.querySelector('.popup__add-card-form');

let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');

let nameInput = popupEditProfile.querySelector('.popup__input-field_name');
let descriptionInput = popupEditProfile.querySelector('.popup__input-field_description');


const popupEditFormToggle = function () {
  if (popupEditProfile.classList.contains('popup_is-opened')) {
    editForm.reset();
  } else {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
  popupEditProfile.classList.toggle('popup_is-opened');
}

const popupAddFormToggle = function () {
  popupAddCard.classList.toggle('popup_is-opened');
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

profileEditButton.addEventListener('click', popupEditFormToggle);
popupEditProfileCloseButton.addEventListener('click', popupEditFormToggle);
popupEditProfile.addEventListener('click', popupEditProfileCloseByClickOverlay);

popupAddButton.addEventListener('click', popupAddFormToggle);
popupAddCardCloseButton.addEventListener('click', popupAddFormToggle);
popupAddCard.addEventListener('click', popupAddCardCloseByClickOverlay);



// Сохранение формы

const formSubmitHandler = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  popupEditFormToggle();
}

profileSaveButton.addEventListener('submit', formSubmitHandler);

//

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
