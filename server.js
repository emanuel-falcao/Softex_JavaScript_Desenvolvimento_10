const express = require("express");
const app = express();

let userRoute = require('./userRoute');
app.use('/', userRoute);

app.listen(3000, ()=>{
    console.log('Rodando');
});