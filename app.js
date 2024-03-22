const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');    //module importing from admin
const shopeRoutes = require('./routes/shope');   //module importing from admin


app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopeRoutes);

app.listen(4000)


