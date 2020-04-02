const axios = require("axios");
axios({
    method: "get",
    url:"http://localhost:8886/axios"
}).then(res=>{
    console.log(res.data);
})