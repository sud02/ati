import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://backend-ati-81lf.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName, lastName }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert('User created successfully');
        window.location.href = '/login'; // Redirect to login page after signup
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className="signup-form-wrapper">
      <div className="signup-form-container">
        <h2 className="signup-title">CREATE ACCOUNT</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label className="signup-label">First Name</label>
          <input 
            type="text" 
            className="signup-input" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
          />
          
          <label className="signup-label">Last Name</label>
          <input 
            type="text" 
            className="signup-input" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required 
          />
          
          <label className="signup-label">Email</label>
          <input 
            type="email" 
            className="signup-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          
          <label className="signup-label">Password</label>
          <input 
            type="password" 
            className="signup-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          
          <button type="submit" className="signup-button">CREATE</button>
          
          {error && <div className="signup-error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
