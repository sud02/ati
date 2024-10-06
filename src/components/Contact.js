import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      email: email,
      message: message,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        setLoading(false);
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        setLoading(false);
        setErrorMessage('Failed to send the message. Please try again later.');
        setSuccessMessage('');
        console.log('FAILED...', err);
      });

    // Clear the form
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-form__container contact-form__mt-4">
      <h2 className="contact-form__title">CONTACT US</h2>
      {successMessage && <div className="contact-form__alert contact-form__alert--success">{successMessage}</div>}
      {errorMessage && <div className="contact-form__alert contact-form__alert--danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="contact-form__form">
        <div className="contact-form__field">
          <label className="contact-form__label">EMAIL:</label>
          <input
            type="email"
            className="contact-form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label">MESSAGE:</label>
          <textarea
            className="contact-form__textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="contact-form__button" disabled={loading}>
          {loading ? 'Submitting...' : 'SEND MESSAGE'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
