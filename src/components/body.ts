import Toaststrap from "../Toaststrap"

export const ToastBody = (context: Toaststrap) => {
  const { options } = context
  const bodyElement = document.createElement("div")
  bodyElement.classList.add("toast-body")
  bodyElement.innerHTML = options.text

  return bodyElement
}
