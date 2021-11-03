import { POSITION, TYPES } from "./prefrences";
import ToastFactory from "./ToastFactory";
import { OptionsType } from "./types";
import "./assets/styles.scss";
declare global {
    interface Window {
        toastsrap: (options: OptionsType) => ToastFactory;
        toastsrap_type: any;
        toastsrap_position: any;
    }
}
declare const initialize: (options: OptionsType) => ToastFactory;
export { initialize, POSITION, TYPES };
