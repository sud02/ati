import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/search"><img src="/Static/Symbols/magnifying-glass.png" alt="Search" /></Link>
                <Link to="/cart"><img src="/Static/Symbols/shopping-bag.png" alt="Cart" /></Link>
            </div>
        </header>
    );
});

export default Header;
