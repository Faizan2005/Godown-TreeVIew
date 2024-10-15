const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name is a required field
    },
    email: {
        type: String,
        required: true, // Email is a required field
        unique: true,   // Email must be unique across users
    },
    password: {
        type: String,
        required: true, // Password is a required field
    },
});

// Export the User model based on the userSchema
module.exports = mongoose.model('User', userSchema);
