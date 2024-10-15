# Godown Tree View Application

Welcome to the **Godown Tree View Application** README! This web-based application provides users with an intuitive interface for managing and visualizing inventory within a godown (warehouse).

## Overview

This application is built using **React**, enabling users to navigate through a tree structure representing various categories and items in the godown. It offers a seamless experience for managing inventory data and improving operational efficiency.

## Demo

Check out the demo video below:

[Demo Video](https://github.com/Faizan2005/Godown-TreeVIew/blob/main/simplescreenrecorder-2024-10-16_02.03.58.mkv)

## Key Features

* **Dynamic Tree Structure**: View and interact with a hierarchical representation of inventory items and categories.
* **User -Friendly Interface**: Simple and intuitive design for easy navigation and management of inventory.
* **User  Authentication**: Secure login and registration feature for user access control, ensuring that inventory data is managed by authorized personnel.

## Installation and Execution

### Prerequisites

Ensure you have the following installed:

* **Node.js** (includes npm): [Download and install Node.js](https://nodejs.org/)

## Deployment

The application has been deployed with the following URLs:

* **Frontend**: [Godown Tree View Frontend](https://godown-treeview-faizan2005-faizans-projects-07c20a35.vercel.app/)
* **Backend**: [Godown Tree View Backend](https://godown-treeview.onrender.com/)

## Error Handling

In case of any errors, please ensure the following:

1. All dependencies are installed correctly.
2. You are running the application on the appropriate Node.js version.

## Code Structure Explanation

The application's structure is organized to facilitate easy navigation and maintenance. Here’s a breakdown of the key components and files:

### Directory Breakdown

* **frontend/**
	+ **src/**
		- **components/**: Contains the core React components.
			- `HomePage.js`: Main page component for the application.
			- `ItemDetails.js`: Displays details of the selected item.
			- `Login.js`: Component for user login.
			- `Modal.js`: Component for displaying modal dialogs.
			- `Register.js`: Component for user registration.
			- `Tree.js`: Main component for the tree structure.
			- `TreeNode.js`: Component for individual tree nodes.
		- **styles/**: Holds the CSS styles for the application.
			- `styles.css`: Main stylesheet for the application.
			- `Modal.css`: Styles for modal dialogs.
			- `Auth.css`: Styles for authentication components.
			- `HomePage.css`: Styles for the homepage.
		- `data.js`: Contains data used within the application.
		- `utils.js`: Holds utility functions to support the application logic.
* **backend/**
	+ **models/**: Contains data models for MongoDB collections.
	+ **routes/**: Defines API routes for user authentication and inventory management.
	+ **controllers/**: Contains the logic for handling requests and responses.
	+ **middleware/**: Holds middleware functions for authentication and error handling.
	+ **config/**: Configuration files, including database connection settings.
	+ `server.js`: Main entry point for the backend server.
