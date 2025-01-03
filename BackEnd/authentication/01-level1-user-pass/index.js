import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const client = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "12345",
  port: 5432,
});
client.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  // Add user to the database
  let email = req.body.username;
  let password = req.body.password;
  // check if user is already registered
  const checkResult = await client.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (checkResult.rows.length > 0) {
    res.send("Email already exists. try logging in");
  } else {
    // if user didn't registered --> add user in db
    const insertUserQuery =
      "INSERT INTO users (email, password) VALUES ($1, $2)";
    try {
      await client.query(insertUserQuery, [email, password]);
      res.send("User registered successfully");
    } catch (err) {
      console.error(err);
      res.send("Error registering user");
    }
  }
});

app.post("/login", async (req, res) => {
  let email = req.body.username;
  let password = req.body.password;
  // Verify user credentials
  const result =await client.query("SELECT * FROM users WHERE email = $1",[email]);
  // check if user existed 
  if(result.rows.length>0){
    // check password 
    if(password==result.rows[0].password){
      res.render('secrets.ejs')
    }
    else{
      res.send('password is incorrect!')
    }
  }
  else{
    res.send('user is not existed, try register')
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
