/**
 * Provides some useful utility.
 * @class Util
 */
class Util {

  /**
   * Format a string template.
   * @param {string} str String to be format.
   * @param {object} values The values object.
   * @return string
   */
  public static strFormat(str: string, values: object): string {
    if (str && Object.keys(values).length > 0) {
      const regex = new RegExp(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g)


      return str.replace(regex, (index) => {
        let key = index.replace(/{/, "").replace(/}/, "")
        if (!values[key]) {
          return index
        }

        return values[key]
      })
    }

    return str
  }

  /**
   * Generate an unique identifier.
   * @return string
   */
  public static makeId() {
    return String(Math.floor(10000000000 + Math.random() * 9000000000))
  }
}

export default Util