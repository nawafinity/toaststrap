import { OptionsType } from "./types";
/**
 * JavaScript library for showing a bootstrap5 toast notification.
 *
 * @author Nawaf Khalifah
 * @version 1.0.0
 */
declare class ToastFactory {
    options: OptionsType;
    private item;
    private readonly sound;
    private readonly spaceBetween;
    private readonly group;
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
export default ToastFactory;
