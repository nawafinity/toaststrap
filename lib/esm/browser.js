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
import { POSITION, TYPES } from "./prefrences";
import ToastFactory from "./ToastFactory";
import notificationSound from "./assets/sound.wav";
import "./assets/styles.scss";
// Types
window.toastsrap_type = TYPES;
window.toastsrap_position = POSITION;
var initialize = window.toastsrap = function (options) {
    if (!options.soundSource || options.soundSource.length === 0) {
        options.soundSource = notificationSound;
    }
    return new ToastFactory(__assign({}, options));
};
export { initialize, POSITION, TYPES };
//# sourceMappingURL=browser.js.map