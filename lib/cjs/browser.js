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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Toaststrap_1 = __importDefault(require("./Toaststrap"));
var preferences_1 = require("./preferences");
require("./assets/styles.scss");
/**
 *
 * @param {OptionsType} options
 */
var initialize = function (options) {
    return new Toaststrap_1.default(__assign({}, options));
};
// Window
window.toaststrap = initialize;
window.toaststrap_position = preferences_1.POSITION;
window.toaststrap_type = preferences_1.TYPES;
//# sourceMappingURL=browser.js.map