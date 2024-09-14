import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://backenddeploy-e6898dc34696.herokuapp.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Save token to localStorage or context
        localStorage.setItem('token', data.token);
        localStorage.setItem('firstName', data.firstName);
        localStorage.setItem('lastName', data.lastName);
        window.location.href = '/'; // Redirect to home page or dashboard
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className="login-form-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">LOGIN</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label">Email</label>
          <input 
            type="email" 
            className="login-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          
          <label className="login-label">Password</label>
          <input 
            type="password" 
            className="login-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          
          <button type="submit" className="login-button">SIGN IN</button>
          
          {error && <div className="login-error">{error}</div>}
          
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
