"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressComponent = void 0;
var ProgressComponent = function (factory) {
    var duration = factory.options.duration;
    var progressElement = document.createElement("div");
    progressElement.classList.add("toast-footer");
    var indicatorElement = document.createElement("div");
    indicatorElement.classList.add("toast-footer-inner");
    progressElement.appendChild(indicatorElement);
    if (duration > 0) {
        duration < 100 ? duration = duration * 1000 : duration;
        indicatorElement.style.animationDuration = "".concat(duration, "ms");
    }
    /**
     * I made this to make progress move when duration is set.
     * But it's kill the performance, so I decided to use CSS to do that.
     *
     * @deprecated
     */
    // @ts-ignore
    var start = function () {
        factory.progressStartTime = new Date().getTime();
        // >..< I will just use css to do that.
        if (duration > 0) {
            factory.progressInterval = setInterval(function () {
                if (!factory.pauseProgressInterval) {
                    var diff = Math.round(new Date().getTime() - factory.progressStartTime);
                    var value = Math.round(diff / duration * 100);
                    value = value > 100 ? 100 : value;
                    indicatorElement.style.width = value + "%";
                    if (diff >= duration) {
                        clearInterval(factory.progressInterval);
                    }
                }
            }, 100);
        }
    };
    return progressElement;
};
exports.ProgressComponent = ProgressComponent;
//# sourceMappingURL=progress.js.map