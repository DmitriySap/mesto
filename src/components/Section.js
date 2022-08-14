export default class Section {
    constructor({renderer}, container) {
        this._renderer = renderer;
        this._container = container;
    };

    addItem(item) {
        this._container.prepend(item);
    };

    renderItem(items) {
        this._renderedItems = items;
        this._renderedItems.forEach(item => {
            this._renderer(item);
        });
    };
};