import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
// passport: Authentication middleware for Node.js.
import passport from "passport";
//passport-local: Strategy for username and password authentication with Passport
import { Strategy } from "passport-local";
//express-session: Middleware for managing sessions in Express.
import session from "express-session";
import env from "dotenv";

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();
//Session Middleware Setup:
app.use(
  session({
    secret: "TOPSECRETWORD",
    resave: false, // Determines whether the session should be saved back to the session store, even if it hasn't been modified during the request.
    saveUninitialized: true,//Determines whether a session should be created for an uninitialized (new) session.
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//Initializes Passport and sets it up to use sessions for authentication.
app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "12345",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.get("/secrets", (req, res) => {
  //Checks if the user is authenticated using Passport's isAuthenticated() method.
  if (req.isAuthenticated()) {
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
});

app.post(
  //Handles the login form submission using Passport's local strategy.
//If authentication succeeds, redirects to the secrets page; otherwise, redirects back to the login page.
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
);

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      req.redirect("/login");
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {
            console.log("success");
            res.redirect("/secrets");
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});
// Defines a new Passport local strategy for authenticating users.
// The strategy's verify function is called with the provided username and password.
// It queries the database to find the user by email and compares the hashed password.
passport.use(
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1 ", [
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            //Error with password check
            console.error("Error comparing passwords:", err);
            return cb(err);
          } else {
            if (valid) {
              //Passed password check
              return cb(null, user);
            } else {
              //Did not pass password check
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  })
);
//  is a function provided by Passport that determines which data of the user object should be stored in the session.
passport.serializeUser((user, cb) => {
  cb(null, user);
});
// is a function provided by Passport that retrieves the data stored in the session and converts it into a user object.
passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
