export declare type OptionsType = {
  id: string;

  // Toast title.
  title: string;

  // Toast content {HTML allowed}.
  text: string;

  //
  dismissible: boolean,

  //
  pausable: boolean,

  // Toast datetime (Shows in header).
  datetime?: string;

  // Toast type.
  type?: any;

  // Hide the toast header.
  noHeader?: boolean;

  // Toast position.
  position?: string;

  // Toast parentNode.
  parent?: string;

  // Avatar (if set, the avatar will display).
  avatar?: string;

  // Margins
  space: number;

  // Custom sound file.
  soundable?: boolean,

  soundSource?: string;

  // Timeout duration.
  duration: number;

  // Call back happen when close toast.
  onCloseCallBack?: () => void;

};
