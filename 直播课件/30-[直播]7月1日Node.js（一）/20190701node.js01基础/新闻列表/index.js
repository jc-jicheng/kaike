const http = require("http");
const fs = require("fs");
const url = require("url");
const mime = require("./data/mime.json");
const path = require("path");
let newsData = require("./data/data.json");
// console.log(newsData);
const server = http.createServer((req, res) => {
    // console.log(req.url);
    let pathObj = url.parse(req.url, true);
    let pathname = pathObj.pathname;
    // "/""  和 "/?p=1"是不是一个地址？
    if (pathname === "/" || pathname === "/index") {
        newsData = newsData.slice(0, 5);
        // console.log(newsData);
        let result = fs.readFileSync("./views/index.html").toString();
        // console.log(result);
        res.setHeader("content-type", "text/html;charset=utf-8");

        //通过数据组装html
        let htmlStr = `<ul class="news-list" >`;
        newsData.forEach(v => {
            htmlStr += `<li class="news">
                            <a href="javascript:;">
                                <img src="${v.imgUrl}" alt="">
                            </a>
                            <div>
                                <h3>
                                    <a href="/detail?id=${v.id}">${v.title}</a>
                                </h3>
                                <div class="info">
                                    <span class="tips"><span>${v.type}</span><span>${v.country}</span><span>逮捕</span></span>
                                    <!-- <span class="line"></span> -->
                                    <span class="time">| &nbsp;&nbsp;${v.addTime}</span>
                                </div>
                            </div>
                        </li>`;
        })
        htmlStr += `</ul>`;

        // 查找模板中的ul替换成自己组装的ul
        let reg = /<ul\s+class=(\'|\")news-list(\'|\")\s*>([\d\D]*)<\/ul>/;
        let newResult = result.replace(reg, htmlStr);
        res.write(newResult);
        res.end();
    } else if (pathname === "/detail") {
        res.setHeader("content-type", "text/html;charset=utf-8");
        // 获取传入的id
        let id = 1;
        if (typeof pathObj.query.id !== 'undefined') {
            id = pathObj.query.id
        }
        // console.log("id??",id);
        // 找到对应的数据
        let contentData  = newsData[id-1];
        // 组装对应的html
        let detailHtml = `<div class="text">
                            <h1 class="title">${contentData.title}</h1>
                            <div class="article-info"> 类型：${contentData.type} 时间：${contentData.addTime}</div>
                            <p class="content">
                            ${contentData.content}
                            </p>
                        </div>`;
        // 替换模板中对应的位置
        //显示详细页面
        let detailData = fs.readFileSync("./views/detail.html").toString();
        let reg = /<div\s+class=(\'|\")text(\'|\")\s*>([\d\D]*)<\/div>/;
        let newHtml = detailData.replace(reg,detailHtml);
        res.write(newHtml);
        res.end();
    } else {
        if (pathname !== "/favicon.ico") {
            let extName = path.extname(pathname);
            console.log(extName);
            res.setHeader("Conten-type", mime[extName]);
            let data = fs.readFileSync("./views" + pathname)
            res.write(data);
            res.end();
        }
    }
})

server.listen(3000);