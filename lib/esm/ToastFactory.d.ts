/// <reference types="node" />
import { OptionsType } from "./types";
declare class ToastFactory {
    private readonly id;
    private readonly createdAt;
    options: OptionsType;
    private item;
    private readonly sound;
    private readonly spaceBetween;
    private readonly group;
    private timeout;
    progressInterval: NodeJS.Timer;
    pauseProgressInterval: boolean;
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
export default ToastFactory;
