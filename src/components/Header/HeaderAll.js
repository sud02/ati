import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './headerAll.css'; // Updated to use a separate CSS file for HeaderAll

const HeaderAll = forwardRef(({ toggleSideNav }, ref) => {
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
            <div className="header-title-custom">ATNATIC</div>
            <div className="header-icons-custom">
                <Link to="/search"><img src="/Static/Symbols/magnifying-glass.png" alt="Search" /></Link>
                <Link to="/cart"><img src="/Static/Symbols/shopping-bag.png" alt="Cart" /></Link>
            </div>
        </header>
    );
});

export default HeaderAll;