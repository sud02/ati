// src/context/ShopContext.js
import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'FIRE T-SHIRT', description: 'Cool School Shirt', image: '/Static/ProductImgs/FIRE.jpg', price: '2,995' },
    { id: 2, name: 'FLORAL T-SHIRT', description: 'Crystal T Blue T-Shirt', image: '/Static/ProductImgs/FLORAL.jpg', price: '3,995' },
    { id: 3, name: 'LITM T-SHIRT', description: 'Crystal Black T-Shirt', image: '/Static/ProductImgs/LIVE.jpg', price: '6,995' },
    { id: 4, name: 'PIGEON T-SHIRT', description: 'Black White Polo T-Shirt', image: '/Static/ProductImgs/PIGEON.jpg', price: '9,495' },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  return (
    <ShopContext.Provider value={{ cart, products, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};