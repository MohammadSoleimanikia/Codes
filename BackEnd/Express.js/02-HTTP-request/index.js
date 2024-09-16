import express from "express";
const app = express();
const port =3000;
// if we go to http://localhost:3000/ we get "cannot GET" 
// solve:
//handling the GET request on homePage('/')
app.get('/',(req,res)=>{
    // send a respond to the request we can send html tag also 
    res.send('<h1>this is send by HTTP post</h1>');
})

// handling about page
app.get('/about',(req,res)=>{
    // send a respond to the request we can send html tag also 
    res.send('<h1>hello I am mohammad</h1>');
})

// handling contact
app.get('/contact',(req,res)=>{
    // send a respond to the request we can send html tag also 
    res.send('<h1>contact me</h1><p>+98915123456</p>');
})
// handling get request on about page 
app.listen(port,()=>{
    console.log(`the server started on the port: ${port}`);
})
