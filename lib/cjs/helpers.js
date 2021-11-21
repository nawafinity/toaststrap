"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.toBoolean = exports.hasClass = void 0;
var hasClass = function (element, className) {
    return element.classList.contains(className);
};
exports.hasClass = hasClass;
var generateId = function () {
    return String(Math.floor(10000000000 + Math.random() * 9000000000));
};
exports.generateId = generateId;
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
exports.toBoolean = toBoolean;
//# sourceMappingURL=helpers.js.map