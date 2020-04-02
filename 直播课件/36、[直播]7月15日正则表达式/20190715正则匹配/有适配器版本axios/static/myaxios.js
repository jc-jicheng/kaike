// 工具对象；
let util = {
    buildUrl(params, url) {
        if (typeof params !== 'undefined') {
            let keys = Object.keys(params);
            let values = Object.values(params);
            //   {name:zhangsan,age:20}  --> name=zhangsan&age=20
            url = url + "?" + keys.map((v, k) => {
                return v + "=" + values[k];
            }).join("&")
        }
        return url;
    },
    //请求数据进行处理
    transformRequest(data){
        return JSON.stringify(data);
    },
    transformResponse(data) {
        if (typeof data === 'string') {
            try {
                data = JSON.parse(data)
            } catch (e) {
                console.log(e);
            }
        }
        return data;
    },
    //处理头部
    parseHeaders(headers) {
        let headerobj = {};
        let headerArr = headers.split("\r\n");
        // console.log(headerArr);
        headerArr.forEach(v => {
            let line = v.split(": ");
            // console.log(line);
            if (line[0]) {
                headerobj[line[0]] = line[1];
            }
        })
        // console.log(headerobj);
        return headerobj;
    },
    // 混入模式 
    extends(a,b,context){
        for(let key in b){
            if(b.hasOwnProperty(key)){
                if(context && typeof b[key] === 'function'){
                    a[key] = b[key].bind(context);
                }else{
                    a[key] = b[key];
                }
            }
        }
    }

}


class Axios {
    constructor(config) {
        this.config = config;
        // this.request();
        this.interceptors = {
             request: new InterceptorManager(),
             response:new InterceptorManager()
        }
        this.adapters = new Adapters(config);
    }

    request(config) {
        this.config = config;
        // 拦截器队列；
        // 之前执行 requset --》ajax-->response拦截器；
        let chain = [this.dispatchXhr.bind(this),undefined];
        var promise = Promise.resolve(this.config);
        this.interceptors.request.handlers.forEach(interceptor=>{
            chain.unshift(interceptor.fulfilled,interceptor.rejected);
        })
        this.interceptors.response.handlers.forEach(interceptor=>{
            chain.push(interceptor.fulfilled,interceptor.rejected);
        })
        while(chain.length>0){
          promise =  promise.then(chain.shift(),chain.shift())
        }
        // promise.then(res=>{
        //     console.log(res);
        // });
        // console.log(chain);
        return promise;
    }
    //触发网络请求
    dispatchXhr(config){
        //判断应该发送ajax 还是 代理；（判断是node环境还是浏览器环境）；
        if(typeof process !=='undefined' && Object.prototype.toString.call(process)=== '[object process]'){
            console.log("服务端");
            // 触发代理
          return  this.adapters.http(this.config);
        }else if (typeof XMLHttpRequest !== 'undefined'){
            //浏览器端
            console.log("客户端");
          return this.adapters.xhr(this.config);
        }
    }
}

//适配器：发送不同请求  ---》 node 代理请求   浏览器  ajax（xmlhttprequest）；
class Adapters{
    constructor(config){
        this.config = config;
    }
    // 客户端请求
    xhr(config) {
        //客户端请求； 
        return new Promise((reslove, reject) => {
            let xhr = new XMLHttpRequest();
            let { url, method = "get", headers = {}, data = null, params } = config;
            // get ;
            url = util.buildUrl(params, url);
            Object.keys(headers).forEach(name => {
                xhr.setRequestHeader(name, headers[name]);
            })
            data = util.transformRequest(data);
            xhr.open(method.toLowerCase(), url, true);
            xhr.onload = function () {
                let response = {
                    config: config,
                    data: util.transformResponse(xhr.responseText),
                    headers: util.parseHeaders(xhr.getAllResponseHeaders()),
                    requset: xhr,
                    status: xhr.status,
                    statusText: xhr.statusText
                }
                reslove(response);
            }
            xhr.onerror = function () {
                reject(new Error("NetWork Error..."));
            }
            xhr.send(data);
        })
    }
    // 服务端代理
    http(config){
        return new Promise((resolve,reject)=>{
            const http = require("http");
            const url = require("url");
            console.log(config.url);
            let urlObj = url.parse(config.url,true);
            console.log(urlObj);
            // http://locahost:3000/axios/
            let opt = {
                host:urlObj.hostname,
                path:urlObj.path,
                port:urlObj.port
            }
            console.log(opt)
            let request = http.request(opt,res=>{
                let str = "";
                res.on("data",chunk=>{
                    str += chunk;
                })
                res.on("end",()=>{
                    resolve(JSON.parse(str.toString()));
                })
            })
            request.end();
        })
    }

}



//拦截器管理器
class InterceptorManager {
    constructor() {
        this.handlers = [];
    }
    use(fulfilled, rejected) {
        this.handlers.push({
            fulfilled: fulfilled,  //成功回调
            rejected: rejected  //失败回调
        });
    }
}



let methodArr = ["get", "put", "post", "head", "options"];
methodArr.forEach(method => {
    Axios.prototype[method] = function(url,data,config={}){
        config.url = url;
        config.method = method;
        if(method.toLocaleLowerCase()==="get"){
            config.params = data;
        }else if(method.toLocaleLowerCase()==="post"){
            config.data = data;
        }
      return this.request(config);
    }
})



function createInstance(config) {
    let context = new Axios(config);
    // console.log(context);
    let instance = context.request.bind(context);
    // 混入模式
    // 混属性；
    util.extends(instance,context);
    // 混方法
    util.extends(instance,Axios.prototype,context)
    // console.dir(instance)
    return instance;
}


var axios = createInstance();
axios.create = function(config){
    return createInstance(config);
}
console.log(axios);
if(typeof process !=='undefined' && Object.prototype.toString.call(process)=== '[object process]'){
    module.exports = axios;
}