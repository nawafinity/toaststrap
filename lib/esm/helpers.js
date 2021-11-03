import dayjs from "dayjs";
var hasClass = function (element, className) {
    return element.classList.contains(className);
};
var getHumanTime = function (datetime) {
    return dayjs(datetime).fromNow();
};
/**
 * Quick fix of boolean
 * @see https://stackoverflow.com/questions/44024193/typescript-string-to-boolean
 */
var toBoolean = function (value) {
    if (typeof value === "boolean") {
        return value;
    }
    if (!value) {
        //Could also throw an exception up to you
        return false;
    }
    switch (value.toLocaleLowerCase()) {
        case "true":
        case "1":
        case "on":
        case "yes":
            return true;
        default:
            return false;
    }
};
export { hasClass, getHumanTime, toBoolean };
//# sourceMappingURL=helpers.js.map