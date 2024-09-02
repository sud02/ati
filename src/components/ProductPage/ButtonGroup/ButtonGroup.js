import React from 'react';
import './ButtonGroup.css';

const ButtonGroup = () => {
  return (
    <>
      {/* Button group */}
      <div className="cont">
        <div className="btn-group d-flex justify-content-center mb-2 mt-3">
          <button type="button" className="btn btn-outline-dark btn-sz btn-light">XS</button>
          <button type="button" className="btn btn-outline-dark btn-sz btn-light">S</button>
          <button type="button" className="btn btn-outline-dark btn-sz btn-light">M</button>
          <button type="button" className="btn btn-outline-dark btn-sz btn-light">L</button>
          <button type="button" className="btn btn-outline-dark btn-sz btn-light">XL</button>
          <button type="button" className="btn btn-link btn-customm" data-bs-toggle="modal" data-bs-target="#sizeChartModal">
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
                  <tr>
                    <td>XS</td>
                    <td>36</td>
                    <td>28</td>
                    <td>27</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>38</td>
                    <td>30</td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>40</td>
                    <td>32</td>
                    <td>29</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>42</td>
                    <td>34</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>44</td>
                    <td>36</td>
                    <td>31</td>
                  </tr>
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
            <div className="btn btn-dark btn-custom-lg w-100">BUY NOW</div>
          </div>
          <div className="col-12 col-md-auto d-grid">
            <div className="btn btn-outline-dark btn-custom-lg w-100">ADD TO CART</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonGroup;
