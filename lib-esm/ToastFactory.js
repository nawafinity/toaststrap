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
import notificationSound from "./assets/sound.wav";
import "./assets/styles.scss";
import { hasClass } from "./helpers";
dayjs.extend(relativeTime);
var Bootstrap5Toast = /** @class */ (function () {
    function Bootstrap5Toast(options) {
        this.options = __assign({ title: "", text: "", type: "info", hideHeader: false, position: POSITION.TOP_END, parent: "body", allowSound: false, duration: 3000 }, options);
        if (Object.keys(POSITION).includes(this.options.position)) {
            this.position = prefrences.positions[this.options.position];
        }
        else {
            this.position = prefrences.positions.TOP_END;
        }
        this.id = v4();
        this.createdAt = this.getHumanTime();
        this.item = document.createElement("div");
        this.spaceBetween = 5;
        this.sound = new Audio();
        this.group = this.options.position;
        this.customParent = false;
        if (this.options.allowSound) {
            this.makeSound();
        }
        if (this.options.datetime) {
            this.createdAt = this.options.datetime;
        }
        else {
            this.createdAt = dayjs().toString();
        }
    }
    Bootstrap5Toast.prototype.show = function () {
        var root = this.rootElement;
        var toast = this.buildToast;
        root.insertBefore(toast, root.firstChild);
        // Play sound if it's allowed.
        this.playSound();
        this.orderize();
        return this;
    };
    Bootstrap5Toast.prototype.clearQueue = function () { };
    Object.defineProperty(Bootstrap5Toast.prototype, "buildHeader", {
        /**
         *
         * @returns {HTMLElement}
         */
        get: function () {
            var headerElement = document.createElement("div");
            headerElement.classList.add("toast-header");
            // Avatar element
            if (this.options.avatar) {
                headerElement.appendChild(this.buildAvatar);
            }
            // Create title element.
            var titleElement = document.createElement("strong");
            titleElement.classList.add("me-auto");
            titleElement.innerText = this.options.title;
            headerElement.appendChild(titleElement);
            // time
            var timeElement = document.createElement("small");
            timeElement.innerText = this.getHumanTime();
            headerElement.appendChild(timeElement);
            // Close button
            headerElement.appendChild(this.buildCloseButton);
            // Return header element.
            return headerElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bootstrap5Toast.prototype, "buildBody", {
        /**
         *
         */
        get: function () {
            var bodyElement = document.createElement("div");
            bodyElement.classList.add("toast-body");
            bodyElement.innerHTML = this.options.text;
            return bodyElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bootstrap5Toast.prototype, "buildContainer", {
        /**
         *
         * @return {HTMLElement}
         */
        get: function () {
            var containerElement = document.createElement("div");
            containerElement.className = (this.customParent ? 'position-absolute' : 'position-fixed') + " " + this.position + " " + gclass("container");
            containerElement.style.zIndex = "2500";
            return containerElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bootstrap5Toast.prototype, "buildToast", {
        /**
         *
         * @returns {HTMLElement}
         */
        get: function () {
            // Container Element
            var container = this.buildContainer;
            // Toast Element
            var toastElement = document.createElement("div");
            toastElement.classList.add("toast");
            container.setAttribute("data-id", this.id);
            container.setAttribute("data-created-at", this.createdAt);
            container.setAttribute("data-group", this.group);
            // Toast Header (only if option hideHeader is set to false).
            if (!this.options.hideHeader) {
                toastElement.appendChild(this.buildHeader);
            }
            // Toast Body
            toastElement.appendChild(this.buildBody);
            // Put toast into it's container.
            container.appendChild(toastElement);
            // Toast instance.
            this.item = container;
            // Show the toast by adding class (.show)
            container.classList.add("show");
            // Return toast instance.
            return container;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bootstrap5Toast.prototype, "buildAvatar", {
        /**
         *
         * @returns {HTMLElement}
         */
        get: function () {
            var avatarElement = document.createElement("img");
            avatarElement.classList.add("rounded", "me-2");
            avatarElement.src = this.options.avatar;
            avatarElement.width = 20;
            avatarElement.height = 20;
            return avatarElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bootstrap5Toast.prototype, "rootElement", {
        /**
         *
         * @returns {Element}
         */
        get: function () {
            if (this.options.parent !== "body") {
                var userRootElement = document.querySelector(this.options.parent);
                if (!userRootElement) {
                    throw "User root element not exists.";
                }
                if (Array.isArray(userRootElement)) {
                    return userRootElement[0];
                }
                this.customParent = true;
                return userRootElement;
            }
            return document.body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bootstrap5Toast.prototype, "buildCloseButton", {
        /**
         *
         */
        get: function () {
            var _this = this;
            var closeBtnElement = document.createElement("button");
            closeBtnElement.classList.add("btn-close");
            closeBtnElement.setAttribute("type", "button");
            closeBtnElement.setAttribute("area-label", "Close");
            closeBtnElement.addEventListener("click", function (event) {
                event.stopPropagation();
                _this.removeElement(_this.item);
                if (typeof _this.options.onCloseCallBack === "function") {
                    _this.options.onCloseCallBack();
                }
                _this.orderize();
            });
            return closeBtnElement;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @returns {string}
     */
    Bootstrap5Toast.prototype.getHumanTime = function () {
        return dayjs(this.createdAt).fromNow();
    };
    /**
     * Remove the element from dom after timeout finished.
     */
    Bootstrap5Toast.prototype.removeElement = function (toastElement) {
        // Hide the element.
        toastElement.classList.remove("show");
        window.setTimeout(function () {
            var _a;
            (_a = toastElement.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(toastElement);
        }, 400);
    };
    Bootstrap5Toast.prototype.makeSound = function () {
        var sound = new Audio(notificationSound);
        sound.id = "bootstrap5-toast-notification";
        this.sound = sound;
        if (!this.rootElement.querySelector('#bootstrap5-toast-notification')) {
            this.rootElement.appendChild(sound);
        }
    };
    Bootstrap5Toast.prototype.playSound = function () {
        if (this.options.allowSound) {
            this.sound.play();
        }
    };
    Bootstrap5Toast.prototype.orderize = function () {
        var _this = this;
        // @ts-ignore
        var topLeftOffsetSize = {
            top: 5,
            bottom: 5,
        };
        // @ts-ignore
        var topRightOffsetSize = {
            top: 5,
            bottom: 5,
        };
        // @ts-ignore
        var offsetSize = {
            top: 5,
            bottom: 5,
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
                    if (hasClass(toast, "start")) {
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
    return Bootstrap5Toast;
}());
export { Bootstrap5Toast };
//# sourceMappingURL=ToastFactory.js.map