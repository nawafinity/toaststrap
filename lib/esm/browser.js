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
import { POSITIONS, TYPES } from "./preferences";
import "./assets/styles.scss";
import filters from "./typecheck";
/**
 *
 * @param {OptionsType} options
 */
var initialize = function (options) {
    // Type checks.
    if (Object.keys(options).length) {
        filters(options);
    }
    return new Toaststrap(__assign({}, options));
};
// Window
window.toaststrap = initialize;
window.toaststrap_position = POSITIONS;
window.toaststrap_type = TYPES;
//# sourceMappingURL=browser.js.map