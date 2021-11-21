import { OptionsType } from "./types"
import { POSITIONS, TYPES } from "./preferences"
import Util from "./Util"

const checks = [
  ["TYPE_CHECK", "dismissible", "boolean"],
  ["TYPE_CHECK", "duration", "number"],
  ["TYPE_CHECK", "offset", "{5, 10, 15, 20}"],
  ["TYPE_CHECK", "onClose", "function"],
  ["TYPE_CHECK", "onShow", "function"],
  ["TYPE_CHECK", "parent", "string"],
  ["TYPE_CHECK", "pausable", "boolean"],
  ["TYPE_CHECK", "position", "string"],
  ["TYPE_CHECK", "progress", "boolean"],
  ["TYPE_CHECK", "snackbar", "boolean"],
  ["TYPE_CHECK", "soundSource", "string"],
  ["TYPE_CHECK", "soundable", "boolean"],
  ["TYPE_CHECK", "subtitle", ["string", "object"]],
  ["TYPE_CHECK", "text", "string"],
  ["TYPE_CHECK", "title", "string"],
  ["TYPE_CHECK", "type", "string"],
]

const filters = (options: OptionsType) => {
  if (checks.length > 0) {
    checks.forEach(check => {
      const secondIndex = check[1];
      const lastIndex = check[2];

      if (Array.isArray(lastIndex)) {
        // Check all cases.
      } else {
        if (options[secondIndex] && typeof options[secondIndex] !== lastIndex) {
          throw secondIndex + '   '+ lastIndex;
        }
      }
    })
  }
}

export default filters;