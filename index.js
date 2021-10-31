/*!
 * Bootstrap5-toast v1.0.0
 * https://github.com/twinkble/bootstrap5-toast
 * @license MIT licensed
 *
 * Copyright (C) 2021 nawaf.studio
 */
(function (root, factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.Toastify = factory();
    }
})(this, function (global) {
    const POSITION = {
        TOP_START: 'bs5toast-top ps-3 start-0',
        TOP_END: 'bs5toast-top pe-3 end-0',
        TOP_CENTER: 'bs5toast-center',
        BOTTOM_START: 'bs5toast-bottom ps-3 start-0',
        BOTTOM_END: 'bs5toast-bottom pe-3 end-0',
    }

    class BS5Toaster {
        constructor(options = {}) {
            let id = new Date().getUTCMilliseconds();

            this.defaults = {
                title: '',
                text: '',
                duration: 3000,
                position: POSITION.TOP_END,
                hideHeader: false,
            }

            this.options = {...this.defaults, ...options};

            // Generate unique id
            this.options.id = Math.round(Date.now() + Math.random())


            return this.init();
        }

        /**
         * Initilize toast and get instance.
         */
        init() {

        }

        get #buildHeader() {
            const headerElement = document.createElement("div");
            headerElement.className = 'toast-header';

            headerElement.innerHTML = `
            <strong class="me-auto">${this.options.title}</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close"></button
            `

            return headerElement;
        }

        get #buildBody() {
            const bodyElement = document.createElement('div');
            bodyElement.className = 'toast-body'

            bodyElement.innerHTML = this.options.text

            return bodyElement;
        }

        #buildFooter() {

        }

        get #buildContainer() {
            const containerElement = document.createElement("div");
            containerElement.className = `bs5toast position-fixed ${this.options.position} py-3`;
            containerElement.style['z-index'] = '1070';

            return containerElement;
        }

        get #build() {
            let containerElement = this.#buildContainer;
            let toastElement = document.createElement('div');
            toastElement.className = 'toast show';

            if (!this.options.hideHeader) {
                toastElement.appendChild(this.#buildHeader)
            }

            toastElement.appendChild(this.#buildBody)


            containerElement.appendChild(toastElement)
            return containerElement;
        }

        /**
         * @throws
         * @returns {HTMLElement}
         */
        get #rootElement() {
            let rootElement;
            if (typeof this.options.selector === "string") {
                rootElement = document.getElementById(this.options.selector);
            } else if (this.options.selector instanceof HTMLElement || (typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot)) {
                rootElement = this.options.selector;
            } else {
                rootElement = document.body;
            }

            // Validating if root element is present in DOM
            if (!rootElement) {
                throw "Root element is not defined";
            }

            return rootElement
        }

        /**
         * Show toast
         */
        show() {
            const toast = this.#build;
            const root = this.#rootElement;

            root.insertBefore(toast, root.firstChild)

            this.#reposition();
        }

        #reposition() {
            var topLeftOffsetSize = {
                top: 15,
                bottom: 15,
            };
            var topRightOffsetSize = {
                top: 15,
                bottom: 15,
            };
            var offsetSize = {
                top: 15,
                bottom: 15,
            };

            // Get all toast messages on the DOM
            var allToasts = document.getElementsByClassName("bs5toast");

            var classUsed;

            // Modifying the position of each toast element
            for (var i = 0; i < allToasts.length; i++) {
                // Getting the applied gravity
                if (BS5Toaster.#containsClass(allToasts[i], "bs5toast-top") === true) {
                    classUsed = "bs5toast-top";
                } else {
                    classUsed = "bs5toast-bottom";
                }

                var height = allToasts[i].offsetHeight;
                classUsed = classUsed.substr(9, classUsed.length - 1)
                // Spacing between toasts
                var offset = 15;

                var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

                // Show toast in center if screen with less than or equal to 360px
                if (width <= 360) {
                    // Setting the position
                    allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

                    offsetSize[classUsed] += height + offset;
                } else {
                    if (BS5Toaster.#containsClass(allToasts[i], "bs5toast-left") === true) {
                        // Setting the position
                        allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

                        topLeftOffsetSize[classUsed] += height + offset;
                    } else {
                        // Setting the position
                        allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

                        topRightOffsetSize[classUsed] += height + offset;
                    }
                }
            }

            // Supporting function chaining
            return this;
        }

        static #containsClass(elem, yourClass) {
            if (!elem || typeof yourClass !== "string") {
                return false;
            } else if (
                elem.className &&
                elem.className
                    .trim()
                    .split(/\s+/gi)
                    .indexOf(yourClass) > -1
            ) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Return position enumeration
         */
        static get position() {
            return POSITION;
        }
    }

    // Returning the Toastify function to be assigned to the window object/module
    return BS5Toaster;
});
