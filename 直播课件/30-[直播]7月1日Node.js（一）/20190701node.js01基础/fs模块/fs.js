const fs = require("fs");
// 文件操作；增、删、改、查；
// 文件和目录；
//  所有文件操作  都分为 同步 （sync）(结果返还值);和异步 （回调）
// 异步写入；
// fs.writeFile("1.txt","我是写入的内容",err=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log("文件写入成功");
// })
// 同步写入
// fs.writeFileSync("2.txt","我是2.txt里的内容");

// 读文件；
// fs.readFile("1.txt",(err,data)=>{
//     if(err){
//         return console.log(err);
//     }
//     // console.log(typeof data);
//     // 将buffer转换成 字符串；
//     console.log(data.toString());
// })


// 删除文件
// fs.unlinkSync("1.txt");
// 复制文件 :先读取 在写入；
// function mycopy(src,dest){
//     let data = fs.readFileSync(src);
//     fs.writeFileSync(dest,data);
// }
// mycopy("2.txt","3.txt");

// 修改文件名称
// fs.rename("2.txt","4.txt",err=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log("修改成功");
// })
