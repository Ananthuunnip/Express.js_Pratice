const path = require('path')   //for fatching the path for res.send the html files
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');    //module importing from admin
const shopeRoutes = require('./routes/shope');   //module importing from admin


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')))  // for file access from public folder

app.use(adminRoutes);
app.use(shopeRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"view","404.html"))});
app.listen(4000)


