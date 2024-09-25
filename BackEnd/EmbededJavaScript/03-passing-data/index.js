import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const numbers=[1,2,3,4,5]
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    //1- server to EJS data sending 
  res.render("index.ejs", { name: "mohammad",numbers });

});
// 2-EJS to app

app.post('/submit',(req, res)=>{
    const numLetter= req.body['fName'].length + req.body["lName"].length;
    res.render("index.ejs",{numberOfLetter:numLetter, name: "mohammad",numbers});
})

app.listen(3000, () => {
  console.log(`app is running at http://localhost:${port}/`);
});
