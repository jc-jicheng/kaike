// proxy 劫持数据
// 1.数据劫持  2.编译； 3. 自定义事件；
class Mvvm extends EventTarget{
    constructor(options){
        super();
        this.options = options;
        this.compile(this.options.el);
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
                _this.dispatchEvent(event);
                target[key] = newValue;
                return true; //修改成功 TRUE；
            }
        })
    }
    compile(el){
        let ele =  document.querySelector(el);
        let childNodes = ele.childNodes;
        console.log(childNodes);
        this.compileNodes(childNodes);
       
    }
    compileNodes(childNodes){
        childNodes.forEach(node=>{
            if(node.nodeType==1){
                // 节点； v-model、v-html
                let attrs = node.attributes;
                // console.log(attrs);
                [...attrs].forEach(attr=>{
                    let attrName = attr.name;
                    let attrValue = attr.value;
                    if(attrName.indexOf("v-")==0){
                        attrName = attrName.substr(2);
                        // console.log(attrName)
                        if(attrName==='html'){
                            node.innerHTML = this.options.data[attrValue];
                        }else if(attrName==="model"){
                            node.value = this.options.data[attrValue];
                            node.addEventListener("input",e=>{
                                this.options.data[attrValue] = e.target.value;
                            })
                        }
                    }
                })
            }else if(node.nodeType==3){
                // 文本
                let reg = /\{\{\s*(\S+)\s*\}\}/;
                let nodeContent = node.textContent;
                let test = reg.test(nodeContent);
                let $1 = RegExp.$1;
                if(test){
                    // node.textContent = this.options.data[$1];
                    // 初次渲染视图；
                    // node.textContent = node.textContent.replace(reg,this.options.data[$1])
                    this.updateView(node,this.options.data[$1],reg);
                    // 再次更新视图
                    this.addEventListener($1,e=>{
                        // console.log(e);
                        // node.textContent = "some value";
                        this.updateView(node,e.detail.value,"",this.options.data[$1]);
                    })

                }
            }
            if(node.childNodes.length>0){
                this.compileNodes(node.childNodes);
            }
        })
    }
    updateView(node,newValue,reg,oldValue){
        if(typeof oldValue === 'undefined'){
            // 初次渲染
            node.textContent = node.textContent.replace(reg,newValue)
        }else{
            // 更新之后渲染视图；
            reg = new RegExp(oldValue);
            node.textContent = node.textContent.replace(reg,newValue);
        }
    }



}