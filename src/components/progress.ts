/**
 * @credit https://stackoverflow.com/a/31530946
 * @param duration
 * @constructor
 */
import Toaststrap from "../Toaststrap"

export const ProgressComponent = (factory: Toaststrap) => {
  let { duration } = factory.options


  const progressElement = document.createElement("div")
  progressElement.classList.add("toast-footer")
  const indicatorElement = document.createElement("div")
  indicatorElement.classList.add("toast-footer-inner")
  progressElement.appendChild(indicatorElement)


  if (duration > 0) {
    duration < 100  ? duration = duration * 1000 : duration;

    indicatorElement.style.animationDuration = `${duration}ms`

  }
  /**
   * I made this to make progress move when duration is set.
   * But it's kill the performance, so I decided to use CSS to do that.
   *
   * @deprecated
   */
  // @ts-ignore
  const start = () => {
    factory.progressStartTime = new Date().getTime()

    // >..< I will just use css to do that.
    if (duration > 0) {
      factory.progressInterval = setInterval(() => {
        if (!factory.pauseProgressInterval) {
          const diff = Math.round(new Date().getTime() - factory.progressStartTime)
          let value = Math.round(diff / duration * 100)
          value = value > 100 ? 100 : value

          indicatorElement.style.width = value + "%"

          if (diff >= duration) {
            clearInterval(factory.progressInterval)
          }

        }
      }, 100)
    }
  }

  return progressElement
}
