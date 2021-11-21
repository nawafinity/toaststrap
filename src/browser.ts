import Toaststrap from "./Toaststrap"
import type { OptionsType } from "./types"
import { POSITIONS, TYPES } from "./preferences"
import "./assets/styles.scss"
import filters from "./typecheck"

declare global {
  interface Window {
    toaststrap: (options: OptionsType) => Toaststrap;
    toaststrap_position: any,
    toaststrap_type: any
  }
}

/**
 *
 * @param {OptionsType} options
 */
const initialize = (options: OptionsType): Toaststrap => {

  // Type checks.
  if (Object.keys(options).length) {
    filters(options);
  }
  return new Toaststrap({
    ...options,
  })
}

// Window
window.toaststrap = initialize
window.toaststrap_position = POSITIONS
window.toaststrap_type = TYPES