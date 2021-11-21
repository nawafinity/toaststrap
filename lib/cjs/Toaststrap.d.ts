/// <reference types="node" />
import type { OptionsType } from "./types";
/**
 * Toaststrap 1.0.1
 * https://github.com/nawafscript/toaststrap
 */
declare class Toaststrap {
    /**
     * @private
     */
    private readonly id;
    /**
     * @private
     */
    private readonly createdAt;
    /**
     * @private
     */
    options: OptionsType;
    /**
     * @private
     */
    private item;
    /**
     * @private
     */
    private readonly sound;
    /**
     * @private
     */
    private readonly spaceBetween;
    /**
     * @private
     */
    private readonly group;
    /**
     * @private
     */
    private timeout;
    /**
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
     *
     * @param {OptionsType} options
     */
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
    private destroy;
    private organize;
}
export default Toaststrap;
