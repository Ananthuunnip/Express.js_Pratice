const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');    //module importing from admin
const shopeRoutes = require('./routes/shope');   //module importing from admin


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin',adminRoutes);
app.use('/shope',shopeRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})
app.listen(4000)


