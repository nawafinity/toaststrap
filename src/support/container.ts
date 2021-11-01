import { gclass } from "../prefrences"
import Bootstrap5Toast  from "../ToastFactory"

export const ToastContainer = (context: Bootstrap5Toast) => {
  const { options } = context
  const containerElement = document.createElement("div")
  containerElement.className = `${
    context.options.parent ? "position-absolute" : "position-fixed"
  } ${options.position}-${options.space} ${gclass("container")}`

  containerElement.style.zIndex = "2500"

  return containerElement
}
