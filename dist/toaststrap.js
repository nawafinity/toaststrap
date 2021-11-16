var Toaststrap;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/***/ (function(module) {

!function(r,e){ true?module.exports=e():0}(this,(function(){"use strict";return function(r,e,t){r=r||{};var n=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(r,e,t,o){return n.fromToBase(r,e,t,o)}t.en.relativeTime=o,n.fromToBase=function(e,n,i,d,u){for(var f,a,s,l=i.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,c=0;c<m;c+=1){var y=h[c];y.d&&(f=d?t(e).diff(i,y.d,!0):i.diff(e,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(f));if(s=f>0,p<=y.r||!y.r){p<=1&&c>0&&(y=h[c-1]);var v=l[y.l];u&&(p=u(""+p)),a="string"==typeof v?v.replace("%d",p):v(p,n,y.l,s);break}}if(n)return a;var M=s?l.future:l.past;return"function"==typeof M?M(a):M.replace("%s",a)},n.to=function(r,e){return i(r,e,this,!0)},n.from=function(r,e){return i(r,e,this)};var d=function(r){return r.$u?t.utc():t()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)}}}));

/***/ }),

/***/ "./src/assets/styles.scss":
/*!********************************!*\
  !*** ./src/assets/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ToastFactory.ts":
/*!*****************************!*\
  !*** ./src/ToastFactory.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prefrences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prefrences */ "./src/prefrences.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _support_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./support/header */ "./src/support/header.ts");
/* harmony import */ var _support_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support/body */ "./src/support/body.ts");
/* harmony import */ var _support_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support/container */ "./src/support/container.ts");
/* harmony import */ var _support_sound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support/sound */ "./src/support/sound.ts");
/* harmony import */ var _support_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./support/progress */ "./src/support/progress.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};










dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default()));
var ToastFactory = /** @class */ (function () {
    /**
     *
     * @param {OptionsType} options
     */
    function ToastFactory(options) {
        var _this = this;
        /**
         * Event to close toast.
         *
         * @return {void}
         */
        this.CloseEvent = function () {
            _this.destroy(_this.item);
        };
        this.options = __assign({ avatar: undefined, datetime: undefined, dismissible: true, duration: 3000, noHeader: false, onCloseCallBack: function () {
            }, parent: "", pausable: false, position: "", progress: false, soundSource: "", soundable: false, space: 0, subtitle: "", text: "", title: "", type: undefined }, options);
        if (this.options.duration > 0) {
            this.options.duration = this.options.duration * 1000;
        }
        this.group = this.options.position || _prefrences__WEBPACK_IMPORTED_MODULE_2__.POSITION.TOP_END;
        if (Object.keys(_prefrences__WEBPACK_IMPORTED_MODULE_2__.POSITION).includes(this.options.position)) {
            this.options.position = _prefrences__WEBPACK_IMPORTED_MODULE_2__["default"].positions[this.options.position];
        }
        else {
            this.options.position = _prefrences__WEBPACK_IMPORTED_MODULE_2__["default"].positions.TOP_END;
        }
        this.item = document.createElement("div");
        this.spaceBetween = 5;
        if (this.options.soundable && this.options.soundSource && this.options.soundSource.length > 0) {
            this.sound = new _support_sound__WEBPACK_IMPORTED_MODULE_7__["default"](this.options.soundSource, this.parentElement);
        }
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])();
        this.createdAt = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().toString();
        this.timeout = setTimeout(function () {
        }, 0);
        this.progressInterval = setInterval(function () {
        }, 0);
        this.pauseProgressInterval = false;
        this.progressStartTime = 0;
    }
    /**
     * Display toast to user.
     *
     * @returns {this}
     */
    ToastFactory.prototype.show = function () {
        var root = this.parentElement;
        var toast = this.build;
        root.insertBefore(toast, root.firstChild);
        // Play sound if it's allowed.
        if (this.sound) {
            this.sound.instance.play().catch(function () {
                console.warn("Sound source given not found or not supported.");
            });
        }
        // Order toasts.
        this.organize();
        return this;
    };
    Object.defineProperty(ToastFactory.prototype, "build", {
        /**
         * Build toast element.
         *
         * @returns {HTMLElement}
         */
        get: function () {
            var _a;
            var _this = this;
            // Container Element
            var container = (0,_support_container__WEBPACK_IMPORTED_MODULE_6__.ToastContainer)(this);
            // Toast Element
            var toastElement = document.createElement("div");
            toastElement.classList.add("toast");
            container.setAttribute("data-id", this.id);
            container.setAttribute("data-created-at", this.createdAt);
            container.setAttribute("data-type", this.options.type ? this.options.type.toLowerCase() : "");
            container.setAttribute("data-group", this.group);
            // Toast Header (only if option hideHeader is set to false).
            if (!Boolean(this.options.noHeader)) {
                toastElement.appendChild((0,_support_header__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent)(this));
            }
            else {
                (_a = toastElement.classList).add.apply(_a, _prefrences__WEBPACK_IMPORTED_MODULE_2__["default"].types[this.options.type]);
            }
            // Toast Body
            toastElement.appendChild((0,_support_body__WEBPACK_IMPORTED_MODULE_5__.ToastBody)(this));
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.toBoolean)(this.options.progress)) {
                // Toast Progress
                toastElement.appendChild((0,_support_progress__WEBPACK_IMPORTED_MODULE_8__.ProgressComponent)(this));
            }
            // Put toast into it's container.
            container.appendChild(toastElement);
            // Watch toast height changed, and re-order if happen.
            new ResizeObserver(function () {
                _this.organize();
            }).observe(container);
            // Toast instance.
            this.item = container;
            // Show the toast by adding class (.show)
            container.classList.add("show");
            if (this.options.duration > 0) {
                this.timeout = setTimeout(function () {
                    _this.destroy(container);
                }, this.options.duration);
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.toBoolean)(this.options.pausable)) {
                    var touchStartCallBack_1 = function () {
                        clearTimeout(_this.timeout);
                        _this.pauseProgressInterval = true;
                    };
                    var touchEndCallBack_1 = function () {
                        _this.pauseProgressInterval = false;
                        _this.progressStartTime = new Date().getTime();
                        _this.timeout = setTimeout(function () {
                            _this.destroy(_this.item);
                        }, _this.options.duration);
                    };
                    "mouseover touchstart touchend".split(" ").forEach(function (e) {
                        _this.item.addEventListener(e, touchStartCallBack_1);
                    });
                    "mouseleave touchend".split(" ").forEach(function (e) {
                        _this.item.addEventListener(e, touchEndCallBack_1);
                    });
                }
            }
            // Return toast instance.
            return container;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToastFactory.prototype, "parentElement", {
        /**
         *
         * @returns {Element}
         */
        get: function () {
            if (this.options.parent) {
                var userRootElement = document.querySelector(this.options.parent);
                if (!userRootElement) {
                    throw "User root element not exists.";
                }
                if (Array.isArray(userRootElement)) {
                    return userRootElement[0];
                }
                return userRootElement;
            }
            return document.body;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Remove the element from dom after timeout finished.
     */
    ToastFactory.prototype.destroy = function (toastElement) {
        // Hide the element.
        toastElement.classList.remove("show");
        if (typeof this.options.onCloseCallBack === "function") {
            this.options.onCloseCallBack();
        }
        window.setTimeout(function () {
            var _a;
            (_a = toastElement.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(toastElement);
        }, 400);
    };
    ToastFactory.prototype.organize = function () {
        var _this = this;
        var space = this.options.space;
        var topLeftOffsetSize = {
            top: Number(space),
            bottom: Number(space),
        };
        var topRightOffsetSize = {
            top: Number(space),
            bottom: Number(space),
        };
        var offsetSize = {
            top: Number(space),
            bottom: Number(space),
        };
        var selector = "." + (0,_prefrences__WEBPACK_IMPORTED_MODULE_2__.gclass)("container") + "[data-group='" + this.group + "']";
        var windowWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (windowWidth <= 360) {
            selector = "." + (0,_prefrences__WEBPACK_IMPORTED_MODULE_2__.gclass)("container");
        }
        var toasts = document.querySelectorAll(selector);
        var classUsed;
        if (toasts.length > 0) {
            toasts.forEach(function (toast) {
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.hasClass)(toast, (0,_prefrences__WEBPACK_IMPORTED_MODULE_2__.gclass)("top"))) {
                    classUsed = (0,_prefrences__WEBPACK_IMPORTED_MODULE_2__.gclass)("top");
                }
                else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.hasClass)(toast, (0,_prefrences__WEBPACK_IMPORTED_MODULE_2__.gclass)("middle"))) {
                    classUsed = (0,_prefrences__WEBPACK_IMPORTED_MODULE_2__.gclass)("middle");
                }
                else {
                    classUsed = (0,_prefrences__WEBPACK_IMPORTED_MODULE_2__.gclass)("bottom");
                }
                var toastHeight = toast.offsetHeight;
                classUsed = classUsed.substr((_prefrences__WEBPACK_IMPORTED_MODULE_2__.cprefix + "-").length - 1, classUsed.length - 1);
                // Show toast in center if screen with less than or equal to 360px.
                if (windowWidth <= 360) {
                    toast.style[classUsed] = offsetSize[classUsed] + "px";
                    offsetSize[classUsed] += toastHeight + _this.spaceBetween;
                }
                else {
                    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.hasClass)(toast, "start-" + _this.options.space)) {
                        toast.style[classUsed] = topLeftOffsetSize[classUsed] + "px";
                        topLeftOffsetSize[classUsed] += toastHeight + _this.spaceBetween;
                    }
                    else {
                        toast.style[classUsed] = topRightOffsetSize[classUsed] + "px";
                        topRightOffsetSize[classUsed] += toastHeight + _this.spaceBetween;
                    }
                }
            });
        }
    };
    return ToastFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastFactory);


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "getHumanTime": () => (/* binding */ getHumanTime),
/* harmony export */   "toBoolean": () => (/* binding */ toBoolean)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

