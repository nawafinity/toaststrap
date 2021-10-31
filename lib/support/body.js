export var ToastBody = function (context) {
    var options = context.options;
    var bodyElement = document.createElement("div");
    bodyElement.classList.add("toast-body");
    bodyElement.innerHTML = options.text;
    return bodyElement;
};
//# sourceMappingURL=body.js.map