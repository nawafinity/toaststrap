var Toaststrap;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/styles.scss":
/*!********************************!*\
  !*** ./src/assets/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/RelativeDate.ts":
/*!*****************************!*\
  !*** ./src/RelativeDate.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RelativeDate = /** @class */ (function () {
    function RelativeDate(input, reference) {
        this.times = {
            SECOND: 1000,
            MINUTE: 60 * 1000,
            HOUR: 60 * 60 * 1000,
            DAY: 24 * 60 * 60 * 1000,
            WEEK: 7 * 24 * 60 * 60 * 1000,
            YEAR: 365 * 24 * 60 * 60 * 1000,
            MONTH: (365 * 24 * 60 * 60 * 1000) / 12,
        };
        this.formats = [
            [0.7 * this.times.MINUTE, "just now"],
            [1.5 * this.times.MINUTE, "a minute ago"],
            [60 * this.times.MINUTE, "minutes ago", this.times.MINUTE],
            [1.5 * this.times.HOUR, "an hour ago"],
            [this.times.DAY, "hours ago", this.times.HOUR],
            [2 * this.times.DAY, "yesterday"],
            [7 * this.times.DAY, "days ago", this.times.DAY],
            [1.5 * this.times.WEEK, "a week ago"],
            [this.times.MONTH, "weeks ago", this.times.WEEK],
            [1.5 * this.times.MONTH, "a month ago"],
            [this.times.YEAR, "months ago", this.times.MONTH],
            [1.5 * this.times.YEAR, "a year ago"],
            [Number.MAX_VALUE, "years ago", this.times.YEAR],
        ];
        this.input = input;
        this.reference = reference;
        if (!reference) {
            this.reference = (new Date()).getTime();
        }
        else if (reference instanceof Date) {
            this.reference = reference.getTime();
        }
        if (input instanceof Date) {
            this.input.getTime();
        }
        if (typeof input === "string") {
            this.input = +new Date(input).getTime();
        }
        return this;
    }
    RelativeDate.prototype.print = function () {
        var delta = this.reference - this.input;
        var format;
        var index;
        var length;
        for (index = -1, length = this.formats.length; ++index < length;) {
            format = this.formats[index];
            if (delta < format[0]) {
                return format[2] == undefined ? format[1] : Math.round(delta / format[2]) + " " + format[1];
            }
        }
        return "Unknown";
    };
    return RelativeDate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelativeDate);


/***/ }),

/***/ "./src/Toaststrap.ts":
/*!***************************!*\
  !*** ./src/Toaststrap.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferences */ "./src/preferences.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ "./src/components/header.ts");
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/body */ "./src/components/body.ts");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/container */ "./src/components/container.ts");
/* harmony import */ var _components_sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sound */ "./src/components/sound.ts");
/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/progress */ "./src/components/progress.ts");
/* harmony import */ var _RelativeDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RelativeDate */ "./src/RelativeDate.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};









/**
 * Toaststrap class for building and generating the Toaststrap's toast.
 *
 * @class Toaststrap
 * @version 1.0.1
 */
var Toaststrap = /** @class */ (function () {
    /**
     * Create a Toaststrap.
     *
     * @param {OptionsType} options - Available options to customize the toast.
     */
    function Toaststrap(options) {
        var _this = this;
        /**
         * Event to close toast. Used in header component.
         *
         * @return {void}
         */
        this.closeEvent = function () {
            _this.destroy(_this.item);
        };
        this.options = __assign({ avatar: "", dismissible: true, duration: 3000, offset: 10, parent: "body", pausable: true, position: _preferences__WEBPACK_IMPORTED_MODULE_0__.POSITIONS.TOP_END, progress: true, snackbar: false, soundSource: "", soundable: false, subtitle: {
                relative: true,
                datetime: Date.now()
            }, text: "", title: "", type: _preferences__WEBPACK_IMPORTED_MODULE_0__.TYPES.DEFAULT }, options);
        // Set the toast timeout.
        if (typeof this.options.subtitle !== "string") {
            if (typeof this.options.subtitle === "object" && "datetime" in this.options.subtitle) {
                var delta = this.options.subtitle;
                if ("relative" in this.options.subtitle && (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toBoolean)(this.options.subtitle.relative)) {
                    this.options.subtitle = (new _RelativeDate__WEBPACK_IMPORTED_MODULE_7__["default"](delta.datetime).print());
                }
                else {
                    this.options.subtitle = String(delta.datetime);
                }
            }
        }
        // Set toast group.
        // The toast group used to organized the toasts.
        this.group = this.options.position || _preferences__WEBPACK_IMPORTED_MODULE_0__.POSITIONS.TOP_END;
        if (Object.keys(_preferences__WEBPACK_IMPORTED_MODULE_0__.POSITIONS).includes(this.options.position)) {
            this.options.position = _preferences__WEBPACK_IMPORTED_MODULE_0__["default"].positions[this.options.position];
        }
        else {
            this.options.position = _preferences__WEBPACK_IMPORTED_MODULE_0__["default"].positions.TOP_END;
        }
        this.item = document.createElement("div");
        this.spaceBetween = 5;
        if (this.options.soundable && this.options.soundSource && this.options.soundSource.length > 0) {
            this.sound = new _components_sound__WEBPACK_IMPORTED_MODULE_5__["default"](this.options.soundSource, this.parentElement);
        }
        this.id = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateId)();
        this.createdAt = Date.now().toString();
        this.timeout = setTimeout(function () {
        }, 0);
        this.progressInterval = setInterval(function () {
        }, 0);
        this.pauseProgressInterval = false;
        this.progressStartTime = 0;
    }
    /**
     * Push the toast to the document parent node.
     *
     * @return {this} The toast instance.
     */
    Toaststrap.prototype.show = function () {
        var root = this.parentElement;
        var toast = this.build;
        root.insertBefore(toast, root.firstChild);
        // Play sound if it's allowed.
        if (this.sound) {
            this.sound.instance.play().catch(function () {
                console.warn("Sound source given not found or not supported.");
            });
        }
        // Order toasts.
        this.organize();
        return this;
    };
    Object.defineProperty(Toaststrap.prototype, "build", {
        /**
         * Build the toast element.
         *
         * @return {HTMLElement} The generated toast.
         */
        get: function () {
            var _a;
            var _this = this;
            // Container Element
            var container = (0,_components_container__WEBPACK_IMPORTED_MODULE_4__.ToastContainer)(this);
            // Toast Element
            var toastElement = document.createElement("div");
            toastElement.classList.add("toast");
            container.setAttribute("data-id", this.id);
            container.setAttribute("data-created-at", this.createdAt);
            container.setAttribute("data-type", this.options.type ? this.options.type.toLowerCase() : "");
            container.setAttribute("data-group", this.group);
            container.setAttribute("data-snackbar", String(this.options.snackbar));
            // Toast Header (only if option hideHeader is set to false).
            if (!Boolean(this.options.snackbar)) {
                toastElement.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent)(this));
            }
            else {
                (_a = toastElement.classList).add.apply(_a, _preferences__WEBPACK_IMPORTED_MODULE_0__["default"].types[this.options.type]);
            }
            // Toast Body
            toastElement.appendChild((0,_components_body__WEBPACK_IMPORTED_MODULE_3__.ToastBody)(this));
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toBoolean)(this.options.progress)) {
                // Toast Progress
                toastElement.appendChild((0,_components_progress__WEBPACK_IMPORTED_MODULE_6__.ProgressComponent)(this));
            }
            // Put toast into it's container.
            container.appendChild(toastElement);
            // Watch toast height changed, and re-order if happen.
            new ResizeObserver(function () {
                _this.organize();
            }).observe(container);
            // Toast instance.
            this.item = container;
            // Show the toast by adding class (.show)
            container.classList.add("show");
            if (this.options.duration > 0) {
                this.timeout = setTimeout(function () {
                    _this.destroy(container);
                }, this.options.duration);
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toBoolean)(this.options.pausable)) {
                    var touchStartCallBack_1 = function () {
                        clearTimeout(_this.timeout);
                        _this.pauseProgressInterval = true;
                    };
                    var touchEndCallBack_1 = function () {
                        _this.pauseProgressInterval = false;
                        _this.progressStartTime = new Date().getTime();
                        _this.timeout = setTimeout(function () {
                            _this.destroy(_this.item);
                        }, _this.options.duration);
                    };
                    "mouseover touchstart touchend".split(" ").forEach(function (e) {
                        _this.item.addEventListener(e, touchStartCallBack_1);
                    });
                    "mouseleave touchend".split(" ").forEach(function (e) {
                        _this.item.addEventListener(e, touchEndCallBack_1);
                    });
                }
            }
            // Return toast instance.
            return container;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Toaststrap.prototype, "parentElement", {
        /**
         *  The parent element, which will contain the toasts.
         * @return {Element}  The main element selected by the user if available, or the default parent.
         */
        get: function () {
            if (this.options.parent) {
                var userRootElement = document.querySelector(this.options.parent);
                if (!userRootElement) {
                    throw "User root element not exists.";
                }
                if (Array.isArray(userRootElement)) {
                    return userRootElement[0];
                }
                return userRootElement;
            }
            return document.body;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Remove the element from dom after timeout finished.
     */
    Toaststrap.prototype.destroy = function (toastElement) {
        // Hide the element.
        toastElement.classList.remove("show");
        if (typeof this.options.onClose === "function") {
            this.options.onClose(this);
        }
        window.setTimeout(function () {
            var _a;
            (_a = toastElement.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(toastElement);
        }, 400);
    };
    Toaststrap.prototype.organize = function () {
        var _this = this;
        var offset = this.options.offset;
        var topLeftOffsetSize = {
            top: Number(offset),
            bottom: Number(offset),
        };
        var topRightOffsetSize = {
            top: Number(offset),
            bottom: Number(offset),
        };
        var offsetSize = {
            top: Number(offset),
            bottom: Number(offset),
        };
        var selector = ".".concat((0,_preferences__WEBPACK_IMPORTED_MODULE_0__.gclass)("container"), "[data-group='").concat(this.group, "']");
        var windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (windowWidth <= 360) {
            selector = ".".concat((0,_preferences__WEBPACK_IMPORTED_MODULE_0__.gclass)("container"));
        }
        var toasts = document.querySelectorAll(selector);
        var classUsed;
        if (toasts.length > 0) {
            toasts.forEach(function (toast) {
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.hasClass)(toast, (0,_preferences__WEBPACK_IMPORTED_MODULE_0__.gclass)("top"))) {
                    classUsed = (0,_preferences__WEBPACK_IMPORTED_MODULE_0__.gclass)("top");
                }
                else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.hasClass)(toast, (0,_preferences__WEBPACK_IMPORTED_MODULE_0__.gclass)("middle"))) {
                    classUsed = (0,_preferences__WEBPACK_IMPORTED_MODULE_0__.gclass)("middle");
                }
                else {
                    classUsed = (0,_preferences__WEBPACK_IMPORTED_MODULE_0__.gclass)("bottom");
                }
                var toastHeight = toast.offsetHeight;
                classUsed = classUsed.substr("".concat(_preferences__WEBPACK_IMPORTED_MODULE_0__.cprefix, "-").length - 1, classUsed.length - 1);
                // Show toast in center if screen with less than or equal to 360px.
                if (windowWidth <= 360) {
                    toast.style[classUsed] = offsetSize[classUsed] + "px";
                    offsetSize[classUsed] += toastHeight + _this.spaceBetween;
                }
                else {
                    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.hasClass)(toast, "start-".concat(_this.options.offset))) {
                        toast.style[classUsed] = topLeftOffsetSize[classUsed] + "px";
                        topLeftOffsetSize[classUsed] += toastHeight + _this.spaceBetween;
                    }
                    else {
                        toast.style[classUsed] = topRightOffsetSize[classUsed] + "px";
                        topRightOffsetSize[classUsed] += toastHeight + _this.spaceBetween;
                    }
                }
            });
        }
    };
    return Toaststrap;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toaststrap);


