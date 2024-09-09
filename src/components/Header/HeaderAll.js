import React, { forwardRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import './headerAll.css'; // Updated to use a separate CSS file for HeaderAll
import { CartContext } from '../Cart/CartContext';

const HeaderAll = forwardRef(({ toggleSideNav }, ref) => {
    const { cartItems } = useContext(CartContext);

    return (
        <header className="header-all-custom" ref={ref}>
            <div className="menu-toggle-custom" onClick={toggleSideNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header-links-custom">
                <ul>
                    <li><Link to="/shop-all">Shop All</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/track-order">Track your order</Link></li>
                </ul>
            </div>
            <div className="header-title-custom">
                <Link to="/">ATNATIC</Link>
            </div>
            <div className="header-icons-custom">
                <Link to="/search"><img src="/Static/Symbols/magnifying-glass.png" alt="Search" /></Link>
                <div className="cart-icon-container">
                    <Link to="/cart">
                        <img src="/Static/Symbols/shopping-bag.png" alt="Cart" />
                        {cartItems.length > 0 && (
                            <span className="cart-counter">
                                {cartItems.length > 9 ? '9+' : cartItems.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
});

export default HeaderAll;