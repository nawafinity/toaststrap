/// <reference types="node" />
import type { OptionsType } from "./types";
/**
 * Toaststrap class for building and generating the toast.
 *
 * @class Toaststrap
 *
 * @version 1.1.0
 */
declare class Toaststrap {
    /**
     * The Toast identifier.
     * @private
     */
    private readonly id;
    /**
     * The toast created at date.
     * @private
     */
    private readonly createdAt;
    /**
     * The toast options.
     * @private
     */
    options: OptionsType;
    /**
     * Generated toast item.
     * Used to delete, pause or modify the generated toast.
     * @private
     */
    private item;
    /**
     * The sound object.
     * @private
     */
    private readonly sound;
    /**
     * The margins between the parentNode and the shown toast.
     * @private
     */
    private readonly spaceBetween;
    /**
     * The toast group. Used to organize the toasts.
     * @private
     */
    private readonly group;
    /**
     * Toast time-out object.
     * @private
     */
    private timeout;
    /**
     * Toast timer object. Used in progress.
     * @private
     */
    progressInterval: NodeJS.Timer;
    /**
     * @private
     */
    pauseProgressInterval: boolean;
    /**
     * @private
     */
    progressStartTime: number;
    /**
     * Create a Toaststrap.
     *
     * @param {OptionsType} options - Available options to customize the toast.
     */
    constructor(options?: OptionsType);
    /**
     * Push the toast to the document parent node.
     *
     * @return {this} The toast instance.
     */
    show(): this;
    /**
     * Event to close toast. Used in header component.
     *
     * @return {void}
     */
    closeEvent: () => void;
    /**
     * Build the toast element.
     *
     * @return {HTMLElement} The generated toast.
     */
    private get build();
    /**
     *  The parent element, which will contain the toasts.
     * @return {Element}  The main element selected by the user if available, or the default parent.
     */
    private get parentElement();
    /**
     * Remove the element from dom after timeout finished.
     */
    private destroy;
    private organize;
}
export default Toaststrap;
