import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
  
    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        { email, password },
        { withCredentials: true }
      );
  
      console.log("✅ Full Login Response:", res);
      console.log("📌 Response Headers:", res.headers); // Log headers
      console.log("🔍 Actual Response Data:", res.data); 
  
      if (res.data.message.toLowerCase() === "login successful") {
        localStorage.setItem("username", res.data.username);
        setIsLoggedIn(true);
        navigate("/home");
      } else {
        console.log("❌ Unexpected server response:", res.data);
        setError("Unexpected response from server");
      }
    } catch (error) {
      console.error("❌ Login Error:", error);
    
      if (error.response) {
        console.log("🚨 Full Backend Error Response:", error.response);
        console.log("⚠️ Error Status:", error.response.status);
        console.log("⚠️ Backend Message:", error.response.data.message);
        setError(error.response.data.message || "Something went wrong");
      } else if (error.request) {
        console.log("🚨 No response received from server.");
        console.log("⚠️ Request Details:", error.request);
        setError("No response from server. Please check if the backend is running.");
      } else {
        console.log("🚨 Unknown Error:", error.message);
        setError("An unexpected error occurred.");
      }
    }
  };
  


  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">🍽️ Welcome Back!</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="register-text">
          New here? <Link to="/register" className="register-link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