/***/ }),

/***/ "./src/components/body.ts":
/*!********************************!*\
  !*** ./src/components/body.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastBody": () => (/* binding */ ToastBody)
/* harmony export */ });
var ToastBody = function (context) {
    var options = context.options;
    var bodyElement = document.createElement("div");
    bodyElement.classList.add("toast-body");
    bodyElement.innerHTML = options.text;
    return bodyElement;
};


/***/ }),

/***/ "./src/components/container.ts":
/*!*************************************!*\
  !*** ./src/components/container.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastContainer": () => (/* binding */ ToastContainer)
/* harmony export */ });
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../preferences */ "./src/preferences.ts");

var ToastContainer = function (context) {
    var options = context.options;
    var containerElement = document.createElement("div");
    containerElement.className = "".concat(context.options.parent ? "position-absolute" : "position-fixed", " ").concat(options.position, "-").concat(options.offset, " ").concat((0,_preferences__WEBPACK_IMPORTED_MODULE_0__.gclass)("container"));
    containerElement.style.zIndex = "2500";
    return containerElement;
};


/***/ }),

/***/ "./src/components/header.ts":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preferences */ "./src/preferences.ts");


var AvatarComponent = function (options) {
    var avatarElement = document.createElement("img");
    avatarElement.classList.add("rounded", "me-2");
    avatarElement.src = options.avatar || "";
    avatarElement.width = 20;
    avatarElement.height = 20;
    return avatarElement;
};
var CloseButtonComponent = function (onCloseEvent) {
    var closeBtnElement = document.createElement("button");
    closeBtnElement.classList.add("btn-close");
    closeBtnElement.setAttribute("type", "button");
    closeBtnElement.setAttribute("area-label", "Close");
    closeBtnElement.addEventListener("click", function (evt) {
        evt.stopPropagation();
        onCloseEvent();
    });
    return closeBtnElement;
};
var HeaderComponent = function (context) {
    var _a;
    var options = context.options;
    var headerElement = document.createElement("div");
    headerElement.classList.add("toast-header");
    // Avatar element
    if (options.avatar) {
        headerElement.appendChild(AvatarComponent(options));
    }
    if (options.type) {
        (_a = headerElement.classList).add.apply(_a, _preferences__WEBPACK_IMPORTED_MODULE_1__["default"].types[options.type]);
    }
    // Create title element.
    var titleElement = document.createElement("strong");
    titleElement.classList.add("me-auto");
    titleElement.innerText = options.title;
    headerElement.appendChild(titleElement);
    if (options.subtitle) {
        // time
        var timeElement = document.createElement("small");
        if (typeof options.subtitle === "string") {
            timeElement.innerText = options.subtitle;
        }
        headerElement.appendChild(timeElement);
    }
    // Close button
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(options.dismissible)) {
        headerElement.appendChild(CloseButtonComponent(context.closeEvent));
    }
    // Return header element.
    return headerElement;
};


/***/ }),

/***/ "./src/components/progress.ts":
/*!************************************!*\
  !*** ./src/components/progress.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressComponent": () => (/* binding */ ProgressComponent)
/* harmony export */ });
var ProgressComponent = function (factory) {
    var duration = factory.options.duration;
    var progressElement = document.createElement("div");
    progressElement.classList.add("toast-footer");
    var indicatorElement = document.createElement("div");
    indicatorElement.classList.add("toast-footer-inner");
    progressElement.appendChild(indicatorElement);
    if (duration > 0) {
        duration < 100 ? duration = duration * 1000 : duration;
        indicatorElement.style.animationDuration = "".concat(duration, "ms");
    }
    /**
     * I made this to make progress move when duration is set.
     * But it's kill the performance, so I decided to use CSS to do that.
     *
     * @deprecated
     */
    // @ts-ignore
    var start = function () {
        factory.progressStartTime = new Date().getTime();
        // >..< I will just use css to do that.
        if (duration > 0) {
            factory.progressInterval = setInterval(function () {
                if (!factory.pauseProgressInterval) {
                    var diff = Math.round(new Date().getTime() - factory.progressStartTime);
                    var value = Math.round(diff / duration * 100);
                    value = value > 100 ? 100 : value;
                    indicatorElement.style.width = value + "%";
                    if (diff >= duration) {
                        clearInterval(factory.progressInterval);
                    }
                }
            }, 100);
        }
    };
    return progressElement;
};


/***/ }),

/***/ "./src/components/sound.ts":
/*!*********************************!*\
  !*** ./src/components/sound.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../preferences */ "./src/preferences.ts");

var Sound = /** @class */ (function () {
    function Sound(audioFile, parentElement) {
        this.selector = "".concat(_preferences__WEBPACK_IMPORTED_MODULE_0__.cprefix, "-notification");
        this.element = new Audio(audioFile);
        this.parent = parentElement;
        this.make();
        return this;
    }
    Sound.prototype.make = function () {
        this.element.id = this.selector;
        if (!this.parent.querySelector("#" + this.selector)) {
            this.parent.appendChild(this.element);
        }
    };
    Object.defineProperty(Sound.prototype, "instance", {
        get: function () {
            return this.element;
        },
        enumerable: false,
        configurable: true
    });
    return Sound;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sound);


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "toBoolean": () => (/* binding */ toBoolean),
/* harmony export */   "generateId": () => (/* binding */ generateId)
/* harmony export */ });
var hasClass = function (element, className) {
    return element.classList.contains(className);
};
var generateId = function () {
    return String(Math.floor(10000000000 + Math.random() * 9000000000));
};
/**
 * Quick fix of boolean
 * @see https://stackoverflow.com/questions/44024193/typescript-string-to-boolean
 */
