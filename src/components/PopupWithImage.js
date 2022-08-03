import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._fullScreenImage = this._popup.querySelector('.popup__image');
        this._fullScreenImageTitle = this._popup.querySelector('.popup__title');
    };

    open(title, link) {
        super.open();

        this._fullScreenImage.src = link;
        this._fullScreenImage.alt = title;
        this._fullScreenImageTitle.textContent = title;
    };
};