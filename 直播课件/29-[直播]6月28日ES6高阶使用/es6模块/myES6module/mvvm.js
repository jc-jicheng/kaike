// 数据劫持
// proxy 劫持数据
// 1.数据劫持  2.编译； 3. 自定义事件；
import Compile from './compile.js';
class Mvvm{
    constructor(options){
        this.options = options;
        // this.compile(this.options.el);
        this.EventTarget = new Compile(this.options);
        // 劫持数据 data
        this.observer(this.options.data);
    }
    observer(data){
        let _this = this;
        this.options.data = new Proxy(data,{
            get(target,key){
                return target[key];
            },
            set(target,key,newValue){
                let event = new CustomEvent(key,{
                    detail:{
                        value:newValue
                    }
                })
                _this.EventTarget.dispatchEvent(event);
                target[key] = newValue;
                return true; //修改成功 TRUE；
            }
        })
    }
}
export default Mvvm;