/**
 * Provides some useful utility.
 * @class Util
 */
declare class Util {
    /**
     * Format a string template.
     * @param {string} str String to be format.
     * @param {object} values The values object.
     * @return string
     */
    static strFormat(str: string, values: object): string;
    /**
     * Generate an unique identifier.
     * @return string
     */
    static makeId(): string;
}
export default Util;
