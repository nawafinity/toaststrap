"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastContainer = void 0;
var preferences_1 = require("../preferences");
var ToastContainer = function (context) {
    var options = context.options;
    var containerElement = document.createElement("div");
    containerElement.className = "".concat(context.options.parent ? "position-absolute" : "position-fixed", " ").concat(options.position, "-").concat(options.space, " ").concat((0, preferences_1.gclass)("container"));
    containerElement.style.zIndex = "2500";
    return containerElement;
};
exports.ToastContainer = ToastContainer;
//# sourceMappingURL=container.js.map