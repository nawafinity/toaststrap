import { POSITION } from "./prefrences"
import { OptionsType, Bootstrap5Toast } from "./ToastFactory"

declare global {
    interface Window { bs5toast: (options: OptionsType) => Bootstrap5Toast; }
}

const initialize = window.bs5toast = (options: OptionsType): Bootstrap5Toast => {
  return new Bootstrap5Toast(options)
}


export { initialize, POSITION }
