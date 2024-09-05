import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleQuantityChange = (itemId, size, action) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId && item.size === size
                    ? {
                          ...item,
                          quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1
                      }
                    : item
            )
        );
    };

    const handleRemoveItem = (itemId, size) => {
        setCartItems(prevItems => prevItems.filter(item => !(item.id === itemId && item.size === size)));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const formatPrice = (price) => {
        return parseFloat(price).toFixed(2).replace(/\.00$/, '');
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            <div className="cart-header">
                <span>Product</span>
                <span>Quantity</span>
                <span>Total</span>
            </div>
            {cartItems.map(item => (
                <div className="cart-item" key={`${item.id}-${item.size}`}>
                    <div className="cart-product">
                        {item.images && item.images[0] && (
                            <img src={item.images[0]} alt={item.name} />
                        )}
                        <div>
                            <p>{item.name}</p>
                            <p>Size: {item.size}</p>
                        </div>
                    </div>
                    <div className="cart-quantity">
                        <button onClick={() => handleQuantityChange(item.id, item.size, 'decrease')} disabled={item.quantity <= 1}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, item.size, 'increase')}>+</button>
                        <button onClick={() => handleRemoveItem(item.id, item.size)}>
                            <span role="img" aria-label="remove item">🗑️</span>
                        </button>
                    </div>
                    <div className="cart-total">
                        <p>{formatPrice(item.price * item.quantity)}</p>
                    </div>
                </div>
            ))}
            <div className="cart-summary">
                <p>Estimated total <strong>INR. {formatPrice(calculateTotal())}</strong></p>
                <p>Taxes included. Discounts and shipping calculated at checkout.</p>
                <button className="checkout-button">Check out</button>
            </div>
            <Link to="/" className="continue-shopping">Continue shopping</Link>
        </div>
    );
};

export default Cart;