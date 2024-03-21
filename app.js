const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product',(req,res,next)=>{
    res.send(
        `<form action ="/product" method="POST">
        <labell>Enter product  :  </label><input type="text" name="Title"><br>
        <labell>Enter Size of product   :   </label><input type="text" name="size">
        <button type="submit">Submit</button>`)
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello this is Express</h1>')
})
app.listen(4000)


