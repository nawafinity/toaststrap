"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastContainer = void 0;
var prefrences_1 = require("../prefrences");
var ToastContainer = function (context) {
    var options = context.options;
    var containerElement = document.createElement("div");
    containerElement.className = (context.options.parent ? "position-absolute" : "position-fixed") + " " + options.position + "-" + options.space + " " + (0, prefrences_1.gclass)("container");
    containerElement.style.zIndex = "2500";
    return containerElement;
};
exports.ToastContainer = ToastContainer;
//# sourceMappingURL=container.js.map