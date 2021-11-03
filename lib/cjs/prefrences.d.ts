export declare const cprefix = "toastsrap-";
export declare function gclass(c: string): string;
export declare enum POSITION {
    TOP_START = "TOP_START",
    TOP_END = "TOP_END",
    BOTTOM_START = "BOTTOM_START",
    BOTTOM_END = "BOTTOM_END",
    CENTER_START = "CENTER_START",
    CENTER_END = "CENTER_END",
    CENTER = "CENTER"
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
        MIDDLE_LEFT: string;
        MIDDLE_RIGHT: string;
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
        SWEET: string[];
    };
};
export default _default;
