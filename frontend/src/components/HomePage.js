import React from 'react';
import '../styles/HomePage.css';

// HomePage component renders the welcome message and buttons for login and registration
const HomePage = ({ onLogin, onRegister }) => {
    return (
        <div className="home-container">
            <h1>Godown Tree View</h1>
            <p>Welcome to the Godown Tree View. Please log in or register to access the inventory details.</p>
            <div className="button-group">
                <button className="btn" onClick={onLogin}>Login</button>
                <button className="btn" onClick={onRegister}>Register</button>
            </div>
        </div>
    );
};

export default HomePage;
