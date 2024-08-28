import React from 'react';
import './ProductSection.css';

const ProductSection = () => {
  const products = [
    { img: '/Static/ProductImgs/FIRE.jpg', alt: 'Cool School Shirt', name: 'FIRE T-SHIRT', price: 'RS. 5,995' },
    { img: '/Static/ProductImgs/FLORAL.jpg', alt: 'Crystal T Blue T-Shirt', name: 'FLORAL T-SHIRT', price: 'RS. 5,995' },
    { img: '/Static/ProductImgs/LIVE.jpg', alt: 'Crystal Black T-Shirt', name: 'LITM T-SHIRT', price: 'RS. 5,995' },
    { img: '/Static/ProductImgs/PIGEON.jpg', alt: 'Black White Polo T-Shirt', name: 'PIGEON T-SHIRT', price: 'RS. 4,495' },
  ];

  return (
    <div>
      {/* "LATEST DROP" and "DISCOVER MORE" Section */}
      <div className="cta-section">
        <div className="cta-left">RECENT DROP</div>
      </div>

      {/* Products Section */}
      <div className="product-section">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
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
