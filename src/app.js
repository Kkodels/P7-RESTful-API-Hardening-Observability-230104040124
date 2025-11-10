const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorHandler');
const employeeRoutes = require('./routes/employees.routes');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Employees API Ready 🚀' });
});

// Employees routes
app.use('/api/employees', employeeRoutes);

// Info endpoint
app.get('/api/info', (req, res) => {
  res.json({
    service: "Employees RESTful API",
    author: "M. Delfian Tirta Nugraha",
    nim: "230104040124",
    version: "1.0.0",
    description: "UTS Web Service Engineering – CRUD lengkap + 7 RESTful Principles"
  });
});

// Error handling middleware (harus di paling bawah)
app.use(errorHandler);

// Jalankan server
app.listen(3000, () => console.log('✅ Server running on http://localhost:3000'));
