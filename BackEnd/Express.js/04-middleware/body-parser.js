// in this example we use body-parser to parse the body of request sended by "FORM"
// 1-install body-parser
import bodyParser from "body-parser";
import express from "express";
// add these three module to path in line 12 works well
// ensuring that file paths are always resolved relative to the script's
//  location rather than the current working directory
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// 2-using body-parser with app.use (mount the middleware)
// specify bodyParser.urlencoded({extended:true}) to create a body for url-encoded requests
app.use(bodyParser.urlencoded({extended:true}))

app.post('/submit',(req,res)=>{
// 3-using body-parser
  console.log(req.body)
})

// show main page
app.get("/", (req, res) => {
  // res.sendFile returns a file
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
