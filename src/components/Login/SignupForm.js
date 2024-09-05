import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
  return (
    <div className="signup-form-wrapper">
      <div className="signup-form-container">
        <h2 className="signup-title">CREATE ACCOUNT</h2>
        <form className="signup-form">
          <label className="signup-label">First Name</label>
          <input type="text" className="signup-input" required />
          
          <label className="signup-label">Last Name</label>
          <input type="text" className="signup-input" required />
          
          <label className="signup-label">Email</label>
          <input type="email" className="signup-input" required />
          
          <label className="signup-label">Password</label>
          <input type="password" className="signup-input" required />
          
          <button type="submit" className="signup-button">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;