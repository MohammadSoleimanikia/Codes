// 1. Import express and axios
import express, { response } from "express";
import axios from "axios";
// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
// 3. Use the public folder for static files.
app.use(express.static("public"));
// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
  // 5. Use axios to get a random secret and pass it to index.ejs to display the
  // secret and the username of the secret.
  try {
    const Response = await axios.get(
      "https://secrets-api.appbrewery.com/random"
    );
    res.render("index.ejs", {
      secret: Response.data.secret,
      user: Response.data.username,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`app is started on port ${port}`);
});
