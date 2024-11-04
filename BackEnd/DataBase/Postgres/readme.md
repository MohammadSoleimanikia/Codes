# postgreSQL

example to use postgreSQL

## 01 and 02 example

- connect to postgreSQL DB
```JS
const db=new pg.Client(
  {
      user:'postgres',
      host:'localhost',
      database:'world',
      password:'12345',
      port:5432,
  }
  );
  db.connect();
```
- select the data from DB
```JS
db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});
```
## 03- querying data:

## Project Overview
This project is a simple Express.js application that interacts with a PostgreSQL database to manage a list of visited countries. Users can view their visited countries and add new countries to their list.

# Example SQL Queries

This document provides a collection of example SQL queries formatted in Markdown. Each query is accompanied by a brief description of its purpose.

## 1.Fetch Visited Countries

This query retrieves all columns from the `countries` table.

```JS
const result = await db.query("SELECT country_code FROM visited_countries");
```

## 2.  Search for a Country
When a user attempts to add a new country, the application checks if the country exists in the countries table using the following query:
```JS
const result = await db.query(
  "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'",
  [input.toLowerCase()]
);
```
## 3.  Insert New Visited Country
If the country exists, it is added to the visited_countries table with this query:
```JS
await db.query(
  "INSERT INTO visited_countries (country_code) VALUES ($1)",
  [countryCode]
);
```

