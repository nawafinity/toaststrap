import ToastFactory from "./ToastFactory";
import { POSITION, TYPES } from "./prefrences";
export var ToastType = TYPES;
export var ToastPosition = POSITION;
export default function (options) {
    return new ToastFactory(options);
}
//# sourceMappingURL=index.js.map