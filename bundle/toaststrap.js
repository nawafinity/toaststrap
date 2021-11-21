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
 * Toaststrap class for building and generating the toast.
 *
 * @class Toaststrap
 *
 * @version 1.1.0
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
/**
 * Provides some useful utility.
 * @class Util
 */
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * Format a string template.
     * @param {string} str String to be format.
     * @param {object} values The values object.
     * @return string
     */
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
    /**
     * Generate an unique identifier.
     * @return string
     */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQztBQUVXO0FBQ25CO0FBQ0k7QUFVakM7OztHQUdHO0FBQ0gsSUFBTSxVQUFVLEdBQUcsVUFBQyxPQUFvQjtJQUV0QyxlQUFlO0lBQ2YsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRTtRQUMvQixzREFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxJQUFJLG1EQUFVLGNBQ2hCLE9BQU8sRUFDVjtBQUNKLENBQUM7QUFFRCxTQUFTO0FBQ1QsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVO0FBQzlCLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxtREFBUztBQUN0QyxNQUFNLENBQUMsZUFBZSxHQUFHLCtDQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9hc3NldHMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9SZWxhdGl2ZURhdGUudHMiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9Ub2FzdHN0cmFwLnRzIiwid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvVXRpbC50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL2NvbXBvbmVudHMvYm9keS50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL2NvbXBvbmVudHMvY29udGFpbmVyLnRzIiwid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9jb21wb25lbnRzL3Byb2dyZXNzLnRzIiwid2VicGFjazovL1RvYXN0c3RyYXAvLi9zcmMvY29tcG9uZW50cy9zb3VuZC50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9wcmVmZXJlbmNlcy50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwLy4vc3JjL3R5cGVjaGVjay50cyIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvYXN0c3RyYXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvYXN0c3RyYXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub2FzdHN0cmFwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG9hc3RzdHJhcC8uL3NyYy9icm93c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNsYXNzIFJlbGF0aXZlRGF0ZSB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtYXRzXG4gIHByaXZhdGUgcmVhZG9ubHkgdGltZXNcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dFxuICBwcml2YXRlIHJlYWRvbmx5IHJlZmVyZW5jZVxuXG4gIGNvbnN0cnVjdG9yKGlucHV0LCByZWZlcmVuY2U/OiBhbnkpIHtcbiAgICB0aGlzLnRpbWVzID0ge1xuICAgICAgU0VDT05EOiAxMDAwLFxuICAgICAgTUlOVVRFOiA2MCAqIDEwMDAsXG4gICAgICBIT1VSOiA2MCAqIDYwICogMTAwMCxcbiAgICAgIERBWTogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICAgIFdFRUs6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgICAgWUVBUjogMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICAgIE1PTlRIOiAoMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCkgLyAxMixcbiAgICB9XG5cblxuICAgIHRoaXMuZm9ybWF0cyA9IFtcbiAgICAgIFswLjcgKiB0aGlzLnRpbWVzLk1JTlVURSwgXCJqdXN0IG5vd1wiXSxcbiAgICAgIFsxLjUgKiB0aGlzLnRpbWVzLk1JTlVURSwgXCJhIG1pbnV0ZSBhZ29cIl0sXG4gICAgICBbNjAgKiB0aGlzLnRpbWVzLk1JTlVURSwgXCJtaW51dGVzIGFnb1wiLCB0aGlzLnRpbWVzLk1JTlVURV0sXG4gICAgICBbMS41ICogdGhpcy50aW1lcy5IT1VSLCBcImFuIGhvdXIgYWdvXCJdLFxuICAgICAgW3RoaXMudGltZXMuREFZLCBcImhvdXJzIGFnb1wiLCB0aGlzLnRpbWVzLkhPVVJdLFxuICAgICAgWzIgKiB0aGlzLnRpbWVzLkRBWSwgXCJ5ZXN0ZXJkYXlcIl0sXG4gICAgICBbNyAqIHRoaXMudGltZXMuREFZLCBcImRheXMgYWdvXCIsIHRoaXMudGltZXMuREFZXSxcbiAgICAgIFsxLjUgKiB0aGlzLnRpbWVzLldFRUssIFwiYSB3ZWVrIGFnb1wiXSxcbiAgICAgIFt0aGlzLnRpbWVzLk1PTlRILCBcIndlZWtzIGFnb1wiLCB0aGlzLnRpbWVzLldFRUtdLFxuICAgICAgWzEuNSAqIHRoaXMudGltZXMuTU9OVEgsIFwiYSBtb250aCBhZ29cIl0sXG4gICAgICBbdGhpcy50aW1lcy5ZRUFSLCBcIm1vbnRocyBhZ29cIiwgdGhpcy50aW1lcy5NT05USF0sXG4gICAgICBbMS41ICogdGhpcy50aW1lcy5ZRUFSLCBcImEgeWVhciBhZ29cIl0sXG4gICAgICBbTnVtYmVyLk1BWF9WQUxVRSwgXCJ5ZWFycyBhZ29cIiwgdGhpcy50aW1lcy5ZRUFSXSxcbiAgICBdXG5cblxuICAgIHRoaXMuaW5wdXQgPSBpbnB1dFxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlXG5cbiAgICBpZiAoIXJlZmVyZW5jZSkge1xuICAgICAgdGhpcy5yZWZlcmVuY2UgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gICAgfSBlbHNlIGlmIChyZWZlcmVuY2UgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZS5nZXRUaW1lKClcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmlucHV0LmdldFRpbWUoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSArbmV3IERhdGUoaW5wdXQpLmdldFRpbWUoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwdWJsaWMgcHJpbnQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBkZWx0YSA9IHRoaXMucmVmZXJlbmNlIC0gdGhpcy5pbnB1dFxuICAgIGxldCBmb3JtYXQ6IGFueVtdXG4gICAgbGV0IGluZGV4OiBudW1iZXJcbiAgICBsZXQgbGVuZ3RoOiBudW1iZXJcblxuICAgIGZvciAoaW5kZXggPSAtMSwgbGVuZ3RoID0gdGhpcy5mb3JtYXRzLmxlbmd0aDsgKytpbmRleCA8IGxlbmd0aDspIHtcbiAgICAgIGZvcm1hdCA9IHRoaXMuZm9ybWF0c1tpbmRleF1cblxuICAgICAgaWYgKGRlbHRhIDwgZm9ybWF0WzBdKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRbMl0gPT0gdW5kZWZpbmVkID8gZm9ybWF0WzFdIDogTWF0aC5yb3VuZChkZWx0YSAvIGZvcm1hdFsyXSkgKyBcIiBcIiArIGZvcm1hdFsxXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBcIlVua25vd25cIlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0aXZlRGF0ZSIsImltcG9ydCBwcmVmZXJlbmNlcywgeyBjcHJlZml4LCBnY2xhc3MgfSBmcm9tIFwiLi9wcmVmZXJlbmNlc1wiXG5pbXBvcnQgeyBoYXNDbGFzcyB9IGZyb20gXCIuL2hlbHBlcnNcIlxuaW1wb3J0IHR5cGUgeyBPcHRpb25zVHlwZSwgU3ViVGl0bGVUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0IHsgUE9TSVRJT05TLCBUWVBFUyB9IGZyb20gXCIuL3ByZWZlcmVuY2VzXCJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCJcbmltcG9ydCB7IFRvYXN0Qm9keSB9IGZyb20gXCIuL2NvbXBvbmVudHMvYm9keVwiXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFpbmVyXCJcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi9jb21wb25lbnRzL3NvdW5kXCJcbmltcG9ydCB7IFByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9ncmVzc1wiXG5pbXBvcnQgUmVsYXRpdmVEYXRlIGZyb20gXCIuL1JlbGF0aXZlRGF0ZVwiXG5pbXBvcnQgVXRpbCBmcm9tIFwiLi9VdGlsXCJcblxuLyoqXG4gKiBUb2FzdHN0cmFwIGNsYXNzIGZvciBidWlsZGluZyBhbmQgZ2VuZXJhdGluZyB0aGUgdG9hc3QuXG4gKlxuICogQGNsYXNzIFRvYXN0c3RyYXBcbiAqXG4gKiBAdmVyc2lvbiAxLjEuMFxuICovXG5jbGFzcyBUb2FzdHN0cmFwIHtcblxuICAvKipcbiAgICogVGhlIFRvYXN0IGlkZW50aWZpZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmdcblxuICAvKipcbiAgICogVGhlIHRvYXN0IGNyZWF0ZWQgYXQgZGF0ZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgY3JlYXRlZEF0OiBzdHJpbmdcblxuICAvKipcbiAgICogVGhlIHRvYXN0IG9wdGlvbnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwdWJsaWMgb3B0aW9uczogT3B0aW9uc1R5cGVcblxuICAvKipcbiAgICogR2VuZXJhdGVkIHRvYXN0IGl0ZW0uXG4gICAqIFVzZWQgdG8gZGVsZXRlLCBwYXVzZSBvciBtb2RpZnkgdGhlIGdlbmVyYXRlZCB0b2FzdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgaXRlbTogSFRNTEVsZW1lbnRcblxuICAvKipcbiAgICogVGhlIHNvdW5kIG9iamVjdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgc291bmQ6IFNvdW5kIHwgdW5kZWZpbmVkXG5cbiAgLyoqXG4gICAqIFRoZSBtYXJnaW5zIGJldHdlZW4gdGhlIHBhcmVudE5vZGUgYW5kIHRoZSBzaG93biB0b2FzdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgc3BhY2VCZXR3ZWVuOiBudW1iZXJcblxuICAvKipcbiAgICogVGhlIHRvYXN0IGdyb3VwLiBVc2VkIHRvIG9yZ2FuaXplIHRoZSB0b2FzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGdyb3VwOiBzdHJpbmdcblxuICAvKipcbiAgICogVG9hc3QgdGltZS1vdXQgb2JqZWN0LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSB0aW1lb3V0OiBOb2RlSlMuVGltZW91dFxuXG4gIC8qKlxuICAgKiBUb2FzdCB0aW1lciBvYmplY3QuIFVzZWQgaW4gcHJvZ3Jlc3MuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwdWJsaWMgcHJvZ3Jlc3NJbnRlcnZhbDogTm9kZUpTLlRpbWVyXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwdWJsaWMgcGF1c2VQcm9ncmVzc0ludGVydmFsOiBib29sZWFuXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwdWJsaWMgcHJvZ3Jlc3NTdGFydFRpbWU6IG51bWJlclxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFRvYXN0c3RyYXAuXG4gICAqXG4gICAqIEBwYXJhbSB7T3B0aW9uc1R5cGV9IG9wdGlvbnMgLSBBdmFpbGFibGUgb3B0aW9ucyB0byBjdXN0b21pemUgdGhlIHRvYXN0LlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IE9wdGlvbnNUeXBlKSB7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBhdmF0YXI6IFwiXCIsXG4gICAgICBkaXNtaXNzaWJsZTogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgb2Zmc2V0OiAxMCxcbiAgICAgIHBhcmVudDogXCJib2R5XCIsXG4gICAgICBwYXVzYWJsZTogdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBQT1NJVElPTlMuVE9QX0VORCxcbiAgICAgIHByb2dyZXNzOiB0cnVlLFxuICAgICAgc25hY2tiYXI6IGZhbHNlLFxuICAgICAgc291bmRTb3VyY2U6IFwiXCIsXG4gICAgICBzb3VuZGFibGU6IGZhbHNlLFxuICAgICAgc3VidGl0bGU6IHtcbiAgICAgICAgcmVsYXRpdmU6IHRydWUsXG4gICAgICAgIGRhdGV0aW1lOiBEYXRlLm5vdygpXG4gICAgICB9LFxuICAgICAgdGV4dDogXCJcIixcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgdHlwZTogVFlQRVMuREVGQVVMVCxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIHRvYXN0IHRpbWVvdXQuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc3VidGl0bGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnN1YnRpdGxlID09PSBcIm9iamVjdFwiICYmIFwiZGF0ZXRpbWVcIiBpbiB0aGlzLm9wdGlvbnMuc3VidGl0bGUpIHtcbiAgICAgICAgY29uc3QgZGVsdGE6IFN1YlRpdGxlVHlwZSA9IHRoaXMub3B0aW9ucy5zdWJ0aXRsZVxuXG4gICAgICAgIGlmIChcInJlbGF0aXZlXCIgaW4gdGhpcy5vcHRpb25zLnN1YnRpdGxlICYmIHRoaXMub3B0aW9ucy5zdWJ0aXRsZS5yZWxhdGl2ZSkge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdWJ0aXRsZSA9IChuZXcgUmVsYXRpdmVEYXRlKGRlbHRhLmRhdGV0aW1lKS5wcmludCgpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdWJ0aXRsZSA9IFN0cmluZyhkZWx0YS5kYXRldGltZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCB0b2FzdCBncm91cC5cbiAgICAvLyBUaGUgdG9hc3QgZ3JvdXAgdXNlZCB0byBvcmdhbml6ZWQgdGhlIHRvYXN0cy5cbiAgICB0aGlzLmdyb3VwID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uISB8fCBQT1NJVElPTlMuVE9QX0VORFxuXG5cbiAgICBpZiAoT2JqZWN0LmtleXMoUE9TSVRJT05TKS5pbmNsdWRlcyh0aGlzLm9wdGlvbnMucG9zaXRpb24hKSkge1xuICAgICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uID0gcHJlZmVyZW5jZXMucG9zaXRpb25zW3RoaXMub3B0aW9ucy5wb3NpdGlvbiFdXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9IHByZWZlcmVuY2VzLnBvc2l0aW9ucy5UT1BfRU5EXG4gICAgfVxuXG4gICAgdGhpcy5pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRoaXMuc3BhY2VCZXR3ZWVuID0gNVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3VuZGFibGUgJiYgdGhpcy5vcHRpb25zLnNvdW5kU291cmNlICYmIHRoaXMub3B0aW9ucy5zb3VuZFNvdXJjZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNvdW5kID0gbmV3IFNvdW5kKHRoaXMub3B0aW9ucy5zb3VuZFNvdXJjZSwgdGhpcy5wYXJlbnRFbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuaWQgPSBVdGlsLm1ha2VJZCgpXG4gICAgdGhpcy5jcmVhdGVkQXQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKClcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB9LCAwKVxuICAgIHRoaXMucHJvZ3Jlc3NJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICB9LCAwKVxuICAgIHRoaXMucGF1c2VQcm9ncmVzc0ludGVydmFsID0gZmFsc2VcbiAgICB0aGlzLnByb2dyZXNzU3RhcnRUaW1lID0gMFxuXG4gIH1cblxuICAvKipcbiAgICogUHVzaCB0aGUgdG9hc3QgdG8gdGhlIGRvY3VtZW50IHBhcmVudCBub2RlLlxuICAgKlxuICAgKiBAcmV0dXJuIHt0aGlzfSBUaGUgdG9hc3QgaW5zdGFuY2UuXG4gICAqL1xuICBwdWJsaWMgc2hvdygpOiB0aGlzIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5wYXJlbnRFbGVtZW50XG4gICAgY29uc3QgdG9hc3QgPSB0aGlzLmJ1aWxkXG5cbiAgICByb290Lmluc2VydEJlZm9yZSh0b2FzdCwgcm9vdC5maXJzdENoaWxkKVxuXG4gICAgLy8gUGxheSBzb3VuZCBpZiBpdCdzIGFsbG93ZWQuXG4gICAgaWYgKHRoaXMuc291bmQpIHtcbiAgICAgIHRoaXMuc291bmQuaW5zdGFuY2UucGxheSgpLmNhdGNoKCgpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiU291bmQgc291cmNlIGdpdmVuIG5vdCBmb3VuZCBvciBub3Qgc3VwcG9ydGVkLlwiKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBPcmRlciB0b2FzdHMuXG4gICAgdGhpcy5vcmdhbml6ZSgpXG5cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgdG8gY2xvc2UgdG9hc3QuIFVzZWQgaW4gaGVhZGVyIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHB1YmxpYyBjbG9zZUV2ZW50ID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuZGVzdHJveSh0aGlzLml0ZW0pXG4gIH1cblxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgdG9hc3QgZWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBnZW5lcmF0ZWQgdG9hc3QuXG4gICAqL1xuICBwcml2YXRlIGdldCBidWlsZCgpOiBIVE1MRWxlbWVudCB7XG5cbiAgICAvLyBDb250YWluZXIgRWxlbWVudFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFRvYXN0Q29udGFpbmVyKHRoaXMpXG5cbiAgICAvLyBUb2FzdCBFbGVtZW50XG4gICAgY29uc3QgdG9hc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRvYXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9hc3RcIilcblxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHRoaXMuaWQpXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtY3JlYXRlZC1hdFwiLCB0aGlzLmNyZWF0ZWRBdClcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIHRoaXMub3B0aW9ucy50eXBlID8gdGhpcy5vcHRpb25zLnR5cGUudG9Mb3dlckNhc2UoKSA6IFwiXCIpXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtZ3JvdXBcIiwgdGhpcy5ncm91cClcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1zbmFja2JhclwiLCBTdHJpbmcodGhpcy5vcHRpb25zLnNuYWNrYmFyKSlcblxuICAgIC8vIFRvYXN0IEhlYWRlciAob25seSBpZiBvcHRpb24gaGlkZUhlYWRlciBpcyBzZXQgdG8gZmFsc2UpLlxuICAgIGlmICghQm9vbGVhbih0aGlzLm9wdGlvbnMuc25hY2tiYXIpKSB7XG4gICAgICB0b2FzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoSGVhZGVyQ29tcG9uZW50KHRoaXMpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0b2FzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5wcmVmZXJlbmNlcy50eXBlc1t0aGlzLm9wdGlvbnMudHlwZV0pXG4gICAgfVxuXG4gICAgLy8gVG9hc3QgQm9keVxuICAgIHRvYXN0RWxlbWVudC5hcHBlbmRDaGlsZChUb2FzdEJvZHkodGhpcykpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzKSB7XG4gICAgICAvLyBUb2FzdCBQcm9ncmVzc1xuICAgICAgdG9hc3RFbGVtZW50LmFwcGVuZENoaWxkKFByb2dyZXNzQ29tcG9uZW50KHRoaXMpKVxuICAgIH1cblxuXG4gICAgLy8gUHV0IHRvYXN0IGludG8gaXQncyBjb250YWluZXIuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvYXN0RWxlbWVudClcblxuICAgIC8vIFdhdGNoIHRvYXN0IGhlaWdodCBjaGFuZ2VkLCBhbmQgcmUtb3JkZXIgaWYgaGFwcGVuLlxuICAgIG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICB0aGlzLm9yZ2FuaXplKClcbiAgICB9KS5vYnNlcnZlKGNvbnRhaW5lcilcblxuICAgIC8vIFRvYXN0IGluc3RhbmNlLlxuICAgIHRoaXMuaXRlbSA9IGNvbnRhaW5lclxuXG4gICAgLy8gU2hvdyB0aGUgdG9hc3QgYnkgYWRkaW5nIGNsYXNzICguc2hvdylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3dcIilcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZHVyYXRpb24gPiAwKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZXN0cm95KGNvbnRhaW5lcilcbiAgICAgIH0sIHRoaXMub3B0aW9ucy5kdXJhdGlvbilcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXVzYWJsZSkge1xuICAgICAgICBjb25zdCB0b3VjaFN0YXJ0Q2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgICB0aGlzLnBhdXNlUHJvZ3Jlc3NJbnRlcnZhbCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvdWNoRW5kQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wYXVzZVByb2dyZXNzSW50ZXJ2YWwgPSBmYWxzZVxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuXG4gICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3kodGhpcy5pdGVtKVxuICAgICAgICAgIH0sIHRoaXMub3B0aW9ucy5kdXJhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIFwibW91c2VvdmVyIHRvdWNoc3RhcnQgdG91Y2hlbmRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICB0aGlzLml0ZW0uYWRkRXZlbnRMaXN0ZW5lcihlLCB0b3VjaFN0YXJ0Q2FsbEJhY2spXG4gICAgICAgIH0pXG5cbiAgICAgICAgXCJtb3VzZWxlYXZlIHRvdWNoZW5kXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgdGhpcy5pdGVtLmFkZEV2ZW50TGlzdGVuZXIoZSwgdG91Y2hFbmRDYWxsQmFjaylcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH1cbiAgICAvLyBSZXR1cm4gdG9hc3QgaW5zdGFuY2UuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG5cbiAgLyoqXG4gICAqICBUaGUgcGFyZW50IGVsZW1lbnQsIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgdG9hc3RzLlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fSAgVGhlIG1haW4gZWxlbWVudCBzZWxlY3RlZCBieSB0aGUgdXNlciBpZiBhdmFpbGFibGUsIG9yIHRoZSBkZWZhdWx0IHBhcmVudC5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHBhcmVudEVsZW1lbnQoKTogRWxlbWVudCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXJlbnQpIHtcbiAgICAgIGNvbnN0IHVzZXJSb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLnBhcmVudClcbiAgICAgIGlmICghdXNlclJvb3RFbGVtZW50KSB7XG4gICAgICAgIHRocm93IFwiVXNlciByb290IGVsZW1lbnQgbm90IGV4aXN0cy5cIlxuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VyUm9vdEVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiB1c2VyUm9vdEVsZW1lbnRbMF1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVzZXJSb290RWxlbWVudFxuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudC5ib2R5XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBlbGVtZW50IGZyb20gZG9tIGFmdGVyIHRpbWVvdXQgZmluaXNoZWQuXG4gICAqL1xuICBwcml2YXRlIGRlc3Ryb3kodG9hc3RFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQuXG4gICAgdG9hc3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpXG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsb3NlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vbkNsb3NlKHRoaXMpXG4gICAgfVxuXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdG9hc3RFbGVtZW50LnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKHRvYXN0RWxlbWVudClcbiAgICB9LCA0MDApXG5cblxuICB9XG5cbiAgcHJpdmF0ZSBvcmdhbml6ZSgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5vcHRpb25zXG5cbiAgICBjb25zdCB0b3BMZWZ0T2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogTnVtYmVyKG9mZnNldCksXG4gICAgICBib3R0b206IE51bWJlcihvZmZzZXQpLFxuICAgIH1cblxuXG4gICAgY29uc3QgdG9wUmlnaHRPZmZzZXRTaXplID0ge1xuICAgICAgdG9wOiBOdW1iZXIob2Zmc2V0KSxcbiAgICAgIGJvdHRvbTogTnVtYmVyKG9mZnNldCksXG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogTnVtYmVyKG9mZnNldCksXG4gICAgICBib3R0b206IE51bWJlcihvZmZzZXQpLFxuICAgIH1cblxuXG4gICAgbGV0IHNlbGVjdG9yID0gYC4ke2djbGFzcyhcImNvbnRhaW5lclwiKX1bZGF0YS1ncm91cD0nJHt0aGlzLmdyb3VwfSddYFxuXG4gICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDAgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHNjcmVlbi53aWR0aFxuXG4gICAgaWYgKHdpbmRvd1dpZHRoIDw9IDM2MCkge1xuICAgICAgc2VsZWN0b3IgPSBgLiR7Z2NsYXNzKFwiY29udGFpbmVyXCIpfWBcbiAgICB9XG4gICAgY29uc3QgdG9hc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRGl2RWxlbWVudD4oc2VsZWN0b3IpXG5cbiAgICBsZXQgY2xhc3NVc2VkXG5cbiAgICBpZiAodG9hc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRvYXN0cy5mb3JFYWNoKCh0b2FzdCkgPT4ge1xuXG4gICAgICAgIGlmIChoYXNDbGFzcyh0b2FzdCwgZ2NsYXNzKFwidG9wXCIpKSkge1xuICAgICAgICAgIGNsYXNzVXNlZCA9IGdjbGFzcyhcInRvcFwiKVxuICAgICAgICB9IGVsc2UgaWYgKGhhc0NsYXNzKHRvYXN0LCBnY2xhc3MoXCJtaWRkbGVcIikpKSB7XG4gICAgICAgICAgY2xhc3NVc2VkID0gZ2NsYXNzKFwibWlkZGxlXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xhc3NVc2VkID0gZ2NsYXNzKFwiYm90dG9tXCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b2FzdEhlaWdodCA9IHRvYXN0Lm9mZnNldEhlaWdodFxuICAgICAgICBjbGFzc1VzZWQgPSBjbGFzc1VzZWQuc3Vic3RyKFxuICAgICAgICAgIGAke2NwcmVmaXh9LWAubGVuZ3RoIC0gMSxcbiAgICAgICAgICBjbGFzc1VzZWQubGVuZ3RoIC0gMSxcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIFNob3cgdG9hc3QgaW4gY2VudGVyIGlmIHNjcmVlbiB3aXRoIGxlc3MgdGhhbiBvciBlcXVhbCB0byAzNjBweC5cbiAgICAgICAgaWYgKHdpbmRvd1dpZHRoIDw9IDM2MCkge1xuICAgICAgICAgIHRvYXN0LnN0eWxlW2NsYXNzVXNlZF0gPSBvZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCJcbiAgICAgICAgICBvZmZzZXRTaXplW2NsYXNzVXNlZF0gKz0gdG9hc3RIZWlnaHQgKyB0aGlzLnNwYWNlQmV0d2VlblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChoYXNDbGFzcyh0b2FzdCwgYHN0YXJ0LSR7dGhpcy5vcHRpb25zLm9mZnNldH1gKSkge1xuICAgICAgICAgICAgdG9hc3Quc3R5bGVbY2xhc3NVc2VkXSA9IHRvcExlZnRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCJcbiAgICAgICAgICAgIHRvcExlZnRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKz0gdG9hc3RIZWlnaHQgKyB0aGlzLnNwYWNlQmV0d2VlblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2FzdC5zdHlsZVtjbGFzc1VzZWRdID0gdG9wUmlnaHRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCJcbiAgICAgICAgICAgIHRvcFJpZ2h0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IHRvYXN0SGVpZ2h0ICsgdGhpcy5zcGFjZUJldHdlZW5cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RzdHJhcFxuIiwiLyoqXG4gKiBQcm92aWRlcyBzb21lIHVzZWZ1bCB1dGlsaXR5LlxuICogQGNsYXNzIFV0aWxcbiAqL1xuY2xhc3MgVXRpbCB7XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBhIHN0cmluZyB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBTdHJpbmcgdG8gYmUgZm9ybWF0LlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFRoZSB2YWx1ZXMgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzdHJGb3JtYXQoc3RyOiBzdHJpbmcsIHZhbHVlczogb2JqZWN0KTogc3RyaW5nIHtcbiAgICBpZiAoc3RyICYmIE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC8oW3t9XSlcXDF8W3tdKC4qPykoPzohKC4rPykpP1t9XS9nKVxuXG5cbiAgICAgIHJldHVybiBzdHIucmVwbGFjZShyZWdleCwgKGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBrZXkgPSBpbmRleC5yZXBsYWNlKC97LywgXCJcIikucmVwbGFjZSgvfS8sIFwiXCIpXG4gICAgICAgIGlmICghdmFsdWVzW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4gaW5kZXhcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZXNba2V5XVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyXG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgYW4gdW5pcXVlIGlkZW50aWZpZXIuXG4gICAqIEByZXR1cm4gc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG1ha2VJZCgpIHtcbiAgICByZXR1cm4gU3RyaW5nKE1hdGguZmxvb3IoMTAwMDAwMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwMDAwMCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbCIsImltcG9ydCBUb2FzdHN0cmFwIGZyb20gXCIuLi9Ub2FzdHN0cmFwXCJcblxuZXhwb3J0IGNvbnN0IFRvYXN0Qm9keSA9IChjb250ZXh0OiBUb2FzdHN0cmFwKSA9PiB7XG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gY29udGV4dFxuICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgYm9keUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvYXN0LWJvZHlcIilcbiAgYm9keUVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9ucy50ZXh0XG5cbiAgcmV0dXJuIGJvZHlFbGVtZW50XG59XG4iLCJpbXBvcnQgeyBnY2xhc3MgfSBmcm9tIFwiLi4vcHJlZmVyZW5jZXNcIlxuaW1wb3J0IFRvYXN0c3RyYXAgZnJvbSBcIi4uL1RvYXN0c3RyYXBcIlxuXG5leHBvcnQgY29uc3QgVG9hc3RDb250YWluZXIgPSAoY29udGV4dDogVG9hc3RzdHJhcCkgPT4ge1xuICBjb25zdCB7IG9wdGlvbnMgfSA9IGNvbnRleHRcbiAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgY29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSBgJHtcbiAgICBjb250ZXh0Lm9wdGlvbnMucGFyZW50ID8gXCJwb3NpdGlvbi1hYnNvbHV0ZVwiIDogXCJwb3NpdGlvbi1maXhlZFwiXG4gIH0gJHtvcHRpb25zLnBvc2l0aW9ufS0ke29wdGlvbnMub2Zmc2V0fSAke2djbGFzcyhcImNvbnRhaW5lclwiKX1gXG5cbiAgY29udGFpbmVyRWxlbWVudC5zdHlsZS56SW5kZXggPSBcIjI1MDBcIlxuXG4gIHJldHVybiBjb250YWluZXJFbGVtZW50XG59XG4iLCJpbXBvcnQgVG9hc3RzdHJhcCBmcm9tIFwiLi4vVG9hc3RzdHJhcFwiXG5pbXBvcnQgcHJlZmVyZW5jZXMgZnJvbSBcIi4uL3ByZWZlcmVuY2VzXCJcbmltcG9ydCB0eXBlIHsgT3B0aW9uc1R5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIlxuXG5jb25zdCBBdmF0YXJDb21wb25lbnQgPSAob3B0aW9uczogT3B0aW9uc1R5cGUpID0+IHtcbiAgY29uc3QgYXZhdGFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgYXZhdGFyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicm91bmRlZFwiLCBcIm1lLTJcIilcbiAgYXZhdGFyRWxlbWVudC5zcmMgPSBvcHRpb25zLmF2YXRhciB8fCBcIlwiXG4gIGF2YXRhckVsZW1lbnQud2lkdGggPSAyMFxuICBhdmF0YXJFbGVtZW50LmhlaWdodCA9IDIwXG5cbiAgcmV0dXJuIGF2YXRhckVsZW1lbnRcbn1cblxuY29uc3QgQ2xvc2VCdXR0b25Db21wb25lbnQgPSAob25DbG9zZUV2ZW50OiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IGNsb3NlQnRuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgY2xvc2VCdG5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJidG4tY2xvc2VcIilcbiAgY2xvc2VCdG5FbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIilcbiAgY2xvc2VCdG5FbGVtZW50LnNldEF0dHJpYnV0ZShcImFyZWEtbGFiZWxcIiwgXCJDbG9zZVwiKVxuXG4gIGNsb3NlQnRuRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9uQ2xvc2VFdmVudCgpXG4gIH0pXG5cbiAgcmV0dXJuIGNsb3NlQnRuRWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgSGVhZGVyQ29tcG9uZW50ID0gKGNvbnRleHQ6IFRvYXN0c3RyYXApOiBFbGVtZW50ID0+IHtcbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0XG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvYXN0LWhlYWRlclwiKVxuXG4gIC8vIEF2YXRhciBlbGVtZW50XG4gIGlmIChvcHRpb25zLmF2YXRhcikge1xuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoQXZhdGFyQ29tcG9uZW50KG9wdGlvbnMpKVxuICB9XG5cbiAgaWYgKG9wdGlvbnMudHlwZSkge1xuICAgIGhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5wcmVmZXJlbmNlcy50eXBlc1tvcHRpb25zLnR5cGVdKVxuICB9XG5cblxuICAvLyBDcmVhdGUgdGl0bGUgZWxlbWVudC5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKVxuICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lLWF1dG9cIilcbiAgdGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IG9wdGlvbnMudGl0bGVcbiAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG5cbiAgaWYgKG9wdGlvbnMuc3VidGl0bGUpIHtcbiAgICAvLyB0aW1lXG4gICAgY29uc3QgdGltZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic21hbGxcIilcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3VidGl0bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRpbWVFbGVtZW50LmlubmVyVGV4dCA9IG9wdGlvbnMuc3VidGl0bGVcbiAgICB9XG5cbiAgICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKHRpbWVFbGVtZW50KVxuICB9XG5cbiAgLy8gQ2xvc2UgYnV0dG9uXG4gIGlmIChvcHRpb25zLmRpc21pc3NpYmxlKSB7XG4gICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChDbG9zZUJ1dHRvbkNvbXBvbmVudChjb250ZXh0LmNsb3NlRXZlbnQpKVxuICB9XG5cbiAgLy8gUmV0dXJuIGhlYWRlciBlbGVtZW50LlxuICByZXR1cm4gaGVhZGVyRWxlbWVudFxufVxuIiwiLyoqXG4gKiBAY3JlZGl0IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMTUzMDk0NlxuICogQHBhcmFtIGR1cmF0aW9uXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuaW1wb3J0IFRvYXN0c3RyYXAgZnJvbSBcIi4uL1RvYXN0c3RyYXBcIlxuXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NDb21wb25lbnQgPSAoZmFjdG9yeTogVG9hc3RzdHJhcCkgPT4ge1xuICBsZXQgeyBkdXJhdGlvbiB9ID0gZmFjdG9yeS5vcHRpb25zXG5cblxuICBjb25zdCBwcm9ncmVzc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIHByb2dyZXNzRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9hc3QtZm9vdGVyXCIpXG4gIGNvbnN0IGluZGljYXRvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGluZGljYXRvckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvYXN0LWZvb3Rlci1pbm5lclwiKVxuICBwcm9ncmVzc0VsZW1lbnQuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yRWxlbWVudClcblxuXG4gIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICBkdXJhdGlvbiA8IDEwMCAgPyBkdXJhdGlvbiA9IGR1cmF0aW9uICogMTAwMCA6IGR1cmF0aW9uO1xuXG4gICAgaW5kaWNhdG9yRWxlbWVudC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYFxuXG4gIH1cbiAgLyoqXG4gICAqIEkgbWFkZSB0aGlzIHRvIG1ha2UgcHJvZ3Jlc3MgbW92ZSB3aGVuIGR1cmF0aW9uIGlzIHNldC5cbiAgICogQnV0IGl0J3Mga2lsbCB0aGUgcGVyZm9ybWFuY2UsIHNvIEkgZGVjaWRlZCB0byB1c2UgQ1NTIHRvIGRvIHRoYXQuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIGZhY3RvcnkucHJvZ3Jlc3NTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuXG4gICAgLy8gPi4uPCBJIHdpbGwganVzdCB1c2UgY3NzIHRvIGRvIHRoYXQuXG4gICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgZmFjdG9yeS5wcm9ncmVzc0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoIWZhY3RvcnkucGF1c2VQcm9ncmVzc0ludGVydmFsKSB7XG4gICAgICAgICAgY29uc3QgZGlmZiA9IE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBmYWN0b3J5LnByb2dyZXNzU3RhcnRUaW1lKVxuICAgICAgICAgIGxldCB2YWx1ZSA9IE1hdGgucm91bmQoZGlmZiAvIGR1cmF0aW9uICogMTAwKVxuICAgICAgICAgIHZhbHVlID0gdmFsdWUgPiAxMDAgPyAxMDAgOiB2YWx1ZVxuXG4gICAgICAgICAgaW5kaWNhdG9yRWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgXCIlXCJcblxuICAgICAgICAgIGlmIChkaWZmID49IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGZhY3RvcnkucHJvZ3Jlc3NJbnRlcnZhbClcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfSwgMTAwKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9ncmVzc0VsZW1lbnRcbn1cbiIsImltcG9ydCB7IGNwcmVmaXggfSBmcm9tIFwiLi4vcHJlZmVyZW5jZXNcIlxuXG5jbGFzcyBTb3VuZCB7XG4gIHByaXZhdGUgZWxlbWVudDogSFRNTEF1ZGlvRWxlbWVudFxuICBwcml2YXRlIHNlbGVjdG9yOiBzdHJpbmdcbiAgcHJpdmF0ZSBwYXJlbnQ6IEVsZW1lbnRcblxuICBjb25zdHJ1Y3RvcihhdWRpb0ZpbGU6IHN0cmluZywgcGFyZW50RWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBgJHtjcHJlZml4fS1ub3RpZmljYXRpb25gXG4gICAgdGhpcy5lbGVtZW50ID0gbmV3IEF1ZGlvKGF1ZGlvRmlsZSlcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudEVsZW1lbnRcblxuXG4gICAgdGhpcy5tYWtlKClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwcml2YXRlIG1ha2UoKSB7XG4gICAgdGhpcy5lbGVtZW50LmlkID0gdGhpcy5zZWxlY3RvclxuXG4gICAgaWYgKCF0aGlzLnBhcmVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgdGhpcy5zZWxlY3RvcikpIHtcbiAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudClcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdW5kIiwiY29uc3QgaGFzQ2xhc3MgPSAoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbn1cblxuXG5leHBvcnQgeyBoYXNDbGFzcyB9XG4iLCIvKipcbiAqIFByZWZpeCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGNzcyBjbGFzc2VzLlxuICovXG5leHBvcnQgY29uc3QgY3ByZWZpeCA9IFwidG9hc3RzdHJhcC1cIlxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NuYW1lIHdpdGggdGhlIHByZWZpeC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnY2xhc3MoYzogc3RyaW5nKSB7XG4gIHJldHVybiBjcHJlZml4ICsgY1xufVxuXG5leHBvcnQgZW51bSBQT1NJVElPTlMge1xuICBUT1BfU1RBUlQgPSBcIlRPUF9TVEFSVFwiLFxuICBUT1BfRU5EID0gXCJUT1BfRU5EXCIsXG4gIFRPUF9DRU5URVIgPSBcIlRPUF9DRU5URVJcIixcbiAgQk9UVE9NX1NUQVJUID0gXCJCT1RUT01fU1RBUlRcIixcbiAgQk9UVE9NX0VORCA9IFwiQk9UVE9NX0VORFwiLFxuICBCT1RUT01fQ0VOVEVSID0gXCJCT1RUT01fQ0VOVEVSXCIsXG59XG5cbmV4cG9ydCBlbnVtIFRZUEVTIHtcbiAgREVGQVVMVCA9IFwiREVGQVVMVFwiLFxuICBQUklNQVJZID0gXCJQUklNQVJZXCIsXG4gIElORk8gPSBcIklORk9cIixcbiAgU1VDQ0VTUyA9IFwiU1VDQ0VTU1wiLFxuICBXQVJOSU5HID0gXCJXQVJOSU5HXCIsXG4gIERBTkdFUiA9IFwiREFOR0VSXCIsXG4gIERBUksgPSBcIkRBUktcIixcbiAgU1dFRVQgPSBcIlNXRUVUXCJcbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBvc2l0aW9uczoge1xuICAgIC8vIFRPUFxuICAgIFRPUF9TVEFSVDogZ2NsYXNzKFwidG9wXCIpICsgXCIgXCIgKyBnY2xhc3MoXCJzdGFydFwiKSxcbiAgICBUT1BfRU5EOiBnY2xhc3MoXCJ0b3BcIikgKyBcIiBcIiArIGdjbGFzcyhcImVuZFwiKSxcbiAgICBUT1BfQ0VOVEVSOiBnY2xhc3MoXCJ0b3BcIikgKyBcIiBcIiArIGdjbGFzcyhcImNlbnRlclwiKSxcblxuICAgIC8vIEJvdHRvbVxuICAgIEJPVFRPTV9DRU5URVI6IGdjbGFzcyhcImJvdHRvbVwiKSArIFwiIFwiICsgZ2NsYXNzKFwiY2VudGVyXCIpLFxuICAgIEJPVFRPTV9TVEFSVDogZ2NsYXNzKFwiYm90dG9tXCIpICsgXCIgXCIgKyBnY2xhc3MoXCJzdGFydFwiKSxcbiAgICBCT1RUT01fRU5EOiBnY2xhc3MoXCJib3R0b21cIikgKyBcIiBcIiArIGdjbGFzcyhcImVuZFwiKSxcbiAgfSxcblxuICB0eXBlczoge1xuICAgIERFRkFVTFQ6IFtcImJnLWRlZmF1bHRcIl0sXG4gICAgUFJJTUFSWTogW1wiYmctcHJpbWFyeVwiLCBcInRleHQtbGlnaHRcIl0sXG4gICAgSU5GTzogW1wiYmctaW5mb1wiLCBcInRleHQtbGlnaHRcIl0sXG4gICAgU1VDQ0VTUzogW1wiYmctc3VjY2Vzc1wiLCBcInRleHQtbGlnaHRcIl0sXG4gICAgV0FSTklORzogW1wiYmctd2FybmluZ1wiLCBcInRleHQtZGFya1wiXSxcbiAgICBEQU5HRVI6IFtcImJnLWRhbmdlclwiLCBcInRleHQtbGlnaHRcIl0sXG4gICAgREFSSzogW1wiYmctZGFya1wiLCBcInRleHQtbGlnaHRcIl0sXG4gICAgU0VDT05EQVJZOiBbXCJiZy1zZWNvbmRhcnlcIiwgXCJ0ZXh0LWxpZ2h0XCJdLFxuXG4gICAgLy8gSSBtYWRlIHRoaXMgb25lIGZvciBmdW4sIHlvdSBjYW4gYWRkIHlvdXIgb3duIHN0eWxlcyB0b28uXG4gICAgU1dFRVQ6IFtcImJnLXN3ZWV0XCIsIFwidGV4dC1saWdodFwiXSxcbiAgfSxcbn1cblxuIiwiLyoqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2hlY2tpbmcgYW5kIHNlY3VyaW5nIG9wdGlvbnMgdHlwZXMuXG4gKiBPbmx5IGZvciBicm93c2Vycy5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmltcG9ydCB7IE9wdGlvbnNUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0IFV0aWwgZnJvbSBcIi4vVXRpbFwiXG5cbmNvbnN0IFRZUEVfQ0hFQ0sgPSBcIlR5cGVFcnJvcjogT3B0aW9uIHtvcHRpb259IHNob3VsZCBiZSBpbiB0eXBlIHt0eXBlfS5cIlxuXG5jb25zdCByZXNvbHZlID0gKHBhdGg6IHN0cmluZywgb2JqID0gc2VsZiwgc2VwYXJhdG9yID0gXCIuXCIpID0+IHtcbiAgY29uc3QgcHJvcGVydGllcyA9IEFycmF5LmlzQXJyYXkocGF0aCkgPyBwYXRoIDogcGF0aC5zcGxpdChzZXBhcmF0b3IpXG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIHByb3BlcnRpZXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICYmIHByZXZbY3Vycl0sIG9iailcbn1cblxuY29uc3QgY2hlY2tzID0gW1xuICBbVFlQRV9DSEVDSywgXCJkaXNtaXNzaWJsZVwiLCBcImJvb2xlYW5cIl0sXG4gIFtUWVBFX0NIRUNLLCBcImR1cmF0aW9uXCIsIFwibnVtYmVyXCJdLFxuICBbVFlQRV9DSEVDSywgXCJvZmZzZXRcIiwgXCJudW1iZXJcIl0sXG4gIFtUWVBFX0NIRUNLLCBcIm9uQ2xvc2VcIiwgXCJmdW5jdGlvblwiXSxcbiAgW1RZUEVfQ0hFQ0ssIFwib25TaG93XCIsIFwiZnVuY3Rpb25cIl0sXG4gIFtUWVBFX0NIRUNLLCBcInBhcmVudFwiLCBcInN0cmluZ1wiXSxcbiAgW1RZUEVfQ0hFQ0ssIFwicGF1c2FibGVcIiwgXCJib29sZWFuXCJdLFxuICBbVFlQRV9DSEVDSywgXCJwb3NpdGlvblwiLCBcInN0cmluZ1wiXSxcbiAgW1RZUEVfQ0hFQ0ssIFwicHJvZ3Jlc3NcIiwgXCJib29sZWFuXCJdLFxuICBbVFlQRV9DSEVDSywgXCJzbmFja2JhclwiLCBcImJvb2xlYW5cIl0sXG4gIFtUWVBFX0NIRUNLLCBcInNvdW5kU291cmNlXCIsIFwic3RyaW5nXCJdLFxuICBbVFlQRV9DSEVDSywgXCJzb3VuZGFibGVcIiwgXCJib29sZWFuXCJdLFxuICBbVFlQRV9DSEVDSywgXCJzdWJ0aXRsZVwiLCBbXCJzdHJpbmdcIiwgXCJvYmplY3RcIl1dLFxuICBbVFlQRV9DSEVDSywgXCJ0ZXh0XCIsIFwic3RyaW5nXCJdLFxuICBbVFlQRV9DSEVDSywgXCJ0aXRsZVwiLCBcInN0cmluZ1wiXSxcbiAgW1RZUEVfQ0hFQ0ssIFwidHlwZVwiLCBcInN0cmluZ1wiXSxcbiAgW1RZUEVfQ0hFQ0ssIFwic3VidGl0bGUucmVsYXRpdmVcIiwgXCJib29sZWFuXCJdLFxuICBbVFlQRV9DSEVDSywgXCJzdWJ0aXRsZS5kYXRldGltZVwiLCBbXCJzdHJpbmdcIiwgXCJEYXRlXCIsIFwibnVtYmVyXCJdXSxcbl1cblxuY29uc3QgZmlsdGVycyA9IChvcHRpb25zOiBPcHRpb25zVHlwZSkgPT4ge1xuICBpZiAoY2hlY2tzLmxlbmd0aCA+IDApIHtcbiAgICBjaGVja3MuZm9yRWFjaChjaGVjayA9PiB7XG4gICAgICBjb25zdCBmaXJzdEluZGV4ID0gY2hlY2tbMF1cbiAgICAgIGNvbnN0IHNlY29uZEluZGV4ID0gY2hlY2tbMV1cbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGNoZWNrWzJdXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGxhc3RJbmRleCkpIHtcbiAgICAgICAgbGV0IHN1Y2NlZWQgPSBmYWxzZVxuXG4gICAgICAgIGxhc3RJbmRleC5mb3JFYWNoKHR5cGUgPT4ge1xuXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGlmICh0eXBlb2YgcmVzb2x2ZShzZWNvbmRJbmRleCwgb3B0aW9ucykgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHJlc29sdmUoc2Vjb25kSW5kZXgsIG9wdGlvbnMpID09PSB0eXBlKSB7XG4gICAgICAgICAgICBzdWNjZWVkID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghc3VjY2VlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB0aHJvdyBVdGlsLnN0ckZvcm1hdChmaXJzdEluZGV4LCB7IG9wdGlvbjogc2Vjb25kSW5kZXgsIHR5cGU6IGxhc3RJbmRleC50b1N0cmluZygpIH0pXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAocmVzb2x2ZShzZWNvbmRJbmRleCwgb3B0aW9ucykgJiYgdHlwZW9mIHJlc29sdmUoc2Vjb25kSW5kZXgsIG9wdGlvbnMpICE9PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGhyb3cgVXRpbC5zdHJGb3JtYXQoZmlyc3RJbmRleCwgeyBvcHRpb246IHNlY29uZEluZGV4LCB0eXBlOiBsYXN0SW5kZXggfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmlsdGVycyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvYXN0c3RyYXAgZnJvbSBcIi4vVG9hc3RzdHJhcFwiXG5pbXBvcnQgdHlwZSB7IE9wdGlvbnNUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIlxuaW1wb3J0IHsgUE9TSVRJT05TLCBUWVBFUyB9IGZyb20gXCIuL3ByZWZlcmVuY2VzXCJcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy5zY3NzXCJcbmltcG9ydCBmaWx0ZXJzIGZyb20gXCIuL3R5cGVjaGVja1wiXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgdG9hc3RzdHJhcDogKG9wdGlvbnM6IE9wdGlvbnNUeXBlKSA9PiBUb2FzdHN0cmFwO1xuICAgIHRvYXN0c3RyYXBfcG9zaXRpb246IGFueSxcbiAgICB0b2FzdHN0cmFwX3R5cGU6IGFueVxuICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7T3B0aW9uc1R5cGV9IG9wdGlvbnNcbiAqL1xuY29uc3QgaW5pdGlhbGl6ZSA9IChvcHRpb25zOiBPcHRpb25zVHlwZSk6IFRvYXN0c3RyYXAgPT4ge1xuXG4gIC8vIFR5cGUgY2hlY2tzLlxuICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoKSB7XG4gICAgZmlsdGVycyhvcHRpb25zKTtcbiAgfVxuICByZXR1cm4gbmV3IFRvYXN0c3RyYXAoe1xuICAgIC4uLm9wdGlvbnMsXG4gIH0pXG59XG5cbi8vIFdpbmRvd1xud2luZG93LnRvYXN0c3RyYXAgPSBpbml0aWFsaXplXG53aW5kb3cudG9hc3RzdHJhcF9wb3NpdGlvbiA9IFBPU0lUSU9OU1xud2luZG93LnRvYXN0c3RyYXBfdHlwZSA9IFRZUEVTIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9