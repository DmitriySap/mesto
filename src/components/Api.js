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

            return Promise.reject(`Ошибка: ${res.status}`);
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

            return Promise.reject(`Ошибка: ${res.status}`);
        });
    };

    editProfileInfo(data) {
        return fetch(`${this._host}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.firstname,
                about: data.description
            })
        }
        )
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return Promise.reject(`Ошибка: ${res.status}`);
        });
    };

    addNewCard(name, link) {
        return fetch(`${this._host}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return Promise.reject(`Ошибка: ${res.status}`);
        });
    };

    likeCard(id) {
        return fetch(`${this._host}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return Promise.reject(`Ошибка: ${res.status}`);
        })
    };

    dislikeCard(id) {
        return fetch(`${this._host}/cards/${id}/likes`, {
            method: 'DELETE',
            headers:this._headers
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return Promise.reject(`Ошибка: ${res.status}`);
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

            return Promise.reject(`Ошибка: ${res.status}`);
        })
    };

    editAvatar(data) {
        return fetch(`${this._host}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link
            })
        }
        )
        .then(res => {
            if(res.ok) {
                return res.json();
            };

            return Promise.reject(`Ошибка: ${res.status}`);
        });
    };
};