import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {nameEditBtn, nameEditPopup, nameEditPopupCloseBtn, profileName, nameField, profileDescription, descriptionField, formInputTitle, formInputLink, 
        formEditEl, cardAddBtn, popupEditNameOverlay, cardAddPopup, fullScreenCard, formAddEl, 
        initialCards, config, cardsContainer} from '../utils/utils.js';

//валидация форм
const formAddValidation = new FormValidator(config, formAddEl);
const formEditValidator = new FormValidator(config, formEditEl);

formAddValidation.enableValidation();
formEditValidator.enableValidation();

//попап карточки
const popupImage = new PopupWithImage(fullScreenCard);

popupImage.setEventListeners();

const cardAddSubmit = item => {
  const card = createCard(item);
  defaultCards.addItem(card);
  cardAddForm.close();
  console.log(item);
}

//попап формы
const cardAddForm = new PopupWithForm(cardAddPopup, cardAddSubmit);

cardAddForm.setEventListeners();

//попап профиля
const popupProfile = new PopupWithForm(nameEditPopup, );

//функция для создания карточки
function createCard(item) {
  const card = new Card(item, '.card-template', handleOpenImagePopup);
  const cardEl = card.generateCard();

  return cardEl;
}
console.log(cardAddForm);
//первоначальный рендеринг карточек из массива
const defaultCards = new Section({
  items: initialCards,
  renderer: (e) => {
    const card = createCard(e);
    defaultCards.addItem(card);
  }
}, cardsContainer);
console.log(defaultCards);
defaultCards.renderItem();

cardAddBtn.addEventListener('click', () => {
  formAddValidation.disableSubmitButton();
  cardAddForm.open();
})

//слушатель на изменение никнейма
formEditEl.addEventListener('submit', function(event) {
  event.preventDefault();
  profileName.textContent = nameField.value;
  profileDescription.textContent = descriptionField.value;
  closePopup(nameEditPopup);
});

function handleOpenImagePopup(name, link) {
  popupImage.open(name, link);
};

nameEditBtn.addEventListener('click', function() {
    openPopup(nameEditPopup);

    nameField.value = profileName.textContent;
    descriptionField.value = profileDescription.textContent;
});

nameEditPopupCloseBtn.addEventListener('click', function() {
    closePopup(nameEditPopup);
});

//закрытие попапа на оверлей
popupEditNameOverlay.addEventListener('mousedown', () => {
  closePopup(nameEditPopup);
});