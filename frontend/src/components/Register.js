import React, { useState } from 'react';
import '../styles/Auth.css';

// Register component for user registration
const Register = ({ onRegister, errorMessage }) => {
    // State variables to hold input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(name, email, password); // Send registration data to the backend
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Register</h2>
                {/* Display error message if provided */}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/* Input for user's name */}
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        {/* Input for user's email */}
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        {/* Input for user's password */}
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {/* Submit button for registration */}
                    <button type="submit" className="btn btn-block">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