var hasClass = function (element, className) {
    return element.classList.contains(className);
};
var getHumanTime = function (datetime) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(datetime).fromNow();
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



/***/ }),

/***/ "./src/prefrences.ts":
/*!***************************!*\
  !*** ./src/prefrences.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cprefix": () => (/* binding */ cprefix),
/* harmony export */   "gclass": () => (/* binding */ gclass),
/* harmony export */   "POSITION": () => (/* binding */ POSITION),
/* harmony export */   "TYPES": () => (/* binding */ TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var cprefix = "toaststrap-";
function gclass(c) {
    return cprefix + c;
}
var POSITION;
(function (POSITION) {
    POSITION["TOP_START"] = "TOP_START";
    POSITION["TOP_END"] = "TOP_END";
    POSITION["TOP_CENTER"] = "TOP_CENTER";
    POSITION["BOTTOM_START"] = "BOTTOM_START";
    POSITION["BOTTOM_END"] = "BOTTOM_END";
    POSITION["BOTTOM_CENTER"] = "BOTTOM_CENTER";
})(POSITION || (POSITION = {}));
var TYPES;
(function (TYPES) {
    TYPES["DEFAULT"] = "DEFAULT";
    TYPES["PRIMARY"] = "PRIMARY";
    TYPES["INFO"] = "INFO";
    TYPES["SUCCESS"] = "SUCCESS";
    TYPES["WARNING"] = "WARNING";
    TYPES["DANGER"] = "DANGER";
    TYPES["DARK"] = "DARK";
    TYPES["SWEET"] = "SWEET";
})(TYPES || (TYPES = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    positions: {
        // TOP
        TOP_START: gclass("top") + " " + gclass("start"),
        TOP_END: gclass("top") + " " + gclass("end"),
        TOP_CENTER: gclass("top") + " " + gclass("center"),
        // Bottom
        BOTTOM_CENTER: gclass("bottom") + " " + gclass("center"),
        BOTTOM_START: gclass("bottom") + " " + gclass("start"),
        BOTTOM_END: gclass("bottom") + " " + gclass("end"),
    },
    types: {
        DEFAULT: ["bg-default"],
        PRIMARY: ["bg-primary", "text-light"],
        INFO: ["bg-info", "text-light"],
        SUCCESS: ["bg-success", "text-light"],
        WARNING: ["bg-warning", "text-dark"],
        DANGER: ["bg-danger", "text-light"],
        DARK: ["bg-dark", "text-light"],
        // Hehehehe this types provided by me <3
        SWEET: ["bg-sweet", "text-light"],
    },
});


/***/ }),

/***/ "./src/support/body.ts":
/*!*****************************!*\
  !*** ./src/support/body.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastBody": () => (/* binding */ ToastBody)
/* harmony export */ });
var ToastBody = function (context) {
    var options = context.options;
    var bodyElement = document.createElement("div");
    bodyElement.classList.add("toast-body");
    bodyElement.innerHTML = options.text;
    return bodyElement;
};


/***/ }),

/***/ "./src/support/container.ts":
/*!**********************************!*\
  !*** ./src/support/container.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastContainer": () => (/* binding */ ToastContainer)
/* harmony export */ });
/* harmony import */ var _prefrences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prefrences */ "./src/prefrences.ts");

var ToastContainer = function (context) {
    var options = context.options;
    var containerElement = document.createElement("div");
    containerElement.className = (context.options.parent ? "position-absolute" : "position-fixed") + " " + options.position + "-" + options.space + " " + (0,_prefrences__WEBPACK_IMPORTED_MODULE_0__.gclass)("container");
    containerElement.style.zIndex = "2500";
    return containerElement;
};


