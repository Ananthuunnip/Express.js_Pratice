const express = require('express');
const path = require('path')
const rootDir = require('../util/path');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","shope.html"))
})
router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","contact.html"));
});
router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","sucess.html"));
});

module.exports = router;