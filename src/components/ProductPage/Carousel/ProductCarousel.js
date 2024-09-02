import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './ProductCarousel.css';

const ProductCarousel = ({ images }) => {
  useEffect(() => {
    if (window.bootstrap) {
      const myCarousel = document.querySelector('#demo');
      const bootstrapCarousel = new window.bootstrap.Carousel(myCarousel, {
        interval: 15000, // 15 seconds
        ride: 'carousel',
      });

      const delayedCycle = () => {
        setInterval(() => {
          bootstrapCarousel.next();
        }, 15000); // 15 seconds delay
      };

      delayedCycle();
    } else {
      console.error("Bootstrap is not loaded");
    }
  }, []);

  return (
    <div id="demo" className="carousel slide product-carousel d-none d-md-block" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {images.map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={img} alt={`Product ${index + 1}`} className="d-block" />

          </div>
        ))}
      </div>

      <button className="carousel-control-prev d-none d-lg-block" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next d-none d-lg-block" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default ProductCarousel;
