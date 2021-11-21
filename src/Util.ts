class Util {
  public static strFormat(str: string, values: object): string {
    if (str && Object.keys(values).length > 0) {
      const regex = new RegExp(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g)


      return str.replace(regex, (index) => {
        console.log(index)
        let key = index.replace(/{/, "").replace(/}/, "")
        if (!values[key]) {
          return index
        }

        return values[key]
      })
    }

    return str
  }
}

export default Util