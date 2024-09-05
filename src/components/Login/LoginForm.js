import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">LOGIN</h2>
        <form className="login-form">
          <label className="login-label">Email</label>
          <input type="email" className="login-input" required />
          
          <label className="login-label">Password</label>
          <input type="password" className="login-input" required />
          
          <button type="submit" className="login-button">SIGN IN</button>
          
          <div className="login-extra-options py-2">
            <a href="/forgot-password" className="login-link">Forgot your password?</a>
            <a href="/signup" className="login-link">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
