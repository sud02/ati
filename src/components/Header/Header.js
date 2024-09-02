// src/components/Header/Header.js
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
import SearchBar from './Header/SearchBar'; // Import the SearchBar component
=======
import SearchBar from './SearchBar'; // Import the SearchBar component
>>>>>>> Stashed changes

const Header = forwardRef(({ toggleSideNav }, ref) => {
    return (
        <header ref={ref}>
            <div className="menu-toggle" onClick={toggleSideNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header-links">
                <ul>
                    <li><Link to="/shop-all">Shop All</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/track-order">Track your order</Link></li>
                </ul>
            </div>
            <div className="header-icons">
                <SearchBar /> {/* Replace the search icon link with the SearchBar component */}
                <Link to="/cart"><img src="/Static/Symbols/shopping-bag.png" alt="Cart" /></Link>
            </div>
        </header>
    );
});

export default Header;