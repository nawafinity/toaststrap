/**
 * Prefix will be applied to all css classes.
 */
export declare const cprefix = "toaststrap-";
/**
 * Get the classname with the prefix.
 * @param {string} c
 */
export declare function gclass(c: string): string;
export declare enum POSITIONS {
    TOP_START = "TOP_START",
    TOP_END = "TOP_END",
    TOP_CENTER = "TOP_CENTER",
    BOTTOM_START = "BOTTOM_START",
    BOTTOM_END = "BOTTOM_END",
    BOTTOM_CENTER = "BOTTOM_CENTER"
}
export declare enum TYPES {
    DEFAULT = "DEFAULT",
    PRIMARY = "PRIMARY",
    INFO = "INFO",
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    DANGER = "DANGER",
    DARK = "DARK",
    SWEET = "SWEET"
}
declare const _default: {
    positions: {
        TOP_START: string;
        TOP_END: string;
        TOP_CENTER: string;
        BOTTOM_CENTER: string;
        BOTTOM_START: string;
        BOTTOM_END: string;
    };
    types: {
        DEFAULT: string[];
        PRIMARY: string[];
        INFO: string[];
        SUCCESS: string[];
        WARNING: string[];
        DANGER: string[];
        DARK: string[];
        SECONDARY: string[];
        SWEET: string[];
    };
};
/**
 *
 */
export default _default;
