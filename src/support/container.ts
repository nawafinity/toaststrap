import { gclass } from "../prefrences"
import Toaststrap from "../ToastFactory"

export const ToastContainer = (context: Toaststrap) => {
  const { options } = context
  const containerElement = document.createElement("div")
  containerElement.className = `${
    context.options.parent ? "position-absolute" : "position-fixed"
  } ${options.position}-${options.space} ${gclass("container")}`

  containerElement.style.zIndex = "2500"

  return containerElement
}
