import ToastFactory from "./ToastFactory"
import { OptionsType } from "./types"
import { POSITION, TYPES } from "./prefrences"

export const ToastType = TYPES
export const ToastPosition = POSITION

/**
 * # Toaststrap
 *
 * A simple, lightweight javascript library for creating a Bootstrap 5 toasts.
 *
 * @param options
 */
export default function(options: OptionsType): ToastFactory {
  return new ToastFactory(options)
}
