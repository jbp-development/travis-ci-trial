const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('ci with travis');
});

app.get("/travis", (req, res) => {
    res.send("Using travis");
});

app.get("/newstuff", (req, res) => {
    res.send("Hello world!")
});

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;