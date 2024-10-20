# postgreSQL

example to use postgreSQL

## 01 and 02 example

- connect to postgreSQL DB
```
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
```
db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});
```
