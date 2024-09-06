import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductSection.css';

const ProductSection = () => {
  const navigate = useNavigate();
  const products = [
    { img: '/Static/ProductImgs/FIRE.jpg', alt: 'Cool School Shirt', name: 'FIRE T-SHIRT', price: 'RS. 1,999', id: 1 },
    { img: '/Static/ProductImgs/FLORAL.jpg', alt: 'Crystal T Blue T-Shirt', name: 'FLORAL T-SHIRT', price: 'RS. 1,999', id: 2 },
    { img: '/Static/ProductImgs/LIVE.jpg', alt: 'Crystal Black T-Shirt', name: 'LITM T-SHIRT', price: 'RS. 1,999', id: 3 },
    { img: '/Static/ProductImgs/PIGEON.jpg', alt: 'Black White Polo T-Shirt', name: 'PIGEON T-SHIRT', price: 'RS. 1,999', id: 4 },
  ];

  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <div className="cta-section">
        <div className="cta-left">RECENT DROP</div>
      </div>

      <div className="product-section">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => handleClick(product.id)}
          >
            <div className="card-image">
              <img src={product.img} alt={product.alt} />
            </div>
            <div className="card-content">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
