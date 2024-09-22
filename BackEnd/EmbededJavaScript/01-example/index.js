import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

// see if today is weekday or weekend day
const today = new Date();
const day = today.getDay();

let type = "a weekday";
let adv = "it's time to work hard";
if (day == 0 || day == 6) {
  type = "the weekend";
  adv='its time to have some fun';
}
app.get("/", (req, res) => {
  // express know that the ejs files saved in views folder
  // sendfile method needs full path and thats why in previous examples of sendfile
  // we set full path

//   pass the data to the ejs file 
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(3000, () => {
  console.log(`app is running on the ${port} port`);
});
