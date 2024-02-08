const express = require("express");

const app = express.Router();

app.get("/users", (req, res) => {
  res.json({ titi: "toto" });
});

module.exports = app;
