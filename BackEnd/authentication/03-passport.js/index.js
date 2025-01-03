import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";

const app = express();
const port = 3000;

// User database (for simplicity, we're using an array; replace with a real database in production)
const users = [];

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Session setup
app.use(
  session({
    secret: "TOPSECRETWORD",
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
//  It allows Passport to use sessions to store and retrieve authentication state
app.use(passport.session());

// Passport Local Strategy
passport.use(
//Registers a new authentication strategy with Passport. In this case,
//it's using the LocalStrategy to authenticate users based on a username and password.
// parameters:
    // username: The username entered by the user during login.
    // password: The password entered by the user.
    // done: A callback function to indicate the success or failure of the authentication.
  new Strategy((username, password, done) => {
    const user = users.find((u) => u.username === username);
    if (!user) {
        // false indicates that no user was authenticated 
      return done(null, false, { message: "Incorrect username" });
    }
    if (user.password !== password) {
      return done(null, false, { message: "Incorrect password" });
    }
    // authentication was successful
    return done(null, user);
  })
);

// session management 
// user object passed by the passport strategy
passport.serializeUser((user, done) => {
    // first argument is for any potential error 
    // user.username is a piece of user data that will stored in the session 
    //done() This is a callback function provided by Passport that you call to indicate the result of the serialization process.
  done(null, user.username);
});


// This code defines how Passport retrieves the full user object from the session
// when a request is made after the user has logged in. 
passport.deserializeUser((username, done) => {
    // Passport automatically retrieves username from the session.
    // This searches for the user in the users array based on the username.
  const user = users.find((u) => u.username === username);
  done(null, user);
});

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Home</h1><a href='/login'>Login</a> | <a href='/register'>Register</a>");
});

app.get("/login", (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form method="post" action="/login">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  `);
});

app.post(
  "/login",
//   passport authentication() uses local strategy based on provided username and password
// local refers to defined strategy
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  })
);

app.get("/register", (req, res) => {
  res.send(`
    <h1>Register</h1>
    <form method="post" action="/register">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  `);
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find((u) => u.username === username);

  if (existingUser) {
    res.send("<h1>User already exists</h1><a href='/register'>Try again</a>");
  } else {
    users.push({ username, password });
    res.redirect("/login");
  }
});

app.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    // returns true if the user is currently authenticated
    // (i.e., their session is valid and the user object is available in the request).
    res.send(`<h1>Welcome, ${req.user.username}</h1><a href='/logout'>Logout</a>`);
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Logout error:", err);
    }
    res.redirect("/");
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
