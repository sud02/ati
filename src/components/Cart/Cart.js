import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'; // You will need to create this CSS file for styling

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Absolut Minance',
            price: 1699,
            size: 'XS',
            quantity: 1,
            image: '/path/to/your/image.png' // Replace with the actual path to your product image
        }
    ]);

    const handleQuantityChange = (itemId, action) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? {
                          ...item,
                          quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1
                      }
                    : item
            )
        );
    };

    const handleRemoveItem = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-container">
            <h1>Your cart</h1>
            <div className="cart-header">
                <span>Product</span>
                <span>Quantity</span>
                <span>Total</span>
            </div>
            {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                    <div className="cart-product">
                        <img src={item.image} alt={item.name} />
                        <div>
                            <p>{item.name}</p>
                            <p>INR. {item.price.toFixed(2)}</p>
                            <p>Size: {item.size}</p>
                        </div>
                    </div>
                    <div className="cart-quantity">
                        <button onClick={() => handleQuantityChange(item.id, 'decrease')} disabled={item.quantity <= 1}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
                        <button onClick={() => handleRemoveItem(item.id)}>🗑️</button>
                    </div>
                    <div className="cart-total">
                        <p>INR. {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                </div>
            ))}
            <div className="cart-summary">
                <p>Estimated total <strong>INR. {calculateTotal().toFixed(2)}</strong></p>
                <p>Taxes included. Discounts and shipping calculated at checkout.</p>
                <button className="checkout-button">Check out</button>
            </div>
            <Link to="/shop-all" className="continue-shopping">Continue shopping</Link>
        </div>
    );
};

export default Cart;
