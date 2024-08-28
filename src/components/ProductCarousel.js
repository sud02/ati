import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './ProductCarousel.css';

const ProductCarousel = () => {
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
      {/* Indicators/dots */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
      </div>

      {/* The slideshow/carousel */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/Static/ProductImgs/FIRE.jpg" alt="FIRE" className="d-block" />
        </div>
        <div className="carousel-item">
          <img src="/Static/ProductImgs/FLORAL.jpg" alt="FLORAL" className="d-block" />
        </div>
        <div className="carousel-item">
          <img src="/Static/ProductImgs/LIVE.jpg" alt="LIVE" className="d-block" />
        </div>
        <div className="carousel-item">
          <img src="/Static/ProductImgs/PIGEON.jpg" alt="PIGEON" className="d-block" />
        </div>
      </div>

      {/* Left and right controls/icons */}
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
