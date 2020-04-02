let myaxios = require("./static/myaxios");
// console.log(myaxios);
myaxios.get("http://localhost:8889/axios").then(res=>{
    console.log("---",res);
})