import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../UI/InputField";
import { login } from "../api/auth";
import "./LoginLayout.css";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Email:",email)
    console.log("Password:",password)
    try {
      const data = await login(email, password);
      console.log("Logged in:", data.access,data.refresh);
     
     navigate("/Dashboard");
    } catch (err) {
      console.error("Login error:", err);
    } 
  };

  return (
    <div className="parent-login">
      <div className="login-container">
        <h2 className="from-title">Log In</h2>

        <form action="#" className="login-form" onSubmit={handleLogin}>
          <InputField
            type="email"
            placeholder="Email address"
            icon="mail"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            icon="lock"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}

          />

          <button className="login-button">Log In</button>
        </form>

        <p className="signup-text">
          Don&apos;t have an account?
          <Link to="/signUp">Sign up</Link>
        </p>
      </div>
       
    </div>
  );
}
