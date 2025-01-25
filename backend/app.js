const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./config/db');

const dotenv = require('dotenv')

// dot env config
dotenv.config()

const app = express();
const PORT = process.env.PORT || 7001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
dbConfig();

// Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});