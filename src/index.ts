import ToastFactory from "./ToastFactory"
import { OptionsType } from "./types"
import { POSITION, TYPES } from "./prefrences"

export const ToastType = TYPES;
export const ToastPosition = POSITION;

export default function(options: OptionsType): ToastFactory {
  return new ToastFactory(options);
}
