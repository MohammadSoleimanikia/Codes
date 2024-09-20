import express from "express";

const app = express();
const port = 3000;
// create new middleware called logger
function Logger(req,res,next){
  console.log(`Request URL: ${req.url}`)
  console.log(`Request method: ${req.method}`)
  // next function used to continue the flow to the other methods(get,post,...)
  next();
}

app.use(Logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
