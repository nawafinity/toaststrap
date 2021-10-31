import "./assets/styles.scss";
declare type OptionsType = {
    id: string;
    title: string;
    text: string;
    datetime?: string;
    type?: "default" | "info" | "success" | "warrning" | "danger";
    hideHeader?: boolean;
    position?: string;
    parent?: string;
    avatar?: string;
    space: number;
    soundFile?: string;
    allowSound: boolean;
    duration: number;
    onCloseCallBack?: (context: Bootstrap5Toast) => void;
};
/**
 * JavaScript library for showing a bootstrap5 toast notification.
 *
 * @author Nawaf Khalifah
 * @version 1.0.0
 */
declare class Bootstrap5Toast {
    options: OptionsType;
    private item;
    private sound;
    private spaceBetween;
    private group;
    constructor(options?: OptionsType);
    /**
     * Display toast to user.
     *
     * @returns {this}
     */
    show(): this;
    /**
     * Event to close toast.
     *
     * @return {void}
     */
    CloseEvent: () => void;
    /**
     * Build toast element.
     *
     * @returns {HTMLElement}
     */
    private get build();
    /**
     *
     * @returns {Element}
     */
    private get parentElement();
    /**
     * Remove the element from dom after timeout finished.
     */
    private removeElement;
    private orderize;
}
export { Bootstrap5Toast, OptionsType };
