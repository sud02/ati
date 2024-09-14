import React from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css';

function SideNav({ isOpen, closeSideNav }) {
    const firstName = localStorage.getItem('firstName');
    const isLoggedIn = !!firstName; // Check if the user is logged in

    const handleLogout = () => {
        localStorage.removeItem('firstName');
        closeSideNav();
        // Optionally, you can redirect to the home page or login page
    };

    return (
        <div className={`side-nav ${isOpen ? 'open' : ''}`}>
            <div className="side-nav-content">
                <button 
                    className="close-btn" 
                    onClick={closeSideNav} 
                    aria-label="Close Side Navigation"
                >
                    &times;
                </button>
                
                {firstName && <div className="user-greeting">Hello, {firstName}!</div>}
                
                <ul>
                    <li>
                        <Link to="/shop-all" onClick={closeSideNav}>Shop All</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" onClick={closeSideNav}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/track-order" onClick={closeSideNav}>Track Order</Link>
                    </li>
                    {isLoggedIn && (
                        <li>
                            <Link to="/account" onClick={closeSideNav}>Account</Link>
                        </li>
                    )}
                </ul>
                {isLoggedIn && (
                    <button 
                        className="logout-btn" 
                        onClick={handleLogout} 
                        aria-label="Logout"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
}

export default SideNav;