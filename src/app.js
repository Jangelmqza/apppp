const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', routes);

// 404 handler
app.use((req, res, next) => {
  const error = new Error('Endpoint not found');
  error.status = 404;
  next(error);
});

// Global error handling middleware
app.use(errorHandler);

module.exports = app;
