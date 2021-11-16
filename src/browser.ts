import { POSITION, TYPES } from "./prefrences"
import ToastFactory from "./ToastFactory"
import { OptionsType } from "./types"
import "./assets/styles.scss"

declare global {
  interface Window {
    toaststrap: (options: OptionsType) => ToastFactory;
    toaststrap_position: any,
    toaststrap_type: any
  }
}

const initialize = (options: OptionsType): ToastFactory => {
  return new ToastFactory({
    ...options,
  })
}

// Window
window.toaststrap = initialize
window.toaststrap_position = POSITION
window.toaststrap_type = TYPES