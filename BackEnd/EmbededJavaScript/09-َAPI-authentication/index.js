import express, { response } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "mohammadskia";
const yourPassword = "mskia.49";
const yourAPIKey = "b65d7d50-8734-473f-85ce-8816f9a9c77c";
const yourBearerToken = "dd334f5a-9dd3-4a30-9455-3a54ebffe1d0";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  const Response = await axios.get("https://secrets-api.appbrewery.com/random");
  const result = JSON.stringify(Response.data);
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  res.render("index.ejs", { content: result });
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2

  //HINT: This is how you can use axios to do basic auth:
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  const Response = await axios.get(
    "https://secrets-api.appbrewery.com/all?page=2",
    { auth: { username: yourUsername, password: yourPassword } }
  );
  const result = JSON.stringify(Response.data);
  res.render("index.ejs", { content: result });
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  const Response = await axios.get(
    `https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`
  );
  const result = JSON.stringify(Response.data);
  res.render("index.ejs", { content: result });
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  const Response = await axios.get(
    `https://secrets-api.appbrewery.com/secrets/42`,
    { headers:{Authorization:`Bearer ${yourBearerToken}`} }
  );
  const result = JSON.stringify(Response.data);
  res.render("index.ejs", { content: result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
