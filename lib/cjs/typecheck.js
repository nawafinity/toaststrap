"use strict";
/**----------------------------------
 * Checking and securing options types.
 * Only for browsers.
 *----------------------------------*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __importDefault(require("./Util"));
var TYPE_CHECK = "TypeError: Option {option} should be in type {type}.";
var resolve = function (path, obj, separator) {
    if (obj === void 0) { obj = self; }
    if (separator === void 0) { separator = "."; }
    var properties = Array.isArray(path) ? path : path.split(separator);
    // @ts-ignore
    return properties.reduce(function (prev, curr) { return prev && prev[curr]; }, obj);
};
var checks = [
    [TYPE_CHECK, "dismissible", "boolean"],
    [TYPE_CHECK, "duration", "number"],
    [TYPE_CHECK, "offset", "number"],
    [TYPE_CHECK, "onClose", "function"],
    [TYPE_CHECK, "onShow", "function"],
    [TYPE_CHECK, "parent", "string"],
    [TYPE_CHECK, "pausable", "boolean"],
    [TYPE_CHECK, "position", "string"],
    [TYPE_CHECK, "progress", "boolean"],
    [TYPE_CHECK, "snackbar", "boolean"],
    [TYPE_CHECK, "soundSource", "string"],
    [TYPE_CHECK, "soundable", "boolean"],
    [TYPE_CHECK, "subtitle", ["string", "object"]],
    [TYPE_CHECK, "text", "string"],
    [TYPE_CHECK, "title", "string"],
    [TYPE_CHECK, "type", "string"],
    [TYPE_CHECK, "subtitle.relative", "boolean"],
    [TYPE_CHECK, "subtitle.datetime", ["string", "Date", "number"]],
];
var filters = function (options) {
    if (checks.length > 0) {
        checks.forEach(function (check) {
            var firstIndex = check[0];
            var secondIndex = check[1];
            var lastIndex = check[2];
            if (Array.isArray(lastIndex)) {
                var succeed_1 = false;
                lastIndex.forEach(function (type) {
                    // @ts-ignore
                    if (typeof resolve(secondIndex, options) !== "undefined" && typeof resolve(secondIndex, options) === type) {
                        succeed_1 = true;
                        return;
                    }
                });
                if (!succeed_1) {
                    // @ts-ignore
                    throw Util_1.default.strFormat(firstIndex, { option: secondIndex, type: lastIndex.toString() });
                }
            }
            else {
                // @ts-ignore
                if (resolve(secondIndex, options) && typeof resolve(secondIndex, options) !== lastIndex) {
                    // @ts-ignore
                    throw Util_1.default.strFormat(firstIndex, { option: secondIndex, type: lastIndex });
                }
            }
        });
    }
};
exports.default = filters;
//# sourceMappingURL=typecheck.js.map