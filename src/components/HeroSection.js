import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = forwardRef((props, ref) => {
    return (
        <div className="hero-section">
            <div className="hero-image-left">
                <Link to="/">
                    <h1 className="hero-scroll" ref={ref}>ATNATIC</h1>
                </Link>
                <div className="video-container">
                    <video 
                        src="/Static/Models/Refercopy.mp4" 
                        autoPlay 
                        loop 
                        muted
                        playsInline
                        preload="auto"
                        className="hero-video"
                    />
                </div>
            </div>
        </div>
    );
});

export default HeroSection;