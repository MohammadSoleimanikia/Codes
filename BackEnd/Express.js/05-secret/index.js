import express from "express";
import bodyParser from "body-parser";

// full path extraction
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// initialize app object
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// handling form with post request
app.post("/check", (req, res) => {
    // if password was ok then return the secret page 
  if (req.body["password"] == "123") {
    res.sendFile(__dirname + "/secret.html");
  } else {
    // redirect user to main page if password was wrong 
    res.redirect("/");
  }
});
// handling homepage
app.get("/", (req, res) => {
  // send home page
  res.sendFile(__dirname + "/index.html");
});

// run app on port 3000
app.listen(port, () => {
  console.log("app is running on port 3000");
});
