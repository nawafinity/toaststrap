import ToastFactory from "./ToastFactory";
import { OptionsType } from "./types";
import "./assets/styles.scss";
declare global {
    interface Window {
        toaststrap: (options: OptionsType) => ToastFactory;
        toaststrap_position: any;
        toaststrap_type: any;
    }
}
