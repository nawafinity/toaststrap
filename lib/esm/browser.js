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
import Toaststrap from "./Toaststrap";
import { POSITION, TYPES } from "./preferences";
import "./assets/styles.scss";
/**
 *
 * @param {OptionsType} options
 */
var initialize = function (options) {
    return new Toaststrap(__assign({}, options));
};
// Window
window.toaststrap = initialize;
window.toaststrap_position = POSITION;
window.toaststrap_type = TYPES;
//# sourceMappingURL=browser.js.map