import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-image-left">
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
};

export default HeroSection;
