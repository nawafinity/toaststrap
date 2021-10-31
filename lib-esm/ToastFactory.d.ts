import "./assets/styles.scss";
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
declare class Bootstrap5Toast {
    options: OptionsType;
    private id;
    private createdAt;
    private item;
    private sound;
    private spaceBetween;
    private position;
    constructor(options?: OptionsType);
    show(): this;
    clearQueue(): void;
    /**
     *
     * @returns {HTMLElement}
     */
    private get buildHeader();
    /**
     *
     */
    private get buildBody();
    /**
     *
     * @return {HTMLElement}
     */
    private get buildContainer();
    /**
     *
     * @returns {HTMLElement}
     */
    private get buildToast();
    /**
     *
     * @returns {HTMLElement}
     */
    private get buildAvatar();
    /**
     *
     * @returns {HTMLElement}
     */
    private get rootElement();
    /**
     *
     */
    private get buildCloseButton();
    /**
     *
     * @returns {string}
     */
    private getHumanTime;
    /**
     * Remove the element from dom after timeout finished.
     */
    private removeElement;
    private makeSound;
    private playSound;
    private orderize;
}
export { Bootstrap5Toast, OptionsType };
