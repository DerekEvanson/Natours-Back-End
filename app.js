// JavaScript written by Derek Evanson with the guided process of Jonas Schmedtmann as part of "Node.js BootCamp 2020"
// HTML, CSS, and JSON provided by Jonas Schmedtmann
const express = require('express');
const morgan = require('morgan');
const app = express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// Middleware
// ====================================================================
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
// ====================================================================
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/tours', userRouter);

module.exports = app;
