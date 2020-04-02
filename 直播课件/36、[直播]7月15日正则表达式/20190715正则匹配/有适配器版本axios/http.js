const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const koaBody = require("koa-body");
let app = new Koa();

let router = new Router();
app.use(koaBody({
    multipart:true
}))
app.use(static(__dirname+"/static"))
app.use(router.routes());
router.get("/",ctx=>{
    ctx.body = "hello";
});
router.all("/fetch",ctx=>{
    ctx.body = {
        name:"张三",
        age:20
    };
});
router.all("/fetchPost",ctx=>{
    console.log(ctx.request.body);
    ctx.body = {
       info:"post数据",
       status:0
    };
});

router.all("/axios",ctx=>{
    console.log(ctx.query);
    ctx.body = {
        name:"axios",
        age:30
    };
});

router.all("/axiosPost",ctx=>{
    console.log(ctx.request.body);
    ctx.body = {
        name:"axiospost",
        age:20
    };
});
app.listen(8886);