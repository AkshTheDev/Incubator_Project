import React from 'react';
import { Link } from 'react-router-dom';
import InputField from "../UI/InputField";  

import './LoginLayout.css'


export default function Login(){

    return(
        <div className="login-container">
      <h2 className="from-title">Log In</h2>

      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />

        <button className="login-button">Log In</button>
      </form>

      <p className="signup-text">
         Don&apos;t have an account? 
        <Link to="/signUp">Sign up</Link>
        </p>
    </div>
    );
}