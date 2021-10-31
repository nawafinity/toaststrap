import dayjs from "dayjs";
var hasClass = function (element, className) {
    return element.classList.contains(className);
};
var getHumanTime = function (datetime) {
    return dayjs(datetime).fromNow();
};
export { hasClass, getHumanTime };
//# sourceMappingURL=helpers.js.map