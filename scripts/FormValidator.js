export class FormValidator {
    constructor(validationConfig, formElement) {
        this._formElement = formElement;
        this._formSelector = validationConfig.formSelector;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
    }

    _hasInvalidInput() {
        return this._inputList.some(inputEl => {
            return !inputEl.validity.valid;
          })
    };

    _disableSubmitButton() {
        this._buttonEl.classList.add(this._inactiveButtonClass);
        this._buttonEl.setAttribute('disabled', 'disabled');
    };

    _enableSubmitButton() {
        this._buttonEl.classList.remove(this._inactiveButtonClass);
        this._buttonEl.removeAttribute('disabled', 'disabled');
    };

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        }
        else {
            this._enableSubmitButton();
        }
    };

    _showInputError(inputEl) {
        this._errorEL = this._formElement.querySelector(`.${inputEl.id}-error`);
        inputEl.classList.add(this._inputErrorClass);
        this._errorEL.textContent = inputEl.validationMessage;
        this._errorEL.classList.add(this._errorClass);
    };

    _hideInputError(inputEl) {
        this._errorEL = this._formElement.querySelector(`.${inputEl.id}-error`);
        inputEl.classList.remove(this._inputErrorClass);
        this._errorEL.textContent = '';
        this._errorEL.classList.remove(this._errorClass);
    };

    _checkInputValidity(inputEl) {
        if (!inputEl.validity.valid) {
            this._showInputError(inputEl);
        }
        else {
            this._hideInputError(inputEl);
        }
    };

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonEl = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState();

        this._inputList.forEach(inputEl => {
            inputEl.addEventListener('input', () => {
                this._checkInputValidity(inputEl);
                this._toggleButtonState();
            });
        });
    };

    enableValidation() {
        this._setEventListeners();
    };
}