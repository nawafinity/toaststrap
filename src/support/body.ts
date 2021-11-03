import Toastsrap from "../ToastFactory"

export const ToastBody = (context: Toastsrap) => {
  const { options } = context
  const bodyElement = document.createElement("div")
  bodyElement.classList.add("toast-body")
  bodyElement.innerHTML = options.text

  return bodyElement
}
