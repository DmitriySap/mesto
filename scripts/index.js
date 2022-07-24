import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {nameEditBtn, nameEditPopup, nameEditPopupCloseBtn, profileName, nameField, profileDescription, descriptionField, formInputLink, formInputTitle,
        formEditEl, cardAddBtn, popupEditNameOverlay, popupAddCardOverlay, popupFullscreenImgOverlay, cardAddPopup, fullScreenImage,
        cardAddClosePopup, fullScreenCard, formAddEl, cardAddButton, initialCards, config, cardsContainer, fullScreenImageDescription} from './utils.js';

//валидация форм
const formAddValidation = new FormValidator(config, formAddEl);
const formEditValidator = new FormValidator(config, formEditEl);

formAddValidation.enableValidation();
formEditValidator.enableValidation();

//функция для создания карточки
function createCard(item) {
  const card = new Card(item, '.card-template', handleOpenImagePopup);
  const cardEl = card.generateCard();

  return cardEl;
}

//первоначальный рендеринг карточек из массива
initialCards.forEach((item) => {
  const cardEl = createCard(item);
  cardsContainer.prepend(cardEl);
});

//функция добавления карточки пользователем
function addCard() {
  //выбираем поля для класса Card
  const cardData = {
    name: formInputTitle.value,
    link: formInputLink.value
  };

  const card = new Card(cardData, '.card-template', handleOpenImagePopup);
  const cardEl = card.generateCard();
  cardsContainer.prepend(cardEl);
};

//закрытие попапа кликом на esc
const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_type_is-open'));
  };
};

//слушатель на добавление карточки пользователем
formAddEl.addEventListener('submit', function(event) {
  event.preventDefault();

  addCard();

  closePopup(cardAddPopup);
  formAddEl.reset();
  //отключаем кнопку создать после добавления карточки
  formAddValidation.disableSubmitButton();
});

//слушатель на изменение никнейма
formEditEl.addEventListener('submit', function(event) {
  event.preventDefault();
  profileName.textContent = nameField.value;
  profileDescription.textContent = descriptionField.value;
  closePopup(nameEditPopup);
});

function openPopup(popupEl) {
  popupEl.classList.add('popup_type_is-open');
  document.addEventListener('keydown', closePopupByEsc);
};

function closePopup(popupEl) {
  popupEl.classList.remove('popup_type_is-open');
  document.removeEventListener('keydown', closePopupByEsc);
};

function handleOpenImagePopup(name, link) {
  fullScreenImage.src = link; 
  fullScreenImage.alt = name; 
  fullScreenImageDescription.textContent = name; 
  openPopup(fullScreenCard); 
}  

document.querySelector('.popup__close_type_fullscreen-card').addEventListener('click', () => {
  closePopup(fullScreenCard);
})

nameEditBtn.addEventListener('click', function() {
    openPopup(nameEditPopup);

    nameField.value = profileName.textContent;
    descriptionField.value = profileDescription.textContent;
});

nameEditPopupCloseBtn.addEventListener('click', function() {
    closePopup(nameEditPopup);
});

cardAddBtn.addEventListener('click', function() {
  openPopup(cardAddPopup);
});

cardAddClosePopup.addEventListener('click', function() {
  closePopup(cardAddPopup);
});

//закрытие попапа на оверлей
popupEditNameOverlay.addEventListener('mousedown', () => {
  closePopup(nameEditPopup);
});

popupAddCardOverlay.addEventListener('mousedown', () => {
  closePopup(cardAddPopup);
});

popupFullscreenImgOverlay.addEventListener('mousedown', () => {
  closePopup(fullScreenCard);
});

