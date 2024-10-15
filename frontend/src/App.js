// Update the API URL to point to the deployed backend
const API_BASE_URL = 'https://godown-treeview.onrender.com/api'; // New backend URL

// Handle user login
const handleLogin = async (email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, { // Use the updated URL
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
        const response = await fetch(`${API_BASE_URL}/auth/register`, { // Use the updated URL
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
