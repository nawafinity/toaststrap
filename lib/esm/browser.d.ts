import { POSITION, TYPES } from "./prefrences";
import ToastFactory from "./ToastFactory";
import { OptionsType } from "./types";
import "./assets/styles.scss";
declare global {
    interface Window {
        bs5toast: (options: OptionsType) => ToastFactory;
        bs5toast_type: any;
    }
}
declare const initialize: (options: OptionsType) => ToastFactory;
export { initialize, POSITION, TYPES };
