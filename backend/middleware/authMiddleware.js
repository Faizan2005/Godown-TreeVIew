const jwt = require('jsonwebtoken');

// Middleware to authenticate requests using JWT
const authMiddleware = (req, res, next) => {
    // Extract token from the Authorization header
    const token = req.header('Authorization')?.split(' ')[1];
    
    // If no token is found, deny authorization
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify the token using the secret stored in environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId; // Attach the user ID to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        // If the token is invalid, respond with an error
        res.status(401).json({ message: 'Token is not valid' });
    }
};

// Export the authMiddleware for use in other modules
module.exports = authMiddleware;
