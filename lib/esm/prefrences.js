export var cprefix = "toaststrap-";
export function gclass(c) {
    return cprefix + c;
}
export var POSITION;
(function (POSITION) {
    POSITION["TOP_START"] = "TOP_START";
    POSITION["TOP_END"] = "TOP_END";
    POSITION["BOTTOM_START"] = "BOTTOM_START";
    POSITION["BOTTOM_END"] = "BOTTOM_END";
    POSITION["CENTER_START"] = "CENTER_START";
    POSITION["CENTER_END"] = "CENTER_END";
    POSITION["CENTER"] = "CENTER";
})(POSITION || (POSITION = {}));
export var TYPES;
(function (TYPES) {
    TYPES["DEFAULT"] = "DEFAULT";
    TYPES["PRIMARY"] = "PRIMARY";
    TYPES["INFO"] = "INFO";
    TYPES["SUCCESS"] = "SUCCESS";
    TYPES["WARNING"] = "WARNING";
    TYPES["DANGER"] = "DANGER";
    TYPES["DARK"] = "DARK";
    TYPES["SWEET"] = "SWEET";
})(TYPES || (TYPES = {}));
export default {
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