const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const http = require("http");
let app = new Koa();
let router = new Router();
app.use(static(__dirname + "/static"));
app.use(router.routes());
router.all("/getData", async ctx => {
    console.log(ctx.request.headers);
    // let options = {
    //     host: "10.211.55.3",
    //     port: 3000,
    //     method: "get",
    //     path: "/getApi"
    // }
    // let options = {
    //     host: "http://www.jingyingba.com",
    //     //port: 443,
    //     method: "get",
    //     path: "/home/courselist/index/id/2.html"
    // }
    await new Promise(resolve=>{
        let request = http.request(options, res => {
            // 通过流去监控数据； node原生获取post的方式；
            let str = "";
            res.on("data", chunk => {
                str += chunk;
            })
            res.on("end", () => {
                console.log(str.toString());
                resolve();
                ctx.body = str.toString();
            })
        })
        request.end();
    })
   
})

app.listen(5000);