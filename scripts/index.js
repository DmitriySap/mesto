const editBtn = document.querySelector('.profile__edit-button');

const editNamePopup = document.querySelector('.popup_type_edit-name');
const editNamePopupCloseBtn = document.querySelector('.popup__close_type_edit-name');

const profileName = document.querySelector('.profile__name');
const nameField = document.querySelector('.popup__input_content_name');

const profileDescription = document.querySelector('.profile__description');
const descriptionField = document.querySelector('.popup__input_content_description');

const editFormEl = document.querySelector('.popup__form_type_edit-name');

const addBtn = document.querySelector('.profile__add-button');

const addCardPopup = document.querySelector('.popup_type_add-card');
const addClosePopup = document.querySelector('.popup__close_type_add-card');

const addFormEl = document.querySelector('.popup__form_type_add-card');

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
const fullScreenCard = document.querySelector('.popup_type_fullscreen-card');

//первоначальный рендеринг карточек из массива 
initialCards.forEach(function(e) {
  addCard(e.name, e.link);
});

//функция создания карточки 
function createCard(nameValue, srcValue) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
  cardElement.querySelector('.card__title').textContent = nameValue;
  cardElement.querySelector('.card__image').src = srcValue;
  cardElement.querySelector('.card__image').alt = nameValue;
  //лайк карточки 
  cardElement.querySelector('.card__like-button').addEventListener('click', function(e) {
    e.currentTarget.classList.toggle('card__like-button_type_is-active');
  })
  //удаление карточки
  cardElement.querySelector('.card__delete-button').addEventListener('click', function(e) {
    const el = e.currentTarget.parentElement;
    el.remove();
  })

  //открытие попапа карточки на весь экран
  cardElement.querySelector('.card__image').addEventListener('click', function(e) {
    openPopup(fullScreenCard);
    const cardImage = document.querySelector('.popup__image');
    cardImage.src = srcValue;
    cardImage.alt = nameValue;
    const cardTitle = document.querySelector('.popup__title_type_fullscreen-card');
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

addFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  const cardNameField = document.querySelector('.popup__input_content_title');
  const cardSrcField = document.querySelector('.popup__input_content_src');
  addCard(cardNameField.value, cardSrcField.value);
  closePopup(addCardPopup);
  addFormEl.reset();
})

function openPopup(popupEl) {
    popupEl.classList.add('popup_type_is-open');
}

function closePopup(popupEl) {
    popupEl.classList.remove('popup_type_is-open');
}

editBtn.addEventListener('click', function() {
    openPopup(editNamePopup);
    nameField.value = profileName.textContent;
    descriptionField.value = profileDescription.textContent;
})

editNamePopupCloseBtn.addEventListener('click', function() {
    closePopup(editNamePopup);
})

editFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    profileName.textContent = nameField.value;
    profileDescription.textContent = descriptionField.value;
    closePopup(editNamePopup);
})

addBtn.addEventListener('click', function() {
  openPopup(addCardPopup);
})

addClosePopup.addEventListener('click', function() {
  closePopup(addCardPopup);
})

