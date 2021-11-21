import { gclass } from "../preferences";
export var ToastContainer = function (context) {
    var options = context.options;
    var containerElement = document.createElement("div");
    containerElement.className = "".concat(context.options.parent ? "position-absolute" : "position-fixed", " ").concat(options.position, "-").concat(options.space, " ").concat(gclass("container"));
    containerElement.style.zIndex = "2500";
    return containerElement;
};
//# sourceMappingURL=container.js.map