/***/ }),

/***/ "./src/support/header.ts":
/*!*******************************!*\
  !*** ./src/support/header.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/* harmony import */ var _prefrences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prefrences */ "./src/prefrences.ts");


var AvatarComponent = function (options) {
    var avatarElement = document.createElement("img");
    avatarElement.classList.add("rounded", "me-2");
    avatarElement.src = options.avatar || "";
    avatarElement.width = 20;
    avatarElement.height = 20;
    return avatarElement;
};
var CloseButtonComponent = function (onCloseEvent) {
    var closeBtnElement = document.createElement("button");
    closeBtnElement.classList.add("btn-close");
    closeBtnElement.setAttribute("type", "button");
    closeBtnElement.setAttribute("area-label", "Close");
    closeBtnElement.addEventListener("click", function (evt) {
        evt.stopPropagation();
        onCloseEvent();
    });
    return closeBtnElement;
};
var HeaderComponent = function (context) {
    var _a;
    var options = context.options;
    var headerElement = document.createElement("div");
    headerElement.classList.add("toast-header");
    // Avatar element
    if (options.avatar) {
        headerElement.appendChild(AvatarComponent(options));
    }
    if (options.type) {
        (_a = headerElement.classList).add.apply(_a, _prefrences__WEBPACK_IMPORTED_MODULE_1__["default"].types[options.type]);
    }
    // Create title element.
    var titleElement = document.createElement("strong");
    titleElement.classList.add("me-auto");
    titleElement.innerText = options.title;
    headerElement.appendChild(titleElement);
    if (options.datetime) {
        // time
        var timeElement = document.createElement("small");
        timeElement.innerText = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getHumanTime)(options.datetime);
        headerElement.appendChild(timeElement);
    }
    // Close button
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(options.dismissible)) {
        headerElement.appendChild(CloseButtonComponent(context.CloseEvent));
    }
    // Return header element.
    return headerElement;
};


/***/ }),

/***/ "./src/support/progress.ts":
/*!*********************************!*\
  !*** ./src/support/progress.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressComponent": () => (/* binding */ ProgressComponent)
/* harmony export */ });
var ProgressComponent = function (factory) {
    var duration = factory.options.duration;
    var progressElement = document.createElement("div");
    progressElement.classList.add("toast-footer");
    var indicatorElement = document.createElement("div");
    indicatorElement.classList.add("toast-footer-inner");
    progressElement.appendChild(indicatorElement);
    var start = function () {
        factory.progressStartTime = new Date().getTime();
        if (duration > 0) {
            factory.progressInterval = setInterval(function () {
                if (!factory.pauseProgressInterval) {
                    var diff = Math.round(new Date().getTime() - factory.progressStartTime);
                    var value = Math.round(diff / duration * 100);
                    value = value > 100 ? 100 : value;
                    indicatorElement.style.width = value + "%";
                    if (diff >= duration) {
                        clearInterval(factory.progressInterval);
                    }
                }
            }, 100);
        }
    };
    // Start progress
    start();
    return progressElement;
};


/***/ }),

/***/ "./src/support/sound.ts":
/*!******************************!*\
  !*** ./src/support/sound.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prefrences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prefrences */ "./src/prefrences.ts");

var Sound = /** @class */ (function () {
    function Sound(audioFile, parentElement) {
        this.selector = _prefrences__WEBPACK_IMPORTED_MODULE_0__.cprefix + "-notification";
        this.element = new Audio(audioFile);
        this.parent = parentElement;
        this.make();
        return this;
    }
    Sound.prototype.make = function () {
        this.element.id = this.selector;
        if (!this.parent.querySelector("#" + this.selector)) {
            this.parent.appendChild(this.element);
        }
    };
    Object.defineProperty(Sound.prototype, "instance", {
        get: function () {
            return this.element;
        },
        enumerable: false,
        configurable: true
    });
    return Sound;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sound);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/browser.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prefrences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefrences */ "./src/prefrences.ts");
/* harmony import */ var _ToastFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastFactory */ "./src/ToastFactory.ts");
/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles.scss */ "./src/assets/styles.scss");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var initialize = function (options) {
    return new _ToastFactory__WEBPACK_IMPORTED_MODULE_1__["default"](__assign({}, options));
};
// Window
window.toaststrap = initialize;
window.toaststrap_position = _prefrences__WEBPACK_IMPORTED_MODULE_0__.POSITION;
window.toaststrap_type = _prefrences__WEBPACK_IMPORTED_MODULE_0__.TYPES;

})();

Toaststrap = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=toaststrap.js.map