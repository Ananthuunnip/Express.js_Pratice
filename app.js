const express = require("express");

const app = express();

app.use('/',(req,res,next)=>{
    console.log("this is middleware start")
    next();
})

app.use('/price',(req,res,next)=>{
    console.log('I Am in "price" Medilware')
    res.send('<h1>Add the product "price"</h1>')
})

app.use('/',(req,res,next)=>{
    console.log("in another Middleware end")
    res.send('<h1>Hello this is Express</h1>')
})
app.listen(4000)


