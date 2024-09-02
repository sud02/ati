<<<<<<< Updated upstream
import React from 'react';
=======
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
>>>>>>> Stashed changes
import ProductCarousel from './Carousel/ProductCarousel';
import MobileSlider from './MobileSlider/MobileSlider';
import ProductDetails from './ProductDetails/ProductDetails';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import Accordion from './Accordion/Accordion';
<<<<<<< Updated upstream
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
=======
import { ShopContext } from '../../context/ShopContext';

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useContext(ShopContext);

  // Add a defensive check to ensure products is defined
  if (!products) {
    return <div>Loading...</div>;
  }

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <ProductCarousel product={product} />
      <MobileSlider product={product} />
      <ProductDetails product={product} />
      <ButtonGroup product={product} />
      <Accordion product={product} />
>>>>>>> Stashed changes
    </div>
  );
};

<<<<<<< Updated upstream
export default ProductPage;
=======
export default ProductPage;
>>>>>>> Stashed changes
