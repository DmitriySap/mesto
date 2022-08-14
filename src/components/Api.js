export default class Api {
    constructor(options) {
        this._host = options.host;
        this._headers = options.headers;
    };

    getUserInfo() {
        return fetch(`${this._host}/users/me`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            };

            return new Promise.reject(`Ошибка: ${res.status}`);
        })
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

    editProfileInfo(user) {
        return fetch(`${this._host}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: user.name,
                about: user.about
            })
        }
        )
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return new Promise.reject(`Ошибка: ${res.status}`);
        });
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

    likeCard(like) {
        return fetch(`${this._host}/cards${like._id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return new Promise.reject(`Ошибка: ${res.status}`);
        })
    };

    dislikeCard(like) {
        return fetch(`${this._host}/cards${like._id}/likes`, {
            method: 'DELETE',
            headers:this._headers
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return new Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    deleteCard(id) {
        return fetch(`${this._host}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return new Promise.reject(`Ошибка: ${res.status}`);
        })
    };

    editAvatar(avatar) {
        return fetch(`${this._host}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar.avatar
            })
        }
        )
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return new Promise.reject(`Ошибка: ${res.status}`);
        });
    };
};