import { gclass } from "../prefrences";
export var ToastContainer = function (context) {
    var options = context.options;
    var containerElement = document.createElement("div");
    containerElement.className = (context.options.parent ? "position-absolute" : "position-fixed") + " " + options.position + "-" + options.space + " " + gclass("container");
    containerElement.style.zIndex = "2500";
    return containerElement;
};
//# sourceMappingURL=container.js.map