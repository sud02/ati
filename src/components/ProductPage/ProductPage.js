import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import ProductCarousel from './Carousel/ProductCarousel';
import MobileSlider from './MobileSlider/MobileSlider';
import ProductDetails from './ProductDetails/ProductDetails';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import Accordion from './Accordion/Accordion';
import Notification from '../Notification/Notification';
import './ProductPage.css';

const products = [
  { id: 1, name: 'FIRE T-SHIRT', description: 'Description for FIRE T-SHIRT', images: ['/Static/ProductImgs/FIRE.jpg', '/Static/ProductImgs/FIRE.jpg', '/Static/ProductImgs/FIRE.jpg', '/Static/ProductImgs/FIRE.jpg'], price: 1999 },
  { id: 2, name: 'FLORAL T-SHIRT', description: 'Description for FLORAL T-SHIRT', images: ['/Static/ProductImgs/FLORAL.jpg', '/Static/ProductImgs/FLORAL.jpg', '/Static/ProductImgs/FLORAL.jpg', '/Static/ProductImgs/FLORAL.jpg'], price: 1999 },
  { id: 3, name: 'LITM T-SHIRT', description: 'Description for LITM T-SHIRT', images: ['/Static/ProductImgs/LIVE.jpg', '/Static/ProductImgs/LIVE.jpg', '/Static/ProductImgs/LIVE.jpg', '/Static/ProductImgs/LIVE.jpg'], price: 1999 },
  { id: 4, name: 'PIGEON T-SHIRT', description: 'Description for PIGEON T-SHIRT', images: ['/Static/ProductImgs/PIGEON.jpg', '/Static/ProductImgs/PIGEON.jpg', '/Static/ProductImgs/PIGEON.jpg', '/Static/ProductImgs/PIGEON.jpg'], price: 1999 },
];
const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const sizeChart = [
  { size: 'XS', chest: 36, waist: 28, length: 27 },
  { size: 'S', chest: 38, waist: 30, length: 28 },
  { size: 'M', chest: 40, waist: 32, length: 29 },
  { size: 'L', chest: 42, waist: 34, length: 30 },
  { size: 'XL', chest: 44, waist: 36, length: 31 },
];

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart, notification, closeNotification, setNotification } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    document.title = product.name;
  }, [product.name]);

  // Scroll to top when the component is mounted (i.e., when a product page is opened)
  useEffect(() => {
    //window.scrollTo(0, 0);
    setNotification({ message: '', visible: false });
  }, [setNotification]);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = (size) => {
    addToCart(product, size);
  };

  return (
    <div className="product-page">
      <ProductCarousel images={product.images} />
      <MobileSlider images={product.images} />
      <ProductDetails product={product} />
      <ButtonGroup 
        sizes={sizes} 
        sizeChart={sizeChart}
        onAddToCart={(size) => handleAddToCart(size)}
      />
      <Accordion product={product} />
      <Notification message={notification.message} visible={notification.visible} onClose={closeNotification} />
    </div>
  );
};

export default ProductPage;