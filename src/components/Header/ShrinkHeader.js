import React, { useState, useEffect, useRef } from 'react';
import './ShrinkHeader.css';

const ShrinkHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);

    const handleScroll = () => {
        // Set scrolled to true if the page has been scrolled down
        setScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`shrink-header-container ${scrolled ? 'scrolled' : ''}`} ref={headerRef}>
            <h1 className="shrink-header-text">ATNATIC</h1>
        </div>
    );
};

export default ShrinkHeader;
