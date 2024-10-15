import React, { useState } from 'react';
import '../styles/Auth.css';

// Login component renders a login form and handles user authentication
const Login = ({ onLogin, errorMessage }) => {
    const [email, setEmail] = useState(''); // State to hold the email input
    const [password, setPassword] = useState(''); // State to hold the password input

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        onLogin(email, password); // Send login data to the parent component
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Login</h2>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message if exists */}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="btn btn-block">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
