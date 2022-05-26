const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const nameField = document.querySelector('.popup__input_content_name');
const profileDescription = document.querySelector('.profile__description');
const descriptionField = document.querySelector('.popup__input_content_description');
const formEl = document.querySelector('.popup__form');

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
