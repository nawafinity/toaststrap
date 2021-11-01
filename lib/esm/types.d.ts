export declare type OptionsType = {
    id: string;
    title: string;
    text: string;
    dismissible: boolean;
    pausable: boolean;
    progress: boolean;
    datetime?: string;
    type?: any;
    noHeader?: boolean;
    position?: string;
    parent?: string;
    avatar?: string;
    space: number;
    soundable?: boolean;
    soundSource?: string;
    duration: number;
    onCloseCallBack?: () => void;
};
