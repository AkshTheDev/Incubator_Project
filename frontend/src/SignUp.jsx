import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  // States to manage the form input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',  // Added username state
    email: '',
    password: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle signup, e.g., API call or validation
    console.log('User Signed Up:', formData);
  };

  return (
    <div className="sign-up-container">
      <h2 className="form-title">Sign Up</h2>
      
      <form className="sign-up-form" onSubmit={handleSubmit}>
        {/* First Name field */}
        <div className="input-wrapper">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        
        {/* Last Name field */}
        <div className="input-wrapper">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        {/* Username field */}
        <div className="input-wrapper">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        
        {/* Email field */}
        <div className="input-wrapper">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        {/* Password field */}
        <div className="input-wrapper">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>

      <p className="login-text">
        Already have an account? 
        <Link to="/">Log In</Link>
      </p>
    </div>
  );
}

export default SignUp;
