const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const koaServerHttpProxy = require("koa-server-http-proxy");
let app = new Koa();
let router = new Router();
app.use(router.routes());
app.use(static(__dirname + "/static"));
app.use(koaServerHttpProxy('/api',{
    target:"http://10.211.55.3:3000",
    pathRewrite:{"^/api":""}
}));
router.get("/",ctx=>{
    ctx.body = "hello";
})

router.get("/test",ctx=>{
    ctx.body = "test";
})

app.listen(7000);

