import express from "express"
import ejs from "ejs"

const port=3000;
const app=express();
app.listen(port,()=>{
    console.log(`app started at port ${port}`)
})