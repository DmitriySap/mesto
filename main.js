(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._src=e.link,this._cardSelector=n,this._handleOpenImagePopup=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".card__image"),this._likeButton=this._element.querySelector(".card__like-button"),this._setEventListeners(),this._element.querySelector(".card__title").textContent=this._name,this._image.src=this._src,this._image.alt=this._name,this._element}},{key:"_handleLikeCard",value:function(){this._likeButton.classList.toggle("card__like-button_type_is-active")}},{key:"_handleDeleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeCard()})),this._element.querySelector(".card__delete-button").addEventListener("click",(function(){e._handleDeleteCard()})),this._image.addEventListener("click",(function(){e._handleOpenImagePopup(e._name,e._src)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,r;return t=e,(r=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableSubmitButton",value:function(){this._buttonEl.classList.add(this._inactiveButtonClass),this._buttonEl.setAttribute("disabled","disabled")}},{key:"_enableSubmitButton",value:function(){this._buttonEl.classList.remove(this._inactiveButtonClass),this._buttonEl.removeAttribute("disabled","disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"_showInputError",value:function(e){this._errorEL=this._formElement.querySelector(".".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._errorEL.textContent=e.validationMessage,this._errorEL.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._errorEL=this._formElement.querySelector(".".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._errorEL.textContent="",this._errorEL.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonEl=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItem",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_type_is-open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_type_is-open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup__close")||t.target.classList.contains("popup__overlay"))&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function _(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._fullScreenImage=t._popup.querySelector(".popup__image"),t._fullScreenImageTitle=t._popup.querySelector(".popup__title"),t}return t=u,(n=[{key:"open",value:function(e,t){l(d(u.prototype),"open",this).call(this),this._fullScreenImage.src=t,this._fullScreenImage.alt=e,this._fullScreenImageTitle.textContent=e}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function g(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._formSubmit=t,n._formEl=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;v(E(u.prototype),"setEventListeners",this).call(this),this._formEl.addEventListener("submit",(function(t){t.preventDefault(),e._formSubmit(e._getInputValues())}))}},{key:"close",value:function(){v(E(u.prototype),"close",this).call(this),this._formEl.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c),w=document.querySelector(".profile__edit-button"),O=(document.querySelector(".popup__close_type_edit-name"),document.querySelector(".profile__name")),L=document.querySelector(".popup__input_content_name"),j=document.querySelector(".profile__description"),C=document.querySelector(".popup__input_content_description"),I=document.querySelector(".popup__form_type_edit-name"),q=(document.querySelector("#save-button"),document.querySelector(".popup_type_add-card"),document.querySelector(".popup__close_type_add-card"),document.querySelector(".profile__add-button")),P=(document.querySelector(".popup__overlay_type_add-card"),document.querySelector(".popup__overlay_type_fullscreen-card"),document.querySelector(".popup__form_type_add-card")),B=(document.querySelector(".popup__input_content_title"),document.querySelector(".popup__input_content_src"),document.querySelector(".popup__image"),document.querySelector(".popup__title_type_fullscreen-card"),document.querySelector(".popup_type_fullscreen-card"),document.querySelector(".cards")),x={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_type_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_type_active"};function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.name,r=t.description;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._description=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={nameInput:this._name.textContent,descriptionInput:this._description.textContent},this._userInfo}},{key:"setUserInfo",value:function(e){this._name.textContent=e.firstname,this._description.textContent=e.description}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),V=new r(x,P),D=new r(x,I);V.enableValidation(),D.enableValidation();var A=new y(".popup_type_fullscreen-card");A.setEventListeners();var U=new T({name:O,description:j}),z=new k(".popup_type_add-card",(function(e){var t=N(e);F.addItem(t),z.close()}));z.setEventListeners();var M=new k(".popup_type_edit-name",(function(e){U.setUserInfo(e),M.close()}));function N(e){return new t(e,".card-template",G).generateCard()}M.setEventListeners();var F=new i({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",alt:"Архыз"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",alt:"Челябинская область"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",alt:"Иваново"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",alt:"Камчатка"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",alt:"Холмогорский район"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",alt:"Байкал"}],renderer:function(e){var t=N(e);F.addItem(t)}},B);function G(e,t){A.open(e,t)}F.renderItem(),q.addEventListener("click",(function(){V.disableSubmitButton(),z.open()})),w.addEventListener("click",(function(){var e=U.getUserInfo();L.value=e.nameInput,C.value=e.descriptionInput,M.open()}))})();