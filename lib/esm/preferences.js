/**
 * Prefix will be applied to all css classes.
 */
export var cprefix = "toaststrap-";
/**
 * Get the classname with the prefix.
 * @param {string} c
 */
export function gclass(c) {
    return cprefix + c;
}
export var POSITIONS;
(function (POSITIONS) {
    POSITIONS["TOP_START"] = "TOP_START";
    POSITIONS["TOP_END"] = "TOP_END";
    POSITIONS["TOP_CENTER"] = "TOP_CENTER";
    POSITIONS["BOTTOM_START"] = "BOTTOM_START";
    POSITIONS["BOTTOM_END"] = "BOTTOM_END";
    POSITIONS["BOTTOM_CENTER"] = "BOTTOM_CENTER";
})(POSITIONS || (POSITIONS = {}));
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
/**
 *
 */
export default {
    positions: {
        // TOP
        TOP_START: gclass("top") + " " + gclass("start"),
        TOP_END: gclass("top") + " " + gclass("end"),
        TOP_CENTER: gclass("top") + " " + gclass("center"),
        // Bottom
        BOTTOM_CENTER: gclass("bottom") + " " + gclass("center"),
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
        SECONDARY: ["bg-secondary", "text-light"],
        // I made this one for fun, you can add your own styles too.
        SWEET: ["bg-sweet", "text-light"],
    },
};
//# sourceMappingURL=preferences.js.map