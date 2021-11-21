import { gclass } from "../preferences"
import Toaststrap from "../Toaststrap"

export const ToastContainer = (context: Toaststrap) => {
  const { options } = context
  const containerElement = document.createElement("div")
  containerElement.className = `${
    context.options.parent ? "position-absolute" : "position-fixed"
  } ${options.position}-${options.offset} ${gclass("container")}`

  containerElement.style.zIndex = "2500"

  return containerElement
}
