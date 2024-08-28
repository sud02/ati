import React from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css';

function SideNav({ isOpen, closeSideNav }) {
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
                </ul>

            </div>
        </div>
    );
}

export default SideNav;
