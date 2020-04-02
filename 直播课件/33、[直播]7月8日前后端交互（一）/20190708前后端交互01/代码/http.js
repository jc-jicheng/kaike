const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const koaBody = require("koa-body");
let app = new Koa();
app.use(static(__dirname+"/static"));
let router = new Router();
app.use(koaBody({
    multipart:true
}))
app.use(router.routes());
router.get("/",ctx=>{
    ctx.body = "hello";
})
router.get("/ajax",ctx=>{
    ctx.body = "world";
})
router.post("/post",ctx=>{
    console.log(ctx.request.body);
    ctx.body = {
        name:"李四",
        age:25
    };
})
router.post("/xml",ctx=>{
    // ctx.set("content-type","application/xml");
    ctx.body = `<?xml version="1.0" encoding="utf-8" ?>
                <books>
                     <nodejs>
                        <price>$24</price>
                        <name>nodejs从入门到实战</name>
                     </nodejs>
                     <vuejs>
                       <price>$12</price>
                       <name>vue实战项目</name>
                     </vuejs>
                </books>
            `;
})
router.post("/getData",ctx=>{
    console.log(ctx.request.body);
    ctx.body = {
        name:"王二",
        age:26
    };
})


app.listen(3000);