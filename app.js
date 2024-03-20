const http = require("http");

const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log("HI I Am Medilware Here")
    next();   // this allows to continue to  the another middlewrae
})
app.use((req,res,next)=>{
    console.log("HI I Am another Medilware Here")
    res.send('<h1>hello fucking Express</h1>')
})

const server = http.createServer(app);
server.listen(4000)
