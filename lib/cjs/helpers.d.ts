declare const hasClass: (element: Element, className: string) => boolean;
declare const getHumanTime: (datetime: string) => string;
/**
 * Quick fix of boolean
 * @see https://stackoverflow.com/questions/44024193/typescript-string-to-boolean
 */
declare const toBoolean: (value?: string | boolean | undefined) => boolean;
export { hasClass, getHumanTime, toBoolean };
