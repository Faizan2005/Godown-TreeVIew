const express = require('express');
const connectDB = require('./config/db'); // Import the database connection function
const authRoutes = require('./routes/auth'); // Import authentication routes
const cors = require('cors'); // Import CORS middleware
const dotenv = require('dotenv'); // Import dotenv for environment variables

// Load environment variables from .env file
dotenv.config();

const app = express(); // Create an Express application

// Connect to MongoDB
connectDB();

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// Define routes
app.use('/api/auth', authRoutes); // Use authentication routes at /api/auth

// Start server
const PORT = process.env.PORT || 5000; // Define the port to listen on
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Log the running server information
});
