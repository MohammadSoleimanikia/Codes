// Import necessary modules and libraries
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
// Allow us to create Google login strategy
import GoogleStrategy from "passport-google-oauth2";
import session from "express-session";
import env from "dotenv";

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

// Configure session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Initialize Passport and enable session handling
app.use(passport.initialize());
app.use(passport.session());

// Configure PostgreSQL database connection
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

// Define routes
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
  if (req.isAuthenticated()) {
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
});

// Google OAuth login route: redirects to Google's authentication page
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"], // Specify what information to request from Google
  })
);

// Google OAuth callback route
app.get(
  "/auth/google/secrets",
  passport.authenticate("google", {
    successRedirect: "/secrets", // Redirect to secrets page on success
    failureRedirect: "/login",  // Redirect back to login page on failure
  })
);

// Local authentication login
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
);

// User registration route
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

// Local strategy setup for username and password authentication
passport.use(
  "local",
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            console.error("Error comparing passwords:", err);
            return cb(err);
          } else {
            if (valid) {
              return cb(null, user);
            } else {
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

// Google OAuth strategy setup
passport.use(
  "google",
  new GoogleStrategy(
    { 
      clientID: process.env.GOOGLE_CLIENT_ID,         // Google client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Google client secret
      callbackURL: "http://localhost:3000/auth/google/secrets", // Redirect URL
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo", // URL for user profile information
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        console.log(profile); // Log Google user profile for debugging
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
          profile.email,
        ]);
        if (result.rows.length === 0) {
          // If user does not exist, create a new user
          const newUser = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            // profile comes from get --> google
            [profile.email, "google"] // Placeholder password for Google users
          );
          return cb(null, newUser.rows[0]);
        } else {
          // User already exists
          return cb(null, result.rows[0]);
        }
      } catch (err) {
        return cb(err);
      }
    }
  )
);

// Serialize and deserialize user sessions
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
