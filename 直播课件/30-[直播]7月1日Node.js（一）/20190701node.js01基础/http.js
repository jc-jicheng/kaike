const http = require("http");
// 模块 commonjs 规范 内置模块；
const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html;charset=utf-8;name=zhangsan");
    res.write("hello 你好1111");
    res.end();
})
server.listen(4000);