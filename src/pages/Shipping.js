import React from 'react';
import './Shipping.css';

const Shipping = () => {
    return (
        <div className="shipping-container">
            <h2 className="policy-title">Shipping and Returns</h2>

            <section>
                <h2 className="section-title">Delivery</h2>
                <p className="policy-text">
                    - Orders ship within 24 hours.<br />
                    - Deliveries will be made within 2-4 business days, excluding public holidays.<br />
                    - We partner with Blue Dart Priority, one of India's leading shipping companies, to ensure your orders arrive safely and on time.
                </p>
            </section>

            <section>
                <h2 className="section-title">Returns</h2>
                <p className="policy-text">
                    - 7-day exchange policy.<br />
                    - Product is defective.<br />
                    - Some components or accessories are missing from the product.
                </p>
            </section>

            <section className="highlighted-text">
                <p>
                    You can return or exchange products bought from us if they meet the following conditions.
                </p>
            </section>
        </div>
    );
};

export default Shipping;