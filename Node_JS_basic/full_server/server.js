const express = require('express');

const app = express();
const port = 1245;
const routes = require('./routes');

app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

module.exports = app
