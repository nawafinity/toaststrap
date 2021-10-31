export var cprefix = 'bootstrap5-toast-';
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
export default {
    positions: {
        // TOP
        TOP_START: gclass('top') + ' ' + gclass('start'),
        TOP_END: gclass('top') + ' ' + gclass('end'),
        TOP_CENTER: '',
        // Middle
        MIDDLE_LEFT: '',
        MIDDLE_RIGHT: '',
        // Bottom
        BOTTOM_START: gclass('bottom') + ' ' + gclass('start'),
        BOTTOM_END: gclass('bottom') + ' ' + gclass('end'),
    },
    types: {
        DEFAULT: '',
        PRIMARY: '',
        SUCCESS: '',
        WARNING: '',
        DANGER: ''
    }
};
//# sourceMappingURL=prefrences.js.map