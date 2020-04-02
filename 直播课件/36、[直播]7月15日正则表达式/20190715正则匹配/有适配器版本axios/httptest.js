const http = require("http");
const url = require("url");
let urlObj = url.parse("localhost:8889/axios");
console.log(urlObj);
// http://locahost:3000/axios/
let opts = {
    hostname: "localhost",
    port: 8889,
    method: "get",
    path: "/axios"
}
console.log(opts)
let request = http.request(opts, res => {
    let str = "";
    res.on("data", chunk => {
        str += chunk;
    })
    res.on("end", () => {
        console.log(JSON.parse(str.toString()));
        // resolve(JSON.parse(str.toString()));
    })
})
request.end();