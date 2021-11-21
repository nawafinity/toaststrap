var hasClass = function (element, className) {
    return element.classList.contains(className);
};
var generateId = function () {
    return String(Math.floor(10000000000 + Math.random() * 9000000000));
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
export { hasClass, toBoolean, generateId };
//# sourceMappingURL=helpers.js.map