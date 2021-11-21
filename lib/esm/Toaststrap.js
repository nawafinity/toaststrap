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
import preferences, { cprefix, gclass } from "./preferences";
import { generateId, hasClass, toBoolean } from "./helpers";
import { POSITION, TYPES } from "./preferences";
import { HeaderComponent } from "./components/header";
import { ToastBody } from "./components/body";
import { ToastContainer } from "./components/container";
import Sound from "./components/sound";
import { ProgressComponent } from "./components/progress";
import RelativeDate from "./RelativeDate";
/**
 * Toaststrap 1.0.1
 * https://github.com/nawafscript/toaststrap
 */
var Toaststrap = /** @class */ (function () {
    /**
     *
     * @param {OptionsType} options
     */
    function Toaststrap(options) {
        var _this = this;
        /**
         * Event to close toast.
         *
         * @return {void}
         */
        this.CloseEvent = function () {
            _this.destroy(_this.item);
        };
        this.options = __assign({ avatar: undefined, datetime: undefined, dismissible: true, duration: 5000, noHeader: false, onCloseCallBack: function () {
            }, parent: "body", pausable: false, position: POSITION.TOP_END, progress: false, soundSource: undefined, soundable: false, space: 10, subtitle: {
                datetime: new Date(),
                relative: true,
            }, text: "", title: "Anonymous", type: TYPES.DEFAULT }, options);
        if (typeof this.options.subtitle !== "string") {
            if (typeof this.options.subtitle === "object" && "datetime" in this.options.subtitle) {
                var delta = this.options.subtitle;
                if ("relative" in this.options.subtitle && toBoolean(this.options.subtitle.relative)) {
                    this.options.subtitle = (new RelativeDate(delta.datetime).print());
                }
                else {
                    this.options.subtitle = String(delta.datetime);
                }
            }
        }
        this.group = this.options.position || POSITION.TOP_END;
        if (Object.keys(POSITION).includes(this.options.position)) {
            this.options.position = preferences.positions[this.options.position];
        }
        else {
            this.options.position = preferences.positions.TOP_END;
        }
        this.item = document.createElement("div");
        this.spaceBetween = 5;
        if (this.options.soundable && this.options.soundSource && this.options.soundSource.length > 0) {
            this.sound = new Sound(this.options.soundSource, this.parentElement);
        }
        this.id = generateId();
        this.createdAt = Date.now().toString();
        this.timeout = setTimeout(function () {
        }, 0);
        this.progressInterval = setInterval(function () {
        }, 0);
        this.pauseProgressInterval = false;
        this.progressStartTime = 0;
    }
    /**
     * Display toast to user.
     *
     * @returns {this}
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
         * Build toast element.
         *
         * @returns {HTMLElement}
         */
        get: function () {
            var _a;
            var _this = this;
            // Container Element
            var container = ToastContainer(this);
            // Toast Element
            var toastElement = document.createElement("div");
            toastElement.classList.add("toast");
            container.setAttribute("data-id", this.id);
            container.setAttribute("data-created-at", this.createdAt);
            container.setAttribute("data-type", this.options.type ? this.options.type.toLowerCase() : "");
            container.setAttribute("data-group", this.group);
            // Toast Header (only if option hideHeader is set to false).
            if (!Boolean(this.options.noHeader)) {
                toastElement.appendChild(HeaderComponent(this));
            }
            else {
                (_a = toastElement.classList).add.apply(_a, preferences.types[this.options.type]);
            }
            // Toast Body
            toastElement.appendChild(ToastBody(this));
            if (toBoolean(this.options.progress)) {
                // Toast Progress
                toastElement.appendChild(ProgressComponent(this));
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
                if (toBoolean(this.options.pausable)) {
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
    Toaststrap.prototype.destroy = function (toastElement) {
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
    Toaststrap.prototype.organize = function () {
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
        var selector = ".".concat(gclass("container"), "[data-group='").concat(this.group, "']");
        var windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (windowWidth <= 360) {
            selector = ".".concat(gclass("container"));
        }
        var toasts = document.querySelectorAll(selector);
        var classUsed;
        if (toasts.length > 0) {
            toasts.forEach(function (toast) {
                if (hasClass(toast, gclass("top"))) {
                    classUsed = gclass("top");
                }
                else if (hasClass(toast, gclass("middle"))) {
                    classUsed = gclass("middle");
                }
                else {
                    classUsed = gclass("bottom");
                }
                var toastHeight = toast.offsetHeight;
                classUsed = classUsed.substr("".concat(cprefix, "-").length - 1, classUsed.length - 1);
                // Show toast in center if screen with less than or equal to 360px.
                if (windowWidth <= 360) {
                    toast.style[classUsed] = offsetSize[classUsed] + "px";
                    offsetSize[classUsed] += toastHeight + _this.spaceBetween;
                }
                else {
                    if (hasClass(toast, "start-".concat(_this.options.space))) {
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
export default Toaststrap;
//# sourceMappingURL=Toaststrap.js.map