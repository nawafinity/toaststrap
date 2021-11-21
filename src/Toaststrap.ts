import preferences, { cprefix, gclass } from "./preferences"
import { hasClass } from "./helpers"
import type { OptionsType, SubTitleType } from "./types"
import { POSITIONS, TYPES } from "./preferences"
import { HeaderComponent } from "./components/header"
import { ToastBody } from "./components/body"
import { ToastContainer } from "./components/container"
import Sound from "./components/sound"
import { ProgressComponent } from "./components/progress"
import RelativeDate from "./RelativeDate"
import Util from "./Util"

/**
 * Toaststrap class for building and generating the Toaststrap's toast.
 *
 * @class Toaststrap
 *
 * @version 1.0.1
 */
class Toaststrap {

  /**
   * The Toast identifier.
   * @private
   */
  private readonly id: string

  /**
   * The toast created at date.
   * @private
   */
  private readonly createdAt: string

  /**
   * The toast options.
   * @private
   */
  public options: OptionsType

  /**
   * Generated toast item.
   * Used to delete, pause or modify the generated toast.
   * @private
   */
  private item: HTMLElement

  /**
   * The sound object.
   * @private
   */
  private readonly sound: Sound | undefined

  /**
   * The margins between the parentNode and the shown toast.
   * @private
   */
  private readonly spaceBetween: number

  /**
   * The toast group. Used to organize the toasts.
   * @private
   */
  private readonly group: string

  /**
   * Toast time-out object.
   * @private
   */
  private timeout: NodeJS.Timeout

  /**
   * Toast timer object. Used in progress.
   * @private
   */
  public progressInterval: NodeJS.Timer

  /**
   * @private
   */
  public pauseProgressInterval: boolean

  /**
   * @private
   */
  public progressStartTime: number


  /**
   * Create a Toaststrap.
   *
   * @param {OptionsType} options - Available options to customize the toast.
   */
  constructor(options?: OptionsType) {

    this.options = {
      avatar: "",
      dismissible: true,
      duration: 3000,
      offset: 10,
      parent: "body",
      pausable: true,
      position: POSITIONS.TOP_END,
      progress: true,
      snackbar: false,
      soundSource: "",
      soundable: false,
      subtitle: {
        relative: true,
        datetime: Date.now()
      },
      text: "",
      title: "",
      type: TYPES.DEFAULT,
      ...options
    }

    // Set the toast timeout.
    if (typeof this.options.subtitle !== "string") {
      if (typeof this.options.subtitle === "object" && "datetime" in this.options.subtitle) {
        const delta: SubTitleType = this.options.subtitle

        if ("relative" in this.options.subtitle && this.options.subtitle.relative) {
          this.options.subtitle = (new RelativeDate(delta.datetime).print())
        } else {
          this.options.subtitle = String(delta.datetime)
        }
      }
    }

    // Set toast group.
    // The toast group used to organized the toasts.
    this.group = this.options.position! || POSITIONS.TOP_END


    if (Object.keys(POSITIONS).includes(this.options.position!)) {
      this.options.position = preferences.positions[this.options.position!]
    } else {
      this.options.position = preferences.positions.TOP_END
    }

    this.item = document.createElement("div")
    this.spaceBetween = 5

    if (this.options.soundable && this.options.soundSource && this.options.soundSource.length > 0) {
      this.sound = new Sound(this.options.soundSource, this.parentElement)
    }

    this.id = Util.makeId()
    this.createdAt = Date.now().toString()
    this.timeout = setTimeout(() => {
    }, 0)
    this.progressInterval = setInterval(() => {
    }, 0)
    this.pauseProgressInterval = false
    this.progressStartTime = 0

  }

  /**
   * Push the toast to the document parent node.
   *
   * @return {this} The toast instance.
   */
  public show(): this {
    const root = this.parentElement
    const toast = this.build

    root.insertBefore(toast, root.firstChild)

    // Play sound if it's allowed.
    if (this.sound) {
      this.sound.instance.play().catch(() => {
        console.warn("Sound source given not found or not supported.")
      })
    }

    // Order toasts.
    this.organize()


    return this
  }

  /**
   * Event to close toast. Used in header component.
   *
   * @return {void}
   */
  public closeEvent = (): void => {
    this.destroy(this.item)
  }


