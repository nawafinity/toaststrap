import dayjs from "dayjs";
import { v4 } from "uuid";
import relativeTime from "dayjs/plugin/relativeTime";
import prefrences, { cprefix, gclass, POSITION } from "./prefrences";
import "./assets/styles.scss";
import { hasClass } from "./helpers";
import { HeaderComponent } from "./support/header";
import { ToastBody } from "./support/body";
import { ToastContainer } from "./support/container";
import Sound from './support/sound';
import notificationSound from "./assets/sound.wav";

dayjs.extend(relativeTime);

declare type OptionsType = {
  id: string;

  // Toast title.
  title: string;

  // Toast content {HTML allowed}.
  text: string;

  // Toast datetime (Shows in header).
  datetime?: string;

  // Toast type.
  type?: "default"| "info" | "success" | "warrning" | "danger"; 

  // Hide the toast header.
  hideHeader?: boolean;

  // Toast position.
  position?: string;

  // Toast parentNode.
  parent?: string;

  // Avatar (if set, the avatar will display).
  avatar?: string;

  // Margins
  space: number;

  // Custom sound file.
  soundFile?: string;

  // Allow sound?
  allowSound: boolean;

  // Timeout duration.
  duration: number;

  // Call back happn when close toast.
  onCloseCallBack?: (context: Bootstrap5Toast) => void;

};

/**
 * JavaScript library for showing a bootstrap5 toast notification.
 * 
 * @author Nawaf Khalifah
 * @version 1.0.0
 */
class Bootstrap5Toast {
  public options: OptionsType;
  private item: HTMLElement;
  private sound: Sound | undefined;
  private spaceBetween: number;
  private group: string;

  constructor(options?: OptionsType) {
    this.options = {
      id: v4(),
      title: "",
      text: "",
      type: "default",
      hideHeader: false,
      position: POSITION.TOP_END,
      allowSound: false,
      duration: 3,
      space: 5,

      // Override defaults.
      ...options,
    };

    if (this.options.duration > 0) {
      this.options.duration = this.options.duration * 1000
    }

    if (Object.keys(POSITION).includes(this.options.position!)) {
      this.options.position = prefrences.positions[this.options.position!]
    } else {
      this.options.position = prefrences.positions.TOP_END;
    }
  
    this.item = document.createElement("div");
    this.spaceBetween = 5;
    this.sound = this.options.allowSound ? new Sound(this.options.soundFile ? this.options.soundFile : notificationSound, this.parentElement) : undefined;
    this.group = this.options.position!;
  }

  /**
   * Display toast to user.
   * 
   * @returns {this}
   */
  public show(): this {
    const root = this.parentElement;
    const toast = this.build;

    root.insertBefore(toast, root.firstChild);

    // Play sound if it's allowed.
    if (this.sound) {
      this.sound.instance.play()
    }

    // Order toasts.
    this.orderize();


    return this;
  }
  
  /**
   * Event to close toast.
   * 
   * @return {void}
   */
  public CloseEvent = (): void => {
    this.removeElement(this.item);
  }


  /**
   * Build toast element.
   * 
   * @returns {HTMLElement}
   */
  private get build(): HTMLElement {

    // Container Element
    const container = ToastContainer(this);

    // Toast Element
    const toastElement = document.createElement("div");
    toastElement.classList.add("toast");
    container.setAttribute("data-id", this.options.id);
    container.setAttribute("data-created-at", this.options.datetime!);
    container.setAttribute("data-group", this.group);

    // Toast Header (only if option hideHeader is set to false).
    if (!this.options.hideHeader!) {
      toastElement.appendChild(HeaderComponent(this));
    }

  if (this.options.type) {
    toastElement.classList.add(`bg-${this.options.type}`)
  }


    // Toast Body
    toastElement.appendChild(ToastBody(this));

    // Put toast into it's container.
    container.appendChild(toastElement);

    // Toast instance.
    this.item = container;

    // Show the toast by adding class (.show)
    container.classList.add("show");

    if (this.options.duration > 0) {
    setTimeout(() => {
      this.removeElement(container)
    }, this.options.duration)

    }
    // Return toast instance.
    return container;
  }

  /**
   *
   * @returns {Element}
   */
  private get parentElement(): Element {
    if (this.options.parent) {
      const userRootElement = document.querySelector(this.options.parent!);
      if (!userRootElement) {
        throw "User root element not exists.";
      }

      if (Array.isArray(userRootElement)) {
        return userRootElement[0];
      }

      return userRootElement;
    }

    return document.body;
  }

  /**
   * Remove the element from dom after timeout finished.
   */
  private removeElement(toastElement: HTMLElement): void {
    // Hide the element.
    toastElement.classList.remove("show");

      if (typeof this.options.onCloseCallBack === "function") {
        this.options.onCloseCallBack(this);
      }

    window.setTimeout(() => {
      toastElement.parentNode?.removeChild(toastElement);
    }, 400);

          this.orderize()

  }

  private orderize() {
    const { space } = this.options;
    
    const topLeftOffsetSize = {
      top: Number(space),
      bottom: Number(space),
    };


    const topRightOffsetSize = {
      top: Number(space),
      bottom: Number(space),
    };

    const offsetSize = {
      top: Number(space),
      bottom: Number(space),
    };

    console.log(space, offsetSize, topRightOffsetSize, topLeftOffsetSize)
    
    let selector = `.${gclass("container")}[data-group='${this.group}']`;

    const windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

    if (windowWidth <= 360) {
      selector = `.${gclass("container")}`
    }
    const toasts = document.querySelectorAll<HTMLDivElement>(selector);
    
    let classUsed;

    if (toasts.length > 0) {
      toasts.forEach((toast) => {
        if (hasClass(toast, gclass("top"))) {
          classUsed = gclass("top");
        } else {
          classUsed = gclass("bottom");
        }

        const toastHeight = toast.offsetHeight;
        classUsed = classUsed.substr(
          `${cprefix}-`.length - 1,
          classUsed.length - 1
        );

        // Show toast in center if screen with less than or equal to 360px.
        if (windowWidth <= 360) {
          toast.style[classUsed] = offsetSize[classUsed] + "px"
          offsetSize[classUsed] += toastHeight + this.spaceBetween;
        } else {
          if (hasClass(toast, `start-${this.options.space}`)) {
            toast.style[classUsed] = topLeftOffsetSize[classUsed] + "px"
            topLeftOffsetSize[classUsed] += toastHeight + this.spaceBetween;
          } else {
            toast.style[classUsed] = topRightOffsetSize[classUsed] + "px"
            topRightOffsetSize[classUsed] += toastHeight + this.spaceBetween;
          }
        }
      });
    }
  }
}

export { Bootstrap5Toast, OptionsType };
