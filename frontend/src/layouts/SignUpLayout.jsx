import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpLayout.css'
import { signup } from '../api/auth';

function SignUp() {
  const navigate = useNavigate();
  // States to manage the form input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signup(formData.firstName,formData.lastName,formData.email,formData.password);
      console.log('User Signed Up',data);
      navigate("/login")
    } 
    catch (error) {
      console.error("SignUp error:", error);
    }
    
  };

  return (
    
    <div className='signup'>
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
        {/* <div className="input-wrapper">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div> */}
        
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
        <Link to="/login">Log In</Link>
      </p>
    </div>
    </div>
  );
}

export default SignUp;
