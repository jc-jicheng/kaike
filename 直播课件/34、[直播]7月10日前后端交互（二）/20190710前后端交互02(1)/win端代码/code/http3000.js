const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const koaBody = require("koa-body");
let app = new Koa();
app.use(koaBody({
    multipart:true
}))
let newsData = require("./data/news.json");
let router = new Router();
app.use(static(__dirname+"/static"));

app.use(router.routes());
router.all("/getData3000",ctx=>{
    console.log("some request...");
    ctx.set("Access-Control-Allow-Origin","http://192.168.80.223:4000");
    ctx.set('Access-Control-Allow-Credentials',true); //1.服务端允许带凭证；上面允许的域名不能是所有；2.cookie设置也要通过ajax；
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.set("Access-Control-Expose-Headers","Access-Control-Allow-Methods,Access-Control-Allow-Origin");
    ctx.set("Access-Control-Allow-Headers","content-type");
    ctx.set("Access-Control-Max-Age",3600);
    console.log(ctx.request.headers);
    ctx.body = "hello3000";
    //ctx.body = "var a = 10";
})
router.all("/setCookie3000",ctx=>{
    // console.log(ctx.request.headers);
    ctx.set("Access-Control-Allow-Origin","http://192.168.80.223:4000");
    ctx.set('Access-Control-Allow-Credentials',true);
    ctx.cookies.set("cookieName3000","someValue3000",{
        maxAge:1000*3600*24,
        httpOnly:false
    });
    ctx.body = "设置cookie";
})

router.all("/getApi",ctx=>{
    // console.log(ctx.request.headers);
    ctx.body = {
        name:"张三",
        age:20
    }
})


router.all("/getNewsData",ctx=>{
    // console.log(ctx.request.headers);
    ctx.body = newsData;
})
///api/news---> /news
router.all("/news",ctx=>{
    // console.log(ctx.request.headers);
    console.log(ctx.request.body);
    console.log(ctx.request.files);

    ctx.body = "something...";
})
app.listen(3000);