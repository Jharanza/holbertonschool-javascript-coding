#!/usr/bin/env node

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const port = 1245;

app.listen(port, () => console.log(`Connect in port http://localhost:${port}`));

module.exports = app;
