"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBoolean = exports.getHumanTime = exports.hasClass = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
var hasClass = function (element, className) {
    return element.classList.contains(className);
};
exports.hasClass = hasClass;
var getHumanTime = function (datetime) {
    return (0, dayjs_1.default)(datetime).fromNow();
};
exports.getHumanTime = getHumanTime;
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