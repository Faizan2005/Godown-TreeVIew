import React from 'react';
import '../styles/Modal.css';

// Modal component to display detailed information about an item
const Modal = ({ show, onClose, item }) => {
    // Return null if the modal should not be shown
    if (!show) {
        return null;
    }

    return (
        // Modal overlay that closes the modal when clicked
        <div className="modal-overlay" onClick={onClose}>
            {/* Modal content that stops event propagation to prevent closing when clicking inside */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Close button to trigger onClose callback */}
                <span className="close-button" onClick={onClose}>&times;</span>

                <div className="modal-body">
                    {/* Displaying the item's image */}
                    <img src={item.image_url} alt={item.name} className="modal-item-image" />

                    {/* Displaying detailed information about the item */}
                    <div className="modal-item-details">
                        <h2>{item.name}</h2>
                        <p><strong>Brand:</strong> {item.brand}</p>
                        <p><strong>Category:</strong> {item.category}</p>
                        <p><strong>Price:</strong> ${item.price}</p>
                        <p><strong>Status:</strong> {item.status}</p>
                        <p><strong>Quantity:</strong> {item.quantity}</p>
                        <p><strong>Attributes:</strong></p>
                        <ul>
                            <li><strong>Type:</strong> {item.attributes.type}</li>
                            <li><strong>Material:</strong> {item.attributes.material}</li>
                            <li><strong>Warranty:</strong> {item.attributes.warranty_years} years</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
