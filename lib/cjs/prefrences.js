"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = exports.POSITION = exports.gclass = exports.cprefix = void 0;
exports.cprefix = "toastsrap-";
function gclass(c) {
    return exports.cprefix + c;
}
exports.gclass = gclass;
var POSITION;
(function (POSITION) {
    POSITION["TOP_START"] = "TOP_START";
    POSITION["TOP_END"] = "TOP_END";
    POSITION["BOTTOM_START"] = "BOTTOM_START";
    POSITION["BOTTOM_END"] = "BOTTOM_END";
    POSITION["CENTER_START"] = "CENTER_START";
    POSITION["CENTER_END"] = "CENTER_END";
    POSITION["CENTER"] = "CENTER";
})(POSITION = exports.POSITION || (exports.POSITION = {}));
var TYPES;
(function (TYPES) {
    TYPES["DEFAULT"] = "DEFAULT";
    TYPES["PRIMARY"] = "PRIMARY";
    TYPES["INFO"] = "INFO";
    TYPES["SUCCESS"] = "SUCCESS";
    TYPES["WARNING"] = "WARNING";
    TYPES["DANGER"] = "DANGER";
    TYPES["DARK"] = "DARK";
    TYPES["SWEET"] = "SWEET";
})(TYPES = exports.TYPES || (exports.TYPES = {}));
exports.default = {
    positions: {
        // TOP
        TOP_START: gclass("top") + " " + gclass("start"),
        TOP_END: gclass("top") + " " + gclass("end"),
        TOP_CENTER: "",
        // Middle
        MIDDLE_LEFT: "",
        MIDDLE_RIGHT: "",
        // Bottom
        BOTTOM_START: gclass("bottom") + " " + gclass("start"),
        BOTTOM_END: gclass("bottom") + " " + gclass("end"),
    },
    types: {
        DEFAULT: ["bg-default"],
        PRIMARY: ["bg-primary", "text-light"],
        INFO: ["bg-info", "text-light"],
        SUCCESS: ["bg-success", "text-light"],
        WARNING: ["bg-warning", "text-dark"],
        DANGER: ["bg-danger", "text-light"],
        DARK: ["bg-dark", "text-light"],
        // Hehehehe this types provided by me <3
        SWEET: ["bg-sweet", "text-light"],
    },
};
//# sourceMappingURL=prefrences.js.map