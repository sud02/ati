import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './MobileSlider.css'; // Import the CSS for the mobile slider

const MobileSlider = () => {
  useEffect(() => {
    const slider = document.getElementById('mobileSlider');
    const barContainer = document.getElementById('barContainer');
    const images = slider.getElementsByTagName('img');
    const numImages = images.length;

    // Create a segment for each image
    for (let i = 0; i < numImages; i++) {
      const segment = document.createElement('span');
      segment.classList.add('bar-segment');
      if (i === 0) segment.classList.add('active'); // Set the first segment as active
      barContainer.appendChild(segment);
    }

    const updateActiveIndicator = () => {
      const scrollPosition = slider.scrollLeft;
      const sliderWidth = slider.clientWidth;
      const imageWidth = images[0].clientWidth;
      const currentIndex = Math.round(scrollPosition / imageWidth);

      const segments = barContainer.getElementsByClassName('bar-segment');
      Array.from(segments).forEach((segment, index) => {
        segment.classList.toggle('active', index === currentIndex);
      });
    };

    // Add scroll event listener to update indicators
    slider.addEventListener('scroll', updateActiveIndicator);

    // Clean up the event listener on component unmount
    return () => {
      slider.removeEventListener('scroll', updateActiveIndicator);
    };
  }, []);

  return (
    <>
      <div className="mobile-slider d-md-none" id="mobileSlider">
        <img src="/Static/ProductImgs/FIRE.jpg" alt="FIRE" className="d-block" />
        <img src="/Static/ProductImgs/FLORAL.jpg" alt="FLORAL" className="d-block" />
        <img src="/Static/ProductImgs/LIVE.jpg" alt="LIVE" className="d-block" />
        <img src="/Static/ProductImgs/PIGEON.jpg" alt="PIEGON" className="d-block" />
      </div>
      <div className="bar-container d-md-none" id="barContainer"></div>
    </>
  );
};

export default MobileSlider;
