import { POSITION, TYPES } from "./prefrences"
import ToastFactory from "./ToastFactory"
import { OptionsType } from "./types"
import notificationSound from "./assets/sound.wav"
import "./assets/styles.scss"

declare global {
    interface Window {
      bs5toast: (options: OptionsType) => ToastFactory;
      bs5toast_type: any
    }
}

// Types
window.bs5toast_type = TYPES;

const initialize = window.bs5toast = (options: OptionsType): ToastFactory => {
  return new ToastFactory({
    soundSource: notificationSound,
    ...options
  })
}

export { initialize, POSITION, TYPES }
