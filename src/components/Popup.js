export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    };

    open() {
        this._popupSelector.classList.add('popup_type_is-open');
        document.addEventListener('keydown', this._handleEscClose);
    };

    close() {
        this._popupSelector.classList.remove('popup_type_is-open');
        document.removeEventListener('keydown', this._handleEscClose);
    };

    _handleEscClose(e) {
        if (e.key === 'Escape') {
            this.close();
        };
    };

    setEventListeners() {
        this._popupSelector.addEventListener('click', evt => {
            if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup__overlay')) {
                this.close();
            };
        });
    };
};