export default class Card {
    constructor(data, cardSelector, handleOpenImagePopup, handleDeleteCardPopup, userId, handleLikeCard, handleDislikeCard) {
        this._name = data.name;
        this._src = data.link;
        this._cardSelector = cardSelector;
        this._handleOpenImagePopup = handleOpenImagePopup;
        this._handleDeleteCardPopup = handleDeleteCardPopup;
        this._cardId = data._id;
        this._owner = data.owner._id;
        this._userId = userId;
        this._handleLikeCard = handleLikeCard;
        this._handleDislikeCard = handleDislikeCard;
        this._likes = data.likes;
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
        this._isCardOwner();

        this._image = this._element.querySelector('.card__image');
        this._likeButton = this._element.querySelector('.card__like-button');
        this._likeCounter = this._element.querySelector('.card__like-counter');
        this._likeCounter.textContent = this._likes.length;
        this._element.querySelector('.card__title').textContent = this._name;
        this._image.src = this._src;
        this._image.alt = this._name;
        
        this._setEventListeners();
        this._isLikeOwner();

        return this._element;
    };

    _isCardOwner() {
        this._deleteBtn = this._element.querySelector('.card__delete-button');
        if (this._userId == this._owner) {
            this._deleteBtn.classList.add('card__delete-button_type_is-active')
        }
        else {
            this._deleteBtn.classList.remove('card__delete-button_type_is-active');
        }
    };

    _isLikeOwner() {
        this._likes.forEach(element => {
            if(element._id === this._userId) {
                this.likeCard()
            }
            else {
                this.dislikeCard();
            }
        });
    };
    
    likeCard() {
        this._likeButton.classList.add('card__like-button_type_is-active');
    };

    dislikeCard() {
        this._likeButton.classList.remove('card__like-button_type_is-active');
    };

    countLikes(like) {
        this._likeCounter.textContent = like.likes.length;
    }

    handleDeleteCard() {
        this._element.remove();
    };

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains('card__like-button_type_is-active')) {
                this._handleDislikeCard();
            }
            else {
                this._handleLikeCard();
            }
        });

        this._element.querySelector('.card__delete-button').addEventListener('click', () => {
            this._handleDeleteCardPopup(this);
        });

        this._image.addEventListener('click', () => {
            this._handleOpenImagePopup(this._name, this._src);
        });
    };
}