import React, { useState } from 'react';
import Tree from './components/Tree';
import Modal from './components/Modal';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import { buildGodownTree, groupItemsByGodown, attachItemsToGodowns } from './utils';
import { godowns, items } from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [selectedItem, setSelectedItem] = useState(null); // State for the currently selected item
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State for user login status
    const [currentPage, setCurrentPage] = useState('home'); // State for the current page view
    const [currentUser, setCurrentUser] = useState(null); // State to store current user information
    const [errorMessage, setErrorMessage] = useState(null); // State for error messages

    // Group items by their corresponding godowns
    const itemMap = groupItemsByGodown(items);
    // Build a tree structure for godowns
    const godownTree = buildGodownTree(godowns);
    // Attach items to their respective godowns in the tree structure
    attachItemsToGodowns(godownTree, itemMap);

    // Handle item click to open the modal
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    // Close the modal and reset the selected item
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    // Handle user login
    const handleLogin = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.message); // Display error message if login fails
                return;
            }

            const data = await response.json();
            localStorage.setItem('token', data.token); // Store JWT token in localStorage
            setIsLoggedIn(true);
            setCurrentUser({ email }); // Set the logged-in user's email
            setCurrentPage('app'); // Navigate to the main app page
            setErrorMessage(null); // Clear any previous error messages
        } catch (error) {
            setErrorMessage('An error occurred during login.'); // Handle network errors
        }
    };

    // Handle user registration
    const handleRegister = async (name, email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.message); // Display error message if registration fails
                return;
            }

            setIsLoggedIn(true);
            setCurrentUser({ name, email }); // Set the registered user's info
            setCurrentPage('app'); // Navigate to the main app page
            setErrorMessage(null); // Clear any previous error messages
        } catch (error) {
            setErrorMessage('An error occurred during registration.'); // Handle network errors
        }
    };

    // Handle user logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null); // Clear the current user data
        localStorage.removeItem('token'); // Remove token from localStorage
        setCurrentPage('home'); // Navigate back to the home page
    };

    // Render the appropriate page based on the current state
    if (currentPage === 'home') {
        return <HomePage onLogin={() => setCurrentPage('login')} onRegister={() => setCurrentPage('register')} />;
    } else if (currentPage === 'login') {
        return (
            <Login onLogin={handleLogin} errorMessage={errorMessage} />
        );
    } else if (currentPage === 'register') {
        return (
            <Register onRegister={handleRegister} errorMessage={errorMessage} />
        );
    } else if (isLoggedIn) {
        return (
            <div className="app-container">
                <div className="user-info">
                    <p>Welcome, {currentUser.name || currentUser.email}!</p> {/* Display user name or email */}
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <Tree treeData={godownTree} onItemClick={handleItemClick} /> {/* Render the godown tree */}
                {selectedItem && <Modal show={isModalOpen} onClose={closeModal} item={selectedItem} />} {/* Render the modal if an item is selected */}
            </div>
        );
    }

    return null; // Return null if no valid page state is found
};

export default App;
