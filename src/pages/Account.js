import React from 'react';
import './Account.css';

function Account() {
    const firstName = localStorage.getItem('firstName');
    const email = localStorage.getItem('email'); // Assuming email is stored in localStorage
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || []; // Assuming order history is stored in localStorage

    return (
        <div className="account-container">
            <h1>Account Details</h1>
            <div className="account-info">
                <p><strong>Name:</strong> {firstName}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>
            <div className="order-history">
                <h2>Order History</h2>
                {orderHistory.length > 0 ? (
                    <ul>
                        {orderHistory.map((order, index) => (
                            <li key={index}>
                                <p><strong>Order ID:</strong> {order.id}</p>
                                <p><strong>Date:</strong> {order.date}</p>
                                <p><strong>Total:</strong> ${order.total}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </div>
    );
}

export default Account;