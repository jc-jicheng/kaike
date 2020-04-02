let newData = require("../data/data.json");
const fs = require("fs");
module.exports= {
    addNews(request){
        let { title,type,country,content } = request.body;
        let dateObj = new Date();
        let addData = {
            id:newData[newData.length-1].id+1,
            title,
            type,
            country,
            content,
            addTime:dateObj.getFullYear()+"-"+(dateObj.getMonth()+1)+"-"+dateObj.getDate()
        }
        if(typeof request.files !== "undefined"){
            let tempPath = request.files.img.path;
            let imgName = request.files.img.name;
           fs.writeFileSync("static/img/"+imgName,fs.readFileSync(tempPath));
           addData.imgUrl = "/img/"+imgName
        }
        newData.push(addData);
        return new Promise(resolve=>{
            fs.writeFile("data/data.json",JSON.stringify(newData),err=>{
                if(err){
                    console.log("写入失败");
                    resolve({
                        info:"写入失败",
                        code:1
                    })
                }else{
                    console.log("写入成功");
                    resolve({
                        info:"写入成功",
                        code:0
                    })
                }
            })
        })
       

    }
}