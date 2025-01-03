# Passport Authentication Example

This project demonstrates a simple authentication system using Node.js, Express, and Passport.js with the Local Strategy. It includes user registration, login, session management, and profile access.

## Features

- User registration
- User login
- Session management
- Profile access
- User logout

## Project Structure

- [index.js](http://_vscodecontentref_/0): Main application file that sets up the Express server, Passport configuration, and routes.
- [package.json](http://_vscodecontentref_/1): Project metadata and dependencies.

## Routes

- `/`: Home page with links to login and register.
- `/login`: Login page with a form to enter username and password.
- `/register`: Registration page with a form to create a new user.
- `/profile`: Profile page accessible only to authenticated users.
- `/logout`: Logout route to end the user session.

## Authentication Flow

1. **Registration**: Users can register by providing a username and password. The user data is stored in an in-memory array (for simplicity).
    ```js
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
    ```
2. **Login**: Users can log in with their username and password. Passport's Local Strategy is used to authenticate the user.
    ```js
    app.post(
      "/login",
      passport.authenticate("local", {
        successRedirect: "/profile",
        failureRedirect: "/login",
      })
    );
    ```
3. **Session Management**: Passport handles session management, serializing the user into the session and deserializing the user from the session.
    ```js
    passport.serializeUser((user, done) => {
      done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
      const user = users.find((u) => u.username === username);
      done(null, user);
    });
    ```
4. **Profile Access**: Authenticated users can access their profile page. If a user is not authenticated, they are redirected to the login page.
    ```js
    app.get("/profile", (req, res) => {
      if (req.isAuthenticated()) {
        res.send(`<h1>Welcome, ${req.user.username}</h1><a href='/logout'>Logout</a>`);
      } else {
        res.redirect("/login");
      }
    });
    ```
5. **Logout**: Users can log out, which ends their session and redirects them to the home page.
    ```js
    app.get("/logout", (req, res) => {
      req.logout((err) => {
        if (err) {
          console.error("Logout error:", err);
        }
        res.redirect("/");
      });
    });
    ```

## Dependencies

- [express](http://_vscodecontentref_/2): Web framework for Node.js
- [body-parser](http://_vscodecontentref_/3): Middleware to parse request bodies
- [express-session](http://_vscodecontentref_/4): Middleware for session management
- [passport](http://_vscodecontentref_/5): Authentication middleware
- [passport-local](http://_vscodecontentref_/6): Local strategy for Passport