"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastBody = void 0;
var ToastBody = function (context) {
    var options = context.options;
    var bodyElement = document.createElement("div");
    bodyElement.classList.add("toast-body");
    bodyElement.innerHTML = options.text;
    return bodyElement;
};
exports.ToastBody = ToastBody;
//# sourceMappingURL=body.js.map