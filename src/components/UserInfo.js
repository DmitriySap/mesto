export default class UserInfo {
    constructor({name, description, avatar}) {
        this._name = name;
        this._description = description;
        this._avatar = avatar;
    };

    getUserInfo() {
        this._userInfo = {
            nameInput: this._name.textContent,
            descriptionInput: this._description.textContent
        };

        return this._userInfo;
    };

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._description.textContent = data.about;
        this._avatar.src = data.avatar;
    };
};