/**----------------------------------
 * Checking and securing options types.
 * Only for browsers.
 *----------------------------------*/

import { OptionsType } from "./types"
import Util from "./Util"

const TYPE_CHECK = "TypeError: Option {option} should be in type {type}."

const resolve = (path: string, obj = self, separator = ".") => {
  const properties = Array.isArray(path) ? path : path.split(separator)
  // @ts-ignore
  return properties.reduce((prev, curr) => prev && prev[curr], obj)
}

const checks = [
  [TYPE_CHECK, "dismissible", "boolean"],
  [TYPE_CHECK, "duration", "number"],
  [TYPE_CHECK, "offset", "number"],
  [TYPE_CHECK, "onClose", "function"],
  [TYPE_CHECK, "onShow", "function"],
  [TYPE_CHECK, "parent", "string"],
  [TYPE_CHECK, "pausable", "boolean"],
  [TYPE_CHECK, "position", "string"],
  [TYPE_CHECK, "progress", "boolean"],
  [TYPE_CHECK, "snackbar", "boolean"],
  [TYPE_CHECK, "soundSource", "string"],
  [TYPE_CHECK, "soundable", "boolean"],
  [TYPE_CHECK, "subtitle", ["string", "object"]],
  [TYPE_CHECK, "text", "string"],
  [TYPE_CHECK, "title", "string"],
  [TYPE_CHECK, "type", "string"],
  [TYPE_CHECK, "subtitle.relative", "boolean"],
  [TYPE_CHECK, "subtitle.datetime", ["string", "Date", "number"]],
]

const filters = (options: OptionsType) => {
  if (checks.length > 0) {
    checks.forEach(check => {
      const firstIndex = check[0]
      const secondIndex = check[1]
      const lastIndex = check[2]

      if (Array.isArray(lastIndex)) {
        let succeed = false

        lastIndex.forEach(type => {

          // @ts-ignore
          if (typeof resolve(secondIndex, options) !== "undefined" && typeof resolve(secondIndex, options) === type) {
            succeed = true
            return
          }
        })

        if (!succeed) {
          // @ts-ignore
          throw Util.strFormat(firstIndex, { option: secondIndex, type: lastIndex.toString() })
        }

      } else {
        // @ts-ignore
        if (resolve(secondIndex, options) && typeof resolve(secondIndex, options) !== lastIndex) {
          // @ts-ignore
          throw Util.strFormat(firstIndex, { option: secondIndex, type: lastIndex })
        }
      }
    })
  }
}

export default filters