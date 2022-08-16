import Popup from './Popup.js';

export default class PopupWithDeleteConfirm extends Popup{
    constructor(popupSelector, handleSubmitDelete) {
        super(popupSelector);
        this._handleSubmitDelete = handleSubmitDelete;
        this._formEl = this._popup.querySelector('.popup__form');
    }
    
    ownerCard(item) {
        return this._card = item;
    }

    setEventListeners() {
        super.setEventListeners();

        this._formEl.addEventListener('submit', e => {
            e.preventDefault();
            this._handleSubmitDelete(this._card);
        })
    }
}