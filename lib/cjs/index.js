"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastPosition = exports.ToastType = void 0;
var ToastFactory_1 = __importDefault(require("./ToastFactory"));
var prefrences_1 = require("./prefrences");
exports.ToastType = prefrences_1.TYPES;
exports.ToastPosition = prefrences_1.POSITION;
function default_1(options) {
    return new ToastFactory_1.default(options);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map