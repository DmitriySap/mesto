//для удобства подключил отдельный файл с переменными и константами
export const nameEditBtn = document.querySelector('.profile__edit-button');
export const nameEditPopup = document.querySelector('.popup_type_edit-name');
export const nameEditPopupCloseBtn = document.querySelector('.popup__close_type_edit-name');

export const profileName = document.querySelector('.profile__name');
export const nameField = document.querySelector('.popup__input_content_name');

export const profileDescription = document.querySelector('.profile__description');
export const descriptionField = document.querySelector('.popup__input_content_description');

export const popupEditNameOverlay = document.querySelector('.popup__overlay_type_edit-name');

export const formEditEl = document.querySelector('.popup__form_type_edit-name');

export const cardAddButton = document.querySelector('#save-button');

export const cardAddPopup = document.querySelector('.popup_type_add-card');
export const cardAddClosePopup = document.querySelector('.popup__close_type_add-card');

export const cardAddBtn = document.querySelector('.profile__add-button');

export const popupAddCardOverlay = document.querySelector('.popup__overlay_type_add-card');
export const popupFullscreenImgOverlay = document.querySelector('.popup__overlay_type_fullscreen-card');

export const formAddEl = document.querySelector('.popup__form_type_add-card');

export const fullScreenCard = document.querySelector('.popup_type_fullscreen-card');

export const cardsContainer = document.querySelector('.cards');

export const initialCards = [
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

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
};