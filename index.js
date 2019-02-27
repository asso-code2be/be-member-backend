const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var member = require("./routes/member");

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use("/members", member);


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Serveur start',
}));

module.exports = app;