class Jq {
    constructor(arg, root) {
        if (typeof root === 'undefined') {
            // 没有上次操作结果；
            this.prevObject = new Jq(document, null);
        }
        if (root) {
            // 有
            this.prevObject = root;
        }
        // 处理传入的参数；
        if (typeof arg === "function") {
            // 函数
            this.ready(arg);
        } else if (typeof arg === "string") {
            // 字符串
            let eles = document.querySelectorAll(arg);
            this.addElement(eles);
            this.length = eles.length;
        } else {
            // 原生对象；
            if (typeof arg.length !== 'undefined') {
                // 循环绑定到this上
                this.addElement(arg);
                this.length = arg.length;
            } else {
                this[0] = arg;
                this.length = 1;
            }
        }
    }
    addElement(eles) {
        [...eles].forEach((el, index) => {
            this[index] = el;
        })
    }
    eq(index) {
        return new Jq(this[index], this);
    }
    get(index) {
        return this[index];
    }
    end() {
        return this.prevObject;
    }
    ready(arg) {
        window.addEventListener("DOMContentLoaded", arg, false);
    }
    click(fn) {
        for (let i = 0; i < this.length; i++) {
            this[i].addEventListener("click", fn, false);
        }
    }
    on(eventName, fn) {
        let reg = /\s+/g;
        eventName = eventName.replace(reg, " ");
        let arr = eventName.split(" ");
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                this[i].addEventListener(arr[j], fn, false);
            }
        }
    }
    css() {
        // 隐藏参数arguments
        if (arguments.length == 1) {
            // 一个参数  ：  1.字符串 2 对象
            if (typeof arguments[0] === 'string') {
                // 返还样式；
                return this.getStyle(arguments[0], this[0]);
            } else {
                // 对象传入；
                for (let i = 0; i < this.length; i++) {
                    for (let j in arguments[0]) {
                        this.setStyle(this[i], j, arguments[0][j]);
                    }
                }
            }
        } else {
            // 2个参数；
            for (let i = 0; i < this.length; i++) {
                this.setStyle(this[i], arguments[0], arguments[1]);
            }
        }
        return this;
    }
    getStyle(styleName, elem) {
        // 获取样式
        return window.getComputedStyle(elem, null)[styleName];
    }
    setStyle(elem, styleName, styleValue) {
        if (typeof styleValue === "number" && !(styleName in $.cssNumber )) {
            styleValue = styleValue + "px";
        }
        elem.style[styleName] = styleValue;
    }
}

function $(arg) {
    return new Jq(arg);
}

$.cssNumber = {
    animationIterationCount: true,
    columnCount: true,
    fillOpacity: true,
    flexGrow: true,
    flexShrink: true,
    fontWeight: true,
    gridArea: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnStart: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowStart: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    widows: true,
    zIndex: true,
    zoom: true
}

