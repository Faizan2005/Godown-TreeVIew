import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import the global styles for the application
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import the performance measurement tool

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the root element, using StrictMode for highlighting potential problems in the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance in the app by passing a logging function or sending results to an analytics endpoint
reportWebVitals();
