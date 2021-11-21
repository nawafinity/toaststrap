var RelativeDate = /** @class */ (function () {
    function RelativeDate(input, reference) {
        this.times = {
            SECOND: 1000,
            MINUTE: 60 * 1000,
            HOUR: 60 * 60 * 1000,
            DAY: 24 * 60 * 60 * 1000,
            WEEK: 7 * 24 * 60 * 60 * 1000,
            YEAR: 365 * 24 * 60 * 60 * 1000,
            MONTH: (365 * 24 * 60 * 60 * 1000) / 12,
        };
        this.formats = [
            [0.7 * this.times.MINUTE, "just now"],
            [1.5 * this.times.MINUTE, "a minute ago"],
            [60 * this.times.MINUTE, "minutes ago", this.times.MINUTE],
            [1.5 * this.times.HOUR, "an hour ago"],
            [this.times.DAY, "hours ago", this.times.HOUR],
            [2 * this.times.DAY, "yesterday"],
            [7 * this.times.DAY, "days ago", this.times.DAY],
            [1.5 * this.times.WEEK, "a week ago"],
            [this.times.MONTH, "weeks ago", this.times.WEEK],
            [1.5 * this.times.MONTH, "a month ago"],
            [this.times.YEAR, "months ago", this.times.MONTH],
            [1.5 * this.times.YEAR, "a year ago"],
            [Number.MAX_VALUE, "years ago", this.times.YEAR],
        ];
        this.input = input;
        this.reference = reference;
        if (!reference) {
            this.reference = (new Date()).getTime();
        }
        else if (reference instanceof Date) {
            this.reference = reference.getTime();
        }
        if (input instanceof Date) {
            this.input.getTime();
        }
        if (typeof input === "string") {
            this.input = +new Date(input).getTime();
        }
        return this;
    }
    RelativeDate.prototype.print = function () {
        var delta = this.reference - this.input;
        var format;
        var index;
        var length;
        for (index = -1, length = this.formats.length; ++index < length;) {
            format = this.formats[index];
            if (delta < format[0]) {
                return format[2] == undefined ? format[1] : Math.round(delta / format[2]) + " " + format[1];
            }
        }
        return "Unknown";
    };
    return RelativeDate;
}());
export default RelativeDate;
//# sourceMappingURL=RelativeDate.js.map