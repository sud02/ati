import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS for email functionality
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // EmailJS template params
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        // Send email using EmailJS
        emailjs.send('service_kb2jlmp', 'template_acjgr3a', templateParams, 'n_MpKV4J9xGz7_ozd')
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

        // Clear the form after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact-us-container">
            <h2 className="policy-title">CONTACT US</h2>

            <p className="policy-text">
                WE VALUE YOUR FEEDBACK AND ARE HERE TO HELP WITH ANY QUESTIONS OR CONCERNS YOU MAY HAVE. PLEASE USE THE FORM BELOW TO GET IN TOUCH WITH US.
            </p>

            {successMessage && <div className="contact-form__alert contact-form__alert--success">{successMessage}</div>}
            {errorMessage && <div className="contact-form__alert contact-form__alert--danger">{errorMessage}</div>}

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        required
                    />
                </div>

                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <div className="contact-info">
                <p className="policy-text">
                    <strong>CALL:</strong> +91 9988349333<br />
                    <strong>EMAIL:</strong> contact@atnatic.com
                </p>
            </div>
        </div>
    );
};

export default ContactUs;
