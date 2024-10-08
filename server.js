const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const calculateRoutes = require('./routes/calculate');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express(); 

connectDB(); 

// Middleware
app.use(cors());
app.use(express.json()); 

// Route
app.use('/calculate', calculateRoutes);
app.use('/users', userRoutes);

// Serverni ishga tushirish
const PORT = process.env.PORT || 5001; 
app.listen(PORT, () => {
    console.log(`Your API is running on port ${PORT}`);
});
