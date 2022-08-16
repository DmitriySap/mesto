import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDeleteConfirm from '../components/PopupWithDeleteConfirm.js';
import {profileName, nameField, profileDescription, descriptionField, profileAvatarEditButton,
        formEditEl, cardAddBtn, formAddEl, formEditAvatar, profileAvatar,
        config, cardsContainer, nameEditBtn, apiData} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import './index.css';
let userId;

const api = new Api(apiData);

const formAddValidation = new FormValidator(config, formAddEl);
const formEditValidator = new FormValidator(config, formEditEl);
const formEditAvatarValidator = new FormValidator(config, formEditAvatar);

const popupDeleteCard = new PopupWithDeleteConfirm('.popup_type_delete-card', handleDeleteCard);

const avatarEditPopup = new PopupWithForm('.popup_type_edit-avatar', submitNewAvatar);
const profileEditPopup = new PopupWithForm('.popup_type_edit-name', editProfileSubmit);
const cardAddForm = new PopupWithForm('.popup_type_add-card', addCardSubmit);

const popupImage = new PopupWithImage('.popup_type_fullscreen-card');

const userInfo = new UserInfo({name: profileName,
  description: profileDescription,
  avatar: profileAvatar});

const defaultCards = new Section({
  renderer: (e) => {
    const card = createCard(e);
    defaultCards.addItem(card);
  }
}, cardsContainer);

formAddValidation.enableValidation();
formEditValidator.enableValidation();
formEditAvatarValidator.enableValidation();

popupDeleteCard.setEventListeners();
avatarEditPopup.setEventListeners()
popupImage.setEventListeners();
profileEditPopup.setEventListeners();
cardAddForm.setEventListeners();

function addCardSubmit(cardEl) {
  cardAddForm.toggleSaveButtonState(true);
  api.addNewCard(cardEl.name, cardEl.link)
    .then(cardEl => {
      const card = createCard(cardEl);
      defaultCards.addItem(card);
      cardAddForm.close();
    })
    .catch(error => {
      console.log(`Ошибка ${error}`);
    })
    .finally(() => {
      cardAddForm.toggleSaveButtonState(false);
    })
};

function editProfileSubmit(el) {
  profileEditPopup.toggleSaveButtonState(true);
  api.editProfileInfo(el)
    .then(el => {
      userInfo.setUserInfo(el);
      profileEditPopup.close();
    })
    .catch(error => {
      console.log(`Ошибка: ${error}`);
    })
    .finally(() => {
      profileEditPopup.toggleSaveButtonState(false);
    })
};

function submitNewAvatar(e) {
  avatarEditPopup.toggleSaveButtonState(true);
  api.editAvatar(e)
    .then(e => {
      userInfo.setUserInfo(e);
      avatarEditPopup.close();
    })
    .catch(error => {
      console.log(`Ошибка ${error}`);
    })
    .finally(() => {
      avatarEditPopup.toggleSaveButtonState(false);
    })
};

function createCard(item) {
  const card = new Card (item, '.card-template', handleOpenImagePopup, openDeleteCardPopup, userId,
  () => {
    api.likeCard(item._id)
      .then(item => {
        card.countLikes(item);
        card.likeCard();
      })
      .catch(error => {
        console.log(`Ошибка ${error}`);
      })
  }, 
  () => {
    api.dislikeCard(item._id)
      .then(item => {
        card.countLikes(item);
        card.dislikeCard();
      })
      .catch(error => {
        console.log(`Ошибка ${error}`);
      })
  }
  )
  const cardEl = card.generateCard();
  return cardEl;
};

const openDeleteCardPopup = data => {
  popupDeleteCard.open();
  popupDeleteCard.ownerCard(data);
};

function handleDeleteCard(item) {
  api.deleteCard(item._cardId)
    .then(() => {
      popupDeleteCard.close();
    })
    .catch(error => {
      console.log(`Ошибка ${error}`);
    })
    item.handleDeleteCard();
};

function handleOpenImagePopup(name, link) {
  popupImage.open(name, link);
};

cardAddBtn.addEventListener('click', () => {
  formAddValidation.disableSubmitButton();
  cardAddForm.open();
});

nameEditBtn.addEventListener('click', () => {
  const inputList = userInfo.getUserInfo();
  nameField.value = inputList.nameInput;
  descriptionField.value = inputList.descriptionInput;
  profileEditPopup.open();
});

profileAvatarEditButton.addEventListener('click', () => {
  formEditAvatarValidator.disableSubmitButton();
  avatarEditPopup.open();
});

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([card, user]) => {
    userInfo.setUserInfo(user);
    userId = user._id;
    const reversedArray = card.reverse();
    defaultCards.renderItem(reversedArray);
  })
  .catch(error => {
    console.log(`Ошибка ${error}`);
  })