import React from 'react';

<<<<<<< Updated upstream


const ProductDetails = () => {
  return (
    <div className="container mt-3" >
      <div className="row">
        <div className="col-12">
          {/* Display for medium to large screens */}
          <h2 className="d-none d-md-block text-center">LIVE IN THE MOMENT BLUE TSHIRT</h2>
          {/* Display for small screens */}
          <h5 className="d-md-none text-center">LIVE IN THE MOMENT BLUE TSHIRT</h5>
=======
const ProductDetails = ({ product }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          {/* Display for medium to large screens */}
          <h2 className="d-none d-md-block text-center">{product.name}</h2>
          {/* Display for small screens */}
          <h5 className="d-md-none text-center">{product.name}</h5>
>>>>>>> Stashed changes
        </div>
      </div>
      <div className="row mt-0 mb-0">
        <div className="col-12">
          {/* Display for medium to large screens */}
<<<<<<< Updated upstream
          <h4 className="d-none d-md-block text-center">RS.1,999</h4>
          {/* Display for small screens */}
          <h6 className="d-md-none text-center ft-sz">RS.1,999</h6>
=======
          <h4 className="d-none d-md-block text-center">RS.{product.price}</h4>
          {/* Display for small screens */}
          <h6 className="d-md-none text-center ft-sz">RS.{product.price}</h6>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
};

<<<<<<< Updated upstream
export default ProductDetails;
=======
export default ProductDetails;
>>>>>>> Stashed changes
