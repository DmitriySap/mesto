import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {nameEditPopup, profileName, nameField, profileDescription, descriptionField, formInputTitle, formInputLink, 
        formEditEl, cardAddBtn, cardAddPopup, fullScreenCard, formAddEl,
        initialCards, config, cardsContainer, nameEditBtn} from '../utils/utils.js';
import UserInfo from '../components/UserInfo.js';

//валидация форм
const formAddValidation = new FormValidator(config, formAddEl);
const formEditValidator = new FormValidator(config, formEditEl);

formAddValidation.enableValidation();
formEditValidator.enableValidation();

//попап карточки
const popupImage = new PopupWithImage(fullScreenCard);

popupImage.setEventListeners();

//функция на отправку формы добавления карточки
const cardAddSubmit = () => {
  const cardData = {
    name: formInputTitle.value,
    link: formInputLink.value
  };

  const card = createCard(cardData);
  defaultCards.addItem(card);
  cardAddForm.close();
}

const userInfo = new UserInfo({name: profileName,
description: profileDescription});

//попап формы
const cardAddForm = new PopupWithForm(cardAddPopup, cardAddSubmit);

cardAddForm.setEventListeners();

const profileEditSubmit = (item) => {
  userInfo.setUserInfo(item);
  profileEditForm.close();
};

//попап профиля
const profileEditForm = new PopupWithForm(nameEditPopup, profileEditSubmit);

profileEditForm.setEventListeners();
//функция для создания карточки
function createCard(item) {
  const card = new Card(item, '.card-template', handleOpenImagePopup);
  const cardEl = card.generateCard();

  return cardEl;
}

//первоначальный рендеринг карточек из массива
const defaultCards = new Section({
  items: initialCards,
  renderer: (e) => {
    const card = createCard(e);
    defaultCards.addItem(card);
  }
}, cardsContainer);

defaultCards.renderItem();

//слушатель на кнопку добавить карточку
cardAddBtn.addEventListener('click', () => {
  formAddValidation.disableSubmitButton();
  cardAddForm.open();
});

//слушатель на кнопку изменения профиля
nameEditBtn.addEventListener('click', () => {
  const inputList = userInfo.getUserInfo();
  nameField.value = inputList.nameInput;
  descriptionField.value = inputList.descriptionInput;
  profileEditForm.open();
});

function handleOpenImagePopup(name, link) {
  popupImage.open(name, link);
};