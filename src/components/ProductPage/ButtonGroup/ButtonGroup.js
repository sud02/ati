import React, { useState } from 'react';
import './ButtonGroup.css';

const ButtonGroup = ({ sizes = [], sizeChart = [], onBuyNow, onAddToCart }) => {
  // State to track the active size
  const [activeSize, setActiveSize] = useState(null);

  // Handle size button click
  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  return (
    <>
      {/* Button group */}
      <div className="cont">
        <div className="btn-group d-flex justify-content-center mb-2 mt-3">
          {sizes.map(size => (
            <button
              key={size}
              type="button"
              className={`btn btn-outline-dark btn-sz btn-light ${activeSize === size ? 'active' : ''}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
          <button
            type="button"
            className="btn btn-link btn-customm"
            data-bs-toggle="modal"
            data-bs-target="#sizeChartModal"
          >
            SIZE CHART
          </button>
        </div>
      </div>

      {/* Size chart modal */}
      <div className="modal fade" id="sizeChartModal" tabIndex="-1" aria-labelledby="sizeChartModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="sizeChartModalLabel">Size Chart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest</th>
                    <th>Waist</th>
                    <th>Length</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.length > 0 ? (
                    sizeChart.map(({ size, chest, waist, length }) => (
                      <tr key={size}>
                        <td>{size}</td>
                        <td>{chest}</td>
                        <td>{waist}</td>
                        <td>{length}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No size chart available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add to cart and buy now buttons */}
      <div className="container mt-2 mb-2">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-auto d-grid mb-2 mb-md-0">
            <button className="btn btn-dark btn-custom-lg w-100" onClick={onBuyNow}>BUY NOW</button>
          </div>
          <div className="col-12 col-md-auto d-grid">
            <button className="btn btn-outline-dark btn-custom-lg w-100" onClick={() => onAddToCart(activeSize)}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonGroup;