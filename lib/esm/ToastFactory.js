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
import dayjs from "dayjs";
import { v4 } from "uuid";
import relativeTime from "dayjs/plugin/relativeTime";
import prefrences, { cprefix, gclass, POSITION } from "./prefrences";
import { hasClass } from "./helpers";
import { HeaderComponent } from "./support/header";
import { ToastBody } from "./support/body";
import { ToastContainer } from "./support/container";
import Sound from "./support/sound";
dayjs.extend(relativeTime);
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
            _this.removeElement(_this.item);
        };
        this.options = __assign({ dismissible: true, duration: 3, pausable: true, id: v4(), space: 5, text: "", title: "", position: POSITION.TOP_END }, options);
        if (this.options.duration > 0) {
            this.options.duration = this.options.duration * 1000;
        }
        this.group = this.options.position;
        if (Object.keys(POSITION).includes(this.options.position)) {
            this.options.position = prefrences.positions[this.options.position];
        }
        else {
            this.options.position = prefrences.positions.TOP_END;
        }
        this.item = document.createElement("div");
        this.spaceBetween = 5;
        this.sound = this.options.soundable && this.options.soundSource ? new Sound(this.options.soundSource, this.parentElement) : undefined;
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
            var container = ToastContainer(this);
            // Toast Element
            var toastElement = document.createElement("div");
            toastElement.classList.add("toast");
            container.setAttribute("data-id", this.options.id);
            container.setAttribute("data-created-at", this.options.datetime);
            container.setAttribute("data-group", this.group);
            // Toast Header (only if option hideHeader is set to false).
            if (!Boolean(this.options.noHeader)) {
                toastElement.appendChild(HeaderComponent(this));
            }
            else {
                (_a = toastElement.classList).add.apply(_a, prefrences.types[this.options.type]);
            }
            // Toast Body
            toastElement.appendChild(ToastBody(this));
            // Put toast into it's container.
            container.appendChild(toastElement);
            // Watch toast height changed, and orgnize if happend.
            new ResizeObserver(function () {
                _this.orderize();
            }).observe(container);
            // Toast instance.
            this.item = container;
            // Show the toast by adding class (.show)
            container.classList.add("show");
            if (this.options.duration > 0) {
                setTimeout(function () {
                    _this.removeElement(container);
                }, this.options.duration);
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
    ToastFactory.prototype.removeElement = function (toastElement) {
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
        var selector = "." + gclass("container") + "[data-group='" + this.group + "']";
        var windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (windowWidth <= 360) {
            selector = "." + gclass("container");
        }
        var toasts = document.querySelectorAll(selector);
        var classUsed;
        if (toasts.length > 0) {
            toasts.forEach(function (toast) {
                console.log(toast.clientHeight);
                if (hasClass(toast, gclass("top"))) {
                    classUsed = gclass("top");
                }
                else {
                    classUsed = gclass("bottom");
                }
                var toastHeight = toast.offsetHeight;
                classUsed = classUsed.substr((cprefix + "-").length - 1, classUsed.length - 1);
                // Show toast in center if screen with less than or equal to 360px.
                if (windowWidth <= 360) {
                    toast.style[classUsed] = offsetSize[classUsed] + "px";
                    offsetSize[classUsed] += toastHeight + _this.spaceBetween;
                }
                else {
                    if (hasClass(toast, "start-" + _this.options.space)) {
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
export default ToastFactory;
//# sourceMappingURL=ToastFactory.js.map