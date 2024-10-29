import express, { query } from "express";
import bodyParser from "body-parser";
// importing postgreSQL module
import pg from "pg";

// connect to DB
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "12345",
  port: 5432,
});
// get countries
db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// home page
app.get("/", async (req, res) => {
  //select codes from visited country table with SQL
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    // extract countries code and add to countries array
    countries.push(country.country_code);
  });
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req, res) => {
  const input = req.body.country;
  // find the country code from countries table
  // use $ sign as variable
  const result = await db.query(
    `SELECT country_code FROM countries WHERE country_name = $1`,
    [input]
  );
  // if find a row in table
  if(result.rows.length!==0){
    const countryCode=result.rows[0].country_code
    await db.query('INSERT INTO visited_countries (country_code) VALUES ($1);',[countryCode]);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