var toBoolean = function (value) {
    if (typeof value === "boolean") {
        return value;
    }
    if (!value) {
        //Could also throw an exception up to you
        return false;
    }
    switch (value.toLocaleLowerCase()) {
        case "true":
        case "1":
        case "on":
        case "yes":
            return true;
        default:
            return false;
    }
};



/***/ }),

/***/ "./src/preferences.ts":
/*!****************************!*\
  !*** ./src/preferences.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cprefix": () => (/* binding */ cprefix),
/* harmony export */   "gclass": () => (/* binding */ gclass),
/* harmony export */   "POSITIONS": () => (/* binding */ POSITIONS),
/* harmony export */   "TYPES": () => (/* binding */ TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Prefix will be applied to all css classes.
 */
var cprefix = "toaststrap-";
/**
 * Get the classname with the prefix.
 * @param {string} c
 */
function gclass(c) {
    return cprefix + c;
}
var POSITIONS;
(function (POSITIONS) {
    POSITIONS["TOP_START"] = "TOP_START";
    POSITIONS["TOP_END"] = "TOP_END";
    POSITIONS["TOP_CENTER"] = "TOP_CENTER";
    POSITIONS["BOTTOM_START"] = "BOTTOM_START";
    POSITIONS["BOTTOM_END"] = "BOTTOM_END";
    POSITIONS["BOTTOM_CENTER"] = "BOTTOM_CENTER";
})(POSITIONS || (POSITIONS = {}));
var TYPES;
(function (TYPES) {
    TYPES["DEFAULT"] = "DEFAULT";
    TYPES["PRIMARY"] = "PRIMARY";
    TYPES["INFO"] = "INFO";
    TYPES["SUCCESS"] = "SUCCESS";
    TYPES["WARNING"] = "WARNING";
    TYPES["DANGER"] = "DANGER";
    TYPES["DARK"] = "DARK";
    TYPES["SWEET"] = "SWEET";
})(TYPES || (TYPES = {}));
/**
 *
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    positions: {
        // TOP
        TOP_START: gclass("top") + " " + gclass("start"),
        TOP_END: gclass("top") + " " + gclass("end"),
        TOP_CENTER: gclass("top") + " " + gclass("center"),
        // Bottom
        BOTTOM_CENTER: gclass("bottom") + " " + gclass("center"),
        BOTTOM_START: gclass("bottom") + " " + gclass("start"),
        BOTTOM_END: gclass("bottom") + " " + gclass("end"),
    },
    types: {
        DEFAULT: ["bg-default"],
        PRIMARY: ["bg-primary", "text-light"],
        INFO: ["bg-info", "text-light"],
        SUCCESS: ["bg-success", "text-light"],
        WARNING: ["bg-warning", "text-dark"],
        DANGER: ["bg-danger", "text-light"],
        DARK: ["bg-dark", "text-light"],
        SECONDARY: ["bg-secondary", "text-light"],
        // I made this one for fun, you can add your own styles too.
        SWEET: ["bg-sweet", "text-light"],
    },
});


/***/ }),

/***/ "./src/typecheck.ts":
/*!**************************!*\
  !*** ./src/typecheck.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var checks = [
    ["TYPE_CHECK", "dismissible", "boolean"],
    ["TYPE_CHECK", "duration", "number"],
    ["TYPE_CHECK", "offset", "{5, 10, 15, 20}"],
    ["TYPE_CHECK", "onClose", "function"],
    ["TYPE_CHECK", "onShow", "function"],
    ["TYPE_CHECK", "parent", "string"],
    ["TYPE_CHECK", "pausable", "boolean"],
    ["TYPE_CHECK", "position", "string"],
    ["TYPE_CHECK", "progress", "boolean"],
    ["TYPE_CHECK", "snackbar", "boolean"],
    ["TYPE_CHECK", "soundSource", "string"],
    ["TYPE_CHECK", "soundable", "boolean"],
    ["TYPE_CHECK", "subtitle", ["string", "object"]],
    ["TYPE_CHECK", "text", "string"],
    ["TYPE_CHECK", "title", "string"],
    ["TYPE_CHECK", "type", "string"],
];
var filters = function (options) {
    if (checks.length > 0) {
        checks.forEach(function (check) {
            var secondIndex = check[1];
            var lastIndex = check[2];
            if (Array.isArray(lastIndex)) {
                // Check all cases.
            }
            else {
                if (options[secondIndex] && typeof options[secondIndex] !== lastIndex) {
                    throw secondIndex + '   ' + lastIndex;
                }
            }
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filters);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/browser.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toaststrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toaststrap */ "./src/Toaststrap.ts");
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferences */ "./src/preferences.ts");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles.scss */ "./src/assets/styles.scss");
/* harmony import */ var _typecheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typecheck */ "./src/typecheck.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




/**
 *
 * @param {OptionsType} options
 */
var initialize = function (options) {
    // Securing types.
    if (Object.keys(options).length) {
        (0,_typecheck__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
    }
    return new _Toaststrap__WEBPACK_IMPORTED_MODULE_0__["default"](__assign({}, options));
};
// Window
window.toaststrap = initialize;
window.toaststrap_position = _preferences__WEBPACK_IMPORTED_MODULE_1__.POSITIONS;
window.toaststrap_type = _preferences__WEBPACK_IMPORTED_MODULE_1__.TYPES;

})();

