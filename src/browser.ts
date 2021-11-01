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
  if (!options.soundSource || options.soundSource.length === 0) {
    options.soundSource = notificationSound;
  }
  return new ToastFactory({
    ...options
  })
}

export { initialize, POSITION, TYPES }
