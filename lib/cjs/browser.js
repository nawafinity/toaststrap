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
exports.TYPES = exports.POSITION = exports.initialize = void 0;
var prefrences_1 = require("./prefrences");
Object.defineProperty(exports, "POSITION", { enumerable: true, get: function () { return prefrences_1.POSITION; } });
Object.defineProperty(exports, "TYPES", { enumerable: true, get: function () { return prefrences_1.TYPES; } });
var ToastFactory_1 = __importDefault(require("./ToastFactory"));
var sound_wav_1 = __importDefault(require("./assets/sound.wav"));
require("./assets/styles.scss");
// Types
window.bs5toast_type = prefrences_1.TYPES;
var initialize = window.bs5toast = function (options) {
    return new ToastFactory_1.default(__assign({ soundSource: sound_wav_1.default }, options));
};
exports.initialize = initialize;
//# sourceMappingURL=browser.js.map