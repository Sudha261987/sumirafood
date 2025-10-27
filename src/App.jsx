import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RecipeDetails from "./pages/RecipeDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-details" element={<RecipeDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}