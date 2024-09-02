import React from 'react';
import { Link } from 'react-router-dom';
import './ProductSection.css';

const ProductSection = () => {
  const products = [
    { id: 1, img: '/Static/ProductImgs/FIRE.jpg', alt: 'Cool School Shirt', name: 'FIRE T-SHIRT', price: 'RS. 5,995' },
    { id: 2, img: '/Static/ProductImgs/FLORAL.jpg', alt: 'Crystal T Blue T-Shirt', name: 'FLORAL T-SHIRT', price: 'RS. 5,995' },
    { id: 3, img: '/Static/ProductImgs/LIVE.jpg', alt: 'Crystal Black T-Shirt', name: 'LITM T-SHIRT', price: 'RS. 5,995' },
    { id: 4, img: '/Static/ProductImgs/PIGEON.jpg', alt: 'Black White Polo T-Shirt', name: 'PIGEON T-SHIRT', price: 'RS. 4,495' },
  ];

  return (
    <div>
      {/* "LATEST DROP" and "DISCOVER MORE" Section */}
      <div className="cta-section">
        <div className="cta-left">RECENT DROP</div>
      </div>

      {/* Products Section */}
      <div className="product-section">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <div className="card-image">
              <img src={product.img} alt={product.alt} />
            </div>
            <div className="card-content">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;