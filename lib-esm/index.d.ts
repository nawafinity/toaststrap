import { POSITION } from "./prefrences";
import { OptionsType, Bootstrap5Toast } from "./ToastFactory";
declare global {
    interface Window {
        bs5toast: (options: OptionsType) => Bootstrap5Toast;
    }
}
declare const initialize: (options: OptionsType) => Bootstrap5Toast;
export { initialize, POSITION };
