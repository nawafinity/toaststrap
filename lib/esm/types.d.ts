/**
 * Available Toaststrap options.
 *
 * @version 1.0.0
 *
 */
export declare type OptionsType = {
    /**
     * @description Toast title that will shows in the header, if snackbar option is false.
     * @version 1.0.0
     */
    title: string;
    /**
     * @param {string | {datetime: string, human: boolean}}
     */
    subtitle?: string | {
        datetime: string;
        human: boolean;
    };
    /**
     * @deprecated Will remove on version 1.0.2
     * @version 1.0.0
     */
    text: string;
    dismissible: boolean;
    pausable: boolean;
    progress: boolean;
    /**
     * @deprecated since version 1.0.2, please use subtitle.
     * @version 1.0.0
     * @param {string} datetime
     */
    datetime?: string;
    /**
     * @version 1.0.0
     */
    type?: any;
    /**
     * @version 1.0.0
     */
    noHeader?: boolean;
    /**
     * @version 1.0.0
     */
    position?: string;
    parent?: string;
    avatar?: string;
    space: number;
    soundable?: boolean;
    soundSource?: string;
    duration: number;
    onCloseCallBack?: () => void;
};
