import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./assets/components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Dashboard from "./pages/Dashboard";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  function handleLogin(user) {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  function handleLogout() {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <div className="p-6">
        <Routes>
          <Route
            path="/"
            element={currentUser ? <Home /> : <Navigate to="/signin" />}
          />
          <Route
            path="/recipe/:id"
            element={currentUser ? <RecipeDetails /> : <Navigate to="/signin" />}
          />
          <Route
            path="/dashboard"
            element={
              currentUser ? (
                <Dashboard currentUser={currentUser} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="/signin"
            element={<SignIn onLogin={handleLogin} />}
          />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
