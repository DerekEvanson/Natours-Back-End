// JavaScript written by Derek Evanson with the guided process of Jonas Schmedtmann as part of "Node.js BootCamp 2020"
// HTML and CSS provided by Jonas Schmedtmann

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello from the server side!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
