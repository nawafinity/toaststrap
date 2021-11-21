"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastTypes = exports.ToastPositions = void 0;
var Toaststrap_1 = __importDefault(require("./Toaststrap"));
var preferences_1 = require("./preferences");
Object.defineProperty(exports, "ToastPositions", { enumerable: true, get: function () { return preferences_1.POSITIONS; } });
Object.defineProperty(exports, "ToastTypes", { enumerable: true, get: function () { return preferences_1.TYPES; } });
/**
 * A simple, lightweight library for showing Bootstrap 5 toasts.
 *
 * @version 1.0.2
 *
 * @packageDocumentation
 */
function default_1(options) {
    return new Toaststrap_1.default(options);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map