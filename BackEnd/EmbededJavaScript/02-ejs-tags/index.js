import express from 'express';
import ejs from "ejs";

const app=express();
const port=3000;
let fruit=['apple','orange','pears'];
app.get('/',(req,res)=>{
    res.render('index.ejs',{name:"mohammad",fruits:fruit})
})
app.listen(port,(req,res)=>{
    console.log(`app started at ${port} port`)
})