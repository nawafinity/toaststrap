import dayjs from "dayjs"

const hasClass = (element: Element, className: string) => {
  return element.classList.contains(className)
}

const getHumanTime = (datetime: string) => {
  return dayjs(datetime).fromNow()
}
export { hasClass, getHumanTime }
