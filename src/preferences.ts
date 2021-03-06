/**
 * Prefix will be applied to all css classes.
 */
export const cprefix = "toaststrap-"

/**
 * Get the classname with the prefix.
 * @param {string} c
 */
export function gclass(c: string) {
  return cprefix + c
}

export enum POSITIONS {
  TOP_START = "TOP_START",
  TOP_END = "TOP_END",
  TOP_CENTER = "TOP_CENTER",
  BOTTOM_START = "BOTTOM_START",
  BOTTOM_END = "BOTTOM_END",
  BOTTOM_CENTER = "BOTTOM_CENTER",
}

export enum TYPES {
  DEFAULT = "DEFAULT",
  PRIMARY = "PRIMARY",
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  DANGER = "DANGER",
  DARK = "DARK",
  SWEET = "SWEET"
}

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
}

