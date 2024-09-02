import React, { useState } from 'react';
import { FiShoppingCart, FiPlus, FiMinus, FiTrash2, FiHeart } from 'react-icons/fi';

const CartItem = ({ item, updateQuantity, removeItem, saveForLater }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200">
    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
    <div className="flex-grow">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
    </div>
    <div className="flex items-center">
      <button
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        className="p-1 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Decrease quantity"
      >
        <FiMinus />
      </button>
      <span className="mx-2">{item.quantity}</span>
      <button
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        className="p-1 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Increase quantity"
      >
        <FiPlus />
      </button>
    </div>
    <div className="flex items-center ml-4">
      <button
        onClick={() => removeItem(item.id)}
        className="p-2 text-gray-600 hover:text-black transition-colors"
        aria-label="Remove item"
      >
        <FiTrash2 />
      </button>
      <button
        onClick={() => saveForLater(item.id)}
        className="p-2 text-gray-600 hover:text-black transition-colors"
        aria-label="Save for later"
      >
        <FiHeart />
      </button>
    </div>
  </div>
);

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Black T-Shirt', price: 19.99, quantity: 1, image: 'https://example.com/black-tshirt.jpg' },
    { id: 2, name: 'White Sneakers', price: 79.99, quantity: 1, image: 'https://example.com/white-sneakers.jpg' },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const saveForLater = (id) => {
    // Implement save for later functionality
    console.log(`Item ${id} saved for later`);
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FiShoppingCart className="mr-2" /> Your Cart
      </h2>
      <div className="space-y-4">
        {items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            saveForLater={saveForLater}
          />
        ))}
      </div>
      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Subtotal:</span>
          <span className="text-xl font-bold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-black h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(subtotal / 100) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {subtotal < 100 ? `$${(100 - subtotal).toFixed(2)} away from free shipping!` : 'You qualify for free shipping!'}
        </p>
        <button
          className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          onClick={() => console.log('Proceed to checkout')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;