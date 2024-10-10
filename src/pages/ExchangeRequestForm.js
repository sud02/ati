import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ExchangeRequestForm.css';

const ExchangeRequestForm = () => {
  const [orderId, setOrderId] = useState('');
  const [contact, setContact] = useState('');
  const [issue, setIssue] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      order_id: orderId,     // Sends the Order ID
      user_email: contact,   // User's email or phone as input
      message: issue,        // The message or issue details
    };

    // Send email using EmailJS
    emailjs.send('service_kb2jlmp', 'template_3fhjcwn', templateParams, 'n_MpKV4J9xGz7_ozd')
      .then((response) => {
        setLoading(false);
        setSuccessMessage('Your request has been sent successfully!');
        setErrorMessage('');
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        setLoading(false);
        setErrorMessage('Failed to send the request. Please try again later.');
        setSuccessMessage('');
        console.log('FAILED...', err);
      });

    // Clear the form after submission
    setOrderId('');
    setContact('');
    setIssue('');
  };

  return (
    <div className="exchange-form__container exchange-form__mt-4">
      <h2 className="exchange-form__title">EXCHANGE REQUEST</h2>
      {successMessage && <div className="exchange-form__alert exchange-form__alert--success">{successMessage}</div>}
      {errorMessage && <div className="exchange-form__alert exchange-form__alert--danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="exchange-form__form">
        <div className="exchange-form__field">
          <label className="exchange-form__label">ORDER ID:</label>
          <input
            type="text"
            className="exchange-form__input"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
        </div>
        <div className="exchange-form__field">
          <label className="exchange-form__label">EMAIL/PHONE:</label>
          <input
            type="text"
            className="exchange-form__input"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="exchange-form__field">
          <label className="exchange-form__label">ISSUE:</label>
          <textarea
            className="exchange-form__textarea"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="exchange-form__button" disabled={loading}>
          {loading ? 'Submitting...' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
};

export default ExchangeRequestForm;
