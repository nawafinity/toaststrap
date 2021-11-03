"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderComponent = void 0;
var helpers_1 = require("../helpers");
var prefrences_1 = __importDefault(require("../prefrences"));
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
        (_a = headerElement.classList).add.apply(_a, prefrences_1.default.types[options.type]);
    }
    // Create title element.
    var titleElement = document.createElement("strong");
    titleElement.classList.add("me-auto");
    titleElement.innerText = options.title;
    headerElement.appendChild(titleElement);
    if (options.datetime) {
        // time
        var timeElement = document.createElement("small");
        timeElement.innerText = (0, helpers_1.getHumanTime)(options.datetime);
        headerElement.appendChild(timeElement);
    }
    // Close button
    if ((0, helpers_1.toBoolean)(options.dismissible)) {
        headerElement.appendChild(CloseButtonComponent(context.CloseEvent));
    }
    // Return header element.
    return headerElement;
};
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map