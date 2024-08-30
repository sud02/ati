import React from 'react';
import ProductCarousel from './Carousel/ProductCarousel';
import MobileSlider from './MobileSlider/MobileSlider';
import ProductDetails from './ProductDetails/ProductDetails';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import Accordion from './Accordion/Accordion';
const ProductPage = () => {
  return (
    <div className="product-page">
      {/* Other product page content */}
      <ProductCarousel /> 
      {/* Other product page content */}
      <MobileSlider/>

      <ProductDetails/>
      <ButtonGroup/>
      <Accordion/>
    </div>
  );
};

export default ProductPage;
