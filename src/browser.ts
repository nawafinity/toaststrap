import { POSITION, TYPES } from "./prefrences"
import ToastFactory from "./ToastFactory"
import { OptionsType } from "./types"
import notificationSound from "./assets/sound.wav"
import "./assets/styles.scss"

declare global {
  interface Window {
    toaststrap: (options: OptionsType) => ToastFactory;
    toaststrap_type: any;
    toaststrap_position: any;
  }
}

// Types
window.toaststrap_type = TYPES
window.toaststrap_position = POSITION

const initialize = window.toaststrap = (options: OptionsType): ToastFactory => {
  if (!options.soundSource || options.soundSource.length === 0) {
    options.soundSource = notificationSound
  }
  return new ToastFactory({
    ...options,
  })
}

export { initialize, POSITION, TYPES }
