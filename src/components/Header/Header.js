import React, { forwardRef, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import './Header.css';


const Header = forwardRef(({ toggleSideNav }, ref) => {
    const { cartItems } = useContext(CartContext);
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearchDropdown = () => {
        setShowSearch(!showSearch);
    };

    return (
        <header ref={ref}>
            <div className="menu-toggle" onClick={toggleSideNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header-title">
                <Link to="/">
                    {/* <h1>ATNATIC</h1> */}
                    
                </Link>
            </div>
            <div className="header-links">
                <ul>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/track-order">Track your order</Link></li>
                </ul>
            </div>
            <div className="header-icons">
                {!showSearch && (
                    <div onClick={toggleSearchDropdown} className="search-icon">
                        <img src="/Static/Symbols/magnifying-glass.png" alt="Search" />
                    </div>
                )}
                {showSearch && (
                    <div className="search-dropdown">
                        <div className="input-container">

                        <input
                            type="text"
                            className="form-control d-none d-md-block big-screen" // Hidden on small screens, visible on medium and up
                            placeholder="Search..."
                        />
                        <input
                            type="text"
                            className="form-control d-block d-md-none small-screen" // Visible on small screens
                            placeholder="Search..."
                        />
                     <button className="close-button" onClick={() => setShowSearch(false)}>X</button>
                        </div>
                    </div>
                )}
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
