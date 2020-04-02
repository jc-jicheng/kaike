let newService = require("../service/news");
module.exports = {
   async showIndex(ctx){
    //    接收分页
    let p = 1;
    if(typeof ctx.query.p !=='undefined'){
        p = parseInt(ctx.query.p);
    }
    // console.log(p);
        //呈现主页
        // ctx.body = "news里的controller";
     let newsData = newService.getData();
     let pageCount = Math.ceil(newsData.length/5);
     let showData = newsData.slice((p-1)*5,p*5);
      await ctx.render("news/index.pug",{
         showData,
         pageCount
      });
    },
    async showDetail(ctx){
        let id = 1;
        if(typeof ctx.query.id !== 'undefined'){
            id = ctx.query.id;
        }
        let newsData = newService.getData();
        let dataItem = newsData[id-1];
        // console.log(dataItem);
       await ctx.render("news/detail.pug",{
         dataItem
       })
    }
}