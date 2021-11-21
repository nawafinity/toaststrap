import Toaststrap from "./Toaststrap";
import type { OptionsType } from "./types";
import "./assets/styles.scss";
declare global {
    interface Window {
        toaststrap: (options: OptionsType) => Toaststrap;
        toaststrap_position: any;
        toaststrap_type: any;
    }
}
