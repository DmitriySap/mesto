export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._src = data.link;
        this._cardSelector = cardSelector;
    };

    _getTemplate() {
        const cardEl = document.querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardEl;
    };

    //основная функция создания карточки
    generateCard() {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.card__image');
        this._setEventListeners();

        this._element.querySelector('.card__title').textContent = this._name;
        this._image.src = this._src;
        this._image.alt = this._name;

        return this._element;
    };

    _handleLikeCard() {
        this._element.querySelector('.card__like-button').classList.toggle('card__like-button_type_is-active');
    };

    _handleDeleteCard() {
        this._element.remove();
    };

    _handleOpenFullscreenCard() {
        document.querySelector('.popup__image').src = this._src;
        document.querySelector('.popup__title_type_fullscreen-card').textContent = this._name;
        document.querySelector('.popup_type_fullscreen-card').classList.add('popup_type_is-open');
    };

    _handleCloseFullscreenCard() {
        document.querySelector('.popup_type_fullscreen-card').classList.remove('popup_type_is-open');
    };

    _setEventListeners() {
        this._element.querySelector('.card__like-button').addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._element.querySelector('.card__delete-button').addEventListener('click', () => {
            this._handleDeleteCard();
        });

        this._element.querySelector('.card__image').addEventListener('click', () => {
            this._handleOpenFullscreenCard();
        });

        document.querySelector('.popup__close_type_fullscreen-card').addEventListener('click', () => {
            this._handleCloseFullscreenCard();
        });
    };
}