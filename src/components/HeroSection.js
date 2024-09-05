import React, { forwardRef } from 'react';

const HeroSection = forwardRef((props, ref) => {
    return (
        <div className="hero-section">
            <div className="hero-image-left">
                <h1 className="hero-scroll" ref={ref}>ATNATIC</h1>
                <div className="video-container">
                    <video 
                        src="/Static/Models/Refercopy.mp4" 
                        autoPlay 
                        loop 
                        muted
                        playsInline
                        className="hero-video"
                    />
                </div>
            </div>
        </div>
    );
});

export default HeroSection;
