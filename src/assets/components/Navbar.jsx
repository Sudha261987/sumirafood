import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center shadow">
      <Link to="/" className="text-xl font-bold">🍴 Recipe Finder</Link>
      <div className="flex gap-3">
        <Link to="/" className="px-3 py-1 rounded hover:bg-red-700">Home</Link>
        <Link to="/dashboard" className="px-3 py-1 rounded hover:bg-red-700">Dashboard</Link>
        <Link to="/add" className="px-3 py-1 rounded hover:bg-red-700">Add Recipe</Link>
        {!user ? (
          <>
            <Link to="/signin" className="px-3 py-1 rounded bg-white text-red-600">Sign In</Link>
            <Link to="/signup" className="px-3 py-1 rounded bg-white text-red-600">Sign Up</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="px-3 py-1 rounded bg-white text-red-600">Sign Out</button>
        )}
      </div>
    </nav>
  );
}