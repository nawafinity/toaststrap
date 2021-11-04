export const cprefix = "toaststrap-"

export function gclass(c: string) {
  return cprefix + c
}

export enum POSITION {
  TOP_START = "TOP_START",
  TOP_END = "TOP_END",
  BOTTOM_START = "BOTTOM_START",
  BOTTOM_END = "BOTTOM_END",
  CENTER_START = "CENTER_START",
  CENTER_END = "CENTER_END",
  CENTER = "CENTER"
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
}

