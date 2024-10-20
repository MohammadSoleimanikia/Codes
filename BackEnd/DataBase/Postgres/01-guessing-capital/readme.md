# Capital City Quiz Application

Welcome to the Capital City Quiz Application! This is a fun and interactive web application that tests your knowledge of capital cities around the world. Built using Express.js and PostgreSQL, this app allows users to answer questions about capital cities and keeps track of their scores.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Screenshots](#screenshots)

## Features

- Interactive quiz format with random questions about capital cities.
- Score tracking to keep track of correct answers.
- User-friendly interface with real-time feedback on answers.
- Easy to restart the quiz after completion.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **PostgreSQL**: Relational database to store country and capital data.
- **EJS**: Templating engine for rendering HTML views dynamically.
- **Body-parser**: Middleware for parsing incoming request bodies.

## Installation

To set up this application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/capital-city-quiz.git
   cd capital-city-quiz
2. **install dependencies**:
   ```bash
   npm install

3. **setup postgreSQL**
- Ensure PostgreSQL is installed and running on your machine.
- Create a database named world.
- Create a table named capital with appropriate columns (e.g., country, capital) and import csv data in it.

4. **Configure Database Connection:**
5. **start the server**
    ```bash
   node index.js

## Screenshots

![screen shots](./public/images/screen.png)