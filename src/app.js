require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(express.json());

// Security
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

// Logging
app.use(morgan("combined"));

// Rate Limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.RATE_LIMIT || 100,
  message: {
    status: "fail",
    message: "Terlalu banyak request, coba lagi nanti..."
  }
});
app.use(limiter);

// Routes (FIX)
const employeeRoutes = require('./routes/employees.routes');
app.use('/api/employees', employeeRoutes);

// Monitoring
app.get('/api/health', (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString()
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: "Express Employee API",
    version: "1.0.0",
    env: process.env.NODE_ENV,
    message: "API dari praktikum WSE + hardening"
  });
});

app.get('/api/metrics', (req, res) => {
  res.json({
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    status: "running"
  });
});

// Global Error Handler
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
