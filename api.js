const express = require("express");
const axios = require("axios").default;

const app = express.Router();

const url = "https://api.github.com/users";

app.get("/users", (req, res) => {
  (async () => {
    const result = await axios.get(url);
    res.json(result.data);
  })();
});

module.exports = app;
