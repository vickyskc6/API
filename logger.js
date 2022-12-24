let url = require("http")

let server = url.createServer((req,res)=>{
    let {method,url,headers} = req
    console.log(method ,method,url);
    console.log(req);
    res.setHeader("content-type","apllication/json")

     res.end(JSON.stringify({status:200,message:"my first api creation"}))
})

let port = 5000
server.listen(port,()=>{
    console.log(`server is running to ${port}`) })

