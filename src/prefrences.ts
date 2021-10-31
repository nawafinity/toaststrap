export const cprefix = 'bootstrap5-toast-';

export function gclass(c: string) {
    return cprefix + c
}

export enum POSITION {
    TOP_START = 'TOP_START',
    TOP_END = 'TOP_END',
    BOTTOM_START = 'BOTTOM_START',
    BOTTOM_END = 'BOTTOM_END',
    CENTER_START = "CENTER_START",
    CENTER_END = "CENTER_END",
    CENTER = "CENTER"
}

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
}

