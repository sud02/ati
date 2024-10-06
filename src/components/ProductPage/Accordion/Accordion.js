import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ product }) => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const getSectionsForProduct = (product) => {
    switch (product.id) {
      case 1: // FIRE T-SHIRT
        return [
          {
            title: 'PRODUCT DETAILS',
            content: ['Detail about FIRE T-SHIRT 1', 'Detail about FIRE T-SHIRT 2']
          },
          {
            title: 'DESCRIPTION',
            content: 'This is a description of the FIRE T-SHIRT.'
          },
          {
            title: 'RETURN AND EXCHANGE POLICY',
            content: ['Policy for FIRE T-SHIRT 1', 'Policy for FIRE T-SHIRT 2']
          },
          {
            title: 'CARE AND MAINTENANCE',
            content: ['Do not Iron on print', 'Wash inside out', 'Do not bleach', 'Wash cold']
          }
        ];
      case 2: // FLORAL T-SHIRT
        return [
          {
            title: 'PRODUCT DETAILS',
            content: ['Detail about FLORAL T-SHIRT 1', 'Detail about FLORAL T-SHIRT 2']
          },
          {
            title: 'DESCRIPTION',
            content: 'This is a description of the FLORAL T-SHIRT.'
          },
          {
            title: 'RETURN AND EXCHANGE POLICY',
            content: ['Policy for FLORAL T-SHIRT 1', 'Policy for FLORAL T-SHIRT 2']
          },
          {
            title: 'CARE AND MAINTENANCE',
            content: ['Do not Iron on print', 'Wash inside out', 'Do not bleach', 'Wash cold']
          }
        ];
      case 3: // LITM T-SHIRT
        return [
          {
            title: 'PRODUCT DETAILS',
            content: ['Detail about LITM T-SHIRT 1', 'Detail about LITM T-SHIRT 2']
          },
          {
            title: 'DESCRIPTION',
            content: 'This is a description of the LITM T-SHIRT.'
          },
          {
            title: 'RETURN AND EXCHANGE POLICY',
            content: ['Policy for LITM T-SHIRT 1', 'Policy for LITM T-SHIRT 2']
          },
          {
            title: 'CARE AND MAINTENANCE',
            content: ['Do not Iron on print', 'Wash inside out', 'Do not bleach', 'Wash cold']
          }
        ];
      case 4: // PIGEON T-SHIRT
        return [
          {
            title: 'PRODUCT DETAILS',
            content: ['Detail about PIGEON T-SHIRT 1', 'Detail about PIGEON T-SHIRT 2']
          },
          {
            title: 'DESCRIPTION',
            content: 'This is a description of the PIGEON T-SHIRT.'
          },
          {
            title: 'RETURN AND EXCHANGE POLICY',
            content: ['Policy for PIGEON T-SHIRT 1', 'Policy for PIGEON T-SHIRT 2']
          },
          {
            title: 'CARE AND MAINTENANCE',
            content: ['Do not Iron on print', 'Wash inside out', 'Do not bleach', 'Wash cold']
          }
        ];
      default:
        return [];
    }
  };
  

  const sections = getSectionsForProduct(product);

  return (
    <div className="container mt-2">
      <div className="row">
        {sections.map((section, index) => (
          <div key={index} className="col-lg-4 col-12">
            <div className="card">
              <div className="card-header" id={`heading${index}`}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link btn-linkk d-flex justify-content-between align-items-center btn-font"
                    onClick={() => handleToggle(`collapse${index}`)}
                  >
                    {section.title}
                    <span className="toggle-icon">
                      {openSection === `collapse${index}` ? '-' : '+'}
                    </span>
                  </button>
                </h5>
              </div>

               <div
                 id={`collapse${index}`}
                 className={`collapse ${openSection === `collapse${index}` ? 'show' : ''}`}
                 aria-labelledby={`heading${index}`}
               >
                <div className="card-body">
                  {Array.isArray(section.content) ? (
                    <ul className="list-styled">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
