import dayjs from "dayjs";
import { v4 } from "uuid";
import relativeTime from "dayjs/plugin/relativeTime";
import prefrences, { cprefix, gclass, POSITION } from "./prefrences";
import notificationSound from "./assets/sound.wav";
import "./assets/styles.scss";
import { hasClass } from "./helpers";

dayjs.extend(relativeTime);

declare type OptionsType = {
  title: string;
  text: string;
  datatime?: string;
  type?: "info" | "success" | "warrning" | "danger";
  hideHeader?: boolean;
  position?: string;
  parent?: string;
  avatar?: string;
  onCloseCallBack?: () => void;
  allowSound: boolean;
};

class Bootstrap5Toast {
  options: OptionsType;
  private id: string;
  private createdAt: string;
  private item: HTMLElement;
  private sound: HTMLAudioElement;
  private spaceBetween: number;
  private position: string;
  private group: string;

  constructor(options?: OptionsType) {
    this.options = {
      title: "",
      text: "",
      type: "info",
      hideHeader: false,
      position: POSITION.TOP_END,
      parent: "body",
      allowSound: false,

      // Override defaults.
      ...options,
    };

    if (Object.keys(POSITION).includes(this.options.position!)) {
      this.position = prefrences.positions[this.options.position!]
    } else {
      this.position = prefrences.positions.TOP_END;
    }
  
    this.id = v4();
    this.createdAt = this.getHumanTime();
    this.item = document.createElement("div");
    this.spaceBetween = 5;
    this.sound = new Audio()
    this.group = this.options.position!;

    if (this.options.allowSound) {
      this.makeSound();
    }

    if (this.options.datatime) {
      this.createdAt = this.options.datatime;
    } else {
      this.createdAt = dayjs().toString();
    }

  }

  public show(): this {
    const root = this.rootElement;
    const toast = this.buildToast;

    root.insertBefore(toast, root.firstChild);

    // Play sound if it's allowed.
    this.playSound();

    this.orderize();
    return this;
  }

  public clearQueue() {}

  /**
   *
   * @returns {HTMLElement}
   */
  private get buildHeader(): HTMLElement {
    const headerElement = document.createElement("div");
    headerElement.classList.add("toast-header");

    // Avatar element
    if (this.options.avatar) {
      headerElement.appendChild(this.buildAvatar);
    }

    // Create title element.
    const titleElement = document.createElement("strong");
    titleElement.classList.add("me-auto");
    titleElement.innerText = this.options.title;
    headerElement.appendChild(titleElement);

    // time
    const timeElement = document.createElement("small");
    timeElement.innerText = this.getHumanTime();

    headerElement.appendChild(timeElement);

    // Close button
    headerElement.appendChild(this.buildCloseButton);

    // Return header element.
    return headerElement;
  }

  /**
   *
   */
  private get buildBody(): HTMLElement {
    const bodyElement = document.createElement("div");
    bodyElement.classList.add("toast-body");
    bodyElement.innerHTML = this.options.text;

    return bodyElement;
  }

  /**
   *
   * @return {HTMLElement}
   */
  private get buildContainer(): HTMLElement {
    const containerElement = document.createElement("div");
    containerElement.className = `position-fixed ${
      this.position
    } ${gclass("container")}`;
    containerElement.style.zIndex = "2500";

    return containerElement;
  }

  /**
   *
   * @returns {HTMLElement}
   */
  private get buildToast(): HTMLElement {
    // Container Element
    const container = this.buildContainer;

    // Toast Element
    const toastElement = document.createElement("div");
    toastElement.classList.add("toast");
    container.setAttribute("data-id", this.id);
    container.setAttribute("data-created-at", this.createdAt);
    container.setAttribute("data-group", this.group);

    // Toast Header (only if option hideHeader is set to false).
    if (!this.options.hideHeader!) {
      toastElement.appendChild(this.buildHeader);
    }

    // Toast Body
    toastElement.appendChild(this.buildBody);

    // Put toast into it's container.
    container.appendChild(toastElement);

    // Toast instance.
    this.item = container;

    // Show the toast by adding class (.show)
    container.classList.add("show");

    // Return toast instance.
    return container;
  }

  /**
   *
   * @returns {HTMLElement}
   */
  private get buildAvatar(): HTMLElement {
    const avatarElement = document.createElement("img");
    avatarElement.classList.add("rounded", "me-2");
    avatarElement.src = this.options.avatar!;
    avatarElement.width = 20;
    avatarElement.height = 20;

    return avatarElement;
  }

  /**
   *
   * @returns {HTMLElement}
   */
  private get rootElement(): HTMLElement {
    if (this.options.parent !== "body") {
      const userRootElement = document.getElementById(this.options.parent!);
      if (!userRootElement) {
        throw "User root element not exists.";
      }

      return userRootElement;
    }

    return document.body;
  }

  /**
   *
   */
  private get buildCloseButton(): HTMLElement {
    const closeBtnElement = document.createElement("button");
    closeBtnElement.classList.add("btn-close");
    closeBtnElement.setAttribute("type", "button");
    closeBtnElement.setAttribute("area-label", "Close");

    closeBtnElement.addEventListener("click", (event) => {
      event.stopPropagation();
      this.removeElement(this.item);

      if (typeof this.options.onCloseCallBack === "function") {
        this.options.onCloseCallBack();
      }

      this.orderize();
    });

    return closeBtnElement;
  }

  /**
   *
   * @returns {string}
   */
  private getHumanTime(): string {
    return dayjs(this.createdAt).fromNow();
  }

  /**
   * Remove the element from dom after timeout finished.
   */
  private removeElement(toastElement: HTMLElement): void {
    // Hide the element.
    toastElement.classList.remove("show");

    window.setTimeout(() => {
      toastElement.parentNode?.removeChild(toastElement);
    }, 400);
  }

  private makeSound(): void {
    const sound = new Audio(notificationSound);
    sound.id = "bootstrap5-toast-notification";
    this.sound = sound;

    if (!this.rootElement.querySelector('#bootstrap5-toast-notification')) {
      this.rootElement.appendChild(sound)
    }
  }

  private playSound(): void {
    if (this.options.allowSound) {
      this.sound.play();
    }
  }

  private orderize() {
    // @ts-ignore
    const topLeftOffsetSize = {
      top: 5,
      bottom: 5,
    };

    // @ts-ignore

    const topRightOffsetSize = {
      top: 5,
      bottom: 5,
    };
    // @ts-ignore

    const offsetSize = {
      top: 5,
      bottom: 5,
    };
    
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
          if (hasClass(toast, "start")) {
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
