import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './MobileSlider.css';

const MobileSlider = ({ images }) => {
  useEffect(() => {
    const slider = document.getElementById('mobileSlider');
    const barContainer = document.getElementById('barContainer');
    const numImages = images.length;

    for (let i = 0; i < numImages; i++) {
      const segment = document.createElement('span');
      segment.classList.add('bar-segment');
      if (i === 0) segment.classList.add('active');
      barContainer.appendChild(segment);
    }

    const updateActiveIndicator = () => {
      const scrollPosition = slider.scrollLeft;
      const imageWidth = slider.querySelector('img').clientWidth;
      const currentIndex = Math.round(scrollPosition / imageWidth);

      const segments = barContainer.getElementsByClassName('bar-segment');
      Array.from(segments).forEach((segment, index) => {
        segment.classList.toggle('active', index === currentIndex);
      });
    };

    slider.addEventListener('scroll', updateActiveIndicator);

    return () => {
      slider.removeEventListener('scroll', updateActiveIndicator);
    };
  }, [images]);

  return (
    <>
      <div className="mobile-slider d-md-none" id="mobileSlider">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Product image ${index + 1}`} className="d-block" />
        ))}
      </div>
      <div className="bar-container d-md-none" id="barContainer"></div>
    </>
  );
};

export default MobileSlider;
