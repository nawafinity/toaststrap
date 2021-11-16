import dayjs from "dayjs"
import { v4 } from "uuid"
import relativeTime from "dayjs/plugin/relativeTime"
import prefrences, { cprefix, gclass, POSITION } from "./prefrences"
import { hasClass, toBoolean } from "./helpers"
import { HeaderComponent } from "./support/header"
import { ToastBody } from "./support/body"
import { ToastContainer } from "./support/container"
import Sound from "./support/sound"
import { OptionsType } from "./types"
import { ProgressComponent } from "./support/progress"

dayjs.extend(relativeTime)


class ToastFactory {

  private readonly id: string;
  private readonly createdAt: string;
  public options: OptionsType
  private item: HTMLElement
  private readonly sound: Sound | undefined
  private readonly spaceBetween: number
  private readonly group: string
  private timeout: NodeJS.Timeout
  public progressInterval: NodeJS.Timer
  public pauseProgressInterval: boolean
  public progressStartTime: number

  /**
   *
   * @param {OptionsType} options
   */
  constructor(options?: OptionsType) {

    this.options = {
      avatar: undefined,
      datetime: undefined,
      dismissible: true,
      duration: 3000,
      noHeader: false,
      onCloseCallBack(): void {
      },
      parent: "",
      pausable: false,
      position: "",
      progress: false,
      soundSource: "",
      soundable: false,
      space: 0,
      subtitle: "",
      text: "",
      title: "",
      type: undefined,
      ...options
    }

    if (this.options.duration > 0) {
      this.options.duration = this.options.duration * 1000
    }

    this.group = this.options.position! || POSITION.TOP_END


    if (Object.keys(POSITION).includes(this.options.position!)) {
      this.options.position = prefrences.positions[this.options.position!]
    } else {
      this.options.position = prefrences.positions.TOP_END
    }

    this.item = document.createElement("div")
    this.spaceBetween = 5

    if (this.options.soundable && this.options.soundSource && this.options.soundSource.length > 0) {
      this.sound = new Sound(this.options.soundSource, this.parentElement)
    }

    this.id = v4();
    this.createdAt = dayjs().toString();
    this.timeout = setTimeout(() => {
    }, 0)
    this.progressInterval = setInterval(() => {
    }, 0)
    this.pauseProgressInterval = false
    this.progressStartTime = 0

  }

  /**
   * Display toast to user.
   *
   * @returns {this}
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
   * Event to close toast.
   *
   * @return {void}
   */
  public CloseEvent = (): void => {
    this.destroy(this.item)
  }


  /**
   * Build toast element.
   *
   * @returns {HTMLElement}
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

    // Toast Header (only if option hideHeader is set to false).
    if (!Boolean(this.options.noHeader)) {
      toastElement.appendChild(HeaderComponent(this))
    } else {
      toastElement.classList.add(...prefrences.types[this.options.type])
    }

    // Toast Body
    toastElement.appendChild(ToastBody(this))

    if (toBoolean(this.options.progress)) {
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

      if (toBoolean(this.options.pausable)) {
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
   *
   * @returns {Element}
   */
  private get parentElement(): Element {
    if (this.options.parent) {
      const userRootElement = document.querySelector(this.options.parent!)
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

    if (typeof this.options.onCloseCallBack === "function") {
      this.options.onCloseCallBack()
    }

    window.setTimeout(() => {
      toastElement.parentNode?.removeChild(toastElement)
    }, 400)


  }

  private organize() {
    const { space } = this.options

    const topLeftOffsetSize = {
      top: Number(space),
      bottom: Number(space),
    }


    const topRightOffsetSize = {
      top: Number(space),
      bottom: Number(space),
    }

    const offsetSize = {
      top: Number(space),
      bottom: Number(space),
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
          if (hasClass(toast, `start-${this.options.space}`)) {
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

export default ToastFactory
