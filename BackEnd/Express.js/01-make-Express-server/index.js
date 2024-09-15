// 1- initialize NPM
// npm init 
// 2- install express 
// npm i express 
// 3- change the type to module for Ecma script modules 
// "type":"module"

// 4-write the server codes 
import express from "express";
const app = express();
const port =3000;
// 3000 is port and this is location of our server that we are listening for request from client
// callback triggered when the server is set up 
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})

// start the server : node index.js
// go to browser : localhost:3000