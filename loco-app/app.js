// app.js
const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello from Loco App!');
});

app.listen(port, () => {
  console.log(`Loco App listening on port ${port}`);
});