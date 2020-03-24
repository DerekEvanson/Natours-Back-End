// JavaScript written by Derek Evanson with the guided process of Jonas Schmedtmann as part of "Node.js BootCamp 2020"
// HTML, CSS, and JSON provided by Jonas Schmedtmann
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middleware
// ====================================================================
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Routes
// ====================================================================
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/tours', userRouter);

module.exports = app;
