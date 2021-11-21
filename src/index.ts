import Toaststrap from "./Toaststrap"
import { OptionsType } from "./types"
import { POSITIONS, TYPES } from "./preferences"

export {
  POSITIONS as ToastPositions,
  TYPES as ToastTypes
}


/**
 * A simple, lightweight library for showing Bootstrap 5 toasts.
 *
 * @version 1.0.2
 *
 * @packageDocumentation
 */
export default function(options: OptionsType): Toaststrap {
  return new Toaststrap(options)
}