  /**
   * Build the toast element.
   *
   * @return {HTMLElement} The generated toast.
   */
  private get build(): HTMLElement {

    // Container Element
    const container = ToastContainer(this)

    // Toast Element
    const toastElement = document.createElement("div")
    toastElement.classList.add("toast")

    container.setAttribute("data-id", this.id)
    container.setAttribute("data-created-at", this.createdAt)
    container.setAttribute("data-type", this.options.type ? this.options.type.toLowerCase() : "")
    container.setAttribute("data-group", this.group)
    container.setAttribute("data-snackbar", String(this.options.snackbar))

    // Toast Header (only if option hideHeader is set to false).
    if (!Boolean(this.options.snackbar)) {
      toastElement.appendChild(HeaderComponent(this))
    } else {
      toastElement.classList.add(...preferences.types[this.options.type])
    }

    // Toast Body
    toastElement.appendChild(ToastBody(this))

    if (this.options.progress) {
      // Toast Progress
      toastElement.appendChild(ProgressComponent(this))
    }


    // Put toast into it's container.
    container.appendChild(toastElement)

    // Watch toast height changed, and re-order if happen.
    new ResizeObserver(() => {
      this.organize()
    }).observe(container)

    // Toast instance.
    this.item = container

    // Show the toast by adding class (.show)
    container.classList.add("show")

    if (this.options.duration > 0) {
      this.timeout = setTimeout(() => {
        this.destroy(container)
      }, this.options.duration)

      if (this.options.pausable) {
        const touchStartCallBack = () => {
          clearTimeout(this.timeout)
          this.pauseProgressInterval = true
        }

        const touchEndCallBack = () => {
          this.pauseProgressInterval = false
          this.progressStartTime = new Date().getTime()

          this.timeout = setTimeout(() => {
            this.destroy(this.item)
          }, this.options.duration)
        }

        "mouseover touchstart touchend".split(" ").forEach(e => {
          this.item.addEventListener(e, touchStartCallBack)
        })

        "mouseleave touchend".split(" ").forEach(e => {
          this.item.addEventListener(e, touchEndCallBack)
        })
      }

    }
    // Return toast instance.
    return container
  }

  /**
   *  The parent element, which will contain the toasts.
   * @return {Element}  The main element selected by the user if available, or the default parent.
   */
  private get parentElement(): Element {
    if (this.options.parent) {
      const userRootElement = document.querySelector(this.options.parent)
      if (!userRootElement) {
        throw "User root element not exists."
      }

      if (Array.isArray(userRootElement)) {
        return userRootElement[0]
      }

      return userRootElement
    }

    return document.body
  }

  /**
   * Remove the element from dom after timeout finished.
   */
  private destroy(toastElement: HTMLElement): void {
    // Hide the element.
    toastElement.classList.remove("show")

    if (typeof this.options.onClose === "function") {
      this.options.onClose(this)
    }

    window.setTimeout(() => {
      toastElement.parentNode?.removeChild(toastElement)
    }, 400)


  }

  private organize() {
    const { offset } = this.options

    const topLeftOffsetSize = {
      top: Number(offset),
      bottom: Number(offset),
    }


    const topRightOffsetSize = {
      top: Number(offset),
      bottom: Number(offset),
    }

    const offsetSize = {
      top: Number(offset),
      bottom: Number(offset),
    }


    let selector = `.${gclass("container")}[data-group='${this.group}']`

    const windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width

    if (windowWidth <= 360) {
      selector = `.${gclass("container")}`
    }
    const toasts = document.querySelectorAll<HTMLDivElement>(selector)

    let classUsed

    if (toasts.length > 0) {
      toasts.forEach((toast) => {

        if (hasClass(toast, gclass("top"))) {
          classUsed = gclass("top")
        } else if (hasClass(toast, gclass("middle"))) {
          classUsed = gclass("middle")
        } else {
          classUsed = gclass("bottom")
        }

        const toastHeight = toast.offsetHeight
        classUsed = classUsed.substr(
          `${cprefix}-`.length - 1,
          classUsed.length - 1,
        )

        // Show toast in center if screen with less than or equal to 360px.
        if (windowWidth <= 360) {
          toast.style[classUsed] = offsetSize[classUsed] + "px"
          offsetSize[classUsed] += toastHeight + this.spaceBetween
        } else {
          if (hasClass(toast, `start-${this.options.offset}`)) {
            toast.style[classUsed] = topLeftOffsetSize[classUsed] + "px"
            topLeftOffsetSize[classUsed] += toastHeight + this.spaceBetween
          } else {
            toast.style[classUsed] = topRightOffsetSize[classUsed] + "px"
            topRightOffsetSize[classUsed] += toastHeight + this.spaceBetween
          }
        }

      })
    }
  }
}

export default Toaststrap
