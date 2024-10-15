import React from 'react';
import '../styles/styles.css'; // Importing the CSS file for styling

const ItemDetails = ({ item }) => {
    return (
        <div className="item-details">
            <h2>{item.name}</h2>
            {/* Displaying the item image */}
            <img src={item.image_url} alt={item.name} className="item-image" />
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Status:</strong> {item.status}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Brand:</strong> {item.brand}</p>
            <p><strong>Attributes:</strong></p>
            <ul>
                {/* Iterating over item attributes and displaying them in a list */}
                {Object.entries(item.attributes).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemDetails;
