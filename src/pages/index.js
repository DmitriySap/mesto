import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {profileName, nameField, profileDescription, descriptionField, formInputTitle, formInputLink,
        formEditEl, cardAddBtn, formAddEl,
        initialCards, config, cardsContainer, nameEditBtn, apiData} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import './index.css';

const api = new Api(apiData);

//валидация форм
const formAddValidation = new FormValidator(config, formAddEl);
const formEditValidator = new FormValidator(config, formEditEl);

formAddValidation.enableValidation();
formEditValidator.enableValidation();

//попап карточки
const popupImage = new PopupWithImage('.popup_type_fullscreen-card');

popupImage.setEventListeners();

//функция на отправку формы добавления карточки
const cardAddSubmit = (cardData) => {
  api.addNewCard(cardData)
    .then(item => {
      const card = createCard(cardData);
      defaultCards.addItem(card);
      cardAddForm.close();
    })
}

const userInfo = new UserInfo({name: profileName,
description: profileDescription});

//попап формы
const cardAddForm = new PopupWithForm('.popup_type_add-card', cardAddSubmit);

cardAddForm.setEventListeners();

const profileEditSubmit = (item) => {
  userInfo.setUserInfo(item);
  profileEditForm.close();
};

//попап профиля
const profileEditForm = new PopupWithForm('.popup_type_edit-name', profileEditSubmit);

profileEditForm.setEventListeners();
//функция для создания карточки
function createCard(item) {
  const card = new Card(item, '.card-template', handleOpenImagePopup);
  const cardEl = card.generateCard();

  return cardEl;
}

//первоначальный рендеринг карточек из массива
api.getInitialCards()
  .then(items => {
    const defaultCards = new Section({
      renderer: (e) => {
        const card = createCard(e);
        defaultCards.addItem(card);
      }
    }, cardsContainer);
    
    defaultCards.renderItem(items);
  })

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