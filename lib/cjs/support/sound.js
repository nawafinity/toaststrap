"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prefrences_1 = require("../prefrences");
var Sound = /** @class */ (function () {
    function Sound(audioFile, parentElement) {
        this.selector = prefrences_1.cprefix + "-notification";
        this.element = new Audio(audioFile);
        this.parent = parentElement;
        this.make();
        return this;
    }
    Sound.prototype.make = function () {
        this.element.id = this.selector;
        if (!this.parent.querySelector('#' + this.selector)) {
            this.parent.appendChild(this.element);
        }
    };
    Object.defineProperty(Sound.prototype, "instance", {
        get: function () {
            return this.element;
        },
        enumerable: false,
        configurable: true
    });
    return Sound;
}());
exports.default = Sound;
//# sourceMappingURL=sound.js.map