# Secrets App

This is a simple web application that allows users to register, log in, and submit their secrets. The app uses various technologies and libraries to handle different aspects of the application.

## Technologies and Libraries Used

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.

### Database

- **PostgreSQL**: A powerful, open-source object-relational database system.

### Authentication

- **Passport.js**: An authentication middleware for Node.js, which supports various authentication strategies.
  - **passport-local**: A Passport strategy for authenticating with a username and password.
  - **passport-google-oauth2**: A Passport strategy for authenticating with Google OAuth 2.0.

### Security

- **bcrypt**: A library to help hash passwords.

### Middleware

- **body-parser**: A middleware to parse incoming request bodies.
- **express-session**: A middleware to handle sessions.

### Environment Variables

- **dotenv**: A module to load environment variables from a `.env` file into `process.env`.
