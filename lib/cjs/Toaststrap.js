"use strict";
var __assign = (this && this.__assign) || function () {
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var preferences_1 = __importStar(require("./preferences"));
var helpers_1 = require("./helpers");
var preferences_2 = require("./preferences");
var header_1 = require("./components/header");
var body_1 = require("./components/body");
var container_1 = require("./components/container");
var sound_1 = __importDefault(require("./components/sound"));
var progress_1 = require("./components/progress");
var RelativeDate_1 = __importDefault(require("./RelativeDate"));
var Util_1 = __importDefault(require("./Util"));
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
        this.options = __assign({ avatar: "", dismissible: true, duration: 3000, offset: 10, parent: "body", pausable: true, position: preferences_2.POSITIONS.TOP_END, progress: true, snackbar: false, soundSource: "", soundable: false, subtitle: {
                relative: true,
                datetime: Date.now()
            }, text: "", title: "", type: preferences_2.TYPES.DEFAULT }, options);
        // Set the toast timeout.
        if (typeof this.options.subtitle !== "string") {
            if (typeof this.options.subtitle === "object" && "datetime" in this.options.subtitle) {
                var delta = this.options.subtitle;
                if ("relative" in this.options.subtitle && this.options.subtitle.relative) {
                    this.options.subtitle = (new RelativeDate_1.default(delta.datetime).print());
                }
                else {
                    this.options.subtitle = String(delta.datetime);
                }
            }
        }
        // Set toast group.
        // The toast group used to organized the toasts.
        this.group = this.options.position || preferences_2.POSITIONS.TOP_END;
        if (Object.keys(preferences_2.POSITIONS).includes(this.options.position)) {
            this.options.position = preferences_1.default.positions[this.options.position];
        }
        else {
            this.options.position = preferences_1.default.positions.TOP_END;
        }
        this.item = document.createElement("div");
        this.spaceBetween = 5;
        if (this.options.soundable && this.options.soundSource && this.options.soundSource.length > 0) {
            this.sound = new sound_1.default(this.options.soundSource, this.parentElement);
        }
        this.id = Util_1.default.makeId();
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
            var container = (0, container_1.ToastContainer)(this);
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
                toastElement.appendChild((0, header_1.HeaderComponent)(this));
            }
            else {
                (_a = toastElement.classList).add.apply(_a, preferences_1.default.types[this.options.type]);
            }
            // Toast Body
            toastElement.appendChild((0, body_1.ToastBody)(this));
            if (this.options.progress) {
                // Toast Progress
                toastElement.appendChild((0, progress_1.ProgressComponent)(this));
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
        var selector = ".".concat((0, preferences_1.gclass)("container"), "[data-group='").concat(this.group, "']");
        var windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (windowWidth <= 360) {
            selector = ".".concat((0, preferences_1.gclass)("container"));
        }
        var toasts = document.querySelectorAll(selector);
        var classUsed;
        if (toasts.length > 0) {
            toasts.forEach(function (toast) {
                if ((0, helpers_1.hasClass)(toast, (0, preferences_1.gclass)("top"))) {
                    classUsed = (0, preferences_1.gclass)("top");
                }
                else if ((0, helpers_1.hasClass)(toast, (0, preferences_1.gclass)("middle"))) {
                    classUsed = (0, preferences_1.gclass)("middle");
                }
                else {
                    classUsed = (0, preferences_1.gclass)("bottom");
                }
                var toastHeight = toast.offsetHeight;
                classUsed = classUsed.substr("".concat(preferences_1.cprefix, "-").length - 1, classUsed.length - 1);
                // Show toast in center if screen with less than or equal to 360px.
                if (windowWidth <= 360) {
                    toast.style[classUsed] = offsetSize[classUsed] + "px";
                    offsetSize[classUsed] += toastHeight + _this.spaceBetween;
                }
                else {
                    if ((0, helpers_1.hasClass)(toast, "start-".concat(_this.options.offset))) {
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
exports.default = Toaststrap;
//# sourceMappingURL=Toaststrap.js.map