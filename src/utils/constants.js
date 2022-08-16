export const nameEditBtn = document.querySelector('.profile__edit-button');

export const profileName = document.querySelector('.profile__name');
export const nameField = document.querySelector('.popup__input_content_name');

export const profileDescription = document.querySelector('.profile__description');
export const descriptionField = document.querySelector('.popup__input_content_description');

export const formEditEl = document.querySelector('.popup__form_type_edit-name');
export const formEditAvatar = document.querySelector('.popup__form_type_edit-avatar');
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileAvatarEditButton = document.querySelector('.profile__avatar-edit');

export const cardAddBtn = document.querySelector('.profile__add-button');

export const formAddEl = document.querySelector('.popup__form_type_add-card');

export const cardsContainer = document.querySelector('.cards');

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
};

export const apiData = {
  host: 'https://mesto.nomoreparties.co/v1/cohort-47',
  headers: {
    authorization: 'dcded44e-0130-46c5-aa5b-22f4493838c0',
                   'Content-Type': 'application/json'
  }
}