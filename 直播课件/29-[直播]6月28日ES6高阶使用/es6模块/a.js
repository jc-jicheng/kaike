console.log("a模块。。。");
let a = "a变量";


// export default a;export { a as default }   //export default自定导出一个； 导入自定义
export let b = "b变量";  //多个  导入 预定义；
export let c  = "c变量";
export {a as aa};