Toaststrap = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1Y7QUFDSixDQUFDO0FBRUQsU0FBUztBQUNULE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVTtBQUM5QixNQUFNLENBQUMsbUJBQW1CLEdBQUcsbURBQVM7QUFDdEMsTUFBTSxDQUFDLGVBQWUsR0FBRywrQ0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvYXNzZXRzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvUmVsYXRpdmVEYXRlLnRzIiwid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvVG9hc3RzdHJhcC50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL2NvbXBvbmVudHMvYm9keS50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL2NvbXBvbmVudHMvY29udGFpbmVyLnRzIiwid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9jb21wb25lbnRzL3Byb2dyZXNzLnRzIiwid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvY29tcG9uZW50cy9zb3VuZC50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9wcmVmZXJlbmNlcy50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL3R5cGVjaGVjay50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvYXN0c3RyYXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvYXN0c3RyYXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9icm93c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNsYXNzIFJlbGF0aXZlRGF0ZSB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtYXRzXG4gIHByaXZhdGUgcmVhZG9ubHkgdGltZXNcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dFxuICBwcml2YXRlIHJlYWRvbmx5IHJlZmVyZW5jZVxuXG4gIGNvbnN0cnVjdG9yKGlucHV0LCByZWZlcmVuY2U/OiBhbnkpIHtcbiAgICB0aGlzLnRpbWVzID0ge1xuICAgICAgU0VDT05EOiAxMDAwLFxuICAgICAgTUlOVVRFOiA2MCAqIDEwMDAsXG4gICAgICBIT1VSOiA2MCAqIDYwICogMTAwMCxcbiAgICAgIERBWTogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICAgIFdFRUs6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgICAgWUVBUjogMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICAgIE1PTlRIOiAoMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCkgLyAxMixcbiAgICB9XG5cblxuICAgIHRoaXMuZm9ybWF0cyA9IFtcbiAgICAgIFswLjcgKiB0aGlzLnRpbWVzLk1JTlVURSwgXCJqdXN0IG5vd1wiXSxcbiAgICAgIFsxLjUgKiB0aGlzLnRpbWVzLk1JTlVURSwgXCJhIG1pbnV0ZSBhZ29cIl0sXG4gICAgICBbNjAgKiB0aGlzLnRpbWVzLk1JTlVURSwgXCJtaW51dGVzIGFnb1wiLCB0aGlzLnRpbWVzLk1JTlVURV0sXG4gICAgICBbMS41ICogdGhpcy50aW1lcy5IT1VSLCBcImFuIGhvdXIgYWdvXCJdLFxuICAgICAgW3RoaXMudGltZXMuREFZLCBcImhvdXJzIGFnb1wiLCB0aGlzLnRpbWVzLkhPVVJdLFxuICAgICAgWzIgKiB0aGlzLnRpbWVzLkRBWSwgXCJ5ZXN0ZXJkYXlcIl0sXG4gICAgICBbNyAqIHRoaXMudGltZXMuREFZLCBcImRheXMgYWdvXCIsIHRoaXMudGltZXMuREFZXSxcbiAgICAgIFsxLjUgKiB0aGlzLnRpbWVzLldFRUssIFwiYSB3ZWVrIGFnb1wiXSxcbiAgICAgIFt0aGlzLnRpbWVzLk1PTlRILCBcIndlZWtzIGFnb1wiLCB0aGlzLnRpbWVzLldFRUtdLFxuICAgICAgWzEuNSAqIHRoaXMudGltZXMuTU9OVEgsIFwiYSBtb250aCBhZ29cIl0sXG4gICAgICBbdGhpcy50aW1lcy5ZRUFSLCBcIm1vbnRocyBhZ29cIiwgdGhpcy50aW1lcy5NT05USF0sXG4gICAgICBbMS41ICogdGhpcy50aW1lcy5ZRUFSLCBcImEgeWVhciBhZ29cIl0sXG4gICAgICBbTnVtYmVyLk1BWF9WQUxVRSwgXCJ5ZWFycyBhZ29cIiwgdGhpcy50aW1lcy5ZRUFSXSxcbiAgICBdXG5cblxuICAgIHRoaXMuaW5wdXQgPSBpbnB1dFxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlXG5cbiAgICBpZiAoIXJlZmVyZW5jZSkge1xuICAgICAgdGhpcy5yZWZlcmVuY2UgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gICAgfSBlbHNlIGlmIChyZWZlcmVuY2UgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZS5nZXRUaW1lKClcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmlucHV0LmdldFRpbWUoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSArbmV3IERhdGUoaW5wdXQpLmdldFRpbWUoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwdWJsaWMgcHJpbnQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBkZWx0YSA9IHRoaXMucmVmZXJlbmNlIC0gdGhpcy5pbnB1dFxuICAgIGxldCBmb3JtYXQ6IGFueVtdXG4gICAgbGV0IGluZGV4OiBudW1iZXJcbiAgICBsZXQgbGVuZ3RoOiBudW1iZXJcblxuICAgIGZvciAoaW5kZXggPSAtMSwgbGVuZ3RoID0gdGhpcy5mb3JtYXRzLmxlbmd0aDsgKytpbmRleCA8IGxlbmd0aDspIHtcbiAgICAgIGZvcm1hdCA9IHRoaXMuZm9ybWF0c1tpbmRleF1cblxuICAgICAgaWYgKGRlbHRhIDwgZm9ybWF0WzBdKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRbMl0gPT0gdW5kZWZpbmVkID8gZm9ybWF0WzFdIDogTWF0aC5yb3VuZChkZWx0YSAvIGZvcm1hdFsyXSkgKyBcIiBcIiArIGZvcm1hdFsxXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBcIlVua25vd25cIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0aXZlRGF0ZSIsImltcG9ydCBwcmVmZXJlbmNlcywgeyBjcHJlZml4LCBnY2xhc3MgfSBmcm9tIFwiLi9wcmVmZXJlbmNlc1wiXHJcbmltcG9ydCB7IGdlbmVyYXRlSWQsIGhhc0NsYXNzLCB0b0Jvb2xlYW4gfSBmcm9tIFwiLi9oZWxwZXJzXCJcclxuaW1wb3J0IHR5cGUgeyBPcHRpb25zVHlwZSwgU3ViVGl0bGVUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIlxyXG5pbXBvcnQgeyBQT1NJVElPTlMsIFRZUEVTIH0gZnJvbSBcIi4vcHJlZmVyZW5jZXNcIlxyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiXHJcbmltcG9ydCB7IFRvYXN0Qm9keSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYm9keVwiXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWluZXJcIlxyXG5pbXBvcnQgU291bmQgZnJvbSBcIi4vY29tcG9uZW50cy9zb3VuZFwiXHJcbmltcG9ydCB7IFByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9ncmVzc1wiXHJcbmltcG9ydCBSZWxhdGl2ZURhdGUgZnJvbSBcIi4vUmVsYXRpdmVEYXRlXCJcclxuXHJcbi8qKlxyXG4gKiBUb2FzdHN0cmFwIGNsYXNzIGZvciBidWlsZGluZyBhbmQgZ2VuZXJhdGluZyB0aGUgVG9hc3RzdHJhcCdzIHRvYXN0LlxyXG4gKlxyXG4gKiBAY2xhc3MgVG9hc3RzdHJhcFxyXG4gKiBAdmVyc2lvbiAxLjAuMVxyXG4gKi9cclxuY2xhc3MgVG9hc3RzdHJhcCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBUb2FzdCBpZGVudGlmaWVyLlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWFkb25seSBpZDogc3RyaW5nXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB0b2FzdCBjcmVhdGVkIGF0IGRhdGUuXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IGNyZWF0ZWRBdDogc3RyaW5nXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB0b2FzdCBvcHRpb25zLlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHVibGljIG9wdGlvbnM6IE9wdGlvbnNUeXBlXHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlZCB0b2FzdCBpdGVtLlxyXG4gICAqIFVzZWQgdG8gZGVsZXRlLCBwYXVzZSBvciBtb2RpZnkgdGhlIGdlbmVyYXRlZCB0b2FzdC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgaXRlbTogSFRNTEVsZW1lbnRcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNvdW5kIG9iamVjdC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc291bmQ6IFNvdW5kIHwgdW5kZWZpbmVkXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBtYXJnaW5zIGJldHdlZW4gdGhlIHBhcmVudE5vZGUgYW5kIHRoZSBzaG93biB0b2FzdC5cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3BhY2VCZXR3ZWVuOiBudW1iZXJcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRvYXN0IGdyb3VwLiBVc2VkIHRvIG9yZ2FuaXplIHRoZSB0b2FzdHMuXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IGdyb3VwOiBzdHJpbmdcclxuXHJcbiAgLyoqXHJcbiAgICogVG9hc3QgdGltZS1vdXQgb2JqZWN0LlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB0aW1lb3V0OiBOb2RlSlMuVGltZW91dFxyXG5cclxuICAvKipcclxuICAgKiBUb2FzdCB0aW1lciBvYmplY3QuIFVzZWQgaW4gcHJvZ3Jlc3MuXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwdWJsaWMgcHJvZ3Jlc3NJbnRlcnZhbDogTm9kZUpTLlRpbWVyXHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHVibGljIHBhdXNlUHJvZ3Jlc3NJbnRlcnZhbDogYm9vbGVhblxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcm9ncmVzc1N0YXJ0VGltZTogbnVtYmVyXHJcblxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBUb2FzdHN0cmFwLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPcHRpb25zVHlwZX0gb3B0aW9ucyAtIEF2YWlsYWJsZSBvcHRpb25zIHRvIGN1c3RvbWl6ZSB0aGUgdG9hc3QuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IE9wdGlvbnNUeXBlKSB7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICBhdmF0YXI6IFwiXCIsXHJcbiAgICAgIGRpc21pc3NpYmxlOiB0cnVlLFxyXG4gICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgb2Zmc2V0OiAxMCxcclxuICAgICAgcGFyZW50OiBcImJvZHlcIixcclxuICAgICAgcGF1c2FibGU6IHRydWUsXHJcbiAgICAgIHBvc2l0aW9uOiBQT1NJVElPTlMuVE9QX0VORCxcclxuICAgICAgcHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAgIHNuYWNrYmFyOiBmYWxzZSxcclxuICAgICAgc291bmRTb3VyY2U6IFwiXCIsXHJcbiAgICAgIHNvdW5kYWJsZTogZmFsc2UsXHJcbiAgICAgIHN1YnRpdGxlOiB7XHJcbiAgICAgICAgcmVsYXRpdmU6IHRydWUsXHJcbiAgICAgICAgZGF0ZXRpbWU6IERhdGUubm93KClcclxuICAgICAgfSxcclxuICAgICAgdGV4dDogXCJcIixcclxuICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgIHR5cGU6IFRZUEVTLkRFRkFVTFQsXHJcbiAgICAgIC4uLm9wdGlvbnNcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgdGhlIHRvYXN0IHRpbWVvdXQuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zdWJ0aXRsZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zdWJ0aXRsZSA9PT0gXCJvYmplY3RcIiAmJiBcImRhdGV0aW1lXCIgaW4gdGhpcy5vcHRpb25zLnN1YnRpdGxlKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGE6IFN1YlRpdGxlVHlwZSA9IHRoaXMub3B0aW9ucy5zdWJ0aXRsZVxyXG5cclxuICAgICAgICBpZiAoXCJyZWxhdGl2ZVwiIGluIHRoaXMub3B0aW9ucy5zdWJ0aXRsZSAmJiB0b0Jvb2xlYW4odGhpcy5vcHRpb25zLnN1YnRpdGxlLnJlbGF0aXZlKSkge1xyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN1YnRpdGxlID0gKG5ldyBSZWxhdGl2ZURhdGUoZGVsdGEuZGF0ZXRpbWUpLnByaW50KCkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdWJ0aXRsZSA9IFN0cmluZyhkZWx0YS5kYXRldGltZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgdG9hc3QgZ3JvdXAuXHJcbiAgICAvLyBUaGUgdG9hc3QgZ3JvdXAgdXNlZCB0byBvcmdhbml6ZWQgdGhlIHRvYXN0cy5cclxuICAgIHRoaXMuZ3JvdXAgPSB0aGlzLm9wdGlvbnMucG9zaXRpb24hIHx8IFBPU0lUSU9OUy5UT1BfRU5EXHJcblxyXG5cclxuICAgIGlmIChPYmplY3Qua2V5cyhQT1NJVElPTlMpLmluY2x1ZGVzKHRoaXMub3B0aW9ucy5wb3NpdGlvbiEpKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9IHByZWZlcmVuY2VzLnBvc2l0aW9uc1t0aGlzLm9wdGlvbnMucG9zaXRpb24hXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uID0gcHJlZmVyZW5jZXMucG9zaXRpb25zLlRPUF9FTkRcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0aGlzLnNwYWNlQmV0d2VlbiA9IDVcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnNvdW5kYWJsZSAmJiB0aGlzLm9wdGlvbnMuc291bmRTb3VyY2UgJiYgdGhpcy5vcHRpb25zLnNvdW5kU291cmNlLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZCh0aGlzLm9wdGlvbnMuc291bmRTb3VyY2UsIHRoaXMucGFyZW50RWxlbWVudClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlkID0gZ2VuZXJhdGVJZCgpXHJcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IERhdGUubm93KCkudG9TdHJpbmcoKVxyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICB9LCAwKVxyXG4gICAgdGhpcy5wcm9ncmVzc0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgfSwgMClcclxuICAgIHRoaXMucGF1c2VQcm9ncmVzc0ludGVydmFsID0gZmFsc2VcclxuICAgIHRoaXMucHJvZ3Jlc3NTdGFydFRpbWUgPSAwXHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHVzaCB0aGUgdG9hc3QgdG8gdGhlIGRvY3VtZW50IHBhcmVudCBub2RlLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7dGhpc30gVGhlIHRvYXN0IGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaG93KCk6IHRoaXMge1xyXG4gICAgY29uc3Qgcm9vdCA9IHRoaXMucGFyZW50RWxlbWVudFxyXG4gICAgY29uc3QgdG9hc3QgPSB0aGlzLmJ1aWxkXHJcblxyXG4gICAgcm9vdC5pbnNlcnRCZWZvcmUodG9hc3QsIHJvb3QuZmlyc3RDaGlsZClcclxuXHJcbiAgICAvLyBQbGF5IHNvdW5kIGlmIGl0J3MgYWxsb3dlZC5cclxuICAgIGlmICh0aGlzLnNvdW5kKSB7XHJcbiAgICAgIHRoaXMuc291bmQuaW5zdGFuY2UucGxheSgpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJTb3VuZCBzb3VyY2UgZ2l2ZW4gbm90IGZvdW5kIG9yIG5vdCBzdXBwb3J0ZWQuXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3JkZXIgdG9hc3RzLlxyXG4gICAgdGhpcy5vcmdhbml6ZSgpXHJcblxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudCB0byBjbG9zZSB0b2FzdC4gVXNlZCBpbiBoZWFkZXIgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7dm9pZH1cclxuICAgKi9cclxuICBwdWJsaWMgY2xvc2VFdmVudCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHRoaXMuZGVzdHJveSh0aGlzLml0ZW0pXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQnVpbGQgdGhlIHRvYXN0IGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIGdlbmVyYXRlZCB0b2FzdC5cclxuICAgKi9cclxuICBwcml2YXRlIGdldCBidWlsZCgpOiBIVE1MRWxlbWVudCB7XHJcblxyXG4gICAgLy8gQ29udGFpbmVyIEVsZW1lbnRcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFRvYXN0Q29udGFpbmVyKHRoaXMpXHJcblxyXG4gICAgLy8gVG9hc3QgRWxlbWVudFxyXG4gICAgY29uc3QgdG9hc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdG9hc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2FzdFwiKVxyXG5cclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHRoaXMuaWQpXHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1jcmVhdGVkLWF0XCIsIHRoaXMuY3JlYXRlZEF0KVxyXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCB0aGlzLm9wdGlvbnMudHlwZSA/IHRoaXMub3B0aW9ucy50eXBlLnRvTG93ZXJDYXNlKCkgOiBcIlwiKVxyXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtZ3JvdXBcIiwgdGhpcy5ncm91cClcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNuYWNrYmFyXCIsIFN0cmluZyh0aGlzLm9wdGlvbnMuc25hY2tiYXIpKVxyXG5cclxuICAgIC8vIFRvYXN0IEhlYWRlciAob25seSBpZiBvcHRpb24gaGlkZUhlYWRlciBpcyBzZXQgdG8gZmFsc2UpLlxyXG4gICAgaWYgKCFCb29sZWFuKHRoaXMub3B0aW9ucy5zbmFja2JhcikpIHtcclxuICAgICAgdG9hc3RFbGVtZW50LmFwcGVuZENoaWxkKEhlYWRlckNvbXBvbmVudCh0aGlzKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnByZWZlcmVuY2VzLnR5cGVzW3RoaXMub3B0aW9ucy50eXBlXSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2FzdCBCb2R5XHJcbiAgICB0b2FzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoVG9hc3RCb2R5KHRoaXMpKVxyXG5cclxuICAgIGlmICh0b0Jvb2xlYW4odGhpcy5vcHRpb25zLnByb2dyZXNzKSkge1xyXG4gICAgICAvLyBUb2FzdCBQcm9ncmVzc1xyXG4gICAgICB0b2FzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoUHJvZ3Jlc3NDb21wb25lbnQodGhpcykpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFB1dCB0b2FzdCBpbnRvIGl0J3MgY29udGFpbmVyLlxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvYXN0RWxlbWVudClcclxuXHJcbiAgICAvLyBXYXRjaCB0b2FzdCBoZWlnaHQgY2hhbmdlZCwgYW5kIHJlLW9yZGVyIGlmIGhhcHBlbi5cclxuICAgIG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgIHRoaXMub3JnYW5pemUoKVxyXG4gICAgfSkub2JzZXJ2ZShjb250YWluZXIpXHJcblxyXG4gICAgLy8gVG9hc3QgaW5zdGFuY2UuXHJcbiAgICB0aGlzLml0ZW0gPSBjb250YWluZXJcclxuXHJcbiAgICAvLyBTaG93IHRoZSB0b2FzdCBieSBhZGRpbmcgY2xhc3MgKC5zaG93KVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcclxuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KGNvbnRhaW5lcilcclxuICAgICAgfSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uKVxyXG5cclxuICAgICAgaWYgKHRvQm9vbGVhbih0aGlzLm9wdGlvbnMucGF1c2FibGUpKSB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hTdGFydENhbGxCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcclxuICAgICAgICAgIHRoaXMucGF1c2VQcm9ncmVzc0ludGVydmFsID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdG91Y2hFbmRDYWxsQmFjayA9ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGF1c2VQcm9ncmVzc0ludGVydmFsID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG5cclxuICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3kodGhpcy5pdGVtKVxyXG4gICAgICAgICAgfSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXCJtb3VzZW92ZXIgdG91Y2hzdGFydCB0b3VjaGVuZFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pdGVtLmFkZEV2ZW50TGlzdGVuZXIoZSwgdG91Y2hTdGFydENhbGxCYWNrKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIFwibW91c2VsZWF2ZSB0b3VjaGVuZFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pdGVtLmFkZEV2ZW50TGlzdGVuZXIoZSwgdG91Y2hFbmRDYWxsQmFjaylcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHRvYXN0IGluc3RhbmNlLlxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIFRoZSBwYXJlbnQgZWxlbWVudCwgd2hpY2ggd2lsbCBjb250YWluIHRoZSB0b2FzdHMuXHJcbiAgICogQHJldHVybiB7RWxlbWVudH0gIFRoZSBtYWluIGVsZW1lbnQgc2VsZWN0ZWQgYnkgdGhlIHVzZXIgaWYgYXZhaWxhYmxlLCBvciB0aGUgZGVmYXVsdCBwYXJlbnQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXQgcGFyZW50RWxlbWVudCgpOiBFbGVtZW50IHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMucGFyZW50KSB7XHJcbiAgICAgIGNvbnN0IHVzZXJSb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLnBhcmVudClcclxuICAgICAgaWYgKCF1c2VyUm9vdEVsZW1lbnQpIHtcclxuICAgICAgICB0aHJvdyBcIlVzZXIgcm9vdCBlbGVtZW50IG5vdCBleGlzdHMuXCJcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodXNlclJvb3RFbGVtZW50KSkge1xyXG4gICAgICAgIHJldHVybiB1c2VyUm9vdEVsZW1lbnRbMF1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVzZXJSb290RWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkb2N1bWVudC5ib2R5XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIGVsZW1lbnQgZnJvbSBkb20gYWZ0ZXIgdGltZW91dCBmaW5pc2hlZC5cclxuICAgKi9cclxuICBwcml2YXRlIGRlc3Ryb3kodG9hc3RFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgLy8gSGlkZSB0aGUgZWxlbWVudC5cclxuICAgIHRvYXN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKVxyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xvc2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICB0aGlzLm9wdGlvbnMub25DbG9zZSh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdG9hc3RFbGVtZW50LnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKHRvYXN0RWxlbWVudClcclxuICAgIH0sIDQwMClcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcmdhbml6ZSgpIHtcclxuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLm9wdGlvbnNcclxuXHJcbiAgICBjb25zdCB0b3BMZWZ0T2Zmc2V0U2l6ZSA9IHtcclxuICAgICAgdG9wOiBOdW1iZXIob2Zmc2V0KSxcclxuICAgICAgYm90dG9tOiBOdW1iZXIob2Zmc2V0KSxcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgdG9wUmlnaHRPZmZzZXRTaXplID0ge1xyXG4gICAgICB0b3A6IE51bWJlcihvZmZzZXQpLFxyXG4gICAgICBib3R0b206IE51bWJlcihvZmZzZXQpLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9mZnNldFNpemUgPSB7XHJcbiAgICAgIHRvcDogTnVtYmVyKG9mZnNldCksXHJcbiAgICAgIGJvdHRvbTogTnVtYmVyKG9mZnNldCksXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxldCBzZWxlY3RvciA9IGAuJHtnY2xhc3MoXCJjb250YWluZXJcIil9W2RhdGEtZ3JvdXA9JyR7dGhpcy5ncm91cH0nXWBcclxuXHJcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID4gMCA/IHdpbmRvdy5pbm5lcldpZHRoIDogc2NyZWVuLndpZHRoXHJcblxyXG4gICAgaWYgKHdpbmRvd1dpZHRoIDw9IDM2MCkge1xyXG4gICAgICBzZWxlY3RvciA9IGAuJHtnY2xhc3MoXCJjb250YWluZXJcIil9YFxyXG4gICAgfVxyXG4gICAgY29uc3QgdG9hc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oc2VsZWN0b3IpXHJcblxyXG4gICAgbGV0IGNsYXNzVXNlZFxyXG5cclxuICAgIGlmICh0b2FzdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0b2FzdHMuZm9yRWFjaCgodG9hc3QpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGhhc0NsYXNzKHRvYXN0LCBnY2xhc3MoXCJ0b3BcIikpKSB7XHJcbiAgICAgICAgICBjbGFzc1VzZWQgPSBnY2xhc3MoXCJ0b3BcIilcclxuICAgICAgICB9IGVsc2UgaWYgKGhhc0NsYXNzKHRvYXN0LCBnY2xhc3MoXCJtaWRkbGVcIikpKSB7XHJcbiAgICAgICAgICBjbGFzc1VzZWQgPSBnY2xhc3MoXCJtaWRkbGVcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2xhc3NVc2VkID0gZ2NsYXNzKFwiYm90dG9tXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0b2FzdEhlaWdodCA9IHRvYXN0Lm9mZnNldEhlaWdodFxyXG4gICAgICAgIGNsYXNzVXNlZCA9IGNsYXNzVXNlZC5zdWJzdHIoXHJcbiAgICAgICAgICBgJHtjcHJlZml4fS1gLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICBjbGFzc1VzZWQubGVuZ3RoIC0gMSxcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8vIFNob3cgdG9hc3QgaW4gY2VudGVyIGlmIHNjcmVlbiB3aXRoIGxlc3MgdGhhbiBvciBlcXVhbCB0byAzNjBweC5cclxuICAgICAgICBpZiAod2luZG93V2lkdGggPD0gMzYwKSB7XHJcbiAgICAgICAgICB0b2FzdC5zdHlsZVtjbGFzc1VzZWRdID0gb2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiXHJcbiAgICAgICAgICBvZmZzZXRTaXplW2NsYXNzVXNlZF0gKz0gdG9hc3RIZWlnaHQgKyB0aGlzLnNwYWNlQmV0d2VlblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoaGFzQ2xhc3ModG9hc3QsIGBzdGFydC0ke3RoaXMub3B0aW9ucy5vZmZzZXR9YCkpIHtcclxuICAgICAgICAgICAgdG9hc3Quc3R5bGVbY2xhc3NVc2VkXSA9IHRvcExlZnRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCJcclxuICAgICAgICAgICAgdG9wTGVmdE9mZnNldFNpemVbY2xhc3NVc2VkXSArPSB0b2FzdEhlaWdodCArIHRoaXMuc3BhY2VCZXR3ZWVuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdC5zdHlsZVtjbGFzc1VzZWRdID0gdG9wUmlnaHRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCJcclxuICAgICAgICAgICAgdG9wUmlnaHRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKz0gdG9hc3RIZWlnaHQgKyB0aGlzLnNwYWNlQmV0d2VlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2FzdHN0cmFwXHJcbiIsImltcG9ydCBUb2FzdHN0cmFwIGZyb20gXCIuLi9Ub2FzdHN0cmFwXCJcclxuXHJcbmV4cG9ydCBjb25zdCBUb2FzdEJvZHkgPSAoY29udGV4dDogVG9hc3RzdHJhcCkgPT4ge1xyXG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gY29udGV4dFxyXG4gIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIGJvZHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2FzdC1ib2R5XCIpXHJcbiAgYm9keUVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9ucy50ZXh0XHJcblxyXG4gIHJldHVybiBib2R5RWxlbWVudFxyXG59XHJcbiIsImltcG9ydCB7IGdjbGFzcyB9IGZyb20gXCIuLi9wcmVmZXJlbmNlc1wiXHJcbmltcG9ydCBUb2FzdHN0cmFwIGZyb20gXCIuLi9Ub2FzdHN0cmFwXCJcclxuXHJcbmV4cG9ydCBjb25zdCBUb2FzdENvbnRhaW5lciA9IChjb250ZXh0OiBUb2FzdHN0cmFwKSA9PiB7XHJcbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0XHJcbiAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBjb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9IGAke1xyXG4gICAgY29udGV4dC5vcHRpb25zLnBhcmVudCA/IFwicG9zaXRpb24tYWJzb2x1dGVcIiA6IFwicG9zaXRpb24tZml4ZWRcIlxyXG4gIH0gJHtvcHRpb25zLnBvc2l0aW9ufS0ke29wdGlvbnMub2Zmc2V0fSAke2djbGFzcyhcImNvbnRhaW5lclwiKX1gXHJcblxyXG4gIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuekluZGV4ID0gXCIyNTAwXCJcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnRcclxufVxyXG4iLCJpbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tIFwiLi4vaGVscGVyc1wiXHJcbmltcG9ydCBUb2FzdHN0cmFwIGZyb20gXCIuLi9Ub2FzdHN0cmFwXCJcclxuaW1wb3J0IHByZWZlcmVuY2VzIGZyb20gXCIuLi9wcmVmZXJlbmNlc1wiXHJcbmltcG9ydCB0eXBlIHsgT3B0aW9uc1R5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIlxyXG5cclxuY29uc3QgQXZhdGFyQ29tcG9uZW50ID0gKG9wdGlvbnM6IE9wdGlvbnNUeXBlKSA9PiB7XHJcbiAgY29uc3QgYXZhdGFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICBhdmF0YXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyb3VuZGVkXCIsIFwibWUtMlwiKVxyXG4gIGF2YXRhckVsZW1lbnQuc3JjID0gb3B0aW9ucy5hdmF0YXIgfHwgXCJcIlxyXG4gIGF2YXRhckVsZW1lbnQud2lkdGggPSAyMFxyXG4gIGF2YXRhckVsZW1lbnQuaGVpZ2h0ID0gMjBcclxuXHJcbiAgcmV0dXJuIGF2YXRhckVsZW1lbnRcclxufVxyXG5cclxuY29uc3QgQ2xvc2VCdXR0b25Db21wb25lbnQgPSAob25DbG9zZUV2ZW50OiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgY29uc3QgY2xvc2VCdG5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gIGNsb3NlQnRuRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnRuLWNsb3NlXCIpXHJcbiAgY2xvc2VCdG5FbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIilcclxuICBjbG9zZUJ0bkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJlYS1sYWJlbFwiLCBcIkNsb3NlXCIpXHJcblxyXG4gIGNsb3NlQnRuRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBvbkNsb3NlRXZlbnQoKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBjbG9zZUJ0bkVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbXBvbmVudCA9IChjb250ZXh0OiBUb2FzdHN0cmFwKTogRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0XHJcbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2FzdC1oZWFkZXJcIilcclxuXHJcbiAgLy8gQXZhdGFyIGVsZW1lbnRcclxuICBpZiAob3B0aW9ucy5hdmF0YXIpIHtcclxuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoQXZhdGFyQ29tcG9uZW50KG9wdGlvbnMpKVxyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnMudHlwZSkge1xyXG4gICAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnByZWZlcmVuY2VzLnR5cGVzW29wdGlvbnMudHlwZV0pXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gQ3JlYXRlIHRpdGxlIGVsZW1lbnQuXHJcbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKVxyXG4gIHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWUtYXV0b1wiKVxyXG4gIHRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBvcHRpb25zLnRpdGxlXHJcbiAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXHJcblxyXG4gIGlmIChvcHRpb25zLnN1YnRpdGxlKSB7XHJcbiAgICAvLyB0aW1lXHJcbiAgICBjb25zdCB0aW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzbWFsbFwiKVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnN1YnRpdGxlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRpbWVFbGVtZW50LmlubmVyVGV4dCA9IG9wdGlvbnMuc3VidGl0bGVcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKHRpbWVFbGVtZW50KVxyXG4gIH1cclxuXHJcbiAgLy8gQ2xvc2UgYnV0dG9uXHJcbiAgaWYgKHRvQm9vbGVhbihvcHRpb25zLmRpc21pc3NpYmxlKSkge1xyXG4gICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChDbG9zZUJ1dHRvbkNvbXBvbmVudChjb250ZXh0LmNsb3NlRXZlbnQpKVxyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJuIGhlYWRlciBlbGVtZW50LlxyXG4gIHJldHVybiBoZWFkZXJFbGVtZW50XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBjcmVkaXQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNTMwOTQ2XHJcbiAqIEBwYXJhbSBkdXJhdGlvblxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmltcG9ydCBUb2FzdHN0cmFwIGZyb20gXCIuLi9Ub2FzdHN0cmFwXCJcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0NvbXBvbmVudCA9IChmYWN0b3J5OiBUb2FzdHN0cmFwKSA9PiB7XHJcbiAgbGV0IHsgZHVyYXRpb24gfSA9IGZhY3Rvcnkub3B0aW9uc1xyXG5cclxuXHJcbiAgY29uc3QgcHJvZ3Jlc3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIHByb2dyZXNzRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9hc3QtZm9vdGVyXCIpXHJcbiAgY29uc3QgaW5kaWNhdG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBpbmRpY2F0b3JFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2FzdC1mb290ZXItaW5uZXJcIilcclxuICBwcm9ncmVzc0VsZW1lbnQuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yRWxlbWVudClcclxuXHJcblxyXG4gIGlmIChkdXJhdGlvbiA+IDApIHtcclxuICAgIGR1cmF0aW9uIDwgMTAwICA/IGR1cmF0aW9uID0gZHVyYXRpb24gKiAxMDAwIDogZHVyYXRpb247XHJcblxyXG4gICAgaW5kaWNhdG9yRWxlbWVudC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYFxyXG5cclxuICB9XHJcbiAgLyoqXHJcbiAgICogSSBtYWRlIHRoaXMgdG8gbWFrZSBwcm9ncmVzcyBtb3ZlIHdoZW4gZHVyYXRpb24gaXMgc2V0LlxyXG4gICAqIEJ1dCBpdCdzIGtpbGwgdGhlIHBlcmZvcm1hbmNlLCBzbyBJIGRlY2lkZWQgdG8gdXNlIENTUyB0byBkbyB0aGF0LlxyXG4gICAqXHJcbiAgICogQGRlcHJlY2F0ZWRcclxuICAgKi9cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICBmYWN0b3J5LnByb2dyZXNzU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuXHJcbiAgICAvLyA+Li48IEkgd2lsbCBqdXN0IHVzZSBjc3MgdG8gZG8gdGhhdC5cclxuICAgIGlmIChkdXJhdGlvbiA+IDApIHtcclxuICAgICAgZmFjdG9yeS5wcm9ncmVzc0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZmFjdG9yeS5wYXVzZVByb2dyZXNzSW50ZXJ2YWwpIHtcclxuICAgICAgICAgIGNvbnN0IGRpZmYgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gZmFjdG9yeS5wcm9ncmVzc1N0YXJ0VGltZSlcclxuICAgICAgICAgIGxldCB2YWx1ZSA9IE1hdGgucm91bmQoZGlmZiAvIGR1cmF0aW9uICogMTAwKVxyXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZSA+IDEwMCA/IDEwMCA6IHZhbHVlXHJcblxyXG4gICAgICAgICAgaW5kaWNhdG9yRWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgXCIlXCJcclxuXHJcbiAgICAgICAgICBpZiAoZGlmZiA+PSBkdXJhdGlvbikge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGZhY3RvcnkucHJvZ3Jlc3NJbnRlcnZhbClcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvZ3Jlc3NFbGVtZW50XHJcbn1cclxuIiwiaW1wb3J0IHsgY3ByZWZpeCB9IGZyb20gXCIuLi9wcmVmZXJlbmNlc1wiXHJcblxyXG5jbGFzcyBTb3VuZCB7XHJcbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MQXVkaW9FbGVtZW50XHJcbiAgcHJpdmF0ZSBzZWxlY3Rvcjogc3RyaW5nXHJcbiAgcHJpdmF0ZSBwYXJlbnQ6IEVsZW1lbnRcclxuXHJcbiAgY29uc3RydWN0b3IoYXVkaW9GaWxlOiBzdHJpbmcsIHBhcmVudEVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0b3IgPSBgJHtjcHJlZml4fS1ub3RpZmljYXRpb25gXHJcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgQXVkaW8oYXVkaW9GaWxlKVxyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRFbGVtZW50XHJcblxyXG5cclxuICAgIHRoaXMubWFrZSgpXHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuc2VsZWN0b3JcclxuXHJcbiAgICBpZiAoIXRoaXMucGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyB0aGlzLnNlbGVjdG9yKSkge1xyXG4gICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvdW5kIiwiY29uc3QgaGFzQ2xhc3MgPSAoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZUlkID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgcmV0dXJuIFN0cmluZyhNYXRoLmZsb29yKDEwMDAwMDAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMDAwMDApKVxyXG59XHJcblxyXG4vKipcclxuICogUXVpY2sgZml4IG9mIGJvb2xlYW5cclxuICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NDAyNDE5My90eXBlc2NyaXB0LXN0cmluZy10by1ib29sZWFuXHJcbiAqL1xyXG5jb25zdCB0b0Jvb2xlYW4gPSAodmFsdWU/OiBzdHJpbmcgfCBib29sZWFuKTogYm9vbGVhbiA9PiB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgIHJldHVybiB2YWx1ZVxyXG4gIH1cclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICAvL0NvdWxkIGFsc28gdGhyb3cgYW4gZXhjZXB0aW9uIHVwIHRvIHlvdVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkpIHtcclxuICAgIGNhc2UgXCJ0cnVlXCI6XHJcbiAgICBjYXNlIFwiMVwiOlxyXG4gICAgY2FzZSBcIm9uXCI6XHJcbiAgICBjYXNlIFwieWVzXCI6XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGhhc0NsYXNzLCB0b0Jvb2xlYW4sIGdlbmVyYXRlSWQgfVxyXG4iLCIvKipcclxuICogUHJlZml4IHdpbGwgYmUgYXBwbGllZCB0byBhbGwgY3NzIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3ByZWZpeCA9IFwidG9hc3RzdHJhcC1cIlxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgY2xhc3NuYW1lIHdpdGggdGhlIHByZWZpeC5cclxuICogQHBhcmFtIHtzdHJpbmd9IGNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnY2xhc3MoYzogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGNwcmVmaXggKyBjXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBPU0lUSU9OUyB7XHJcbiAgVE9QX1NUQVJUID0gXCJUT1BfU1RBUlRcIixcclxuICBUT1BfRU5EID0gXCJUT1BfRU5EXCIsXHJcbiAgVE9QX0NFTlRFUiA9IFwiVE9QX0NFTlRFUlwiLFxyXG4gIEJPVFRPTV9TVEFSVCA9IFwiQk9UVE9NX1NUQVJUXCIsXHJcbiAgQk9UVE9NX0VORCA9IFwiQk9UVE9NX0VORFwiLFxyXG4gIEJPVFRPTV9DRU5URVIgPSBcIkJPVFRPTV9DRU5URVJcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVFlQRVMge1xyXG4gIERFRkFVTFQgPSBcIkRFRkFVTFRcIixcclxuICBQUklNQVJZID0gXCJQUklNQVJZXCIsXHJcbiAgSU5GTyA9IFwiSU5GT1wiLFxyXG4gIFNVQ0NFU1MgPSBcIlNVQ0NFU1NcIixcclxuICBXQVJOSU5HID0gXCJXQVJOSU5HXCIsXHJcbiAgREFOR0VSID0gXCJEQU5HRVJcIixcclxuICBEQVJLID0gXCJEQVJLXCIsXHJcbiAgU1dFRVQgPSBcIlNXRUVUXCJcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcG9zaXRpb25zOiB7XHJcbiAgICAvLyBUT1BcclxuICAgIFRPUF9TVEFSVDogZ2NsYXNzKFwidG9wXCIpICsgXCIgXCIgKyBnY2xhc3MoXCJzdGFydFwiKSxcclxuICAgIFRPUF9FTkQ6IGdjbGFzcyhcInRvcFwiKSArIFwiIFwiICsgZ2NsYXNzKFwiZW5kXCIpLFxyXG4gICAgVE9QX0NFTlRFUjogZ2NsYXNzKFwidG9wXCIpICsgXCIgXCIgKyBnY2xhc3MoXCJjZW50ZXJcIiksXHJcblxyXG4gICAgLy8gQm90dG9tXHJcbiAgICBCT1RUT01fQ0VOVEVSOiBnY2xhc3MoXCJib3R0b21cIikgKyBcIiBcIiArIGdjbGFzcyhcImNlbnRlclwiKSxcclxuICAgIEJPVFRPTV9TVEFSVDogZ2NsYXNzKFwiYm90dG9tXCIpICsgXCIgXCIgKyBnY2xhc3MoXCJzdGFydFwiKSxcclxuICAgIEJPVFRPTV9FTkQ6IGdjbGFzcyhcImJvdHRvbVwiKSArIFwiIFwiICsgZ2NsYXNzKFwiZW5kXCIpLFxyXG4gIH0sXHJcblxyXG4gIHR5cGVzOiB7XHJcbiAgICBERUZBVUxUOiBbXCJiZy1kZWZhdWx0XCJdLFxyXG4gICAgUFJJTUFSWTogW1wiYmctcHJpbWFyeVwiLCBcInRleHQtbGlnaHRcIl0sXHJcbiAgICBJTkZPOiBbXCJiZy1pbmZvXCIsIFwidGV4dC1saWdodFwiXSxcclxuICAgIFNVQ0NFU1M6IFtcImJnLXN1Y2Nlc3NcIiwgXCJ0ZXh0LWxpZ2h0XCJdLFxyXG4gICAgV0FSTklORzogW1wiYmctd2FybmluZ1wiLCBcInRleHQtZGFya1wiXSxcclxuICAgIERBTkdFUjogW1wiYmctZGFuZ2VyXCIsIFwidGV4dC1saWdodFwiXSxcclxuICAgIERBUks6IFtcImJnLWRhcmtcIiwgXCJ0ZXh0LWxpZ2h0XCJdLFxyXG4gICAgU0VDT05EQVJZOiBbXCJiZy1zZWNvbmRhcnlcIiwgXCJ0ZXh0LWxpZ2h0XCJdLFxyXG5cclxuICAgIC8vIEkgbWFkZSB0aGlzIG9uZSBmb3IgZnVuLCB5b3UgY2FuIGFkZCB5b3VyIG93biBzdHlsZXMgdG9vLlxyXG4gICAgU1dFRVQ6IFtcImJnLXN3ZWV0XCIsIFwidGV4dC1saWdodFwiXSxcclxuICB9LFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBPcHRpb25zVHlwZSB9IGZyb20gXCIuL3R5cGVzXCJcbmltcG9ydCB7IFBPU0lUSU9OUywgVFlQRVMgfSBmcm9tIFwiLi9wcmVmZXJlbmNlc1wiXG5pbXBvcnQgVXRpbCBmcm9tIFwiLi9VdGlsXCJcblxuY29uc3QgY2hlY2tzID0gW1xuICBbXCJUWVBFX0NIRUNLXCIsIFwiZGlzbWlzc2libGVcIiwgXCJib29sZWFuXCJdLFxuICBbXCJUWVBFX0NIRUNLXCIsIFwiZHVyYXRpb25cIiwgXCJudW1iZXJcIl0sXG4gIFtcIlRZUEVfQ0hFQ0tcIiwgXCJvZmZzZXRcIiwgXCJ7NSwgMTAsIDE1LCAyMH1cIl0sXG4gIFtcIlRZUEVfQ0hFQ0tcIiwgXCJvbkNsb3NlXCIsIFwiZnVuY3Rpb25cIl0sXG4gIFtcIlRZUEVfQ0hFQ0tcIiwgXCJvblNob3dcIiwgXCJmdW5jdGlvblwiXSxcbiAgW1wiVFlQRV9DSEVDS1wiLCBcInBhcmVudFwiLCBcInN0cmluZ1wiXSxcbiAgW1wiVFlQRV9DSEVDS1wiLCBcInBhdXNhYmxlXCIsIFwiYm9vbGVhblwiXSxcbiAgW1wiVFlQRV9DSEVDS1wiLCBcInBvc2l0aW9uXCIsIFwic3RyaW5nXCJdLFxuICBbXCJUWVBFX0NIRUNLXCIsIFwicHJvZ3Jlc3NcIiwgXCJib29sZWFuXCJdLFxuICBbXCJUWVBFX0NIRUNLXCIsIFwic25hY2tiYXJcIiwgXCJib29sZWFuXCJdLFxuICBbXCJUWVBFX0NIRUNLXCIsIFwic291bmRTb3VyY2VcIiwgXCJzdHJpbmdcIl0sXG4gIFtcIlRZUEVfQ0hFQ0tcIiwgXCJzb3VuZGFibGVcIiwgXCJib29sZWFuXCJdLFxuICBbXCJUWVBFX0NIRUNLXCIsIFwic3VidGl0bGVcIiwgW1wic3RyaW5nXCIsIFwib2JqZWN0XCJdXSxcbiAgW1wiVFlQRV9DSEVDS1wiLCBcInRleHRcIiwgXCJzdHJpbmdcIl0sXG4gIFtcIlRZUEVfQ0hFQ0tcIiwgXCJ0aXRsZVwiLCBcInN0cmluZ1wiXSxcbiAgW1wiVFlQRV9DSEVDS1wiLCBcInR5cGVcIiwgXCJzdHJpbmdcIl0sXG5dXG5cbmNvbnN0IGZpbHRlcnMgPSAob3B0aW9uczogT3B0aW9uc1R5cGUpID0+IHtcbiAgaWYgKGNoZWNrcy5sZW5ndGggPiAwKSB7XG4gICAgY2hlY2tzLmZvckVhY2goY2hlY2sgPT4ge1xuICAgICAgY29uc3Qgc2Vjb25kSW5kZXggPSBjaGVja1sxXTtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGNoZWNrWzJdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShsYXN0SW5kZXgpKSB7XG4gICAgICAgIC8vIENoZWNrIGFsbCBjYXNlcy5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcHRpb25zW3NlY29uZEluZGV4XSAmJiB0eXBlb2Ygb3B0aW9uc1tzZWNvbmRJbmRleF0gIT09IGxhc3RJbmRleCkge1xuICAgICAgICAgIHRocm93IHNlY29uZEluZGV4ICsgJyAgICcrIGxhc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmlsdGVyczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2FzdHN0cmFwIGZyb20gXCIuL1RvYXN0c3RyYXBcIlxyXG5pbXBvcnQgdHlwZSB7IE9wdGlvbnNUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIlxyXG5pbXBvcnQgeyBQT1NJVElPTlMsIFRZUEVTIH0gZnJvbSBcIi4vcHJlZmVyZW5jZXNcIlxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMuc2Nzc1wiXHJcbmltcG9ydCBmaWx0ZXJzIGZyb20gXCIuL3R5cGVjaGVja1wiXHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICB0b2FzdHN0cmFwOiAob3B0aW9uczogT3B0aW9uc1R5cGUpID0+IFRvYXN0c3RyYXA7XHJcbiAgICB0b2FzdHN0cmFwX3Bvc2l0aW9uOiBhbnksXHJcbiAgICB0b2FzdHN0cmFwX3R5cGU6IGFueVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7T3B0aW9uc1R5cGV9IG9wdGlvbnNcclxuICovXHJcbmNvbnN0IGluaXRpYWxpemUgPSAob3B0aW9uczogT3B0aW9uc1R5cGUpOiBUb2FzdHN0cmFwID0+IHtcclxuXHJcbiAgLy8gU2VjdXJpbmcgdHlwZXMuXHJcbiAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCkge1xyXG4gICAgZmlsdGVycyhvcHRpb25zKTtcclxuICB9XHJcbiAgcmV0dXJuIG5ldyBUb2FzdHN0cmFwKHtcclxuICAgIC4uLm9wdGlvbnMsXHJcbiAgfSlcclxufVxyXG5cclxuLy8gV2luZG93XHJcbndpbmRvdy50b2FzdHN0cmFwID0gaW5pdGlhbGl6ZVxyXG53aW5kb3cudG9hc3RzdHJhcF9wb3NpdGlvbiA9IFBPU0lUSU9OU1xyXG53aW5kb3cudG9hc3RzdHJhcF90eXBlID0gVFlQRVMiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=