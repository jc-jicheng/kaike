const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
let app = new Koa();
let router = new Router();
app.use(static(__dirname+"/static"));
app.use(router.routes());
router.all("/getData",ctx=>{
    console.log(ctx.request.headers);
    ctx.body = "hello";
})

app.listen(4000);