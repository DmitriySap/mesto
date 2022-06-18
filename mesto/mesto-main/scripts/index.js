const editBtn = document.querySelector('.profile__edit-button');

const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close');

const profileName = document.querySelector('.profile__name');
const nameField = document.querySelector('.popup__input_content_name');

const profileDescription = document.querySelector('.profile__description');
const descriptionField = document.querySelector('.popup__input_content_description');

const formEl = document.querySelector('.popup__form');

const addBtn = document.querySelector('.profile__add-button');

const popupAddCard = document.querySelector('.popup-add');
const popupAddClose = document.querySelector('.popup-add__close');

const addFormEl = document.querySelector('.popup-add__form');

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

const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content;
const fullScreenCard = document.querySelector('.popup-fullscreen-card');

//удаление карточки
function deleteCard(){
  const deleteBtn = document.querySelector('.card__delete-button');
  deleteBtn.addEventListener('click', e => {
    const el = e.currentTarget.parentElement;
    el.remove();
   })
}

//первоначальный рендеринг карточек из массива 
initialCards.forEach(function(e) {
  addCard(e.name, e.link);
});

//функция добавления карточки пользователем
function addCard(nameValue, srcValue) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
  cardElement.querySelector('.card__title').textContent = nameValue;
  cardElement.querySelector('.card__image').src = srcValue;
  cardElement.querySelector('.card__like-button').addEventListener('click', function(e) {
    e.currentTarget.classList.toggle('card__like-button_type_is-active');
  })

  //открытие попапа карточки на весь экран
  cardElement.querySelector('.card__image').addEventListener('click', function(e) {
    openPopup(fullScreenCard);
    const cardImage = document.querySelector('.popup-fullscreen-card__image');
    cardImage.src = srcValue;
    const cardTitle = document.querySelector('.popup-fullscreen-card__title');
    cardTitle.textContent = nameValue;
  })
  //закрытие попапа
  const closeFullscreenCard = document.querySelector('.popup-fullscreen-card__close');
  closeFullscreenCard.addEventListener('click', function(){
    closePopup(fullScreenCard);
  })

  cardsContainer.prepend(cardElement);
  deleteCard();
}

addFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  const cardNameField = document.querySelector('.popup-add__input_content_name');
  const cardSrcField = document.querySelector('.popup-add__input_content_description');
  
  addCard(cardNameField.value, cardSrcField.value);
  closePopup(popupAddCard);
  addFormEl.reset();
})

function openPopup(popupEl) {
    popupEl.classList.add('popup_type_is-open');
}

function closePopup(popupEl) {
    popupEl.classList.remove('popup_type_is-open');
}

editBtn.addEventListener('click', function() {
    openPopup(popup);
    nameField.value = profileName.textContent;
    descriptionField.value = profileDescription.textContent;
})

popupCloseBtn.addEventListener('click', function() {
    closePopup(popup);
})

formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    profileName.textContent = nameField.value;
    profileDescription.textContent = descriptionField.value;
    closePopup(popup);
})

addBtn.addEventListener('click', function() {
  openPopup(popupAddCard);
})

popupAddClose.addEventListener('click', function() {
  closePopup(popupAddCard)
})

