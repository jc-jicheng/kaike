const Koa = require("koa");
const static = require("koa-static");
const koaBody = require("koa-body");
const Router = require("koa-router");
const fs = require("fs");
const users = require("./data/users.json");
const images = require("./data/images.json");
const app = new Koa();
let router = new Router();
app.use(koaBody({
    multipart: true, // 支持文件上传
}));
app.use(static(__dirname + "/static"));
router.get("/", (ctx, next) => {
    ctx.body = "hello world";
})
router.all("/upload", (ctx, next) => {
    fs.createReadStream(ctx.request.files['img'].path).pipe(fs.createWriteStream("static/imgs/" + ctx.request.files['img'].name))
    //将图片路径存入images.json文件
    let uid = ctx.cookies.get("uid");
    let imageData = {
        imgUrl:`imgs/${ctx.request.files['img'].name}`,
        imgName:ctx.request.files['img'].name,
        uid
    }
    images.push(imageData);
    let res = fs.writeFileSync("data/images.json",JSON.stringify(images));
    ctx.body = res;
})
router.get("/checkUserName", (ctx, next) => {
    let res = users.find(v => v.username == ctx.query.name);
    if (res) {
        ctx.body = {
            status: 1,
            info: "用户名正确"
        }
    } else {
        ctx.body = {
            status: 2,
            info: "用户名错误"
        }
    }
})
router.post("/checkUser",(ctx,next)=>{
    let res =  users.find(v=>(v.username==ctx.request.body.username && v.pwd==ctx.request.body.pwd));
    if(res){
        ctx.cookies.set("uid",res.uid,{
            maxAge:30*24*60*60*1000,
            overwrite:true,
            httpOnly:true,
        })
        ctx.redirect("/photo.html");
    }else{
        ctx.redirect("/login.html");
    }
})
// 查询相册数据做对应呈现；
router.get("/getImageData",(ctx,next)=>{
    let uid = ctx.cookies.get("uid");
    let res =  images.filter(v=>v.uid==uid);
    ctx.body = res;
})

app.use(router.routes());
app.listen(3000);