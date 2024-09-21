import React, { forwardRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';

const Header = forwardRef(({ toggleSideNav }, ref) => {
    const { cartItems } = useContext(CartContext);

    return (
        <header ref={ref}>
            <div className="menu-toggle" onClick={toggleSideNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header-title">
                <Link to="/">
                    <h1 className="header-title">ATNATIC</h1>
                </Link>
            </div>
            <div className="header-links">
                <ul>
                    
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/track-order">Track your order</Link></li>
                </ul>
            </div>
            <div className="header-icons">
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

export default Header;