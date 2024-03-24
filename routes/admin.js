const express = require('express')

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send(
        `<form action ="/product" method="POST">
        <labell>Enter product  :  </label><input type="text" name="Title"><br>
        <labell>Enter Size of product   :   </label><input type="text" name="size">
        <button type="submit">Submit</button>`)
})
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;