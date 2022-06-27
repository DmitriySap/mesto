const nameEditBtn = document.querySelector('.profile__edit-button');

const nameEditPopup = document.querySelector('.popup_type_edit-name');
const editNamePopupCloseBtn = document.querySelector('.popup__close_type_edit-name');

const profileName = document.querySelector('.profile__name');
const nameField = document.querySelector('.popup__input_content_name');

const profileDescription = document.querySelector('.profile__description');
const descriptionField = document.querySelector('.popup__input_content_description');

const formEditEl = document.querySelector('.popup__form_type_edit-name');

const cardAddBtn = document.querySelector('.profile__add-button');

const popupEditNameOverlay = document.querySelector('.popup__overlay_type_edit-name');
const popupAddCardOverlay = document.querySelector('.popup__overlay_type_add-card');
const popupFullscreenImgOverlay = document.querySelector('.popup__overlay_type_fullscreen-card');

const cardAddPopup = document.querySelector('.popup_type_add-card');
const cardAddClosePopup = document.querySelector('.popup__close_type_add-card');

const formAddEl = document.querySelector('.popup__form_type_add-card');

const cardTitle = document.querySelector('.popup__title_type_fullscreen-card');

const cardAddButton = document.querySelector('#save-button');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      alt: 'Архыз'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      alt: 'Челябинская область'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt: 'Иваново'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      alt: 'Камчатка'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      alt: 'Холмогорский район'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      alt: 'Байкал'
    }
  ];

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
};

const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content;
const fullScreenCard = document.querySelector('.popup_type_fullscreen-card');

//закрытие попапа кликом на esc
const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_type_is-open'));
  }
}

//первоначальный рендеринг карточек из массива 
initialCards.forEach(function(e) {
  addCard(e.name, e.link);
});

//функция создания карточки 
function createCard(nameValue, srcValue) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__title').textContent = nameValue;
  cardImage.src = srcValue;
  cardImage.alt = nameValue;
  //лайк карточки 
  cardElement.querySelector('.card__like-button').addEventListener('click', function(e) {
    e.currentTarget.classList.toggle('card__like-button_type_is-active');
  })
  //удаление карточки
  cardElement.querySelector('.card__delete-button').addEventListener('click', function(e) {
    const el = e.target.closest('.card');
    el.remove();
  })
  //открытие попапа карточки на весь экран
  cardElement.querySelector('.card__image').addEventListener('click', function(e) {
    openPopup(fullScreenCard);
    const cardImage = document.querySelector('.popup__image');
    cardImage.src = srcValue;
    cardImage.alt = nameValue;
    cardTitle.textContent = nameValue;
  })
  
  return cardElement;
}

//функция добавления карточки пользователем 
function addCard(name, link) {
  const card = createCard(name, link);
  cardsContainer.prepend(card);
}

//закрытие попапа
  const closeFullscreenCard = document.querySelector('.popup__close_type_fullscreen-card');
  closeFullscreenCard.addEventListener('click', function(){
    closePopup(fullScreenCard);
  })

//функция для отключения кнопки создать 
const disableButton = (buttonElement, config) => {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.setAttribute('disabled', 'disabled');
};

formAddEl.addEventListener('submit', function(event) {
  event.preventDefault();
  const cardNameField = document.querySelector('.popup__input_content_title');
  const cardSrcField = document.querySelector('.popup__input_content_src');
  addCard(cardNameField.value, cardSrcField.value);
  closePopup(cardAddPopup);
  formAddEl.reset();
  //вызываем функцию для отключения кнопки создать
  disableButton(cardAddButton, config)
})

function openPopup(popupEl) {
  popupEl.classList.add('popup_type_is-open');
  document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_type_is-open');
  document.removeEventListener('keydown', closePopupByEsc);
}

nameEditBtn.addEventListener('click', function() {
    openPopup(nameEditPopup);
    
    nameField.value = profileName.textContent;
    descriptionField.value = profileDescription.textContent;
})

editNamePopupCloseBtn.addEventListener('click', function() {
    closePopup(nameEditPopup);
})

formEditEl.addEventListener('submit', function(event) {
    event.preventDefault();
    profileName.textContent = nameField.value;
    profileDescription.textContent = descriptionField.value;
    closePopup(nameEditPopup);
})

cardAddBtn.addEventListener('click', function() {
  openPopup(cardAddPopup);
})

cardAddClosePopup.addEventListener('click', function() {
  closePopup(cardAddPopup);
})

//закрытие попапа на оверлей 

popupEditNameOverlay.addEventListener('mousedown', () => {
  closePopup(nameEditPopup);
})

popupAddCardOverlay.addEventListener('mousedown', () => {
  closePopup(cardAddPopup);
})

popupFullscreenImgOverlay.addEventListener('mousedown', () => {
  closePopup(fullScreenCard);
})