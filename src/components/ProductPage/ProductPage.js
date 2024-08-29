import React from 'react';
import ProductCarousel from './Carousel/ProductCarousel';
import MobileSlider from './MobileSlider/MobileSlider';

const ProductPage = () => {
  return (
    <div className="product-page">
      {/* Other product page content */}
      <ProductCarousel />
      {/* Other product page content */}
      <MobileSlider/>
    </div>
  );
};

export default ProductPage;
