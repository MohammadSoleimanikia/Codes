// adding module 
const fs =require ('fs');

// create a message.txt and data (second argument) and a callback method(third)
fs.writeFile('message.txt',"hello from node js",(err)=>{
    if(err) throw err;
    console.log("the file has been saved");
})

// read from file (path,encoding,callback to retrieve data)
fs.readFile('./message.txt','utf-8',(err,data)=>{
console.log(data);
})