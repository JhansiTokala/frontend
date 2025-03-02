import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 120vh;
  background: url("/register.jpg") no-repeat center center fixed;
  background-size: cover; /* Full coverage */
 padding-left: 30px; 
`;

const FormWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7); /* Dark semi-transparent overlay */
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 400px;
  text-align: center;
  color: white; /* White text for contrast */
    
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #555;
  border-radius: 6px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const Button = styled.button`
  width: 100%;
  background: #ff9900;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #cc7700;
  }
`;

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/register",  // ✅ Changed to correct backend port
        { username, email, password },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
  
      console.log("🔹 Registration Response:", res); // Debugging
  
      if (res.status === 201) {  // ✅ Now matches backend's response
        localStorage.setItem("username", username);
        setIsLoggedIn(true);
        navigate("/home");
        alert("🎉 Registration successful!");
      }
    } catch (error) {
      console.error("❌ Registration Error:", error.response?.data);
      alert(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };
  

  return (
    <RegisterContainer>
      <FormWrapper>
        <h2>Register</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleRegister}>Register</Button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </FormWrapper>
    </RegisterContainer>
  );
};

export default Register;
