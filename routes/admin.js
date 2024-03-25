const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/admin',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","add-product.html"));
});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shope')
})

module.exports = router;