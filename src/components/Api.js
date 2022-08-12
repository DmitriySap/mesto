export default class Api {
    constructor(options) {
        this._host = options.host;
        this._headers = options.headers;
    };

    getUserInfo() {

    };

    getInitialCards() {
        return fetch(`${this._host}/cards`, {
            headers: this._headers
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return new Promise.reject(`Ошибка: ${res.status}`);
        });
    };

    editProfileInfo() {

    };

    addNewCard(card) {
        return fetch(`${this._host}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: card.name,
                link: card.link
            })
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return new Promise.reject(`Ошибка: ${res.status}`);
        });
    };

    likeCard() {

    };

    deleteCard() {

    };

    editAvatar() {
        
    };
};