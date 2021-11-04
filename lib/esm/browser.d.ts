import { POSITION, TYPES } from "./prefrences";
import ToastFactory from "./ToastFactory";
import { OptionsType } from "./types";
import "./assets/styles.scss";
declare global {
    interface Window {
        toaststrap: (options: OptionsType) => ToastFactory;
        toaststrap_type: any;
        toaststrap_position: any;
    }
}
declare const initialize: (options: OptionsType) => ToastFactory;
export { initialize, POSITION, TYPES };
