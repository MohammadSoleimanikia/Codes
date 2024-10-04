import express from "express";
// Import EJS templating engine for rendering views
import ejs from "ejs";
// Import the path module for handling file and directory paths
import path from "path";
// Import functions to convert URLs to file paths and get directory names
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Convert the current module's URL to a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Serve static files (like CSS and images) from the 'public' directory
app.use(express.static("public"));

const firstName = "mohammad";

app.get("/", (req, res) => {
  res.render("index.ejs", {
    fname: firstName // Pass the firstName variable to the EJS template as 'fname'
  });
});

app.listen(port, () => {
  console.log(`app is running on the ${port} port`);
});