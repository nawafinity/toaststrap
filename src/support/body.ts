import { Bootstrap5Toast } from "../ToastFactory"

export const ToastBody = (context: Bootstrap5Toast) => {
  const { options } = context
  const bodyElement = document.createElement("div")
  bodyElement.classList.add("toast-body")
  bodyElement.innerHTML = options.text

  return bodyElement
}
