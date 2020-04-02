const Koa = require("koa");
const static = require("koa-static");
const Router = require("koa-router");
const koaBody = require("koa-body"); //koa 里用来接收 post和文件的；
let userData = require("./data/users.json");
let app = new Koa();
app.use(static(__dirname+"/static"));
let router = new Router();
app.use(koaBody({
    multipart:true
}))
app.use(router.routes());

router.get("/",ctx=>{
    ctx.body = "qq相册";
})

router.post("/checkName",ctx=>{
    let username = ctx.request.body.username;
    let result = userData.find(v=>v.username===username);
    // console.log(result);
    // ctx.body = "qq相册";
    let res = {
        info:"用户名错误",
        status:1
    }
    if(typeof result !== 'undefined'){
        // 用户名正确
        res = {
            info:"用户名正确",
            status:0
        }
    }
    ctx.body = res;
})


router.post("/checkUser",ctx=>{
    let { username ,pwd } = ctx.request.body;
    // console.log(typeof pwd);
   let res =  userData.find(v=>(v.username===username && v.pwd===parseInt(pwd)));
    // console.log(res); 
    if(typeof res !== 'undefined'){
        // 用户名密码正确
        ctx.cookies.set("uid",res.uid,{
            maxAge:1000*3600*24*7
        })
        ctx.redirect("photo.html");
    }else{
        ctx.redirect("login.html");
    }
     ctx.body = "qq相册";
})

// 接收上传文件
router.post("/upload",ctx=>{
    console.log(ctx.request.files);
    // 转存；
    ctx.body = "qq相册";
})



app.listen(8888);