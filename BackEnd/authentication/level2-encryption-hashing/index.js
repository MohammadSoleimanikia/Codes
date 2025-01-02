// Importing necessary modules
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express(); // Creating an Express app instance
const port = 3000; // Setting the port for the server
const saltRounds = 10; // Defining the number of salt rounds for hashing passwords

// Middleware for parsing URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

// Setting up the PostgreSQL database connection
const db = new pg.Client({
  user: "postgres", // Database username
  host: "localhost", // Database host
  database: "secrets", // Database name
  password: "12345", // Database password
  port: 5432, // Database port
});
db.connect(); // Connecting to the database

// Route to render the home page
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Route to render the login page
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

// Route to render the registration page
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

// Route to handle user registration
app.post("/register", async (req, res) => {
  const email = req.body.username; // Retrieving the email from the request body
  const password = req.body.password; // Retrieving the password from the request body

  try {
    // Checking if the email already exists in the database
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in."); // If email exists, prompt the user to log in
    } else {
      // Hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err); // Logging any error during hashing
        } else {
          console.log("Hashed Password:", hash); // Logging the hashed password
          await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            [email, hash]
          ); // Storing the hashed password in the database
          res.render("secrets.ejs"); // Rendering the secrets page upon successful registration
        }
      });
    }
  } catch (err) {
    console.log(err); // Logging any error during database operations
  }
});

// Route to handle user login
app.post("/login", async (req, res) => {
  const email = req.body.username; // Retrieving the email from the request body
  const loginPassword = req.body.password; // Retrieving the password from the request body

  try {
    // Fetching the user data from the database
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0]; // Extracting user data
      const storedHashedPassword = user.password; // Getting the hashed password from the database
      // Verifying the provided password with the stored hashed password
      bcrypt.compare(loginPassword, storedHashedPassword, (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err); // Logging any error during comparison
        } else {
          if (result) {
            res.render("secrets.ejs"); // If passwords match, render the secrets page
          } else {
            res.send("Incorrect Password"); // If passwords don't match, send an error message
          }
        }
      });
    } else {
      res.send("User not found"); // If the email doesn't exist, send an error message
    }
  } catch (err) {
    console.log(err); // Logging any error during database operations
  }
});

// Starting the server on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Logging the server start message
});
