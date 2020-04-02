class Jq {
    constructor(arg,root) {
        if(typeof root === 'undefined'){
            this.prvObject =  new Jq(document , null);
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
    addElement(eles){
        [...eles].forEach((el, index) => {
            this[index] = el;
        })
    }
    eq(index){
        return new Jq(this[index]);
    }
    get(index){
        return this[index];
    }
    ready(arg) {
        window.addEventListener("DOMContentLoaded", arg, false);
    }
    click(fn) {
        fn();
    }
}

function $(arg) {
    return new Jq(arg);
}

