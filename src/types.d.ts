import Toaststrap from "./Toaststrap"

export type SubTitleType = {
  /**
   * Ability to show a relative datetime.
   * @version 1.1.0
   */
  relative: boolean,

  /**
   * The date value.
   * @version 1.1.0
   */
  datetime: string | Date | number
}

export type OptionsType = {

  /**
   * Title to be display in the toast header.
   * @version 1.0.0
   */
  title: string;

  /**
   * The subtitle to be display in the toast header, it's can be either string or datetime object.
   * @version 1.1.0
   */
  subtitle?: SubTitleType | string;

  /**
   * The text to be display in the toast body.
   * @version 1.0.0
   */
  text: string;

  /**
   * Show the close button or not.
   * @version 1.0.0
   * @default true
   */
  dismissible: boolean;

  /**
   * Stop timer when hovered over the toast. (Only if duration is greater than 0).
   * @version 1.0.0
   * @default true
   */
  pausable: boolean;

  /**
   * Show the timer progress-bar or not. (Only if duration is greater than 0).
   * @version 1.0.0
   * @default true
   */
  progress: boolean;

  /**
   * The toast the type of the toast (Bootstrap 5 backgrounds).
   * @see https://getbootstrap.com/docs/5.1/utilities/background/
   * @default DEFAULT
   * @version 1.0.0
   */
  type?: any;

  /**
   * The position of the toast.
   *
   * @defaultValue TOP_END
   * @version 1.0.0
   */
  position?: string;

  /**
   * The node on which the toast should be added.
   * @defaultValue body
   * @version 1.0.0
   */
  parent?: string;

  /**
   * Image/Icon to be shown in the header before the toast's title.
   * @version 1.0.0
   */
  avatar?: string;

  /**
   * Ability to add sound to toast, the sound played when toast show.
   *
   * @version 1.0.0
   * @default false
   */
  soundable?: boolean,

  /**
   * The sound file that will be played. (Only if soundable is true).
   *
   * @version 1.0.0
   */
  soundSource?: string;

  /**
   * Duration for which the toast should be displayed. (0 for permanent toast).
   *
   * @version 1.0.0
   * @default 3000
   */
  duration: number;

  /**
   * Ability to add some offset to axis.
   * @version 1.1.0
   * @default 10
   */
  offset: 5 | 10 | 15 | 20;

  /**
   * The close hook, which will be invoked after the toast closed.
   * @version 1.1.0
   */
  onClose?: (toast: Toaststrap) => void;

  /**
   * The show hook, which will be invoked when the toast showen.
   * @version 1.1.0
   */
  onShow?: (toast: Toaststrap) => void

  /**
   * Ability to hide the header, and show a snakebar.
   *
   * @version 1.1.0
   * @default false
   */
  snackbar?: boolean;
};