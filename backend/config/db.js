const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB using the URI from environment variables
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected...');
    } catch (error) {
        // Log the error message if the connection fails
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with a failure code
    }
};

// Export the connectDB function for use in other modules
module.exports = connectDB;
