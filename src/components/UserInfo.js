export default class UserInfo {
    constructor({name, description}) {
        this._name = name;
        this._description = description;
    };

    getUserInfo() {
        this._userInfo = {
            nameInput: this._name.textContent,
            descriptionInput: this._description.textContent
        };

        return this._userInfo;
    };

    setUserInfo(data) {
        this._name.textContent = data.firstname;
        this._description.textContent = data.description;
    };
};