import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
  const [token, setToken] = useState('');

  useEffect(() => {
    document.title = product.name;
  }, [product.name]);

  // Scroll to top when the component is mounted (i.e., when a product page is opened)
  useEffect(() => {
    window.scrollTo(0, 0);
    setNotification({ message: '', visible: false });

    // Get the Shiprocket token from the backend
    const getToken = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/shiprocket-token');
        setToken(response.data.token);
        console.log('Token retrieved:', response.data.token); // Log the token to verify
      } catch (error) {
        console.error('Error getting Shiprocket token:', error);
      }
    };

    getToken();
  }, [setNotification]);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = (size) => {
    addToCart(product, size);
  };

  const updatePickupLocationCurl = async (orderId, pickupLocation) => {
    try {
      const response = await axios.post('http://localhost:9000/api/update-pickup-location', {
        orderId,
        pickupLocation
      });
      console.log('Pickup location updated:', response.data);
    } catch (error) {
      console.error('Error updating pickup location:', error);
    }
  };

  const handleBuyNow = async () => {
    try {
      const orderDetails = {
        order_id: `order_${product.id}_${Date.now()}`,
        order_date: new Date().toISOString(),
        pickup_location: "1/1259, Bangala Thota, Revenue Ward N 1, Nellore, Nellore, Andhra Pradesh, India, 524002",
        channel_id: "",
        comment: "Reseller: M/s Goku",
        billing_customer_name: "Naruto",
        billing_last_name: "Uzumaki",
        billing_address: "House 221B, Leaf Village",
        billing_address_2: "Near Hokage House",
        billing_city: "New Delhi",
        billing_pincode: "110002",
        billing_state: "Delhi",
        billing_country: "India",
        billing_email: "naruto@uzumaki.com",
        billing_phone: "9876543210",
        shipping_is_billing: true,
        order_items: [
          {
            name: product.name,
            sku: `sku_${product.id}`,
            units: 1,
            selling_price: product.price,
            discount: "",
            tax: "",
            hsn: 441122
          }
        ],
        payment_method: "Prepaid",
        shipping_charges: 0,
        giftwrap_charges: 0,
        transaction_charges: 0,
        total_discount: 0,
        sub_total: product.price,
        length: 10,
        breadth: 15,
        height: 20,
        weight: 2.5
      };

      console.log('Token:', token); // Log the token to ensure it's being set correctly

      const orderResponse = await axios.post(
        'https://apiv2.shiprocket.in/v1/external/orders/create/adhoc',
        orderDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Order created:', orderResponse.data);

      // Update pickup location using the backend endpoint
      await updatePickupLocationCurl(orderDetails.order_id, orderDetails.pickup_location);
    } catch (error) {
      console.error('Error creating order with Shiprocket:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
    }
  };

  return (
    <div className="product-page">
      <ProductCarousel images={product.images} />
      <MobileSlider images={product.images} />
      <ProductDetails product={product} />
      <ButtonGroup 
        sizes={sizes} 
        sizeChart={sizeChart}
        onBuyNow={handleBuyNow} 
        onAddToCart={(size) => handleAddToCart(size)}
      />
      <Accordion product={product} />
      <Notification message={notification.message} visible={notification.visible} onClose={closeNotification} />
    </div>
  );
};

export default ProductPage;