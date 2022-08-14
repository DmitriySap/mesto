import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._formEl = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._saveButton = this._formEl.querySelector('.popup__save-button')
    };

    _getInputValues() {
        this._formValues = {};

        this._inputList.forEach(item => {
            this._formValues[item.name] = item.value;
        });
        return this._formValues;
    };

    setEventListeners() {
        super.setEventListeners();

        this._formEl.addEventListener('submit', evt => {
            evt.preventDefault();
            this._formSubmit(this._getInputValues());
        });
    };

    close() {
        super.close();

        this._formEl.reset();
    };

    editSaveButtonState(isLoading) {
        if (isLoading) {
            this._saveButton.textContent = 'Сохранение...';
        }
        else {
            this._saveButton.textContent = 'Сохранить';
        };
    };
};