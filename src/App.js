import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutUs from "./pages/AboutUs";
import Recipes from "./pages/Recipes";
import axios from "axios";
axios.defaults.withCredentials = true;
import Createrecipes from "./pages/Createrecipes"; // Ensures cookies & sessions are sent properly
import RecipesList from "./pages/RecipesList";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/createrecipes" element={<Createrecipes />} />
        <Route path="/recipes" element={<RecipesList />} />
      </Routes>
    </Router>
  );
}

export default App;
