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
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Util */ "./src/Util.ts");
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
 *
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
                if ("relative" in this.options.subtitle && this.options.subtitle.relative) {
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
        this.id = _Util__WEBPACK_IMPORTED_MODULE_8__["default"].makeId();
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
            if (this.options.progress) {
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
                if (this.options.pausable) {
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

/***/ "./src/Util.ts":
/*!*********************!*\
  !*** ./src/Util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.strFormat = function (str, values) {
        if (str && Object.keys(values).length > 0) {
            var regex = new RegExp(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g);
            return str.replace(regex, function (index) {
                var key = index.replace(/{/, "").replace(/}/, "");
                if (!values[key]) {
                    return index;
                }
                return values[key];
            });
        }
        return str;
    };
    Util.makeId = function () {
        return String(Math.floor(10000000000 + Math.random() * 9000000000));
    };
    return Util;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Util);


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
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../preferences */ "./src/preferences.ts");

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
        (_a = headerElement.classList).add.apply(_a, _preferences__WEBPACK_IMPORTED_MODULE_0__["default"].types[options.type]);
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
    if (options.dismissible) {
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
/* harmony export */   "hasClass": () => (/* binding */ hasClass)
/* harmony export */ });
var hasClass = function (element, className) {
    return element.classList.contains(className);
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
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./src/Util.ts");
/**----------------------------------
 * Checking and securing options types.
 * Only for browsers.
 *----------------------------------*/

var TYPE_CHECK = "TypeError: Option {option} should be in type {type}.";
var resolve = function (path, obj, separator) {
    if (obj === void 0) { obj = self; }
    if (separator === void 0) { separator = "."; }
    var properties = Array.isArray(path) ? path : path.split(separator);
    // @ts-ignore
    return properties.reduce(function (prev, curr) { return prev && prev[curr]; }, obj);
};
var checks = [
    [TYPE_CHECK, "dismissible", "boolean"],
    [TYPE_CHECK, "duration", "number"],
    [TYPE_CHECK, "offset", "number"],
    [TYPE_CHECK, "onClose", "function"],
    [TYPE_CHECK, "onShow", "function"],
    [TYPE_CHECK, "parent", "string"],
    [TYPE_CHECK, "pausable", "boolean"],
    [TYPE_CHECK, "position", "string"],
    [TYPE_CHECK, "progress", "boolean"],
    [TYPE_CHECK, "snackbar", "boolean"],
    [TYPE_CHECK, "soundSource", "string"],
    [TYPE_CHECK, "soundable", "boolean"],
    [TYPE_CHECK, "subtitle", ["string", "object"]],
    [TYPE_CHECK, "text", "string"],
    [TYPE_CHECK, "title", "string"],
    [TYPE_CHECK, "type", "string"],
    [TYPE_CHECK, "subtitle.relative", "boolean"],
    [TYPE_CHECK, "subtitle.datetime", ["string", "Date", "number"]],
];
var filters = function (options) {
    if (checks.length > 0) {
        checks.forEach(function (check) {
            var firstIndex = check[0];
            var secondIndex = check[1];
            var lastIndex = check[2];
            if (Array.isArray(lastIndex)) {
                var succeed_1 = false;
                lastIndex.forEach(function (type) {
                    // @ts-ignore
                    if (typeof resolve(secondIndex, options) !== "undefined" && typeof resolve(secondIndex, options) === type) {
                        succeed_1 = true;
                        return;
                    }
                });
                if (!succeed_1) {
                    // @ts-ignore
                    throw _Util__WEBPACK_IMPORTED_MODULE_0__["default"].strFormat(firstIndex, { option: secondIndex, type: lastIndex.toString() });
                }
            }
            else {
                // @ts-ignore
                if (resolve(secondIndex, options) && typeof resolve(secondIndex, options) !== lastIndex) {
                    // @ts-ignore
                    throw _Util__WEBPACK_IMPORTED_MODULE_0__["default"].strFormat(firstIndex, { option: secondIndex, type: lastIndex });
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
    // Type checks.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNJO0FBVWpDOzs7R0FHRztBQUNILElBQU0sVUFBVSxHQUFHLFVBQUMsT0FBb0I7SUFFdEMsZUFBZTtJQUNmLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDL0Isc0RBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sSUFBSSxtREFBVSxjQUNoQixPQUFPLEVBQ1Y7QUFDSixDQUFDO0FBRUQsU0FBUztBQUNULE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVTtBQUM5QixNQUFNLENBQUMsbUJBQW1CLEdBQUcsbURBQVM7QUFDdEMsTUFBTSxDQUFDLGVBQWUsR0FBRywrQ0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvYXNzZXRzL3N0eWxlcy5zY3NzPzNhM2IiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9SZWxhdGl2ZURhdGUudHMiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9Ub2FzdHN0cmFwLnRzIiwid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvVXRpbC50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL2NvbXBvbmVudHMvYm9keS50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL2NvbXBvbmVudHMvY29udGFpbmVyLnRzIiwid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9jb21wb25lbnRzL3Byb2dyZXNzLnRzIiwid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvY29tcG9uZW50cy9zb3VuZC50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9wcmVmZXJlbmNlcy50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL3R5cGVjaGVjay50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvYXN0c3RyYXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvYXN0c3RyYXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9icm93c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNsYXNzIFJlbGF0aXZlRGF0ZSB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtYXRzXG4gIHByaXZhdGUgcmVhZG9ubHkgdGltZXNcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dFxuICBwcml2YXRlIHJlYWRvbmx5IHJlZmVyZW5jZVxuXG4gIGNvbnN0cnVjdG9yKGlucHV0LCByZWZlcmVuY2U/OiBhbnkpIHtcbiAgICB0aGlzLnRpbWVzID0ge1xuICAgICAgU0VDT05EOiAxMDAwLFxuICAgICAgTUlOVVRFOiA2MCAqIDEwMDAsXG4gICAgICBIT1VSOiA2MCAqIDYwICogMTAwMCxcbiAgICAgIERBWTogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICAgIFdFRUs6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgICAgWUVBUjogMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICAgIE1PTlRIOiAoMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCkgLyAxMixcbiAgICB9XG5cblxuICAgIHRoaXMuZm9ybWF0cyA9IFtcbiAgICAgIFswLjcgKiB0aGlzLnRpbWVzLk1JTlVURSwgXCJqdXN0IG5vd1wiXSxcbiAgICAgIFsxLjUgKiB0aGlzLnRpbWVzLk1JTlVURSwgXCJhIG1pbnV0ZSBhZ29cIl0sXG4gICAgICBbNjAgKiB0aGlzLnRpbWVzLk1JTlVURSwgXCJtaW51dGVzIGFnb1wiLCB0aGlzLnRpbWVzLk1JTlVURV0sXG4gICAgICBbMS41ICogdGhpcy50aW1lcy5IT1VSLCBcImFuIGhvdXIgYWdvXCJdLFxuICAgICAgW3RoaXMudGltZXMuREFZLCBcImhvdXJzIGFnb1wiLCB0aGlzLnRpbWVzLkhPVVJdLFxuICAgICAgWzIgKiB0aGlzLnRpbWVzLkRBWSwgXCJ5ZXN0ZXJkYXlcIl0sXG4gICAgICBbNyAqIHRoaXMudGltZXMuREFZLCBcImRheXMgYWdvXCIsIHRoaXMudGltZXMuREFZXSxcbiAgICAgIFsxLjUgKiB0aGlzLnRpbWVzLldFRUssIFwiYSB3ZWVrIGFnb1wiXSxcbiAgICAgIFt0aGlzLnRpbWVzLk1PTlRILCBcIndlZWtzIGFnb1wiLCB0aGlzLnRpbWVzLldFRUtdLFxuICAgICAgWzEuNSAqIHRoaXMudGltZXMuTU9OVEgsIFwiYSBtb250aCBhZ29cIl0sXG4gICAgICBbdGhpcy50aW1lcy5ZRUFSLCBcIm1vbnRocyBhZ29cIiwgdGhpcy50aW1lcy5NT05USF0sXG4gICAgICBbMS41ICogdGhpcy50aW1lcy5ZRUFSLCBcImEgeWVhciBhZ29cIl0sXG4gICAgICBbTnVtYmVyLk1BWF9WQUxVRSwgXCJ5ZWFycyBhZ29cIiwgdGhpcy50aW1lcy5ZRUFSXSxcbiAgICBdXG5cblxuICAgIHRoaXMuaW5wdXQgPSBpbnB1dFxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlXG5cbiAgICBpZiAoIXJlZmVyZW5jZSkge1xuICAgICAgdGhpcy5yZWZlcmVuY2UgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gICAgfSBlbHNlIGlmIChyZWZlcmVuY2UgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZS5nZXRUaW1lKClcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmlucHV0LmdldFRpbWUoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSArbmV3IERhdGUoaW5wdXQpLmdldFRpbWUoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwdWJsaWMgcHJpbnQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBkZWx0YSA9IHRoaXMucmVmZXJlbmNlIC0gdGhpcy5pbnB1dFxuICAgIGxldCBmb3JtYXQ6IGFueVtdXG4gICAgbGV0IGluZGV4OiBudW1iZXJcbiAgICBsZXQgbGVuZ3RoOiBudW1iZXJcblxuICAgIGZvciAoaW5kZXggPSAtMSwgbGVuZ3RoID0gdGhpcy5mb3JtYXRzLmxlbmd0aDsgKytpbmRleCA8IGxlbmd0aDspIHtcbiAgICAgIGZvcm1hdCA9IHRoaXMuZm9ybWF0c1tpbmRleF1cblxuICAgICAgaWYgKGRlbHRhIDwgZm9ybWF0WzBdKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRbMl0gPT0gdW5kZWZpbmVkID8gZm9ybWF0WzFdIDogTWF0aC5yb3VuZChkZWx0YSAvIGZvcm1hdFsyXSkgKyBcIiBcIiArIGZvcm1hdFsxXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBcIlVua25vd25cIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0aXZlRGF0ZSIsImltcG9ydCBwcmVmZXJlbmNlcywgeyBjcHJlZml4LCBnY2xhc3MgfSBmcm9tIFwiLi9wcmVmZXJlbmNlc1wiXG5pbXBvcnQgeyBoYXNDbGFzcyB9IGZyb20gXCIuL2hlbHBlcnNcIlxuaW1wb3J0IHR5cGUgeyBPcHRpb25zVHlwZSwgU3ViVGl0bGVUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0IHsgUE9TSVRJT05TLCBUWVBFUyB9IGZyb20gXCIuL3ByZWZlcmVuY2VzXCJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCJcbmltcG9ydCB7IFRvYXN0Qm9keSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYm9keVwiXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFpbmVyXCJcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi9jb21wb25lbnRzL3NvdW5kXCJcbmltcG9ydCB7IFByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9ncmVzc1wiXG5pbXBvcnQgUmVsYXRpdmVEYXRlIGZyb20gXCIuL1JlbGF0aXZlRGF0ZVwiXG5pbXBvcnQgVXRpbCBmcm9tIFwiLi9VdGlsXCJcblxuLyoqXG4gKiBUb2FzdHN0cmFwIGNsYXNzIGZvciBidWlsZGluZyBhbmQgZ2VuZXJhdGluZyB0aGUgVG9hc3RzdHJhcCdzIHRvYXN0LlxuICpcbiAqIEBjbGFzcyBUb2FzdHN0cmFwXG4gKlxuICogQHZlcnNpb24gMS4wLjFcbiAqL1xuY2xhc3MgVG9hc3RzdHJhcCB7XG5cbiAgLyoqXG4gICAqIFRoZSBUb2FzdCBpZGVudGlmaWVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBpZDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIFRoZSB0b2FzdCBjcmVhdGVkIGF0IGRhdGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGNyZWF0ZWRBdDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIFRoZSB0b2FzdCBvcHRpb25zLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHVibGljIG9wdGlvbnM6IE9wdGlvbnNUeXBlXG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlZCB0b2FzdCBpdGVtLlxuICAgKiBVc2VkIHRvIGRlbGV0ZSwgcGF1c2Ugb3IgbW9kaWZ5IHRoZSBnZW5lcmF0ZWQgdG9hc3QuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIGl0ZW06IEhUTUxFbGVtZW50XG5cbiAgLyoqXG4gICAqIFRoZSBzb3VuZCBvYmplY3QuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IHNvdW5kOiBTb3VuZCB8IHVuZGVmaW5lZFxuXG4gIC8qKlxuICAgKiBUaGUgbWFyZ2lucyBiZXR3ZWVuIHRoZSBwYXJlbnROb2RlIGFuZCB0aGUgc2hvd24gdG9hc3QuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IHNwYWNlQmV0d2VlbjogbnVtYmVyXG5cbiAgLyoqXG4gICAqIFRoZSB0b2FzdCBncm91cC4gVXNlZCB0byBvcmdhbml6ZSB0aGUgdG9hc3RzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBncm91cDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIFRvYXN0IHRpbWUtb3V0IG9iamVjdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgdGltZW91dDogTm9kZUpTLlRpbWVvdXRcblxuICAvKipcbiAgICogVG9hc3QgdGltZXIgb2JqZWN0LiBVc2VkIGluIHByb2dyZXNzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHVibGljIHByb2dyZXNzSW50ZXJ2YWw6IE5vZGVKUy5UaW1lclxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHVibGljIHBhdXNlUHJvZ3Jlc3NJbnRlcnZhbDogYm9vbGVhblxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHVibGljIHByb2dyZXNzU3RhcnRUaW1lOiBudW1iZXJcblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBUb2FzdHN0cmFwLlxuICAgKlxuICAgKiBAcGFyYW0ge09wdGlvbnNUeXBlfSBvcHRpb25zIC0gQXZhaWxhYmxlIG9wdGlvbnMgdG8gY3VzdG9taXplIHRoZSB0b2FzdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBPcHRpb25zVHlwZSkge1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgYXZhdGFyOiBcIlwiLFxuICAgICAgZGlzbWlzc2libGU6IHRydWUsXG4gICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgIG9mZnNldDogMTAsXG4gICAgICBwYXJlbnQ6IFwiYm9keVwiLFxuICAgICAgcGF1c2FibGU6IHRydWUsXG4gICAgICBwb3NpdGlvbjogUE9TSVRJT05TLlRPUF9FTkQsXG4gICAgICBwcm9ncmVzczogdHJ1ZSxcbiAgICAgIHNuYWNrYmFyOiBmYWxzZSxcbiAgICAgIHNvdW5kU291cmNlOiBcIlwiLFxuICAgICAgc291bmRhYmxlOiBmYWxzZSxcbiAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgIHJlbGF0aXZlOiB0cnVlLFxuICAgICAgICBkYXRldGltZTogRGF0ZS5ub3coKVxuICAgICAgfSxcbiAgICAgIHRleHQ6IFwiXCIsXG4gICAgICB0aXRsZTogXCJcIixcbiAgICAgIHR5cGU6IFRZUEVTLkRFRkFVTFQsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSB0b2FzdCB0aW1lb3V0LlxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnN1YnRpdGxlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zdWJ0aXRsZSA9PT0gXCJvYmplY3RcIiAmJiBcImRhdGV0aW1lXCIgaW4gdGhpcy5vcHRpb25zLnN1YnRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGRlbHRhOiBTdWJUaXRsZVR5cGUgPSB0aGlzLm9wdGlvbnMuc3VidGl0bGVcblxuICAgICAgICBpZiAoXCJyZWxhdGl2ZVwiIGluIHRoaXMub3B0aW9ucy5zdWJ0aXRsZSAmJiB0aGlzLm9wdGlvbnMuc3VidGl0bGUucmVsYXRpdmUpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3VidGl0bGUgPSAobmV3IFJlbGF0aXZlRGF0ZShkZWx0YS5kYXRldGltZSkucHJpbnQoKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3VidGl0bGUgPSBTdHJpbmcoZGVsdGEuZGF0ZXRpbWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgdG9hc3QgZ3JvdXAuXG4gICAgLy8gVGhlIHRvYXN0IGdyb3VwIHVzZWQgdG8gb3JnYW5pemVkIHRoZSB0b2FzdHMuXG4gICAgdGhpcy5ncm91cCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiEgfHwgUE9TSVRJT05TLlRPUF9FTkRcblxuXG4gICAgaWYgKE9iamVjdC5rZXlzKFBPU0lUSU9OUykuaW5jbHVkZXModGhpcy5vcHRpb25zLnBvc2l0aW9uISkpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9IHByZWZlcmVuY2VzLnBvc2l0aW9uc1t0aGlzLm9wdGlvbnMucG9zaXRpb24hXVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnMucG9zaXRpb24gPSBwcmVmZXJlbmNlcy5wb3NpdGlvbnMuVE9QX0VORFxuICAgIH1cblxuICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0aGlzLnNwYWNlQmV0d2VlbiA9IDVcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc291bmRhYmxlICYmIHRoaXMub3B0aW9ucy5zb3VuZFNvdXJjZSAmJiB0aGlzLm9wdGlvbnMuc291bmRTb3VyY2UubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZCh0aGlzLm9wdGlvbnMuc291bmRTb3VyY2UsIHRoaXMucGFyZW50RWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLmlkID0gVXRpbC5tYWtlSWQoKVxuICAgIHRoaXMuY3JlYXRlZEF0ID0gRGF0ZS5ub3coKS50b1N0cmluZygpXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgfSwgMClcbiAgICB0aGlzLnByb2dyZXNzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgfSwgMClcbiAgICB0aGlzLnBhdXNlUHJvZ3Jlc3NJbnRlcnZhbCA9IGZhbHNlXG4gICAgdGhpcy5wcm9ncmVzc1N0YXJ0VGltZSA9IDBcblxuICB9XG5cbiAgLyoqXG4gICAqIFB1c2ggdGhlIHRvYXN0IHRvIHRoZSBkb2N1bWVudCBwYXJlbnQgbm9kZS5cbiAgICpcbiAgICogQHJldHVybiB7dGhpc30gVGhlIHRvYXN0IGluc3RhbmNlLlxuICAgKi9cbiAgcHVibGljIHNob3coKTogdGhpcyB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMucGFyZW50RWxlbWVudFxuICAgIGNvbnN0IHRvYXN0ID0gdGhpcy5idWlsZFxuXG4gICAgcm9vdC5pbnNlcnRCZWZvcmUodG9hc3QsIHJvb3QuZmlyc3RDaGlsZClcblxuICAgIC8vIFBsYXkgc291bmQgaWYgaXQncyBhbGxvd2VkLlxuICAgIGlmICh0aGlzLnNvdW5kKSB7XG4gICAgICB0aGlzLnNvdW5kLmluc3RhbmNlLnBsYXkoKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlNvdW5kIHNvdXJjZSBnaXZlbiBub3QgZm91bmQgb3Igbm90IHN1cHBvcnRlZC5cIilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gT3JkZXIgdG9hc3RzLlxuICAgIHRoaXMub3JnYW5pemUoKVxuXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IHRvIGNsb3NlIHRvYXN0LiBVc2VkIGluIGhlYWRlciBjb21wb25lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBwdWJsaWMgY2xvc2VFdmVudCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmRlc3Ryb3kodGhpcy5pdGVtKVxuICB9XG5cblxuICAvKipcbiAgICogQnVpbGQgdGhlIHRvYXN0IGVsZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgZ2VuZXJhdGVkIHRvYXN0LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgYnVpbGQoKTogSFRNTEVsZW1lbnQge1xuXG4gICAgLy8gQ29udGFpbmVyIEVsZW1lbnRcbiAgICBjb25zdCBjb250YWluZXIgPSBUb2FzdENvbnRhaW5lcih0aGlzKVxuXG4gICAgLy8gVG9hc3QgRWxlbWVudFxuICAgIGNvbnN0IHRvYXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0b2FzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvYXN0XCIpXG5cbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0aGlzLmlkKVxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNyZWF0ZWQtYXRcIiwgdGhpcy5jcmVhdGVkQXQpXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCB0aGlzLm9wdGlvbnMudHlwZSA/IHRoaXMub3B0aW9ucy50eXBlLnRvTG93ZXJDYXNlKCkgOiBcIlwiKVxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWdyb3VwXCIsIHRoaXMuZ3JvdXApXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtc25hY2tiYXJcIiwgU3RyaW5nKHRoaXMub3B0aW9ucy5zbmFja2JhcikpXG5cbiAgICAvLyBUb2FzdCBIZWFkZXIgKG9ubHkgaWYgb3B0aW9uIGhpZGVIZWFkZXIgaXMgc2V0IHRvIGZhbHNlKS5cbiAgICBpZiAoIUJvb2xlYW4odGhpcy5vcHRpb25zLnNuYWNrYmFyKSkge1xuICAgICAgdG9hc3RFbGVtZW50LmFwcGVuZENoaWxkKEhlYWRlckNvbXBvbmVudCh0aGlzKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4ucHJlZmVyZW5jZXMudHlwZXNbdGhpcy5vcHRpb25zLnR5cGVdKVxuICAgIH1cblxuICAgIC8vIFRvYXN0IEJvZHlcbiAgICB0b2FzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoVG9hc3RCb2R5KHRoaXMpKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzcykge1xuICAgICAgLy8gVG9hc3QgUHJvZ3Jlc3NcbiAgICAgIHRvYXN0RWxlbWVudC5hcHBlbmRDaGlsZChQcm9ncmVzc0NvbXBvbmVudCh0aGlzKSlcbiAgICB9XG5cblxuICAgIC8vIFB1dCB0b2FzdCBpbnRvIGl0J3MgY29udGFpbmVyLlxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2FzdEVsZW1lbnQpXG5cbiAgICAvLyBXYXRjaCB0b2FzdCBoZWlnaHQgY2hhbmdlZCwgYW5kIHJlLW9yZGVyIGlmIGhhcHBlbi5cbiAgICBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgdGhpcy5vcmdhbml6ZSgpXG4gICAgfSkub2JzZXJ2ZShjb250YWluZXIpXG5cbiAgICAvLyBUb2FzdCBpbnN0YW5jZS5cbiAgICB0aGlzLml0ZW0gPSBjb250YWluZXJcblxuICAgIC8vIFNob3cgdGhlIHRvYXN0IGJ5IGFkZGluZyBjbGFzcyAoLnNob3cpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmR1cmF0aW9uID4gMCkge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVzdHJveShjb250YWluZXIpXG4gICAgICB9LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24pXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucGF1c2FibGUpIHtcbiAgICAgICAgY29uc3QgdG91Y2hTdGFydENhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgICAgICAgdGhpcy5wYXVzZVByb2dyZXNzSW50ZXJ2YWwgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b3VjaEVuZENhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGF1c2VQcm9ncmVzc0ludGVydmFsID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnByb2dyZXNzU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcblxuICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KHRoaXMuaXRlbSlcbiAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24pXG4gICAgICAgIH1cblxuICAgICAgICBcIm1vdXNlb3ZlciB0b3VjaHN0YXJ0IHRvdWNoZW5kXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgdGhpcy5pdGVtLmFkZEV2ZW50TGlzdGVuZXIoZSwgdG91Y2hTdGFydENhbGxCYWNrKVxuICAgICAgICB9KVxuXG4gICAgICAgIFwibW91c2VsZWF2ZSB0b3VjaGVuZFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgIHRoaXMuaXRlbS5hZGRFdmVudExpc3RlbmVyKGUsIHRvdWNoRW5kQ2FsbEJhY2spXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9XG4gICAgLy8gUmV0dXJuIHRvYXN0IGluc3RhbmNlLlxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIC8qKlxuICAgKiAgVGhlIHBhcmVudCBlbGVtZW50LCB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIHRvYXN0cy5cbiAgICogQHJldHVybiB7RWxlbWVudH0gIFRoZSBtYWluIGVsZW1lbnQgc2VsZWN0ZWQgYnkgdGhlIHVzZXIgaWYgYXZhaWxhYmxlLCBvciB0aGUgZGVmYXVsdCBwYXJlbnQuXG4gICAqL1xuICBwcml2YXRlIGdldCBwYXJlbnRFbGVtZW50KCk6IEVsZW1lbnQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucGFyZW50KSB7XG4gICAgICBjb25zdCB1c2VyUm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5wYXJlbnQpXG4gICAgICBpZiAoIXVzZXJSb290RWxlbWVudCkge1xuICAgICAgICB0aHJvdyBcIlVzZXIgcm9vdCBlbGVtZW50IG5vdCBleGlzdHMuXCJcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodXNlclJvb3RFbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gdXNlclJvb3RFbGVtZW50WzBdXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1c2VyUm9vdEVsZW1lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZWxlbWVudCBmcm9tIGRvbSBhZnRlciB0aW1lb3V0IGZpbmlzaGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBkZXN0cm95KHRvYXN0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAvLyBIaWRlIHRoZSBlbGVtZW50LlxuICAgIHRvYXN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbG9zZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25DbG9zZSh0aGlzKVxuICAgIH1cblxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRvYXN0RWxlbWVudC5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZCh0b2FzdEVsZW1lbnQpXG4gICAgfSwgNDAwKVxuXG5cbiAgfVxuXG4gIHByaXZhdGUgb3JnYW5pemUoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMub3B0aW9uc1xuXG4gICAgY29uc3QgdG9wTGVmdE9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IE51bWJlcihvZmZzZXQpLFxuICAgICAgYm90dG9tOiBOdW1iZXIob2Zmc2V0KSxcbiAgICB9XG5cblxuICAgIGNvbnN0IHRvcFJpZ2h0T2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogTnVtYmVyKG9mZnNldCksXG4gICAgICBib3R0b206IE51bWJlcihvZmZzZXQpLFxuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IE51bWJlcihvZmZzZXQpLFxuICAgICAgYm90dG9tOiBOdW1iZXIob2Zmc2V0KSxcbiAgICB9XG5cblxuICAgIGxldCBzZWxlY3RvciA9IGAuJHtnY2xhc3MoXCJjb250YWluZXJcIil9W2RhdGEtZ3JvdXA9JyR7dGhpcy5ncm91cH0nXWBcblxuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggPiAwID8gd2luZG93LmlubmVyV2lkdGggOiBzY3JlZW4ud2lkdGhcblxuICAgIGlmICh3aW5kb3dXaWR0aCA8PSAzNjApIHtcbiAgICAgIHNlbGVjdG9yID0gYC4ke2djbGFzcyhcImNvbnRhaW5lclwiKX1gXG4gICAgfVxuICAgIGNvbnN0IHRvYXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTERpdkVsZW1lbnQ+KHNlbGVjdG9yKVxuXG4gICAgbGV0IGNsYXNzVXNlZFxuXG4gICAgaWYgKHRvYXN0cy5sZW5ndGggPiAwKSB7XG4gICAgICB0b2FzdHMuZm9yRWFjaCgodG9hc3QpID0+IHtcblxuICAgICAgICBpZiAoaGFzQ2xhc3ModG9hc3QsIGdjbGFzcyhcInRvcFwiKSkpIHtcbiAgICAgICAgICBjbGFzc1VzZWQgPSBnY2xhc3MoXCJ0b3BcIilcbiAgICAgICAgfSBlbHNlIGlmIChoYXNDbGFzcyh0b2FzdCwgZ2NsYXNzKFwibWlkZGxlXCIpKSkge1xuICAgICAgICAgIGNsYXNzVXNlZCA9IGdjbGFzcyhcIm1pZGRsZVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsYXNzVXNlZCA9IGdjbGFzcyhcImJvdHRvbVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9hc3RIZWlnaHQgPSB0b2FzdC5vZmZzZXRIZWlnaHRcbiAgICAgICAgY2xhc3NVc2VkID0gY2xhc3NVc2VkLnN1YnN0cihcbiAgICAgICAgICBgJHtjcHJlZml4fS1gLmxlbmd0aCAtIDEsXG4gICAgICAgICAgY2xhc3NVc2VkLmxlbmd0aCAtIDEsXG4gICAgICAgIClcblxuICAgICAgICAvLyBTaG93IHRvYXN0IGluIGNlbnRlciBpZiBzY3JlZW4gd2l0aCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMzYwcHguXG4gICAgICAgIGlmICh3aW5kb3dXaWR0aCA8PSAzNjApIHtcbiAgICAgICAgICB0b2FzdC5zdHlsZVtjbGFzc1VzZWRdID0gb2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiXG4gICAgICAgICAgb2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IHRvYXN0SGVpZ2h0ICsgdGhpcy5zcGFjZUJldHdlZW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaGFzQ2xhc3ModG9hc3QsIGBzdGFydC0ke3RoaXMub3B0aW9ucy5vZmZzZXR9YCkpIHtcbiAgICAgICAgICAgIHRvYXN0LnN0eWxlW2NsYXNzVXNlZF0gPSB0b3BMZWZ0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiXG4gICAgICAgICAgICB0b3BMZWZ0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IHRvYXN0SGVpZ2h0ICsgdGhpcy5zcGFjZUJldHdlZW5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9hc3Quc3R5bGVbY2xhc3NVc2VkXSA9IHRvcFJpZ2h0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiXG4gICAgICAgICAgICB0b3BSaWdodE9mZnNldFNpemVbY2xhc3NVc2VkXSArPSB0b2FzdEhlaWdodCArIHRoaXMuc3BhY2VCZXR3ZWVuXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0c3RyYXBcbiIsImNsYXNzIFV0aWwge1xuICBwdWJsaWMgc3RhdGljIHN0ckZvcm1hdChzdHI6IHN0cmluZywgdmFsdWVzOiBvYmplY3QpOiBzdHJpbmcge1xuICAgIGlmIChzdHIgJiYgT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoLyhbe31dKVxcMXxbe10oLio/KSg/OiEoLis/KSk/W31dL2cpXG5cblxuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4LCAoaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGtleSA9IGluZGV4LnJlcGxhY2UoL3svLCBcIlwiKS5yZXBsYWNlKC99LywgXCJcIilcbiAgICAgICAgaWYgKCF2YWx1ZXNba2V5XSkge1xuICAgICAgICAgIHJldHVybiBpbmRleFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlc1trZXldXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbWFrZUlkKCkge1xuICAgIHJldHVybiBTdHJpbmcoTWF0aC5mbG9vcigxMDAwMDAwMDAwMCArIE1hdGgucmFuZG9tKCkgKiA5MDAwMDAwMDAwKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsIiwiaW1wb3J0IFRvYXN0c3RyYXAgZnJvbSBcIi4uL1RvYXN0c3RyYXBcIlxuXG5leHBvcnQgY29uc3QgVG9hc3RCb2R5ID0gKGNvbnRleHQ6IFRvYXN0c3RyYXApID0+IHtcbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0XG4gIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBib2R5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9hc3QtYm9keVwiKVxuICBib2R5RWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLnRleHRcblxuICByZXR1cm4gYm9keUVsZW1lbnRcbn1cbiIsImltcG9ydCB7IGdjbGFzcyB9IGZyb20gXCIuLi9wcmVmZXJlbmNlc1wiXG5pbXBvcnQgVG9hc3RzdHJhcCBmcm9tIFwiLi4vVG9hc3RzdHJhcFwiXG5cbmV4cG9ydCBjb25zdCBUb2FzdENvbnRhaW5lciA9IChjb250ZXh0OiBUb2FzdHN0cmFwKSA9PiB7XG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gY29udGV4dFxuICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9IGAke1xuICAgIGNvbnRleHQub3B0aW9ucy5wYXJlbnQgPyBcInBvc2l0aW9uLWFic29sdXRlXCIgOiBcInBvc2l0aW9uLWZpeGVkXCJcbiAgfSAke29wdGlvbnMucG9zaXRpb259LSR7b3B0aW9ucy5vZmZzZXR9ICR7Z2NsYXNzKFwiY29udGFpbmVyXCIpfWBcblxuICBjb250YWluZXJFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiMjUwMFwiXG5cbiAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnRcbn1cbiIsImltcG9ydCBUb2FzdHN0cmFwIGZyb20gXCIuLi9Ub2FzdHN0cmFwXCJcbmltcG9ydCBwcmVmZXJlbmNlcyBmcm9tIFwiLi4vcHJlZmVyZW5jZXNcIlxuaW1wb3J0IHR5cGUgeyBPcHRpb25zVHlwZSB9IGZyb20gXCIuLi90eXBlc1wiXG5cbmNvbnN0IEF2YXRhckNvbXBvbmVudCA9IChvcHRpb25zOiBPcHRpb25zVHlwZSkgPT4ge1xuICBjb25zdCBhdmF0YXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBhdmF0YXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyb3VuZGVkXCIsIFwibWUtMlwiKVxuICBhdmF0YXJFbGVtZW50LnNyYyA9IG9wdGlvbnMuYXZhdGFyIHx8IFwiXCJcbiAgYXZhdGFyRWxlbWVudC53aWR0aCA9IDIwXG4gIGF2YXRhckVsZW1lbnQuaGVpZ2h0ID0gMjBcblxuICByZXR1cm4gYXZhdGFyRWxlbWVudFxufVxuXG5jb25zdCBDbG9zZUJ1dHRvbkNvbXBvbmVudCA9IChvbkNsb3NlRXZlbnQ6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3QgY2xvc2VCdG5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICBjbG9zZUJ0bkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJ0bi1jbG9zZVwiKVxuICBjbG9zZUJ0bkVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKVxuICBjbG9zZUJ0bkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJlYS1sYWJlbFwiLCBcIkNsb3NlXCIpXG5cbiAgY2xvc2VCdG5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb25DbG9zZUV2ZW50KClcbiAgfSlcblxuICByZXR1cm4gY2xvc2VCdG5FbGVtZW50XG59XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJDb21wb25lbnQgPSAoY29udGV4dDogVG9hc3RzdHJhcCk6IEVsZW1lbnQgPT4ge1xuICBjb25zdCB7IG9wdGlvbnMgfSA9IGNvbnRleHRcbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9hc3QtaGVhZGVyXCIpXG5cbiAgLy8gQXZhdGFyIGVsZW1lbnRcbiAgaWYgKG9wdGlvbnMuYXZhdGFyKSB7XG4gICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChBdmF0YXJDb21wb25lbnQob3B0aW9ucykpXG4gIH1cblxuICBpZiAob3B0aW9ucy50eXBlKSB7XG4gICAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnByZWZlcmVuY2VzLnR5cGVzW29wdGlvbnMudHlwZV0pXG4gIH1cblxuXG4gIC8vIENyZWF0ZSB0aXRsZSBlbGVtZW50LlxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpXG4gIHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWUtYXV0b1wiKVxuICB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gb3B0aW9ucy50aXRsZVxuICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudClcblxuICBpZiAob3B0aW9ucy5zdWJ0aXRsZSkge1xuICAgIC8vIHRpbWVcbiAgICBjb25zdCB0aW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzbWFsbFwiKVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zdWJ0aXRsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGltZUVsZW1lbnQuaW5uZXJUZXh0ID0gb3B0aW9ucy5zdWJ0aXRsZVxuICAgIH1cblxuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQodGltZUVsZW1lbnQpXG4gIH1cblxuICAvLyBDbG9zZSBidXR0b25cbiAgaWYgKG9wdGlvbnMuZGlzbWlzc2libGUpIHtcbiAgICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKENsb3NlQnV0dG9uQ29tcG9uZW50KGNvbnRleHQuY2xvc2VFdmVudCkpXG4gIH1cblxuICAvLyBSZXR1cm4gaGVhZGVyIGVsZW1lbnQuXG4gIHJldHVybiBoZWFkZXJFbGVtZW50XG59XG4iLCIvKipcbiAqIEBjcmVkaXQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNTMwOTQ2XG4gKiBAcGFyYW0gZHVyYXRpb25cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5pbXBvcnQgVG9hc3RzdHJhcCBmcm9tIFwiLi4vVG9hc3RzdHJhcFwiXG5cbmV4cG9ydCBjb25zdCBQcm9ncmVzc0NvbXBvbmVudCA9IChmYWN0b3J5OiBUb2FzdHN0cmFwKSA9PiB7XG4gIGxldCB7IGR1cmF0aW9uIH0gPSBmYWN0b3J5Lm9wdGlvbnNcblxuXG4gIGNvbnN0IHByb2dyZXNzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgcHJvZ3Jlc3NFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2FzdC1mb290ZXJcIilcbiAgY29uc3QgaW5kaWNhdG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgaW5kaWNhdG9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9hc3QtZm9vdGVyLWlubmVyXCIpXG4gIHByb2dyZXNzRWxlbWVudC5hcHBlbmRDaGlsZChpbmRpY2F0b3JFbGVtZW50KVxuXG5cbiAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgIGR1cmF0aW9uIDwgMTAwICA/IGR1cmF0aW9uID0gZHVyYXRpb24gKiAxMDAwIDogZHVyYXRpb247XG5cbiAgICBpbmRpY2F0b3JFbGVtZW50LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgXG5cbiAgfVxuICAvKipcbiAgICogSSBtYWRlIHRoaXMgdG8gbWFrZSBwcm9ncmVzcyBtb3ZlIHdoZW4gZHVyYXRpb24gaXMgc2V0LlxuICAgKiBCdXQgaXQncyBraWxsIHRoZSBwZXJmb3JtYW5jZSwgc28gSSBkZWNpZGVkIHRvIHVzZSBDU1MgdG8gZG8gdGhhdC5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgZmFjdG9yeS5wcm9ncmVzc1N0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cbiAgICAvLyA+Li48IEkgd2lsbCBqdXN0IHVzZSBjc3MgdG8gZG8gdGhhdC5cbiAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICBmYWN0b3J5LnByb2dyZXNzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICghZmFjdG9yeS5wYXVzZVByb2dyZXNzSW50ZXJ2YWwpIHtcbiAgICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5yb3VuZChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGZhY3RvcnkucHJvZ3Jlc3NTdGFydFRpbWUpXG4gICAgICAgICAgbGV0IHZhbHVlID0gTWF0aC5yb3VuZChkaWZmIC8gZHVyYXRpb24gKiAxMDApXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZSA+IDEwMCA/IDEwMCA6IHZhbHVlXG5cbiAgICAgICAgICBpbmRpY2F0b3JFbGVtZW50LnN0eWxlLndpZHRoID0gdmFsdWUgKyBcIiVcIlxuXG4gICAgICAgICAgaWYgKGRpZmYgPj0gZHVyYXRpb24pIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmFjdG9yeS5wcm9ncmVzc0ludGVydmFsKVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9LCAxMDApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb2dyZXNzRWxlbWVudFxufVxuIiwiaW1wb3J0IHsgY3ByZWZpeCB9IGZyb20gXCIuLi9wcmVmZXJlbmNlc1wiXG5cbmNsYXNzIFNvdW5kIHtcbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MQXVkaW9FbGVtZW50XG4gIHByaXZhdGUgc2VsZWN0b3I6IHN0cmluZ1xuICBwcml2YXRlIHBhcmVudDogRWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKGF1ZGlvRmlsZTogc3RyaW5nLCBwYXJlbnRFbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGAke2NwcmVmaXh9LW5vdGlmaWNhdGlvbmBcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgQXVkaW8oYXVkaW9GaWxlKVxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50RWxlbWVudFxuXG5cbiAgICB0aGlzLm1ha2UoKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHByaXZhdGUgbWFrZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLnNlbGVjdG9yXG5cbiAgICBpZiAoIXRoaXMucGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyB0aGlzLnNlbGVjdG9yKSkge1xuICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KVxuICAgIH1cblxuICB9XG5cbiAgcHVibGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU291bmQiLCJjb25zdCBoYXNDbGFzcyA9IChlbGVtZW50OiBFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxufVxuXG5cbmV4cG9ydCB7IGhhc0NsYXNzIH1cbiIsIi8qKlxuICogUHJlZml4IHdpbGwgYmUgYXBwbGllZCB0byBhbGwgY3NzIGNsYXNzZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBjcHJlZml4ID0gXCJ0b2FzdHN0cmFwLVwiXG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc25hbWUgd2l0aCB0aGUgcHJlZml4LlxuICogQHBhcmFtIHtzdHJpbmd9IGNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdjbGFzcyhjOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGNwcmVmaXggKyBjXG59XG5cbmV4cG9ydCBlbnVtIFBPU0lUSU9OUyB7XG4gIFRPUF9TVEFSVCA9IFwiVE9QX1NUQVJUXCIsXG4gIFRPUF9FTkQgPSBcIlRPUF9FTkRcIixcbiAgVE9QX0NFTlRFUiA9IFwiVE9QX0NFTlRFUlwiLFxuICBCT1RUT01fU1RBUlQgPSBcIkJPVFRPTV9TVEFSVFwiLFxuICBCT1RUT01fRU5EID0gXCJCT1RUT01fRU5EXCIsXG4gIEJPVFRPTV9DRU5URVIgPSBcIkJPVFRPTV9DRU5URVJcIixcbn1cblxuZXhwb3J0IGVudW0gVFlQRVMge1xuICBERUZBVUxUID0gXCJERUZBVUxUXCIsXG4gIFBSSU1BUlkgPSBcIlBSSU1BUllcIixcbiAgSU5GTyA9IFwiSU5GT1wiLFxuICBTVUNDRVNTID0gXCJTVUNDRVNTXCIsXG4gIFdBUk5JTkcgPSBcIldBUk5JTkdcIixcbiAgREFOR0VSID0gXCJEQU5HRVJcIixcbiAgREFSSyA9IFwiREFSS1wiLFxuICBTV0VFVCA9IFwiU1dFRVRcIlxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcG9zaXRpb25zOiB7XG4gICAgLy8gVE9QXG4gICAgVE9QX1NUQVJUOiBnY2xhc3MoXCJ0b3BcIikgKyBcIiBcIiArIGdjbGFzcyhcInN0YXJ0XCIpLFxuICAgIFRPUF9FTkQ6IGdjbGFzcyhcInRvcFwiKSArIFwiIFwiICsgZ2NsYXNzKFwiZW5kXCIpLFxuICAgIFRPUF9DRU5URVI6IGdjbGFzcyhcInRvcFwiKSArIFwiIFwiICsgZ2NsYXNzKFwiY2VudGVyXCIpLFxuXG4gICAgLy8gQm90dG9tXG4gICAgQk9UVE9NX0NFTlRFUjogZ2NsYXNzKFwiYm90dG9tXCIpICsgXCIgXCIgKyBnY2xhc3MoXCJjZW50ZXJcIiksXG4gICAgQk9UVE9NX1NUQVJUOiBnY2xhc3MoXCJib3R0b21cIikgKyBcIiBcIiArIGdjbGFzcyhcInN0YXJ0XCIpLFxuICAgIEJPVFRPTV9FTkQ6IGdjbGFzcyhcImJvdHRvbVwiKSArIFwiIFwiICsgZ2NsYXNzKFwiZW5kXCIpLFxuICB9LFxuXG4gIHR5cGVzOiB7XG4gICAgREVGQVVMVDogW1wiYmctZGVmYXVsdFwiXSxcbiAgICBQUklNQVJZOiBbXCJiZy1wcmltYXJ5XCIsIFwidGV4dC1saWdodFwiXSxcbiAgICBJTkZPOiBbXCJiZy1pbmZvXCIsIFwidGV4dC1saWdodFwiXSxcbiAgICBTVUNDRVNTOiBbXCJiZy1zdWNjZXNzXCIsIFwidGV4dC1saWdodFwiXSxcbiAgICBXQVJOSU5HOiBbXCJiZy13YXJuaW5nXCIsIFwidGV4dC1kYXJrXCJdLFxuICAgIERBTkdFUjogW1wiYmctZGFuZ2VyXCIsIFwidGV4dC1saWdodFwiXSxcbiAgICBEQVJLOiBbXCJiZy1kYXJrXCIsIFwidGV4dC1saWdodFwiXSxcbiAgICBTRUNPTkRBUlk6IFtcImJnLXNlY29uZGFyeVwiLCBcInRleHQtbGlnaHRcIl0sXG5cbiAgICAvLyBJIG1hZGUgdGhpcyBvbmUgZm9yIGZ1biwgeW91IGNhbiBhZGQgeW91ciBvd24gc3R5bGVzIHRvby5cbiAgICBTV0VFVDogW1wiYmctc3dlZXRcIiwgXCJ0ZXh0LWxpZ2h0XCJdLFxuICB9LFxufVxuXG4iLCIvKiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDaGVja2luZyBhbmQgc2VjdXJpbmcgb3B0aW9ucyB0eXBlcy5cbiAqIE9ubHkgZm9yIGJyb3dzZXJzLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaW1wb3J0IHsgT3B0aW9uc1R5cGUgfSBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgVXRpbCBmcm9tIFwiLi9VdGlsXCJcblxuY29uc3QgVFlQRV9DSEVDSyA9IFwiVHlwZUVycm9yOiBPcHRpb24ge29wdGlvbn0gc2hvdWxkIGJlIGluIHR5cGUge3R5cGV9LlwiXG5cbmNvbnN0IHJlc29sdmUgPSAocGF0aDogc3RyaW5nLCBvYmogPSBzZWxmLCBzZXBhcmF0b3IgPSBcIi5cIikgPT4ge1xuICBjb25zdCBwcm9wZXJ0aWVzID0gQXJyYXkuaXNBcnJheShwYXRoKSA/IHBhdGggOiBwYXRoLnNwbGl0KHNlcGFyYXRvcilcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcHJvcGVydGllcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgcHJldltjdXJyXSwgb2JqKVxufVxuXG5jb25zdCBjaGVja3MgPSBbXG4gIFtUWVBFX0NIRUNLLCBcImRpc21pc3NpYmxlXCIsIFwiYm9vbGVhblwiXSxcbiAgW1RZUEVfQ0hFQ0ssIFwiZHVyYXRpb25cIiwgXCJudW1iZXJcIl0sXG4gIFtUWVBFX0NIRUNLLCBcIm9mZnNldFwiLCBcIm51bWJlclwiXSxcbiAgW1RZUEVfQ0hFQ0ssIFwib25DbG9zZVwiLCBcImZ1bmN0aW9uXCJdLFxuICBbVFlQRV9DSEVDSywgXCJvblNob3dcIiwgXCJmdW5jdGlvblwiXSxcbiAgW1RZUEVfQ0hFQ0ssIFwicGFyZW50XCIsIFwic3RyaW5nXCJdLFxuICBbVFlQRV9DSEVDSywgXCJwYXVzYWJsZVwiLCBcImJvb2xlYW5cIl0sXG4gIFtUWVBFX0NIRUNLLCBcInBvc2l0aW9uXCIsIFwic3RyaW5nXCJdLFxuICBbVFlQRV9DSEVDSywgXCJwcm9ncmVzc1wiLCBcImJvb2xlYW5cIl0sXG4gIFtUWVBFX0NIRUNLLCBcInNuYWNrYmFyXCIsIFwiYm9vbGVhblwiXSxcbiAgW1RZUEVfQ0hFQ0ssIFwic291bmRTb3VyY2VcIiwgXCJzdHJpbmdcIl0sXG4gIFtUWVBFX0NIRUNLLCBcInNvdW5kYWJsZVwiLCBcImJvb2xlYW5cIl0sXG4gIFtUWVBFX0NIRUNLLCBcInN1YnRpdGxlXCIsIFtcInN0cmluZ1wiLCBcIm9iamVjdFwiXV0sXG4gIFtUWVBFX0NIRUNLLCBcInRleHRcIiwgXCJzdHJpbmdcIl0sXG4gIFtUWVBFX0NIRUNLLCBcInRpdGxlXCIsIFwic3RyaW5nXCJdLFxuICBbVFlQRV9DSEVDSywgXCJ0eXBlXCIsIFwic3RyaW5nXCJdLFxuICBbVFlQRV9DSEVDSywgXCJzdWJ0aXRsZS5yZWxhdGl2ZVwiLCBcImJvb2xlYW5cIl0sXG4gIFtUWVBFX0NIRUNLLCBcInN1YnRpdGxlLmRhdGV0aW1lXCIsIFtcInN0cmluZ1wiLCBcIkRhdGVcIiwgXCJudW1iZXJcIl1dLFxuXVxuXG5jb25zdCBmaWx0ZXJzID0gKG9wdGlvbnM6IE9wdGlvbnNUeXBlKSA9PiB7XG4gIGlmIChjaGVja3MubGVuZ3RoID4gMCkge1xuICAgIGNoZWNrcy5mb3JFYWNoKGNoZWNrID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0SW5kZXggPSBjaGVja1swXVxuICAgICAgY29uc3Qgc2Vjb25kSW5kZXggPSBjaGVja1sxXVxuICAgICAgY29uc3QgbGFzdEluZGV4ID0gY2hlY2tbMl1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGFzdEluZGV4KSkge1xuICAgICAgICBsZXQgc3VjY2VlZCA9IGZhbHNlXG5cbiAgICAgICAgbGFzdEluZGV4LmZvckVhY2godHlwZSA9PiB7XG5cbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgaWYgKHR5cGVvZiByZXNvbHZlKHNlY29uZEluZGV4LCBvcHRpb25zKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcmVzb2x2ZShzZWNvbmRJbmRleCwgb3B0aW9ucykgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIHN1Y2NlZWQgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCFzdWNjZWVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHRocm93IFV0aWwuc3RyRm9ybWF0KGZpcnN0SW5kZXgsIHsgb3B0aW9uOiBzZWNvbmRJbmRleCwgdHlwZTogbGFzdEluZGV4LnRvU3RyaW5nKCkgfSlcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChyZXNvbHZlKHNlY29uZEluZGV4LCBvcHRpb25zKSAmJiB0eXBlb2YgcmVzb2x2ZShzZWNvbmRJbmRleCwgb3B0aW9ucykgIT09IGxhc3RJbmRleCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB0aHJvdyBVdGlsLnN0ckZvcm1hdChmaXJzdEluZGV4LCB7IG9wdGlvbjogc2Vjb25kSW5kZXgsIHR5cGU6IGxhc3RJbmRleCB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJzIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9hc3RzdHJhcCBmcm9tIFwiLi9Ub2FzdHN0cmFwXCJcbmltcG9ydCB0eXBlIHsgT3B0aW9uc1R5cGUgfSBmcm9tIFwiLi90eXBlc1wiXG5pbXBvcnQgeyBQT1NJVElPTlMsIFRZUEVTIH0gZnJvbSBcIi4vcHJlZmVyZW5jZXNcIlxuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzLnNjc3NcIlxuaW1wb3J0IGZpbHRlcnMgZnJvbSBcIi4vdHlwZWNoZWNrXCJcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICB0b2FzdHN0cmFwOiAob3B0aW9uczogT3B0aW9uc1R5cGUpID0+IFRvYXN0c3RyYXA7XG4gICAgdG9hc3RzdHJhcF9wb3NpdGlvbjogYW55LFxuICAgIHRvYXN0c3RyYXBfdHlwZTogYW55XG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtPcHRpb25zVHlwZX0gb3B0aW9uc1xuICovXG5jb25zdCBpbml0aWFsaXplID0gKG9wdGlvbnM6IE9wdGlvbnNUeXBlKTogVG9hc3RzdHJhcCA9PiB7XG5cbiAgLy8gVHlwZSBjaGVja3MuXG4gIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGgpIHtcbiAgICBmaWx0ZXJzKG9wdGlvbnMpO1xuICB9XG4gIHJldHVybiBuZXcgVG9hc3RzdHJhcCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgfSlcbn1cblxuLy8gV2luZG93XG53aW5kb3cudG9hc3RzdHJhcCA9IGluaXRpYWxpemVcbndpbmRvdy50b2FzdHN0cmFwX3Bvc2l0aW9uID0gUE9TSVRJT05TXG53aW5kb3cudG9hc3RzdHJhcF90eXBlID0gVFlQRVMiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=