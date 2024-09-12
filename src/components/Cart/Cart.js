import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { CartContext } from './CartContext';
import './Cart.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trashBinIcon from '../../assets/dustbin.png';

const Cart = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

    useEffect(() => {
        document.title = 'Cart';
    }, []);

    const handleQuantityChange = (itemId, size, action) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId && item.size === size
                    ? {
                          ...item,
                          quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1
                      }
                    : item
            )
        );
    };

    const handleRemoveItem = (itemId, size) => {
        setCartItems(prevItems => prevItems.filter(item => !(item.id === itemId && item.size === size)));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const formatPrice = (price) => {
        return price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const randomProducts = [
        { id: 1, name: 'FIRE T-SHIRT', images: ['/Static/ProductImgs/FIRE.jpg'] },
        { id: 2, name: 'FLORAL T-SHIRT', images: ['/Static/ProductImgs/FLORAL.jpg'] },
        { id: 3, name: 'LITM T-SHIRT', images: ['/Static/ProductImgs/LIVE.jpg'] },
        { id: 4, name: 'PIGEON T-SHIRT', images: ['/Static/ProductImgs/PIGEON.jpg'] },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2800,
    };

    return (
        <div className="cart-container">
            {cartItems.length === 0 ? (
                <div className="empty-cart-container">
                    <div className="empty-cart-message">
                        <h2>YOUR CART IS EMPTY</h2>
                        <Link to="/" className="continue-shopping">CONTINUE SHOPPING</Link>
                    </div>
                    <div className="random-products-container">
                        <h6>YOU MIGHT LIKE</h6>
                        <Slider {...settings}>
                            {randomProducts.map(product => (
                                <div key={product.id} className="random-product-card">
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.images[0]} alt={product.name} loading="eager"/>
                                    </Link>
                                    <p className="product-name">{product.name}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            ) : (
                <>
                    <div className="cart-header">
                        <span>PRODUCT</span>
                        <span>QUANTITY</span>
                        <span>TOTAL</span>
                    </div>
                    {cartItems.map(item => (
                        <div className="cart-item" key={`${item.id}-${item.size}`}>
                            <div className="cart-product">
                                {item.images && item.images[0] && (
                                    <Link to={`/product/${item.id}`}>
                                        <img src={item.images[0]} alt={item.name} />
                                    </Link>
                                )}
                                <div>
                                    <p className="product-name">{item.name}</p>
                                    <p className="product-size">SIZE: {item.size}</p>
                                </div>
                            </div>
                            <div className="cart-quantity-wrapper">
                                <div className="cart-quantity-controls">
                                    <button onClick={() => handleQuantityChange(item.id, item.size, 'decrease')} disabled={item.quantity <= 1}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.size, 'increase')}>+</button>
                                </div>
                                <button className="cart-remove-button" onClick={() => handleRemoveItem(item.id, item.size)}>
                                    <img src={trashBinIcon} alt="Remove item" className="remove-icon" />
                                </button>
                            </div>
                            <div className="cart-total">
                                <p>{formatPrice(item.price * item.quantity)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                    <p className="total-price">TOTAL <strong>INR {formatPrice(calculateTotal())}</strong></p>
<p className="taxes-included">ALL TAXES INCLUDED.</p>
<button className="checkout-button" disabled={cartItems.length === 0}>CHECK OUT</button>
                    </div>
                    <div className="cart-buttons-container">
                        <Link to="/" className="continue-shopping">CONTINUE SHOPPING</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;