var Util = /** @class */ (function () {
    function Util() {
    }
    Util.strFormat = function (str, values) {
        if (str && Object.keys(values).length > 0) {
            var regex = new RegExp(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g);
            return str.replace(regex, function (index) {
                var key = index.replace(/{/, "").replace(/}/, "");
                if (!values[key]) {
                    return index;
                }
                return values[key];
            });
        }
        return str;
    };
    Util.makeId = function () {
        return String(Math.floor(10000000000 + Math.random() * 9000000000));
    };
    return Util;
}());
export default Util;
//# sourceMappingURL=Util.js.map