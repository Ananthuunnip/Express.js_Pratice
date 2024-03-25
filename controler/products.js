const path = require('path')
const rootDir = require('../util/path');


exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","add-product.html"));
}

exports.postAddProduct = (req,res,next)=>{
    res.redirect('/')
}
exports.getShope = (req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","shope.html"))
}
exports.getContact = (req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","contact.html"));
}
exports.postSucess = (req,res,next)=>{
    res.sendFile(path.join(rootDir,"view","sucess.html"));
} 

