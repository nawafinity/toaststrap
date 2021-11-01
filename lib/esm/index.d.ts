import ToastFactory from "./ToastFactory";
import { OptionsType } from "./types";
import { POSITION, TYPES } from "./prefrences";
export declare const ToastType: typeof TYPES;
export declare const ToastPosition: typeof POSITION;
export default function (options: OptionsType): ToastFactory;
