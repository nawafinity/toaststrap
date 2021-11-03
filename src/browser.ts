import { POSITION, TYPES } from "./prefrences"
import ToastFactory from "./ToastFactory"
import { OptionsType } from "./types"
import notificationSound from "./assets/sound.wav"
import "./assets/styles.scss"

declare global {
  interface Window {
    toastsrap: (options: OptionsType) => ToastFactory;
    toastsrap_type: any;
    toastsrap_position: any;
  }
}

// Types
window.toastsrap_type = TYPES
window.toastsrap_position = POSITION

const initialize = window.toastsrap = (options: OptionsType): ToastFactory => {
  if (!options.soundSource || options.soundSource.length === 0) {
    options.soundSource = notificationSound
  }
  return new ToastFactory({
    ...options,
  })
}

export { initialize, POSITION, TYPES }
