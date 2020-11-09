require('./db/config');

const express = require('express'),
  app = express();


const birthdayRouter = require('./routes/birthday');

// We're adding some middleware!
app.use(express.json());

app.use('./birthdays', birthdayRouter)

module.exports = app;