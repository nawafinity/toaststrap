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
var dayjs_1 = __importDefault(require("dayjs"));
var uuid_1 = require("uuid");
var relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
var prefrences_1 = __importStar(require("./prefrences"));
var helpers_1 = require("./helpers");
var header_1 = require("./support/header");
var body_1 = require("./support/body");
var container_1 = require("./support/container");
var sound_1 = __importDefault(require("./support/sound"));
var progress_1 = require("./support/progress");
dayjs_1.default.extend(relativeTime_1.default);
/**
 * JavaScript library for showing a bootstrap5 toast notification.
 *
 * @author Nawaf Khalifah
 * @version 1.0.0
 */
var ToastFactory = /** @class */ (function () {
    function ToastFactory(options) {
        var _this = this;
        /**
         * Event to close toast.
         *
         * @return {void}
         */
        this.CloseEvent = function () {
            _this.destroy(_this.item);
        };
        this.options = __assign({ progress: true, dismissible: true, duration: 3, pausable: true, id: (0, uuid_1.v4)(), space: 5, text: "", title: "", position: prefrences_1.POSITION.TOP_END }, options);
        if (this.options.duration > 0) {
            this.options.duration = this.options.duration * 1000;
        }
        this.group = this.options.position;
        if (Object.keys(prefrences_1.POSITION).includes(this.options.position)) {
            this.options.position = prefrences_1.default.positions[this.options.position];
        }
        else {
            this.options.position = prefrences_1.default.positions.TOP_END;
        }
        this.item = document.createElement("div");
        this.spaceBetween = 5;
        this.sound = this.options.soundable && this.options.soundSource ? new sound_1.default(this.options.soundSource, this.parentElement) : undefined;
        this.timeout = setTimeout(function () { }, 0);
        this.progressInterval = setInterval(function () { }, 0);
        this.pauseProgressInterval = false;
        this.progressStartTime = 0;
    }
    /**
     * Display toast to user.
     *
     * @returns {this}
     */
    ToastFactory.prototype.show = function () {
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
        this.orderize();
        return this;
    };
    Object.defineProperty(ToastFactory.prototype, "build", {
        /**
         * Build toast element.
         *
         * @returns {HTMLElement}
         */
        get: function () {
            var _a;
            var _this = this;
            // Container Element
            var container = (0, container_1.ToastContainer)(this);
            // Toast Element
            var toastElement = document.createElement("div");
            toastElement.classList.add("toast");
            container.setAttribute("data-id", this.options.id);
            container.setAttribute("data-created-at", this.options.datetime);
            container.setAttribute("data-type", this.options.type ? this.options.type.toLowerCase() : '');
            container.setAttribute("data-group", this.group);
            // Toast Header (only if option hideHeader is set to false).
            if (!Boolean(this.options.noHeader)) {
                toastElement.appendChild((0, header_1.HeaderComponent)(this));
            }
            else {
                (_a = toastElement.classList).add.apply(_a, prefrences_1.default.types[this.options.type]);
            }
            // Toast Body
            toastElement.appendChild((0, body_1.ToastBody)(this));
            if ((0, helpers_1.toBoolean)(this.options.progress)) {
                // Toast Progress
                toastElement.appendChild((0, progress_1.ProgressComponent)(this));
            }
            // Put toast into it's container.
            container.appendChild(toastElement);
            // Watch toast height changed, and re-order if happen.
            new ResizeObserver(function () {
                _this.orderize();
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
                    this.item.addEventListener("mouseover", function () {
                        clearTimeout(_this.timeout);
                        _this.pauseProgressInterval = true;
                    });
                    this.item.addEventListener("mouseleave", function () {
                        _this.pauseProgressInterval = false;
                        _this.progressStartTime = new Date().getTime();
                        _this.timeout = setTimeout(function () {
                            _this.destroy(_this.item);
                        }, _this.options.duration);
                    });
                }
            }
            // Return toast instance.
            return container;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToastFactory.prototype, "parentElement", {
        /**
         *
         * @returns {Element}
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
    ToastFactory.prototype.destroy = function (toastElement) {
        // Hide the element.
        toastElement.classList.remove("show");
        if (typeof this.options.onCloseCallBack === "function") {
            this.options.onCloseCallBack();
        }
        window.setTimeout(function () {
            var _a;
            (_a = toastElement.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(toastElement);
        }, 400);
    };
    ToastFactory.prototype.orderize = function () {
        var _this = this;
        var space = this.options.space;
        var topLeftOffsetSize = {
            top: Number(space),
            bottom: Number(space),
        };
        var topRightOffsetSize = {
            top: Number(space),
            bottom: Number(space),
        };
        var offsetSize = {
            top: Number(space),
            bottom: Number(space),
        };
        var selector = "." + (0, prefrences_1.gclass)("container") + "[data-group='" + this.group + "']";
        var windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (windowWidth <= 360) {
            selector = "." + (0, prefrences_1.gclass)("container");
        }
        var toasts = document.querySelectorAll(selector);
        var classUsed;
        if (toasts.length > 0) {
            toasts.forEach(function (toast) {
                if ((0, helpers_1.hasClass)(toast, (0, prefrences_1.gclass)("top"))) {
                    classUsed = (0, prefrences_1.gclass)("top");
                }
                else {
                    classUsed = (0, prefrences_1.gclass)("bottom");
                }
                var toastHeight = toast.offsetHeight;
                classUsed = classUsed.substr((prefrences_1.cprefix + "-").length - 1, classUsed.length - 1);
                // Show toast in center if screen with less than or equal to 360px.
                if (windowWidth <= 360) {
                    toast.style[classUsed] = offsetSize[classUsed] + "px";
                    offsetSize[classUsed] += toastHeight + _this.spaceBetween;
                }
                else {
                    if ((0, helpers_1.hasClass)(toast, "start-" + _this.options.space)) {
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
    return ToastFactory;
}());
exports.default = ToastFactory;
//# sourceMappingURL=ToastFactory.js.map