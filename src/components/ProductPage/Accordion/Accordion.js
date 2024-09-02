import React, { useState } from 'react';
import './Accordion.css';

const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link btn-linkk d-flex justify-content-between align-items-center"
                  onClick={() => handleToggle('collapseOne')}
                >
                  Product Details
                  <span className="toggle-icon">
                    {openSection === 'collapseOne' ? '-' : '+'}
                  </span>
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              className={`collapse ${openSection === 'collapseOne' ? 'show' : ''}`}
              aria-labelledby="headingOne"
            >
              <div className="card-body">
                <ul className="list-styled">
                  <li>Detail 1</li>
                  <li>Detail 2</li>
                  <li>Detail 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12">
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link btn-linkk d-flex justify-content-between align-items-center"
                  onClick={() => handleToggle('collapseTwo')}
                >
                  Description
                  <span className="toggle-icon">
                    {openSection === 'collapseTwo' ? '-' : '+'}
                  </span>
                </button>
              </h5>
            </div>

            <div
              id="collapseTwo"
              className={`collapse ${openSection === 'collapseTwo' ? 'show' : ''}`}
              aria-labelledby="headingTwo"
            >
              <div className="card-body">
                <ul className="list-styled">
                  <li>Description 1</li>
                  <li>Description 2</li>
                  <li>Description 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12">
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link btn-linkk d-flex justify-content-between align-items-center"
                  onClick={() => handleToggle('collapseThree')}
                >
                  Return and Exchange Policy
                  <span className="toggle-icon">
                    {openSection === 'collapseThree' ? '-' : '+'}
                  </span>
                </button>
              </h5>
            </div>

            <div
              id="collapseThree"
              className={`collapse ${openSection === 'collapseThree' ? 'show' : ''}`}
              aria-labelledby="headingThree"
            >
              <div className="card-body">
                <ul className="list-styled">
                  <li>Policy 1</li>
                  <li>Policy 2</li>
                  <li>Policy 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
