import React, { useState } from "react";
import "../CSS/Login.css";
import logo from "../images/Group 3.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let toproduct = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    toproduct("/dashboard");
  };

  return (
    <div className="login-container">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <p className="paragraph"> #We are Electric </p>

      {/* Email Field */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input-email"
        placeholder="Email"
      />

      {/* Password Field */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input-pwd"
        placeholder="Password"
      />

      {/* Login Button */}
      <button onClick={handleLogin} className="login-button">
        Login
      </button>

      {/* Forgot Password Link */}
      <a href="/forgot-password" className="forgot-password-link">
        Forgot Password?
      </a>
    </div>
  );
};

export default Login;
